# External Integrations

**Analysis Date:** 2026-03-31

## APIs & External Services

**None.** This is a frontend-only codebase with all data hardcoded as static arrays and objects inline in component files. There are no `fetch()` calls, no API clients, no SDK imports for any external service. References to `api.praxis.dev/v2` in `apps/web/src/components/home/FeaturedCourses.tsx` are decorative text inside a terminal UI mock, not actual API calls.

## Data Storage

**Databases:**
- None. No database connection, ORM, or data layer exists.

**Client-side persistence:**
- `localStorage` key `praxis-auth` stores the mock user object as JSON (`packages/ui/src/auth.tsx`)
- No IndexedDB, sessionStorage, or other client storage detected

**File Storage:**
- Local filesystem only (no cloud storage integration)

**Caching:**
- Netlify CDN caching via `Cache-Control: public, max-age=31536000, immutable` on `/assets/*` and `/app/assets/*` (configured in `netlify.toml`)
- No application-level caching layer

## Authentication & Identity

**Auth Provider:** Custom mock implementation (no real auth)

**Implementation details:**
- `packages/ui/src/auth.tsx` exports `AuthProvider` (React Context) and `useAuth` hook
- Login stores a hardcoded demo user to `localStorage`
- Logout clears `localStorage`
- No real credential validation, no OAuth flow, no JWT tokens
- Social login buttons (Google, GitHub) in `apps/app/src/routes/login.tsx` and `apps/app/src/routes/register.tsx` call the same mock login function
- Route guard in `apps/app/src/routes/_authenticated.tsx` checks `isLoggedIn` from context, redirects to `/login` if false

**Demo user:**
```typescript
// apps/app/src/routes/login.tsx
const DEMO_USER = {
  name: "Kael Nakamura-Boyce",
  email: "kael@example.com",
  avatar: "https://picsum.photos/seed/kael/100/100",
};
```

**User interface:**
```typescript
// packages/ui/src/auth.tsx
interface User {
  name: string;
  email: string;
  avatar: string;
}
```

## CDN & Asset Delivery

**Fonts:**
- Google Fonts CDN (`fonts.googleapis.com`, `fonts.gstatic.com`)
- Fonts loaded: Outfit (variable weight 300-900), JetBrains Mono (400, 500)
- Loaded via `<link>` stylesheet tag with `display=swap`
- Preconnect hints set in both `apps/web/src/routes/__root.tsx` and `apps/app/index.html`

**Images:**
- Placeholder images from `picsum.photos` (avatar images, testimonials)
- No image optimization service or CDN configured
- No local image assets detected in source

**Icons:**
- Phosphor Icons (`@phosphor-icons/react`) bundled as React components, no CDN

## Monitoring & Observability

**Error Tracking:**
- None. The SSR function in `scripts/build-netlify.sh` catches errors with a bare `console.error("SSR error:", e)` and returns a 500 response. No Sentry, Datadog, or similar.

**Logs:**
- Console-only. No structured logging framework.

**Analytics:**
- None detected. No Google Analytics, Plausible, PostHog, or any analytics SDK.

**Performance Monitoring:**
- None. No Web Vitals collection or RUM (Real User Monitoring).

## CI/CD & Deployment

**Hosting:**
- Netlify (static CDN + serverless functions)
- SSR handled by Netlify Function at `/.netlify/functions/ssr`
- SPA served as static files under `/app/` with index.html fallback

**CI Pipeline:**
- None detected (no `.github/workflows/`, no `netlify.yml` pipeline, no Vercel config)
- Build triggered by Netlify's built-in CI: `bash scripts/build-netlify.sh`

**Build Command:** `bash scripts/build-netlify.sh`
**Publish Directory:** `dist-netlify`
**Node Version:** 20 (set in `netlify.toml` build environment)

## Environment Configuration

**Required env vars:**
- None. The application has no environment variables. The `.gitignore` includes `.env` and `.env.*` patterns but no `.env` file exists.

**Secrets location:**
- No secrets required (no API keys, no auth provider config, no database credentials)

## Webhooks & Callbacks

**Incoming:**
- None

**Outgoing:**
- None

## SEO & Structured Data

**Open Graph / Twitter Cards:**
- Meta tags set in `apps/web/src/routes/__root.tsx` head config
- `og:title`, `og:description`, `og:type`, `og:site_name`, `twitter:card`
- Theme color: `#09090b`

**JSON-LD:**
- EducationalOrganization schema injected via `<script type="application/ld+json">` in `apps/web/src/routes/__root.tsx`

**Robots:**
- Dashboard app blocks indexing: `<meta name="robots" content="noindex, nofollow">` in `apps/app/index.html`
- Marketing site has no robots restriction (indexable)

## Cookie Consent

- Custom cookie consent banner implemented in `apps/web/src/components/shared/CookieConsent.tsx`
- Uses `@lumina/ui` Button component
- Client-side only (no cookie management service like OneTrust or CookieBot)

## Third-Party Dependencies Summary

| Service | Status | Notes |
|---------|--------|-------|
| Database | Not integrated | All data hardcoded |
| Auth provider | Not integrated | Mock localStorage auth |
| Payment/billing | Not integrated | Pricing page is static UI |
| Email service | Not integrated | No transactional email |
| Analytics | Not integrated | No tracking |
| Error tracking | Not integrated | Console.error only |
| Image CDN | Not integrated | Uses picsum.photos placeholders |
| Search | Not integrated | Search bar in dashboard is non-functional |
| Notifications | Not integrated | Bell icon in dashboard is decorative |

---

*Integration audit: 2026-03-31*
