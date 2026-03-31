import { useEffect, useState } from "react";
import { ArrowUp } from "@phosphor-icons/react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 400);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 h-10 w-10 rounded-xl glass-dark flex items-center justify-center text-zinc-400 hover:text-accent-400 hover:border-accent-500/30 transition-all duration-300 active:scale-[0.93]"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        pointerEvents: visible ? "auto" : "none",
      }}
      aria-label="Back to top"
    >
      <ArrowUp size={16} weight="bold" />
    </button>
  );
}
