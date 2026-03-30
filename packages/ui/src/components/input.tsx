import * as React from "react";
import { cn } from "../lib/utils";

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-11 w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2 font-body text-sm text-white shadow-sm transition-[border-color,box-shadow] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500/30 focus-visible:border-accent-500/40 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
