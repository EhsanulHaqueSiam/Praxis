import { createFileRoute, Link, useNavigate, useSearch } from "@tanstack/react-router";
import { Button, Input, useAuth } from "@lumina/ui";
import {
  GraduationCap,
  ArrowRight,
  Eye,
  EyeSlash,
  GithubLogo,
  GoogleLogo,
} from "@phosphor-icons/react";
import { useState } from "react";

export const Route = createFileRoute("/login")({
  validateSearch: (search: Record<string, unknown>) => ({
    redirect: (search.redirect as string) || "/dashboard",
  }),
  component: LoginPage,
});

const DEMO_USER = {
  name: "Kael Nakamura-Boyce",
  email: "kael@example.com",
  avatar: "https://picsum.photos/seed/kael/100/100",
};

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const { login, isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const { redirect } = useSearch({ from: "/login" });

  // If already logged in, redirect
  if (isLoggedIn) {
    navigate({ to: redirect as string });
    return null;
  }

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    login(DEMO_USER);
    // Use window.location for cross-app redirects
    if (redirect && !redirect.startsWith("/dashboard")) {
      window.location.href = `/app${redirect}`;
    } else {
      navigate({ to: "/dashboard" });
    }
  }

  function handleSocialLogin() {
    login(DEMO_USER);
    window.location.href = `/app${redirect}`;
  }

  return (
    <div className="min-h-[100dvh] flex">
      {/* Left - Brand Panel */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-zinc-950 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 30% 50%, rgba(56,165,113,0.06), transparent 70%)",
          }}
        />
        <div className="absolute inset-0 bg-grid-dark opacity-[0.08]" />

        <div className="absolute top-[15%] right-[15%] w-20 h-20 rounded-2xl border border-white/[0.04] backdrop-blur-sm animate-float" />
        <div
          className="absolute bottom-[25%] left-[10%] w-16 h-16 rounded-2xl border border-white/[0.04] backdrop-blur-sm animate-float"
          style={{ animationDelay: "2s", animationDuration: "7s" }}
        />
        <div
          className="absolute top-[55%] right-[25%] w-12 h-12 rounded-xl border border-white/[0.04] backdrop-blur-sm animate-float"
          style={{ animationDelay: "4s", animationDuration: "6s" }}
        />

        <div className="relative z-10 flex flex-col justify-between p-12 w-full">
          <a href="/" className="flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-white" weight="duotone" />
            <span className="font-display text-xl font-bold text-white">
              Praxis
            </span>
          </a>

          <div className="max-w-md">
            <h1 className="font-display text-4xl font-extrabold leading-tight mb-4 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              Pick up where you left off
            </h1>
            <p className="text-zinc-500 leading-relaxed">
              Your courses, progress, and certificates are exactly where you
              left them.
            </p>

            <div className="flex gap-8 mt-10">
              {[
                { value: "217", label: "Courses" },
                { value: "11,480+", label: "Builders" },
                { value: "91.3%", label: "Completion" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-zinc-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-zinc-900/50 border border-white/[0.06] rounded-2xl p-6 backdrop-blur-xl">
            <p className="text-sm text-zinc-400 leading-relaxed mb-4">
              &ldquo;Praxis gave me the structure I never had teaching myself. I went
              from writing spaghetti code to shipping production services in
              under four months.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <img
                src="https://picsum.photos/seed/delphine/80/80"
                alt="Delphine Ayari"
                className="h-8 w-8 rounded-full object-cover"
              />
              <div>
                <div className="text-sm font-semibold text-zinc-300">
                  Delphine Ayari
                </div>
                <div className="text-xs text-zinc-600">
                  Staff Eng at Datadog
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right - Login Form */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-12 bg-zinc-950">
        <div className="w-full max-w-sm">
          <div className="lg:hidden flex items-center gap-2 mb-10">
            <a href="/" className="flex items-center gap-2">
              <GraduationCap className="h-7 w-7 text-accent-500" weight="duotone" />
              <span className="font-display text-lg font-bold text-white">
                Praxis
              </span>
            </a>
          </div>

          <h2 className="font-display text-2xl font-bold text-white mb-2">
            Welcome back
          </h2>
          <p className="text-sm text-zinc-600 mb-8">
            Sign in to your workspace
          </p>

          {/* Social Buttons */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button
              onClick={handleSocialLogin}
              className="flex items-center justify-center gap-2 h-11 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 text-sm font-medium transition-[background-color,border-color,transform] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-zinc-700 hover:bg-zinc-800 active:scale-[0.97]"
            >
              <GoogleLogo className="h-4 w-4" weight="bold" />
              Google
            </button>
            <button
              onClick={handleSocialLogin}
              className="flex items-center justify-center gap-2 h-11 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 text-sm font-medium transition-[background-color,border-color,transform] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-zinc-700 hover:bg-zinc-800 active:scale-[0.97]"
            >
              <GithubLogo className="h-4 w-4" weight="bold" />
              GitHub
            </button>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-zinc-800/50" />
            <span className="text-xs text-zinc-600 uppercase tracking-wider">
              or continue with email
            </span>
            <div className="flex-1 h-px bg-zinc-800/50" />
          </div>

          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-medium text-zinc-500 mb-1.5">
                Email
              </label>
              <Input
                type="email"
                placeholder="you@example.com"
                defaultValue="kael@example.com"
                className="bg-zinc-900 border-zinc-800 text-zinc-100 placeholder:text-zinc-700 focus-visible:ring-2 focus-visible:ring-accent-500/20 focus-visible:border-accent-500/40"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-sm font-medium text-zinc-500">
                  Password
                </label>
                <a
                  href="#"
                  className="text-xs text-accent-400 hover:text-accent-300 transition-colors"
                >
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  defaultValue="demo123"
                  className="bg-zinc-900 border-zinc-800 text-zinc-100 placeholder:text-zinc-700 pr-10 focus-visible:ring-2 focus-visible:ring-accent-500/20 focus-visible:border-accent-500/40"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-600 hover:text-zinc-400 transition-colors"
                >
                  {showPassword ? (
                    <EyeSlash className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="remember"
                defaultChecked
                className="h-4 w-4 rounded border-zinc-700 bg-zinc-900 accent-accent-500 focus:ring-accent-500/30"
              />
              <label htmlFor="remember" className="text-sm text-zinc-500">
                Keep me signed in
              </label>
            </div>

            <Button type="submit" className="w-full btn-shimmer" size="lg">
              Sign In
              <ArrowRight className="h-4 w-4" />
            </Button>
          </form>

          <p className="text-center text-sm text-zinc-600 mt-6">
            Don&apos;t have an account?{" "}
            <Link
              to="/register"
              className="text-accent-400 hover:text-accent-300 font-medium transition-colors"
            >
              Create one free
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
