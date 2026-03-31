import { Button } from "@lumina/ui";
import { ArrowRight } from "@phosphor-icons/react";
import { DarkSection } from "~/components/shared/DarkSection";
import { appHref } from "~/lib/urls";

export function PathsCTA() {
  return (
    <DarkSection>
      <div className="absolute -top-32 -left-32 h-64 w-64 rounded-full bg-accent-500/10 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-emerald-500/8 blur-3xl" />
      <div className="relative max-w-2xl">
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter leading-[0.95] mb-6">
          Pick a path.
          <br />
          <span className="bg-gradient-to-r from-accent-400 to-emerald-300 bg-clip-text text-transparent">Start building.</span>
        </h2>
        <p className="text-base text-zinc-400 leading-relaxed mb-10 max-w-lg">
          Your first three courses are free every month. No credit card required
          to start any learning path.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href={appHref("/register")}>
            <Button
              size="xl"
              className="bg-white text-zinc-900 hover:bg-zinc-100 group active:scale-[0.97] transition-transform"
            >
              Start building free
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Button>
          </a>
          <a href="/courses">
            <Button
              variant="outline"
              size="xl"
              className="border-zinc-700 text-zinc-300 hover:bg-zinc-800/50 hover:border-zinc-600 active:scale-[0.97] transition-transform"
            >
              Browse courses
            </Button>
          </a>
        </div>
      </div>
    </DarkSection>
  );
}
