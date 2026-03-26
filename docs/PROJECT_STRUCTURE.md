# 🏗️ PROJECT STRUCTURE & CONFIGURATION

## Project Overview

```
TimeTravel Agency - Webapp Interactive
├── Version: Phase 1.1 (Features Definition)
├── Status: In Planning
├── Deadline: Session 2 (2 heures)
├── Team Size: 4 personnes (groupe) + Rendu individuel
└── Evaluation: 20 points max
```

---

## Directory Structure

```
Projet-final_TimeTravel-Agency_Webapp_Interactive/
│
├── docs/                          # 📚 Documentation
│   ├── PHASE_1_1_FEATURES.md     # ← Current (Phase 1.1 Features)
│   ├── DETAILED_SPECS.md         # Destinations, Chatbot, Algorithm
│   ├── PROJECT_STRUCTURE.md      # This file
│   ├── PHASE_1_2_MOCKUP.md       # (To be created - Phase 1.2)
│   ├── PHASE_2_TECHNICAL.md      # (To be created - Phase 2)
│   ├── PHASE_3_AI.md             # (To be created - Phase 3)
│   └── PHASE_4_DEPLOYMENT.md     # (To be created - Phase 4)
│
├── src/                           # 💻 Source Code (will be filled Phase 2)
│   ├── components/
│   ├── pages/
│   ├── styles/
│   ├── utils/
│   └── config/
│
├── assets/                        # 📸 Images & Media
│   ├── destinations/              # Session 1 images
│   │   ├── paris-1889.jpg
│   │   ├── cretaceous.jpg
│   │   └── florence-1504.jpg
│   ├── videos/                     # Background videos (optional)
│   └── icons/                      # UI icons
│
├── Consignes/                     # 📋 Original PDFs from course
│   ├── Consignes - TimeTravel Agency...pdf
│   ├── Critères d'évaluation...pdf
│   └── Conseils pratiques...pdf
│
├── README.md                      # Project overview
├── .gitignore
├── package.json                   # (Phase 2)
└── extract_pdf.py                # Helper script for PDF extraction
```

---

## Project Metadata

### Basic Info
- **Project Name**: TimeTravel Agency - Webapp Interactive
- **Type**: Educational Web Application with AI
- **Stack**: React/Vue + AI Agents (TBD Phase 2)
- **Duration**: 2 hours session
- **Deployment**: Vercel (recommended)

### Team
- **Group Size**: 4 personne
- **Submission**: Individual on Moodle (but group project)
- **Collaboration**: GitHub (recommended for tracking)

### Key Technologies (to be finalized Phase 2)
- **Frontend**: React / Vue.js / Svelte
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion / GSAP
- **AI Integration**: Mistral API / Groq / OpenRouter
- **Hosting**: Vercel / Netlify

---

## Design System (Phase 1 - Preliminary)

### Color Palette
- **Primary**: Dark with Gold accents (luxury theme)
- **Background**: Dark (#1a1a2e or similar)
- **Accent Colors**: Gold/Bronze (#d4af37)
- **Text**: Light gray/white (#f5f5f5)
- **Highlight**: Bronze/Gold for CTAs

### Typography (Recommended)
- **Headings**: Montserrat / Playfair Display (elegant)
- **Body**: Inter / Poppins (readable, modern)
- **Size Scale**: 12, 14, 16, 18, 24, 32, 48px

### Spacing & Grid
- **Base Unit**: 8px (multiples: 8, 16, 24, 32, 40, 48...)
- **Container Width**: 1200px max (desktop)
- **Gap**: 24px between sections

### Animations
- **Duration**: 0.3s - 0.8s (smooth, not too fast)
- **Easing**: ease-in-out (natural feel)
- **Effects**: Fade, Slide, Scale (subtle)

---

## Feature Prioritization

### Must-Have (MVP) 🔴
1. Home / Hero section
2. Destinations gallery with 3 cards
3. Destination details section
4. Chatbot widget

### Nice-to-Have ⭐
1. Reservation form
2. Advanced animations
3. Video backgrounds
4. Personalization quiz

### Luxury Features (if time) ✨
1. Admin panel
2. Payment integration
3. Email notifications
4. Advanced analytics

---

## Development Phases Timeline

```
PHASE 1: Planning (20 min)
├─ 1.1: Features Definition ✅ DONE
└─ 1.2: Mockup (To Do)        [10 min]

PHASE 2: Code Generation (50 min)
├─ 2.1: Setup & Initial Generation [20 min]
├─ 2.2: Asset Integration          [15 min]
└─ 2.3: Animations (Optional)      [15 min]

PHASE 3: AI & Agents (40 min)
├─ 3.1: Chatbot Implementation    [40 min]
└─ 3.2: Personalization (Optional)

PHASE 4: Open Source & Deploy (10 min)
├─ 4.1: Documentation & README     [5 min]
└─ 4.2: Deployment                 [5 min]

TOTAL: 120 minutes (2h) ⏱️
```

---

## Deliverables Checklist

### Phase 1 Output
- [x] Feature definitions (DETAILED)
- [x] Destination specifications
- [x] Chatbot personality & prompts
- [ ] Mockup / Wireframe (Phase 1.2)

### Phase 2 Output
- [ ] Generated webapp code
- [ ] Assets integrated
- [ ] Live preview working
- [ ] Animations implemented

### Phase 3 Output
- [ ] Chatbot widget integrated
- [ ] AI responses tested
- [ ] Personalization quiz (optional)
- [ ] Performance optimized

### Phase 4 Output
- [ ] Deployed URL (public)
- [ ] GitHub repository
- [ ] Complete README.md
- [ ] Documentation of prompts used

---

## Resources & Links

### Recommended Tools

**Vibe Coding:**
- [Bolt.new](https://bolt.new) - 1M free tokens, best for quick start
- [Lovable.dev](https://lovable.dev) - Freemium
- [Cursor IDE](https://cursor.sh) - For developers

**Image Hosting:**
- [Imgur](https://imgur.com) - Quick & free
- [Cloudinary](https://cloudinary.com) - 25 GB free tier
- [Supabase Storage](https://supabase.com) - Free, performant

**AI APIs:**
- [Mistral AI](https://mistral.ai) - Free tier, good models
- [Groq API](https://groq.com) - Ultra-fast, generous quota
- [OpenRouter](https://openrouter.io) - API aggregator

**Deployment:**
- [Vercel](https://vercel.com) - 1-click, ideal for Bolt
- [Netlify](https://netlify.com) - Drag & drop
- [GitHub Pages](https://pages.github.com) - Free, integrated

---

## Important Notes

### Session 1 Integration
- **Must Include**: Visuals generated in Session 1
- **Format**: JPG/WebP optimized, min 1200x800px
- **Hosting**: Upload to Imgur/Cloudinary, use direct URLs
- **Attribution**: Credit Session 1 generators in README

### AI Transparency
- Document all AI tools used (Bolt, Claude, Mistral, etc.)
- Include prompts in README or PROMPTS.md
- Credits section: "Generated with ..."
- Reflection: "What did AI help with vs manual work?"

### Deadline & Submission
- **Duration**: 2 hours session
- **Submission**: Moodle (end of session)
- **Requirements**:
  1. Live URL (fully functional)
  2. GitHub repo OR code export
  3. README.md (complete documentation)

---

## Quality Checkpoints

### Phase 1 Gate
- [ ] All 4 features fully defined
- [ ] Destinations detailed with content
- [ ] Chatbot personality & capabilities documented
- [ ] Design direction clear
- [ ] Team aligned on architecture

### Phase 2 Gate
- [ ] Webapp loads without errors
- [ ] Navigation functional
- [ ] Assets display correctly
- [ ] Responsive on mobile/desktop
- [ ] Performance acceptable

### Phase 3 Gate
- [ ] Chatbot responds intelligently
- [ ] Personality remains consistent
- [ ] No obvious AI hallucinations
- [ ] UX smooth and intuitive

### Phase 4 Gate
- [ ] URL accessible publicly
- [ ] All features work in production
- [ ] README complete and clear
- [ ] Prompts documented
- [ ] Credits given properly

---

## Success Metrics

### Technical (8/20 pts)
- ✅ Webapp deployed & functional
- ✅ Code quality decent (generated is OK)
- ✅ Assets properly integrated
- ✅ AI tools used appropriately

### AI Features (6/20 pts)
- ✅ Chatbot responds relevantly
- ✅ Has personality
- ✅ Handles destination questions
- ✅ Optional: Smart personalization

### UX/UI (4/20 pts)
- ✅ Professional design
- ✅ Intuitive navigation
- ✅ Smooth animations
- ✅ Fluid experience

### Documentation (2/20 pts)
- ✅ README complete
- ✅ Prompts documented
- ✅ Credits clear
- ✅ Reflection included

---

**Document Created**: 26/03/2026  
**Phase**: 1.1 - ACTIVE ✅  
**Next Phase**: 1.2 - Mockup (Ready to start)
