# GradientWorks Website

A modern, responsive single-page website for GradientWorks - a consulting company specializing in software development and agentic AI solutions.

## Features

- Modern, responsive design with Tailwind CSS
- Smooth scroll navigation
- Animated sections with Framer Motion
- Mobile-friendly with hamburger menu
- Optimized for GitHub Pages deployment

## Technology Stack

- **React 19** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Icons** for iconography

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/gradientworks.git
cd gradientworks
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Deployment to GitHub Pages

### Initial Setup

1. Create a new repository on GitHub named `gradientworks`

2. Initialize git and push your code:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/gradientworks.git
git push -u origin main
```

3. Enable GitHub Pages:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Under "Source", select "Deploy from a branch"
   - Select the `gh-pages` branch
   - Click Save

### Deploying Updates

To deploy your site to GitHub Pages:

```bash
npm run deploy
```

This command will:
1. Build the project
2. Push the `dist` folder to the `gh-pages` branch
3. GitHub Pages will automatically deploy the updated site

Your site will be available at: `https://yourusername.github.io/gradientworks/`

### Using a Custom Domain

If you want to use a custom domain:

1. Add a `CNAME` file in the `public` folder with your domain name:
```
www.gradientwork.com
```

2. Configure your DNS provider to point to GitHub Pages

3. In your repository settings, add your custom domain under "Pages" → "Custom domain"

## Customization

### Updating Content

- **Hero Section**: Edit [src/components/Hero.tsx](src/components/Hero.tsx)
- **About Section**: Edit [src/components/About.tsx](src/components/About.tsx)
- **Services**: Edit [src/components/Services.tsx](src/components/Services.tsx)
- **Contact Info**: Edit [src/components/Contact.tsx](src/components/Contact.tsx) and [src/components/Footer.tsx](src/components/Footer.tsx)

### Changing Colors

Edit the color scheme in [tailwind.config.js](tailwind.config.js):

```javascript
colors: {
  primary: {
    // Your primary color shades
  },
  accent: {
    // Your accent color shades
  }
}
```

### Contact Form

The contact form currently uses a `mailto:` link. For production, consider integrating:

- [Formspree](https://formspree.io/)
- [getform.io](https://getform.io/)
- [Web3Forms](https://web3forms.com/)
- [FormSubmit](https://formsubmit.co/)

## Project Structure

```
gradientworks/
├── src/
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── WhyUs.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## License

Copyright 2025 GradientWorks. All rights reserved.

## Support

For questions or support, contact: contact@gradientwork.com
