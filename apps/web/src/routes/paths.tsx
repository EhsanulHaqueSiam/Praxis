import { createFileRoute } from "@tanstack/react-router";
import { PathsHero } from "~/components/paths/PathsHero";
import { PathsGrid } from "~/components/paths/PathsGrid";
import { PathsCTA } from "~/components/paths/PathsCTA";

export const Route = createFileRoute("/paths")({
  head: () => ({
    meta: [
      {
        title: "Learning Paths — Structured Sequences to Mastery | Praxis",
      },
      {
        name: "description",
        content:
          "Curated multi-course paths from beginner to advanced. Full-Stack, ML, Design, Data Science, and DevOps tracks with milestones and mentorship.",
      },
    ],
  }),
  component: PathsPage,
});

function PathsPage() {
  return (
    <>
      <PathsHero />
      <PathsGrid />
      <PathsCTA />
    </>
  );
}
