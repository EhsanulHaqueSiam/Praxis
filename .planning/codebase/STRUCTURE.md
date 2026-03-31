# Codebase Structure

**Analysis Date:** 2026-03-31

## Directory Layout

```
ed-tech/
├── apps/
│   ├── web/                    # Marketing site (TanStack Start SSR)
│   │   ├── src/
│   │   │   ├── routes/         # File-based routes (SSR pages)
│   │   │   ├── components/     # Marketing-specific components
│   │   │   │   ├── layout/     # Header, Footer
│   │   │   │   ├── home/       # Homepage sections
│   │   │   │   ├── courses/    # Courses page sections
│   │   │   │   ├── pricing/    # Pricing page sections
│   │   │   │   ├── paths/      # Learning paths page sections
│   │   │   │   ├── community/  # Community page sections
│   │   │   │   └── shared/     # Reusable marketing utilities
│   │   │   ├── hooks/          # Custom React hooks
│   │   │   ├── styles/         # CSS entry point
│   │   │   ├── router.tsx      # Router factory
│   │   │   └── routeTree.gen.ts # Auto-generated (do not edit)
│   │   ├── vite.config.ts      # Vite + TanStack Start + proxy config
│   │   ├── tailwind.config.ts  # Extends @lumina/ui base config
│   │   ├── postcss.config.js
│   │   ├── tsconfig.json
│   │   └── package.json
│   │
│   └── app/                    # Student dashboard (React SPA)
│       ├── src/
│       │   ├── routes/         # File-based routes (SPA)
│       │   │   ├── __root.tsx         # Minimal root layout
│       │   │   ├── _authenticated.tsx # Sidebar + auth guard layout
│       │   │   ├── _authenticated/    # Protected child routes
│       │   │   ├── login.tsx          # Public login page
│       │   │   └── register.tsx       # Public register page
│       │   ├── components/     # App-specific components
│       │   ├── styles/         # CSS entry point
│       │   ├── main.tsx        # SPA entry (ReactDOM.createRoot)
│       │   └── routeTree.gen.ts # Auto-generated (do not edit)
│       ├── index.html          # SPA HTML shell
│       ├── vite.config.ts      # Vite + React + base="/app/"
│       ├── tailwind.config.ts  # Extends @lumina/ui base config
│       ├── postcss.config.js
│       ├── tsconfig.json
│       └── package.json
│
├── packages/
│   └── ui/                     # Shared UI library (@lumina/ui)
│       ├── src/
│       │   ├── components/     # Primitive UI components
│       │   ├── lib/            # Utilities (cn function)
│       │   ├── styles/         # Global CSS + design tokens
│       │   ├── auth.tsx        # AuthProvider + useAuth
│       │   └── index.ts        # Barrel export
│       ├── tailwind.config.ts  # Base Tailwind config (design tokens)
│       ├── tsconfig.json
│       └── package.json
│
├── scripts/
│   └── build-netlify.sh        # Combines both builds for deployment
│
├── dist-netlify/               # Generated deployment output (gitignored)
│
├── package.json                # Root workspace scripts
├── pnpm-workspace.yaml         # Workspace definition
├── turbo.json                  # Turborepo task config
├── tsconfig.base.json          # Shared TypeScript config
├── netlify.toml                # Deployment + redirect rules
└── .gitignore
```

## Directory Purposes

**`apps/web/src/routes/`:**
- Purpose: Marketing site pages, one file per route
- Contains: `__root.tsx` (HTML document shell + layout), `index.tsx` (/), `courses.tsx`, `paths.tsx`, `pricing.tsx`, `community.tsx`
- Key pattern: Each route exports `Route = createFileRoute("/path")({ head, component })`

**`apps/web/src/components/`:**
- Purpose: Marketing-specific presentational components
- Contains: Page-section components organized by page name
- Key files:
  - `layout/Header.tsx` -- Fixed glassmorphism navbar with auth-aware actions
  - `layout/Footer.tsx` -- Newsletter CTA + link grid + social links
  - `home/Hero.tsx` -- Full-viewport hero with particles, word reveal, course preview card
  - `shared/AnimateOnScroll.tsx` -- IntersectionObserver scroll animation wrapper
  - `shared/SpotlightCard.tsx` -- Mouse-follow radial glow card
  - `shared/TiltCard.tsx` -- 3D perspective tilt on hover
  - `shared/MagneticButton.tsx` -- Button that follows cursor within proximity
  - `shared/DarkSection.tsx`, `shared/LightSection.tsx` -- Section wrapper with background effects
  - `shared/SectionHeader.tsx` -- Consistent section title + badge + subtitle

**`apps/web/src/hooks/`:**
- Purpose: Custom hooks for scroll and animation effects
- Contains:
  - `useInView.ts` -- IntersectionObserver wrapper, returns `{ ref, isInView }`
  - `useCountUp.ts` -- Animated number counter with eased interpolation
  - `useScrollProgress.ts` -- Returns `window.scrollY` value reactively
  - `useBlurReveal.ts` -- IntersectionObserver for blur-to-sharp text effect

**`apps/app/src/routes/`:**
- Purpose: Dashboard SPA pages with layout nesting
- Contains:
  - `__root.tsx` -- Minimal wrapper (no Header/Footer -- dashboard has its own shell)
  - `_authenticated.tsx` -- Layout route: sidebar nav + top bar + auth guard
  - `_authenticated/dashboard.tsx` -- Main dashboard with stats, enrolled courses, activity feed
  - `_authenticated/courses.tsx` -- Enrolled + catalog course grid
  - `_authenticated/courses.$courseId.tsx` -- Course detail with curriculum sidebar + video player
  - `_authenticated/settings.tsx` -- Profile, notifications, subscription management
  - `_authenticated/achievements.tsx` -- Badges, certificates, streaks
  - `_authenticated/community.tsx` -- Live channels, feed, link to public hub
  - `login.tsx` -- Public login page (split-panel layout)
  - `register.tsx` -- Public register page (split-panel layout)

**`apps/app/src/components/`:**
- Purpose: Dashboard-specific reusable components
- Contains:
  - `StatCard.tsx` -- Icon + value + label stat card
  - `PageHeader.tsx` -- Page title + optional subtitle + action slot
  - `AppCourseCard.tsx` -- Dual-mode card (enrolled with progress vs. catalog with price)
  - `EmptyState.tsx` -- Icon + title + description + action CTA
  - `SkeletonCard.tsx` -- Loading placeholder card

**`packages/ui/src/components/`:**
- Purpose: Design system primitives shared by both apps
- Contains:
  - `button.tsx` -- CVA button with 5 variants (default, secondary, outline, ghost, link) and 5 sizes
  - `card.tsx` -- Card + CardHeader + CardTitle + CardDescription + CardContent + CardFooter
  - `badge.tsx` -- CVA badge with 4 variants (default, success, outline, muted)
  - `input.tsx` -- Styled input with focus ring
  - `avatar.tsx` -- Image with fallback initial, 4 sizes
  - `toggle.tsx` -- Switch component with 2 sizes
  - `accordion.tsx` -- Native `<details>` accordion with 2 variants (default, cards)
  - `tabs.tsx` -- Tab bar with animated sliding indicator

**`packages/ui/src/styles/`:**
- Purpose: Global CSS with design tokens and 50+ custom utility classes
- Key file: `globals.css` -- Contains CSS custom properties, glass effects, grid backgrounds, glow effects, gradient borders, animations (aurora, shimmer, marquee, float, particle), typography effects (word reveal, blur sharp, text highlight), interaction effects (spotlight, tilt, ripple, magnetic), navigation effects (tab slider, hamburger morph, nav glow), utility classes (kbd, tooltip, masonry, progress bar, skeleton)

**`packages/ui/src/auth.tsx`:**
- Purpose: Authentication context shared between both apps
- Contains: `AuthProvider` component + `useAuth` hook
- Storage key: `praxis-auth` in `localStorage`

## Key File Locations

**Entry Points:**
- `apps/web/src/router.tsx`: Web app router factory
- `apps/web/src/routes/__root.tsx`: Web app HTML document root
- `apps/app/src/main.tsx`: Dashboard SPA entry (ReactDOM.createRoot)
- `apps/app/index.html`: Dashboard HTML shell

**Configuration:**
- `package.json`: Root workspace scripts (dev, build, build:netlify)
- `pnpm-workspace.yaml`: Defines `packages/*` and `apps/*`
- `turbo.json`: Build task dependencies and caching
- `tsconfig.base.json`: Shared TS config (ES2022, react-jsx, strict)
- `netlify.toml`: Deployment config, redirect rules, security headers
- `apps/web/vite.config.ts`: Web Vite config with proxy and TanStack Start plugin
- `apps/app/vite.config.ts`: App Vite config with `base: "/app/"` and React plugin
- `packages/ui/tailwind.config.ts`: Base Tailwind config with design tokens (accent green, violet, fonts, animations)

**Core Logic:**
- `packages/ui/src/auth.tsx`: Authentication provider (localStorage-based)
- `apps/app/src/routes/_authenticated.tsx`: Route guard + dashboard shell layout
- `apps/web/src/components/layout/Header.tsx`: Auth-aware marketing navigation
- `scripts/build-netlify.sh`: Build pipeline combining both apps for deployment

**Styles:**
- `packages/ui/src/styles/globals.css`: Design system CSS (847 lines)
- `apps/web/src/styles/app.css`: Web CSS entry (imports globals + marketing utilities)
- `apps/app/src/styles/app.css`: App CSS entry (imports globals + dashboard utilities)

## Naming Conventions

**Files:**
- Route files: lowercase kebab-case matching URL path (`courses.tsx`, `pricing.tsx`)
- Route layouts: underscore prefix for pathless layouts (`_authenticated.tsx`)
- Route params: dot prefix for dynamic segments (`courses.$courseId.tsx`)
- Components: PascalCase (`Hero.tsx`, `CourseGrid.tsx`, `StatCard.tsx`)
- Hooks: camelCase with `use` prefix (`useInView.ts`, `useCountUp.ts`)
- Config files: lowercase with dots (`vite.config.ts`, `tailwind.config.ts`)

**Directories:**
- Page-specific components: lowercase matching page name (`home/`, `courses/`, `pricing/`)
- Shared components: `shared/` for cross-page components
- Layout components: `layout/` for Header/Footer

**Packages:**
- Workspace packages use `@lumina/` scope: `@lumina/ui`, `@lumina/web`, `@lumina/app`

## Where to Add New Code

**New Marketing Page (e.g., /about):**
1. Create route: `apps/web/src/routes/about.tsx`
2. Create section components: `apps/web/src/components/about/AboutHero.tsx`, etc.
3. Route tree auto-regenerates via `TanStackRouterVite` plugin
4. Add nav link in `apps/web/src/components/layout/Header.tsx` (line 8, `navLinks` array)

**New Dashboard Page (e.g., /notifications):**
1. Create route: `apps/app/src/routes/_authenticated/notifications.tsx`
2. Add sidebar link in `apps/app/src/routes/_authenticated.tsx` (line 28, `sidebarLinks` array)
3. Create app-specific components in `apps/app/src/components/`
4. Route tree auto-regenerates

**New Shared UI Component:**
1. Create component: `packages/ui/src/components/dialog.tsx`
2. Export from barrel: add export line in `packages/ui/src/index.ts`
3. Import in apps as `import { Dialog } from "@lumina/ui"`

**New Custom Hook (Marketing):**
1. Create hook: `apps/web/src/hooks/useParallax.ts`
2. Import in components as `import { useParallax } from "~/hooks/useParallax"`

**New App-Specific Component:**
1. Create component: `apps/app/src/components/NotificationBell.tsx`
2. Import with relative path: `import { NotificationBell } from "../../components/NotificationBell"` or `~/components/NotificationBell`

**New CSS Utility Class:**
- If shared: Add to `packages/ui/src/styles/globals.css` under appropriate `@layer utilities` section
- If web-only: Add to `apps/web/src/styles/app.css`
- If app-only: Add to `apps/app/src/styles/app.css`

**New Tailwind Design Token:**
- Add to `packages/ui/tailwind.config.ts` under `theme.extend`
- Both apps inherit automatically since they spread `...baseConfig`

## Special Directories

**`dist-netlify/`:**
- Purpose: Combined deployment output for Netlify
- Generated: Yes (by `scripts/build-netlify.sh`)
- Committed: No (in `.gitignore`)
- Structure: `app/` (SPA), `assets/` (web client), `_server/` (SSR bundle), `netlify/functions/ssr.mjs`

**`apps/web/src/routeTree.gen.ts` and `apps/app/src/routeTree.gen.ts`:**
- Purpose: Auto-generated route tree from file-based routes
- Generated: Yes (by `@tanstack/router-plugin/vite`)
- Committed: Yes (generated on build/dev start)
- Note: Do not edit manually. Contains `@ts-nocheck` and `eslint-disable`

**`.vinxi/` and `.output/`:**
- Purpose: TanStack Start intermediate build artifacts
- Generated: Yes
- Committed: No (in `.gitignore`)

**`node_modules/`:**
- Hoisted by pnpm at root level
- Committed: No

## Proxy & Deployment Topology

**Development (local):**
```
Browser
  ├── localhost:3000/*         → apps/web (TanStack Start dev server)
  └── localhost:3000/app/*     → Vite proxy → localhost:3001/app/* (apps/app dev server)
```
- Web dev server: port 3000 (`apps/web/vite.config.ts` line 7)
- App dev server: port 3001 (`apps/app/vite.config.ts` line 9)
- Proxy: `apps/web/vite.config.ts` lines 8-13 proxies `/app` to `:3001`

**Production (Netlify):**
```
CDN (dist-netlify/)
  ├── /app/assets/*            → Static files (200 passthrough)
  ├── /app/*                   → /app/index.html (SPA fallback, 200)
  ├── /assets/*                → Static files (200 passthrough)
  └── /*                       → /.netlify/functions/ssr (SSR, 200)
```
- Redirect rules: `netlify.toml` lines 9-29
- Security headers: X-Frame-Options DENY, X-Content-Type-Options nosniff, Referrer-Policy strict-origin
- Cache: Immutable assets cached for 1 year (`max-age=31536000, immutable`)

---

*Structure analysis: 2026-03-31*
