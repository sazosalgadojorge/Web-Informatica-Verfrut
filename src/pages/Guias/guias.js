import ConectarVpnContent from './guias/ConectarVpnContent'
import CrearTicketGlpiContent from './guias/CrearTicketGlpiContent'
import ConfigurarImpresoraContent from './guias/ConfigurarImpresoraContent'
import { publicPath } from '../../utils/publicPath'

export const GUIA_CATEGORIES = ['Redes y VPN', 'Soporte', 'Impresoras']

export const GUIAS = [
  {
    slug: 'conectar-vpn-forticlient',
    title: 'Cómo conectarte a la VPN con FortiClient',
    excerpt:
      'Conéctate a la red corporativa desde fuera de la oficina para acceder a GLPI, el Portal de Solicitudes y otros sistemas internos.',
    category: 'Redes y VPN',
    tags: ['vpn', 'forticlient', 'remoto', 'red', 'teletrabajo'],
    difficulty: 'básico',
    durationMin: 10,
    date: '2026-07-02',
    image: publicPath('blog/security.jpg'),
    Content: ConectarVpnContent,
  },
  {
    slug: 'crear-ticket-glpi',
    title: 'Cómo crear un ticket en GLPI paso a paso',
    excerpt:
      'Reporta incidencias y solicitudes correctamente en el portal GLPI de Chile o Perú para recibir una atención más rápida.',
    category: 'Soporte',
    tags: ['glpi', 'incidencia', 'ticket', 'soporte', 'solicitud'],
    difficulty: 'básico',
    durationMin: 5,
    date: '2026-07-02',
    image: publicPath('laptop-glpi.png'),
    Content: CrearTicketGlpiContent,
  },
  {
    slug: 'solucionar-problemas-impresora',
    title: 'Qué revisar cuando la impresora no imprime',
    excerpt:
      'Pasos básicos para resolver los problemas de impresión más comunes antes de reportar una incidencia a soporte.',
    category: 'Impresoras',
    tags: ['impresora', 'imprimir', 'cola de impresion', 'atasco'],
    difficulty: 'básico',
    durationMin: 5,
    date: '2026-07-02',
    image: publicPath('blog/blog_inner_1.jpg'),
    Content: ConfigurarImpresoraContent,
  },
]

export function getGuia(slug) {
  return GUIAS.find((g) => g.slug === slug) || null
}
