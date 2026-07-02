import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.resolve(__dirname, '../..')
const defaultProceduresFile = path.join(repoRoot, 'knowledge/manuales/procedures.generated.json')
const defaultOutFile = path.join(repoRoot, 'src/search/manualIndex.js')
const defaultImagesIndexFile = path.join(repoRoot, 'public/manuales-assets/index.json')
const defaultImageMatchesFile = path.join(repoRoot, 'knowledge/manuales/image-matches.generated.json')

function usage() {
  console.log(`
Uso:
  npm run manuals:build-index

Entradas/salidas por defecto:
  Entrada: knowledge/manuales/procedures.generated.json
  Salida:  src/search/manualIndex.js
`)
}

function slugify(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function uniqueSlug(base, used) {
  let slug = base || 'manual'
  let candidate = slug
  let index = 2

  while (used.has(candidate)) {
    candidate = `${slug}-${index}`
    index += 1
  }

  used.add(candidate)
  return candidate
}

async function loadImagesByDocument() {
  try {
    const payload = JSON.parse(await readFile(defaultImagesIndexFile, 'utf8'))
    const imagesByDocument = new Map()

    for (const document of payload.documents || []) {
      imagesByDocument.set(document.documentId, document.images || [])
    }

    return imagesByDocument
  } catch {
    return new Map()
  }
}

async function loadImageMatchesByProcedure() {
  try {
    const payload = JSON.parse(await readFile(defaultImageMatchesFile, 'utf8'))
    const matchesByProcedure = new Map()

    for (const analysis of payload.analyses || []) {
      matchesByProcedure.set(analysis.procedureId, analysis.matches || [])
    }

    return matchesByProcedure
  } catch {
    return new Map()
  }
}

function toManualProcedure(analysis, procedure, usedSlugs, imagesByDocument, matchesByProcedure) {
  const source = analysis.source || {}
  const baseSlug = slugify(`${procedure.module}-${procedure.title}`)
  const slug = uniqueSlug(baseSlug, usedSlugs)
  const id = `manual-${slug}`
  const documentId = analysis.documentId
  const documentImages = imagesByDocument.get(documentId) || []
  const matchedImages = matchesByProcedure.get(id) || []

  return {
    id,
    slug,
    title: procedure.title,
    summary: procedure.summary,
    system: procedure.system || 'ERP',
    module: procedure.module || analysis.module || source.sourceFolder || 'Sin clasificar',
    tags: procedure.tags || [],
    steps: procedure.steps || [],
    status: procedure.status || 'pendiente_revision',
    confidence: procedure.confidence || 'baja',
    warnings: procedure.warnings || [],
    source: {
      title: source.title || '',
      relativePath: source.relativePath || '',
      sourceFolder: source.sourceFolder || '',
      extension: source.extension || '',
      chunkId: analysis.chunkId,
      documentId,
      imageCount: documentImages.length,
      matchedImages: matchedImages.map((match) => ({
        id: match.imageId,
        publicPath: match.publicPath,
        relevance: match.relevance,
        confidence: match.confidence,
        matchedStepIndexes: match.matchedStepIndexes || [],
        caption: match.caption,
        reason: match.reason,
        clickTargets: match.clickTargets || [],
      })),
      images: documentImages.slice(0, 8).map((image) => ({
        id: image.id,
        fileName: image.fileName,
        publicPath: image.publicPath,
        width: image.width,
        height: image.height,
      })),
    },
  }
}

async function main() {
  if (process.argv.includes('--help') || process.argv.includes('-h')) {
    usage()
    process.exit(0)
  }

  const proceduresFile = process.argv[2] ? path.resolve(process.argv[2]) : defaultProceduresFile
  const outFile = process.argv[3] ? path.resolve(process.argv[3]) : defaultOutFile

  const payload = JSON.parse(await readFile(proceduresFile, 'utf8'))
  const usedSlugs = new Set()
  const procedures = []
  const imagesByDocument = await loadImagesByDocument()
  const matchesByProcedure = await loadImageMatchesByProcedure()

  for (const analysis of payload.analyses || []) {
    for (const procedure of analysis.procedures || []) {
      procedures.push(toManualProcedure(analysis, procedure, usedSlugs, imagesByDocument, matchesByProcedure))
    }
  }

  procedures.sort((a, b) => {
    const moduleCompare = a.module.localeCompare(b.module, 'es')
    if (moduleCompare !== 0) return moduleCompare
    return a.title.localeCompare(b.title, 'es')
  })

  const source = [
    '// Archivo generado por scripts/knowledge/build-manual-index.mjs',
    '// No editar manualmente: corregir procedures.generated/reviewed y regenerar.',
    `export const MANUAL_PROCEDURES = ${JSON.stringify(procedures, null, 2)}`,
    '',
  ].join('\n')

  await mkdir(path.dirname(outFile), { recursive: true })
  await writeFile(outFile, source, 'utf8')

  console.log(`Indice generado: ${outFile}`)
  console.log(`Procedimientos: ${procedures.length}`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
