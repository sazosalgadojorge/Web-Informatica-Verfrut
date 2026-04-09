import '../../styles/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@flaticon/flaticon-uicons/css/all/all.css';
import { useNavigate } from 'react-router-dom';
import Badge from '../Badge/Badge';
const logotipos = '/logotipo.svg';


function Header() {
  const navigate = useNavigate()
  const handleLogin = () => {
    // Abrir Login en una nueva pestaña
    window.open('/login', '_blank');
  }

  const handleHomeClick = (e) => {
    e.preventDefault();
    navigate('/');
  }

  const handleTurnosClick = (e) => {
    e.preventDefault();
    navigate('/turnos');
  }
  const handleAnexosClick = (e) => {
    e.preventDefault();
    navigate('/anexos');
  }
  const handleVideosClick = (e) => {
    e.preventDefault();
    navigate('/videos');
  }

  return (
    <>
      <header className="th-header p-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-3">
            <a href="/" className="d-flex align-items-center" onClick={handleHomeClick}>
              <img 
                src={logotipos} 
                alt="Logo Verfrut" 
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
                      <li><a className="dropdown-item" href="#" onClick={handleHomeClick}>Panel Principal</a></li>
                      <li><a className="dropdown-item" href="#">Novedades</a></li>
                      <li><hr className="dropdown-divider"/></li>
                      <li><a className="dropdown-item" href="#">Anuncios</a></li>
                      <li><a className="dropdown-item" href="#">Calendario</a></li>
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
                          <li><a className="dropdown-item" href="https://api.verfrut.cl/ctacteenvases" target="_blank"><i className="fi fi-rr-truck-check"></i>Sistema Cuenta Corriente Envases</a></li>
                          <div className="d-flex align-items-center justify-content-start">
                            <li>
                              <a className="dropdown-item text-muted" href="javascript:void(0)" target="_blank" data-bs-toggle="tooltip" title="Próximamente disponible" style={{cursor: "not-allowed", pointerEvents: "none", color: "#6c757d", opacity: "0.55"}}><i className="fi fi-rr-chart-line-up"></i>Sistema Estimaciones Productivas</a>
                            </li>
                            <Badge variant="warning" size="sm" className="ms-0">Pronto</Badge>
                          </div>
                          <div className="d-flex align-items-center justify-content-start">
                            <li>
                              <a className="dropdown-item text-muted" href="javascript:void(0)" target="_blank" data-bs-toggle="tooltip" title="Próximamente disponible" style={{cursor: "not-allowed", pointerEvents: "none", color: "#6c757d", opacity: "0.55"}}><i className="fi fi-rr-snowflake"></i>Sistema Frío Packing</a>
                            </li>
                            <Badge variant="warning" size="sm" className="ms-0">Pronto</Badge>
                          </div>
                          <div className="d-flex align-items-center justify-content-start">
                            <li>
                              <a className="dropdown-item text-muted" href="javascript:void(0)" target="_blank" data-bs-toggle="tooltip" title="Próximamente disponible" style={{cursor: "not-allowed", pointerEvents: "none", color: "#6c757d", opacity: "0.55"}}><i className="fi fi-rr-boxes"></i>Sistema Materiales</a>
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
                          <li><a className="dropdown-item" href="https://facturacion.verfrut.cl/Account/Login?ReturnUrl=%2f" target="_blank"><i className="fi fi-rr-file"></i>Sistema Documentos Electrónicos (DTE)</a></li>
                          <li><a className="dropdown-item" href="https://rendiciones.verfrut.cl" target="_blank"><i className="fi fi-rr-usd-circle"></i>Sistema Rendiciones</a></li>
                          <li><a className="dropdown-item" href="https://api.verfrut.cl/vacaciones" target="_blank"><i className="fi fi-rr-umbrella-beach"></i>Sistema Vacaciones y Permisos</a></li>
                          <div className="d-flex align-items-center justify-content-start">
                            <li>
                              <a className="dropdown-item"
                                href="javascript:void(0)"
                                target="_blank" 
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
                                target="_blank" 
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
                                target="_blank" 
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
                                    target="_blank" 
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
                                target="_blank" 
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
                          <li><a className="dropdown-item" href="#"><img src="./src/assets/chile.svg" alt="Incidencias Chile" style={{width: "20px", height: "20px", marginRight: "15px"}}/>Portal de Incidencias Chile</a></li>
                          <li><a className="dropdown-item" href="#"><img src="./src/assets/peru.svg" alt="Incidencias Perú" style={{width: "20px", height: "20px", marginRight: "15px"}}/>Portal de Incidencias Perú</a></li>
                          <li><a className="dropdown-item" href="#"><img src="./src/assets/solicitud.svg" alt="Solicitudes" style={{width: "20px", height: "20px", marginRight: "15px"}}/>Portal de Solicitudes</a></li>
                          <li><a className="dropdown-item" href="#"><img src="./src/assets/glpi.svg" alt="GLPI" style={{width: "20px", height: "20px", marginRight: "15px"}}/>Portal de GLPI (Chile)</a></li>
                          <li><a className="dropdown-item" href="#"><img src="./src/assets/glpi.svg" alt="GLPI" style={{width: "20px", height: "20px", marginRight: "15px"}}/>Portal de GLPI (Perú)</a></li>
                        </ul>
                      </li>
                      <li className="dropdown-submenu">
                        <a className="dropdown-item dropdown-toggle-sub" href="#">
                          Seguridad
                          <i className="fi fi-rr-angle-right"></i>
                        </a>
                        <ul className="submenu">
                          <li><a className="dropdown-item" href="#"><i className="fi fi-rr-shield-check"></i>Portal de concientización</a></li>
                        </ul>
                      </li>
                      <li className="dropdown-submenu">
                        <a className="dropdown-item dropdown-toggle-sub" href="#">
                          Contacto
                          <i className="fi fi-rr-angle-right"></i>
                        </a>
                        <ul className="submenu">
                          <li><a className="dropdown-item" onClick={handleAnexosClick} href="#"><i className="fi fi-rr-phone-call"></i>Anexos Telefónicos</a></li>
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
                      <li className="dropdown-submenu">
                        <a className="dropdown-item dropdown-toggle-sub" href="#">
                          Concientización
                        </a>
                      </li>
                      <li className="dropdown-submenu">
                        <a className="dropdown-item dropdown-toggle-sub" href="#">
                          Protocolos de  Seguridad
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
                          Documentación<i className="fi fi-rr-angle-right"></i>
                        </a>
                        <ul className="submenu">

                          <li><a className="dropdown-item" href="http://localhost:3000/docs/introduccion-general" target="_blank"><i className="fi fi-rr-document"></i>Ver documentación</a></li>
                          <li><a className="dropdown-item" href="#" onClick={handleVideosClick}><i className="fi fi-rr-play-alt"></i>Video Tutoriales</a></li>
                        </ul>
                      </li>
                      <li className="dropdown-submenu">
                        <a className="dropdown-item dropdown-toggle-sub" href="#">
                          Herramientas<i className="fi fi-rr-angle-right"></i>
                        </a>
                        <ul className="submenu">
                          <li><a className="dropdown-item" href="#"><i className="fi fi-rr-envelope"></i>Generar Firmas<Badge variant="success" size="sm" className="ms-2">Nuevo</Badge></a></li>
                          <li><a className="dropdown-item" href="https://sugerencias.verfrut.cl/" target="_blank"><i className="fi fi-rr-comment-alt"></i>Sugerencias<Badge variant="primary" size="sm" className="ms-2">Actualizada</Badge></a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  {/* Turnos - Nueva sección */}
                  <li className="nav-item">
                    <a className="nav-link" href="#" onClick={handleTurnosClick}> Turnos
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="col-3 text-end d-flex justify-content-end">
            <div className='btn btn-primary btn-sm d-flex align-items-center' onClick={handleLogin}><i className="fi fi-rr-user" style={{color: "#ffffff"}}></i>Iniciar Sesión</div>
          </div>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header

// Ejemplo de como se puede usar la API de Figma para obtener los colores de la marca
// const getColors = async () => {
//   const response = await fetch('https://api.figma.com/v1/files/1234567890/colors');
//   const data = await response.json();
//   console.log(data);
// }
// getColors();
