import { Badge } from "@lumina/ui";

interface SectionHeaderProps {
  badge?: { icon?: React.ElementType; label: string };
  title: string;
  subtitle?: string;
  gradientTitle?: boolean;
  dark?: boolean;
}

export function SectionHeader({
  badge,
  title,
  subtitle,
  gradientTitle,
  dark = true,
}: SectionHeaderProps) {
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
          gradientTitle ? "gradient-text" : dark ? "text-white" : "text-zinc-950"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base ${dark ? "text-zinc-400" : "text-zinc-600"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
