import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Fuse from 'fuse.js'
import Footer from '../../components/Footer/Footer'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import { Input } from '../../components/ui'
import { useTitle } from '../../hooks/useTitle'
import { normalize, expandQuery } from '../../utils/searchText'
import { GUIAS, GUIA_CATEGORIES } from './guias'
import './Guias.scss'

function GuiasList() {
  useTitle('Guías paso a paso', 'Guías prácticas de TI: VPN, tickets en GLPI, impresoras y más, explicadas paso a paso.')
  const [q, setQ] = useState('')
  const [debouncedQ, setDebouncedQ] = useState('')
  const [activeCategory, setActiveCategory] = useState(null)

  // Debounce 250ms (mismo patrón que Videos)
  const tRef = useRef(null)
  useEffect(() => {
    clearTimeout(tRef.current)
    tRef.current = setTimeout(() => setDebouncedQ(q), 250)
    return () => clearTimeout(tRef.current)
  }, [q])

  const enriched = useMemo(
    () =>
      GUIAS.map((g) => ({
        ...g,
        _title: normalize(g.title),
        _excerpt: normalize(g.excerpt),
        _tags: (g.tags || []).map(normalize),
        _category: normalize(g.category),
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
          { name: '_title', weight: 0.5 },
          { name: '_excerpt', weight: 0.2 },
          { name: '_tags', weight: 0.2 },
          { name: '_category', weight: 0.1 },
        ],
      }),
    [enriched],
  )

  const results = useMemo(() => {
    const qTrim = debouncedQ.trim()
    let out
    if (!qTrim) {
      out = [...enriched].sort((a, b) => (b.date || '').localeCompare(a.date || ''))
    } else {
      out = fuse.search(expandQuery(qTrim)).map((r) => r.item)
    }
    if (activeCategory) out = out.filter((g) => g.category === activeCategory)
    return out
  }, [fuse, enriched, debouncedQ, activeCategory])

  return (
    <>
      <div className="container-large">
        <Breadcrumb title="Guías paso a paso" />
      </div>

      <section className="guias-wrapper container py-4">
        <div className="row">
          <div className="col-12">
            <h2 className="section-title text-start">🧭 Guías paso a paso</h2>
            <p className="section-description text-start">
              Aprende a resolver por tu cuenta las tareas más comunes: conectarte a la VPN,
              crear tickets, configurar equipos y más. Usa el buscador para filtrar por tema.
            </p>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-12 col-md-6 mb-3">
            <Input
              type="search"
              placeholder="Buscar guía"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Escape') setQ('') }}
              autoComplete="off"
              name="guias-search"
              id="guias-search-input"
            />
          </div>
        </div>

        <div className="guias-chips">
          <button
            type="button"
            className={`guias-chips__chip ${activeCategory === null ? 'is-active' : ''}`}
            onClick={() => setActiveCategory(null)}
          >
            Todas
          </button>
          {GUIA_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`guias-chips__chip ${activeCategory === cat ? 'is-active' : ''}`}
              onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="row g-4 mt-1">
          {results.map((guia) => (
            <article key={guia.slug} className="col-12 col-md-6 col-lg-4">
              <Link to={`/guias/${guia.slug}`} className="guia-card text-decoration-none">
                <div className="guia-card__img-wrap">
                  <img src={guia.image} alt={guia.title} loading="lazy" />
                </div>
                <div className="guia-card__body">
                  <span className="guia-card__tag">{guia.category}</span>
                  <h3 className="guia-card__title">{guia.title}</h3>
                  <p className="guia-card__excerpt">{guia.excerpt}</p>
                  <div className="guia-card__meta">
                    <span>
                      <i className="fi fi-rr-time-quarter-past" aria-hidden="true" /> {guia.durationMin} min · {guia.difficulty}
                    </span>
                    <span className="guia-card__more">Ver guía →</span>
                  </div>
                </div>
              </Link>
            </article>
          ))}

          {results.length === 0 && (
            <div className="col-12 text-center py-5">
              <p className="text-muted">No hay guías que coincidan con tu búsqueda.</p>
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

export default GuiasList
