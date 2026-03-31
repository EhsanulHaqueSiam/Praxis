import { o as Badge, r as Tabs } from "./src-BjNFa_qv.js";
import { t as DarkSection } from "./DarkSection-Dn7dtPT2.js";
import { t as SpotlightCard } from "./SpotlightCard-RlLJ_hnK.js";
import { useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, Brain, ChartBar, ChartLineUp, Clock, CloudArrowUp, Code, Cube, Database, Eye, FileCode, Gear, GitBranch, Layout, MagnifyingGlass, Palette, PencilSimple, Robot, Sigma, Star, Terminal, TreeStructure, Users } from "@phosphor-icons/react";
//#region src/components/courses/CoursesHero.tsx
var categories = [
	"All",
	"Web Development",
	"Design",
	"ML & AI",
	"Data Science",
	"DevOps"
];
function CoursesHero() {
	const [activeTab, setActiveTab] = useState("All");
	return /* @__PURE__ */ jsx(DarkSection, {
		padTop: true,
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-3xl",
			children: [
				/* @__PURE__ */ jsxs("h1", {
					className: "font-display text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-[0.95] font-bold text-zinc-100 mb-6",
					children: [
						"Every skill you need",
						/* @__PURE__ */ jsx("br", {}),
						/* @__PURE__ */ jsx("span", {
							className: "bg-gradient-to-r from-accent-400 to-emerald-300 bg-clip-text text-transparent",
							children: "to ship."
						})
					]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-base md:text-lg text-zinc-400 leading-relaxed max-w-[56ch] mb-10",
					children: "217 project-based courses across five disciplines. Each one ends with a deployed artifact, a code review, and proof you can build."
				}),
				/* @__PURE__ */ jsx(Tabs, {
					tabs: categories,
					activeTab,
					onTabChange: setActiveTab,
					dark: true
				})
			]
		})
	});
}
//#endregion
//#region src/components/courses/CourseCard.tsx
var darkIconBgMap = {
	"bg-accent-50": "bg-gradient-to-br from-accent-600/20 to-accent-600/5",
	"bg-blue-50": "bg-gradient-to-br from-blue-600/20 to-blue-600/5",
	"bg-purple-50": "bg-gradient-to-br from-purple-600/20 to-purple-600/5",
	"bg-pink-50": "bg-gradient-to-br from-pink-600/20 to-pink-600/5",
	"bg-orange-50": "bg-gradient-to-br from-orange-600/20 to-orange-600/5",
	"bg-indigo-50": "bg-gradient-to-br from-indigo-600/20 to-indigo-600/5",
	"bg-violet-50": "bg-gradient-to-br from-violet-600/20 to-violet-600/5",
	"bg-zinc-100": "bg-gradient-to-br from-zinc-600/20 to-zinc-600/5",
	"bg-emerald-50": "bg-gradient-to-br from-emerald-600/20 to-emerald-600/5",
	"bg-sky-50": "bg-gradient-to-br from-sky-600/20 to-sky-600/5",
	"bg-amber-50": "bg-gradient-to-br from-amber-600/20 to-amber-600/5",
	"bg-rose-50": "bg-gradient-to-br from-rose-600/20 to-rose-600/5",
	"bg-teal-50": "bg-gradient-to-br from-teal-600/20 to-teal-600/5"
};
function CourseCard({ title, instructor, rating, duration, students, price, icon: Icon, iconBg, iconColor, badge: badgeText }) {
	return /* @__PURE__ */ jsxs(SpotlightCard, {
		className: "hover-reveal-parent rounded-2xl border border-white/[0.06] bg-zinc-900 p-5 hover:border-white/[0.12] hover:-translate-y-px cursor-pointer active:scale-[0.97] transition-all duration-150 card-highlight",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: `relative z-10 rounded-xl h-32 flex items-center justify-center mb-4 ${darkIconBgMap[iconBg] ?? "bg-gradient-to-br from-zinc-600/20 to-zinc-600/5"}`,
				children: /* @__PURE__ */ jsx(Icon, {
					size: 36,
					weight: "duotone",
					className: iconColor
				})
			}),
			badgeText && /* @__PURE__ */ jsx(Badge, {
				variant: "outline",
				className: "relative z-10 mb-2 text-xs bg-zinc-800 text-zinc-400 border-zinc-700",
				children: badgeText
			}),
			/* @__PURE__ */ jsx("h3", {
				className: "relative z-10 font-display text-lg font-bold text-zinc-100 mb-1",
				children: title
			}),
			/* @__PURE__ */ jsx("p", {
				className: "relative z-10 text-sm text-zinc-500 mb-4",
				children: instructor
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "relative z-10 flex flex-wrap items-center gap-3 text-xs text-zinc-400 mb-4",
				children: [
					/* @__PURE__ */ jsxs("span", {
						className: "flex items-center gap-1",
						children: [/* @__PURE__ */ jsx(Star, {
							size: 12,
							weight: "fill",
							className: "text-accent-400"
						}), /* @__PURE__ */ jsx("span", {
							className: "font-medium text-zinc-400",
							children: rating
						})]
					}),
					/* @__PURE__ */ jsxs("span", {
						className: "flex items-center gap-1 text-zinc-600",
						children: [/* @__PURE__ */ jsx(Clock, { size: 12 }), /* @__PURE__ */ jsx("span", {
							className: "text-zinc-400",
							children: duration
						})]
					}),
					/* @__PURE__ */ jsxs("span", {
						className: "flex items-center gap-1 text-zinc-600",
						children: [/* @__PURE__ */ jsx(Users, { size: 12 }), /* @__PURE__ */ jsx("span", {
							className: "text-zinc-400",
							children: students
						})]
					})
				]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "relative z-10 flex items-center justify-end",
				children: /* @__PURE__ */ jsx("span", {
					className: "font-mono font-bold text-white",
					children: price
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "hover-reveal-overlay",
				children: /* @__PURE__ */ jsxs("span", {
					className: "flex items-center gap-1.5 text-sm font-medium text-white",
					children: ["View course ", /* @__PURE__ */ jsx(ArrowRight, { size: 14 })]
				})
			})
		]
	});
}
//#endregion
//#region src/components/courses/CourseGrid.tsx
var courses = [
	{
		title: "Production-Grade React",
		instructor: "Idris Okonkwo-Petit",
		rating: 4.82,
		duration: "42h",
		students: "7,340 enrolled",
		price: "$49",
		icon: Code,
		iconBg: "bg-accent-50",
		iconColor: "text-accent-600",
		badge: "Bestseller",
		category: "Web Development"
	},
	{
		title: "Full-Stack TypeScript",
		instructor: "Delphine Ayari",
		rating: 4.76,
		duration: "38h",
		students: "5,180 enrolled",
		price: "$44",
		icon: FileCode,
		iconBg: "bg-blue-50",
		iconColor: "text-blue-600",
		category: "Web Development"
	},
	{
		title: "Node.js Systems",
		instructor: "Kael Nakamura-Boyce",
		rating: 4.68,
		duration: "36h",
		students: "3,920 enrolled",
		price: "$39",
		icon: Terminal,
		iconBg: "bg-zinc-100",
		iconColor: "text-zinc-700",
		category: "Web Development"
	},
	{
		title: "Next.js & Deployment",
		instructor: "Tomoko Westergaard",
		rating: 4.91,
		duration: "28h",
		students: "6,210 enrolled",
		price: "$44",
		icon: Layout,
		iconBg: "bg-accent-50",
		iconColor: "text-accent-600",
		badge: "Top rated",
		category: "Web Development"
	},
	{
		title: "Interface Design Systems",
		instructor: "Tomoko Westergaard",
		rating: 4.79,
		duration: "34h",
		students: "4,860 enrolled",
		price: "$39",
		icon: Palette,
		iconBg: "bg-purple-50",
		iconColor: "text-purple-600",
		category: "Design"
	},
	{
		title: "Prototyping with Figma",
		instructor: "Luz Fernandez-Okoro",
		rating: 4.72,
		duration: "28h",
		students: "3,410 enrolled",
		price: "$34",
		icon: PencilSimple,
		iconBg: "bg-pink-50",
		iconColor: "text-pink-600",
		category: "Design"
	},
	{
		title: "Design Engineering",
		instructor: "Delphine Ayari",
		rating: 4.84,
		duration: "32h",
		students: "2,890 enrolled",
		price: "$44",
		icon: Cube,
		iconBg: "bg-orange-50",
		iconColor: "text-orange-600",
		badge: "New",
		category: "Design"
	},
	{
		title: "UX Research Methods",
		instructor: "Yael Bertrand-Cho",
		rating: 4.67,
		duration: "24h",
		students: "2,140 enrolled",
		price: "$34",
		icon: Eye,
		iconBg: "bg-indigo-50",
		iconColor: "text-indigo-600",
		category: "Design"
	},
	{
		title: "Applied Machine Learning",
		instructor: "Kael Nakamura-Boyce",
		rating: 4.91,
		duration: "56h",
		students: "3,215 enrolled",
		price: "$59",
		icon: Brain,
		iconBg: "bg-accent-50",
		iconColor: "text-accent-600",
		badge: "Top rated",
		category: "ML & AI"
	},
	{
		title: "Deep Learning Foundations",
		instructor: "Rashida Volkov-Chen",
		rating: 4.83,
		duration: "48h",
		students: "2,780 enrolled",
		price: "$54",
		icon: Robot,
		iconBg: "bg-violet-50",
		iconColor: "text-violet-600",
		category: "ML & AI"
	},
	{
		title: "MLOps & Deployment",
		instructor: "Idris Okonkwo-Petit",
		rating: 4.77,
		duration: "36h",
		students: "1,940 enrolled",
		price: "$49",
		icon: Gear,
		iconBg: "bg-zinc-100",
		iconColor: "text-zinc-700",
		category: "ML & AI"
	},
	{
		title: "NLP in Production",
		instructor: "Kael Nakamura-Boyce",
		rating: 4.86,
		duration: "40h",
		students: "1,620 enrolled",
		price: "$54",
		icon: MagnifyingGlass,
		iconBg: "bg-teal-50",
		iconColor: "text-teal-600",
		badge: "New",
		category: "ML & AI"
	},
	{
		title: "Data Science with Python",
		instructor: "Meera Johansson",
		rating: 4.68,
		duration: "38h",
		students: "2,780 enrolled",
		price: "$44",
		icon: ChartLineUp,
		iconBg: "bg-emerald-50",
		iconColor: "text-emerald-600",
		category: "Data Science"
	},
	{
		title: "SQL Mastery",
		instructor: "Arlo Whitfield-Tanaka",
		rating: 4.74,
		duration: "24h",
		students: "4,320 enrolled",
		price: "$34",
		icon: Database,
		iconBg: "bg-sky-50",
		iconColor: "text-sky-600",
		badge: "Bestseller",
		category: "Data Science"
	},
	{
		title: "Data Visualization",
		instructor: "Tomoko Westergaard",
		rating: 4.71,
		duration: "28h",
		students: "2,190 enrolled",
		price: "$39",
		icon: ChartBar,
		iconBg: "bg-amber-50",
		iconColor: "text-amber-600",
		category: "Data Science"
	},
	{
		title: "Statistical Inference",
		instructor: "Rashida Volkov-Chen",
		rating: 4.63,
		duration: "32h",
		students: "1,870 enrolled",
		price: "$44",
		icon: Sigma,
		iconBg: "bg-rose-50",
		iconColor: "text-rose-600",
		category: "Data Science"
	},
	{
		title: "Docker & Kubernetes",
		instructor: "Idris Okonkwo-Petit",
		rating: 4.87,
		duration: "40h",
		students: "3,640 enrolled",
		price: "$49",
		icon: Cube,
		iconBg: "bg-blue-50",
		iconColor: "text-blue-600",
		badge: "Top rated",
		category: "DevOps"
	},
	{
		title: "CI/CD Pipelines",
		instructor: "Delphine Ayari",
		rating: 4.73,
		duration: "28h",
		students: "2,890 enrolled",
		price: "$39",
		icon: GitBranch,
		iconBg: "bg-orange-50",
		iconColor: "text-orange-600",
		category: "DevOps"
	},
	{
		title: "AWS Architecture",
		instructor: "Kael Nakamura-Boyce",
		rating: 4.81,
		duration: "44h",
		students: "3,170 enrolled",
		price: "$54",
		icon: CloudArrowUp,
		iconBg: "bg-accent-50",
		iconColor: "text-accent-600",
		category: "DevOps"
	},
	{
		title: "Infrastructure as Code",
		instructor: "Arlo Whitfield-Tanaka",
		rating: 4.69,
		duration: "32h",
		students: "2,410 enrolled",
		price: "$44",
		icon: TreeStructure,
		iconBg: "bg-zinc-100",
		iconColor: "text-zinc-700",
		category: "DevOps"
	}
];
var categoryDescriptions = {
	"Web Development": "From component architecture to production deployment. Ship full-stack apps with React, TypeScript, Node.js, and modern tooling.",
	Design: "Design systems, prototyping workflows, and the bridge between design and engineering. Every module produces a portfolio piece.",
	"ML & AI": "Applied machine learning with real datasets. Train, evaluate, and deploy models that serve production traffic.",
	"Data Science": "Extract signal from noise. SQL, Python pipelines, visualization, and statistical reasoning with messy, real-world data.",
	DevOps: "Containers, orchestration, CI/CD, and cloud infrastructure. Automate everything between git push and production."
};
var categoryOrder = [
	"Web Development",
	"Design",
	"ML & AI",
	"Data Science",
	"DevOps"
];
function CourseGrid() {
	return /* @__PURE__ */ jsx("section", {
		className: "py-24 relative bg-zinc-950",
		children: /* @__PURE__ */ jsx("div", {
			className: "mx-auto max-w-7xl px-4",
			children: /* @__PURE__ */ jsx("div", {
				className: "space-y-20",
				children: categoryOrder.map((category) => {
					const categoryCourses = courses.filter((c) => c.category === category);
					return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
						className: "mb-8 max-w-2xl",
						children: [/* @__PURE__ */ jsx("h2", {
							className: "font-display text-2xl md:text-3xl font-bold tracking-tight text-zinc-100 mb-2",
							children: category
						}), /* @__PURE__ */ jsx("p", {
							className: "text-sm text-zinc-500 leading-relaxed",
							children: categoryDescriptions[category]
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "grid md:grid-cols-2 gap-6",
						children: categoryCourses.map((course) => /* @__PURE__ */ jsx(CourseCard, { ...course }, course.title))
					})] }, category);
				})
			})
		})
	});
}
//#endregion
//#region src/routes/courses.tsx?tsr-split=component
function CoursesPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(CoursesHero, {}), /* @__PURE__ */ jsx(CourseGrid, {})] });
}
//#endregion
export { CoursesPage as component };
