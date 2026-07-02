import '@unifrutti/ui/components/tooltip'

function Tooltip({ tip, placement = 'bottom', delay, block = false, className, children }) {
  return (
    <u-tooltip
      tip={tip}
      placement={placement}
      delay={delay}
      block={block || undefined}
      class={className}
    >
      {children}
    </u-tooltip>
  )
}

export default Tooltip
