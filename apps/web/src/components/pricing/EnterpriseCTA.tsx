import { Button } from "@lumina/ui";
import { ArrowRight } from "@phosphor-icons/react";
import { DarkSection } from "~/components/shared/DarkSection";

export function EnterpriseCTA() {
  return (
    <DarkSection>
      <div className="max-w-2xl">
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter leading-[0.95] mb-6 bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
          Need a plan for your team?
        </h2>
        <p className="text-base text-zinc-400 leading-relaxed mb-10 max-w-lg">
          Custom pricing, dedicated onboarding, and admin tools for engineering
          teams of 5 or more. Get volume discounts and a shared progress dashboard.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="mailto:sales@praxis.dev">
            <Button
              size="xl"
              className="bg-white text-zinc-900 hover:bg-zinc-200 active:scale-[0.97] transition-all duration-150 group"
            >
              Contact sales
              <ArrowRight
                size={16}
                className="transition-transform duration-150 group-hover:translate-x-1"
              />
            </Button>
          </a>
          <a href="#feature-comparison">
            <Button
              variant="ghost"
              size="xl"
              className="text-zinc-400 hover:text-white hover:bg-white/5 active:scale-[0.97] transition-all duration-150"
            >
              Compare plans
            </Button>
          </a>
        </div>
      </div>
    </DarkSection>
  );
}
