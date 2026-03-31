import {
  Code,
  Brain,
  ChartLineUp,
  CloudArrowUp,
  TreeStructure,
} from "@phosphor-icons/react";
import { PathCard } from "./PathCard";
import { SectionHeader } from "~/components/shared/SectionHeader";
import { AnimateOnScroll } from "~/components/shared/AnimateOnScroll";

const paths = [
  {
    title: "Full-Stack Engineer",
    description:
      "From programming fundamentals to web technologies and software engineering. Build, test, and deploy complete systems end to end.",
    courseCount: 6,
    duration: "216h",
    difficulty: "Beginner to Advanced",
    milestones: [
      "CSC 1102 Introduction to Programming Language",
      "CSC 1205 Object Oriented Programming 1",
      "CSC 2108 Introduction to Database",
      "CSC 2210 Object Oriented Programming 2",
      "CSC 3112 Software Engineering",
      "CSC 3215 Web Technologies",
    ],
    icon: Code,
  },
  {
    title: "ML Engineer",
    description:
      "Applied mathematics, statistics, and artificial intelligence. Build the analytical foundation for machine learning engineering.",
    courseCount: 5,
    duration: "180h",
    difficulty: "Intermediate to Advanced",
    milestones: [
      "MAT 3103 Computational Statistics and Probability",
      "CSC 2211 Algorithms",
      "CSC 2106 Data Structure",
      "MAT 3101 Numerical Methods for Science and Engineering",
      "CSC 3217 Artificial Intelligence and Expert System",
    ],
    icon: Brain,
  },
  {
    title: "Systems Architect",
    description:
      "From digital circuits to operating systems and computer networks. Understand the full hardware-to-application stack.",
    courseCount: 6,
    duration: "192h",
    difficulty: "Beginner to Advanced",
    milestones: [
      "EEE 2108 Introduction to Electrical Circuits",
      "EEE 3101 Digital Logic and Circuits",
      "COE 3102 Microprocessor and Embedded Systems",
      "COE 3203 Computer Organization & Architecture",
      "CSC 3214 Operating Systems",
      "COE 3204 Computer Networks",
    ],
    icon: CloudArrowUp,
  },
  {
    title: "CS Theorist",
    description:
      "Deep mathematical foundations — calculus, discrete math, algorithms, and theory of computation. The rigorous core of computer science.",
    courseCount: 6,
    duration: "216h",
    difficulty: "Beginner to Advanced",
    milestones: [
      "MAT 1102 Differential Calculus and Coordinate Geometry",
      "CSC 1204 Discrete Mathematics",
      "MAT 2202 Matrices, Vectors and Fourier Analysis",
      "CSC 2211 Algorithms",
      "CSC 3113 Theory of Computation",
      "CSC 4118 Computer Graphics",
    ],
    icon: ChartLineUp,
  },
];

export function PathsGrid() {
  return (
    <section className="py-24 relative bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          badge={{ icon: TreeStructure, label: "Learning paths" }}
          title="Four paths, one destination"
          subtitle="Each path is a curated sequence of AIUB CSE courses with clear milestones. Pick the one that matches your goals."
          dark
        />

        {/* First path: full width */}
        <AnimateOnScroll className="mb-6">
          <PathCard {...paths[0]} />
        </AnimateOnScroll>

        {/* Remaining paths: 2-col grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {paths.slice(1).map((path, i) => (
            <AnimateOnScroll key={path.title} delay={i * 100}>
              <PathCard {...path} />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
