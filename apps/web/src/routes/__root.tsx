import {
  createRootRoute,
  Outlet,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { AuthProvider } from "@lumina/ui";
import { Header } from "~/components/layout/Header";
import { Footer } from "~/components/layout/Footer";
import { CursorGlow } from "~/components/shared/CursorGlow";
import { ScrollProgress } from "~/components/shared/ScrollProgress";
import { BackToTop } from "~/components/shared/BackToTop";
import { PageTransition } from "~/components/shared/PageTransition";
import { CookieConsent } from "~/components/shared/CookieConsent";
import { AnnouncementBar } from "~/components/shared/AnnouncementBar";
import appCss from "~/styles/app.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Praxis — Build Real Skills Through Projects" },
      {
        name: "description",
        content:
          "Praxis teaches through hands-on projects, code reviews, and structured mentorship. 11,480 engineers have shipped production code within their first month.",
      },
      { name: "theme-color", content: "#09090b" },
      {
        property: "og:title",
        content: "Praxis — Build Real Skills Through Projects",
      },
      {
        property: "og:description",
        content:
          "Hands-on projects, code reviews, and structured mentorship for working engineers.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Praxis" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Outfit:wght@300..900&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "Praxis",
          description:
            "Project-based learning platform for working engineers",
          url: "https://praxis.dev",
        }),
      },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="min-h-[100dvh] bg-zinc-950 text-zinc-100 font-body antialiased grain-overlay">
        <noscript>
          <style>{`
            [data-animate] { opacity: 1 !important; transform: none !important; }
            .js-only { display: none; }
          `}</style>
        </noscript>
        <AuthProvider>
          <PageTransition />
          <ScrollProgress />
          <CursorGlow />
          <AnnouncementBar />
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
          <BackToTop />
          <CookieConsent />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}
