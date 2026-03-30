import {
  createFileRoute,
  Outlet,
  Link,
  useLocation,
} from "@tanstack/react-router";
import {
  GraduationCap,
  House,
  BookOpen,
  Trophy,
  Users,
  GearSix,
  SignOut,
  Bell,
  MagnifyingGlass,
} from "@phosphor-icons/react";
import { Avatar } from "@lumina/ui";

export const Route = createFileRoute("/_authenticated")({
  component: AuthenticatedLayout,
});

const sidebarLinks = [
  { icon: House, label: "Dashboard", href: "/dashboard" },
  { icon: BookOpen, label: "My Courses", href: "/courses" },
  { icon: Trophy, label: "Achievements", href: "/achievements" },
  { icon: Users, label: "Community", href: "/community" },
  { icon: GearSix, label: "Settings", href: "/settings" },
];

function AuthenticatedLayout() {
  const location = useLocation();

  return (
    <div className="flex min-h-[100dvh]">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 flex-col bg-zinc-900 border-r border-zinc-800">
        {/* Logo */}
        <div className="p-6">
          <a
            href="https://www.praxis.dev"
            className="flex items-center gap-2 group"
          >
            <GraduationCap
              className="h-7 w-7 text-accent-500 transition-transform group-hover:scale-110"
              weight="duotone"
            />
            <span className="font-display text-lg font-bold text-white">
              Praxis
            </span>
          </a>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 space-y-1">
          {sidebarLinks.map((link) => {
            const Icon = link.icon;
            const isActive =
              location.pathname === link.href ||
              location.pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`sidebar-link ${
                  isActive ? "sidebar-link-active" : "sidebar-link-inactive"
                }`}
              >
                <Icon className="h-5 w-5 shrink-0" weight="duotone" />
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* User */}
        <div className="p-4 border-t border-zinc-800">
          <div className="flex items-center gap-3 px-2">
            <Avatar
              src="https://picsum.photos/seed/kael/100/100"
              alt="Kael Nakamura-Boyce"
              fallback="KN"
              size="sm"
            />
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-white truncate">
                Kael Nakamura-Boyce
              </div>
              <div className="text-xs text-zinc-500 truncate">
                kael@example.com
              </div>
            </div>
            <button className="text-zinc-500 hover:text-zinc-300 transition-colors">
              <SignOut className="h-4 w-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="h-14 border-b border-zinc-800 flex items-center justify-between px-6 bg-zinc-950/80 backdrop-blur-xl">
          <div className="flex items-center gap-4 flex-1 max-w-md">
            <MagnifyingGlass className="h-4 w-4 text-zinc-500" />
            <input
              type="text"
              placeholder="Search courses, topics, instructors..."
              className="flex-1 bg-transparent text-sm text-white placeholder:text-zinc-600 outline-none"
            />
          </div>

          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-xl text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50 transition-[color,background-color] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97]">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-accent-500" />
            </button>
            <div className="md:hidden">
              <Avatar
                src="https://picsum.photos/seed/kael/100/100"
                alt="Kael Nakamura-Boyce"
                fallback="KN"
                size="sm"
              />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-zinc-950">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
