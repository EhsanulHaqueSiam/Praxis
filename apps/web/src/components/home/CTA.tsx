import { Button } from "@lumina/ui";
import { ArrowRight } from "@phosphor-icons/react";

export function CTA() {
  return (
    <section className="py-24 md:py-32 bg-zinc-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-dark" />
      <div className="absolute inset-0 bg-topo-dark" />
      <div className="absolute inset-0 bg-glow-center-dark" />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        {/* Left-aligned, not centered */}
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter leading-[0.95] mb-6">
            Stop watching.
            <br />
            <span className="text-accent-400">Start shipping.</span>
          </h2>
          <p className="text-lg text-zinc-400 mb-10 max-w-lg">
            Your first project is free. No credit card. Cancel anytime. Join
            11,480+ engineers building real software.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="https://app.praxis.dev/register">
              <Button
                size="xl"
                className="bg-white text-zinc-900 hover:bg-zinc-100 group active:scale-[0.97] transition-transform"
              >
                Start building for free
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Button>
            </a>
            <a href="/pricing">
              <Button
                variant="outline"
                size="xl"
                className="border-zinc-700 text-white hover:bg-zinc-800/50 hover:border-zinc-600 active:scale-[0.97] transition-transform"
              >
                Compare plans
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
