// Preguntas frecuentes de TI, agrupadas por categoría.
// Las respuestas admiten texto plano; los enlaces se agregan en el componente si hace falta.
export const FAQ_CATEGORIES = [
  {
    id: 'contrasenas',
    label: 'Contraseñas y accesos',
    icon: 'fi fi-rr-lock',
    items: [
      {
        id: 'cambiar-clave',
        q: '¿Cómo cambio mi contraseña de Windows o del correo?',
        a: 'En un equipo conectado a la red de Unifrutti, presiona Ctrl+Alt+Supr y elige "Cambiar una contraseña". Usa una clave larga, que no hayas usado en otro sistema, y no la compartas con nadie: TI nunca te la pedirá por correo ni por teléfono.',
        tags: ['password', 'clave', 'windows', 'correo'],
      },
      {
        id: 'olvide-clave',
        q: 'Olvidé mi contraseña, ¿cómo la recupero?',
        a: 'Usa la opción "Gestión Usuarios" del menú superior de esta página y selecciona "Recuperar contraseña". Si el problema persiste, escribe a soporte@verfrut.cl o llama al turno de soporte vigente (sección Turnos).',
        tags: ['password', 'recuperar', 'clave'],
      },
      {
        id: 'cuenta-bloqueada',
        q: 'Mi cuenta se bloqueó, ¿qué hago?',
        a: 'Las cuentas se bloquean tras varios intentos fallidos de inicio de sesión. Usa "Gestión Usuarios" → "Desbloqueo de usuario" en el menú superior. Si no puedes desbloquearla, reporta una incidencia o contacta a soporte@verfrut.cl.',
        tags: ['bloqueo', 'desbloquear', 'usuario'],
      },
    ],
  },
  {
    id: 'vpn',
    label: 'VPN y trabajo remoto',
    icon: 'fi fi-rr-shield-check',
    items: [
      {
        id: 'cuando-vpn',
        q: '¿Cuándo necesito conectarme a la VPN?',
        a: 'Los portales marcados con el candado de VPN (GLPI, Portal de Solicitudes, entre otros) solo funcionan dentro de la red corporativa. Si estás fuera de la oficina, primero conéctate con FortiClient y luego abre el sistema.',
        tags: ['vpn', 'forticlient', 'remoto', 'candado'],
      },
      {
        id: 'instalar-vpn',
        q: '¿Cómo instalo FortiClient para la VPN?',
        a: 'La instalación y configuración la realiza el equipo de TI. Solicítala creando un ticket en GLPI o escribiendo a soporte@verfrut.cl, indicando tu nombre, equipo y motivo. Revisa la guía paso a paso en la sección Guías.',
        tags: ['vpn', 'forticlient', 'instalar'],
      },
      {
        id: 'vpn-no-conecta',
        q: 'La VPN no conecta, ¿qué reviso primero?',
        a: 'Verifica que tu internet funcione (abre cualquier página web), que tu usuario y contraseña estén correctos y que FortiClient esté actualizado. Si sigue fallando, reporta una incidencia indicando el mensaje de error que aparece.',
        tags: ['vpn', 'error', 'conexion'],
      },
    ],
  },
  {
    id: 'correo',
    label: 'Correo electrónico',
    icon: 'fi fi-rr-envelope',
    items: [
      {
        id: 'correo-celular',
        q: '¿Puedo configurar el correo corporativo en mi celular?',
        a: 'Sí. Instala la aplicación Outlook desde la tienda oficial de tu teléfono e ingresa con tu correo corporativo y contraseña. Es posible que debas aprobar el ingreso con Microsoft Authenticator.',
        tags: ['correo', 'celular', 'outlook', 'movil'],
      },
      {
        id: 'correo-sospechoso',
        q: 'Recibí un correo sospechoso, ¿qué hago?',
        a: 'No hagas clic en enlaces ni descargues adjuntos. Reenvíalo a soporte@verfrut.cl para su análisis y elimínalo. Ante la duda, revisa el artículo sobre phishing en el Blog o haz el Quiz de Ciberseguridad.',
        tags: ['phishing', 'spam', 'sospechoso', 'seguridad'],
      },
      {
        id: 'firma-correo',
        q: '¿Cómo genero mi firma de correo corporativa?',
        a: 'Usa la herramienta "Generar Firmas" del menú Recursos → Herramientas. Completa tus datos y copia la firma resultante en la configuración de Outlook.',
        tags: ['firma', 'correo', 'outlook'],
      },
    ],
  },
  {
    id: 'impresoras',
    label: 'Impresoras y equipos',
    icon: 'fi fi-rr-print',
    items: [
      {
        id: 'impresora-no-imprime',
        q: 'La impresora no imprime, ¿qué reviso antes de llamar a soporte?',
        a: 'Verifica que la impresora esté encendida y con papel, que tu documento no esté detenido en la cola de impresión y que estés imprimiendo en la impresora correcta. Si nada de eso lo resuelve, reporta una incidencia indicando el nombre o ubicación de la impresora.',
        tags: ['impresora', 'imprimir', 'cola'],
      },
      {
        id: 'equipo-lento',
        q: 'Mi computador está muy lento, ¿qué puedo hacer?',
        a: 'Reinicia el equipo al menos una vez al día y cierra los programas que no estés usando. Si la lentitud persiste todos los días, crea un ticket para que TI revise el equipo.',
        tags: ['lento', 'computador', 'rendimiento'],
      },
      {
        id: 'usb-desconocido',
        q: '¿Puedo conectar un pendrive que encontré o que me prestaron?',
        a: 'No conectes dispositivos USB de origen desconocido: son una vía común de infección por malware. Si encuentras uno, entrégalo a TI sin conectarlo.',
        tags: ['usb', 'pendrive', 'seguridad', 'malware'],
      },
    ],
  },
  {
    id: 'incidencias',
    label: 'Incidencias y soporte',
    icon: 'fi fi-rr-bug',
    items: [
      {
        id: 'como-reportar',
        q: '¿Cómo reporto una incidencia correctamente?',
        a: 'Usa el botón "Reportar Incidencia" del menú Soporte TI (elige Chile o Perú según tu ubicación). Describe qué estabas haciendo, qué mensaje de error apareció y desde qué equipo. Mientras más detalle entregues, más rápido podremos ayudarte.',
        tags: ['incidencia', 'reportar', 'glpi', 'ticket'],
      },
      {
        id: 'urgencia-fuera-horario',
        q: 'Tengo una urgencia fuera del horario laboral, ¿a quién llamo?',
        a: 'Revisa la página de Turnos: ahí aparece el responsable de soporte y de desarrollo de la semana con su teléfono y WhatsApp de contacto.',
        tags: ['turno', 'urgencia', 'telefono', 'fuera de horario'],
      },
      {
        id: 'seguimiento-ticket',
        q: '¿Cómo hago seguimiento a mi ticket?',
        a: 'Ingresa a GLPI (glpi.verfrut.cl para Chile, glpi.verfrut.pe para Perú, requiere VPN) y revisa el estado en "Mis tickets". También recibirás notificaciones por correo cuando el ticket cambie de estado.',
        tags: ['ticket', 'glpi', 'seguimiento', 'estado'],
      },
    ],
  },
]
