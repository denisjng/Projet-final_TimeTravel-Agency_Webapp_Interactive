# TimeTravel Agency - Webapp Interactive

Projet IA M1 centré sur une webapp de voyages temporels, avec documentation de phases, composants UI réutilisables et guides d'intégration d'assets.

## Implementation Status

- Phase 2.1: Complete (React + Vite app scaffolded)
- Phase 2.2: Complete (local assets integrated, lazy loading active)
- Phase 2.3: Complete (Framer Motion animations integrated)

## Run Locally

Prerequisite: Node.js 18+ installed.

```bash
npm install
npm run dev
```

Build production bundle:

```bash
npm run build
npm run preview
```

## Project Goals

- Construire une expérience web interactive autour de 3 destinations temporelles
- Respecter les critères d'évaluation (technique, IA, UX/UI, documentation)
- Avancer rapidement avec une structure de travail claire par phases

## Repository Structure

```text
.
|- assets/
|  `- ASSET_URLS.md
|- Consignes/
|  |- Conseils pratiques et ressources - TimeTravel Agency - Webapp Interactive.pdf
|  |- Consignes - TimeTravel Agency - Webapp Interactive.pdf
|  |- Critères dévaluation - TimeTravel Agency - Webapp Interactive.pdf
|  `- consignes_complete.txt
|- docs/
|  |- 01-foundation/
|  |- 02-implementation/
|  |- 03-delivery/
|  |- reference/
|  `- README.md
|- index.html
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
