import { createFileRoute } from "@tanstack/react-router";
import { CommunityHero } from "~/components/community/CommunityHero";
import { FeaturedStories } from "~/components/community/FeaturedStories";
import { CommunityStats } from "~/components/community/CommunityStats";
import { CommunityChannels } from "~/components/community/CommunityChannels";
import { CommunityCTA } from "~/components/community/CommunityCTA";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      {
        title: "Community — Engineers Who Ship Together | Praxis",
      },
      {
        name: "description",
        content:
          "11,480+ engineers across 42 countries. Discord, study groups, weekly AMAs, and open-source projects. Join the Praxis builder community.",
      },
    ],
  }),
  component: CommunityPage,
});

function CommunityPage() {
  return (
    <>
      <CommunityHero />
      <FeaturedStories />
      <CommunityStats />
      <CommunityChannels />
      <CommunityCTA />
    </>
  );
}
