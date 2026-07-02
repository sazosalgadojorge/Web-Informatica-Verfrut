import Fuse from 'fuse.js'
import { POSTS } from '../pages/Blog/posts'
import { GUIAS } from '../pages/Guias/guias'
import { TERMINOS } from '../pages/Glosario/terminos'
import { FAQ_CATEGORIES } from '../pages/Faq/faqData'
import { NAV_LINKS } from './navLinks'
import { MANUAL_PROCEDURES } from './manualIndex'
import { normalize } from '../utils/searchText'
import { publicPath, withPublicBase } from '../utils/publicPath'

export const TYPE_LABELS = {
  enlace: 'Navegación',
  manual: 'Manuales ERP',
  guia: 'Guías',
  blog: 'Blog',
  faq: 'Preguntas Frecuentes',
  glosario: 'Glosario',
  video: 'Videos',
}

export const TYPE_ORDER = ['enlace', 'manual', 'guia', 'blog', 'faq', 'glosario', 'video']

// Todos los documentos comparten este shape:
// { id, type, title, description, tags, url, external?, vpn?, icon?, action?, state? }
function toDoc(doc) {
  return {
    ...doc,
    _title: normalize(doc.title),
    _description: normalize(doc.description),
    _tags: (doc.tags || []).map(normalize),
  }
}

export function buildStaticDocs() {
  const blogDocs = POSTS.map((p) =>
    toDoc({
      id: `blog-${p.slug}`,
      type: 'blog',
      title: p.title,
      description: p.excerpt,
      tags: [p.tag],
      url: `/blog/${p.slug}`,
      icon: 'fi fi-rr-newspaper',
    }),
  )

  const guiaDocs = GUIAS.map((g) =>
    toDoc({
      id: `guia-${g.slug}`,
      type: 'guia',
      title: g.title,
      description: g.excerpt,
      tags: [...(g.tags || []), g.category],
      url: `/guias/${g.slug}`,
      icon: 'fi fi-rr-book-open-cover',
    }),
  )

  const glosarioDocs = TERMINOS.map((t) =>
    toDoc({
      id: `glosario-${t.term}`,
      type: 'glosario',
      title: t.term,
      description: t.definition,
      tags: t.related || [],
      url: '/glosario',
      state: { q: t.term },
      icon: 'fi fi-rr-book-alt',
    }),
  )

  const faqDocs = FAQ_CATEGORIES.flatMap((cat) =>
    cat.items.map((item) =>
      toDoc({
        id: `faq-${cat.id}-${item.id}`,
        type: 'faq',
        title: item.q,
        description: item.a,
        tags: [...(item.tags || []), cat.label],
        url: '/faq',
        state: { anchor: cat.id },
        icon: cat.icon,
      }),
    ),
  )

  const linkDocs = NAV_LINKS.map((l) =>
    toDoc({
      id: `enlace-${l.id}`,
      type: 'enlace',
      title: l.title,
      description: l.description,
      tags: l.tags,
      url: l.url,
      external: l.external,
      vpn: l.vpn,
      action: l.action,
      icon: l.icon,
    }),
  )

  const manualDocs = MANUAL_PROCEDURES.map((procedure) =>
    toDoc({
      id: procedure.id,
      type: 'manual',
      title: procedure.title,
      description: [
        procedure.module,
        procedure.status === 'pendiente_revision' ? 'Pendiente de revisión' : procedure.status,
        procedure.summary,
      ].filter(Boolean).join(' · '),
      tags: [
        ...(procedure.tags || []),
        procedure.module,
        procedure.system,
        procedure.confidence,
        procedure.source?.title,
      ].filter(Boolean),
      url: `/manuales/${procedure.slug}`,
      state: { procedureId: procedure.id },
      icon: 'fi fi-rr-book-open-cover',
    }),
  )

  return [...linkDocs, ...manualDocs, ...guiaDocs, ...blogDocs, ...faqDocs, ...glosarioDocs]
}

// Los videos viven en public/json/videos.json: se cargan la primera vez que
// se abre el buscador, con fallo silencioso si el fetch no responde.
export async function fetchVideoDocs() {
  try {
    const res = await fetch(publicPath('json/videos.json'), { cache: 'no-store' })
    if (!res.ok) return []
    const data = await res.json()
    return (Array.isArray(data) ? data : []).map((v, i) =>
      toDoc({
        id: `video-${v.id ?? v.src ?? i}`,
        type: 'video',
        title: v.title || 'Video',
        description: v.description || '',
        tags: v.tags || [],
        url: '/videos',
        state: { q: v.title },
        icon: 'fi fi-rr-play-alt',
        thumbnail: withPublicBase(v.thumbnail),
      }),
    )
  } catch {
    return []
  }
}

export function createSearchIndex(docs) {
  return new Fuse(docs, {
    includeScore: true,
    ignoreLocation: true,
    threshold: 0.34,
    minMatchCharLength: 2,
    keys: [
      { name: '_title', weight: 0.5 },
      { name: '_tags', weight: 0.3 },
      { name: '_description', weight: 0.2 },
    ],
  })
}
