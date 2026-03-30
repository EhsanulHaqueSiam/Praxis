export function TrustedBy() {
  const logos = [
    "Stanford",
    "MIT",
    "Google",
    "Microsoft",
    "Amazon",
    "Meta",
    "Apple",
    "Netflix",
  ];

  return (
    <section className="py-12 bg-zinc-950 border-b border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-4">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-zinc-600 mb-8">
          Trusted by engineers at
        </p>
        <div className="flex flex-wrap items-center justify-center gap-y-4">
          {logos.map((logo, i) => (
            <span key={logo} className="flex items-center">
              <span className="text-lg font-display font-bold text-zinc-700 hover:text-zinc-500 transition-colors duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-default select-none px-4 md:px-6">
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
