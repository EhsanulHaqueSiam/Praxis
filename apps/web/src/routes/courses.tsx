import { createFileRoute } from "@tanstack/react-router";
import { courses, AIUB_COURSE_COUNT } from "@lumina/ui";
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
        content: `${AIUB_COURSE_COUNT} project-based AIUB CSE courses across fundamentals, software engineering, web dev, AI, and systems. Every course ships a real artifact.`,
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "AIUB CSE Course Catalog — Praxis",
          itemListElement: courses.map((course, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@context": "https://schema.org",
              "@type": "Course",
              name: course.name,
              description: course.description,
              provider: {
                "@type": "Organization",
                name: "Praxis",
                sameAs: "https://praxis.dev",
              },
              coursePrerequisites: course.prerequisites.join(", ") || "None",
              numberOfCredits: course.creditHours,
              educationalLevel: "Undergraduate",
            },
          })),
        }),
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
