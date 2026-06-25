import '@unifrutti/ui/components/button'

const VARIANT_MAP = {
  primary: 'primary',
  secondary: 'secondary',
  danger: 'danger',
  dark: 'dark',
  light: 'secondary',
}

function Button({
  text,
  icon,
  iconColor,
  variant = 'primary',
  size = 'md',
  type = 'button',
  disabled = false,
  fullWidth = false,
  onClick,
  className,
  style,
  children,
  ...rest
}) {
  const content = children ?? (
    <>
      {icon && <i className={icon} style={iconColor ? { color: iconColor } : undefined} />}
      {text && <span>{text}</span>}
    </>
  )

  return (
    <u-button
      variant={VARIANT_MAP[variant] || 'primary'}
      size={size}
      type={type}
      disabled={disabled || undefined}
      fullwidth={fullWidth || undefined}
      onClick={onClick}
      class={className}
      style={style}
      {...rest}
    >
      {content}
    </u-button>
  )
}

export default Button
