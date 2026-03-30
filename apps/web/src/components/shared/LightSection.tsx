import type { ReactNode } from "react";

interface LightSectionProps {
  children: ReactNode;
  className?: string;
  bg?: "crosshatch" | "glow" | "none";
}

export function LightSection({ children, className, bg = "none" }: LightSectionProps) {
  return (
    <section className={`py-24 relative overflow-hidden bg-zinc-950 text-zinc-100 ${className ?? ""}`}>
      {bg === "crosshatch" && <div className="absolute inset-0 bg-crosshatch" />}
      {bg === "glow" && <div className="absolute inset-0 glow-green opacity-40" />}
      <div className="relative z-10 mx-auto max-w-7xl px-4">{children}</div>
    </section>
  );
}
