import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './Header-Phone.scss'
import { useNavigate } from 'react-router-dom'
import Badge from '../Badge/Badge';
function HeaderPhone() {
  const navigate = useNavigate()
  const handleHomeClick = (e) => {
    e.preventDefault();
    navigate('/');
  }

  const handleTurnosClick = (e) => {
    e.preventDefault();
    navigate('/turnos');
  }

  const handleLogin = () => {
    // Abrir Login en una nueva pestaña
    window.open('/login', '_blank');
  }

  return (

    <header className="th-header p-3">
      <div className="container-fluid">
        <div className="row-12 d-flex align-items-center justify-content-center">
            
          {/* Menu Toggle */}
          <div className="col-4 d-flex align-items-center justify-content-start">
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

          {/* Login Button */}
          <div className="col-4 d-flex align-items-center justify-content-center">
            <button 
              className="btn btn-primary btn-sm d-flex align-items-center justify-content-center"
              onClick={handleLogin}
            >
              <i className="fi fi-rr-user me-1"></i>
              <span style={{
                fontSize: "0.80rem", 
                maxWidth: "100px",
                textOverflow: "ellipsis", 
                overflow: "hidden", 
                whiteSpace: "nowrap"
              }}>Iniciar Sesión</span>
            </button>
          </div>

          {/* Logo */}
          <div className="col-4 d-flex align-items-center justify-content-end">
            <a href="/" className="d-flex align-items-center justify-content-end" onClick={handleHomeClick}>
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
                      <a href="https://api.verfrut.cl/ctacteenvases" target="_blank" className="text-decoration-none text-dark text-start">
                        <i className="fi fi-rr-truck-check me-2"></i>Sistema Cuenta Corriente Envases
                        <Badge variant="success" size="sm" className="ms-2">Activo</Badge>
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="https://facturacion.verfrut.cl/Account/Login?ReturnUrl=%2f" target="_blank" className="text-decoration-none text-dark text-start">
                        <i className="fi fi-rr-file me-2"></i>Sistema Documentos Electrónicos (DTE)
                        <Badge variant="success" size="sm" className="ms-2">Activo</Badge>
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="https://rendiciones.verfrut.cl" target="_blank" className="text-decoration-none text-dark text-start">
                        <i className="fi fi-rr-usd-circle me-2"></i>Sistema Rendiciones
                        <Badge variant="success" size="sm" className="ms-2">Activo</Badge>
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="https://api.verfrut.cl/vacaciones" target="_blank" className="text-decoration-none text-dark text-start">
                        <i className="fi fi-rr-umbrella-beach me-2"></i>Sistema Vacaciones y Permisos
                        <Badge variant="success" size="sm" className="ms-2">Activo</Badge>
                      </a>
                    </li>
                    <li className="mb-2"><a href="javascript:void(0)" className="text-decoration-none text-muted text-start" data-bs-toggle="tooltip" title="Próximamente disponible" style={{cursor: "not-allowed"}}><i className="fi fi-rr-chart-line-up"></i>Sistema Estimaciones Productivas y Comerciales<Badge variant="warning" size="sm" className="ms-2">Pronto</Badge></a></li>
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
                    <li className="mb-2"><a href="#" className="text-decoration-none text-dark"><img src="./src/assets/chile.svg" alt="Incidencias Chile" style={{width: "20px", height: "20px", marginRight: "15px"}}/>Portal de Incidencias Chile</a></li>
                    <li className="mb-2"><a href="#" className="text-decoration-none text-dark"><img src="./src/assets/peru.svg" alt="Incidencias Perú" style={{width: "20px", height: "20px", marginRight: "15px"}}/>Portal de Incidencias Perú</a></li>
                    <li className="mb-2"><a href="#" className="text-decoration-none text-dark"><img src="./src/assets/solicitud.svg" alt="Solicitudes" style={{width: "20px", height: "20px", marginRight: "15px"}}/>Portal de Solicitudes</a></li>
                    <li className="mb-2"><a href="#" className="text-decoration-none text-dark"><img src="./src/assets/glpi.svg" alt="GLPI" style={{width: "20px", height: "20px", marginRight: "15px"}}/>Portal de GLPI (Chile)</a></li>
                    <li className="mb-2"><a href="#" className="text-decoration-none text-dark"><img src="./src/assets/glpi.svg" alt="GLPI" style={{width: "20px", height: "20px", marginRight: "15px"}}/>Portal de GLPI (Perú)</a></li>
                    <li className="mb-2"><a href="#" className="text-decoration-none text-dark"><img src="./src/assets/concientizacion.svg" alt="Concientización" style={{width: "20px", height: "20px", marginRight: "15px"}}/>Portal de concientización</a></li>
                    <li className="mb-2"><a href="#" className="text-decoration-none text-dark"><img src="./src/assets/anexos.svg" alt="Anexos Telefónicos" style={{width: "20px", height: "20px", marginRight: "15px"}}/>Anexos Telefónicos</a></li>
                    <li><a href="#" className="text-decoration-none text-dark"><img src="./src/assets/correo.svg" alt="Correo de Soporte" style={{width: "20px", height: "20px", marginRight: "15px"}}/>Correo de Soporte</a></li>
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
                    <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Ver documentación</a></li>
                    <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Video Tutoriales</a></li>
                    <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Generar Firmas</a></li>
                    <li><a href="#" className="text-decoration-none text-dark">Sugerencias</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Turnos - Nueva sección */}
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
    </header>
  )
}

export default HeaderPhone