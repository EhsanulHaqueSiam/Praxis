import { Avatar } from "@lumina/ui";
import { ArrowRight, Quotes, Star } from "@phosphor-icons/react";
import { DarkSection } from "~/components/shared/DarkSection";
import { SectionHeader } from "~/components/shared/SectionHeader";

const stories = [
  {
    name: "Delphine Ayari",
    role: "Staff Eng at Datadog",
    seed: "delphine-ayari",
    quote:
      "The code review process alone is worth the enrollment. I rewrote a service at work using patterns I picked up in the full-stack track and our p99 latency dropped 38%. The mentors do not hand you answers -- they teach you to reason about trade-offs. That is the difference between a tutorial and real engineering education.",
    highlight: "Promoted to Staff within 8 months of completing the path",
  },
  {
    name: "Tomoko Westergaard",
    role: "Sr. Designer at Figma",
    seed: "tomoko-westergaard",
    quote:
      "The design practicum pushed me past surface-level mockups into systems thinking. Every module forced a portfolio deliverable that I still reference in interviews. The Design Engineering course bridged a gap I did not even know I had -- now I prototype in code and ship directly to production.",
    highlight: "Landed her role at Figma with a Praxis portfolio project",
  },
  {
    name: "Kael Nakamura-Boyce",
    role: "ML Lead at Anthropic",
    seed: "kael-nakamura",
    quote:
      "From sklearn basics to deploying an inference endpoint that handles 12k requests per day. The structured path meant I never hit a dead end, and the capstone dataset was genuinely messy -- not a cleaned CSV with perfect labels. The MLOps module alone saved me months of trial and error at work.",
    highlight: "Built an inference pipeline serving 12k req/day in production",
  },
  {
    name: "Idris Okonkwo-Petit",
    role: "Founding Eng at Vercel",
    seed: "idris-okonkwo",
    quote:
      "We enrolled our entire six-person team. Within a quarter, our deployment frequency went from weekly to daily. The project-first approach removes the theory-practice gap that plagues most platforms. Every engineer on our team now reviews PRs with a level of rigor that we frankly did not have before.",
    highlight: "Team deployment frequency went from weekly to daily",
  },
];

export function FeaturedStories() {
  return (
    <DarkSection glow="none">
      <SectionHeader
        dark
        badge={{ icon: Star, label: "Featured stories" }}
        title="From course projects to career milestones"
        subtitle="Engineers who turned structured learning into tangible outcomes."
      />

      <div className="grid md:grid-cols-2 gap-6">
        {stories.map((story, i) => (
          <div
            key={story.name}
            className={`rounded-2xl border border-white/[0.06] bg-zinc-900 p-6 md:p-8 ${
              i === 0 ? "md:col-span-2" : ""
            }`}
          >
            <Quotes
              size={28}
              weight="fill"
              className="text-accent-500/20 mb-4"
            />
            <p className="text-sm leading-relaxed text-zinc-300 mb-4">
              &ldquo;{story.quote}&rdquo;
            </p>
            <div className="rounded-xl bg-accent-500/10 px-4 py-2.5 mb-5 inline-block">
              <span className="text-xs font-medium text-accent-400">
                {story.highlight}
              </span>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
              <div className="flex items-center gap-3">
                <Avatar
                  src={`https://picsum.photos/seed/${story.seed}/100/100`}
                  alt={story.name}
                  size="md"
                  className="border-2 border-zinc-900"
                />
                <div>
                  <div className="font-display font-bold text-sm text-white">
                    {story.name}
                  </div>
                  <div className="text-xs text-zinc-500">{story.role}</div>
                </div>
              </div>
              <a
                href="#"
                className="text-xs font-medium text-accent-400 hover:text-accent-300 flex items-center gap-1 transition-colors duration-150 ease-[cubic-bezier(0.23,1,0.32,1)]"
              >
                Read the full story
                <ArrowRight size={12} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </DarkSection>
  );
}
