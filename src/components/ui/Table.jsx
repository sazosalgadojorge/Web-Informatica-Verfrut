import { useEffect, useRef } from 'react'
import '@unifrutti/ui/components/table'

function Table({
  columns = [],
  data = [],
  loading = false,
  striped = false,
  resizable = false,
  editable = false,
  emptyText = 'Sin resultados',
  onSort,
  onCellEdit,
  className,
}) {
  const elRef = useRef(null)

  useEffect(() => {
    const el = elRef.current
    if (!el) return
    el.columns = columns
  }, [columns])

  useEffect(() => {
    const el = elRef.current
    if (!el) return
    el.data = data
  }, [data])

  useEffect(() => {
    const el = elRef.current
    if (!el) return
    const handlers = []
    if (onSort) {
      const h = (e) => onSort(e.detail)
      el.addEventListener('u-sort', h)
      handlers.push(['u-sort', h])
    }
    if (onCellEdit) {
      const h = (e) => onCellEdit(e.detail)
      el.addEventListener('u-cell-edit', h)
      handlers.push(['u-cell-edit', h])
    }
    return () => handlers.forEach(([name, h]) => el.removeEventListener(name, h))
  }, [onSort, onCellEdit])

  return (
    <u-table
      ref={elRef}
      loading={loading || undefined}
      striped={striped || undefined}
      resizable={resizable || undefined}
      editable={editable || undefined}
      empty-text={emptyText}
      class={className}
    />
  )
}

export default Table
