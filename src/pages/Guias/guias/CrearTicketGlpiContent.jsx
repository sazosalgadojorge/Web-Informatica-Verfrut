import GuideSteps from '../../../components/GuideSteps/GuideSteps'

function CrearTicketGlpiContent() {
  return (
    <>
      <p>
        GLPI es la plataforma donde Soporte TI recibe y gestiona los tickets de incidencias y
        solicitudes. Un ticket bien descrito se resuelve mucho más rápido: esta guía te muestra
        cómo crearlo paso a paso.
      </p>

      <GuideSteps
        steps={[
          {
            title: 'Conéctate a la red corporativa o a la VPN',
            body: (
              <>
                GLPI solo es accesible desde la red de Unifrutti. Si estás fuera de la oficina,
                conéctate primero con FortiClient (mira la guía "Cómo conectarte a la VPN").
              </>
            ),
          },
          {
            title: 'Ingresa al portal GLPI de tu país',
            body: (
              <>
                Chile: <a href="https://glpi.verfrut.cl" target="_blank" rel="noopener noreferrer">glpi.verfrut.cl</a> ·
                Perú: <a href="https://glpi.verfrut.pe" target="_blank" rel="noopener noreferrer">glpi.verfrut.pe</a>.
                Inicia sesión con tu usuario y contraseña de red.
              </>
            ),
          },
          {
            title: 'Crea un ticket nuevo',
            body: (
              <>
                Ve a <strong>Crear un ticket</strong> y elige el tipo: <em>Incidencia</em> si algo
                dejó de funcionar, o <em>Solicitud</em> si necesitas algo nuevo (un acceso, un
                programa, un equipo).
              </>
            ),
          },
          {
            title: 'Describe el problema con detalle',
            body: (
              <>
                Indica qué estabas haciendo, qué mensaje de error apareció (adjunta una captura de
                pantalla si puedes), en qué sistema y desde qué equipo. Evita descripciones como
                "no funciona": mientras más contexto, más rápida la solución.
              </>
            ),
          },
          {
            title: 'Envía y haz seguimiento',
            body: (
              <>
                Al enviar el ticket recibirás un número de seguimiento y notificaciones por correo
                con cada cambio de estado. También puedes revisarlo en la sección
                <strong> Mis tickets</strong> de GLPI.
              </>
            ),
          },
        ]}
      />

      <p>
        Si el problema es urgente y estás fuera del horario laboral, revisa la página de
        Turnos para contactar al responsable de soporte de la semana.
      </p>
    </>
  )
}

export default CrearTicketGlpiContent
