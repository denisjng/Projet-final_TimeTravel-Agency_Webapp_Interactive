# 🕰️ TimeTravel Agency - Webapp Interactive

Une webapp interactive et immersive pour une agence de voyage temporel fictive, créée avec React, Vite et IA générative. Permet aux utilisateurs de découvrir des destinations temporelles, interagir avec un chatbot IA intelligent, et obtenir des recommandations personnalisées.

**Projet pédagogique M1/M2 - Session 2: WEBAPP & IA AGENTS**

---

## 📸 Aperçu

- **Landing Page** : Hero section animée, présentation de l'agence, signature avec offres premium
- **Galerie des Destinations** : 3 destinations temporelles avec filtrage (tags), tri (prix/durée), vidéos, panel de sélection
- **Hub Expériences** : Descriptions détaillées + FAQ accordéon sur les voyage temporels
- **Formulaire Contact** : Validation en temps réel + message de succès
- **Chatbot Victor** : Widget flottant IA conversationnel avec API Mistral Small
- **Quiz Personnalisé** : 4 questions pour recommander la destination idéale

---

## 🛠️ Stack Technique

### Frontend
| Technologie | Utilisation |
|---|---|
| **React 18** | Framework UI avec hooks (useState, useEffect, useMemo, useRef) |
| **Vite 5.4.21** | Bundler ultra-rapide avec HMR en temps réel |
| **Framer Motion** | Animations fluides et transitions des composants |
| **React Markdown** | Rendu markdown dans les messages du chatbot |
| **CSS Variables** | Système de design flexible (thème sombre, accents dorés) |

### IA & APIs
| Service | Modèle | Utilisation |
|---|---|---|
| **Mistral AI** | `mistral-small-latest` | Chatbot conversationnel (API gratuite) |

### Styling & Fonts
| Asset | Source |
|---|---|
| **Google Fonts** | Cinzel (headings), Manrope (body text) |
| **CSS Personnalisé** | Design system complet responsive (~1200 lignes) |

### Infrastructure
| Aspect | Détails |
|---|---|
| **Environment** | Node.js + npm |
| **Build** | Optimisation Vite avec code-splitting |
| **Hébergement** | Compatible Vercel/Netlify/GitHub Pages (dist/) |

---

## ✨ Features Implémentées

### 📱 Pages & Navigation
- [x] **Navigation header** : Logo + brand credit + menu responsive (burger mobile)
- [x] **Home Page** : Hero animée + présentation agence + 3 offres signature premium
- [x] **Destinations Page** : 
  - Galerie de 3 destinations temporelles
  - Filtrage par tags (thème, intensité, spotlight)
  - Tri (prix croissant/décroissant, durée croissant/décroissant)
  - Vidéo preview avec contrôle mute
  - Panel de détails destination sélectionnée
- [x] **Experience Page** :
  - Descriptions détaillées des 3 destinations
  - FAQ accordéon interactif (3 questions)
- [x] **Contact Page** :
  - Formulaire avec validation (name, email, message)
  - Affichage erreurs inline avec styling
  - Message de succès post-envoi

### 🤖 Intelligence Artificielle

#### Phase 3.1 - Agent Conversationnel ✅
- [x] **Widget Chatbot** (floating, bottom-right)
  - Icône bullle (💬) cliquable
  - Fenêtre modale animée (Framer Motion)
  - Design cohérent (thème sombre #0f162b, accents dorés #d4af37)
- [x] **Victor Personality** :
  - Professionnel mais chaleureux
  - Passionné d'histoire et voyages temporels
  - Expert fictif crédible
- [x] **Capacités de réponse** :
  - Questions sur destinations (Paris 1889, Florence 1504, Crétacé)
  - Informations sur prix (2500, 3200, 5000 EUR)
  - Conseils pour choisir une époque
  - FAQ agence de voyage
  - Réponses générées dynamiquement via Mistral Small API
- [x] **UX Enhancements** :
  - Animation 1.5s "thinking" avec 3 points animés
  - Auto-scroll vers le dernier message
  - Scrollbars cachées (chat & quiz)
  - Questions rapides cliquables (disparaissent après utilisation)
  - Input désactivé pendant réponse IA
- [x] **Support Markdown** :
  - Listes à puces et numérotées
  - Gras (**text**) et italique (*text*)
  - Code inline avec styling
  - Formatage automatique

#### Phase 3.2 - Automatisation & Personnalisation ✅
- [x] **Quiz Recommandation** (4 questions)
  1. Quel type d'expérience ? (Culturelle/Aventure/Élégance)
  2. Période préférée ? (Moderne/Anciens/Renaissance)
  3. Préférence ? (Urbain/Sauvage/Art)
  4. Activité idéale ? (Monuments/Faune/Musées)
- [x] **Algorithme Scoring** :
  - Matrice de points par destination
  - Calcul score total avec useMemo
  - Classification profil (Parfait match / Forte reco / Légère préférence / Profil ouvert)
- [x] **Affichage Résultat** :
  - Destination recommandée + pitch + prix
  - Explication personnalisée du profil
  - Bouton "Aller sur cette destination"
- [x] **Options verrouillées** par question (pas de changement après sélection)

### 🎨 Design & UX
- [x] **Design System**
  - Variables CSS (couleurs, espacements, border-radius, shadows)
  - Responsive mobile-first (768px breakpoint)
  - Dark theme premium (bleu navy #0f162b)
  - Accents dorés (#d4af37)
- [x] **Animations & Transitions**
  - Hero fade-in staggered
  - Card hover effects
  - Modal scale/opacity
  - Thinking dots loop (0.9s)
  - Auto-scroll smooth
- [x] **Accessibilité**
  - ARIA labels (aria-expanded, aria-current, aria-live)
  - Semantic HTML
  - Keyboard navigation
  - Role attributes
- [x] **Performance**
  - Lazy loading des pages (Suspense)
  - Memoization (React.memo sur Gallery/Card)
  - Efficient asset lookups (O(1) au lieu de O(n))
  - Code-splitting automatique Vite

### 🐛 Bug Fixes & Optimizations
- [x] Fixed `process is not defined` → `import.meta.env` (Vite)
- [x] Removed artificial loading delays
- [x] Optimized image lazy-loading avec fallbacks
- [x] Stable callback references (useCallback)
- [x] Proper useEffect cleanup (timers, listeners)

---

## 🤖 IA Utilisées

### Code Generation
| Tool | Modèle | Utilisation |
|---|---|---|
| **GitHub Copilot** | Claude 4.5 Haiku via VS Code | Assistance dans l'écriture du code React |
| **Vibe Coding** | Claude 3.5 Sonnet | Génération du code initial + itérations |

### APIs Intégrées
| Service | Utilisation |
|---|---|
| **Mistral AI API** | Chatbot Victor (mistral-small-latest) - Gratuit |

### Assets & Visuels (Session 1)
| Source | Utilisation |
|---|---|
| **Midjourney** | Génération visuels destinations temporelles |
| **Runway** | Génération vidéos pour destinations |
| **Google Fonts** | Cinzel, Manrope custom typography |

### Transparence IA
✅ **Chatbot généré par IA** : Réponses dynamisées via Mistral Small, pas hardcoding.<br>
✅ **Code structuré manuellement** : Architecture React et design system custom.<br>
✅ **Visuels authentiques** : Créés avec outils créatifs (Midjourney, Runway).

---

## 📦 Installation & Démarrage

### Prérequis
- **Node.js** 18+ et **npm** 9+
- **Clé API Mistral** (gratuite sur [mistral.ai](https://mistral.ai))

### Setup Local

```bash
# 1. Cloner le projet
git clone https://github.com/your-username/timetravel-agency-webapp.git
cd timetravel-agency-webapp

# 2. Installer les dépendances
npm install

# 3. Créer le fichier d'environnement
echo "VITE_MISTRAL_API_KEY=ta_clé_api_ici" > .env.local

# 4. Démarrer le serveur dev (HMR actif)
npm run dev

# 5. Build production
npm run build

# 6. Déployer (Vercel/Netlify/GitHub Pages)
npm run build  # Génère le dossier dist/
# Puis déployer le contenu de dist/
```

### Commandes Disponibles
```bash
npm run dev      # Démarrage développement (http://localhost:5173)
npm run build    # Build production
npm run preview  # Preview du build localement
npm run lint     # Vérifier la syntaxe (si configuré)
```

### Variables d'Environnement
Créer `.env.local` à la racine (gitignored):
```
VITE_MISTRAL_API_KEY=ta_clé_api_mistral_ici
```

⚠️ **Sécurité** : Ne jamais commiter `.env.local`. Les clés API sont automatiquement ignorées par `.gitignore`.

---

## 📂 Structure du Projet

```
timetravel-agency-webapp/
├── src/
│   ├── components/
│   │   ├── ChatbotWidget.jsx      # IA conversationnel + quiz
│   │   ├── SiteHeader.jsx         # Navigation + mobile menu
│   │   ├── DestinationCard.jsx    # Carte destination memoized
│   │   ├── DestinationGallery.jsx # Grille destinations
│   │   └── DestinationVideoPanel.jsx # Lecteur vidéo
│   ├── pages/
│   │   ├── HomePage.jsx           # Hero + offres signature
│   │   ├── DestinationsPage.jsx   # Galerie + filtres + vidéo
│   │   ├── ExperiencePage.jsx     # Descriptions + FAQ
│   │   └── ContactPage.jsx        # Formulaire + validation
│   ├── data/
│   │   └── destinations.js        # Data destinations (3 objets)
│   ├── styles/
│   │   ├── app.css                # Design system (~1200 lignes)
│   │   └── global.css             # Imports Google Fonts + base
│   ├── App.jsx                    # Root + routeur hash
│   └── main.jsx                   # Entry point Vite
├── public/
│   ├── video/
│   │   ├── paris-1889.mp4         # Vidéo Paris
│   │   ├── cretaceous.mp4         # Vidéo Crétacé
│   │   └── florence-1504.mp4      # Vidéo Florence
│   ├── images/
│   │   ├── paris-1889.jpg         # Image Paris
│   │   ├── cretaceous.jpg         # Image Crétacé
│   │   └── florence-1504.jpg      # Image Florence
│   └── favicon.ico
├── Consignes/                     # Briefing projet pédagogique
├── .env.local                     # Clés API (gitignored)
├── .gitignore                     # Git exclusions
├── package.json                   # Dépendances + scripts
├── vite.config.js                 # Config Vite
├── README.md                      # Ce fichier
└── dist/                          # Build production (généré)
```

---

## 🚀 Déploiement

### GitHub Pages (Recommandé - Gratuit & Automatisé) ⭐

#### Configuration Initiale

1. **Créer un repository GitHub**
   ```bash
   # Si ce n'est pas encore fait
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/timetravel-agency-webapp.git
   git push -u origin main
   ```

2. **Configurer GitHub Pages**
   - Aller dans **Settings** du repository
   - Aller dans **Pages** (à gauche)
   - **Source** : Select `GitHub Actions`
   - **Custom domain** : (optionnel)

3. **Le workflow automatique prend le relais!** ✨
   - Chaque `git push` sur `main` déclenche le build + déploiement
   - Site accessible à: `https://YOUR_USERNAME.github.io/timetravel-agency-webapp/`

#### Important: Remplacer le nom du repository

Dans `vite.config.js`, remplace `timetravel-agency-webapp` par le **vrai nom de ton repository**:
```javascript
base: process.env.GITHUB_PAGES ? '/ton-repository-name/' : '/',
```

#### Vérifier le déploiement
- Aller dans **Actions** (onglet du repo)
- Voir les workflows en cours/complétés
- Les logs détaillés sont disponibles pour debug

---

### Vercel (Alternative - 1 clic + Custom Domain gratuit)

```bash
# Installer Vercel CLI
npm install -g vercel

# Déployer
vercel

# Suivre les prompts interactifs
# - Connect GitHub? → Yes
# - Deploy? → Yes
```

Site accessible à: `https://timetravel-agency-webapp.vercel.app` (ou domain custom)

---

### Netlify (Alternative - Drag & Drop)

```bash
# 1. Build localement
npm run build

# 2. Drag & drop le dossier 'dist/' sur Netlify.com
# Ou installer Netlify CLI:
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

Site accessible à: `https://YOUR-SITE.netlify.app`

---

### Tests Post-Déploiement ✅

Après déploiement, tester:

- [ ] **Page d'accueil** : Hero, offres, navigation chargent bien
- [ ] **Gallery destinations** : Images/vidéos display, filtres/tri fonctionnent
- [ ] **Formulaire contact** : Validation, soumission fonctionnent
- [ ] **Chatbot Victor** :
  - Widget apparait en bas-droit
  - Questions rapides chargent
  - Réponses IA générées (vérifier clé API en production)
  - Quiz fonctionne
- [ ] **Responsive** : Tester sur mobile (tablet + phone)
- [ ] **Perfs** : Console dev fermé (pas d'erreurs, warnings mineurs ok)
- [ ] **SSL** : Vérifier lock icon (https://)

---

## 🔧 Troubleshooting Déploiement

| Problème | Solution |
|---|---|
| **404 sur GitHub Pages** | Vérifier `base:` dans vite.config.js = nom du repo |
| **Chatbot ne répond pas** | Mettre la clé Mistral en secret GitHub Actions |
| **Images/vidéos ne load** | Vérifier chemins dans `public/` |
| **Build échoue (Actions)** | Voir logs dans onglet **Actions** → workflow |
| **Domain custom ne fonctionne pas** | Vérifier CNAME + settings GitHub Pages |

---

## 🔐 Sécurité

- ✅ **Clés API isolées** : `.env.local` dans `.gitignore`
- ✅ **Appels API sécurisés** : Authentification Bearer Mistral
- ✅ **Pas d'exposition de données** : Zéro logging de clés
- ✅ **HTTPS recommandé** : Pour déploiement production

---

## 📊 Performance

- **Bundle Size** : 268 KB main JS (87 KB gzipped)
- **Time to Interactive** : ~1.2s (Vite dev), ~0.8s (build prod)
- **Lazy Loading** : Pages en suspense, code-splitting automatique
- **Image Optimization** : Lazy load avec skeleton + fallback
- **API Calls** : Mistral Small ultra-rapide (~1-2s latence)

---

## 📝 API Reference

### Mistral Small Integration
```javascript
const response = await fetch('https://api.mistral.ai/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${VITE_MISTRAL_API_KEY}`,
  },
  body: JSON.stringify({
    model: 'mistral-small-latest',
    messages: [
      { role: 'system', content: SYSTEM_PROMPT },
      { role: 'user', content: userMessage },
    ],
    temperature: 0.7,
    max_tokens: 256,
  }),
})
```

### Data Structure - Destinations
```javascript
{
  id: 'paris-1889',
  name: 'Paris 1889',
  imageUrl: '/images/paris-1889.jpg',
  videoUrl: '/video/paris-1889.mp4',
  pitch: 'Belle Epoque...',
  price: 'A partir de 2500 EUR',
  tags: ['culturel', 'histoire'],
  theme: 'Urbain et artistique',
  intensity: 'Modéré',
  spotlight: true,
  highlights: ['Tour Eiffel', 'Exposition Universelle', '...'],
}
```

---

## 🤝 Contribution

Ce projet est **pédagogique**. Contributions bienvenues pour:
- Bug fixes
- Optimisations performance
- Nouvelles destinations temporelles
- Amélioration UI/UX
- Documentation

### Processus
1. Fork le projet
2. Créer une branche (`git checkout -b feature/amazing`)
3. Commiter les changements (`git commit -m 'Add amazing feature'`)
4. Push la branche (`git push origin feature/amazing`)
5. Créer une Pull Request

---

## 📄 Licence

**Projet pédagogique - M1/M2 Digital & IA**

Libre d'utilisation à titre éducatif. Attribution appréciée.

```
Made by Denis POPESCU
TimeTravel Agency © 2026
```

---

## 👥 Crédits & Remerciements

### Technologies Open Source
- [React](https://react.dev) - UI framework
- [Vite](https://vitejs.dev) - Bundler
- [Framer Motion](https://www.framer.com/motion) - Animations
- [React Markdown](https://github.com/remarkjs/react-markdown) - Markdown parser

### IA & APIs
- [Mistral AI](https://mistral.ai) - API chatbot gratuite
- [GitHub Copilot](https://github.com/features/copilot) - Assistance code
- [Google Fonts](https://fonts.google.com) - Cinzel, Manrope

### Ressources Session 1
- Visuels générés : Midjourney
- Vidéos générées : Runway
- Briefing : École Digital & IA M1/M2

---

## 📞 Support & Questions

Pour des questions:
- 📧 Créer une issue GitHub
- 💬 Consulter la documentation du projet
- 🔍 Vérifier `.env.local` pour Mistral setup

---

## 🎯 Roadmap Futur

- [ ] Intégration avec vraie API réservation
- [ ] Dark/Light theme toggle
- [ ] Multi-language support (EN/ES/IT)
- [ ] Analytics & tracking utilisateurs
- [ ] Progressive Web App (PWA)
- [ ] Tests unitaires (Jest + React Testing Library)
- [ ] CI/CD pipeline (GitHub Actions)

---

**Dernier update** : Mars 2026
**Version** : 1.0.0
**Status** : ✅ Production Ready
|- package.json
|- src/
|  |- App.jsx
|  |- components/
|  |  |- DestinationCard.css
|  |  |- DestinationCard.jsx
|  |  |- DestinationGallery.css
|  |  `- DestinationGallery.jsx
|  `- constants/
|     `- assets.js
|  |- data/
|  |  `- destinations.js
|  |- styles/
|  |  |- app.css
|  |  `- global.css
|  `- main.jsx
`- tools/
	`- extract_pdf.py
```

## Quick Navigation

- Documentation index: `docs/README.md`
- Quick start: `docs/01-foundation/QUICK_START.md`
- Phase 2.2 execution: `docs/02-implementation/PHASE_2_2_STEP_BY_STEP.md`
- Project status: `docs/03-delivery/PROJECT_STATUS.md`
- Visual preview: `docs/03-delivery/preview.html`

## Notes

- Le dépôt contient désormais une application front exécutable (Vite + React).
- Les images de destination sont locales dans `assets/` et référencées dans `src/constants/assets.js`.
