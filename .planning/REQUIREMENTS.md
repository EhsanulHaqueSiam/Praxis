# Praxis — Requirements (Milestone 1)

## Milestone Goal
Ship a polished, production-ready marketing site + student dashboard shell with mock content. Everything looks and feels real — real enough to demo, present, or use as a portfolio piece. No real backend or payments yet.

---

## R1: Marketing Site (apps/web)

### R1.1: SEO & Content
- [ ] All page content renders in SSR (no JS required for bots)
- [ ] Structured data (JSON-LD) on every page: Organization, Course, FAQ
- [ ] Open Graph + Twitter Card meta tags on all pages
- [ ] Semantic HTML: proper heading hierarchy, landmarks, alt text
- [ ] XML sitemap generation
- [ ] robots.txt
- [ ] Course catalog with real AIUB CSE course names/descriptions

### R1.2: Pages (all dark theme, Linear aesthetic)
- [ ] Homepage: Hero, marquee, trusted-by, features bento, how-it-works, stats, testimonials, CTA
- [ ] Courses: Category filter tabs, course grid with spotlight cards, hover reveal
- [ ] Learning Paths: Path cards with tilt effect, milestone timelines
- [ ] Pricing: Free/Pro cards with gradient border, feature comparison table, FAQ
- [ ] Community: Featured stories, channels, stats band

### R1.3: Premium Polish (Framer-inspired)
- [ ] 50+ CSS animation utilities (spotlight, tilt, magnetic, shimmer, aurora, etc.)
- [ ] Scroll-triggered reveals on all sections
- [ ] Animated stat counters
- [ ] Gradient dividers between sections
- [ ] Announcement bar, cookie consent, back-to-top, scroll progress
- [ ] Section dot navigation on homepage
- [ ] Masonry testimonial layout
- [ ] Floating label newsletter input

### R1.4: Navigation & Integration
- [ ] Adaptive header: Dashboard button for logged-in, Sign In for guests
- [ ] All CTAs link to /app/* (proxied dashboard)
- [ ] Footer with cross-links between web ↔ app
- [ ] Hamburger morph animation on mobile
- [ ] Progressive blur header on scroll

---

## R2: Student Dashboard (apps/app)

### R2.1: Auth Flow
- [ ] Login page with redirect support (?redirect= param)
- [ ] Register page with social login buttons (mock)
- [ ] Mock auth via localStorage (AuthProvider in packages/ui)
- [ ] Auto-redirect to /dashboard after login
- [ ] Sign-out clears auth and redirects to marketing site

### R2.2: Dashboard Pages
- [ ] Dashboard: Welcome banner, quick stats, enrolled courses, activity feed, recommendations
- [ ] My Courses: Enrolled list + browse catalog
- [ ] Course Detail: Curriculum sidebar, video placeholder, lesson description, resources
- [ ] Settings: Profile, notifications, subscription, danger zone
- [ ] Achievements: Placeholder page
- [ ] Community: Placeholder page

### R2.3: Course Content (Mock)
- [ ] Course data with real AIUB CSE course names
- [ ] Video player placeholder (DRM-ready structure)
- [ ] Progress tracking UI (progress bars, completion percentages)
- [ ] Chapter/lesson navigation with status indicators
- [ ] Resource download links (mock)

---

## R3: Shared Design System (packages/ui)

### R3.1: Components
- [ ] Button (5 variants, shimmer, ripple)
- [ ] Card (dark glass, spotlight, tilt)
- [ ] Badge (4 variants)
- [ ] Input (floating label, focus glow)
- [ ] Avatar, Toggle, Accordion (card variant), Tabs (sliding indicator)

### R3.2: Auth
- [ ] AuthProvider context with localStorage persistence
- [ ] useAuth hook exported from @lumina/ui
- [ ] Shared across web and app via same domain

### R3.3: Design Tokens
- [ ] CSS variables for dark theme (globals.css)
- [ ] 50+ utility classes for premium effects
- [ ] Tailwind config with accent/violet colors, custom shadows, animations

---

## R4: Infrastructure

### R4.1: Build & Deploy
- [ ] Vite build for both apps
- [ ] Netlify deployment: SSR function for web, static for app
- [ ] Build script combining both outputs
- [ ] Vite proxy for /app/* in development

### R4.2: Developer Experience
- [ ] pnpm monorepo with workspace packages
- [ ] Hot reload for both apps
- [ ] TypeScript throughout
- [ ] Path aliases (~/ for src)

---

## Non-Goals (Milestone 1)
- Real backend/database (Supabase — future)
- Real payment (SSLCommerz — future)
- Real video content + DRM (future)
- Real user registration/auth (future)
- Email notifications (future)
- Cloudflare bot protection (future)
- Mobile app (future)
