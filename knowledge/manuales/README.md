# Manuales ERP

Esta carpeta concentra el flujo para transformar manuales existentes en una base de conocimiento corregible.

## 1. Crear inventario masivo

Ejecutar el script apuntando a la carpeta real donde están los manuales:

```bash
npm run manuals:inventory -- "/Users/desarrolloverfrut/Desktop/Manuales"
```

El script recorre subcarpetas y genera:

```text
knowledge/manuales/inventory.json
```

Cada archivo queda con metadata inicial:

- `title`
- `sourcePath`
- `relativePath`
- `sourceFolder`
- `system`
- `module`
- `extension`
- `sizeBytes`
- `modifiedAt`
- `status`

La carpeta de primer nivel se usa como `module` inicial. Por ejemplo:

```text
Tesoreria/Pago Proveedores.pdf
```

queda como:

```json
{
  "module": "Tesoreria",
  "status": "pendiente_revision"
}
```

## 2. Extracción de texto

Ejecutar:

```bash
npm run manuals:extract
```

Lee `inventory.json` y extrae texto hacia archivos JSON individuales.

Salida esperada:

```text
knowledge/manuales/extracted/
```

Soporte inicial:

- `doc` y `docx`: usa `textutil` de macOS
- `pdf`: intenta `pdftotext`; si no existe, intenta `mdls`/Spotlight
- `txt`, `md`, `html`: lectura directa
- `pptx`, `xls`, `xlsx`: quedan marcados como `skipped` hasta agregar extractor dedicado

## 3. Extracción de imágenes

Ejecutar:

```bash
npm run manuals:images
```

Extrae imágenes asociadas a los documentos hacia:

```text
public/manuales-assets/
```

Soporte inicial:

- `docx`, `pptx`, `xlsx`: extrae imágenes internas desde la carpeta `media`
- `pdf`: requiere Poppler (`pdfimages`). En macOS:

```bash
brew install poppler
```

Este paso solo extrae imágenes. Si el texto importante está dentro de capturas de pantalla o documentos escaneados, falta una etapa OCR posterior.

Después de extraer imágenes, regenerar el índice visible en el front:

```bash
npm run manuals:build-index
```

### Asociar imágenes a procedimientos

Una vez que ya existen procedimientos en `src/search/manualIndex.js`, se puede hacer una pasada visual para asociar capturas a pasos concretos:

```bash
MANUAL_IMAGE_CLASSIFY_LIMIT=3 MANUAL_IMAGE_CLASSIFY_OFFSET=0 npm run manuals:classify-images
npm run manuals:build-index
```

Salida esperada:

```text
knowledge/manuales/image-matches.generated.json
```

Reglas del clasificador visual:

- no asocia logos, iconos ni pantallas genéricas
- solo marca una imagen como `directa` si muestra pantalla, campo, botón, menú o resultado relacionado con los pasos
- si la imagen solo aporta contexto, queda como `contextual`
- las imágenes asociadas se muestran en el front bajo el paso correspondiente

Variables útiles:

```bash
OPENAI_IMAGE_MODEL=gpt-5.5
MANUAL_IMAGE_CLASSIFY_LIMIT=3
MANUAL_IMAGE_CLASSIFY_OFFSET=0
MANUAL_IMAGE_CLASSIFY_MAX_IMAGES=8
MANUAL_IMAGE_CLASSIFY_REPROCESS=0
```

## 4. Fragmentación

Ejecutar:

```bash
npm run manuals:chunk
```

Divide textos largos en fragmentos con referencia al archivo original.

Salida esperada:

```text
knowledge/manuales/chunks.json
```

Configuración opcional:

```bash
MANUAL_CHUNK_WORDS=700 MANUAL_CHUNK_OVERLAP=100 npm run manuals:chunk
```

## 5. Clasificación con IA

Primero configurar `.env` en la raiz del proyecto:

```bash
OPENAI_API_KEY=pega_tu_api_key_aqui
OPENAI_MODEL=gpt-5.5
MANUAL_CLASSIFY_LIMIT=5
MANUAL_CLASSIFY_OFFSET=0
MANUAL_CLASSIFY_MAX_CHARS=12000
MANUAL_CLASSIFY_REPROCESS=0
```

Ejecutar primero una muestra chica:

```bash
npm run manuals:classify
```

Si el resultado se ve bien, ejecutar por tandas:

```bash
MANUAL_CLASSIFY_LIMIT=25 MANUAL_CLASSIFY_OFFSET=0 npm run manuals:classify
MANUAL_CLASSIFY_LIMIT=25 MANUAL_CLASSIFY_OFFSET=25 npm run manuals:classify
MANUAL_CLASSIFY_LIMIT=25 MANUAL_CLASSIFY_OFFSET=50 npm run manuals:classify
```

Para volver a clasificar una tanda ya procesada con reglas nuevas:

```bash
MANUAL_CLASSIFY_REPROCESS=1 MANUAL_CLASSIFY_LIMIT=25 MANUAL_CLASSIFY_OFFSET=0 npm run manuals:classify
```

El reproceso solo reemplaza un chunk si la llamada a IA termina correctamente. Si falla la red o la API, conserva la clasificación anterior.

El script manda cada fragmento a la API de OpenAI usando Structured Outputs y genera procedimientos preliminares.

Salida esperada:

```text
knowledge/manuales/procedures.generated.json
```

Todo procedimiento generado por IA debe partir como:

```json
{
  "status": "pendiente_revision"
}
```

Variables utiles:

```bash
OPENAI_MODEL=gpt-5.5
MANUAL_CLASSIFY_LIMIT=10
MANUAL_CLASSIFY_OFFSET=0
MANUAL_CLASSIFY_MAX_CHARS=12000
MANUAL_CLASSIFY_REPROCESS=0
```

## Estado actual de la base

Ultima corrida conocida:

- documentos inventariados: 93
- documentos con texto extraido: 66
- chunks generados: 223
- documentos omitidos durante fragmentacion: 33

Pendientes principales:

- 14 PDF sin texto extraido
- 5 PPTX sin extractor
- 2 XLSX sin extractor
- 1 XLS sin extractor
- algunos DOCX quedaron sin texto util y deben revisarse
- imagenes extraibles desde DOCX/PPTX/XLSX/PDF para apoyar la revision visual

## Regla principal

La IA ayuda a estructurar, pero no reemplaza la revisión. Siempre se debe conservar la fuente original del manual.
