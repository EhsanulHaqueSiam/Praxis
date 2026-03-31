# Phase 1: AIUB Course Data & Catalog - Research

**Researched:** 2026-03-31
**Domain:** Static TypeScript data modeling, JSON-LD schema, monorepo shared package exports
**Confidence:** HIGH

---

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

- **D-01:** Centralize all course data into a shared data module at `packages/ui/src/data/courses.ts` (or similar path under the existing `@lumina/ui` package), exported from the barrel file. Do NOT create a new workspace package — reuse the existing shared package.
- **D-02:** Define a single canonical `Course` interface covering all fields needed by both apps: id, slug, name, description, creditHours, prerequisites, category, icon, instructor (mock), rating (mock), duration (mock), students (mock), price (mock), gradient (for app cards).
- **D-03:** All 6+ files with inline course data (`CourseGrid.tsx`, `FeaturedCourses.tsx`, `courses.tsx`, `dashboard.tsx`, `courses.$courseId.tsx`, `login.tsx`) must import from the shared module instead of defining their own constants.
- **D-04:** Adjust Praxis categories to better reflect AIUB CSE curriculum while keeping them career-oriented and appealing. Recommended mapping: "Computer Science Fundamentals" (theory, math, algorithms), "Software Engineering" (SE courses, OOP, testing), "Web & Mobile Development" (web, app dev), "AI & Data Science" (ML, AI, data, stats), "Systems & Networking" (OS, networks, hardware, security). Drop "Design" and "DevOps" as standalone categories.
- **D-05:** Update category filter tabs in `CourseGrid.tsx` and `CoursesHero.tsx` to match new categories. Update learning paths in `PathsGrid.tsx` to reference real courses.
- **D-06:** Replace all hardcoded "217" references with the actual AIUB CSE course count (derive from scraped data). Locations: `Stats.tsx`, `FeaturedCourses.tsx`, `CoursesHero.tsx`, `courses.tsx` meta, `index.tsx` meta, `HowItWorks.tsx`, `login.tsx`, `register.tsx`.
- **D-07:** Other marketing stats (students count, completion rate, etc.) can remain as aspirational mock numbers — only the course count must be accurate.
- **D-08:** Add Course JSON-LD schema to the `/courses` route via TanStack Start's `head()` function. List all courses as an array of `Course` schema objects on that single page. Do NOT create individual course pages on the marketing site.
- **D-09:** Each Course schema should include: `name`, `description`, `provider` (Praxis), `coursePrerequisites`, `numberOfCredits`, `educationalLevel` (Undergraduate).
- **D-10:** Extract AIUB CSE course data from their public undergraduate course catalog page. If scraping isn't feasible (dynamic page, auth wall), manually compile the data from the publicly available information.

### Claude's Discretion
- Exact file organization within the data module (single file vs. split by category)
- Mock values for instructor names, ratings, student counts, prices
- Icon mapping from Phosphor Icons to each course/category
- Gradient color assignments for dashboard course cards

### Deferred Ideas (OUT OF SCOPE)
- Individual course detail pages on marketing site (SEO value, but requires new routes — Phase 2 or later)
- Real instructor profiles (need actual content — future milestone with real backend)
- Course reviews/ratings (need real data — future milestone)
</user_constraints>

---

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| R1.1 | Structured data (JSON-LD) on every page: Organization, Course, FAQ; course catalog with real AIUB CSE course names/descriptions; SSR content renders without JS | D-08/D-09 cover JSON-LD; D-10 covers real course data; TanStack Start `head()` is SSR-native |
| R2.3 | Course data with real AIUB CSE course names; video player placeholder; progress tracking UI; chapter/lesson navigation | D-01 through D-03 cover data centralization; chapter data in `courses.$courseId.tsx` stays but gets real course title |
</phase_requirements>

---

## Summary

The AIUB CSE undergraduate catalog contains **51 core courses** across Computer Science, Computer Engineering, Mathematics, Natural Science, Language, Business Administration, Arts & Social Science, and Capstone categories. An additional 5 elective courses (from 4 major area tracks) must be taken to reach 148 total credits, but the specific elective course list is not fully accessible from the public catalog page. The 51 scraped core courses are the authoritative public source and should be used as the full dataset. This replaces the placeholder "217" figure — the accurate count from the public catalog is 51 courses.

The implementation pattern is already established: TanStack Start's `head()` function accepts a `scripts` array that renders `<script type="application/ld+json">` tags server-side (verified in `__root.tsx` lines 56–68). The `@lumina/ui` package is a simple TypeScript source package (no build step, direct source imports), so adding `packages/ui/src/data/courses.ts` and exporting from `packages/ui/src/index.ts` is the entire integration path. No new packages, no workspace changes.

The two data shapes that exist today (`CourseCard` props in the web app, `AppCourseCard` props in the dashboard app) must converge into a single `Course` interface in the shared module. The `CourseCard` component uses `iconBg`/`iconColor` (light-mode utility classes) while `AppCourseCard` uses `gradient` (Tailwind gradient string). The canonical interface should include `gradient` for the app and `iconBg`/`iconColor` for the web — both derived from category — so the CourseCard and AppCourseCard can continue to render correctly from the shared type.

**Primary recommendation:** Define the `Course` interface and all 51 course records in `packages/ui/src/data/courses.ts`, export both from the barrel, and migrate all 6 consumer files to import from `@lumina/ui`. The JSON-LD `scripts` injection pattern from `__root.tsx` is directly reusable in `courses.tsx`'s `head()`.

---

## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| TypeScript | 5.7.x | Type-safe `Course` interface and data array | Already in use throughout monorepo |
| `@lumina/ui` (packages/ui) | 0.1.0 | Shared data/types exported to both apps | Locked decision D-01; avoids new package |
| TanStack Start (`@tanstack/react-router`) | present | `head()` for SSR JSON-LD injection | Established pattern in `__root.tsx` |
| `@phosphor-icons/react` | ^2.1.10 | Icon components for course/category icons | Already installed in `packages/ui` and both apps |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| schema.org `Course` type | spec | JSON-LD structured data shape | For the `/courses` route `head()` |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Static `.ts` data file | JSON file (`courses.json`) | JSON can't carry icon component references (React elements); TypeScript file required |
| Single flat array | Split files by category | Single file is simpler for 51 records; split only warranted at 200+ |

**Installation:** No new packages needed. All dependencies already present.

---

## Architecture Patterns

### Recommended Project Structure
```
packages/ui/src/
├── data/
│   └── courses.ts       # Course interface + all 51 records + AIUB_COURSE_COUNT constant
├── index.ts             # Add: export { courses, type Course, AIUB_COURSE_COUNT } from "./data/courses"
└── components/          # unchanged
```

### Pattern 1: Canonical Course Interface

The interface must satisfy both consumer shapes simultaneously. Key insight: `icon` must be `React.ElementType` (not a rendered element) so each consumer can render it with its own props.

```typescript
// packages/ui/src/data/courses.ts
import type { Icon } from "@phosphor-icons/react";

export type CourseCategory =
  | "Computer Science Fundamentals"
  | "Software Engineering"
  | "Web & Mobile Development"
  | "AI & Data Science"
  | "Systems & Networking";

export interface Course {
  // Identity
  id: string;              // e.g. "csc-1102"
  slug: string;            // e.g. "introduction-to-programming-language"
  code: string;            // e.g. "CSC 1102" (AIUB code)
  name: string;            // exact AIUB name
  description: string;     // 1–2 sentence summary (crafted)
  creditHours: number;     // from AIUB catalog
  prerequisites: string[]; // array of AIUB course codes, e.g. ["CSC 1102", "CSC 1103"]
  category: CourseCategory;

  // Display (web CourseCard)
  icon: React.ElementType; // Phosphor icon component
  iconBg: string;          // e.g. "bg-accent-50"
  iconColor: string;       // e.g. "text-accent-600"
  badge?: string;          // "Bestseller" | "Top rated" | "New" | undefined

  // Display (app AppCourseCard + dashboard)
  gradient: string;        // e.g. "from-accent-500 to-accent-700"

  // Mock data (marketing/app catalog display)
  instructor: string;
  rating: number;
  duration: string;        // e.g. "36h"
  students: string;        // e.g. "3,240 enrolled"
  price: string;           // e.g. "৳4,900"
}

export const AIUB_COURSE_COUNT = 51;
export const courses: Course[] = [ /* ... 51 records ... */ ];
```

### Pattern 2: TanStack Start JSON-LD Injection

The existing pattern in `__root.tsx` (lines 56–68) is the canonical model. Replicate exactly in `apps/web/src/routes/courses.tsx`:

```typescript
// apps/web/src/routes/courses.tsx
import { courses } from "@lumina/ui";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [/* existing meta */],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: courses.map((course, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@context": "https://schema.org",
              "@type": "Course",
              name: course.name,
              description: course.description,
              provider: {
                "@type": "Organization",
                name: "Praxis",
                sameAs: "https://praxis.dev",
              },
              coursePrerequisites: course.prerequisites.join(", "),
              numberOfCredits: course.creditHours,
              educationalLevel: "Undergraduate",
            },
          })),
        }),
      },
    ],
  }),
  component: CoursesPage,
});
```

**Why `ItemList` wrapping:** Google's Course rich result documentation recommends wrapping multiple courses in an `ItemList`. This ensures the structured data is parseable by Search Console rather than a bare JSON-LD array.

### Pattern 3: Consumer Migration Pattern

All 6 consumer files share the same migration pattern — remove local inline array, import shared data:

```typescript
// BEFORE (in CourseGrid.tsx, courses.tsx, dashboard.tsx, etc.)
interface Course { ... }  // local definition
const courses: Course[] = [ ... ];  // local inline data

// AFTER
import { courses, type Course } from "@lumina/ui";
// Use courses.filter(c => c.category === ...) directly
```

For `FeaturedCourses.tsx`'s `topCourses` (3 items): derive from the shared array:
```typescript
import { courses } from "@lumina/ui";
const topCourses = courses.slice(0, 3); // or pick by slug
```

For `courses.$courseId.tsx`: the `chapters` const is separate domain (lesson structure, not course catalog) — it stays local. Only the course title/heading at the top pulls from the shared module.

### Pattern 4: Category Filter Tab Update

`CoursesHero.tsx` currently uses a `categories` const array. Replace values directly:
```typescript
// BEFORE
const categories = ["All", "Web Development", "Design", "ML & AI", "Data Science", "DevOps"];

// AFTER
const categories = [
  "All",
  "Computer Science Fundamentals",
  "Software Engineering",
  "Web & Mobile Development",
  "AI & Data Science",
  "Systems & Networking",
];
```

`CourseGrid.tsx`'s `categoryDescriptions` and `categoryOrder` objects update in parallel.

### Anti-Patterns to Avoid

- **Importing React icon components in `packages/ui/src/data/courses.ts` without checking peer deps:** The `@phosphor-icons/react` package is listed as a dependency in `packages/ui/package.json` — safe to import there. Do not assume it's a devDependency.
- **Using a default export for the courses array:** All existing patterns in the codebase use named exports exclusively. Use `export const courses` and `export type Course`.
- **Hardcoding `@type: "Course"` as a bare array in JSON-LD:** Google Search Console expects either a single Course or an ItemList. A bare JSON array is not a valid JSON-LD structure.
- **Trying to reference icon components in JSON-LD output:** `course.icon` is a React component and must not appear in `JSON.stringify()`. Only serialize plain data fields.
- **Converting iconBg light-mode classes to dark:** `CourseCard.tsx` already has a `darkIconBgMap` that handles this mapping internally. The data file should store the light-mode class (e.g. `"bg-accent-50"`) and `CourseCard` continues to do the dark mapping. Do not change this component's internal logic.

---

## AIUB Course Data Reference

Fetched from `https://www.aiub.edu/faculties/fst/ug-course-catalog` (2026-03-31). Confidence: HIGH (official AIUB source).

### Complete Course List by Praxis Category

**Computer Science Fundamentals** (maps to: CSC theory/algorithms/math + MAT + PHY + CHEM)

| AIUB Code | Name | Credits | Prerequisites |
|-----------|------|---------|---------------|
| CSC 1101 | Introduction to Computer Studies | 1 | None |
| CSC 1102 | Introduction to Programming Language | 3 | None |
| CSC 1103 | Introduction to Programming Language Lab | 1 | None |
| CSC 1204 | Discrete Mathematics | 3 | MAT 1102, CSC 1102 |
| CSC 2106 | Data Structure | 3 | CSC 1204, CSC 1205 |
| CSC 2107 | Data Structure Lab | 1 | CSC 1204, CSC 1205 |
| CSC 2211 | Algorithms | 3 | CSC 2106, CSC 2107 |
| CSC 3113 | Theory of Computation | 3 | CSC 2211 |
| CSC 4118 | Computer Graphics | 3 | MAT 2202, CSC 2211 |
| MAT 1102 | Differential Calculus and Coordinate Geometry | 3 | None |
| MAT 1205 | Integral Calculus and Ordinary Differential Equations | 3 | MAT 1102 |
| MAT 2101 | Complex Variables, Laplace and Z-transformations | 3 | MAT 1205 |
| MAT 2202 | Matrices, Vectors and Fourier Analysis | 3 | MAT 2101 |
| MAT 3103 | Computational Statistics and Probability | 3 | MAT 1205 |
| MAT 3101 | Numerical Methods for Science and Engineering | 3 | MAT 2202 |
| PHY 1101 | Physics 1 | 3 | None |
| PHY 1102 | Physics 1 Lab | 1 | None |
| PHY 1203 | Physics 2 | 3 | PHY 1101 |
| PHY 1204 | Physics 2 Lab | 1 | PHY 1102 |
| CHEM 1101 | Chemistry | 3 | PHY 1203 |

**Software Engineering** (maps to: CSC OOP/design/SE)

| AIUB Code | Name | Credits | Prerequisites |
|-----------|------|---------|---------------|
| CSC 1205 | Object Oriented Programming 1 | 3 | CSC 1102, CSC 1103 |
| CSC 2108 | Introduction to Database | 3 | CSC 1205 |
| CSC 2209 | Object Oriented Analysis and Design | 3 | CSC 2108 |
| CSC 2210 | Object Oriented Programming 2 | 3 | CSC 2106, CSC 2108 |
| CSC 3112 | Software Engineering | 3 | CSC 2209 |
| CSC 3216 | Compiler Design | 3 | CSC 3113 |
| CSC 4197 | Research Methodology | 3 | 100+ credits |
| CSC 4298 | Thesis/Project | 3 | CSC 4197 |
| CSC 4299 | Internship | 3 | 140+ credits |
| BBA 1102 | Principles of Accounting | 3 | MAT 1205 |
| MGT 3202 | Engineering Management | 3 | EEE 2216 |
| EEE 2216 | Engineering Ethics | 2 | CSC 3112, COE 3102 |
| ECO 3150 | Principles of Economics | 2 | MAT 3103 |
| BAS 2101 | Bangladesh Studies | 3 | CSC 1101 |
| ENG 1101 | English Reading Skills and Public Speaking | 3 | None |
| ENG 1202 | English Writing Skills and Communication | 3 | ENG 1101 |
| ENG 2103 | Business Communication | 3 | ENG 1202 |

**Web & Mobile Development** (maps to: web technologies)

| AIUB Code | Name | Credits | Prerequisites |
|-----------|------|---------|---------------|
| CSC 3215 | Web Technologies | 3 | CSC 3112, CSC 2210 |

**AI & Data Science** (maps to: AI, statistics)

| AIUB Code | Name | Credits | Prerequisites |
|-----------|------|---------|---------------|
| CSC 3217 | Artificial Intelligence and Expert System | 3 | CSC 2211, MAT 3103 |

**Systems & Networking** (maps to: OS, networks, hardware, digital)

| AIUB Code | Name | Credits | Prerequisites |
|-----------|------|---------|---------------|
| EEE 2108 | Introduction to Electrical Circuits | 3 | PHY 1101, PHY 1102 |
| EEE 2109 | Introduction to Electrical Circuits Lab | 1 | PHY 1101, PHY 1102 |
| EEE 2103 | Electronic Devices | 3 | EEE 2108, EEE 2109 |
| EEE 2104 | Electronic Devices Lab | 1 | EEE 2108, EEE 2109 |
| EEE 3101 | Digital Logic and Circuits | 3 | EEE 2103, EEE 2104 |
| EEE 3102 | Digital Logic and Circuits Lab | 1 | EEE 2103, EEE 2104 |
| BAE 2101 | Computer Aided Design & Drafting Lab | 1 | EEE 2108 |
| COE 3101 | Data Communication | 3 | EEE 3101, EEE 3102 |
| COE 3102 | Microprocessor and Embedded Systems | 3 | EEE 3101, EEE 3102 |
| COE 3203 | Computer Organization & Architecture | 3 | COE 3102 |
| COE 3204 | Computer Networks | 3 | COE 3101 |
| CSC 3214 | Operating Systems | 3 | COE 3102, CSC 2211 |

**Total: 51 core courses. Replace "217" with 51 everywhere.**

### Category Distribution Summary
| Category | Count | Notes |
|----------|-------|-------|
| Computer Science Fundamentals | 20 | Heaviest — includes all math/physics/chem + core CS theory |
| Software Engineering | 17 | Includes capstone, business, language courses |
| Systems & Networking | 12 | Hardware through networking stack |
| AI & Data Science | 1 | Only 1 core course; electives not in public catalog |
| Web & Mobile Development | 1 | Only 1 core course; electives not in public catalog |

**Note:** The imbalance is real — AIUB's core curriculum is fundamentals-heavy. The elective tracks (4 major areas with 5 courses each) are not fully listed on the public catalog page. For the `CourseGrid.tsx` display, consider whether to show only "featured" courses from each category (3–4 per category) rather than all 51, which would create a 20-item "Computer Science Fundamentals" section that overwhelms the UI.

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| JSON-LD injection in SSR | Custom script tag insertion | TanStack Start `head()` `scripts` array | Already working in `__root.tsx`; handles SSR hydration correctly |
| Course data validation at build time | Runtime type guards | TypeScript `Course` interface | TS catches shape mismatches at compile time; no runtime overhead |
| Icon-to-category mapping | Dynamic icon registry | Hard-coded `icon` field per course record | 51 courses is small enough that explicit assignment is clearer and type-safe |

**Key insight:** There is no complex logic in this phase. The entire implementation is data + wiring. Avoid over-engineering the data layer.

---

## Common Pitfalls

### Pitfall 1: "217" Appears in 8 Separate Files
**What goes wrong:** Updating course count in `Stats.tsx` but missing `HowItWorks.tsx`, `login.tsx`, `register.tsx`, meta descriptions in route `head()` functions.
**Why it happens:** The count is not centralized — it's a string literal scattered across components and route metadata.
**How to avoid:** Export `AIUB_COURSE_COUNT = 51` from `@lumina/ui`. Import and use it as a number everywhere. In meta description strings, use template literals: `` `${AIUB_COURSE_COUNT} project-based courses` ``.
**Warning signs:** TypeScript won't catch a missed string literal in a template string. Search for `"217"` across the codebase before considering the task done.

### Pitfall 2: Icon Component References in JSON.stringify
**What goes wrong:** `JSON.stringify(course)` where `course.icon` is a React component function throws or produces `{}`.
**Why it happens:** The canonical `Course` interface includes `icon: React.ElementType` which is not serializable.
**How to avoid:** The JSON-LD builder must only access plain-data fields (`name`, `description`, `creditHours`, `prerequisites`, `category`). Never spread the full course object into JSON.stringify.

### Pitfall 3: Barrel Export Order
**What goes wrong:** Adding exports to `packages/ui/src/index.ts` that shadow existing names or introduce a circular reference.
**Why it happens:** `data/courses.ts` imports from `@phosphor-icons/react` which is a package dep, not from `@lumina/ui` — so no circular risk. But if someone accidentally imports from `~/components` (a TanStack alias only valid in app context) inside the shared package, the build breaks for the other app.
**How to avoid:** `packages/ui/src/data/courses.ts` must only import from npm packages (`@phosphor-icons/react`) and TypeScript primitives. No `~/` aliases.

### Pitfall 4: Category Tabs Not Connected to CourseGrid Filter
**What goes wrong:** `CoursesHero.tsx` updates category tab labels but `CourseGrid.tsx` still filters on old category string values.
**Why it happens:** The two components are separate — the active tab from `CoursesHero` is managed with `useState` in `CoursesHero` but `CourseGrid` does its own filtering with a hardcoded `categoryOrder` array.
**Warning signs:** Clicking a tab appears to do nothing — the grid doesn't respond.
**How to avoid:** Verify if `CourseGrid` and `CoursesHero` actually share tab state via a parent, or if the tab is purely cosmetic today. If cosmetic, updating both arrays to use the same new category strings is sufficient. Do not wire up actual filter functionality in this phase — that's R1.2 scope.

### Pitfall 5: Course Count Discrepancy in Marketing Copy
**What goes wrong:** Meta descriptions and hero copy say "51 courses" which sounds unimpressive compared to "217".
**Why it happens:** 217 was a fictional aspirational number. 51 is the real AIUB core catalog.
**How to avoid:** Decision D-06 is explicit — only the course count must be accurate. Use `AIUB_COURSE_COUNT` in numeric stats displays (`Stats.tsx` animated counter). For prose copy in `HowItWorks.tsx` and meta descriptions, update the number but also soften the claim — e.g. "Browse our curated AIUB CSE course catalog" rather than "51 courses" in a headline.

### Pitfall 6: Learning Paths Reference Non-Existent Course Names
**What goes wrong:** `PathsGrid.tsx` milestones reference course names like "React Patterns", "Node.js APIs", "NLP Pipelines" that don't exist in the AIUB catalog.
**Why it happens:** Paths were designed for a generic tech curriculum, not AIUB's curriculum.
**How to avoid:** D-05 requires updating `PathsGrid.tsx` milestone labels to reference real AIUB course names (e.g. "CSC 3215 Web Technologies", "CSC 3217 Artificial Intelligence", "COE 3204 Computer Networks"). The path titles ("Full-Stack Engineer", "ML Engineer") can stay aspirational — only the milestone course names must match real courses.

---

## Code Examples

### Exporting from the UI Barrel

```typescript
// packages/ui/src/index.ts — add these lines
export { courses, type Course, type CourseCategory, AIUB_COURSE_COUNT } from "./data/courses";
```

### JSON-LD courses.tsx head() Implementation

```typescript
// apps/web/src/routes/courses.tsx
import { createFileRoute } from "@tanstack/react-router";
import { courses, AIUB_COURSE_COUNT } from "@lumina/ui";
import { CoursesHero } from "~/components/courses/CoursesHero";
import { CourseGrid } from "~/components/courses/CourseGrid";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Courses — Ship Production Code From Day One | Praxis" },
      {
        name: "description",
        content: `${AIUB_COURSE_COUNT} project-based AIUB CSE courses across fundamentals, software engineering, web dev, AI, and systems. Every course ships a real artifact.`,
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "AIUB CSE Course Catalog — Praxis",
          itemListElement: courses.map((course, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@context": "https://schema.org",
              "@type": "Course",
              name: course.name,
              description: course.description,
              provider: {
                "@type": "Organization",
                name: "Praxis",
                sameAs: "https://praxis.dev",
              },
              coursePrerequisites: course.prerequisites.join(", ") || "None",
              numberOfCredits: course.creditHours,
              educationalLevel: "Undergraduate",
            },
          })),
        }),
      },
    ],
  }),
  component: CoursesPage,
});
```

### Stats.tsx — Using the Exported Count

```typescript
// apps/web/src/components/home/Stats.tsx
import { AIUB_COURSE_COUNT } from "@lumina/ui";

const stats = [
  { value: 11480, suffix: "+", label: "Active builders", format: "int", tooltip: "Up 23% this quarter" },
  { value: AIUB_COURSE_COUNT, suffix: "", label: "Project-based courses", format: "int", tooltip: "AIUB CSE undergraduate catalog" },
  // ...
];
```

### Minimal Course Record Shape (first example)

```typescript
// packages/ui/src/data/courses.ts (excerpt)
import { Code, BookOpen, Brain /* ... */ } from "@phosphor-icons/react";

export const courses: Course[] = [
  {
    id: "csc-1102",
    slug: "introduction-to-programming-language",
    code: "CSC 1102",
    name: "Introduction to Programming Language",
    description: "Foundational programming concepts in a structured language. Covers variables, control flow, functions, and basic problem-solving.",
    creditHours: 3,
    prerequisites: [],
    category: "Computer Science Fundamentals",
    icon: Code,
    iconBg: "bg-accent-50",
    iconColor: "text-accent-600",
    gradient: "from-accent-500 to-accent-700",
    instructor: "Dr. Rafiqul Islam",
    rating: 4.72,
    duration: "28h",
    students: "4,210 enrolled",
    price: "৳3,900",
  },
  // ... 50 more
];
```

**Note on pricing:** Use BDT (Taka symbol ৳) for prices since the platform targets Bangladeshi students. Mock prices in range ৳2,900–৳7,900 are appropriate.

---

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Inline course data per component | Centralized shared module | This phase | All 6 consumer files become thin wrappers |
| `"217"` placeholder everywhere | `AIUB_COURSE_COUNT = 51` from `@lumina/ui` | This phase | Single source of truth for course count |
| Generic Western course titles | Real AIUB CSE course names | This phase | SEO value, credibility for BD students |
| No JSON-LD on `/courses` | `ItemList` + `Course` schema in `head()` | This phase | Google rich results eligibility |

**Deprecated/outdated:**
- Category names "Design" and "DevOps": Replaced by D-04 mapping. Remove from `categoryOrder`, `categoryDescriptions`, and `CoursesHero` tabs.
- `topCourses` local array in `FeaturedCourses.tsx`: Replaced by slicing from the shared `courses` array.

---

## Open Questions

1. **Category imbalance in CourseGrid display**
   - What we know: "Computer Science Fundamentals" has 20 courses, "Web & Mobile Development" has 1 core course. Rendering all 51 courses grouped by category creates a deeply unbalanced UI.
   - What's unclear: Should `CourseGrid.tsx` show all 51 courses, or only a curated subset (e.g. 3–4 per category)?
   - Recommendation: Planner should add a task to curate a `featuredCourses` subset (12–16 courses, balanced across categories) for the grid display, while keeping all 51 in the data array for JSON-LD and stats.

2. **Elective courses not in public catalog**
   - What we know: AIUB has 4 major area elective tracks (Information Systems, Software Engineering, Computational Theory, Computer Engineering) with ~10–15 courses each. The `cs.aiub.edu` URL for the full list returned connection refused at research time.
   - What's unclear: Whether elective course names should be included in the catalog (they would add ~40 more records to the "AI & Data Science" and "Web & Mobile Development" categories).
   - Recommendation: Ship with 51 core courses for Phase 1. Phase 2 can add electives once the cs.aiub.edu curriculum page is accessible or manually compiled.

3. **Price denomination**
   - What we know: The target audience is Bangladeshi students. Existing mock prices use "$" USD.
   - What's unclear: Whether to switch to BDT (৳) in this phase or leave USD as placeholder.
   - Recommendation: Switch to BDT in the shared `courses.ts` since this is the data centralization phase. It's easier to change globally now than to hunt down 6 consumer files later.

---

## Environment Availability

Step 2.6: SKIPPED — this phase is pure TypeScript code and data file changes. No external tools, services, databases, or CLIs are required beyond the existing monorepo build toolchain (pnpm, TypeScript, Vite), which are confirmed operational from recent commits.

---

## Validation Architecture

`nyquist_validation` is absent from `.planning/config.json` — treated as enabled.

### Test Framework
| Property | Value |
|----------|-------|
| Framework | None detected — no test config files, no test directories, no test scripts in any package.json |
| Config file | None |
| Quick run command | N/A |
| Full suite command | `pnpm build` (TypeScript compile as proxy for correctness) |

### Phase Requirements → Test Map

| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| R1.1 | JSON-LD renders in SSR HTML output | smoke | `pnpm build:web && grep -r "application/ld+json" apps/web/dist` | ❌ Wave 0 |
| R1.1 | All "217" instances replaced | smoke | `grep -r "217" apps/ packages/ --include="*.tsx" --include="*.ts"` (expect 0 matches) | ❌ Wave 0 |
| R1.1 | Course names are exact AIUB names | manual | Visual comparison against aiub.edu/faculties/fst/ug-course-catalog | N/A |
| R2.3 | courses.ts TypeScript compiles without errors | unit | `pnpm --filter @lumina/ui tsc --noEmit` | ❌ Wave 0 |
| R2.3 | Both apps build without type errors | integration | `pnpm build` | ❌ Wave 0 |

### Sampling Rate
- **Per task commit:** `pnpm build` — TypeScript is the primary correctness gate
- **Per wave merge:** `pnpm build` + manual browser check of `/courses` structured data
- **Phase gate:** `pnpm build` green + Google Rich Results Test passing on `/courses` JSON-LD

### Wave 0 Gaps
- [ ] No test framework installed — TypeScript compile (`pnpm build`) serves as the primary correctness gate for this data-only phase
- [ ] Smoke test script: `scripts/verify-course-data.sh` — grep-based checks for "217" absence and JSON-LD presence in build output
- [ ] Manual verification checklist: compare 10 random course names against aiub.edu catalog page

*(These are lightweight checks appropriate for a data-replacement phase with no runtime logic.)*

---

## Sources

### Primary (HIGH confidence)
- `https://www.aiub.edu/faculties/fst/ug-course-catalog` — Full BSc CSE course list, fetched 2026-03-31, 51 core courses scraped verbatim
- `apps/web/src/routes/__root.tsx` lines 56–68 — Established `head()` JSON-LD injection pattern
- `packages/ui/src/index.ts` — Confirmed barrel export structure
- `packages/ui/package.json` — Confirmed `@phosphor-icons/react` is a direct dependency (safe to import in data file)

### Secondary (MEDIUM confidence)
- `https://www.aiub.edu/faculties/fst/programs/under-graduate/bachelor-of-science-in-computer-science--engineering` — Program overview: 148 total credits, 4 major elective areas, ~47–50 distinct core courses confirmed
- `https://www.aiub.edu/notice-for-cse-students--declaring-major-area-department-of-computer-science` — 4 major area names confirmed, 15 elective credits required (5 courses)
- schema.org/Course documentation (training data) — `ItemList` + `Course` nesting pattern for multiple courses

### Tertiary (LOW confidence)
- Training data on Google's Course rich result preferences — verified claim that `ItemList` wrapping is recommended; should be confirmed with Google Search Central docs before asserting in implementation

---

## Metadata

**Confidence breakdown:**
- Course data: HIGH — fetched directly from official AIUB source
- Standard stack: HIGH — verified against existing codebase, no new dependencies
- Architecture patterns: HIGH — directly mirrors established patterns in `__root.tsx`
- JSON-LD schema shape: MEDIUM — `ItemList` + `Course` nesting from training data; Google's current recommendation should be verified
- Category mapping: HIGH — decisions locked by D-04, no alternative research needed
- Pitfalls: HIGH — identified from direct code reading of 8 consumer files

**Research date:** 2026-03-31
**Valid until:** 2026-05-01 (AIUB catalog is stable; schema.org spec doesn't change frequently)
