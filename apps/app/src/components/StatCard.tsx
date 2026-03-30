import { Card, CardContent } from "@lumina/ui";

interface StatCardProps {
  icon: React.ElementType;
  label: string;
  value: string;
  iconColor?: string;
  iconBg?: string;
}

export function StatCard({
  icon: Icon,
  label,
  value,
  iconColor = "text-accent-400",
  iconBg = "bg-zinc-800",
}: StatCardProps) {
  return (
    <Card className="bg-zinc-900 border-zinc-800">
      <CardContent className="p-5 flex items-center gap-4">
        <div
          className={`h-11 w-11 rounded-2xl ${iconBg} flex items-center justify-center`}
        >
          <Icon className={`h-5 w-5 ${iconColor}`} weight="duotone" />
        </div>
        <div>
          <div className="font-mono text-2xl font-bold text-white">{value}</div>
          <div className="text-xs text-zinc-500">{label}</div>
        </div>
      </CardContent>
    </Card>
  );
}
