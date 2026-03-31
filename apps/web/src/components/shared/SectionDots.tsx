import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Hero" },
  { id: "features", label: "Features" },
  { id: "how-it-works", label: "How it works" },
  { id: "stats", label: "Stats" },
  { id: "testimonials", label: "Testimonials" },
  { id: "cta", label: "Get started" },
];

export function SectionDots() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 300);

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            setActiveIndex(i);
            break;
          }
        }
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <nav
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-3 transition-opacity duration-300"
      style={{ opacity: visible ? 1 : 0, pointerEvents: visible ? "auto" : "none" }}
      aria-label="Section navigation"
    >
      {sections.map((s, i) => (
        <button
          key={s.id}
          onClick={() => scrollTo(s.id)}
          className="group relative flex items-center"
          aria-label={s.label}
        >
          <span
            className="absolute right-6 px-2 py-1 rounded-lg bg-zinc-900 border border-white/[0.06] text-[10px] text-zinc-400 font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none"
          >
            {s.label}
          </span>
          <span
            className="h-2 w-2 rounded-full transition-all duration-300"
            style={{
              background: activeIndex === i ? "rgb(56, 165, 113)" : "rgba(255,255,255,0.15)",
              boxShadow: activeIndex === i ? "0 0 6px rgba(56,165,113,0.4)" : "none",
              transform: activeIndex === i ? "scale(1.3)" : "scale(1)",
            }}
          />
        </button>
      ))}
    </nav>
  );
}
