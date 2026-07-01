import { useMemo, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import { POSTS } from './posts'
import { useTitle } from '../../hooks/useTitle'
import './Blog.scss'

const POSTS_PER_PAGE = 6

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

function BlogList() {
  useTitle('Blog', 'Artículos y noticias del equipo TI de Unifrutti sobre ciberseguridad, incidencias y sistemas.')
  const [page, setPage] = useState(1)

  const sortedPosts = useMemo(
    () => [...POSTS].sort((a, b) => new Date(b.date) - new Date(a.date)),
    [],
  )

  const totalPages = Math.max(1, Math.ceil(sortedPosts.length / POSTS_PER_PAGE))

  useEffect(() => {
    if (page > totalPages) setPage(totalPages)
  }, [page, totalPages])

  const currentPosts = useMemo(() => {
    const start = (page - 1) * POSTS_PER_PAGE
    return sortedPosts.slice(start, start + POSTS_PER_PAGE)
  }, [sortedPosts, page])

  const goTo = (next) => {
    const clamped = Math.min(Math.max(1, next), totalPages)
    if (clamped === page) return
    setPage(clamped)
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <>
      <div className="container-large">
        <Breadcrumb title="Blog" />
      </div>

      <section className="blog-list-wrapper container py-5">
        <div className="row g-4">
          {currentPosts.map((post) => (
            <article key={post.slug} className="col-12 col-md-6 col-lg-4">
              <Link to={`/blog/${post.slug}`} className="blog-card text-decoration-none">
                <div className="blog-card__img-wrap">
                  <img src={post.image} alt={post.title} loading="lazy" />
                </div>
                <div className="blog-card__body">
                  {post.tag && <span className="blog-card__tag">{post.tag}</span>}
                  <h3 className="blog-card__title">{post.title}</h3>
                  <p className="blog-card__excerpt">{post.excerpt}</p>
                  <div className="blog-card__meta">
                    <span>{formatDate(post.date)}</span>
                    <span className="blog-card__more">Leer más →</span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {totalPages > 1 && (
          <nav className="blog-pagination" aria-label="Paginación del blog">
            <button
              type="button"
              className="blog-pagination__btn"
              onClick={() => goTo(page - 1)}
              disabled={page === 1}
              aria-label="Página anterior"
            >
              ←
            </button>

            <ul className="blog-pagination__pages">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <li key={n}>
                  <button
                    type="button"
                    className={`blog-pagination__page ${n === page ? 'is-active' : ''}`}
                    onClick={() => goTo(n)}
                    aria-current={n === page ? 'page' : undefined}
                    aria-label={`Ir a la página ${n}`}
                  >
                    {n}
                  </button>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="blog-pagination__btn"
              onClick={() => goTo(page + 1)}
              disabled={page === totalPages}
              aria-label="Página siguiente"
            >
              →
            </button>
          </nav>
        )}
      </section>

      <div className="pt-5 mt-5">
        <Footer />
      </div>
    </>
  )
}

export default BlogList
