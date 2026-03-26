// Constants for storing asset URLs
// File: src/constants/assets.js

const env = import.meta.env

export const DESTINATION_IMAGES = {
  'paris-1889': {
    id: 'paris-1889',
    name: 'Paris 1889',
    heroUrl: env.VITE_PARIS_1889_HERO || '/assets/Paris.png',
    alt: 'Paris 1889 - Belle Époque',
    optimized: false,
  },
  cretaceous: {
    id: 'cretaceous',
    name: 'Crétacé',
    heroUrl: env.VITE_CRETACEOUS_HERO || '/assets/Cretace.png',
    alt: 'Crétacé - Dinosaures',
    optimized: false,
  },
  'florence-1504': {
    id: 'florence-1504',
    name: 'Florence 1504',
    heroUrl: env.VITE_FLORENCE_1504_HERO || '/assets/Florence.png',
    alt: 'Florence 1504 - Renaissance',
    optimized: false,
  },
}

export const VIDEO_URLS = {
  'paris-1889': env.VITE_PARIS_VIDEO || '/assets/TimeTravelAgency_Phase3-1_DenisPOPESCU_Paris.mp4',
  cretaceous: env.VITE_CRETACEOUS_VIDEO || '/assets/TimeTravelAgency_Phase3-1_DenisPOPESCU_Cretace.mp4',
  'florence-1504': env.VITE_FLORENCE_VIDEO || '/assets/TimeTravelAgency_Phase3-1_DenisPOPESCU_Florence.mp4',
}

export const LOGO_URL = env.VITE_LOGO_URL || null
export const FAVICON_URL = env.VITE_FAVICON_URL || null

// Helper function to get image with fallback
export const getImageUrl = (destinationId) => {
  return DESTINATION_IMAGES[destinationId]?.heroUrl || '/assets/Paris.png'
}

// Helper function to get video URL
export const getVideoUrl = (destinationId) => {
  return VIDEO_URLS[destinationId] || null
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
