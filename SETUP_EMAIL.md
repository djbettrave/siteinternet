# Configuration de l'envoi d'emails - Resend

## ✅ Ce qui a été fait

Le système d'envoi d'emails est maintenant configuré sur le site. Voici ce qui a été implémenté :

1. **Installation de Resend** - Package npm installé
2. **Route API créée** - `/api/contact` pour traiter les soumissions
3. **Formulaire mis à jour** - Envoie les données à l'API
4. **Variables d'environnement** - Fichiers `.env.example` et `.env.local` créés

---

## 🔑 Ce qu'il te reste à faire

### Étape 1 : Créer un compte Resend (GRATUIT)

1. Va sur **https://resend.com**
2. Clique sur **"Sign Up"** (ou "Get Started")
3. Crée un compte avec ton email

**Plan gratuit :** 100 emails/jour + 3000 emails/mois - largement suffisant pour le formulaire de contact.

---

### Étape 2 : Vérifier ton domaine `inphenix-system.fr`

Pour envoyer des emails depuis `contact@inphenix-system.fr`, tu dois vérifier que tu possèdes le domaine.

1. Dans Resend, va dans **"Domains"**
2. Clique sur **"Add Domain"**
3. Entre `inphenix-system.fr`
4. Resend va te donner des enregistrements DNS à ajouter

**Sur LWS (ton hébergeur actuel) :**
- Connecte-toi à ton compte LWS
- Va dans la gestion DNS du domaine `inphenix-system.fr`
- Ajoute les enregistrements DNS fournis par Resend (généralement 3 enregistrements de type TXT et MX)
- Attends 5-15 minutes pour la propagation DNS
- Reviens dans Resend et clique sur **"Verify"**

---

### Étape 3 : Obtenir ta clé API

1. Dans Resend, va dans **"API Keys"**
2. Clique sur **"Create API Key"**
3. Donne-lui un nom (ex: "Inphenix Website Contact Form")
4. Sélectionne les permissions : **"Sending access"** uniquement
5. Copie la clé générée (elle commence par `re_...`)

**⚠️ IMPORTANT :** La clé ne s'affichera qu'une seule fois, copie-la immédiatement !

---

### Étape 4 : Configurer la clé API localement

1. Ouvre le fichier `.env.local` à la racine du projet
2. Remplace la ligne vide par :
   ```
   RESEND_API_KEY=re_ta_cle_api_ici
   ```
3. Sauvegarde le fichier

---

### Étape 5 : Tester en local

1. Redémarre le serveur de développement :
   ```bash
   npm run dev
   ```

2. Va sur **http://localhost:3000/contact**

3. Remplis le formulaire et envoie-le

4. Tu devrais recevoir un email à **contact@inphenix-system.fr** dans les secondes qui suivent

---

### Étape 6 : Déployer sur Vercel

1. Va sur **https://vercel.com/dashboard**

2. Sélectionne ton projet `inphenix_website`

3. Va dans **"Settings"** → **"Environment Variables"**

4. Ajoute une nouvelle variable :
   - **Name:** `RESEND_API_KEY`
   - **Value:** `re_ta_cle_api_ici` (la même que dans .env.local)
   - **Environments:** Cocher **Production**, **Preview** et **Development**

5. Clique sur **"Save"**

6. Redéploie le site :
   ```bash
   git add .
   git commit -m "Add email contact form with Resend"
   git push
   ```

7. Vercel va automatiquement redéployer avec la nouvelle configuration

---

## 📧 Comment ça marche maintenant

### Côté visiteur :
1. Le visiteur remplit le formulaire sur `/contact`
2. Il clique sur "Envoyer ma demande"
3. Le bouton affiche "Envoi en cours..."
4. Un message de confirmation apparaît

### Côté toi :
1. Tu reçois un email à **contact@inphenix-system.fr**
2. L'email contient toutes les informations du formulaire :
   - Nom
   - Email (tu peux répondre directement)
   - Entreprise
   - Téléphone
   - Service souhaité
   - Secteur
   - Message
   - Nom du fichier joint (si envoyé)

---

## 🔍 Vérifier que tout fonctionne

### Test local :
```bash
npm run dev
```
Puis va sur http://localhost:3000/contact et teste le formulaire.

### Test en production :
Après le déploiement Vercel, va sur https://inphenix-system.fr/contact et teste.

---

## 🆘 Problèmes courants

### "Erreur lors de l'envoi de l'email"
- Vérifie que la clé API est bien configurée dans `.env.local` (local) ou Vercel (production)
- Vérifie que le domaine est vérifié dans Resend
- Regarde les logs Vercel : https://vercel.com/dashboard → ton projet → "Logs"

### "Je ne reçois pas les emails"
- Vérifie tes spams
- Vérifie que le domaine est bien vérifié dans Resend
- Vérifie les logs Resend : https://resend.com/logs

### "DNS non vérifié"
- Attends 15-30 minutes après avoir ajouté les enregistrements DNS
- Vérifie que tu as bien ajouté TOUS les enregistrements fournis par Resend

---

## 📊 Statistiques Resend

Tu peux voir les statistiques d'emails dans Resend :
- Nombre d'emails envoyés
- Taux de délivrabilité
- Logs détaillés de chaque email

---

## ✅ Checklist finale

- [ ] Compte Resend créé
- [ ] Domaine `inphenix-system.fr` vérifié dans Resend
- [ ] Clé API générée et copiée
- [ ] `.env.local` configuré avec la clé API
- [ ] Testé en local (formulaire fonctionne)
- [ ] Variable d'environnement ajoutée dans Vercel
- [ ] Site déployé sur Vercel
- [ ] Testé en production
- [ ] Premier email reçu à contact@inphenix-system.fr 🎉

---

## 💡 Conseils

1. **Garde ta clé API secrète** - Ne la partage jamais publiquement
2. **Ne commit jamais .env.local** - Il est déjà dans .gitignore
3. **Archive les emails** - Configure une règle dans ta boîte mail pour archiver automatiquement les emails du formulaire

---

**Besoin d'aide ?**
- Documentation Resend : https://resend.com/docs
- Support Resend : https://resend.com/support
