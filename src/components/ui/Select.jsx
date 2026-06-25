import { useEffect, useMemo, useRef } from 'react'
import '@unifrutti/ui/components/select'

function normalizeOptions(options) {
  if (!Array.isArray(options)) return []
  return options.map((opt) => {
    if (typeof opt === 'string') return { value: opt, label: opt }
    if (opt && typeof opt === 'object') {
      return { value: String(opt.value ?? opt.label ?? ''), label: String(opt.label ?? opt.value ?? '') }
    }
    return { value: '', label: '' }
  })
}

function Select({
  id,
  name,
  label,
  value,
  options,
  placeholder = 'Selecciona una opción',
  disabled = false,
  required = false,
  error,
  onChange,
  className,
}) {
  const elRef = useRef(null)
  const normalized = useMemo(() => normalizeOptions(options), [options])

  // Las opciones son array → hay que asignarlas como propiedad, no como atributo.
  useEffect(() => {
    const el = elRef.current
    if (!el) return
    el.options = normalized
  }, [normalized])

  useEffect(() => {
    const el = elRef.current
    if (!el || !onChange) return
    const handler = (e) => {
      const detail = e.detail
      onChange({ target: { value: detail }, detail })
    }
    el.addEventListener('u-change', handler)
    return () => el.removeEventListener('u-change', handler)
  }, [onChange])

  return (
    <u-select
      ref={elRef}
      id={id}
      name={name}
      label={label}
      value={value ?? ''}
      placeholder={placeholder}
      disabled={disabled || undefined}
      required={required || undefined}
      error={error}
      class={className}
    />
  )
}

export default Select
