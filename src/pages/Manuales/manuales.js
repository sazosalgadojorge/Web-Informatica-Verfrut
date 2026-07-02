import { MANUAL_PROCEDURES } from '../../search/manualIndex'

export const MANUAL_MODULES = Array.from(
  new Set(MANUAL_PROCEDURES.map((procedure) => procedure.module).filter(Boolean)),
).sort((a, b) => a.localeCompare(b, 'es'))

export function getManualProcedure(slug) {
  return MANUAL_PROCEDURES.find((procedure) => procedure.slug === slug) || null
}

export function getRelatedManualProcedures(procedure, limit = 4) {
  if (!procedure) return []

  const tagSet = new Set((procedure.tags || []).map((tag) => tag.toLowerCase()))

  return MANUAL_PROCEDURES
    .filter((item) => item.id !== procedure.id)
    .map((item) => {
      const sameModule = item.module === procedure.module ? 3 : 0
      const sharedTags = (item.tags || []).filter((tag) => tagSet.has(tag.toLowerCase())).length
      return {
        item,
        score: sameModule + sharedTags,
      }
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title, 'es'))
    .slice(0, limit)
    .map(({ item }) => item)
}
