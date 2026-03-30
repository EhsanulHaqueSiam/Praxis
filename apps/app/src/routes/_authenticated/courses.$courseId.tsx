import { createFileRoute } from "@tanstack/react-router";
import { Badge, Button } from "@lumina/ui";
import {
  Play,
  CheckCircle,
  Circle,
  ArrowRight,
  FileText,
  GithubLogo,
  Code,
} from "@phosphor-icons/react";

export const Route = createFileRoute("/_authenticated/courses/$courseId")({
  component: CourseDetailPage,
});

interface Lesson {
  title: string;
  duration: string;
  status: "completed" | "current" | "upcoming";
}

interface Chapter {
  title: string;
  lessons: Lesson[];
}

const chapters: Chapter[] = [
  {
    title: "React Fundamentals",
    lessons: [
      { title: "JSX Deep Dive", duration: "12m", status: "completed" },
      { title: "Component Composition", duration: "18m", status: "completed" },
      { title: "Props & Children Patterns", duration: "14m", status: "completed" },
      { title: "Hooks Architecture", duration: "22m", status: "completed" },
      { title: "Custom Hook Extraction", duration: "16m", status: "completed" },
      { title: "Ref Forwarding", duration: "11m", status: "completed" },
      { title: "Error Boundaries", duration: "13m", status: "completed" },
      { title: "Suspense Fundamentals", duration: "19m", status: "completed" },
    ],
  },
  {
    title: "State & Data Flow",
    lessons: [
      { title: "Context at Scale", duration: "17m", status: "completed" },
      { title: "Reducer Patterns", duration: "21m", status: "completed" },
      { title: "External Store Integration", duration: "15m", status: "completed" },
      { title: "Optimistic Updates", duration: "18m", status: "completed" },
      { title: "Derived State", duration: "12m", status: "completed" },
      { title: "State Machines in React", duration: "23m", status: "completed" },
      { title: "Concurrent Features", duration: "20m", status: "completed" },
    ],
  },
  {
    title: "Server Components",
    lessons: [
      { title: "RSC Mental Model", duration: "16m", status: "completed" },
      { title: "Data Fetching Patterns", duration: "19m", status: "completed" },
      { title: "Server Actions", duration: "14m", status: "completed" },
      { title: "Server Components & Streaming", duration: "22m", status: "current" },
      { title: "Cache Invalidation", duration: "17m", status: "upcoming" },
      { title: "Partial Prerendering", duration: "15m", status: "upcoming" },
    ],
  },
  {
    title: "API Integration",
    lessons: [
      { title: "REST & GraphQL Patterns", duration: "20m", status: "upcoming" },
      { title: "Type-Safe API Layers", duration: "18m", status: "upcoming" },
      { title: "WebSocket Real-Time", duration: "16m", status: "upcoming" },
      { title: "Rate Limiting & Retries", duration: "13m", status: "upcoming" },
      { title: "API Error Handling", duration: "15m", status: "upcoming" },
      { title: "Request Deduplication", duration: "11m", status: "upcoming" },
      { title: "Pagination Strategies", duration: "17m", status: "upcoming" },
      { title: "File Upload Patterns", duration: "14m", status: "upcoming" },
    ],
  },
  {
    title: "Testing & CI",
    lessons: [
      { title: "Testing Philosophy", duration: "12m", status: "upcoming" },
      { title: "Component Testing", duration: "19m", status: "upcoming" },
      { title: "Integration Testing", duration: "21m", status: "upcoming" },
      { title: "E2E with Playwright", duration: "18m", status: "upcoming" },
      { title: "Visual Regression", duration: "14m", status: "upcoming" },
      { title: "CI Pipeline Setup", duration: "16m", status: "upcoming" },
      { title: "Coverage & Quality Gates", duration: "13m", status: "upcoming" },
    ],
  },
  {
    title: "Production Deploy",
    lessons: [
      { title: "Build Optimization", duration: "17m", status: "upcoming" },
      { title: "Edge Runtime Config", duration: "15m", status: "upcoming" },
      { title: "Monitoring & Observability", duration: "20m", status: "upcoming" },
      { title: "Feature Flags", duration: "12m", status: "upcoming" },
      { title: "Blue-Green Deploys", duration: "14m", status: "upcoming" },
      { title: "Performance Budgets", duration: "16m", status: "upcoming" },
      { title: "Incident Runbooks", duration: "11m", status: "upcoming" },
    ],
  },
];

function LessonIcon({ status }: { status: Lesson["status"] }) {
  if (status === "completed") {
    return <CheckCircle className="h-5 w-5 text-accent-400 shrink-0" weight="fill" />;
  }
  if (status === "current") {
    return <Play className="h-5 w-5 text-accent-400 shrink-0" weight="fill" />;
  }
  return <Circle className="h-5 w-5 text-zinc-600 shrink-0" />;
}

function CourseDetailPage() {
  const completedCount = chapters.reduce(
    (acc, ch) => acc + ch.lessons.filter((l) => l.status === "completed").length,
    0
  );
  const totalCount = chapters.reduce((acc, ch) => acc + ch.lessons.length, 0);
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  return (
    <div className="flex min-h-full">
      {/* Curriculum Sidebar */}
      <aside className="hidden md:flex w-72 lg:w-80 flex-col bg-zinc-900 border-r border-zinc-800 overflow-y-auto">
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-accent-500 to-accent-700 flex items-center justify-center">
              <Code className="h-5 w-5 text-white/80" weight="duotone" />
            </div>
            <h2 className="font-display font-bold text-white text-lg leading-tight">
              Production-Grade React
            </h2>
          </div>

          <div>
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="text-zinc-500">
                {completedCount} of {totalCount} lessons
              </span>
              <span className="font-semibold text-accent-400">
                {progressPercent}%
              </span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-bar-fill"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        <nav className="flex-1 px-3 pb-6 space-y-1">
          {chapters.map((chapter, ci) => (
            <details key={chapter.title} open={ci === 2}>
              <summary className="flex items-center gap-2 px-3 py-2.5 text-xs font-semibold text-zinc-400 uppercase tracking-wider cursor-pointer select-none hover:text-zinc-300 transition-colors">
                <span>
                  Ch. {ci + 1}: {chapter.title}
                </span>
                <Badge
                  variant="muted"
                  className="ml-auto bg-zinc-800 text-zinc-500 text-[10px]"
                >
                  {chapter.lessons.filter((l) => l.status === "completed").length}/
                  {chapter.lessons.length}
                </Badge>
              </summary>

              <ul className="mt-1 space-y-0.5">
                {chapter.lessons.map((lesson) => (
                  <li key={lesson.title}>
                    <button
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm transition-[color,background-color] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97] ${
                        lesson.status === "current"
                          ? "bg-accent-600/10 text-accent-400"
                          : lesson.status === "completed"
                            ? "text-zinc-400 hover:bg-zinc-800/50"
                            : "text-zinc-600 hover:bg-zinc-800/50 hover:text-zinc-400"
                      }`}
                    >
                      <LessonIcon status={lesson.status} />
                      <span className="truncate flex-1 text-left">
                        {lesson.title}
                      </span>
                      <span className="text-xs text-zinc-600 shrink-0">
                        {lesson.duration}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-6 lg:p-8 max-w-4xl mx-auto space-y-8">
          {/* Lesson Header */}
          <div>
            <Badge variant="muted" className="bg-zinc-800 text-zinc-400 mb-3">
              Chapter 3: Server Components
            </Badge>
            <h1 className="font-display text-2xl font-bold text-white">
              Server Components & Streaming
            </h1>
          </div>

          {/* Video Placeholder */}
          <div className="rounded-2xl bg-zinc-800 aspect-video flex items-center justify-center cursor-pointer group/video">
            <div className="h-16 w-16 rounded-full bg-zinc-700 flex items-center justify-center group-hover/video:bg-accent-600 transition-[background-color] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)]">
              <Play
                className="size-8 text-zinc-500 group-hover/video:text-white transition-colors"
                weight="fill"
              />
            </div>
          </div>

          {/* Lesson Description */}
          <div className="space-y-4">
            <p className="text-zinc-400 leading-relaxed">
              Explore how React Server Components fundamentally change the way we
              think about rendering. In this lesson, you'll learn how streaming
              enables progressive UI hydration, delivering faster initial loads
              while keeping the interactive experience seamless.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              We'll walk through practical patterns for mixing server and client
              components, handling loading states with Suspense boundaries, and
              implementing error recovery at the component level. By the end,
              you'll have a production-ready streaming architecture for your
              React application.
            </p>
          </div>

          {/* Resources */}
          <div className="space-y-3">
            <h3 className="font-display font-bold text-white text-sm">
              Resources
            </h3>
            <div className="flex flex-wrap gap-3">
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-zinc-400 hover:text-white hover:border-zinc-700 transition-[color,border-color] duration-150 active:scale-[0.97]"
              >
                <FileText className="h-4 w-4" weight="duotone" />
                Lesson notes
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-zinc-400 hover:text-white hover:border-zinc-700 transition-[color,border-color] duration-150 active:scale-[0.97]"
              >
                <GithubLogo className="h-4 w-4" weight="duotone" />
                Starter code
              </a>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
            <Button variant="outline">Mark as complete</Button>
            <Button className="group/next">
              Next lesson
              <ArrowRight className="h-4 w-4 transition-transform group-hover/next:translate-x-0.5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
