# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

GradientWorks is a single-page React website for a consulting company specializing in software development and agentic AI solutions. The site is built with React 19, TypeScript, Vite, and Tailwind CSS v4, optimized for static deployment to GitHub Pages.

The visual language is the **Lemon Design System** (Claude Design project "Lemon Design System", reverse-engineered from heylemon.ai): cream ground, warm ink, a single lemon-yellow accent, Source Serif 4 headlines with one italic turn, Geist Mono labels, pills and large radii, tinted shadows, soft motion.

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
├── Navigation (fixed 74 px header, .lm-header)
├── main
│   ├── Hero      (.lm-panel.lm-panel-hero with art, dome and agent mockup)
│   ├── About     (mission + on-ink checklist + three .lm-card)
│   ├── Services  (two numbered card groups)
│   ├── WhyUs     (four cards, then a full-width .on-ink band of .lm-quote)
│   ├── Contact   (info column + .lm-card form)
│   └── (each section has id for smooth scroll)
└── Footer (.lm-footer on ink)
```

Smooth scrolling is per click via `scrollToSection()` in `src/motion.ts`, which cancels the moment the user scrolls.

### Styling Architecture

**The design system CSS is vendored verbatim** into `src/styles/lemon/`:

- `fonts.css` — `--serif`, `--sans`, `--mono` (the Google Fonts `@import` itself sits at the top of `src/index.css`, because CSS requires `@import` before any rule)
- `colors_and_type.css` — every token (`--cream`, `--ink`, `--yellow`, `--forest`, `--fg-soft`, `--line`, radii, shadows, easing, durations, `--grain`), base element styles, `h1/h2` serif rules, `.eyebrow .sub .micro .tag .note .step-num .hl .on-ink .rv`
- `components.css` — `.wrap .lm-section .lm-grid-* .lm-panel* .lm-header* .btn* .lm-tab .lm-chip .lm-glass* .lm-card* .lm-quote* .lm-stat .lm-notch .lm-keycap .lm-mock* .lm-footer* .lm-input .lm-input-group .lm-say .lm-dome`

Do not edit these three files by hand. Re-sync them from the design system project when it changes. Site-specific additions (`.lm-art`, `.lm-menu`, `.lm-textarea`, `.lm-label`, `.lm-dot`, `.lm-trace`, burger-to-X) live at the bottom of `src/index.css` and are composed only from tokens.

**Tailwind v4 is scoped to the design system.** The `@theme` block in `src/index.css` clears Tailwind's default `color`, `font`, `radius`, `shadow`, `text`, `ease` and `tracking` namespaces (`--color-*: initial;` etc.) and re-populates them from Lemon tokens. Consequences:

- `bg-cream`, `text-ink`, `text-fg-soft`, `border-line`, `text-forest`, `bg-white` exist. `text-gray-500`, `bg-slate-50`, `text-violet-400` do **not** and generate no CSS.
- `font-serif`, `font-sans`, `font-mono` map to Source Serif 4, Inter, Geist Mono.
- `rounded-card` (26), `rounded-panel` (32), `rounded-quote` (24), `rounded-glass` (16), `rounded-mock` (14), `rounded-pill`. `rounded-xl` does not exist.
- `shadow-btn`, `shadow-card-hover`, `shadow-mockup`, `shadow-glass`. `shadow-lg` does not exist.
- `text-micro` (11.5), `text-body-sm` (13.5), `text-nav` (15.5), `text-btn` (16), `text-body` (17), `text-sub`, `text-h3` (21), `text-title`, `text-h2`, `text-display`. `text-sm` does not exist.
- Spacing utilities (`p-*`, `gap-*`, `mt-*`, `max-w-*`) keep Tailwind's 4 px scale; layout is not a brand decision. Section rhythm should still use the DS variables: `var(--gutter)`, `var(--secpad)`, `var(--stack-gap)`, `var(--grid-gap)`.
- There is no `tailwind.config.js`. Tailwind v4 ignores that file unless `index.css` opts in via `@config`.

Prefer the DS classes over utilities whenever one exists (`.btn.btn-primary`, not a hand-rolled pill). Reach for a token via `style={{ … 'var(--token)' }}` when a value has no utility.

### The five rules (from SKILL.md)

1. **Cream, not white; ink, not black.** Page is `--cream #fbfbed`, text is `--ink #1a1a17`. White is for cards on cream only.
2. **Serif headlines with one italic turn.** `h1`/`h2` in Source Serif 4 at 560, with a single `<em>` on the payoff word.
3. **Mono labels, uppercase, tracked, in forest.** Eyebrows get the two dots. Yellow is never text on cream; it is the mark, the waveform, the highlight, the sun button.
4. **Pills and big radii.** Buttons, tabs, chips and inputs are 999 px; cards 26 px; panels 32 px. No square corners.
5. **Shadows are tinted and long; motion is soft with a hint of spring.** Ink or plum shadows, `cubic-bezier(.2,.7,.3,1)`, −2 to −5 px lifts, everything off under reduced motion.

### Copy

Sentence case everywhere except mono labels. Short declaratives. The primary CTA is **Book a call** (the design system's own "Download for Mac" is product-specific to Lemon). No emoji, no icon fonts; arrows are the `→` glyph, social icons are inline SVG.

### Animation Patterns

Framer Motion, tuned to the DS motion tokens via `src/motion.ts`:

1. `reveal(step)` / `revealWhen(inView, step)`: opacity 0→1 with a 14 px rise over 700 ms on `EASE_SMOOTH` (`cubic-bezier(.2,.7,.3,1)`), siblings staggered 80 ms
2. Sections use `useInView` with `margin: "-80px"`; the Hero animates on load
3. Hover lifts are CSS in the DS (`.lm-card.hoverable`, `.btn-primary:hover`); press is `.btn:active { scale(.97) }`
4. `App.tsx` wraps the tree in `<MotionConfig reducedMotion="user">`; the DS stylesheet also zeroes CSS animations under `prefers-reduced-motion`

### Component Conventions

- Each section component is self-contained
- Logo import: `import logo from '../assets/logo.png'`; wordmark is `font-serif` at 22 px / 560
- Contact form posts to `/api/contact` (Vercel function using Resend); inputs use `.lm-input` / `.lm-textarea`
- Footer social links are placeholders (`#`) until real profiles exist

## Critical Configuration

### Base Path

`vite.config.ts` uses `base: '/'` because the site is served from the custom domain in `public/CNAME` (gradientworks.ca).

### Contact Information

- Email: `contact@gradientworks.ca`
- Location: `Toronto, ON`
- Company name: `GradientWorks` (note the 's')

These appear in `src/components/Contact.tsx` and `src/components/Footer.tsx`.

## TypeScript Notes

- Strict mode enabled
- All components use functional components with TypeScript
- Framer Motion types are imported from the library
- React 19 with new JSX transform (`jsx: "react-jsx"`)

## Deployment Flow

1. **Automatic (recommended)**: Push to main → GitHub Actions builds and deploys
2. **Manual**: Run `npm run deploy` → builds and pushes to gh-pages branch

GitHub Pages must be configured to deploy from the `gh-pages` branch (or use GitHub Actions source in repo settings).
