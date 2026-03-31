import { useRef } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/components/shared/TiltCard.tsx
function TiltCard({ children, className = "", intensity = 8 }) {
	const cardRef = useRef(null);
	function handleMouseMove(e) {
		const card = cardRef.current;
		if (!card) return;
		const rect = card.getBoundingClientRect();
		const x = (e.clientX - rect.left) / rect.width;
		const rotateX = (.5 - (e.clientY - rect.top) / rect.height) * intensity;
		const rotateY = (x - .5) * intensity;
		card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`;
	}
	function handleMouseLeave() {
		const card = cardRef.current;
		if (!card) return;
		card.style.transform = "perspective(800px) rotateX(0) rotateY(0) scale(1)";
	}
	return /* @__PURE__ */ jsx("div", {
		ref: cardRef,
		onMouseMove: handleMouseMove,
		onMouseLeave: handleMouseLeave,
		className,
		style: {
			transition: "transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
			willChange: "transform"
		},
		children
	});
}
//#endregion
export { TiltCard as t };
