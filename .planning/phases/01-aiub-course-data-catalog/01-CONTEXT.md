# Phase 1: AIUB Course Data & Catalog - Context

**Gathered:** 2026-03-31 (assumptions mode)
**Status:** Ready for planning

<domain>
## Phase Boundary

Replace placeholder course data with real AIUB CSE undergraduate course catalog. Create centralized course data files, map to Praxis categories, update all component references, update marketing stats, and add Course JSON-LD for SEO. No new routes or pages — data replacement and schema addition only.

</domain>

<decisions>
## Implementation Decisions

### Course Data Architecture
- **D-01:** Centralize all course data into a shared data module at `packages/ui/src/data/courses.ts` (or similar path under the existing `@lumina/ui` package), exported from the barrel file. Do NOT create a new workspace package — reuse the existing shared package.
- **D-02:** Define a single canonical `Course` interface covering all fields needed by both apps: id, slug, name, description, creditHours, prerequisites, category, icon, instructor (mock), rating (mock), duration (mock), students (mock), price (mock), gradient (for app cards).
- **D-03:** All 6+ files with inline course data (`CourseGrid.tsx`, `FeaturedCourses.tsx`, `courses.tsx`, `dashboard.tsx`, `courses.$courseId.tsx`, `login.tsx`) must import from the shared module instead of defining their own constants.

### Category Mapping
- **D-04:** Adjust Praxis categories to better reflect AIUB CSE curriculum while keeping them career-oriented and appealing. Recommended mapping: "Computer Science Fundamentals" (theory, math, algorithms), "Software Engineering" (SE courses, OOP, testing), "Web & Mobile Development" (web, app dev), "AI & Data Science" (ML, AI, data, stats), "Systems & Networking" (OS, networks, hardware, security). Drop "Design" and "DevOps" as standalone categories — they don't map to enough AIUB courses.
- **D-05:** Update category filter tabs in `CourseGrid.tsx` and `CoursesHero.tsx` to match new categories. Update learning paths in `PathsGrid.tsx` to reference real courses.

### Stats & Course Count
- **D-06:** Replace all hardcoded "217" references with the actual AIUB CSE course count (derive from scraped data). Locations: `Stats.tsx`, `FeaturedCourses.tsx`, `CoursesHero.tsx`, `courses.tsx` meta, `index.tsx` meta, `HowItWorks.tsx`, `login.tsx`, `register.tsx`.
- **D-07:** Other marketing stats (students count, completion rate, etc.) can remain as aspirational mock numbers — only the course count must be accurate.

### JSON-LD Schema
- **D-08:** Add Course JSON-LD schema to the `/courses` route via TanStack Start's `head()` function. List all courses as an array of `Course` schema objects on that single page. Do NOT create individual course pages on the marketing site (that's out of scope).
- **D-09:** Each Course schema should include: `name`, `description`, `provider` (Praxis), `coursePrerequisites`, `numberOfCredits`, `educationalLevel` (Undergraduate). Research which properties Google actually consumes.

### Data Source
- **D-10:** Extract AIUB CSE course data from their public undergraduate course catalog page. If scraping isn't feasible (dynamic page, auth wall), manually compile the data from the publicly available information.

### Claude's Discretion
- Exact file organization within the data module (single file vs. split by category)
- Mock values for instructor names, ratings, student counts, prices
- Icon mapping from Phosphor Icons to each course/category
- Gradient color assignments for dashboard course cards

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Course data locations (current — to be replaced)
- `apps/web/src/components/courses/CourseGrid.tsx` — 20 placeholder courses with category/icon/price shape
- `apps/web/src/components/courses/CoursesHero.tsx` — Category tabs and "217 courses" reference
- `apps/web/src/components/home/FeaturedCourses.tsx` — 3 topCourses with different shape
- `apps/app/src/routes/_authenticated/courses.tsx` — enrolledCourses + catalogCourses (app shape)
- `apps/app/src/routes/_authenticated/dashboard.tsx` — enrolledCourses + recommendedCourses
- `apps/app/src/routes/_authenticated/courses.$courseId.tsx` — Hardcoded single-course chapter data

### Stats references (to be updated)
- `apps/web/src/components/home/Stats.tsx` — "217" course count stat
- `apps/web/src/components/home/FeaturedCourses.tsx` — "View all 217"
- `apps/web/src/components/home/HowItWorks.tsx` — "217" reference
- `apps/web/src/routes/courses.tsx` — Meta description with "217"
- `apps/web/src/routes/index.tsx` — Meta description with "217"
- `apps/app/src/routes/login.tsx` — "217" reference
- `apps/app/src/routes/register.tsx` — "217" reference

### Shared package barrel
- `packages/ui/src/index.ts` — Must export new course data/types

### Existing JSON-LD pattern
- `apps/web/src/routes/__root.tsx` — EducationalOrganization schema (lines 56-68)

### Learning paths (references courses)
- `apps/web/src/components/paths/PathsGrid.tsx` — Path definitions that should reference real courses

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `cn()` utility from `@lumina/ui` for class merging
- `SpotlightCard`, `TiltCard` wrappers for card effects
- `CourseCard` component in `CourseGrid.tsx` — can be adapted to work with new data shape
- `AppCourseCard` component in `apps/app/src/components/AppCourseCard.tsx` — dual-mode card for dashboard
- Phosphor Icons library already installed — use for course category icons

### Established Patterns
- Static data as `const` arrays defined above component, then mapped in JSX
- Category filter via state + `.filter()` on the array
- TanStack Start `head()` for per-route meta and JSON-LD injection
- Named exports exclusively, no default exports
- CSS utility classes from globals.css (spotlight-card, gradient-border, etc.)

### Integration Points
- `@lumina/ui` barrel export (`packages/ui/src/index.ts`) — new course types/data must be added here
- Route `head()` functions — course count appears in meta descriptions
- Both apps import from `@lumina/ui` — changing the shared package affects both automatically
- Learning paths page references course names — must update to match real courses

</code_context>

<specifics>
## Specific Ideas

- AIUB CSE course catalog source: https://www.aiub.edu/faculties/fst/ug-course-catalog
- Courses should use real AIUB names exactly (e.g., "Introduction to Computer Science", "Data Structures", "Discrete Mathematics") — no renaming
- Credit hours should match AIUB catalog exactly
- Prerequisites should form a real dependency graph matching AIUB's actual prerequisite chain

</specifics>

<deferred>
## Deferred Ideas

- Individual course detail pages on marketing site (SEO value, but requires new routes — Phase 2 or later)
- Real instructor profiles (need actual content — future milestone with real backend)
- Course reviews/ratings (need real data — future milestone)

</deferred>

---

*Phase: 01-aiub-course-data-catalog*
*Context gathered: 2026-03-31*
