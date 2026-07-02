import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { spawn } from 'node:child_process'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.resolve(__dirname, '../..')
const defaultInventory = path.join(repoRoot, 'knowledge/manuales/inventory.json')
const defaultOutDir = path.join(repoRoot, 'knowledge/manuales/extracted')

const DIRECT_TEXT_EXTENSIONS = new Set(['txt', 'md', 'html', 'htm'])
const TEXTUTIL_EXTENSIONS = new Set(['doc', 'docx'])
const PDF_EXTENSIONS = new Set(['pdf'])

function usage() {
  console.log(`
Uso:
  node scripts/knowledge/extract-manuals.mjs [inventory-json] [salida-dir]

Ejemplo:
  npm run manuals:extract

Entradas/salidas por defecto:
  Entrada: knowledge/manuales/inventory.json
  Salida:  knowledge/manuales/extracted/

Notas:
  - DOC/DOCX usa textutil de macOS.
  - PDF intenta usar pdftotext; si no existe, intenta mdls/Spotlight.
  - PPTX/XLS/XLSX quedan marcados como skipped en esta primera version.
`)
}

function stripHtml(text) {
  return String(text || '')
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
}

function cleanText(text) {
  return String(text || '')
    .replace(/\r/g, '\n')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{4,}/g, '\n\n\n')
    .replace(/[ \t]{2,}/g, ' ')
    .trim()
}

function runCommand(command, args, { timeoutMs = 90000 } = {}) {
  return new Promise((resolve) => {
    const child = spawn(command, args, { stdio: ['ignore', 'pipe', 'pipe'] })
    const stdout = []
    const stderr = []
    let timedOut = false

    const timer = setTimeout(() => {
      timedOut = true
      child.kill('SIGTERM')
    }, timeoutMs)

    child.stdout.on('data', (chunk) => stdout.push(chunk))
    child.stderr.on('data', (chunk) => stderr.push(chunk))

    child.on('error', (error) => {
      clearTimeout(timer)
      resolve({
        ok: false,
        code: null,
        stdout: '',
        stderr: error.message,
        timedOut,
      })
    })

    child.on('close', (code) => {
      clearTimeout(timer)
      resolve({
        ok: code === 0 && !timedOut,
        code,
        stdout: Buffer.concat(stdout).toString('utf8'),
        stderr: Buffer.concat(stderr).toString('utf8'),
        timedOut,
      })
    })
  })
}

async function extractDirect(file) {
  const raw = await readFile(file.sourcePath, 'utf8')
  const text = file.extension === 'html' || file.extension === 'htm' ? stripHtml(raw) : raw
  return {
    text: cleanText(text),
    method: 'direct-read',
    warnings: [],
  }
}

async function extractWithTextutil(file) {
  const result = await runCommand('textutil', ['-convert', 'txt', '-stdout', file.sourcePath])
  if (!result.ok) {
    return {
      text: '',
      method: 'textutil',
      warnings: [`textutil failed: ${result.stderr || `exit ${result.code}`}`],
    }
  }

  return {
    text: cleanText(result.stdout),
    method: 'textutil',
    warnings: [],
  }
}

async function extractPdf(file) {
  const pdftotext = await runCommand('pdftotext', ['-layout', file.sourcePath, '-'])
  if (pdftotext.ok && cleanText(pdftotext.stdout)) {
    return {
      text: cleanText(pdftotext.stdout),
      method: 'pdftotext',
      warnings: [],
    }
  }

  const mdls = await runCommand('mdls', ['-raw', '-name', 'kMDItemTextContent', file.sourcePath])
  const mdlsText = cleanText(mdls.stdout)

  if (mdls.ok && mdlsText && mdlsText !== '(null)') {
    return {
      text: mdlsText,
      method: 'mdls',
      warnings: ['PDF extraido desde indice Spotlight; revisar calidad del texto.'],
    }
  }

  return {
    text: '',
    method: 'pdf-unavailable',
    warnings: [
      'No se pudo extraer PDF. Instalar pdftotext/poppler o aplicar OCR si el PDF esta escaneado.',
    ],
  }
}

async function extractFile(file) {
  if (DIRECT_TEXT_EXTENSIONS.has(file.extension)) return extractDirect(file)
  if (TEXTUTIL_EXTENSIONS.has(file.extension)) return extractWithTextutil(file)
  if (PDF_EXTENSIONS.has(file.extension)) return extractPdf(file)

  return {
    text: '',
    method: 'unsupported',
    warnings: [`Extractor pendiente para .${file.extension}`],
  }
}

async function main() {
  const inventoryFile = process.argv[2] ? path.resolve(process.argv[2]) : defaultInventory
  const outDir = process.argv[3] ? path.resolve(process.argv[3]) : defaultOutDir

  if (process.argv.includes('--help') || process.argv.includes('-h')) {
    usage()
    process.exit(0)
  }

  const inventory = JSON.parse(await readFile(inventoryFile, 'utf8'))
  await mkdir(outDir, { recursive: true })

  const index = {
    generatedAt: new Date().toISOString(),
    inventoryFile,
    totalFiles: inventory.files.length,
    extracted: [],
  }

  for (const [i, file] of inventory.files.entries()) {
    process.stdout.write(`[${i + 1}/${inventory.files.length}] ${file.relativePath} ... `)

    const extraction = await extractFile(file)
    const status = extraction.text ? 'extracted' : 'skipped'
    const outFile = path.join(outDir, `${file.id}.json`)

    const payload = {
      ...file,
      extractedAt: new Date().toISOString(),
      extraction: {
        status,
        method: extraction.method,
        warnings: extraction.warnings,
      },
      textLength: extraction.text.length,
      text: extraction.text,
    }

    await writeFile(outFile, `${JSON.stringify(payload, null, 2)}\n`, 'utf8')

    index.extracted.push({
      id: file.id,
      relativePath: file.relativePath,
      module: file.module,
      extension: file.extension,
      status,
      method: extraction.method,
      textLength: extraction.text.length,
      warnings: extraction.warnings,
      outputFile: path.relative(repoRoot, outFile),
    })

    console.log(`${status} (${extraction.method}, ${extraction.text.length} chars)`)
  }

  const indexFile = path.join(outDir, 'index.json')
  await writeFile(indexFile, `${JSON.stringify(index, null, 2)}\n`, 'utf8')

  const extractedCount = index.extracted.filter((item) => item.status === 'extracted').length
  console.log(`\nExtraccion finalizada: ${indexFile}`)
  console.log(`Extraidos: ${extractedCount}/${index.totalFiles}`)
  console.log(`Pendientes/skipped: ${index.totalFiles - extractedCount}`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
