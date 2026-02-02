# Nouvelles Pages Créées

Pages créées lors de cette implémentation pour la conformité légale.

---

## Page : Mentions Légales

**Fichier :** `src/app/mentions-legales/page.tsx`
**URL :** `/mentions-legales`
**Statut :** CRÉÉE - informations à compléter

### Contenu

1. **Informations légales**
   - Éditeur du site : SAS Inphenix System
   - Adresse : 23 rue Édouard-Nieuport, 92150 Suresnes
   - SIRET : [À compléter par Ray]
   - Capital social : [À compléter par Ray]

2. **Directeur de publication**
   - Représentant légal de la SAS

3. **Hébergeur**
   - Vercel Inc.
   - Adresse complète fournie

4. **Propriété intellectuelle**
   - Protection du contenu
   - Interdiction de reproduction

5. **Limitation de responsabilité**
   - Clause standard

6. **Cookies**
   - Renvoi vers politique de confidentialité

7. **Liens hypertextes**
   - Clause de non-responsabilité

8. **Droit applicable**
   - Droit français

### Actions requises (Ray)

- [ ] Compléter le SIRET
- [ ] Compléter le capital social
- [ ] Vérifier le nom du directeur de publication

---

## Page : Politique de Confidentialité

**Fichier :** `src/app/politique-confidentialite/page.tsx`
**URL :** `/politique-confidentialite`
**Statut :** CRÉÉE - conforme RGPD

### Contenu (conforme RGPD)

1. **Responsable du traitement**
   - SAS Inphenix System
   - Coordonnées complètes

2. **Données collectées**
   - Données fournies volontairement (nom, email, etc.)
   - Données collectées automatiquement (IP, cookies)

3. **Finalités du traitement**
   - Réponse aux demandes
   - Suivi des projets
   - Amélioration des services
   - Statistiques

4. **Base légale**
   - Consentement
   - Exécution d'un contrat
   - Intérêt légitime

5. **Durée de conservation**
   - Données contact : 3 ans
   - Facturation : 10 ans
   - Cookies : 13 mois

6. **Destinataires**
   - Équipe interne
   - Sous-traitants techniques
   - Pas de vente de données

7. **Transferts hors UE**
   - Vercel (US) - clauses contractuelles

8. **Cookies**
   - Essentiels
   - Analytiques (opt-in)
   - Lien vers gestion

9. **Droits RGPD**
   - Accès, rectification, effacement
   - Limitation, portabilité, opposition
   - Retrait du consentement
   - Réclamation CNIL

10. **Sécurité**
    - HTTPS
    - Accès restreint
    - Sauvegardes

---

## Intégration Cookies : Tarteaucitron

**Fichier modifié :** `src/app/layout.tsx`
**Solution :** Tarteaucitron.js (solution française, gratuite, RGPD)

### Configuration

```tsx
// Scripts ajoutés dans layout.tsx
<Script
  src="https://cdn.jsdelivr.net/npm/tarteaucitronjs@latest/tarteaucitron.min.js"
  strategy="beforeInteractive"
/>

<Script id="tarteaucitron-init" strategy="afterInteractive">
  {`
    tarteaucitron.init({
      "privacyUrl": "/politique-confidentialite",
      "orientation": "bottom",
      "DenyAllCta": true,
      "AcceptAllCta": true,
      "highPrivacy": true,
      // ...autres options
    });
  `}
</Script>
```

### Fonctionnalités

- Banner de consentement en bas de page
- Bouton "Tout accepter" et "Tout refuser"
- Icône de gestion persistante (coin bas gauche)
- Lien vers politique de confidentialité
- Conforme RGPD (highPrivacy: true)

### Personnalisation future

Pour ajouter des services (Google Analytics, etc.) :

```javascript
// Exemple pour Google Analytics
tarteaucitron.user.gtagUa = 'G-XXXXXXXXXX';
(tarteaucitron.job = tarteaucitron.job || []).push('gtag');
```
