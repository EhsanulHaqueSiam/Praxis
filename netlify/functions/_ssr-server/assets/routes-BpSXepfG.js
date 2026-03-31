import { a as Avatar, o as Badge, s as Button } from "./src-BjNFa_qv.js";
import { t as appHref } from "./urls-CA_lAwWW.js";
import { n as useInView, t as AnimateOnScroll } from "./AnimateOnScroll-DkV4XX9-.js";
import { t as SpotlightCard } from "./SpotlightCard-RlLJ_hnK.js";
import { useEffect, useRef, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, BookOpen, CaretDown, Certificate, Clock, CodeBlock, GitPullRequest, MagnifyingGlass, Play, Quotes, Rocket, Star, TreeStructure, TrendUp, User, Users } from "@phosphor-icons/react";
//#region src/components/shared/MagneticButton.tsx
function MagneticButton({ children, className = "", strength = .3 }) {
	const ref = useRef(null);
	function handleMouseMove(e) {
		const el = ref.current;
		if (!el) return;
		const rect = el.getBoundingClientRect();
		const x = e.clientX - rect.left - rect.width / 2;
		const y = e.clientY - rect.top - rect.height / 2;
		el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
	}
	function handleMouseLeave() {
		const el = ref.current;
		if (!el) return;
		el.style.transform = "translate(0, 0)";
	}
	return /* @__PURE__ */ jsx("div", {
		ref,
		className,
		onMouseMove: handleMouseMove,
		onMouseLeave: handleMouseLeave,
		style: {
			transition: "transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
			display: "inline-block"
		},
		children
	});
}
//#endregion
//#region src/components/shared/ScrollCue.tsx
function ScrollCue() {
	const [visible, setVisible] = useState(true);
	useEffect(() => {
		function onScroll() {
			if (window.scrollY > 100) setVisible(false);
		}
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ jsxs("div", {
		className: "absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 transition-opacity duration-500",
		style: { opacity: visible ? 1 : 0 },
		children: [/* @__PURE__ */ jsx("span", {
			className: "text-[10px] font-mono text-zinc-600 uppercase tracking-widest",
			children: "Scroll"
		}), /* @__PURE__ */ jsx(CaretDown, {
			size: 16,
			weight: "bold",
			className: "text-zinc-500 scroll-cue"
		})]
	});
}
//#endregion
//#region src/components/shared/CircleProgress.tsx
function CircleProgress({ percent, size = 36, strokeWidth = 3, className = "" }) {
	const radius = (size - strokeWidth) / 2;
	const circumference = 2 * Math.PI * radius;
	const offset = circumference - percent / 100 * circumference;
	return /* @__PURE__ */ jsxs("svg", {
		width: size,
		height: size,
		className,
		style: { transform: "rotate(-90deg)" },
		children: [
			/* @__PURE__ */ jsx("circle", {
				cx: size / 2,
				cy: size / 2,
				r: radius,
				fill: "none",
				stroke: "rgba(39,39,42,1)",
				strokeWidth
			}),
			/* @__PURE__ */ jsx("circle", {
				cx: size / 2,
				cy: size / 2,
				r: radius,
				fill: "none",
				stroke: "url(#progressGradient)",
				strokeWidth,
				strokeLinecap: "round",
				strokeDasharray: circumference,
				strokeDashoffset: offset,
				style: { transition: "stroke-dashoffset 1s cubic-bezier(0.16, 1, 0.3, 1)" }
			}),
			/* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", {
				id: "progressGradient",
				x1: "0%",
				y1: "0%",
				x2: "100%",
				y2: "0%",
				children: [/* @__PURE__ */ jsx("stop", {
					offset: "0%",
					stopColor: "#28845a"
				}), /* @__PURE__ */ jsx("stop", {
					offset: "100%",
					stopColor: "#5abf8e"
				})]
			}) })
		]
	});
}
//#endregion
//#region src/components/home/Hero.tsx
var particles = [
	{
		size: 3,
		left: "10%",
		top: "20%",
		duration: "9s",
		delay: "0s",
		dx: "40px",
		dy: "-30px",
		dx2: "-20px",
		dy2: "25px",
		dx3: "15px",
		dy3: "-40px"
	},
	{
		size: 2,
		left: "80%",
		top: "15%",
		duration: "11s",
		delay: "1s",
		dx: "-30px",
		dy: "20px",
		dx2: "25px",
		dy2: "-15px",
		dx3: "-10px",
		dy3: "35px"
	},
	{
		size: 4,
		left: "60%",
		top: "70%",
		duration: "8s",
		delay: "2s",
		dx: "20px",
		dy: "-40px",
		dx2: "-35px",
		dy2: "10px",
		dx3: "25px",
		dy3: "-20px"
	},
	{
		size: 2,
		left: "25%",
		top: "60%",
		duration: "12s",
		delay: "3s",
		dx: "-15px",
		dy: "35px",
		dx2: "30px",
		dy2: "-25px",
		dx3: "-20px",
		dy3: "15px"
	},
	{
		size: 3,
		left: "90%",
		top: "40%",
		duration: "10s",
		delay: "0.5s",
		dx: "25px",
		dy: "15px",
		dx2: "-20px",
		dy2: "-30px",
		dx3: "10px",
		dy3: "25px"
	},
	{
		size: 2,
		left: "45%",
		top: "85%",
		duration: "13s",
		delay: "4s",
		dx: "-25px",
		dy: "-20px",
		dx2: "15px",
		dy2: "30px",
		dx3: "-35px",
		dy3: "-10px"
	},
	{
		size: 3,
		left: "70%",
		top: "25%",
		duration: "9s",
		delay: "2.5s",
		dx: "15px",
		dy: "25px",
		dx2: "-30px",
		dy2: "-15px",
		dx3: "20px",
		dy3: "35px"
	},
	{
		size: 2,
		left: "15%",
		top: "45%",
		duration: "14s",
		delay: "1.5s",
		dx: "35px",
		dy: "-10px",
		dx2: "-15px",
		dy2: "20px",
		dx3: "25px",
		dy3: "-30px"
	}
];
function Hero() {
	return /* @__PURE__ */ jsxs("section", {
		className: "relative min-h-[100dvh] bg-zinc-950 text-white overflow-hidden pt-28 pb-20 flex items-center",
		children: [
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-grid-dark opacity-60" }),
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-topo-dark" }),
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 radiance" }),
			/* @__PURE__ */ jsx("div", { className: "aurora-bg" }),
			particles.map((p, i) => /* @__PURE__ */ jsx("div", {
				className: "particle",
				style: {
					width: p.size,
					height: p.size,
					left: p.left,
					top: p.top,
					["--duration"]: p.duration,
					["--delay"]: p.delay,
					["--dx"]: p.dx,
					["--dy"]: p.dy,
					["--dx2"]: p.dx2,
					["--dy2"]: p.dy2,
					["--dx3"]: p.dx3,
					["--dy3"]: p.dy3
				}
			}, i)),
			/* @__PURE__ */ jsx("div", {
				className: "relative z-10 mx-auto max-w-7xl px-4 w-full",
				children: /* @__PURE__ */ jsxs("div", {
					className: "grid md:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "max-w-2xl",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "opacity-0 animate-fade-up inline-flex items-center gap-2 rounded-full bg-accent-500/10 border border-accent-500/20 px-3.5 py-1.5 font-mono text-xs text-accent-400 tracking-wider uppercase mb-6",
								children: "Now in public beta"
							}),
							/* @__PURE__ */ jsxs("h1", {
								className: "font-display text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-[0.95] font-bold mb-6",
								children: [
									"Build software that".split(" ").map((word, i) => /* @__PURE__ */ jsx("span", {
										className: "word-reveal inline-block mr-[0.25em]",
										style: { ["--word-delay"]: `${200 + i * 80}ms` },
										children: word
									}, i)),
									/* @__PURE__ */ jsx("br", {}),
									/* @__PURE__ */ jsx("span", {
										className: "word-reveal inline-block bg-gradient-to-r from-accent-400 to-emerald-300 bg-clip-text text-transparent",
										style: { ["--word-delay"]: "600ms" },
										children: "actually ships."
									})
								]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "opacity-0 animate-fade-up stagger-2 text-base md:text-lg text-zinc-400 leading-relaxed max-w-[52ch] mb-10",
								children: "Project-based courses with production code reviews. 11,480 engineers shipped real software in their first 30 days."
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "opacity-0 animate-fade-up stagger-3 flex flex-wrap gap-4 mb-12",
								children: [/* @__PURE__ */ jsx(MagneticButton, {
									strength: .15,
									children: /* @__PURE__ */ jsx("a", {
										href: appHref("/register"),
										children: /* @__PURE__ */ jsxs(Button, {
											size: "xl",
											className: "btn-shimmer bg-white text-zinc-900 hover:bg-zinc-200 group active:scale-[0.97] transition-all duration-150",
											children: ["Start building free", /* @__PURE__ */ jsx(ArrowRight, {
												size: 16,
												className: "transition-transform duration-150 group-hover:translate-x-1"
											})]
										})
									})
								}), /* @__PURE__ */ jsx(MagneticButton, {
									strength: .15,
									children: /* @__PURE__ */ jsx("a", {
										href: "/courses",
										children: /* @__PURE__ */ jsx(Button, {
											variant: "outline",
											size: "xl",
											className: "border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:border-zinc-600 active:scale-[0.97] transition-all duration-150",
											children: "Explore courses"
										})
									})
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "opacity-0 animate-fade-up stagger-4 flex flex-wrap gap-8 text-sm",
								children: [
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
										className: "font-mono font-bold text-white text-lg",
										children: "11,480+"
									}), /* @__PURE__ */ jsx("div", {
										className: "text-zinc-500 text-xs",
										children: "Active builders"
									})] }),
									/* @__PURE__ */ jsx("div", { className: "w-px bg-zinc-800" }),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
										className: "font-mono font-bold text-white text-lg",
										children: "4.82"
									}), /* @__PURE__ */ jsx("div", {
										className: "text-zinc-500 text-xs",
										children: "Avg review score"
									})] }),
									/* @__PURE__ */ jsx("div", { className: "w-px bg-zinc-800" }),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
										className: "font-mono font-bold text-white text-lg",
										children: "217 courses"
									}), /* @__PURE__ */ jsx("div", {
										className: "text-zinc-500 text-xs",
										children: "Project-based"
									})] })
								]
							})
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "hidden lg:block",
						children: /* @__PURE__ */ jsxs("div", {
							className: "rounded-2xl bg-zinc-900 border border-white/[0.06] hover:border-white/[0.12] overflow-hidden animate-float shadow-diffuse-lg transition-[border-color] duration-150 card-highlight",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "relative h-44 bg-gradient-to-br from-accent-500/20 via-emerald-500/10 to-zinc-900 flex items-center justify-center",
								children: [
									/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-grid-dark opacity-40" }),
									/* @__PURE__ */ jsx("div", {
										className: "relative h-14 w-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-sm play-pulse",
										children: /* @__PURE__ */ jsx(Play, {
											size: 24,
											weight: "fill",
											className: "text-white ml-0.5"
										})
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-zinc-950/60 backdrop-blur-sm border border-white/[0.06] px-2.5 py-1",
										children: [/* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-accent-400 animate-pulse" }), /* @__PURE__ */ jsx("span", {
											className: "text-[10px] font-mono text-zinc-400",
											children: "LIVE"
										})]
									})
								]
							}), /* @__PURE__ */ jsxs("div", {
								className: "p-5 space-y-4",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-start justify-between",
										children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
											className: "font-display font-bold text-white text-base mb-1",
											children: "Full-Stack Web Development"
										}), /* @__PURE__ */ jsxs("div", {
											className: "flex items-center gap-2 text-xs text-zinc-500",
											children: [/* @__PURE__ */ jsx(User, {
												size: 12,
												weight: "duotone"
											}), /* @__PURE__ */ jsx("span", { children: "Tomoko Westergaard" })]
										})] }), /* @__PURE__ */ jsx(CircleProgress, {
											percent: 33,
											size: 40,
											strokeWidth: 3
										})]
									}),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
										className: "flex items-center justify-between mb-1.5",
										children: [/* @__PURE__ */ jsx("span", {
											className: "text-[11px] font-mono text-zinc-500",
											children: "Module 4 of 12"
										}), /* @__PURE__ */ jsx("span", {
											className: "text-[11px] font-mono text-accent-400",
											children: "33%"
										})]
									}), /* @__PURE__ */ jsx("div", {
										className: "h-1 rounded-full bg-zinc-800 overflow-hidden",
										children: /* @__PURE__ */ jsx("div", { className: "h-full w-1/3 rounded-full bg-gradient-to-r from-accent-500 to-emerald-400" })
									})] }),
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-4 pt-2 border-t border-white/[0.06]",
										children: [/* @__PURE__ */ jsxs("div", {
											className: "flex items-center gap-1 text-xs text-zinc-500",
											children: [/* @__PURE__ */ jsx(TrendUp, {
												size: 12,
												weight: "duotone",
												className: "text-accent-400"
											}), /* @__PURE__ */ jsx("span", {
												className: "font-mono",
												children: "7,340 enrolled"
											})]
										}), /* @__PURE__ */ jsxs("div", {
											className: "flex items-center gap-1 text-xs text-zinc-500",
											children: [/* @__PURE__ */ jsx("span", {
												className: "font-mono",
												children: "4.82"
											}), /* @__PURE__ */ jsx("span", {
												className: "text-accent-400",
												children: "★"
											})]
										})]
									})
								]
							})]
						})
					})]
				})
			}),
			/* @__PURE__ */ jsx(ScrollCue, {})
		]
	});
}
//#endregion
//#region src/components/home/Marquee.tsx
function Marquee() {
	const row1 = [
		"React",
		"TypeScript",
		"Node.js",
		"PostgreSQL",
		"System Design",
		"Machine Learning",
		"Docker",
		"CI/CD"
	];
	const row2 = [
		"GraphQL",
		"Python",
		"Figma",
		"Swift",
		"Kubernetes",
		"Next.js",
		"AWS",
		"Redis"
	];
	const doubled1 = [...row1, ...row1];
	const doubled2 = [...row2, ...row2];
	return /* @__PURE__ */ jsxs("section", {
		className: "relative py-6 bg-zinc-950 border-y border-white/[0.06] overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("div", { className: "absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" }),
			/* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" }),
			/* @__PURE__ */ jsx("div", {
				className: "flex animate-marquee whitespace-nowrap mb-3",
				children: doubled1.map((item, i) => /* @__PURE__ */ jsx("span", {
					className: "mx-6 md:mx-10 text-sm md:text-base font-display font-medium text-zinc-600 select-none shrink-0 hover:text-zinc-400 transition-colors duration-300",
					children: item
				}, `a-${item}-${i}`))
			}),
			/* @__PURE__ */ jsx("div", {
				className: "flex animate-marquee-reverse whitespace-nowrap",
				children: doubled2.map((item, i) => /* @__PURE__ */ jsx("span", {
					className: "mx-6 md:mx-10 text-sm md:text-base font-display font-medium text-zinc-700 select-none shrink-0 hover:text-zinc-500 transition-colors duration-300",
					children: item
				}, `b-${item}-${i}`))
			})
		]
	});
}
//#endregion
//#region src/components/home/TrustedBy.tsx
function TrustedBy() {
	const logos = [
		"Stanford",
		"MIT",
		"Google",
		"Microsoft",
		"Amazon",
		"Meta",
		"Apple",
		"Netflix"
	];
	const { ref, isInView } = useInView(.2);
	return /* @__PURE__ */ jsx("section", {
		ref,
		className: "py-12 bg-zinc-950 border-b border-white/[0.06]",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-4",
			children: [/* @__PURE__ */ jsx("p", {
				className: "text-center text-xs font-medium uppercase tracking-widest text-zinc-600 mb-8 transition-all duration-700",
				style: {
					opacity: isInView ? 1 : 0,
					transform: isInView ? "translateY(0)" : "translateY(8px)"
				},
				children: "Trusted by engineers at"
			}), /* @__PURE__ */ jsx("div", {
				className: "flex flex-wrap items-center justify-center gap-y-4",
				children: logos.map((logo, i) => /* @__PURE__ */ jsxs("span", {
					className: "flex items-center",
					style: {
						opacity: isInView ? 1 : 0,
						transform: isInView ? "translateY(0)" : "translateY(12px)",
						transition: `opacity 0.5s cubic-bezier(0.16,1,0.3,1) ${150 + i * 80}ms, transform 0.5s cubic-bezier(0.16,1,0.3,1) ${150 + i * 80}ms`
					},
					children: [/* @__PURE__ */ jsx("span", {
						className: "text-lg font-display font-bold text-zinc-700 hover:text-zinc-400 transition-colors duration-200 cursor-default select-none px-4 md:px-6",
						children: logo
					}), i < logos.length - 1 && /* @__PURE__ */ jsx("span", {
						className: "text-zinc-800 select-none",
						"aria-hidden": "true",
						children: "·"
					})]
				}, logo))
			})]
		})
	});
}
//#endregion
//#region src/components/home/FeaturedCourses.tsx
var topCourses = [
	{
		title: "Full-Stack Web Dev",
		duration: "42 hrs",
		students: "7,340",
		rating: 4.82
	},
	{
		title: "Applied ML",
		duration: "56 hrs",
		students: "3,215",
		rating: 4.91
	},
	{
		title: "Data Science with Python",
		duration: "38 hrs",
		students: "2,780",
		rating: 4.68
	}
];
function FeaturedCourses() {
	return /* @__PURE__ */ jsxs("section", {
		className: "py-24 bg-zinc-950 relative",
		children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-glow-tl opacity-40" }), /* @__PURE__ */ jsxs("div", {
			className: "relative mx-auto max-w-7xl px-4",
			children: [/* @__PURE__ */ jsxs(AnimateOnScroll, {
				className: "mb-12 max-w-2xl",
				children: [
					/* @__PURE__ */ jsxs(Badge, {
						className: "mb-4 bg-zinc-800 border border-zinc-700 text-zinc-400",
						children: [/* @__PURE__ */ jsx(BookOpen, {
							size: 14,
							weight: "fill",
							className: "text-accent-400"
						}), "Platform"]
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-zinc-100",
						children: "Built for how engineers actually learn"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-base text-zinc-400 leading-relaxed",
						children: "Not another video library. A workshop where every module ends with code you can deploy."
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "grid md:grid-cols-2 gap-4",
				children: [
					/* @__PURE__ */ jsx(AnimateOnScroll, {
						delay: 100,
						children: /* @__PURE__ */ jsx(SpotlightCard, {
							className: "md:row-span-2 h-full rounded-2xl border border-white/[0.06] bg-zinc-900 p-6 md:p-8 hover:border-white/[0.12] transition-[border-color] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] flex flex-col card-highlight",
							children: /* @__PURE__ */ jsxs("div", {
								className: "relative z-10 flex flex-col h-full",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-3 mb-4",
										children: [/* @__PURE__ */ jsx("div", {
											className: "h-10 w-10 rounded-xl bg-accent-500/10 flex items-center justify-center",
											children: /* @__PURE__ */ jsx(GitPullRequest, {
												size: 20,
												weight: "duotone",
												className: "text-accent-400"
											})
										}), /* @__PURE__ */ jsx("h3", {
											className: "font-display text-xl font-bold text-white",
											children: "Production Code Reviews"
										})]
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-sm text-zinc-400 leading-relaxed mb-6 max-w-md",
										children: "Submit pull requests as you build. Get line-by-line feedback from senior engineers at companies like Vercel and Datadog. Not automated linting -- real human review on architecture, patterns, and edge cases."
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "font-mono text-xs text-zinc-500 bg-zinc-950 rounded-xl p-4 border border-zinc-800 mb-6 flex-1",
										children: [
											/* @__PURE__ */ jsx("div", {
												className: "text-red-400/70",
												children: "- const data = fetch(url)"
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "text-accent-400",
												children: [
													"+ const data = await fetchWithRetry(url, ",
													"{",
													" retries: 3 ",
													"}",
													")"
												]
											}),
											/* @__PURE__ */ jsx("div", {
												className: "text-zinc-600 mt-2",
												children: "// Reviewed by Tomoko W. -- \"Good pattern, consider adding timeout\""
											})
										]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-4 text-xs text-zinc-500 mt-auto",
										children: [/* @__PURE__ */ jsxs("span", {
											className: "flex items-center gap-1",
											children: [/* @__PURE__ */ jsx(Star, {
												size: 12,
												weight: "fill",
												className: "text-accent-400"
											}), "4.82 avg review score"]
										}), /* @__PURE__ */ jsx("span", { children: "2,147 reviews given this month" })]
									})
								]
							})
						})
					}),
					/* @__PURE__ */ jsx(AnimateOnScroll, {
						delay: 200,
						children: /* @__PURE__ */ jsx(SpotlightCard, {
							className: "rounded-2xl border border-white/[0.06] bg-zinc-900 p-6 md:p-8 hover:border-white/[0.12] transition-[border-color] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] card-highlight",
							children: /* @__PURE__ */ jsxs("div", {
								className: "relative z-10",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-3 mb-4",
										children: [/* @__PURE__ */ jsx("div", {
											className: "h-10 w-10 rounded-xl bg-zinc-800 flex items-center justify-center",
											children: /* @__PURE__ */ jsx(TreeStructure, {
												size: 20,
												weight: "duotone",
												className: "text-zinc-400"
											})
										}), /* @__PURE__ */ jsx("h3", {
											className: "font-display text-xl font-bold text-white",
											children: "Structured Paths"
										})]
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-sm text-zinc-400 leading-relaxed mb-5",
										children: "Curated sequences of courses that build on each other. No guessing what to learn next."
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2 font-mono text-xs",
										children: [
											/* @__PURE__ */ jsx("span", {
												className: "px-3 py-1.5 rounded-lg bg-accent-500/10 text-accent-400 font-medium",
												children: "Fundamentals"
											}),
											/* @__PURE__ */ jsx("span", {
												className: "text-zinc-700",
												children: "---"
											}),
											/* @__PURE__ */ jsx("span", {
												className: "px-3 py-1.5 rounded-lg bg-zinc-800 text-zinc-500 font-medium",
												children: "Intermediate"
											}),
											/* @__PURE__ */ jsx("span", {
												className: "text-zinc-700",
												children: "---"
											}),
											/* @__PURE__ */ jsx("span", {
												className: "px-3 py-1.5 rounded-lg bg-zinc-800 text-zinc-500 font-medium",
												children: "Production"
											})
										]
									})
								]
							})
						})
					}),
					/* @__PURE__ */ jsx(AnimateOnScroll, {
						delay: 300,
						children: /* @__PURE__ */ jsx(SpotlightCard, {
							className: "rounded-2xl border border-white/[0.06] bg-zinc-900 p-6 md:p-8 hover:border-white/[0.12] transition-[border-color] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] card-highlight",
							children: /* @__PURE__ */ jsxs("div", {
								className: "relative z-10",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-3 mb-4",
										children: [/* @__PURE__ */ jsx("div", {
											className: "h-10 w-10 rounded-xl bg-accent-500/10 flex items-center justify-center",
											children: /* @__PURE__ */ jsx(Rocket, {
												size: 20,
												weight: "duotone",
												className: "text-accent-400"
											})
										}), /* @__PURE__ */ jsx("h3", {
											className: "font-display text-xl font-bold text-white",
											children: "Production Deploy"
										})]
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-sm text-zinc-400 leading-relaxed mb-5",
										children: "Every capstone ships to a real URL. CI/CD, monitoring, and observability included."
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "font-mono text-xs space-y-1.5",
										children: [
											/* @__PURE__ */ jsxs("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ jsx("span", { className: "h-2 w-2 rounded-full bg-accent-500 animate-pulse" }), /* @__PURE__ */ jsx("span", {
													className: "text-zinc-400",
													children: "dashboard.praxis.dev -- live"
												})]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ jsx("span", {
													className: "h-2 w-2 rounded-full bg-accent-500 animate-pulse",
													style: { animationDelay: "0.5s" }
												}), /* @__PURE__ */ jsx("span", {
													className: "text-zinc-400",
													children: "api.praxis.dev/v2 -- live"
												})]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ jsx("span", { className: "h-2 w-2 rounded-full bg-zinc-700" }), /* @__PURE__ */ jsx("span", {
													className: "text-zinc-600",
													children: "staging.praxis.dev -- idle"
												})]
											})
										]
									})
								]
							})
						})
					}),
					/* @__PURE__ */ jsx(AnimateOnScroll, {
						delay: 100,
						className: "md:col-span-2",
						children: /* @__PURE__ */ jsx(SpotlightCard, {
							className: "rounded-2xl border border-white/[0.06] bg-zinc-900 p-6 md:p-8 hover:border-white/[0.12] transition-[border-color] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] card-highlight",
							children: /* @__PURE__ */ jsxs("div", {
								className: "relative z-10",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center justify-between mb-6",
									children: [/* @__PURE__ */ jsx("h3", {
										className: "font-display text-xl font-bold text-white",
										children: "Most enrolled courses"
									}), /* @__PURE__ */ jsx("a", {
										href: "/courses",
										children: /* @__PURE__ */ jsxs(Button, {
											variant: "ghost",
											size: "sm",
											className: "group text-zinc-400 hover:text-white active:scale-[0.97] transition-all duration-150",
											children: ["View all 217", /* @__PURE__ */ jsx(ArrowRight, {
												size: 14,
												className: "transition-transform duration-150 group-hover:translate-x-1"
											})]
										})
									})]
								}), /* @__PURE__ */ jsx("div", {
									className: "grid sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr] gap-4",
									children: topCourses.map((course) => /* @__PURE__ */ jsxs("div", {
										className: "rounded-xl border border-zinc-800 bg-zinc-800/50 p-5 hover:border-zinc-700 hover:bg-zinc-800/80 transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer active:scale-[0.97]",
										children: [/* @__PURE__ */ jsx("div", {
											className: "font-display font-bold text-white mb-2",
											children: course.title
										}), /* @__PURE__ */ jsxs("div", {
											className: "flex flex-wrap items-center gap-3 text-xs text-zinc-500",
											children: [
												/* @__PURE__ */ jsxs("span", {
													className: "flex items-center gap-1",
													children: [/* @__PURE__ */ jsx(Clock, { size: 12 }), course.duration]
												}),
												/* @__PURE__ */ jsxs("span", {
													className: "flex items-center gap-1",
													children: [/* @__PURE__ */ jsx(Users, { size: 12 }), course.students]
												}),
												/* @__PURE__ */ jsxs("span", {
													className: "flex items-center gap-1",
													children: [/* @__PURE__ */ jsx(Star, {
														size: 12,
														weight: "fill",
														className: "text-accent-400"
													}), /* @__PURE__ */ jsx("span", {
														className: "font-medium text-zinc-300",
														children: course.rating
													})]
												})
											]
										})]
									}, course.title))
								})]
							})
						})
					}),
					/* @__PURE__ */ jsx(AnimateOnScroll, {
						delay: 200,
						className: "md:col-span-2 lg:col-span-1",
						children: /* @__PURE__ */ jsx(SpotlightCard, {
							className: "rounded-2xl border border-white/[0.06] bg-zinc-900 p-6 md:p-8 hover:border-white/[0.12] transition-[border-color] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] card-highlight",
							children: /* @__PURE__ */ jsxs("div", {
								className: "relative z-10",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-3 mb-4",
										children: [/* @__PURE__ */ jsx("div", {
											className: "h-10 w-10 rounded-xl bg-zinc-800 flex items-center justify-center",
											children: /* @__PURE__ */ jsx(Users, {
												size: 20,
												weight: "duotone",
												className: "text-zinc-400"
											})
										}), /* @__PURE__ */ jsx("h3", {
											className: "font-display text-xl font-bold text-white",
											children: "Live Mentorship"
										})]
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-sm text-zinc-400 leading-relaxed mb-5",
										children: "Weekly office hours with industry engineers. Ask anything, pair live, get unstuck fast."
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center",
										children: [/* @__PURE__ */ jsx("div", {
											className: "flex -space-x-2",
											children: [
												"delphine-ayari",
												"tomoko-westergaard",
												"kael-nakamura",
												"idris-okonkwo",
												"meera-johansson"
											].map((seed) => /* @__PURE__ */ jsx("img", {
												src: `https://picsum.photos/seed/${seed}/80/80`,
												alt: "",
												className: "h-8 w-8 rounded-full border-2 border-zinc-900 object-cover"
											}, seed))
										}), /* @__PURE__ */ jsx("span", {
											className: "ml-3 text-xs text-zinc-500 font-mono",
											children: "+83 mentors online"
										})]
									})
								]
							})
						})
					})
				]
			})]
		})]
	});
}
//#endregion
//#region src/hooks/useBlurReveal.ts
function useBlurReveal(threshold = .2) {
	const ref = useRef(null);
	const [revealed, setRevealed] = useState(false);
	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setRevealed(true);
				observer.unobserve(el);
			}
		}, { threshold });
		observer.observe(el);
		return () => observer.disconnect();
	}, [threshold]);
	return {
		ref,
		revealed
	};
}
//#endregion
//#region src/components/home/HowItWorks.tsx
var steps = [
	{
		number: "01",
		icon: MagnifyingGlass,
		title: "Pick a project that matters to you",
		description: "Browse 217 courses organized by stack, difficulty, and outcome. Each one maps to a concrete artifact you will ship by the end.",
		iconBg: "bg-accent-500/10",
		iconColor: "text-accent-400"
	},
	{
		number: "02",
		icon: CodeBlock,
		title: "Build with structured feedback",
		description: "Work through interactive modules, submit pull requests, and receive code reviews from engineers at companies like Vercel and Datadog.",
		iconBg: "bg-zinc-800",
		iconColor: "text-zinc-400"
	},
	{
		number: "03",
		icon: Certificate,
		title: "Ship and earn recognition",
		description: "Deploy your capstone, collect a verified certificate, and add the project to your portfolio. 91.3% of graduates report career advancement within six months.",
		iconBg: "bg-accent-500/10",
		iconColor: "text-accent-400"
	}
];
function BlurSharpHeading({ children }) {
	const { ref, revealed } = useBlurReveal(.3);
	return /* @__PURE__ */ jsx("h2", {
		ref,
		className: `font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-zinc-100 blur-sharp ${revealed ? "sharp" : ""}`,
		children
	});
}
function HowItWorks() {
	return /* @__PURE__ */ jsxs("section", {
		className: "py-24 bg-zinc-950 relative overflow-hidden",
		children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-glow-br opacity-40" }), /* @__PURE__ */ jsxs("div", {
			className: "relative z-10 mx-auto max-w-7xl px-4",
			children: [
				/* @__PURE__ */ jsxs(AnimateOnScroll, {
					className: "mb-16 max-w-2xl",
					children: [
						/* @__PURE__ */ jsx(Badge, {
							className: "mb-4 bg-zinc-800 border border-zinc-700 text-zinc-400",
							children: "How it works"
						}),
						/* @__PURE__ */ jsx(BlurSharpHeading, { children: "Three steps to shipped software" }),
						/* @__PURE__ */ jsx("p", {
							className: "text-base text-zinc-400",
							children: "A structured path from first commit to production deployment."
						})
					]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "hidden md:block",
					children: /* @__PURE__ */ jsx(AnimateOnScroll, {
						delay: 150,
						children: /* @__PURE__ */ jsx("div", {
							className: "grid md:grid-cols-[1.2fr_0.8fr] gap-px bg-white/[0.06] rounded-3xl overflow-hidden",
							children: steps.map((step, i) => {
								const Icon = step.icon;
								return /* @__PURE__ */ jsxs("div", {
									className: `bg-zinc-900 p-8 md:p-10 relative ${i === 0 ? "md:row-span-2" : ""}`,
									children: [/* @__PURE__ */ jsx("span", {
										className: "absolute top-4 right-6 font-mono text-[80px] leading-none font-bold text-zinc-800 select-none pointer-events-none",
										children: step.number
									}), /* @__PURE__ */ jsxs("div", {
										className: "relative z-10",
										children: [
											/* @__PURE__ */ jsx("div", {
												className: `h-12 w-12 rounded-xl ${step.iconBg} flex items-center justify-center mb-5`,
												children: /* @__PURE__ */ jsx(Icon, {
													size: 24,
													weight: "duotone",
													className: step.iconColor
												})
											}),
											/* @__PURE__ */ jsx("h3", {
												className: `font-display font-bold text-white mb-3 ${i === 0 ? "text-2xl" : "text-xl"}`,
												children: step.title
											}),
											/* @__PURE__ */ jsx("p", {
												className: "text-sm text-zinc-400 leading-relaxed max-w-md",
												children: step.description
											})
										]
									})]
								}, step.number);
							})
						})
					})
				}),
				/* @__PURE__ */ jsx("div", {
					className: "md:hidden space-y-0",
					children: steps.map((step, i) => {
						const Icon = step.icon;
						return /* @__PURE__ */ jsxs("div", {
							className: "sticky-card rounded-2xl bg-zinc-900 border border-white/[0.06] p-6 mb-4 card-highlight",
							style: {
								["--sticky-top"]: `${90 + i * 20}px`,
								zIndex: i + 1
							},
							children: [/* @__PURE__ */ jsx("span", {
								className: "absolute top-3 right-4 font-mono text-[48px] leading-none font-bold text-zinc-800 select-none pointer-events-none",
								children: step.number
							}), /* @__PURE__ */ jsxs("div", {
								className: "relative z-10",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: `h-10 w-10 rounded-xl ${step.iconBg} flex items-center justify-center mb-4`,
										children: /* @__PURE__ */ jsx(Icon, {
											size: 20,
											weight: "duotone",
											className: step.iconColor
										})
									}),
									/* @__PURE__ */ jsx("h3", {
										className: "font-display text-lg font-bold text-white mb-2",
										children: step.title
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-sm text-zinc-400 leading-relaxed",
										children: step.description
									})
								]
							})]
						}, step.number);
					})
				})
			]
		})]
	});
}
//#endregion
//#region src/hooks/useCountUp.ts
function useCountUp(target, isActive, duration = 2e3) {
	const [value, setValue] = useState(0);
	useEffect(() => {
		if (!isActive) return;
		const startTime = performance.now();
		let rafId;
		function tick(now) {
			const elapsed = now - startTime;
			const progress = Math.min(elapsed / duration, 1);
			setValue((1 - Math.pow(1 - progress, 3)) * target);
			if (progress < 1) rafId = requestAnimationFrame(tick);
		}
		rafId = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(rafId);
	}, [
		isActive,
		target,
		duration
	]);
	return value;
}
//#endregion
//#region src/components/shared/Tooltip.tsx
function Tooltip({ children, content }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "tooltip-wrap",
		children: [children, /* @__PURE__ */ jsx("div", {
			className: "tooltip-content",
			children: content
		})]
	});
}
//#endregion
//#region src/components/home/Stats.tsx
var stats = [
	{
		value: 11480,
		suffix: "+",
		label: "Active builders",
		format: "int",
		tooltip: "Up 23% this quarter"
	},
	{
		value: 217,
		suffix: "",
		label: "Project-based courses",
		format: "int",
		tooltip: "12 new courses added this month"
	},
	{
		value: 91.3,
		suffix: "%",
		label: "Completion rate",
		format: "decimal",
		tooltip: "vs. industry average of 34%"
	},
	{
		value: 4.82,
		suffix: "",
		label: "Average rating",
		format: "decimal",
		tooltip: "Across 8,400+ reviews"
	}
];
function AnimatedStat({ value, suffix, format, isActive }) {
	const count = useCountUp(value, isActive, 2200);
	return /* @__PURE__ */ jsxs("span", { children: [format === "int" ? Math.round(count).toLocaleString() : count.toFixed(format === "decimal" && value < 10 ? 2 : 1), suffix] });
}
function Stats() {
	const { ref, isInView } = useInView(.3);
	return /* @__PURE__ */ jsxs("section", {
		ref,
		className: "py-16 md:py-20 bg-zinc-950 text-white relative overflow-hidden border-t border-white/[0.06]",
		children: [
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-grid-dark" }),
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-glow-center-dark" }),
			/* @__PURE__ */ jsx("div", {
				className: "relative z-10 mx-auto max-w-7xl px-4",
				children: /* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12",
					children: stats.map((stat, i) => /* @__PURE__ */ jsxs("div", {
						style: {
							opacity: isInView ? 1 : 0,
							transform: isInView ? "translateY(0)" : "translateY(16px)",
							transition: `all 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 100}ms`
						},
						children: [/* @__PURE__ */ jsx(Tooltip, {
							content: stat.tooltip,
							children: /* @__PURE__ */ jsx("div", {
								className: "font-mono text-5xl md:text-6xl font-bold text-white tracking-tighter cursor-default",
								children: /* @__PURE__ */ jsx(AnimatedStat, {
									value: stat.value,
									suffix: stat.suffix,
									format: stat.format,
									isActive: isInView
								})
							})
						}), /* @__PURE__ */ jsx("div", {
							className: "text-sm text-zinc-500 mt-2",
							children: stat.label
						})]
					}, stat.label))
				})
			})
		]
	});
}
//#endregion
//#region src/components/home/Testimonials.tsx
var testimonials = [
	{
		name: "Delphine Ayari",
		role: "Staff Eng at Datadog",
		seed: "delphine-ayari",
		content: "The code review process alone is worth the enrollment. I rewrote a service at work using patterns I picked up in the full-stack track and our p99 latency dropped 38%.",
		rating: 5,
		course: "Full-Stack Web Dev"
	},
	{
		name: "Tomoko Westergaard",
		role: "Sr. Designer at Figma",
		seed: "tomoko-westergaard",
		content: "The design practicum pushed me past surface-level mockups into systems thinking. Every module forced a portfolio deliverable that I still reference in interviews.",
		rating: 5,
		course: "Product Design"
	},
	{
		name: "Kael Nakamura-Boyce",
		role: "ML Lead at Anthropic",
		seed: "kael-nakamura",
		content: "From sklearn basics to deploying an inference endpoint in production. The structured path meant I never hit a dead end, and the capstone dataset was genuinely messy. I deployed a model that handles 12k requests per day.",
		rating: 5,
		course: "Applied ML"
	},
	{
		name: "Idris Okonkwo-Petit",
		role: "Founding Eng at Vercel",
		seed: "idris-okonkwo",
		content: "We enrolled our entire six-person team. Within a quarter, our deployment frequency went from weekly to daily. The project-first approach removes the theory-practice gap.",
		rating: 5,
		course: "Full-Stack Web Dev"
	},
	{
		name: "Meera Johansson",
		role: "Data Eng at Spotify",
		seed: "meera-johansson",
		content: "The data science track uses real public datasets with all the messiness intact. No toy CSVs. I built three pipelines during the course that I later adapted at work.",
		rating: 5,
		course: "Data Science"
	}
];
function Testimonials() {
	const [highlighted, setHighlighted] = useState(0);
	useEffect(() => {
		const interval = setInterval(() => {
			setHighlighted((prev) => (prev + 1) % testimonials.length);
		}, 5e3);
		return () => clearInterval(interval);
	}, []);
	return /* @__PURE__ */ jsx("section", {
		className: "py-24 bg-zinc-950 relative overflow-hidden",
		children: /* @__PURE__ */ jsxs("div", {
			className: "relative z-10 mx-auto max-w-7xl px-4",
			children: [/* @__PURE__ */ jsxs(AnimateOnScroll, {
				className: "mb-12 max-w-2xl",
				children: [
					/* @__PURE__ */ jsxs(Badge, {
						className: "mb-4 bg-zinc-800 border border-zinc-700 text-zinc-400",
						children: [/* @__PURE__ */ jsx(Star, {
							size: 14,
							weight: "fill",
							className: "text-accent-400"
						}), "From the community"]
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "font-display text-4xl sm:text-5xl font-bold tracking-tight text-zinc-100 mb-4",
						children: "Engineers who shipped with Praxis"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-zinc-400 text-sm",
						children: "Hear from builders who turned course projects into production systems and career milestones."
					})
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "masonry-grid",
				children: testimonials.map((t, i) => /* @__PURE__ */ jsx(AnimateOnScroll, {
					delay: i * 80,
					children: /* @__PURE__ */ jsxs("div", {
						className: "rounded-2xl border bg-zinc-900 p-6 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] card-highlight",
						style: {
							borderColor: highlighted === i ? "rgba(56, 165, 113, 0.25)" : "rgba(255, 255, 255, 0.06)",
							boxShadow: highlighted === i ? "0 0 24px rgba(56, 165, 113, 0.06)" : "none"
						},
						children: [
							/* @__PURE__ */ jsx(Quotes, {
								size: 28,
								weight: "fill",
								className: "text-accent-500/20 mb-4"
							}),
							/* @__PURE__ */ jsxs("p", {
								className: "text-sm leading-relaxed text-zinc-300 mb-5",
								children: [
									"“",
									t.content,
									"”"
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-1 mb-4",
								children: [Array.from({ length: t.rating }).map((_, j) => /* @__PURE__ */ jsx(Star, {
									size: 14,
									weight: "fill",
									className: "text-accent-400"
								}, j)), /* @__PURE__ */ jsx("span", {
									className: "ml-2 text-xs text-zinc-500 font-mono",
									children: t.course
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-3 pt-4 border-t border-white/[0.06]",
								children: [/* @__PURE__ */ jsx(Avatar, {
									src: `https://picsum.photos/seed/${t.seed}/100/100`,
									alt: t.name,
									size: "md"
								}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
									className: "font-display font-bold text-sm text-white",
									children: t.name
								}), /* @__PURE__ */ jsx("div", {
									className: "text-xs text-zinc-500",
									children: t.role
								})] })]
							})
						]
					})
				}, t.name))
			})]
		})
	});
}
//#endregion
//#region src/components/home/CTA.tsx
function CTA() {
	return /* @__PURE__ */ jsxs("section", {
		className: "py-24 md:py-32 bg-zinc-950 text-white relative overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-grid-dark" }),
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-topo-dark" }),
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-glow-center-dark" }),
			/* @__PURE__ */ jsx("div", { className: "aurora-bg" }),
			/* @__PURE__ */ jsx("div", {
				className: "absolute inset-0 pointer-events-none",
				style: { backgroundImage: "radial-gradient(ellipse 50% 40% at 60% 50%, rgba(168, 85, 247, 0.04) 0%, transparent 70%)" }
			}),
			/* @__PURE__ */ jsx("div", {
				className: "relative z-10 mx-auto max-w-7xl px-4",
				children: /* @__PURE__ */ jsxs(AnimateOnScroll, {
					className: "max-w-2xl",
					children: [
						/* @__PURE__ */ jsxs("h2", {
							className: "font-display text-4xl md:text-6xl font-bold tracking-tighter leading-[0.95] mb-6",
							children: [
								"Stop watching.",
								/* @__PURE__ */ jsx("br", {}),
								/* @__PURE__ */ jsx("span", {
									className: "bg-gradient-to-r from-accent-400 to-emerald-300 bg-clip-text text-transparent",
									children: "Start shipping."
								})
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-lg text-zinc-400 mb-10 max-w-lg",
							children: "Your first project is free. No credit card. Cancel anytime. Join 11,480+ engineers building real software."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex flex-wrap gap-4",
							children: [/* @__PURE__ */ jsx("a", {
								href: appHref("/register"),
								children: /* @__PURE__ */ jsxs(Button, {
									size: "xl",
									className: "btn-shimmer bg-white text-zinc-900 hover:bg-zinc-200 group active:scale-[0.97] transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)]",
									children: ["Start building for free", /* @__PURE__ */ jsx(ArrowRight, {
										size: 16,
										className: "transition-transform duration-150 group-hover:translate-x-1"
									})]
								})
							}), /* @__PURE__ */ jsx("a", {
								href: "/pricing",
								children: /* @__PURE__ */ jsx(Button, {
									variant: "outline",
									size: "xl",
									className: "border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:border-zinc-600 active:scale-[0.97] transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)]",
									children: "Compare plans"
								})
							})]
						})
					]
				})
			})
		]
	});
}
//#endregion
//#region src/components/shared/SectionDots.tsx
var sections = [
	{
		id: "hero",
		label: "Hero"
	},
	{
		id: "features",
		label: "Features"
	},
	{
		id: "how-it-works",
		label: "How it works"
	},
	{
		id: "stats",
		label: "Stats"
	},
	{
		id: "testimonials",
		label: "Testimonials"
	},
	{
		id: "cta",
		label: "Get started"
	}
];
function SectionDots() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [visible, setVisible] = useState(false);
	useEffect(() => {
		function onScroll() {
			setVisible(window.scrollY > 300);
			for (let i = sections.length - 1; i >= 0; i--) {
				const el = document.getElementById(sections[i].id);
				if (el) {
					if (el.getBoundingClientRect().top <= window.innerHeight / 2) {
						setActiveIndex(i);
						break;
					}
				}
			}
		}
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	function scrollTo(id) {
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
	}
	return /* @__PURE__ */ jsx("nav", {
		className: "fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-3 transition-opacity duration-300",
		style: {
			opacity: visible ? 1 : 0,
			pointerEvents: visible ? "auto" : "none"
		},
		"aria-label": "Section navigation",
		children: sections.map((s, i) => /* @__PURE__ */ jsxs("button", {
			onClick: () => scrollTo(s.id),
			className: "group relative flex items-center",
			"aria-label": s.label,
			children: [/* @__PURE__ */ jsx("span", {
				className: "absolute right-6 px-2 py-1 rounded-lg bg-zinc-900 border border-white/[0.06] text-[10px] text-zinc-400 font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none",
				children: s.label
			}), /* @__PURE__ */ jsx("span", {
				className: "h-2 w-2 rounded-full transition-all duration-300",
				style: {
					background: activeIndex === i ? "rgb(56, 165, 113)" : "rgba(255,255,255,0.15)",
					boxShadow: activeIndex === i ? "0 0 6px rgba(56,165,113,0.4)" : "none",
					transform: activeIndex === i ? "scale(1.3)" : "scale(1)"
				}
			})]
		}, s.id))
	});
}
//#endregion
//#region src/components/shared/GradientDivider.tsx
function GradientDivider() {
	return /* @__PURE__ */ jsx("div", { className: "gradient-divider mx-auto max-w-7xl" });
}
//#endregion
//#region src/routes/index.tsx?tsr-split=component
function HomePage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(SectionDots, {}),
		/* @__PURE__ */ jsx("div", {
			id: "hero",
			children: /* @__PURE__ */ jsx(Hero, {})
		}),
		/* @__PURE__ */ jsx(Marquee, {}),
		/* @__PURE__ */ jsx(TrustedBy, {}),
		/* @__PURE__ */ jsx(GradientDivider, {}),
		/* @__PURE__ */ jsx("div", {
			id: "features",
			children: /* @__PURE__ */ jsx(FeaturedCourses, {})
		}),
		/* @__PURE__ */ jsx(GradientDivider, {}),
		/* @__PURE__ */ jsx("div", {
			id: "how-it-works",
			children: /* @__PURE__ */ jsx(HowItWorks, {})
		}),
		/* @__PURE__ */ jsx("div", {
			id: "stats",
			children: /* @__PURE__ */ jsx(Stats, {})
		}),
		/* @__PURE__ */ jsx(GradientDivider, {}),
		/* @__PURE__ */ jsx("div", {
			id: "testimonials",
			children: /* @__PURE__ */ jsx(Testimonials, {})
		}),
		/* @__PURE__ */ jsx("div", {
			id: "cta",
			children: /* @__PURE__ */ jsx(CTA, {})
		})
	] });
}
//#endregion
export { HomePage as component };
