# Coding Conventions

**Analysis Date:** 2026-03-31

## Naming Patterns

**Files:**
- UI primitives (shared package): `kebab-case.tsx` -- `button.tsx`, `card.tsx`, `badge.tsx`, `accordion.tsx`
- Feature components: `PascalCase.tsx` -- `Hero.tsx`, `FeaturedCourses.tsx`, `CourseCard.tsx`
- Hooks: `camelCase.ts` with `use` prefix -- `useInView.ts`, `useCountUp.ts`, `useScrollProgress.ts`
- Utilities: `camelCase.ts` -- `utils.ts`
- Routes: follow TanStack Router file-based convention -- `index.tsx`, `courses.tsx`, `_authenticated.tsx`, `courses.$courseId.tsx`
- CSS files: `kebab-case.css` -- `app.css`, `globals.css`
- Config files: `kebab-case` or standard names -- `tailwind.config.ts`, `vite.config.ts`, `tsconfig.json`

**Functions:**
- Components: `PascalCase` named exports -- `export function Hero()`, `export function SpotlightCard()`
- Hooks: `camelCase` with `use` prefix -- `export function useInView()`, `export function useCountUp()`
- Utility functions: `camelCase` -- `export function cn()`
- Event handlers inside components: `camelCase` with `handle` or `on` prefix -- `handleMouseMove`, `handleMouseLeave`, `onScroll`

**Variables:**
- Constants outside components: `camelCase` -- `const topCourses = [...]`, `const navLinks = [...]`
- CSS class constants: `camelCase` -- `const sizeClasses = {...}`
- Configuration maps: `camelCase` -- `const darkIconBgMap: Record<string, string>`
- Boolean state: descriptive names -- `const [visible, setVisible]`, `const [mobileOpen, setMobileOpen]`

**Types/Interfaces:**
- Use `interface` for component props, suffixed with `Props` -- `ButtonProps`, `SpotlightCardProps`, `CourseCardProps`
- Use `interface` for data shapes -- `interface User`, `interface AccordionItem`
- Export types alongside their components -- `export type { ButtonProps, BadgeProps }`
- Variant types use CVA's `VariantProps` -- `VariantProps<typeof buttonVariants>`

## Code Style

**Formatting:**
- No formatter configured (no Prettier, no Biome). Follow existing style manually.
- 2-space indentation throughout
- Double quotes for JSX attributes and string literals in most files
- Semicolons used consistently
- Trailing commas in multi-line arrays/objects

**Linting:**
- No ESLint configured. TypeScript strict mode (`strict: true` in `tsconfig.base.json`) is the primary safety net.
- Turbo.json defines a `lint` task but no linter is installed.

**TypeScript Strictness:**
- `strict: true` enabled in `tsconfig.base.json`
- `isolatedModules: true` -- all files must be valid modules
- `forceConsistentCasingInFileNames: true`
- Target: `ES2022` with `DOM` and `DOM.Iterable` libs
- Module resolution: `bundler`

## Import Organization

**Order (observed pattern):**
1. React/framework imports -- `import { useState, useEffect } from "react"`
2. Router imports -- `import { createFileRoute, Link } from "@tanstack/react-router"`
3. Shared UI package -- `import { Button, Badge } from "@lumina/ui"`
4. Icon library -- `import { ArrowRight, Star } from "@phosphor-icons/react"`
5. Local components -- `import { SpotlightCard } from "~/components/shared/SpotlightCard"`
6. Local hooks -- `import { useInView } from "~/hooks/useInView"`
7. Local styles -- `import appCss from "~/styles/app.css?url"`

**Path Aliases:**
- `~/` maps to `./src/` in both `apps/web` and `apps/app` (configured in `tsconfig.json` under `paths`)
- `@lumina/ui` resolves to `packages/ui` via pnpm workspace (imported as bare specifier)
- `@lumina/ui/globals.css` and `@lumina/ui/tailwind.config` are explicit package exports in `packages/ui/package.json`
- UI package internally uses `@/*` alias: `@/*` -> `./src/*` (defined in `packages/ui/tsconfig.json`)

## Component Architecture

**UI Primitives (`packages/ui/src/components/`):**
- Use `React.forwardRef` for DOM-wrapping components (Button, Card, Input)
- Set `displayName` on all forwardRef components
- Accept `className` prop and merge with `cn()` utility
- Use CVA (class-variance-authority) for variant-based styling
- Export component + variants + types together:
  ```tsx
  export { Button, buttonVariants };
  export type { ButtonProps };
  ```

**Feature Components (`apps/web/src/components/`, `apps/app/src/components/`):**
- Regular function components (no forwardRef needed)
- Named exports, not default exports -- `export function Hero()`
- Inline interfaces above the component (not in separate type files)
- Static data (courses, testimonials, etc.) defined as `const` arrays above the component
- Each file exports one primary component

**Interactive Effect Components (`apps/web/src/components/shared/`):**
- Wrap children pattern -- `SpotlightCard`, `TiltCard`, `MagneticButton`, `AnimateOnScroll`
- Use `useRef` + mouse event handlers for DOM manipulation
- Set CSS custom properties via `element.style.setProperty()` for mouse-follow effects
- Compose CSS utility classes from `globals.css` with component logic

**Section Layout Components:**
- `DarkSection` and `LightSection` provide standard section wrappers with glow variants
- Accept `glow` prop for background effect selection (`"green" | "purple" | "dual" | "none"`)
- All sections: `relative` positioning + absolute inset background layers + `z-10` content wrapper

## CSS Approach

**Strategy:** Tailwind 3.4 utility-first + custom CSS utilities in `globals.css` + CVA for component variants.

**Tailwind Configuration:**
- Base config in `packages/ui/tailwind.config.ts`; apps spread-extend it
- `darkMode: "class"` (but entire site is dark-only in practice)
- Custom color scale: `accent` (green) with full 50-950 range, `violet` secondary
- Custom font families: `font-display`, `font-body` (both Outfit), `font-mono` (JetBrains Mono)
- Custom animations: `fade-in`, `fade-up`, `slide-left`, `slide-right`, `float`, `shimmer`, `marquee`, `glow-pulse`, `gradient-x`
- Custom shadows: `diffuse`, `diffuse-lg`, `glow-sm`, `glow-md`, `glow-accent`
- Easing: `cubic-bezier(0.23, 1, 0.32, 1)` used universally (applied via `ease-[...]` or inline styles)

**CSS Custom Properties (globals.css `@layer base`):**
- Color tokens as RGB triplets (no alpha) -- `--background: 9 9 11`, `--accent: 56 165 113`
- Used as `rgb(var(--background))` allowing alpha composition
- `--radius: 0.75rem` base border radius

**Custom Utility Classes (globals.css `@layer utilities`):**

| Category | Classes | Purpose |
|----------|---------|---------|
| Glass effects | `.glass`, `.glass-dark` | Frosted glass with backdrop-blur |
| Background textures | `.bg-grid`, `.bg-grid-dark`, `.bg-crosshatch` | Dot grid, crosshatch overlays |
| Topographic | `.bg-topo`, `.bg-topo-dark` | Concentric ellipse contour lines |
| Glow overlays | `.glow-green`, `.glow-purple`, `.glow-dual`, `.bg-glow-tl`, `.bg-glow-br`, `.bg-glow-center-dark` | Radial gradient color washes |
| Gradient text | `.gradient-text`, `.gradient-text-accent` | Gradient-clipped text |
| Border effects | `.border-glow`, `.gradient-border` | Hover glow borders, rotating conic gradient borders |
| Card polish | `.spotlight-card`, `.card-highlight`, `.hover-reveal-overlay` | Mouse-follow spotlight, top highlight line, hover overlay |
| Button effects | `.btn-shimmer`, `.btn-ripple` | Sweep shine on hover, click ripple |
| Animation | `.radiance`, `.aurora-bg`, `.particle`, `.scroll-cue`, `.word-reveal` | Shifting glow, aurora mesh, floating dots, text reveals |
| Typography | `.text-reveal`, `.blur-sharp`, `.gradient-hover`, `.text-highlight-hover` | Clip-path wipe, blur-to-sharp, gradient flow, underline highlight |
| Navigation | `.nav-glow`, `.hamburger`, `.tabs-slider` | Glow underline, morph hamburger, sliding tab indicator |
| Layout | `.masonry-grid`, `.sticky-card`, `.flip-card` | CSS columns masonry, sticky stack, 3D flip |
| Forms | `.floating-label` | Animated floating label input |
| Data | `.progress-bar`, `.progress-bar-fill`, `.progress-animated`, `.skeleton` | Progress indicators, shimmer loading |
| Misc | `.stagger-1` through `.stagger-6`, `.scrollbar-hide`, `.bg-noise`, `.grain-overlay`, `.kbd`, `.tooltip-wrap`, `.play-pulse`, `.gradient-divider`, `.hover-lift`, `.glow-accent` | Cascade delays, noise textures, keyboard badges, tooltips |

**How to apply premium effects:**
- Spotlight card: wrap content in `<SpotlightCard>` component (sets CSS vars on mousemove)
- Tilt card: wrap in `<TiltCard intensity={N}>` component
- Magnetic button: wrap in `<MagneticButton strength={N}>` component
- Scroll reveal: wrap in `<AnimateOnScroll delay={ms}>` component
- Section background: stack absolute divs with utility classes -- `bg-grid-dark`, `bg-topo-dark`, `radiance`, `aurora-bg`

## Icon Library

**Library:** `@phosphor-icons/react` v2.1.10 (installed in all three packages)

**Usage Pattern:**
```tsx
import { ArrowRight, Star, Clock } from "@phosphor-icons/react";

// Standard usage:
<Star size={14} weight="fill" className="text-accent-400" />
<ArrowRight size={16} className="transition-transform duration-150 group-hover:translate-x-1" />

// Dynamic icon components (pass as prop):
interface Props {
  icon: React.ElementType;
  iconColor: string;
}
function Card({ icon: Icon, iconColor }: Props) {
  return <Icon size={20} weight="duotone" className={iconColor} />;
}
```

**Icon weights used:**
- `"fill"` -- for emphasis/active states (stars, checkmarks, logos)
- `"duotone"` -- for feature icons, sidebar icons, decorative icons (most common)
- `"bold"` -- for small UI controls (carets, close buttons)
- Default (regular) -- for inline metadata icons

**Icon sizing convention:**
- 12px: inline metadata (Clock, Users alongside text)
- 14px: badges, small buttons
- 16-20px: standard UI icons
- 24-28px: feature card icons, logo
- 36px: large decorative icons (course card thumbnails)

## Font Strategy

**Fonts loaded via Google Fonts CDN** in `apps/web/src/routes/__root.tsx`:
- **Outfit** (weights 300-900): primary font for headings (`font-display`) and body (`font-body`)
- **JetBrains Mono** (weights 400, 500): code, data, monospace elements (`font-mono`)

**Preconnect hints** are set for `fonts.googleapis.com` and `fonts.gstatic.com`.

**Application pattern:**
- Headings: `font-display font-bold` (always bold weight)
- Body text: `font-body` (implicit from html rule)
- Data/stats/prices: `font-mono font-bold`
- Code snippets: `font-mono text-xs`
- Badges/labels: `font-mono text-xs tracking-wider uppercase`

## Error Handling

**Patterns:**
- Auth: `try/catch` with empty catch for localStorage parse errors in `packages/ui/src/auth.tsx`
- No global error boundary detected
- No toast/notification system for user-facing errors
- Form validation: not implemented (demo app with hardcoded data)

## Logging

**Framework:** No logging framework. `console` only (SSR function uses `console.error`).

## Comments

**When to Comment:**
- Section separators within large components: `{/* Left -- Text */}`, `{/* Course thumbnail */}`
- Phase markers in CSS: `/* ===== PREMIUM POLISH ===== */`, `/* ===== PHASE 2 POLISH ===== */`
- CSS utility explanations: `/* Glass -- refined, subtle for dark theme */`
- Numbered CSS utilities: `/* 1. Spotlight card -- mouse-follow radial glow */`
- Accessibility notes: `{/* Reduced motion */}`

**JSDoc/TSDoc:**
- Not used anywhere in the codebase. Types are self-documenting via TypeScript interfaces.

## Function Design

**Size:** Components range from 3 lines (`GradientDivider`) to ~180 lines (`Header`). Most feature components are 50-130 lines.

**Parameters:** Props interfaces defined inline above component. Default values via destructuring: `{ className = "", intensity = 8 }: TiltCardProps`.

**Return Values:** Components return JSX. Hooks return objects: `{ ref, isInView }`, `{ ref, revealed }`, or primitives.

## Module Design

**Exports:** Named exports exclusively. No default exports anywhere except config files (`export default config`).

**Barrel Files:** Single barrel file at `packages/ui/src/index.ts`. No barrel files in apps -- components imported directly by path.

## SEO Patterns

**SSR Strategy:**
- Marketing site (`apps/web`) uses TanStack Start with server-side rendering via `@tanstack/react-start`
- Dashboard app (`apps/app`) is a client-side SPA (Vite + React plugin, no SSR)
- SSR function deployed as Netlify serverless function at `/.netlify/functions/ssr`

**Meta Tags:**
- Set per-route via TanStack Router's `head()` function in route definitions
- Root route sets global meta (charset, viewport, theme-color, OG tags, twitter card)
- Each page overrides `title` and `description`
- Pattern: `"Page Name -- Tagline | Praxis"` for titles

**Structured Data:**
- JSON-LD `EducationalOrganization` schema injected via `scripts` array in root route's `head()`
- Only one schema defined (root level); no per-page schemas

**Noscript Fallback:**
- `<noscript>` block in root forces `opacity: 1` and `transform: none` on animated elements
- `.js-only` class hides JS-dependent elements when JS is disabled

**Accessibility:**
- `aria-label` on interactive elements without visible text (BackToTop, hamburger toggle, dismiss buttons)
- `role="tablist"` and `aria-selected` on Tabs component
- `role="switch"` and `aria-checked` on Toggle component
- `lang="en"` on `<html>` element

---

*Convention analysis: 2026-03-31*
