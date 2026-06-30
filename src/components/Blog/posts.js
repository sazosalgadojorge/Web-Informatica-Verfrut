import IncidenciasContent from './posts/IncidenciasContent'
import VerfrutCloudContent from './posts/VerfrutCloudContent'
import ProtocolosSeguridadContent from './posts/ProtocolosSeguridadContent'
import { publicPath } from '../../utils/publicPath'

export const POSTS = [
  {
    slug: 'verfrut-cloud',
    title: 'Frusys Cloud: La clave para optimizar el proceso de la fruta en Unifrutti Chile y Perú',
    excerpt:
      'Frusys Cloud es nuestra solución tecnológica que moderniza un antiguo ERP, transformándolo en una plataforma web para optimizar procesos, simplificar su uso y mejorar la gestión de la fruta.',
    date: '2025-05-01',
    image: publicPath('blog/verfrut-cloud-cover.png'),
    tag: 'Innovación',
    Content: VerfrutCloudContent,
  },
  {
    slug: 'incidencias',
    title: '¿Cómo realizar una incidencia correctamente?',
    excerpt:
      'Aprende cómo reportar de forma clara y efectiva cualquier incidencia técnica. Sigue estos pasos y ayuda a que nuestro equipo de soporte te atienda rápidamente.',
    date: '2024-12-15',
    image: publicPath('laptop-glpi.png'),
    tag: 'Guía',
    Content: IncidenciasContent,
  },
  {
    slug: 'protocolos-seguridad',
    title: 'Protocolos de Seguridad de la Información',
    excerpt:
      'Guía con las prácticas mínimas que cada colaborador debe seguir para proteger la información de Unifrutti: contraseñas, phishing, equipos, VPN y manejo de datos.',
    date: '2026-06-26',
    image: publicPath('blog/security.jpg'),
    tag: 'Seguridad',
    Content: ProtocolosSeguridadContent,
  },
]

export function getPost(slug) {
  return POSTS.find((p) => p.slug === slug) || null
}
