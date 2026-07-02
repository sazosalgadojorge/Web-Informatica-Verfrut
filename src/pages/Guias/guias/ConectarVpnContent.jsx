import GuideSteps from '../../../components/GuideSteps/GuideSteps'

function ConectarVpnContent() {
  return (
    <>
      <p>
        Los sistemas marcados con el candado de VPN (GLPI, Portal de Solicitudes, entre otros)
        solo funcionan dentro de la red corporativa. Si trabajas desde fuera de la oficina,
        primero debes conectarte a la VPN con <strong>FortiClient</strong>.
      </p>

      <GuideSteps
        steps={[
          {
            title: 'Solicita la instalación de FortiClient',
            body: (
              <>
                Si aún no tienes FortiClient en tu equipo, solicítalo creando un ticket en GLPI o
                escribiendo a <a href="mailto:soporte@verfrut.cl">soporte@verfrut.cl</a>. El equipo
                de TI lo instalará y configurará con los datos de conexión de Unifrutti.
              </>
            ),
          },
          {
            title: 'Abre FortiClient e ingresa tus credenciales',
            body: (
              <>
                Busca FortiClient en el menú de inicio y ábrelo. En la pestaña de VPN, ingresa tu
                usuario y contraseña de red (los mismos con que inicias sesión en Windows).
              </>
            ),
          },
          {
            title: 'Conéctate y espera la confirmación',
            body: (
              <>
                Presiona <strong>Conectar</strong>. Cuando la conexión se establezca verás el
                estado "Conectado" y el ícono de FortiClient activo en la barra de tareas.
              </>
            ),
          },
          {
            title: 'Abre el sistema que necesitas',
            body: (
              <>
                Con la VPN activa ya puedes ingresar a GLPI, el Portal de Solicitudes y el resto de
                los sistemas internos. Al terminar tu jornada, desconéctate desde el mismo
                FortiClient.
              </>
            ),
          },
        ]}
      />

      <p>
        <strong>¿Problemas para conectarte?</strong> Verifica primero que tu internet funcione y
        que tus credenciales sean correctas. Si el error persiste, reporta una incidencia
        indicando el mensaje exacto que muestra FortiClient.
      </p>
    </>
  )
}

export default ConectarVpnContent
