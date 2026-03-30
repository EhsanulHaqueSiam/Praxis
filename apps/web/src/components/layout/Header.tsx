import { Link } from "@tanstack/react-router";
import { Button } from "@lumina/ui";
import { GraduationCap, List, X as XIcon } from "@phosphor-icons/react";
import { useState } from "react";

const navLinks = [
  { label: "Courses", href: "/courses" },
  { label: "Learning Paths", href: "/paths" },
  { label: "Community", href: "/community" },
  { label: "Pricing", href: "/pricing" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="border-b border-white/[0.06] bg-zinc-950/70 backdrop-blur-2xl">
        <div className="mx-auto max-w-7xl px-4 flex items-center justify-between h-14">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <GraduationCap
              size={24}
              weight="fill"
              className="text-accent-400 transition-transform duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110"
            />
            <span className="font-display text-lg font-bold tracking-tight text-white">
              Praxis
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="px-3 py-1.5 text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-150 ease-[cubic-bezier(0.23,1,0.32,1)]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a href="https://app.praxis.dev/login">
              <Button
                variant="ghost"
                size="sm"
                className="text-zinc-400 hover:text-white hover:bg-transparent"
              >
                Sign In
              </Button>
            </a>
            <a href="https://app.praxis.dev/register">
              <Button
                size="sm"
                className="bg-white text-zinc-900 hover:bg-zinc-200 rounded-lg text-sm font-medium shadow-none"
              >
                Start Building
              </Button>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors duration-150 ease-[cubic-bezier(0.23,1,0.32,1)]"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <XIcon size={20} weight="bold" />
            ) : (
              <List size={20} weight="bold" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-b border-white/[0.06] bg-zinc-950/90 backdrop-blur-2xl">
          <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="px-3 py-2.5 text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-150 ease-[cubic-bezier(0.23,1,0.32,1)]"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="h-px bg-white/[0.06] my-2" />
            <a href="https://app.praxis.dev/login" className="block">
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-center text-zinc-400 hover:text-white hover:bg-transparent"
              >
                Sign In
              </Button>
            </a>
            <a href="https://app.praxis.dev/register" className="block">
              <Button
                size="sm"
                className="w-full justify-center bg-white text-zinc-900 hover:bg-zinc-200 rounded-lg text-sm font-medium shadow-none"
              >
                Start Building
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
