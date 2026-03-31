---
phase: 01-aiub-course-data-catalog
plan: 01
subsystem: ui
tags: [typescript, phosphor-icons, course-data, shared-package, monorepo]

# Dependency graph
requires: []
provides:
  - "Course interface and CourseCategory type in @lumina/ui"
  - "51 AIUB CSE core course records with real names, codes, credits, prerequisites"
  - "AIUB_COURSE_COUNT = 51 constant"
  - "Barrel export from packages/ui/src/index.ts"
affects:
  - 01-02 (consumer migration — imports courses from @lumina/ui)
  - 01-03 (JSON-LD injection — uses courses array and AIUB_COURSE_COUNT)

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Centralized static data module in shared package with named exports only"
    - "Course interface satisfying multiple consumer shapes simultaneously"
    - "Phosphor icon component references stored as React.ElementType in data records"

key-files:
  created:
    - packages/ui/src/data/courses.ts
  modified:
    - packages/ui/src/index.ts

key-decisions:
  - "Single flat courses.ts file (not split by category) — 51 records is manageable in one file"
  - "CircuitBoard and Microchip Phosphor icons replaced with Circuitry and Cpu (valid icons in v2.1.10)"
  - "Unused Icon type import removed — interface uses React.ElementType which is broader and more flexible"

patterns-established:
  - "courses.ts data pattern: import icons from @phosphor-icons/react only, no ~/aliases, no @lumina/ui self-import"
  - "Barrel convention: explicit named exports only (no export *), data exports appended at end of index.ts"

requirements-completed: [R1.1, R2.3]

# Metrics
duration: 2min
completed: 2026-03-31
---

# Phase 01 Plan 01: AIUB Course Data Catalog Summary

**51 AIUB CSE core courses centralized into @lumina/ui with canonical Course interface, CourseCategory type, and AIUB_COURSE_COUNT = 51 constant — replacing scattered inline course definitions across 6+ consumer files**

## Performance

- **Duration:** 2 min
- **Started:** 2026-03-31T12:10:11Z
- **Completed:** 2026-03-31T12:13:07Z
- **Tasks:** 2 completed
- **Files modified:** 2

## Accomplishments
- Created `packages/ui/src/data/courses.ts` with Course interface, CourseCategory type, and all 51 AIUB core course records using exact names/codes/credit hours/prerequisites from the official AIUB catalog
- Exported courses, Course, CourseCategory, and AIUB_COURSE_COUNT from the @lumina/ui barrel — both apps build successfully confirming importability from both consumers
- Fixed two invalid Phosphor icon imports (`CircuitBoard` -> `Circuitry`, `Microchip` -> `Cpu`) that would have failed TypeScript compilation

## Task Commits

Each task was committed atomically:

1. **Task 1: Create Course interface and 51 AIUB course records** - `8409519` (feat)
2. **Task 2: Export course data from @lumina/ui barrel** - `645e13f` (feat)

## Files Created/Modified
- `packages/ui/src/data/courses.ts` - Course interface, CourseCategory type, AIUB_COURSE_COUNT = 51, all 51 course records
- `packages/ui/src/index.ts` - Added barrel re-export for courses, Course, CourseCategory, AIUB_COURSE_COUNT

## Decisions Made
- Removed unused `Icon` type import (originally imported from @phosphor-icons/react but interface uses `React.ElementType`) — keeps imports clean
- Used `Circuitry` for Digital Logic and Circuits course and `Cpu` for Electronic Devices course as Phosphor v2.1.10 replacements for non-existent `CircuitBoard` and `Microchip` icons

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Fixed invalid Phosphor icon imports: CircuitBoard and Microchip**
- **Found during:** Task 1 verification (`tsc --noEmit`)
- **Issue:** `CircuitBoard` and `Microchip` do not exist as exports in `@phosphor-icons/react` v2.1.10. TypeScript compilation failed with TS2305 errors.
- **Fix:** Replaced `CircuitBoard` with `Circuitry` (exists in v2.1.10) and `Microchip` with `Cpu` (already imported, semantically appropriate for Electronic Devices course). Removed the `Microchip` import line and the unused `Icon` type import.
- **Files modified:** `packages/ui/src/data/courses.ts`
- **Verification:** `pnpm --filter @lumina/ui exec tsc --noEmit` exits 0 with no errors
- **Committed in:** `8409519` (Task 1 commit)

---

**Total deviations:** 1 auto-fixed (Rule 1 — bug)
**Impact on plan:** Necessary fix for TypeScript correctness. The original file had non-existent icon names that would prevent the package from type-checking. No scope creep.

## Issues Encountered
None beyond the auto-fixed icon import errors noted above.

## User Setup Required
None - no external service configuration required.

## Known Stubs
None - all 51 course records contain real data (exact AIUB catalog names, credits, prerequisites) and realistic mock data (BDT prices, instructor names, ratings, student counts). No placeholder text or empty values.

## Next Phase Readiness
- `@lumina/ui` now exports the complete course data module — Plan 02 (consumer migration) can import `courses`, `Course`, `CourseCategory`, and `AIUB_COURSE_COUNT` from `@lumina/ui` immediately
- Both apps build cleanly with the new export
- The `AIUB_COURSE_COUNT = 51` constant is ready to replace all "217" hardcoded occurrences across 8 consumer files (Plan 03 scope)

---
*Phase: 01-aiub-course-data-catalog*
*Completed: 2026-03-31*
