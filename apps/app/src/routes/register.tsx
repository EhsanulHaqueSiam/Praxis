import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Button, Input, useAuth } from "@lumina/ui";
import {
  GraduationCap,
  ArrowRight,
  Eye,
  EyeSlash,
  GithubLogo,
  GoogleLogo,
  CheckCircle,
} from "@phosphor-icons/react";
import { useState } from "react";
import { marketingHref } from "../lib/urls";

export const Route = createFileRoute("/register")({
  component: RegisterPage,
});

function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    login({
      name: "New User",
      email: "user@example.com",
      avatar: "https://picsum.photos/seed/newuser/100/100",
    });
    navigate({ to: "/dashboard" });
  }

  function handleSocialRegister() {
    login({
      name: "New User",
      email: "user@example.com",
      avatar: "https://picsum.photos/seed/newuser/100/100",
    });
    navigate({ to: "/dashboard" });
  }

  const benefits = [
    "217 expert-led courses across engineering and design",
    "Hands-on projects reviewed by working professionals",
    "Industry-recognized certificates on completion",
    "Private community of 11,480+ builders",
    "Personal progress tracking and streaks",
  ];

  const avatarSeeds = ["ren", "nyla", "juno", "dex"];

  return (
    <div className="min-h-[100dvh] flex">
      {/* Left - Brand Panel */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-zinc-950 overflow-hidden">
        {/* Radial glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 30% 50%, rgba(56,165,113,0.06), transparent 70%)",
          }}
        />

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid-dark opacity-[0.08]" />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between p-12 w-full">
          {/* Logo */}
          <a href={marketingHref("/")} className="flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-white" weight="duotone" />
            <span className="font-display text-xl font-bold text-white">
              Praxis
            </span>
          </a>

          {/* Hero */}
          <div className="max-w-md">
            <h1 className="font-display text-4xl font-extrabold leading-tight mb-4 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              Start building today
            </h1>
            <p className="text-zinc-500 leading-relaxed mb-10">
              Join a community of engineers and designers who learn by shipping
              real projects.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle
                    className="h-5 w-5 text-accent-400 shrink-0"
                    weight="fill"
                  />
                  <span className="text-sm text-zinc-400">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Joined stats */}
          <div className="flex items-center gap-6">
            <div className="flex -space-x-2">
              {avatarSeeds.map((seed) => (
                <img
                  key={seed}
                  src={`https://picsum.photos/seed/${seed}/100/100`}
                  alt=""
                  className="h-8 w-8 rounded-full border-2 border-zinc-950 object-cover"
                />
              ))}
            </div>
            <span className="text-sm text-zinc-600">
              <strong className="text-white">312</strong> joined this week
            </span>
          </div>
        </div>
      </div>

      {/* Right - Register Form */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-12 bg-zinc-950">
        <div className="w-full max-w-sm">
          {/* Mobile Logo */}
          <a href={marketingHref("/")} className="lg:hidden flex items-center gap-2 mb-10">
            <GraduationCap
              className="h-7 w-7 text-accent-500"
              weight="duotone"
            />
            <span className="font-display text-lg font-bold text-white">
              Praxis
            </span>
          </a>

          <h2 className="font-display text-2xl font-bold text-white mb-2">
            Create your account
          </h2>
          <p className="text-sm text-zinc-600 mb-8">
            Start with any course, cancel anytime
          </p>

          {/* Social Buttons */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button onClick={handleSocialRegister} type="button" className="flex items-center justify-center gap-2 h-11 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 text-sm font-medium transition-[background-color,border-color,transform] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-zinc-700 hover:bg-zinc-800 active:scale-[0.97]">
              <GoogleLogo className="h-4 w-4" weight="bold" />
              Google
            </button>
            <button onClick={handleSocialRegister} type="button" className="flex items-center justify-center gap-2 h-11 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 text-sm font-medium transition-[background-color,border-color,transform] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-zinc-700 hover:bg-zinc-800 active:scale-[0.97]">
              <GithubLogo className="h-4 w-4" weight="bold" />
              GitHub
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-zinc-800/50" />
            <span className="text-xs text-zinc-600 uppercase tracking-wider">
              or continue with email
            </span>
            <div className="flex-1 h-px bg-zinc-800/50" />
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleRegister}>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-zinc-500 mb-1.5">
                  First name
                </label>
                <Input
                  placeholder="Kael"
                  className="bg-zinc-900 border-zinc-800 text-zinc-100 placeholder:text-zinc-700 focus-visible:ring-2 focus-visible:ring-accent-500/20 focus-visible:border-accent-500/40"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-500 mb-1.5">
                  Last name
                </label>
                <Input
                  placeholder="Nakamura-Boyce"
                  className="bg-zinc-900 border-zinc-800 text-zinc-100 placeholder:text-zinc-700 focus-visible:ring-2 focus-visible:ring-accent-500/20 focus-visible:border-accent-500/40"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-500 mb-1.5">
                Email
              </label>
              <Input
                type="email"
                placeholder="you@example.com"
                className="bg-zinc-900 border-zinc-800 text-zinc-100 placeholder:text-zinc-700 focus-visible:ring-2 focus-visible:ring-accent-500/20 focus-visible:border-accent-500/40"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-500 mb-1.5">
                Password
              </label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Min 8 characters"
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

            <Button className="w-full" size="lg">
              Create Account
              <ArrowRight className="h-4 w-4" />
            </Button>
          </form>

          <p className="text-center text-xs text-zinc-600 mt-4">
            By creating an account, you agree to our{" "}
            <a href="#" className="text-zinc-500 hover:text-zinc-400">
              Terms
            </a>{" "}
            and{" "}
            <a href="#" className="text-zinc-500 hover:text-zinc-400">
              Privacy Policy
            </a>
          </p>

          <p className="text-center text-sm text-zinc-600 mt-6">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-accent-400 hover:text-accent-300 font-medium transition-colors"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
