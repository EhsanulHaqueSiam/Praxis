import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[70] h-[2px] pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-accent-500 to-emerald-400"
        style={{
          width: `${progress}%`,
          transition: "width 0.1s linear",
          boxShadow: "0 0 8px rgba(56,165,113,0.4)",
        }}
      />
    </div>
  );
}
