import { Link } from "@tanstack/react-router";
import { Button, Avatar, useAuth } from "@lumina/ui";
import { GraduationCap, SquaresFour } from "@phosphor-icons/react";
import { useState } from "react";
import { useScrollProgress } from "~/hooks/useScrollProgress";
import { appHref } from "~/lib/urls";

const navLinks = [
  { label: "Courses", href: "/courses" },
  { label: "Learning Paths", href: "/paths" },
  { label: "Community", href: "/community" },
  { label: "Pricing", href: "/pricing" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrollY = useScrollProgress();
  const scrolled = scrollY > 20;
  const { user, isLoggedIn, logout } = useAuth();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4">
        <nav
          className="rounded-2xl px-6 py-3 flex items-center justify-between transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]"
          style={{
            background: scrolled
              ? "rgba(9, 9, 11, 0.8)"
              : "rgba(9, 9, 11, 0.5)",
            backdropFilter: `blur(${scrolled ? 24 : 12}px) saturate(1.4)`,
            WebkitBackdropFilter: `blur(${scrolled ? 24 : 12}px) saturate(1.4)`,
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: scrolled
              ? "rgba(255, 255, 255, 0.08)"
              : "rgba(255, 255, 255, 0.03)",
            boxShadow: scrolled
              ? "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.03)"
              : "none",
          }}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <GraduationCap
              size={28}
              weight="fill"
              className="text-accent-400 transition-transform duration-200 group-hover:scale-110"
            />
            <span className="font-display text-xl font-bold tracking-tight text-white">
              Praxis
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="nav-glow px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white rounded-xl transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions — changes based on auth */}
          <div className="hidden md:flex items-center gap-3">
            {isLoggedIn ? (
              <>
                <a href={appHref("/dashboard")}>
                  <Button
                    size="sm"
                    className="btn-shimmer active:scale-[0.97] transition-transform"
                  >
                    <SquaresFour size={14} weight="duotone" />
                    Dashboard
                  </Button>
                </a>
                <button
                  onClick={() => { logout(); window.location.reload(); }}
                  className="flex items-center"
                >
                  <Avatar
                    src={user?.avatar}
                    alt={user?.name}
                    fallback={user?.name?.charAt(0)}
                    size="sm"
                    className="cursor-pointer hover:ring-2 hover:ring-accent-500/30 transition-shadow"
                  />
                </button>
              </>
            ) : (
              <>
                <a href={appHref("/login")}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-zinc-400 hover:text-white hover:bg-white/5"
                  >
                    Sign In
                  </Button>
                </a>
                <a href={appHref("/register")}>
                  <Button
                    size="sm"
                    className="btn-shimmer active:scale-[0.97] transition-transform"
                  >
                    Start Building
                  </Button>
                </a>
              </>
            )}
          </div>

          {/* Mobile Toggle — animated hamburger morph */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-xl text-zinc-300 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            <div className={`hamburger ${mobileOpen ? "open" : ""}`}>
              <span />
              <span />
              <span />
            </div>
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden mt-2 glass-dark rounded-2xl p-4 shadow-diffuse-lg animate-fade-up">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="px-4 py-3 text-sm font-medium text-zinc-300 hover:text-white rounded-xl transition-colors hover:bg-white/5"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="h-px bg-zinc-800 my-2" />
              {isLoggedIn ? (
                <>
                  <a href={appHref("/dashboard")} className="block">
                    <Button size="sm" className="w-full justify-center">
                      <SquaresFour size={14} weight="duotone" />
                      Dashboard
                    </Button>
                  </a>
                  <button
                    onClick={() => { logout(); window.location.reload(); }}
                    className="px-4 py-3 text-sm font-medium text-zinc-500 hover:text-zinc-300 rounded-xl transition-colors hover:bg-white/5 text-left"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <a href={appHref("/login")} className="block">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full justify-center text-zinc-300 hover:text-white"
                    >
                      Sign In
                    </Button>
                  </a>
                  <a href={appHref("/register")} className="block">
                    <Button size="sm" className="w-full justify-center">
                      Start Building
                    </Button>
                  </a>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
