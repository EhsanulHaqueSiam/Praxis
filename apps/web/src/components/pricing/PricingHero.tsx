export function PricingHero() {
  return (
    <section className="bg-zinc-950 pt-28 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-glow-center-dark opacity-40" />
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-[0.95] font-bold bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent mb-6">
            Simple, transparent pricing
          </h1>
          <p className="text-base md:text-lg text-zinc-400 leading-relaxed">
            Start free, upgrade when ready. No hidden fees, no long-term contracts.
          </p>
        </div>
      </div>
    </section>
  );
}
