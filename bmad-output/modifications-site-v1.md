# Modifications Site Inphenix System - V1

**Date:** 2026-01-29
**Statut:** À implémenter
**Agent cible:** Barry (quick-dev) avec Opus 4.5
**Priorité:** Toutes les modifications sont importantes

---

## 🎯 Vue d'Ensemble

Ce document contient toutes les modifications demandées pour le site Inphenix System. Certaines sont globales (affectent plusieurs pages), d'autres sont spécifiques à une page.

**Contexte technique:**
- Stack: Next.js 14+ sur Vercel
- Devis/viewer existant: impression3d.inphenix-system.fr (React/Next.js)
- Domaine: inphenix-system.fr (LWS → Vercel)

---

## 🔴 Modifications Globales (Priorité Maximum)

### 1. GLOBAL - Remplacement des émojis par des icônes sobres

**Problème:**
Les émojis donnent un rendu trop artificiel, très "IA". Ils sont présents partout sur le site.

**Emplacements concernés:**
- Page "Qui sommes-nous" : émojis pour "expertise technique", "réactivité", "sur mesure", "qualité"
- Section "Secteurs" : émojis pour chaque secteur
- Page "Impression 3D FDM" : émojis pour résistance mécanique, large choix matériaux, grandes dimensions, etc.
- Toutes les autres pages où des émojis sont utilisés

**Solution demandée:**
- Remplacer TOUS les émojis par des icônes sobres
- Suggestions d'icônes : Lucide Icons, Heroicons, ou autre librairie d'icônes épurées
- Alternative : éléments graphiques simples (puces stylisées, formes géométriques)
- **Ray est ouverte aux propositions**

**Action:**
- [ ] Identifier tous les emplacements d'émojis sur le site
- [ ] Choisir une librairie d'icônes cohérente (proposer à Ray)
- [ ] Remplacer systématiquement tous les émojis par des icônes appropriées
- [ ] S'assurer de la cohérence visuelle sur l'ensemble du site

---

### 2. GLOBAL - Confusion outil 3D / devis à corriger PARTOUT

**Problème:**
Les formulations comme "Explorer nos réalisations en 3D" ou "Visualiser nos projets en 3D" créent une confusion. L'outil n'est PAS pour explorer NOS réalisations, mais pour que le CLIENT visualise SON PROPRE fichier 3D et obtienne un devis instantané.

**Distinction à clarifier:**
1. **Demande de devis générale** : pour électronique, projets complexes, sur mesure
2. **Devis instantané impression 3D** : via l'outil automatique (impression3d.inphenix-system.fr) pour petites pièces FDM/Résine

**Action:**
- [ ] Rechercher TOUTES les occurrences de "Explorer nos réalisations en 3D", "Visualiser nos projets en 3D" ou formulations similaires
- [ ] Remplacer par des formulations claires comme :
  - "Obtenir un devis instantané pour votre fichier 3D"
  - "Téléchargez votre fichier 3D et recevez un devis en quelques secondes"
  - "Outil de devis automatique pour impression 3D"
- [ ] S'assurer que la distinction entre devis général et devis instantané est claire partout

---

### 3. GLOBAL - Production en série : nous la réalisons nous-mêmes

**Problème:**
À différents endroits du site, il est indiqué que pour une production en série, les projets seraient orientés vers des partenaires adaptés ou vers d'autres prestataires.

**Réalité:**
Nous réalisons nous-mêmes les productions en série.

**Action:**
- [ ] Rechercher toutes les mentions de "partenaires pour production en série" ou "orientation vers d'autres prestataires"
- [ ] Corriger pour indiquer que nous gérons nous-mêmes les productions en série
- [ ] Mettre en avant cette capacité comme un avantage

---

## 📄 Modifications par Page

### PAGE: Qui sommes-nous

#### 4. Section "Nos capacités" - Surbrillance trop légère

**Problème:**
Dans la section "Nos capacités" (impression 3D, électronique, services), il y a une surbrillance au hover, mais elle est beaucoup trop légère : on ne distingue quasiment pas qu'il y a une mise en avant.

**Action:**
- [ ] Renforcer la surbrillance hover sur les cartes/éléments de la section "Nos capacités"
- [ ] Suggestion : augmenter l'opacité, ajouter une bordure, ou changer la couleur de fond de manière plus visible
- [ ] Tester sur différents écrans pour s'assurer que c'est bien visible

#### 5. Titre "Qui sommes-nous" - Ajouter un point d'interrogation

**Action:**
- [ ] Changer "Qui sommes-nous" en "Qui sommes-nous ?"
- [ ] Vérifier si ce titre apparaît à plusieurs endroits (navigation, breadcrumb, etc.)

---

### PAGE: Impression 3D - Grand Format

#### 6. Correction : dimensions réelles des pièces

**Problème:**
Il est indiqué à plusieurs endroits "pièces jusqu'à 1 m". C'est incorrect.

**Réalité:**
- Sur une seule machine : pièces jusqu'à **85 cm de haut** en un seul bloc
- Pas de limite de taille globale : nous assemblons les pièces pour faire plus grand

**Nouvelle formulation demandée:**
"Pièces jusqu'à 85 cm en un seul bloc, sans limite de taille par assemblage"

**Action:**
- [ ] Rechercher toutes les mentions de "jusqu'à 1 m" ou "1 mètre"
- [ ] Remplacer par "jusqu'à 85 cm en un seul bloc"
- [ ] Ajouter la mention "sans limite de taille par assemblage" là où c'est pertinent

---

### PAGE: Impression 3D - FDM

#### 7. Émojis dans les avantages FDM

**Problème:**
Émojis pour présenter résistance mécanique, large choix de matériaux, grandes dimensions, etc.

**Action:**
- [ ] Remplacer les émojis par des icônes (voir modification globale #1)

#### 8. Surbrillance des carrés trop légère

**Problème:**
La surbrillance des carrés/cartes n'est pas assez visible : on ne distingue pas clairement les éléments au hover.

**Action:**
- [ ] Renforcer la surbrillance hover sur les cartes d'avantages FDM
- [ ] Même solution que pour "Qui sommes-nous" (#4)

---

### PAGE: Service Scan 3D

#### 9. Correction : spray mat temporaire

**Problème:**
Il est mentionné qu'on peut scanner des objets brillants/transparents avec un "spray mat temporaire lavable". Le terme "lavable" est problématique car il laisse penser qu'il faut laver l'objet.

**Réalité:**
Le spray mat temporaire **s'évapore**, il n'y a rien à laver.

**Nouvelle formulation demandée:**
"Spray mat temporaire qui s'évapore" (ou formulation similaire)

**Action:**
- [ ] Rechercher la mention du spray mat
- [ ] Supprimer le terme "lavable"
- [ ] Remplacer par "s'évapore naturellement" ou "temporaire (évaporation)"

---

### PAGE: Réalisations (Portfolio)

#### 10. BUG - Filtres ne fonctionnent pas correctement

**Problème:**
Lorsqu'on clique sur le filtre "Luxe", tous les secteurs s'affichent au lieu d'afficher uniquement ceux liés au luxe. De manière générale, les filtres ne s'actualisent pas correctement, ce qui affecte l'affichage des contenus.

**Action:**
- [ ] Debugger la logique de filtrage des réalisations
- [ ] Vérifier que les tags/catégories sont correctement associés à chaque projet
- [ ] S'assurer que le clic sur un filtre n'affiche QUE les projets correspondants
- [ ] Tester tous les filtres : Secteurs (Retail, Luxe, Événementiel, Architecture, etc.) et Services (Impression 3D, Électronique, etc.)

---

### PAGE: Accueil

#### 11. Section "Ils nous font confiance" → Refonte complète

**Problème actuel:**
La section "Ils nous font confiance" ne reflète pas correctement la réalité de nos relations avec les marques.

**Nouvelle section demandée:**

**Titre:** "Projets réalisés pour" (ou meilleur wording si proposition)

**Contenu:**
- Afficher UNIQUEMENT les logos des marques finales des projets (ex: Louis Vuitton, Balenciaga, etc.)
- **Aucune catégorisation**
- **Aucun compteur**
- **Aucune description par logo**
- Juste une grille de logos propre et épurée

**Disclaimer légal (en petit en bas de la section) :**
"Certains projets ont été réalisés en tant que sous-traitant ou partenaire technique, pour le compte d'agences ou de prestataires intermédiaires."

**Important juridique:**
Le wording ne doit JAMAIS suggérer une relation contractuelle directe ou exclusive avec ces marques.

**Action:**
- [ ] Renommer la section "Ils nous font confiance" en "Projets réalisés pour"
- [ ] Supprimer toute catégorisation, compteur, description
- [ ] Afficher uniquement une grille de logos
- [ ] Ajouter le disclaimer en petit en bas
- [ ] Vérifier que le wording ne suggère pas de relation contractuelle directe

#### 12. Nouvelle section "Partenaires"

**Demande:**
Créer une nouvelle section distincte intitulée "Partenaires".

**Contenu:**
- Affichage uniquement avec des logos (sans description)
- Inclure par exemple : BPI, Bourse French Tech, etc.
- Même style épuré que la section "Projets réalisés pour"

**Action:**
- [ ] Créer une nouvelle section "Partenaires" sur la page d'accueil
- [ ] Afficher uniquement les logos des partenaires institutionnels
- [ ] Style cohérent avec la section "Projets réalisés pour"

#### 13. Confusion outil 3D / devis (voir aussi #2 GLOBAL)

**Action spécifique page d'accueil:**
- [ ] Corriger les formulations de l'outil 3D (voir modification globale #2)
- [ ] S'assurer que la distinction entre devis général et devis instantané est claire

---

### PAGE: Contact et Localisation

#### 14. Page Contact dédiée (à valider)

**Question de Ray:**
"Je me demande s'il ne serait pas nécessaire d'avoir une page Contact dédiée, plutôt que seulement une adresse mail en bas de page."

**Informations manquantes actuellement:**
- Notre adresse complète n'apparaît nulle part
- Nous sommes basés à **Suresnes 92150, 23 rue Édouard-Nieuport**

**Action:**
- [ ] **Décision à prendre avec Ray :** Créer une page Contact dédiée ou juste ajouter l'adresse dans le footer ?
- [ ] Si page Contact : créer une page avec adresse complète, formulaire, carte Google Maps
- [ ] Si pas de page Contact : ajouter l'adresse complète dans le footer

#### 15. Footer - Supprimer "livraison nationale"

**Problème:**
En bas de page, il est écrit "livraison nationale". Dire que nous sommes en France est correct, mais indiquer que nous faisons UNIQUEMENT de la livraison nationale est problématique, car cela ferme des possibilités à l'international.

**Action:**
- [ ] Supprimer la mention "livraison nationale" du footer
- [ ] Remplacer par une formulation neutre comme "Basés en France" ou "Suresnes, France"

---

### CONFORMITÉ LÉGALE - Mentions légales, cookies, RGPD

#### 16. Banner Cookies obligatoire (conformité France)

**Problème:**
Pour un site internet en France, il est obligatoire d'avoir une fenêtre de gestion des cookies, avec un choix clair d'accepter ou de refuser.

**Action:**
- [ ] Implémenter un banner de gestion des cookies conforme RGPD
- [ ] Permettre à l'utilisateur d'accepter ou de refuser
- [ ] Enregistrer le consentement
- [ ] Suggestions de solutions : CookieYes, Tarteaucitron, ou solution custom

#### 17. Pages Mentions Légales et Politique de Confidentialité (404 actuellement)

**Problème:**
Les liens Mentions légales et Politique de confidentialité renvoient vers des pages 404.

**Informations de la société:**
- **Nom:** SAS Inphenix System (attention : c'est "Inphenix" pas "Infenix")
- **Adresse:** 23 rue Édouard-Nieuport, 92150 Suresnes
- **Secteur:** Impression 3D, Scan 3D, Électronique, Motorisation

**Action:**
- [ ] Créer la page Mentions Légales avec :
  - Raison sociale : SAS Inphenix System
  - Adresse : 23 rue Édouard-Nieuport, 92150 Suresnes
  - SIRET (à récupérer si Ray peut fournir)
  - Directeur de publication
  - Hébergeur : Vercel
  - Tout ce qui est obligatoire en France pour un site commercial
- [ ] Créer la page Politique de Confidentialité avec :
  - Collecte de données (formulaire devis, cookies, analytics)
  - Utilisation des données
  - Droits RGPD (accès, rectification, suppression)
  - Contact DPO ou responsable
- [ ] Vérifier ce qui est obligatoire en France pour notre secteur et nos services
- [ ] Si besoin, récupérer des templates légaux en ligne et les adapter

**Note:** Si des informations légales manquent (SIRET, capital social, etc.), demander à Ray de les fournir.

---

### FOOTER

#### 18. Services - Ajouter "Motorisation"

**Problème:**
Dans le pied de page, au niveau des services, il y a actuellement "électronique". Il manque "motorisation".

**Action:**
- [ ] Ajouter "Motorisation" à côté d'"Électronique" dans le footer
- [ ] Formulation suggérée : "Électronique & Motorisation" ou "Électronique | Motorisation"
- [ ] Le terme "motorisation" est important et doit apparaître clairement

---

## 📊 Résumé des Modifications

### Par Priorité

**🔴 Priorité Maximum (Impact global) :**
1. Remplacement des émojis par des icônes (GLOBAL)
2. Correction confusion outil 3D / devis (GLOBAL)
3. Bug filtres page Réalisations (#10)
4. Conformité légale : cookies + mentions légales (#16, #17)

**🟠 Priorité Haute (Corrections importantes) :**
5. Production en série : nous la faisons (#3)
6. Dimensions grand format : 85cm pas 1m (#6)
7. Refonte section "Projets réalisés pour" (#11)
8. Spray mat temporaire : s'évapore (#9)

**🟡 Priorité Moyenne (Améliorations UX) :**
9. Surbrillances trop légères (#4, #8)
10. Footer : ajouter motorisation (#18)
11. Footer : supprimer "livraison nationale" (#15)

**🟢 Priorité Basse (Détails) :**
12. Point d'interrogation "Qui sommes-nous ?" (#5)
13. Nouvelle section Partenaires (#12)
14. Page Contact dédiée - à valider avec Ray (#14)

---

## ✅ Checklist Globale pour Barry (Quick-Dev)

Avant de commencer :
- [ ] Lire la synthèse Party Mode (bmad-output/party-mode-synthese-2026-01-28.md)
- [ ] Lire le Cadre Stratégique (bmad-output/Cadre-strategique)
- [ ] Scanner le code existant (src/)

Pendant l'implémentation :
- [ ] Traiter les modifications globales en priorité (#1, #2, #3)
- [ ] Puis modifications par page
- [ ] Tester chaque modification sur localhost
- [ ] Vérifier la cohérence visuelle globale
- [ ] Tester le responsive (mobile, tablette, desktop)

Après l'implémentation :
- [ ] Créer une liste des modifications effectuées
- [ ] Noter ce qui nécessite des décisions de Ray (ex: choix d'icônes, page Contact)
- [ ] Noter ce qui nécessite des informations supplémentaires (SIRET, etc.)

---

## 🎯 Instructions pour Ray

**Pour lancer quick-dev avec Opus 4.5 :**

```bash
# Via la ligne de commande
claude-code --model opus-4-5 /quick-dev
```

**Ou bien :**

```bash
# Si tu veux spécifier le fichier directement
claude-code --model opus-4-5 /quick-dev --file bmad-output/modifications-site-v1.md
```

**Fichier à référencer :** `bmad-output/modifications-site-v1.md` (ce fichier)

---

## 📝 Notes pour Barry

**Contexte important :**
- Ce site a été développé selon BMAD avec Next.js 14+ sur Vercel
- Il y a un outil de devis existant sur impression3d.inphenix-system.fr (React/Next.js)
- La structure Hub & Spoke avec 6 secteurs Tier 1 est déjà en place
- Ray est pragmatique et préfère les solutions simples et efficaces

**Propositions attendues :**
- Choix de librairie d'icônes pour remplacer les émojis
- Solution pour le banner cookies (CookieYes, Tarteaucitron, custom ?)
- Décision sur page Contact dédiée ou juste ajout dans footer

**Questions pour Ray (si nécessaire) :**
- SIRET et capital social pour les mentions légales ?
- Préférence sur la librairie d'icônes ?
- Page Contact dédiée : oui ou non ?

---

**Fichier créé le :** 2026-01-29
**Prêt pour implémentation avec Opus 4.5**
