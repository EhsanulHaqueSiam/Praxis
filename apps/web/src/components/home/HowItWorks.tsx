import { Badge } from "@lumina/ui";
import {
  MagnifyingGlass,
  CodeBlock,
  Certificate,
} from "@phosphor-icons/react";
import { AnimateOnScroll } from "~/components/shared/AnimateOnScroll";
import { useBlurReveal } from "~/hooks/useBlurReveal";

const steps = [
  {
    number: "01",
    icon: MagnifyingGlass,
    title: "Pick a project that matters to you",
    description:
      "Browse 217 courses organized by stack, difficulty, and outcome. Each one maps to a concrete artifact you will ship by the end.",
    iconBg: "bg-accent-500/10",
    iconColor: "text-accent-400",
  },
  {
    number: "02",
    icon: CodeBlock,
    title: "Build with structured feedback",
    description:
      "Work through interactive modules, submit pull requests, and receive code reviews from engineers at companies like Vercel and Datadog.",
    iconBg: "bg-zinc-800",
    iconColor: "text-zinc-400",
  },
  {
    number: "03",
    icon: Certificate,
    title: "Ship and earn recognition",
    description:
      "Deploy your capstone, collect a verified certificate, and add the project to your portfolio. 91.3% of graduates report career advancement within six months.",
    iconBg: "bg-accent-500/10",
    iconColor: "text-accent-400",
  },
];

function BlurSharpHeading({ children }: { children: React.ReactNode }) {
  const { ref, revealed } = useBlurReveal(0.3);

  return (
    <h2
      ref={ref as React.Ref<HTMLHeadingElement>}
      className={`font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-zinc-100 blur-sharp ${revealed ? "sharp" : ""}`}
    >
      {children}
    </h2>
  );
}

export function HowItWorks() {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-glow-br opacity-40" />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        {/* Header */}
        <AnimateOnScroll className="mb-16 max-w-2xl">
          <Badge className="mb-4 bg-zinc-800 border border-zinc-700 text-zinc-400">
            How it works
          </Badge>
          <BlurSharpHeading>
            Three steps to shipped software
          </BlurSharpHeading>
          <p className="text-base text-zinc-400">
            A structured path from first commit to production deployment.
          </p>
        </AnimateOnScroll>

        {/* Sticky stacked cards on mobile, grid on desktop */}
        <div className="hidden md:block">
          <AnimateOnScroll delay={150}>
            <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-px bg-white/[0.06] rounded-3xl overflow-hidden">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.number}
                    className={`bg-zinc-900 p-8 md:p-10 relative ${i === 0 ? "md:row-span-2" : ""}`}
                  >
                    <span className="absolute top-4 right-6 font-mono text-[80px] leading-none font-bold text-zinc-800 select-none pointer-events-none">
                      {step.number}
                    </span>
                    <div className="relative z-10">
                      <div className={`h-12 w-12 rounded-xl ${step.iconBg} flex items-center justify-center mb-5`}>
                        <Icon size={24} weight="duotone" className={step.iconColor} />
                      </div>
                      <h3 className={`font-display font-bold text-white mb-3 ${i === 0 ? "text-2xl" : "text-xl"}`}>
                        {step.title}
                      </h3>
                      <p className="text-sm text-zinc-400 leading-relaxed max-w-md">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </AnimateOnScroll>
        </div>

        {/* Mobile: sticky stacked cards */}
        <div className="md:hidden space-y-0">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="sticky-card rounded-2xl bg-zinc-900 border border-white/[0.06] p-6 mb-4 card-highlight"
                style={{ ["--sticky-top" as string]: `${90 + i * 20}px`, zIndex: i + 1 }}
              >
                <span className="absolute top-3 right-4 font-mono text-[48px] leading-none font-bold text-zinc-800 select-none pointer-events-none">
                  {step.number}
                </span>
                <div className="relative z-10">
                  <div className={`h-10 w-10 rounded-xl ${step.iconBg} flex items-center justify-center mb-4`}>
                    <Icon size={20} weight="duotone" className={step.iconColor} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
