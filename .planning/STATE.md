# Praxis — Project State

## Current
- **Milestone**: 1 (Production-Ready Shell)
- **Phase**: 1 — AIUB Course Data & Catalog
- **Plan**: 01-02 (next to execute)
- **Status**: Plan 01-01 complete — course data module shipped
- **Resume**: `.planning/phases/01-aiub-course-data-catalog/01-02-PLAN.md`

## History
| Date | Action | Notes |
|------|--------|-------|
| 2026-03-31 | Plan 01-01 complete | Course data module: 51 courses, Course interface, AIUB_COURSE_COUNT=51 in @lumina/ui |
| 2026-03-31 | Phase 1 context gathered | Assumptions mode, 10 decisions captured |
| 2026-03-31 | Codebase mapped | 7 docs, 1,601 lines in .planning/codebase/ |
| 2026-03-31 | Project initialized | PROJECT.md, REQUIREMENTS.md, ROADMAP.md created |

## Key Decisions
- **Audience**: AIUB CSE students (Bangladesh)
- **Monetization**: SSLCommerz (future), no payments in M1
- **Backend**: None yet — localStorage mock auth
- **Content**: Mock for now, DRM video player shell in Phase 5
- **Aesthetic**: Linear.app dark theme, Framer components
- **Course data**: Single flat courses.ts in @lumina/ui, named exports only, BDT pricing
- **Icon library**: Phosphor v2.1.10 — use Circuitry (not CircuitBoard), Cpu (not Microchip)

## Constant Rules
1. `/frontend-design` for ALL design work
2. `/agent-browser` for ALL verification (screenshots)
3. Framer marketplace components adapted for the site
4. SSR content works without JS
5. Two sites feel like ONE
6. Dark theme: zinc-950, accent green, glass, gradients
