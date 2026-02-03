# Actions Restantes (Ray)

Actions manuelles qui nécessitent l'intervention de Ray.

---

## Suivi Git

**Le suivi des modifications se fait désormais via GitHub :** https://github.com/Djbettrave/siteinternet

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

### 2. Ajouter les logos des marques (optionnel)

**Statut :** Gardé en texte pour l'instant. Les noms des marques s'affichent en texte dans `Trust.tsx`.

Si tu veux ajouter les logos plus tard :
- Placer les SVG dans `public/images/logos/`
- Modifier `src/components/home/Trust.tsx` pour utiliser des `<img>`

---

### 3. Ajouter les logos partenaires (optionnel)

**Statut :** Gardé en texte pour l'instant (BPI France, Bourse French Tech).

---

## Priorité Moyenne

### 4. ~~Tester le site en localhost~~ FAIT

- [x] Navigation fonctionne
- [x] Filtres réalisations corrigés (code review)
- [x] Pages mentions légales et politique confidentialité accessibles
- [x] Banner cookies Tarteaucitron s'affiche (version fixée @1.17.0)
- [x] Compilation sans erreur

---

### 5. Vérifier le responsive

Tester sur :
- [ ] Desktop (1920px+)
- [ ] Tablette (768px)
- [ ] Mobile (375px)

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
- [x] ~~Logos marques~~ → Gardé en texte
- [x] ~~Logos partenaires~~ → Gardé en texte
- [x] Test localhost OK
- [x] Code review OK (7/8 issues corrigées)
- [x] Projet poussé sur GitHub
- [ ] Test responsive
- [ ] Déploiement Vercel

---

## Dépôt Git

**Repo :** https://github.com/Djbettrave/siteinternet
**Commit initial :** 2026-02-02

Le changelog-v1 est désormais figé. Les modifications futures sont suivies via les commits Git.
