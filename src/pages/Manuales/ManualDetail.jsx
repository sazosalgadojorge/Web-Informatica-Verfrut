import { Link, useNavigate, useParams } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import { Badge, Button } from '../../components/ui'
import { useTitle } from '../../hooks/useTitle'
import { getManualProcedure, getRelatedManualProcedures } from './manuales'
import './Manuales.scss'

const confidenceVariant = {
  alta: 'success',
  media: 'warning',
  baja: 'secondary',
}

function publicAssetUrl(publicPath) {
  const baseUrl = import.meta.env.BASE_URL || '/'
  return `${baseUrl.replace(/\/?$/, '/')}${String(publicPath || '').replace(/^\/+/, '')}`
}

function ManualImageCard({ image, linkKey }) {
  const clickTargets = image.clickTargets || []

  return (
    <a
      key={linkKey || image.id}
      className={`manual-step-images__item${clickTargets.length > 0 ? ' has-click-targets' : ''}`}
      href={publicAssetUrl(image.publicPath)}
      target="_blank"
      rel="noreferrer"
    >
      <span className="manual-step-images__frame">
        <img src={publicAssetUrl(image.publicPath)} alt={image.caption} loading="lazy" />
        {clickTargets.map((target, index) => (
          <span
            key={`${image.id}-${index}-${target.label}`}
            className="manual-hotspot"
            style={{
              left: `${target.xPercent}%`,
              top: `${target.yPercent}%`,
            }}
            aria-label={target.description || target.label}
          >
            {index + 1}
          </span>
        ))}
      </span>
      <span className="manual-step-images__caption">{image.caption}</span>
      {clickTargets.length > 0 && (
        <span className="manual-click-targets">
          {clickTargets.map((target, index) => (
            <span key={`${image.id}-target-${index}-${target.label}`}>
              <strong>{index + 1}</strong>
              {target.label}
            </span>
          ))}
        </span>
      )}
    </a>
  )
}

function ManualDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const procedure = getManualProcedure(slug)
  useTitle(procedure?.title, procedure?.summary)

  if (!procedure) {
    return (
      <>
        <div className="container-large">
          <Breadcrumb title="Manuales ERP" />
        </div>
        <div className="container py-5 text-center">
          <h2 className="mb-3">Procedimiento no encontrado</h2>
          <p className="text-muted mb-4">El procedimiento que buscas no existe o fue regenerado.</p>
          <Button variant="primary" onClick={() => navigate('/manuales')}>Volver a manuales</Button>
        </div>
        <Footer />
      </>
    )
  }

  const related = getRelatedManualProcedures(procedure)
  const sourceImages = procedure.source?.images || []
  const matchedImages = procedure.source?.matchedImages || []
  const contextualImages = matchedImages.filter((image) => (
    image.relevance !== 'directa' || !image.matchedStepIndexes?.length
  ))
  const hiddenImageCount = Math.max((procedure.source?.imageCount || 0) - sourceImages.length, 0)

  return (
    <>
      <div className="container-large">
        <Breadcrumb title="Manuales ERP" />
      </div>

      <section className="manual-detail container py-4">
        <article className="manual-detail__main">
          <div className="manual-detail__meta">
            <Badge variant="primary" size="sm">{procedure.module}</Badge>
            <Badge variant="warning" size="sm">Pendiente de revisión</Badge>
            <Badge variant={confidenceVariant[procedure.confidence] || 'secondary'} size="sm">
              Confianza {procedure.confidence}
            </Badge>
          </div>

          <h1 className="manual-detail__title">{procedure.title}</h1>
          <p className="manual-detail__summary">{procedure.summary}</p>

          <div className="manual-detail__notice">
            Este contenido fue generado desde manuales existentes y debe revisarse antes de usarlo como procedimiento oficial.
          </div>

          <section className="manual-detail__section">
            <h2>Pasos</h2>
            <ol className="manual-steps">
              {(procedure.steps || []).map((step, index) => {
                const stepNumber = index + 1
                const stepImages = matchedImages.filter((image) => (
                  image.relevance === 'directa' && (image.matchedStepIndexes || []).includes(stepNumber)
                ))

                return (
                  <li key={`${index}-${step}`}>
                    <div className="manual-steps__content">
                      <span>{step}</span>
                      {stepImages.length > 0 && (
                        <div className={`manual-step-images${stepImages.length === 1 ? ' manual-step-images--single' : ''}`}>
                          {stepImages.map((image) => (
                            <ManualImageCard
                              key={`${stepNumber}-${image.id}`}
                              image={image}
                              linkKey={`${stepNumber}-${image.id}`}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </li>
                )
              })}
            </ol>
          </section>

          {contextualImages.length > 0 && (
            <section className="manual-detail__section manual-matched-images">
              <h2>Capturas relacionadas</h2>
              <div className={`manual-step-images manual-step-images--contextual${contextualImages.length === 1 ? ' manual-step-images--single' : ''}`}>
                {contextualImages.map((image) => (
                  <ManualImageCard
                    key={image.id}
                    image={image}
                  />
                ))}
              </div>
            </section>
          )}

          {procedure.warnings?.length > 0 && (
            <section className="manual-detail__section">
              <h2>Observaciones para revisión</h2>
              <ul className="manual-warnings">
                {procedure.warnings.map((warning) => (
                  <li key={warning}>{warning}</li>
                ))}
              </ul>
            </section>
          )}

          <section className="manual-detail__section">
            <h2>Palabras clave</h2>
            <div className="manual-tags">
              {(procedure.tags || []).map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </section>

          <section className="manual-detail__section manual-source">
            <h2>Fuente</h2>
            <dl>
              <div>
                <dt>Documento</dt>
                <dd>{procedure.source?.title || 'Sin título'}</dd>
              </div>
              <div>
                <dt>Ruta</dt>
                <dd>{procedure.source?.relativePath || 'Sin ruta'}</dd>
              </div>
              <div>
                <dt>Fragmento</dt>
                <dd>{procedure.source?.chunkId}</dd>
              </div>
              {procedure.source?.imageCount > 0 && (
                <div>
                  <dt>Capturas</dt>
                  <dd>
                    {procedure.source.imageCount} imagen(es) extraida(s) del documento fuente.
                    {' '}
                    {matchedImages.length > 0
                      ? `${matchedImages.length} imagen(es) asociada(s) por vision al procedimiento.`
                      : 'Deben asociarse manualmente u OCR antes de usarlas como parte del procedimiento.'}
                  </dd>
                </div>
              )}
            </dl>

            {sourceImages.length > 0 && (
              <details className="manual-images">
                <summary>Ver capturas del documento fuente</summary>
                <div className="manual-images__grid">
                  {sourceImages.map((image, index) => (
                    <a
                      key={image.id}
                      className="manual-images__item"
                      href={publicAssetUrl(image.publicPath)}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={publicAssetUrl(image.publicPath)}
                        alt={`Captura fuente ${index + 1} de ${procedure.source?.title || procedure.title}`}
                        loading="lazy"
                      />
                      <span>{image.fileName || `Captura ${index + 1}`}</span>
                    </a>
                  ))}
                </div>
                {hiddenImageCount > 0 && (
                  <p className="manual-images__note">
                    Hay {hiddenImageCount} captura(s) adicional(es) extraida(s) para este documento.
                  </p>
                )}
              </details>
            )}
          </section>

          <div className="manual-detail__actions">
            <Button variant="primary" onClick={() => navigate('/manuales')}>Volver a manuales</Button>
          </div>
        </article>

        {related.length > 0 && (
          <aside className="manual-detail__related">
            <h2>Relacionados</h2>
            <div className="manual-related-list">
              {related.map((item) => (
                <Link key={item.id} to={`/manuales/${item.slug}`}>
                  <span>{item.module}</span>
                  <strong>{item.title}</strong>
                </Link>
              ))}
            </div>
          </aside>
        )}
      </section>

      <div className="pt-5 mt-5">
        <Footer />
      </div>
    </>
  )
}

export default ManualDetail
