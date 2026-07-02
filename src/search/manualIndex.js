// Archivo generado por scripts/knowledge/build-manual-index.mjs
// No editar manualmente: corregir procedures.generated/reviewed y regenerar.
export const MANUAL_PROCEDURES = [
  {
    "id": "manual-activo-fijo-configurar-tablas-base-de-activo-fijo",
    "slug": "activo-fijo-configurar-tablas-base-de-activo-fijo",
    "title": "Configurar tablas base de Activo Fijo",
    "summary": "Define las familias de activos y tablas base requeridas para el funcionamiento de los mantenedores, reportes dinámicos y centralización contable del módulo de Activo Fijo.",
    "system": "ERP interno",
    "module": "Activo Fijo",
    "tags": [
      "activo fijo",
      "familias de activos",
      "factores de corrección",
      "grupo de activos",
      "ubicaciones",
      "cuentas contables",
      "centralización contable"
    ],
    "steps": [
      "Ingresar al menú del sistema de Activo Fijo.",
      "Definir las familias de activos con su relación con las cuentas contables para contabilizaciones de correcciones monetarias y control de adquisiciones.",
      "Definir la tabla Factores de Corrección PCGA para generar la centralización contable automática.",
      "Definir la tabla Grupo de Activos para agrupar información en reportes dinámicos.",
      "Definir la tabla Ubicaciones para indicar el lugar físico del activo y agrupar información en reportes dinámicos."
    ],
    "status": "pendiente_revision",
    "confidence": "baja",
    "warnings": [
      "El fragmento no entrega rutas exactas de menú ni nombres de botones para crear, guardar o confirmar registros.",
      "El texto fuente describe qué tablas deben existir, pero no detalla el flujo completo de mantención de cada tabla.",
      "Debe revisarse con usuario experto antes de publicarlo como procedimiento oficial."
    ],
    "source": {
      "title": "Instructivo de Activo Fijo",
      "relativePath": "Activo Fijo/Instructivo de Activo Fijo.docx",
      "sourceFolder": "Activo Fijo",
      "extension": "docx",
      "chunkId": "activo-fijo-instructivo-de-activo-fijo-chunk-0001",
      "documentId": "activo-fijo-instructivo-de-activo-fijo",
      "imageCount": 14,
      "matchedImages": [],
      "images": [
        {
          "id": "activo-fijo-instructivo-de-activo-fijo-image-0001",
          "fileName": "0001-image9.png",
          "publicPath": "manuales-assets/activo-fijo-instructivo-de-activo-fijo/0001-image9.png",
          "width": 381,
          "height": 251
        },
        {
          "id": "activo-fijo-instructivo-de-activo-fijo-image-0002",
          "fileName": "0002-image10.png",
          "publicPath": "manuales-assets/activo-fijo-instructivo-de-activo-fijo/0002-image10.png",
          "width": 544,
          "height": 240
        },
        {
          "id": "activo-fijo-instructivo-de-activo-fijo-image-0003",
          "fileName": "0003-image11.png",
          "publicPath": "manuales-assets/activo-fijo-instructivo-de-activo-fijo/0003-image11.png",
          "width": 789,
          "height": 572
        },
        {
          "id": "activo-fijo-instructivo-de-activo-fijo-image-0004",
          "fileName": "0004-image12.png",
          "publicPath": "manuales-assets/activo-fijo-instructivo-de-activo-fijo/0004-image12.png",
          "width": 345,
          "height": 142
        },
        {
          "id": "activo-fijo-instructivo-de-activo-fijo-image-0005",
          "fileName": "0005-image13.png",
          "publicPath": "manuales-assets/activo-fijo-instructivo-de-activo-fijo/0005-image13.png",
          "width": 634,
          "height": 467
        },
        {
          "id": "activo-fijo-instructivo-de-activo-fijo-image-0006",
          "fileName": "0006-image8.png",
          "publicPath": "manuales-assets/activo-fijo-instructivo-de-activo-fijo/0006-image8.png",
          "width": 618,
          "height": 338
        },
        {
          "id": "activo-fijo-instructivo-de-activo-fijo-image-0007",
          "fileName": "0007-image7.png",
          "publicPath": "manuales-assets/activo-fijo-instructivo-de-activo-fijo/0007-image7.png",
          "width": 438,
          "height": 146
        },
        {
          "id": "activo-fijo-instructivo-de-activo-fijo-image-0008",
          "fileName": "0008-image6.png",
          "publicPath": "manuales-assets/activo-fijo-instructivo-de-activo-fijo/0008-image6.png",
          "width": 784,
          "height": 664
        }
      ]
    }
  },
  {
    "id": "manual-activo-fijo-definir-proyectos-de-inversion-y-registrar-gastos-asociados",
    "slug": "activo-fijo-definir-proyectos-de-inversion-y-registrar-gastos-asociados",
    "title": "Definir proyectos de inversión y registrar gastos asociados",
    "summary": "Flujo general para configurar datos de inversiones y registrar gastos relacionados con un proyecto de inversión, incluyendo información de factura, proveedor, gasto, ubicación y datos contables.",
    "system": "ERP interno",
    "module": "Activo Fijo",
    "tags": [
      "inversiones",
      "proyectos de inversión",
      "grupo de inversiones",
      "tipos de gastos",
      "PCGA",
      "IFRS",
      "centralización"
    ],
    "steps": [
      "Ingresar a la sección Inversiones.",
      "Definir los proyectos de inversión.",
      "Definir el grupo de inversiones para la emisión de reportes dinámicos de control.",
      "Definir los tipos de gastos para la emisión de reportes dinámicos de control.",
      "En la pantalla de proyectos de inversión, ingresar los gastos relacionados con el proyecto.",
      "Registrar el número de factura y el proveedor.",
      "Seleccionar o indicar el tipo de gasto, como escritura, planos, mano de obra o insumos.",
      "Ingresar la ubicación física del activo.",
      "Indicar el CC y SCC contables para efectos de la corrección monetaria.",
      "Indicar la etapa del proyecto de inversión.",
      "Ingresar la cantidad y el valor.",
      "Generar el primer reporte para obtener valorizaciones para PCGA e IFRS, si corresponde.",
      "Definir el asiento de centralización en la pantalla indicada por el sistema.",
      "Estando en el año base, generar la apertura contable para el año siguiente."
    ],
    "status": "pendiente_revision",
    "confidence": "baja",
    "warnings": [
      "El texto no incluye ruta exacta, nombres de pantallas completos ni botones.",
      "La sección mezcla configuración, registro de gastos, reportes, asiento de centralización y apertura contable sin detallar transiciones entre pantallas.",
      "La frase sobre generación de apertura contable es ambigua y no describe validaciones ni resultado final."
    ],
    "source": {
      "title": "Instructivo de Activo Fijo",
      "relativePath": "Activo Fijo/Instructivo de Activo Fijo.docx",
      "sourceFolder": "Activo Fijo",
      "extension": "docx",
      "chunkId": "activo-fijo-instructivo-de-activo-fijo-chunk-0001",
      "documentId": "activo-fijo-instructivo-de-activo-fijo",
      "imageCount": 14,
      "matchedImages": [
        {
          "id": "activo-fijo-instructivo-de-activo-fijo-image-0006",
          "publicPath": "manuales-assets/activo-fijo-instructivo-de-activo-fijo/0006-image8.png",
          "relevance": "directa",
          "confidence": "alta",
          "matchedStepIndexes": [
            1,
            2
          ],
          "caption": "Mantenedor Tipos de Inversión con código, descripción, grupo de inversiones, presupuesto de proyecto y cuenta contable.",
          "reason": "La pantalla corresponde al mantenimiento de tipos/proyectos de inversión y muestra campos usados para definir una inversión, incluyendo presupuesto y grupo de inversiones.",
          "clickTargets": []
        },
        {
          "id": "activo-fijo-instructivo-de-activo-fijo-image-0001",
          "publicPath": "manuales-assets/activo-fijo-instructivo-de-activo-fijo/0001-image9.png",
          "relevance": "directa",
          "confidence": "alta",
          "matchedStepIndexes": [
            3
          ],
          "caption": "Pantalla Grupo Inversiones con campos de código y descripción.",
          "reason": "Muestra específicamente la pantalla para definir grupos de inversiones, que el procedimiento menciona para reportes dinámicos de control.",
          "clickTargets": []
        },
        {
          "id": "activo-fijo-instructivo-de-activo-fijo-image-0002",
          "publicPath": "manuales-assets/activo-fijo-instructivo-de-activo-fijo/0002-image10.png",
          "relevance": "directa",
          "confidence": "alta",
          "matchedStepIndexes": [
            4,
            7
          ],
          "caption": "Mantenedor Tipos de Gastos con código, descripción y agrupación.",
          "reason": "La imagen muestra el mantenimiento de tipos de gastos y un ejemplo de tipo de gasto, relacionado con la definición y selección del gasto.",
          "clickTargets": []
        },
        {
          "id": "activo-fijo-instructivo-de-activo-fijo-image-0003",
          "publicPath": "manuales-assets/activo-fijo-instructivo-de-activo-fijo/0003-image11.png",
          "relevance": "directa",
          "confidence": "alta",
          "matchedStepIndexes": [
            5,
            6,
            7,
            8,
            9,
            10,
            11
          ],
          "caption": "Ficha de Inversión con datos de documento, proveedor, tipo de gasto, ubicación, centro de costo, etapa, cantidad y valor activo.",
          "reason": "La pantalla contiene los campos indicados para registrar gastos asociados al proyecto de inversión: número de documento, proveedor, tipo de gasto, ubicación, CC/SCC, etapa, cantidad y valor.",
          "clickTargets": []
        }
      ],
      "images": [
        {
          "id": "activo-fijo-instructivo-de-activo-fijo-image-0001",
          "fileName": "0001-image9.png",
          "publicPath": "manuales-assets/activo-fijo-instructivo-de-activo-fijo/0001-image9.png",
          "width": 381,
          "height": 251
        },
        {
          "id": "activo-fijo-instructivo-de-activo-fijo-image-0002",
          "fileName": "0002-image10.png",
          "publicPath": "manuales-assets/activo-fijo-instructivo-de-activo-fijo/0002-image10.png",
          "width": 544,
          "height": 240
        },
        {
          "id": "activo-fijo-instructivo-de-activo-fijo-image-0003",
          "fileName": "0003-image11.png",
          "publicPath": "manuales-assets/activo-fijo-instructivo-de-activo-fijo/0003-image11.png",
          "width": 789,
          "height": 572
        },
        {
          "id": "activo-fijo-instructivo-de-activo-fijo-image-0004",
          "fileName": "0004-image12.png",
          "publicPath": "manuales-assets/activo-fijo-instructivo-de-activo-fijo/0004-image12.png",
          "width": 345,
          "height": 142
        },
        {
          "id": "activo-fijo-instructivo-de-activo-fijo-image-0005",
          "fileName": "0005-image13.png",
          "publicPath": "manuales-assets/activo-fijo-instructivo-de-activo-fijo/0005-image13.png",
          "width": 634,
          "height": 467
        },
        {
          "id": "activo-fijo-instructivo-de-activo-fijo-image-0006",
          "fileName": "0006-image8.png",
          "publicPath": "manuales-assets/activo-fijo-instructivo-de-activo-fijo/0006-image8.png",
          "width": 618,
          "height": 338
        },
        {
          "id": "activo-fijo-instructivo-de-activo-fijo-image-0007",
          "fileName": "0007-image7.png",
          "publicPath": "manuales-assets/activo-fijo-instructivo-de-activo-fijo/0007-image7.png",
          "width": 438,
          "height": 146
        },
        {
          "id": "activo-fijo-instructivo-de-activo-fijo-image-0008",
          "fileName": "0008-image6.png",
          "publicPath": "manuales-assets/activo-fijo-instructivo-de-activo-fijo/0008-image6.png",
          "width": 784,
          "height": 664
        }
      ]
    }
  },
  {
    "id": "manual-activo-fijo-registrar-ficha-de-activo-fijo",
    "slug": "activo-fijo-registrar-ficha-de-activo-fijo",
    "title": "Registrar ficha de activo fijo",
    "summary": "Permite registrar o actualizar una ficha de activo fijo indicando datos del activo, valores, depreciación, información IFRS, proveedor, factura, ubicación y centros de costo.",
    "system": "ERP interno",
    "module": "Activo Fijo",
    "tags": [
      "activo fijo",
      "ficha de activos",
      "adquisición",
      "depreciación",
      "IFRS",
      "proveedor",
      "factura",
      "centro de costo"
    ],
    "steps": [
      "Abrir la pantalla Ficha de Activos.",
      "Indicar el tipo de activo y el nombre del activo.",
      "Ingresar el valor activo actualizado del periodo anterior; si corresponde a una nueva adquisición, marcar el switch “Adquisición” e ingresar el valor de factura.",
      "Ingresar el valor de depreciación e indicar el saldo de vida útil del activo cuando corresponda.",
      "Si se usa contabilidad IFRS, ingresar saldo de vida útil en modalidad IFRS, monto del activo IFRS y depreciación del activo IFRS.",
      "Si es una adquisición, indicar el nombre del proveedor y el número de factura para que el sistema rescate el voucher de compra y enlace la ficha a la contabilidad.",
      "Indicar la ubicación física del activo.",
      "Indicar el CC y SCC contables para la asignación de la corrección monetaria y depreciación del periodo al momento de centralizar.",
      "Opcionalmente, asignar el activo a un grupo cuando se requiera agrupar fichas independientes para reportes.",
      "Emitir desde la parte superior de la pantalla el reporte dinámico de control de ingreso de fichas de activos, si se requiere."
    ],
    "status": "pendiente_revision",
    "confidence": "media",
    "warnings": [
      "El fragmento no entrega ruta exacta de menú ni nombres de botones para guardar o confirmar la ficha.",
      "El resultado de guardado de la ficha no se describe explícitamente en el texto fuente.",
      "Algunos campos dependen de configuración previa de familias, ubicaciones, centros de costo y parámetros contables."
    ],
    "source": {
      "title": "Instructivo de Activo Fijo",
      "relativePath": "Activo Fijo/Instructivo de Activo Fijo.docx",
      "sourceFolder": "Activo Fijo",
      "extension": "docx",
      "chunkId": "activo-fijo-instructivo-de-activo-fijo-chunk-0001",
      "documentId": "activo-fijo-instructivo-de-activo-fijo",
      "imageCount": 14,
      "matchedImages": [
        {
          "id": "activo-fijo-instructivo-de-activo-fijo-image-0008",
          "publicPath": "manuales-assets/activo-fijo-instructivo-de-activo-fijo/0008-image6.png",
          "relevance": "directa",
          "confidence": "alta",
          "matchedStepIndexes": [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9
          ],
          "caption": "Pantalla Ficha de Activos con datos generales, valores, IFRS, proveedor, ubicación, centro de costo y grupo del activo.",
          "reason": "La imagen muestra claramente la pantalla “Ficha de Activos” y los campos usados para registrar la ficha: tipo, nombre, adquisición, valor activo, número de factura, depreciación, datos IFRS, proveedor, ubicación, centro de costo, subcentro y grupo.",
          "clickTargets": [
            {
              "xPercent": 37,
              "yPercent": 12,
              "label": "Tipo Activo",
              "description": "Seleccionar el tipo de activo desde el desplegable."
            },
            {
              "xPercent": 54,
              "yPercent": 27,
              "label": "Adquisicion",
              "description": "Marcar Adquisicion cuando corresponda a un activo nuevo."
            },
            {
              "xPercent": 25,
              "yPercent": 33,
              "label": "Valor Activo",
              "description": "Ingresar o revisar el valor activo actualizado."
            },
            {
              "xPercent": 24,
              "yPercent": 43,
              "label": "Num Fact",
              "description": "Ingresar el numero de factura de la adquisicion."
            },
            {
              "xPercent": 70,
              "yPercent": 59,
              "label": "Proveedor",
              "description": "Buscar o asociar el proveedor de la factura."
            },
            {
              "xPercent": 59,
              "yPercent": 64,
              "label": "Ubicacion",
              "description": "Seleccionar la ubicacion fisica del activo."
            }
          ]
        },
        {
          "id": "activo-fijo-instructivo-de-activo-fijo-image-0007",
          "publicPath": "manuales-assets/activo-fijo-instructivo-de-activo-fijo/0007-image7.png",
          "relevance": "directa",
          "confidence": "media",
          "matchedStepIndexes": [
            1,
            2,
            10
          ],
          "caption": "Encabezado de la pantalla Ficha de Activos con campos de tipo y nombre del activo y opción Dinámica Ficha.",
          "reason": "La captura muestra el encabezado de “Ficha de Activos”, los campos Tipo Activo y Nombre Ficha, y la opción “Dinámica Ficha”, relacionada con el reporte dinámico del procedimiento.",
          "clickTargets": [
            {
              "xPercent": 69,
              "yPercent": 56,
              "label": "Tipo Activo",
              "description": "Seleccionar el tipo de activo desde el encabezado de Ficha de Activos."
            },
            {
              "xPercent": 26,
              "yPercent": 39,
              "label": "Dinamica Ficha",
              "description": "Usar la opcion Dinamica Ficha para emitir el reporte dinamico."
            }
          ]
        }
      ],
      "images": [
        {
          "id": "activo-fijo-instructivo-de-activo-fijo-image-0001",
          "fileName": "0001-image9.png",
          "publicPath": "manuales-assets/activo-fijo-instructivo-de-activo-fijo/0001-image9.png",
          "width": 381,
          "height": 251
        },
        {
          "id": "activo-fijo-instructivo-de-activo-fijo-image-0002",
          "fileName": "0002-image10.png",
          "publicPath": "manuales-assets/activo-fijo-instructivo-de-activo-fijo/0002-image10.png",
          "width": 544,
          "height": 240
        },
        {
          "id": "activo-fijo-instructivo-de-activo-fijo-image-0003",
          "fileName": "0003-image11.png",
          "publicPath": "manuales-assets/activo-fijo-instructivo-de-activo-fijo/0003-image11.png",
          "width": 789,
          "height": 572
        },
        {
          "id": "activo-fijo-instructivo-de-activo-fijo-image-0004",
          "fileName": "0004-image12.png",
          "publicPath": "manuales-assets/activo-fijo-instructivo-de-activo-fijo/0004-image12.png",
          "width": 345,
          "height": 142
        },
        {
          "id": "activo-fijo-instructivo-de-activo-fijo-image-0005",
          "fileName": "0005-image13.png",
          "publicPath": "manuales-assets/activo-fijo-instructivo-de-activo-fijo/0005-image13.png",
          "width": 634,
          "height": 467
        },
        {
          "id": "activo-fijo-instructivo-de-activo-fijo-image-0006",
          "fileName": "0006-image8.png",
          "publicPath": "manuales-assets/activo-fijo-instructivo-de-activo-fijo/0006-image8.png",
          "width": 618,
          "height": 338
        },
        {
          "id": "activo-fijo-instructivo-de-activo-fijo-image-0007",
          "fileName": "0007-image7.png",
          "publicPath": "manuales-assets/activo-fijo-instructivo-de-activo-fijo/0007-image7.png",
          "width": 438,
          "height": 146
        },
        {
          "id": "activo-fijo-instructivo-de-activo-fijo-image-0008",
          "fileName": "0008-image6.png",
          "publicPath": "manuales-assets/activo-fijo-instructivo-de-activo-fijo/0008-image6.png",
          "width": 784,
          "height": 664
        }
      ]
    }
  },
  {
    "id": "manual-app-verfrut-generar-informe-de-hallazgo",
    "slug": "app-verfrut-generar-informe-de-hallazgo",
    "title": "Generar informe de hallazgo",
    "summary": "Volver a generar un informe de hallazgo y enviarlo a un correo específico.",
    "system": "Aplicación móvil Grupo Verfrut",
    "module": "App Verfrut",
    "tags": [
      "hallazgos",
      "generar informe",
      "correo",
      "informe"
    ],
    "steps": [
      "Hacer clic en Generar informe para volver a generar el informe de hallazgo y enviarlo a un correo específico.",
      "Ingresar el correo al que se enviará el informe de hallazgo levantado.",
      "Hacer clic en enviar."
    ],
    "status": "pendiente_revision",
    "confidence": "baja",
    "warnings": [
      "El procedimiento tiene menos de 4 pasos accionables, pero corresponde a un flujo explícito del fragmento.",
      "No se indica la pantalla exacta desde donde se accede a Generar informe ni si aplica solo a hallazgos levantados."
    ],
    "source": {
      "title": "Manual de usuario App. Hallazgos",
      "relativePath": "App Verfrut/Manual de usuario  - App. Hallazgos.docx",
      "sourceFolder": "App Verfrut",
      "extension": "docx",
      "chunkId": "app-verfrut-manual-de-usuario-app-hallazgos-chunk-0001",
      "documentId": "app-verfrut-manual-de-usuario-app-hallazgos",
      "imageCount": 21,
      "matchedImages": [
        {
          "id": "app-verfrut-manual-de-usuario-app-hallazgos-image-0002",
          "publicPath": "manuales-assets/app-verfrut-manual-de-usuario-app-hallazgos/0002-image21.jpeg",
          "relevance": "directa",
          "confidence": "alta",
          "matchedStepIndexes": [
            2,
            3
          ],
          "caption": "Ventana para ingresar correo a enviar con botón Enviar.",
          "reason": "La captura muestra un cuadro titulado \"INGRESAR CORREO A ENVIAR\", un campo \"Correo\" y el botón \"ENVIAR\", correspondientes a ingresar el correo y confirmar el envío.",
          "clickTargets": []
        }
      ],
      "images": [
        {
          "id": "app-verfrut-manual-de-usuario-app-hallazgos-image-0001",
          "fileName": "0001-image12.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-de-usuario-app-hallazgos/0001-image12.jpeg",
          "width": 540,
          "height": 1170
        },
        {
          "id": "app-verfrut-manual-de-usuario-app-hallazgos-image-0002",
          "fileName": "0002-image21.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-de-usuario-app-hallazgos/0002-image21.jpeg",
          "width": 329,
          "height": 714
        },
        {
          "id": "app-verfrut-manual-de-usuario-app-hallazgos-image-0003",
          "fileName": "0003-image9.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-de-usuario-app-hallazgos/0003-image9.jpeg",
          "width": 540,
          "height": 1170
        },
        {
          "id": "app-verfrut-manual-de-usuario-app-hallazgos-image-0004",
          "fileName": "0004-image11.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-de-usuario-app-hallazgos/0004-image11.jpeg",
          "width": 540,
          "height": 1170
        },
        {
          "id": "app-verfrut-manual-de-usuario-app-hallazgos-image-0005",
          "fileName": "0005-image1.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-de-usuario-app-hallazgos/0005-image1.jpeg",
          "width": 540,
          "height": 1170
        },
        {
          "id": "app-verfrut-manual-de-usuario-app-hallazgos-image-0006",
          "fileName": "0006-image2.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-de-usuario-app-hallazgos/0006-image2.jpeg",
          "width": 300,
          "height": 650
        },
        {
          "id": "app-verfrut-manual-de-usuario-app-hallazgos-image-0007",
          "fileName": "0007-image3.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-de-usuario-app-hallazgos/0007-image3.jpeg",
          "width": 540,
          "height": 1170
        },
        {
          "id": "app-verfrut-manual-de-usuario-app-hallazgos-image-0008",
          "fileName": "0008-image4.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-de-usuario-app-hallazgos/0008-image4.jpeg",
          "width": 540,
          "height": 1170
        }
      ]
    }
  },
  {
    "id": "manual-app-verfrut-importar-abastecimientos-android-al-sistema-de-materiales",
    "slug": "app-verfrut-importar-abastecimientos-android-al-sistema-de-materiales",
    "title": "Importar abastecimientos Android al Sistema de Materiales",
    "summary": "Ingresar al Sistema de Materiales para seleccionar una planilla de abastecimiento Android desde consumos de combustible y otros.",
    "system": "Sistema de Materiales",
    "module": "App Verfrut",
    "tags": [
      "android",
      "sistema de materiales",
      "importación",
      "abastecimiento",
      "combustible"
    ],
    "steps": [
      "Ingresar al Sistema de Materiales.",
      "Entrar en la opción \"Insumos Consumos de combustible y otros\".",
      "Seleccionar el tipo.",
      "Seleccionar la bodega.",
      "En la parte superior del formulario, dar clic en el icono de tuerca ubicado a la derecha del icono de impresora.",
      "Revisar el listado de abastecimientos que se muestra.",
      "Seleccionar una planilla de abastecimiento Android."
    ],
    "status": "pendiente_revision",
    "confidence": "baja",
    "warnings": [
      "El texto no indica la acción final para confirmar o ejecutar la importación después de seleccionar la planilla.",
      "El documento indica que todos los usuarios de la aplicación de materiales deben estar registrados en Android Parámetros, en Sistema de Materiales > Insumos > Tablas Maestras > Parámetros Android."
    ],
    "source": {
      "title": "MANUAL APP MATERIALES",
      "relativePath": "App Verfrut/MANUAL APP MATERIALES.docx",
      "sourceFolder": "App Verfrut",
      "extension": "docx",
      "chunkId": "app-verfrut-manual-app-materiales-chunk-0001",
      "documentId": "app-verfrut-manual-app-materiales",
      "imageCount": 12,
      "matchedImages": [],
      "images": [
        {
          "id": "app-verfrut-manual-app-materiales-image-0001",
          "fileName": "0001-image14.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-app-materiales/0001-image14.jpeg",
          "width": 1280,
          "height": 800
        },
        {
          "id": "app-verfrut-manual-app-materiales-image-0002",
          "fileName": "0002-image2.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-app-materiales/0002-image2.jpeg",
          "width": 644,
          "height": 1318
        },
        {
          "id": "app-verfrut-manual-app-materiales-image-0003",
          "fileName": "0003-image4.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-app-materiales/0003-image4.jpeg",
          "width": 720,
          "height": 1600
        },
        {
          "id": "app-verfrut-manual-app-materiales-image-0004",
          "fileName": "0004-image5.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-app-materiales/0004-image5.jpeg",
          "width": 720,
          "height": 1600
        },
        {
          "id": "app-verfrut-manual-app-materiales-image-0005",
          "fileName": "0005-image6.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-app-materiales/0005-image6.jpeg",
          "width": 523,
          "height": 1297
        },
        {
          "id": "app-verfrut-manual-app-materiales-image-0006",
          "fileName": "0006-image7.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-app-materiales/0006-image7.jpeg",
          "width": 720,
          "height": 1600
        },
        {
          "id": "app-verfrut-manual-app-materiales-image-0007",
          "fileName": "0007-image8.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-app-materiales/0007-image8.jpeg",
          "width": 720,
          "height": 1600
        },
        {
          "id": "app-verfrut-manual-app-materiales-image-0008",
          "fileName": "0008-image9.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-app-materiales/0008-image9.jpeg",
          "width": 720,
          "height": 1600
        }
      ]
    }
  },
  {
    "id": "manual-app-verfrut-ingresar-a-la-aplicacion-y-descargar-datos-de-hallazgos",
    "slug": "app-verfrut-ingresar-a-la-aplicacion-y-descargar-datos-de-hallazgos",
    "title": "Ingresar a la aplicación y descargar datos de hallazgos",
    "summary": "Acceder a la aplicación Grupo Verfrut, ingresar credenciales y descargar la información necesaria para utilizar el módulo de Hallazgos.",
    "system": "Aplicación móvil Grupo Verfrut",
    "module": "App Verfrut",
    "tags": [
      "hallazgos",
      "login",
      "descarga de datos",
      "Grupo Verfrut",
      "AppRemu"
    ],
    "steps": [
      "Hacer clic en el icono del Grupo Verfrut.",
      "Ingresar el nombre de usuario.",
      "Ingresar la contraseña.",
      "Ingresar la empresa, por ejemplo Rapel o Verfrut.",
      "Ingresar la temporada, por ejemplo 2021.",
      "Ingresar al módulo de Remuneraciones: AppRemu.",
      "Seleccionar en SI el botón ubicado al costado de la etiqueta PERSONAL VERFRUT SST.",
      "Hacer clic en Guardar Información.",
      "Esperar hasta que termine de cargar.",
      "Seleccionar en SI el botón ubicado al costado de la etiqueta HALLAZGOS.",
      "Hacer clic en Guardar Información.",
      "Esperar hasta que termine de cargar.",
      "Hacer clic en las tres rayitas horizontales de la parte superior izquierda de la pantalla.",
      "Buscar el módulo de hallazgos e ingresar."
    ],
    "status": "pendiente_revision",
    "confidence": "media",
    "warnings": [
      "El fragmento depende de imágenes no incluidas para algunas pantallas y botones.",
      "No se especifican validaciones ni mensajes exactos al finalizar la descarga."
    ],
    "source": {
      "title": "Manual de usuario App. Hallazgos",
      "relativePath": "App Verfrut/Manual de usuario  - App. Hallazgos.docx",
      "sourceFolder": "App Verfrut",
      "extension": "docx",
      "chunkId": "app-verfrut-manual-de-usuario-app-hallazgos-chunk-0001",
      "documentId": "app-verfrut-manual-de-usuario-app-hallazgos",
      "imageCount": 21,
      "matchedImages": [],
      "images": [
        {
          "id": "app-verfrut-manual-de-usuario-app-hallazgos-image-0001",
          "fileName": "0001-image12.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-de-usuario-app-hallazgos/0001-image12.jpeg",
          "width": 540,
          "height": 1170
        },
        {
          "id": "app-verfrut-manual-de-usuario-app-hallazgos-image-0002",
          "fileName": "0002-image21.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-de-usuario-app-hallazgos/0002-image21.jpeg",
          "width": 329,
          "height": 714
        },
        {
          "id": "app-verfrut-manual-de-usuario-app-hallazgos-image-0003",
          "fileName": "0003-image9.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-de-usuario-app-hallazgos/0003-image9.jpeg",
          "width": 540,
          "height": 1170
        },
        {
          "id": "app-verfrut-manual-de-usuario-app-hallazgos-image-0004",
          "fileName": "0004-image11.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-de-usuario-app-hallazgos/0004-image11.jpeg",
          "width": 540,
          "height": 1170
        },
        {
          "id": "app-verfrut-manual-de-usuario-app-hallazgos-image-0005",
          "fileName": "0005-image1.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-de-usuario-app-hallazgos/0005-image1.jpeg",
          "width": 540,
          "height": 1170
        },
        {
          "id": "app-verfrut-manual-de-usuario-app-hallazgos-image-0006",
          "fileName": "0006-image2.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-de-usuario-app-hallazgos/0006-image2.jpeg",
          "width": 300,
          "height": 650
        },
        {
          "id": "app-verfrut-manual-de-usuario-app-hallazgos-image-0007",
          "fileName": "0007-image3.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-de-usuario-app-hallazgos/0007-image3.jpeg",
          "width": 540,
          "height": 1170
        },
        {
          "id": "app-verfrut-manual-de-usuario-app-hallazgos-image-0008",
          "fileName": "0008-image4.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-de-usuario-app-hallazgos/0008-image4.jpeg",
          "width": 540,
          "height": 1170
        }
      ]
    }
  },
  {
    "id": "manual-app-verfrut-instalar-e-ingresar-a-la-aplicacion-grupo-verfrut",
    "slug": "app-verfrut-instalar-e-ingresar-a-la-aplicacion-grupo-verfrut",
    "title": "Instalar e ingresar a la aplicación Grupo Verfrut",
    "summary": "Descargar la aplicación desde Play Store e ingresar seleccionando empresa, temporada y módulo.",
    "system": "App Grupo Verfrut / App FrioPacking",
    "module": "App Verfrut",
    "tags": [
      "instalación",
      "login",
      "android",
      "grupo verfrut"
    ],
    "steps": [
      "Ir a Play Store en el dispositivo Android.",
      "Buscar la aplicación \"Grupo Verfrut\".",
      "Instalar la aplicación \"Grupo Verfrut\".",
      "Abrir la aplicación y brindar todos los permisos solicitados.",
      "Ingresar usuario.",
      "Ingresar clave.",
      "Seleccionar empresa, temporada y módulo a utilizar.",
      "Presionar \"Ingresar\"."
    ],
    "status": "pendiente_revision",
    "confidence": "media",
    "warnings": [
      "El texto menciona App FrioPacking y Grupo Verfrut; se requiere validar el nombre exacto de la aplicación o módulo.",
      "Las actualizaciones se realizan desde la misma tienda Play Store."
    ],
    "source": {
      "title": "MANUAL APP MATERIALES",
      "relativePath": "App Verfrut/MANUAL APP MATERIALES.docx",
      "sourceFolder": "App Verfrut",
      "extension": "docx",
      "chunkId": "app-verfrut-manual-app-materiales-chunk-0001",
      "documentId": "app-verfrut-manual-app-materiales",
      "imageCount": 12,
      "matchedImages": [],
      "images": [
        {
          "id": "app-verfrut-manual-app-materiales-image-0001",
          "fileName": "0001-image14.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-app-materiales/0001-image14.jpeg",
          "width": 1280,
          "height": 800
        },
        {
          "id": "app-verfrut-manual-app-materiales-image-0002",
          "fileName": "0002-image2.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-app-materiales/0002-image2.jpeg",
          "width": 644,
          "height": 1318
        },
        {
          "id": "app-verfrut-manual-app-materiales-image-0003",
          "fileName": "0003-image4.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-app-materiales/0003-image4.jpeg",
          "width": 720,
          "height": 1600
        },
        {
          "id": "app-verfrut-manual-app-materiales-image-0004",
          "fileName": "0004-image5.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-app-materiales/0004-image5.jpeg",
          "width": 720,
          "height": 1600
        },
        {
          "id": "app-verfrut-manual-app-materiales-image-0005",
          "fileName": "0005-image6.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-app-materiales/0005-image6.jpeg",
          "width": 523,
          "height": 1297
        },
        {
          "id": "app-verfrut-manual-app-materiales-image-0006",
          "fileName": "0006-image7.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-app-materiales/0006-image7.jpeg",
          "width": 720,
          "height": 1600
        },
        {
          "id": "app-verfrut-manual-app-materiales-image-0007",
          "fileName": "0007-image8.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-app-materiales/0007-image8.jpeg",
          "width": 720,
          "height": 1600
        },
        {
          "id": "app-verfrut-manual-app-materiales-image-0008",
          "fileName": "0008-image9.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-app-materiales/0008-image9.jpeg",
          "width": 720,
          "height": 1600
        }
      ]
    }
  },
  {
    "id": "manual-app-verfrut-levantar-hallazgo",
    "slug": "app-verfrut-levantar-hallazgo",
    "title": "Levantar hallazgo",
    "summary": "Registrar la corrección de un hallazgo, adjuntar evidencia fotográfica, confirmar el levantamiento y enviar el informe por correo.",
    "system": "Aplicación móvil Grupo Verfrut",
    "module": "App Verfrut",
    "tags": [
      "hallazgos",
      "levantar hallazgo",
      "corrección",
      "informe",
      "correo"
    ],
    "steps": [
      "Hacer clic en LEVANTAR HALLAZGO.",
      "Ingresar la medida implementada.",
      "Ingresar alguna observación.",
      "Tomar foto del hallazgo corregido.",
      "Hacer clic en Levantar Hallazgo.",
      "Hacer clic en REGISTRAR en el mensaje de comprobación.",
      "Ingresar correo para enviar el informe generado de hallazgo.",
      "Hacer clic en el botón ENVIAR.",
      "Volver a realizar el paso de ingreso o actualización de lista de hallazgos para actualizar la lista."
    ],
    "status": "pendiente_revision",
    "confidence": "media",
    "warnings": [
      "No se especifica desde qué lista o pantalla exacta se selecciona el hallazgo a levantar.",
      "El texto referencia 'paso 3' para actualizar la lista, pero la numeración no es clara en el fragmento."
    ],
    "source": {
      "title": "Manual de usuario App. Hallazgos",
      "relativePath": "App Verfrut/Manual de usuario  - App. Hallazgos.docx",
      "sourceFolder": "App Verfrut",
      "extension": "docx",
      "chunkId": "app-verfrut-manual-de-usuario-app-hallazgos-chunk-0001",
      "documentId": "app-verfrut-manual-de-usuario-app-hallazgos",
      "imageCount": 21,
      "matchedImages": [],
      "images": [
        {
          "id": "app-verfrut-manual-de-usuario-app-hallazgos-image-0001",
          "fileName": "0001-image12.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-de-usuario-app-hallazgos/0001-image12.jpeg",
          "width": 540,
          "height": 1170
        },
        {
          "id": "app-verfrut-manual-de-usuario-app-hallazgos-image-0002",
          "fileName": "0002-image21.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-de-usuario-app-hallazgos/0002-image21.jpeg",
          "width": 329,
          "height": 714
        },
        {
          "id": "app-verfrut-manual-de-usuario-app-hallazgos-image-0003",
          "fileName": "0003-image9.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-de-usuario-app-hallazgos/0003-image9.jpeg",
          "width": 540,
          "height": 1170
        },
        {
          "id": "app-verfrut-manual-de-usuario-app-hallazgos-image-0004",
          "fileName": "0004-image11.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-de-usuario-app-hallazgos/0004-image11.jpeg",
          "width": 540,
          "height": 1170
        },
        {
          "id": "app-verfrut-manual-de-usuario-app-hallazgos-image-0005",
          "fileName": "0005-image1.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-de-usuario-app-hallazgos/0005-image1.jpeg",
          "width": 540,
          "height": 1170
        },
        {
          "id": "app-verfrut-manual-de-usuario-app-hallazgos-image-0006",
          "fileName": "0006-image2.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-de-usuario-app-hallazgos/0006-image2.jpeg",
          "width": 300,
          "height": 650
        },
        {
          "id": "app-verfrut-manual-de-usuario-app-hallazgos-image-0007",
          "fileName": "0007-image3.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-de-usuario-app-hallazgos/0007-image3.jpeg",
          "width": 540,
          "height": 1170
        },
        {
          "id": "app-verfrut-manual-de-usuario-app-hallazgos-image-0008",
          "fileName": "0008-image4.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-de-usuario-app-hallazgos/0008-image4.jpeg",
          "width": 540,
          "height": 1170
        }
      ]
    }
  },
  {
    "id": "manual-app-verfrut-listar-hallazgos-registrados",
    "slug": "app-verfrut-listar-hallazgos-registrados",
    "title": "Listar hallazgos registrados",
    "summary": "Visualizar los hallazgos registrados en el equipo filtrando entre no enviados y enviados.",
    "system": "Aplicación móvil Grupo Verfrut",
    "module": "App Verfrut",
    "tags": [
      "hallazgos",
      "listar hallazgos",
      "no enviados",
      "enviados"
    ],
    "steps": [
      "Ingresar al módulo de hallazgos siguiendo el acceso indicado en el manual.",
      "Entrar a la sección LISTA HALLAZGO.",
      "Seleccionar No enviados y hacer clic en el botón MOSTRAR para mostrar los hallazgos registrados que no fueron enviados por falta de conexión a internet.",
      "Seleccionar Enviados y hacer clic en el botón MOSTRAR para mostrar los hallazgos registrados y enviados."
    ],
    "status": "pendiente_revision",
    "confidence": "media",
    "warnings": [
      "La ruta exacta se referencia como 'paso 3' en el documento, pero el fragmento no conserva una numeración clara.",
      "La visualización de la lista depende de imágenes no incluidas."
    ],
    "source": {
      "title": "Manual de usuario App. Hallazgos",
      "relativePath": "App Verfrut/Manual de usuario  - App. Hallazgos.docx",
      "sourceFolder": "App Verfrut",
      "extension": "docx",
      "chunkId": "app-verfrut-manual-de-usuario-app-hallazgos-chunk-0001",
      "documentId": "app-verfrut-manual-de-usuario-app-hallazgos",
      "imageCount": 21,
      "matchedImages": [],
      "images": [
        {
          "id": "app-verfrut-manual-de-usuario-app-hallazgos-image-0001",
          "fileName": "0001-image12.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-de-usuario-app-hallazgos/0001-image12.jpeg",
          "width": 540,
          "height": 1170
        },
        {
          "id": "app-verfrut-manual-de-usuario-app-hallazgos-image-0002",
          "fileName": "0002-image21.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-de-usuario-app-hallazgos/0002-image21.jpeg",
          "width": 329,
          "height": 714
        },
        {
          "id": "app-verfrut-manual-de-usuario-app-hallazgos-image-0003",
          "fileName": "0003-image9.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-de-usuario-app-hallazgos/0003-image9.jpeg",
          "width": 540,
          "height": 1170
        },
        {
          "id": "app-verfrut-manual-de-usuario-app-hallazgos-image-0004",
          "fileName": "0004-image11.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-de-usuario-app-hallazgos/0004-image11.jpeg",
          "width": 540,
          "height": 1170
        },
        {
          "id": "app-verfrut-manual-de-usuario-app-hallazgos-image-0005",
          "fileName": "0005-image1.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-de-usuario-app-hallazgos/0005-image1.jpeg",
          "width": 540,
          "height": 1170
        },
        {
          "id": "app-verfrut-manual-de-usuario-app-hallazgos-image-0006",
          "fileName": "0006-image2.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-de-usuario-app-hallazgos/0006-image2.jpeg",
          "width": 300,
          "height": 650
        },
        {
          "id": "app-verfrut-manual-de-usuario-app-hallazgos-image-0007",
          "fileName": "0007-image3.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-de-usuario-app-hallazgos/0007-image3.jpeg",
          "width": 540,
          "height": 1170
        },
        {
          "id": "app-verfrut-manual-de-usuario-app-hallazgos-image-0008",
          "fileName": "0008-image4.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-de-usuario-app-hallazgos/0008-image4.jpeg",
          "width": 540,
          "height": 1170
        }
      ]
    }
  },
  {
    "id": "manual-app-verfrut-registrar-hallazgo",
    "slug": "app-verfrut-registrar-hallazgo",
    "title": "Registrar hallazgo",
    "summary": "Completar el formulario de registro de un hallazgo, adjuntar foto, clasificar su importancia, registrar y enviar el informe generado por correo.",
    "system": "Aplicación móvil Grupo Verfrut",
    "module": "App Verfrut",
    "tags": [
      "hallazgos",
      "registrar hallazgo",
      "informe",
      "correo",
      "foto"
    ],
    "steps": [
      "Ingresar al módulo de hallazgos.",
      "Elegir la opción REGISTRAR HALLAZGO.",
      "Registrar la información según sea el caso.",
      "Seleccionar Zona.",
      "Seleccionar área.",
      "Seleccionar Lugar.",
      "Escoger turno.",
      "Escanear fotocheck o ingresar número de DNI del responsable que reporta el hallazgo.",
      "Tomar foto del hallazgo.",
      "Ingresar descripción de hallazgo.",
      "Ingresar las causas del hallazgo.",
      "Ingresar las medidas correctivas del hallazgo.",
      "Ingresar las posibles consecuencias del hallazgo.",
      "Seleccionar el nivel de importancia: OBSERVACIÓN, MENOR o MAYOR.",
      "Seleccionar plazo, por ejemplo INMEDIATO.",
      "Hacer clic en el botón REGISTRAR.",
      "Hacer clic en REGISTRAR en el mensaje de comprobación.",
      "Ingresar correo para enviar el informe generado de hallazgo.",
      "Hacer clic en el botón ENVIAR.",
      "Si se requiere registrar otro hallazgo, hacer clic en nuevo."
    ],
    "status": "pendiente_revision",
    "confidence": "alta",
    "warnings": [
      "Algunos pasos del documento hacen referencia a ejemplos e imágenes no disponibles.",
      "No se detallan valores posibles para todos los campos, como zona, área, lugar o turno."
    ],
    "source": {
      "title": "Manual de usuario App. Hallazgos",
      "relativePath": "App Verfrut/Manual de usuario  - App. Hallazgos.docx",
      "sourceFolder": "App Verfrut",
      "extension": "docx",
      "chunkId": "app-verfrut-manual-de-usuario-app-hallazgos-chunk-0001",
      "documentId": "app-verfrut-manual-de-usuario-app-hallazgos",
      "imageCount": 21,
      "matchedImages": [],
      "images": [
        {
          "id": "app-verfrut-manual-de-usuario-app-hallazgos-image-0001",
          "fileName": "0001-image12.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-de-usuario-app-hallazgos/0001-image12.jpeg",
          "width": 540,
          "height": 1170
        },
        {
          "id": "app-verfrut-manual-de-usuario-app-hallazgos-image-0002",
          "fileName": "0002-image21.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-de-usuario-app-hallazgos/0002-image21.jpeg",
          "width": 329,
          "height": 714
        },
        {
          "id": "app-verfrut-manual-de-usuario-app-hallazgos-image-0003",
          "fileName": "0003-image9.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-de-usuario-app-hallazgos/0003-image9.jpeg",
          "width": 540,
          "height": 1170
        },
        {
          "id": "app-verfrut-manual-de-usuario-app-hallazgos-image-0004",
          "fileName": "0004-image11.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-de-usuario-app-hallazgos/0004-image11.jpeg",
          "width": 540,
          "height": 1170
        },
        {
          "id": "app-verfrut-manual-de-usuario-app-hallazgos-image-0005",
          "fileName": "0005-image1.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-de-usuario-app-hallazgos/0005-image1.jpeg",
          "width": 540,
          "height": 1170
        },
        {
          "id": "app-verfrut-manual-de-usuario-app-hallazgos-image-0006",
          "fileName": "0006-image2.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-de-usuario-app-hallazgos/0006-image2.jpeg",
          "width": 300,
          "height": 650
        },
        {
          "id": "app-verfrut-manual-de-usuario-app-hallazgos-image-0007",
          "fileName": "0007-image3.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-de-usuario-app-hallazgos/0007-image3.jpeg",
          "width": 540,
          "height": 1170
        },
        {
          "id": "app-verfrut-manual-de-usuario-app-hallazgos-image-0008",
          "fileName": "0008-image4.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-de-usuario-app-hallazgos/0008-image4.jpeg",
          "width": 540,
          "height": 1170
        }
      ]
    }
  },
  {
    "id": "manual-app-verfrut-registrar-recepcion-de-materiales-en-la-app",
    "slug": "app-verfrut-registrar-recepcion-de-materiales-en-la-app",
    "title": "Registrar recepción de materiales en la app",
    "summary": "Descargar la base de recepción de materiales, completar los datos de recepción y preparar el envío de datos.",
    "system": "App Grupo Verfrut",
    "module": "App Verfrut",
    "tags": [
      "recepción de materiales",
      "descarga de datos",
      "bodega",
      "orden",
      "envío de datos"
    ],
    "steps": [
      "Para utilizar recepción de materiales, seleccionar la opción \"BD RECEPCION MATERIALES\".",
      "Dar en \"GUARDAR INFORMACION\".",
      "Seleccionar \"Recepcion de Materiales\".",
      "Seleccionar zona de recepción.",
      "Seleccionar tipo de movimiento.",
      "Ingresar fecha de recepción y fecha del documento.",
      "Completar los datos del origen, como bodega, productor o proveedor.",
      "Seleccionar bodega de destino.",
      "Ingresar número de serie y número de guía del documento.",
      "Seleccionar número de orden.",
      "Ingresar material recepcionado y cantidad.",
      "Ir a la pestaña de envío de datos."
    ],
    "status": "pendiente_revision",
    "confidence": "media",
    "warnings": [
      "El texto solo menciona la pestaña de envío de datos, pero no detalla el botón o acción final para enviar la recepción.",
      "Se conserva la palabra 'producctor' como referencia textual a productor/proveedor, pero debe validarse en revisión."
    ],
    "source": {
      "title": "MANUAL APP MATERIALES",
      "relativePath": "App Verfrut/MANUAL APP MATERIALES.docx",
      "sourceFolder": "App Verfrut",
      "extension": "docx",
      "chunkId": "app-verfrut-manual-app-materiales-chunk-0001",
      "documentId": "app-verfrut-manual-app-materiales",
      "imageCount": 12,
      "matchedImages": [],
      "images": [
        {
          "id": "app-verfrut-manual-app-materiales-image-0001",
          "fileName": "0001-image14.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-app-materiales/0001-image14.jpeg",
          "width": 1280,
          "height": 800
        },
        {
          "id": "app-verfrut-manual-app-materiales-image-0002",
          "fileName": "0002-image2.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-app-materiales/0002-image2.jpeg",
          "width": 644,
          "height": 1318
        },
        {
          "id": "app-verfrut-manual-app-materiales-image-0003",
          "fileName": "0003-image4.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-app-materiales/0003-image4.jpeg",
          "width": 720,
          "height": 1600
        },
        {
          "id": "app-verfrut-manual-app-materiales-image-0004",
          "fileName": "0004-image5.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-app-materiales/0004-image5.jpeg",
          "width": 720,
          "height": 1600
        },
        {
          "id": "app-verfrut-manual-app-materiales-image-0005",
          "fileName": "0005-image6.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-app-materiales/0005-image6.jpeg",
          "width": 523,
          "height": 1297
        },
        {
          "id": "app-verfrut-manual-app-materiales-image-0006",
          "fileName": "0006-image7.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-app-materiales/0006-image7.jpeg",
          "width": 720,
          "height": 1600
        },
        {
          "id": "app-verfrut-manual-app-materiales-image-0007",
          "fileName": "0007-image8.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-app-materiales/0007-image8.jpeg",
          "width": 720,
          "height": 1600
        },
        {
          "id": "app-verfrut-manual-app-materiales-image-0008",
          "fileName": "0008-image9.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-app-materiales/0008-image9.jpeg",
          "width": 720,
          "height": 1600
        }
      ]
    }
  },
  {
    "id": "manual-app-verfrut-registrar-y-enviar-abastecimientos-de-combustible",
    "slug": "app-verfrut-registrar-y-enviar-abastecimientos-de-combustible",
    "title": "Registrar y enviar abastecimientos de combustible",
    "summary": "Descargar datos, registrar un abastecimiento de combustible escaneando tarjeta e ingresar los datos, y enviar los abastecimientos no enviados al sistema.",
    "system": "App Grupo Verfrut / Sistema de Materiales",
    "module": "App Verfrut",
    "tags": [
      "combustible",
      "abastecimiento",
      "descarga de datos",
      "envío de datos"
    ],
    "steps": [
      "Antes de realizar cada abastecimiento, realizar la descarga de datos.",
      "Para descargar los datos, seleccionar una opción y dar clic en \"GUARDAR INFORMACION\".",
      "Abrir el menú de opciones dando clic en la esquina superior izquierda.",
      "Seleccionar la opción \"COMBUSTIBLE\".",
      "Escanear la tarjeta del trabajador o de la maquinaria.",
      "Revisar que la aplicación muestre los datos de combustible.",
      "Ingresar el horómetro u odómetro.",
      "Ingresar la cantidad abastecida.",
      "Dar clic en \"REGISTRAR\".",
      "Revisar el mensaje que muestra la app con los datos ingresados y la solicitud de confirmación.",
      "Si todos los datos están correctos, dar clic en \"ABASTECER\".",
      "Después de realizar todos los abastecimientos, entrar en la opción \"ENVIAR ABASTECIMIENTOS\".",
      "Seleccionar la opción \"NO ENVIADOS\" y dar clic en \"mostrar\".",
      "Confirmar los abastecimientos por enviar.",
      "Dar clic en el botón \"ENVIAR DATOS\"."
    ],
    "status": "pendiente_revision",
    "confidence": "media",
    "warnings": [
      "La descarga de datos debe realizarse en una zona con buena cobertura de WIFI o red móvil; una mala conexión puede generar una mala descarga.",
      "Si no se descargan datos antes del abastecimiento pueden mostrarse diferencias en las cantidades disponibles.",
      "El texto no especifica el nombre exacto de la opción usada para la descarga de datos de combustible."
    ],
    "source": {
      "title": "MANUAL APP MATERIALES",
      "relativePath": "App Verfrut/MANUAL APP MATERIALES.docx",
      "sourceFolder": "App Verfrut",
      "extension": "docx",
      "chunkId": "app-verfrut-manual-app-materiales-chunk-0001",
      "documentId": "app-verfrut-manual-app-materiales",
      "imageCount": 12,
      "matchedImages": [],
      "images": [
        {
          "id": "app-verfrut-manual-app-materiales-image-0001",
          "fileName": "0001-image14.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-app-materiales/0001-image14.jpeg",
          "width": 1280,
          "height": 800
        },
        {
          "id": "app-verfrut-manual-app-materiales-image-0002",
          "fileName": "0002-image2.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-app-materiales/0002-image2.jpeg",
          "width": 644,
          "height": 1318
        },
        {
          "id": "app-verfrut-manual-app-materiales-image-0003",
          "fileName": "0003-image4.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-app-materiales/0003-image4.jpeg",
          "width": 720,
          "height": 1600
        },
        {
          "id": "app-verfrut-manual-app-materiales-image-0004",
          "fileName": "0004-image5.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-app-materiales/0004-image5.jpeg",
          "width": 720,
          "height": 1600
        },
        {
          "id": "app-verfrut-manual-app-materiales-image-0005",
          "fileName": "0005-image6.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-app-materiales/0005-image6.jpeg",
          "width": 523,
          "height": 1297
        },
        {
          "id": "app-verfrut-manual-app-materiales-image-0006",
          "fileName": "0006-image7.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-app-materiales/0006-image7.jpeg",
          "width": 720,
          "height": 1600
        },
        {
          "id": "app-verfrut-manual-app-materiales-image-0007",
          "fileName": "0007-image8.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-app-materiales/0007-image8.jpeg",
          "width": 720,
          "height": 1600
        },
        {
          "id": "app-verfrut-manual-app-materiales-image-0008",
          "fileName": "0008-image9.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-app-materiales/0008-image9.jpeg",
          "width": 720,
          "height": 1600
        }
      ]
    }
  },
  {
    "id": "manual-app-verfrut-registrar-y-enviar-rendiciones-en-la-app",
    "slug": "app-verfrut-registrar-y-enviar-rendiciones-en-la-app",
    "title": "Registrar y enviar rendiciones en la app",
    "summary": "Crear una rendición escaneando o ingresando trabajador, completar datos del documento, adjuntar fotografía y enviar; si corresponde a combustible, completar datos adicionales.",
    "system": "App Grupo Verfrut",
    "module": "App Verfrut",
    "tags": [
      "rendiciones",
      "fotocheck",
      "combustible",
      "documento",
      "envío"
    ],
    "steps": [
      "Escanear el fotocheck de trabajador o ingresar el RUT.",
      "Seleccionar el tipo de rendición.",
      "Completar los datos como fecha del documento, número de documento, total y una observación si fuese requerido.",
      "Cargar la fotografía del documento a la aplicación, tomando la fotografía o cargándola desde la galería.",
      "Si la rendición no es de tipo combustible, enviar la rendición.",
      "Si la rendición es de tipo combustible, buscar el proveedor del gasto por código, RUT o nombre.",
      "Seleccionar el tipo de combustible.",
      "Seleccionar el vehículo.",
      "Completar los datos requeridos como cantidad, valor, horómetro u odómetro.",
      "Enviar la rendición."
    ],
    "status": "pendiente_revision",
    "confidence": "media",
    "warnings": [
      "Para enviar rendiciones no combustibles, el texto indica que se debe estar conectado a una red de la empresa.",
      "El flujo de aprobación de rendiciones aparece en el fragmento, pero solo incluye seleccionar mes/año, rendidor y aprobar, por lo que se dejó fuera como procedimiento independiente por falta de detalle."
    ],
    "source": {
      "title": "MANUAL APP MATERIALES",
      "relativePath": "App Verfrut/MANUAL APP MATERIALES.docx",
      "sourceFolder": "App Verfrut",
      "extension": "docx",
      "chunkId": "app-verfrut-manual-app-materiales-chunk-0001",
      "documentId": "app-verfrut-manual-app-materiales",
      "imageCount": 12,
      "matchedImages": [],
      "images": [
        {
          "id": "app-verfrut-manual-app-materiales-image-0001",
          "fileName": "0001-image14.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-app-materiales/0001-image14.jpeg",
          "width": 1280,
          "height": 800
        },
        {
          "id": "app-verfrut-manual-app-materiales-image-0002",
          "fileName": "0002-image2.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-app-materiales/0002-image2.jpeg",
          "width": 644,
          "height": 1318
        },
        {
          "id": "app-verfrut-manual-app-materiales-image-0003",
          "fileName": "0003-image4.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-app-materiales/0003-image4.jpeg",
          "width": 720,
          "height": 1600
        },
        {
          "id": "app-verfrut-manual-app-materiales-image-0004",
          "fileName": "0004-image5.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-app-materiales/0004-image5.jpeg",
          "width": 720,
          "height": 1600
        },
        {
          "id": "app-verfrut-manual-app-materiales-image-0005",
          "fileName": "0005-image6.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-app-materiales/0005-image6.jpeg",
          "width": 523,
          "height": 1297
        },
        {
          "id": "app-verfrut-manual-app-materiales-image-0006",
          "fileName": "0006-image7.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-app-materiales/0006-image7.jpeg",
          "width": 720,
          "height": 1600
        },
        {
          "id": "app-verfrut-manual-app-materiales-image-0007",
          "fileName": "0007-image8.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-app-materiales/0007-image8.jpeg",
          "width": 720,
          "height": 1600
        },
        {
          "id": "app-verfrut-manual-app-materiales-image-0008",
          "fileName": "0008-image9.jpeg",
          "publicPath": "manuales-assets/app-verfrut-manual-app-materiales/0008-image9.jpeg",
          "width": 720,
          "height": 1600
        }
      ]
    }
  },
  {
    "id": "manual-casino-offline-configurar-el-primer-inicio-y-los-parametros-de-registro-del-casino-offline",
    "slug": "casino-offline-configurar-el-primer-inicio-y-los-parametros-de-registro-del-casino-offline",
    "title": "Configurar el primer inicio y los parámetros de registro del Casino OffLine",
    "summary": "Configuración inicial que se muestra la primera vez que se abre la aplicación, importación inicial de datos y definición de parámetros por defecto en la pantalla de registro.",
    "system": "Sistema de Casino OffLine",
    "module": "Casino OffLine",
    "tags": [
      "configuracion inicial",
      "login",
      "importacion",
      "registro",
      "colacion"
    ],
    "steps": [
      "Iniciar la aplicación por primera vez para que se muestre la configuración de Login.",
      "Ingresar en “Servidor” el nombre del equipo donde se instaló la base de datos.",
      "Ingresar en “Base de Datos” el nombre de la base de datos.",
      "Definir “Empresa Extranjera” como activo solo si corresponde a una implementación en Perú.",
      "Definir “Predeterminar RUT” para establecer el RUT o DNI usado en la impresión y registro de la colación.",
      "Ingresar en “Usuario de Sistema” el usuario de la base de datos local.",
      "Ingresar en “Contraseña” la contraseña de la base de datos local.",
      "Aceptar la configuración para iniciar la importación de datos.",
      "Esperar a que finalice la importación; el tiempo depende de la cantidad de datos.",
      "En la pantalla de registro de la primera ejecución, seleccionar el Casino.",
      "Ingresar el ID del lector de huella dactilar, si corresponde.",
      "Seleccionar el tipo de Colación.",
      "Guardar los parámetros por defecto usando “Ctrl + S”."
    ],
    "status": "pendiente_revision",
    "confidence": "media",
    "warnings": [
      "El fragmento no muestra la pantalla ni nombres de botones, solo indica aceptar la configuración.",
      "El orden exacto entre seleccionar parámetros y guardar con Ctrl+S se infiere del texto de configuración de parámetros por defecto.",
      "El ID del lector de huella dactilar es opcional según la fuente."
    ],
    "source": {
      "title": "Sistema de Casino OffLine",
      "relativePath": "Casino OffLine/Sistema de Casino OffLine.docx",
      "sourceFolder": "Casino OffLine",
      "extension": "docx",
      "chunkId": "casino-offline-sistema-de-casino-offline-chunk-0001",
      "documentId": "casino-offline-sistema-de-casino-offline",
      "imageCount": 12,
      "matchedImages": [],
      "images": [
        {
          "id": "casino-offline-sistema-de-casino-offline-image-0001",
          "fileName": "0001-image8.png",
          "publicPath": "manuales-assets/casino-offline-sistema-de-casino-offline/0001-image8.png",
          "width": 344,
          "height": 154
        },
        {
          "id": "casino-offline-sistema-de-casino-offline-image-0002",
          "fileName": "0002-image9.png",
          "publicPath": "manuales-assets/casino-offline-sistema-de-casino-offline/0002-image9.png",
          "width": 1922,
          "height": 1038
        },
        {
          "id": "casino-offline-sistema-de-casino-offline-image-0003",
          "fileName": "0003-image10.png",
          "publicPath": "manuales-assets/casino-offline-sistema-de-casino-offline/0003-image10.png",
          "width": 458,
          "height": 399
        },
        {
          "id": "casino-offline-sistema-de-casino-offline-image-0004",
          "fileName": "0004-image11.png",
          "publicPath": "manuales-assets/casino-offline-sistema-de-casino-offline/0004-image11.png",
          "width": 984,
          "height": 626
        },
        {
          "id": "casino-offline-sistema-de-casino-offline-image-0005",
          "fileName": "0005-image7.png",
          "publicPath": "manuales-assets/casino-offline-sistema-de-casino-offline/0005-image7.png",
          "width": 259,
          "height": 410
        },
        {
          "id": "casino-offline-sistema-de-casino-offline-image-0006",
          "fileName": "0006-image6.png",
          "publicPath": "manuales-assets/casino-offline-sistema-de-casino-offline/0006-image6.png",
          "width": 340,
          "height": 309
        },
        {
          "id": "casino-offline-sistema-de-casino-offline-image-0007",
          "fileName": "0007-image5.png",
          "publicPath": "manuales-assets/casino-offline-sistema-de-casino-offline/0007-image5.png",
          "width": 394,
          "height": 299
        },
        {
          "id": "casino-offline-sistema-de-casino-offline-image-0008",
          "fileName": "0008-image1.png",
          "publicPath": "manuales-assets/casino-offline-sistema-de-casino-offline/0008-image1.png",
          "width": 210,
          "height": 71
        }
      ]
    }
  },
  {
    "id": "manual-casino-offline-instalar-el-sistema-de-casino-offline",
    "slug": "casino-offline-instalar-el-sistema-de-casino-offline",
    "title": "Instalar el sistema de Casino OffLine",
    "summary": "Instalación base del sistema Casino OffLine, incluyendo prerrequisitos, creación de base de datos local mediante scripts SQL y copia del ejecutable.",
    "system": "Sistema de Casino OffLine",
    "module": "Casino OffLine",
    "tags": [
      "instalacion",
      "base de datos",
      "SQL Server",
      "ejecutable",
      "casino offline"
    ],
    "steps": [
      "Instalar Microsoft SQL Server Express 2012 (x86-x64).",
      "Durante la instalación de SQL Server Express, seleccionar el modo de autentificación Mixto y definir una contraseña para el usuario “sa”.",
      "Instalar Microsoft SQL Server Management Studio 2012 (x86-x64).",
      "Instalar Microsoft Net Framework 4.5.2.",
      "Instalar Microsoft Visual Basic Power Packs 10.",
      "Abrir Microsoft SQL Server Management Studio 2012.",
      "Ejecutar el script SQL “Casino Desconectado” para crear la base de datos local “REGISTRO_CASINO_LOCAL”.",
      "Ejecutar el script SQL “Crea Vinculo Servidor” para crear el vínculo con la base de datos “BSIS_REM_AFR” en el servidor de base de datos local.",
      "Ejecutar el script SQL “SPC IMPORTA”, encargado de importar los datos desde “BSIS_REM_AFR” a la base de datos local.",
      "Crear el directorio “C:\\appCasino”.",
      "Copiar la aplicación en el directorio “C:\\appCasino”.",
      "Opcionalmente, crear el directorio “C:\\Fotos” para almacenar fotografías de los trabajadores."
    ],
    "status": "pendiente_revision",
    "confidence": "media",
    "warnings": [
      "El fragmento no indica ubicación de los instaladores, ubicación de los scripts SQL ni parámetros detallados de conexión.",
      "La contraseña “abc.123” aparece solo como sugerencia en la fuente y debe revisarse antes de usarla en un entorno real.",
      "No se describen validaciones posteriores a la ejecución de los scripts, salvo el resultado esperado de creación/importación indicado en el texto."
    ],
    "source": {
      "title": "Sistema de Casino OffLine",
      "relativePath": "Casino OffLine/Sistema de Casino OffLine.docx",
      "sourceFolder": "Casino OffLine",
      "extension": "docx",
      "chunkId": "casino-offline-sistema-de-casino-offline-chunk-0001",
      "documentId": "casino-offline-sistema-de-casino-offline",
      "imageCount": 12,
      "matchedImages": [],
      "images": [
        {
          "id": "casino-offline-sistema-de-casino-offline-image-0001",
          "fileName": "0001-image8.png",
          "publicPath": "manuales-assets/casino-offline-sistema-de-casino-offline/0001-image8.png",
          "width": 344,
          "height": 154
        },
        {
          "id": "casino-offline-sistema-de-casino-offline-image-0002",
          "fileName": "0002-image9.png",
          "publicPath": "manuales-assets/casino-offline-sistema-de-casino-offline/0002-image9.png",
          "width": 1922,
          "height": 1038
        },
        {
          "id": "casino-offline-sistema-de-casino-offline-image-0003",
          "fileName": "0003-image10.png",
          "publicPath": "manuales-assets/casino-offline-sistema-de-casino-offline/0003-image10.png",
          "width": 458,
          "height": 399
        },
        {
          "id": "casino-offline-sistema-de-casino-offline-image-0004",
          "fileName": "0004-image11.png",
          "publicPath": "manuales-assets/casino-offline-sistema-de-casino-offline/0004-image11.png",
          "width": 984,
          "height": 626
        },
        {
          "id": "casino-offline-sistema-de-casino-offline-image-0005",
          "fileName": "0005-image7.png",
          "publicPath": "manuales-assets/casino-offline-sistema-de-casino-offline/0005-image7.png",
          "width": 259,
          "height": 410
        },
        {
          "id": "casino-offline-sistema-de-casino-offline-image-0006",
          "fileName": "0006-image6.png",
          "publicPath": "manuales-assets/casino-offline-sistema-de-casino-offline/0006-image6.png",
          "width": 340,
          "height": 309
        },
        {
          "id": "casino-offline-sistema-de-casino-offline-image-0007",
          "fileName": "0007-image5.png",
          "publicPath": "manuales-assets/casino-offline-sistema-de-casino-offline/0007-image5.png",
          "width": 394,
          "height": 299
        },
        {
          "id": "casino-offline-sistema-de-casino-offline-image-0008",
          "fileName": "0008-image1.png",
          "publicPath": "manuales-assets/casino-offline-sistema-de-casino-offline/0008-image1.png",
          "width": 210,
          "height": 71
        }
      ]
    }
  },
  {
    "id": "manual-contabilidad-procesar-detracciones-de-compras-con-archivo-sunat",
    "slug": "contabilidad-procesar-detracciones-de-compras-con-archivo-sunat",
    "title": "Procesar detracciones de compras con archivo SUNAT",
    "summary": "Flujo descrito para generar un TXT con documentos de compras previamente digitados, enviarlo a SUNAT e importar al sistema el CSV devuelto.",
    "system": "ERP Contabilidad",
    "module": "Contabilidad",
    "tags": [
      "compras",
      "detracciones",
      "SUNAT",
      "TXT",
      "CSV",
      "Perú"
    ],
    "steps": [
      "Verificar que los documentos de compras sujetos a detracción estén previamente digitados en el sistema.",
      "Generar un archivo TXT con los documentos previamente digitados.",
      "Subir el archivo TXT a SUNAT.",
      "Obtener el archivo CSV devuelto por SUNAT.",
      "Importar el archivo CSV devuelto por SUNAT al sistema."
    ],
    "status": "pendiente_revision",
    "confidence": "media",
    "warnings": [
      "El fragmento no indica ruta, pantalla, botones ni nombre exacto de la opción para generar o importar archivos.",
      "No se detallan validaciones, estructura del TXT/CSV ni mensajes de confirmación.",
      "El texto menciona adjuntos por correo que no están incluidos en el fragmento."
    ],
    "source": {
      "title": "Cambios en Contabilidad para adaptacaion Peru",
      "relativePath": "Contabilidad/Cambios en Contabilidad para adaptacaion Peru.docx",
      "sourceFolder": "Contabilidad",
      "extension": "docx",
      "chunkId": "contabilidad-cambios-en-contabilidad-para-adaptacaion-peru-chunk-0001",
      "documentId": "contabilidad-cambios-en-contabilidad-para-adaptacaion-peru",
      "imageCount": 25,
      "matchedImages": [],
      "images": [
        {
          "id": "contabilidad-cambios-en-contabilidad-para-adaptacaion-peru-image-0001",
          "fileName": "0001-image26.png",
          "publicPath": "manuales-assets/contabilidad-cambios-en-contabilidad-para-adaptacaion-peru/0001-image26.png",
          "width": 1366,
          "height": 768
        },
        {
          "id": "contabilidad-cambios-en-contabilidad-para-adaptacaion-peru-image-0002",
          "fileName": "0002-image19.png",
          "publicPath": "manuales-assets/contabilidad-cambios-en-contabilidad-para-adaptacaion-peru/0002-image19.png",
          "width": 1366,
          "height": 768
        },
        {
          "id": "contabilidad-cambios-en-contabilidad-para-adaptacaion-peru-image-0003",
          "fileName": "0003-image18.png",
          "publicPath": "manuales-assets/contabilidad-cambios-en-contabilidad-para-adaptacaion-peru/0003-image18.png",
          "width": 1366,
          "height": 768
        },
        {
          "id": "contabilidad-cambios-en-contabilidad-para-adaptacaion-peru-image-0004",
          "fileName": "0004-image17.png",
          "publicPath": "manuales-assets/contabilidad-cambios-en-contabilidad-para-adaptacaion-peru/0004-image17.png",
          "width": 1366,
          "height": 768
        },
        {
          "id": "contabilidad-cambios-en-contabilidad-para-adaptacaion-peru-image-0005",
          "fileName": "0005-image16.png",
          "publicPath": "manuales-assets/contabilidad-cambios-en-contabilidad-para-adaptacaion-peru/0005-image16.png",
          "width": 1366,
          "height": 768
        },
        {
          "id": "contabilidad-cambios-en-contabilidad-para-adaptacaion-peru-image-0006",
          "fileName": "0006-image15.png",
          "publicPath": "manuales-assets/contabilidad-cambios-en-contabilidad-para-adaptacaion-peru/0006-image15.png",
          "width": 1364,
          "height": 768
        },
        {
          "id": "contabilidad-cambios-en-contabilidad-para-adaptacaion-peru-image-0007",
          "fileName": "0007-image20.png",
          "publicPath": "manuales-assets/contabilidad-cambios-en-contabilidad-para-adaptacaion-peru/0007-image20.png",
          "width": 1366,
          "height": 768
        },
        {
          "id": "contabilidad-cambios-en-contabilidad-para-adaptacaion-peru-image-0008",
          "fileName": "0008-image21.png",
          "publicPath": "manuales-assets/contabilidad-cambios-en-contabilidad-para-adaptacaion-peru/0008-image21.png",
          "width": 1366,
          "height": 768
        }
      ]
    }
  }
]
