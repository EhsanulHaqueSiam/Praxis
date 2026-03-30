import { createFileRoute } from "@tanstack/react-router";
import { PricingHero } from "~/components/pricing/PricingHero";
import { PricingCards } from "~/components/pricing/PricingCards";
import { FeatureTable } from "~/components/pricing/FeatureTable";
import { PricingFAQ } from "~/components/pricing/PricingFAQ";
import { EnterpriseCTA } from "~/components/pricing/EnterpriseCTA";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      {
        title: "Pricing — Start Free, Upgrade When Ready | Praxis",
      },
      {
        name: "description",
        content:
          "Free tier with 3 courses per month. Pro at $29/mo for unlimited access, priority code reviews, and live mentorship.",
      },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <>
      <PricingHero />
      <PricingCards />
      <FeatureTable />
      <PricingFAQ />
      <EnterpriseCTA />
    </>
  );
}
