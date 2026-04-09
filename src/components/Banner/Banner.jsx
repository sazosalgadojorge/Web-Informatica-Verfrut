import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './Banner.scss'
import background from '/svg/background.svg';
import CHECK from '/svg/CHECK.svg'
import P1 from '/svg/P1.svg'
import P2 from '/svg/P2.svg'
import USER from '/svg/USER.svg'
import { motion } from "framer-motion";

function IncidenciaModal() {
    return (
        <>
        <div className="container">
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-sm modal-incidencias">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close-incidencia" data-bs-dismiss="modal" aria-label="Close">✕</button>
                    </div>
                    <div className="modal-body">
                        <div className="logo-container">
                            <img src="/logotipo.svg" alt="Logo Verfrut" style={{height: '70px', width: 'auto'}} />
                        </div>
                        <h5 className="modal-title">Seleccione su ubicación</h5>
                        <div className="d-grid gap-2">
                            <a href="https://incidencias.verfrut.cl/login" target="_blank" className="btn btn-primary btn-xl" style={{fontSize: '16px', padding: '15px 20px'}}>
                                <img src="./src/assets/chile.svg" alt="Chile" style={{width: '20px', marginRight: '8px'}} />Incidencias Chile
                            </a>
                            <a href="https://incidencias.verfrut.pe/login" target="_blank" className="btn btn-primary btn-xl" style={{fontSize: '16px', padding: '15px 20px'}}>
                                <img src="./src/assets/peru.svg" alt="Peru" style={{width: '20px', marginRight: '8px'}} />Incidencias Perú
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

function Banner() {
  return (

    <>
            <div className="gradient p-3">
                <div className="container m-0">
                    <div className="row">
                   

                            <div className="col-12 col-md-8 box-info">
                            <motion.h1
                                className="gradient-title"
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                Bienvenido <br/><span className='light-title'>a sistemas y soporte.</span>
                            </motion.h1>

                            <motion.p
                                className="gradient-description"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                            >
                                Gestionamos la infraestructura tecnológica de Verfrut con soluciones vanguardistas que impulsan la eficiencia
                                y el crecimiento continuo.
                            </motion.p>

                            <motion.button
                                className="btn btn-primary btn-xl d-flex align-items-center gap-2"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                                style={{ fontSize: "16px", padding: "15px 20px" }}
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <i className="fi fi-rr-arrow-right"></i>
                                Incidencias
                            </motion.button>
                            </div>
                            
                        <div className="col-12 col-md-4 hero-anidado" > 
                            <div className="hero-image-container" style={{position: 'relative', width: '100%', height: '400px'}}>
                                <img src={background} alt="Fondo" className='hero-bg' style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '150%',
                                    height: '100%',
                                    zIndex: 1
                                }} />
                                <img src={P1} alt="Persona 1" className='hero-person1' style={{
                                    position: 'absolute',
                                    top: '20%',
                                    left: '75%',
                                    width: '70%',
                                    zIndex: 2
                                }} />
                                <img src={P2} alt="Persona 2" className='hero-person2' style={{
                                    position: 'absolute',
                                    top: '10%',
                                    right: '60%',
                                    width: '50%',
                                    zIndex: 2
                                }} />
                                <img src={USER} alt="Usuario" className='hero-user' style={{
                                    position: 'absolute',
                                    top: '36%',
                                    left: '58%',
                                    transform: 'translateX(-50%)',
                                    width: '40%',
                                    zIndex: 3
                                }} />
                                <img src={CHECK} alt="Verificación" className='hero-check' style={{
                                    position: 'absolute',
                                    top: '30%',
                                    right: '17%',
                                    width: '15%',
                                    zIndex: 4
                                }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <IncidenciaModal />
    </>
  )
}

export default Banner