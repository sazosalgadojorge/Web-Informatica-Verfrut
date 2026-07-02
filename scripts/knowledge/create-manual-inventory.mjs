import { mkdir, readdir, stat, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const SUPPORTED_EXTENSIONS = new Set([
  '.pdf',
  '.docx',
  '.doc',
  '.xlsx',
  '.xls',
  '.pptx',
  '.ppt',
  '.txt',
  '.md',
  '.html',
  '.htm',
])

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.resolve(__dirname, '../..')
const defaultOut = path.join(repoRoot, 'knowledge/manuales/inventory.json')

function usage() {
  console.log(`
Uso:
  node scripts/knowledge/create-manual-inventory.mjs <carpeta-manuales> [salida-json]

Ejemplo:
  node scripts/knowledge/create-manual-inventory.mjs "/Users/desarrolloverfrut/Desktop/Manuales"

Salida por defecto:
  knowledge/manuales/inventory.json
`)
}

function normalizeSlug(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function titleFromFile(fileName) {
  return path
    .basename(fileName, path.extname(fileName))
    .replace(/[_-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function moduleFromRelativePath(relativePath) {
  const parts = relativePath.split(path.sep).filter(Boolean)
  if (parts.length <= 1) return 'Sin clasificar'
  return parts[0]
}

async function walk(dir, root, out = []) {
  const entries = await readdir(dir, { withFileTypes: true })

  for (const entry of entries) {
    if (entry.name.startsWith('.')) continue
    if (entry.name.startsWith('~$')) continue

    const fullPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      await walk(fullPath, root, out)
      continue
    }

    if (!entry.isFile()) continue

    const ext = path.extname(entry.name).toLowerCase()
    if (!SUPPORTED_EXTENSIONS.has(ext)) continue

    const info = await stat(fullPath)
    const relativePath = path.relative(root, fullPath)
    const sourceFolder = moduleFromRelativePath(relativePath)
    const title = titleFromFile(entry.name)
    const id = normalizeSlug(`${sourceFolder}-${title}`)

    out.push({
      id,
      title,
      sourcePath: fullPath,
      relativePath,
      sourceFolder,
      system: 'ERP',
      module: sourceFolder,
      extension: ext.slice(1),
      sizeBytes: info.size,
      modifiedAt: info.mtime.toISOString(),
      status: 'pendiente_revision',
      notes: '',
    })
  }

  return out
}

async function main() {
  const sourceDir = process.argv[2]
  const outFile = process.argv[3] ? path.resolve(process.argv[3]) : defaultOut

  if (!sourceDir || sourceDir === '--help' || sourceDir === '-h') {
    usage()
    process.exit(sourceDir ? 0 : 1)
  }

  const root = path.resolve(sourceDir)
  const rootInfo = await stat(root).catch(() => null)
  if (!rootInfo?.isDirectory()) {
    console.error(`No existe la carpeta de manuales: ${root}`)
    process.exit(1)
  }

  const files = await walk(root, root)
  files.sort((a, b) => a.relativePath.localeCompare(b.relativePath, 'es'))

  const payload = {
    generatedAt: new Date().toISOString(),
    sourceRoot: root,
    totalFiles: files.length,
    supportedExtensions: Array.from(SUPPORTED_EXTENSIONS).map((ext) => ext.slice(1)),
    files,
  }

  await mkdir(path.dirname(outFile), { recursive: true })
  await writeFile(outFile, `${JSON.stringify(payload, null, 2)}\n`, 'utf8')

  console.log(`Inventario creado: ${outFile}`)
  console.log(`Archivos detectados: ${files.length}`)

  const byModule = new Map()
  for (const file of files) {
    byModule.set(file.module, (byModule.get(file.module) || 0) + 1)
  }

  for (const [module, count] of [...byModule.entries()].sort((a, b) => a[0].localeCompare(b[0], 'es'))) {
    console.log(`- ${module}: ${count}`)
  }
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
