// Destination Gallery Component with Lazy Loading Grid
// File: src/components/DestinationGallery.jsx

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import DestinationCard from './DestinationCard'
import { getImageUrl } from '../constants/assets'
import './DestinationGallery.css'

const DestinationGallery = ({ destinations, onDestinationSelect, selectedDestinationId }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  const handleCardClick = (destinationId) => {
    onDestinationSelect?.(destinationId)
  }

  if (isLoading) {
    return (
      <section className="destination-gallery loading">
        <div className="gallery-skeleton">
          {[1, 2, 3].map(i => (
            <div key={i} className="skeleton-card"></div>
          ))}
        </div>
      </section>
    )
  }

  return (
    <section className="destination-gallery" id="destinations">
      <div className="gallery-container">
        {/* Gallery Header */}
        <motion.div
          className="gallery-header"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <h2 className="gallery-title">
            Nos Destinations Temporelles
          </h2>
          <p className="gallery-subtitle">
            Choisissez votre époque, vivez votre histoire
          </p>
        </motion.div>

        {/* Destination Cards Grid */}
        <div className="cards-grid">
          {destinations.map((destination, index) => {
            const imageUrl = getImageUrl(destination.id)

            return (
              <DestinationCard
                key={destination.id}
                destination={destination}
                imageUrl={imageUrl}
                onCardClick={handleCardClick}
                isSelected={selectedDestinationId === destination.id}
                index={index}
              />
            )
          })}
        </div>

        {/* Gallery Footer CTA */}
        <motion.div
          className="gallery-footer"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45, delay: 0.1, ease: 'easeOut' }}
        >
          <p>Vous ne trouvez pas votre époque idéale?</p>
          <button className="cta-button-secondary">
            Explorer d'autres destinations
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default DestinationGallery
