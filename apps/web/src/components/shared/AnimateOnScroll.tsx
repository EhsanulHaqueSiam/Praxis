import type { ReactNode } from "react";
import { useInView } from "~/hooks/useInView";

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li";
}

export function AnimateOnScroll({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: AnimateOnScrollProps) {
  const { ref, isInView } = useInView(0.1);

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}
    >
      {children}
    </Tag>
  );
}
