import { Accordion } from "@lumina/ui";
import { SectionHeader } from "~/components/shared/SectionHeader";
import { Question } from "@phosphor-icons/react";
import { AnimateOnScroll } from "~/components/shared/AnimateOnScroll";

const faqItems = [
  {
    title: "Can I switch plans anytime?",
    content:
      "Yes, upgrade or downgrade at any time. When you upgrade, you get immediate access to Pro features. When you downgrade, your Pro access continues until the end of your current billing cycle.",
  },
  {
    title: "Is there a student discount?",
    content:
      "Yes, 40% off Pro with a valid .edu email address. The discount applies for as long as you maintain an active student email. Contact support with your .edu email to activate the discount.",
  },
  {
    title: "What happens when my free course limit resets?",
    content:
      "Your limit resets on the first of each month. Any courses you started in the previous month remain accessible so you can finish them, but new course enrollments count against your fresh limit of 3.",
  },
  {
    title: "Do certificates expire?",
    content:
      "No, certificates are permanent and verifiable at any time. Each certificate has a unique URL that employers can check. Premium certificates include detailed skill breakdowns and project links.",
  },
  {
    title: "Can I get a refund?",
    content:
      "Full refund within 14 days, no questions asked. If you subscribed to Pro and decide it is not for you, email support and we will process the refund within 2 business days.",
  },
  {
    title: "Is there a team plan?",
    content:
      "Yes, contact us for team pricing starting at 5 seats. Team plans include a shared dashboard, progress tracking across members, and dedicated onboarding support. Volume discounts available for 20+ seats.",
  },
  {
    title: "What payment methods do you accept?",
    content:
      "Visa, Mastercard, American Express, and PayPal. All payments are processed securely through Stripe. We also support invoicing for team plans of 10 or more seats.",
  },
  {
    title: "Can I download courses for offline?",
    content:
      "Pro subscribers can download course materials, video content, and project templates for offline access through the Praxis desktop app. Downloaded content syncs your progress when you reconnect.",
  },
];

export function PricingFAQ() {
  return (
    <section className="bg-zinc-950 py-24 relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <AnimateOnScroll>
          <SectionHeader
            badge={{ icon: Question, label: "FAQ" }}
            title="Common questions"
            subtitle="Everything you need to know about pricing and plans."
          />
        </AnimateOnScroll>
        <AnimateOnScroll delay={150}>
          <div className="max-w-3xl">
            <Accordion items={faqItems} variant="cards" />
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
