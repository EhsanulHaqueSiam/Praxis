# Phase 1: AIUB Course Data & Catalog - Discussion Log (Assumptions Mode)

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions captured in CONTEXT.md — this log preserves the analysis.

**Date:** 2026-03-31
**Phase:** 01-AIUB Course Data & Catalog
**Mode:** assumptions (--auto)
**Areas analyzed:** Course Data Architecture, Category Mapping, Stats & Course Count, JSON-LD Schema, Data Source

## Assumptions Presented

### Course Data Architecture
| Assumption | Confidence | Evidence |
|------------|-----------|----------|
| Centralize into shared module in @lumina/ui, not a new package | Likely | 6+ files with inline course data: CourseGrid.tsx, FeaturedCourses.tsx, courses.tsx, dashboard.tsx, courses.$courseId.tsx |
| Single canonical Course interface for both apps | Likely | Different shapes across files — needs unification |

### Category Mapping
| Assumption | Confidence | Evidence |
|------------|-----------|----------|
| Adjust categories to fit AIUB CSE curriculum (CS Fundamentals, SE, Web & Mobile, AI & Data, Systems & Networking) | Unclear | Current categories (Web Dev, Design, ML&AI, Data Science, DevOps) don't map to AIUB theory courses |

### Stats & Course Count
| Assumption | Confidence | Evidence |
|------------|-----------|----------|
| Replace "217" with actual AIUB course count across 8+ locations | Confident | "217" found in Stats.tsx, FeaturedCourses.tsx, CoursesHero.tsx, route metas, login.tsx, register.tsx |

### JSON-LD Schema
| Assumption | Confidence | Evidence |
|------------|-----------|----------|
| Add Course schema array on /courses route via head() function | Likely | Existing EducationalOrganization JSON-LD in __root.tsx uses same pattern |

## Corrections Made

No corrections — all assumptions confirmed (auto mode).

## Auto-Resolved

- Category Mapping Strategy: auto-selected recommended option — adjust categories to better fit AIUB CSE curriculum while keeping career-oriented groupings (CS Fundamentals, SE, Web & Mobile, AI & Data, Systems & Networking)

## External Research Needed

- AIUB CSE course catalog data source — page structure and data availability at https://www.aiub.edu/faculties/fst/ug-course-catalog
- schema.org Course type — which properties Google Search actually consumes for rich results
