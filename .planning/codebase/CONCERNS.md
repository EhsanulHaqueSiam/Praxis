# Codebase Concerns

**Analysis Date:** 2026-03-31

## Tech Debt

**All Data Is Hardcoded -- No Backend, No Database, No API:**
- Issue: Every page renders static, hardcoded arrays of courses, testimonials, stats, achievements, and activity. The dashboard at `apps/app/src/routes/_authenticated/dashboard.tsx` shows `enrolledCourses`, `recentActivity`, and `recommendedCourses` as const arrays. The courses page at `apps/web/src/components/courses/CourseGrid.tsx` defines 20 courses inline. Nothing is fetched.
- Files: `apps/app/src/routes/_authenticated/dashboard.tsx`, `apps/app/src/routes/_authenticated/courses.tsx`, `apps/app/src/routes/_authenticated/courses.$courseId.tsx`, `apps/app/src/routes/_authenticated/achievements.tsx`, `apps/app/src/routes/_authenticated/community.tsx`, `apps/web/src/components/courses/CourseGrid.tsx`, `apps/web/src/components/home/FeaturedCourses.tsx`, `apps/web/src/components/home/Testimonials.tsx`
- Impact: The platform cannot function as a real product. No user can enroll in a course, track real progress, or see personalized data. Every user sees the same hardcoded demo content.
- Fix approach: Introduce a backend (API routes or external service), define data models, and replace hardcoded arrays with fetched data. Start with course catalog and user enrollment.

**Unused Component -- LightSection:**
- Issue: `LightSection` is exported but never imported anywhere in the codebase.
- Files: `apps/web/src/components/shared/LightSection.tsx`
- Impact: Dead code increasing bundle size slightly and confusing future developers.
- Fix approach: Delete the file if it has no planned use.

**Stale Build Artifact Committed:**
- Issue: `apps/web/app.config.timestamp_1774905802039.js` is a Vite/TanStack Start build artifact with a timestamp in the filename. It should be gitignored. The `dist-netlify/` directory is also present (though gitignored per `.gitignore`).
- Files: `apps/web/app.config.timestamp_1774905802039.js`
- Impact: Pollutes the repository; will regenerate on each build with a new timestamp.
- Fix approach: Add `app.config.timestamp_*.js` to `.gitignore` and remove the file.

**Course Detail Page Is Hardcoded to One Course:**
- Issue: `courses.$courseId.tsx` accepts a `courseId` route param but ignores it entirely. The page always renders "Production-Grade React" with the same chapters and lessons regardless of which `courseId` is in the URL.
- Files: `apps/app/src/routes/_authenticated/courses.$courseId.tsx`
- Impact: Navigating to `/courses/interface-design-systems` shows React course content. Fundamentally broken routing.
- Fix approach: Create a course data map keyed by `courseId`, use `useParams()` to look up the correct data, and show a 404 state for unknown IDs.

**Footer Links Are Redundant/Misleading:**
- Issue: The three footer columns (Platform, Resources, Company) contain mostly the same links shuffled. "Resources" duplicates "Platform" exactly. "Company" links to registration and login pages, not company info. "Contact" links to `/pricing`.
- Files: `apps/web/src/components/layout/Footer.tsx` (lines 12-33)
- Impact: Poor UX, confuses users, looks unfinished. Links like "Contact" going to pricing erode trust.
- Fix approach: Define distinct footer sections with appropriate labels and targets. Add actual Terms/Privacy pages (currently `href="#"`).

## Security Considerations

**Mock Authentication with localStorage -- No Real Auth:**
- Risk: Authentication is entirely client-side. Anyone can open the browser console, run `localStorage.setItem("praxis-auth", JSON.stringify({name:"Admin",email:"admin@praxis.dev",avatar:"..."}))`, and gain full "authenticated" access. There is no server-side session, no token validation, no password hashing, and no backend verification of any kind.
- Files: `packages/ui/src/auth.tsx`
- Current mitigation: None. The `AuthProvider` reads/writes raw JSON to localStorage with key `praxis-auth`.
- Recommendations: Before any real user data exists, implement proper auth (e.g., Supabase Auth, Clerk, or NextAuth-equivalent). Use httpOnly cookies for session tokens. Never store auth state in localStorage in production.

**No CSRF Protection:**
- Risk: Since there is no backend, CSRF is not currently exploitable. However, every form (login, register, settings, newsletter signup) submits without any CSRF token. When a backend is added, these forms will be vulnerable.
- Files: `apps/app/src/routes/login.tsx`, `apps/app/src/routes/register.tsx`, `apps/app/src/routes/_authenticated/settings.tsx`, `apps/web/src/components/layout/Footer.tsx` (newsletter form)
- Current mitigation: None needed yet (no backend to attack).
- Recommendations: When adding a backend, implement CSRF tokens on all state-changing requests. Use the framework's built-in CSRF utilities.

**No Input Validation or Sanitization:**
- Risk: Login and register forms accept any input and immediately call `login()` with hardcoded demo data, ignoring what the user typed. Settings page has inputs but no save handler. When real form submission is added, there is no validation framework in place.
- Files: `apps/app/src/routes/login.tsx` (line 54-63), `apps/app/src/routes/register.tsx` (line 23-31), `apps/app/src/routes/_authenticated/settings.tsx`
- Current mitigation: Forms are non-functional so there is nothing to exploit.
- Recommendations: Add Zod or similar schema validation. Wire forms to real submission handlers with proper input sanitization.

**No Content Security Policy:**
- Risk: The Netlify headers include `X-Frame-Options` and `X-Content-Type-Options` but no `Content-Security-Policy`. External resources load from `fonts.googleapis.com`, `fonts.gstatic.com`, and `picsum.photos` without CSP whitelisting.
- Files: `netlify.toml` (lines 43-49)
- Current mitigation: `X-Frame-Options: DENY` and `X-Content-Type-Options: nosniff` provide partial protection.
- Recommendations: Add a CSP header. At minimum: `default-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; img-src 'self' https://picsum.photos data:; script-src 'self' 'unsafe-inline';`

**Social Login Buttons Are Fake:**
- Risk: Google and GitHub login buttons exist on both login and register pages but call the same `handleSocialLogin`/`handleSocialRegister` functions that just set a hardcoded demo user. Users clicking "Sign in with Google" get no OAuth flow -- they are silently logged in as "Kael Nakamura-Boyce" or "New User".
- Files: `apps/app/src/routes/login.tsx` (lines 65-74, 178-192), `apps/app/src/routes/register.tsx` (lines 33-40, 142-151)
- Current mitigation: None. This is deceptive UX.
- Recommendations: Either implement real OAuth or remove the social login buttons until ready. Showing fake OAuth buttons damages user trust.

## Performance Bottlenecks

**Multiple Unthrottled Scroll Event Listeners:**
- Problem: At least 5 separate components attach their own `scroll` event listener to `window`: `ScrollProgress`, `BackToTop`, `ScrollCue`, `SectionDots`, and `useScrollProgress` (used by `Header`). On the homepage, all 5 fire simultaneously on every scroll frame.
- Files: `apps/web/src/components/shared/ScrollProgress.tsx`, `apps/web/src/components/shared/BackToTop.tsx`, `apps/web/src/components/shared/ScrollCue.tsx`, `apps/web/src/components/shared/SectionDots.tsx`, `apps/web/src/hooks/useScrollProgress.ts`
- Cause: Each component registers its own listener independently. While `{ passive: true }` is set correctly, each listener calls `setState`, triggering 5 separate re-renders per scroll event.
- Improvement path: Consolidate into a single scroll context/hook that batches updates. Use `requestAnimationFrame` throttling. Consider replacing `SectionDots`' scroll-based section detection with `IntersectionObserver`.

**CursorGlow Renders a 600x600px Element That Moves on Every Mouse Event:**
- Problem: A 600x600px radial gradient div follows the mouse cursor via `mousemove` events. While it uses `willChange: "left, top"`, setting `style.left` and `style.top` directly triggers layout recalculation.
- Files: `apps/web/src/components/shared/CursorGlow.tsx`
- Cause: Direct `style.left`/`style.top` manipulation forces layout. Should use `transform: translate()` instead.
- Improvement path: Replace `left`/`top` positioning with `transform: translate(${x}px, ${y}px)` to keep the element on the compositor layer and avoid layout thrash.

**Large Main Bundle (353KB Uncompressed):**
- Problem: The web marketing site's main JS bundle is 353KB uncompressed. The CSS bundle is 49KB.
- Files: `dist-netlify/assets/main-CmxVd-rJ.js` (353KB), `dist-netlify/assets/app-BaQznbTG.css` (49KB)
- Cause: React, TanStack Router/Start, and all shared UI components bundled together. `autoCodeSplitting` is disabled in the web app's Vite config.
- Improvement path: Enable `autoCodeSplitting: true` in `apps/web/vite.config.ts` (currently `false`). Audit `@phosphor-icons/react` -- it tree-shakes per-icon, but verify named imports are used consistently. Consider lazy loading heavy page components.

**846-Line Global CSS File:**
- Problem: `globals.css` contains 846 lines of utility CSS, many of which are only used on specific pages (e.g., `.flip-card`, `.masonry-grid`, `.floating-label`, `.aurora-bg`). All CSS loads on every page.
- Files: `packages/ui/src/styles/globals.css`
- Cause: CSS is imported globally via `@import "@lumina/ui/globals.css"` in both apps.
- Improvement path: Move page-specific CSS classes into component-scoped styles or use Tailwind `@apply` within component files. Keep only truly shared utilities in globals.

**Dashboard App Also Has Large Bundle (244KB):**
- Problem: The dashboard SPA's main bundle is 244KB uncompressed.
- Files: `dist-netlify/app/assets/index-DaJ-GvVF.js` (244KB)
- Cause: Standard React + TanStack Router bundle. Code splitting is enabled (`autoCodeSplitting: true` in app config).
- Improvement path: Already code-split. Monitor for growth. Consider dynamic imports for icon components.

## SEO Concerns

**Missing og:url and Canonical Tags:**
- Problem: No page defines `og:url` or `<link rel="canonical">`. Without these, social media platforms and search engines cannot determine the authoritative URL for each page.
- Files: `apps/web/src/routes/__root.tsx` (lines 20-42), `apps/web/src/routes/index.tsx`, `apps/web/src/routes/courses.tsx`, `apps/web/src/routes/pricing.tsx`, `apps/web/src/routes/paths.tsx`, `apps/web/src/routes/community.tsx`
- Impact: Duplicate content issues in search results. Social shares may show wrong URLs.
- Fix approach: Add `og:url` and `canonical` link tags to each route's `head()` function. Use the full production URL (e.g., `https://praxis.dev/courses`).

**Missing og:image Tags:**
- Problem: No page defines `og:image` or `twitter:image`. Social media cards will render without preview images.
- Files: All route files under `apps/web/src/routes/`
- Impact: Poor social media appearance. Missing preview images significantly reduce click-through rates from social shares.
- Fix approach: Create OG images for each page and add `og:image` meta tags.

**Structured Data Is Minimal:**
- Problem: Only one JSON-LD block exists (EducationalOrganization on root layout). Individual course pages, pricing page, and FAQ page have no structured data. The courses page should use `Course` schema, pricing should use `Product`/`Offer`, and FAQ should use `FAQPage`.
- Files: `apps/web/src/routes/__root.tsx` (lines 57-68)
- Impact: Missing rich snippets in search results (course cards, FAQ dropdowns, pricing info).
- Fix approach: Add JSON-LD structured data to each page type using appropriate schema.org types.

**Per-Page Title Tags May Not Work Correctly with SSR:**
- Problem: Route-level `head()` functions define per-page titles and descriptions. TanStack Start's SSR should merge these with the root `head()`. However, the root defines `{ title: "Praxis -- Build Real Skills Through Projects" }` which may not be overridden correctly depending on merge strategy. Both root and index define titles, potentially creating duplicate `<title>` tags.
- Files: `apps/web/src/routes/__root.tsx` (line 22), `apps/web/src/routes/index.tsx` (line 15)
- Impact: Search engines may see the wrong title, or duplicate title tags.
- Fix approach: Verify SSR output contains exactly one `<title>` tag per page. Move default title to root and use route-level overrides. Test with `curl` against the deployed SSR endpoint.

## Architecture Concerns

**Two Apps Share Auth via localStorage -- Different Domains in Production:**
- Problem: The marketing site (SSR at `/`) and dashboard app (SPA at `/app/`) share auth through localStorage key `praxis-auth`. This works because both apps are served from the same origin on Netlify. However, the SSR app renders on the server where `localStorage` does not exist. The auth state will flash on hydration: server renders unauthenticated, client hydrates and detects localStorage auth, causing a visual flicker.
- Files: `packages/ui/src/auth.tsx`, `apps/web/src/routes/__root.tsx` (line 86, wraps entire SSR app in `AuthProvider`), `apps/app/src/main.tsx` (line 22, wraps SPA in `AuthProvider`)
- Impact: Hydration mismatch on SSR pages. Logged-in users see unauthenticated header flash before client JS runs and detects localStorage.
- Fix approach: For SSR, use cookies for auth state (readable server-side) instead of localStorage. Or defer auth-dependent UI to client-only rendering with `useEffect`.

**SSR Function Uses Relative Import That May Break:**
- Problem: The SSR Netlify function at `dist-netlify/netlify/functions/ssr.mjs` imports from `../../_server/server.js` using a relative path. This works with the current `dist-netlify/` structure, but the Netlify Functions runtime resolves paths relative to the function file location, which depends on the deployment environment.
- Files: `scripts/build-netlify.sh` (lines 26-45), `dist-netlify/netlify/functions/ssr.mjs`
- Impact: SSR may fail in production if the function runtime resolves the relative import differently than expected. The function also uses `export const config` for path matching, which is a Netlify Functions v2 feature -- verify the runtime version.
- Fix approach: Test the SSR function locally with `netlify dev`. Consider bundling the server code into the function file itself to eliminate the relative import.

**Login/Register Pages Live in the SPA But Need to Be Discoverable:**
- Problem: Login (`/app/login`) and register (`/app/register`) are SPA routes, not SSR pages. They are not indexable by search engines (the SPA's `index.html` has `<meta name="robots" content="noindex, nofollow">`). While this is correct for the dashboard, the registration page ideally should be crawlable for SEO (e.g., "sign up for Praxis").
- Files: `apps/app/index.html` (line 6), `apps/app/src/routes/login.tsx`, `apps/app/src/routes/register.tsx`
- Impact: Registration/login pages are invisible to search engines. Users can only discover them via internal links.
- Fix approach: Consider moving login/register to the SSR marketing site for SEO benefits, or create SSR landing pages at `/login` and `/register` that redirect to the SPA versions.

**No Shared Data Layer Between Marketing and Dashboard:**
- Problem: Course data is duplicated across both apps. The marketing site defines courses in `CourseGrid.tsx` with 20 courses including titles, instructors, ratings, and prices. The dashboard defines different course lists in `dashboard.tsx` and `courses.tsx`. Course IDs, instructor names, and pricing do not always match between the two apps.
- Files: `apps/web/src/components/courses/CourseGrid.tsx`, `apps/app/src/routes/_authenticated/dashboard.tsx`, `apps/app/src/routes/_authenticated/courses.tsx`
- Impact: Inconsistent data between marketing claims and dashboard reality. Pricing on marketing site may not match dashboard.
- Fix approach: Create a shared `packages/data` workspace package with canonical course, instructor, and pricing definitions. Import in both apps.

## Accessibility Concerns

**Animations Partially Respect prefers-reduced-motion:**
- Problem: `globals.css` has a blanket `@media (prefers-reduced-motion: reduce)` rule that shortens `animation-duration` and `transition-duration`. However, JavaScript-driven animations in `AnimateOnScroll`, `TiltCard`, `MagneticButton`, `SpotlightCard`, `CursorGlow`, `SectionDots`, and `useCountUp` do not check `prefers-reduced-motion`. Users who request reduced motion still see scroll-triggered fade-ups, tilt effects, magnetic button movement, and cursor glow tracking.
- Files: `packages/ui/src/styles/globals.css` (lines 74-81), `apps/web/src/components/shared/AnimateOnScroll.tsx`, `apps/web/src/components/shared/TiltCard.tsx`, `apps/web/src/components/shared/MagneticButton.tsx`, `apps/web/src/components/shared/CursorGlow.tsx`, `apps/web/src/components/shared/SpotlightCard.tsx`, `apps/web/src/hooks/useCountUp.ts`
- Impact: Motion-sensitive users may experience discomfort. Fails WCAG 2.1 SC 2.3.3 (Animation from Interactions).
- Fix approach: Add a `useReducedMotion()` hook that checks `window.matchMedia('(prefers-reduced-motion: reduce)')`. Disable JS-driven animations when active.

**Dashboard Sidebar Has No Mobile Navigation:**
- Problem: The authenticated layout sidebar is `hidden md:flex`. On screens narrower than `md` (768px), there is no navigation at all. No hamburger menu, no bottom tab bar, no way to navigate between Dashboard, Courses, Achievements, Community, and Settings.
- Files: `apps/app/src/routes/_authenticated.tsx` (line 58)
- Impact: The dashboard is unusable on mobile devices. Users can only see the current page with no way to navigate elsewhere.
- Fix approach: Add a mobile bottom tab bar or a hamburger menu that slides in the sidebar.

**Course Detail Page Has No Mobile Curriculum Access:**
- Problem: The course detail page's curriculum sidebar is `hidden md:flex`. On mobile, users see the lesson content but have no way to navigate to other lessons or chapters.
- Files: `apps/app/src/routes/_authenticated/courses.$courseId.tsx` (line 125)
- Impact: Mobile users are stuck on whatever lesson loads. Cannot browse the curriculum.
- Fix approach: Add a mobile-friendly curriculum drawer or collapsible section above the content.

**Missing ARIA Roles and Labels on Interactive Elements:**
- Problem: Many interactive elements lack proper ARIA attributes. The search input in the dashboard top bar has no `aria-label`. The notification bell button has no accessible label. Sidebar nav links have no `aria-current` attribute. The course card "Resume" links lack context for screen readers ("Resume" is ambiguous without course name).
- Files: `apps/app/src/routes/_authenticated.tsx` (lines 144-149 search, 153-157 bell), `apps/app/src/routes/_authenticated/dashboard.tsx` (lines 248-256 "Resume" link)
- Impact: Screen reader users cannot effectively navigate the dashboard.
- Fix approach: Add `aria-label` to icon-only buttons, `aria-current="page"` to active nav items, and descriptive `aria-label` to context-dependent links (e.g., `aria-label="Resume Production-Grade React"`).

**Tooltip Component Is Not Keyboard Accessible:**
- Problem: The `Tooltip` component uses CSS `:hover` only. There is no `focus` trigger, no `role="tooltip"`, no `aria-describedby` association, and no keyboard dismissal.
- Files: `apps/web/src/components/shared/Tooltip.tsx`, `packages/ui/src/styles/globals.css` (lines 769-801)
- Impact: Keyboard-only and screen reader users cannot access tooltip content.
- Fix approach: Add `tabIndex={0}`, `role="tooltip"`, `aria-describedby`, focus event handlers, and Escape key dismissal.

## Missing Critical Features

**No Payment/Checkout System:**
- Problem: Pricing page shows $0 (Free) and $29/mo (Pro) plans. "Start free" and "Start building" buttons link to `/app/register` which creates a hardcoded demo user. There is no Stripe integration, no checkout flow, no subscription management.
- Files: `apps/web/src/components/pricing/PricingCards.tsx`, `apps/app/src/routes/_authenticated/settings.tsx` (lines 146-173, "Upgrade to Pro" button)
- Blocks: Cannot monetize. Cannot distinguish free vs. paid users. Cannot gate content.

**No Real User Management:**
- Problem: Settings page renders form fields but the "Save changes" button has no `onClick` handler. "Delete account" button has no handler. There is no user profile API, no password change, no email verification, no account recovery.
- Files: `apps/app/src/routes/_authenticated/settings.tsx`
- Blocks: Users cannot update their profile, change passwords, or delete their accounts.

**No Course Enrollment or Progress Tracking:**
- Problem: "Enroll" buttons on catalog courses have no handler. Progress bars show hardcoded percentages. "Mark as complete" and "Next lesson" buttons on the course detail page have no handlers.
- Files: `apps/app/src/components/AppCourseCard.tsx` (line 125, `<Button size="sm">Enroll</Button>`), `apps/app/src/routes/_authenticated/courses.$courseId.tsx` (lines 262-268)
- Blocks: Cannot track learning progress, issue certificates, or calculate completion rates.

**No Search Functionality:**
- Problem: Both the dashboard top bar and the courses page have search inputs that are non-functional. The search input in the dashboard has placeholder text but no `onChange` handler, no search logic, and no results display. The keyboard shortcut indicator `Cmd+K` is purely decorative.
- Files: `apps/app/src/routes/_authenticated.tsx` (lines 143-151), `apps/app/src/routes/_authenticated/courses.tsx` (lines 121-129)
- Blocks: Users cannot search courses, topics, or instructors.

**No Video Player:**
- Problem: The course detail page shows a gray rectangle with a play button icon where the video should be. No video player library is integrated. No video URLs exist.
- Files: `apps/app/src/routes/_authenticated/courses.$courseId.tsx` (lines 212-219)
- Blocks: Cannot deliver course content. The core product feature is missing.

**No Notification System:**
- Problem: The bell icon in the dashboard top bar shows a hardcoded red dot (notification badge) but has no notification panel, no notification data, and no way to view or dismiss notifications.
- Files: `apps/app/src/routes/_authenticated.tsx` (lines 153-157)
- Blocks: Cannot alert users about course updates, community mentions, or system events.

**Newsletter Signup Is Non-Functional:**
- Problem: The footer's newsletter form has no submission handler. The email input and "Subscribe" button are purely visual.
- Files: `apps/web/src/components/layout/Footer.tsx` (lines 60-73)
- Blocks: Cannot collect email leads.

## Browser Compatibility Concerns

**CSS `@property` Has Limited Support:**
- Problem: The `.gradient-border` animation uses `@property --border-angle` (CSS Houdini) to animate a conic gradient rotation. This is unsupported in Firefox (no support as of March 2026) and older Safari versions. Without `@property`, the `--border-angle` custom property cannot be animated, and the gradient border will appear static.
- Files: `packages/ui/src/styles/globals.css` (lines 329-336)
- Impact: The animated gradient border on the Pro pricing card will not animate in Firefox. It will show a static gradient instead.
- Fix approach: Add a `@supports` check or provide a fallback animation using `transform: rotate()` on a pseudo-element.

**`backdrop-filter` Needs Vendor Prefix:**
- Problem: `backdrop-filter` is used throughout (glass effects, header blur, tooltips). The CSS correctly includes both `backdrop-filter` and `-webkit-backdrop-filter`. However, some older browsers may not support `backdrop-filter` at all (e.g., older Android WebView).
- Files: `packages/ui/src/styles/globals.css` (lines 88-89, 96-97, 598, 779), `apps/web/src/components/layout/Header.tsx` (inline styles, lines 29-30)
- Impact: Glass effects will appear as semi-transparent solid backgrounds without blur. Degradation is graceful.
- Fix approach: The `-webkit-` prefix is already present. No action needed for modern browsers. For older browsers, the fallback (solid background) is acceptable.

**`100dvh` Is Not Supported in Older Browsers:**
- Problem: Multiple components use `min-h-[100dvh]` (dynamic viewport height). This CSS unit is unsupported in browsers released before 2022.
- Files: `apps/web/src/routes/__root.tsx`, `apps/app/src/routes/__root.tsx`, `apps/app/src/routes/_authenticated.tsx`, `apps/app/src/routes/login.tsx`, `apps/app/src/routes/register.tsx`
- Impact: Layout may not fill the viewport in older browsers.
- Fix approach: Add a `min-h-screen` fallback before `min-h-[100dvh]` for progressive enhancement.

## Fragile Areas

**SSR Build Pipeline:**
- Files: `scripts/build-netlify.sh`, `dist-netlify/netlify/functions/ssr.mjs`, `apps/web/vite.config.ts`
- Why fragile: The build script copies files between multiple `dist/` directories, creates a serverless function with a hand-written relative import, and depends on exact directory structure. Any change to Vite's output structure, TanStack Start's server bundle format, or Netlify's function runtime could break the SSR pipeline. The `ssr.mjs` function calls `createServerEntry()` which must match whatever TanStack Start exports.
- Safe modification: Test any build changes locally with `netlify dev` before deploying. The relative import `../../_server/server.js` is the most fragile link.
- Test coverage: Zero. No tests exist anywhere in the project.

**Auth State Synchronization Between Two Apps:**
- Files: `packages/ui/src/auth.tsx`, `apps/web/src/routes/__root.tsx`, `apps/app/src/main.tsx`
- Why fragile: Both apps independently read from the same localStorage key. If one app writes a different user structure (e.g., adds a `token` field), the other may break when parsing. The SSR app wraps everything in `AuthProvider` which calls `localStorage.getItem` -- this will throw during server-side rendering.
- Safe modification: Any changes to the `User` interface in `auth.tsx` must be backward-compatible with existing localStorage data. Consider adding a version field to the stored data.
- Test coverage: Zero.

**Route-Level Head Tags:**
- Files: `apps/web/src/routes/__root.tsx`, `apps/web/src/routes/index.tsx`, `apps/web/src/routes/courses.tsx`, `apps/web/src/routes/pricing.tsx`, `apps/web/src/routes/paths.tsx`, `apps/web/src/routes/community.tsx`
- Why fragile: Each route defines its own `head()` function. The root also defines meta tags. TanStack Start merges these, but the merge behavior for `title` and `description` is not obvious. A future developer adding a new route might not realize they need to define `head()` for SEO.
- Safe modification: Always define `head()` on new routes. Test SSR output to verify correct meta tags.
- Test coverage: Zero.

## Test Coverage Gaps

**No Tests Exist:**
- What's not tested: Everything. There are zero test files, zero test configurations, and zero test framework dependencies in the project.
- Files: Entire codebase -- `apps/web/`, `apps/app/`, `packages/ui/`
- Risk: Any change can introduce regressions without detection. The auth flow, route guards, component rendering, SSR output, and build pipeline are all unverified.
- Priority: High. At minimum, add:
  1. A smoke test for the SSR function (does it return valid HTML?)
  2. Unit tests for `AuthProvider` (login/logout/persistence)
  3. Component tests for route guards (`_authenticated.tsx` redirect logic)
  4. Build verification test (does `build-netlify.sh` produce expected output structure?)

**No Linting or Formatting Configuration:**
- What's not configured: No `.eslintrc`, `.prettierrc`, `eslint.config.js`, or `biome.json` exists. No lint/format scripts in `package.json`.
- Files: Root `package.json`
- Risk: Code style inconsistencies will accumulate. No automated detection of unused imports, accessibility issues, or type errors beyond TypeScript's basic checking.
- Priority: Medium. Add ESLint with `eslint-plugin-react`, `eslint-plugin-jsx-a11y`, and Prettier.

---

*Concerns audit: 2026-03-31*
