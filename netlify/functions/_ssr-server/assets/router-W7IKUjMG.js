import { a as Avatar, n as useAuth, s as Button, t as AuthProvider } from "./src-BjNFa_qv.js";
import { t as appHref } from "./urls-CA_lAwWW.js";
import { useEffect, useRef, useState } from "react";
import { HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRoute, createRouter as createRouter$1, lazyRouteComponent } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, ArrowUp, GithubLogo, GraduationCap, LinkedinLogo, SquaresFour, X, XLogo, YoutubeLogo } from "@phosphor-icons/react";
//#region src/hooks/useScrollProgress.ts
function useScrollProgress() {
	const [scrollY, setScrollY] = useState(0);
	useEffect(() => {
		function onScroll() {
			setScrollY(window.scrollY);
		}
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return scrollY;
}
//#endregion
//#region src/components/layout/Header.tsx
var navLinks = [
	{
		label: "Courses",
		href: "/courses"
	},
	{
		label: "Learning Paths",
		href: "/paths"
	},
	{
		label: "Community",
		href: "/community"
	},
	{
		label: "Pricing",
		href: "/pricing"
	}
];
function Header() {
	const [mobileOpen, setMobileOpen] = useState(false);
	const scrolled = useScrollProgress() > 20;
	const { user, isLoggedIn, logout } = useAuth();
	return /* @__PURE__ */ jsx("header", {
		className: "fixed top-0 left-0 right-0 z-50",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-4 pt-4",
			children: [/* @__PURE__ */ jsxs("nav", {
				className: "rounded-2xl px-6 py-3 flex items-center justify-between transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]",
				style: {
					background: scrolled ? "rgba(9, 9, 11, 0.8)" : "rgba(9, 9, 11, 0.5)",
					backdropFilter: `blur(${scrolled ? 24 : 12}px) saturate(1.4)`,
					WebkitBackdropFilter: `blur(${scrolled ? 24 : 12}px) saturate(1.4)`,
					borderWidth: "1px",
					borderStyle: "solid",
					borderColor: scrolled ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 255, 255, 0.03)",
					boxShadow: scrolled ? "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.03)" : "none"
				},
				children: [
					/* @__PURE__ */ jsxs(Link, {
						to: "/",
						className: "flex items-center gap-2 group",
						children: [/* @__PURE__ */ jsx(GraduationCap, {
							size: 28,
							weight: "fill",
							className: "text-accent-400 transition-transform duration-200 group-hover:scale-110"
						}), /* @__PURE__ */ jsx("span", {
							className: "font-display text-xl font-bold tracking-tight text-white",
							children: "Praxis"
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "hidden md:flex items-center gap-1",
						children: navLinks.map((link) => /* @__PURE__ */ jsx(Link, {
							to: link.href,
							className: "nav-glow px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white rounded-xl transition-colors duration-150",
							children: link.label
						}, link.href))
					}),
					/* @__PURE__ */ jsx("div", {
						className: "hidden md:flex items-center gap-3",
						children: isLoggedIn ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("a", {
							href: appHref("/dashboard"),
							children: /* @__PURE__ */ jsxs(Button, {
								size: "sm",
								className: "btn-shimmer active:scale-[0.97] transition-transform",
								children: [/* @__PURE__ */ jsx(SquaresFour, {
									size: 14,
									weight: "duotone"
								}), "Dashboard"]
							})
						}), /* @__PURE__ */ jsx("button", {
							onClick: () => {
								logout();
								window.location.reload();
							},
							className: "flex items-center",
							children: /* @__PURE__ */ jsx(Avatar, {
								src: user?.avatar,
								alt: user?.name,
								fallback: user?.name?.charAt(0),
								size: "sm",
								className: "cursor-pointer hover:ring-2 hover:ring-accent-500/30 transition-shadow"
							})
						})] }) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("a", {
							href: appHref("/login"),
							children: /* @__PURE__ */ jsx(Button, {
								variant: "ghost",
								size: "sm",
								className: "text-zinc-400 hover:text-white hover:bg-white/5",
								children: "Sign In"
							})
						}), /* @__PURE__ */ jsx("a", {
							href: appHref("/register"),
							children: /* @__PURE__ */ jsx(Button, {
								size: "sm",
								className: "btn-shimmer active:scale-[0.97] transition-transform",
								children: "Start Building"
							})
						})] })
					}),
					/* @__PURE__ */ jsx("button", {
						onClick: () => setMobileOpen(!mobileOpen),
						className: "md:hidden p-2 rounded-xl text-zinc-300 hover:text-white hover:bg-white/5 transition-colors",
						"aria-label": "Toggle menu",
						children: /* @__PURE__ */ jsxs("div", {
							className: `hamburger ${mobileOpen ? "open" : ""}`,
							children: [
								/* @__PURE__ */ jsx("span", {}),
								/* @__PURE__ */ jsx("span", {}),
								/* @__PURE__ */ jsx("span", {})
							]
						})
					})
				]
			}), mobileOpen && /* @__PURE__ */ jsx("div", {
				className: "md:hidden mt-2 glass-dark rounded-2xl p-4 shadow-diffuse-lg animate-fade-up",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex flex-col gap-1",
					children: [
						navLinks.map((link) => /* @__PURE__ */ jsx(Link, {
							to: link.href,
							className: "px-4 py-3 text-sm font-medium text-zinc-300 hover:text-white rounded-xl transition-colors hover:bg-white/5",
							onClick: () => setMobileOpen(false),
							children: link.label
						}, link.href)),
						/* @__PURE__ */ jsx("div", { className: "h-px bg-zinc-800 my-2" }),
						isLoggedIn ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("a", {
							href: appHref("/dashboard"),
							className: "block",
							children: /* @__PURE__ */ jsxs(Button, {
								size: "sm",
								className: "w-full justify-center",
								children: [/* @__PURE__ */ jsx(SquaresFour, {
									size: 14,
									weight: "duotone"
								}), "Dashboard"]
							})
						}), /* @__PURE__ */ jsx("button", {
							onClick: () => {
								logout();
								window.location.reload();
							},
							className: "px-4 py-3 text-sm font-medium text-zinc-500 hover:text-zinc-300 rounded-xl transition-colors hover:bg-white/5 text-left",
							children: "Sign Out"
						})] }) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("a", {
							href: appHref("/login"),
							className: "block",
							children: /* @__PURE__ */ jsx(Button, {
								variant: "ghost",
								size: "sm",
								className: "w-full justify-center text-zinc-300 hover:text-white",
								children: "Sign In"
							})
						}), /* @__PURE__ */ jsx("a", {
							href: appHref("/register"),
							className: "block",
							children: /* @__PURE__ */ jsx(Button, {
								size: "sm",
								className: "w-full justify-center",
								children: "Start Building"
							})
						})] })
					]
				})
			})]
		})
	});
}
//#endregion
//#region src/components/layout/Footer.tsx
var footerLinks = {
	Platform: [
		{
			label: "All Courses",
			href: "/courses"
		},
		{
			label: "Learning Paths",
			href: "/paths"
		},
		{
			label: "Community",
			href: "/community"
		},
		{
			label: "Pricing",
			href: "/pricing"
		},
		{
			label: "Dashboard",
			href: appHref("/dashboard")
		}
	],
	Resources: [
		{
			label: "Home",
			href: "/"
		},
		{
			label: "All Courses",
			href: "/courses"
		},
		{
			label: "Learning Paths",
			href: "/paths"
		},
		{
			label: "Community",
			href: "/community"
		},
		{
			label: "Pricing",
			href: "/pricing"
		}
	],
	Company: [
		{
			label: "Start Free",
			href: appHref("/register")
		},
		{
			label: "Sign In",
			href: appHref("/login")
		},
		{
			label: "Student Dashboard",
			href: appHref("/dashboard")
		},
		{
			label: "Community",
			href: "/community"
		},
		{
			label: "Contact",
			href: "/pricing"
		}
	]
};
var socialLinks = [
	{
		icon: XLogo,
		label: "X",
		href: "#"
	},
	{
		icon: LinkedinLogo,
		label: "LinkedIn",
		href: "#"
	},
	{
		icon: YoutubeLogo,
		label: "YouTube",
		href: "#"
	},
	{
		icon: GithubLogo,
		label: "GitHub",
		href: "#"
	}
];
function Footer() {
	return /* @__PURE__ */ jsxs("footer", {
		className: "border-t border-white/[0.06] bg-zinc-950",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "mx-auto max-w-7xl px-4 py-16",
				children: /* @__PURE__ */ jsxs("div", {
					className: "rounded-3xl bg-zinc-900 border border-white/[0.06] p-8 md:p-12 text-white relative overflow-hidden",
					children: [
						/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-grid-dark opacity-40" }),
						/* @__PURE__ */ jsx("div", { className: "absolute inset-0 glow-green opacity-30" }),
						/* @__PURE__ */ jsxs("div", {
							className: "relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6",
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
								className: "font-display text-2xl md:text-3xl font-bold mb-2",
								children: "Stay ahead of the curve"
							}), /* @__PURE__ */ jsx("p", {
								className: "text-zinc-400 text-sm md:text-base max-w-md",
								children: "Get weekly insights on trending skills, new courses, and practical engineering tips."
							})] }), /* @__PURE__ */ jsxs("div", {
								className: "flex gap-2 w-full md:w-auto items-end",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "floating-label md:w-64 w-full",
									children: [/* @__PURE__ */ jsx("input", {
										type: "email",
										placeholder: " ",
										className: "flex h-12 w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 text-sm text-white shadow-sm transition-[border-color,box-shadow] duration-150 placeholder:text-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500/30 focus-visible:border-accent-500/40"
									}), /* @__PURE__ */ jsx("label", { children: "Email address" })]
								}), /* @__PURE__ */ jsxs(Button, {
									className: "bg-accent-500 hover:bg-accent-600 text-white shrink-0 btn-shimmer h-12",
									children: ["Subscribe ", /* @__PURE__ */ jsx(ArrowRight, { size: 16 })]
								})]
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mx-auto max-w-7xl px-4 pb-12",
				children: /* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-2 md:grid-cols-5 gap-8",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "col-span-2",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2 mb-4",
								children: [/* @__PURE__ */ jsx(GraduationCap, {
									size: 24,
									weight: "fill",
									className: "text-accent-400"
								}), /* @__PURE__ */ jsx("span", {
									className: "font-display text-lg font-bold text-white",
									children: "Praxis"
								})]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-sm text-zinc-500 max-w-xs leading-relaxed mb-6",
								children: "Hands-on projects, code reviews, and structured mentorship that turn ambition into shipped software."
							}),
							/* @__PURE__ */ jsx("div", {
								className: "flex gap-3",
								children: socialLinks.map((social) => {
									const Icon = social.icon;
									return /* @__PURE__ */ jsx("a", {
										href: social.href,
										"aria-label": social.label,
										className: "h-9 w-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 hover:border-zinc-700 hover:text-white transition-[border-color,color] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)]",
										children: /* @__PURE__ */ jsx(Icon, { size: 18 })
									}, social.label);
								})
							})
						]
					}), Object.entries(footerLinks).map(([title, links]) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
						className: "font-display font-bold text-xs uppercase tracking-widest text-zinc-400 mb-4",
						children: title
					}), /* @__PURE__ */ jsx("ul", {
						className: "space-y-2.5",
						children: links.map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
							href: link.href,
							className: "text-sm text-zinc-500 hover:text-zinc-300 text-highlight-hover transition-colors duration-150",
							children: link.label
						}) }, link.href))
					})] }, title))]
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "border-t border-white/[0.06]",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4",
					children: [/* @__PURE__ */ jsxs("p", {
						className: "text-xs text-zinc-600",
						children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" Praxis Learning Inc. All rights reserved."
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "flex gap-6",
						children: [
							"Privacy Policy",
							"Terms of Service",
							"Cookie Settings"
						].map((item) => /* @__PURE__ */ jsx("a", {
							href: "#",
							className: "text-xs text-zinc-600 hover:text-zinc-400 transition-colors duration-150",
							children: item
						}, item))
					})]
				})
			})
		]
	});
}
//#endregion
//#region src/components/shared/CursorGlow.tsx
function CursorGlow() {
	const glowRef = useRef(null);
	useEffect(() => {
		function onMove(e) {
			const el = glowRef.current;
			if (!el) return;
			el.style.left = `${e.clientX}px`;
			el.style.top = `${e.clientY}px`;
			el.style.opacity = "1";
		}
		function onLeave() {
			const el = glowRef.current;
			if (!el) return;
			el.style.opacity = "0";
		}
		window.addEventListener("mousemove", onMove, { passive: true });
		document.addEventListener("mouseleave", onLeave);
		return () => {
			window.removeEventListener("mousemove", onMove);
			document.removeEventListener("mouseleave", onLeave);
		};
	}, []);
	return /* @__PURE__ */ jsx("div", {
		ref: glowRef,
		className: "pointer-events-none fixed z-[60] hidden md:block",
		style: {
			width: 600,
			height: 600,
			borderRadius: "50%",
			background: "radial-gradient(circle, rgba(56,165,113,0.04) 0%, transparent 70%)",
			transform: "translate(-50%, -50%)",
			opacity: 0,
			transition: "opacity 0.4s ease",
			willChange: "left, top"
		}
	});
}
//#endregion
//#region src/components/shared/ScrollProgress.tsx
function ScrollProgress() {
	const [progress, setProgress] = useState(0);
	useEffect(() => {
		function onScroll() {
			const scrollTop = window.scrollY;
			const docHeight = document.documentElement.scrollHeight - window.innerHeight;
			setProgress(docHeight > 0 ? scrollTop / docHeight * 100 : 0);
		}
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ jsx("div", {
		className: "fixed top-0 left-0 right-0 z-[70] h-[2px] pointer-events-none",
		children: /* @__PURE__ */ jsx("div", {
			className: "h-full bg-gradient-to-r from-accent-500 to-emerald-400",
			style: {
				width: `${progress}%`,
				transition: "width 0.1s linear",
				boxShadow: "0 0 8px rgba(56,165,113,0.4)"
			}
		})
	});
}
//#endregion
//#region src/components/shared/BackToTop.tsx
function BackToTop() {
	const [visible, setVisible] = useState(false);
	useEffect(() => {
		function onScroll() {
			setVisible(window.scrollY > 400);
		}
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ jsx("button", {
		onClick: () => window.scrollTo({
			top: 0,
			behavior: "smooth"
		}),
		className: "fixed bottom-6 right-6 z-50 h-10 w-10 rounded-xl glass-dark flex items-center justify-center text-zinc-400 hover:text-accent-400 hover:border-accent-500/30 transition-all duration-300 active:scale-[0.93]",
		style: {
			opacity: visible ? 1 : 0,
			transform: visible ? "translateY(0)" : "translateY(12px)",
			pointerEvents: visible ? "auto" : "none"
		},
		"aria-label": "Back to top",
		children: /* @__PURE__ */ jsx(ArrowUp, {
			size: 16,
			weight: "bold"
		})
	});
}
//#endregion
//#region src/components/shared/PageTransition.tsx
function PageTransition() {
	const [visible, setVisible] = useState(true);
	useEffect(() => {
		const timer = setTimeout(() => setVisible(false), 400);
		return () => clearTimeout(timer);
	}, []);
	if (!visible) return null;
	return /* @__PURE__ */ jsx("div", {
		className: "fixed inset-0 z-[200] bg-zinc-950 pointer-events-none",
		style: {
			opacity: 0,
			animation: "pageLoadFade 0.4s ease-out forwards"
		},
		children: /* @__PURE__ */ jsx("style", { children: `
        @keyframes pageLoadFade {
          0% { opacity: 1; }
          100% { opacity: 0; }
        }
      ` })
	});
}
//#endregion
//#region src/components/shared/CookieConsent.tsx
function CookieConsent() {
	const [show, setShow] = useState(false);
	useEffect(() => {
		if (!sessionStorage.getItem("cookie-consent")) {
			const timer = setTimeout(() => setShow(true), 2e3);
			return () => clearTimeout(timer);
		}
	}, []);
	function dismiss() {
		setShow(false);
		sessionStorage.setItem("cookie-consent", "1");
	}
	return /* @__PURE__ */ jsxs("div", {
		className: "fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-sm z-50 glass-dark rounded-2xl p-4 flex items-center gap-3 transition-all duration-500",
		style: {
			opacity: show ? 1 : 0,
			transform: show ? "translateY(0)" : "translateY(20px)",
			pointerEvents: show ? "auto" : "none"
		},
		children: [/* @__PURE__ */ jsx("p", {
			className: "text-xs text-zinc-400 flex-1 leading-relaxed",
			children: "We use cookies for analytics and to improve your experience."
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-2 shrink-0",
			children: [/* @__PURE__ */ jsx(Button, {
				size: "sm",
				onClick: dismiss,
				className: "text-xs h-7 px-3",
				children: "Accept"
			}), /* @__PURE__ */ jsx("button", {
				onClick: dismiss,
				className: "h-7 w-7 rounded-lg flex items-center justify-center text-zinc-500 hover:text-zinc-300 hover:bg-white/5 transition-colors",
				"aria-label": "Dismiss",
				children: /* @__PURE__ */ jsx(X, {
					size: 12,
					weight: "bold"
				})
			})]
		})]
	});
}
//#endregion
//#region src/components/shared/AnnouncementBar.tsx
function AnnouncementBar() {
	const [dismissed, setDismissed] = useState(false);
	if (dismissed) return null;
	return /* @__PURE__ */ jsx("div", {
		className: "relative z-[60] bg-zinc-900/80 backdrop-blur-xl border-b border-white/[0.04]",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-4 py-2 flex items-center justify-center gap-2",
			children: [
				/* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-accent-400 animate-pulse shrink-0" }),
				/* @__PURE__ */ jsxs("p", {
					className: "text-xs text-zinc-400",
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "text-accent-400 font-semibold",
							children: "New:"
						}),
						" ",
						"AI-powered code reviews now available"
					]
				}),
				/* @__PURE__ */ jsxs("a", {
					href: "/courses",
					className: "hidden sm:inline-flex items-center gap-1 text-xs font-medium text-zinc-300 hover:text-white transition-colors ml-1",
					children: ["Learn more ", /* @__PURE__ */ jsx(ArrowRight, { size: 10 })]
				}),
				/* @__PURE__ */ jsx("button", {
					onClick: () => setDismissed(true),
					className: "absolute right-3 p-1 text-zinc-600 hover:text-zinc-400 transition-colors",
					"aria-label": "Dismiss",
					children: /* @__PURE__ */ jsx(X, {
						size: 12,
						weight: "bold"
					})
				})
			]
		})
	});
}
//#endregion
//#region src/styles/app.css?url
var app_default = "/assets/app-BDwwgVq9.css";
//#endregion
//#region src/routes/__root.tsx
var Route$5 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Praxis — Build Real Skills Through Projects" },
			{
				name: "description",
				content: "Praxis teaches through hands-on projects, code reviews, and structured mentorship. 11,480 engineers have shipped production code within their first month."
			},
			{
				name: "theme-color",
				content: "#09090b"
			},
			{
				property: "og:title",
				content: "Praxis — Build Real Skills Through Projects"
			},
			{
				property: "og:description",
				content: "Hands-on projects, code reviews, and structured mentorship for working engineers."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:site_name",
				content: "Praxis"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: app_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Outfit:wght@300..900&family=JetBrains+Mono:wght@400;500&display=swap"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "EducationalOrganization",
				name: "Praxis",
				description: "Project-based learning platform for working engineers",
				url: "https://praxis.dev"
			})
		}]
	}),
	component: RootComponent
});
function RootComponent() {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", {
			className: "min-h-[100dvh] bg-zinc-950 text-zinc-100 font-body antialiased grain-overlay",
			children: [
				/* @__PURE__ */ jsx("noscript", { children: /* @__PURE__ */ jsx("style", { children: `
            [data-animate] { opacity: 1 !important; transform: none !important; }
            .js-only { display: none; }
          ` }) }),
				/* @__PURE__ */ jsxs(AuthProvider, { children: [
					/* @__PURE__ */ jsx(PageTransition, {}),
					/* @__PURE__ */ jsx(ScrollProgress, {}),
					/* @__PURE__ */ jsx(CursorGlow, {}),
					/* @__PURE__ */ jsx(AnnouncementBar, {}),
					/* @__PURE__ */ jsx(Header, {}),
					/* @__PURE__ */ jsx("main", { children: /* @__PURE__ */ jsx(Outlet, {}) }),
					/* @__PURE__ */ jsx(Footer, {}),
					/* @__PURE__ */ jsx(BackToTop, {}),
					/* @__PURE__ */ jsx(CookieConsent, {})
				] }),
				/* @__PURE__ */ jsx(Scripts, {})
			]
		})]
	});
}
//#endregion
//#region src/routes/pricing.tsx
var $$splitComponentImporter$4 = () => import("./pricing-64d6gb6Y.js");
var Route$4 = createFileRoute("/pricing")({
	head: () => ({ meta: [{ title: "Pricing — Start Free, Upgrade When Ready | Praxis" }, {
		name: "description",
		content: "Free tier with 3 courses per month. Pro at $29/mo for unlimited access, priority code reviews, and live mentorship."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
//#endregion
//#region src/routes/paths.tsx
var $$splitComponentImporter$3 = () => import("./paths-MhSitVY-.js");
var Route$3 = createFileRoute("/paths")({
	head: () => ({ meta: [{ title: "Learning Paths — Structured Sequences to Mastery | Praxis" }, {
		name: "description",
		content: "Curated multi-course paths from beginner to advanced. Full-Stack, ML, Design, Data Science, and DevOps tracks with milestones and mentorship."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
//#endregion
//#region src/routes/courses.tsx
var $$splitComponentImporter$2 = () => import("./courses-CSpEy0k2.js");
var Route$2 = createFileRoute("/courses")({
	head: () => ({ meta: [{ title: "Courses — Ship Production Code From Day One | Praxis" }, {
		name: "description",
		content: "217 project-based courses across web dev, design, ML/AI, data science, and DevOps. Every course ships a real artifact."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
//#endregion
//#region src/routes/community.tsx
var $$splitComponentImporter$1 = () => import("./community-CiTc3yUA.js");
var Route$1 = createFileRoute("/community")({
	head: () => ({ meta: [{ title: "Community — Engineers Who Ship Together | Praxis" }, {
		name: "description",
		content: "11,480+ engineers across 42 countries. Discord, study groups, weekly AMAs, and open-source projects. Join the Praxis builder community."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter = () => import("./routes-BpSXepfG.js");
var Route = createFileRoute("/")({
	head: () => ({ meta: [{ title: "Praxis — Build Real Skills Through Projects | Hands-On Engineering Courses" }, {
		name: "description",
		content: "Ship production code in your first month. 217 project-based courses in web dev, ML, data science, and design. Trusted by 11,480+ engineers."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
//#region src/routeTree.gen.ts
var PricingRoute = Route$4.update({
	id: "/pricing",
	path: "/pricing",
	getParentRoute: () => Route$5
});
var PathsRoute = Route$3.update({
	id: "/paths",
	path: "/paths",
	getParentRoute: () => Route$5
});
var CoursesRoute = Route$2.update({
	id: "/courses",
	path: "/courses",
	getParentRoute: () => Route$5
});
var CommunityRoute = Route$1.update({
	id: "/community",
	path: "/community",
	getParentRoute: () => Route$5
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$5
	}),
	CommunityRoute,
	CoursesRoute,
	PathsRoute,
	PricingRoute
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
function createRouter() {
	return createRouter$1({
		routeTree,
		scrollRestoration: true
	});
}
function getRouter() {
	return createRouter();
}
//#endregion
export { createRouter, getRouter };
