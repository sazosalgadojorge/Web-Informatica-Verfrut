import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './Banner.scss'
import { motion } from "framer-motion";
import { reportIncident } from '../IncidenciasModal/IncidenciasModal'
import { Button } from '../ui'
import { publicPath } from '../../utils/publicPath'

const background = publicPath('svg/background.svg')
const CHECK = publicPath('svg/CHECK.svg')
const P1 = publicPath('svg/P1.svg')
const P2 = publicPath('svg/P2.svg')
const USER = publicPath('svg/USER.svg')

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

                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                style={{ display: "inline-block", marginTop: "1rem" }}
                            >
                                <Button variant="primary" size="lg" onClick={reportIncident}>
                                    <span className="d-inline-flex align-items-center gap-2">
                                        <i className="fi fi-rr-arrow-right"></i>
                                        Incidencias
                                    </span>
                                </Button>
                            </motion.div>
                            </div>
                            
                        <div className="col-12 col-md-4 hero-anidado" >
                            <div className="hero-image-container">
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

    </>
  )
}

export default Banner
