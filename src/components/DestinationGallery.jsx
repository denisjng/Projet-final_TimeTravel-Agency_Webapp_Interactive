// Destination Gallery Component with Lazy Loading Grid
// File: src/components/DestinationGallery.jsx

import React, { useState, useEffect } from 'react'
import DestinationCard from './DestinationCard'
import { DESTINATION_IMAGES } from '../constants/assets'
import './DestinationGallery.css'

const DestinationGallery = ({ destinations, onDestinationSelect }) => {
  const [selectedDestination, setSelectedDestination] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  const handleCardClick = (destinationId) => {
    setSelectedDestination(destinationId)
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
        <div className="gallery-header">
          <h2 className="gallery-title">
            Nos Destinations Temporelles
          </h2>
          <p className="gallery-subtitle">
            Choisissez votre époque, vivez votre histoire
          </p>
        </div>

        {/* Destination Cards Grid */}
        <div className="cards-grid">
          {destinations.map(destination => {
            const imageData = DESTINATION_IMAGES[destination.id.toUpperCase().replace('-', '_')]
            const imageUrl = imageData?.heroUrl

            return (
              <DestinationCard
                key={destination.id}
                destination={destination}
                imageUrl={imageUrl}
                onCardClick={handleCardClick}
              />
            )
          })}
        </div>

        {/* Gallery Footer CTA */}
        <div className="gallery-footer">
          <p>Vous ne trouvez pas votre époque idéale?</p>
          <button className="cta-button-secondary">
            Explorer d'autres destinations
          </button>
        </div>
      </div>
    </section>
  )
}

export default DestinationGallery
