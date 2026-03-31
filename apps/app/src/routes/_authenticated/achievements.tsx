import { createFileRoute } from "@tanstack/react-router";
import { Badge, Card, CardContent } from "@lumina/ui";
import { Trophy, Fire, Certificate, Target } from "@phosphor-icons/react";
import { PageHeader } from "../../components/PageHeader";
import { StatCard } from "../../components/StatCard";

export const Route = createFileRoute("/_authenticated/achievements")({
  component: AchievementsPage,
});

const unlockedBadges = [
  {
    name: "System Thinker",
    description: "Completed 5 architecture-focused modules",
    earnedOn: "Mar 26",
  },
  {
    name: "Consistency",
    description: "Maintained a 10-day learning streak",
    earnedOn: "Mar 24",
  },
  {
    name: "Builder",
    description: "Shipped your first capstone project",
    earnedOn: "Mar 14",
  },
];

function AchievementsPage() {
  return (
    <div className="p-6 lg:p-8 max-w-7xl mx-auto space-y-8">
      <PageHeader
        title="Achievements"
        subtitle="Track milestones, streaks, and earned badges."
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Trophy} label="Badges" value="18" />
        <StatCard icon={Certificate} label="Certificates" value="4" />
        <StatCard icon={Fire} label="Current Streak" value="12 days" />
        <StatCard icon={Target} label="Goals Hit" value="7/9" />
      </div>

      <section className="space-y-4">
        <h2 className="font-display text-lg font-bold text-white">Recent Badges</h2>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {unlockedBadges.map((badge) => (
            <Card key={badge.name} className="bg-zinc-900 border border-white/[0.06]">
              <CardContent className="p-5 space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display font-bold text-white">{badge.name}</h3>
                  <Badge variant="muted" className="bg-zinc-800 text-zinc-400">
                    {badge.earnedOn}
                  </Badge>
                </div>
                <p className="text-sm text-zinc-500">{badge.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
