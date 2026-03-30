import { createFileRoute } from "@tanstack/react-router";
import { CoursesHero } from "~/components/courses/CoursesHero";
import { CourseGrid } from "~/components/courses/CourseGrid";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      {
        title: "Courses — Ship Production Code From Day One | Praxis",
      },
      {
        name: "description",
        content:
          "217 project-based courses across web dev, design, ML/AI, data science, and DevOps. Every course ships a real artifact.",
      },
    ],
  }),
  component: CoursesPage,
});

function CoursesPage() {
  return (
    <>
      <CoursesHero />
      <CourseGrid />
    </>
  );
}
