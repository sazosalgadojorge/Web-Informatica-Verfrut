import { useEffect, useState } from 'react'
import { Modal, Button } from '../ui'
import { detectCountry, INCIDENCIAS_URLS } from '../../utils/country'
import chile from '../../assets/chile.svg'
import peru from '../../assets/peru.svg'
import './IncidenciasModal.scss'

export const INCIDENCIAS_MODAL_EVENT = 'verfrut:open-incidencias-modal'

export function openIncidenciasModal() {
  window.dispatchEvent(new CustomEvent(INCIDENCIAS_MODAL_EVENT))
}

/**
 * Intento principal: detectar país automáticamente y abrir el portal directo.
 * Si no se puede determinar, cae al modal.
 */
export function reportIncident() {
  const country = detectCountry()
  if (country && INCIDENCIAS_URLS[country]) {
    window.open(INCIDENCIAS_URLS[country], '_blank', 'noopener,noreferrer')
    return
  }
  openIncidenciasModal()
}

function IncidenciasModal() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setOpen(true)
    window.addEventListener(INCIDENCIAS_MODAL_EVENT, handler)
    return () => window.removeEventListener(INCIDENCIAS_MODAL_EVENT, handler)
  }, [])

  const goTo = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
    setOpen(false)
  }

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      title="Seleccione su ubicación"
      size="sm"
      className="incidencias-modal"
    >
      <div className="incidencias-options">
        <Button
          variant="primary"
          fullWidth
          onClick={() => goTo('https://incidencias.verfrut.cl/login')}
        >
          <span className="incidencias-option-content">
            <img src={chile} alt="Chile" />
            <span>Incidencias Chile</span>
          </span>
        </Button>

        <Button
          variant="primary"
          fullWidth
          onClick={() => goTo('https://incidencias.verfrut.pe/login')}
        >
          <span className="incidencias-option-content">
            <img src={peru} alt="Perú" />
            <span>Incidencias Perú</span>
          </span>
        </Button>
      </div>
    </Modal>
  )
}

export default IncidenciasModal
