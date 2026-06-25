import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../ui'
import './VerfrutCloud.scss'

const YOUTUBE_ID = 'sy91ryJfeMI'
const YOUTUBE_EMBED = `https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0`

function VerfrutCloud() {
  const navigate = useNavigate()
  const [videoOpen, setVideoOpen] = useState(false)

  useEffect(() => {
    if (!videoOpen) return undefined

    const previousOverflow = document.body.style.overflow
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setVideoOpen(false)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', closeOnEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [videoOpen])

  return (
    <>
      <section className="verfrut-cloud" id="verfrut-cloud">
        <div className="container">
          <div className="row align-items-center g-4 g-xl-5">
            <div className="col-xl-6">
              <span className="verfrut-cloud__tag">Innovación</span>
              <h2 className="verfrut-cloud__title h1 display-8 fw-bold mb-4">
                Verfrut Cloud: La clave para optimizar el proceso de la fruta en Verfrut Chile y Perú
              </h2>
              <p className="verfrut-cloud__description">
                Verfrut Cloud es nuestra solución tecnológica que moderniza un antiguo ERP,
                transformándolo en una plataforma web para optimizar procesos, simplificar su uso y
                mejorar la gestión de la fruta.
              </p>

              <div className="verfrut-cloud__stats">
                <div className="verfrut-cloud__stat">
                  <span className="verfrut-cloud__stat-number">
                    70<span className="verfrut-cloud__stat-percent">%</span>
                  </span>
                  <p>De productividad en nuestros colaboradores.</p>
                </div>
                <div className="verfrut-cloud__stat">
                  <span className="verfrut-cloud__stat-number">
                    80<span className="verfrut-cloud__stat-percent">%</span>
                  </span>
                  <p>Más fácil con un enfoque centrado en el usuario.</p>
                </div>
              </div>

              <div className="verfrut-cloud__cta">
                <Button variant="primary" size="lg" onClick={() => navigate('/blog/verfrut-cloud')}>
                  Ver Más
                </Button>
              </div>
            </div>

            <div className="col-xl-6">
              <div className="verfrut-cloud__media">
                <img
                  src="/blog/verfrut-cloud-cover.png"
                  alt="Verfrut Cloud"
                  loading="lazy"
                  className="verfrut-cloud__cover"
                />
                <button
                  type="button"
                  className="play-btn"
                  aria-label="Reproducir video de Verfrut Cloud"
                  onClick={() => setVideoOpen(true)}
                >
                  <span className="play-btn__circle">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8 5.5v13a1 1 0 0 0 1.55.83l10-6.5a1 1 0 0 0 0-1.66l-10-6.5A1 1 0 0 0 8 5.5Z" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {videoOpen && (
        <div
          className="verfrut-cloud-video-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Video Verfrut Cloud"
          onClick={() => setVideoOpen(false)}
        >
          <div className="verfrut-cloud-video-lightbox__content" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="verfrut-cloud-video-lightbox__close"
              aria-label="Cerrar video"
              onClick={() => setVideoOpen(false)}
            >
              ×
            </button>
            <div className="verfrut-cloud-video-lightbox__frame">
              <iframe
                src={YOUTUBE_EMBED}
                title="Verfrut Cloud"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default VerfrutCloud
