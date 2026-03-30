interface StatsBandProps {
  stats: { value: string; label: string }[];
}

export function StatsBand({ stats }: StatsBandProps) {
  return (
    <section className="bg-zinc-950 py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-dark" />
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-mono text-4xl md:text-6xl font-bold text-white tracking-tighter">
                {stat.value}
              </div>
              <div className="text-sm text-zinc-500 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
