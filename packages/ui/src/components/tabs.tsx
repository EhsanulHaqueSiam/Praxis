import * as React from "react";
import { cn } from "../lib/utils";

interface TabsProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
  className?: string;
}

function Tabs({ tabs, activeTab, onTabChange, className }: TabsProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap gap-1",
        className
      )}
      role="tablist"
    >
      {tabs.map((tab) => {
        const isActive = tab === activeTab;
        return (
          <button
            key={tab}
            role="tab"
            aria-selected={isActive}
            onClick={() => onTabChange(tab)}
            className={cn(
              "px-4 py-2 text-sm font-medium rounded-xl transition-[color,background-color] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97]",
              isActive
                ? "bg-zinc-800 text-white"
                : "text-zinc-400 hover:text-white hover:bg-white/5"
            )}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}

export { Tabs };
