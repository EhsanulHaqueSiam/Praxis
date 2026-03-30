import { Badge } from "@lumina/ui";

interface SectionHeaderProps {
  badge?: { icon?: React.ElementType; label: string };
  title: string;
  subtitle?: string;
  gradientTitle?: boolean;
}

export function SectionHeader({ badge, title, subtitle, gradientTitle }: SectionHeaderProps) {
  return (
    <div className="mb-12 max-w-2xl">
      {badge && (
        <Badge variant="outline" className="mb-4">
          {badge.icon && (
            <badge.icon
              size={14}
              weight="fill"
              className="text-accent-400"
            />
          )}
          {badge.label}
        </Badge>
      )}
      <h2
        className={`font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4 ${
          gradientTitle ? "gradient-text" : "text-white"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-base text-zinc-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}
