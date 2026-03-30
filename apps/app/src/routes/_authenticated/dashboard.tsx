import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, Badge, Button } from "@lumina/ui";
import {
  Play,
  ArrowRight,
  Fire,
  Clock,
  Certificate,
  ChartLineUp,
  BookOpen,
  Star,
  CheckCircle,
  Lightning,
  Code,
  PaintBrush,
  Brain,
} from "@phosphor-icons/react";

export const Route = createFileRoute("/_authenticated/dashboard")({
  component: DashboardPage,
});

const enrolledCourses = [
  {
    title: "Production-Grade React",
    instructor: "Tomoko Westergaard",
    progress: 72,
    nextLesson: "Server Components & Streaming",
    totalLessons: 43,
    completedLessons: 31,
    icon: Code,
    accentBg: "bg-accent-600/15",
    accentText: "text-accent-400",
  },
  {
    title: "Interface Design Systems",
    instructor: "Idris Okonkwo-Petit",
    progress: 38,
    nextLesson: "Token Architecture & Theming",
    totalLessons: 36,
    completedLessons: 14,
    icon: PaintBrush,
    accentBg: "bg-zinc-700/30",
    accentText: "text-zinc-300",
  },
  {
    title: "Applied Machine Learning",
    instructor: "Dr. Meera Johansson",
    progress: 14,
    nextLesson: "Feature Engineering Pipelines",
    totalLessons: 52,
    completedLessons: 8,
    icon: Brain,
    accentBg: "bg-zinc-700/30",
    accentText: "text-zinc-300",
  },
];

const recentActivity = [
  {
    text: "Completed 'React Server Actions'",
    time: "3 hours ago",
    icon: CheckCircle,
  },
  {
    text: "12-day building streak",
    time: "Today",
    icon: Fire,
  },
  {
    text: "Earned 'System Thinker' badge",
    time: "Yesterday",
    icon: Certificate,
  },
  {
    text: "Started 'Applied Machine Learning'",
    time: "3 days ago",
    icon: BookOpen,
  },
];

const recommendedCourses = [
  {
    title: "TypeScript Patterns",
    rating: 4.87,
    price: "$39",
  },
  {
    title: "Distributed Systems",
    rating: 4.79,
    price: "$54",
  },
  {
    title: "Container Orchestration",
    rating: 4.91,
    price: "$49",
  },
];

function DashboardPage() {
  return (
    <div className="p-6 lg:p-8 space-y-8 max-w-7xl mx-auto">
      {/* Welcome Banner */}
      <div className="relative rounded-3xl bg-zinc-900 p-8 overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-20" />

        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
              Welcome back,{" "}
              <span className="text-accent-400">Kael</span>
            </h1>
            <p className="text-zinc-400 text-sm sm:text-base">
              You're on a 12-day streak. Keep the momentum.
            </p>
          </div>
          <Button className="bg-accent-600 hover:bg-accent-700 shrink-0 group">
            Continue building
            <Play
              className="h-4 w-4 ml-1 transition-transform group-hover:scale-110"
              weight="fill"
            />
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            icon: Fire,
            label: "Day Streak",
            value: "12",
          },
          {
            icon: Clock,
            label: "Hours Built",
            value: "87.4",
          },
          {
            icon: Certificate,
            label: "Certificates",
            value: "4",
          },
          {
            icon: ChartLineUp,
            label: "This Week",
            value: "+6.2h",
          },
        ].map((stat) => {
          const Icon = stat.icon;
          return (
            <Card
              key={stat.label}
              className="bg-zinc-900 border-zinc-800"
            >
              <CardContent className="p-5 flex items-center gap-4">
                <div className="h-11 w-11 rounded-2xl bg-zinc-800 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-accent-400" weight="duotone" />
                </div>
                <div>
                  <div className="font-mono text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-zinc-500">{stat.label}</div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Enrolled Courses - Takes 2 columns */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-xl font-bold text-white">
              Continue Learning
            </h2>
            <a
              href="/courses"
              className="text-sm text-accent-400 hover:text-accent-300 transition-colors"
            >
              View all
            </a>
          </div>

          <div className="space-y-4">
            {enrolledCourses.map((course) => {
              const CourseIcon = course.icon;
              return (
                <Card
                  key={course.title}
                  className="bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-[border-color,transform] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover-lift group cursor-pointer"
                >
                  <CardContent className="p-5">
                    <div className="flex gap-5">
                      {/* Course thumbnail */}
                      <div
                        className={`hidden sm:flex h-24 w-36 shrink-0 rounded-xl ${course.accentBg} items-center justify-center`}
                      >
                        <CourseIcon
                          className={`h-8 w-8 ${course.accentText} group-hover:scale-110 transition-transform`}
                          weight="duotone"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <div>
                            <h3 className="font-display font-bold text-white group-hover:text-accent-400 transition-colors truncate">
                              {course.title}
                            </h3>
                            <p className="text-xs text-zinc-500">
                              {course.instructor}
                            </p>
                          </div>
                          <Badge
                            variant="muted"
                            className="shrink-0 bg-zinc-800 text-zinc-400"
                          >
                            {course.completedLessons}/{course.totalLessons}
                          </Badge>
                        </div>

                        {/* Progress */}
                        <div className="mb-3">
                          <div className="flex items-center justify-between text-xs mb-1.5">
                            <span className="text-zinc-500">Progress</span>
                            <span className="font-semibold text-accent-400">
                              {course.progress}%
                            </span>
                          </div>
                          <div className="progress-bar">
                            <div
                              className="progress-bar-fill glow-accent"
                              style={{ width: `${course.progress}%` }}
                            />
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <p className="text-xs text-zinc-600 truncate">
                            Next: {course.nextLesson}
                          </p>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-accent-400 hover:text-accent-300 shrink-0 group/btn"
                          >
                            Resume
                            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Activity Feed */}
          <div>
            <h2 className="font-display text-xl font-bold text-white mb-4">
              Recent Activity
            </h2>
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-4">
                <div className="space-y-4">
                  {recentActivity.map((activity, i) => {
                    const Icon = activity.icon;
                    return (
                      <div key={i} className="flex gap-3">
                        <div className="h-8 w-8 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0">
                          <Icon
                            className="h-4 w-4 text-accent-400"
                            weight="duotone"
                          />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm text-zinc-300 truncate">
                            {activity.text}
                          </p>
                          <p className="text-xs text-zinc-600">
                            {activity.time}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recommended */}
          <div>
            <h2 className="font-display text-xl font-bold text-white mb-4">
              Recommended
            </h2>
            <div className="space-y-3">
              {recommendedCourses.map((course) => (
                <Card
                  key={course.title}
                  className="bg-zinc-900 border-zinc-800 hover:border-zinc-700 cursor-pointer transition-[border-color,transform] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] group"
                >
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="h-12 w-12 rounded-xl bg-zinc-800 flex items-center justify-center shrink-0">
                      <Lightning
                        className="h-5 w-5 text-accent-400"
                        weight="duotone"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-display font-bold text-sm text-white group-hover:text-accent-400 transition-colors truncate">
                        {course.title}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-zinc-500">
                        <Star
                          className="h-3 w-3 text-accent-400"
                          weight="fill"
                        />
                        {course.rating}
                      </div>
                    </div>
                    <span className="font-display font-bold text-sm text-accent-400 shrink-0">
                      {course.price}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
