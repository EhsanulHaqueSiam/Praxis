import { Card, CardContent, Badge, Button } from "@lumina/ui";
import { ArrowRight, Star } from "@phosphor-icons/react";

interface AppCourseCardProps {
  title: string;
  instructor: string;
  icon: React.ElementType;
  gradient: string;
  progress?: number;
  totalLessons?: number;
  completedLessons?: number;
  nextLesson?: string;
  rating?: number;
  price?: string;
  enrolled?: boolean;
}

export function AppCourseCard({
  title,
  instructor,
  icon: CourseIcon,
  gradient,
  progress,
  totalLessons,
  completedLessons,
  nextLesson,
  rating,
  price,
  enrolled,
}: AppCourseCardProps) {
  return (
    <Card className="bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-[border-color,transform] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] group cursor-pointer">
      <CardContent className="p-5">
        <div className="flex gap-5">
          <div
            className={`hidden sm:flex h-24 w-36 shrink-0 rounded-xl bg-gradient-to-br ${gradient} items-center justify-center`}
          >
            <CourseIcon
              className="h-8 w-8 text-white/80 group-hover:scale-110 transition-transform"
              weight="duotone"
            />
          </div>

          <div className="flex-1 min-w-0">
            {enrolled ? (
              <>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <h3 className="font-display font-bold text-white group-hover:text-accent-400 transition-colors truncate">
                      {title}
                    </h3>
                    <p className="text-xs text-zinc-500">{instructor}</p>
                  </div>
                  <Badge
                    variant="muted"
                    className="shrink-0 bg-zinc-800 text-zinc-400"
                  >
                    {completedLessons}/{totalLessons}
                  </Badge>
                </div>

                <div className="mb-3">
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="text-zinc-500">Progress</span>
                    <span className="font-semibold text-accent-400">
                      {progress}%
                    </span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-bar-fill"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-xs text-zinc-600 truncate">
                    Next: {nextLesson}
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
              </>
            ) : (
              <>
                <div className="mb-3">
                  <h3 className="font-display font-bold text-white group-hover:text-accent-400 transition-colors truncate">
                    {title}
                  </h3>
                  <p className="text-xs text-zinc-500 mt-0.5">{instructor}</p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-zinc-500">
                    <Star
                      className="h-3.5 w-3.5 text-accent-400"
                      weight="fill"
                    />
                    <span className="font-medium">{rating}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-display font-bold text-sm text-accent-400">
                      {price}
                    </span>
                    <Button size="sm">Enroll</Button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
