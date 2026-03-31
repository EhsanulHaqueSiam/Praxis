import { createFileRoute } from "@tanstack/react-router";
import { Input } from "@lumina/ui";
import {
  Code,
  PaintBrush,
  Brain,
  BracketsCurly,
  CloudArrowUp,
  Cube,
  Database,
  PencilRuler,
  Robot,
  MagnifyingGlass,
} from "@phosphor-icons/react";
import { PageHeader } from "../../components/PageHeader";
import { AppCourseCard } from "../../components/AppCourseCard";

export const Route = createFileRoute("/_authenticated/courses")({
  component: CoursesPage,
});

const enrolledCourses = [
  {
    courseId: "production-grade-react",
    title: "Production-Grade React",
    instructor: "Tomoko Westergaard",
    icon: Code,
    gradient: "from-accent-500 to-accent-700",
    progress: 72,
    totalLessons: 43,
    completedLessons: 31,
    nextLesson: "Server Components & Streaming",
  },
  {
    courseId: "interface-design-systems",
    title: "Interface Design Systems",
    instructor: "Idris Okonkwo-Petit",
    icon: PaintBrush,
    gradient: "from-violet-500 to-violet-700",
    progress: 38,
    totalLessons: 36,
    completedLessons: 14,
    nextLesson: "Token Architecture & Theming",
  },
  {
    courseId: "applied-machine-learning",
    title: "Applied Machine Learning",
    instructor: "Dr. Meera Johansson",
    icon: Brain,
    gradient: "from-amber-500 to-amber-700",
    progress: 14,
    totalLessons: 52,
    completedLessons: 8,
    nextLesson: "Feature Engineering Pipelines",
  },
];

const catalogCourses = [
  {
    courseId: "typescript-patterns",
    title: "TypeScript Patterns",
    instructor: "Kael Nakamura-Boyce",
    icon: BracketsCurly,
    gradient: "from-blue-500 to-blue-700",
    rating: 4.87,
    price: "$39",
  },
  {
    courseId: "distributed-systems",
    title: "Distributed Systems",
    instructor: "Delphine Ayari",
    icon: CloudArrowUp,
    gradient: "from-cyan-500 to-cyan-700",
    rating: 4.79,
    price: "$54",
  },
  {
    courseId: "container-orchestration",
    title: "Container Orchestration",
    instructor: "Henrik Vasquez-Lund",
    icon: Cube,
    gradient: "from-orange-500 to-orange-700",
    rating: 4.91,
    price: "$49",
  },
  {
    courseId: "sql-mastery",
    title: "SQL Mastery",
    instructor: "Amara Osei-Boateng",
    icon: Database,
    gradient: "from-emerald-500 to-emerald-700",
    rating: 4.74,
    price: "$34",
  },
  {
    courseId: "design-engineering",
    title: "Design Engineering",
    instructor: "Ren Ishikawa-Flores",
    icon: PencilRuler,
    gradient: "from-pink-500 to-pink-700",
    rating: 4.84,
    price: "$44",
  },
  {
    courseId: "nlp-in-production",
    title: "NLP in Production",
    instructor: "Dr. Meera Johansson",
    icon: Robot,
    gradient: "from-purple-500 to-purple-700",
    rating: 4.86,
    price: "$54",
  },
];

function CoursesPage() {
  return (
    <div className="p-6 lg:p-8 space-y-8 max-w-7xl mx-auto">
      <PageHeader
        title="My Courses"
        action={
          <div className="relative">
            <MagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
            <Input
              type="text"
              placeholder="Search courses..."
              className="pl-9 w-64 bg-zinc-900 border-zinc-800"
            />
          </div>
        }
      />

      {/* Currently Enrolled */}
      <section className="space-y-4">
        <h2 className="font-display text-lg font-bold text-white">
          Currently Enrolled
        </h2>
        <div className="grid gap-4">
          {enrolledCourses.map((course) => (
            <AppCourseCard key={course.title} {...course} enrolled />
          ))}
        </div>
      </section>

      {/* Browse Catalog */}
      <section className="space-y-4">
        <h2 className="font-display text-lg font-bold text-white">
          Browse Catalog
        </h2>
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {catalogCourses.map((course) => (
            <AppCourseCard key={course.title} {...course} enrolled={false} />
          ))}
        </div>
      </section>
    </div>
  );
}
