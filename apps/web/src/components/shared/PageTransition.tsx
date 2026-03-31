import { useEffect, useState } from "react";

export function PageTransition() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 400);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[200] bg-zinc-950 pointer-events-none"
      style={{
        opacity: 0,
        animation: "pageLoadFade 0.4s ease-out forwards",
      }}
    >
      <style>{`
        @keyframes pageLoadFade {
          0% { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
