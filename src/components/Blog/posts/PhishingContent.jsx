function PhishingContent() {
  return (
    <>
      <p className="blog-content">
        Seguro te ha llegado un correo o un mensaje de texto que dice algo como{" "}
        <em>"Tu cuenta ha sido bloqueada, haz clic aquí para recuperarla"</em> o{" "}
        <em>"Ganaste un premio, ingresa tus datos para reclamarlo"</em>. Si te ha pasado,
        felicidades: acabas de encontrarte con un intento de <strong>phishing</strong>.
      </p>

      <p className="blog-content alert alert-primary">
        El phishing (se pronuncia "físhing") es una de las estafas más comunes en internet.
        La palabra viene del inglés <em>fishing</em> (pescar), porque los atacantes "pescan"
        víctimas lanzando un anzuelo y esperando a que alguien pique.
      </p>

      <h3 className="blog-subtitle pt-4">¿Qué es el phishing exactamente?</h3>
      <p className="blog-content">
        El phishing es un tipo de estafa en la que alguien se hace pasar por una empresa,
        institución o persona de confianza para robarte información personal. Su objetivo
        puede ser obtener tus contraseñas, números de tarjeta, datos bancarios, o incluso
        acceso a los sistemas de tu trabajo.
      </p>
      <p className="blog-content">
        Los atacantes envían mensajes falsos que parecen legítimos, con la esperanza de que
        hagas clic en un enlace, descargues un archivo o les respondas con datos sensibles.
        La clave del engaño está en la apariencia: los mensajes suelen estar diseñados para
        verse idénticos a comunicaciones reales de bancos, servicios digitales o incluso de
        tu propia empresa.
      </p>

      <hr className="blog-hr" />

      <h3 className="blog-subtitle pt-2">¿Cómo funciona un ataque de phishing?</h3>
      <p className="blog-content">
        El proceso es más sencillo de lo que crees. Los atacantes siguen una secuencia de
        pasos que, aunque simple, resulta efectiva si la víctima no está alerta:
      </p>
      <ol className="blog-content">
        <li className="pb-2">
          <strong>El anzuelo:</strong> El atacante crea un mensaje falso pero con buena
          apariencia. Puede ser un correo que parece de tu banco, de Netflix, de la empresa
          donde trabajas o incluso de un compañero. El mensaje incluye un logotipo, colores
          y un tono que intenta ser profesional.
        </li>
        <li className="pb-2">
          <strong>La trampa:</strong> El mensaje incluye un enlace o un archivo adjunto. El
          enlace te lleva a una página web que se ve idéntica a la verdadera, pero en realidad
          es una copia falsa controlada por los estafadores. Todo está diseñado para que no
          notes la diferencia.
        </li>
        <li className="pb-2">
          <strong>El engaño:</strong> La página falsa te pide que ingreses tu usuario,
          contraseña o datos personales. Al hacerlo, esos datos viajan directamente al
          atacante, no al sitio real. En ese momento, sin saberlo, le entregaste las llaves
          de tu cuenta.
        </li>
        <li className="pb-2">
          <strong>El daño:</strong> Con tu información en sus manos, los estafadores pueden
          entrar a tus cuentas reales, robar dinero, suplantar tu identidad, enviar más
          correos de phishing a tus contactos o infectar tu computador con virus.
        </li>
      </ol>

      <hr className="blog-hr" />

      <h3 className="blog-subtitle pt-2">Señales de alerta: cómo detectar un phishing</h3>
      <p className="blog-content">
        Los mensajes de phishing suelen tener características que los delatan. Si identificas
        alguna de estas señales, detente y no interactúes con el mensaje:
      </p>
      <div className="blog-content pt-2">
        <p>
          <strong>Urgencia o miedo.</strong> Frases como "Tu cuenta será cerrada en 24 horas",
          "Has sido hackeado" o "Debes pagar ahora". Los estafadores quieren que actúes sin
          pensar y aprovechan el instinto de reaccionar rápido ante una amenaza.
        </p>
        <p>
          <strong>Ofertas demasiado buenas.</strong> "Ganaste un iPhone", "Herencia de un familiar
          lejano", "Trabajo desde casa ganando miles de dólares". Si suena demasiado bueno para
          ser verdad, casi siempre lo es.
        </p>
        <p>
          <strong>Saludos genéricos.</strong> "Estimado usuario", "Apreciado cliente" en lugar
          de tu nombre real. Las empresas verdaderas saben quién eres y te llaman por tu nombre.
        </p>
        <p>
          <strong>Errores de ortografía y gramática.</strong> Los mensajes legítimos suelen
          estar bien redactados. Los correos de phishing a menudo contienen faltas ortográficas,
          traducciones literales de otros idiomas o redacciones que simplemente "no suenan bien".
        </p>
        <p>
          <strong>Enlaces sospechosos.</strong> Si pasas el mouse sobre un enlace sin hacer clic,
          verás la dirección real a la que apunta. Si el texto dice "www.banco-seguro.com" pero
          el enlace lleva a "www.banco-seguro.xyz" o una dirección extraña, es falso.
        </p>
        <p>
          <strong>Archivos adjuntos inesperados.</strong> Si recibes un archivo (.zip, .exe,
          .docm, .pdf) sin haberlo solicitado, no lo abras. Puede contener malware que infecte
          tu equipo.
        </p>
      </div>

      <hr className="blog-hr" />

      <h3 className="blog-subtitle pt-2">El phishing no solo llega por correo</h3>
      <p className="blog-content">
        Aunque el correo electrónico es el medio más común, los atacantes utilizan diversos
        canales para llegar a sus víctimas:
      </p>
      <div className="blog-content pt-2">
        <p>
          <strong>Mensajes de texto (SMS).</strong> Conocido como <em>smishing</em>. Recibes un
          mensaje falso que parece de tu banco, de una empresa de delivery o de una entidad
          gubernamental, con un enlace para que ingreses tus datos.
        </p>
        <p>
          <strong>Llamadas telefónicas.</strong> Conocido como <em>vishing</em>. Alguien te llama
          haciéndose pasar por soporte técnico de tu banco o de tu empresa, y te pide información
          personal o códigos de verificación.
        </p>
        <p>
          <strong>Redes sociales y aplicaciones de mensajería.</strong> Perfiles falsos en WhatsApp,
          Facebook o Instagram que ofrecen promociones imposibles, sorteos o te piden datos
          "para verificar tu cuenta".
        </p>
      </div>

      <hr className="blog-hr" />

      <h3 className="blog-subtitle pt-2">Ejemplo visual: cómo distinguir un correo legítimo de uno falso</h3>
      <div className="table-responsive">
        <table className="table table-bordered blog-content">
          <thead className="table-light">
            <tr>
              <th style={{ width: '25%' }}>Elemento</th>
              <th style={{ width: '37.5%' }}>Correo legítimo</th>
              <th style={{ width: '37.5%' }}>Correo de phishing</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Remitente</strong></td>
              <td>@bancochile.cl, @unifrutti.com</td>
              <td className="text-danger">@banco-chile-xyz.com, @un1frutt1.com</td>
            </tr>
            <tr>
              <td><strong>Saludo</strong></td>
              <td>"Hola Juan Pérez"</td>
              <td className="text-danger">"Estimado cliente" o "Usuario"</td>
            </tr>
            <tr>
              <td><strong>Tono</strong></td>
              <td>Informativo, sin presión</td>
              <td className="text-danger">Urgente, amenazante ("acción inmediata requerida")</td>
            </tr>
            <tr>
              <td><strong>Enlaces</strong></td>
              <td>Apuntan al dominio real (ej. /unifrutti.com/cambiar-clave)</td>
              <td className="text-danger">Apuntan a dominios parecidos pero diferentes</td>
            </tr>
            <tr>
              <td><strong>Adjuntos</strong></td>
              <td>Solo si los solicitaste o esperabas</td>
              <td className="text-danger">Archivos inesperados (.zip, .exe, .docm)</td>
            </tr>
            <tr>
              <td><strong>Errores</strong></td>
              <td>Redacción correcta y profesional</td>
              <td className="text-danger">Faltas ortográficas, redacción extraña</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr className="blog-hr" />

      <h3 className="blog-subtitle pt-2">Cómo protegerte del phishing</h3>
      <p className="blog-content">
        La mejor defensa contra el phishing es la combinación de conocimiento y buenos hábitos.
        Sigue estas recomendaciones para mantener tus datos seguros:
      </p>
      <div className="blog-content pt-2">
        <p>
          <strong>Nunca hagas clic en enlaces sospechosos.</strong> Si tienes dudas sobre un
          mensaje, no uses el enlace que contiene. En su lugar, abre tu navegador y escribe
          la dirección del sitio directamente.
        </p>
        <p>
          <strong>Verifica siempre el remitente.</strong> Revisa la dirección de correo
          electrónico completa, no solo el nombre que aparece. Los estafadores pueden poner
          cualquier nombre en el campo "De:".
        </p>
        <p>
          <strong>No compartas tus contraseñas</strong> con nadie, ni por correo, teléfono o
          mensaje. Ninguna empresa legítima te pedirá tu clave por estos medios.
        </p>
        <p>
          <strong>Activa la verificación en dos pasos</strong> en tus cuentas importantes
          (correo electrónico, banca en línea, redes sociales). De esta forma, aunque alguien
          obtenga tu contraseña, no podrá acceder sin un segundo código que solo tú tienes.
        </p>
        <p>
          <strong>Mantén tus dispositivos actualizados</strong> y usa un antivirus confiable.
          Las actualizaciones corrigen vulnerabilidades que los atacantes podrían aprovechar.
        </p>
        <p>
          <strong>Confía en tu instinto.</strong> Si algo te parece raro, probablemente lo sea.
          Es mejor dejar pasar una "oferta" o un "aviso urgente" que terminar perdiendo tus datos.
        </p>
      </div>

      <hr className="blog-hr" />

      <h3 className="blog-subtitle pt-2">¿Qué hacer si caíste en un phishing?</h3>
      <p className="blog-content">
        Todos podemos cometer un error. Si hiciste clic en un enlace sospechoso o ingresaste
        tus datos en una página falsa, lo importante es actuar rápido para minimizar el daño:
      </p>
      <ol className="blog-content">
        <li className="pb-2">
          <strong>Cambia tu contraseña</strong> de la cuenta afectada inmediatamente. Hazlo
          desde un dispositivo que sepas que está limpio y seguro.
        </li>
        <li className="pb-2">
          <strong>Contacta al área de Soporte TI</strong> escribiendo a{" "}
          <strong>soporte@verfrut.cl</strong> para que tomen medidas adicionales y puedan
          alertar a otros compañeros.
        </li>
        <li className="pb-2">
          <strong>Si diste datos bancarios, llama a tu banco</strong> para bloquear tu tarjeta
          o cuenta de inmediato.
        </li>
        <li className="pb-2">
          <strong>No borres el mensaje</strong>. Consérvalo, ya que puede servir como evidencia
          para investigar el ataque y entender cómo ocurrió.
        </li>
      </ol>

      <p className="blog-content alert alert-danger">
        <strong>Recuerda:</strong> En Unifrutti, el equipo de Soporte TI <strong>nunca</strong> te
        pedirá tu contraseña por correo, teléfono ni mensaje. Si recibes una solicitud así,
        repórtala de inmediato. La seguridad empieza por cada uno de nosotros.
      </p>

      <h3 className="blog-subtitle pt-4">En resumen</h3>
      <p className="blog-content">
        El phishing es una estafa que busca engañarte para que entregues tu información
        personal. Los atacantes utilizan correos, mensajes de texto, llamadas y redes
        sociales para hacerte creer que están comunicándose contigo de parte de una empresa
        o persona de confianza.
      </p>
      <p className="blog-content">
        La mejor defensa es la información y el sentido común: desconfía de mensajes urgentes,
        verifica siempre el remitente y los enlaces antes de hacer clic, y ante la menor duda,
        consulta con el equipo de TI.
      </p>
      <p className="blog-content">
        La seguridad digital empieza por ti. Cada vez que detectas y reportas un intento de
        phishing, ayudas a proteger no solo tus datos, sino también los de toda la organización.
      </p>
    </>
  )
}

export default PhishingContent
