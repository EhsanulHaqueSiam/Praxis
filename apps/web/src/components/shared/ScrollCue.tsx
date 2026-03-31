import { useEffect, useState } from "react";
import { CaretDown } from "@phosphor-icons/react";

export function ScrollCue() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    function onScroll() {
      if (window.scrollY > 100) setVisible(false);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 transition-opacity duration-500"
      style={{ opacity: visible ? 1 : 0 }}
    >
      <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Scroll</span>
      <CaretDown size={16} weight="bold" className="text-zinc-500 scroll-cue" />
    </div>
  );
}
