export function publicPath(path) {
  const base = import.meta.env.BASE_URL || '/'
  const normalizedBase = base.endsWith('/') ? base : `${base}/`
  const normalizedPath = String(path || '').replace(/^\/+/, '')

  return `${normalizedBase}${normalizedPath}`
}

export function withPublicBase(value) {
  if (!value || typeof value !== 'string') return value
  if (/^(https?:|mailto:|tel:|data:|blob:|#)/i.test(value)) return value

  return publicPath(value)
}
