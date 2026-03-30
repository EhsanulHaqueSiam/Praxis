import * as React from "react";
import { cn } from "../lib/utils";

interface ToggleProps {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
  size?: "sm" | "default";
}

function Toggle({
  checked = false,
  onCheckedChange,
  disabled = false,
  className,
  size = "default",
}: ToggleProps) {
  const sizes = {
    sm: { track: "h-5 w-9", thumb: "h-3.5 w-3.5", translate: "translate-x-4" },
    default: { track: "h-6 w-11", thumb: "h-4 w-4", translate: "translate-x-5" },
  };
  const s = sizes[size];

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => onCheckedChange?.(!checked)}
      className={cn(
        "relative inline-flex shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-[background-color] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 disabled:cursor-not-allowed disabled:opacity-50",
        s.track,
        checked ? "bg-accent-500" : "bg-zinc-800",
        className
      )}
    >
      <span
        className={cn(
          "pointer-events-none inline-block rounded-full bg-white shadow-sm transition-transform duration-150 ease-[cubic-bezier(0.23,1,0.32,1)]",
          s.thumb,
          checked ? s.translate : "translate-x-0.5"
        )}
      />
    </button>
  );
}

export { Toggle };
