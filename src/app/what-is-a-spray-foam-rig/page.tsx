import type { Metadata } from "next";
import Image from "next/image";
import { Gauge, Wrench, Target, Flame, Zap, ArrowRight, CheckCircle2 } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { TechCard } from "@/components/ui/TechCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";

export const metadata: Metadata = {
  title: "What Is a Spray Foam Rig?",
  description:
    "A plain-language breakdown of spray foam rig equipment — proportioner, spray gun, heated hoses, and generator — and how they work together.",
  alternates: { canonical: "/what-is-a-spray-foam-rig" },
};

const COMPONENTS = [
  {
    icon: Gauge,
    title: "The Proportioner",
    description:
      "The heart of the rig. It heats, pressurizes, and mixes the two spray foam chemical components — the A side (isocyanate) and B side (resin blend) — in a precise 1:1 ratio before they ever reach the gun.",
  },
  {
    icon: Flame,
    title: "The Spray Gun",
    description:
      "Where the two chemicals finally meet and mix, right at the point of application. The gun's internal mixing chamber and tip size affect spray pattern and output rate.",
  },
  {
    icon: Wrench,
    title: "Heated Hoses",
    description:
      "The A and B side chemicals travel from the proportioner to the gun through separate heated hose lines. Keeping both lines at a consistent, matched temperature is what keeps the ratio correct all the way to the tip.",
  },
  {
    icon: Zap,
    title: "Generator / Power Source",
    description:
      "Rigs are typically mounted in a trailer or truck and run on an onboard generator, since the proportioner's heaters and pumps need stable, sustained power — often at a jobsite with no other electricity available.",
  },
];

const FAQS = [
  {
    question: "What are the three methods of foam proportioning?",
    answer:
      "Spray foam proportioners generally use one of a few pumping approaches to move and mix the chemical components at the correct ratio — commonly categorized as fixed-ratio hydraulic pumping, variable-ratio systems, and air-driven proportioning. Each approach handles pressure and ratio control a little differently, but the goal is the same: deliver both components at a precise, matched 1:1 rate.",
  },
  {
    question: "How does a foam proportioner valve work?",
    answer:
      "The proportioner uses check valves and metering pumps to draw the A and B side chemicals from separate supply drums, pressurize each line independently, and regulate flow so that equal volumes reach the hoses at the same time. If a valve wears out or a seal fails, the ratio drifts — which is exactly why routine valve inspection is part of standard rig maintenance.",
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

export default function WhatIsARigPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="relative overflow-hidden bg-charcoal">
        <div className="absolute inset-0">
          <Image
            src="/images/rig-equipment-dials-gauges.jpg"
            alt="Close-up of pressure gauges and valves on spray foam rig equipment"
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
              Home / What Is a Spray Foam Rig?
            </p>
            <h1 className="mt-3 font-heading text-4xl sm:text-5xl font-semibold text-charcoal-foreground uppercase tracking-wide">
              What Is a Spray Foam Rig?
            </h1>
            <p className="mt-5 text-charcoal-foreground/80 leading-relaxed max-w-2xl normal-case">
              A plain-language breakdown of the equipment — the proportioner, the gun, the
              hoses, the power source — and how they work together as one system.
            </p>
          </FadeIn>
        </div>
      </section>

      <Section band="base">
        <FadeIn className="mx-auto max-w-3xl space-y-5 text-foreground/90 leading-relaxed">
          <p>
            A &quot;spray foam rig&quot; isn&apos;t one machine — it&apos;s a connected system of
            equipment, usually mounted in a trailer or box truck, that turns two liquid
            chemical components into the expanding foam that gets sprayed onto a wall, roof
            deck, or crawl space. Every rig is built around the same core chain: a power source,
            a proportioner, heated hoses, and a spray gun.
          </p>
          <p>
            Understanding what each piece does isn&apos;t just trivia — it&apos;s the foundation
            for understanding why <a href="/rig-maintenance-and-troubleshooting" className="text-primary underline underline-offset-2">off-ratio foam happens</a> and{" "}
            <a href="/why-rig-quality-matters" className="text-primary underline underline-offset-2">why equipment condition shows up in the finished job</a>.
          </p>
        </FadeIn>
      </Section>

      <Section band="tan">
        <FadeIn className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="font-heading text-3xl font-semibold text-foreground uppercase tracking-wide">
            The Core Components
          </h2>
        </FadeIn>
        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {COMPONENTS.map((c) => (
            <StaggerItem key={c.title}>
              <div className="h-full rounded-xl border border-border bg-card p-6 shadow-sm">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                  <c.icon className="h-5 w-5 text-primary" strokeWidth={2} />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground uppercase tracking-wide">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground normal-case">
                  {c.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      <Section band="base">
        <FadeIn className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground uppercase tracking-wide">
            How They Work Together
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Spray foam is a two-component chemical reaction. The A side and B side are stored
            separately, stay separate all the way through the proportioner and the heated
            hoses, and only combine at the gun&apos;s mixing chamber the instant they&apos;re
            sprayed. That&apos;s not a simplification for the sake of a tidy explanation — it&apos;s
            literally how the chemistry has to work, because once the two sides mix, the
            reaction starts immediately.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Every part of the rig exists to keep that reaction on-spec: the proportioner keeps
            pressure and volume matched, the hoses keep both lines at the same temperature over
            distance, and the generator keeps all of it powered consistently for the length of
            the job. A weak link anywhere in that chain — a pressure imbalance, a cold spot in a
            hose, a power fluctuation — can throw off the ratio at the gun, even if every other
            part of the system is working fine.
          </p>
          <div className="mt-6 flex items-center gap-2 text-sm text-foreground">
            <CheckCircle2 className="h-4 w-4 text-pine shrink-0" />
            <span>
              This is why rig maintenance isn&apos;t optional upkeep — it&apos;s part of what
              makes the chemistry work correctly.
            </span>
          </div>
        </FadeIn>
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
              icon={Wrench}
              title="Rig Maintenance & Troubleshooting"
              description="What routine upkeep looks like, and why off-ratio foam happens."
              href="/rig-maintenance-and-troubleshooting"
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
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground uppercase tracking-wide">
            Work With a Contractor Who Knows Their Equipment
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
