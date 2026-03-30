import {
  GraduationCap,
  ArrowRight,
  XLogo,
  LinkedinLogo,
  YoutubeLogo,
  GithubLogo,
} from "@phosphor-icons/react";
import { Button, Input } from "@lumina/ui";

const footerLinks = {
  Platform: [
    { label: "All Courses", href: "/courses" },
    { label: "Learning Paths", href: "/paths" },
    { label: "Certifications", href: "/certifications" },
    { label: "For Teams", href: "/teams" },
    { label: "Pricing", href: "/pricing" },
  ],
  Resources: [
    { label: "Blog", href: "/blog" },
    { label: "Community", href: "/community" },
    { label: "Help Center", href: "/help" },
    { label: "Career Guide", href: "/careers" },
    { label: "Webinars", href: "/webinars" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/jobs" },
    { label: "Press Kit", href: "/press" },
    { label: "Partners", href: "/partners" },
    { label: "Contact", href: "/contact" },
  ],
};

const socialLinks = [
  { icon: XLogo, label: "X", href: "#" },
  { icon: LinkedinLogo, label: "LinkedIn", href: "#" },
  { icon: YoutubeLogo, label: "YouTube", href: "#" },
  { icon: GithubLogo, label: "GitHub", href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-zinc-950">
      {/* Newsletter Section */}
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="rounded-2xl border border-white/[0.06] bg-zinc-900 p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-dark" />
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-zinc-100 mb-2">
                Stay ahead of the curve
              </h3>
              <p className="text-zinc-400 text-sm md:text-base max-w-md">
                Get weekly insights on trending skills, new courses, and
                practical engineering tips.
              </p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <Input
                type="email"
                placeholder="your@email.com"
                className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 focus-visible:ring-accent-500/20 focus-visible:border-accent-500 md:w-64"
              />
              <Button className="bg-accent-500 hover:bg-accent-600 text-white shrink-0 shadow-none">
                Subscribe <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Links Grid */}
      <div className="mx-auto max-w-7xl px-4 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap size={24} weight="fill" className="text-accent-400" />
              <span className="font-display text-lg font-bold text-white">
                Praxis
              </span>
            </div>
            <p className="text-sm text-zinc-500 max-w-xs leading-relaxed mb-6">
              Hands-on projects, code reviews, and structured mentorship that
              turn ambition into shipped software.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="h-9 w-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:border-zinc-700 hover:text-white transition-colors duration-150 ease-[cubic-bezier(0.23,1,0.32,1)]"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs uppercase tracking-widest text-zinc-400 font-medium mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors duration-150 ease-[cubic-bezier(0.23,1,0.32,1)]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-600">
            &copy; {new Date().getFullYear()} Praxis Learning Inc. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Settings"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors duration-150 ease-[cubic-bezier(0.23,1,0.32,1)]"
                >
                  {item}
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
