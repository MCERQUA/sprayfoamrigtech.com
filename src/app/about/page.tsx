import type { Metadata } from "next";
import Image from "next/image";
import { Gauge, Users, Handshake, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";

export const metadata: Metadata = {
  title: "About SprayFoamRigTech",
  description:
    "SprayFoamRigTech is a Contractors Choice Agency resource explaining spray foam rig equipment, maintenance, and why it matters for the finished job.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-charcoal">
        <div className="absolute inset-0">
          <Image
            src="/images/generator-power-source.jpg"
            alt="A generator power source unit for a spray foam rig"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/70" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-24 sm:py-28 text-center">
          <FadeIn>
            <p className="text-sm font-medium text-charcoal-foreground/70">Home / About</p>
            <h1 className="mt-3 font-heading text-4xl sm:text-5xl font-semibold text-charcoal-foreground uppercase tracking-wide">
              About SprayFoamRigTech
            </h1>
          </FadeIn>
        </div>
      </section>

      <Section band="base">
        <FadeIn className="mx-auto max-w-3xl space-y-6 text-foreground/90 leading-relaxed">
          <p>
            SprayFoamRigTech explains the equipment behind every spray foam job — the
            proportioner, the spray gun, the heated hoses, the generator — in plain, mechanical
            terms. Not a sales pitch for any one manufacturer, not a product page. Just what the
            equipment does, how to keep it running right, and why it matters.
          </p>
          <p>
            Contractors Choice Agency insures spray foam contractors for a living. That vantage
            point means we see how often job quality traces back to equipment condition —
            worn seals, miscalibrated proportioners, and neglected maintenance show up later as
            off-ratio foam, disputes, and callbacks. This site exists to make that connection
            plain, for contractors maintaining their own rigs and for homeowners evaluating one.
          </p>
        </FadeIn>
      </Section>

      <Section band="tan">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground text-center uppercase tracking-wide">
              What We Believe
            </h2>
          </FadeIn>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <FadeIn delay={0.05} className="text-center">
              <Gauge className="mx-auto h-9 w-9 text-pine" />
              <h3 className="mt-3 font-heading font-semibold text-foreground">Mechanical, Not Hype</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Plain equipment facts, not marketing language — a shop manual, not a pitch deck.
              </p>
            </FadeIn>
            <FadeIn delay={0.1} className="text-center">
              <Users className="mx-auto h-9 w-9 text-pine" />
              <h3 className="mt-3 font-heading font-semibold text-foreground">No Vendor Pitch</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We explain equipment and maintenance, not sell any single manufacturer&apos;s
                rig.
              </p>
            </FadeIn>
            <FadeIn delay={0.15} className="text-center">
              <Handshake className="mx-auto h-9 w-9 text-pine" />
              <h3 className="mt-3 font-heading font-semibold text-foreground">Real Accountability</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Contractors in our matching network already carry verified licensing and
                insurance documentation.
              </p>
            </FadeIn>
          </div>
        </div>
      </Section>

      <Section band="base">
        <FadeIn className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground uppercase tracking-wide">
            How the Matching Network Works
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            When you submit a project through{" "}
            <a href="/get-matched" className="text-primary underline underline-offset-2">
              Get Matched
            </a>
            , our team — licensed insurance professionals who review contractor coverage for a
            living — connects you with a spray foam contractor from CCA&apos;s network whose
            license and insurance documentation we&apos;ve already reviewed. You&apos;re never
            obligated to hire anyone we introduce you to.
          </p>
        </FadeIn>
      </Section>

      <Section band="charcoal" className="text-center">
        <FadeIn className="mx-auto max-w-xl">
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-charcoal-foreground uppercase tracking-wide">
            Ready for a job done right?
          </h2>
          <Button href="/get-matched" variant="secondary" size="lg" className="mt-6" icon={ArrowRight}>
            Get Matched with a Well-Equipped Contractor
          </Button>
        </FadeIn>
      </Section>
    </>
  );
}
