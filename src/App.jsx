import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import DestinationGallery from './components/DestinationGallery'
import { DESTINATIONS } from './data/destinations'
import './styles/app.css'

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
      staggerChildren: 0.12,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

function App() {
  const [selectedDestinationId, setSelectedDestinationId] = useState('paris-1889')

  const selectedDestination = useMemo(
    () => DESTINATIONS.find((d) => d.id === selectedDestinationId),
    [selectedDestinationId]
  )

  return (
    <div className="app-shell">
      <motion.header
        className="hero"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.p className="hero-kicker" variants={itemVariants}>
          TimeTravel Agency
        </motion.p>
        <motion.h1 className="hero-title" variants={itemVariants}>
          Explorez les epoques les plus mythiques
        </motion.h1>
        <motion.p className="hero-subtitle" variants={itemVariants}>
          Un rendu complet des phases 2.1, 2.2 et 2.3: application React, assets locaux,
          lazy loading et animations fluides.
        </motion.p>

        <motion.div className="hero-stats" variants={itemVariants}>
          <span>3 destinations</span>
          <span>Images locales optimisees</span>
          <span>Animations Framer Motion</span>
        </motion.div>
      </motion.header>

      <main>
        <DestinationGallery
          destinations={DESTINATIONS}
          onDestinationSelect={setSelectedDestinationId}
          selectedDestinationId={selectedDestinationId}
        />

        <motion.section
          className="selection-panel"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <h2>Destination selectionnee</h2>
          <p>
            {selectedDestination
              ? `${selectedDestination.name} (${selectedDestination.year}) a partir de ${selectedDestination.price.min} EUR.`
              : 'Selectionnez une destination.'}
          </p>
        </motion.section>
      </main>
    </div>
  )
}

export default App
