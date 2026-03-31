import { Button } from "@lumina/ui";
import { ArrowRight } from "@phosphor-icons/react";
import { AnimateOnScroll } from "~/components/shared/AnimateOnScroll";

export function CTA() {
  return (
    <section className="py-24 md:py-32 bg-zinc-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-dark" />
      <div className="absolute inset-0 bg-topo-dark" />
      {/* Dual glow -- green + purple */}
      <div className="absolute inset-0 bg-glow-center-dark" />
      <div className="aurora-bg" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 50% 40% at 60% 50%, rgba(168, 85, 247, 0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        {/* Left-aligned, not centered */}
        <AnimateOnScroll className="max-w-2xl">
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter leading-[0.95] mb-6">
            Stop watching.
            <br />
            <span className="bg-gradient-to-r from-accent-400 to-emerald-300 bg-clip-text text-transparent">
              Start shipping.
            </span>
          </h2>
          <p className="text-lg text-zinc-400 mb-10 max-w-lg">
            Your first project is free. No credit card. Cancel anytime. Join
            11,480+ engineers building real software.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/app/register">
              <Button
                size="xl"
                className="btn-shimmer bg-white text-zinc-900 hover:bg-zinc-200 group active:scale-[0.97] transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)]"
              >
                Start building for free
                <ArrowRight
                  size={16}
                  className="transition-transform duration-150 group-hover:translate-x-1"
                />
              </Button>
            </a>
            <a href="/pricing">
              <Button
                variant="outline"
                size="xl"
                className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:border-zinc-600 active:scale-[0.97] transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)]"
              >
                Compare plans
              </Button>
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
