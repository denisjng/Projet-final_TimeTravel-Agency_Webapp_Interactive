import { useMemo, useState } from 'react'

const DESTINATION_FACTS = {
  'paris-1889': {
    name: 'Paris 1889',
    pitch: 'Belle Epoque, gastronomie, architecture et elegance historique.',
    budget: 'A partir de 2500 EUR',
  },
  cretaceous: {
    name: 'Cretace',
    pitch: 'Aventure prehistorique, observation de dinosaures et exploration extreme.',
    budget: 'A partir de 5000 EUR',
  },
  'florence-1504': {
    name: 'Florence 1504',
    pitch: 'Renaissance, art monumental et experiences culturelles raffinees.',
    budget: 'A partir de 3200 EUR',
  },
}

const QUICK_PROMPTS = [
  'Quelle destination pour un voyage culturel ?',
  'Quel budget pour le Cretace ?',
  'Je veux une recommandation personnalisee',
]

const getVictorReply = (message, recommendedDestinationId) => {
  const text = message.toLowerCase()

  if (/bonjour|salut|hello/.test(text)) {
    return 'Bonjour, je suis Victor. Je peux vous recommander une destination et vous guider sur le budget, la duree et les activites.'
  }

  if (/budget|prix|cout/.test(text)) {
    return 'Nos offres debutent a 2500 EUR (Paris 1889), 3200 EUR (Florence 1504) et 5000 EUR (Cretace). Souhaitez-vous une proposition adaptee a votre budget ?'
  }

  if (/culture|art|musee|renaissance/.test(text)) {
    return `Pour un profil culturel, je recommande Florence 1504: ${DESTINATION_FACTS['florence-1504'].pitch}`
  }

  if (/adrenaline|aventure|nature|dino|cretace/.test(text)) {
    return `Pour l aventure, choisissez Cretace: ${DESTINATION_FACTS.cretaceous.pitch}`
  }

  if (/elegance|luxe|paris|raffinement/.test(text)) {
    return `Pour une experience elegante, Paris 1889 est ideal: ${DESTINATION_FACTS['paris-1889'].pitch}`
  }

  if (/recommandation|recommande|conseille/.test(text)) {
    if (recommendedDestinationId && DESTINATION_FACTS[recommendedDestinationId]) {
      const target = DESTINATION_FACTS[recommendedDestinationId]
      return `Selon votre profil actuel, je vous recommande ${target.name}. ${target.pitch} Budget indicatif: ${target.budget}.`
    }

    return 'Je vous propose de lancer le quiz de personnalisation pour une recommandation tres precise.'
  }

  return 'Je peux vous aider sur trois axes: recommandation, budget et activites. Dites-moi votre style de voyage et je vous conseille.'
}

function VictorChatbot({ recommendedDestinationId, onUseRecommendedDestination }) {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content:
        'Bienvenue, je suis Victor. Posez-moi vos questions sur Paris 1889, Cretace ou Florence 1504.',
    },
  ])

  const recommendationText = useMemo(() => {
    if (!recommendedDestinationId || !DESTINATION_FACTS[recommendedDestinationId]) return null
    return `Recommandation active: ${DESTINATION_FACTS[recommendedDestinationId].name}`
  }, [recommendedDestinationId])

  const sendMessage = (text) => {
    const trimmed = text.trim()
    if (!trimmed) return

    const reply = getVictorReply(trimmed, recommendedDestinationId)

    setMessages((prev) => [
      ...prev,
      { role: 'user', content: trimmed },
      { role: 'assistant', content: reply },
    ])
    setInput('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    sendMessage(input)
  }

  return (
    <section className="assistant-card">
      <div className="assistant-card-header">
        <h2>Victor - Conseiller IA</h2>
        <p>Conseils en temps reel sur destinations, budget et activites.</p>
      </div>

      {recommendationText ? (
        <div className="assistant-recommendation-chip">
          <span>{recommendationText}</span>
          <button type="button" className="ghost-btn" onClick={() => onUseRecommendedDestination?.()}>
            Ouvrir cette destination
          </button>
        </div>
      ) : null}

      <div className="chat-window" role="log" aria-live="polite">
        {messages.map((message, index) => (
          <article key={`${message.role}-${index}`} className={`chat-bubble ${message.role}`}>
            {message.content}
          </article>
        ))}
      </div>

      <div className="chat-prompts">
        {QUICK_PROMPTS.map((prompt) => (
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
          placeholder="Ex: Je veux un voyage artistique avec budget moyen"
        />
        <button type="submit" className="primary-btn">Envoyer</button>
      </form>
    </section>
  )
}

export default VictorChatbot
