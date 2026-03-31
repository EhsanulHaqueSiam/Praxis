import { createFileRoute } from "@tanstack/react-router";
import { AIUB_COURSE_COUNT } from "@lumina/ui";
import { Hero } from "~/components/home/Hero";
import { Marquee } from "~/components/home/Marquee";
import { TrustedBy } from "~/components/home/TrustedBy";
import { FeaturedCourses } from "~/components/home/FeaturedCourses";
import { HowItWorks } from "~/components/home/HowItWorks";
import { Stats } from "~/components/home/Stats";
import { Testimonials } from "~/components/home/Testimonials";
import { CTA } from "~/components/home/CTA";
import { SectionDots } from "~/components/shared/SectionDots";
import { GradientDivider } from "~/components/shared/GradientDivider";

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
          `Ship production code in your first month. ${AIUB_COURSE_COUNT} project-based AIUB CSE courses across fundamentals, software engineering, and more. Trusted by 11,480+ engineers.`,
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <SectionDots />
      <div id="hero"><Hero /></div>
      <Marquee />
      <TrustedBy />
      <GradientDivider />
      <div id="features"><FeaturedCourses /></div>
      <GradientDivider />
      <div id="how-it-works"><HowItWorks /></div>
      <div id="stats"><Stats /></div>
      <GradientDivider />
      <div id="testimonials"><Testimonials /></div>
      <div id="cta"><CTA /></div>
    </>
  );
}
