import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import sharp from 'sharp'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.resolve(__dirname, '../..')
const defaultManualIndexFile = path.join(repoRoot, 'src/search/manualIndex.js')
const defaultImagesIndexFile = path.join(repoRoot, 'public/manuales-assets/index.json')
const defaultOutFile = path.join(repoRoot, 'knowledge/manuales/image-matches.generated.json')

const DEFAULT_MODEL = process.env.OPENAI_IMAGE_MODEL || process.env.OPENAI_MODEL || 'gpt-5.5'
const DEFAULT_LIMIT = Number(process.env.MANUAL_IMAGE_CLASSIFY_LIMIT || 3)
const DEFAULT_OFFSET = Number(process.env.MANUAL_IMAGE_CLASSIFY_OFFSET || 0)
const DEFAULT_MAX_IMAGES = Number(process.env.MANUAL_IMAGE_CLASSIFY_MAX_IMAGES || 8)
const SHOULD_REPROCESS = process.env.MANUAL_IMAGE_CLASSIFY_REPROCESS === '1'

const SUPPORTED_IMAGE_EXTENSIONS = new Set(['png', 'jpg', 'jpeg', 'webp', 'gif'])

class OpenAIApiError extends Error {
  constructor(message, { status, code, type, body }) {
    super(message)
    this.name = 'OpenAIApiError'
    this.status = status
    this.code = code
    this.type = type
    this.body = body
  }
}

const imageMatchSchema = {
  type: 'object',
  additionalProperties: false,
  properties: {
    procedureId: { type: 'string' },
    slug: { type: 'string' },
    hasUsefulImages: { type: 'boolean' },
    matches: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        properties: {
          imageId: { type: 'string' },
          publicPath: { type: 'string' },
          relevance: {
            type: 'string',
            enum: ['directa', 'contextual'],
          },
          confidence: {
            type: 'string',
            enum: ['baja', 'media', 'alta'],
          },
          matchedStepIndexes: {
            type: 'array',
            items: { type: 'integer' },
          },
          clickTargets: {
            type: 'array',
            items: {
              type: 'object',
              additionalProperties: false,
              properties: {
                xPercent: { type: 'number' },
                yPercent: { type: 'number' },
                label: { type: 'string' },
                description: { type: 'string' },
              },
              required: ['xPercent', 'yPercent', 'label', 'description'],
            },
          },
          caption: { type: 'string' },
          reason: { type: 'string' },
        },
        required: [
          'imageId',
          'publicPath',
          'relevance',
          'confidence',
          'matchedStepIndexes',
          'clickTargets',
          'caption',
          'reason',
        ],
      },
    },
    warnings: {
      type: 'array',
      items: { type: 'string' },
    },
    notes: { type: 'string' },
  },
  required: ['procedureId', 'slug', 'hasUsefulImages', 'matches', 'warnings', 'notes'],
}

function usage() {
  console.log(`
Uso:
  npm run manuals:classify-images

Antes configura .env:
  OPENAI_API_KEY=...

Opciones por variable de entorno:
  OPENAI_IMAGE_MODEL=gpt-5.5
  MANUAL_IMAGE_CLASSIFY_LIMIT=3
  MANUAL_IMAGE_CLASSIFY_OFFSET=0
  MANUAL_IMAGE_CLASSIFY_MAX_IMAGES=8
  MANUAL_IMAGE_CLASSIFY_REPROCESS=1

Archivos por defecto:
  Procedimientos: src/search/manualIndex.js
  Imagenes:        public/manuales-assets/index.json
  Salida:          knowledge/manuales/image-matches.generated.json
`)
}

async function readExisting(outFile) {
  try {
    return JSON.parse(await readFile(outFile, 'utf8'))
  } catch {
    return {
      generatedAt: null,
      model: null,
      sourceManualIndexFile: null,
      sourceImagesIndexFile: null,
      analyses: [],
      errors: [],
    }
  }
}

function buildImagesByDocument(imagesIndex) {
  const imagesByDocument = new Map()

  for (const document of imagesIndex.documents || []) {
    imagesByDocument.set(document.documentId, document.images || [])
  }

  return imagesByDocument
}

function getImageScore(image) {
  const width = Number(image.width || 0)
  const height = Number(image.height || 0)
  const area = width * height
  const size = Number(image.sizeBytes || 0)

  if (width < 140 || height < 100) return -1
  if (size < 2000) return -1

  return area + size
}

function getCandidateImages(procedure, imagesByDocument) {
  const documentImages = imagesByDocument.get(procedure.source?.documentId) || []

  return documentImages
    .filter((image) => SUPPORTED_IMAGE_EXTENSIONS.has(String(image.extension || '').toLowerCase()))
    .map((image, index) => ({
      ...image,
      originalIndex: index,
      score: getImageScore(image),
    }))
    .filter((image) => image.score >= 0)
    .sort((a, b) => a.originalIndex - b.originalIndex)
    .slice(0, DEFAULT_MAX_IMAGES)
}

async function imageToDataUrl(image) {
  const filePath = path.join(repoRoot, 'public', image.publicPath)
  const buffer = await readFile(filePath)
  const resized = await sharp(buffer, { animated: false })
    .rotate()
    .resize({
      width: 1200,
      height: 1200,
      fit: 'inside',
      withoutEnlargement: true,
    })
    .jpeg({ quality: 76, mozjpeg: true })
    .toBuffer()

  return `data:image/jpeg;base64,${resized.toString('base64')}`
}

function buildPrompt(procedure, candidates) {
  return [
    'Evalua capturas extraidas de un manual ERP y decide si alguna sirve para explicar este procedimiento.',
    '',
    'Reglas estrictas:',
    '- No fuerces asociaciones. Si las imagenes son logos, iconos, pantallas genericas o no se relacionan claramente, devuelve matches vacio.',
    '- Una imagen es "directa" solo si muestra la pantalla, campo, boton, menu o resultado mencionado por los pasos.',
    '- Una imagen es "contextual" si muestra el mismo modulo o pantalla cercana, pero no prueba un paso especifico.',
    '- Prioriza precision sobre cantidad. Maximo 4 imagenes asociadas.',
    '- matchedStepIndexes usa indices de pasos empezando en 1. Si la imagen es contextual y no apunta a un paso claro, usa arreglo vacio.',
    '- clickTargets debe marcar campos, botones o menus concretos donde el usuario debe hacer click o interactuar.',
    '- Usa coordenadas porcentuales aproximadas sobre la imagen: xPercent 0 izquierda a 100 derecha, yPercent 0 arriba a 100 abajo.',
    '- Si no hay un punto de click claro, devuelve clickTargets como arreglo vacio.',
    '- Maximo 6 clickTargets por imagen. Usa labels cortos como "Tipo Activo", "Adquisicion", "Guardar" o "Dinamica Ficha".',
    '- No describas informacion que no se vea en la imagen.',
    '- Responde solo con JSON valido segun el schema.',
    '',
    'Procedimiento:',
    JSON.stringify(
      {
        id: procedure.id,
        slug: procedure.slug,
        title: procedure.title,
        summary: procedure.summary,
        module: procedure.module,
        source: procedure.source,
        steps: (procedure.steps || []).map((step, index) => `${index + 1}. ${step}`),
      },
      null,
      2,
    ),
    '',
    'Imagenes candidatas:',
    JSON.stringify(
      candidates.map((image, index) => ({
        number: index + 1,
        imageId: image.id,
        publicPath: image.publicPath,
        fileName: image.fileName,
        width: image.width,
        height: image.height,
      })),
      null,
      2,
    ),
  ].join('\n')
}

function getOutputText(response) {
  if (typeof response.output_text === 'string') return response.output_text

  const parts = []
  for (const item of response.output || []) {
    for (const content of item.content || []) {
      if (typeof content.text === 'string') parts.push(content.text)
    }
  }

  return parts.join('\n')
}

async function callOpenAI(procedure, candidates, apiKey, model) {
  const content = [
    {
      type: 'input_text',
      text: buildPrompt(procedure, candidates),
    },
  ]

  for (const [index, image] of candidates.entries()) {
    content.push({
      type: 'input_text',
      text: `Imagen ${index + 1}: ${image.id} (${image.publicPath})`,
    })
    content.push({
      type: 'input_image',
      image_url: await imageToDataUrl(image),
    })
  }

  const res = await fetch('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model,
      store: false,
      input: [
        {
          role: 'system',
          content:
            'Eres un analista visual de documentacion ERP. Asociar imagenes a procedimientos solo cuando hay evidencia visual clara.',
        },
        {
          role: 'user',
          content,
        },
      ],
      text: {
        format: {
          type: 'json_schema',
          name: 'manual_image_match_analysis',
          strict: true,
          schema: imageMatchSchema,
        },
      },
    }),
  })

  const body = await res.text()
  if (!res.ok) {
    let parsed = null
    try {
      parsed = JSON.parse(body)
    } catch {
      parsed = null
    }

    const apiError = parsed?.error
    throw new OpenAIApiError(`OpenAI API error ${res.status}: ${apiError?.message || body}`, {
      status: res.status,
      code: apiError?.code,
      type: apiError?.type,
      body,
    })
  }

  const response = JSON.parse(body)
  const outputText = getOutputText(response)

  if (!outputText) {
    throw new Error(`OpenAI response without output text: ${body}`)
  }

  const analysis = JSON.parse(outputText)
  const allowedImageIds = new Set(candidates.map((image) => image.id))

  return {
    ...analysis,
    procedureId: procedure.id,
    slug: procedure.slug,
    matches: (analysis.matches || [])
      .filter((match) => allowedImageIds.has(match.imageId))
      .slice(0, 4),
  }
}

async function main() {
  if (process.argv.includes('--help') || process.argv.includes('-h')) {
    usage()
    process.exit(0)
  }

  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) {
    console.error('Falta OPENAI_API_KEY.')
    usage()
    process.exit(1)
  }

  const manualIndexFile = process.argv[2] ? path.resolve(process.argv[2]) : defaultManualIndexFile
  const imagesIndexFile = process.argv[3] ? path.resolve(process.argv[3]) : defaultImagesIndexFile
  const outFile = process.argv[4] ? path.resolve(process.argv[4]) : defaultOutFile
  const model = DEFAULT_MODEL

  const { MANUAL_PROCEDURES } = await import(`${pathToFileURL(manualIndexFile).href}?t=${Date.now()}`)
  const imagesIndex = JSON.parse(await readFile(imagesIndexFile, 'utf8'))
  const imagesByDocument = buildImagesByDocument(imagesIndex)
  const selectedProcedures = MANUAL_PROCEDURES.slice(
    DEFAULT_OFFSET,
    DEFAULT_LIMIT > 0 ? DEFAULT_OFFSET + DEFAULT_LIMIT : undefined,
  )

  const existing = await readExisting(outFile)
  const done = new Set((existing.analyses || []).map((item) => item.procedureId))

  const output = {
    generatedAt: new Date().toISOString(),
    model,
    sourceManualIndexFile: manualIndexFile,
    sourceImagesIndexFile: imagesIndexFile,
    totalProceduresAvailable: MANUAL_PROCEDURES.length,
    offset: DEFAULT_OFFSET,
    limit: DEFAULT_LIMIT,
    maxImagesPerProcedure: DEFAULT_MAX_IMAGES,
    analyses: existing.analyses || [],
    errors: existing.errors || [],
  }

  await mkdir(path.dirname(outFile), { recursive: true })

  for (const [index, procedure] of selectedProcedures.entries()) {
    if (!SHOULD_REPROCESS && done.has(procedure.id)) {
      console.log(`[${index + 1}/${selectedProcedures.length}] ${procedure.id} skipped (already classified)`)
      continue
    }

    const candidates = getCandidateImages(procedure, imagesByDocument)
    process.stdout.write(`[${index + 1}/${selectedProcedures.length}] ${procedure.id} (${candidates.length} images) ... `)

    if (candidates.length === 0) {
      output.errors = output.errors.filter((item) => item.procedureId !== procedure.id)
      output.analyses = output.analyses.filter((item) => item.procedureId !== procedure.id)
      output.analyses.push({
        procedureId: procedure.id,
        slug: procedure.slug,
        hasUsefulImages: false,
        matches: [],
        warnings: ['No hay imagenes candidatas para este procedimiento.'],
        notes: '',
      })
      console.log('no candidates')
      await writeFile(outFile, `${JSON.stringify(output, null, 2)}\n`, 'utf8')
      continue
    }

    try {
      const analysis = await callOpenAI(procedure, candidates, apiKey, model)
      output.errors = output.errors.filter((item) => item.procedureId !== procedure.id)
      output.analyses = output.analyses.filter((item) => item.procedureId !== procedure.id)
      output.analyses.push(analysis)
      done.add(procedure.id)
      console.log(`ok (${analysis.matches.length} matches)`)
    } catch (error) {
      output.errors = output.errors.filter((item) => item.procedureId !== procedure.id)
      output.errors.push({
        procedureId: procedure.id,
        slug: procedure.slug,
        message: error.message,
        code: error.code,
        type: error.type,
      })
      console.log('error')
      console.error(error.message)

      if (error instanceof OpenAIApiError && error.code === 'insufficient_quota') {
        console.error('La cuenta/proyecto no tiene cuota disponible. Revisa billing/limites antes de reintentar.')
        break
      }
    }

    await writeFile(outFile, `${JSON.stringify(output, null, 2)}\n`, 'utf8')
  }

  const matchCount = output.analyses.reduce((count, item) => count + (item.matches?.length || 0), 0)
  console.log(`\nClasificacion visual guardada: ${outFile}`)
  console.log(`Procedimientos analizados: ${output.analyses.length}`)
  console.log(`Imagenes asociadas: ${matchCount}`)
  console.log(`Errores: ${output.errors.length}`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
