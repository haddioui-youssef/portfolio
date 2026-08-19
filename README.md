# Portfolio Personnel — Youssef Haddioui

Site portfolio personnel présentant mon profil, mon parcours, mes compétences, mes projets et un moyen de contact. Réalisé sans framework, uniquement en **HTML, CSS et JavaScript vanilla**.

🔗 **Démo en ligne** : portfolio-q76.pages.dev

## 📄 Pages

| Page | Fichier | Description |
|------|---------|-------------|
| Accueil | `index.html` | Présentation rapide, message d'accueil, boutons vers Contact / Projets |
| À propos | `about.html` | Présentation personnelle, parcours académique, compétences, objectifs |
| Projets | `projects.html` | Galerie de projets avec titre, description et technologies |
| Services | `services.html` | Prestations proposées et points forts |
| Contact | `contact.html` | Formulaire de contact et informations de contact / réseaux |

## 🛠️ Technologies utilisées

- **HTML5** — structure sémantique des 5 pages
- **CSS3** — mise en page avec Flexbox, variables CSS (`:root`), design responsive avec media queries
- **JavaScript (vanilla)** — menu hamburger mobile et validation du formulaire de contact

## 📁 Structure du projet

```
portfolio/
├── index.html
├── about.html
├── projects.html
├── services.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── README.md
```

> ⚠️ Les pages HTML référencent les fichiers via `css/style.css` et `js/script.js`. Veillez à placer `style.css` dans un dossier `css/` et `script.js` dans un dossier `js/` à la racine du projet.

## ✨ Fonctionnalités

- Navigation responsive avec menu hamburger sur mobile/tablette
- Design cohérent basé sur une palette de couleurs définie en variables CSS
- Grille de compétences avec badges et barres de progression (page À propos)
- Galerie de projets avec tags technologiques (page Projets)
- Formulaire de contact avec validation côté client (champs requis, format email) et message de retour visuel

## 🚀 Installation et exécution locale

1. Cloner le dépôt :
   ```bash
   git clone https://github.com/haddioui-youssef/portfolio
   ```
2. Ouvrir le dossier du projet et lancer `index.html` dans un navigateur, ou utiliser une extension type *Live Server* pour un rechargement automatique.

Aucune installation de dépendance n'est nécessaire (pas de `npm install`, pas de build) : le site est en HTML/CSS/JS pur.

## 🌐 Déploiement

Le site est déployé via **Cloudflare Pages**, connecté directement au dépôt GitHub :

- Build command : 
- Framework preset : `None`
- Output directory : `/` 

Chaque `push` sur la branche principale déclenche un redéploiement automatique.

## 👤 Contact

- **Email** : youssefhaddioui695@gmail.com
- **Localisation** : Marrakech, Maroc

---
© 2026 Youssef Haddioui. Tous droits réservés.
