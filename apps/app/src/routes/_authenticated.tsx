import {
  createFileRoute,
  Outlet,
  Link,
  Navigate,
  useLocation,
  useNavigate,
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
  ArrowSquareOut,
} from "@phosphor-icons/react";
import { Avatar, useAuth } from "@lumina/ui";
import { useEffect } from "react";

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
  const navigate = useNavigate();
  const { user, isLoggedIn, logout } = useAuth();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate({
        to: "/login",
        search: { redirect: location.pathname },
      });
    }
  }, [isLoggedIn, navigate, location.pathname]);

  if (!isLoggedIn) return null;
  if (location.pathname === "/") {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="flex min-h-[100dvh]">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 flex-col bg-zinc-950 border-r border-white/[0.06]">
        {/* Logo — links back to marketing site */}
        <div className="p-6">
          <a
            href="/"
            className="flex items-center gap-2 group"
          >
            <GraduationCap
              className="h-7 w-7 text-accent-400 transition-transform duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110"
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
                className={
                  isActive
                    ? "text-white bg-white/[0.06] rounded-lg px-3 py-2 flex items-center gap-3 text-sm font-medium"
                    : "text-zinc-500 hover:text-zinc-300 hover:bg-white/[0.04] rounded-lg px-3 py-2 flex items-center gap-3 text-sm transition-all duration-150"
                }
              >
                <Icon className="h-5 w-5 shrink-0" weight="duotone" />
                {link.label}
              </Link>
            );
          })}

          {/* Browse courses — links to marketing site */}
          <a
            href="/courses"
            className="text-zinc-600 hover:text-zinc-400 hover:bg-white/[0.04] rounded-lg px-3 py-2 flex items-center gap-3 text-sm transition-all duration-150 mt-4 border-t border-white/[0.04] pt-4"
          >
            <ArrowSquareOut className="h-5 w-5 shrink-0" weight="duotone" />
            Browse Courses
          </a>
        </nav>

        {/* User */}
        <div className="p-4 border-t border-white/[0.06]">
          <div className="flex items-center gap-3 px-2">
            <Avatar
              src={user?.avatar || "https://picsum.photos/seed/kael/100/100"}
              alt={user?.name || "User"}
              fallback={user?.name?.charAt(0) || "U"}
              size="sm"
            />
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-zinc-200 truncate">
                {user?.name || "User"}
              </div>
              <div className="text-xs text-zinc-600 truncate">
                {user?.email || "user@example.com"}
              </div>
            </div>
            <button
              onClick={() => {
                logout();
                window.location.href = "/";
              }}
              className="text-zinc-600 hover:text-zinc-400 transition-colors duration-150"
              title="Sign out"
            >
              <SignOut className="h-4 w-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="h-14 border-b border-white/[0.06] flex items-center justify-between px-6 bg-zinc-950">
          <div className="flex items-center gap-4 flex-1 max-w-md">
            <MagnifyingGlass className="h-4 w-4 text-zinc-500" />
            <input
              type="text"
              placeholder="Search courses, topics, instructors..."
              className="flex-1 bg-transparent text-sm text-zinc-400 placeholder:text-zinc-700 outline-none"
            />
            <span className="kbd hidden sm:inline-flex">&#8984;K</span>
          </div>

          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-xl text-zinc-500 hover:text-zinc-300 hover:bg-white/[0.04] transition-[color,background-color] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97]">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-accent-500" />
            </button>
            <div className="md:hidden">
              <Avatar
                src={user?.avatar || "https://picsum.photos/seed/kael/100/100"}
                alt={user?.name || "User"}
                fallback={user?.name?.charAt(0) || "U"}
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
