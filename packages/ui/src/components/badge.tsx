import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold font-body transition-colors",
  {
    variants: {
      variant: {
        default: "bg-zinc-800 text-zinc-400 border border-zinc-700",
        success: "bg-accent-500/10 text-accent-400 border border-accent-500/20",
        outline: "border border-zinc-700 text-zinc-400",
        muted: "bg-zinc-800 text-zinc-400",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
