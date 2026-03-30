import { Button } from "@lumina/ui";
import { ArrowRight, Play, User, TrendUp } from "@phosphor-icons/react";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] bg-zinc-950 text-white overflow-hidden pt-28 pb-20 flex items-center">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid-dark opacity-60" />
      <div className="absolute inset-0 bg-topo-dark" />
      <div className="absolute inset-0 bg-glow-center-dark" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 w-full">
        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center">
          {/* Left -- Text */}
          <div className="max-w-2xl">
            <span className="opacity-0 animate-fade-up inline-flex items-center gap-2 rounded-full bg-accent-500/10 border border-accent-500/20 px-3.5 py-1.5 font-mono text-xs text-accent-400 tracking-wider uppercase mb-6">
              Now in public beta
            </span>

            <h1 className="opacity-0 animate-fade-up stagger-1 font-display text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-[0.95] font-bold mb-6">
              Build software that
              <br />
              <span className="bg-gradient-to-r from-accent-400 to-emerald-300 bg-clip-text text-transparent">
                actually ships.
              </span>
            </h1>

            <p className="opacity-0 animate-fade-up stagger-2 text-base md:text-lg text-zinc-400 leading-relaxed max-w-[52ch] mb-10">
              Project-based courses with production code reviews. 11,480
              engineers shipped real software in their first 30 days.
            </p>

            <div className="opacity-0 animate-fade-up stagger-3 flex flex-wrap gap-4 mb-12">
              <a href="https://app.praxis.dev/register">
                <Button
                  size="xl"
                  className="bg-white text-zinc-900 hover:bg-zinc-200 group active:scale-[0.97] transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)]"
                >
                  Start building free
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-150 group-hover:translate-x-1"
                  />
                </Button>
              </a>
              <a href="/courses">
                <Button
                  variant="outline"
                  size="xl"
                  className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:border-zinc-600 active:scale-[0.97] transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)]"
                >
                  Explore courses
                </Button>
              </a>
            </div>

            {/* Trust badges */}
            <div className="opacity-0 animate-fade-up stagger-4 flex flex-wrap gap-8 text-sm">
              <div>
                <div className="font-mono font-bold text-white text-lg">
                  11,480+
                </div>
                <div className="text-zinc-500 text-xs">Active builders</div>
              </div>
              <div className="w-px bg-zinc-800" />
              <div>
                <div className="font-mono font-bold text-white text-lg">
                  4.82
                </div>
                <div className="text-zinc-500 text-xs">Avg review score</div>
              </div>
              <div className="w-px bg-zinc-800" />
              <div>
                <div className="font-mono font-bold text-white text-lg">
                  217 courses
                </div>
                <div className="text-zinc-500 text-xs">Project-based</div>
              </div>
            </div>
          </div>

          {/* Right -- Course preview card (desktop only) */}
          <div className="hidden lg:block">
            <div className="rounded-2xl bg-zinc-900 border border-white/[0.06] hover:border-white/[0.12] overflow-hidden animate-float shadow-diffuse-lg transition-[border-color] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)]">
              {/* Course thumbnail area */}
              <div className="relative h-44 bg-gradient-to-br from-accent-500/20 via-emerald-500/10 to-zinc-900 flex items-center justify-center">
                <div className="absolute inset-0 bg-grid-dark opacity-40" />
                <div className="relative h-14 w-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-sm">
                  <Play size={24} weight="fill" className="text-white ml-0.5" />
                </div>
                {/* Live badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-zinc-950/60 backdrop-blur-sm border border-white/[0.06] px-2.5 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-400 animate-pulse" />
                  <span className="text-[10px] font-mono text-zinc-400">LIVE</span>
                </div>
              </div>

              {/* Course info */}
              <div className="p-5 space-y-4">
                <div>
                  <h3 className="font-display font-bold text-white text-base mb-1">
                    Full-Stack Web Development
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-zinc-500">
                    <User size={12} weight="duotone" />
                    <span>Tomoko Westergaard</span>
                  </div>
                </div>

                {/* Progress bar */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-mono text-zinc-500">Module 4 of 12</span>
                    <span className="text-[11px] font-mono text-accent-400">33%</span>
                  </div>
                  <div className="h-1 rounded-full bg-zinc-800 overflow-hidden">
                    <div className="h-full w-1/3 rounded-full bg-gradient-to-r from-accent-500 to-emerald-400" />
                  </div>
                </div>

                {/* Stats row */}
                <div className="flex items-center gap-4 pt-2 border-t border-white/[0.06]">
                  <div className="flex items-center gap-1 text-xs text-zinc-500">
                    <TrendUp size={12} weight="duotone" className="text-accent-400" />
                    <span className="font-mono">7,340 enrolled</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-zinc-500">
                    <span className="font-mono">4.82</span>
                    <span className="text-accent-400">&#9733;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
