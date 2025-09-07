# 🌐 CV en ligne – Portfolio Next.js SEO

Un **CV en ligne moderne et optimisé pour Google** construit avec **Next.js, TypeScript et Tailwind CSS**.  
Ce projet va au-delà d’un simple portfolio : il combine **visibilité, accessibilité et interactivité** pour offrir une vraie valeur aux développeurs, freelances, étudiants et recruteurs.

---

## 🚀 Ce que ce projet apporte

- 🔎 **Un CV mieux indexé par Google** :  
  grâce aux **balises SEO** et aux **données structurées (JSON-LD Schema.org)**, vos informations (nom, poste, compétences, localisation) sont compréhensibles par les moteurs de recherche.  
  → Résultat : en tapant votre nom, Google sait **qui vous êtes et ce que vous faites**.  

- 📑 **Téléchargement direct du CV en PDF** :  
  pas besoin d’envoyer des pièces jointes à jour → le recruteur peut télécharger votre CV depuis votre site en **1 clic**.  

- ♿ **Accessibilité intégrée** :  
  le site s’adapte aux préférences des utilisateurs (réduction des animations, contraste élevé).  
  → Utilisable par tous, sans compromis.  

- 📊 **Mesure d’impact** :  
  via l’intégration d’analytics, vous savez combien de recruteurs ou visiteurs consultent votre profil, quels projets intéressent le plus, et combien téléchargent votre CV.  

- ✨ **Extensible et open-source** :  
  ce n’est pas un projet figé. Chacun peut le forker, l’adapter à ses besoins et l’améliorer.  

---

## 🛠️ Stack technique

- **Framework** : [Next.js 14](https://nextjs.org/)  
- **Langage** : TypeScript  
- **UI** : Tailwind CSS, shadcn/ui, Framer Motion  
- **SEO** : Head meta tags + JSON-LD Schema.org (type `Person`)  
- **PDF** : @react-pdf/renderer (génération de CV téléchargeable)  
- **Analytics** : Plausible / Google Analytics 4  
- **Accessibilité** : gestion `prefers-reduced-motion` & `prefers-contrast`  

---

## 📂 Structure du projet
```bash
.
├── app/               # Layout et pages principales
├── components/        # Composants réutilisables (UI, Portfolio, PDF, Accessibilité)
├── types/             # Config & typages du site
├── public/            # Images et assets
└── README.md
```

---

## ⚡ Installation & Démarrage

```bash
# 1. Cloner le repo
git clone https://github.com/AkmaDev/nextjs-portfolio-template.git
```
# 2. Installer les dépendances
```bash
cd nextjs-portfolio-template
npm install
```

# 3. Lancer en local
```bash
npm run dev
```

➡️ Le site sera dispo sur http://localhost:3000

📄 Licence

Projet open-source sous licence MIT.
Vous pouvez l’utiliser, le modifier et le partager librement.

👤 Auteur

Manassé AKPOVI
📌 [LinkedIn](www.linkedin.com/in/manasse-akpovi) 

💻 [monsitepersonnel](https://www.manasseakpovi.com/) 

