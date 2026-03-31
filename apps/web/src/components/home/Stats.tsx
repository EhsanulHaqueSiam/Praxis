import { useInView } from "~/hooks/useInView";
import { useCountUp } from "~/hooks/useCountUp";
import { Tooltip } from "~/components/shared/Tooltip";

const stats = [
  { value: 11480, suffix: "+", label: "Active builders", format: "int", tooltip: "Up 23% this quarter" },
  { value: 217, suffix: "", label: "Project-based courses", format: "int", tooltip: "12 new courses added this month" },
  { value: 91.3, suffix: "%", label: "Completion rate", format: "decimal", tooltip: "vs. industry average of 34%" },
  { value: 4.82, suffix: "", label: "Average rating", format: "decimal", tooltip: "Across 8,400+ reviews" },
];

function AnimatedStat({
  value,
  suffix,
  format,
  isActive,
}: {
  value: number;
  suffix: string;
  format: string;
  isActive: boolean;
}) {
  const count = useCountUp(value, isActive, 2200);

  const display =
    format === "int"
      ? Math.round(count).toLocaleString()
      : count.toFixed(format === "decimal" && value < 10 ? 2 : 1);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

export function Stats() {
  const { ref, isInView } = useInView(0.3);

  return (
    <section
      ref={ref}
      className="py-16 md:py-20 bg-zinc-950 text-white relative overflow-hidden border-t border-white/[0.06]"
    >
      <div className="absolute inset-0 bg-grid-dark" />
      <div className="absolute inset-0 bg-glow-center-dark" />
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(16px)",
                transition: `all 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 100}ms`,
              }}
            >
              <Tooltip content={stat.tooltip}>
                <div className="font-mono text-5xl md:text-6xl font-bold text-white tracking-tighter cursor-default">
                  <AnimatedStat
                    value={stat.value}
                    suffix={stat.suffix}
                    format={stat.format}
                    isActive={isInView}
                  />
                </div>
              </Tooltip>
              <div className="text-sm text-zinc-500 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
