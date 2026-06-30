import VpnBadge from '../../ui/VpnBadge/VpnBadge'

function IncidenciasContent() {
  return (
    <>
      <p className="blog-content">
        En Unifrutti, el manejo de incidencias en los sistemas es clave para garantizar la
        continuidad operativa y la satisfacción de los usuarios. Con este objetivo, se ha
        establecido un protocolo claro y eficiente que involucra a todos los colaboradores
        del área de Desarrollo, Sistemas e Innovación, tanto en Chile como en Perú.
      </p>

      <h3 className="blog-subtitle pt-4">Plataforma de incidencias</h3>
      <p className="blog-content">
        Chile:{' '}
        <a href="https://incidencias.verfrut.cl/" target="_blank" rel="noopener noreferrer">
          https://incidencias.verfrut.cl/<VpnBadge />
        </a>
        <br />
        Perú:{' '}
        <a href="https://incidencias.verfrut.pe/" target="_blank" rel="noopener noreferrer">
          https://incidencias.verfrut.pe/<VpnBadge />
        </a>
      </p>
      <p className="blog-content alert alert-primary">
        Estos enlaces solo están disponibles dentro de la red corporativa de Unifrutti. Si te
        encuentras trabajando fuera de las oficinas, recuerda que puedes acceder a estas
        plataformas mediante la conexión VPN proporcionada por el equipo de TI. Si necesitas
        ayuda para conectarte, no dudes en solicitar el soporte correspondiente.
      </p>

      <h3 className="blog-subtitle pt-4">Alcance</h3>
      <p className="blog-content">
        Este protocolo aplica a todas las incidencias técnicas reportadas por los
        colaboradores de Unifrutti en Chile y Perú, incluyendo problemas de acceso, errores
        en sistemas, solicitudes de modificación y nuevos desarrollos. Cada incidencia es
        registrada y gestionada a través de la plataforma GLPi, lo que permite un
        seguimiento ordenado y transparente de principio a fin.
      </p>

      <hr className="blog-hr" />

      <h3 className="blog-subtitle pt-2">Roles y responsabilidades</h3>
      <p className="blog-content">
        Para que la gestión de incidencias funcione correctamente, cada persona involucrada
        tiene un rol definido con tareas específicas:
      </p>
      <div className="blog-content pt-2">
        <p>
          <strong>Solicitante.</strong> Es la persona que reporta la incidencia. Debe
          registrarla en GLPi con todos los detalles necesarios: qué ocurre, por qué es
          importante, cuándo se necesita y cómo espera que sea resuelto. También debe
          colaborar con el técnico asignado para facilitar la resolución.
        </p>
        <p>
          <strong>Técnico asignado.</strong> Revisa la incidencia, se comunica con el
          solicitante para aclarar detalles y documenta el proceso de resolución siguiendo
          las metodologías establecidas en GLPi.
        </p>
        <p>
          <strong>Responsable de asignar incidencias.</strong> Distribuye los casos entre
          los técnicos disponibles y establece fechas tentativas para la resolución.
        </p>
        <p>
          <strong>Jefe de proyecto y subgerente de TI.</strong> Supervisan el proceso,
          revisan y aprueban cambios en los plazos, y garantizan la calidad de las
          soluciones entregadas.
        </p>
      </div>

      <hr className="blog-hr" />

      <h3 className="blog-subtitle pt-2">Tiempos estimados de resolución</h3>
      <p className="blog-content">
        Cada tipo de incidencia tiene un tiempo estimado de resolución, dependiendo de su
        complejidad:
      </p>
      <div className="blog-content pt-2">
        <p><strong>Accesos:</strong> hasta 4 horas.</p>
        <p><strong>Errores en sistemas:</strong> máximo 24 horas.</p>
        <p><strong>Modificaciones:</strong> hasta 1 semana.</p>
        <p><strong>Nuevos desarrollos:</strong> plazos definidos en conjunto con las áreas
        involucradas, según la complejidad del requerimiento.</p>
      </div>

      <hr className="blog-hr" />

      <h3 className="blog-subtitle pt-2">Metodologías y herramientas</h3>
      <p className="blog-content">
        La documentación y el seguimiento de las incidencias se realizan a través de
        metodologías ágiles, reforzadas con canales de comunicación como correo electrónico,
        reuniones virtuales y la plataforma GLPi. Esto garantiza la transparencia y el
        registro completo de cada paso del proceso.
      </p>

      <h3 className="blog-subtitle pt-2">Mejora continua</h3>
      <p className="blog-content">
        Este protocolo es dinámico y está sujeto a revisiones constantes para detectar áreas
        de mejora. Se promueve la capacitación permanente del personal para asegurar una
        gestión de incidencias efectiva y alineada con las mejores prácticas.
      </p>

      <h3 className="blog-subtitle pt-2">Cómo registrar una incidencia</h3>
      <p className="blog-content">
        Para garantizar una atención rápida y eficiente, sigue estos pasos al registrar tu
        incidencia en la plataforma:
      </p>

      <ol>
        <li className="blog-content">
          <strong>Ingresa a la plataforma</strong>
          <br />
          Accede a la plataforma correspondiente a tu país:
          <br />
          - Chile:{' '}
          <a href="https://incidencias.verfrut.cl/" target="_blank" rel="noopener noreferrer">
            https://incidencias.verfrut.cl/
          </a>
          <br />
          - Perú:{' '}
          <a href="https://incidencias.verfrut.pe/" target="_blank" rel="noopener noreferrer">
            https://incidencias.verfrut.pe/
          </a>
        </li>
        <li className="blog-content">
          <strong>Completa todos los campos requeridos</strong>
          <br />
          Describe detalladamente la incidencia, indicando:
          <div className="blog-content">
            <strong>Qué necesitas:</strong> una descripción clara y precisa de la solicitud
            o problema.<br />
            <strong>Por qué lo necesitas:</strong> la razón o justificación.<br />
            <strong>Cuándo lo necesitas:</strong> el plazo o nivel de urgencia.<br />
            <strong>Cómo esperas que sea resuelto:</strong> cualquier detalle técnico o de
            formato relevante.
          </div>
        </li>
        <li className="blog-content">
          <strong>Adjunta la información necesaria</strong>
          <br />
          Si es posible, añade capturas de pantalla, documentos o cualquier otro archivo que
          ayude a ilustrar mejor el problema o solicitud.
        </li>
        <li className="blog-content">
          <strong>Mantente disponible</strong>
          <br />
          Una vez registrada la incidencia, el técnico asignado se pondrá en contacto
          contigo para aclarar dudas o solicitar más información si es necesario. Tu
          colaboración es clave para resolverla de manera eficiente.
        </li>
      </ol>

      <p className="blog-content alert alert-danger">
        <strong>Recuerda:</strong> Si estás fuera de las oficinas, asegúrate de estar
        conectado a través de la <strong>VPN de Unifrutti</strong> para poder acceder a la
        plataforma GLPi.
      </p>

      <h3 className="blog-subtitle pt-2">Compromiso con la mejora continua</h3>
      <p className="blog-content">
        Con este protocolo y el uso de la plataforma GLPi, buscamos optimizar la gestión de
        incidencias y asegurar que todos los problemas o solicitudes sean atendidos de forma
        oportuna. La participación activa de cada usuario y la colaboración con el equipo de
        soporte son fundamentales para lograr soluciones rápidas y efectivas.
      </p>
    </>
  )
}

export default IncidenciasContent
