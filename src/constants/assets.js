// Constants for storing asset URLs
// File: src/constants/assets.js

export const DESTINATION_IMAGES = {
  PARIS_1889: {
    id: 'paris-1889',
    name: 'Paris 1889',
    heroUrl: process.env.REACT_APP_PARIS_1889_HERO || '/assets/Paris.png',
    alt: 'Paris 1889 - Belle Époque',
    optimized: false,
  },
  CRETACEOUS: {
    id: 'cretaceous',
    name: 'Crétacé',
    heroUrl: process.env.REACT_APP_CRETACEOUS_HERO || '/assets/Cretace.png',
    alt: 'Crétacé - Dinosaures',
    optimized: false,
  },
  FLORENCE_1504: {
    id: 'florence-1504',
    name: 'Florence 1504',
    heroUrl: process.env.REACT_APP_FLORENCE_1504_HERO || '/assets/Florence.png',
    alt: 'Florence 1504 - Renaissance',
    optimized: false,
  },
}

export const VIDEO_URLS = {
  PARIS_1889_BG: process.env.REACT_APP_PARIS_VIDEO || null,
  CRETACEOUS_BG: process.env.REACT_APP_CRETACEOUS_VIDEO || null,
  FLORENCE_1504_BG: process.env.REACT_APP_FLORENCE_VIDEO || null,
}

export const LOGO_URL = process.env.REACT_APP_LOGO_URL || null
export const FAVICON_URL = process.env.REACT_APP_FAVICON_URL || null

// Helper function to get image with fallback
export const getImageUrl = (destinationId) => {
  const destination = Object.values(DESTINATION_IMAGES).find(d => d.id === destinationId)
  return destination?.heroUrl || '/assets/Paris.png'
}

// Helper function to get video URL
export const getVideoUrl = (destinationId) => {
  const key = `${destinationId.toUpperCase()}_BG`
  return VIDEO_URLS[key] || null
}

// Image optimization helper (for Cloudinary)
export const optimizeImageUrl = (url, width = 1200) => {
  if (!url) return ''
  
  // If Cloudinary URL
  if (url.includes('cloudinary.com')) {
    return url.replace('/upload/', `/upload/w_${width},q_auto,f_webp/`)
  }
  
  // Return as-is if already optimized or different service
  return url
}
