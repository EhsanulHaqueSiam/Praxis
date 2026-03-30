import {
  Code,
  Palette,
  Brain,
  ChartLineUp,
  CloudArrowUp,
  Terminal,
  Database,
  TreeStructure,
  Cube,
  Robot,
  MagnifyingGlass,
  GitBranch,
  Gear,
  FileCode,
  Layout,
  PencilSimple,
  Eye,
  ChartBar,
  Sigma,
} from "@phosphor-icons/react";
import { CourseCard } from "./CourseCard";

interface Course {
  title: string;
  instructor: string;
  rating: number;
  duration: string;
  students: string;
  price: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  badge?: string;
  category: string;
}

const courses: Course[] = [
  // Web Development
  {
    title: "Production-Grade React",
    instructor: "Idris Okonkwo-Petit",
    rating: 4.82,
    duration: "42h",
    students: "7,340 enrolled",
    price: "$49",
    icon: Code,
    iconBg: "bg-accent-50",
    iconColor: "text-accent-600",
    badge: "Bestseller",
    category: "Web Development",
  },
  {
    title: "Full-Stack TypeScript",
    instructor: "Delphine Ayari",
    rating: 4.76,
    duration: "38h",
    students: "5,180 enrolled",
    price: "$44",
    icon: FileCode,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    category: "Web Development",
  },
  {
    title: "Node.js Systems",
    instructor: "Kael Nakamura-Boyce",
    rating: 4.68,
    duration: "36h",
    students: "3,920 enrolled",
    price: "$39",
    icon: Terminal,
    iconBg: "bg-zinc-100",
    iconColor: "text-zinc-700",
    category: "Web Development",
  },
  {
    title: "Next.js & Deployment",
    instructor: "Tomoko Westergaard",
    rating: 4.91,
    duration: "28h",
    students: "6,210 enrolled",
    price: "$44",
    icon: Layout,
    iconBg: "bg-accent-50",
    iconColor: "text-accent-600",
    badge: "Top rated",
    category: "Web Development",
  },
  // Design
  {
    title: "Interface Design Systems",
    instructor: "Tomoko Westergaard",
    rating: 4.79,
    duration: "34h",
    students: "4,860 enrolled",
    price: "$39",
    icon: Palette,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
    category: "Design",
  },
  {
    title: "Prototyping with Figma",
    instructor: "Luz Fernandez-Okoro",
    rating: 4.72,
    duration: "28h",
    students: "3,410 enrolled",
    price: "$34",
    icon: PencilSimple,
    iconBg: "bg-pink-50",
    iconColor: "text-pink-600",
    category: "Design",
  },
  {
    title: "Design Engineering",
    instructor: "Delphine Ayari",
    rating: 4.84,
    duration: "32h",
    students: "2,890 enrolled",
    price: "$44",
    icon: Cube,
    iconBg: "bg-orange-50",
    iconColor: "text-orange-600",
    badge: "New",
    category: "Design",
  },
  {
    title: "UX Research Methods",
    instructor: "Yael Bertrand-Cho",
    rating: 4.67,
    duration: "24h",
    students: "2,140 enrolled",
    price: "$34",
    icon: Eye,
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-600",
    category: "Design",
  },
  // ML & AI
  {
    title: "Applied Machine Learning",
    instructor: "Kael Nakamura-Boyce",
    rating: 4.91,
    duration: "56h",
    students: "3,215 enrolled",
    price: "$59",
    icon: Brain,
    iconBg: "bg-accent-50",
    iconColor: "text-accent-600",
    badge: "Top rated",
    category: "ML & AI",
  },
  {
    title: "Deep Learning Foundations",
    instructor: "Rashida Volkov-Chen",
    rating: 4.83,
    duration: "48h",
    students: "2,780 enrolled",
    price: "$54",
    icon: Robot,
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
    category: "ML & AI",
  },
  {
    title: "MLOps & Deployment",
    instructor: "Idris Okonkwo-Petit",
    rating: 4.77,
    duration: "36h",
    students: "1,940 enrolled",
    price: "$49",
    icon: Gear,
    iconBg: "bg-zinc-100",
    iconColor: "text-zinc-700",
    category: "ML & AI",
  },
  {
    title: "NLP in Production",
    instructor: "Kael Nakamura-Boyce",
    rating: 4.86,
    duration: "40h",
    students: "1,620 enrolled",
    price: "$54",
    icon: MagnifyingGlass,
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    badge: "New",
    category: "ML & AI",
  },
  // Data Science
  {
    title: "Data Science with Python",
    instructor: "Meera Johansson",
    rating: 4.68,
    duration: "38h",
    students: "2,780 enrolled",
    price: "$44",
    icon: ChartLineUp,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    category: "Data Science",
  },
  {
    title: "SQL Mastery",
    instructor: "Arlo Whitfield-Tanaka",
    rating: 4.74,
    duration: "24h",
    students: "4,320 enrolled",
    price: "$34",
    icon: Database,
    iconBg: "bg-sky-50",
    iconColor: "text-sky-600",
    badge: "Bestseller",
    category: "Data Science",
  },
  {
    title: "Data Visualization",
    instructor: "Tomoko Westergaard",
    rating: 4.71,
    duration: "28h",
    students: "2,190 enrolled",
    price: "$39",
    icon: ChartBar,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    category: "Data Science",
  },
  {
    title: "Statistical Inference",
    instructor: "Rashida Volkov-Chen",
    rating: 4.63,
    duration: "32h",
    students: "1,870 enrolled",
    price: "$44",
    icon: Sigma,
    iconBg: "bg-rose-50",
    iconColor: "text-rose-600",
    category: "Data Science",
  },
  // DevOps
  {
    title: "Docker & Kubernetes",
    instructor: "Idris Okonkwo-Petit",
    rating: 4.87,
    duration: "40h",
    students: "3,640 enrolled",
    price: "$49",
    icon: Cube,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    badge: "Top rated",
    category: "DevOps",
  },
  {
    title: "CI/CD Pipelines",
    instructor: "Delphine Ayari",
    rating: 4.73,
    duration: "28h",
    students: "2,890 enrolled",
    price: "$39",
    icon: GitBranch,
    iconBg: "bg-orange-50",
    iconColor: "text-orange-600",
    category: "DevOps",
  },
  {
    title: "AWS Architecture",
    instructor: "Kael Nakamura-Boyce",
    rating: 4.81,
    duration: "44h",
    students: "3,170 enrolled",
    price: "$54",
    icon: CloudArrowUp,
    iconBg: "bg-accent-50",
    iconColor: "text-accent-600",
    category: "DevOps",
  },
  {
    title: "Infrastructure as Code",
    instructor: "Arlo Whitfield-Tanaka",
    rating: 4.69,
    duration: "32h",
    students: "2,410 enrolled",
    price: "$44",
    icon: TreeStructure,
    iconBg: "bg-zinc-100",
    iconColor: "text-zinc-700",
    category: "DevOps",
  },
];

const categoryDescriptions: Record<string, string> = {
  "Web Development":
    "From component architecture to production deployment. Ship full-stack apps with React, TypeScript, Node.js, and modern tooling.",
  Design:
    "Design systems, prototyping workflows, and the bridge between design and engineering. Every module produces a portfolio piece.",
  "ML & AI":
    "Applied machine learning with real datasets. Train, evaluate, and deploy models that serve production traffic.",
  "Data Science":
    "Extract signal from noise. SQL, Python pipelines, visualization, and statistical reasoning with messy, real-world data.",
  DevOps:
    "Containers, orchestration, CI/CD, and cloud infrastructure. Automate everything between git push and production.",
};

const categoryOrder = [
  "Web Development",
  "Design",
  "ML & AI",
  "Data Science",
  "DevOps",
];

export function CourseGrid() {
  return (
    <section className="py-24 relative bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4">
        <div className="space-y-20">
          {categoryOrder.map((category) => {
            const categoryCourses = courses.filter(
              (c) => c.category === category
            );
            return (
              <div key={category}>
                <div className="mb-8 max-w-2xl">
                  <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-zinc-100 mb-2">
                    {category}
                  </h2>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    {categoryDescriptions[category]}
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {categoryCourses.map((course) => (
                    <CourseCard key={course.title} {...course} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
