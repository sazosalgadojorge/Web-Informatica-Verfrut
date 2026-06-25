import '@unifrutti/ui/components/badge'

const VARIANT_MAP = {
  primary: 'primary',
  success: 'success',
  warning: 'warning',
  danger: 'danger',
  info: 'primary',
  secondary: 'neutral',
  default: 'neutral',
  neutral: 'neutral',
}

const SIZE_MAP = {
  xs: 'sm',
  sm: 'sm',
  md: 'md',
  lg: 'md',
}

function Badge({ variant = 'default', size = 'md', className, children }) {
  return (
    <u-badge
      variant={VARIANT_MAP[variant] || 'neutral'}
      size={SIZE_MAP[size] || 'md'}
      class={className}
    >
      {children}
    </u-badge>
  )
}

export default Badge
