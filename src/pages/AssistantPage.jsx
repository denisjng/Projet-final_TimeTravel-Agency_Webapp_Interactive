import { useState } from 'react'
import { motion } from 'framer-motion'
import RecommendationQuiz from '../components/RecommendationQuiz'
import VictorChatbot from '../components/VictorChatbot'

function AssistantPage({ onApplyRecommendation }) {
  const [recommendedDestinationId, setRecommendedDestinationId] = useState(null)

  const handleQuizRecommendation = (destinationId) => {
    setRecommendedDestinationId(destinationId)
    onApplyRecommendation?.(destinationId)
  }

  return (
    <section className="content-page assistant-page">
      <motion.div
        className="content-page-header"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <h1>Assistant IA</h1>
        <p>Phase 3 complete: chatbot Victor + quiz personnalise de recommandation.</p>
      </motion.div>

      <div className="assistant-grid">
        <RecommendationQuiz onApplyRecommendation={handleQuizRecommendation} />
        <VictorChatbot
          recommendedDestinationId={recommendedDestinationId}
          onUseRecommendedDestination={() => {
            if (recommendedDestinationId) onApplyRecommendation?.(recommendedDestinationId)
          }}
        />
      </div>
    </section>
  )
}

export default AssistantPage
