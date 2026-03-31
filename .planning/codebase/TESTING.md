# Testing Patterns

**Analysis Date:** 2026-03-31

## Test Framework

**Runner:**
- None configured. No test framework is installed or set up.
- No `vitest`, `jest`, `playwright`, or `cypress` in any `package.json`.
- Turbo.json references no `test` task.

**Assertion Library:**
- None installed.

**Run Commands:**
```bash
# No test commands exist. These would need to be added:
# pnpm test             # (not configured)
# pnpm test:watch       # (not configured)
# pnpm test:coverage    # (not configured)
```

## Test File Organization

**Location:**
- No test files exist anywhere in the project source code.
- No `__tests__/` directories, no `*.test.ts`, no `*.spec.ts` files.

**Recommended Structure (if tests are added):**
```
apps/web/src/
  components/
    shared/
      SpotlightCard.tsx
      SpotlightCard.test.tsx     # co-located
  hooks/
    useInView.ts
    useInView.test.ts            # co-located
packages/ui/src/
  components/
    button.tsx
    button.test.tsx              # co-located
  lib/
    utils.ts
    utils.test.ts                # co-located
```

## Current Quality Checks

**TypeScript Type Checking:**
- `strict: true` in `tsconfig.base.json` is the only automated quality gate
- Turbo.json defines a `typecheck` task (depends on `^build`)
- Run manually: `pnpm tsc --noEmit` in each package/app

**Build-time Validation:**
- Vite build will catch import errors and type errors
- TanStack Router plugin auto-generates route tree, catching route misconfigurations

**No Automated Quality Tools:**
- No ESLint
- No Prettier
- No Biome
- No pre-commit hooks (no husky, lint-staged, or lefthook)
- No CI/CD pipeline config in repository (Netlify handles builds only)

## What Should Be Tested (Priority Order)

**High Priority -- Custom Hooks (`apps/web/src/hooks/`):**
- `useInView.ts` -- IntersectionObserver logic, `once` flag behavior
- `useCountUp.ts` -- animation timing, target value accuracy, cleanup
- `useScrollProgress.ts` -- scroll position tracking, cleanup
- `useBlurReveal.ts` -- IntersectionObserver + revealed state

**High Priority -- UI Primitives (`packages/ui/src/components/`):**
- `button.tsx` -- variant rendering, size classes, forwardRef works
- `badge.tsx` -- variant rendering
- `card.tsx` -- sub-component composition
- `input.tsx` -- forwardRef, className merging
- `toggle.tsx` -- checked/unchecked states, onCheckedChange callback
- `accordion.tsx` -- items rendering, variant="cards" vs default
- `tabs.tsx` -- active tab indicator, onTabChange callback

**Medium Priority -- Auth (`packages/ui/src/auth.tsx`):**
- `AuthProvider` -- login/logout state management
- `useAuth` -- context consumption
- localStorage persistence -- read on mount, write on login, clear on logout
- Error handling for corrupted localStorage

**Medium Priority -- Shared Components (`apps/web/src/components/shared/`):**
- `AnimateOnScroll` -- renders children, applies animation styles when in view
- `SpotlightCard` -- CSS custom property updates on mouse move
- `MagneticButton` -- transform updates on mouse move, resets on leave
- `TiltCard` -- perspective transform calculation

**Low Priority -- Page Components:**
- Primarily static content rendering; snapshot tests would suffice
- Route `head()` metadata correctness

## Recommended Test Setup

**Framework:** Vitest (already uses Vite; native integration)

**Configuration that would fit this codebase:**
```typescript
// vitest.config.ts (at repo root or per-app)
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./test/setup.ts"],
    css: true,
    coverage: {
      provider: "v8",
      reporter: ["text", "lcov"],
    },
  },
  resolve: {
    alias: {
      "~": new URL("./src", import.meta.url).pathname,
    },
  },
});
```

**Required packages:**
```bash
pnpm add -D vitest @testing-library/react @testing-library/jest-dom jsdom
```

**Mocking patterns that would apply:**

```typescript
// Mock IntersectionObserver (for useInView, useBlurReveal, AnimateOnScroll)
const mockObserve = vi.fn();
const mockUnobserve = vi.fn();
const mockDisconnect = vi.fn();

beforeEach(() => {
  window.IntersectionObserver = vi.fn().mockImplementation((callback) => ({
    observe: mockObserve,
    unobserve: mockUnobserve,
    disconnect: mockDisconnect,
    // Trigger intersection manually in tests:
    // callback([{ isIntersecting: true }])
  }));
});
```

```typescript
// Mock localStorage (for AuthProvider)
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
};
Object.defineProperty(window, "localStorage", { value: localStorageMock });
```

```typescript
// Mock requestAnimationFrame (for useCountUp)
vi.spyOn(window, "requestAnimationFrame").mockImplementation((cb) => {
  cb(performance.now());
  return 0;
});
```

**Hook testing pattern:**
```typescript
import { renderHook, act } from "@testing-library/react";
import { useCountUp } from "~/hooks/useCountUp";

describe("useCountUp", () => {
  it("starts at 0 when inactive", () => {
    const { result } = renderHook(() => useCountUp(100, false));
    expect(result.current).toBe(0);
  });

  it("reaches target value when active", async () => {
    vi.useFakeTimers();
    const { result } = renderHook(() => useCountUp(100, true, 1000));
    // advance timers...
    expect(result.current).toBeCloseTo(100);
    vi.useRealTimers();
  });
});
```

**Component testing pattern:**
```typescript
import { render, screen } from "@testing-library/react";
import { Button } from "./button";

describe("Button", () => {
  it("renders with default variant", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button")).toHaveTextContent("Click me");
  });

  it("applies variant classes", () => {
    const { container } = render(<Button variant="secondary">Text</Button>);
    expect(container.firstChild).toHaveClass("bg-zinc-800");
  });

  it("forwards ref", () => {
    const ref = { current: null };
    render(<Button ref={ref}>Text</Button>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });
});
```

## Coverage

**Requirements:** None enforced. No coverage thresholds configured.

**Recommended Targets (if implemented):**
- `packages/ui/`: 80%+ (shared primitives, high reuse)
- `apps/web/src/hooks/`: 90%+ (pure logic, easy to test)
- `apps/web/src/components/shared/`: 60%+ (interaction components)
- `apps/web/src/components/home/`: 30%+ (mostly static content)
- `apps/app/src/routes/`: 20%+ (page-level, snapshot tests)

## Test Types

**Unit Tests:**
- Not implemented. Would target: hooks, `cn()` utility, CVA variant logic, AuthProvider state.

**Integration Tests:**
- Not implemented. Would target: route rendering with auth context, page component composition.

**E2E Tests:**
- Not implemented. No Playwright or Cypress configured.
- Would be valuable for: auth flow (login -> redirect -> dashboard), cross-app navigation (marketing site -> /app/ SPA), SSR rendering verification.

**Visual Regression Tests:**
- Not implemented. Premium polish components (glass effects, animations, gradients) would benefit from screenshot comparison testing.

## Risks from Missing Tests

**Auth Flow:**
- `packages/ui/src/auth.tsx` handles login/logout with localStorage. No tests verify persistence across page loads, corrupted storage handling, or race conditions.

**SSR/Hydration:**
- `apps/web` uses TanStack Start SSR. No tests verify that server-rendered HTML matches client hydration. Mismatches would cause visual flickers.

**Cross-App Navigation:**
- Marketing site (`/`) and dashboard app (`/app/`) are separate Vite builds glued together via Netlify redirects. No tests verify the proxy/redirect chain works correctly.

**Animation Edge Cases:**
- Mouse-follow effects (SpotlightCard, TiltCard, MagneticButton) directly manipulate DOM via refs. No tests verify cleanup on unmount or behavior with rapid mouse movement.

**Responsive Breakpoints:**
- Several components have mobile-specific layouts (HowItWorks sticky cards, Header hamburger). No tests verify breakpoint behavior.

---

*Testing analysis: 2026-03-31*
