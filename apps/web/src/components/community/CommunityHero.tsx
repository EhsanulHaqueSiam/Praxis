import { DarkSection } from "~/components/shared/DarkSection";

export function CommunityHero() {
  return (
    <DarkSection padTop>
      <div className="max-w-3xl">
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-[0.95] font-bold mb-6">
          Built by engineers,
          <br />
          <span className="bg-gradient-to-r from-accent-400 to-emerald-300 bg-clip-text text-transparent">
            for engineers.
          </span>
        </h1>
        <p className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-[56ch]">
          11,480+ builders across 42 countries. Ask questions, share projects, pair
          on code, and grow alongside engineers who take their craft seriously.
        </p>
      </div>
    </DarkSection>
  );
}
