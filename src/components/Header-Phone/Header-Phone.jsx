import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './Header-Phone.scss'
import { useNavigate } from 'react-router-dom'
import { Badge, Button } from '../ui'
import GestionUsuariosModal, { GESTION_USUARIOS_MODAL_ID } from '../GestionUsuariosModal/GestionUsuariosModal'
import IncidenciasModal, { reportIncident } from '../IncidenciasModal/IncidenciasModal'
import solicitudIcon from '../../assets/solicitud.svg'
import glpiIcon from '../../assets/glpi.svg'

const MANUALES_URL = 'https://verfrutsa-my.sharepoint.com/:f:/g/personal/jsazo_verfrut_cl/EoIKH1AvVABCvzypHMh2HxkBJFHPcLw6Pj_6LIY_TzsKYQ?e=1D6gra'

function HeaderPhone() {
  const navigate = useNavigate()

  const handleHomeClick = (e) => {
    e.preventDefault()
    navigate('/')
  }

  const handleTurnosClick = (e) => {
    e.preventDefault()
    navigate('/turnos')
  }

  const handleAnexosClick = (e) => {
    e.preventDefault()
    navigate('/anexos')
  }

  const handleVideosClick = (e) => {
    e.preventDefault()
    navigate('/videos')
  }
  const handleBlogClick = (e) => {
    e.preventDefault()
    navigate('/blog')
  }

  return (
    <header className="th-header p-3">
      <div className="container-fluid">
        <div className="row-12 d-flex align-items-center justify-content-between">

          {/* Menu Toggle */}
          <div className="d-flex align-items-center">
            <button
              className="navbar-toggler border-0 p-0"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#mobileNav"
              aria-controls="mobileNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fi fi-rr-menu-burger" style={{fontSize: "1.2rem"}}></i>
            </button>
          </div>

          {/* Gestión usuarios */}
          <div className="d-flex align-items-center">
            <Button
              variant="primary"
              size="sm"
              data-bs-toggle="modal"
              data-bs-target={`#${GESTION_USUARIOS_MODAL_ID}`}
            >
              <span className="d-inline-flex align-items-center gap-1">
                <i className="fi fi-rr-apps-add"></i>
                Gestión Usuarios
              </span>
            </Button>
          </div>

          {/* Logo */}
          <div className="d-flex align-items-center">
            <a href="/" className="d-flex align-items-center" onClick={handleHomeClick}>
              <img
                src="/logotipo.svg"
                alt="Logo Verfrut"
                className="img-fluid"
                style={{
                  height: "30px",
                  transition: "transform 0.2s ease-in-out"
                }}
                onMouseOver={(e) => e.target.style.transform = "scale(1.05)"}
                onMouseOut={(e) => e.target.style.transform = "scale(1)"}
              />
            </a>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Offcanvas */}
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="mobileNav"
        aria-labelledby="mobileNavLabel"
        style={{maxWidth: "85vw"}}
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="mobileNavLabel" style={{fontSize: "0.9rem"}}>Menú</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body">
          <div className="accordion" id="mobileNavAccordion">
            {/* Inicio */}
            <div className="accordion-item border-0 mb-2">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed py-3" type="button" data-bs-toggle="collapse" data-bs-target="#inicioCollapse">
                  Inicio
                </button>
              </h2>
              <div id="inicioCollapse" className="accordion-collapse collapse" data-bs-parent="#mobileNavAccordion">
                <div className="accordion-body">
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2"><a href="#" className="text-decoration-none text-dark" onClick={handleHomeClick}>Panel Principal</a></li>
                    <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Novedades</a></li>
                    <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Anuncios</a></li>
                    <li><a href="#" className="text-decoration-none text-dark">Calendario</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sistemas */}
            <div className="accordion-item border-0 mb-2">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed py-3" type="button" data-bs-toggle="collapse" data-bs-target="#sistemasCollapse">
                  Sistemas
                </button>
              </h2>
              <div id="sistemasCollapse" className="accordion-collapse collapse" data-bs-parent="#mobileNavAccordion">
                <div className="accordion-body">
                  <ul className="list-unstyled mb-0 text-start">
                    <li className="mb-2">
                      <a href="https://api.verfrut.cl/ctacteenvases" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark text-start">
                        <i className="fi fi-rr-truck-check me-2"></i>Sistema Cuenta Corriente Envases
                        <Badge variant="success" size="sm" className="ms-2">Activo</Badge>
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="https://facturacion.verfrut.cl/Account/Login?ReturnUrl=%2f" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark text-start">
                        <i className="fi fi-rr-file me-2"></i>Sistema Documentos Electrónicos (DTE)
                        <Badge variant="success" size="sm" className="ms-2">Activo</Badge>
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="https://rendiciones.verfrut.cl" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark text-start">
                        <i className="fi fi-rr-usd-circle me-2"></i>Sistema Rendiciones
                        <Badge variant="success" size="sm" className="ms-2">Activo</Badge>
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="https://api.verfrut.cl/vacaciones" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark text-start">
                        <i className="fi fi-rr-umbrella-beach me-2"></i>Sistema Vacaciones y Permisos
                        <Badge variant="success" size="sm" className="ms-2">Activo</Badge>
                      </a>
                    </li>
                    <li className="mb-2"><a href="javascript:void(0)" className="text-decoration-none text-muted text-start" data-bs-toggle="tooltip" title="Próximamente disponible" style={{cursor: "not-allowed"}}><i className="fi fi-rr-chart-line-up me-2"></i>Sistema Estimaciones Productivas y Comerciales<Badge variant="warning" size="sm" className="ms-2">Pronto</Badge></a></li>
                    <li className="mb-2"><a href="javascript:void(0)" className="text-decoration-none text-muted text-start" data-bs-toggle="tooltip" title="Próximamente disponible" style={{cursor: "not-allowed"}}><i className="fi fi-rr-snowflake me-2"></i>Sistema Frío Packing <Badge variant="warning" size="sm" className="ms-2">Pronto</Badge></a></li>
                    <li className="mb-2"><a href="javascript:void(0)" className="text-decoration-none text-muted text-start" data-bs-toggle="tooltip" title="Próximamente disponible" style={{cursor: "not-allowed"}}><i className="fi fi-rr-boxes me-2"></i>Sistema Materiales <Badge variant="warning" size="sm" className="ms-2">Pronto</Badge></a></li>
                    <li className="mb-2"><a href="javascript:void(0)" className="text-decoration-none text-muted text-start" data-bs-toggle="tooltip" title="Próximamente disponible" style={{cursor: "not-allowed"}}><i className="fi fi-rr-calculator me-2"></i>Sistema Contabilidad <Badge variant="warning" size="sm" className="ms-2">Pronto</Badge></a></li>
                    <li className="mb-2"><a href="javascript:void(0)" className="text-decoration-none text-muted text-start" data-bs-toggle="tooltip" title="Próximamente disponible" style={{cursor: "not-allowed"}}><i className="fi fi-rr-usd-circle me-2"></i>Sistema Tesorería <Badge variant="warning" size="sm" className="ms-2">Pronto</Badge></a></li>
                    <li className="mb-2"><a href="javascript:void(0)" className="text-decoration-none text-muted text-start" data-bs-toggle="tooltip" title="Próximamente disponible" style={{cursor: "not-allowed"}}><i className="fi fi-rr-money me-2"></i>Sistema Remuneraciones <Badge variant="warning" size="sm" className="ms-2">Pronto</Badge></a></li>
                    <li className="mb-2"><a href="javascript:void(0)" className="text-decoration-none text-muted text-start" data-bs-toggle="tooltip" title="Próximamente disponible" style={{cursor: "not-allowed"}}><i className="fi fi-rr-shield-check me-2"></i>Sistema Seguridad y Salud <Badge variant="warning" size="sm" className="ms-2">Pronto</Badge></a></li>
                    <li><a href="javascript:void(0)" className="text-decoration-none text-muted text-start" data-bs-toggle="tooltip" title="Próximamente disponible" style={{cursor: "not-allowed"}}><i className="fi fi-rr-users me-2"></i>Perfiles <Badge variant="warning" size="sm" className="ms-2">Pronto</Badge></a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Soporte TI */}
            <div className="accordion-item border-0 mb-2">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed py-3" type="button" data-bs-toggle="collapse" data-bs-target="#soporteCollapse">
                  Soporte TI
                </button>
              </h2>
              <div id="soporteCollapse" className="accordion-collapse collapse" data-bs-parent="#mobileNavAccordion">
                <div className="accordion-body">
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2">
                      <a
                        href="#"
                        className="text-decoration-none text-dark"
                        onClick={(e) => { e.preventDefault(); reportIncident() }}
                      >
                        <i className="fi fi-rr-bug me-2"></i>Reportar Incidencia
                      </a>
                    </li>
                    <li className="mb-2"><a href="https://solicitudes.verfrut.cl" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark"><img src={solicitudIcon} alt="Solicitudes" style={{width: "20px", height: "20px", marginRight: "15px"}}/>Portal de Solicitudes</a></li>
                    <li className="mb-2"><a href="https://glpi.verfrut.cl" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark"><img src={glpiIcon} alt="GLPI Chile" style={{width: "20px", height: "20px", marginRight: "15px"}}/>Portal de GLPI (Chile)</a></li>
                    <li className="mb-2"><a href="https://glpi.verfrut.pe" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark"><img src={glpiIcon} alt="GLPI Perú" style={{width: "20px", height: "20px", marginRight: "15px"}}/>Portal de GLPI (Perú)</a></li>
                    <li className="mb-2"><a href="https://verfrutsa.sharepoint.com/sites/Ciberseguridadconcientizacion" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark"><i className="fi fi-rr-shield-check me-2"></i>Portal de concientización</a></li>
                    <li className="mb-2"><a href="#" className="text-decoration-none text-dark" onClick={handleAnexosClick}><i className="fi fi-rr-phone-call me-2"></i>Anexos Telefónicos</a></li>
                    <li><a href="mailto:soporte@verfrut.cl" className="text-decoration-none text-dark"><i className="fi fi-rr-envelope me-2"></i>Correo de Soporte</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Recursos */}
            <div className="accordion-item border-0 mb-2">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed py-3" type="button" data-bs-toggle="collapse" data-bs-target="#recursosCollapse">
                  Recursos
                </button>
              </h2>
              <div id="recursosCollapse" className="accordion-collapse collapse" data-bs-parent="#mobileNavAccordion">
                <div className="accordion-body">
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2"><a href={MANUALES_URL} target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark"><i className="fi fi-rr-book-open-reader me-2"></i>Manuales</a></li>
                    <li className="mb-2"><a href="#" className="text-decoration-none text-dark" onClick={handleBlogClick}><i className="fi fi-rr-newspaper me-2"></i>Blog</a></li>
                    <li className="mb-2"><a href="#" className="text-decoration-none text-dark" onClick={handleVideosClick}><i className="fi fi-rr-video-camera-alt me-2"></i>Video Tutoriales</a></li>
                    <li className="mb-2"><a href="https://api.verfrut.cl/Home/GeneradorFirma" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark"><i className="fi fi-rr-file-signature me-2"></i>Generar Firmas</a></li>
                    <li><a href="https://sugerencias.verfrut.cl/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark"><i className="fi fi-rr-feedback me-2"></i>Sugerencias</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Turnos */}
            <div className="accordion-item border-0 mb-2">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed py-3" type="button" data-bs-toggle="collapse" data-bs-target="#turnosCollapse">
                  Turnos
                </button>
              </h2>
              <div id="turnosCollapse" className="accordion-collapse collapse" data-bs-parent="#mobileNavAccordion">
                <div className="accordion-body">
                  <ul className="list-unstyled mb-0">
                    <li><a href="#" className="text-decoration-none text-dark" onClick={handleTurnosClick}>Ver Turnos</a></li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <GestionUsuariosModal />
      <IncidenciasModal />
    </header>
  )
}

export default HeaderPhone
