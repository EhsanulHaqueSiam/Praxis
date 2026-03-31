import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, Badge } from "@lumina/ui";
import { UsersThree, ChatsCircle, Sparkle } from "@phosphor-icons/react";
import { PageHeader } from "../../components/PageHeader";
import { EmptyState } from "../../components/EmptyState";
import { SkeletonCard } from "../../components/SkeletonCard";

export const Route = createFileRoute("/_authenticated/community")({
  component: CommunityPage,
});

const liveChannels = [
  {
    name: "#react-help",
    members: "2,184 online",
    topic: "Debugging React Server Components",
  },
  {
    name: "#career-accelerator",
    members: "913 online",
    topic: "Portfolio review session starts in 20m",
  },
  {
    name: "#ship-weekly",
    members: "1,042 online",
    topic: "Share what you shipped this week",
  },
];

function CommunityPage() {
  return (
    <div className="p-6 lg:p-8 max-w-7xl mx-auto space-y-8">
      <PageHeader
        title="Community"
        subtitle="Join builder conversations, feedback circles, and live sessions."
      />

      <section className="space-y-4">
        <h2 className="font-display text-lg font-bold text-white">Live Channels</h2>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {liveChannels.map((channel) => (
            <Card key={channel.name} className="bg-zinc-900 border border-white/[0.06]">
              <CardContent className="p-5 space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display font-bold text-white">{channel.name}</h3>
                  <Badge variant="muted" className="bg-zinc-800 text-zinc-400">
                    {channel.members}
                  </Badge>
                </div>
                <p className="text-sm text-zinc-500">{channel.topic}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-display text-lg font-bold text-white">Feed</h2>
        <p className="text-sm text-zinc-500">
          Your personalized feed is loading from the community API.
        </p>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      </section>

      <EmptyState
        icon={UsersThree}
        title="Open the Public Community Hub"
        description="Jump to the public community page for success stories, channels, and upcoming live events."
        action={{ label: "Go to Community Hub", href: "/community" }}
      />

      <div className="rounded-2xl border border-white/[0.06] bg-zinc-900 p-4 text-xs text-zinc-500 flex items-center gap-2">
        <ChatsCircle className="h-4 w-4 text-accent-400" weight="duotone" />
        <span>Direct messages and mentor office hours are rolling out next.</span>
        <Sparkle className="h-4 w-4 text-accent-400 ml-auto" weight="fill" />
      </div>
    </div>
  );
}
