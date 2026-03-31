import { o as Badge } from "./src-BjNFa_qv.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/shared/SectionHeader.tsx
function SectionHeader({ badge, title, subtitle, gradientTitle, dark = true }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "mb-12 max-w-2xl",
		children: [
			badge && /* @__PURE__ */ jsxs(Badge, {
				variant: "outline",
				className: "mb-4",
				children: [badge.icon && /* @__PURE__ */ jsx(badge.icon, {
					size: 14,
					weight: "fill",
					className: "text-accent-400"
				}), badge.label]
			}),
			/* @__PURE__ */ jsx("h2", {
				className: `font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4 ${gradientTitle ? "gradient-text" : dark ? "text-white" : "text-zinc-950"}`,
				children: title
			}),
			subtitle && /* @__PURE__ */ jsx("p", {
				className: `text-base ${dark ? "text-zinc-400" : "text-zinc-600"}`,
				children: subtitle
			})
		]
	});
}
//#endregion
export { SectionHeader as t };
