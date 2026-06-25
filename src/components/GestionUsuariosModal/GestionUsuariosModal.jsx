import { useEffect } from 'react'
import { Modal as BsModal } from 'bootstrap'
import { Button } from '../ui'
import './GestionUsuariosModal.scss'

export const GESTION_USUARIOS_MODAL_ID = 'gestionUsuariosModal'
export const GESTION_USUARIOS_MODAL_EVENT = 'verfrut:open-gestion-usuarios-modal'

export function openGestionUsuariosModal() {
  window.dispatchEvent(new CustomEvent(GESTION_USUARIOS_MODAL_EVENT))
}

function GestionUsuariosModal() {
  useEffect(() => {
    const modal = document.getElementById(GESTION_USUARIOS_MODAL_ID)
    if (!modal) return undefined

    const addModalClass = () => document.body.classList.add('gestion-usuarios-modal-open')
    const removeModalClass = () => document.body.classList.remove('gestion-usuarios-modal-open')

    modal.addEventListener('show.bs.modal', addModalClass)
    modal.addEventListener('hidden.bs.modal', removeModalClass)

    const openHandler = () => {
      const instance = BsModal.getOrCreateInstance(modal)
      instance.show()
    }
    window.addEventListener(GESTION_USUARIOS_MODAL_EVENT, openHandler)

    return () => {
      modal.removeEventListener('show.bs.modal', addModalClass)
      modal.removeEventListener('hidden.bs.modal', removeModalClass)
      window.removeEventListener(GESTION_USUARIOS_MODAL_EVENT, openHandler)
      removeModalClass()
    }
  }, [])

  const openRecoverPass = () => {
    window.open('https://api.verfrut.cl/RecoverPass', '_blank', 'noopener,noreferrer')
  }

  const openUnlockUser = () => {
    window.open('https://api.verfrut.cl/recoverpass/unlockuser', '_blank', 'noopener,noreferrer')
  }

  return (
    <div
      className="modal fade"
      id={GESTION_USUARIOS_MODAL_ID}
      tabIndex="-1"
      aria-labelledby="gestionUsuariosModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content gestion-usuarios-modal">
          <div className="modal-body gestion-usuarios-body">
            <h2 id="gestionUsuariosModalLabel" className="visually-hidden">Gestión de usuarios</h2>

            <div className="gestion-usuarios-cards" id="cardContainer">
              <div className="card gestion-usuarios-card p-3">
                <img src="/svg/IconRecoverPass.svg" className="card-img-top mx-auto" alt="Contraseña" loading="lazy" />
                <div className="card-body text-center">
                  <h5 className="card-title">¿Olvidaste tu Contraseña?</h5>
                  <p className="card-text">Gestiona tus credenciales en simples pasos.</p>
                  <Button
                    variant="primary"
                    size="md"
                    className="gestion-usuarios-card__button"
                    onClick={openRecoverPass}
                  >
                    Ingresar
                  </Button>
                </div>
              </div>

              <div className="card gestion-usuarios-card p-3">
                <img src="/svg/Unlock.svg" className="card-img-top mx-auto" alt="Desbloqueo" loading="lazy" />
                <div className="card-body text-center">
                  <h5 className="card-title">Desbloqueo de Usuario</h5>
                  <p className="card-text">Desbloquea tu cuenta de forma rápida y segura.</p>
                  <Button
                    variant="primary"
                    size="md"
                    className="gestion-usuarios-card__button"
                    onClick={openUnlockUser}
                  >
                    Ingresar
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="btn-close-modal gestion-usuarios-close"
            data-bs-dismiss="modal"
            aria-label="Cerrar"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  )
}

export default GestionUsuariosModal
