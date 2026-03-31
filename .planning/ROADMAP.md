# Praxis — Roadmap (Milestone 1)

## Milestone 1: Production-Ready Shell
**Goal**: Ship a polished marketing site + dashboard shell with mock AIUB CSE courses. Looks and feels completely real.

---

### Phase 1: AIUB Course Data & Catalog
**Goal**: Replace placeholder course data with real AIUB CSE course catalog
**Requirements**: R1.1, R2.3
**Plans:** 3 plans

Plans:
- [ ] 01-01-PLAN.md — Create shared course data module (Course interface + 51 AIUB records + barrel export)
- [ ] 01-02-PLAN.md — Migrate web marketing components + category taxonomy + learning paths + JSON-LD
- [ ] 01-03-PLAN.md — Migrate dashboard app components + replace all "217" references

**Scope**:
- Scrape/extract AIUB CSE undergraduate course catalog from their website
- Create course data files with real names, descriptions, credit hours, prerequisites
- Map courses to Praxis categories (Web Dev, ML/AI, Data Science, etc.)
- Update all course references in web + app components
- Add course schema (JSON-LD) for SEO
**Verify**: Course names match AIUB catalog, structured data validates

### Phase 2: SEO Hardening
**Goal**: Marketing site is fully SEO-optimized, content works without JS
**Requirements**: R1.1
**Scope**:
- Verify SSR renders all content without JS (use /agent-browser with JS disabled)
- Add XML sitemap generation
- Add robots.txt
- Validate all structured data (Organization, Course, FAQ)
- Validate OG/Twitter meta on every page
- Add canonical URLs
- Lighthouse SEO audit — target 95+
**Verify**: Screenshot with JS disabled shows all content, Lighthouse SEO 95+

### Phase 3: Marketing Site Polish
**Goal**: Every marketing page is pixel-perfect Linear-quality
**Requirements**: R1.2, R1.3
**Scope**:
- Audit each page with /agent-browser screenshots
- Fix spacing, alignment, responsive issues
- Ensure all 50+ premium components work correctly
- Add missing Framer-inspired components from any category gaps
- Mobile responsive audit on 375px, 768px, 1024px, 1440px
- Performance audit: Core Web Vitals targets (LCP < 2.5s, CLS < 0.1)
**Verify**: Screenshots at all breakpoints look premium, CWV pass

### Phase 4: Dashboard UX Polish
**Goal**: Student dashboard feels production-grade
**Requirements**: R2.1, R2.2
**Scope**:
- Polish all dashboard pages with /frontend-design
- Add loading skeletons, empty states, error states
- Mobile sidebar (hamburger + slide-out drawer)
- Keyboard shortcuts (Cmd+K search)
- Smooth page transitions between routes
- Course detail page with proper video placeholder layout
**Verify**: Full dashboard flow tested with /agent-browser

### Phase 5: Video Player Shell
**Goal**: Course lesson page with DRM-ready video player structure
**Requirements**: R2.3
**Scope**:
- Build custom video player component (play, pause, progress, fullscreen)
- Email watermark overlay (current user's email floating over video)
- Anti-screen-capture CSS (visibility tricks, no right-click, etc.)
- Chapter navigation with auto-advance
- Lesson completion tracking (mock — localStorage)
- Resource panel (downloadable files — mock links)
**Verify**: Video player renders, email overlay works, can't right-click

### Phase 6: Cross-Site Integration Hardening
**Goal**: Web ↔ App transition is invisible to users
**Requirements**: R1.4, R2.1
**Scope**:
- Test every navigation path between web and app
- Ensure auth state persists across transitions
- Loading states during cross-site navigation
- 404 handling on both apps
- Deep link support (share a course URL → works correctly)
- Breadcrumb navigation in dashboard
**Verify**: Complete user journey test: homepage → course → enroll → login → dashboard → course player

### Phase 7: Netlify Production Deploy
**Goal**: Site is live and working on production Netlify URL
**Requirements**: R4.1
**Scope**:
- Fix any SSR function issues
- Configure custom domain (if available)
- SSL/HTTPS verification
- Production build optimization (bundle size audit)
- CDN caching headers verified
- Error pages (404, 500)
- Analytics snippet (if desired)
**Verify**: Live URL works end-to-end, Lighthouse performance audit

---

## Future Milestones (Not in scope)

### Milestone 2: Real Backend
- Supabase integration (auth, database, storage)
- Real user registration + social login
- Course data in Postgres
- User progress persistence

### Milestone 3: Payments
- SSLCommerz integration
- Course purchase flow
- Subscription management
- Invoice generation

### Milestone 4: Content & DRM
- Real video content upload
- DRM integration (Widevine/FairPlay)
- Screen capture prevention (server-side)
- Quiz/assessment engine

### Milestone 5: Scale
- Cloudflare bot protection
- CDN for video delivery
- Email notifications
- Mobile app (React Native)
