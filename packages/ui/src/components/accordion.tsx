import * as React from "react";
import { cn } from "../lib/utils";
import { CaretDown } from "@phosphor-icons/react";

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
  variant?: "default" | "cards";
}

function Accordion({ items, className, variant = "default" }: AccordionProps) {
  if (variant === "cards") {
    return (
      <div className={cn("space-y-3", className)}>
        {items.map((item) => (
          <details
            key={item.title}
            className="group rounded-2xl bg-zinc-900 border border-white/[0.06] overflow-hidden transition-[border-color] duration-200 hover:border-white/[0.1] open:border-accent-500/20 open:shadow-[0_0_20px_rgba(56,165,113,0.04)]"
          >
            <summary className="flex items-center justify-between cursor-pointer list-none px-6 py-5 font-display font-bold text-[15px] text-white select-none transition-colors duration-150 ease-[cubic-bezier(0.23,1,0.32,1)]">
              <span className="flex items-center gap-3">
                <span className="h-6 w-0.5 rounded-full bg-zinc-700 group-open:bg-accent-500 transition-colors duration-300" />
                {item.title}
              </span>
              <CaretDown
                size={16}
                weight="bold"
                className="text-zinc-500 shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-open:rotate-180 group-open:text-accent-400"
              />
            </summary>
            <div className="px-6 pb-5 pl-[39px] text-sm text-zinc-400 leading-relaxed">
              {item.content}
            </div>
          </details>
        ))}
      </div>
    );
  }

  return (
    <div className={cn("divide-y divide-zinc-800", className)}>
      {items.map((item) => (
        <details
          key={item.title}
          className="group"
        >
          <summary className="flex items-center justify-between cursor-pointer list-none px-0 py-5 font-display font-bold text-white select-none transition-colors duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-zinc-300 active:scale-[0.997]">
            {item.title}
            <CaretDown
              size={16}
              weight="bold"
              className="text-zinc-500 shrink-0 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-open:rotate-180"
            />
          </summary>
          <div className="pb-5 text-sm text-zinc-400 leading-relaxed">
            {item.content}
          </div>
        </details>
      ))}
    </div>
  );
}

export { Accordion, type AccordionItem };
