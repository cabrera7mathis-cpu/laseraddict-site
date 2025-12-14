# LaserAddict Le Lamentin - Site Web Officiel

Site web moderne et responsive pour le centre LaserAddict Le Lamentin en Martinique.

## 🎯 Objectif

Site orienté conversion pour la prise de rendez-vous, spécialisé dans :
- Arrêt du tabac au laser
- Arrêt du cannabis
- Gestion des addictions (sucre, etc.)
- Gestion du stress et de l'insomnie
- Accompagnement perte de poids

## 🚀 Fonctionnalités

- ✅ Design moderne et épuré (vert bien-être)
- ✅ Responsive mobile-first
- ✅ Navigation fluide avec scroll smooth
- ✅ Bouton CTA sticky
- ✅ Slider de témoignages automatique
- ✅ FAQ avec accordéon
- ✅ Animations subtiles au scroll
- ✅ Intégration WhatsApp
- ✅ Menu hamburger mobile
- ✅ Optimisé pour la performance

## 📁 Structure du projet

```
laseraddict-site/
├── index.html          # Page principale
├── css/
│   └── style.css       # Styles responsive
├── js/
│   └── script.js       # Interactions et animations
└── README.md           # Documentation
```

## 🎨 Design

### Palette de couleurs
- **Vert principal** : #4CAF50
- **Vert foncé** : #388E3C
- **Vert clair** : #A5D6A7
- **Fond** : #F5F5F5 / #FFFFFF
- **Texte** : #212121 / #757575

### Typographie
- **Titres** : Playfair Display (serif élégante)
- **Corps** : Inter (sans-serif moderne)

## 📱 Sections du site

1. **Hero Section** - Titre accrocheur + CTA principal
2. **Section Problème** - Identification du visiteur
3. **Section Solution** - Explication de la méthode LaserAddict
4. **Section Pour Qui** - Services proposés
5. **Section Pourquoi ça marche** - Crédibilité et confiance
6. **Section Témoignages** - Avis clients avec slider
7. **Section Tarifs** - Offres claires et attractives
8. **Section Praticienne** - Approche humaine
9. **Section FAQ** - Réponses aux objections
10. **CTA Final** - Appel à l'action fort
11. **Footer** - Coordonnées et informations

## 🛠️ Technologies utilisées

- HTML5 sémantique
- CSS3 (Variables CSS, Grid, Flexbox)
- JavaScript Vanilla (ES6+)
- Google Fonts (Inter + Playfair Display)

## 📦 Installation

Le site est 100% statique, aucune installation nécessaire.

1. Cloner le repository
2. Ouvrir `index.html` dans un navigateur
3. Ou déployer sur un hébergement web (Netlify, Vercel, etc.)

## 🚀 Déploiement

### Option 1 : Netlify
```bash
# Glisser-déposer le dossier sur netlify.com
# ou via CLI :
netlify deploy --prod
```

### Option 2 : Vercel
```bash
vercel --prod
```

### Option 3 : GitHub Pages
1. Pusher le code sur GitHub
2. Activer GitHub Pages dans les settings
3. Sélectionner la branche principale

## ✏️ Personnalisation

### Modifier les coordonnées

Dans `index.html`, rechercher et remplacer :
- `+596696123456` - Numéro de téléphone
- `contact@laseraddict-lamentin.fr` - Email
- Adresse du centre

### Modifier les couleurs

Dans `css/style.css`, modifier les variables CSS :
```css
:root {
    --primary-green: #4CAF50;
    --primary-green-dark: #388E3C;
    /* ... */
}
```

### Ajouter des images

Créer un dossier `assets/images/` et remplacer les SVG placeholders par de vraies photos :
- Photo de la praticienne
- Photos du centre
- Visuels d'ambiance

## 📊 Analytics

Le site est pré-configuré pour Google Analytics. Ajouter votre ID de suivi dans `index.html` :

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

## 🔧 Support navigateurs

- Chrome/Edge (dernières versions)
- Firefox (dernières versions)
- Safari 12+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📞 Contact

Pour toute question concernant le site :
- Email : contact@laseraddict-lamentin.fr
- Téléphone : 0696 12 34 56

## 📄 Licence

© 2025 LaserAddict Le Lamentin. Tous droits réservés.