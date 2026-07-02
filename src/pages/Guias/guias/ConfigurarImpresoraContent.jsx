import GuideSteps from '../../../components/GuideSteps/GuideSteps'

function ConfigurarImpresoraContent() {
  return (
    <>
      <p>
        Antes de reportar una incidencia por problemas de impresión, sigue estos pasos: la
        mayoría de los casos se resuelven en menos de cinco minutos sin ayuda de soporte.
      </p>

      <GuideSteps
        steps={[
          {
            title: 'Verifica la impresora física',
            body: (
              <>
                Confirma que la impresora esté encendida, con papel en la bandeja y sin luces de
                error parpadeando. Si muestra un mensaje en pantalla (tóner, atasco), anótalo.
              </>
            ),
          },
          {
            title: 'Revisa que estés imprimiendo en la impresora correcta',
            body: (
              <>
                Al imprimir, en la ventana de impresión revisa el nombre de la impresora
                seleccionada. En oficinas con varias impresoras es común enviar el documento a
                otra sin darse cuenta.
              </>
            ),
          },
          {
            title: 'Limpia la cola de impresión',
            body: (
              <>
                Abre <strong>Configuración → Bluetooth y dispositivos → Impresoras y escáneres</strong>,
                selecciona la impresora y entra a <strong>Abrir cola de impresión</strong>. Si hay
                documentos atascados, cancélalos e intenta imprimir de nuevo.
              </>
            ),
          },
          {
            title: 'Reinicia tu equipo',
            body: (
              <>
                Muchos problemas de conexión con la impresora se resuelven reiniciando el
                computador. Guarda tu trabajo y reinicia antes de continuar.
              </>
            ),
          },
          {
            title: 'Si nada funciona, reporta una incidencia',
            body: (
              <>
                Crea un ticket indicando el nombre o la ubicación de la impresora, el mensaje de
                error que viste y desde qué equipo intentaste imprimir. Con esos datos el equipo
                de soporte podrá ayudarte más rápido.
              </>
            ),
          },
        ]}
      />
    </>
  )
}

export default ConfigurarImpresoraContent
