import '../../styles/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@flaticon/flaticon-uicons/css/all/all.css'
import { useNavigate } from 'react-router-dom'
import { Badge, Button } from '../ui'
import GestionUsuariosModal, { GESTION_USUARIOS_MODAL_ID } from '../GestionUsuariosModal/GestionUsuariosModal'
import IncidenciasModal, { reportIncident } from '../IncidenciasModal/IncidenciasModal'
import VpnBadge from '../ui/VpnBadge/VpnBadge'
import solicitudIcon from '../../assets/solicitud.svg'
import glpiIcon from '../../assets/glpi.svg'
import { publicPath } from '../../utils/publicPath'

const logotipos = publicPath('logotipo.svg')
const homeHref = publicPath('')
const MANUALES_URL = 'https://verfrutsa-my.sharepoint.com/:f:/g/personal/jsazo_verfrut_cl/EoIKH1AvVABCvzypHMh2HxkBJFHPcLw6Pj_6LIY_TzsKYQ?e=1D6gra'

// Cierra el dropdown padre del item clickeado.
// El CSS de _dropdown-override.scss abre el menú con :hover puro, así que
// tras navegar el cursor sigue sobre la zona y el menú no se cierra solo.
// Marcamos el dropdown con [data-no-hover] por 600ms para forzar el cierre,
// dándole al usuario tiempo de mover el cursor antes de re-habilitar el hover.
function closeDropdownAfterClick(e) {
  const dropdown = e.currentTarget.closest('.nav-item.dropdown')
  if (!dropdown) return
  dropdown.setAttribute('data-no-hover', '')
  setTimeout(() => dropdown.removeAttribute('data-no-hover'), 600)
}

function Header() {
  const navigate = useNavigate()

  const handleHomeClick = (e) => {
    e.preventDefault()
    closeDropdownAfterClick(e)
    navigate('/')
  }

  const handleTurnosClick = (e) => {
    e.preventDefault()
    closeDropdownAfterClick(e)
    navigate('/turnos')
  }
  const handleAnexosClick = (e) => {
    e.preventDefault()
    closeDropdownAfterClick(e)
    navigate('/anexos')
  }
  const handleVideosClick = (e) => {
    e.preventDefault()
    closeDropdownAfterClick(e)
    navigate('/videos')
  }
  const handleBlogClick = (e) => {
    e.preventDefault()
    closeDropdownAfterClick(e)
    navigate('/blog')
  }
  const handleProtocolosClick = (e) => {
    e.preventDefault()
    closeDropdownAfterClick(e)
    navigate('/blog/protocolos-seguridad')
  }

  return (
    <>
      <header className="th-header p-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-3">
            <a href={homeHref} className="d-flex align-items-center" onClick={handleHomeClick}>
              <img
                src={logotipos}
                alt="Logo Unifrutti"
                className="img-fluid"
                style={{
                  height: "55px",
                  transition: "transform 0.2s ease-in-out"
                }}
                onMouseOver={(e) => e.target.style.transform = "scale(1.05)"}
                onMouseOut={(e) => e.target.style.transform = "scale(1)"}
              />
            </a>
          </div>
          <div className="col-6">
            <nav className="navbar navbar-expand-lg navbar-light justify-content-center">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#mainNav"
                aria-controls="mainNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-center" id="mainNav">
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <a className="nav-link" href="#" role="button">
                      Inicio
                    </a>
                    <ul className="dropdown-menu animate slideIn">
                      <li>
                        <a className="dropdown-item" href="#" onClick={handleHomeClick}>
                          <i className="fi fi-rr-home"></i>
                          Página de inicio
                        </a>
                      </li>
                 
                      <li><a className="dropdown-item" href="https://api.verfrut.cl" target="_blank" rel="noopener noreferrer"><i className="fi fi-rr-apps"></i>Apps</a></li>
                    </ul>
                  </li>

                  {/* Sistemas */}
                  <li className="nav-item dropdown">
                    <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Sistemas
                    </a>
                    <ul className="dropdown-menu">
                      <li className="dropdown-submenu">
                        <a className="dropdown-item dropdown-toggle-sub" href="#">Operacionales<i className="fi fi-rr-angle-right"></i></a>
                        <ul className="submenu">
                          <li><a className="dropdown-item" href="https://api.verfrut.cl/ctacteenvases" target="_blank" rel="noopener noreferrer"><i className="fi fi-rr-truck-check"></i>Sistema Cuenta Corriente Envases</a></li>
                          <div className="d-flex align-items-center justify-content-start">
                            <li>
                              <a className="dropdown-item text-muted" href="javascript:void(0)" data-bs-toggle="tooltip" title="Próximamente disponible" style={{cursor: "not-allowed", pointerEvents: "none", color: "#6c757d", opacity: "0.55"}}><i className="fi fi-rr-chart-line-up"></i>Sistema Estimaciones Productivas</a>
                            </li>
                            <Badge variant="warning" size="sm" className="ms-0">Pronto</Badge>
                          </div>
                          <div className="d-flex align-items-center justify-content-start">
                            <li>
                              <a className="dropdown-item text-muted" href="javascript:void(0)" data-bs-toggle="tooltip" title="Próximamente disponible" style={{cursor: "not-allowed", pointerEvents: "none", color: "#6c757d", opacity: "0.55"}}><i className="fi fi-rr-snowflake"></i>Sistema Frío Packing</a>
                            </li>
                            <Badge variant="warning" size="sm" className="ms-0">Pronto</Badge>
                          </div>
                          <div className="d-flex align-items-center justify-content-start">
                            <li>
                              <a className="dropdown-item text-muted" href="javascript:void(0)" data-bs-toggle="tooltip" title="Próximamente disponible" style={{cursor: "not-allowed", pointerEvents: "none", color: "#6c757d", opacity: "0.55"}}><i className="fi fi-rr-boxes"></i>Sistema Materiales</a>
                            </li>
                            <Badge variant="warning" size="sm" className="ms-0">Pronto</Badge>
                          </div>
                        </ul>
                      </li>
                      <li className="dropdown-submenu">
                        <a className="dropdown-item dropdown-toggle-sub" href="#">
                          Administrativos
                          <i className="fi fi-rr-angle-right"></i>
                        </a>
                        <ul className="submenu">
                          <li><a className="dropdown-item" href="https://facturacion.verfrut.cl/Account/Login?ReturnUrl=%2f" target="_blank" rel="noopener noreferrer"><i className="fi fi-rr-file"></i>Sistema Documentos Electrónicos (DTE)</a></li>
                          <li><a className="dropdown-item" href="https://rendiciones.verfrut.cl" target="_blank" rel="noopener noreferrer"><i className="fi fi-rr-usd-circle"></i>Sistema Rendiciones</a></li>
                          <li><a className="dropdown-item" href="https://api.verfrut.cl/vacaciones" target="_blank" rel="noopener noreferrer"><i className="fi fi-rr-umbrella-beach"></i>Sistema Vacaciones y Permisos</a></li>
                          <div className="d-flex align-items-center justify-content-start">
                            <li>
                              <a className="dropdown-item"
                                href="javascript:void(0)"
                                data-bs-toggle="tooltip"
                                title="Próximamente disponible"
                                style={{cursor: "not-allowed", pointerEvents: "none", opacity: "0.3"}}>
                                <i className="fi fi-rr-calculator"></i>Sistema Contabilidad
                              </a>
                            </li>
                            <Badge variant="warning" size="sm" className="ms-0">Pronto</Badge>
                          </div>
                          <div className="d-flex align-items-center justify-content-start">
                            <li>
                              <a className="dropdown-item"
                                href="javascript:void(0)"
                                data-bs-toggle="tooltip"
                                title="Próximamente disponible"
                                style={{cursor: "not-allowed", pointerEvents: "none", opacity: "0.3"}}>
                                <i className="fi fi-rr-usd-circle"></i>Sistema Tesorería
                              </a>
                            </li>
                            <Badge variant="warning" size="sm" className="ms-0">Pronto</Badge>
                          </div>
                          <div className="d-flex align-items-center justify-content-start">
                            <li>
                              <a className="dropdown-item"
                                href="javascript:void(0)"
                                data-bs-toggle="tooltip"
                                title="Próximamente disponible"
                                style={{cursor: "not-allowed", pointerEvents: "none", opacity: "0.3"}}>
                                <i className="fi fi-rr-money"></i>Sistema Remuneraciones
                              </a>
                            </li>
                            <Badge variant="warning" size="sm" className="ms-0">Pronto</Badge>
                          </div>
                          <div className="d-flex align-items-center justify-content-start">
                            <li>
                                  <a className="dropdown-item"
                                    href="javascript:void(0)"
                                    data-bs-toggle="tooltip"
                                    title="Próximamente disponible"
                                    style={{cursor: "not-allowed", pointerEvents: "none", opacity: "0.3"}}>
                                    <i className="fi fi-rr-shield-check"></i>Sistema Seguridad y Salud
                                  </a>
                            </li>
                                  <Badge variant="warning" size="sm" className="ms-0">Pronto</Badge>
                          </div>
                        </ul>
                      </li>
                      <li className="dropdown-submenu">
                        <a className="dropdown-item dropdown-toggle-sub" href="#">
                          Gestión de Usuarios
                          <i className="fi fi-rr-angle-right"></i>
                        </a>
                        <ul className="submenu">
                          <div className="d-flex align-items-center justify-content-start">
                            <li>
                              <a className="dropdown-item text-muted"
                                href="javascript:void(0)"
                                data-bs-toggle="tooltip"
                                title="Próximamente disponible"
                                style={{cursor: "not-allowed", pointerEvents: "none", color: "#6c757d", opacity: "0.55"}}>
                                <i className="fi fi-rr-users"></i>Perfiles
                              </a>
                            </li>
                            <Badge variant="warning" size="sm" className="ms-0">Pronto</Badge>
                          </div>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  {/* Soporte TI */}
                  <li className="nav-item dropdown">
                    <a className="nav-link" href="#" role="button">
                      Soporte TI
                    </a>
                    <ul className="dropdown-menu animate slideIn">
                      <li className="dropdown-submenu">
                        <a className="dropdown-item dropdown-toggle-sub" href="#">
                          Incidencias y Solicitudes
                          <i className="fi fi-rr-angle-right"></i>
                        </a>
                        <ul className="submenu">
                          <li>
                            <a
                              className="dropdown-item"
                              href="#"
                              onClick={(e) => { e.preventDefault(); closeDropdownAfterClick(e); reportIncident() }}
                            >
                              <i className="fi fi-rr-bug"></i>Reportar Incidencia<VpnBadge />
                            </a>
                          </li>
                          <li><a className="dropdown-item" href="https://solicitudes.verfrut.cl" target="_blank" rel="noopener noreferrer"><img src={solicitudIcon} alt="Solicitudes" style={{width: "20px", height: "20px", marginRight: "15px"}}/>Portal de Solicitudes<VpnBadge /></a></li>
                          <li><a className="dropdown-item" href="https://glpi.verfrut.cl" target="_blank" rel="noopener noreferrer"><img src={glpiIcon} alt="GLPI Chile" style={{width: "20px", height: "20px", marginRight: "15px"}}/>Portal de GLPI (Chile)<VpnBadge /></a></li>
                          <li><a className="dropdown-item" href="https://glpi.verfrut.pe" target="_blank" rel="noopener noreferrer"><img src={glpiIcon} alt="GLPI Perú" style={{width: "20px", height: "20px", marginRight: "15px"}}/>Portal de GLPI (Perú)<VpnBadge /></a></li>
                        </ul>
                      </li>
                      <li className="dropdown-submenu">
                        <a className="dropdown-item dropdown-toggle-sub" href="#">
                          Contacto
                          <i className="fi fi-rr-angle-right"></i>
                        </a>
                        <ul className="submenu">
                          <li><a className="dropdown-item" href="mailto:soporte@verfrut.cl"><i className="fi fi-rr-envelope"></i>Correo de Soporte</a></li>
                        </ul>
                      </li>

                    </ul>
                  </li>

                  {/* Seguridad */}
                  <li className="nav-item dropdown">
                    <a className="nav-link" href="#" role="button">
                      Seguridad
                    </a>
                    <ul className="dropdown-menu animate slideIn">
                      <li>
                        <a
                          className="dropdown-item"
                          href="https://verfrutsa.sharepoint.com/sites/Ciberseguridadconcientizacion"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fi fi-rr-shield-check"></i>Concientización
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={handleProtocolosClick}
                        >
                          <i className="fi fi-rr-document"></i>Protocolos de Seguridad
                        </a>
                      </li>
                    </ul>
                  </li>

                  {/* Recursos */}
                  <li className="nav-item dropdown">
                    <a className="nav-link" href="#" role="button">
                      Recursos
                    </a>
                    <ul className="dropdown-menu animate slideIn">
                      <li className="dropdown-submenu">
                        <a className="dropdown-item dropdown-toggle-sub" href="#">
                          Material de apoyo<i className="fi fi-rr-angle-right"></i>
                        </a>
                        <ul className="submenu">
                          <li><a className="dropdown-item" href={MANUALES_URL} target="_blank" rel="noopener noreferrer"><i className="fi fi-rr-book-open-reader"></i>Manuales</a></li>
                          <li><a className="dropdown-item" href="#" onClick={handleBlogClick}><i className="fi fi-rr-newspaper"></i>Blog</a></li>
                          <li><a className="dropdown-item" href="#" onClick={handleVideosClick}><i className="fi fi-rr-video-camera-alt"></i>Video Tutoriales</a></li>
                        </ul>
                      </li>
                      <li className="dropdown-submenu">
                        <a className="dropdown-item dropdown-toggle-sub" href="#">
                          Herramientas<i className="fi fi-rr-angle-right"></i>
                        </a>
                        <ul className="submenu">
                          <li><a className="dropdown-item" href="#" onClick={handleAnexosClick}><i className="fi fi-rr-phone-call"></i>Anexos Telefónicos</a></li>
                          <li><a className="dropdown-item" href="https://api.verfrut.cl/Home/GeneradorFirma" target="_blank" rel="noopener noreferrer"><i className="fi fi-rr-file-signature"></i>Generar Firmas<Badge variant="success" size="sm" className="ms-2">Nuevo</Badge></a></li>
                          <li><a className="dropdown-item" href="https://sugerencias.verfrut.cl/" target="_blank" rel="noopener noreferrer"><i className="fi fi-rr-feedback"></i>Sugerencias<Badge variant="primary" size="sm" className="ms-2">Actualizada</Badge></a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  {/* Turnos */}
                  <li className="nav-item">
                    <a className="nav-link" href="#" onClick={handleTurnosClick}> Turnos
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="col-3 d-flex justify-content-end align-items-center">
            <Button
              variant="primary"
              size="lg"
              data-bs-toggle="modal"
              data-bs-target={`#${GESTION_USUARIOS_MODAL_ID}`}
            >
              <span className="d-inline-flex align-items-center gap-1" style={{ fontWeight: 400, fontSize: '0.9rem', padding: '0.4rem 1rem' }}>
                <i className="fi fi-rr-apps-add" style={{ fontSize: '1.1rem', color: '#a6c0e6' }}></i>
                Gestión Usuarios
              </span>
            </Button>
          </div>
        </div>
      </div>
    </header>

    <GestionUsuariosModal />
    <IncidenciasModal />
    </>
  )
}

export default Header
