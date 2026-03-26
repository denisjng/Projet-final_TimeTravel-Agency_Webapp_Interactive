# TimeTravel Agency - Webapp Interactive

Webapp React/Vite pour une agence de voyage temporel fictive.
Le projet presente 3 destinations, un chatbot IA (Mistral), et un quiz de recommandation.

## Demo
- URL publique: https://denisjng.github.io/Projet-final_TimeTravel-Agency_Webapp_Interactive/

## Stack technique
- React 18
- Vite 5
- Framer Motion
- React Markdown
- CSS custom (variables + responsive)
- Mistral AI API (mistral-small-latest)
- Deploiement: GitHub Pages (GitHub Actions)

## Features implementees
- Landing page animee
- Galerie de 3 destinations temporelles
- Filtres/tri + video par destination
- FAQ experiences
- Formulaire de contact avec validation
- Chatbot Victor (widget flottant):
  - reponses sur destinations, prix, conseils d epoque, FAQ
  - rendu markdown
  - animation de reflexion + auto-scroll
- Quiz 4 questions avec recommandation personnalisee

## IA utilisees (transparence)
- Code assistant: GitHub Copilot
- LLM chatbot: Mistral Small via API
- Visuels/Videos (session 1): Midjourney, Runway

## Installation locale
Pre-requis: Node.js 18+ et npm.

1. Installer les dependances

```bash
npm install
```

2. Creer un fichier .env.local

```env
VITE_MISTRAL_API_KEY=YOUR_MISTRAL_API_KEY
```

3. Lancer en local

```bash
npm run dev
```

4. Build production

```bash
npm run build
npm run preview
```

## Deploiement GitHub Pages
Le projet est configure avec un workflow GitHub Actions dans .github/workflows/deploy.yml.

Checklist:
1. Settings > Pages > Source = GitHub Actions
2. Secret repo VITE_MISTRAL_API_KEY configure
3. Push sur main pour declencher le deploiement

## Structure rapide
- src/components/: composants UI + chatbot
- src/pages/: pages principales
- src/constants/assets.js: URLs images/videos
- public/assets/: medias statiques (images + videos)
- .github/workflows/deploy.yml: pipeline de deploiement

## Credits
- API IA: Mistral AI
- Librairies: React, Vite, Framer Motion, React Markdown
- Auteur: Denis POPESCU

## Licence
Projet pedagogique (M1/M2 Digital & IA).
