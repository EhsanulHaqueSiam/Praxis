# Technology Stack

**Analysis Date:** 2026-03-31

## Languages

**Primary:**
- TypeScript 5.9.3 - All application and package code (`apps/web/`, `apps/app/`, `packages/ui/`)

**Secondary:**
- CSS - Custom utility classes and design tokens via Tailwind (`packages/ui/src/styles/globals.css`)
- Bash - Netlify build orchestration script (`scripts/build-netlify.sh`)

## Runtime

**Environment:**
- Node.js >= 20 (enforced in `package.json` engines, pinned to `20` in `netlify.toml` via `NODE_VERSION`)

**Package Manager:**
- pnpm >= 9 (enforced in `package.json` engines)
- Lockfile: `pnpm-lock.yaml` present (lockfileVersion 9.0)
- Workspace config: `pnpm-workspace.yaml` defines `packages/*` and `apps/*`

## Monorepo Structure

**Orchestrator:**
- Turborepo (`turbo.json`) - manages build/dev/lint/typecheck tasks
- Tasks: `build` (depends on `^build`, outputs `dist/**`, `.output/**`), `dev` (no cache, persistent), `lint`, `typecheck`

**Workspaces:**
| Package | Name | Purpose |
|---------|------|---------|
| `apps/web` | `@lumina/web` | Marketing site (SSR via TanStack Start) |
| `apps/app` | `@lumina/app` | Student dashboard SPA (Vite + React) |
| `packages/ui` | `@lumina/ui` | Shared UI components, design tokens, auth context |

## Frameworks

**Core:**
- React 19.2.4 - UI rendering across both apps
- TanStack Start 1.167.14 - SSR framework for marketing site (`apps/web`)
- TanStack Router 1.168.8 - File-based routing in both apps
- Vite 8.0.3 - Build tool for both apps

**UI/Styling:**
- Tailwind CSS 3.4.19 - Utility-first CSS framework
- PostCSS 8.5.8 + Autoprefixer 10.4.27 - CSS processing pipeline
- class-variance-authority 0.7.1 - Component variant system (`packages/ui/src/components/button.tsx`)
- clsx 2.1.1 + tailwind-merge 2.6.0 - Conditional class merging via `cn()` utility (`packages/ui/src/lib/utils.ts`)

**Build/Dev:**
- `@tanstack/router-plugin` 1.167.10 - Vite plugin for file-based route generation
- `@vitejs/plugin-react` 6.0.1 - React Fast Refresh for the SPA app only (`apps/app`)
- esbuild 0.27.4 - Underlying JS bundler (via Vite)

## Key Dependencies

**Critical:**
- `@phosphor-icons/react` 2.1.10 - Icon library used across all packages (duotone weight preferred)
- `@lumina/ui` (workspace link) - Shared component library consumed by both apps

**UI Components (from `@lumina/ui`):**
- Button (with CVA variants: default, secondary, outline, ghost, link)
- Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent
- Input, Badge, Avatar, Toggle, Accordion, Tabs
- `cn()` utility for class merging
- `AuthProvider` / `useAuth` - Shared auth context

## TypeScript Configuration

**Base config:** `tsconfig.base.json`
- Target: ES2022
- Module: ESNext with bundler resolution
- JSX: react-jsx
- Strict mode enabled
- Lib: ES2022, DOM, DOM.Iterable
- `noEmit: true`, `isolatedModules: true`

**Path aliases:**
- `apps/web`: `~/*` maps to `./src/*`
- `apps/app`: `~/*` maps to `./src/*`
- `packages/ui`: `@/*` maps to `./src/*`

## CSS & Design System

**Architecture:**
- Base design tokens defined in `packages/ui/src/styles/globals.css` (CSS custom properties)
- Both apps import globals via `@import "@lumina/ui/globals.css"`
- Each app adds its own `@layer components` overrides (`apps/web/src/styles/app.css`, `apps/app/src/styles/app.css`)
- Tailwind config cascades: `packages/ui/tailwind.config.ts` (base) -> spread into app-level configs

**Theme:**
- Dark-mode-first design (zinc-950 backgrounds, zinc-100 foreground)
- `darkMode: "class"` in Tailwind config
- Custom color scales: `accent` (green, primary brand), `violet` (secondary)
- CSS variables use space-separated RGB values (e.g., `--accent: 56 165 113`)

**Custom Utilities (50+ in globals.css):**
- Glass morphism: `.glass`, `.glass-dark`
- Background textures: `.bg-grid`, `.bg-grid-dark`, `.bg-topo`, `.bg-crosshatch`
- Glow effects: `.glow-green`, `.glow-purple`, `.glow-dual`, `.glow-accent`
- Gradient text: `.gradient-text`, `.gradient-text-accent`
- Animations: `.spotlight-card`, `.gradient-border`, `.radiance`, `.aurora-bg`, `.particle`
- Interaction: `.btn-shimmer`, `.btn-ripple`, `.hover-lift`, `.border-glow`, `.nav-glow`
- Typography: `.text-reveal`, `.blur-sharp`, `.word-reveal`, `.gradient-hover`, `.text-highlight-hover`
- Layout: `.masonry-grid`, `.sticky-card`, `.flip-card`, `.scrollbar-hide`
- Forms: `.floating-label`
- Data: `.progress-bar`, `.progress-bar-fill`, `.skeleton`, `.progress-animated`
- Navigation: `.hamburger` (morph animation), `.tabs-slider`, `.scroll-cue`
- Polish: `.grain-overlay`, `.bg-noise`, `.gradient-divider`, `.play-pulse`, `.kbd`
- Stagger cascade: `.stagger-1` through `.stagger-6` (80ms increments)
- Hover reveal overlay for cards
- Tooltip system (`.tooltip-wrap` + `.tooltip-content`)

**Animations (Tailwind extend):**
- `fade-in`, `fade-up`, `slide-left`, `slide-right` (cubic-bezier 0.16, 1, 0.3, 1)
- `float` (5s infinite), `shimmer`, `marquee`, `marquee-reverse`
- `glow-pulse` (3s), `gradient-x` (6s)

**Easing:** Consistently uses `cubic-bezier(0.23, 1, 0.32, 1)` for interactions, `cubic-bezier(0.16, 1, 0.3, 1)` for entrances.

## Fonts

**Loading strategy:** Google Fonts via `<link>` tags
- Loaded in `apps/web/src/routes/__root.tsx` (SSR head) and `apps/app/index.html` (static HTML)
- `preconnect` to `fonts.googleapis.com` and `fonts.gstatic.com`

**Font families:**
- **Outfit** (wght 300-900) - Display and body text (`font-display`, `font-body` in Tailwind config)
- **JetBrains Mono** (wght 400, 500) - Code, stats, mono elements (`font-mono`)

**Tailwind mapping:**
```
fontFamily: {
  display: ['"Outfit"', "system-ui", "sans-serif"],
  body: ['"Outfit"', "system-ui", "sans-serif"],
  mono: ['"JetBrains Mono"', "monospace"],
}
```

## Routing

**Marketing site (`apps/web`):**
- TanStack Router with file-based routes in `apps/web/src/routes/`
- Auto-generated route tree: `apps/web/src/routeTree.gen.ts`
- `autoCodeSplitting: false` (all routes bundled together)
- Scroll restoration enabled
- Routes: `/` (home), `/courses`, `/paths`, `/community`, `/pricing`

**Dashboard app (`apps/app`):**
- TanStack Router with file-based routes in `apps/app/src/routes/`
- Auto-generated route tree: `apps/app/src/routeTree.gen.ts`
- `autoCodeSplitting: true` (lazy-loaded routes)
- Base path: `/app/`
- Layout route: `_authenticated.tsx` (sidebar + topbar chrome with auth guard)
- Routes: `/login`, `/register`, `/_authenticated/dashboard`, `/_authenticated/courses`, `/_authenticated/courses.$courseId`, `/_authenticated/achievements`, `/_authenticated/community`, `/_authenticated/settings`

**Cross-app navigation:**
- Marketing -> Dashboard: plain `<a href="/app/dashboard">` (full page nav, not SPA)
- Dashboard -> Marketing: plain `<a href="/">` or `<a href="/courses">`
- Login redirect: `window.location.href = /app${redirectPath}`

## Custom Hooks (Marketing Site)

- `useInView` (`apps/web/src/hooks/useInView.ts`) - IntersectionObserver wrapper for scroll-triggered animations
- `useCountUp` (`apps/web/src/hooks/useCountUp.ts`) - Animated number counter with ease-out cubic
- `useScrollProgress` (`apps/web/src/hooks/useScrollProgress.ts`) - Tracks `window.scrollY`
- `useBlurReveal` (`apps/web/src/hooks/useBlurReveal.ts`) - IntersectionObserver for blur-to-sharp text reveal

## Build & Deployment

**Development:**
```bash
pnpm dev           # Both apps in parallel (web:3000, app:3001)
pnpm dev:web       # Marketing site only (port 3000)
pnpm dev:app       # Dashboard only (port 3001)
```
- Dev proxy: `apps/web` proxies `/app` to `http://localhost:3001` for unified dev experience

**Production build:**
```bash
pnpm build:netlify  # Runs scripts/build-netlify.sh
```

**Build pipeline (`scripts/build-netlify.sh`):**
1. Build SPA: `pnpm --filter @lumina/app build` -> `apps/app/dist/`
2. Build SSR: `pnpm --filter @lumina/web build` -> `apps/web/dist/client/` + `apps/web/dist/server/`
3. Assemble `dist-netlify/`:
   - Static client assets -> `dist-netlify/`
   - SPA files -> `dist-netlify/app/`
   - Server bundle -> `dist-netlify/_server/`
   - SSR Netlify Function -> `dist-netlify/netlify/functions/ssr.mjs`

**Netlify config (`netlify.toml`):**
- Publish dir: `dist-netlify`
- SSR via Netlify Functions: `/.netlify/functions/ssr` catches all non-static routes
- SPA fallback: `/app/*` -> `/app/index.html` (status 200)
- Asset redirects: `/assets/*` and `/app/assets/*` served directly
- Immutable caching on assets (1 year, `max-age=31536000`)
- Security headers: X-Frame-Options DENY, X-Content-Type-Options nosniff, strict referrer, permissions policy

## Platform Requirements

**Development:**
- Node.js >= 20
- pnpm >= 9
- No additional services required (all data is hardcoded/static)

**Production:**
- Netlify (Functions for SSR, CDN for static assets)
- No database, no backend API, no external auth provider

---

*Stack analysis: 2026-03-31*
