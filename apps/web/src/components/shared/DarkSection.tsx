import type { ReactNode } from "react";

interface DarkSectionProps {
  children: ReactNode;
  className?: string;
  padTop?: boolean;
  glow?: "green" | "purple" | "dual" | "none";
}

export function DarkSection({ children, className, padTop, glow = "green" }: DarkSectionProps) {
  return (
    <section
      className={`relative bg-zinc-950 text-zinc-100 overflow-hidden ${
        padTop ? "pt-28 pb-20" : "py-24"
      } ${className ?? ""}`}
    >
      <div className="absolute inset-0 bg-grid-dark" />
      {glow === "green" && <div className="absolute inset-0 glow-green" />}
      {glow === "purple" && <div className="absolute inset-0 glow-purple" />}
      {glow === "dual" && <div className="absolute inset-0 glow-dual" />}
      <div className="relative z-10 mx-auto max-w-7xl px-4">{children}</div>
    </section>
  );
}
