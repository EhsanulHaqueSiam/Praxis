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
}

function Accordion({ items, className }: AccordionProps) {
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
