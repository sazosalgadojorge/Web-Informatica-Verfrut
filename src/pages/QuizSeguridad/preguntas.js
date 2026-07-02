export const QUIZ_META = {
  title: 'Quiz de Ciberseguridad',
  passScore: 70, // porcentaje mínimo para aprobar
}

export const PREGUNTAS = [
  {
    id: 'phishing-remitente',
    question:
      'Recibes un correo de "soporte@verfrut-cl.com" pidiendo tu contraseña para "renovar tu buzón". ¿Qué haces?',
    options: [
      { id: 'a', text: 'Respondo con mi contraseña, es del área de soporte' },
      { id: 'b', text: 'Hago clic en el enlace para verificar de qué se trata' },
      { id: 'c', text: 'Lo reenvío a soporte@verfrut.cl sin hacer clic y lo elimino', correct: true },
    ],
    feedback: {
      correct:
        'Correcto. El dominio real es @verfrut.cl; "verfrut-cl.com" es una suplantación. TI nunca te pedirá tu contraseña por correo.',
      incorrect:
        'Cuidado: el dominio "verfrut-cl.com" no es corporativo y nadie de TI te pedirá jamás tu contraseña. Reenvía el correo a soporte@verfrut.cl y elimínalo.',
    },
  },
  {
    id: 'usb-desconocido',
    question: 'Encuentras un pendrive en el estacionamiento del packing. ¿Qué haces?',
    options: [
      { id: 'a', text: 'Lo conecto a mi computador para ver de quién es' },
      { id: 'b', text: 'Lo entrego a TI sin conectarlo', correct: true },
      { id: 'c', text: 'Lo formateo y lo uso, total nadie lo reclamó' },
    ],
    feedback: {
      correct: 'Bien. Los USB desconocidos son un vector clásico de malware: pueden infectar el equipo apenas se conectan.',
      incorrect: 'Nunca conectes un USB desconocido: puede ejecutar malware automáticamente. Entrégalo a TI sin conectarlo.',
    },
  },
  {
    id: 'contrasena-compartida',
    question: 'Un compañero de confianza te pide tu contraseña "solo por hoy" para revisar un sistema. ¿Qué haces?',
    options: [
      { id: 'a', text: 'Se la doy, es de confianza y la cambio después' },
      { id: 'b', text: 'Le digo que solicite su propio acceso a TI', correct: true },
      { id: 'c', text: 'Ingreso yo y le dejo mi sesión abierta' },
    ],
    feedback: {
      correct: 'Exacto. Las contraseñas son personales e intransferibles: todo lo que ocurra con tu cuenta queda a tu nombre.',
      incorrect: 'Las contraseñas nunca se comparten ni se prestan sesiones: todo lo que ocurra con tu cuenta queda registrado a tu nombre. Tu compañero debe pedir su propio acceso.',
    },
  },
  {
    id: 'wifi-publica',
    question: 'Estás en un café con wifi gratis y necesitas revisar un sistema interno de la empresa. ¿Cómo lo haces?',
    options: [
      { id: 'a', text: 'Entro directo, el wifi tiene contraseña así que es seguro' },
      { id: 'b', text: 'Me conecto primero a la VPN con FortiClient y luego entro', correct: true },
      { id: 'c', text: 'Le pido a un compañero que me mande pantallazos por WhatsApp' },
    ],
    feedback: {
      correct: 'Correcto. En redes públicas la VPN cifra tu conexión y protege los datos de la empresa.',
      incorrect: 'Las redes wifi públicas pueden ser interceptadas. Siempre conéctate primero a la VPN corporativa (FortiClient) antes de acceder a sistemas internos.',
    },
  },
  {
    id: 'bloqueo-pantalla',
    question: 'Te levantas de tu puesto "solo dos minutos" a buscar un café. ¿Qué haces con tu computador?',
    options: [
      { id: 'a', text: 'Lo dejo así, son solo dos minutos' },
      { id: 'b', text: 'Bloqueo la pantalla con Windows + L', correct: true },
      { id: 'c', text: 'Bajo el brillo de la pantalla para que no se vea' },
    ],
    feedback: {
      correct: 'Bien. Bloquear la pantalla (Windows + L) evita que cualquiera use tu sesión, incluso en ausencias cortas.',
      incorrect: 'Aunque sean dos minutos, una sesión abierta permite que cualquiera actúe con tu cuenta. Acostúmbrate a bloquear con Windows + L cada vez que te levantes.',
    },
  },
  {
    id: 'adjunto-factura',
    question: 'Llega un correo de un "proveedor" que no conoces con un adjunto "Factura_pendiente.zip" y tono urgente. ¿Qué haces?',
    options: [
      { id: 'a', text: 'Lo abro rápido, puede ser una factura importante' },
      { id: 'b', text: 'Lo reenvío a soporte@verfrut.cl para que lo analicen', correct: true },
      { id: 'c', text: 'Lo respondo pidiendo más información' },
    ],
    feedback: {
      correct: 'Correcto. Los adjuntos comprimidos de remitentes desconocidos con tono urgente son un patrón típico de malware.',
      incorrect: 'La urgencia y los adjuntos .zip de desconocidos son señales clásicas de phishing/malware. No lo abras ni respondas: reenvíalo a soporte@verfrut.cl.',
    },
  },
  {
    id: 'llamada-soporte-falso',
    question: 'Te llaman diciendo ser "del soporte de Microsoft" y piden instalar un programa para "arreglar tu equipo". ¿Qué haces?',
    options: [
      { id: 'a', text: 'Sigo las instrucciones, saben mi nombre así que es real' },
      { id: 'b', text: 'Corto la llamada y aviso a Soporte TI', correct: true },
      { id: 'c', text: 'Les pido que llamen más tarde cuando tenga tiempo' },
    ],
    feedback: {
      correct: 'Bien. Ni Microsoft ni TI llaman de improviso pidiendo instalar programas. Es una estafa conocida como "soporte técnico falso".',
      incorrect: 'Es una estafa habitual: nadie legítimo llama de improviso a pedir que instales programas. Corta y reporta la llamada a soporte@verfrut.cl.',
    },
  },
  {
    id: 'datos-sensibles',
    question: 'Necesitas enviar una planilla con datos personales de trabajadores a un colega. ¿Cómo lo haces?',
    options: [
      { id: 'a', text: 'Por WhatsApp, es más rápido' },
      { id: 'b', text: 'Por el correo corporativo o SharePoint, solo al destinatario que corresponde', correct: true },
      { id: 'c', text: 'La subo a mi Google Drive personal y comparto el enlace' },
    ],
    feedback: {
      correct: 'Correcto. La información sensible viaja solo por canales corporativos y únicamente a quien la necesita.',
      incorrect: 'Los datos personales de trabajadores son información sensible: solo deben compartirse por canales corporativos (correo o SharePoint) y con quien corresponde.',
    },
  },
]
