import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const DESTINATION_INFO = {
  'paris-1889': {
    name: 'Paris 1889',
    pitch: 'Belle Epoque, Tour Eiffel, Exposition Universelle et raffinement parisien.',
    price: 'A partir de 2500 EUR',
  },
  cretaceous: {
    name: 'Cretace',
    pitch: 'Aventure prehistorique avec dinosaures et nature sauvage.',
    price: 'A partir de 5000 EUR',
  },
  'florence-1504': {
    name: 'Florence 1504',
    pitch: 'Renaissance, art, architecture et univers de Michel-Ange.',
    price: 'A partir de 3200 EUR',
  },
}

const QUICK_QUESTIONS = [
  'Quelle destination pour un voyage culturel ?',
  'Quels sont les prix ?',
  'Quelle epoque me conseillez-vous ?',
  'Comment reserver ?',
]

const QUIZ = [
  {
    id: 'q1',
    question: 'Quel type d experience recherchez-vous ?'
    ,
    options: [
      { id: 'cultural', label: 'Culturelle et artistique', score: { 'florence-1504': 3, 'paris-1889': 2 } },
      { id: 'adventure', label: 'Aventure et nature', score: { cretaceous: 4 } },
      { id: 'elegance', label: 'Elegance et raffinement', score: { 'paris-1889': 3, 'florence-1504': 2 } },
    ],
  },
  {
    id: 'q2',
    question: 'Votre periode preferee ?'
    ,
    options: [
      { id: 'modern', label: 'Histoire moderne (XIXe-XXe siecle)', score: { 'paris-1889': 3 } },
      { id: 'ancient', label: 'Temps anciens et origines', score: { cretaceous: 4 } },
      { id: 'classic', label: 'Renaissance et classicisme', score: { 'florence-1504': 4 } },
    ],
  },
  {
    id: 'q3',
    question: 'Vous preferez :'
    ,
    options: [
      { id: 'urban', label: "L'effervescence urbaine", score: { 'paris-1889': 3 } },
      { id: 'wild', label: 'La nature sauvage', score: { cretaceous: 4 } },
      { id: 'art', label: "L'art et l'architecture", score: { 'florence-1504': 4 } },
    ],
  },
  {
    id: 'q4',
    question: 'Votre activite ideale :'
    ,
    options: [
      { id: 'monuments', label: 'Visiter des monuments', score: { 'florence-1504': 3, 'paris-1889': 2 } },
      { id: 'fauna', label: 'Observer la faune', score: { cretaceous: 4 } },
      { id: 'museums', label: 'Explorer des musees', score: { 'florence-1504': 3, 'paris-1889': 1 } },
    ],
  },
]

const classifyProfile = (score) => {
  if (score >= 13) return 'Parfait match'
  if (score >= 10) return 'Forte recommandation'
  if (score >= 7) return 'Legere preference'
  return 'Profil ouvert'
}

const getVictorAnswer = (text, recommendedDestinationId) => {
  const q = text.toLowerCase()

  if (/prix|budget|cout|tarif/.test(q)) {
    return 'Nos tarifs: Paris 1889 (2500 EUR), Florence 1504 (3200 EUR), Cretace (5000 EUR). Je peux vous orienter selon votre budget.'
  }

  if (/culture|artistique|musee|renaissance/.test(q)) {
    return `Pour un profil culturel, Florence 1504 est ideale: ${DESTINATION_INFO['florence-1504'].pitch}`
  }

  if (/nature|aventure|faune|cretace|dino/.test(q)) {
    return `Pour une experience aventure, je recommande Cretace: ${DESTINATION_INFO.cretaceous.pitch}`
  }

  if (/elegance|raffinement|paris|luxe/.test(q)) {
    return `Pour l elegance et le luxe, Paris 1889 est parfait: ${DESTINATION_INFO['paris-1889'].pitch}`
  }

  if (/reservation|reserver|agence|faq/.test(q)) {
    return 'Reservation simple: choisissez votre destination, indiquez vos dates et votre profil, puis notre equipe vous contacte rapidement avec une proposition personnalisee.'
  }

  if (/conseille|recommande|quelle epoque/.test(q) && recommendedDestinationId) {
    const target = DESTINATION_INFO[recommendedDestinationId]
    return `Selon votre profil actuel, je recommande ${target.name}. ${target.pitch} ${target.price}.`
  }

  return 'Je peux vous aider sur les destinations, les prix, les conseils d epoque et les questions pratiques de reservation.'
}

function ChatbotWidget({ onApplyRecommendation }) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('chat')
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content:
        'Bonjour, je suis Victor, assistant virtuel de TimeTravel Agency. Je vous aide a choisir la meilleure destination temporelle.',
    },
  ])
  const [answers, setAnswers] = useState({})
  const [quizSubmitted, setQuizSubmitted] = useState(false)
  const [isThinking, setIsThinking] = useState(false)
  const [usedQuickQuestions, setUsedQuickQuestions] = useState(new Set())
  const chatWindowRef = useRef(null)
  const responseTimerRef = useRef(null)

  const quizResult = useMemo(() => {
    const totals = { 'paris-1889': 0, cretaceous: 0, 'florence-1504': 0 }

    QUIZ.forEach((question) => {
      const answerId = answers[question.id]
      const option = question.options.find((item) => item.id === answerId)
      if (!option) return
      Object.entries(option.score).forEach(([id, score]) => {
        totals[id] += score
      })
    })

    const ranking = Object.entries(totals).sort((a, b) => b[1] - a[1])
    const [bestId, bestScore] = ranking[0]
    return { bestId, bestScore, ranking, label: classifyProfile(bestScore) }
  }, [answers])

  const isQuizComplete = QUIZ.every((question) => answers[question.id])

  useEffect(() => {
    const chatWindow = chatWindowRef.current
    if (!chatWindow) return

    chatWindow.scrollTo({
      top: chatWindow.scrollHeight,
      behavior: 'smooth',
    })
  }, [messages, isThinking])

  useEffect(() => {
    return () => {
      if (responseTimerRef.current) {
        clearTimeout(responseTimerRef.current)
      }
    }
  }, [])

  const sendMessage = (text) => {
    const trimmed = text.trim()
    if (!trimmed || isThinking) return

    const answer = getVictorAnswer(trimmed, quizSubmitted ? quizResult.bestId : null)
    setMessages((prev) => [...prev, { role: 'user', content: trimmed }])
    setInput('')
    setIsThinking(true)
    
    // Marquer cette question rapide comme utilisée
    if (QUICK_QUESTIONS.includes(trimmed)) {
      setUsedQuickQuestions((prev) => new Set(prev).add(trimmed))
    }

    responseTimerRef.current = setTimeout(() => {
      setMessages((prev) => [...prev, { role: 'assistant', content: answer }])
      setIsThinking(false)
    }, 1500)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    sendMessage(input)
  }

  return (
    <div className="chatbot-widget">
      <button
        type="button"
        className="chatbot-fab"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-label="Ouvrir le chatbot"
      >
        💬
      </button>

      <AnimatePresence>
        {isOpen ? (
          <motion.section
            className="chatbot-panel"
            initial={{ opacity: 0, y: 18, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            <header className="chatbot-header">
              <div>
                <strong>Victor - Assistant IA</strong>
                <p>Conseiller voyages temporels</p>
              </div>
              <button type="button" className="ghost-btn" onClick={() => setIsOpen(false)}>
                Fermer
              </button>
            </header>

            <div className="chatbot-tabs">
              <button
                type="button"
                className={`filter-chip ${activeTab === 'chat' ? 'active' : ''}`}
                onClick={() => setActiveTab('chat')}
              >
                Chat
              </button>
              <button
                type="button"
                className={`filter-chip ${activeTab === 'quiz' ? 'active' : ''}`}
                onClick={() => setActiveTab('quiz')}
              >
                Quiz 4 questions
              </button>
            </div>

            {activeTab === 'chat' ? (
              <>
                <div className="chat-window" role="log" aria-live="polite" ref={chatWindowRef}>
                  {messages.map((msg, index) => (
                    <article key={`${msg.role}-${index}`} className={`chat-bubble ${msg.role}`}>
                      {msg.content}
                    </article>
                  ))}
                  {isThinking ? (
                    <article className="chat-bubble assistant thinking" aria-label="Victor reflechit">
                      <span className="thinking-dot"></span>
                      <span className="thinking-dot"></span>
                      <span className="thinking-dot"></span>
                    </article>
                  ) : null}
                </div>

                <div className="chat-prompts">
                  {QUICK_QUESTIONS.filter((prompt) => !usedQuickQuestions.has(prompt)).map((prompt) => (
                    <button key={prompt} type="button" className="filter-chip" onClick={() => sendMessage(prompt)}>
                      {prompt}
                    </button>
                  ))}
                </div>

                <form className="chat-form" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    placeholder="Posez-moi vos questions sur les voyages temporels..."
                    disabled={isThinking}
                  />
                  <button type="submit" className="primary-btn" disabled={isThinking}>Envoyer</button>
                </form>
              </>
            ) : (
              <form
                className="quiz-form"
                onSubmit={(event) => {
                  event.preventDefault()
                  if (!isQuizComplete) return
                  setQuizSubmitted(true)
                }}
              >
                {QUIZ.map((question) => (
                  <fieldset key={question.id} className="quiz-question">
                    <legend>{question.question}</legend>
                    <div className="quiz-options">
                      {question.options.map((option) => (
                        <label
                          key={option.id}
                          className={`quiz-option ${answers[question.id] === option.id ? 'active' : ''}`}
                        >
                          <input
                            type="radio"
                            name={question.id}
                            checked={answers[question.id] === option.id}
                            onChange={() => setAnswers((prev) => ({ ...prev, [question.id]: option.id }))}
                            disabled={answers[question.id] !== undefined && answers[question.id] !== option.id}
                          />
                          <span>{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </fieldset>
                ))}

                <button type="submit" className="primary-btn" disabled={!isQuizComplete}>
                  Afficher la recommandation
                </button>

                {quizSubmitted ? (
                  <div className="quiz-result">
                    <h3>{`Destination recommandee: ${DESTINATION_INFO[quizResult.bestId].name}`}</h3>
                    <p>{`${quizResult.label}. ${DESTINATION_INFO[quizResult.bestId].pitch}`}</p>
                    <button
                      type="button"
                      className="ghost-btn"
                      onClick={() => onApplyRecommendation?.(quizResult.bestId)}
                    >
                      Aller sur cette destination
                    </button>
                  </div>
                ) : null}
              </form>
            )}
          </motion.section>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

export default ChatbotWidget