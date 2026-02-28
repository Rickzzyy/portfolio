# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run lint     # ESLint
npm start        # Run production build
```

No test framework is configured.

## Architecture

Single-page Next.js 16 portfolio (App Router, React 19, TypeScript strict mode). The entire site is one route (`/`) composed of section components rendered in `src/app/page.tsx`.

### Key directories

- `src/components/` — Section components (nav, hero, about, experience, projects, skills, contact, footer), each self-contained with Framer Motion animations
- `src/data/` — Static content as typed arrays with interfaces (experience, projects, skills, socials). Edit these to update portfolio content.
- `src/lib/animations.ts` — Shared Framer Motion variants (`fadeInUp`, `fadeIn`, `staggerContainer`, `scaleIn`) used across components with `whileInView`

### Styling

- **Tailwind CSS v4** with CSS-first config via `@theme` block in `src/app/globals.css`
- Custom color tokens: `bg`, `bg-secondary`, `bg-card`, `border`, `text`, `text-secondary`, `accent`, `accent-hover` — use these in Tailwind classes (e.g., `text-text`, `bg-bg-card`, `border-border`)
- Fonts: Inter (sans) and JetBrains Mono (mono), loaded via Google Fonts in `layout.tsx`
- Dark theme only, no light mode

### Patterns

- All interactive components use `"use client"` directive
- Path alias: `@/*` maps to `./src/*`
- Components use named exports
- Animations: wrap content in `motion.div` with `variants` from `lib/animations.ts`, trigger with `whileInView` and `viewport={{ once: true, margin: "-100px" }}`
