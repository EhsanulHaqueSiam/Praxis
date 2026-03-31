---
phase: 01-aiub-course-data-catalog
plan: 03
subsystem: course-data
tags: [data-centralization, shared-module, course-catalog, 217-cleanup]
dependency_graph:
  requires: [01-01]
  provides: [course-data-consumers-migrated, zero-217-literals]
  affects: [apps/app, apps/web]
tech_stack:
  added: []
  patterns: [import-from-shared-module, derive-from-slug, template-literal-constants]
key_files:
  created: []
  modified:
    - apps/app/src/routes/_authenticated/courses.tsx
    - apps/app/src/routes/_authenticated/dashboard.tsx
    - apps/app/src/routes/_authenticated/courses.$courseId.tsx
    - apps/web/src/components/home/Stats.tsx
    - apps/web/src/components/home/HowItWorks.tsx
    - apps/web/src/components/home/Hero.tsx
    - apps/web/src/routes/index.tsx
    - apps/app/src/routes/login.tsx
    - apps/app/src/routes/register.tsx
decisions:
  - "Course detail page derives title and icon from route param + shared module, chapters stay local"
  - "CSC 3217 course code references are legitimate and not cleaned up (course codes, not counts)"
metrics:
  duration: "12m"
  completed: "2026-03-31"
  tasks: 2
  files_modified: 9
---

# Phase 1 Plan 3: Migrate Course Consumers and Eliminate 217 References Summary

**One-liner:** All 9 dashboard/marketing course consumers migrated to `@lumina/ui` shared module with AIUB_COURSE_COUNT (51) replacing every hardcoded 217 course count.

## What Was Built

### Task 1: Migrate dashboard app course pages to shared data (commit: 8cccb11)

Three dashboard route files updated to import course data from `@lumina/ui`:

- **courses.tsx** — `enrolledCourses` (3 courses: CSC 1102, CSC 2106, CSC 3217 with mock progress) and `catalogCourses` (6 courses: CSC 2211, CSC 3215, CSC 1205, CSC 2108, COE 3204, CSC 3214) now derived from shared `courses` array. Phosphor icon imports for removed arrays cleaned up, `MagnifyingGlass` kept.

- **dashboard.tsx** — `enrolledCourses` (same 3 courses for consistency) and `recommendedCourses` (CSC 2211, CSC 3215, CSC 1205) now derived from shared module. Removed unused `Code`, `PaintBrush`, `Brain` icon imports.

- **courses.$courseId.tsx** — `courseTitle` and `CourseIcon` now derived from `Route.useParams().courseId` looked up against the shared `courses` array. Hardcoded "Production-Grade React" title replaced. The `chapters` constant (lesson structure) intentionally stays local as separate domain data.

### Task 2: Replace all remaining "217" references (commit: 93b8a97)

Six files updated to import `AIUB_COURSE_COUNT` from `@lumina/ui` and use it in place of the literal `217`:

| File | Change |
|------|--------|
| Stats.tsx | `value: AIUB_COURSE_COUNT`, tooltip updated to "AIUB CSE undergraduate catalog" |
| HowItWorks.tsx | Template literal `` `Browse ${AIUB_COURSE_COUNT} AIUB CSE courses...` `` |
| Hero.tsx | JSX `{AIUB_COURSE_COUNT} courses` in trust badges section |
| index.tsx (web) | Template literal in meta description |
| login.tsx | `String(AIUB_COURSE_COUNT)` in stats display |
| register.tsx | Template literal in benefits list |

## Verification Results

- `pnpm --filter @lumina/app exec tsc --noEmit` — exits 0 (clean)
- `pnpm --filter @lumina/web exec tsc --noEmit` — exits 0 (clean)
- `pnpm build` — exits 0, all assets built successfully
- `grep -rn "217" apps/ packages/ --include="*.tsx" --include="*.ts" | grep -v routeTree.gen` — only returns `CSC 3217` course code references (legitimate course IDs, not counts)

## Deviations from Plan

None — plan executed exactly as written.

Note: The grep verification returns matches for `CSC 3217` (course code for "Algorithms for Intelligent Systems") in `PathsGrid.tsx`, `courses.tsx`, and `dashboard.tsx`. These are AIUB course code identifiers, not the course count literal. The plan's acceptance criteria explicitly targets "217 as a course count string" — these matches are course codes and are correct.

## Known Stubs

None — all course data flows from the shared `@lumina/ui` module. Mock progress values (72%, 38%, 14%) and mock lesson counts are intentional UI scaffolding, not stubs blocking the plan's goal.

## Self-Check: PASSED

Files verified:
- FOUND: apps/app/src/routes/_authenticated/courses.tsx
- FOUND: apps/app/src/routes/_authenticated/dashboard.tsx
- FOUND: apps/app/src/routes/_authenticated/courses.$courseId.tsx
- FOUND: apps/web/src/components/home/Stats.tsx
- FOUND: apps/web/src/components/home/HowItWorks.tsx
- FOUND: apps/web/src/components/home/Hero.tsx
- FOUND: apps/web/src/routes/index.tsx
- FOUND: apps/app/src/routes/login.tsx
- FOUND: apps/app/src/routes/register.tsx

Commits verified:
- FOUND: 8cccb11 — feat(01-03): migrate dashboard course pages to @lumina/ui shared data
- FOUND: 93b8a97 — feat(01-03): replace all course count 217 with AIUB_COURSE_COUNT from @lumina/ui
