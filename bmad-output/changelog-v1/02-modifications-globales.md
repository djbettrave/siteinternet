# Modifications Globales

Ces modifications affectent plusieurs fichiers/pages du site.

---

## 1. Remplacement des émojis par des titres simples

**Priorité :** Maximum
**Statut :** FAIT

### Problème initial
Les émojis donnaient un rendu trop artificiel, très "IA". Présents sur toutes les pages.

### Solution appliquée
Suppression pure et simple des émojis. Pas d'icônes, juste les titres (décision de Ray).

### Fichiers modifiés

| Fichier | Modification |
|---------|-------------|
| `src/app/qui-sommes-nous/page.tsx` | Suppression des émojis dans `values[]` |
| `src/data/services.ts` | Suppression des `icon` dans tous les `features[]` |
| `src/data/sectors.ts` | Suppression des `icon` dans tous les secteurs et `useCases[]` |
| `src/components/layout/Header.tsx` | Suppression des émojis dans le menu secteurs |
| `src/components/layout/Footer.tsx` | Suppression des émojis dans le menu secteurs |
| `src/components/templates/ServicePage.tsx` | Suppression de l'affichage des icônes |
| `src/components/templates/SectorPage.tsx` | Suppression de l'affichage des icônes |

### Vérification
```bash
# Cette commande ne devrait retourner aucun fichier
grep -r "🏬\|💎\|🎪\|🏗️\|💍\|🤖" src/
```

---

## 2. Correction confusion outil 3D / devis

**Priorité :** Maximum
**Statut :** FAIT

### Problème initial
Les formulations "Explorer nos réalisations en 3D" créaient une confusion. L'outil n'est PAS pour explorer les réalisations d'Inphenix, mais pour que le CLIENT visualise SON fichier 3D et obtienne un devis.

### Solution appliquée
Nouvelles formulations claires :
- "Devis instantané pour votre fichier 3D"
- "Téléchargez votre fichier 3D et recevez un devis en quelques secondes"
- "Obtenir mon devis instantané"

### Fichiers modifiés

| Fichier | Avant | Après |
|---------|-------|-------|
| `src/components/home/Viewer3D.tsx` | "Explorez nos réalisations en 3D" | "Devis instantané pour votre fichier 3D" |
| `src/components/home/Viewer3D.tsx` | "Accéder au viewer 3D" | "Obtenir mon devis instantané" |
| `src/app/realisations/page.tsx` | "Explorez nos projets en 3D" | "Obtenez un devis instantané pour votre fichier 3D" |
| `src/components/templates/SectorPage.tsx` | "Explorer le viewer 3D" | "Devis instantané impression 3D" |

---

## 3. Production en série : nous la réalisons nous-mêmes

**Priorité :** Haute
**Statut :** FAIT

### Problème initial
Certains textes indiquaient "orientation vers des partenaires" pour la production en série.

### Solution appliquée
Correction pour indiquer qu'Inphenix réalise elle-même les productions en série.

### Fichiers modifiés

| Fichier | Section | Modification |
|---------|---------|-------------|
| `src/data/services.ts` | Prototypage FAQ | "nous réalisons également les productions en série nous-mêmes" |
| `src/data/services.ts` | Électronique FAQ | "nous réalisons nous-mêmes les productions en série" |
| `src/data/sectors.ts` | Retail FAQ | "nous réalisons nous-mêmes les productions en série" |
| `src/data/sectors.ts` | Robotique FAQ | "nous réalisons nous-mêmes les productions en série" |

---

## 4. Dimensions grand format : 85 cm (pas 1 mètre)

**Priorité :** Haute
**Statut :** FAIT

### Problème initial
Il était indiqué "pièces jusqu'à 1 m" à plusieurs endroits. En réalité : 85 cm de haut en un seul bloc.

### Solution appliquée
Nouvelle formulation : "Pièces jusqu'à 85 cm en un seul bloc, sans limite de taille par assemblage"

### Fichiers modifiés

| Fichier | Avant | Après |
|---------|-------|-------|
| `src/data/services.ts` | "Pièces jusqu'à 1 mètre" | "Pièces jusqu'à 85 cm en un seul bloc" |
| `src/data/services.ts` | specs: "1000 x 1000 x 1000 mm" | "850 mm hauteur (sans limite par assemblage)" |
| `src/data/sectors.ts` | evenementiel: "jusqu'à 1 mètre" | "jusqu'à 85 cm en un seul bloc" |
| `src/data/sectors.ts` | stats: "1m" | "85cm monobloc max" |
| `src/app/services/page.tsx` | "jusqu'à 1 mètre" | "jusqu'à 85 cm en un seul bloc" |
| `src/components/home/FAQ.tsx` | "jusqu'à 1 mètre" | "jusqu'à 85 cm en un seul bloc" |
| `src/app/qui-sommes-nous/page.tsx` | "jusqu'à 1m" | "jusqu'à 85 cm" |
