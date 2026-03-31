import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/shared/DarkSection.tsx
function DarkSection({ children, className, padTop, glow = "green" }) {
	return /* @__PURE__ */ jsxs("section", {
		className: `relative bg-zinc-950 text-zinc-100 overflow-hidden ${padTop ? "pt-28 pb-20" : "py-24"} ${className ?? ""}`,
		children: [
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-grid-dark" }),
			glow === "green" && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 glow-green" }),
			glow === "purple" && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 glow-purple" }),
			glow === "dual" && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 glow-dual" }),
			/* @__PURE__ */ jsx("div", {
				className: "relative z-10 mx-auto max-w-7xl px-4",
				children
			})
		]
	});
}
//#endregion
export { DarkSection as t };
