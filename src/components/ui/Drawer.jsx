import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import '@unifrutti/ui/components/drawer'

function Drawer({
  open = false,
  title,
  position = 'left',
  size = 'md',
  hideClose = false,
  onClose,
  className,
  children,
  footer,
}) {
  const elRef = useRef(null)

  useEffect(() => {
    const el = elRef.current
    if (!el || !onClose) return
    const handler = () => onClose()
    el.addEventListener('u-close', handler)
    return () => el.removeEventListener('u-close', handler)
  }, [onClose])

  useEffect(() => {
    const el = elRef.current
    if (!el) return
    el.open = !!open
  }, [open])

  const node = (
    <u-drawer
      ref={elRef}
      title={title}
      position={position}
      size={size}
      hide-close={hideClose || undefined}
      class={className}
      style={{ '--z-overlay': 10000 }}
    >
      {children}
      {footer && <div slot="footer">{footer}</div>}
    </u-drawer>
  )

  if (typeof document === 'undefined') return null
  return createPortal(node, document.body)
}

export default Drawer
