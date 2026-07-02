import 'bootstrap/js/dist/collapse'
import './FaqAccordion.scss'

/**
 * Acordeón genérico dirigido por datos (Bootstrap collapse).
 * IDs únicos por idPrefix + item.id para permitir varios acordeones en la misma página.
 */
function FaqAccordion({ idPrefix, items }) {
  const accordionId = `${idPrefix}-accordion`

  return (
    <div className="accordion faq-accordion" id={accordionId}>
      {items.map((item) => {
        const collapseId = `${idPrefix}-${item.id}`
        return (
          <div className="accordion-item" key={item.id}>
            <h3 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${collapseId}`}
                aria-expanded="false"
                aria-controls={collapseId}
              >
                {item.q}
              </button>
            </h3>
            <div
              id={collapseId}
              className="accordion-collapse collapse"
              data-bs-parent={`#${accordionId}`}
            >
              <div className="accordion-body">{item.a}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default FaqAccordion
