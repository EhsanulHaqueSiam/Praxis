import { Badge, Avatar } from "@lumina/ui";
import { Star, Quotes } from "@phosphor-icons/react";

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
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-crosshatch" />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        {/* Section Header -- left aligned */}
        <div className="mb-12 max-w-2xl">
          <Badge variant="outline" className="mb-4">
            <Star size={14} weight="fill" className="text-accent-600" />
            From the community
          </Badge>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 mb-4">
            Engineers who shipped with Praxis
          </h2>
          <p className="text-zinc-500 text-sm">
            Hear from builders who turned course projects into production
            systems and career milestones.
          </p>
        </div>

        {/* Masonry-style 2-column grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-zinc-200/60 bg-white p-6 shadow-diffuse"
            >
              <Quotes
                size={28}
                weight="fill"
                className="text-accent-200 mb-4"
              />
              <p className="text-sm leading-relaxed text-zinc-600 mb-5">
                &ldquo;{t.content}&rdquo;
              </p>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    weight="fill"
                    className="text-accent-600"
                  />
                ))}
                <span className="ml-2 text-xs text-zinc-400 font-mono">
                  {t.course}
                </span>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
                <Avatar
                  src={`https://picsum.photos/seed/${t.seed}/100/100`}
                  alt={t.name}
                  size="md"
                />
                <div>
                  <div className="font-display font-bold text-sm text-zinc-900">
                    {t.name}
                  </div>
                  <div className="text-xs text-zinc-400">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
