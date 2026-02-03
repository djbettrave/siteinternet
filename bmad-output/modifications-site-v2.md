# Modifications Site Inphenix System - V2

**Date:** 2026-02-03
**Statut:** À implémenter
**Agent cible:** Barry (quick-dev) avec Opus 4.5
**Priorité:** Améliorations ciblées pour clarté, hiérarchie et mise en valeur du devis instantané

---

## 🎯 Vue d'Ensemble

Ce document contient des ajustements de contenu, de structure et de lisibilité sur le site. Il ne s'agit pas d'une refonte globale, mais d'améliorations ciblées visant la clarté, la hiérarchisation de l'information et la mise en valeur des éléments stratégiques — notamment l'application de devis instantané en ligne, qui doit rester immédiatement identifiable.

**Contexte technique:**
- Stack: Next.js 14+ sur Vercel
- Devis/viewer existant: impression3d.inphenix-system.fr (React/Next.js)
- Domaine: inphenix-system.fr (LWS → Vercel)

---

## 📋 Modifications par Catégorie

### 1. SUPPRESSIONS DE CONTENUS (sans remplacement)

#### 1.1 Section "Architecture" - Supprimer FAQ

**Emplacement:** Page `/secteurs/architecture` (FAQs)

**Action:**
- [ ] Supprimer la question : **"Est-ce qu'on peut scanner un bâtiment existant ?"**
- [ ] Aucun contenu de remplacement nécessaire

**Fichier concerné:** `src/data/sectors.ts` ou composant de la page Architecture

---

#### 1.2 Section "Électronique et motorisation" - Supprimer FAQ

**Emplacement:** Page `/services/electronique` (FAQs)

**Action:**
- [ ] Supprimer intégralement la question : **"Fournissez-vous le code source ?"**
- [ ] Pas de reformulation ni d'alternative à prévoir

**Fichier concerné:** `src/data/services.ts` (service: 'electronique')

---

### 2. LISIBILITÉ - Services / Impression 3D

#### 2.1 Bloc "Spécifications techniques et matériaux disponibles"

**Problème:**
Dans les pages Services > Impression 3D (FDM, résine, grand format), le bloc "Spécifications techniques et matériaux disponibles" manque de lisibilité :
- La distinction entre les éléments n'est pas claire
- Petits carrés blancs sur fond gris
- Visuellement confus et trop dense

**Emplacement:**
- `/services/impression-3d/fdm`
- `/services/impression-3d/resine`
- `/services/impression-3d/grand-format`

**Action:**
- [ ] Améliorer la hiérarchie visuelle du bloc "Spécifications techniques" (specs)
- [ ] Améliorer la hiérarchie visuelle du bloc "Matériaux disponibles" (materials)
- [ ] Rendre les sous-éléments clairement distincts et immédiatement compréhensibles
- [ ] Suggestions :
  - Augmenter le contraste
  - Espacer les éléments
  - Utiliser des bordures ou des backgrounds plus visibles
  - Ajouter des icônes pour chaque spec/matériau

**Fichiers concernés:**
- `src/components/templates/ServicePage.tsx` (sections specs et materials)
- Styles CSS associés

---

### 3. NOTION DE SECTEURS D'EXPERTISE (évolutivité)

#### 3.1 Ajouter "+" pour indiquer l'évolutivité

**Problème:**
Là où il est indiqué "6 secteurs d'expertise", le chiffre est perçu comme figé.

**Objectif:**
Faire comprendre que 6 est une base, et non une limite figée, et que d'autres secteurs peuvent être ajoutés.

**Action:**
- [ ] Rechercher toutes les occurrences de "6 secteurs" ou formulations similaires
- [ ] Remplacer par "6+ secteurs d'expertise" ou "+6 secteurs"
- [ ] Ajouter un "+" devant le mot "secteur" ou "site" lorsqu'il est utilisé dans ce contexte

**Emplacements probables:**
- Page d'accueil (section secteurs)
- Page "Qui sommes-nous"
- Footer ou statistiques

**Fichiers concernés:**
- `src/app/page.tsx`
- `src/app/qui-sommes-nous/page.tsx`
- `src/components/home/Stats.tsx` (si existant)

---

### 4. PAGE D'ACCUEIL - Devis instantané et éléments à supprimer

#### 4.1 CTA - Bas de page (devis instantané 3D)

**Action:**
- [ ] Supprimer le bouton **"Créer un projet similaire"**
- [ ] Conserver uniquement l'action liée au **devis instantané**

**Fichier concerné:** `src/app/page.tsx` (section CTA bas de page)

---

#### 4.2 Bannière de notation

**Action:**
- [ ] Supprimer la bannière contenant : **"4,9 sur 5 – qualité validée – délais respectés – support réactif"**

**Fichier concerné:** `src/app/page.tsx` ou composant dédié

---

### 5. LOGOS - Projets réalisés & partenaires

#### 5.1 Sections logos sur page d'accueil

**Emplacement:** Page d'accueil
- Section "Projets réalisés pour"
- Section "Partenaires"

**Orientations:**
- Les logos seront fournis ultérieurement
- Affichage en **format défilant horizontal** (carousel/slider)
- Inspiré de pratiques courantes sur sites corporate

**Concernant le texte actuel:**
- La phrase **"Une sélection de marques pour lesquelles nous avons réalisé des projets"** est discutable
- L'expression **"Projets réalisés pour"** semble déjà suffisamment explicite

**Action:**
- [ ] Préparer les sections pour logos défilants (carousel horizontal)
- [ ] **Proposition ouverte :** Supprimer ou reformuler le texte introductif
  - Option 1 : Garder uniquement le titre "Projets réalisés pour"
  - Option 2 : Reformuler (proposer alternative)
  - Option 3 : Supprimer complètement le texte descriptif
- [ ] Implémenter un système de carousel/slider pour les logos
- [ ] Effet hover sur les logos (grayscale → couleur)

**Fichiers concernés:**
- `src/components/home/Trust.tsx` (à renommer en Clients.tsx ?)
- Librairie de carousel à intégrer (ex: Swiper, Embla Carousel, ou custom)

---

### 6. HEADER & FOOTER - Boutons et hiérarchie des actions

#### 6.1 Évolution des boutons d'action

**Situation actuelle:**
Le bouton "Demander un devis" est présent dans le header et le footer.

**Évolutions souhaitées:**

1. **Remplacer "Demander un devis" par "Contact"** (ou formulation équivalente à proposer)
2. **Ajouter un second bouton distinct** : "Devis instantané en ligne" (ou formulation proche)

**Objectif:**
Séparer clairement :
- Un bouton **Contact** (coordonnées, échanges, projets spécifiques)
- Un bouton **Devis instantané**, mis en avant comme une application clé du site, notamment pour l'impression 3D

**⚠️ Priorité :** Le devis instantané doit rester **immédiatement visible et identifiable**, en particulier pour l'impression 3D.

**Action:**
- [ ] **Header :**
  - [ ] Remplacer "Demander un devis" par "Contact"
  - [ ] Ajouter un bouton "Devis instantané" (style CTA primaire, couleur distincte)
  - [ ] Positionner les deux boutons de manière visible
- [ ] **Footer :**
  - [ ] Remplacer "Demander un devis" par "Contact"
  - [ ] Ajouter un bouton "Devis instantané en ligne"
- [ ] **Wording à valider avec Ray :**
  - "Devis instantané"
  - "Devis instantané en ligne"
  - "Devis 3D instantané"
  - Autre proposition ?

**Fichiers concernés:**
- `src/components/layout/Header.tsx`
- `src/components/layout/Footer.tsx`

---

### 7. MENTIONS LÉGALES & CONFORMITÉ

#### 7.1 Compléter les informations légales

**Éléments à intégrer :**

**Informations société :**
- **SIRET :** 914 886 239 00013
- **Capital social :** 10 000 €
- **RCS :** 914 886 239 R.C.S. Nanterre
- **Raison sociale :** SAS Inphenix System
- **Adresse :** 23 rue Édouard-Nieuport, 92150 Suresnes, France

**Hébergeur :**
- **Nom :** LWS (à compléter avec toutes les infos requises)
- **Adresse de l'hébergeur :** À récupérer (LWS - informations légales)
- **Téléphone / Contact LWS :** À récupérer

**Action:**
- [ ] Compléter les **Mentions légales** avec toutes les informations ci-dessus
- [ ] Vérifier s'il manque d'autres éléments obligatoires pour un site commercial français
- [ ] Compléter la **Politique de confidentialité** si nécessaire
- [ ] Rechercher les informations complètes de l'hébergeur LWS (adresse, téléphone, etc.)

**Fichiers concernés:**
- `src/app/mentions-legales/page.tsx`
- `src/app/politique-confidentialite/page.tsx`

**Note :** Les mentions légales actuelles contiennent des placeholders `[À compléter]` - les remplacer par les vraies valeurs.

---

### 8. RÉPARTITION DES PROJETS PAR SECTEUR

#### 8.1 Ajuster les chiffres selon la réalité

**Situation actuelle:**
Le total de **150+ projets** est correct, mais la répartition par secteur ne reflète pas la réalité.

**Ordre réel (du plus représenté au moins représenté) :**
1. **Luxe** (le plus de projets)
2. **Événementiel**
3. **Retail**
4. **Robotique**
5. **Architecture**
6. **Joaillerie** (le moins de projets)

**Action:**
- [ ] Identifier où sont affichés les chiffres par secteur (page d'accueil, stats, secteurs ?)
- [ ] Ajuster les chiffres pour correspondre à cette réalité
- [ ] Niveau de détail : pas forcément ultra-précis, mais respecter l'ordre
- [ ] Suggestion de répartition (à valider avec Ray) :
  - Luxe : 35-40 projets
  - Événementiel : 30-35 projets
  - Retail : 25-30 projets
  - Robotique : 20-25 projets
  - Architecture : 15-20 projets
  - Joaillerie : 10-15 projets
  - **Total :** 150+ projets

**Fichiers concernés:**
- `src/data/sectors.ts` (si stats par secteur)
- `src/app/page.tsx` (section secteurs)
- Composant de statistiques

---

### 9. RUBRIQUES "APPLICATIONS" - Tous secteurs

#### 9.1 Améliorer la présentation des applications par secteur

**Problème:**
Pour les pages secteurs (Luxe, Retail, Architecture, etc.), la rubrique **"Applications"** contient actuellement six sous-catégories, peu explicites visuellement.

**Fonctionnement attendu:**
Similaire à la page d'accueil, section **"Nos services"** :
- Icône visible
- Titre mis en valeur
- Interaction au survol (changement de couleur, ex. bleu)

**Action:**
- [ ] Ajouter des **icônes** pour chaque application
- [ ] Améliorer la hiérarchie visuelle (titre + description)
- [ ] Ajouter un **effet hover** :
  - Changement de couleur (bleu primaire)
  - Bordure ou ombre
  - Transition smooth
- [ ] S'assurer de la cohérence visuelle avec la section "Nos services" de la page d'accueil

**Emplacements:**
- `/secteurs/luxe`
- `/secteurs/retail`
- `/secteurs/architecture`
- `/secteurs/evenementiel`
- `/secteurs/joaillerie`
- `/secteurs/robotique`

**Fichiers concernés:**
- `src/components/templates/SectorPage.tsx` (section applications)
- `src/data/sectors.ts` (données des applications)
- Styles CSS associés

---

### 10. SERVICES - Impression 3D (cohérence visuelle)

#### 10.1 Améliorer les six catégories avec icônes et hover

**Problème:**
Même logique que pour les applications secteurs (point 9).

**Emplacement:**
- `/services/impression-3d/fdm`
- `/services/impression-3d/resine`
- `/services/impression-3d/grand-format`

**Les six catégories existantes doivent :**
- Intégrer des **icônes** appropriées
- Bénéficier d'un **changement visuel au survol**
- Être **cohérentes** avec le design et l'UX de la page d'accueil

**Action:**
- [ ] Identifier les six catégories concernées (features, specs, matériaux ?)
- [ ] Ajouter des icônes pour chaque catégorie
- [ ] Implémenter un effet hover cohérent avec la page d'accueil
- [ ] Améliorer l'espacement et la lisibilité

**Fichiers concernés:**
- `src/components/templates/ServicePage.tsx`
- `src/data/services.ts`
- Styles CSS associés

---

## 📊 Résumé des Modifications par Priorité

### 🔴 Priorité Haute (Impact utilisateur immédiat)

1. **Header & Footer - Boutons d'action (#6)**
   - Séparer Contact et Devis instantané
   - Le devis instantané DOIT être visible partout

2. **Page d'accueil - Suppressions (#4)**
   - Supprimer "Créer un projet similaire"
   - Supprimer bannière "4,9 sur 5"

3. **Mentions légales - Conformité (#7)**
   - Compléter SIRET, capital, RCS, hébergeur

### 🟠 Priorité Moyenne (Amélioration UX)

4. **Lisibilité - Services Impression 3D (#2)**
   - Améliorer hiérarchie visuelle specs/matériaux

5. **Rubriques Applications - Secteurs (#9)**
   - Icônes + hover effet

6. **Services - Impression 3D (#10)**
   - Icônes + hover cohérents

7. **Logos - Carousel défilant (#5)**
   - Préparer pour logos clients/partenaires

### 🟡 Priorité Basse (Contenu)

8. **Suppressions FAQ (#1)**
   - Supprimer questions Architecture et Électronique

9. **Secteurs d'expertise - Évolutivité (#3)**
   - Ajouter "+" devant "6 secteurs"

10. **Répartition projets par secteur (#8)**
    - Ajuster les chiffres selon réalité

---

## ✅ Checklist Globale pour Barry (Quick-Dev)

### Avant de commencer :
- [ ] Lire ce fichier modifications-site-v2.md
- [ ] Lire le fichier modifications-site-v1.md (contexte)
- [ ] Scanner le code existant (src/)

### Pendant l'implémentation :
- [ ] Traiter les modifications par priorité (Haute → Moyenne → Basse)
- [ ] Tester chaque modification sur localhost
- [ ] Vérifier la cohérence visuelle globale
- [ ] Tester le responsive (mobile, tablette, desktop)
- [ ] **Important :** Proposer des formulations alternatives quand demandé

### Après l'implémentation :
- [ ] Créer une liste des modifications effectuées
- [ ] Noter ce qui nécessite des décisions de Ray (wording, etc.)
- [ ] Noter ce qui nécessite des informations supplémentaires (infos hébergeur LWS, etc.)

---

## 🎯 Instructions pour Ray

**Pour lancer quick-dev avec ce fichier :**

```bash
/quick-dev
```

Puis référence ce fichier : `bmad-output/modifications-site-v2.md`

---

## 📝 Notes pour Barry

**Propositions attendues :**
- Choix de librairie de carousel pour logos (Swiper, Embla, custom ?)
- Wording pour bouton devis instantané ("Devis instantané" vs "Devis 3D instantané" vs autre ?)
- Formulation section "Projets réalisés pour" (garder texte intro ou non ?)
- Icônes à utiliser pour les applications et services (Lucide Icons, Heroicons ?)

**Questions pour Ray (si nécessaire) :**
- Wording définitif pour le bouton devis instantané ?
- Conserver ou supprimer le texte intro "Une sélection de marques..." ?
- Répartition exacte des projets par secteur (ou estimation ok ?) ?
- Informations complètes hébergeur LWS (à fournir) ?

---

## 🔗 Liens utiles

- Modifications V1 : `bmad-output/modifications-site-v1.md`
- Cadre stratégique : `bmad-output/Cadre-strategique/`
- Party Mode synthèse : `bmad-output/party-mode-synthese-2026-01-28.md`

---

**Fichier créé le :** 2026-02-03
**Prêt pour implémentation avec Opus 4.5**
