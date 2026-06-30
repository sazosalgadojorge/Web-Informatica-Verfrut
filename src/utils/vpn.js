// URLs internas que solo responden estando conectado a la VPN corporativa.
// Si el dominio coincide con uno de estos patrones, mostramos un indicador
// visual en el enlace para que el usuario lo sepa antes de hacer click.
const VPN_HOST_PATTERNS = [
  /^incidencias\.verfrut\.(cl|pe)$/i,
  /^glpi\.verfrut\.(cl|pe)$/i,
  /^solicitudes\.verfrut\.(cl|pe)$/i,
]

export function requiresVpn(url) {
  if (!url || typeof url !== 'string') return false
  try {
    const host = new URL(url).hostname
    return VPN_HOST_PATTERNS.some((pattern) => pattern.test(host))
  } catch {
    return false
  }
}
