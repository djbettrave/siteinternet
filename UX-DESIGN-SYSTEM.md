# 🎨 Design System - Inphenix System

Guide complet de l'UX/UI du site web Inphenix System pour assurer une cohérence visuelle avec l'application.

---

## 📋 Table des matières

1. [Palette de couleurs](#palette-de-couleurs)
2. [Typographie](#typographie)
3. [Espacements et grille](#espacements-et-grille)
4. [Composants de base](#composants-de-base)
5. [Navigation](#navigation)
6. [Boutons et CTAs](#boutons-et-ctas)
7. [Cards et conteneurs](#cards-et-conteneurs)
8. [Formulaires](#formulaires)
9. [Icons et illustrations](#icons-et-illustrations)
10. [Animations et transitions](#animations-et-transitions)
11. [Responsive Design](#responsive-design)
12. [Patterns UX](#patterns-ux)

---

## 🎨 Palette de couleurs

### Couleurs primaires (Bleu ardoise)

Les couleurs primaires sont utilisées pour les CTAs, liens, et accents importants.

```css
primary-50:  #f0f4f8  /* Backgrounds très légers */
primary-100: #dce4ed  /* Backgrounds légers, hover states */
primary-200: #b8c9db
primary-300: #8fabc4  /* Texte gradient, accents légers */
primary-400: #6b8dad
primary-500: #4e7396  /* Accents standard, gradient end */
primary-600: #3d6182  /* Boutons CTA principaux */
primary-700: #2f4f6e  /* Boutons hover, liens */
primary-800: #243f59  /* Texte sur fond clair */
primary-900: #1c3349  /* Hero backgrounds, gradients */
primary-950: #0f1e2e  /* Backgrounds très foncés */
```

### Couleurs secondaires (Gris neutres)

Les couleurs secondaires sont utilisées pour le texte, bordures, et backgrounds.

```css
secondary-50:  #f8fafc  /* Backgrounds sections alternées */
secondary-100: #f1f5f9  /* Backgrounds légers, cards */
secondary-200: #e2e8f0  /* Bordures subtiles */
secondary-300: #cbd5e1  /* Bordures standard */
secondary-400: #94a3b8  /* Texte désactivé, placeholder */
secondary-500: #64748b  /* Texte secondaire */
secondary-600: #475569  /* Texte standard */
secondary-700: #334155  /* Texte important */
secondary-800: #1e293b  /* Headers, footer background */
secondary-900: #0f172a  /* Texte principal, titres */
secondary-950: #020617  /* Très foncé, rarement utilisé */
```

### Couleurs fonctionnelles

```css
/* Success */
green-400: #4ade80  /* Badges "disponible", checkmarks */
green-500: #22c55e  /* Success messages, validation icons */

/* Warning */
yellow-400: #facc15  /* Étoiles de notation, badges attention */

/* Error */
red-500: #ef4444   /* Messages d'erreur, états invalides */
red-600: #dc2626   /* Hover sur boutons destructifs */

/* Info */
blue-500: #3b82f6  /* Notifications info, liens externes */
```

### Usage des couleurs

| Élément | Couleur | Exemple |
|---------|---------|---------|
| Background principal | `white` | Pages, modales |
| Background alterné | `secondary-50` | Sections alternées |
| Text principal | `secondary-900` | Titres, paragraphes |
| Text secondaire | `secondary-600` | Descriptions, métadonnées |
| Text sur dark | `white` ou `secondary-300` | Hero, footer |
| Bordures subtiles | `secondary-100` | Cards, séparateurs légers |
| Bordures visibles | `secondary-200` | Inputs, bordures de cards |
| CTAs primaires | `primary-600` bg + `white` text | Boutons principaux |
| Liens | `primary-600` hover `primary-700` | Liens inline, navigation |
| Gradient hero | `from-secondary-900 via-secondary-800 to-primary-900` | Hero sections |

---

## ✍️ Typographie

### Font Family

**Police principale** : `Inter` (Google Fonts)
- Fallback : `system-ui, sans-serif`
- Antialiasing : Activé (`antialiased`)

```css
font-family: 'Inter', system-ui, sans-serif;
```

### Échelle typographique

| Usage | Taille | Poids | Line Height | Classe |
|-------|--------|-------|-------------|--------|
| Hero H1 (desktop) | 60px / 3.75rem | Bold (700) | 1.2 | `text-6xl font-bold` |
| Hero H1 (mobile) | 36px / 2.25rem | Bold (700) | 1.2 | `text-4xl font-bold` |
| Section Title (desktop) | 36px / 2.25rem | Bold (700) | 1.3 | `text-4xl font-bold` ou `.section-title` |
| Section Title (mobile) | 30px / 1.875rem | Bold (700) | 1.3 | `text-3xl font-bold` |
| H2 | 30px / 1.875rem | Bold (700) | 1.4 | `text-3xl font-bold` |
| H3 | 24px / 1.5rem | Semibold (600) | 1.4 | `text-2xl font-semibold` |
| H4 | 20px / 1.25rem | Semibold (600) | 1.5 | `text-xl font-semibold` |
| Large Body | 20px / 1.25rem | Regular (400) | 1.6 | `text-xl` |
| Body | 16px / 1rem | Regular (400) | 1.6 | `text-base` |
| Small | 14px / 0.875rem | Medium (500) | 1.5 | `text-sm font-medium` |
| Tiny | 12px / 0.75rem | Regular (400) | 1.4 | `text-xs` |

### Hiérarchie des poids

- **Light (300)** : Rarement utilisé, uniquement pour "System" dans le logo
- **Regular (400)** : Texte body standard
- **Medium (500)** : Boutons, navigation, labels
- **Semibold (600)** : Sous-titres, emphase
- **Bold (700)** : Titres principaux, hero

### Classes utilitaires custom

```css
.text-gradient {
  background: linear-gradient(to right, primary-500, primary-700);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

.section-title {
  font-size: 2.25rem; /* 36px */
  font-weight: 700;
  color: secondary-900;
}

.section-subtitle {
  font-size: 1.125rem; /* 18px */
  color: secondary-600;
  margin-top: 1rem;
  max-width: 42rem;
}
```

---

## 📐 Espacements et grille

### Système d'espacement

Basé sur Tailwind (1 unité = 0.25rem = 4px)

**Espacements fréquemment utilisés** :

| Usage | Valeur | Classe Tailwind |
|-------|--------|-----------------|
| Très petit | 4px | `gap-1`, `p-1` |
| Petit | 8px | `gap-2`, `p-2` |
| Moyen-petit | 12px | `gap-3`, `p-3` |
| Moyen | 16px | `gap-4`, `p-4` |
| Standard | 24px | `gap-6`, `p-6` |
| Large | 32px | `gap-8`, `p-8` |
| Extra-large | 48px | `gap-12`, `p-12` |
| Section padding (mobile) | 96px (py-24) | Haut/bas des sections |
| Section padding (desktop) | 112px (py-28) | Haut/bas hero |

### Container

```css
.container-custom {
  max-width: 1280px; /* 80rem */
  margin: 0 auto;
  padding: 0 1rem; /* 16px mobile */
}

@media (min-width: 640px) {
  .container-custom {
    padding: 0 1.5rem; /* 24px tablet */
  }
}

@media (min-width: 1024px) {
  .container-custom {
    padding: 0 2rem; /* 32px desktop */
  }
}
```

### Grille responsive

```css
/* 2 colonnes sur mobile, 3 sur desktop */
grid md:grid-cols-2 lg:grid-cols-3 gap-8

/* Sidebar + content */
grid lg:grid-cols-3 gap-16
  → Sidebar: lg:col-span-1
  → Content: lg:col-span-2
```

---

## 🧩 Composants de base

### Logo

**Format** : SVG icon + texte

```jsx
<Link href="/" className="flex items-center space-x-2.5">
  <Image
    src="/images/logos/inphenix/icon-only.svg"
    alt="Inphenix System"
    width={32}
    height={32}
    className="w-8 h-8"
  />
  <div className="flex items-center space-x-1">
    <span className="text-xl font-bold text-gradient">Inphenix</span>
    <span className="text-xl font-light text-secondary-600">System</span>
  </div>
</Link>
```

**Variantes** :
- **Header** : Icon + texte, 32px icon
- **Footer** : Texte seul, taille 2xl
- **Mobile** : Icon seul possible si espace limité

### Badge

Badges utilisés pour les statuts, tags, et indicateurs.

```jsx
/* Badge statut (green dot + texte) */
<div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
  <span className="text-white/90 text-sm font-medium">Réponse sous 24h garantie</span>
</div>

/* Badge simple */
<span className="inline-block bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-1 rounded-full">
  Nouveau
</span>
```

### Dividers

```jsx
/* Vertical divider */
<div className="h-6 w-px bg-white/20"></div>

/* Horizontal divider */
<div className="border-t border-secondary-100"></div>
```

---

## 🧭 Navigation

### Header

**Structure** :
- Hauteur fixe : `h-20` (80px)
- Position : `sticky top-0 z-50`
- Background : `bg-white` avec `border-b border-secondary-100`
- Layout : Logo à gauche, navigation au centre, CTA à droite

**Navigation items** :

```jsx
/* Active state */
<Link className="px-3 py-1.5 text-sm font-medium text-primary-600">
  Réalisations
</Link>

/* Default state */
<Link className="px-3 py-1.5 text-sm font-medium text-secondary-700 hover:text-primary-600 transition-colors">
  Contact
</Link>
```

### Dropdown menu

```jsx
<div className="absolute left-0 mt-0 w-72 bg-white rounded-xl shadow-lg border border-secondary-100 py-2 z-50">
  <Link className="block px-4 py-3 mx-2 rounded-lg hover:bg-primary-50 transition-colors">
    <div className="text-sm font-medium text-secondary-900">Service Name</div>
    <div className="text-xs text-secondary-500">Description courte</div>
  </Link>
</div>
```

**Caractéristiques** :
- Apparition au hover (desktop)
- Arrondis : `rounded-xl`
- Shadow : `shadow-lg`
- Transition : `transition-colors duration-200`
- Hover item : `hover:bg-primary-50`

### Breadcrumb

```jsx
<nav className="flex items-center gap-2 text-sm text-secondary-400 mb-8">
  <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
  <span>/</span>
  <Link href="/services" className="hover:text-white transition-colors">Services</Link>
  <span>/</span>
  <span className="text-white">Service actuel</span>
</nav>
```

### Footer

**Structure** :
- Background : `bg-secondary-900` (très foncé)
- Texte : `text-white` ou `text-secondary-300`
- Layout : 4 colonnes sur desktop (Brand, Services, Secteurs, Contact)
- Banner CTA en haut : `bg-primary-600` avec engagement promises

---

## 🔘 Boutons et CTAs

### Bouton primaire

```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  color: white;
  background-color: #2f4f6e; /* primary-700 */
  border-radius: 0.5rem; /* rounded-lg */
  transition: background-color 200ms;
}

.btn-primary:hover {
  background-color: #243f59; /* primary-800 */
}

.btn-primary:focus {
  outline: none;
  ring: 2px;
  ring-offset: 2px;
  ring-color: #4e7396; /* primary-500 */
}

.btn-primary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

**Usage** :
```jsx
<button className="btn-primary">
  Envoyer ma demande
  <svg className="w-5 h-5 ml-2">...</svg>
</button>
```

### Bouton secondaire

```css
.btn-secondary {
  background-color: #dce4ed; /* primary-100 */
  color: #243f59; /* primary-800 */
  /* Reste identique au primaire */
}

.btn-secondary:hover {
  background-color: #b8c9db; /* primary-200 */
}
```

### Bouton outline

```css
.btn-outline {
  background-color: transparent;
  color: #334155; /* secondary-700 */
  border: 2px solid #cbd5e1; /* secondary-300 */
}

.btn-outline:hover {
  background-color: #f8fafc; /* secondary-50 */
}
```

**Variante dark** (sur fond sombre) :
```jsx
<button className="btn-outline border-white/30 text-white hover:bg-white/10">
  Voir nos réalisations
</button>
```

### Tailles de boutons

| Taille | Classes | Usage |
|--------|---------|-------|
| Small | `text-sm px-4 py-2` | Boutons secondaires |
| Default | `text-base px-6 py-3` | Boutons standards |
| Large | `text-lg px-8 py-4` | CTAs hero, formulaires importants |

### Icônes dans les boutons

```jsx
/* Icône à droite (action forward) */
<button className="btn-primary">
  Demander un devis
  <svg className="w-5 h-5 ml-2">→</svg>
</button>

/* Icône à gauche (action retour/contextuelle) */
<button className="btn-secondary">
  <svg className="w-5 h-5 mr-2">←</svg>
  Retour
</button>

/* Icône externe */
<a href="..." className="btn-primary">
  Devis instantané
  <svg className="w-3.5 h-3.5">↗</svg>
</a>
```

---

## 🃏 Cards et conteneurs

### Card standard

```css
.card {
  background-color: white;
  border-radius: 0.75rem; /* rounded-xl */
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); /* shadow-sm */
  border: 1px solid #f1f5f9; /* border-secondary-100 */
  overflow: hidden;
  transition: box-shadow 200ms;
}

.card:hover {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); /* shadow-md */
}
```

**Usage** :
```jsx
<div className="card p-8">
  <h3 className="text-xl font-semibold text-secondary-900 mb-3">Titre</h3>
  <p className="text-secondary-600">Description...</p>
</div>
```

### Card avec icône

```jsx
<div className="group card p-8 hover:shadow-lg hover:border-primary-300 transition-all duration-200">
  {/* Icon container */}
  <div className="w-14 h-14 rounded-xl bg-primary-100 flex items-center justify-center mb-5 group-hover:bg-primary-600 transition-colors">
    <svg className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors">
      ...
    </svg>
  </div>

  <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors">
    Feature Title
  </h3>
  <p className="text-secondary-600">Feature description</p>
</div>
```

**Caractéristiques hover** :
- Bordure : `hover:border-primary-300`
- Shadow : `hover:shadow-lg`
- Icône background : `primary-100` → `primary-600`
- Icône color : `primary-600` → `white`
- Titre : `secondary-900` → `primary-600`

### Card avec image

```jsx
<div className="card overflow-hidden">
  <Image
    src="..."
    alt="..."
    className="w-full h-48 object-cover"
  />
  <div className="p-6">
    <h3 className="text-lg font-semibold text-secondary-900 mb-2">Titre</h3>
    <p className="text-secondary-600">Description</p>
  </div>
</div>
```

### Box avec background coloré

```jsx
/* Box engagement (page contact) */
<div className="bg-secondary-100/85 rounded-2xl p-6 border border-secondary-200/60">
  <h3 className="font-semibold text-secondary-900 mb-4">Notre engagement</h3>
  <ul className="space-y-3">
    <li className="flex items-center gap-2 text-secondary-600">
      <svg className="w-5 h-5 text-green-500">✓</svg>
      Réponse sous 24h
    </li>
  </ul>
</div>
```

**Note** : Utilisation d'opacité (`/85`, `/60`) pour des backgrounds subtils.

---

## 📝 Formulaires

### Input text

```jsx
<div>
  <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
    Nom complet *
  </label>
  <input
    type="text"
    id="name"
    required
    className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
    placeholder="Votre nom"
  />
</div>
```

**États** :
- Default : `border-secondary-200`
- Focus : `focus:ring-2 focus:ring-primary-500 focus:border-transparent`
- Error : `border-red-500 focus:ring-red-500`
- Disabled : `bg-secondary-50 text-secondary-400 cursor-not-allowed`

### Select

```jsx
<select className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white">
  <option value="">Sélectionnez un service</option>
  <option value="fdm">Impression 3D FDM</option>
  <option value="resine">Impression 3D Résine</option>
</select>
```

### Textarea

```jsx
<textarea
  rows={6}
  className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
  placeholder="Décrivez votre projet..."
/>
```

### Checkbox

```jsx
<div className="flex items-start gap-3">
  <input
    type="checkbox"
    id="privacy"
    required
    className="mt-1 w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
  />
  <label htmlFor="privacy" className="text-sm text-secondary-600">
    J'accepte que mes données soient utilisées pour traiter ma demande.
  </label>
</div>
```

### Validation

```jsx
/* Champ valide */
<input className="... border-green-500 focus:ring-green-500" />

/* Champ invalide */
<input className="... border-red-500 focus:ring-red-500" />
<p className="mt-1 text-sm text-red-600">Email invalide</p>

/* Champ avec helper text */
<p className="mt-1 text-xs text-secondary-500">Format: +33 6 12 34 56 78</p>
```

---

## 🎨 Icons et illustrations

### Icônes

**Library** : Heroicons (via SVG inline)
- Stroke width : `strokeWidth={2}` standard, `strokeWidth={1.5}` pour icons plus grandes
- Tailles courantes : `w-4 h-4`, `w-5 h-5`, `w-6 h-6`, `w-7 h-7`

**Usage** :

```jsx
/* Icon dans bouton */
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
</svg>

/* Icon dans card */
<svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="..." />
</svg>

/* Icon filled (étoiles, checkmarks) */
<svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
  <path fillRule="evenodd" d="..." clipRule="evenodd" />
</svg>
```

### Icon containers

```jsx
/* Container avec background rond */
<div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
  <svg className="w-6 h-6 text-primary-600">...</svg>
</div>

/* Container plus grand (feature cards) */
<div className="w-14 h-14 rounded-xl bg-primary-100 flex items-center justify-center group-hover:bg-primary-600 transition-colors">
  <svg className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors">...</svg>
</div>
```

### Éléments décoratifs

```jsx
/* Blob gradients (hero backgrounds) */
<div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"></div>
```

---

## ⚡ Animations et transitions

### Transitions standards

```css
/* Toutes les transitions de couleur */
transition-colors duration-200

/* Hover states */
hover:bg-primary-700 transition-colors

/* Transform (scale, rotate) */
transition-transform duration-200

/* All properties */
transition-all duration-200
```

### Animations spécifiques

```jsx
/* Badge avec dot pulsant */
<span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>

/* Icon rotation (dropdown) */
<svg className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}>
  ...
</svg>

/* Group hover effects */
<div className="group">
  <div className="group-hover:bg-primary-600 transition-colors">
    <svg className="group-hover:text-white transition-colors">...</svg>
  </div>
  <h3 className="group-hover:text-primary-600 transition-colors">Title</h3>
</div>
```

### Effets de hover

| Élément | Effet | Classes |
|---------|-------|---------|
| Bouton primaire | Background foncit | `hover:bg-primary-800` |
| Bouton outline | Background apparaît | `hover:bg-secondary-50` |
| Card | Shadow augmente | `hover:shadow-lg` |
| Lien | Couleur change | `hover:text-primary-700` |
| Icon container | Background et icon changent | `group-hover:bg-primary-600` + `group-hover:text-white` |

---

## 📱 Responsive Design

### Breakpoints

```css
sm: 640px   /* Petits tablets */
md: 768px   /* Tablets */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
2xl: 1536px /* Extra large */
```

### Patterns responsive courants

```jsx
/* Typography responsive */
<h1 className="text-4xl md:text-5xl lg:text-6xl">

/* Grid responsive */
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

/* Spacing responsive */
<div className="py-24 lg:py-32">

/* Hide/show based on screen */
<div className="hidden lg:flex"> {/* Desktop only */}
<div className="lg:hidden">      {/* Mobile only */}

/* Flex direction */
<div className="flex flex-col sm:flex-row gap-4">
```

### Navigation mobile

```jsx
/* Hamburger menu */
<button className="lg:hidden p-2 text-secondary-700 hover:text-primary-600">
  <svg className="w-6 h-6">...</svg>
</button>

/* Mobile menu */
{mobileMenuOpen && (
  <div className="lg:hidden pb-6">
    <div className="space-y-1">
      {/* Menu items */}
    </div>
  </div>
)}
```

---

## 🎯 Patterns UX

### Hero section

```jsx
<section className="relative bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900 overflow-hidden">
  <div className="container-custom relative">
    <div className="py-24 lg:py-32">
      <div className="max-w-3xl">
        {/* Badge status */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
          ...
        </div>

        {/* Headline avec gradient */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Texte normal {' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-primary-500">
            Mot en gradient
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl text-secondary-300 mb-8 max-w-2xl">...</p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a className="btn-primary text-lg px-8 py-4">CTA primaire</a>
          <a className="btn-outline border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4">CTA secondaire</a>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap items-center gap-4 lg:gap-6 mt-12 pt-8 border-t border-white/10">
          <div>⭐ 5/5 avis Google</div>
          <div className="h-6 w-px bg-white/20"></div>
          <div>+300 projets</div>
          ...
        </div>
      </div>
    </div>
  </div>

  {/* Decorative blobs */}
  <div className="absolute top-1/2 right-0 ... bg-primary-500/20 rounded-full blur-3xl"></div>
</section>
```

### Section standard

```jsx
<section className="py-24 bg-white">
  <div className="container-custom">
    {/* Header centré */}
    <div className="text-center mb-16">
      <h2 className="section-title">Titre de section</h2>
      <p className="section-subtitle mx-auto">
        Description de la section...
      </p>
    </div>

    {/* Content grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Cards */}
    </div>
  </div>
</section>
```

### Section alternée (avec background)

```jsx
<section className="py-24 bg-secondary-50">
  ...
</section>
```

### CTA Section (footer de page)

```jsx
<section className="py-24 bg-primary-600">
  <div className="container-custom">
    <div className="text-center max-w-2xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
        Un projet en tête ?
      </h2>
      <p className="text-xl text-primary-100 mb-8">
        Discutons-en ensemble.
      </p>
      <a href="/contact" className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-block">
        Demander un devis gratuit
      </a>
    </div>
  </div>
</section>
```

### FAQ Accordion

```jsx
<details className="group border border-secondary-200 rounded-xl overflow-hidden">
  <summary className="px-6 py-5 cursor-pointer flex items-center justify-between gap-4 hover:bg-secondary-50 transition-colors list-none">
    <span className="font-semibold text-secondary-900">Question ?</span>
    <svg className="w-5 h-5 text-secondary-500 flex-shrink-0 transition-transform group-open:rotate-180">
      {/* Chevron down */}
    </svg>
  </summary>
  <div className="px-6 pb-5">
    <p className="text-secondary-600 leading-relaxed">Réponse...</p>
  </div>
</details>
```

### Contact info block

```jsx
<div className="flex items-start gap-4">
  {/* Icon container */}
  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
    <svg className="w-6 h-6 text-primary-600">...</svg>
  </div>

  {/* Content */}
  <div>
    <h3 className="font-semibold text-secondary-900 mb-1">Email</h3>
    <a href="mailto:..." className="text-primary-600 hover:text-primary-700">
      contact@example.com
    </a>
  </div>
</div>
```

---

## 📊 États et feedbacks

### Loading states

```jsx
/* Bouton en chargement */
<button disabled className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed">
  {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
</button>

/* Spinner */
<svg className="animate-spin h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24">
  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
</svg>
```

### Success/Error messages

```jsx
/* Success message */
<div className="p-4 bg-green-50 border border-green-200 rounded-lg">
  <div className="flex items-start gap-3">
    <svg className="w-5 h-5 text-green-500 mt-0.5">✓</svg>
    <div>
      <p className="font-medium text-green-900">Message envoyé !</p>
      <p className="text-sm text-green-700 mt-1">Nous vous répondrons sous 24h.</p>
    </div>
  </div>
</div>

/* Error message */
<div className="p-4 bg-red-50 border border-red-200 rounded-lg">
  <div className="flex items-start gap-3">
    <svg className="w-5 h-5 text-red-500 mt-0.5">⚠</svg>
    <div>
      <p className="font-medium text-red-900">Erreur d'envoi</p>
      <p className="text-sm text-red-700 mt-1">Veuillez réessayer.</p>
    </div>
  </div>
</div>
```

---

## 🎨 Cas d'usage spécifiques

### Gradient text (mots-clés dans titre)

```jsx
<h1>
  Mot normal {' '}
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-primary-500">
    Mot gradient
  </span>
  {' '} suite du texte
</h1>
```

### Trust indicators (social proof)

```jsx
/* Étoiles */
<div className="flex -space-x-1">
  {[1,2,3,4,5].map((i) => (
    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor">
      {/* Star path */}
    </svg>
  ))}
</div>

/* Stats inline */
<div className="text-secondary-400 text-sm">
  <span className="text-white font-semibold">+300</span> projets
</div>
```

### Backdrop blur (glassmorphism)

```jsx
<div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
  Badge avec blur
</div>
```

---

## ✅ Checklist d'implémentation

Pour s'assurer que votre application respecte le design system :

### Couleurs
- [ ] Palette primary (bleu ardoise) correctement définie
- [ ] Palette secondary (gris neutres) correctement définie
- [ ] Couleurs fonctionnelles (success, error, warning) définies
- [ ] Usage cohérent (CTAs en primary-600, texte en secondary-900, etc.)

### Typographie
- [ ] Font Inter chargée et appliquée
- [ ] Échelle typographique respectée (hero = text-6xl, section = text-4xl, etc.)
- [ ] Poids de police corrects (Bold 700 pour titres, Regular 400 pour body)
- [ ] Classes utilitaires (.section-title, .text-gradient) créées

### Espacements
- [ ] Container max-width: 1280px avec padding responsive
- [ ] Sections avec py-24 (mobile) et py-28 (hero desktop)
- [ ] Grid gaps: gap-8 pour cards, gap-4 pour boutons
- [ ] Padding des cards : p-6 ou p-8

### Composants
- [ ] Boutons (.btn-primary, .btn-secondary, .btn-outline) avec états hover/focus/disabled
- [ ] Cards avec border, shadow-sm, hover:shadow-lg
- [ ] Input avec border-secondary-200, focus:ring-2 focus:ring-primary-500
- [ ] Header sticky avec h-20, logo, navigation, CTA
- [ ] Footer avec bg-secondary-900, structure 4 colonnes

### Navigation
- [ ] Dropdowns avec shadow-lg, rounded-xl, hover:bg-primary-50
- [ ] Active state avec text-primary-600
- [ ] Mobile menu responsive (hamburger icon, slide-down)

### Responsive
- [ ] Breakpoints : sm:640, md:768, lg:1024
- [ ] Typography responsive (text-4xl md:text-5xl lg:text-6xl)
- [ ] Grid responsive (grid md:grid-cols-2 lg:grid-cols-3)
- [ ] Hide/show éléments selon écran (hidden lg:flex)

### Animations
- [ ] Transitions sur tous les hovers (transition-colors duration-200)
- [ ] Group hover effects pour cards
- [ ] Icon rotation pour dropdowns (transition-transform)
- [ ] Pulse animation pour badges statut

### UX Patterns
- [ ] Hero avec gradient dark, badge, headline gradient, CTAs, trust indicators
- [ ] Sections avec header centré (section-title + section-subtitle)
- [ ] CTA finale avec bg-primary-600, texte centré
- [ ] FAQ avec details/summary accordion

---

## 🔗 Ressources

- **Font** : [Inter sur Google Fonts](https://fonts.google.com/specimen/Inter)
- **Icons** : [Heroicons](https://heroicons.com/)
- **Tailwind** : [Documentation officielle](https://tailwindcss.com/docs)
- **Accessibilité** : [WCAG 2.1](https://www.w3.org/WAI/WCAG21/quickref/)

---

## 📝 Notes finales

### Principes de design

1. **Clarté avant tout** : Hiérarchie visuelle forte, espacement généreux
2. **Cohérence** : Mêmes patterns répétés sur tout le site
3. **Performance** : Transitions légères (200ms), pas d'animations lourdes
4. **Accessibilité** : Contrastes WCAG AA minimum, focus states visibles
5. **Responsive-first** : Mobile d'abord, desktop ensuite

### À éviter

- ❌ Utiliser des couleurs en dehors de la palette définie
- ❌ Créer de nouveaux composants boutons sans utiliser .btn-*
- ❌ Oublier les états hover/focus/disabled
- ❌ Négliger le responsive (toujours tester mobile + desktop)
- ❌ Utiliser des animations trop longues (max 200-300ms)

### Bonne pratique

- ✅ Utiliser les classes utilitaires Tailwind existantes
- ✅ Réutiliser les composants existants (.card, .btn-primary, etc.)
- ✅ Respecter la hiérarchie typographique
- ✅ Tester l'accessibilité (navigation clavier, lecteurs d'écran)
- ✅ Garder un espacement cohérent (multiples de 4px)

---

**Version** : 1.0
**Dernière mise à jour** : 2026-02-05
**Auteur** : Inphenix System Design Team
