import type { ReactNode } from "react";

interface TooltipProps {
  children: ReactNode;
  content: string;
}

export function Tooltip({ children, content }: TooltipProps) {
  return (
    <div className="tooltip-wrap">
      {children}
      <div className="tooltip-content">{content}</div>
    </div>
  );
}
