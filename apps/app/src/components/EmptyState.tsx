import { Button } from "@lumina/ui";

interface EmptyStateProps {
  icon: React.ElementType;
  title: string;
  description: string;
  action?: { label: string; href: string };
}

export function EmptyState({
  icon: Icon,
  title,
  description,
  action,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-6 text-center">
      <Icon className="size-16 text-zinc-700 mb-6" weight="duotone" />
      <h3 className="font-display font-bold text-white text-lg mb-2">
        {title}
      </h3>
      <p className="text-sm text-zinc-500 max-w-sm mb-6">{description}</p>
      {action && (
        <a href={action.href}>
          <Button>{action.label}</Button>
        </a>
      )}
    </div>
  );
}
