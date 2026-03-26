# PHASE 1.1 - Définition des Features ✨

**Durée**: 10 minutes  
**Objectif**: Définir les fonctionnalités clés de la webapp TimeTravel Agency  

---

## 📋 FEATURES ESSENTIELLES

### 1. **Page d'Accueil (HomePage)**

#### 1.1 - Hero Section
- **Description**: Section d'impact avec vidéo/animation de fond
- **Éléments**:
  - Titre principal: "Voyagez à travers le temps" ou "Experience the Magic of Time Travel"
  - Sous-titre: Description courte agence
  - Vidéo/Animation de fond immersive
  - CTA bouton primaire: "Explorer les destinations" 
  - CTA secondaire: "Découvrir nos services"
  - Éléments visuels: Logo TimeTravel Agency, badges premium

#### 1.2 - Présentation de l'Agence
- **Description**: Section storytelling court sur l'agence
- **Éléments**:
  - Titre: "Qui sommes-nous?"
  - Texte descriptif (100-150 mots)
  - Icônes avec valeurs clés:
    - 🎯 Expertise
    - 👥 Service Premium
    - 🌍 Destinations Uniques
    - ⚡ Innovation
  - Background subtle

#### 1.3 - Call-to-Action (CTA)
- **Description**: Appel à l'action vers galerie destinations
- **Éléments**:
  - Texte: "Nos Destinations Temporelles"
  - Bouton primaire avec animation hover
  - Flèche ou icône pointant vers bas
  - Encourager le scroll down

---

### 2. **Galerie des Destinations**

#### 2.1 - Structure principale
- **Description**: Présentation des 3 destinations temporelles
- **Destinations**:
  1. **Paris 1889** - Belle Époque, Tour Eiffel, Exposition Universelle
  2. **Crétacé** - Dinosaures, Nature préhistorique, Aventure
  3. **Florence 1504** - Renaissance, Art, Michel-Ange, Architecture

#### 2.2 - Cards Interactives
- **Par destination**:
  - Image hero générée Session 1
  - Titre de l'époque (+ année si applicable)
  - Description courte (50 mots max)
  - Badge avec période temporelle
  - Tags/Thèmes: ["Art", "Nature", "Architecture", etc.]
  - Bouton "Découvrir" ou "En savoir plus"
  - Hover effect:
    - Échelle légère (scale 1.05)
    - Ombre augmentée
    - Info supplémentaire (overlay)

#### 2.3 - Informations Détaillées par Destination
- **Contenu structuré**:
  
  **Paris 1889:**
  - Événement clé: Exposition Universelle & Tour Eiffel
  - Activités prévues:
    - Visiter la Tour Eiffel
    - Spectacles Belle Époque
    - Dîners gastronomiques
  - Durée recommandée: 3-5 jours
  - Prix fictif: À partir de 2,500€
  - Climat/Saison: Printemps/Été idéal
  - Danger/Défis: Aucun (époque paisible)

  **Crétacé (65M ans):**
  - Événement clé: Dinosaures, préhistoire avancée
  - Activités prévues:
    - Safari dinosaures
    - Exploration nature sauvage
    - Observation faune/flore
  - Durée recommandée: 5-7 jours
  - Prix fictif: À partir de 5,000€
  - Climat/Saison: Tropical constant
  - Danger/Défis: Faune active, équipement spécialisé requis

  **Florence 1504:**
  - Événement clé: Renaissance, Michel-Ange, David
  - Activités prévues:
    - Visite ateliers artistes
    - Musées et galeries
    - Architecture Renaissance
  - Durée recommandée: 4-5 jours
  - Prix fictif: À partir de 3,200€
  - Climat/Saison: Automne idéal
  - Danger/Défis: Moyen-Âge tardif, légère instabilité

#### 2.4 - Visuels Session 1
- **Intégration des assets**:
  - Images hero (1 par destination) - hébergées dans Imgur/Cloudinary
  - Résolution: Min 1200x800px
  - Format: JPEG/WebP optimisé
  - URLs directes pour lazy loading
- **Vidéos** (optionnel):
  - Background immersif destination
  - Ou galerie d'images supplémentaires

---

### 3. **Agent Conversationnel (Chatbot IA)**

#### 3.1 - Widget Design
- **Position**: Bas droit (fixed)
- **Icône flottante**: 
  - Bulle de dialogue avec animation pulse
  - Couleur cohérente (thème sombre, accents dorés)
  - Taille: ~60px
- **Fenêtre chat**:
  - Largeur: 350px (mobile: full width - 20px)
  - Hauteur max: 500px (scrollable)
  - Arrondi: 16px
  - Ombre: Subtle drop shadow
  - Animation entrée: Slide-in bottom ou fade-in

#### 3.2 - Placeholder & Ergonomie
- **Placeholder input**: "Posez-moi vos questions sur les voyages temporels..."
- **Exemple questions suggestions**:
  - "Quelle destination me convient?"
  - "Combien coûte un voyage?"
  - "Comment réserver?"
  - "Que faire au Crétacé?"
- **Layout messages**:
  - Messages utilisateur: Droite, bulle bleue/dorée
  - Messages bot: Gauche, bulle grise, avec animation "typing"
  - Timestamps optionnels

#### 3.3 - Capacités du Chatbot
- **Questions destinations**:
  - "Parlez-moi de Paris 1889"
  - "Quelle époque pour les amateurs d'art?"
  - "Où voir les dinosaures?"

- **Informations prix**:
  - "Combien coûte un voyage au Crétacé?"
  - "Forfait groupe disponible?"

- **Conseils personnalisés**:
  - "Je veux une destination calme" → Florence
  - "J'aime l'aventure" → Crétacé
  - "Époque historique riche" → Paris/Florence

- **FAQ automatisée**:
  - Modalités de paiement
  - Annulation/Modification
  - Assurance voyage
  - Préparation/Équipement

#### 3.4 - Personality du Chatbot
```
Tu es l'assistant virtuel de TimeTravel Agency, 
une agence de voyage temporel de luxe.

Rôle: Conseiller les clients sur destinations temporelles

Ton:
- Professionnel mais chaleureux
- Passionné d'histoire
- Enthousiaste sans être familier
- Expert crédible en "voyage temporel"

Expertise:
- Paris 1889: Belle Époque, art, innovation
- Crétacé: Dinosaures, préhistoire, aventure
- Florence 1504: Renaissance, art, génie (Michel-Ange)

Objectif: Recommander destination idéale selon préférences client
```

---

### 4. **Formulaire de Réservation (OPTIONNEL)**

#### 4.1 - Structure Formulaire
- **Champs principaux**:
  1. Sélection destination (dropdown/cards)
  2. Dates (date picker: Check-in, Check-out)
  3. Nombre de voyageurs
  4. Préférences spéciales (textarea)
  5. Coordonnées (optionnel pour phase 1)

#### 4.2 - Validation Automatisée
- Destination: Obligatoire
- Dates: Validation (fin > début)
- Voyageurs: Min 1, Max 10
- Message succès: "Réservation enregistrée! Vérifiez votre email"

#### 4.3 - Design & UX
- Étapes: 1 ou 2 étapes max
- Bouton: "Réserver mon voyage" 
- Loading state pendant traitement
- Confirmation modale/toast

---

## 🎨 ARCHITECTURE VISUELLE

### Navigation Structure
```
┌─────────────────────────────────────┐
│ HEADER (Logo | Menu | Réserver)    │
├─────────────────────────────────────┤
│ HERO (Titre + CTA)                  │
├─────────────────────────────────────┤
│ À PROPOS (Présentation agence)      │
├─────────────────────────────────────┤
│ DESTINATIONS (3 Cards)              │
│ ├─ Paris 1889                       │
│ ├─ Crétacé                          │
│ └─ Florence 1504                    │
├─────────────────────────────────────┤
│ DÉTAILS DESTINATION (Selected)      │
├─────────────────────────────────────┤
│ CHATBOT WIDGET (Fixed bottom-right) │
├─────────────────────────────────────┤
│ FORMULAIRE RÉSERVATION (optionnel)  │
├─────────────────────────────────────┤
│ FOOTER (Contact | Infos | Socials)  │
└─────────────────────────────────────┘
```

### Responsive Design
- **Desktop**: Full layout, 2-3 colonnes
- **Tablet**: Adapté, cards empilées
- **Mobile**: Single column, full width, touch-friendly

---

## ✅ CHECKLIST IMPLÉMENTATION

### Avant de passer à Phase 1.2 (Maquette):

- [ ] Features bien définies et priorisées
- [ ] Destinations choisies (Paris/Crétacé/Florence OU vos propres)
- [ ] Infos détaillées par destination rassemblées
- [ ] Assets Session 1 identifiés (images + vidéos si dispo)
- [ ] Personality chatbot rédigée et validée
- [ ] Structure navigation validée en équipe
- [ ] Responsive strategy définie (mobile-first)
- [ ] Palette couleurs / Design tokens décidés

---

## 📝 NOTES IMPORTANTES

1. **Destinations**: Vous pouvez utiliser vos propres destinations de Session 1 au lieu de Paris/Crétacé/Florence
2. **Assets Session 1**: Intégrer les visuels générés en session précédente
3. **Chatbot**: La personality doit être cohérente avec l'agence "premium & luxury"
4. **Formulaire**: Optionnel pour Phase 1 si manque de temps (Phase 2/3 possible)
5. **Animations**: Élémentaires dans Phase 1, détaillées en Phase 2.3

---

**Prochaine étape**: Phase 1.2 - Maquette Rapide (10 min)  
Créer maquette avec v0.dev, Uizard, ou schéma papier.
