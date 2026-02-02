# Modifications par Page

Détail des modifications spécifiques à chaque page.

---

## Page : Qui sommes-nous

**Fichier :** `src/app/qui-sommes-nous/page.tsx`

### Modifications effectuées

| # | Modification | Statut |
|---|-------------|--------|
| 5 | Titre "Qui sommes-nous" → "Qui sommes-nous ?" | FAIT |
| 4 | Surbrillance hover renforcée sur "Nos capacités" | FAIT |
| - | Émojis supprimés dans les valeurs | FAIT |
| - | "Grand format jusqu'à 1m" → "85 cm" | FAIT |

### Détail technique

```tsx
// Titre modifié
<h1>Qui sommes-nous ?</h1>

// Metadata modifiée
title: 'Qui sommes-nous ?'

// Hover renforcé sur les cartes capacités
className="card p-8 hover:shadow-lg hover:border-primary-300 transition-all duration-200"
```

---

## Page : Impression 3D - Grand Format

**Fichier :** `src/data/services.ts` (clé: `impression-3d-grand-format`)

### Modifications effectuées

| # | Modification | Statut |
|---|-------------|--------|
| 6 | Dimensions : "1m" → "85 cm en un seul bloc" | FAIT |
| - | Émojis supprimés dans features | FAIT |
| - | Specs corrigées | FAIT |

### Détail technique

```typescript
headline: 'Impression 3D Grand Format - Pièces jusqu\'à 85 cm en un seul bloc'
subheadline: '...Sans limite de taille par assemblage...'

specs: [
  { label: 'Volume max monobloc', value: '850 mm de hauteur' },
  { label: 'Taille max avec assemblage', value: 'Sans limite' },
  // ...
]
```

---

## Page : Impression 3D - FDM

**Fichier :** `src/data/services.ts` (clé: `impression-3d-fdm`)

### Modifications effectuées

| # | Modification | Statut |
|---|-------------|--------|
| 7 | Émojis supprimés dans les avantages | FAIT |
| 8 | Surbrillance cartes renforcée (via template) | FAIT |

---

## Page : Service Scan 3D

**Fichier :** `src/data/services.ts` (clé: `scan-3d`)

### Modifications effectuées

| # | Modification | Statut |
|---|-------------|--------|
| 9 | Spray mat : "lavable" → "s'évapore naturellement" | FAIT |
| - | Émojis supprimés | FAIT |

### Détail technique

```typescript
// FAQ modifiée
{
  question: 'Peut-on scanner des objets brillants ou transparents ?',
  answer: '...spray mat temporaire qui s\'évapore naturellement...'
}
```

---

## Page : Réalisations (Portfolio)

**Fichier :** `src/app/realisations/page.tsx`

### Modifications effectuées

| # | Modification | Statut |
|---|-------------|--------|
| 10 | Bug filtres corrigé - maintenant fonctionnels | FAIT |
| - | CTA "Explorer en 3D" → "Devis instantané" | FAIT |

### Détail technique

```tsx
// Page convertie en 'use client' avec useState
const [selectedSector, setSelectedSector] = useState('all')
const [selectedService, setSelectedService] = useState('all')

// Filtrage fonctionnel
const filteredProjects = projects.filter((project) => {
  const matchesSector = selectedSector === 'all' || project.sector === selectedSector
  const matchesService = selectedService === 'all' || project.services.some(...)
  return matchesSector && matchesService
})
```

---

## Page : Accueil

**Fichiers :** `src/components/home/Trust.tsx`, `src/components/home/Viewer3D.tsx`

### Modifications effectuées

| # | Modification | Statut |
|---|-------------|--------|
| 11 | Section "Ils nous font confiance" → "Projets réalisés pour" | FAIT |
| 12 | Nouvelle section "Partenaires" ajoutée | FAIT |
| 13 | Confusion outil 3D corrigée | FAIT |

### Détail technique - Trust.tsx

```tsx
// Nouveau titre
<h2>Projets réalisés pour</h2>

// Grille de logos (placeholders)
const brandLogos = [
  { name: 'Louis Vuitton', logo: '/images/logos/louis-vuitton.svg' },
  // ...
]

// Disclaimer légal
<p className="text-xs text-secondary-400">
  Certains projets ont été réalisés en tant que sous-traitant...
</p>

// Section Partenaires
const partnerLogos = [
  { name: 'BPI France', logo: '/images/logos/bpi-france.svg' },
  { name: 'Bourse French Tech', logo: '/images/logos/french-tech.svg' },
]
```

---

## Page : Contact

**Fichier :** `src/app/contact/page.tsx`

### Modifications effectuées

| # | Modification | Statut |
|---|-------------|--------|
| 14 | Adresse complète ajoutée | FAIT |

### Détail technique

```tsx
// Avant
<p>France - Livraison nationale</p>

// Après
<p>
  23 rue Édouard-Nieuport<br />
  92150 Suresnes, France
</p>
```

---

## Footer

**Fichier :** `src/components/layout/Footer.tsx`

### Modifications effectuées

| # | Modification | Statut |
|---|-------------|--------|
| 15 | "Livraison nationale" → Adresse complète | FAIT |
| 18 | "Électronique" → "Électronique & Motorisation" | FAIT |
| - | Émojis supprimés dans menu secteurs | FAIT |

### Détail technique

```tsx
// Service modifié
{ name: 'Électronique & Motorisation', href: '/services/electronique' }

// Adresse complète
<span>23 rue Édouard-Nieuport<br />92150 Suresnes, France</span>
```
