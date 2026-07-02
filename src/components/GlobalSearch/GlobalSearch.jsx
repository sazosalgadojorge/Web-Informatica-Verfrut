/* eslint-disable react-refresh/only-export-components */
import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Modal, Input } from '../ui'
import VpnBadge from '../ui/VpnBadge/VpnBadge'
import { reportIncident } from '../IncidenciasModal/IncidenciasModal'
import {
  buildStaticDocs,
  fetchVideoDocs,
  createSearchIndex,
  TYPE_LABELS,
  TYPE_ORDER,
} from '../../search/searchIndex'
import { expandQuery } from '../../utils/searchText'
import './GlobalSearch.scss'

export const GLOBAL_SEARCH_EVENT = 'verfrut:open-global-search'

export function openGlobalSearch() {
  window.dispatchEvent(new CustomEvent(GLOBAL_SEARCH_EVENT))
}

const MAX_PER_GROUP = 5
const isMac = typeof navigator !== 'undefined' && /Mac|iPhone|iPad/i.test(navigator.platform)
export const SEARCH_SHORTCUT_HINT = isMac ? '⌘K' : 'Ctrl K'

function GlobalSearch() {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [q, setQ] = useState('')
  const [videoDocs, setVideoDocs] = useState(null) // null = aún no cargados
  const [activeIndex, setActiveIndex] = useState(0)
  const inputRef = useRef(null)

  const staticDocs = useMemo(() => buildStaticDocs(), [])

  const fuse = useMemo(
    () => createSearchIndex([...staticDocs, ...(videoDocs || [])]),
    [staticDocs, videoDocs],
  )

  // Apertura por evento custom (mismo patrón que IncidenciasModal)
  useEffect(() => {
    const handler = () => setOpen(true)
    window.addEventListener(GLOBAL_SEARCH_EVENT, handler)
    return () => window.removeEventListener(GLOBAL_SEARCH_EVENT, handler)
  }, [])

  // Atajo global Ctrl/⌘+K (Ctrl+K abre la búsqueda del navegador: hay que prevenirla)
  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen((v) => !v)
      }
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  // Al abrir: cargar videos una sola vez, enfocar el input y limpiar la búsqueda anterior
  useEffect(() => {
    if (!open) return
    if (videoDocs === null) {
      fetchVideoDocs().then(setVideoDocs)
    }
    setQ('')
    setActiveIndex(0)
    const t = setTimeout(() => inputRef.current?.focus(), 80)
    return () => clearTimeout(t)
  }, [open]) // eslint-disable-line react-hooks/exhaustive-deps

  const groups = useMemo(() => {
    const qTrim = q.trim()
    if (!qTrim) {
      // Sin consulta: accesos rápidos a las páginas y sistemas más usados
      const quick = staticDocs.filter((d) => d.type === 'enlace').slice(0, 7)
      return quick.length ? [['enlace', quick]] : []
    }
    const hits = fuse.search(expandQuery(qTrim)).map((r) => r.item)
    const byType = new Map()
    for (const doc of hits) {
      if (!byType.has(doc.type)) byType.set(doc.type, [])
      const bucket = byType.get(doc.type)
      if (bucket.length < MAX_PER_GROUP) bucket.push(doc)
    }
    return TYPE_ORDER.filter((t) => byType.has(t)).map((t) => [t, byType.get(t)])
  }, [q, fuse, staticDocs])

  const flatResults = useMemo(() => groups.flatMap(([, docs]) => docs), [groups])

  useEffect(() => {
    setActiveIndex(0)
  }, [q])

  const go = (doc) => {
    setOpen(false)
    if (doc.action === 'report-incident') {
      reportIncident()
      return
    }
    if (/^mailto:/i.test(doc.url)) {
      window.location.href = doc.url
      return
    }
    if (doc.external) {
      window.open(doc.url, '_blank', 'noopener,noreferrer')
      return
    }
    navigate(doc.url, doc.state ? { state: doc.state } : undefined)
  }

  const onKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex((i) => Math.min(i + 1, flatResults.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex((i) => Math.max(i - 1, 0))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      const doc = flatResults[activeIndex]
      if (doc) go(doc)
    } else if (e.key === 'Escape') {
      setOpen(false)
    }
  }

  let flatIndex = -1

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      title="Buscar en el sitio"
      size="md"
      className="global-search-modal"
    >
      <div className="global-search">
        <Input
          ref={inputRef}
          type="search"
          placeholder={`Buscar guías, sistemas, videos… (${SEARCH_SHORTCUT_HINT})`}
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onKeyDown={onKeyDown}
          autoComplete="off"
          name="global-search"
          id="global-search-input"
        />

        <div className="global-search__results" role="listbox" aria-label="Resultados de búsqueda">
          {groups.length === 0 && (
            <p className="global-search__empty">
              No encontramos resultados para “{q.trim()}”. Intenta con otra palabra o escribe a{' '}
              <a href="mailto:soporte@verfrut.cl">soporte@verfrut.cl</a>.
            </p>
          )}

          {groups.map(([type, docs]) => (
            <div className="global-search__group" key={type}>
              <div className="global-search__group-label">
                {q.trim() ? TYPE_LABELS[type] : 'Accesos rápidos'}
              </div>
              {docs.map((doc) => {
                flatIndex += 1
                const idx = flatIndex
                return (
                  <button
                    key={doc.id}
                    type="button"
                    className={`global-search__item ${idx === activeIndex ? 'is-active' : ''}`}
                    role="option"
                    aria-selected={idx === activeIndex}
                    onMouseEnter={() => setActiveIndex(idx)}
                    onClick={() => go(doc)}
                  >
                    {doc.icon && <i className={`global-search__icon ${doc.icon}`} aria-hidden="true" />}
                    <span className="global-search__text">
                      <span className="global-search__title">
                        {doc.title}
                        {doc.vpn && <VpnBadge />}
                      </span>
                      {doc.description && (
                        <span className="global-search__description">{doc.description}</span>
                      )}
                    </span>
                    {doc.external && (
                      <i className="fi fi-rr-arrow-up-right-from-square global-search__external" aria-hidden="true" />
                    )}
                  </button>
                )
              })}
            </div>
          ))}
        </div>

        <div className="global-search__hint">
          <span>↑↓ navegar</span>
          <span>Enter abrir</span>
          <span>Esc cerrar</span>
        </div>
      </div>
    </Modal>
  )
}

export default GlobalSearch
