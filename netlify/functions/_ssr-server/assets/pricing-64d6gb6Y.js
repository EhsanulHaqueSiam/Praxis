import { i as Accordion, o as Badge, s as Button } from "./src-BjNFa_qv.js";
import { t as appHref } from "./urls-CA_lAwWW.js";
import { t as DarkSection } from "./DarkSection-Dn7dtPT2.js";
import { t as SectionHeader } from "./SectionHeader-CAsr_XOY.js";
import { t as AnimateOnScroll } from "./AnimateOnScroll-DkV4XX9-.js";
import { t as TiltCard } from "./TiltCard-BH0fdV_F.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, CheckCircle, Minus, Question } from "@phosphor-icons/react";
//#region src/components/pricing/PricingHero.tsx
function PricingHero() {
	return /* @__PURE__ */ jsxs("section", {
		className: "bg-zinc-950 pt-28 pb-16 relative overflow-hidden",
		children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-glow-center-dark opacity-40" }), /* @__PURE__ */ jsx("div", {
			className: "relative z-10 mx-auto max-w-7xl px-4",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-2xl",
				children: [/* @__PURE__ */ jsx("h1", {
					className: "font-display text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-[0.95] font-bold bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent mb-6",
					children: "Simple, transparent pricing"
				}), /* @__PURE__ */ jsx("p", {
					className: "text-base md:text-lg text-zinc-400 leading-relaxed",
					children: "Start free, upgrade when ready. No hidden fees, no long-term contracts."
				})]
			})
		})]
	});
}
//#endregion
//#region src/components/pricing/PricingCards.tsx
var freeFeatures = [
	{
		label: "3 courses per month",
		included: true
	},
	{
		label: "Community access",
		included: true
	},
	{
		label: "Basic certificates",
		included: true
	},
	{
		label: "Email support",
		included: true
	},
	{
		label: "Priority code reviews",
		included: false
	},
	{
		label: "Live mentorship",
		included: false
	},
	{
		label: "Team features",
		included: false
	},
	{
		label: "Priority support",
		included: false
	}
];
var proFeatures = [
	{
		label: "Unlimited courses",
		included: true
	},
	{
		label: "Priority code reviews",
		included: true
	},
	{
		label: "Premium certificates",
		included: true
	},
	{
		label: "Live mentorship",
		included: true
	},
	{
		label: "Team features",
		included: true
	},
	{
		label: "Priority support",
		included: true
	},
	{
		label: "Community access",
		included: true
	},
	{
		label: "Offline downloads",
		included: true
	}
];
function PricingCards() {
	return /* @__PURE__ */ jsx("section", {
		className: "bg-zinc-950 pb-24 relative overflow-hidden",
		children: /* @__PURE__ */ jsx("div", {
			className: "relative z-10 mx-auto max-w-7xl px-4",
			children: /* @__PURE__ */ jsxs("div", {
				className: "grid md:grid-cols-2 gap-6 max-w-4xl",
				children: [/* @__PURE__ */ jsx(AnimateOnScroll, {
					delay: 0,
					children: /* @__PURE__ */ jsxs("div", {
						className: "rounded-3xl border border-white/[0.06] bg-zinc-900 p-8 card-highlight",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "mb-6",
								children: [/* @__PURE__ */ jsx("h3", {
									className: "font-display text-xl font-bold text-white mb-1",
									children: "Free"
								}), /* @__PURE__ */ jsx("p", {
									className: "text-sm text-zinc-500",
									children: "For exploring the platform"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mb-8",
								children: [/* @__PURE__ */ jsx("span", {
									className: "font-mono text-5xl font-bold text-white",
									children: "$0"
								}), /* @__PURE__ */ jsx("span", {
									className: "text-sm text-zinc-500 ml-2",
									children: "forever"
								})]
							}),
							/* @__PURE__ */ jsx("ul", {
								className: "space-y-3 mb-8",
								children: freeFeatures.map((feature) => /* @__PURE__ */ jsxs("li", {
									className: "flex items-center gap-3",
									children: [feature.included ? /* @__PURE__ */ jsx(CheckCircle, {
										size: 18,
										weight: "fill",
										className: "text-accent-400 shrink-0"
									}) : /* @__PURE__ */ jsx(Minus, {
										size: 18,
										className: "text-zinc-700 shrink-0"
									}), /* @__PURE__ */ jsx("span", {
										className: `text-sm ${feature.included ? "text-zinc-300" : "text-zinc-600"}`,
										children: feature.label
									})]
								}, feature.label))
							}),
							/* @__PURE__ */ jsx("a", {
								href: appHref("/register"),
								children: /* @__PURE__ */ jsx(Button, {
									variant: "outline",
									className: "w-full border-zinc-700 text-zinc-300 hover:bg-zinc-800 active:scale-[0.97] transition-all duration-150",
									children: "Start free"
								})
							})
						]
					})
				}), /* @__PURE__ */ jsx(AnimateOnScroll, {
					delay: 150,
					children: /* @__PURE__ */ jsxs(TiltCard, {
						intensity: 4,
						className: "rounded-3xl bg-zinc-900 p-8 relative gradient-border shadow-[0_0_30px_rgba(56,165,113,0.08)] card-highlight",
						children: [
							/* @__PURE__ */ jsx(Badge, {
								className: "absolute top-4 right-4 bg-accent-500/10 text-accent-400 border border-accent-500/20",
								children: "Most popular"
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mb-6",
								children: [/* @__PURE__ */ jsx("h3", {
									className: "font-display text-xl font-bold text-white mb-1",
									children: "Pro"
								}), /* @__PURE__ */ jsx("p", {
									className: "text-sm text-zinc-500",
									children: "For serious builders"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mb-8",
								children: [/* @__PURE__ */ jsx("span", {
									className: "font-mono text-5xl font-bold text-white",
									children: "$29"
								}), /* @__PURE__ */ jsx("span", {
									className: "text-sm text-zinc-500 ml-2",
									children: "/mo"
								})]
							}),
							/* @__PURE__ */ jsx("ul", {
								className: "space-y-3 mb-8",
								children: proFeatures.map((feature) => /* @__PURE__ */ jsxs("li", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ jsx(CheckCircle, {
										size: 18,
										weight: "fill",
										className: "text-accent-400 shrink-0"
									}), /* @__PURE__ */ jsx("span", {
										className: "text-sm text-zinc-300",
										children: feature.label
									})]
								}, feature.label))
							}),
							/* @__PURE__ */ jsx("a", {
								href: appHref("/register?plan=pro"),
								children: /* @__PURE__ */ jsx(Button, {
									className: "w-full btn-shimmer bg-white text-zinc-900 hover:bg-zinc-200 active:scale-[0.97] transition-all duration-150",
									children: "Start building"
								})
							})
						]
					})
				})]
			})
		})
	});
}
//#endregion
//#region src/components/pricing/FeatureTable.tsx
var featureGroups = [
	{
		category: "Learning",
		rows: [
			{
				feature: "Project-based courses",
				free: true,
				pro: true
			},
			{
				feature: "Course limit",
				free: false,
				pro: true
			},
			{
				feature: "Interactive code editor",
				free: true,
				pro: true
			},
			{
				feature: "Offline downloads",
				free: false,
				pro: true
			}
		]
	},
	{
		category: "Reviews",
		rows: [
			{
				feature: "Automated feedback",
				free: true,
				pro: true
			},
			{
				feature: "Priority code reviews",
				free: false,
				pro: true
			},
			{
				feature: "1-on-1 review sessions",
				free: false,
				pro: true
			}
		]
	},
	{
		category: "Community",
		rows: [{
			feature: "Discord access",
			free: true,
			pro: true
		}, {
			feature: "Live mentorship sessions",
			free: false,
			pro: true
		}]
	},
	{
		category: "Certificates",
		rows: [{
			feature: "Basic certificates",
			free: true,
			pro: true
		}, {
			feature: "Verified premium certificates",
			free: false,
			pro: true
		}]
	},
	{
		category: "Support",
		rows: [{
			feature: "Email support",
			free: true,
			pro: true
		}, {
			feature: "Priority support (< 4h)",
			free: false,
			pro: true
		}]
	}
];
function Check({ value }) {
	return value ? /* @__PURE__ */ jsx(CheckCircle, {
		size: 18,
		weight: "fill",
		className: "text-accent-400"
	}) : /* @__PURE__ */ jsx(Minus, {
		size: 18,
		className: "text-zinc-700"
	});
}
function FeatureTable() {
	return /* @__PURE__ */ jsx("section", {
		className: "bg-zinc-950 py-24 relative overflow-hidden",
		children: /* @__PURE__ */ jsxs("div", {
			className: "relative z-10 mx-auto max-w-7xl px-4",
			children: [/* @__PURE__ */ jsx(SectionHeader, {
				dark: true,
				title: "Full feature comparison",
				subtitle: "Everything included in each plan, broken down by category."
			}), /* @__PURE__ */ jsx("div", {
				className: "overflow-x-auto",
				children: /* @__PURE__ */ jsxs("table", {
					className: "w-full rounded-2xl border border-white/[0.06] bg-zinc-900 overflow-hidden",
					children: [/* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", {
						className: "bg-zinc-800/50",
						children: [
							/* @__PURE__ */ jsx("th", {
								className: "text-left px-6 py-4 font-display font-bold text-sm text-zinc-300",
								children: "Feature"
							}),
							/* @__PURE__ */ jsx("th", {
								className: "px-6 py-4 font-display font-bold text-sm text-zinc-400 text-center w-28",
								children: "Free"
							}),
							/* @__PURE__ */ jsx("th", {
								className: "px-6 py-4 font-display font-bold text-sm text-accent-400 text-center w-28",
								children: "Pro"
							})
						]
					}) }), /* @__PURE__ */ jsx("tbody", { children: featureGroups.map((group) => /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("tr", {
						className: "bg-zinc-800/30",
						children: /* @__PURE__ */ jsx("td", {
							colSpan: 3,
							className: "px-6 py-3 font-display font-bold text-xs uppercase tracking-wider text-zinc-500",
							children: group.category
						})
					}, `cat-${group.category}`), group.rows.map((row, i) => /* @__PURE__ */ jsxs("tr", {
						className: `border-t border-zinc-800 ${i % 2 === 0 ? "bg-zinc-900" : "bg-zinc-900/50"}`,
						children: [
							/* @__PURE__ */ jsx("td", {
								className: "px-6 py-4 text-sm text-zinc-400",
								children: row.feature
							}),
							/* @__PURE__ */ jsx("td", {
								className: "px-6 py-4 text-center",
								children: /* @__PURE__ */ jsx("div", {
									className: "flex justify-center",
									children: /* @__PURE__ */ jsx(Check, { value: row.free })
								})
							}),
							/* @__PURE__ */ jsx("td", {
								className: "px-6 py-4 text-center",
								children: /* @__PURE__ */ jsx("div", {
									className: "flex justify-center",
									children: /* @__PURE__ */ jsx(Check, { value: row.pro })
								})
							})
						]
					}, row.feature))] })) })]
				})
			})]
		})
	});
}
//#endregion
//#region src/components/pricing/PricingFAQ.tsx
var faqItems = [
	{
		title: "Can I switch plans anytime?",
		content: "Yes, upgrade or downgrade at any time. When you upgrade, you get immediate access to Pro features. When you downgrade, your Pro access continues until the end of your current billing cycle."
	},
	{
		title: "Is there a student discount?",
		content: "Yes, 40% off Pro with a valid .edu email address. The discount applies for as long as you maintain an active student email. Contact support with your .edu email to activate the discount."
	},
	{
		title: "What happens when my free course limit resets?",
		content: "Your limit resets on the first of each month. Any courses you started in the previous month remain accessible so you can finish them, but new course enrollments count against your fresh limit of 3."
	},
	{
		title: "Do certificates expire?",
		content: "No, certificates are permanent and verifiable at any time. Each certificate has a unique URL that employers can check. Premium certificates include detailed skill breakdowns and project links."
	},
	{
		title: "Can I get a refund?",
		content: "Full refund within 14 days, no questions asked. If you subscribed to Pro and decide it is not for you, email support and we will process the refund within 2 business days."
	},
	{
		title: "Is there a team plan?",
		content: "Yes, contact us for team pricing starting at 5 seats. Team plans include a shared dashboard, progress tracking across members, and dedicated onboarding support. Volume discounts available for 20+ seats."
	},
	{
		title: "What payment methods do you accept?",
		content: "Visa, Mastercard, American Express, and PayPal. All payments are processed securely through Stripe. We also support invoicing for team plans of 10 or more seats."
	},
	{
		title: "Can I download courses for offline?",
		content: "Pro subscribers can download course materials, video content, and project templates for offline access through the Praxis desktop app. Downloaded content syncs your progress when you reconnect."
	}
];
function PricingFAQ() {
	return /* @__PURE__ */ jsx("section", {
		className: "bg-zinc-950 py-24 relative overflow-hidden",
		children: /* @__PURE__ */ jsxs("div", {
			className: "relative z-10 mx-auto max-w-7xl px-4",
			children: [/* @__PURE__ */ jsx(AnimateOnScroll, { children: /* @__PURE__ */ jsx(SectionHeader, {
				badge: {
					icon: Question,
					label: "FAQ"
				},
				title: "Common questions",
				subtitle: "Everything you need to know about pricing and plans."
			}) }), /* @__PURE__ */ jsx(AnimateOnScroll, {
				delay: 150,
				children: /* @__PURE__ */ jsx("div", {
					className: "max-w-3xl",
					children: /* @__PURE__ */ jsx(Accordion, {
						items: faqItems,
						variant: "cards"
					})
				})
			})]
		})
	});
}
//#endregion
//#region src/components/pricing/EnterpriseCTA.tsx
function EnterpriseCTA() {
	return /* @__PURE__ */ jsx(DarkSection, { children: /* @__PURE__ */ jsxs("div", {
		className: "max-w-2xl",
		children: [
			/* @__PURE__ */ jsx("h2", {
				className: "font-display text-4xl md:text-5xl font-bold tracking-tighter leading-[0.95] mb-6 bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent",
				children: "Need a plan for your team?"
			}),
			/* @__PURE__ */ jsx("p", {
				className: "text-base text-zinc-400 leading-relaxed mb-10 max-w-lg",
				children: "Custom pricing, dedicated onboarding, and admin tools for engineering teams of 5 or more. Get volume discounts and a shared progress dashboard."
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex flex-wrap gap-4",
				children: [/* @__PURE__ */ jsx("a", {
					href: "mailto:sales@praxis.dev",
					children: /* @__PURE__ */ jsxs(Button, {
						size: "xl",
						className: "bg-white text-zinc-900 hover:bg-zinc-200 active:scale-[0.97] transition-all duration-150 group",
						children: ["Contact sales", /* @__PURE__ */ jsx(ArrowRight, {
							size: 16,
							className: "transition-transform duration-150 group-hover:translate-x-1"
						})]
					})
				}), /* @__PURE__ */ jsx("a", {
					href: "#feature-comparison",
					children: /* @__PURE__ */ jsx(Button, {
						variant: "ghost",
						size: "xl",
						className: "text-zinc-400 hover:text-white hover:bg-white/5 active:scale-[0.97] transition-all duration-150",
						children: "Compare plans"
					})
				})]
			})
		]
	}) });
}
//#endregion
//#region src/routes/pricing.tsx?tsr-split=component
function PricingPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(PricingHero, {}),
		/* @__PURE__ */ jsx(PricingCards, {}),
		/* @__PURE__ */ jsx(FeatureTable, {}),
		/* @__PURE__ */ jsx(PricingFAQ, {}),
		/* @__PURE__ */ jsx(EnterpriseCTA, {})
	] });
}
//#endregion
export { PricingPage as component };
