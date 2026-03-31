---
phase: 1
slug: aiub-course-data-catalog
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-03-31
---

# Phase 1 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | None — TypeScript compile as primary correctness gate |
| **Config file** | none — Wave 0 creates smoke script |
| **Quick run command** | `pnpm build` |
| **Full suite command** | `pnpm build && bash scripts/verify-course-data.sh` |
| **Estimated runtime** | ~30 seconds |

---

## Sampling Rate

- **After every task commit:** Run `pnpm build`
- **After every plan wave:** Run `pnpm build && bash scripts/verify-course-data.sh`
- **Before `/gsd:verify-work`:** Full suite must be green
- **Max feedback latency:** 30 seconds

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 01-01 | 01 | 0 | R2.3 | smoke | `bash scripts/verify-course-data.sh` | ❌ W0 | ⬜ pending |
| 02-01 | 02 | 1 | R1.1, R2.3 | unit | `pnpm --filter @lumina/ui tsc --noEmit` | ❌ W0 | ⬜ pending |
| 02-02 | 02 | 1 | R1.1 | smoke | `grep -r "217" apps/ packages/ --include="*.tsx" --include="*.ts" \| wc -l` (expect 0) | ❌ W0 | ⬜ pending |
| 03-01 | 03 | 2 | R1.1 | smoke | `pnpm build:web && grep -r "application/ld+json" apps/web/dist` | ❌ W0 | ⬜ pending |
| 03-02 | 03 | 2 | R1.1 | manual | Visual comparison against aiub.edu catalog | N/A | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [ ] `scripts/verify-course-data.sh` — grep-based smoke tests for "217" absence, JSON-LD presence, course count match
- [ ] No test framework needed — TypeScript compile + grep scripts sufficient for data-only phase

*Existing infrastructure (pnpm build) covers TypeScript compilation checks.*

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Course names match AIUB catalog | R1.1 | Requires visual comparison to external website | Compare 10 random course names against aiub.edu/faculties/fst/ug-course-catalog |
| JSON-LD validates in Google Rich Results Test | R1.1 | Requires external tool | Copy JSON-LD output to search.google.com/test/rich-results |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 30s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
