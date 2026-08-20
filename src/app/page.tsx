import type { Metadata } from "next";
import Image from "next/image";
import {
  Gauge,
  Wrench,
  Target,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Phone,
  Flame,
  Thermometer,
  Droplet,
  Zap,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { TechCard } from "@/components/ui/TechCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";

export const metadata: Metadata = {
  title: "The Equipment Behind Every Spray Foam Job — Explained Plainly",
  description:
    "What a spray foam rig actually is, how to keep it running right, and why equipment quality shows up in the finished job — plain, vendor-neutral explanations.",
  alternates: { canonical: "/" },
};

const TOPICS = [
  {
    icon: Gauge,
    title: "What Is a Spray Foam Rig?",
    description: "The proportioner, spray gun, heated hoses, and generator, plainly explained.",
    href: "/what-is-a-spray-foam-rig",
  },
  {
    icon: Wrench,
    title: "Rig Maintenance & Troubleshooting",
    description: "Routine upkeep and how to diagnose off-ratio foam before it becomes a problem.",
    href: "/rig-maintenance-and-troubleshooting",
  },
  {
    icon: Target,
    title: "Why Rig Quality Matters",
    description: "How equipment condition connects directly to a consistent, reliable job.",
    href: "/why-rig-quality-matters",
  },
];

const COMMON_ISSUES = [
  { icon: Thermometer, title: "Off-Ratio Foam", description: "Usually a temperature or pressure imbalance between the A and B sides." },
  { icon: Flame, title: "Hose Temperature Problems", description: "Heated hoses maintain the chemical temperature needed for a proper reaction." },
  { icon: Droplet, title: "Proportioner Leaks", description: "Worn seals and fittings are a routine maintenance item, not a mystery." },
  { icon: Zap, title: "Generator Failures", description: "The whole rig depends on stable power — generator upkeep is not optional." },
];

const FAQS = [
  {
    question: "What does a foam proportioner do?",
    answer:
      "A proportioner is the core piece of rig equipment that heats, pressurizes, and mixes the two spray foam chemical components (usually called the A side and B side) in the correct 1:1 ratio before they reach the spray gun. Getting that ratio right, consistently, is what separates a properly cured job from off-ratio foam.",
  },
  {
    question: "How much does it cost to spray foam a 40x60 shop?",
    answer:
      "It depends on square footage, whether you're using open-cell or closed-cell foam, ceiling height, and accessibility — there's no honest single number without a real estimate. A well-equipped, properly calibrated rig is part of what makes that estimate accurate in the first place.",
  },
  {
    question: "Why does off-ratio foam happen?",
    answer:
      "Most commonly: temperature imbalance between the two chemical components, worn pump seals, clogged filters, or incorrect pressure settings. Off-ratio foam can look fine on the surface but cure improperly, which is exactly why routine rig maintenance and calibration matter.",
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

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-charcoal">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-rig-trailer-warehouse.jpg"
            alt="A spray foam rig trailer with proportioner, hoses, and generator inside a warehouse"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <FadeIn className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-charcoal-foreground/10 px-4 py-1.5 text-sm font-medium text-charcoal-foreground ring-1 ring-charcoal-foreground/20">
              <Gauge className="h-4 w-4 text-accent" /> A Contractors Choice Agency resource
            </span>
            <h1 className="mt-6 font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] text-charcoal-foreground uppercase tracking-wide">
              The Equipment Behind Every Spray Foam Job — Explained Plainly
            </h1>
            <p className="mt-6 text-lg text-charcoal-foreground/85 leading-relaxed max-w-xl normal-case">
              The proportioner, the hoses, the gun, the generator — practical, plain-spoken
              education on the equipment that determines whether a job cures right.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button href="/get-matched" size="lg" variant="secondary">
                Get Matched with a Well-Equipped Contractor <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                href="/what-is-a-spray-foam-rig"
                size="lg"
                variant="outline"
                className="border-charcoal-foreground/30 text-charcoal-foreground hover:border-accent hover:text-accent"
              >
                Learn the Basics
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* DEFINITION BAND */}
      <Section band="charcoal" className="py-10 sm:py-12">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <p className="font-heading text-xl sm:text-2xl font-medium text-charcoal-foreground leading-relaxed normal-case">
            This site covers the real equipment and maintenance behind every spray foam job —{" "}
            <span className="text-accent">the proportioner, the hoses, the gun, the generator.</span>
          </p>
        </FadeIn>
      </Section>

      {/* TOPIC GRID */}
      <Section band="base">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground uppercase tracking-wide">
            Rig Equipment, Explained
          </h2>
        </FadeIn>
        <StaggerChildren className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {TOPICS.map((topic) => (
            <StaggerItem key={topic.title}>
              <TechCard icon={topic.icon} title={topic.title} description={topic.description} href={topic.href} />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      {/* WHY IT MATTERS */}
      <Section band="tan">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground uppercase tracking-wide">
              Why It Matters for the Finished Job
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              On-ratio spray foam requires precise temperature and pressure control from start to
              finish — and that depends entirely on well-maintained equipment. A worn seal, a
              miscalibrated proportioner, or a hose that can&apos;t hold temperature doesn&apos;t
              always look like a problem on the surface. It shows up later, in cell structure,
              adhesion, and cure quality.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              This isn&apos;t abstract — it&apos;s the mechanical reality behind every spray foam
              job. Understanding it helps contractors keep their equipment dialed in, and helps
              homeowners know what questions are actually worth asking.
            </p>
          </FadeIn>
          <FadeIn delay={0.1} className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src="/images/proportioner-control-panel-closeup.jpg"
              alt="A close-up of a spray foam proportioner control panel with pressure gauges"
              fill
              className="object-cover"
            />
          </FadeIn>
        </div>
      </Section>

      {/* COMMON RIG ISSUES */}
      <Section band="base">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground uppercase tracking-wide">
            Common Rig Issues
          </h2>
        </FadeIn>
        <StaggerChildren className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMMON_ISSUES.map((issue) => (
            <StaggerItem key={issue.title}>
              <div className="h-full rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                  <issue.icon className="h-5 w-5 text-primary" strokeWidth={2} />
                </div>
                <h3 className="font-heading text-base font-semibold text-foreground uppercase tracking-wide">{issue.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{issue.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      {/* HOW MATCHING WORKS */}
      <Section band="accent-wash">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground uppercase tracking-wide">
            How Getting Matched Works
          </h2>
        </FadeIn>
        <StaggerChildren className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <StaggerItem className="text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground font-heading text-xl font-semibold">1</div>
            <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">Tell Us Your Project</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">A few quick details about your space and location.</p>
          </StaggerItem>
          <StaggerItem className="text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground font-heading text-xl font-semibold">2</div>
            <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">Matched With a Well-Equipped, Insured Contractor</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">From CCA&apos;s vetted spray-foam-contractor network.</p>
          </StaggerItem>
          <StaggerItem className="text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground font-heading text-xl font-semibold">3</div>
            <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">You Choose</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">No obligation. You stay in control of the decision.</p>
          </StaggerItem>
        </StaggerChildren>
      </Section>

      {/* FAQ */}
      <Section band="tan">
        <FadeIn className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground uppercase tracking-wide">
            Frequently Asked Questions
          </h2>
        </FadeIn>
        <FAQAccordion items={FAQS} />
      </Section>

      {/* FINAL CTA */}
      <Section band="accent-wash" className="text-center">
        <FadeIn className="mx-auto max-w-2xl">
          <ShieldCheck className="mx-auto h-10 w-10 text-primary" />
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl font-semibold text-foreground uppercase tracking-wide">
            Ready for a Job Done Right?
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Tell us about your project and we&apos;ll match you with a vetted, insured spray foam
            contractor who takes their equipment seriously — no cost, no obligation.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/get-matched" size="lg" icon={ArrowRight}>
              Get Matched
            </Button>
            <Button href="tel:+18449675247" size="lg" variant="outline" icon={Phone}>
              Call 844-967-5247
            </Button>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
