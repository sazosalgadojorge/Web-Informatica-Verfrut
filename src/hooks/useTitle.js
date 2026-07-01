import { useEffect } from 'react'

const BASE_TITLE = 'Unifrutti Technology'

export function useTitle(title, description) {
  useEffect(() => {
    const previousTitle = document.title
    document.title = title ? `${title} — ${BASE_TITLE}` : BASE_TITLE

    let previousDescription
    if (description) {
      const meta = document.querySelector('meta[name="description"]')
      if (meta) {
        previousDescription = meta.getAttribute('content')
        meta.setAttribute('content', description)
      }
    }

    return () => {
      document.title = previousTitle
      if (description && previousDescription !== undefined) {
        document.querySelector('meta[name="description"]')?.setAttribute('content', previousDescription)
      }
    }
  }, [title, description])
}
