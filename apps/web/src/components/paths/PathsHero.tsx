import { DarkSection } from "~/components/shared/DarkSection";

export function PathsHero() {
  return (
    <DarkSection padTop>
      <div className="max-w-3xl">
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-[0.95] font-bold mb-6">
          Structured paths
          <br />
          <span className="bg-gradient-to-r from-accent-400 to-emerald-300 bg-clip-text text-transparent">to mastery.</span>
        </h1>
        <p className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-[56ch]">
          Curated sequences of courses that build on each other. Each path takes
          you from first principles to production-grade skills with clear
          milestones along the way.
        </p>
      </div>
    </DarkSection>
  );
}
