import { useEffect, useRef } from 'react'
import '@unifrutti/ui/components/pagination'

function Pagination({
  page = 1,
  total = 0,
  pageSize = 10,
  pageSizes,
  siblings = 1,
  onChange,
  className,
}) {
  const elRef = useRef(null)

  useEffect(() => {
    const el = elRef.current
    if (!el) return
    el.pageSizes = pageSizes ?? null
  }, [pageSizes])

  useEffect(() => {
    const el = elRef.current
    if (!el || !onChange) return
    const handler = (e) => onChange(e.detail)
    el.addEventListener('u-page-change', handler)
    return () => el.removeEventListener('u-page-change', handler)
  }, [onChange])

  return (
    <u-pagination
      ref={elRef}
      page={page}
      total={total}
      page-size={pageSize}
      siblings={siblings}
      class={className}
    />
  )
}

export default Pagination
