import './GuideSteps.scss'

/**
 * Lista de pasos numerados para las guías.
 * steps: [{ title, body (string o JSX), image? }]
 */
function GuideSteps({ steps }) {
  return (
    <ol className="guide-steps">
      {steps.map((step, i) => (
        <li className="guide-steps__step" key={i}>
          <div className="guide-steps__number" aria-hidden="true">{i + 1}</div>
          <div className="guide-steps__content">
            <h3 className="guide-steps__title">{step.title}</h3>
            <div className="guide-steps__body">{step.body}</div>
            {step.image && (
              <img
                className="guide-steps__image"
                src={step.image}
                alt={step.title}
                loading="lazy"
              />
            )}
          </div>
        </li>
      ))}
    </ol>
  )
}

export default GuideSteps
