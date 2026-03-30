export function Marquee() {
  const items = [
    "React",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "System Design",
    "Machine Learning",
    "Docker",
    "CI/CD",
    "GraphQL",
    "Python",
    "Figma",
    "Swift",
    "Kubernetes",
    "Next.js",
    "AWS",
  ];

  // Duplicate the array so the animation loops seamlessly
  const doubled = [...items, ...items];

  return (
    <section className="relative py-4 bg-zinc-950 border-y border-white/[0.06] overflow-hidden">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="mx-6 md:mx-10 text-sm md:text-base font-display font-medium text-zinc-600 select-none shrink-0"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
