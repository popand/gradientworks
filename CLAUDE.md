# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

GradientWorks is a single-page React website for a consulting company specializing in software development and agentic AI solutions. The site is built with React 19, TypeScript, Vite, and Tailwind CSS v4, optimized for static deployment to GitHub Pages.

## Key Commands

```bash
# Development
npm run dev              # Start dev server on http://localhost:5173

# Building
npm run build           # TypeScript compilation + Vite production build
npm run preview         # Preview production build locally

# Deployment
npm run deploy          # Build and deploy to gh-pages branch
```

Note: Deployment automatically triggers on push to main via GitHub Actions workflow.

## Architecture

### Single-Page Application Structure

The app follows a simple vertical layout pattern with all content on one scrollable page:

```
App.tsx (root)
├── Navigation (sticky header)
├── main
│   ├── Hero
│   ├── About
│   ├── Services
│   ├── WhyUs
│   ├── Contact
│   └── (each section has id for smooth scroll)
└── Footer
```

All sections use smooth scrolling navigation via CSS `scroll-behavior: smooth` and JavaScript `scrollIntoView()`.

### Styling Architecture (Tailwind CSS v4)

**Important:** This project uses Tailwind CSS v4, which has significant API changes from v3:

- Color tokens are defined as CSS variables in `src/index.css` using `@theme` directive
- Colors: `--color-primary-{50-900}` and `--color-accent-{50-900}` (blue/purple gradient scheme)
- Custom utilities: `.text-gradient` and `.bg-gradient-primary` use these CSS variables
- PostCSS plugin: `@tailwindcss/postcss` (not the old `tailwindcss` plugin)
- No `tailwind.config.js` theme extension needed - define everything in CSS

### Animation Patterns

Uses Framer Motion throughout with consistent patterns:

1. **Section entry animations**: `useInView` hook with `margin: "-100px"` for scroll-triggered reveals
2. **Staggered children**: Sequential delays (0.1s increments) for list items
3. **Hover states**: `whileHover` with scale/translate transforms
4. **Initial load**: Hero uses immediate animation, other sections wait for scroll

### Component Conventions

- Each section component is self-contained with its own animations
- Navigation uses both desktop (flexbox) and mobile (slide-down menu) layouts
- Logo import: `import logo from '../assets/logo.png'`
- Contact form uses `mailto:` links (ready for third-party service integration)
- All external links in Footer should be updated (currently placeholder `#`)

## Critical Configuration

### GitHub Pages Base Path

**vite.config.ts**:
```typescript
base: '/gradientworks/'
```

This must match the GitHub repository name. If deploying to a different repo or custom domain, update this base path.

### Contact Information

Current contact details (update these when needed):
- Email: `contact@gradientworks.ca`
- Location: `Toronto, ON`
- Company name: `GradientWorks` (note the 's')

These appear in:
- `src/components/Contact.tsx` (contact form and info display)
- `src/components/Footer.tsx` (email link)

## Common Customization Points

### Color Scheme
Edit `src/index.css` `@theme` section (lines 4-28) to change primary/accent colors.

### Services Content
Two main categories in `src/components/Services.tsx`:
- `softwareServices` array (4 items)
- `aiServices` array (4 items)

### Hero Feature Cards
Located in `src/components/Hero.tsx`, each card has:
- Unique gradient (`from-{color}-500 to-{color}-500`)
- Icon (emoji)
- Label and description
- Hover effects with gradient overlays

## TypeScript Notes

- Strict mode enabled
- All components use functional components with TypeScript
- Framer Motion types are imported from the library
- React 19 with new JSX transform (`jsx: "react-jsx"`)

## Deployment Flow

1. **Automatic (recommended)**: Push to main → GitHub Actions builds and deploys
2. **Manual**: Run `npm run deploy` → builds and pushes to gh-pages branch

GitHub Pages must be configured to deploy from the `gh-pages` branch (or use GitHub Actions source in repo settings).
