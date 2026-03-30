import {
  Code,
  Brain,
  Palette,
  ChartLineUp,
  CloudArrowUp,
  TreeStructure,
} from "@phosphor-icons/react";
import { PathCard } from "./PathCard";
import { SectionHeader } from "~/components/shared/SectionHeader";

const paths = [
  {
    title: "Full-Stack Engineer",
    description:
      "From HTML fundamentals to production-grade full-stack applications. Build, test, secure, and deploy complete systems end to end.",
    courseCount: 8,
    duration: "320h",
    difficulty: "Beginner to Advanced",
    milestones: [
      "HTML/CSS Foundations",
      "JavaScript Core",
      "React Patterns",
      "Node.js APIs",
      "Database Design",
      "Auth & Security",
      "Testing & CI",
      "Production Deploy",
    ],
    icon: Code,
  },
  {
    title: "ML Engineer",
    description:
      "Applied machine learning from data wrangling to model deployment. Train, evaluate, and serve models that handle real production traffic.",
    courseCount: 7,
    duration: "280h",
    difficulty: "Intermediate to Advanced",
    milestones: [
      "Python for ML",
      "Data Wrangling",
      "Supervised Learning",
      "Deep Learning",
      "NLP Pipelines",
      "MLOps & Monitoring",
      "Production Inference",
    ],
    icon: Brain,
  },
  {
    title: "Product Designer",
    description:
      "Design systems, user research, prototyping, and the bridge between design and code. Every module produces a portfolio-ready deliverable.",
    courseCount: 6,
    duration: "240h",
    difficulty: "Beginner to Intermediate",
    milestones: [
      "Design Fundamentals",
      "Figma Prototyping",
      "Design Systems",
      "UX Research",
      "Interaction Design",
      "Design Engineering",
    ],
    icon: Palette,
  },
  {
    title: "Data Scientist",
    description:
      "Extract signal from noise. SQL, Python pipelines, visualization, statistical reasoning, and machine learning with messy real-world datasets.",
    courseCount: 7,
    duration: "260h",
    difficulty: "Beginner to Advanced",
    milestones: [
      "SQL Foundations",
      "Python for Data",
      "Statistics & Probability",
      "Data Visualization",
      "Feature Engineering",
      "Predictive Modeling",
      "Capstone Analysis",
    ],
    icon: ChartLineUp,
  },
  {
    title: "DevOps Engineer",
    description:
      "Containers, orchestration, CI/CD, cloud infrastructure, and monitoring. Automate everything between git push and production.",
    courseCount: 5,
    duration: "200h",
    difficulty: "Intermediate to Advanced",
    milestones: [
      "Linux & Networking",
      "Docker & Containers",
      "Kubernetes Orchestration",
      "CI/CD Pipelines",
      "Cloud Architecture",
    ],
    icon: CloudArrowUp,
  },
];

export function PathsGrid() {
  return (
    <section className="py-24 relative bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          badge={{ icon: TreeStructure, label: "Learning paths" }}
          title="Five paths, one destination"
          subtitle="Each path is a curated sequence of courses with clear milestones. Pick the one that matches your goals."
          dark
        />

        {/* First path: full width */}
        <div className="mb-6">
          <PathCard {...paths[0]} />
        </div>

        {/* Remaining paths: 2-col grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {paths.slice(1).map((path) => (
            <PathCard key={path.title} {...path} />
          ))}
        </div>
      </div>
    </section>
  );
}
