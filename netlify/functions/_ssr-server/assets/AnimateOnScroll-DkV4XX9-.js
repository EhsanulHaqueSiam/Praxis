import { useEffect, useRef, useState } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/hooks/useInView.ts
function useInView(threshold = .15, once = true) {
	const ref = useRef(null);
	const [isInView, setIsInView] = useState(false);
	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setIsInView(true);
				if (once) observer.unobserve(el);
			} else if (!once) setIsInView(false);
		}, { threshold });
		observer.observe(el);
		return () => observer.disconnect();
	}, [threshold, once]);
	return {
		ref,
		isInView
	};
}
//#endregion
//#region src/components/shared/AnimateOnScroll.tsx
function AnimateOnScroll({ children, className = "", delay = 0 }) {
	const { ref, isInView } = useInView(.1);
	return /* @__PURE__ */ jsx("div", {
		ref,
		className,
		style: {
			opacity: isInView ? 1 : 0,
			transform: isInView ? "translateY(0)" : "translateY(24px)",
			transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`
		},
		children
	});
}
//#endregion
export { useInView as n, AnimateOnScroll as t };
