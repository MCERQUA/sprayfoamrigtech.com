import type { Metadata } from "next";
import Image from "next/image";
import { Target, Gauge, Wrench, ArrowRight, CheckCircle2, GraduationCap, Home } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { TechCard } from "@/components/ui/TechCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";

export const metadata: Metadata = {
  title: "Why Rig Quality Actually Matters for the Finished Job",
  description:
    "Why spray foam sometimes gets removed or flagged at resale usually traces back to equipment and application issues, not the material itself — here's the honest chain.",
  alternates: { canonical: "/why-rig-quality-matters" },
};

const HOMEOWNER_QUESTIONS = [
  "Do you inspect and calibrate your rig on a regular schedule?",
  "How do you check that foam is curing on-ratio during the job?",
  "What's your process if you notice a problem mid-application?",
];

const FAQS = [
  {
    question: "Why are people removing spray foam insulation?",
    answer:
      "When spray foam is removed, it's rarely because the material itself failed — it's far more often traced back to how it was applied: off-ratio foam from poorly maintained or miscalibrated equipment, applied too thick against a surface that needed ventilation, or installed by a crew that wasn't following proper technique. Properly applied, on-ratio spray foam from well-maintained equipment is a stable, long-lasting material.",
  },
  {
    question: "Can mold grow behind spray foam insulation?",
    answer:
      "Mold needs moisture to grow, and properly installed spray foam is specifically good at controlling moisture — so it's an unlikely place for mold under normal conditions. The cases where it happens usually involve improper installation that traps existing moisture behind the foam rather than sealing it out, or off-ratio foam that doesn't fully cure and seal as designed. Again, this traces back to application quality, not a defect in the material itself.",
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

export default function WhyQualityMattersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="relative overflow-hidden bg-charcoal">
        <div className="absolute inset-0">
          <Image
            src="/images/spray-foam-application-consistent.jpg"
            alt="Spray foam being applied evenly and consistently to a wall cavity"
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
              Home / Why Rig Quality Matters
            </p>
            <h1 className="mt-3 font-heading text-4xl sm:text-5xl font-semibold text-charcoal-foreground uppercase tracking-wide">
              Why Rig Quality Actually Matters for the Finished Job
            </h1>
            <p className="mt-5 text-charcoal-foreground/80 leading-relaxed max-w-2xl normal-case">
              An honest look at how equipment condition connects to real outcomes — no
              fear-mongering, just the causal chain.
            </p>
          </FadeIn>
        </div>
      </section>

      <Section band="base">
        <FadeIn className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground uppercase tracking-wide">
            The Honest Chain
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            The connection between equipment and job outcomes isn&apos;t abstract — it&apos;s a
            direct chain. A rig that isn&apos;t properly maintained or calibrated can produce{" "}
            <a href="/rig-maintenance-and-troubleshooting" className="text-primary underline underline-offset-2">off-ratio foam</a>. Off-ratio foam doesn&apos;t always look wrong right
            away, but it can cure improperly — affecting cell structure and adhesion. Over time,
            that shows up as real problems: reduced performance, discoloration, or a texture
            that isn&apos;t firm and consistent. In some cases, it&apos;s the reason spray foam
            gets flagged during a home inspection or has to be removed and redone.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            None of this means spray foam itself is a risky material. It means the equipment and
            the process behind the application are what actually determine the outcome — which
            is exactly why this site exists.
          </p>
        </FadeIn>
      </Section>

      <Section band="tan">
        <FadeIn className="mx-auto max-w-3xl">
          <div className="flex items-center gap-2">
            <Home className="h-6 w-6 text-primary" />
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground uppercase tracking-wide">
              What This Means for Homeowners
            </h2>
          </div>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            You don&apos;t need to become an equipment expert to evaluate a contractor — but a
            few direct questions can tell you whether they take their rig seriously:
          </p>
          <StaggerChildren className="mt-6 space-y-3">
            {HOMEOWNER_QUESTIONS.map((q) => (
              <StaggerItem key={q}>
                <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                  <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-pine" />
                  <span className="text-sm text-foreground normal-case">{q}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </FadeIn>
      </Section>

      <Section band="base">
        <FadeIn className="mx-auto max-w-3xl">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground uppercase tracking-wide">
              What This Means for Contractors
            </h2>
          </div>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Equipment maintenance is only half the equation — crew training matters just as
            much. A well-calibrated rig in the hands of an undertrained applicator can still
            produce inconsistent results. Ongoing spray foam training, alongside a real
            maintenance schedule, is what turns good equipment into consistently good jobs.
          </p>
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
              icon={Gauge}
              title="What Is a Spray Foam Rig?"
              description="The proportioner, spray gun, heated hoses, and generator, explained."
              href="/what-is-a-spray-foam-rig"
            />
          </StaggerItem>
          <StaggerItem>
            <TechCard
              icon={Wrench}
              title="Rig Maintenance & Troubleshooting"
              description="What routine upkeep looks like, and why off-ratio foam happens."
              href="/rig-maintenance-and-troubleshooting"
            />
          </StaggerItem>
        </StaggerChildren>
      </Section>

      <Section band="accent-wash" className="text-center">
        <FadeIn className="mx-auto max-w-xl">
          <Target className="mx-auto h-9 w-9 text-primary" />
          <h2 className="mt-4 font-heading text-2xl sm:text-3xl font-semibold text-foreground uppercase tracking-wide">
            Work With a Contractor Who Takes Their Equipment Seriously
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
