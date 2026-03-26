// Reusable Destination Card Component with Image Optimization
// File: src/components/DestinationCard.jsx

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './DestinationCard.css'

const DestinationCard = ({ destination, imageUrl, onCardClick, isSelected = false, index = 0 }) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  const handleImageLoad = () => {
    setImageLoaded(true)
  }

  const handleImageError = () => {
    setImageError(true)
    console.error(`Failed to load image for ${destination.name}`)
  }

  return (
    <motion.article
      className={`destination-card ${isSelected ? 'is-selected' : ''}`}
      onClick={() => onCardClick?.(destination.id)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
      whileHover={{ y: -8 }}
    >
      {/* Image Container with Lazy Loading */}
      <div className="card-image-wrapper">
        {/* Skeleton Loader - Shows while image loads */}
        {!imageLoaded && !imageError && (
          <div className="image-skeleton" aria-hidden="true">
            <div className="shimmer"></div>
          </div>
        )}

        {/* Error Fallback */}
        {imageError && (
          <div className="image-error">
            <p>⚠️ Image failed to load</p>
          </div>
        )}

        {/* Main Image with Native Lazy Loading */}
        {!imageError && (
          <img
            src={imageUrl}
            alt={`${destination.name} destination hero image`}
            loading="lazy"
            decoding="async"
            className={`destination-hero-image ${imageLoaded ? 'loaded' : ''}`}
            onLoad={handleImageLoad}
            onError={handleImageError}
            width="400"
            height="267"
          />
        )}

        {/* Era Badge */}
        <span className="era-badge">{destination.year}</span>

        {/* Hover Overlay */}
        <div className="card-overlay">
          <button className="discover-button">Découvrir</button>
        </div>
      </div>

      {/* Card Content */}
      <div className="card-content">
        <h3 className="destination-name">{destination.name}</h3>
        
        <p className="destination-description">
          {destination.shortDescription}
        </p>

        {/* Tags/Themes */}
        {destination.tags && destination.tags.length > 0 && (
          <div className="tags-container">
            {destination.tags.slice(0, 3).map(tag => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
            {destination.tags.length > 3 && (
              <span className="tag tag-more">+{destination.tags.length - 3}</span>
            )}
          </div>
        )}

        {/* Quick Info */}
        <div className="quick-info">
          <span className="price">À partir de {destination.price.min}€</span>
          <span className="duration">{destination.recommendedDays[0]}-{destination.recommendedDays[1]} jours</span>
        </div>
      </div>
    </motion.article>
  )
}

export default DestinationCard
