# Au Beurre Noisette - Site Web

Site web vitrine pour une fromagerie artisanale des Hauts-de-France, développé avec Next.js 13+ et TypeScript.

## 🧀 Présentation

Une plateforme moderne pour présenter les produits et services d'une fromagerie artisanale, mettant en avant :
- Plus de 70 variétés de fromages
- Présence sur 7 marchés hebdomadaires
- Tradition depuis 1950
- Service de commandes et livraisons

## 🛠 Stack Technique

### Frontend
- **Framework**: Next.js 13+ (App Router)
- **Langage**: TypeScript
- **Styling**: 
  - Tailwind CSS
  - Composants personnalisés
  - Thème personnalisé (couleurs cheese/cream)
- **Animations**: 
  - Intersection Observer API
  - Animations au scroll
  - Transitions fluides
- **Responsive**: Design mobile-first
- **Thème**: Support mode clair/sombre

## 📁 Structure du Projet

```text
cheese-app/
├── src/
│   ├── app/
│   │   ├── page.tsx                    # Page d'accueil
│   │   ├── nos-fromages/              # Catalogue fromages
│   │   ├── recettes/                  # Recettes
│   │   ├── marches/                   # Marchés
│   │   ├── commandes-et-livraisons/   # Commandes
│   │   ├── biographie/                # Histoire
│   │   └── mentions-legales/          # Mentions légales
│   ├── components/
│   │   ├── Header.tsx                 # Navigation
│   │   ├── Footer.tsx                 # Pied de page
│   │   ├── ThemeToggle.tsx           # Switch mode sombre
│   │   └── ScrollAnimation.tsx        # Animations scroll
│   ├── types/
│   │   └── cheese.ts                  # Types données
│   └── source/
│       └── api.ts                     # Config API
├── public/
│   └── patterns/                      # Images motifs
└── tailwind.config.js                 # Config Tailwind
```

## 🎨 Fonctionnalités

### Pages
- **Accueil**: Présentation générale et sélection du moment
- **Nos Fromages**: Catalogue complet des fromages
- **Recettes**: Suggestions de recettes et conseils
- **Marchés**: Localisation et horaires des marchés
- **Commandes**: Système de commandes et livraisons
- **Biographie**: Histoire de l'entreprise
- **Mentions Légales**: Informations légales

### Design
- Mode sombre/clair
- Animations au scroll
- Design responsive
- Navigation intuitive
- Performance optimisée
- SEO optimisé

## 🎯 Caractéristiques Techniques

- **Performance**:
  - Images optimisées
  - Chargement différé
  - Animations fluides
- **Accessibilité**:
  - Support clavier
  - ARIA labels
  - Contraste vérifié
- **SEO**:
  - Meta tags dynamiques
  - Structure sémantique
  - Sitemap XML

## 📱 Responsive Design

- Mobile: < 768px
- Tablette: 768px - 1024px
- Desktop: > 1024px

## 👤 Contact

Développé par [DINCQ Alexandre](https://github.com/dincq)

## 📝 License

MIT License - voir le fichier [LICENSE.md](LICENSE.md) pour plus de détails
