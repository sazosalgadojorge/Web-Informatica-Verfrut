import { useState } from 'react'
import { Badge } from '../ui'
import { openGestionUsuariosModal } from '../GestionUsuariosModal/GestionUsuariosModal'
import { reportIncident } from '../IncidenciasModal/IncidenciasModal'
import solicitudIcon from '../../assets/solicitud.svg'
import glpiIcon from '../../assets/glpi.svg'
import './HeaderPhoneMenu.scss'

const MANUALES_URL =
  'https://verfrutsa-my.sharepoint.com/:f:/g/personal/jsazo_verfrut_cl/EoIKH1AvVABCvzypHMh2HxkBJFHPcLw6Pj_6LIY_TzsKYQ?e=1D6gra'
const CONCIENTIZACION_URL = 'https://verfrutsa.sharepoint.com/sites/Ciberseguridadconcientizacion'

/**
 * Acción destacada (sticky top) — estilo item del sidebar.
 */
function ActionItem({ variant = 'default', icon, label, onClick }) {
  return (
    <button
      type="button"
      className={`hp-menu-action${variant === 'primary' ? ' hp-menu-action--primary' : ''}`}
      onClick={onClick}
    >
      <span className="hp-menu-action__icon">
        <i className={icon} aria-hidden="true" />
      </span>
      <span className="hp-menu-action__label">{label}</span>
    </button>
  )
}

/**
 * Item del menú — link interno (SPA), externo (target _blank) o acción.
 */
function MenuItem({ label, icon, image, badge, href, external, onClick, disabled, active }) {
  const content = (
    <>
      {image ? (
        <img className="hp-menu-item__icon hp-menu-item__icon--img" src={image} alt="" aria-hidden="true" />
      ) : icon ? (
        <i className={`hp-menu-item__icon ${icon}`} aria-hidden="true" />
      ) : null}
      <span className="hp-menu-item__label">{label}</span>
      {badge && (
        <span className="hp-menu-item__badge">
          <Badge variant={badge.variant} size="sm">{badge.text}</Badge>
        </span>
      )}
    </>
  )

  const className = [
    'hp-menu-item',
    disabled && 'hp-menu-item--disabled',
    active && 'hp-menu-item--active',
  ].filter(Boolean).join(' ')

  if (disabled) {
    return <span className={className} aria-disabled="true">{content}</span>
  }
  if (href && external) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    )
  }
  return (
    <button type="button" className={className} onClick={onClick}>
      {content}
    </button>
  )
}

/**
 * Section colapsable con icono + título.
 */
function Section({ icon, title, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <section className={`hp-menu-section ${open ? 'hp-menu-section--open' : ''}`}>
      <button
        type="button"
        className="hp-menu-section__toggle"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="hp-menu-section__icon">
          <i className={icon} aria-hidden="true" />
        </span>
        <span className="hp-menu-section__title">{title}</span>
        <i className="fi fi-rr-angle-small-down hp-menu-section__chevron" aria-hidden="true" />
      </button>
      {open && <div className="hp-menu-section__body">{children}</div>}
    </section>
  )
}

/**
 * Subsection dentro de Sistemas.
 */
function Subsection({ title, children }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`hp-menu-subsection ${open ? 'hp-menu-subsection--open' : ''}`}>
      <button
        type="button"
        className="hp-menu-subsection__toggle"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span>{title}</span>
        <i className="fi fi-rr-angle-small-down hp-menu-section__chevron" aria-hidden="true" />
      </button>
      {open && <div className="hp-menu-subsection__body">{children}</div>}
    </div>
  )
}

function Separator() {
  return <div className="hp-menu-sep" role="separator" />
}

function HeaderPhoneMenu({ onNavigate, isActive }) {
  return (
    <div className="hp-menu">
      <div className="hp-menu-actions">
        <span className="hp-menu-kicker">Acciones rápidas</span>
        <ActionItem
          variant="primary"
          icon="fi fi-rr-apps-add"
          label="Gestión de Usuarios"
          onClick={openGestionUsuariosModal}
        />
        <ActionItem
          icon="fi fi-rr-bug"
          label="Reportar incidencia"
          onClick={reportIncident}
        />
      </div>

      <nav className="hp-menu-nav" aria-label="Navegación principal">
        <Section icon="fi fi-rr-home" title="Inicio" defaultOpen>
          <MenuItem
            label="Panel Principal"
            icon="fi fi-rr-apps"
            onClick={() => onNavigate('/')}
            active={isActive('/')}
          />
        </Section>

        <Separator />

        <Section icon="fi fi-rr-grid" title="Sistemas">
          <Subsection title="Operacionales">
            <MenuItem
              label="Cuenta Corriente Envases"
              icon="fi fi-rr-truck-check"
              href="https://api.verfrut.cl/ctacteenvases"
              external
              badge={{ variant: 'success', text: 'Activo' }}
            />
            <MenuItem
              label="Estimaciones Productivas"
              icon="fi fi-rr-chart-line-up"
              disabled
              badge={{ variant: 'warning', text: 'Pronto' }}
            />
            <MenuItem
              label="Frío Packing"
              icon="fi fi-rr-snowflake"
              disabled
              badge={{ variant: 'warning', text: 'Pronto' }}
            />
            <MenuItem
              label="Materiales"
              icon="fi fi-rr-boxes"
              disabled
              badge={{ variant: 'warning', text: 'Pronto' }}
            />
          </Subsection>

          <Subsection title="Administrativos">
            <MenuItem
              label="Documentos Electrónicos (DTE)"
              icon="fi fi-rr-file"
              href="https://facturacion.verfrut.cl/Account/Login?ReturnUrl=%2f"
              external
              badge={{ variant: 'success', text: 'Activo' }}
            />
            <MenuItem
              label="Rendiciones"
              icon="fi fi-rr-usd-circle"
              href="https://rendiciones.verfrut.cl"
              external
              badge={{ variant: 'success', text: 'Activo' }}
            />
            <MenuItem
              label="Vacaciones y Permisos"
              icon="fi fi-rr-umbrella-beach"
              href="https://api.verfrut.cl/vacaciones"
              external
              badge={{ variant: 'success', text: 'Activo' }}
            />
            <MenuItem
              label="Contabilidad"
              icon="fi fi-rr-calculator"
              disabled
              badge={{ variant: 'warning', text: 'Pronto' }}
            />
            <MenuItem
              label="Tesorería"
              icon="fi fi-rr-usd-circle"
              disabled
              badge={{ variant: 'warning', text: 'Pronto' }}
            />
            <MenuItem
              label="Remuneraciones"
              icon="fi fi-rr-money"
              disabled
              badge={{ variant: 'warning', text: 'Pronto' }}
            />
            <MenuItem
              label="Seguridad y Salud"
              icon="fi fi-rr-shield-check"
              disabled
              badge={{ variant: 'warning', text: 'Pronto' }}
            />
          </Subsection>

          <Subsection title="Gestión de Usuarios">
            <MenuItem
              label="Perfiles"
              icon="fi fi-rr-users"
              disabled
              badge={{ variant: 'warning', text: 'Pronto' }}
            />
          </Subsection>
        </Section>

        <Section icon="fi fi-rr-headset" title="Soporte TI">
          <MenuItem label="Reportar Incidencia" icon="fi fi-rr-bug" onClick={reportIncident} />
          <MenuItem
            label="Portal de Solicitudes"
            image={solicitudIcon}
            href="https://solicitudes.verfrut.cl"
            external
          />
          <MenuItem
            label="GLPI (Chile)"
            image={glpiIcon}
            href="https://glpi.verfrut.cl"
            external
          />
          <MenuItem
            label="GLPI (Perú)"
            image={glpiIcon}
            href="https://glpi.verfrut.pe"
            external
          />
          <MenuItem
            label="Anexos Telefónicos"
            icon="fi fi-rr-phone-call"
            onClick={() => onNavigate('/anexos')}
            active={isActive('/anexos')}
          />
          <MenuItem
            label="Correo de Soporte"
            icon="fi fi-rr-envelope"
            href="mailto:soporte@verfrut.cl"
            external
          />
        </Section>

        <Section icon="fi fi-rr-shield" title="Seguridad">
          <MenuItem
            label="Concientización"
            icon="fi fi-rr-shield-check"
            href={CONCIENTIZACION_URL}
            external
          />
          <MenuItem
            label="Protocolos de Seguridad"
            icon="fi fi-rr-document"
            disabled
            badge={{ variant: 'warning', text: 'Pronto' }}
          />
        </Section>

        <Separator />

        <Section icon="fi fi-rr-folder" title="Recursos">
          <MenuItem
            label="Manuales"
            icon="fi fi-rr-book-alt"
            href={MANUALES_URL}
            external
          />
          <MenuItem
            label="Blog"
            icon="fi fi-rr-document"
            onClick={() => onNavigate('/blog')}
            active={isActive('/blog') || isActive('/blog/incidencias') || isActive('/blog/verfrut-cloud')}
          />
          <MenuItem
            label="Video Tutoriales"
            icon="fi fi-rr-play-alt"
            onClick={() => onNavigate('/videos')}
            active={isActive('/videos')}
          />
          <MenuItem
            label="Generar Firmas"
            icon="fi fi-rr-signature"
            href="https://api.verfrut.cl/Home/GeneradorFirma"
            external
            badge={{ variant: 'success', text: 'Nuevo' }}
          />
          <MenuItem
            label="Sugerencias"
            icon="fi fi-rr-comment-alt"
            href="https://sugerencias.verfrut.cl/"
            external
          />
        </Section>

        <Section icon="fi fi-rr-calendar-clock" title="Turnos">
          <MenuItem
            label="Ver turnos vigentes"
            icon="fi fi-rr-time-check"
            onClick={() => onNavigate('/turnos')}
            active={isActive('/turnos')}
          />
        </Section>
      </nav>
    </div>
  )
}

export default HeaderPhoneMenu
