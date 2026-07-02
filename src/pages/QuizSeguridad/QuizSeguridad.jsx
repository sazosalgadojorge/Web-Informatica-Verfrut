import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Footer from '../../components/Footer/Footer'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import { Button } from '../../components/ui'
import { useTitle } from '../../hooks/useTitle'
import { PREGUNTAS, QUIZ_META } from './preguntas'
import './QuizSeguridad.scss'

const MotionDiv = motion.div

const slide = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -40 },
  transition: { duration: 0.25 },
}

function QuizSeguridad() {
  useTitle('Quiz de Ciberseguridad', 'Pon a prueba tus conocimientos de seguridad: phishing, contraseñas, VPN y buenas prácticas.')
  const [phase, setPhase] = useState('intro') // 'intro' | 'question' | 'result'
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState(null)
  const [revealed, setRevealed] = useState(false)
  const [correctCount, setCorrectCount] = useState(0)

  const total = PREGUNTAS.length
  const pregunta = PREGUNTAS[index]
  const correctOption = pregunta?.options.find((o) => o.correct)
  const isCorrect = revealed && selected === correctOption?.id

  const start = () => {
    setPhase('question')
    setIndex(0)
    setSelected(null)
    setRevealed(false)
    setCorrectCount(0)
  }

  const check = () => {
    if (!selected) return
    setRevealed(true)
    if (selected === correctOption?.id) setCorrectCount((c) => c + 1)
  }

  const next = () => {
    if (index + 1 >= total) {
      setPhase('result')
    } else {
      setIndex((i) => i + 1)
      setSelected(null)
      setRevealed(false)
    }
  }

  const score = Math.round((correctCount / total) * 100)
  const passed = score >= QUIZ_META.passScore

  const optionClass = (opt) => {
    const classes = ['quiz-option']
    if (!revealed && selected === opt.id) classes.push('is-selected')
    if (revealed && opt.correct) classes.push('is-correct')
    if (revealed && selected === opt.id && !opt.correct) classes.push('is-incorrect')
    return classes.join(' ')
  }

  return (
    <>
      <div className="container-large">
        <Breadcrumb title="Quiz de Ciberseguridad" />
      </div>

      <section className="quiz-wrapper container py-4">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <AnimatePresence mode="wait">
              {phase === 'intro' && (
                <MotionDiv key="intro" {...slide} className="quiz-card text-center">
                  <div className="quiz-card__emoji" aria-hidden="true">🛡️</div>
                  <h2 className="quiz-card__title">{QUIZ_META.title}</h2>
                  <p className="quiz-card__text">
                    {total} preguntas sobre situaciones reales: phishing, contraseñas, VPN y buenas
                    prácticas. Al responder cada una sabrás de inmediato si acertaste y por qué.
                    ¿Detectarías un ataque a tiempo?
                  </p>
                  <Button variant="primary" size="lg" onClick={start}>
                    Comenzar el quiz
                  </Button>
                </MotionDiv>
              )}

              {phase === 'question' && (
                <MotionDiv key={pregunta.id} {...slide} className="quiz-card">
                  <div className="quiz-progress mb-4">
                    <div className="d-flex justify-content-between mb-1">
                      <span className="quiz-progress__label">
                        Pregunta {index + 1} de {total}
                      </span>
                      <span className="quiz-progress__label">{correctCount} correctas</span>
                    </div>
                    <div className="progress" role="progressbar" aria-valuenow={index + 1} aria-valuemin="0" aria-valuemax={total}>
                      <div
                        className="progress-bar"
                        style={{ width: `${((index + (revealed ? 1 : 0)) / total) * 100}%` }}
                      />
                    </div>
                  </div>

                  <h2 className="quiz-question">{pregunta.question}</h2>

                  <div className="quiz-options" role="radiogroup" aria-label="Opciones de respuesta">
                    {pregunta.options.map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        className={optionClass(opt)}
                        disabled={revealed}
                        aria-pressed={selected === opt.id}
                        onClick={() => setSelected(opt.id)}
                      >
                        <span className="quiz-option__letter">{opt.id.toUpperCase()}</span>
                        <span className="quiz-option__text">{opt.text}</span>
                      </button>
                    ))}
                  </div>

                  {revealed && (
                    <div className={`quiz-feedback ${isCorrect ? 'quiz-feedback--correct' : 'quiz-feedback--incorrect'}`}>
                      <strong>{isCorrect ? '✅ ¡Correcto!' : '❌ Respuesta incorrecta.'}</strong>{' '}
                      {isCorrect ? pregunta.feedback.correct : pregunta.feedback.incorrect}
                    </div>
                  )}

                  <div className="d-flex justify-content-end mt-4">
                    {!revealed ? (
                      <Button variant="primary" size="lg" disabled={!selected} onClick={check}>
                        Comprobar
                      </Button>
                    ) : (
                      <Button variant="primary" size="lg" onClick={next}>
                        {index + 1 >= total ? 'Ver resultado' : 'Siguiente'}
                      </Button>
                    )}
                  </div>
                </MotionDiv>
              )}

              {phase === 'result' && (
                <MotionDiv key="result" {...slide} className="quiz-card text-center">
                  <div className="quiz-card__emoji" aria-hidden="true">{passed ? '🎉' : '📚'}</div>
                  <h2 className="quiz-card__title">
                    Obtuviste {correctCount} de {total} ({score}%)
                  </h2>
                  <p className="quiz-card__text">
                    {passed
                      ? '¡Excelente! Tienes buenos reflejos de ciberseguridad. Mantente alerta: los ataques evolucionan todo el tiempo.'
                      : 'Hay conceptos que conviene reforzar. Revisa nuestros artículos de seguridad y vuelve a intentarlo: la práctica hace la diferencia.'}
                  </p>

                  <div className="quiz-result-links">
                    <Link to="/blog/phishing">Phishing: ¿Qué es y cómo protegerte?</Link>
                    <Link to="/blog/protocolos-seguridad">Protocolos de Seguridad de la Información</Link>
                  </div>

                  <Button variant="primary" size="lg" onClick={start}>
                    Reintentar
                  </Button>
                </MotionDiv>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <div className="pt-5 mt-5">
        <Footer />
      </div>
    </>
  )
}

export default QuizSeguridad
