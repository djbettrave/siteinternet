---
stepsCompleted: [1, 2, 3, 4]
inputDocuments:
  - bmad-output/modifications-site-v1.md
  - bmad-output/modifications-site-v2.md
  - bmad-output/brainstorming/brainstorming-session-2026-01-27.md
  - bmad-output/party-mode-synthese-2026-01-28.md
  - bmad-output/changelog-v1/README.md
---

# UX Design Specification - inphenix_website

**Author:** Ray
**Date:** 2026-02-03

---

## Executive Summary

### Project Vision

Inphenix System est un bureau d'étude spécialisé en impression 3D (filament + résine) et développement électronique/électromécanique, basé à Suresnes (92). Le site doit positionner l'entreprise comme un acteur innovant et premium, capable d'accompagner des marques de premier plan (Louis Vuitton, Balenciaga) tout en restant accessible à des secteurs variés.

L'image visée : **innovant, premium, accessible** - inspirée d'Apple et Tesla. Un site qui respire, où le contenu et les réalisations parlent d'eux-mêmes, sans surcharge visuelle ni jargon technique excessif.

### Target Users

- **Clients B2B** dans 6 secteurs Tier 1 : Luxe, Événementiel, Retail, Robotique, Architecture, Joaillerie
- **Profil décideur** : directeurs techniques, chefs de projet, designers, architectes
- **Niveau technique varié** : certains très techniques (robotique), d'autres non (événementiel, luxe)
- **Appareils** : desktop principalement (contexte B2B), mais responsive mobile requis
- **Besoin principal** : comprendre rapidement les capacités d'Inphenix et obtenir un devis (instantané pour impression 3D, ou contact pour projets complexes)

### Key Design Challenges

1. **Équilibre premium/accessible** : le site doit inspirer confiance pour des projets luxe tout en restant compréhensible pour des secteurs moins techniques
2. **Deux tunnels de conversion distincts** : devis instantané (impression 3D automatisée) vs contact pour projets complexes (électronique, sur mesure) - les deux doivent coexister sans confusion
3. **Multi-secteurs sans dilution** : 6 secteurs avec des besoins très différents, le site doit parler à chacun sans devenir générique

### Design Opportunities

1. **Le minimalisme comme différenciateur** : la plupart des concurrents (bureaux d'étude, prestataires impression 3D) ont des sites surchargés et techniques. Un design Apple-like créerait un contraste fort et un positionnement premium immédiat
2. **Les réalisations comme preuve** : laisser les projets et visuels parler (grands visuels, espace) plutôt que de convaincre par le texte
3. **Le devis instantané comme innovation UX** : peu de concurrents proposent un outil de devis automatisé - c'est un avantage à mettre en avant par le design

### Direction Visuelle Validée (Option 3 - Neutre Chaud + Accent Minimaliste)

- **Philosophie** : inspirée Apple/Tesla - espace, typographie, visuels. Pas de couleur forte pour exister.
- **Base** : Blanc cassé (#FAFAFA), gris neutres, noir profond (#111827)
- **Profondeur** : Bleu-gris sophistiqué (#475569 → #1E293B)
- **CTAs** : Noir sur blanc ou blanc sur noir - pas de couleur vive
- **Orange actuel** : supprimé
- **Bleu actuel** : remplacé par une palette neutre/bleu-gris
- **Principe** : le site respire, les réalisations et images sont mises en avant par le vide et le contraste, pas par les couleurs

## Core User Experience

### Defining Experience

L'objectif du site : **transformer un inconnu en client.** Chaque visiteur, quel que soit son profil (technique ou non), doit trouver son chemin naturellement et se dire "c'est avec eux que je veux travailler".

L'action core n'est pas un bouton, c'est un **parcours de projection** : le visiteur se reconnaît dans un secteur ou un service, voit des réalisations concrètes, se projette dans son propre projet, et passe à l'action (contact ou devis instantané).

### Platform Strategy

- Web responsive, desktop-first (B2B) mais mobile irréprochable
- Navigation pensée pour deux profils d'entrée :
  - **Profil technique** -> entre par les Services
  - **Profil sectoriel** -> entre par les Secteurs
- Le menu est le premier outil de conversion : chaque visiteur doit trouver sa porte d'entrée en moins de 3 secondes

### Effortless Interactions

- **Trouver son chemin** : navigation immédiate, pas de réflexion nécessaire
- **Se projeter** : photos et réalisations qui parlent d'elles-mêmes, pas de murs de texte
- **Passer à l'action** : devis instantané (impression 3D) ou contact (projets complexes) toujours accessibles, sans friction
- **Légèreté visuelle** : pas de surcharge, pas de couleurs multiples, le site respire

### Critical Success Moments

1. **Les 5 premières secondes** : le visiteur comprend ce que fait Inphenix et se sent au bon endroit
2. **La projection** : il voit une réalisation ou un cas d'usage qui ressemble à son besoin et se dit "ils savent faire ça"
3. **Le passage à l'action** : le chemin vers le devis ou le contact est évident, pas besoin de chercher

### Experience Principles

1. **Simplicité absolue** : si c'est compliqué, c'est raté. Chaque page, chaque interaction doit être immédiatement compréhensible
2. **Projection avant persuasion** : montrer plutôt que convaincre. Les visuels et réalisations font le travail, pas les arguments
3. **Deux portes, un objectif** : que le visiteur entre par les services ou les secteurs, le chemin mène toujours vers la conversion
4. **Respiration visuelle** : l'espace vide est un choix de design, pas un manque. Moins = plus premium

## Desired Emotional Response

### Primary Emotional Goals

- **Confiance immédiate** : "Ces gens sont sérieux, ils bossent avec des grandes marques"
- **Simplicité rassurante** : "C'est clair, je comprends tout, c'est pas compliqué"
- **Projection naturelle** : "Je me vois travailler avec eux, ils peuvent faire mon projet"

### Emotional Journey Mapping

| Étape | Émotion visée |
|---|---|
| Arrivée sur le site | Clarté, sérénité - "je suis au bon endroit" |
| Navigation menu | Facilité - "je trouve ma porte d'entrée immédiatement" |
| Page secteur/service | Projection - "ils comprennent mon métier" |
| Réalisations/photos | Confiance - "ils savent faire, la preuve" |
| Passage à l'action | Simplicité - "c'est facile de les contacter / d'avoir un devis" |

### Micro-Emotions

- **Confiance > Scepticisme** : les réalisations et les logos de marques créent la preuve sans avoir besoin de convaincre
- **Calme > Surcharge** : le design épuré évite toute anxiété cognitive, le visiteur n'est jamais submergé
- **Compétence perçue > Doute** : le site lui-même est un signal de qualité - si le site est bien fait, le travail l'est aussi

### Design Implications

- **Confiance** -> Grands visuels de réalisations, espace généreux, typo propre, pas de décorations inutiles
- **Simplicité** -> Navigation à 2 niveaux max, textes courts, hiérarchie claire, CTAs évidents
- **Projection** -> Pages sectorielles avec cas d'usage concrets, photos qui montrent le résultat final, pas le processus technique
- **Calme** -> Palette neutre (blanc/gris/noir), animations subtiles, pas d'éléments clignotants ou agressifs

### Emotional Design Principles

1. **Le site EST la vitrine** : la qualité du design = la qualité perçue du travail d'Inphenix
2. **Zéro friction cognitive** : si le visiteur doit réfléchir pour naviguer, on a échoué
3. **Montrer, pas dire** : une photo vaut mieux qu'un paragraphe de texte
4. **Premium par la retenue** : ce qu'on enlève compte plus que ce qu'on ajoute
