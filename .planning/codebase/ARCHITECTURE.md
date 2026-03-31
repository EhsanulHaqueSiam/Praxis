# Architecture

**Analysis Date:** 2026-03-31

## Pattern Overview

**Overall:** Dual-app monorepo with shared UI package. A TanStack Start SSR marketing site and a React SPA student dashboard are served under one domain via Vite proxy (dev) and Netlify redirects (prod).

**Key Characteristics:**
- Two independent React apps (`apps/web`, `apps/app`) sharing a UI library (`packages/ui`)
- Marketing site uses TanStack Start for SSR (SEO); dashboard is a client-only SPA
- Auth is shared across both apps via `localStorage` through a common `AuthProvider` in `packages/ui`
- No backend API -- all data is hardcoded/demo; frontend-only architecture
- pnpm workspaces + Turborepo for build orchestration

## Layers

**Shared UI Layer (packages/ui):**
- Purpose: Design system primitives, auth context, design tokens, and global CSS
- Location: `packages/ui/src/`
- Contains: Button, Card, Badge, Input, Avatar, Toggle, Accordion, Tabs components; `AuthProvider`/`useAuth` hook; `cn()` utility; Tailwind config with design tokens; global CSS with 50+ utility classes
- Depends on: `class-variance-authority`, `clsx`, `tailwind-merge`, `@phosphor-icons/react`
- Used by: Both `apps/web` and `apps/app`

**Marketing Site (apps/web):**
- Purpose: Public-facing SEO-optimized marketing pages
- Location: `apps/web/src/`
- Contains: SSR route pages, marketing section components, scroll/animation hooks, layout shell (Header/Footer)
- Depends on: `@lumina/ui`, `@tanstack/react-start`, `@tanstack/react-router`, `@phosphor-icons/react`
- Used by: End users visiting `/`, `/courses`, `/paths`, `/pricing`, `/community`

**Dashboard App (apps/app):**
- Purpose: Authenticated student workspace for course management and progress tracking
- Location: `apps/app/src/`
- Contains: SPA route pages, app-specific components, authenticated layout with sidebar
- Depends on: `@lumina/ui`, `@tanstack/react-router`, `@vitejs/plugin-react`, `@phosphor-icons/react`
- Used by: Logged-in users at `/app/dashboard`, `/app/courses`, `/app/settings`, etc.

## Data Flow

**Authentication Flow:**

1. User clicks "Sign In" or "Start Building" on marketing site -- links to `/app/login` or `/app/register`
2. Login/register pages live in `apps/app/src/routes/login.tsx` and `apps/app/src/routes/register.tsx`
3. On submit, `useAuth().login(user)` stores user JSON in `localStorage` under key `praxis-auth` (see `packages/ui/src/auth.tsx`)
4. `AuthProvider` (wrapping both apps) reads `localStorage` on mount via `useEffect`
5. After login, user is redirected to `/dashboard` (via TanStack Router `navigate`) or to a redirect path via `window.location.href`
6. Marketing site Header (`apps/web/src/components/layout/Header.tsx`) reads `useAuth().isLoggedIn` to toggle between "Sign In"/"Start Building" buttons vs. "Dashboard"/avatar

**Route Guard Flow (Dashboard):**

1. `_authenticated.tsx` layout route wraps all protected pages
2. On mount, `useEffect` checks `isLoggedIn` from `useAuth()`
3. If not logged in, redirects to `/login?redirect={currentPath}` via `navigate()`
4. If at root `/`, redirects to `/dashboard` via `<Navigate to="/dashboard" replace />`
5. Renders sidebar + top bar + `<Outlet />` for child routes

**Cross-App Navigation:**

1. Marketing site links to dashboard via raw `<a href="/app/dashboard">` (not TanStack `<Link>`)
2. Dashboard links back to marketing via raw `<a href="/">` and `<a href="/courses">`
3. In dev: Vite proxy in `apps/web/vite.config.ts` forwards `/app/*` to `http://localhost:3001`
4. In prod: Netlify redirects route `/app/*` to static SPA files, everything else to SSR function

**State Management:**
- No global state library. React `useState` only.
- Auth state: `AuthProvider` context backed by `localStorage` (`packages/ui/src/auth.tsx`)
- All course data, user profiles, activity feeds are hardcoded inline in route components
- No API calls, no data fetching layer

## Key Abstractions

**AuthProvider / useAuth:**
- Purpose: Shared authentication context across both apps
- Location: `packages/ui/src/auth.tsx`
- Pattern: React Context + localStorage. Stores `{ name, email, avatar }` under `praxis-auth` key
- Both apps wrap their root in `<AuthProvider>`:
  - Web: `apps/web/src/routes/__root.tsx` line 87
  - App: `apps/app/src/main.tsx` line 22

**File-Based Routing (TanStack Router):**
- Purpose: Route definitions via filesystem convention
- Web routes: `apps/web/src/routes/` -- flat file routes (`index.tsx`, `courses.tsx`, `pricing.tsx`, `paths.tsx`, `community.tsx`)
- App routes: `apps/app/src/routes/` -- layout routes (`_authenticated.tsx`) with nested children (`_authenticated/dashboard.tsx`, etc.)
- Generated route trees: `apps/web/src/routeTree.gen.ts`, `apps/app/src/routeTree.gen.ts` (auto-generated, do not edit)
- Plugin: `@tanstack/router-plugin/vite` (`TanStackRouterVite`) in both Vite configs

**Section/Layout Components (Marketing):**
- Purpose: Composable section wrappers for marketing pages
- Examples: `apps/web/src/components/shared/DarkSection.tsx`, `apps/web/src/components/shared/LightSection.tsx`, `apps/web/src/components/shared/SectionHeader.tsx`
- Pattern: Wrapper components that apply background effects (grid, glow, crosshatch) and constrain content to `max-w-7xl`

**CVA-Based Component Variants (UI Library):**
- Purpose: Type-safe component variants using `class-variance-authority`
- Examples: `packages/ui/src/components/button.tsx` (5 variants, 5 sizes), `packages/ui/src/components/badge.tsx` (4 variants)
- Pattern: `cva()` defines base + variant classes, `cn()` merges with overrides

## Entry Points

**Marketing Site (SSR):**
- Router: `apps/web/src/router.tsx` -- creates TanStack Router with scroll restoration
- Root layout: `apps/web/src/routes/__root.tsx` -- full HTML document with `<head>`, meta tags, font loading, AuthProvider wrapping, Header/Footer shell
- Build: `@tanstack/react-start/plugin/vite` (`tanstackStart()`) generates server + client bundles
- SSR function: `scripts/build-netlify.sh` creates `dist-netlify/netlify/functions/ssr.mjs` wrapping the server entry

**Dashboard App (SPA):**
- Entry: `apps/app/src/main.tsx` -- ReactDOM client render with `basepath: "/app"`
- HTML shell: `apps/app/index.html` -- includes `noindex` meta, fonts, `<div id="root">`
- Root layout: `apps/app/src/routes/__root.tsx` -- minimal div wrapper
- Auth layout: `apps/app/src/routes/_authenticated.tsx` -- sidebar, top bar, route guard

**Build Pipeline:**
- Orchestrator: `scripts/build-netlify.sh`
- Step 1: Build app SPA (`pnpm --filter @lumina/app build`) -- outputs to `apps/app/dist/`
- Step 2: Build web SSR (`pnpm --filter @lumina/web build`) -- outputs client to `apps/web/dist/client/`, server to `apps/web/dist/server/`
- Step 3: Combine into `dist-netlify/` -- web client assets at root, app SPA at `/app/`, SSR function at `netlify/functions/ssr.mjs`, server bundle at `_server/`

## Error Handling

**Strategy:** Minimal. No error boundaries defined. No try/catch in components.

**Patterns:**
- Auth state read from localStorage wrapped in `try/catch` with empty catch: `packages/ui/src/auth.tsx` line 29-32
- SSR function has top-level try/catch returning 500: `scripts/build-netlify.sh` line 33-36
- Avatar has image error fallback via `onError` state: `packages/ui/src/components/avatar.tsx` line 20
- Login redirect validation prevents open redirect: `apps/app/src/routes/login.tsx` lines 14-23

## Cross-Cutting Concerns

**Logging:** None. No logging framework. `console.error` in SSR function only.

**Validation:** Minimal. Login search params validated for safe redirects (`startsWith("/")` and not `startsWith("//")`). No form validation library. No input validation on register form.

**Authentication:** Client-side only via `localStorage`. No server-side session, no JWT, no token refresh. Shared between apps through same-origin `localStorage` access. User object: `{ name: string, email: string, avatar: string }`.

**SEO:** Marketing site uses TanStack Start SSR with per-route `head()` functions setting `<title>` and `<meta description>`. JSON-LD schema on root. Dashboard has `<meta name="robots" content="noindex, nofollow">`.

**Styling:** Tailwind CSS v3 with shared config from `packages/ui/tailwind.config.ts`. Both apps extend the base config and include UI package source in content paths. Global CSS in `packages/ui/src/styles/globals.css` provides 50+ custom utility classes. Apps import via `@import "@lumina/ui/globals.css"` in their own `app.css`.

**Fonts:** Outfit (display/body) + JetBrains Mono (mono). Loaded from Google Fonts in both `__root.tsx` (web) and `index.html` (app).

**Animations:** Extensive CSS animation system in `packages/ui/src/styles/globals.css` -- aurora backgrounds, particle floats, shimmer sweeps, word reveals, blur-to-sharp transitions. Scroll-triggered animations via `useInView` hook and `AnimateOnScroll` wrapper. `prefers-reduced-motion` respected in base layer.

---

*Architecture analysis: 2026-03-31*
