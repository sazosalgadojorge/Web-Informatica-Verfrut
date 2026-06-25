import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import { POSTS } from './posts'
import './Blog.scss'

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
  return (
    <>
      <div className="container-large">
        <Breadcrumb title="Blog" />
      </div>

      <section className="blog-list-wrapper container py-5">
        <div className="row g-4">
          {POSTS.map((post) => (
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
      </section>

      <div className="pt-5 mt-5">
        <Footer />
      </div>
    </>
  )
}

export default BlogList
