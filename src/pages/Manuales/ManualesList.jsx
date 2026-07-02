import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Fuse from 'fuse.js'
import Footer from '../../components/Footer/Footer'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import { Badge, Input } from '../../components/ui'
import { useTitle } from '../../hooks/useTitle'
import { normalize, expandQuery } from '../../utils/searchText'
import { MANUAL_PROCEDURES } from '../../search/manualIndex'
import { MANUAL_MODULES } from './manuales'
import './Manuales.scss'

const confidenceVariant = {
  alta: 'success',
  media: 'warning',
  baja: 'secondary',
}

function ManualesList() {
  useTitle(
    'Manuales ERP',
    'Procedimientos generados desde manuales ERP internos, pendientes de revisión progresiva.',
  )

  const [q, setQ] = useState('')
  const [debouncedQ, setDebouncedQ] = useState('')
  const [activeModule, setActiveModule] = useState(null)
  const tRef = useRef(null)

  useEffect(() => {
    clearTimeout(tRef.current)
    tRef.current = setTimeout(() => setDebouncedQ(q), 250)
    return () => clearTimeout(tRef.current)
  }, [q])

  const enriched = useMemo(
    () =>
      MANUAL_PROCEDURES.map((procedure) => ({
        ...procedure,
        _title: normalize(procedure.title),
        _summary: normalize(procedure.summary),
        _module: normalize(procedure.module),
        _system: normalize(procedure.system),
        _tags: (procedure.tags || []).map(normalize),
        _source: normalize(procedure.source?.relativePath),
      })),
    [],
  )

  const fuse = useMemo(
    () =>
      new Fuse(enriched, {
        includeScore: true,
        ignoreLocation: true,
        threshold: 0.34,
        minMatchCharLength: 2,
        keys: [
          { name: '_title', weight: 0.4 },
          { name: '_tags', weight: 0.25 },
          { name: '_summary', weight: 0.2 },
          { name: '_module', weight: 0.1 },
          { name: '_source', weight: 0.05 },
        ],
      }),
    [enriched],
  )

  const results = useMemo(() => {
    const qTrim = debouncedQ.trim()
    const out = qTrim
      ? fuse.search(expandQuery(qTrim)).map((result) => result.item)
      : [...enriched].sort((a, b) => a.module.localeCompare(b.module, 'es') || a.title.localeCompare(b.title, 'es'))

    return activeModule ? out.filter((procedure) => procedure.module === activeModule) : out
  }, [activeModule, debouncedQ, enriched, fuse])

  return (
    <>
      <div className="container-large">
        <Breadcrumb title="Manuales ERP" />
      </div>

      <section className="manuales-wrapper container py-4">
        <div className="manuales-header">
          <div>
            <span className="manuales-kicker">Base de conocimiento</span>
            <h2 className="section-title text-start">Manuales ERP</h2>
            <p className="section-description text-start">
              Procedimientos extraídos desde manuales internos. Úsalos como base de consulta y revisión progresiva.
            </p>
          </div>
          <div className="manuales-summary">
            <strong>{MANUAL_PROCEDURES.length}</strong>
            <span>procedimientos generados</span>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-12 col-lg-7 mb-3">
            <Input
              type="search"
              placeholder="Buscar procedimiento, módulo, sistema o palabra clave"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Escape') setQ('') }}
              autoComplete="off"
              name="manuales-search"
              id="manuales-search-input"
            />
          </div>
        </div>

        <div className="manuales-chips">
          <button
            type="button"
            className={`manuales-chips__chip ${activeModule === null ? 'is-active' : ''}`}
            onClick={() => setActiveModule(null)}
          >
            Todos
          </button>
          {MANUAL_MODULES.map((module) => (
            <button
              key={module}
              type="button"
              className={`manuales-chips__chip ${activeModule === module ? 'is-active' : ''}`}
              onClick={() => setActiveModule(activeModule === module ? null : module)}
            >
              {module}
            </button>
          ))}
        </div>

        <div className="manuales-results">
          {results.map((procedure) => (
            <Link key={procedure.id} to={`/manuales/${procedure.slug}`} className="manual-card">
              <div className="manual-card__top">
                <span className="manual-card__module">{procedure.module}</span>
                <Badge variant={confidenceVariant[procedure.confidence] || 'secondary'} size="sm">
                  Confianza {procedure.confidence}
                </Badge>
              </div>
              <h3 className="manual-card__title">{procedure.title}</h3>
              <p className="manual-card__summary">{procedure.summary}</p>
              <div className="manual-card__meta">
                <span>{procedure.steps.length} pasos</span>
                <span>{procedure.source?.title}</span>
              </div>
              <div className="manual-card__tags">
                {(procedure.tags || []).slice(0, 4).map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </Link>
          ))}

          {results.length === 0 && (
            <div className="manuales-empty">
              <p>No hay procedimientos que coincidan con tu búsqueda.</p>
            </div>
          )}
        </div>
      </section>

      <div className="pt-5 mt-5">
        <Footer />
      </div>
    </>
  )
}

export default ManualesList
