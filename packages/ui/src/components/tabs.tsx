import * as React from "react";
import { cn } from "../lib/utils";

interface TabsProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
  className?: string;
  dark?: boolean;
}

function Tabs({ tabs, activeTab, onTabChange, className }: TabsProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [indicatorStyle, setIndicatorStyle] = React.useState({ left: 0, width: 0 });

  React.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const activeEl = container.querySelector('[aria-selected="true"]') as HTMLElement;
    if (activeEl) {
      setIndicatorStyle({
        left: activeEl.offsetLeft,
        width: activeEl.offsetWidth,
      });
    }
  }, [activeTab]);

  return (
    <div
      ref={containerRef}
      className={cn("tabs-slider relative inline-flex flex-wrap gap-1 p-1 rounded-2xl bg-zinc-900/50 border border-white/[0.04]", className)}
      role="tablist"
    >
      <div
        className="tab-indicator"
        style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
      />
      {tabs.map((tab) => {
        const isActive = tab === activeTab;
        return (
          <button
            key={tab}
            role="tab"
            aria-selected={isActive}
            onClick={() => onTabChange(tab)}
            className={cn(
              "relative z-10 px-4 py-2 text-sm font-medium rounded-xl transition-colors duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97]",
              isActive ? "text-white" : "text-zinc-400 hover:text-zinc-200"
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
