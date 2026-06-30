import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect, lazy, Suspense } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import Header from './components/Header/Header'
import HeaderPhone from './components/Header-Phone/Header-Phone'
import HomePage from './components/HomePage/HomePage'
import { Button } from './components/ui'
import PageSkeleton from './components/ui/PageSkeleton/PageSkeleton'

const Turnos = lazy(() => import('./components/Turnos/Turnos'))
const Anexos = lazy(() => import('./components/Anexos/Anexos'))
const Videos = lazy(() => import('./components/Videos/Videos'))
const BlogList = lazy(() => import('./components/Blog/BlogList'))
const BlogPost = lazy(() => import('./components/Blog/BlogPost'))

function NotFound() {
  const navigate = useNavigate()
  return (
    <div className="container py-5 text-center">
      <h1 className="display-4 mb-3">404</h1>
      <p className="lead mb-4">La página que buscas no existe.</p>
      <Button variant="primary" onClick={() => navigate('/')}>Volver al inicio</Button>
    </div>
  )
}

function App() {
  const location = useLocation()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 768)
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  useEffect(() => {
    const behavior = location.pathname === '/blog' ? 'instant' : 'smooth'
    window.scrollTo({ top: 0, left: 0, behavior })
  }, [location.pathname])

  return (
    <>
      {isMobile ? <HeaderPhone /> : <Header />}

      <Suspense fallback={<PageSkeleton />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/turnos" element={<Turnos />} />
          <Route path="/anexos" element={<Anexos />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
