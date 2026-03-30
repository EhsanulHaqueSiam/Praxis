import { Badge } from "@lumina/ui";
import {
  MagnifyingGlass,
  CodeBlock,
  Certificate,
} from "@phosphor-icons/react";

const steps = [
  {
    number: "01",
    icon: MagnifyingGlass,
    title: "Pick a project that matters to you",
    description:
      "Browse 217 courses organized by stack, difficulty, and outcome. Each one maps to a concrete artifact you will ship by the end.",
  },
  {
    number: "02",
    icon: CodeBlock,
    title: "Build with structured feedback",
    description:
      "Work through interactive modules, submit pull requests, and receive code reviews from engineers at companies like Vercel and Datadog.",
  },
  {
    number: "03",
    icon: Certificate,
    title: "Ship and earn recognition",
    description:
      "Deploy your capstone, collect a verified certificate, and add the project to your portfolio. 91.3% of graduates report career advancement within six months.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-crosshatch" />
      <div className="absolute inset-0 bg-glow-br opacity-40" />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        {/* LEFT-ALIGNED header */}
        <div className="mb-16 max-w-2xl">
          <Badge variant="outline" className="mb-4">
            How it works
          </Badge>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-zinc-900">
            Three steps to shipped software
          </h2>
          <p className="text-base text-zinc-500">
            A structured path from first commit to production deployment.
          </p>
        </div>

        {/* Editorial number layout -- asymmetric 2-col grid */}
        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-px bg-zinc-200/60 rounded-3xl overflow-hidden">
          {/* First step -- large left column, spans 2 rows */}
          <div className="md:row-span-2 bg-white p-8 md:p-10 relative">
            <span className="absolute top-4 right-6 font-mono text-[80px] leading-none font-bold text-zinc-100 select-none pointer-events-none">
              {steps[0].number}
            </span>
            <div className="relative z-10">
              <div className="h-12 w-12 rounded-xl bg-accent-50 flex items-center justify-center mb-5">
                <MagnifyingGlass
                  size={24}
                  weight="duotone"
                  className="text-accent-600"
                />
              </div>
              <h3 className="font-display text-2xl font-bold text-zinc-900 mb-3">
                {steps[0].title}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed max-w-md">
                {steps[0].description}
              </p>
            </div>
          </div>

          {/* Step 2 -- right column, top */}
          <div className="bg-white p-8 md:p-10 relative">
            <span className="absolute top-4 right-6 font-mono text-[80px] leading-none font-bold text-zinc-100 select-none pointer-events-none">
              {steps[1].number}
            </span>
            <div className="relative z-10">
              <div className="h-12 w-12 rounded-xl bg-zinc-100 flex items-center justify-center mb-5">
                <CodeBlock
                  size={24}
                  weight="duotone"
                  className="text-zinc-700"
                />
              </div>
              <h3 className="font-display text-xl font-bold text-zinc-900 mb-3">
                {steps[1].title}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                {steps[1].description}
              </p>
            </div>
          </div>

          {/* Step 3 -- right column, bottom */}
          <div className="bg-white p-8 md:p-10 relative">
            <span className="absolute top-4 right-6 font-mono text-[80px] leading-none font-bold text-zinc-100 select-none pointer-events-none">
              {steps[2].number}
            </span>
            <div className="relative z-10">
              <div className="h-12 w-12 rounded-xl bg-accent-50 flex items-center justify-center mb-5">
                <Certificate
                  size={24}
                  weight="duotone"
                  className="text-accent-600"
                />
              </div>
              <h3 className="font-display text-xl font-bold text-zinc-900 mb-3">
                {steps[2].title}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                {steps[2].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
