import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Button, Input, Badge, Toggle, Card, CardContent, Avatar } from "@lumina/ui";

export const Route = createFileRoute("/_authenticated/settings")({
  component: SettingsPage,
});

function SettingsPage() {
  const [notifications, setNotifications] = useState({
    courseUpdates: true,
    communityMentions: true,
    weeklyDigest: true,
    marketing: false,
  });

  return (
    <div className="max-w-2xl mx-auto py-8 px-6 space-y-10">
      {/* Profile Section */}
      <section>
        <div className="border-b border-zinc-800 pb-6 mb-6">
          <h2 className="font-display text-lg font-bold text-white">Profile</h2>
          <p className="text-sm text-zinc-500 mt-1">Manage your account</p>
        </div>

        <div className="flex items-center gap-5 mb-8">
          <Avatar
            src="https://picsum.photos/seed/kael-profile/200/200"
            alt="Kael Nakamura-Boyce"
            fallback="KN"
            size="lg"
          />
          <div>
            <p className="font-display font-bold text-white">
              Kael Nakamura-Boyce
            </p>
            <p className="text-sm text-zinc-500">kael@example.com</p>
          </div>
        </div>

        <div className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-400">
                First name
              </label>
              <Input
                defaultValue="Kael"
                className="bg-zinc-900 border-zinc-800"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-400">
                Last name
              </label>
              <Input
                defaultValue="Nakamura-Boyce"
                className="bg-zinc-900 border-zinc-800"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-400">Email</label>
            <Input
              defaultValue="kael@example.com"
              disabled
              className="bg-zinc-900 border-zinc-800 opacity-60"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-400">Bio</label>
            <textarea
              defaultValue="Full-stack engineer focused on React and distributed systems. Building things that matter."
              rows={3}
              className="flex w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
            />
          </div>

          <div className="pt-2">
            <Button>Save changes</Button>
          </div>
        </div>
      </section>

      {/* Notification Preferences */}
      <section>
        <div className="border-b border-zinc-800 pb-6 mb-6">
          <h2 className="font-display text-lg font-bold text-white">
            Notifications
          </h2>
          <p className="text-sm text-zinc-500 mt-1">
            Choose what updates you receive
          </p>
        </div>

        <div className="space-y-5">
          {[
            {
              key: "courseUpdates" as const,
              label: "Course updates",
              description:
                "Get notified when enrolled courses publish new content",
            },
            {
              key: "communityMentions" as const,
              label: "Community mentions",
              description:
                "Receive alerts when someone mentions you in discussions",
            },
            {
              key: "weeklyDigest" as const,
              label: "Weekly progress digest",
              description:
                "A summary of your learning activity sent every Monday",
            },
            {
              key: "marketing" as const,
              label: "Marketing emails",
              description:
                "Occasional emails about new courses, promotions, and features",
            },
          ].map((pref) => (
            <div
              key={pref.key}
              className="flex items-center justify-between gap-4"
            >
              <div>
                <p className="text-sm font-medium text-white">{pref.label}</p>
                <p className="text-xs text-zinc-500 mt-0.5">
                  {pref.description}
                </p>
              </div>
              <Toggle
                checked={notifications[pref.key]}
                onCheckedChange={(checked) =>
                  setNotifications((prev) => ({ ...prev, [pref.key]: checked }))
                }
              />
            </div>
          ))}
        </div>
      </section>

      {/* Subscription */}
      <section>
        <div className="border-b border-zinc-800 pb-6 mb-6">
          <h2 className="font-display text-lg font-bold text-white">
            Subscription
          </h2>
          <p className="text-sm text-zinc-500 mt-1">
            Manage your plan and billing
          </p>
        </div>

        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Badge variant="muted" className="bg-zinc-800 text-zinc-400">
                  Free plan
                </Badge>
              </div>
            </div>
            <p className="text-sm text-zinc-500 mb-5">
              You're on the free plan. Upgrade to Pro for unlimited course
              access, certificate downloads, and priority community support.
            </p>
            <Button>Upgrade to Pro</Button>
          </CardContent>
        </Card>
      </section>

      {/* Danger Zone */}
      <section>
        <div className="border border-red-500/20 rounded-2xl p-6">
          <h3 className="font-display font-bold text-red-400 mb-2">
            Delete account
          </h3>
          <p className="text-sm text-zinc-500 mb-5">
            Permanently remove your account and all associated data. This action
            cannot be undone.
          </p>
          <Button className="bg-zinc-800 text-red-400 hover:bg-red-500/10">
            Delete account
          </Button>
        </div>
      </section>
    </div>
  );
}
