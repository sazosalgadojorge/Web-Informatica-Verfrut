import { useParams, useNavigate, Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import { Button } from '../../components/ui'
import { useTitle } from '../../hooks/useTitle'
import { getGuia, GUIAS } from './guias'
import './Guias.scss'

const formatDate = (iso) => {
  try {
    return new Date(iso).toLocaleDateString('es-CL', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    })
  } catch {
    return iso
  }
}

function GuiaDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const guia = getGuia(slug)
  useTitle(guia?.title, guia?.excerpt)

  if (!guia) {
    return (
      <>
        <div className="container-large">
          <Breadcrumb title="Guías" />
        </div>
        <div className="container py-5 text-center">
          <h2 className="mb-3">Guía no encontrada</h2>
          <p className="text-muted mb-4">La guía que buscas no existe o fue movida.</p>
          <Button variant="primary" onClick={() => navigate('/guias')}>Volver a las guías</Button>
        </div>
        <Footer />
      </>
    )
  }

  const Content = guia.Content
  const others = GUIAS.filter((g) => g.slug !== guia.slug).slice(0, 3)

  return (
    <>
      <div className="container-large">
        <Breadcrumb title="Guías" />
      </div>

      <section className="guia-detail p-3 p-md-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="guia-container">
                <div className="guia-meta mb-2 text-muted">
                  <span className="me-3 badge bg-primary-subtle text-primary">{guia.category}</span>
                  <span className="me-3">
                    <i className="fi fi-rr-time-quarter-past" aria-hidden="true" /> {guia.durationMin} min · {guia.difficulty}
                  </span>
                  <span>{formatDate(guia.date)}</span>
                </div>
                <h2 className="guia-title pt-2">{guia.title}</h2>
                <div className="guia-content">
                  <Content />
                </div>

                {others.length > 0 && (
                  <div className="guia-related mt-5">
                    <h3 className="guia-related__title">Otras guías que te pueden servir</h3>
                    <ul className="guia-related__list">
                      {others.map((g) => (
                        <li key={g.slug}>
                          <Link to={`/guias/${g.slug}`}>{g.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="row mt-5 justify-content-center">
                  <div className="col-12 col-md-3 d-flex justify-content-center">
                    <Button variant="primary" size="lg" onClick={() => navigate('/guias')}>
                      Volver a las guías
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="pt-5 mt-5">
        <Footer />
      </div>
    </>
  )
}

export default GuiaDetail
