# Estellon Website

Site web Estellon avec un composant Header React Next.js TypeScript incluant un menu multi-niveaux.

## Fonctionnalités

- Menu de navigation multi-niveaux avec animations
- Design minimaliste et accessible
- Support complet TypeScript
- Navigation avec Next.js Link
- Animations fluides pour l'ouverture/fermeture des sous-menus

## Structure du menu

- **New Arrivals** - Page d'accueil
- **Bags** - Sacs avec sous-catégories
- **Accessories** - Accessoires avec sous-catégories  
- **Collections / Guides** - Collections et guides
- **La Maison** - Informations sur la marque
- **Services** - Services client et support

## Installation

1. Installer les dépendances :
```bash
npm install
```

2. Lancer le serveur de développement :
```bash
npm run dev
```

3. Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Technologies utilisées

- Next.js 14
- React 18
- TypeScript
- CSS-in-JS pour le styling

## Structure du projet

```
estellon-website/
├── app/
│   ├── layout.tsx      # Layout principal
│   ├── page.tsx        # Page d'accueil
│   └── globals.css     # Styles globaux
├── components/
│   └── Header.tsx      # Composant Header avec menu
├── package.json
├── tsconfig.json
└── next.config.js
```

## Accessibilité

Le composant Header inclut :
- Attributs ARIA appropriés (`aria-expanded`, `aria-controls`, `aria-haspopup`)
- Navigation au clavier
- Support des lecteurs d'écran
- Animations fluides et contrôlables 