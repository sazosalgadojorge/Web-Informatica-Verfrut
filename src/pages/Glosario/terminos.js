// Glosario de términos de TI en lenguaje simple.
// `link` es opcional: ruta interna ('/guias/...') o URL externa ('https://...').
export const TERMINOS = [
  {
    term: 'VPN',
    definition:
      'Red Privada Virtual. Conexión cifrada que permite acceder a los sistemas internos de Unifrutti (GLPI, Portal de Solicitudes) desde fuera de la red corporativa. Usamos FortiClient.',
    related: ['FortiClient', 'GLPI'],
    link: '/guias/conectar-vpn-forticlient',
  },
  {
    term: 'FortiClient',
    definition:
      'Programa que instala TI en tu equipo para conectarte a la VPN corporativa. Si necesitas instalarlo, solicítalo a la mesa de ayuda.',
    related: ['VPN'],
  },
  {
    term: 'GLPI',
    definition:
      'Plataforma de gestión de tickets donde se reportan incidencias y solicitudes a Soporte TI. Disponible para Chile (glpi.verfrut.cl) y Perú (glpi.verfrut.pe). Requiere VPN.',
    related: ['Incidencia', 'Ticket', 'VPN'],
    link: '/guias/crear-ticket-glpi',
  },
  {
    term: 'Incidencia',
    definition:
      'Cualquier problema o falla que interrumpe tu trabajo con un sistema o equipo: no puedes ingresar, algo dejó de funcionar, un error inesperado. Se reporta por el portal de incidencias o GLPI.',
    related: ['GLPI', 'Ticket'],
    link: '/blog/incidencias',
  },
  {
    term: 'Ticket',
    definition:
      'Registro formal de una incidencia o solicitud en la mesa de ayuda. Cada ticket tiene un número de seguimiento y un responsable asignado.',
    related: ['GLPI', 'Incidencia'],
  },
  {
    term: 'Phishing',
    definition:
      'Fraude que suplanta a una entidad confiable (banco, TI, gerencia) por correo o mensaje para robar credenciales o instalar programas maliciosos. Ante la duda, no hagas clic y reporta a soporte@verfrut.cl.',
    related: ['Malware', 'Spam'],
    link: '/blog/phishing',
  },
  {
    term: 'Malware',
    definition:
      'Programa malicioso diseñado para dañar tu equipo o robar información: virus, ransomware, spyware. Se propaga por correos, descargas y dispositivos USB desconocidos.',
    related: ['Phishing', 'Ransomware'],
  },
  {
    term: 'Ransomware',
    definition:
      'Tipo de malware que secuestra (cifra) los archivos de un equipo o de la empresa y exige un pago para liberarlos. Prevención: no abrir adjuntos sospechosos y reportar correos extraños.',
    related: ['Malware', 'Phishing'],
  },
  {
    term: 'Spam',
    definition:
      'Correo masivo no solicitado, generalmente publicitario. Aunque no siempre es peligroso, puede esconder intentos de phishing. No respondas ni reenvíes.',
    related: ['Phishing'],
  },
  {
    term: 'DTE',
    definition:
      'Documento Tributario Electrónico: facturas, boletas y guías de despacho electrónicas que se gestionan en facturacion.verfrut.cl ante el SII.',
    related: [],
    link: 'https://facturacion.verfrut.cl/Account/Login?ReturnUrl=%2f',
  },
  {
    term: 'Anexo',
    definition:
      'Número interno de telefonía para contactar a un colaborador de la empresa. Puedes buscar anexos y correos en el directorio telefónico.',
    related: [],
    link: '/anexos',
  },
  {
    term: 'ERP',
    definition:
      'Sistema de planificación de recursos empresariales: integra en una sola plataforma los procesos de la empresa (producción, finanzas, logística). Frusys Cloud es nuestro ERP web.',
    related: ['Frusys Cloud'],
    link: '/blog/verfrut-cloud',
  },
  {
    term: 'Frusys Cloud',
    definition:
      'Plataforma web de Unifrutti que moderniza el antiguo ERP para gestionar el proceso de la fruta en Chile y Perú desde el navegador.',
    related: ['ERP'],
    link: '/blog/verfrut-cloud',
  },
  {
    term: 'Autenticación multifactor (MFA)',
    definition:
      'Verificación de identidad en dos pasos: además de tu contraseña, confirmas el ingreso con una app como Microsoft Authenticator. Protege tu cuenta aunque roben tu clave.',
    related: ['Contraseña'],
  },
  {
    term: 'Contraseña',
    definition:
      'Clave personal e intransferible de acceso a tus cuentas. Debe ser larga, única por sistema y nunca compartirse — TI jamás te la pedirá por correo o teléfono.',
    related: ['Autenticación multifactor (MFA)'],
  },
  {
    term: 'Mesa de ayuda',
    definition:
      'Equipo de Soporte TI que recibe y resuelve incidencias y solicitudes. Canales: portal de incidencias, GLPI y soporte@verfrut.cl.',
    related: ['GLPI', 'Incidencia'],
  },
  {
    term: 'Firma de correo',
    definition:
      'Bloque estandarizado con tu nombre, cargo y datos de contacto al final de tus correos corporativos. Se genera automáticamente con la herramienta Generar Firmas.',
    related: [],
    link: 'https://api.verfrut.cl/Home/GeneradorFirma',
  },
  {
    term: 'SharePoint',
    definition:
      'Plataforma de Microsoft donde se publican portales internos y documentos compartidos, como el sitio de Concientización en ciberseguridad y la carpeta de Manuales.',
    related: [],
  },
]
