import { Star, Clock, Users, ArrowRight } from "@phosphor-icons/react";
import { Badge } from "@lumina/ui";
import { SpotlightCard } from "~/components/shared/SpotlightCard";

interface CourseCardProps {
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
}

const darkIconBgMap: Record<string, string> = {
  "bg-accent-50": "bg-gradient-to-br from-accent-600/20 to-accent-600/5",
  "bg-blue-50": "bg-gradient-to-br from-blue-600/20 to-blue-600/5",
  "bg-purple-50": "bg-gradient-to-br from-purple-600/20 to-purple-600/5",
  "bg-pink-50": "bg-gradient-to-br from-pink-600/20 to-pink-600/5",
  "bg-orange-50": "bg-gradient-to-br from-orange-600/20 to-orange-600/5",
  "bg-indigo-50": "bg-gradient-to-br from-indigo-600/20 to-indigo-600/5",
  "bg-violet-50": "bg-gradient-to-br from-violet-600/20 to-violet-600/5",
  "bg-zinc-100": "bg-gradient-to-br from-zinc-600/20 to-zinc-600/5",
  "bg-emerald-50": "bg-gradient-to-br from-emerald-600/20 to-emerald-600/5",
  "bg-sky-50": "bg-gradient-to-br from-sky-600/20 to-sky-600/5",
  "bg-amber-50": "bg-gradient-to-br from-amber-600/20 to-amber-600/5",
  "bg-rose-50": "bg-gradient-to-br from-rose-600/20 to-rose-600/5",
  "bg-teal-50": "bg-gradient-to-br from-teal-600/20 to-teal-600/5",
};

export function CourseCard({
  title,
  instructor,
  rating,
  duration,
  students,
  price,
  icon: Icon,
  iconBg,
  iconColor,
  badge: badgeText,
}: CourseCardProps) {
  const darkBg = darkIconBgMap[iconBg] ?? "bg-gradient-to-br from-zinc-600/20 to-zinc-600/5";

  return (
    <SpotlightCard className="hover-reveal-parent rounded-2xl border border-white/[0.06] bg-zinc-900 p-5 hover:border-white/[0.12] hover:-translate-y-px cursor-pointer active:scale-[0.97] transition-all duration-150 card-highlight">
      <div
        className={`relative z-10 rounded-xl h-32 flex items-center justify-center mb-4 ${darkBg}`}
      >
        <Icon size={36} weight="duotone" className={iconColor} />
      </div>

      {badgeText && (
        <Badge variant="outline" className="relative z-10 mb-2 text-xs bg-zinc-800 text-zinc-400 border-zinc-700">
          {badgeText}
        </Badge>
      )}

      <h3 className="relative z-10 font-display text-lg font-bold text-zinc-100 mb-1">
        {title}
      </h3>

      <p className="relative z-10 text-sm text-zinc-500 mb-4">{instructor}</p>

      <div className="relative z-10 flex flex-wrap items-center gap-3 text-xs text-zinc-400 mb-4">
        <span className="flex items-center gap-1">
          <Star size={12} weight="fill" className="text-accent-400" />
          <span className="font-medium text-zinc-400">{rating}</span>
        </span>
        <span className="flex items-center gap-1 text-zinc-600">
          <Clock size={12} />
          <span className="text-zinc-400">{duration}</span>
        </span>
        <span className="flex items-center gap-1 text-zinc-600">
          <Users size={12} />
          <span className="text-zinc-400">{students}</span>
        </span>
      </div>

      <div className="relative z-10 flex items-center justify-end">
        <span className="font-mono font-bold text-white">{price}</span>
      </div>

      {/* Hover reveal overlay */}
      <div className="hover-reveal-overlay">
        <span className="flex items-center gap-1.5 text-sm font-medium text-white">
          View course <ArrowRight size={14} />
        </span>
      </div>
    </SpotlightCard>
  );
}
