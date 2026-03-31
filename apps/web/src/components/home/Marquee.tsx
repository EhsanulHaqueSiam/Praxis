export function Marquee() {
  const row1 = [
    "React", "TypeScript", "Node.js", "PostgreSQL", "System Design",
    "Machine Learning", "Docker", "CI/CD",
  ];
  const row2 = [
    "GraphQL", "Python", "Figma", "Swift", "Kubernetes",
    "Next.js", "AWS", "Redis",
  ];

  const doubled1 = [...row1, ...row1];
  const doubled2 = [...row2, ...row2];

  return (
    <section className="relative py-6 bg-zinc-950 border-y border-white/[0.06] overflow-hidden">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

      {/* Row 1 — forward */}
      <div className="flex animate-marquee whitespace-nowrap mb-3">
        {doubled1.map((item, i) => (
          <span
            key={`a-${item}-${i}`}
            className="mx-6 md:mx-10 text-sm md:text-base font-display font-medium text-zinc-600 select-none shrink-0 hover:text-zinc-400 transition-colors duration-300"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Row 2 — reverse */}
      <div className="flex animate-marquee-reverse whitespace-nowrap">
        {doubled2.map((item, i) => (
          <span
            key={`b-${item}-${i}`}
            className="mx-6 md:mx-10 text-sm md:text-base font-display font-medium text-zinc-700 select-none shrink-0 hover:text-zinc-500 transition-colors duration-300"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
