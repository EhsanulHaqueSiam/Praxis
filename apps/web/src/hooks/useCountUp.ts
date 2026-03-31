import { useEffect, useState } from "react";

export function useCountUp(
  target: number,
  isActive: boolean,
  duration = 2000
) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    const startTime = performance.now();
    let rafId: number;

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(eased * target);

      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      }
    }

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [isActive, target, duration]);

  return value;
}
