# Plan: Base de conocimiento ERP para buscador global

## Objetivo

Crear una base inicial de conocimiento a partir de manuales ERP existentes, aunque estén desactualizados o desordenados, para que los usuarios puedan buscar procedimientos desde la web con `Cmd/Ctrl + K`.

La primera meta no es tener contenido perfecto. La meta es transformar los manuales actuales en una base navegable, trazable y corregible.

## Resultado esperado

- El buscador global mantiene primero los accesos de navegación: sistemas, menús, contraseña, turnos, soporte, etc.
- Luego muestra resultados de manuales ERP por procedimiento o tema.
- Cada resultado indica fuente original, sistema, módulo y estado de revisión.
- El equipo TI puede corregir y mejorar la información progresivamente.

## Enfoque

No se deben cargar PDFs completos directamente al frontend ni esperar que un modelo los memorice.

El flujo recomendado es:

```text
manuales originales
  -> extracción de texto
  -> división en fragmentos
  -> clasificación con IA
  -> generación de procedimientos
  -> revisión/corrección humana
  -> publicación en buscador web
```

## Fases

### Fase 1: Inventario de manuales

Crear una carpeta controlada para manuales fuente, por ejemplo:

```text
knowledge/manuales/originales/
```

Registrar por cada archivo:

- nombre del archivo
- sistema
- módulo si se conoce
- país o empresa si aplica
- fecha del documento si existe
- estado inicial: `pendiente`, `vigente`, `desactualizado`, `dudoso`
- observaciones

Salida esperada:

```text
knowledge/manuales/inventory.json
```

### Fase 2: Extracción de texto

Crear un script que procese manuales en formatos comunes:

- PDF
- DOCX
- XLSX si aplica
- HTML o TXT si existen

Para PDFs escaneados se requiere OCR.

Salida esperada:

```text
knowledge/manuales/extracted/
```

Cada documento extraído debería conservar referencia al archivo original y, si es posible, número de página.

### Fase 3: Fragmentación

Dividir el texto en bloques útiles, no en archivos completos.

Cada fragmento debería representar una sección, tema o procedimiento parcial.

Tamaño sugerido:

- 500 a 1200 palabras por fragmento
- conservar título/sección si existe
- conservar página de origen

Salida esperada:

```text
knowledge/manuales/chunks.json
```

### Fase 4: Clasificación con IA

Usar IA para analizar cada fragmento y generar metadata.

Campos sugeridos:

```json
{
  "id": "erp-compras-crear-oc-001",
  "title": "Crear orden de compra",
  "summary": "Procedimiento para registrar una nueva orden de compra en el ERP.",
  "system": "ERP",
  "module": "Compras",
  "country": "CL",
  "tags": ["orden de compra", "oc", "compras", "proveedor"],
  "status": "pendiente_revision",
  "confidence": "media",
  "sourceFile": "Manual_Compras_ERP.pdf",
  "sourcePage": 14
}
```

Estados recomendados:

- `pendiente_revision`
- `revisado`
- `vigente`
- `desactualizado`
- `dudoso`

### Fase 5: Generación de procedimientos

Con los fragmentos relacionados, generar fichas de procedimiento.

Formato sugerido:

```json
{
  "id": "crear-orden-compra",
  "title": "Crear orden de compra",
  "system": "ERP",
  "module": "Compras",
  "summary": "Guía para crear una orden de compra en el ERP.",
  "steps": [
    "Ingresar al módulo de Compras.",
    "Seleccionar la opción de orden de compra.",
    "Completar proveedor, centro de costo y detalle.",
    "Guardar y enviar a aprobación."
  ],
  "tags": ["compras", "oc", "orden de compra"],
  "status": "pendiente_revision",
  "sources": [
    {
      "file": "Manual_Compras_ERP.pdf",
      "page": 14
    }
  ]
}
```

Importante: la IA puede proponer procedimientos, pero siempre deben quedar marcados como `pendiente_revision` hasta que alguien los valide.

### Fase 6: Integración con buscador global

Agregar un nuevo tipo al buscador:

```js
manual: 'Manuales ERP'
```

Orden recomendado:

```js
['enlace', 'manual', 'guia', 'faq', 'blog', 'glosario', 'video']
```

El buscador debe mostrar:

- título del procedimiento
- resumen breve
- sistema y módulo
- estado de revisión
- fuente original
- link a ficha interna o al manual original

### Fase 7: Página de detalle

Crear una ruta interna para ver el procedimiento:

```text
/manuales/:slug
```

Contenido sugerido:

- título
- sistema
- módulo
- estado
- resumen
- pasos
- advertencia si está pendiente o desactualizado
- fuentes originales
- fecha de última revisión

### Fase 8: Corrección progresiva

Al inicio, la edición puede hacerse directamente en archivos JSON.

Después se puede crear una interfaz interna para:

- cambiar estado
- corregir título
- corregir pasos
- agregar tags
- marcar contenido como obsoleto
- fusionar procedimientos duplicados

## Estructura de archivos sugerida

```text
knowledge/
  manuales/
    originales/
    extracted/
    inventory.json
    chunks.json
    procedures.generated.json
    procedures.reviewed.json

scripts/
  knowledge/
    create-manual-inventory.mjs
    extract-manuals.mjs
    chunk-manuals.mjs
    classify-manuals.mjs
    build-manual-index.mjs

src/
  search/
    manualIndex.js
```

## Reglas de calidad

- Nunca perder la referencia al archivo original.
- No publicar como vigente algo generado solo por IA.
- Priorizar resultados revisados por sobre pendientes.
- Bajar prioridad a documentos desactualizados.
- Permitir buscar por lenguaje natural y por términos exactos del ERP.
- Mantener navegación y sistemas por encima de resultados documentales.

## Primera implementación recomendada

1. Crear carpeta `knowledge/manuales/originales`.
2. Ejecutar inventario masivo desde la carpeta real de manuales:

```bash
npm run manuals:inventory -- "/Users/desarrolloverfrut/Desktop/Manuales"
```

3. Revisar `knowledge/manuales/inventory.json`.
4. Extraer texto:

```bash
npm run manuals:extract
```

5. Generar fragmentos:

```bash
npm run manuals:chunk
```

6. Crear con IA un primer `procedures.generated.json` usando una muestra chica:

```bash
MANUAL_CLASSIFY_LIMIT=5 OPENAI_API_KEY=... npm run manuals:classify
```

7. Integrar esos procedimientos al buscador global.
8. Revisar los resultados más usados.
9. Repetir con el resto de manuales.

## Inventario inicial observado

La carpeta actual de manuales ya parece venir separada por sistemas o módulos. Esa estructura debe aprovecharse como metadata inicial, porque ayuda a clasificar sin depender completamente de IA.

Carpetas observadas:

- `Activo Fijo`
- `App Verfrut`
- `Casino OffLine`
- `Contabilidad`
- `Ctas Ctes`
- `Documentos Electrónicos`
- `Estimaciones`
- `Etiquetado El Nevado`
- `Frio Packing`
- `help`
- `Huella`
- `Manuales`
- `Materiales`
- `Plataforma Facturacion`
- `Remuneraciones`
- `Tesoreria`

Regla sugerida:

- cada carpeta se usa como `module` inicial
- el nombre del archivo se usa como primer candidato a `title`
- la fecha de modificación se guarda como metadata, pero no debe asumirse como fecha real de vigencia del procedimiento
- carpetas genéricas como `help` o `Manuales` deben revisarse manualmente o reclasificarse con IA

Ejemplo de metadata inicial:

```json
{
  "sourceFolder": "Tesoreria",
  "module": "Tesoreria",
  "status": "pendiente_revision"
}
```

## Riesgos

- Manuales desactualizados pueden generar respuestas incorrectas.
- PDFs escaneados pueden requerir OCR y revisión adicional.
- Procedimientos similares pueden aparecer duplicados.
- La IA puede inferir pasos que no están claros en la fuente.

Mitigación:

- usar estados de revisión
- mostrar fuentes
- priorizar contenido revisado
- revisar primero los procedimientos críticos

## Decisión pendiente

Definir si la primera versión será:

- solo buscador con snippets y fichas generadas
- buscador con respuestas IA usando backend
- ambos, pero por etapas

Recomendación: partir con buscador y fichas corregibles. Agregar respuestas IA después, cuando la base esté más limpia.
