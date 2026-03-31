import { useState, useEffect } from "react";
import { Badge, Avatar } from "@lumina/ui";
import { Star, Quotes } from "@phosphor-icons/react";
import { AnimateOnScroll } from "~/components/shared/AnimateOnScroll";

const testimonials = [
  {
    name: "Delphine Ayari",
    role: "Staff Eng at Datadog",
    seed: "delphine-ayari",
    content:
      "The code review process alone is worth the enrollment. I rewrote a service at work using patterns I picked up in the full-stack track and our p99 latency dropped 38%.",
    rating: 5,
    course: "Full-Stack Web Dev",
  },
  {
    name: "Tomoko Westergaard",
    role: "Sr. Designer at Figma",
    seed: "tomoko-westergaard",
    content:
      "The design practicum pushed me past surface-level mockups into systems thinking. Every module forced a portfolio deliverable that I still reference in interviews.",
    rating: 5,
    course: "Product Design",
  },
  {
    name: "Kael Nakamura-Boyce",
    role: "ML Lead at Anthropic",
    seed: "kael-nakamura",
    content:
      "From sklearn basics to deploying an inference endpoint in production. The structured path meant I never hit a dead end, and the capstone dataset was genuinely messy. I deployed a model that handles 12k requests per day.",
    rating: 5,
    course: "Applied ML",
  },
  {
    name: "Idris Okonkwo-Petit",
    role: "Founding Eng at Vercel",
    seed: "idris-okonkwo",
    content:
      "We enrolled our entire six-person team. Within a quarter, our deployment frequency went from weekly to daily. The project-first approach removes the theory-practice gap.",
    rating: 5,
    course: "Full-Stack Web Dev",
  },
  {
    name: "Meera Johansson",
    role: "Data Eng at Spotify",
    seed: "meera-johansson",
    content:
      "The data science track uses real public datasets with all the messiness intact. No toy CSVs. I built three pipelines during the course that I later adapted at work.",
    rating: 5,
    course: "Data Science",
  },
];

export function Testimonials() {
  const [highlighted, setHighlighted] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlighted((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <AnimateOnScroll className="mb-12 max-w-2xl">
          <Badge className="mb-4 bg-zinc-800 border border-zinc-700 text-zinc-400">
            <Star size={14} weight="fill" className="text-accent-400" />
            From the community
          </Badge>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-zinc-100 mb-4">
            Engineers who shipped with Praxis
          </h2>
          <p className="text-zinc-400 text-sm">
            Hear from builders who turned course projects into production
            systems and career milestones.
          </p>
        </AnimateOnScroll>

        {/* Masonry columns layout */}
        <div className="masonry-grid">
          {testimonials.map((t, i) => (
            <AnimateOnScroll key={t.name} delay={i * 80}>
              <div
                className="rounded-2xl border bg-zinc-900 p-6 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] card-highlight"
                style={{
                  borderColor:
                    highlighted === i
                      ? "rgba(56, 165, 113, 0.25)"
                      : "rgba(255, 255, 255, 0.06)",
                  boxShadow:
                    highlighted === i
                      ? "0 0 24px rgba(56, 165, 113, 0.06)"
                      : "none",
                }}
              >
                <Quotes
                  size={28}
                  weight="fill"
                  className="text-accent-500/20 mb-4"
                />
                <p className="text-sm leading-relaxed text-zinc-300 mb-5">
                  &ldquo;{t.content}&rdquo;
                </p>
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      size={14}
                      weight="fill"
                      className="text-accent-400"
                    />
                  ))}
                  <span className="ml-2 text-xs text-zinc-500 font-mono">
                    {t.course}
                  </span>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                  <Avatar
                    src={`https://picsum.photos/seed/${t.seed}/100/100`}
                    alt={t.name}
                    size="md"
                  />
                  <div>
                    <div className="font-display font-bold text-sm text-white">
                      {t.name}
                    </div>
                    <div className="text-xs text-zinc-500">{t.role}</div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
