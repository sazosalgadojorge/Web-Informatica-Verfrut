import './PageSkeleton.scss'

function SkeletonBlock({ width = '100%', height = '1rem', className = '', style = {} }) {
  return <span className={`page-skeleton__block ${className}`} style={{ width, height, ...style }} />
}

function PageSkeleton() {
  return (
    <div className="page-skeleton" role="status" aria-live="polite" aria-busy="true">
      <span className="visually-hidden">Cargando contenido…</span>

      <div className="container py-4">
        <SkeletonBlock width="120px" height="14px" className="mb-3" />
        <SkeletonBlock width="60%" height="32px" className="mb-2" />
        <SkeletonBlock width="40%" height="14px" className="mb-5" />

        <div className="row g-4">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div key={idx} className="col-12 col-md-6 col-lg-4">
              <div className="page-skeleton__card">
                <SkeletonBlock height="160px" className="mb-3" style={{ borderRadius: '12px' }} />
                <SkeletonBlock width="80%" height="18px" className="mb-2" />
                <SkeletonBlock width="60%" height="14px" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PageSkeleton
