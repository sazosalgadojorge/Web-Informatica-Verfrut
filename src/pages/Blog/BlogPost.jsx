import { useParams, useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import { Button } from '../../components/ui'
import { getPost } from './posts'
import { useTitle } from '../../hooks/useTitle'
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

function BlogPost() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const post = getPost(slug)
  useTitle(post?.title, post?.excerpt)

  if (!post) {
    return (
      <>
        <div className="container-large">
          <Breadcrumb title="Blog" />
        </div>
        <div className="container py-5 text-center">
          <h2 className="mb-3">Post no encontrado</h2>
          <p className="text-muted mb-4">El artículo que buscas no existe o fue movido.</p>
          <Button variant="primary" onClick={() => navigate('/blog')}>Volver al blog</Button>
        </div>
        <Footer />
      </>
    )
  }

  const Content = post.Content

  return (
    <>
      <div className="container-large">
        <Breadcrumb title="Blog" />
      </div>

      <section className="th-blog-wrapper blog-details p-3 p-md-5 space-extra-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12 col-lg-12">
              <div className="blog-container">
                <div className="blog-img d-flex justify-content-center">
                  <img className="img-fluid" src={post.image} alt={post.title} />
                </div>
                <div className="blog-content">
                  <div className="blog-meta mt-4 mb-2 text-muted">
                    {post.tag && <span className="me-3 badge bg-primary-subtle text-primary">{post.tag}</span>}
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <h2 className="blog-title pt-2">{post.title}</h2>
                  <Content />
                </div>

                <div className="row mt-5 justify-content-center">
                  <div className="blog-btn col-12 col-md-3 d-flex justify-content-center">
                    <Button variant="primary" size="lg" onClick={() => navigate('/blog')}>
                      Volver al blog
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

export default BlogPost
