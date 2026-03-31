import { Button, Badge } from "@lumina/ui";
import { CheckCircle, Minus } from "@phosphor-icons/react";
import { TiltCard } from "~/components/shared/TiltCard";
import { AnimateOnScroll } from "~/components/shared/AnimateOnScroll";
import { appHref } from "~/lib/urls";

const freeFeatures = [
  { label: "3 courses per month", included: true },
  { label: "Community access", included: true },
  { label: "Basic certificates", included: true },
  { label: "Email support", included: true },
  { label: "Priority code reviews", included: false },
  { label: "Live mentorship", included: false },
  { label: "Team features", included: false },
  { label: "Priority support", included: false },
];

const proFeatures = [
  { label: "Unlimited courses", included: true },
  { label: "Priority code reviews", included: true },
  { label: "Premium certificates", included: true },
  { label: "Live mentorship", included: true },
  { label: "Team features", included: true },
  { label: "Priority support", included: true },
  { label: "Community access", included: true },
  { label: "Offline downloads", included: true },
];

export function PricingCards() {
  return (
    <section className="bg-zinc-950 pb-24 relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          {/* Free Card */}
          <AnimateOnScroll delay={0}>
          <div className="rounded-3xl border border-white/[0.06] bg-zinc-900 p-8 card-highlight">
            <div className="mb-6">
              <h3 className="font-display text-xl font-bold text-white mb-1">
                Free
              </h3>
              <p className="text-sm text-zinc-500">
                For exploring the platform
              </p>
            </div>
            <div className="mb-8">
              <span className="font-mono text-5xl font-bold text-white">
                $0
              </span>
              <span className="text-sm text-zinc-500 ml-2">forever</span>
            </div>
            <ul className="space-y-3 mb-8">
              {freeFeatures.map((feature) => (
                <li key={feature.label} className="flex items-center gap-3">
                  {feature.included ? (
                    <CheckCircle
                      size={18}
                      weight="fill"
                      className="text-accent-400 shrink-0"
                    />
                  ) : (
                    <Minus size={18} className="text-zinc-700 shrink-0" />
                  )}
                  <span
                    className={`text-sm ${
                      feature.included ? "text-zinc-300" : "text-zinc-600"
                    }`}
                  >
                    {feature.label}
                  </span>
                </li>
              ))}
            </ul>
            <a href={appHref("/register")}>
              <Button
                variant="outline"
                className="w-full border-zinc-700 text-zinc-300 hover:bg-zinc-800 active:scale-[0.97] transition-all duration-150"
              >
                Start free
              </Button>
            </a>
          </div>
          </AnimateOnScroll>

          {/* Pro Card */}
          <AnimateOnScroll delay={150}>
          <TiltCard intensity={4} className="rounded-3xl bg-zinc-900 p-8 relative gradient-border shadow-[0_0_30px_rgba(56,165,113,0.08)] card-highlight">
            <Badge className="absolute top-4 right-4 bg-accent-500/10 text-accent-400 border border-accent-500/20">
              Most popular
            </Badge>
            <div className="mb-6">
              <h3 className="font-display text-xl font-bold text-white mb-1">
                Pro
              </h3>
              <p className="text-sm text-zinc-500">
                For serious builders
              </p>
            </div>
            <div className="mb-8">
              <span className="font-mono text-5xl font-bold text-white">
                $29
              </span>
              <span className="text-sm text-zinc-500 ml-2">/mo</span>
            </div>
            <ul className="space-y-3 mb-8">
              {proFeatures.map((feature) => (
                <li key={feature.label} className="flex items-center gap-3">
                  <CheckCircle
                    size={18}
                    weight="fill"
                    className="text-accent-400 shrink-0"
                  />
                  <span className="text-sm text-zinc-300">
                    {feature.label}
                  </span>
                </li>
              ))}
            </ul>
            <a href={appHref("/register?plan=pro")}>
              <Button className="w-full btn-shimmer bg-white text-zinc-900 hover:bg-zinc-200 active:scale-[0.97] transition-all duration-150">
                Start building
              </Button>
            </a>
          </TiltCard>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
