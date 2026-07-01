import { useState } from 'react'
import './Footer.scss'
import { Input, Button } from '../ui'
import { publicPath } from '../../utils/publicPath'

const googlePlayBadge = publicPath('google-play.svg')
const appStoreBadge = publicPath('app-store.svg')

const CONTACT_EMAIL = 'contacto@verfrut.cl'
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function Footer() {
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState('idle')

    const handleContactSubmit = (e) => {
        e.preventDefault()
        if (!EMAIL_RE.test(email)) {
            setStatus('invalid')
            return
        }
        const subject = encodeURIComponent('Contacto desde el portal Unifrutti')
        const body = encodeURIComponent(`Hola equipo TI,\n\nMi correo de contacto es: ${email}\n\n`)
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
        setStatus('sent')
    }

    return (
        <footer className="footer-wrapper mt-5 mb-0">
            <div className="container">
                <div className="footer-top mb-5">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="footer-newsletter-content">
                                    <h2 className="newsletter-title text-white fw-bold">
                                        Contáctate <br/>
                                        con el<br/> 
                                        equipo TI
                                    </h2>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <form className="newsletter-form" onSubmit={handleContactSubmit} noValidate>
                                    <div className="row g-3 align-items-end">
                                        <div className="col-sm-9">
                                            <Input
                                                type="email"
                                                placeholder="Email"
                                                value={email}
                                                onChange={(e) => {
                                                    setEmail(e.target.value)
                                                    if (status !== 'idle') setStatus('idle')
                                                }}
                                                error={status === 'invalid' ? 'Ingresa un email válido' : undefined}
                                                required
                                            />
                                        </div>
                                        <div className="col-sm-3">
                                            <Button type="submit" variant="primary" fullWidth>
                                                Enviar
                                            </Button>
                                        </div>
                                    </div>
                                    {status === 'sent' && (
                                        <p className="text-white small mt-2 mb-0" role="status">
                                            Abriendo tu cliente de correo…
                                        </p>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="widget-area">
                    <div className="row justify-content-between">
                        <div className="col-md-6 col-xxl-3 col-xl-4">
                            <div className="widget footer-widget">
                                <h3 className="widget_title style2 text-white">Chile</h3>
                                <div className="th-widget-about">
                                    <p className="footer-info mb-3">
                                      <a href="tel:+56988776655" className="text-inherit">+56 9 88 7766 55</a>  
                                    </p>
                                    <p className="footer-info mb-2">Parcela 5, Santa Inés, Las Cabras, Chile</p>
                                    <p className="footer-info"><a className="text-inherit"
                                            href="mailto:contacto@verfrut.cl">contacto@verfrut.cl</a></p> 
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-auto">
                            <div className="widget footer-widget">
                                <h3 className="widget_title style2 text-white">Perú</h3>
                                <div className="th-widget-about">
                                    <div className="footer-info">
                                        <p className="footer-info_text">
                                            <a href="tel:+5173480005" className="text-inherit">+51 73 48 00 05</a>
                                        </p>
                                    </div>
                                    <p className="footer-info">Caserio El Papayo Mz. "O" Castilla Piura, Perú</p>
                                    <p className="footer-info">
                                    <a className="text-inherit" href="mailto:contacto@verfrut.cl">contacto@verfrut.cl</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-auto">
                            <div className="widget widget_nav_menu footer-widget">
                                <h3 className="widget_title style2 text-white">Contacto</h3>
                                <div className="menu-all-pages-container">
                                    <ul className="menu">
                                        <li><a href="mailto:rrhh@verfrut.cl">Recursos Humanos</a></li>
                                        <li><a href="mailto:soporte@verfrut.cl">Soporte</a></li>
                                        <li><a href="mailto:desarrollo@verfrut.cl">Desarrollo</a></li>
                                        <li><a href="mailto:info@verfrut.cl">Contacto</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-auto">
                            <div className="widget widget_offer footer-widget">
                                <h3 className="widget_title style2 text-white">Descarga FrutApp</h3>
                                <div className="download-btn-wrap">
                                    <div className="mb-10">
                                        <a href="https://play.google.com/store/apps/details?id=com.mobil.verfrut&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="download-btn">
                                            <img src={googlePlayBadge} alt="Google Play" />
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://apps.apple.com/cl/app/frutapp/id6478648879?l=en-GB" target="_blank" rel="noopener noreferrer" className="download-btn">
                                            <img src={appStoreBadge} alt="App Store" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-wrap">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-6">
                            <p className="copyright-text">Copyright <i className="fal fa-copyright"></i> {new Date().getFullYear()} Unifrutti Technology. Todos los derechos reservados.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
