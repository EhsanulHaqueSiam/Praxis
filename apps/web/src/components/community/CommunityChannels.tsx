import {
  ChatCircle,
  DiscordLogo,
  GithubLogo,
  Microphone,
  UsersThree,
} from "@phosphor-icons/react";
import { SectionHeader } from "~/components/shared/SectionHeader";

const channels = [
  {
    icon: DiscordLogo,
    title: "Discord",
    description:
      "Real-time help, project showcases, and off-topic channels for winding down. The fastest way to get unstuck.",
    stat: "4,200+ members",
    iconBg: "bg-indigo-500/10",
    iconColor: "text-indigo-400",
  },
  {
    icon: GithubLogo,
    title: "GitHub Discussions",
    description:
      "Long-form technical threads, RFC-style proposals, and code-focused Q&A. Searchable and indexed.",
    stat: "1,800+ threads",
    iconBg: "bg-zinc-800",
    iconColor: "text-zinc-400",
  },
  {
    icon: Microphone,
    title: "Weekly AMAs",
    description:
      "Two live sessions per week with industry engineers from companies like Vercel, Datadog, and Anthropic.",
    stat: "2 per week",
    iconBg: "bg-accent-500/10",
    iconColor: "text-accent-400",
  },
  {
    icon: UsersThree,
    title: "Study Groups",
    description:
      "Organized by timezone and learning path. Find peers working through the same material at the same pace.",
    stat: "140+ active groups",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-400",
  },
];

export function CommunityChannels() {
  return (
    <section className="py-24 relative bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          dark
          badge={{ icon: ChatCircle, label: "Channels" }}
          title="Where the conversations happen"
          subtitle="Multiple formats for different kinds of learning. Pick what works for you."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {channels.map((channel) => {
            const Icon = channel.icon;
            return (
              <div
                key={channel.title}
                className="rounded-2xl border border-white/[0.06] bg-zinc-900 p-6 md:p-8 hover:border-white/[0.12] transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-px"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`h-10 w-10 rounded-xl ${channel.iconBg} flex items-center justify-center`}
                  >
                    <Icon
                      size={20}
                      weight="duotone"
                      className={channel.iconColor}
                    />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white">
                    {channel.title}
                  </h3>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                  {channel.description}
                </p>
                <div className="font-mono text-xs text-accent-400 font-medium">
                  {channel.stat}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
