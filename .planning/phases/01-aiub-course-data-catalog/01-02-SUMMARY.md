---
phase: 01-aiub-course-data-catalog
plan: 02
subsystem: ui
tags: [react, tanstack-start, seo, json-ld, structured-data, course-catalog, phosphor-icons]

# Dependency graph
requires:
  - phase: 01-aiub-course-data-catalog
    plan: 01
    provides: "51-course Course array with AIUB_COURSE_COUNT=51 exported from @lumina/ui"

provides:
  - "CourseGrid importing from @lumina/ui with 5 AIUB-aligned categories"
  - "CoursesHero with updated category tabs and dynamic AIUB_COURSE_COUNT count"
  - "FeaturedCourses deriving top 3 courses from shared array"
  - "PathsGrid with 4 learning paths referencing real AIUB course codes"
  - "JSON-LD ItemList+Course schema in /courses route head()"

affects: [courses-catalog, seo, marketing-site]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Import courses/AIUB_COURSE_COUNT from @lumina/ui barrel; no inline data in web components"
    - "JSON-LD via scripts array in head() — mirrors pattern from __root.tsx"
    - "FeaturedCourses derives topCourses via courses.find(slug) with .map() transformation"

key-files:
  created: []
  modified:
    - apps/web/src/components/courses/CourseGrid.tsx
    - apps/web/src/components/courses/CoursesHero.tsx
    - apps/web/src/components/home/FeaturedCourses.tsx
    - apps/web/src/components/paths/PathsGrid.tsx
    - apps/web/src/routes/courses.tsx

key-decisions:
  - "Show ALL courses from shared array in CourseGrid grouped by category (not a curated subset)"
  - "Dropped Product Designer and DevOps paths; added Systems Architect and CS Theorist paths — better maps to AIUB curriculum"
  - "JSON-LD uses ItemList wrapping Course items; icon field excluded from JSON.stringify (React component not serializable)"
  - "course.name mapped to title prop in CourseCard since shared Course uses name but CourseCard expects title"

patterns-established:
  - "Web components MUST import course data from @lumina/ui, never define inline arrays"
  - "Dynamic counts use AIUB_COURSE_COUNT constant — no hardcoded numbers"
  - "JSON-LD head() scripts follow exact __root.tsx pattern"

requirements-completed: [R1.1]

# Metrics
duration: 15min
completed: 2026-03-31
---

# Phase 1 Plan 02: AIUB Course Data Catalog — Marketing Site Migration Summary

**All 5 marketing site course components migrated from inline data to @lumina/ui imports, with AIUB-aligned category taxonomy, real course codes in learning paths, and JSON-LD Course schema in /courses route**

## Performance

- **Duration:** ~15 min
- **Started:** 2026-03-31T12:03:00Z
- **Completed:** 2026-03-31T12:18:05Z
- **Tasks:** 2
- **Files modified:** 5

## Accomplishments

- Removed 250+ lines of inline course data from CourseGrid, replaced with import from @lumina/ui
- Updated 5 category tabs and descriptions to match AIUB CSE curriculum taxonomy
- FeaturedCourses now derives top 3 courses from shared array by slug lookup
- PathsGrid reduced from 5 paths to 4 AIUB-relevant paths with real course codes (CSC/MAT/COE/EEE prefixes)
- JSON-LD ItemList+Course schema with 51 courses injected into /courses route head() for SEO
- No "217" count literals remain in any modified file; all counts use AIUB_COURSE_COUNT=51

## Task Commits

Each task was committed atomically:

1. **Task 1: Migrate CourseGrid, CoursesHero, FeaturedCourses to shared data** - `fb23151` (feat)
2. **Task 2: Update PathsGrid with real AIUB courses and add JSON-LD to courses route** - `600a156` (feat)

**Plan metadata:** (docs commit — see below)

## Files Created/Modified

- `apps/web/src/components/courses/CourseGrid.tsx` — Removed inline Course interface and 20-course array; imports courses/CourseCategory from @lumina/ui; updated categoryDescriptions and categoryOrder to 5 AIUB categories; maps course.name to title prop
- `apps/web/src/components/courses/CoursesHero.tsx` — Updated categories array to 5 AIUB taxonomy names; paragraph uses AIUB_COURSE_COUNT dynamically
- `apps/web/src/components/home/FeaturedCourses.tsx` — Removed hardcoded topCourses array; derives 3 courses from shared array by slug; uses AIUB_COURSE_COUNT for "View all" button
- `apps/web/src/components/paths/PathsGrid.tsx` — Replaced 5 generic paths with 4 AIUB-specific paths (Full-Stack Engineer, ML Engineer, Systems Architect, CS Theorist); real course codes in milestones; updated SectionHeader to "Four paths"
- `apps/web/src/routes/courses.tsx` — Added courses/AIUB_COURSE_COUNT imports; updated meta description; added JSON-LD scripts array with ItemList+Course schema

## Decisions Made

- Show ALL 51 courses in CourseGrid grouped by category (no curation subset) — per plan D-03 directive
- Dropped Product Designer and DevOps paths (no sufficient AIUB courses); added Systems Architect and CS Theorist as better matches for AIUB hardware/theory curriculum
- Excluded `icon` React component field from JSON.stringify in JSON-LD to prevent serialization error
- Mapped `course.name` to CourseCard's `title` prop at render time (interface mismatch between shared Course and CourseCardProps)

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None — TypeScript compiled cleanly on first attempt, full build passed immediately.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- All marketing site components now sourced from single shared course data module
- Course catalog page has SEO-ready JSON-LD structured data for Google's rich results
- Category filtering in CoursesHero currently updates state but CourseGrid does not respond to the active tab — this is a known gap (filtering wiring not in scope for this plan)
- Ready for Phase 1 Plan 03 if applicable, or next phase milestone work

---
*Phase: 01-aiub-course-data-catalog*
*Completed: 2026-03-31*

## Self-Check: PASSED

- FOUND: apps/web/src/components/courses/CourseGrid.tsx
- FOUND: apps/web/src/components/courses/CoursesHero.tsx
- FOUND: apps/web/src/components/home/FeaturedCourses.tsx
- FOUND: apps/web/src/components/paths/PathsGrid.tsx
- FOUND: apps/web/src/routes/courses.tsx
- FOUND: .planning/phases/01-aiub-course-data-catalog/01-02-SUMMARY.md
- FOUND commit: fb23151 (Task 1)
- FOUND commit: 600a156 (Task 2)
