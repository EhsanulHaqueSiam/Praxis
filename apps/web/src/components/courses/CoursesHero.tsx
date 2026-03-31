import { useState } from "react";
import { Tabs } from "@lumina/ui";
import { AIUB_COURSE_COUNT } from "@lumina/ui";
import { DarkSection } from "~/components/shared/DarkSection";

const categories = [
  "All",
  "Computer Science Fundamentals",
  "Software Engineering",
  "Web & Mobile Development",
  "AI & Data Science",
  "Systems & Networking",
];

export function CoursesHero() {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <DarkSection padTop>
      <div className="max-w-3xl">
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-[0.95] font-bold text-zinc-100 mb-6">
          Every skill you need
          <br />
          <span className="bg-gradient-to-r from-accent-400 to-emerald-300 bg-clip-text text-transparent">to ship.</span>
        </h1>
        <p className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-[56ch] mb-10">
          {`${AIUB_COURSE_COUNT} project-based AIUB CSE courses across five disciplines`}. Each one ends with a
          deployed artifact, a code review, and proof you can build.
        </p>
        <Tabs
          tabs={categories}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          dark
        />
      </div>
    </DarkSection>
  );
}
