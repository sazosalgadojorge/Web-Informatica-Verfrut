function ProtocolosSeguridadContent() {
  return (
    <>
      <p className="blog-content">
        En Unifrutti, la seguridad de la información es un pilar fundamental para
        proteger los datos de la compañía, de nuestros colaboradores y de quienes confían en
        nosotros. Estos protocolos resumen las prácticas mínimas que cada usuario debe seguir
        dentro de la red corporativa, tanto en Chile como en Perú.
      </p>

      <p className="blog-content alert alert-primary">
        ℹ️ Este documento es referencial. Para casos puntuales o dudas, contacta al equipo de
        Soporte TI escribiendo a <strong>soporte@verfrut.cl</strong>.
      </p>

      <h3 className="blog-subtitle pt-4">🔐 Contraseñas</h3>
      <div className="blog-content pt-2">
        <p>🔹 <strong>Mínimo 12 caracteres</strong>, con mayúsculas, minúsculas, números y al menos un símbolo.</p>
        <p>🔹 No reutilices contraseñas entre sistemas corporativos y servicios personales.</p>
        <p>🔹 Renueva tu contraseña cada 90 días o ante cualquier sospecha de compromiso.</p>
        <p>🔹 Nunca compartas tus credenciales por correo, chat ni con compañeros.</p>
      </div>

      <hr className="blog-hr" />

      <h3 className="blog-subtitle pt-2">📧 Phishing y correos sospechosos</h3>
      <div className="blog-content pt-2">
        <p>🔹 Verifica el remitente antes de hacer clic en cualquier enlace.</p>
        <p>🔹 Desconfía de mensajes urgentes que piden credenciales o transferencias.</p>
        <p>🔹 Reporta los correos sospechosos al área de Soporte TI sin reenviarlos a terceros.</p>
        <p>🔹 No abras adjuntos de remitentes desconocidos (especialmente <code>.zip</code>, <code>.exe</code>, <code>.scr</code>).</p>
      </div>

      <hr className="blog-hr" />

      <h3 className="blog-subtitle pt-2">💻 Equipos y dispositivos</h3>
      <div className="blog-content pt-2">
        <p>🔹 Bloquea tu equipo cada vez que te alejes del puesto (Win + L).</p>
        <p>🔹 Mantén el antivirus y las actualizaciones del sistema operativo al día.</p>
        <p>🔹 No instales software ajeno al aprobado por TI.</p>
        <p>🔹 No conectes dispositivos USB de origen desconocido.</p>
      </div>

      <hr className="blog-hr" />

      <h3 className="blog-subtitle pt-2">🌐 VPN y trabajo remoto</h3>
      <div className="blog-content pt-2">
        <p>🔹 Para acceder a sistemas internos fuera de oficina, conéctate siempre vía la VPN corporativa.</p>
        <p>🔹 Evita usar redes WiFi públicas para tareas corporativas; si no hay alternativa, usa VPN.</p>
        <p>🔹 No guardes información sensible en equipos personales sin autorización.</p>
      </div>

      <hr className="blog-hr" />

      <h3 className="blog-subtitle pt-2">📦 Manejo de información sensible</h3>
      <div className="blog-content pt-2">
        <p>🔹 Comparte archivos confidenciales solo a través de los canales oficiales (SharePoint, OneDrive corporativo).</p>
        <p>🔹 No envíes información sensible por mensajería personal (WhatsApp, correos personales).</p>
        <p>🔹 Aplica la regla del “mínimo necesario”: comparte solo con quien realmente lo necesita.</p>
      </div>

      <hr className="blog-hr" />

      <h3 className="blog-subtitle pt-2">🚨 Reporte de incidentes</h3>
      <p className="blog-content">
        Si detectas un incidente de seguridad (acceso no autorizado, equipo comprometido, robo
        de credenciales, etc.), repórtalo de inmediato al equipo de Soporte TI. Mientras más
        rápido se actúa, menor es el impacto.
      </p>

      <p className="blog-content alert alert-danger">
        <strong>💡 Recuerda:</strong>
        <br />
        La seguridad de la información es responsabilidad de todos. Cada acción cuenta para
        mantener segura la operación de Unifrutti.
      </p>
    </>
  )
}

export default ProtocolosSeguridadContent
