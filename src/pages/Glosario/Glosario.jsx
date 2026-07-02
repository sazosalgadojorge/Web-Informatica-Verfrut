import { useEffect, useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import { Input } from '../../components/ui'
import { useTitle } from '../../hooks/useTitle'
import { normalize } from '../../utils/searchText'
import { TERMINOS } from './terminos'
import './Glosario.scss'

const isExternal = (link) => /^https?:/i.test(link)

function TermLink({ link }) {
  if (!link) return null
  if (isExternal(link)) {
    return (
      <a className="glosario-term__link" href={link} target="_blank" rel="noopener noreferrer">
        Ver más <i className="fi fi-rr-arrow-up-right-from-square" aria-hidden="true" />
      </a>
    )
  }
  return (
    <Link className="glosario-term__link" to={link}>
      Ver más →
    </Link>
  )
}

function Glosario() {
  useTitle('Glosario TI', 'Términos comunes de tecnología explicados en lenguaje simple: VPN, GLPI, phishing, DTE y más.')
  const location = useLocation()
  const [q, setQ] = useState(location.state?.q || '')
  const [activeLetter, setActiveLetter] = useState(null)

  // Si llega una búsqueda vía navegación (buscador global) estando ya en la página
  useEffect(() => {
    if (location.state?.q) setQ(location.state.q)
  }, [location.state])

  const grouped = useMemo(() => {
    const sorted = [...TERMINOS].sort((a, b) => a.term.localeCompare(b.term, 'es'))
    const groups = new Map()
    for (const t of sorted) {
      const letter = normalize(t.term).charAt(0).toUpperCase()
      if (!groups.has(letter)) groups.set(letter, [])
      groups.get(letter).push(t)
    }
    return groups
  }, [])

  const letters = useMemo(() => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''), [])

  const visibleGroups = useMemo(() => {
    const query = normalize(q.trim())
    const out = []
    for (const [letter, terms] of grouped) {
      if (activeLetter && letter !== activeLetter) continue
      const filtered = query
        ? terms.filter(
            (t) => normalize(t.term).includes(query) || normalize(t.definition).includes(query),
          )
        : terms
      if (filtered.length) out.push([letter, filtered])
    }
    return out
  }, [grouped, q, activeLetter])

  return (
    <>
      <div className="container-large">
        <Breadcrumb title="Glosario TI" />
      </div>

      <section className="glosario-wrapper container py-4">
        <div className="row">
          <div className="col-12">
            <h2 className="section-title text-start">📖 Glosario TI</h2>
            <p className="section-description text-start">
              Términos de tecnología que verás en nuestros sistemas y comunicados, explicados en
              lenguaje simple. Usa el buscador o filtra por letra.
            </p>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-12 col-md-6 mb-3">
            <Input
              type="search"
              placeholder="Buscar término o definición"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Escape') setQ('') }}
              autoComplete="off"
              name="glosario-search"
              id="glosario-search-input"
            />
          </div>
        </div>

        <nav className="glosario-letters" aria-label="Filtrar por letra">
          <button
            type="button"
            className={`glosario-letters__btn ${activeLetter === null ? 'is-active' : ''}`}
            onClick={() => setActiveLetter(null)}
          >
            Todas
          </button>
          {letters.map((l) => (
            <button
              key={l}
              type="button"
              className={`glosario-letters__btn ${activeLetter === l ? 'is-active' : ''}`}
              disabled={!grouped.has(l)}
              onClick={() => setActiveLetter(activeLetter === l ? null : l)}
            >
              {l}
            </button>
          ))}
        </nav>

        {visibleGroups.length === 0 && (
          <p className="text-muted text-center py-5">
            No hay términos que coincidan con tu búsqueda.
          </p>
        )}

        {visibleGroups.map(([letter, terms]) => (
          <div key={letter} className="glosario-group">
            <h2 className="glosario-group__letter" id={`letra-${letter}`}>{letter}</h2>
            <div className="row g-3">
              {terms.map((t) => (
                <div key={t.term} className="col-12 col-md-6">
                  <div className="glosario-term h-100">
                    <h3 className="glosario-term__name">{t.term}</h3>
                    <p className="glosario-term__definition">{t.definition}</p>
                    <div className="glosario-term__footer">
                      {t.related?.length > 0 && (
                        <span className="glosario-term__related">
                          Relacionado: {t.related.join(', ')}
                        </span>
                      )}
                      <TermLink link={t.link} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <div className="pt-5 mt-5">
        <Footer />
      </div>
    </>
  )
}

export default Glosario
