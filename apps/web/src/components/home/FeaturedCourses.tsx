import { Badge, Button } from "@lumina/ui";
import {
  GitPullRequest,
  TreeStructure,
  Rocket,
  BookOpen,
  Users,
  Star,
  Clock,
  ArrowRight,
} from "@phosphor-icons/react";

const topCourses = [
  {
    title: "Full-Stack Web Dev",
    duration: "42 hrs",
    students: "7,340",
    rating: 4.82,
  },
  {
    title: "Applied ML",
    duration: "56 hrs",
    students: "3,215",
    rating: 4.91,
  },
  {
    title: "Data Science with Python",
    duration: "38 hrs",
    students: "2,780",
    rating: 4.68,
  },
];

export function FeaturedCourses() {
  return (
    <section className="py-24 bg-zinc-950 relative">
      <div className="absolute inset-0 bg-glow-tl opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="mb-12 max-w-2xl">
          <Badge className="mb-4 bg-zinc-800 border border-zinc-700 text-zinc-400">
            <BookOpen size={14} weight="fill" className="text-accent-400" />
            Platform
          </Badge>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-zinc-100">
            Built for how engineers actually learn
          </h2>
          <p className="text-base text-zinc-400 leading-relaxed">
            Not another video library. A workshop where every module ends with
            code you can deploy.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* Tile 1 -- Code Reviews (large, spans 2 rows) */}
          <div className="md:row-span-2 rounded-2xl border border-white/[0.06] bg-zinc-900 p-6 md:p-8 hover:border-white/[0.12] transition-[border-color] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-xl bg-accent-500/10 flex items-center justify-center">
                <GitPullRequest
                  size={20}
                  weight="duotone"
                  className="text-accent-400"
                />
              </div>
              <h3 className="font-display text-xl font-bold text-white">
                Production Code Reviews
              </h3>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed mb-6 max-w-md">
              Submit pull requests as you build. Get line-by-line feedback from
              senior engineers at companies like Vercel and Datadog. Not
              automated linting -- real human review on architecture, patterns,
              and edge cases.
            </p>

            {/* Code diff visual */}
            <div className="font-mono text-xs text-zinc-500 bg-zinc-950 rounded-xl p-4 border border-zinc-800 mb-6 flex-1">
              <div className="text-red-400/70">
                - const data = fetch(url)
              </div>
              <div className="text-accent-400">
                + const data = await fetchWithRetry(url, {"{"} retries: 3 {"}"})
              </div>
              <div className="text-zinc-600 mt-2">
                // Reviewed by Tomoko W. -- &quot;Good pattern, consider adding
                timeout&quot;
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-zinc-500 mt-auto">
              <span className="flex items-center gap-1">
                <Star size={12} weight="fill" className="text-accent-400" />
                4.82 avg review score
              </span>
              <span>2,147 reviews given this month</span>
            </div>
          </div>

          {/* Tile 2 -- Structured Paths */}
          <div className="rounded-2xl border border-white/[0.06] bg-zinc-900 p-6 md:p-8 hover:border-white/[0.12] transition-[border-color] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-xl bg-zinc-800 flex items-center justify-center">
                <TreeStructure
                  size={20}
                  weight="duotone"
                  className="text-zinc-400"
                />
              </div>
              <h3 className="font-display text-xl font-bold text-white">
                Structured Paths
              </h3>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed mb-5">
              Curated sequences of courses that build on each other. No guessing
              what to learn next.
            </p>

            {/* Minimal path diagram */}
            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="px-3 py-1.5 rounded-lg bg-accent-500/10 text-accent-400 font-medium">
                Fundamentals
              </span>
              <span className="text-zinc-700">---</span>
              <span className="px-3 py-1.5 rounded-lg bg-zinc-800 text-zinc-500 font-medium">
                Intermediate
              </span>
              <span className="text-zinc-700">---</span>
              <span className="px-3 py-1.5 rounded-lg bg-zinc-800 text-zinc-500 font-medium">
                Production
              </span>
            </div>
          </div>

          {/* Tile 3 -- Production Deploy */}
          <div className="rounded-2xl border border-white/[0.06] bg-zinc-900 p-6 md:p-8 hover:border-white/[0.12] transition-[border-color] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-xl bg-accent-500/10 flex items-center justify-center">
                <Rocket
                  size={20}
                  weight="duotone"
                  className="text-accent-400"
                />
              </div>
              <h3 className="font-display text-xl font-bold text-white">
                Production Deploy
              </h3>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed mb-5">
              Every capstone ships to a real URL. CI/CD, monitoring, and
              observability included.
            </p>

            {/* Deploy status visual */}
            <div className="font-mono text-xs space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-accent-500" />
                <span className="text-zinc-400">
                  dashboard.praxis.dev -- live
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-accent-500" />
                <span className="text-zinc-400">
                  api.praxis.dev/v2 -- live
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-zinc-700" />
                <span className="text-zinc-600">
                  staging.praxis.dev -- idle
                </span>
              </div>
            </div>
          </div>

          {/* Tile 4 -- Top Courses (wide) */}
          <div className="md:col-span-2 rounded-2xl border border-white/[0.06] bg-zinc-900 p-6 md:p-8 hover:border-white/[0.12] transition-[border-color] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)]">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display text-xl font-bold text-white">
                Most enrolled courses
              </h3>
              <a href="/courses">
                <Button
                  variant="ghost"
                  size="sm"
                  className="group text-zinc-400 hover:text-white active:scale-[0.97] transition-all duration-150"
                >
                  View all 217
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-150 group-hover:translate-x-1"
                  />
                </Button>
              </a>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr] gap-4">
              {topCourses.map((course) => (
                <div
                  key={course.title}
                  className="rounded-xl border border-zinc-800 bg-zinc-800/50 p-5 hover:border-zinc-700 transition-[border-color] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer active:scale-[0.97]"
                >
                  <div className="font-display font-bold text-white mb-2">
                    {course.title}
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-500">
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users size={12} />
                      {course.students}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star
                        size={12}
                        weight="fill"
                        className="text-accent-400"
                      />
                      <span className="font-medium text-zinc-300">
                        {course.rating}
                      </span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tile 5 -- Live Mentorship */}
          <div className="md:col-span-2 lg:col-span-1 rounded-2xl border border-white/[0.06] bg-zinc-900 p-6 md:p-8 hover:border-white/[0.12] transition-[border-color] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-xl bg-zinc-800 flex items-center justify-center">
                <Users
                  size={20}
                  weight="duotone"
                  className="text-zinc-400"
                />
              </div>
              <h3 className="font-display text-xl font-bold text-white">
                Live Mentorship
              </h3>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed mb-5">
              Weekly office hours with industry engineers. Ask anything, pair
              live, get unstuck fast.
            </p>

            {/* Avatar stack */}
            <div className="flex items-center">
              <div className="flex -space-x-2">
                {[
                  "delphine-ayari",
                  "tomoko-westergaard",
                  "kael-nakamura",
                  "idris-okonkwo",
                  "meera-johansson",
                ].map((seed) => (
                  <img
                    key={seed}
                    src={`https://picsum.photos/seed/${seed}/80/80`}
                    alt=""
                    className="h-8 w-8 rounded-full border-2 border-zinc-900 object-cover"
                  />
                ))}
              </div>
              <span className="ml-3 text-xs text-zinc-500 font-mono">
                +83 mentors online
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
