import { createFileRoute, Link } from "@tanstack/react-router";
import { Button, Input } from "@lumina/ui";
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
  component: LoginPage,
});

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-[100dvh] flex">
      {/* Left - Brand Panel */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-950 overflow-hidden">
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid-dark opacity-30" />

        {/* Floating decorative elements */}
        <div className="absolute top-[15%] right-[15%] w-20 h-20 rounded-2xl bg-zinc-700/20 border border-zinc-600/20 backdrop-blur-sm animate-float" />
        <div
          className="absolute bottom-[25%] left-[10%] w-16 h-16 rounded-2xl bg-accent-600/10 border border-accent-500/20 backdrop-blur-sm animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-[55%] right-[25%] w-12 h-12 rounded-xl bg-zinc-600/15 border border-zinc-500/15 backdrop-blur-sm animate-float"
          style={{ animationDelay: "4s" }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between p-12 w-full">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-white" weight="duotone" />
            <span className="font-display text-xl font-bold text-white">
              Praxis
            </span>
          </div>

          {/* Hero text */}
          <div className="max-w-md">
            <h1 className="font-display text-4xl font-extrabold text-white leading-tight mb-4">
              Pick up where you left off
            </h1>
            <p className="text-zinc-400 leading-relaxed">
              Your courses, progress, and certificates are exactly where you
              left them.
            </p>

            {/* Stats */}
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
                  <div className="text-xs text-zinc-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-2xl p-6 backdrop-blur-sm">
            <p className="text-sm text-zinc-300 leading-relaxed mb-4">
              "Praxis gave me the structure I never had teaching myself. I went
              from writing spaghetti code to shipping production services in
              under four months."
            </p>
            <div className="flex items-center gap-3">
              <img
                src="https://picsum.photos/seed/delphine/80/80"
                alt="Delphine Ayari"
                className="h-8 w-8 rounded-full object-cover"
              />
              <div>
                <div className="text-sm font-semibold text-zinc-200">
                  Delphine Ayari
                </div>
                <div className="text-xs text-zinc-500">
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
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center gap-2 mb-10">
            <GraduationCap
              className="h-7 w-7 text-accent-500"
              weight="duotone"
            />
            <span className="font-display text-lg font-bold text-white">
              Praxis
            </span>
          </div>

          <h2 className="font-display text-2xl font-bold text-white mb-2">
            Welcome back
          </h2>
          <p className="text-sm text-zinc-500 mb-8">
            Sign in to your workspace
          </p>

          {/* Social Buttons */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button className="flex items-center justify-center gap-2 h-11 rounded-xl bg-zinc-800 border border-zinc-700 text-zinc-300 text-sm font-medium transition-[background-color,transform] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-zinc-700/80 active:scale-[0.97]">
              <GoogleLogo className="h-4 w-4" weight="bold" />
              Google
            </button>
            <button className="flex items-center justify-center gap-2 h-11 rounded-xl bg-zinc-800 border border-zinc-700 text-zinc-300 text-sm font-medium transition-[background-color,transform] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-zinc-700/80 active:scale-[0.97]">
              <GithubLogo className="h-4 w-4" weight="bold" />
              GitHub
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-zinc-800" />
            <span className="text-xs text-zinc-500 uppercase tracking-wider">
              or continue with email
            </span>
            <div className="flex-1 h-px bg-zinc-800" />
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-1.5">
                Email
              </label>
              <Input
                type="email"
                placeholder="you@example.com"
                className="bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-600"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-sm font-medium text-zinc-400">
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
                  className="bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-600 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition-colors"
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
                className="h-4 w-4 rounded border-zinc-700 bg-zinc-900 text-accent-600 focus:ring-accent-500/30"
              />
              <label htmlFor="remember" className="text-sm text-zinc-500">
                Keep me signed in
              </label>
            </div>

            <Button className="w-full bg-accent-600 hover:bg-accent-700" size="lg">
              Sign In
              <ArrowRight className="h-4 w-4" />
            </Button>
          </form>

          <p className="text-center text-sm text-zinc-500 mt-6">
            Don't have an account?{" "}
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
