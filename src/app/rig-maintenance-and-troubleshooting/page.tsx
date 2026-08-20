import type { Metadata } from "next";
import Image from "next/image";
import { Wrench, Gauge, Target, Thermometer, Droplet, Flame, ArrowRight, AlertTriangle } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { TechCard } from "@/components/ui/TechCard";
import { ChecklistItem } from "@/components/ui/ChecklistItem";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CaveatCallout } from "@/components/ui/CaveatCallout";

export const metadata: Metadata = {
  title: "Rig Maintenance & Troubleshooting: What Actually Goes Wrong",
  description:
    "Routine rig maintenance and how to recognize off-ratio spray foam before it becomes a real problem — plain, practical guidance.",
  alternates: { canonical: "/rig-maintenance-and-troubleshooting" },
};

const MAINTENANCE_ITEMS = [
  { title: "Filter Changes", description: "Inlet and in-line filters catch debris before it reaches the pump — a clogged filter is one of the most common causes of pressure imbalance." },
  { title: "Hose Inspection", description: "Check heated hoses for physical damage, kinks, and consistent temperature end-to-end. A cold spot anywhere along the line affects the reaction." },
  { title: "Fluid & Seal Checks", description: "Pump seals wear over time and are a routine wear item, not a sign something is broken — inspect and replace on a schedule, not just after a failure." },
  { title: "Gun Cleaning", description: "The spray gun's mixing chamber needs regular cleaning to prevent buildup that affects spray pattern and mix quality." },
];

const FAILURE_POINTS = [
  { icon: Gauge, title: "Proportioner Calibration Drift", description: "Pumps and valves wear unevenly over time, gradually shifting the ratio even without a sudden failure." },
  { icon: Flame, title: "Hose Heater Issues", description: "A failing heater element or thermostat lets one line run cooler than the other, throwing off viscosity and ratio." },
  { icon: Droplet, title: "Spray Gun Clogging", description: "Cured material buildup in the mixing chamber restricts flow and disrupts the spray pattern." },
  { icon: Thermometer, title: "Ambient Temperature Swings", description: "Cold jobsite conditions make it harder for the rig to maintain proper chemical temperature through the whole line." },
];

const FAQS = [
  {
    question: "Why does off-ratio foam happen?",
    answer:
      "Most commonly it traces back to one of a few root causes: a temperature imbalance between the A and B side lines, worn pump seals that change flow rate, a clogged filter restricting one side more than the other, or incorrect pressure settings. Any of these can shift the ratio away from the correct 1:1 mix, even when the rig otherwise looks and sounds like it's running fine.",
  },
  {
    question: "Will spray foam cure in 40-50 degree weather?",
    answer:
      "Cold ambient temperatures make it harder for the rig to maintain the chemical temperature the reaction needs, which is why cold-weather jobs put extra strain on hose heaters and can increase the risk of off-ratio application if the equipment isn't keeping up. Most spray foam systems have a manufacturer-specified minimum surface and ambient temperature range — a well-maintained rig with properly functioning heaters can often still spray in cooler conditions, but it's a real variable, not something to ignore.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function MaintenancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="relative overflow-hidden bg-charcoal">
        <div className="absolute inset-0">
          <Image
            src="/images/technician-servicing-rig.jpg"
            alt="A technician servicing spray foam rig equipment"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-24 sm:py-28">
          <FadeIn>
            <p className="text-sm font-medium text-charcoal-foreground/70">
              Home / Rig Maintenance and Troubleshooting
            </p>
            <h1 className="mt-3 font-heading text-4xl sm:text-5xl font-semibold text-charcoal-foreground uppercase tracking-wide">
              Rig Maintenance &amp; Troubleshooting: What Actually Goes Wrong
            </h1>
            <p className="mt-5 text-charcoal-foreground/80 leading-relaxed max-w-2xl normal-case">
              Routine upkeep and how to recognize off-ratio spray foam before it becomes a real
              problem — plain, practical guidance.
            </p>
          </FadeIn>
        </div>
      </section>

      <Section band="base">
        <FadeIn className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="font-heading text-3xl font-semibold text-foreground uppercase tracking-wide">
            Routine Maintenance
          </h2>
        </FadeIn>
        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {MAINTENANCE_ITEMS.map((item, i) => (
            <StaggerItem key={item.title}>
              <ChecklistItem number={i + 1} title={item.title} description={item.description} />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      <Section band="tan">
        <FadeIn className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground uppercase tracking-wide">
            Off-Ratio Foam: What It Is and Why It Happens
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            &quot;Off-ratio&quot; means the A side and B side chemicals didn&apos;t combine in
            the correct 1:1 proportion when they were sprayed. The foam can still expand and
            look reasonable on the surface, but it may not cure properly — affecting cell
            structure, adhesion, and long-term performance. It's a chemistry problem caused by a
            mechanical one: something in the rig's delivery chain let the two sides drift out of
            balance.
          </p>
          <div className="mt-6">
            <CaveatCallout
              title="Signs to watch for"
              description="Foam that feels tacky or doesn't fully expand, a persistent strong odor well after application, discoloration, or a brittle/crumbly texture instead of a firm, consistent cell structure — any of these can indicate an off-ratio application worth investigating."
            />
          </div>
        </FadeIn>
      </Section>

      <Section band="base">
        <FadeIn className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="font-heading text-3xl font-semibold text-foreground uppercase tracking-wide">
            Common Failure Points
          </h2>
        </FadeIn>
        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FAILURE_POINTS.map((f) => (
            <StaggerItem key={f.title}>
              <div className="h-full rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                  <f.icon className="h-5 w-5 text-primary" strokeWidth={2} />
                </div>
                <h3 className="font-heading text-base font-semibold text-foreground uppercase tracking-wide">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground normal-case">{f.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      <Section band="tan">
        <FadeIn className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="font-heading text-3xl font-semibold text-foreground uppercase tracking-wide">
            Related Topics
          </h2>
        </FadeIn>
        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <StaggerItem>
            <TechCard
              icon={Gauge}
              title="What Is a Spray Foam Rig?"
              description="The proportioner, spray gun, heated hoses, and generator, explained."
              href="/what-is-a-spray-foam-rig"
            />
          </StaggerItem>
          <StaggerItem>
            <TechCard
              icon={Target}
              title="Why Rig Quality Matters"
              description="How equipment condition connects directly to the finished job."
              href="/why-rig-quality-matters"
            />
          </StaggerItem>
        </StaggerChildren>
      </Section>

      <Section band="accent-wash" className="text-center">
        <FadeIn className="mx-auto max-w-xl">
          <AlertTriangle className="mx-auto h-9 w-9 text-primary" />
          <h2 className="mt-4 font-heading text-2xl sm:text-3xl font-semibold text-foreground uppercase tracking-wide">
            Work With a Contractor Who Maintains Their Equipment
          </h2>
          <Button href="/get-matched" size="lg" className="mt-6" icon={ArrowRight}>
            Get Matched with a Well-Equipped Contractor
          </Button>
        </FadeIn>
      </Section>

      <Section band="base">
        <FadeIn className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="font-heading text-3xl font-semibold text-foreground uppercase tracking-wide">
            FAQ
          </h2>
        </FadeIn>
        <FAQAccordion items={FAQS} />
      </Section>
    </>
  );
}
