import { Button, AIUB_COURSE_COUNT } from "@lumina/ui";
import { ArrowRight, Play, User, TrendUp } from "@phosphor-icons/react";
import { MagneticButton } from "~/components/shared/MagneticButton";
import { ScrollCue } from "~/components/shared/ScrollCue";
import { CircleProgress } from "~/components/shared/CircleProgress";
import { appHref } from "~/lib/urls";

const particles = [
  { size: 3, left: "10%", top: "20%", duration: "9s", delay: "0s", dx: "40px", dy: "-30px", dx2: "-20px", dy2: "25px", dx3: "15px", dy3: "-40px" },
  { size: 2, left: "80%", top: "15%", duration: "11s", delay: "1s", dx: "-30px", dy: "20px", dx2: "25px", dy2: "-15px", dx3: "-10px", dy3: "35px" },
  { size: 4, left: "60%", top: "70%", duration: "8s", delay: "2s", dx: "20px", dy: "-40px", dx2: "-35px", dy2: "10px", dx3: "25px", dy3: "-20px" },
  { size: 2, left: "25%", top: "60%", duration: "12s", delay: "3s", dx: "-15px", dy: "35px", dx2: "30px", dy2: "-25px", dx3: "-20px", dy3: "15px" },
  { size: 3, left: "90%", top: "40%", duration: "10s", delay: "0.5s", dx: "25px", dy: "15px", dx2: "-20px", dy2: "-30px", dx3: "10px", dy3: "25px" },
  { size: 2, left: "45%", top: "85%", duration: "13s", delay: "4s", dx: "-25px", dy: "-20px", dx2: "15px", dy2: "30px", dx3: "-35px", dy3: "-10px" },
  { size: 3, left: "70%", top: "25%", duration: "9s", delay: "2.5s", dx: "15px", dy: "25px", dx2: "-30px", dy2: "-15px", dx3: "20px", dy3: "35px" },
  { size: 2, left: "15%", top: "45%", duration: "14s", delay: "1.5s", dx: "35px", dy: "-10px", dx2: "-15px", dy2: "20px", dx3: "25px", dy3: "-30px" },
];

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] bg-zinc-950 text-white overflow-hidden pt-28 pb-20 flex items-center">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid-dark opacity-60" />
      <div className="absolute inset-0 bg-topo-dark" />
      <div className="absolute inset-0 radiance" />
      {/* Aurora mesh */}
      <div className="aurora-bg" />

      {/* Floating particles */}
      {particles.map((p, i) => (
        <div
          key={i}
          className="particle"
          style={{
            width: p.size,
            height: p.size,
            left: p.left,
            top: p.top,
            ["--duration" as string]: p.duration,
            ["--delay" as string]: p.delay,
            ["--dx" as string]: p.dx,
            ["--dy" as string]: p.dy,
            ["--dx2" as string]: p.dx2,
            ["--dy2" as string]: p.dy2,
            ["--dx3" as string]: p.dx3,
            ["--dy3" as string]: p.dy3,
          }}
        />
      ))}

      <div className="relative z-10 mx-auto max-w-7xl px-4 w-full">
        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center">
          {/* Left -- Text */}
          <div className="max-w-2xl">
            <span className="opacity-0 animate-fade-up inline-flex items-center gap-2 rounded-full bg-accent-500/10 border border-accent-500/20 px-3.5 py-1.5 font-mono text-xs text-accent-400 tracking-wider uppercase mb-6">
              Now in public beta
            </span>

            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-[0.95] font-bold mb-6">
              {"Build software that".split(" ").map((word, i) => (
                <span key={i} className="word-reveal inline-block mr-[0.25em]" style={{ ["--word-delay" as string]: `${200 + i * 80}ms` }}>
                  {word}
                </span>
              ))}
              <br />
              <span className="word-reveal inline-block bg-gradient-to-r from-accent-400 to-emerald-300 bg-clip-text text-transparent" style={{ ["--word-delay" as string]: "600ms" }}>
                actually ships.
              </span>
            </h1>

            <p className="opacity-0 animate-fade-up stagger-2 text-base md:text-lg text-zinc-400 leading-relaxed max-w-[52ch] mb-10">
              Project-based courses with production code reviews. 11,480
              engineers shipped real software in their first 30 days.
            </p>

            <div className="opacity-0 animate-fade-up stagger-3 flex flex-wrap gap-4 mb-12">
              <MagneticButton strength={0.15}>
                <a href={appHref("/register")}>
                  <Button
                    size="xl"
                    className="btn-shimmer bg-white text-zinc-900 hover:bg-zinc-200 group active:scale-[0.97] transition-all duration-150"
                  >
                    Start building free
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-150 group-hover:translate-x-1"
                    />
                  </Button>
                </a>
              </MagneticButton>
              <MagneticButton strength={0.15}>
                <a href="/courses">
                  <Button
                    variant="outline"
                    size="xl"
                    className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:border-zinc-600 active:scale-[0.97] transition-all duration-150"
                  >
                    Explore courses
                  </Button>
                </a>
              </MagneticButton>
            </div>

            {/* Trust badges */}
            <div className="opacity-0 animate-fade-up stagger-4 flex flex-wrap gap-8 text-sm">
              <div>
                <div className="font-mono font-bold text-white text-lg">11,480+</div>
                <div className="text-zinc-500 text-xs">Active builders</div>
              </div>
              <div className="w-px bg-zinc-800" />
              <div>
                <div className="font-mono font-bold text-white text-lg">4.82</div>
                <div className="text-zinc-500 text-xs">Avg review score</div>
              </div>
              <div className="w-px bg-zinc-800" />
              <div>
                <div className="font-mono font-bold text-white text-lg">{AIUB_COURSE_COUNT} courses</div>
                <div className="text-zinc-500 text-xs">Project-based</div>
              </div>
            </div>
          </div>

          {/* Right -- Course preview card */}
          <div className="hidden lg:block">
            <div className="rounded-2xl bg-zinc-900 border border-white/[0.06] hover:border-white/[0.12] overflow-hidden animate-float shadow-diffuse-lg transition-[border-color] duration-150 card-highlight">
              {/* Course thumbnail */}
              <div className="relative h-44 bg-gradient-to-br from-accent-500/20 via-emerald-500/10 to-zinc-900 flex items-center justify-center">
                <div className="absolute inset-0 bg-grid-dark opacity-40" />
                <div className="relative h-14 w-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-sm play-pulse">
                  <Play size={24} weight="fill" className="text-white ml-0.5" />
                </div>
                <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-zinc-950/60 backdrop-blur-sm border border-white/[0.06] px-2.5 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-400 animate-pulse" />
                  <span className="text-[10px] font-mono text-zinc-400">LIVE</span>
                </div>
              </div>

              {/* Course info */}
              <div className="p-5 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-display font-bold text-white text-base mb-1">
                      Full-Stack Web Development
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-zinc-500">
                      <User size={12} weight="duotone" />
                      <span>Tomoko Westergaard</span>
                    </div>
                  </div>
                  <CircleProgress percent={33} size={40} strokeWidth={3} />
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

      {/* Scroll cue at bottom */}
      <ScrollCue />
    </section>
  );
}
