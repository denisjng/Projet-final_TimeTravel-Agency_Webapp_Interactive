# 📍 ASSET URLS CONFIGURATION

**Créé**: 26/03/2026 - Phase 2.2  
**Status**: Template - À remplir avec vos URLs

---

## 🎯 COMMENT UTILISER CE FICHIER

1. **Upload** vos 3 images sur Imgur/Cloudinary/Supabase
2. **Copier** les URLs publiques
3. **Remplir** ce fichier avec les URLs
4. **Importer** dans votre code (voir templates)

---

## 📸 DESTINATION IMAGES (REQUIRED)

### Paris 1889 - Belle Époque
```
Image URL: [À REMPLIR - https://imgur.com/... ou Cloudinary/Supabase]
Format: JPG/WebP, Min 1200x800px
Filename: paris-1889
```
**PARIS_1889_HERO_URL** = `[YOUR_URL_HERE]`

---

### Crétacé - Dinosaures & Préhistoire
```
Image URL: [À REMPLIR]
Format: JPG/WebP, Min 1200x800px
Filename: cretaceous
```
**CRETACEOUS_HERO_URL** = `[YOUR_URL_HERE]`

---

### Florence 1504 - Renaissance
```
Image URL: [À REMPLIR]
Format: JPG/WebP, Min 1200x800px
Filename: florence-1504
```
**FLORENCE_1504_HERO_URL** = `[YOUR_URL_HERE]`

---

## 🎬 VIDEO BACKGROUNDS (OPTIONAL)

### Paris 1889 Background Video
```
Video URL: [OPTIONNEL]
Format: MP4, <5MB recommended
Filename: paris-bg-video.mp4
```
**PARIS_VIDEO_URL** = `[YOUR_VIDEO_URL_HERE]`

---

### Crétacé Background Video
```
Video URL: [OPTIONNEL]
Format: MP4, <5MB recommended
Filename: cretaceous-bg-video.mp4
```
**CRETACEOUS_VIDEO_URL** = `[YOUR_VIDEO_URL_HERE]`

---

### Florence 1504 Background Video
```
Video URL: [OPTIONNEL]
Format: MP4, <5MB recommended
Filename: florence-bg-video.mp4
```
**FLORENCE_VIDEO_URL** = `[YOUR_VIDEO_URL_HERE]`

---

## 🖼️ ADDITIONAL ASSETS (OPTIONAL)

### Agency Logo/Banner
```
Logo URL: [OPTIONNEL]
Format: PNG/SVG
Usage: Header, navbar
```
**LOGO_URL** = `[YOUR_LOGO_URL]`

---

### Favicon
```
Favicon URL: [OPTIONNEL]
Format: ICO/PNG 32x32
Usage: Browser tab
```
**FAVICON_URL** = `[YOUR_FAVICON_URL]`

---

## 🔧 CONFIGURATION EXAMPLES

### Example 1: Using Imgur
```
PARIS_1889_HERO_URL = https://i.imgur.com/abc1234.jpg
CRETACEOUS_HERO_URL = https://i.imgur.com/def5678.jpg
FLORENCE_1504_HERO_URL = https://i.imgur.com/ghi9012.jpg
```

### Example 2: Using Cloudinary
```
PARIS_1889_HERO_URL = https://res.cloudinary.com/mycloud/image/upload/w_1200,q_auto,f_webp/v1/paris1889.jpg
CRETACEOUS_HERO_URL = https://res.cloudinary.com/mycloud/image/upload/w_1200,q_auto,f_webp/v1/cretaceous.jpg
FLORENCE_1504_HERO_URL = https://res.cloudinary.com/mycloud/image/upload/w_1200,q_auto,f_webp/v1/florence1504.jpg
```

### Example 3: Using Supabase
```
PARIS_1889_HERO_URL = https://myproject.supabase.co/storage/v1/object/public/destinations/paris1889.jpg
CRETACEOUS_HERO_URL = https://myproject.supabase.co/storage/v1/object/public/destinations/cretaceous.jpg
FLORENCE_1504_HERO_URL = https://myproject.supabase.co/storage/v1/object/public/destinations/florence1504.jpg
```

---

## 💾 HOW TO USE IN CODE

### React - Environment Variables
```javascript
// .env
REACT_APP_PARIS_1889_HERO=https://i.imgur.com/paris.jpg
REACT_APP_CRETACEOUS_HERO=https://i.imgur.com/creti.jpg
REACT_APP_FLORENCE_1504_HERO=https://i.imgur.com/florence.jpg

// In component
const parisImage = process.env.REACT_APP_PARIS_1889_HERO
```

### React - Direct Import
```javascript
// constants/assets.js
export const ASSETS = {
  PARIS_1889: 'https://i.imgur.com/paris.jpg',
  CRETACEOUS: 'https://i.imgur.com/creti.jpg',
  FLORENCE_1504: 'https://i.imgur.com/florence.jpg',
}

// In component
import { ASSETS } from './constants/assets'
<img src={ASSETS.PARIS_1889} alt="Paris" />
```

### Vue - Import
```javascript
// assets/imageUrls.js
export const destinations = {
  paris1889: 'https://i.imgur.com/paris.jpg',
  cretaceous: 'https://i.imgur.com/creti.jpg',
  florence1504: 'https://i.imgur.com/florence.jpg',
}

// In component
import { destinations } from '@/assets/imageUrls'
```

---

## ✅ UPLOAD CHECKLIST

Before filling URLs:

- [ ] Image 1 (Paris 1889) ready & optimized
- [ ] Image 2 (Crétacé) ready & optimized
- [ ] Image 3 (Florence 1504) ready & optimized
- [ ] Hosting platform chosen (Imgur/Cloudinary/Supabase)
- [ ] Account created if needed
- [ ] Upload completed
- [ ] Public URLs copied

---

## 🚀 NEXT STEPS

Once URLs are filled in:

1. **Copy** this config to your code
2. **Import** in DestinationCard components
3. **Test** in browser (F12 Network tab)
4. **Verify** images load correctly
5. **Move to** Phase 2.3 (Animations)

---

## 📝 NOTES

- **Keep URLs updated** if you re-upload images
- **Always test** URLs publicly (open in new browser tab)
- **Backup URLs** in Moodle notes / Google Drive
- **Use HTTPS** URLs only (required for Vercel deployment)

---

**Ready to fill with your URLs!** 🎨✨
