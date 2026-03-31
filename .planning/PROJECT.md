# Praxis — Course-Selling Ed-Tech Platform

## Vision
A premium course-selling platform for university CSE students, built as two websites sandwiched so seamlessly no one notices they're separate. Linear.app-inspired dark aesthetic with 50+ Framer premium components.

## Target Audience
- **Primary**: University CSE students (specifically AIUB — American International University Bangladesh)
- **Courses**: Based on AIUB Faculty of Science & Technology undergraduate course catalog (https://www.aiub.edu/faculties/fst/ug-course-catalog)
- **Market**: Bangladesh — local payment via SSLCommerz (supports all BD banks/mobile wallets)

## Architecture — The Sandwich
Two apps that feel like one site:

### praxis.com (apps/web) — Marketing Site
- TanStack Start SSR — content renders without JS for SEO bots
- Course catalog, pricing, testimonials, community pages
- Animations/interactions are progressive enhancement (JS-only)
- All text, headings, course descriptions in semantic HTML
- Advanced SEO: structured data, OG tags, sitemap

### app.praxis.com (apps/app) — Student Dashboard
- Secure SPA — Cloudflare bot protection planned
- Course enrollment, video player (DRM-protected), progress tracking
- Payment via SSLCommerz (future milestone)
- Protected routes, real auth (future milestone — currently mock localStorage)

### packages/ui — Shared Design System
- Auth context (AuthProvider/useAuth) shared via localStorage
- Button, Card, Badge, Input, Avatar, Toggle, Accordion, Tabs
- 50+ premium CSS utilities: spotlight cards, tilt effects, gradient borders, aurora backgrounds
- Design tokens: zinc-950 dark theme, accent green, glass effects

## Monetization
- **Current**: No payment system (mock only)
- **Planned**: SSLCommerz integration for Bangladesh market
- **Model**: Course purchases (individual) + potential subscription tier
- **Student discount**: 40% off with .edu email

## Course Content Strategy
- **Format**: Video lessons (primary) with DRM protection
- **Security**: No download, no screen record, no screen share, email watermark floating over video
- **Supporting**: Resource sharing, Q&A, quizzes
- **Current state**: Mock content (placeholders)

## Constant Rules
1. Use `/frontend-design` for ALL design work — Linear.app aesthetic
2. Use `/agent-browser` for verification — screenshot and verify every change
3. Adapt Framer marketplace components (https://www.framer.com/marketplace/components/category/) for the site
4. Marketing site content MUST work with JS disabled (SSR, semantic HTML)
5. Two sites MUST feel like ONE — seamless navigation, shared auth, consistent design
6. Dark theme everywhere — zinc-950, accent green, glass, gradient text

## Tech Stack
- React 19, TanStack Router/Start, Vite 8, Tailwind 3.4
- Phosphor Icons, CVA (class-variance-authority)
- pnpm monorepo, Netlify deployment
- No backend yet (localStorage mock auth)

## Current State (as of 2026-03-31)
- 60+ components across web + app + UI library
- Full dark theme with 50+ premium polish effects
- Auth context sharing between web ↔ app via localStorage
- Vite proxy: /app/* routes to dashboard SPA
- Netlify deployment configured
- Codebase map: .planning/codebase/ (7 documents, 1,601 lines)
- Repo: github.com/EhsanulHaqueSiam/Praxis (public)
- Phase 1 complete: 51 real AIUB CSE courses, shared data module, JSON-LD Course schema, all "217" placeholders replaced
