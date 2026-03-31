import { useInView } from "~/hooks/useInView";

export function TrustedBy() {
  const logos = [
    "Stanford", "MIT", "Google", "Microsoft",
    "Amazon", "Meta", "Apple", "Netflix",
  ];

  const { ref, isInView } = useInView(0.2);

  return (
    <section ref={ref} className="py-12 bg-zinc-950 border-b border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-4">
        <p
          className="text-center text-xs font-medium uppercase tracking-widest text-zinc-600 mb-8 transition-all duration-700"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(8px)",
          }}
        >
          Trusted by engineers at
        </p>
        <div className="flex flex-wrap items-center justify-center gap-y-4">
          {logos.map((logo, i) => (
            <span
              key={logo}
              className="flex items-center"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(12px)",
                transition: `opacity 0.5s cubic-bezier(0.16,1,0.3,1) ${150 + i * 80}ms, transform 0.5s cubic-bezier(0.16,1,0.3,1) ${150 + i * 80}ms`,
              }}
            >
              <span className="text-lg font-display font-bold text-zinc-700 hover:text-zinc-400 transition-colors duration-200 cursor-default select-none px-4 md:px-6">
                {logo}
              </span>
              {i < logos.length - 1 && (
                <span className="text-zinc-800 select-none" aria-hidden="true">
                  ·
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
