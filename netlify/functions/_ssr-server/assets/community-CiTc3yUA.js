import { a as Avatar, s as Button } from "./src-BjNFa_qv.js";
import { t as DarkSection } from "./DarkSection-Dn7dtPT2.js";
import { t as SectionHeader } from "./SectionHeader-CAsr_XOY.js";
import { t as AnimateOnScroll } from "./AnimateOnScroll-DkV4XX9-.js";
import { t as SpotlightCard } from "./SpotlightCard-RlLJ_hnK.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, ChatCircle, DiscordLogo, GithubLogo, Microphone, Quotes, Star, UsersThree } from "@phosphor-icons/react";
//#region src/components/community/CommunityHero.tsx
function CommunityHero() {
	return /* @__PURE__ */ jsx(DarkSection, {
		padTop: true,
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-3xl",
			children: [/* @__PURE__ */ jsxs("h1", {
				className: "font-display text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-[0.95] font-bold mb-6",
				children: [
					"Built by engineers,",
					/* @__PURE__ */ jsx("br", {}),
					/* @__PURE__ */ jsx("span", {
						className: "bg-gradient-to-r from-accent-400 to-emerald-300 bg-clip-text text-transparent",
						children: "for engineers."
					})
				]
			}), /* @__PURE__ */ jsx("p", {
				className: "text-base md:text-lg text-zinc-400 leading-relaxed max-w-[56ch]",
				children: "11,480+ builders across 42 countries. Ask questions, share projects, pair on code, and grow alongside engineers who take their craft seriously."
			})]
		})
	});
}
//#endregion
//#region src/components/community/FeaturedStories.tsx
var stories = [
	{
		name: "Delphine Ayari",
		role: "Staff Eng at Datadog",
		seed: "delphine-ayari",
		quote: "The code review process alone is worth the enrollment. I rewrote a service at work using patterns I picked up in the full-stack track and our p99 latency dropped 38%. The mentors do not hand you answers -- they teach you to reason about trade-offs. That is the difference between a tutorial and real engineering education.",
		highlight: "Promoted to Staff within 8 months of completing the path"
	},
	{
		name: "Tomoko Westergaard",
		role: "Sr. Designer at Figma",
		seed: "tomoko-westergaard",
		quote: "The design practicum pushed me past surface-level mockups into systems thinking. Every module forced a portfolio deliverable that I still reference in interviews. The Design Engineering course bridged a gap I did not even know I had -- now I prototype in code and ship directly to production.",
		highlight: "Landed her role at Figma with a Praxis portfolio project"
	},
	{
		name: "Kael Nakamura-Boyce",
		role: "ML Lead at Anthropic",
		seed: "kael-nakamura",
		quote: "From sklearn basics to deploying an inference endpoint that handles 12k requests per day. The structured path meant I never hit a dead end, and the capstone dataset was genuinely messy -- not a cleaned CSV with perfect labels. The MLOps module alone saved me months of trial and error at work.",
		highlight: "Built an inference pipeline serving 12k req/day in production"
	},
	{
		name: "Idris Okonkwo-Petit",
		role: "Founding Eng at Vercel",
		seed: "idris-okonkwo",
		quote: "We enrolled our entire six-person team. Within a quarter, our deployment frequency went from weekly to daily. The project-first approach removes the theory-practice gap that plagues most platforms. Every engineer on our team now reviews PRs with a level of rigor that we frankly did not have before.",
		highlight: "Team deployment frequency went from weekly to daily"
	}
];
function FeaturedStories() {
	return /* @__PURE__ */ jsxs(DarkSection, {
		glow: "none",
		children: [/* @__PURE__ */ jsx(SectionHeader, {
			dark: true,
			badge: {
				icon: Star,
				label: "Featured stories"
			},
			title: "From course projects to career milestones",
			subtitle: "Engineers who turned structured learning into tangible outcomes."
		}), /* @__PURE__ */ jsx("div", {
			className: "grid md:grid-cols-2 gap-6",
			children: stories.map((story, i) => /* @__PURE__ */ jsxs("div", {
				className: `rounded-2xl border border-white/[0.06] bg-zinc-900 p-6 md:p-8 ${i === 0 ? "md:col-span-2" : ""}`,
				children: [
					/* @__PURE__ */ jsx(Quotes, {
						size: 28,
						weight: "fill",
						className: "text-accent-500/20 mb-4"
					}),
					/* @__PURE__ */ jsxs("p", {
						className: "text-sm leading-relaxed text-zinc-300 mb-4",
						children: [
							"“",
							story.quote,
							"”"
						]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "rounded-xl bg-accent-500/10 px-4 py-2.5 mb-5 inline-block",
						children: /* @__PURE__ */ jsx("span", {
							className: "text-xs font-medium text-accent-400",
							children: story.highlight
						})
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between pt-4 border-t border-white/[0.06]",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ jsx(Avatar, {
								src: `https://picsum.photos/seed/${story.seed}/100/100`,
								alt: story.name,
								size: "md",
								className: "border-2 border-zinc-900"
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
								className: "font-display font-bold text-sm text-white",
								children: story.name
							}), /* @__PURE__ */ jsx("div", {
								className: "text-xs text-zinc-500",
								children: story.role
							})] })]
						}), /* @__PURE__ */ jsxs("a", {
							href: "#",
							className: "text-xs font-medium text-accent-400 hover:text-accent-300 flex items-center gap-1 transition-colors duration-150 ease-[cubic-bezier(0.23,1,0.32,1)]",
							children: ["Read the full story", /* @__PURE__ */ jsx(ArrowRight, { size: 12 })]
						})]
					})
				]
			}, story.name))
		})]
	});
}
//#endregion
//#region src/components/shared/StatsBand.tsx
function StatsBand({ stats }) {
	return /* @__PURE__ */ jsxs("section", {
		className: "bg-zinc-950 py-16 md:py-20 relative overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-grid-dark" }),
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 glow-dual" }),
			/* @__PURE__ */ jsx("div", {
				className: "relative z-10 mx-auto max-w-7xl px-4",
				children: /* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12",
					children: stats.map((stat) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
						className: "font-mono text-4xl md:text-6xl font-bold text-white tracking-tighter",
						children: stat.value
					}), /* @__PURE__ */ jsx("div", {
						className: "text-sm text-zinc-400 mt-2",
						children: stat.label
					})] }, stat.label))
				})
			})
		]
	});
}
//#endregion
//#region src/components/community/CommunityStats.tsx
var stats = [
	{
		value: "11,480+",
		label: "Community members"
	},
	{
		value: "42",
		label: "Countries represented"
	},
	{
		value: "3,240",
		label: "Projects shipped"
	},
	{
		value: "83",
		label: "Active mentors"
	}
];
function CommunityStats() {
	return /* @__PURE__ */ jsx(StatsBand, { stats });
}
//#endregion
//#region src/components/community/CommunityChannels.tsx
var channels = [
	{
		icon: DiscordLogo,
		title: "Discord",
		description: "Real-time help, project showcases, and off-topic channels for winding down. The fastest way to get unstuck.",
		stat: "4,200+ members",
		iconBg: "bg-indigo-500/10",
		iconColor: "text-indigo-400"
	},
	{
		icon: GithubLogo,
		title: "GitHub Discussions",
		description: "Long-form technical threads, RFC-style proposals, and code-focused Q&A. Searchable and indexed.",
		stat: "1,800+ threads",
		iconBg: "bg-zinc-800",
		iconColor: "text-zinc-400"
	},
	{
		icon: Microphone,
		title: "Weekly AMAs",
		description: "Two live sessions per week with industry engineers from companies like Vercel, Datadog, and Anthropic.",
		stat: "2 per week",
		iconBg: "bg-accent-500/10",
		iconColor: "text-accent-400"
	},
	{
		icon: UsersThree,
		title: "Study Groups",
		description: "Organized by timezone and learning path. Find peers working through the same material at the same pace.",
		stat: "140+ active groups",
		iconBg: "bg-amber-500/10",
		iconColor: "text-amber-400"
	}
];
function CommunityChannels() {
	return /* @__PURE__ */ jsx("section", {
		className: "py-24 relative bg-zinc-950",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-4",
			children: [/* @__PURE__ */ jsx(SectionHeader, {
				dark: true,
				badge: {
					icon: ChatCircle,
					label: "Channels"
				},
				title: "Where the conversations happen",
				subtitle: "Multiple formats for different kinds of learning. Pick what works for you."
			}), /* @__PURE__ */ jsx("div", {
				className: "grid md:grid-cols-2 gap-6",
				children: channels.map((channel, i) => {
					const Icon = channel.icon;
					return /* @__PURE__ */ jsx(AnimateOnScroll, {
						delay: i * 100,
						children: /* @__PURE__ */ jsxs(SpotlightCard, {
							className: "rounded-2xl border border-white/[0.06] bg-zinc-900 p-6 md:p-8 hover:border-white/[0.12] transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-px card-highlight",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "relative z-10 flex items-center gap-3 mb-4",
									children: [/* @__PURE__ */ jsx("div", {
										className: `h-10 w-10 rounded-xl ${channel.iconBg} flex items-center justify-center`,
										children: /* @__PURE__ */ jsx(Icon, {
											size: 20,
											weight: "duotone",
											className: channel.iconColor
										})
									}), /* @__PURE__ */ jsx("h3", {
										className: "font-display text-xl font-bold text-white",
										children: channel.title
									})]
								}),
								/* @__PURE__ */ jsx("p", {
									className: "relative z-10 text-sm text-zinc-400 leading-relaxed mb-4",
									children: channel.description
								}),
								/* @__PURE__ */ jsx("div", {
									className: "relative z-10 font-mono text-xs text-accent-400 font-medium",
									children: channel.stat
								})
							]
						})
					}, channel.title);
				})
			})]
		})
	});
}
//#endregion
//#region src/components/community/CommunityCTA.tsx
function CommunityCTA() {
	return /* @__PURE__ */ jsx(DarkSection, { children: /* @__PURE__ */ jsxs("div", {
		className: "max-w-2xl",
		children: [
			/* @__PURE__ */ jsx("h2", {
				className: "font-display text-4xl md:text-5xl font-bold tracking-tighter leading-[0.95] mb-6",
				children: /* @__PURE__ */ jsx("span", {
					className: "bg-gradient-to-r from-accent-400 to-emerald-300 bg-clip-text text-transparent",
					children: "Ready to join?"
				})
			}),
			/* @__PURE__ */ jsx("p", {
				className: "text-base text-zinc-400 leading-relaxed mb-10 max-w-lg",
				children: "Join 11,480+ engineers who learn by building. Get help in minutes, not days. Your first three courses are free."
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex flex-wrap gap-4",
				children: [/* @__PURE__ */ jsx("a", {
					href: "https://discord.gg/praxis",
					target: "_blank",
					rel: "noopener noreferrer",
					children: /* @__PURE__ */ jsxs(Button, {
						size: "xl",
						className: "bg-white text-zinc-900 hover:bg-zinc-100 group active:scale-[0.97] transition-transform",
						children: [
							/* @__PURE__ */ jsx(DiscordLogo, {
								size: 18,
								weight: "fill"
							}),
							"Join Discord",
							/* @__PURE__ */ jsx(ArrowRight, {
								size: 16,
								className: "transition-transform group-hover:translate-x-1"
							})
						]
					})
				}), /* @__PURE__ */ jsx("a", {
					href: "https://github.com/praxis/discussions",
					children: /* @__PURE__ */ jsx(Button, {
						variant: "outline",
						size: "xl",
						className: "border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:border-zinc-600 active:scale-[0.97] transition-transform",
						children: "Browse discussions"
					})
				})]
			})
		]
	}) });
}
//#endregion
//#region src/routes/community.tsx?tsr-split=component
function CommunityPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(CommunityHero, {}),
		/* @__PURE__ */ jsx(FeaturedStories, {}),
		/* @__PURE__ */ jsx(CommunityStats, {}),
		/* @__PURE__ */ jsx(CommunityChannels, {}),
		/* @__PURE__ */ jsx(CommunityCTA, {})
	] });
}
//#endregion
export { CommunityPage as component };
