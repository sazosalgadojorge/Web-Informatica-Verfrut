import IncidenciasContent from './posts/IncidenciasContent'
import VerfrutCloudContent from './posts/VerfrutCloudContent'

export const POSTS = [
  {
    slug: 'verfrut-cloud',
    title: 'Verfrut Cloud: La clave para optimizar el proceso de la fruta en Verfrut Chile y Perú',
    excerpt:
      'Verfrut Cloud es nuestra solución tecnológica que moderniza un antiguo ERP, transformándolo en una plataforma web para optimizar procesos, simplificar su uso y mejorar la gestión de la fruta.',
    date: '2025-05-01',
    image: '/blog/verfrut-cloud-cover.png',
    tag: 'Innovación',
    Content: VerfrutCloudContent,
  },
  {
    slug: 'incidencias',
    title: '¿Cómo realizar una incidencia correctamente?',
    excerpt:
      'Aprende cómo reportar de forma clara y efectiva cualquier incidencia técnica. Sigue estos pasos y ayuda a que nuestro equipo de soporte te atienda rápidamente.',
    date: '2024-12-15',
    image: '/laptop-glpi.png',
    tag: 'Guía',
    Content: IncidenciasContent,
  },
]

export function getPost(slug) {
  return POSTS.find((p) => p.slug === slug) || null
}
