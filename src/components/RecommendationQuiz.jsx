import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'

const QUIZ_QUESTIONS = [
  {
    id: 'experience',
    question: 'Quel type d experience recherchez-vous ?',
    options: [
      {
        id: 'culture',
        label: 'Culture, art et histoire',
        scores: { 'florence-1504': 25, 'paris-1889': 15 },
      },
      {
        id: 'adventure',
        label: 'Aventure et exploration',
        scores: { cretaceous: 30 },
      },
      {
        id: 'elegance',
        label: 'Elegance et raffinement',
        scores: { 'paris-1889': 20, 'florence-1504': 15 },
      },
    ],
  },
  {
    id: 'period',
    question: 'Quelle periode vous attire le plus ?',
    options: [
      {
        id: 'modern',
        label: 'Histoire moderne',
        scores: { 'paris-1889': 20 },
      },
      {
        id: 'ancient',
        label: 'Temps anciens',
        scores: { cretaceous: 25 },
      },
      {
        id: 'renaissance',
        label: 'Renaissance',
        scores: { 'florence-1504': 25 },
      },
    ],
  },
  {
    id: 'environment',
    question: 'Quel decor preferez-vous ?',
    options: [
      {
        id: 'city',
        label: 'Effervescence urbaine',
        scores: { 'paris-1889': 20 },
      },
      {
        id: 'nature',
        label: 'Nature sauvage',
        scores: { cretaceous: 30 },
      },
      {
        id: 'architecture',
        label: 'Art et architecture',
        scores: { 'florence-1504': 25 },
      },
    ],
  },
  {
    id: 'activity',
    question: 'Votre activite ideale ?',
    options: [
      {
        id: 'monuments',
        label: 'Visiter des monuments',
        scores: { 'florence-1504': 15, 'paris-1889': 10 },
      },
      {
        id: 'wildlife',
        label: 'Observer la faune',
        scores: { cretaceous: 30 },
      },
      {
        id: 'museums',
        label: 'Explorer des musees',
        scores: { 'florence-1504': 20 },
      },
    ],
  },
  {
    id: 'budget',
    question: 'Quel budget par voyageur ?',
    options: [
      {
        id: 'budget-low',
        label: 'Moins de 3000 EUR',
        scores: { 'paris-1889': 20 },
      },
      {
        id: 'budget-mid',
        label: 'Entre 3000 et 5000 EUR',
        scores: { 'florence-1504': 20 },
      },
      {
        id: 'budget-high',
        label: 'Plus de 5000 EUR',
        scores: { cretaceous: 20 },
      },
    ],
  },
]

const DESTINATION_NAMES = {
  'paris-1889': 'Paris 1889',
  cretaceous: 'Cretace',
  'florence-1504': 'Florence 1504',
}

const getConfidenceLabel = (score) => {
  if (score >= 51) return 'Parfait match'
  if (score >= 31) return 'Forte recommandation'
  if (score >= 16) return 'Legere preference'
  return 'Profil ouvert'
}

function RecommendationQuiz({ onApplyRecommendation }) {
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const result = useMemo(() => {
    const totals = {
      'paris-1889': 0,
      cretaceous: 0,
      'florence-1504': 0,
    }

    QUIZ_QUESTIONS.forEach((question) => {
      const selectedOptionId = answers[question.id]
      const option = question.options.find((item) => item.id === selectedOptionId)
      if (!option) return

      Object.entries(option.scores).forEach(([destinationId, score]) => {
        totals[destinationId] += score
      })
    })

    const ranking = Object.entries(totals).sort((a, b) => b[1] - a[1])
    const [bestId, bestScore] = ranking[0]

    return {
      totals,
      ranking,
      bestId,
      bestScore,
      confidence: getConfidenceLabel(bestScore),
    }
  }, [answers])

  const isComplete = QUIZ_QUESTIONS.every((question) => answers[question.id])

  const handleOptionSelect = (questionId, optionId) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionId }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!isComplete) return
    setSubmitted(true)
  }

  return (
    <section className="assistant-card">
      <div className="assistant-card-header">
        <h2>Quiz de personnalisation</h2>
        <p>Repondez a 5 questions pour obtenir la destination ideale.</p>
      </div>

      <form className="quiz-form" onSubmit={handleSubmit}>
        {QUIZ_QUESTIONS.map((question, questionIndex) => (
          <fieldset key={question.id} className="quiz-question">
            <legend>{`${questionIndex + 1}. ${question.question}`}</legend>
            <div className="quiz-options">
              {question.options.map((option) => {
                const checked = answers[question.id] === option.id
                return (
                  <label key={option.id} className={`quiz-option ${checked ? 'active' : ''}`}>
                    <input
                      type="radio"
                      name={question.id}
                      checked={checked}
                      onChange={() => handleOptionSelect(question.id, option.id)}
                    />
                    <span>{option.label}</span>
                  </label>
                )
              })}
            </div>
          </fieldset>
        ))}

        <button type="submit" className="primary-btn" disabled={!isComplete}>
          Voir ma recommandation
        </button>
      </form>

      {submitted ? (
        <motion.div
          className="quiz-result"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <h3>{`Resultat: ${DESTINATION_NAMES[result.bestId]}`}</h3>
          <p>{`${result.confidence} (${result.bestScore} points)`}</p>
          <div className="quiz-score-grid">
            {result.ranking.map(([destinationId, score]) => (
              <div key={destinationId} className="quiz-score-item">
                <span>{DESTINATION_NAMES[destinationId]}</span>
                <strong>{score} pts</strong>
              </div>
            ))}
          </div>

          <button
            type="button"
            className="ghost-btn"
            onClick={() => onApplyRecommendation?.(result.bestId)}
          >
            Utiliser cette recommandation
          </button>
        </motion.div>
      ) : null}
    </section>
  )
}

export default RecommendationQuiz
