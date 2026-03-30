import { Button } from "@lumina/ui";
import { ArrowRight, DiscordLogo } from "@phosphor-icons/react";
import { DarkSection } from "~/components/shared/DarkSection";

export function CommunityCTA() {
  return (
    <DarkSection>
      <div className="max-w-2xl">
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter leading-[0.95] mb-6">
          <span className="bg-gradient-to-r from-accent-400 to-emerald-300 bg-clip-text text-transparent">
            Ready to join?
          </span>
        </h2>
        <p className="text-base text-zinc-400 leading-relaxed mb-10 max-w-lg">
          Join 11,480+ engineers who learn by building. Get help in minutes, not
          days. Your first three courses are free.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="https://discord.gg/praxis" target="_blank" rel="noopener noreferrer">
            <Button
              size="xl"
              className="bg-white text-zinc-900 hover:bg-zinc-100 group active:scale-[0.97] transition-transform"
            >
              <DiscordLogo size={18} weight="fill" />
              Join Discord
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Button>
          </a>
          <a href="https://github.com/praxis/discussions">
            <Button
              variant="outline"
              size="xl"
              className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:border-zinc-600 active:scale-[0.97] transition-transform"
            >
              Browse discussions
            </Button>
          </a>
        </div>
      </div>
    </DarkSection>
  );
}
