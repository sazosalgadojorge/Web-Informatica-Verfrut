import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.resolve(__dirname, '../..')
const defaultChunksFile = path.join(repoRoot, 'knowledge/manuales/chunks.json')
const defaultOutFile = path.join(repoRoot, 'knowledge/manuales/procedures.generated.json')

const DEFAULT_MODEL = process.env.OPENAI_MODEL || 'gpt-5.5'
const DEFAULT_MAX_CHARS = Number(process.env.MANUAL_CLASSIFY_MAX_CHARS || 12000)
const DEFAULT_LIMIT = Number(process.env.MANUAL_CLASSIFY_LIMIT || 0)
const DEFAULT_OFFSET = Number(process.env.MANUAL_CLASSIFY_OFFSET || 0)
const SHOULD_REPROCESS = process.env.MANUAL_CLASSIFY_REPROCESS === '1'

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

function usage() {
  console.log(`
Uso:
  npm run manuals:classify

Antes configura .env:
  OPENAI_API_KEY=...

Opciones por variable de entorno:
  OPENAI_MODEL=gpt-5.5
  MANUAL_CLASSIFY_LIMIT=10
  MANUAL_CLASSIFY_OFFSET=0
  MANUAL_CLASSIFY_MAX_CHARS=12000
  MANUAL_CLASSIFY_REPROCESS=1

Archivos por defecto:
  Entrada: knowledge/manuales/chunks.json
  Salida:  knowledge/manuales/procedures.generated.json

Modo recomendado para primera prueba:
  MANUAL_CLASSIFY_LIMIT=5 npm run manuals:classify
`)
}

const procedureSchema = {
  type: 'object',
  additionalProperties: false,
  properties: {
    chunkId: { type: 'string' },
    documentId: { type: 'string' },
    hasUsefulProcedure: { type: 'boolean' },
    module: { type: 'string' },
    source: {
      type: 'object',
      additionalProperties: false,
      properties: {
        title: { type: 'string' },
        relativePath: { type: 'string' },
        sourceFolder: { type: 'string' },
        extension: { type: 'string' },
      },
      required: ['title', 'relativePath', 'sourceFolder', 'extension'],
    },
    procedures: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        properties: {
          title: { type: 'string' },
          summary: { type: 'string' },
          system: { type: 'string' },
          module: { type: 'string' },
          tags: {
            type: 'array',
            items: { type: 'string' },
          },
          steps: {
            type: 'array',
            items: { type: 'string' },
          },
          status: {
            type: 'string',
            enum: ['pendiente_revision'],
          },
          confidence: {
            type: 'string',
            enum: ['baja', 'media', 'alta'],
          },
          warnings: {
            type: 'array',
            items: { type: 'string' },
          },
        },
        required: [
          'title',
          'summary',
          'system',
          'module',
          'tags',
          'steps',
          'status',
          'confidence',
          'warnings',
        ],
      },
    },
    keywords: {
      type: 'array',
      items: { type: 'string' },
    },
    notes: { type: 'string' },
  },
  required: [
    'chunkId',
    'documentId',
    'hasUsefulProcedure',
    'module',
    'source',
    'procedures',
    'keywords',
    'notes',
  ],
}

function buildPrompt(chunk) {
  const text = String(chunk.text || '').slice(0, DEFAULT_MAX_CHARS)

  return [
    'Analiza este fragmento de un manual ERP interno.',
    '',
    'Objetivo:',
    '- Extraer procedimientos utiles para una base de conocimiento corregible y revisable.',
    '- Clasificar de forma conservadora: es preferible devolver pocos procedimientos buenos que muchos incompletos.',
    '',
    'Reglas estrictas de extraccion:',
    '- No inventar pasos, pantallas, botones, permisos ni resultados.',
    '- No convertir notas, conceptos, cambios tecnicos, listas de campos o requisitos en procedimientos si no hay una accion operativa clara.',
    '- No crear un procedimiento por cada mini-seccion. Si varias secciones pertenecen al mismo flujo del usuario, fusionarlas en un solo procedimiento.',
    '- Un procedimiento debe representar una tarea completa que un usuario pueda buscar, por ejemplo "Registrar hallazgo" o "Instalar sistema Casino Offline".',
    '- Evitar procedimientos con menos de 4 pasos accionables, salvo que el fragmento contenga un flujo muy claro y completo.',
    '- Si faltan pantallas, ruta, botones o el orden operativo, devolver el procedimiento solo si sigue siendo util y marcar confidence "baja".',
    '- Si el fragmento mezcla demasiados temas sin suficiente detalle, extraer solo los procedimientos principales y dejar el resto en notes.',
    '- Maximo 5 procedimientos por chunk. Si hay mas candidatos, priorizar los mas completos, buscables y accionables.',
    '- Los titulos deben empezar con verbo en infinitivo y nombrar el objeto del flujo.',
    '- Los pasos deben mantener el orden del texto fuente.',
    '- Todo procedimiento debe quedar con status "pendiente_revision".',
    '- Responder solo con el JSON que calza con el schema.',
    '',
    'Criterios de confianza:',
    '- alta: contiene ruta/pantalla, acciones claras, orden completo y resultado verificable.',
    '- media: contiene flujo accionable, pero faltan algunos nombres exactos o validaciones.',
    '- baja: texto incompleto, depende de imagenes no leidas, faltan pantallas/rutas, o el flujo fue reconstruido parcialmente.',
    '',
    'Metadata del fragmento:',
    JSON.stringify(
      {
        chunkId: chunk.id,
        documentId: chunk.documentId,
        title: chunk.title,
        module: chunk.module,
        sourceFolder: chunk.sourceFolder,
        relativePath: chunk.relativePath,
        extension: chunk.extension,
      },
      null,
      2,
    ),
    '',
    'Texto del fragmento:',
    text,
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

async function callOpenAI(chunk, apiKey, model) {
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
            'Eres un analista senior de documentacion ERP. Tu salida debe ser JSON valido, conservadora, trazable a la fuente y sin sobrefragmentar procedimientos.',
        },
        {
          role: 'user',
          content: buildPrompt(chunk),
        },
      ],
      text: {
        format: {
          type: 'json_schema',
          name: 'manual_chunk_analysis',
          strict: true,
          schema: procedureSchema,
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

  return JSON.parse(outputText)
}

async function readExisting(outFile) {
  try {
    return JSON.parse(await readFile(outFile, 'utf8'))
  } catch {
    return {
      generatedAt: null,
      model: null,
      sourceChunksFile: null,
      analyses: [],
      errors: [],
    }
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

  const chunksFile = process.argv[2] ? path.resolve(process.argv[2]) : defaultChunksFile
  const outFile = process.argv[3] ? path.resolve(process.argv[3]) : defaultOutFile
  const model = DEFAULT_MODEL

  const chunksPayload = JSON.parse(await readFile(chunksFile, 'utf8'))
  const allChunks = chunksPayload.chunks || []
  const selectedChunks = allChunks.slice(
    DEFAULT_OFFSET,
    DEFAULT_LIMIT > 0 ? DEFAULT_OFFSET + DEFAULT_LIMIT : undefined,
  )

  const existing = await readExisting(outFile)
  const done = new Set((existing.analyses || []).map((item) => item.chunkId))

  const output = {
    generatedAt: new Date().toISOString(),
    model,
    sourceChunksFile: chunksFile,
    totalChunksAvailable: allChunks.length,
    offset: DEFAULT_OFFSET,
    limit: DEFAULT_LIMIT,
    analyses: existing.analyses || [],
    errors: existing.errors || [],
  }

  await mkdir(path.dirname(outFile), { recursive: true })

  for (const [index, chunk] of selectedChunks.entries()) {
    if (!SHOULD_REPROCESS && done.has(chunk.id)) {
      console.log(`[${index + 1}/${selectedChunks.length}] ${chunk.id} skipped (already classified)`)
      continue
    }

    process.stdout.write(`[${index + 1}/${selectedChunks.length}] ${chunk.id} ... `)

    try {
      const analysis = await callOpenAI(chunk, apiKey, model)
      output.errors = output.errors.filter((item) => item.chunkId !== chunk.id)
      output.analyses = output.analyses.filter((item) => item.chunkId !== chunk.id)
      output.analyses.push({
        ...analysis,
        chunkId: chunk.id,
        documentId: chunk.documentId,
      })
      done.add(chunk.id)
      console.log(`ok (${analysis.procedures.length} procedures)`)
    } catch (error) {
      output.errors = output.errors.filter((item) => item.chunkId !== chunk.id)
      output.errors.push({
        chunkId: chunk.id,
        documentId: chunk.documentId,
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

  const procedureCount = output.analyses.reduce((count, item) => count + (item.procedures?.length || 0), 0)
  console.log(`\nClasificacion guardada: ${outFile}`)
  console.log(`Chunks analizados: ${output.analyses.length}`)
  console.log(`Procedimientos generados: ${procedureCount}`)
  console.log(`Errores: ${output.errors.length}`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
