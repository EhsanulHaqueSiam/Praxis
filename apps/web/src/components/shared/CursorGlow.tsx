import { useEffect, useRef } from "react";

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onMove(e: globalThis.MouseEvent) {
      const el = glowRef.current;
      if (!el) return;
      el.style.left = `${e.clientX}px`;
      el.style.top = `${e.clientY}px`;
      el.style.opacity = "1";
    }
    function onLeave() {
      const el = glowRef.current;
      if (!el) return;
      el.style.opacity = "0";
    }
    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed z-[60] hidden md:block"
      style={{
        width: 600,
        height: 600,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(56,165,113,0.04) 0%, transparent 70%)",
        transform: "translate(-50%, -50%)",
        opacity: 0,
        transition: "opacity 0.4s ease",
        willChange: "left, top",
      }}
    />
  );
}
