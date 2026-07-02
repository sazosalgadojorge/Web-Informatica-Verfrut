import { mkdir, readFile, readdir, rm, stat, writeFile } from 'node:fs/promises'
import { spawn } from 'node:child_process'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.resolve(__dirname, '../..')
const defaultInventory = path.join(repoRoot, 'knowledge/manuales/inventory.json')
const defaultOutDir = path.join(repoRoot, 'public/manuales-assets')

const OFFICE_MEDIA_PREFIXES = {
  docx: 'word/media/',
  pptx: 'ppt/media/',
  xlsx: 'xl/media/',
}

const BROWSER_IMAGE_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg'])
const PDF_EXTENSIONS = new Set(['pdf'])

function usage() {
  console.log(`
Uso:
  node scripts/knowledge/extract-manual-images.mjs [inventory-json] [salida-dir-public]

Ejemplo:
  npm run manuals:images

Entradas/salidas por defecto:
  Entrada: knowledge/manuales/inventory.json
  Salida:  public/manuales-assets/

Notas:
  - DOCX/PPTX/XLSX se leen como archivos Office comprimidos y se extrae la carpeta media.
  - PDF requiere pdfimages/poppler instalado para extraer imagenes.
  - El texto dentro de una imagen requiere OCR; este script solo extrae los archivos visuales.
`)
}

function runCommand(command, args, { timeoutMs = 90000, encoding = 'utf8' } = {}) {
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
        stdout: encoding ? '' : Buffer.alloc(0),
        stderr: error.message,
        timedOut,
      })
    })

    child.on('close', (code) => {
      clearTimeout(timer)
      const stdoutBuffer = Buffer.concat(stdout)
      resolve({
        ok: code === 0 && !timedOut,
        code,
        stdout: encoding ? stdoutBuffer.toString(encoding) : stdoutBuffer,
        stderr: Buffer.concat(stderr).toString('utf8'),
        timedOut,
      })
    })
  })
}

async function commandExists(command) {
  const result = await runCommand('/usr/bin/which', [command])
  return result.ok && Boolean(String(result.stdout || '').trim())
}

function safeFileName(value) {
  return String(value || 'image')
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
    .replace(/[^a-z0-9._-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

async function getImageDimensions(filePath) {
  const result = await runCommand('sips', ['-g', 'pixelWidth', '-g', 'pixelHeight', filePath], {
    timeoutMs: 15000,
  })

  if (!result.ok) return {}

  const width = Number(String(result.stdout).match(/pixelWidth:\s*(\d+)/)?.[1])
  const height = Number(String(result.stdout).match(/pixelHeight:\s*(\d+)/)?.[1])

  return {
    ...(Number.isFinite(width) ? { width } : {}),
    ...(Number.isFinite(height) ? { height } : {}),
  }
}

function toPublicPath(outDir, filePath) {
  const relativeToPublic = path.relative(path.join(repoRoot, 'public'), filePath)
  if (!relativeToPublic.startsWith('..')) {
    return relativeToPublic.split(path.sep).join('/')
  }

  return path.relative(outDir, filePath).split(path.sep).join('/')
}

async function createImageRecord({ file, outDir, outFile, sourceEntry, index }) {
  const info = await stat(outFile)
  const dimensions = await getImageDimensions(outFile)

  return {
    id: `${file.id}-image-${String(index + 1).padStart(4, '0')}`,
    fileName: path.basename(outFile),
    publicPath: toPublicPath(outDir, outFile),
    sourceEntry,
    extension: path.extname(outFile).slice(1).toLowerCase(),
    sizeBytes: info.size,
    ...dimensions,
  }
}

async function listZipEntries(filePath) {
  const result = await runCommand('unzip', ['-Z1', filePath])
  if (!result.ok) {
    return {
      entries: [],
      warning: `unzip failed: ${result.stderr || `exit ${result.code}`}`,
    }
  }

  return {
    entries: String(result.stdout).split('\n').map((entry) => entry.trim()).filter(Boolean),
    warning: '',
  }
}

async function extractOfficeImages(file, docOutDir, outDir) {
  const mediaPrefix = OFFICE_MEDIA_PREFIXES[file.extension]
  if (!mediaPrefix) {
    return {
      images: [],
      warnings: [`Extractor de imagenes pendiente para .${file.extension}`],
      method: 'unsupported',
    }
  }

  const { entries, warning } = await listZipEntries(file.sourcePath)
  const warnings = warning ? [warning] : []
  const mediaEntries = entries.filter((entry) => {
    const ext = path.extname(entry).toLowerCase()
    return entry.startsWith(mediaPrefix) && BROWSER_IMAGE_EXTENSIONS.has(ext)
  })

  const images = []

  for (const [index, entry] of mediaEntries.entries()) {
    const ext = path.extname(entry).toLowerCase()
    const originalName = safeFileName(path.basename(entry, ext))
    const outFile = path.join(docOutDir, `${String(index + 1).padStart(4, '0')}-${originalName}${ext}`)
    const result = await runCommand('unzip', ['-p', file.sourcePath, entry], {
      encoding: null,
      timeoutMs: 90000,
    })

    if (!result.ok || result.stdout.length === 0) {
      warnings.push(`No se pudo extraer ${entry}: ${result.stderr || `exit ${result.code}`}`)
      continue
    }

    await writeFile(outFile, result.stdout)
    images.push(await createImageRecord({ file, outDir, outFile, sourceEntry: entry, index }))
  }

  return {
    images,
    warnings,
    method: 'office-media',
  }
}

async function extractPdfImages(file, docOutDir, outDir) {
  const hasPdfImages = await commandExists('pdfimages')
  if (!hasPdfImages) {
    return {
      images: [],
      warnings: ['PDF requiere pdfimages/poppler para extraer imagenes. Instalar con: brew install poppler'],
      method: 'pdfimages-unavailable',
    }
  }

  const prefix = path.join(docOutDir, 'pdf-image')
  const result = await runCommand('pdfimages', ['-png', file.sourcePath, prefix], {
    timeoutMs: 120000,
  })

  if (!result.ok) {
    return {
      images: [],
      warnings: [`pdfimages failed: ${result.stderr || `exit ${result.code}`}`],
      method: 'pdfimages',
    }
  }

  const files = (await readdir(docOutDir))
    .filter((name) => name.startsWith('pdf-image') && BROWSER_IMAGE_EXTENSIONS.has(path.extname(name).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, 'es'))

  const images = []
  for (const [index, name] of files.entries()) {
    const outFile = path.join(docOutDir, name)
    images.push(await createImageRecord({ file, outDir, outFile, sourceEntry: name, index }))
  }

  return {
    images,
    warnings: [],
    method: 'pdfimages',
  }
}

async function extractImages(file, docOutDir, outDir) {
  if (OFFICE_MEDIA_PREFIXES[file.extension]) {
    return extractOfficeImages(file, docOutDir, outDir)
  }

  if (PDF_EXTENSIONS.has(file.extension)) {
    return extractPdfImages(file, docOutDir, outDir)
  }

  return {
    images: [],
    warnings: [`Extractor de imagenes pendiente para .${file.extension}`],
    method: 'unsupported',
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
    totalImages: 0,
    documents: [],
  }

  for (const [i, file] of inventory.files.entries()) {
    process.stdout.write(`[${i + 1}/${inventory.files.length}] ${file.relativePath} ... `)

    const docOutDir = path.join(outDir, file.id)
    await rm(docOutDir, { recursive: true, force: true })
    await mkdir(docOutDir, { recursive: true })

    const extraction = await extractImages(file, docOutDir, outDir)
    index.totalImages += extraction.images.length
    index.documents.push({
      documentId: file.id,
      title: file.title,
      relativePath: file.relativePath,
      module: file.module,
      extension: file.extension,
      method: extraction.method,
      imageCount: extraction.images.length,
      warnings: extraction.warnings,
      images: extraction.images,
    })

    console.log(`${extraction.images.length} imagen(es) (${extraction.method})`)
  }

  const indexFile = path.join(outDir, 'index.json')
  await writeFile(indexFile, `${JSON.stringify(index, null, 2)}\n`, 'utf8')

  console.log(`\nImagenes extraidas: ${indexFile}`)
  console.log(`Total imagenes: ${index.totalImages}`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
