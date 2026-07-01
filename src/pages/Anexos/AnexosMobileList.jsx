function AnexosMobileList({ rows = [], loading = false }) {
  if (loading) {
    return (
      <ul className="anexos-mobile-list" aria-busy="true">
        {Array.from({ length: 3 }).map((_, i) => (
          <li key={i} className="anexos-mobile-card anexos-mobile-card--skeleton">
            <div className="skeleton-line skeleton-line--title" />
            <div className="skeleton-line skeleton-line--sub" />
            <div className="skeleton-line" />
            <div className="skeleton-line" />
          </li>
        ))}
      </ul>
    )
  }

  if (!rows.length) {
    return (
      <p className="anexos-mobile-empty">No hay anexos que coincidan con los filtros</p>
    )
  }

  return (
    <ul className="anexos-mobile-list">
      {rows.map((r, i) => (
        <li key={`${r.nroAnexo}-${i}`} className="anexos-mobile-card">
          <header className="anexos-mobile-card__header">
            <h3 className="anexos-mobile-card__name">{r.trabajador || '—'}</h3>
            <span className="anexos-mobile-card__empresa">{r.empresa}</span>
          </header>

          <dl className="anexos-mobile-card__data">
            {r.departamento && (
              <>
                <dt>Departamento</dt>
                <dd>{r.departamento}</dd>
              </>
            )}
            {r.nroAnexo && (
              <>
                <dt>Anexo</dt>
                <dd><a href={`tel:${r.nroAnexo}`}>{r.nroAnexo}</a></dd>
              </>
            )}
            {r.mail && r.mail !== 'Sin mail' && (
              <>
                <dt>Mail</dt>
                <dd><a href={`mailto:${r.mail}`}>{r.mail}</a></dd>
              </>
            )}
          </dl>
        </li>
      ))}
    </ul>
  )
}

export default AnexosMobileList
