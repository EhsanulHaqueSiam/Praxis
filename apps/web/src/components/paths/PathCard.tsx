import { Badge } from "@lumina/ui";
import { BookOpen, Clock, ChartLineUp } from "@phosphor-icons/react";

interface PathCardProps {
  title: string;
  description: string;
  courseCount: number;
  duration: string;
  difficulty: string;
  milestones: string[];
  icon: React.ElementType;
}

export function PathCard({
  title,
  description,
  courseCount,
  duration,
  difficulty,
  milestones,
  icon: Icon,
}: PathCardProps) {
  return (
    <div className="rounded-2xl border border-white/[0.06] bg-zinc-900 p-6 md:p-8 hover:border-white/[0.12] hover:-translate-y-px transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)]">
      {/* Top: icon + title + description */}
      <div className="flex items-start gap-4 mb-6">
        <div className="h-12 w-12 rounded-xl bg-accent-500/10 flex items-center justify-center shrink-0">
          <Icon size={24} weight="duotone" className="text-accent-400" />
        </div>
        <div>
          <h3 className="font-display text-xl font-bold text-white mb-1">
            {title}
          </h3>
          <p className="text-sm text-zinc-400 leading-relaxed">{description}</p>
        </div>
      </div>

      {/* Middle: vertical timeline */}
      <div className="border-l-2 border-zinc-800 ml-3 pl-6 space-y-4 mb-6">
        {milestones.map((milestone, i) => (
          <div key={milestone} className="relative">
            <div className="absolute -left-[31px] top-1 h-3 w-3 rounded-full border-2 border-accent-500 bg-zinc-950 shadow-[0_0_6px_rgba(56,165,113,0.3)]" />
            <div className="text-sm font-medium text-zinc-300">{milestone}</div>
            <div className="text-xs text-zinc-600 mt-0.5">
              Module {i + 1}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom: meta badges */}
      <div className="flex flex-wrap gap-2">
        <Badge variant="outline" className="text-xs bg-zinc-800 border-zinc-700 text-zinc-400">
          <BookOpen size={12} className="text-zinc-500" />
          {courseCount} courses
        </Badge>
        <Badge variant="outline" className="text-xs bg-zinc-800 border-zinc-700 text-zinc-400">
          <Clock size={12} className="text-zinc-500" />
          {duration}
        </Badge>
        <Badge variant="outline" className="text-xs bg-zinc-800 border-zinc-700 text-zinc-400">
          <ChartLineUp size={12} className="text-zinc-500" />
          {difficulty}
        </Badge>
      </div>
    </div>
  );
}
