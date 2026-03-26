// Reusable Destination Card Component with Image Optimization
// File: src/components/DestinationCard.jsx

import React, { useState } from 'react'
import './DestinationCard.css'

const DestinationCard = ({ destination, imageUrl, onCardClick }) => {
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
    <article className="destination-card" onClick={() => onCardClick?.(destination.id)}>
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
            loading="lazy" {/* Browser-native lazy loading */}
            decoding="async" {/* Async decoding for better performance */}
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
    </article>
  )
}

export default DestinationCard
