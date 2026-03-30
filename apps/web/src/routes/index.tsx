import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "~/components/home/Hero";
import { Marquee } from "~/components/home/Marquee";
import { TrustedBy } from "~/components/home/TrustedBy";
import { FeaturedCourses } from "~/components/home/FeaturedCourses";
import { HowItWorks } from "~/components/home/HowItWorks";
import { Stats } from "~/components/home/Stats";
import { Testimonials } from "~/components/home/Testimonials";
import { CTA } from "~/components/home/CTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Praxis — Build Real Skills Through Projects | Hands-On Engineering Courses",
      },
      {
        name: "description",
        content:
          "Ship production code in your first month. 217 project-based courses in web dev, ML, data science, and design. Trusted by 11,480+ engineers.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <TrustedBy />
      <FeaturedCourses />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <CTA />
    </>
  );
}
