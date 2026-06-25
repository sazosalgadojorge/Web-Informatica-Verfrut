import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import '@unifrutti/ui/components/modal'

function Modal({
  open = false,
  title,
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

  // Setear `open` como propiedad del custom element (más fiable que el atributo)
  useEffect(() => {
    const el = elRef.current
    if (!el) return
    el.open = !!open
  }, [open])

  const node = (
    <u-modal
      ref={elRef}
      title={title}
      size={size}
      hide-close={hideClose || undefined}
      class={className}
      style={{ '--z-overlay': 10000 }}
    >
      {children}
      {footer && <div slot="footer">{footer}</div>}
    </u-modal>
  )

  if (typeof document === 'undefined') return null
  return createPortal(node, document.body)
}

export default Modal
