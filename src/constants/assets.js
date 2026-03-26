// Constants for storing asset URLs
// File: src/constants/assets.js

const env = import.meta.env

const baseUrl = env.BASE_URL || '/'

const withBase = (path) => {
  if (!path) return path

  // Keep external and data URLs untouched.
  if (/^(https?:)?\/\//.test(path) || path.startsWith('data:')) {
    return path
  }

  const normalizedPath = path.startsWith('/') ? path.slice(1) : path
  return `${baseUrl}${normalizedPath}`
}

export const DESTINATION_IMAGES = {
  'paris-1889': {
    id: 'paris-1889',
    name: 'Paris 1889',
    heroUrl: withBase(env.VITE_PARIS_1889_HERO || '/assets/Paris.png'),
    alt: 'Paris 1889 - Belle Époque',
    optimized: false,
  },
  cretaceous: {
    id: 'cretaceous',
    name: 'Crétacé',
    heroUrl: withBase(env.VITE_CRETACEOUS_HERO || '/assets/Cretace.png'),
    alt: 'Crétacé - Dinosaures',
    optimized: false,
  },
  'florence-1504': {
    id: 'florence-1504',
    name: 'Florence 1504',
    heroUrl: withBase(env.VITE_FLORENCE_1504_HERO || '/assets/Florence.png'),
    alt: 'Florence 1504 - Renaissance',
    optimized: false,
  },
}

export const VIDEO_URLS = {
  'paris-1889': withBase(env.VITE_PARIS_VIDEO || '/assets/TimeTravelAgency_Phase3-1_DenisPOPESCU_Paris.mp4'),
  cretaceous: withBase(env.VITE_CRETACEOUS_VIDEO || '/assets/TimeTravelAgency_Phase3-1_DenisPOPESCU_Cretace.mp4'),
  'florence-1504': withBase(env.VITE_FLORENCE_VIDEO || '/assets/TimeTravelAgency_Phase3-1_DenisPOPESCU_Florence.mp4'),
}

export const LOGO_URL = env.VITE_LOGO_URL || null
export const FAVICON_URL = env.VITE_FAVICON_URL || null

// Helper function to get image with fallback
export const getImageUrl = (destinationId) => {
  return DESTINATION_IMAGES[destinationId]?.heroUrl || withBase('/assets/Paris.png')
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
