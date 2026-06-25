import '@unifrutti/ui/components/divider'

function Divider({ orientation = 'horizontal', label, className, style }) {
  const mergedStyle = {
    display: orientation === 'vertical' ? 'inline-flex' : 'flex',
    width: orientation === 'vertical' ? 'auto' : '100%',
    // Color de la línea (default del DS es muy claro)
    '--color-border': '#cbd5e1',
    ...style,
  }

  return (
    <u-divider
      orientation={orientation}
      label={label}
      class={className}
      style={mergedStyle}
    />
  )
}

export default Divider
