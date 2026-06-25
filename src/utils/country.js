/**
 * Detecta el país del usuario usando timezone y, como fallback, navigator.language.
 * Devuelve 'CL', 'PE' o null si no se puede determinar.
 */
export function detectCountry() {
  const tz = safeTimeZone()
  if (tz) {
    if (TZ_TO_COUNTRY[tz]) return TZ_TO_COUNTRY[tz]
  }

  const lang = (navigator.language || '').toLowerCase()
  if (lang.endsWith('-cl')) return 'CL'
  if (lang.endsWith('-pe')) return 'PE'

  return null
}

const TZ_TO_COUNTRY = {
  'America/Santiago': 'CL',
  'America/Punta_Arenas': 'CL',
  'Pacific/Easter': 'CL',
  'America/Lima': 'PE',
}

function safeTimeZone() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone
  } catch {
    return null
  }
}

export const INCIDENCIAS_URLS = {
  CL: 'https://incidencias.verfrut.cl/login',
  PE: 'https://incidencias.verfrut.pe/login',
}
