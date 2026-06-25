import React, { useState, useEffect } from 'react'
import '@unifrutti/ui/components/alert'
import '@unifrutti/ui/components/card'
import '@unifrutti/ui/components/tag'
import './Turnos.scss'
import Footer from '../Footer/Footer'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import { Button } from '../ui'

const AREA_CONFIG = {
  Desarrollo: {
    title: 'Área de Desarrollo',
    alt: 'Desarrollo',
    description: 'Sistemas internos, aplicaciones, integraciones y errores de plataformas operativas.',
  },
  Soporte: {
    title: 'Soporte Técnico',
    alt: 'Soporte',
    description: 'Accesos, equipos, correo, red, impresoras y soporte técnico general.',
  },
}

const getWeek = (date) => {
  const newDate = new Date(date.getTime())
  newDate.setHours(0, 0, 0, 0)
  newDate.setDate(newDate.getDate() + 3 - ((newDate.getDay() + 6) % 7))
  const week1 = new Date(newDate.getFullYear(), 0, 4)
  return 1 + Math.round(((newDate - week1) / 86400000 - 3 + ((week1.getDay() + 6) % 7)) / 7)
}

const getWeekRange = (date) => {
  const monday = new Date(date.getTime())
  monday.setHours(0, 0, 0, 0)
  monday.setDate(monday.getDate() - ((monday.getDay() + 6) % 7))

  const sunday = new Date(monday.getTime())
  sunday.setDate(monday.getDate() + 6)

  return { monday, sunday }
}

const formatShortDate = (date) => (
  new Intl.DateTimeFormat('es-CL', {
    day: '2-digit',
    month: 'long',
  }).format(date)
)

const formatPhoneNumber = (phone) => {
  if (!phone) return ''

  const digits = String(phone).replace(/\D/g, '')

  if (digits.length === 11 && digits.startsWith('56')) {
    return `+56 ${digits.slice(2, 3)} ${digits.slice(3, 7)} ${digits.slice(7)}`
  }

  if (digits.length === 9 && digits.startsWith('9')) {
    return `${digits.slice(0, 1)} ${digits.slice(1, 5)} ${digits.slice(5)}`
  }

  return phone
}

const normalizePhone = (phone, keepPlus = true) => {
  if (!phone) return ''

  return String(phone).replace(keepPlus ? /[^\d+]/g : /\D/g, '')
}

const getPhoneHref = (phone) => {
  if (!phone) return undefined

  return `tel:${normalizePhone(phone)}`
}

const getWhatsAppHref = (phone, area) => {
  const normalizedPhone = normalizePhone(phone, false)
  const message = encodeURIComponent(`Hola, contacto por el turno fuera de horario de ${area}.`)

  return `https://wa.me/${normalizedPhone}?text=${message}`
}

const findTurno = (data, week, area) => (
  data.find(turno => turno.semana === week && turno.area === area)
)

const getNextWeek = (data, currentWeek) => {
  const maxWeek = Math.max(...data.map(turno => turno.semana))
  return currentWeek >= maxWeek ? 1 : currentWeek + 1
}

function ContactCard({ area, turno, nextTurno, copiedArea, onCopyPhone }) {
  const config = AREA_CONFIG[area]
  const openWhatsApp = () => {
    if (!turno) return

    window.open(getWhatsAppHref(turno.telefono, config.title), '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="col-lg-6">
      <u-card class="turnos-card">
        <div className="card-content">
          <div className="contact-card__header">
            <h3 className="card-title">{config.title}</h3>
          </div>

          <p className="contact-description">{config.description}</p>

          {turno ? (
            <>
              <div className="contact-person">
                <span>Responsable vigente</span>
                <strong>{turno.responsable}</strong>
              </div>

              <div className="contact-phone-row">
                <a className="contact-phone" href={getPhoneHref(turno.telefono)}>
                  {formatPhoneNumber(turno.telefono)}
                </a>
                <div className="contact-actions">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="contact-action-button"
                  onClick={() => onCopyPhone(turno.telefono, area)}
                  aria-label={`Copiar teléfono de ${config.title}`}
                >
                  <span className="contact-action-content">
                    <i className={copiedArea === area ? 'fi fi-rr-check' : 'fi fi-rr-copy'} aria-hidden="true" />
                    <span>{copiedArea === area ? 'Copiado' : 'Copiar'}</span>
                  </span>
                </Button>

                <Button
                    variant="primary"
                    size="sm"
                    className="contact-action-button"
                  onClick={openWhatsApp}
                  aria-label={`Contactar por WhatsApp a ${config.title}`}
                >
                  <span className="contact-action-content">
                    <i className="fi fi-brands-whatsapp" aria-hidden="true" />
                    <span>WhatsApp</span>
                  </span>
                </Button>
                </div>
              </div>
            </>
          ) : (
            <p className="no-turno">No hay turno asignado</p>
          )}

        </div>

        {nextTurno && (
          <div slot="footer" className="next-turn">
            <span>Próxima semana</span>
            <strong>{nextTurno.responsable}</strong>
          </div>
        )}
      </u-card>
    </div>
  )
}

const Turnos = () => {
  const [turnoDesarrollo, setTurnoDesarrollo] = useState(null)
  const [turnoSoporte, setTurnoSoporte] = useState(null)
  const [nextTurnoDesarrollo, setNextTurnoDesarrollo] = useState(null)
  const [nextTurnoSoporte, setNextTurnoSoporte] = useState(null)
  const [weekInfo] = useState(() => {
    const today = new Date()
    const { monday, sunday } = getWeekRange(today)

    return {
      currentWeek: getWeek(today),
      range: `del ${formatShortDate(monday)} al ${formatShortDate(sunday)}`,
    }
  })
  const [copiedArea, setCopiedArea] = useState(null)

  useEffect(() => {
    Promise.all([
      fetch('public/json/turnos_sistemas.json').then(response => response.json()),
      fetch('public/json/turnos_soporte.json').then(response => response.json()),
    ])
      .then(([desarrolloData, soporteData]) => {
        const nextDevelopmentWeek = getNextWeek(desarrolloData, weekInfo.currentWeek)
        const nextSupportWeek = getNextWeek(soporteData, weekInfo.currentWeek)

        setTurnoDesarrollo(findTurno(desarrolloData, weekInfo.currentWeek, 'Desarrollo'))
        setTurnoSoporte(findTurno(soporteData, weekInfo.currentWeek, 'Soporte'))
        setNextTurnoDesarrollo(findTurno(desarrolloData, nextDevelopmentWeek, 'Desarrollo'))
        setNextTurnoSoporte(findTurno(soporteData, nextSupportWeek, 'Soporte'))
      })
      .catch(error => console.error('Error cargando turnos:', error))
  }, [weekInfo.currentWeek])

  const handleCopyPhone = async (phone, area) => {
    try {
      await navigator.clipboard.writeText(formatPhoneNumber(phone))
      setCopiedArea(area)
      window.setTimeout(() => setCopiedArea(null), 2000)
    } catch (error) {
      console.error('Error copiando teléfono:', error)
    }
  }

  return (
    <div>
      {/* Breadcrumb */}
      <div className="container-large">
        <Breadcrumb title="Turnos"/>
      </div>

      {/* Turnos */}
    <div className="turnos-container">
      <div className="container">
        <section className="turnos-hero">
          <div>
            <span className="turnos-kicker">Turnos fuera de horario</span>
            <h2 className="section-title">🛠️ Responsables disponibles esta semana</h2>
            <p className="section-description">
              Consulta a quién contactar cuando una incidencia crítica afecte la operación fuera del horario laboral.
            </p>
          </div>
        </section>

        <section className="turnos-section">
          <div className="row g-4">
            <ContactCard
              area="Desarrollo"
              turno={turnoDesarrollo}
              nextTurno={nextTurnoDesarrollo}
              copiedArea={copiedArea}
              onCopyPhone={handleCopyPhone}
            />

            <ContactCard
              area="Soporte"
              turno={turnoSoporte}
              nextTurno={nextTurnoSoporte}
              copiedArea={copiedArea}
              onCopyPhone={handleCopyPhone}
            />
          </div>
        </section>

        <u-alert class="turnos-summary" variant="info" title="Uso fuera de horario">
          Contacta al turno disponible solo cuando exista una incidencia crítica. Ten a mano el sistema afectado, usuario, captura del error y hora aproximada.
        </u-alert>

        <section className="turnos-guide" aria-labelledby="turnos-guide-title">
          <header className="turnos-guide__header">
            <span className="turnos-guide__kicker">Guía rápida</span>
            <h3 id="turnos-guide-title" className="turnos-guide__title">¿A quién contactar?</h3>
            <p className="turnos-guide__lead">
              Sigue estos pasos para asegurar una atención rápida y efectiva fuera del horario laboral.
            </p>
          </header>

          <ol className="turnos-guide__steps">
            <li>
              <div className="turnos-guide__step-body">
                <strong>Identifica el área.</strong>
                <span>
                  Si el problema es de un <em>sistema interno, aplicación o integración</em> (DTE, Vacaciones, Rendiciones, FrutApp, Verfrut Cloud, etc.) contacta a
                  <strong> Desarrollo</strong>. Si es de <em>accesos, equipos, correo, red, impresoras</em> o conectividad, contacta a <strong>Soporte Técnico</strong>.
                </span>
              </div>
            </li>
            <li>
              <div className="turnos-guide__step-body">
                <strong>Llama o escribe por WhatsApp.</strong>
                <span>
                  Usa el teléfono del responsable vigente que aparece arriba. Prefiere <strong>llamada</strong> si la incidencia bloquea la operación; usa
                  <strong> WhatsApp</strong> para casos menos urgentes o cuando puedas adjuntar capturas.
                </span>
              </div>
            </li>
            <li>
              <div className="turnos-guide__step-body">
                <strong>Ten lista la información.</strong>
                <span>
                  Sistema afectado, usuario que reporta, captura del error o pantalla con el problema, hora aproximada y pasos para reproducirlo.
                </span>
              </div>
            </li>
            <li>
              <div className="turnos-guide__step-body">
                <strong>Registra la incidencia.</strong>
                <span>
                  Al volver al horario laboral, ingresa el caso en el portal de Incidencias para que quede documentado y se haga el seguimiento correspondiente.
                </span>
              </div>
            </li>
          </ol>

          <div className="turnos-guide__fallback">
            <strong>¿Sin respuesta?</strong> Intenta primero por llamada y luego WhatsApp. Si pasados 15 minutos no hay respuesta, contacta al responsable del próximo turno indicado en la card o escribe a
            <a href="mailto:soporte@verfrut.cl"> soporte@verfrut.cl</a>.
          </div>
        </section>
      </div>
    </div>
    <div className="pt-5 mt-5">
      <Footer />
    </div>
    
    </div>
  )
}

export default Turnos
