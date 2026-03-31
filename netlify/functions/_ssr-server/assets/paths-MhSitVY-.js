import { o as Badge, s as Button } from "./src-BjNFa_qv.js";
import { t as appHref } from "./urls-CA_lAwWW.js";
import { t as DarkSection } from "./DarkSection-Dn7dtPT2.js";
import { t as SectionHeader } from "./SectionHeader-CAsr_XOY.js";
import { t as AnimateOnScroll } from "./AnimateOnScroll-DkV4XX9-.js";
import { t as TiltCard } from "./TiltCard-BH0fdV_F.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, BookOpen, Brain, ChartLineUp, Clock, CloudArrowUp, Code, Palette, TreeStructure } from "@phosphor-icons/react";
//#region src/components/paths/PathsHero.tsx
function PathsHero() {
	return /* @__PURE__ */ jsx(DarkSection, {
		padTop: true,
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-3xl",
			children: [/* @__PURE__ */ jsxs("h1", {
				className: "font-display text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-[0.95] font-bold mb-6",
				children: [
					"Structured paths",
					/* @__PURE__ */ jsx("br", {}),
					/* @__PURE__ */ jsx("span", {
						className: "bg-gradient-to-r from-accent-400 to-emerald-300 bg-clip-text text-transparent",
						children: "to mastery."
					})
				]
			}), /* @__PURE__ */ jsx("p", {
				className: "text-base md:text-lg text-zinc-400 leading-relaxed max-w-[56ch]",
				children: "Curated sequences of courses that build on each other. Each path takes you from first principles to production-grade skills with clear milestones along the way."
			})]
		})
	});
}
//#endregion
//#region src/components/paths/PathCard.tsx
function PathCard({ title, description, courseCount, duration, difficulty, milestones, icon: Icon }) {
	return /* @__PURE__ */ jsxs(TiltCard, {
		intensity: 5,
		className: "rounded-2xl border border-white/[0.06] bg-zinc-900 p-6 md:p-8 hover:border-white/[0.12] card-highlight",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-start gap-4 mb-6",
				children: [/* @__PURE__ */ jsx("div", {
					className: "h-12 w-12 rounded-xl bg-accent-500/10 flex items-center justify-center shrink-0",
					children: /* @__PURE__ */ jsx(Icon, {
						size: 24,
						weight: "duotone",
						className: "text-accent-400"
					})
				}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
					className: "font-display text-xl font-bold text-white mb-1",
					children: title
				}), /* @__PURE__ */ jsx("p", {
					className: "text-sm text-zinc-400 leading-relaxed",
					children: description
				})] })]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "border-l-2 border-zinc-800 ml-3 pl-6 space-y-4 mb-6",
				children: milestones.map((milestone, i) => /* @__PURE__ */ jsxs("div", {
					className: "relative",
					children: [
						/* @__PURE__ */ jsx("div", { className: "absolute -left-[31px] top-1 h-3 w-3 rounded-full border-2 border-accent-500 bg-zinc-950 shadow-[0_0_6px_rgba(56,165,113,0.3)]" }),
						/* @__PURE__ */ jsx("div", {
							className: "text-sm font-medium text-zinc-300",
							children: milestone
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "text-xs text-zinc-600 mt-0.5",
							children: ["Module ", i + 1]
						})
					]
				}, milestone))
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex flex-wrap gap-2",
				children: [
					/* @__PURE__ */ jsxs(Badge, {
						variant: "outline",
						className: "text-xs bg-zinc-800 border-zinc-700 text-zinc-400",
						children: [
							/* @__PURE__ */ jsx(BookOpen, {
								size: 12,
								className: "text-zinc-500"
							}),
							courseCount,
							" courses"
						]
					}),
					/* @__PURE__ */ jsxs(Badge, {
						variant: "outline",
						className: "text-xs bg-zinc-800 border-zinc-700 text-zinc-400",
						children: [/* @__PURE__ */ jsx(Clock, {
							size: 12,
							className: "text-zinc-500"
						}), duration]
					}),
					/* @__PURE__ */ jsxs(Badge, {
						variant: "outline",
						className: "text-xs bg-zinc-800 border-zinc-700 text-zinc-400",
						children: [/* @__PURE__ */ jsx(ChartLineUp, {
							size: 12,
							className: "text-zinc-500"
						}), difficulty]
					})
				]
			})
		]
	});
}
//#endregion
//#region src/components/paths/PathsGrid.tsx
var paths = [
	{
		title: "Full-Stack Engineer",
		description: "From HTML fundamentals to production-grade full-stack applications. Build, test, secure, and deploy complete systems end to end.",
		courseCount: 8,
		duration: "320h",
		difficulty: "Beginner to Advanced",
		milestones: [
			"HTML/CSS Foundations",
			"JavaScript Core",
			"React Patterns",
			"Node.js APIs",
			"Database Design",
			"Auth & Security",
			"Testing & CI",
			"Production Deploy"
		],
		icon: Code
	},
	{
		title: "ML Engineer",
		description: "Applied machine learning from data wrangling to model deployment. Train, evaluate, and serve models that handle real production traffic.",
		courseCount: 7,
		duration: "280h",
		difficulty: "Intermediate to Advanced",
		milestones: [
			"Python for ML",
			"Data Wrangling",
			"Supervised Learning",
			"Deep Learning",
			"NLP Pipelines",
			"MLOps & Monitoring",
			"Production Inference"
		],
		icon: Brain
	},
	{
		title: "Product Designer",
		description: "Design systems, user research, prototyping, and the bridge between design and code. Every module produces a portfolio-ready deliverable.",
		courseCount: 6,
		duration: "240h",
		difficulty: "Beginner to Intermediate",
		milestones: [
			"Design Fundamentals",
			"Figma Prototyping",
			"Design Systems",
			"UX Research",
			"Interaction Design",
			"Design Engineering"
		],
		icon: Palette
	},
	{
		title: "Data Scientist",
		description: "Extract signal from noise. SQL, Python pipelines, visualization, statistical reasoning, and machine learning with messy real-world datasets.",
		courseCount: 7,
		duration: "260h",
		difficulty: "Beginner to Advanced",
		milestones: [
			"SQL Foundations",
			"Python for Data",
			"Statistics & Probability",
			"Data Visualization",
			"Feature Engineering",
			"Predictive Modeling",
			"Capstone Analysis"
		],
		icon: ChartLineUp
	},
	{
		title: "DevOps Engineer",
		description: "Containers, orchestration, CI/CD, cloud infrastructure, and monitoring. Automate everything between git push and production.",
		courseCount: 5,
		duration: "200h",
		difficulty: "Intermediate to Advanced",
		milestones: [
			"Linux & Networking",
			"Docker & Containers",
			"Kubernetes Orchestration",
			"CI/CD Pipelines",
			"Cloud Architecture"
		],
		icon: CloudArrowUp
	}
];
function PathsGrid() {
	return /* @__PURE__ */ jsx("section", {
		className: "py-24 relative bg-zinc-950",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-4",
			children: [
				/* @__PURE__ */ jsx(SectionHeader, {
					badge: {
						icon: TreeStructure,
						label: "Learning paths"
					},
					title: "Five paths, one destination",
					subtitle: "Each path is a curated sequence of courses with clear milestones. Pick the one that matches your goals.",
					dark: true
				}),
				/* @__PURE__ */ jsx(AnimateOnScroll, {
					className: "mb-6",
					children: /* @__PURE__ */ jsx(PathCard, { ...paths[0] })
				}),
				/* @__PURE__ */ jsx("div", {
					className: "grid md:grid-cols-2 gap-6",
					children: paths.slice(1).map((path, i) => /* @__PURE__ */ jsx(AnimateOnScroll, {
						delay: i * 100,
						children: /* @__PURE__ */ jsx(PathCard, { ...path })
					}, path.title))
				})
			]
		})
	});
}
//#endregion
//#region src/components/paths/PathsCTA.tsx
function PathsCTA() {
	return /* @__PURE__ */ jsxs(DarkSection, { children: [
		/* @__PURE__ */ jsx("div", { className: "absolute -top-32 -left-32 h-64 w-64 rounded-full bg-accent-500/10 blur-3xl" }),
		/* @__PURE__ */ jsx("div", { className: "absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-emerald-500/8 blur-3xl" }),
		/* @__PURE__ */ jsxs("div", {
			className: "relative max-w-2xl",
			children: [
				/* @__PURE__ */ jsxs("h2", {
					className: "font-display text-4xl md:text-5xl font-bold tracking-tighter leading-[0.95] mb-6",
					children: [
						"Pick a path.",
						/* @__PURE__ */ jsx("br", {}),
						/* @__PURE__ */ jsx("span", {
							className: "bg-gradient-to-r from-accent-400 to-emerald-300 bg-clip-text text-transparent",
							children: "Start building."
						})
					]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-base text-zinc-400 leading-relaxed mb-10 max-w-lg",
					children: "Your first three courses are free every month. No credit card required to start any learning path."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex flex-wrap gap-4",
					children: [/* @__PURE__ */ jsx("a", {
						href: appHref("/register"),
						children: /* @__PURE__ */ jsxs(Button, {
							size: "xl",
							className: "bg-white text-zinc-900 hover:bg-zinc-100 group active:scale-[0.97] transition-transform",
							children: ["Start building free", /* @__PURE__ */ jsx(ArrowRight, {
								size: 16,
								className: "transition-transform group-hover:translate-x-1"
							})]
						})
					}), /* @__PURE__ */ jsx("a", {
						href: "/courses",
						children: /* @__PURE__ */ jsx(Button, {
							variant: "outline",
							size: "xl",
							className: "border-zinc-700 text-zinc-300 hover:bg-zinc-800/50 hover:border-zinc-600 active:scale-[0.97] transition-transform",
							children: "Browse courses"
						})
					})]
				})
			]
		})
	] });
}
//#endregion
//#region src/routes/paths.tsx?tsr-split=component
function PathsPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(PathsHero, {}),
		/* @__PURE__ */ jsx(PathsGrid, {}),
		/* @__PURE__ */ jsx(PathsCTA, {})
	] });
}
//#endregion
export { PathsPage as component };
