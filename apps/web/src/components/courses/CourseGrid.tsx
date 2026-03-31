import { courses, type CourseCategory } from "@lumina/ui";
import { CourseCard } from "./CourseCard";

const categoryDescriptions: Record<CourseCategory, string> = {
  "Computer Science Fundamentals":
    "Core theory, mathematics, and algorithms. Build the foundation every engineer needs — from discrete math to computational theory.",
  "Software Engineering":
    "Object-oriented design, databases, compilers, and professional practice. Ship maintainable software with industry-standard methods.",
  "Web & Mobile Development":
    "Modern web technologies and application development. Build full-stack apps with current frameworks and deployment pipelines.",
  "AI & Data Science":
    "Artificial intelligence, expert systems, and statistical reasoning. Train and evaluate models on real-world problems.",
  "Systems & Networking":
    "Digital circuits, computer architecture, operating systems, and networks. Understand the full hardware-to-application stack.",
};

const categoryOrder: CourseCategory[] = [
  "Computer Science Fundamentals",
  "Software Engineering",
  "Systems & Networking",
  "AI & Data Science",
  "Web & Mobile Development",
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
                    <CourseCard
                      key={course.id}
                      title={course.name}
                      instructor={course.instructor}
                      rating={course.rating}
                      duration={course.duration}
                      students={course.students}
                      price={course.price}
                      icon={course.icon}
                      iconBg={course.iconBg}
                      iconColor={course.iconColor}
                      badge={course.badge}
                    />
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
