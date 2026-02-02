# Actions Restantes (Ray)

Actions manuelles qui nécessitent l'intervention de Ray.

---

## Priorité Haute

### 1. Compléter les mentions légales

**Fichier :** `src/app/mentions-legales/page.tsx`

Informations à ajouter :
- [ ] **SIRET** : Remplacer `[À compléter]` par le numéro SIRET
- [ ] **Capital social** : Remplacer `[À compléter]` par le montant

**Localisation dans le fichier :**
```tsx
SIRET : [À compléter]<br />
Capital social : [À compléter]<br />
```

---

### 2. Ajouter les logos des marques

**Emplacement :** `public/images/logos/`

**Logos à ajouter pour "Projets réalisés pour" :**

| Nom du fichier | Marque |
|----------------|--------|
| `louis-vuitton.svg` | Louis Vuitton |
| `balenciaga.svg` | Balenciaga |
| `dior.svg` | Dior |
| `chanel.svg` | Chanel |
| `cartier.svg` | Cartier |
| `hermes.svg` | Hermès |

**Format recommandé :**
- SVG monochrome (gris/noir)
- Hauteur : 40-60px
- Fond transparent

**Fichier à modifier après ajout :**
`src/components/home/Trust.tsx` - Remplacer les placeholders texte par des balises `<img>`

```tsx
// Avant (placeholder actuel)
<div className="text-secondary-400 font-semibold text-lg">{brand.name}</div>

// Après (avec vrais logos)
<img src={brand.logo} alt={brand.name} className="h-10 w-auto" />
```

---

### 3. Ajouter les logos partenaires

**Emplacement :** `public/images/logos/`

**Logos à ajouter pour "Partenaires" :**

| Nom du fichier | Partenaire |
|----------------|------------|
| `bpi-france.svg` | BPI France |
| `french-tech.svg` | Bourse French Tech |

**Même format que les logos marques.**

---

## Priorité Moyenne

### 4. Tester le site en localhost

```bash
cd C:\Users\rayan\Desktop\inphenix_website
npm run dev
```

**Points à vérifier :**
- [ ] Navigation fonctionne
- [ ] Filtres réalisations fonctionnent
- [ ] Pages mentions légales et politique confidentialité accessibles
- [ ] Banner cookies Tarteaucitron s'affiche
- [ ] Pas d'erreurs console

---

### 5. Vérifier le responsive

Tester sur :
- [ ] Desktop (1920px+)
- [ ] Tablette (768px)
- [ ] Mobile (375px)

**Pages critiques à vérifier :**
- Accueil (section "Projets réalisés pour")
- Réalisations (filtres)
- Contact (formulaire)

---

## Priorité Basse

### 6. Personnaliser Tarteaucitron (optionnel)

Si tu veux personnaliser les couleurs du banner cookies :

```css
/* Dans globals.css */
#tarteaucitronRoot #tarteaucitronAlertBig {
  background-color: #1a1a2e !important;
}
```

---

### 7. Ajouter Google Analytics (optionnel)

Si tu veux ajouter Google Analytics avec Tarteaucitron :

**Dans `layout.tsx`, après `tarteaucitron.init()` :**

```javascript
tarteaucitron.user.gtagUa = 'G-XXXXXXXXXX'; // Ton ID GA4
(tarteaucitron.job = tarteaucitron.job || []).push('gtag');
```

---

## Checklist finale avant déploiement

- [ ] SIRET ajouté dans mentions légales
- [ ] Capital social ajouté dans mentions légales
- [ ] Logos marques ajoutés (ou décision de garder les placeholders texte)
- [ ] Logos partenaires ajoutés
- [ ] Test localhost OK
- [ ] Test responsive OK
- [ ] Déploiement Vercel

---

## Contact support

Pour toute question sur ces modifications :
- Relancer `/quick-dev` avec ce dossier en contexte
- Référencer ce changelog dans la demande
