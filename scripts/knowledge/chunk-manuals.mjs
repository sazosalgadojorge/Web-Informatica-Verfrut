import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.resolve(__dirname, '../..')
const defaultExtractedIndex = path.join(repoRoot, 'knowledge/manuales/extracted/index.json')
const defaultOutFile = path.join(repoRoot, 'knowledge/manuales/chunks.json')

const DEFAULT_WORDS_PER_CHUNK = 800
const DEFAULT_OVERLAP_WORDS = 120

function usage() {
  console.log(`
Uso:
  node scripts/knowledge/chunk-manuals.mjs [extracted-index] [salida-json]

Ejemplo:
  npm run manuals:chunk

Entradas/salidas por defecto:
  Entrada: knowledge/manuales/extracted/index.json
  Salida:  knowledge/manuales/chunks.json
`)
}

function cleanText(text) {
  return String(text || '')
    .replace(/\r/g, '\n')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

function getWords(text) {
  return cleanText(text).split(/\s+/).filter(Boolean)
}

function chunkWords(words, wordsPerChunk, overlapWords) {
  const chunks = []
  let start = 0

  while (start < words.length) {
    const end = Math.min(start + wordsPerChunk, words.length)
    chunks.push({
      startWord: start,
      endWord: end,
      text: words.slice(start, end).join(' '),
    })

    if (end === words.length) break
    start = Math.max(end - overlapWords, start + 1)
  }

  return chunks
}

async function main() {
  const extractedIndexFile = process.argv[2] ? path.resolve(process.argv[2]) : defaultExtractedIndex
  const outFile = process.argv[3] ? path.resolve(process.argv[3]) : defaultOutFile

  if (process.argv.includes('--help') || process.argv.includes('-h')) {
    usage()
    process.exit(0)
  }

  const wordsPerChunk = Number(process.env.MANUAL_CHUNK_WORDS || DEFAULT_WORDS_PER_CHUNK)
  const overlapWords = Number(process.env.MANUAL_CHUNK_OVERLAP || DEFAULT_OVERLAP_WORDS)

  const extractedIndex = JSON.parse(await readFile(extractedIndexFile, 'utf8'))
  const chunks = []
  const skipped = []

  for (const item of extractedIndex.extracted) {
    if (item.status !== 'extracted') {
      skipped.push({
        id: item.id,
        reason: item.warnings?.join('; ') || 'No text extracted',
      })
      continue
    }

    const extractedFile = path.resolve(repoRoot, item.outputFile)
    const extractedDoc = JSON.parse(await readFile(extractedFile, 'utf8'))
    const words = getWords(extractedDoc.text)

    if (words.length === 0) {
      skipped.push({ id: item.id, reason: 'Empty extracted text' })
      continue
    }

    const docChunks = chunkWords(words, wordsPerChunk, overlapWords)

    for (const [index, chunk] of docChunks.entries()) {
      chunks.push({
        id: `${item.id}-chunk-${String(index + 1).padStart(4, '0')}`,
        documentId: item.id,
        chunkIndex: index + 1,
        title: extractedDoc.title,
        system: extractedDoc.system,
        module: extractedDoc.module,
        sourceFolder: extractedDoc.sourceFolder,
        sourcePath: extractedDoc.sourcePath,
        relativePath: extractedDoc.relativePath,
        extension: extractedDoc.extension,
        status: extractedDoc.status,
        extractionMethod: extractedDoc.extraction?.method,
        startWord: chunk.startWord,
        endWord: chunk.endWord,
        wordCount: chunk.endWord - chunk.startWord,
        text: chunk.text,
      })
    }
  }

  const payload = {
    generatedAt: new Date().toISOString(),
    extractedIndexFile,
    wordsPerChunk,
    overlapWords,
    totalChunks: chunks.length,
    skipped,
    chunks,
  }

  await mkdir(path.dirname(outFile), { recursive: true })
  await writeFile(outFile, `${JSON.stringify(payload, null, 2)}\n`, 'utf8')

  console.log(`Chunks creados: ${outFile}`)
  console.log(`Total chunks: ${chunks.length}`)
  console.log(`Documentos skipped: ${skipped.length}`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
