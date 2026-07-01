import { publicPath } from '../../../utils/publicPath'

const operationImage = publicPath('blog/blog_inner_1.jpg')
const logisticsImage = publicPath('blog/blog_inner_2.jpg')

function VerfrutCloudContent() {
  return (
    <div className="verfrut-cloud-post">
      <p className="blog-content">
        <strong>Santiago / Lima</strong> – En un mundo donde la tecnología avanza a pasos agigantados,
        la industria agroexportadora no se queda atrás. Unifrutti, uno de los principales exportadores
        de fruta fresca de Sudamérica, ha dado un paso decisivo hacia la transformación digital con la
        implementación de <strong>Frusys Cloud</strong>, una solución tecnológica desarrollada
        internamente para modernizar y optimizar todo el proceso productivo de la fruta en sus
        operaciones de Chile y Perú.
      </p>

      <blockquote className="blockquote my-4 ps-3 border-start border-3 border-primary">
        <p className="mb-2">“Una plataforma para controlar todo el ciclo productivo”</p>
        <cite className="text-muted">— Unifrutti Chile y Perú</cite>
      </blockquote>

      <p className="blog-content">
        Frusys Cloud es más que un sistema de gestión: es una plataforma integral que permite controlar
        y monitorear en tiempo real cada etapa del ciclo de la fruta, desde el campo hasta el despacho.
        Gracias a esta herramienta, las áreas de producción, calidad, logística y comercial pueden tomar
        decisiones basadas en datos confiables y actualizados al instante.
      </p>

      <p className="blog-content">
        “Con Frusys Cloud logramos una trazabilidad completa del producto, lo que nos permite cumplir
        con los estándares internacionales y responder con agilidad a los requerimientos de los mercados
        más exigentes”, explica uno de los líderes del equipo tecnológico de Unifrutti.
      </p>

      <h3 className="blog-subtitle pt-4">Digitalización que agrega valor</h3>
      <p className="blog-content">
        Antes de la implementación, gran parte de la información se gestionaba de manera fragmentada
        entre planillas y sistemas heredados. Hoy, con esta plataforma unificada, Unifrutti ha reducido
        errores operacionales, acelerado los tiempos de respuesta y mejorado la coordinación entre sus
        plantas y oficinas en ambos países.
      </p>

      <div className="blog-image-grid" aria-label="Imágenes de Frusys Cloud">
        <figure className="blog-image-card">
          <img src={operationImage} alt="Operación agrícola gestionada con Frusys Cloud" loading="lazy" />
        </figure>
        <figure className="blog-image-card">
          <img src={logisticsImage} alt="Proceso logístico conectado a Frusys Cloud" loading="lazy" />
        </figure>
      </div>

      <p className="blog-content">
        Frusys Cloud también destaca por su accesibilidad desde cualquier dispositivo conectado,
        permitiendo que los equipos trabajen de manera remota o en terreno con la misma eficacia que
        desde una oficina. Esto ha sido clave para adaptarse a nuevas formas de trabajo más flexibles.
      </p>

      <h3 className="blog-subtitle pt-4">Chile y Perú, unificados bajo una misma plataforma</h3>
      <p className="blog-content">
        Una de las mayores fortalezas de Frusys Cloud es su capacidad para integrar datos de distintas
        geografías bajo un solo ecosistema. Tanto en los campos y plantas de Chile como en los centros
        de operación en Perú, los usuarios acceden a la misma información, lo que fomenta una gestión
        regional alineada y eficiente.
      </p>

      <h3 className="blog-subtitle pt-4">Mirando al futuro</h3>
      <p className="blog-content">
        El desarrollo de Frusys Cloud marca un hito en la historia tecnológica de la empresa.
        Actualmente, el sistema continúa evolucionando con módulos especializados en recursos humanos,
        finanzas y gestión ambiental, consolidando a Unifrutti como una agroexportadora con visión de
        futuro y fuerte enfoque en la innovación digital.
      </p>

      <p className="blog-content">
        Con Frusys Cloud, la empresa no solo está mejorando su competitividad, sino también elevando
        el estándar de cómo debe funcionar una agroindustria moderna.
      </p>
    </div>
  )
}

export default VerfrutCloudContent
