# 🚀 Guide Déploiement GitHub Pages

## Étapes de Configuration

### 1. Créer le Repository GitHub

```bash
# Sur GitHub.com → New Repository
# Nom: timetravel-agency-webapp (ou autre nom choisi)
# Description: Interactive temporal travel agency webapp
# Public: ✅ Checked (pour Pages gratuit)
# Initialize: ⭐ SKIP (tu as déjà git init local)
```

### 2. Connecter Local à GitHub

```bash
cd timetravel-agency-webapp
git init
git add .
git commit -m "Initial commit: TimeTravel Agency Phase 3 & 4"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/timetravel-agency-webapp.git
git push -u origin main
```

### 3. Ajouter Secrets GitHub (Pour Chatbot IA)

Le workflow automatique a besoin de la **clé Mistral API** pour que le chatbot fonctionne en production.

**Via l'interface GitHub:**

1. Aller dans **Settings** du repository
2. **Secrets and variables** → **Actions**
3. Cliquer **New repository secret**
4. **Name:** `VITE_MISTRAL_API_KEY`
5. **Value:** `ta_clé_api_mistral_ici`
6. Save! ✅

Le workflow automatique utilisera ce secret lors du build.

### 4. Configurer Vite (Important!)

Dans `vite.config.js`, **remplace** le nom du repository:

```javascript
// ❌ AVANT (exemple)
base: process.env.GITHUB_PAGES ? '/timetravel-agency-webapp/' : '/',

// ✅ APRÈS (avec le vrai nom)
base: process.env.GITHUB_PAGES ? '/mon-repo-name/' : '/',
```

Le chemin doit matcher exactement le nom du repository GitHub!

### 5. Activer GitHub Pages

1. Aller dans **Settings**
2. **Pages** (à gauche)
3. **Build and deployment**
   - **Source:** `GitHub Actions` ✅ (C'est automatique avec notre workflow)
4. Save

### 6. Premier Déploiement

```bash
# Push déclenche automatiquement le workflow
git push origin main
```

**Voir le déploiement en cours:**
- Aller dans onglet **Actions**
- Cliquer sur le workflow "Deploy to GitHub Pages"
- Voir les logs du build & deploy

### 7. Accéder au Site! 🎉

Une fois le workflow complété (✅ green checkmark):

```
https://YOUR_USERNAME.github.io/timetravel-agency-webapp/
```

---

## Workflow Automatique Expliqué

Chaque `git push` sur `main` déclenche:

1. **Build Job** (build.yml)
   - Checkout du code
   - Install `npm install`
   - Build: `npm run build`
   - Upload artifact `dist/` vers GitHub

2. **Deploy Job** (deploy.yml)
   - Télécharge l'artifact
   - Déploie `dist/` sur GitHub Pages
   - Met à jour le site public

**Temps total:** ~1-2 minutes

---

## Tester le Déploiement ✅

### Desktop
- [ ] Page d'accueil chargée complètement
- [ ] Navigation fonctionne (Home, Destinations, Experience, Contact)
- [ ] Chatbot Victor apparait en bas-droit (💬)
- [ ] Cliquer le chatbot → fenêtre s'ouvre
- [ ] Poser une question → réponse IA générée (Mistral)
- [ ] Quiz fonctionne (4 questions)
- [ ] Quiz → recommandation affichée

### Mobile
- [ ] Design responsive (menu burger)
- [ ] Images chargent
- [ ] Chatbot accessible et fonctionnel
- [ ] Pas de scroll horizontal

### Console Dev
- [ ] Pas d'erreurs majeures (warnings ok)
- [ ] Network tab: aucune 404
- [ ] Mistral API calls visibles (XHR)

---

## Variables d'Environnement en Production

Le workflow utilise le **GitHub Secret** `VITE_MISTRAL_API_KEY` automatiquement.

Si tu dois **ajouter d'autres secrets** (future expansions):

```yaml
# Dans .github/workflows/deploy.yml, ajouter:
env:
  GITHUB_PAGES: true
  VITE_SOME_KEY: ${{ secrets.VITE_SOME_KEY }}
```

---

## Troubleshooting

### ❌ "Workflow failed"
→ Voir logs dans onglet **Actions**. Probablement `npm install` ou build error.

### ❌ "404 Page not found"
→ Vérifier `base:` dans `vite.config.js` = nom du repo

### ❌ "Chatbot ne répond pas en production"
→ Vérifier le secret GitHub `VITE_MISTRAL_API_KEY` est défini

### ❌ "Images ne chargent pas"
→ Vérifier les chemins: `/public/images/...` vs `./images/...`

---

## Bonus: Custom Domain

Pour utiliser ton propre domaine (ex: `timetravel.mydomain.com`):

1. Aller dans **Settings** → **Pages**
2. **Custom domain:** `timetravel.mydomain.com`
3. Ajouter un record DNS chez ton registrar:
   ```
   ALIAS/CNAME → username.github.io
   ```
4. GitHub crée automatiquement un `CNAME` file

---

## 🎉 C'est prêt!

Ton site est maintenant:
- ✅ **Déployé en ligne** sur GitHub Pages
- ✅ **Auto-déploiement** à chaque `git push`
- ✅ **Gratuit et illimité**
- ✅ **HTTPS sécurisé**
- ✅ **Accessible globalement**

**URL de partage:** `https://YOUR_USERNAME.github.io/timetravel-agency-webapp/`

---

*Last Update: Mars 2026*
