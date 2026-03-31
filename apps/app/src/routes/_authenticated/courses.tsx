import { createFileRoute } from "@tanstack/react-router";
import { Input, courses } from "@lumina/ui";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { PageHeader } from "../../components/PageHeader";
import { AppCourseCard } from "../../components/AppCourseCard";

export const Route = createFileRoute("/_authenticated/courses")({
  component: CoursesPage,
});

const findCourse = (code: string) => courses.find((c) => c.code === code)!;

const csc1102 = findCourse("CSC 1102");
const csc2106 = findCourse("CSC 2106");
const csc3217 = findCourse("CSC 3217");

const enrolledCourses = [
  {
    courseId: csc1102.slug,
    title: csc1102.name,
    instructor: csc1102.instructor,
    icon: csc1102.icon,
    gradient: csc1102.gradient,
    progress: 72,
    totalLessons: 43,
    completedLessons: 31,
    nextLesson: "Functions and Recursion",
  },
  {
    courseId: csc2106.slug,
    title: csc2106.name,
    instructor: csc2106.instructor,
    icon: csc2106.icon,
    gradient: csc2106.gradient,
    progress: 38,
    totalLessons: 36,
    completedLessons: 14,
    nextLesson: "AVL Trees and Balancing",
  },
  {
    courseId: csc3217.slug,
    title: csc3217.name,
    instructor: csc3217.instructor,
    icon: csc3217.icon,
    gradient: csc3217.gradient,
    progress: 14,
    totalLessons: 52,
    completedLessons: 8,
    nextLesson: "Search Algorithms",
  },
];

const catalogCourses = ["CSC 2211", "CSC 3215", "CSC 1205", "CSC 2108", "COE 3204", "CSC 3214"].map(
  (code) => {
    const c = findCourse(code);
    return {
      courseId: c.slug,
      title: c.name,
      instructor: c.instructor,
      icon: c.icon,
      gradient: c.gradient,
      rating: c.rating,
      price: c.price,
    };
  },
);

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
