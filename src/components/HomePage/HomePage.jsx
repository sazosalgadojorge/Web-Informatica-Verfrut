import { useNavigate } from 'react-router-dom'
import Banner from '../Banner/Banner'
import Marcas from '../Marcas/Marcas'
import Info from '../Info/Info'
import FrutAppPromo from '../FrutAppPromo/FrutAppPromo'
import VerfrutCloud from '../VerfrutCloud/VerfrutCloud'
import EquipoTI from '../EquipoTI/EquipoTI'
import Footer from '../Footer/Footer'
import { Divider } from '../ui'
import incidenciasImg from '../../assets/incidencias.png'
import pishingImg from '../../assets/pishing.png'

const PHISHING_VIDEO_URL = 'https://verfrutsa.sharepoint.com/sites/Ciberseguridadconcientizacion/_layouts/15/stream.aspx?id=%2Fsites%2FCiberseguridadconcientizacion%2FDocumentos%20compartidos%2FVideo%20Phishing%2FVerfrut%2DInformacion%2Dphishing%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E1de0a668%2Dcbe0%2D42ec%2D80e5%2D6b9064c3e189'

function HomePage() {
  const navigate = useNavigate()

  const openPhishingVideo = () => {
    window.open(PHISHING_VIDEO_URL, '_blank', 'noopener,noreferrer')
  }

  const sectionDivider = (
    <div className="container" style={{}}>
      <Divider />
    </div>
  )

  return (
    <>
      <Banner />
      <Marcas />
      {sectionDivider}
      <Info
        className="pt-5"
        title="¿Cómo realizar una incidencia correctamente? Aquí te lo contamos."
        description="Aprende cómo reportar de forma clara y efectiva cualquier incidencia técnica que encuentres. Sigue estos pasos y ayuda a que nuestro equipo de soporte te atienda rápidamente. 🚀✨"
        imageSrc={incidenciasImg}
        imageAlt="Personas trabajando en laptop"
        buttonText="Ver Más"
        onClick={() => navigate('/blog/incidencias')}
      />
      {sectionDivider}
      <VerfrutCloud />
      {sectionDivider}
      <FrutAppPromo />
      {sectionDivider}
      <Info
        className="pt-5"
        title="Cuidado con el anzuelo: Todo lo que debes saber sobre el phishing"
        description="El phishing es un fraude donde ciberdelincuentes imitan a entidades legítimas para robar datos personales, como contraseñas o información bancaria, mediante mensajes o sitios web falsos."
        imageSrc={pishingImg}
        imageAlt="Phishing"
        buttonText="Ver Video"
        onClick={openPhishingVideo}
      />
      {sectionDivider}
      <EquipoTI />
      <Footer />
    </>
  )
}

export default HomePage
