import { useRef } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/components/shared/SpotlightCard.tsx
function SpotlightCard({ children, className = "" }) {
	const cardRef = useRef(null);
	function handleMouseMove(e) {
		const card = cardRef.current;
		if (!card) return;
		const rect = card.getBoundingClientRect();
		card.style.setProperty("--spotlight-x", `${e.clientX - rect.left}px`);
		card.style.setProperty("--spotlight-y", `${e.clientY - rect.top}px`);
	}
	return /* @__PURE__ */ jsx("div", {
		ref: cardRef,
		onMouseMove: handleMouseMove,
		className: `spotlight-card ${className}`,
		children
	});
}
//#endregion
export { SpotlightCard as t };
