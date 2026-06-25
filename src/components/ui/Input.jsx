import { useEffect, useRef, useImperativeHandle, forwardRef } from 'react'
import '@unifrutti/ui/components/input'

const Input = forwardRef(function Input(
  {
    id,
    name,
    label,
    value,
    type = 'text',
    placeholder,
    error,
    required = false,
    disabled = false,
    onChange,
    onKeyDown,
    onFocus,
    onBlur,
    className,
    autoComplete,
    ariaDescribedBy,
    style,
  },
  ref
) {
  const elRef = useRef(null)

  useImperativeHandle(ref, () => ({
    focus: () => elRef.current?.focus(),
    get value() {
      return elRef.current?.value ?? ''
    },
  }), [])

  useEffect(() => {
    const el = elRef.current
    if (!el || !onChange) return
    const handler = (e) => {
      const detail = e.detail
      onChange({ target: { value: detail }, detail })
    }
    el.addEventListener('u-input', handler)
    return () => el.removeEventListener('u-input', handler)
  }, [onChange])

  return (
    <u-input
      ref={elRef}
      id={id}
      name={name}
      label={label}
      value={value ?? ''}
      type={type}
      placeholder={placeholder}
      error={error}
      required={required || undefined}
      disabled={disabled || undefined}
      autocomplete={autoComplete}
      aria-describedby={ariaDescribedBy}
      onKeyDown={onKeyDown}
      onFocus={onFocus}
      onBlur={onBlur}
      class={className}
      style={style}
    />
  )
})

export default Input
