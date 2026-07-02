import { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion'
import { Input } from '../../components/ui'
import { useTitle } from '../../hooks/useTitle'
import { normalize } from '../../utils/searchText'
import { FAQ_CATEGORIES } from './faqData'
import './Faq.scss'

function Faq() {
  useTitle('Preguntas Frecuentes', 'Respuestas a las dudas más comunes de TI: contraseñas, VPN, correo, impresoras e incidencias.')
  const location = useLocation()
  const [q, setQ] = useState('')

  // Scroll a la categoría indicada por el buscador global (anclas no funcionan con HashRouter).
  // requestAnimationFrame para ejecutarse después del scroll-to-top global de App.jsx.
  useEffect(() => {
    const anchor = location.state?.anchor
    if (!anchor) return
    requestAnimationFrame(() => {
      document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }, [location.state])

  const scrollToCategory = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const visibleCategories = useMemo(() => {
    const query = normalize(q.trim())
    if (!query) return FAQ_CATEGORIES
    return FAQ_CATEGORIES.map((cat) => ({
      ...cat,
      items: cat.items.filter(
        (item) =>
          normalize(item.q).includes(query) ||
          normalize(item.a).includes(query) ||
          (item.tags || []).some((t) => normalize(t).includes(query)),
      ),
    })).filter((cat) => cat.items.length > 0)
  }, [q])

  return (
    <>
      <div className="container-large">
        <Breadcrumb title="Preguntas Frecuentes" />
      </div>

      <section className="faq-wrapper container py-4">
        <div className="row">
          <div className="col-12">
            <h2 className="section-title text-start">❓ Preguntas Frecuentes</h2>
            <p className="section-description text-start">
              Respuestas rápidas a las dudas más comunes. Si no encuentras lo que buscas,
              escríbenos a <a href="mailto:soporte@verfrut.cl">soporte@verfrut.cl</a> o
              reporta una incidencia.
            </p>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-12 col-md-6 mb-3">
            <Input
              type="search"
              placeholder="Buscar pregunta"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Escape') setQ('') }}
              autoComplete="off"
              name="faq-search"
              id="faq-search-input"
            />
          </div>
        </div>

        <div className="faq-chips" role="navigation" aria-label="Categorías">
          {FAQ_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className="faq-chips__chip"
              onClick={() => scrollToCategory(cat.id)}
            >
              <i className={cat.icon} aria-hidden="true" /> {cat.label}
            </button>
          ))}
        </div>

        {visibleCategories.length === 0 && (
          <p className="text-muted text-center py-5">
            No hay preguntas que coincidan con tu búsqueda.
          </p>
        )}

        {visibleCategories.map((cat) => (
          <div key={cat.id} id={cat.id} className="faq-category">
            <h2 className="faq-category__title">
              <i className={cat.icon} aria-hidden="true" /> {cat.label}
            </h2>
            <FaqAccordion idPrefix={`faq-${cat.id}`} items={cat.items} />
          </div>
        ))}
      </section>

      <div className="pt-5 mt-5">
        <Footer />
      </div>
    </>
  )
}

export default Faq
