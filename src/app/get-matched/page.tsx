import type { Metadata } from "next";
import { Gauge, Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { LeadForm } from "@/components/forms/LeadForm";
import { PHONE_DISPLAY, PHONE_TEL, EMAIL, HQ_ADDRESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Get Matched With a Well-Equipped, Insured Spray Foam Contractor",
  description:
    "Tell us about your project. We'll connect you with a licensed, insured spray foam contractor from the Contractors Choice Agency network who maintains their equipment.",
  alternates: { canonical: "/get-matched" },
};

const STEPS = [
  { title: "You Submit", description: "A few quick details about your project and location." },
  { title: "CCA Reviews & Matches", description: "We match you with a vetted, insured spray foam contractor from our network." },
  { title: "The Contractor Contacts You", description: "You decide whether to move forward — no pressure, no obligation." },
];

export default function GetMatchedPage() {
  return (
    <>
      <Section band="charcoal" className="pb-12">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-charcoal-foreground/10 px-4 py-1.5 text-sm font-medium text-charcoal-foreground ring-1 ring-charcoal-foreground/20">
            <Gauge className="h-4 w-4 text-accent" /> Free. No obligation.
          </span>
          <h1 className="mt-6 font-heading text-4xl sm:text-5xl font-semibold text-charcoal-foreground uppercase tracking-wide">
            Get Matched With a Well-Equipped, Insured Spray Foam Contractor
          </h1>
          <p className="mt-5 text-charcoal-foreground/80 leading-relaxed normal-case">
            Every contractor in our network is licensed and insured — and increasingly, that
            means well-maintained equipment too.
          </p>
        </FadeIn>
      </Section>

      <Section band="base" className="pt-0 -mt-8">
        <FadeIn className="mx-auto max-w-2xl rounded-2xl border border-border bg-card p-6 sm:p-10 shadow-md">
          <LeadForm />
        </FadeIn>
      </Section>

      <Section band="tan">
        <FadeIn className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="font-heading text-3xl font-semibold text-foreground uppercase tracking-wide">What Happens Next</h2>
        </FadeIn>
        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {STEPS.map((step, i) => (
            <StaggerItem key={step.title} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground font-heading text-xl font-semibold">
                {i + 1}
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      <Section band="base">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <ul className="inline-flex flex-col gap-2 text-left">
            <li className="flex items-center gap-2 text-sm text-foreground">
              <CheckCircle2 className="h-4 w-4 text-pine shrink-0" /> License verified before you ever hear from them
            </li>
            <li className="flex items-center gap-2 text-sm text-foreground">
              <CheckCircle2 className="h-4 w-4 text-pine shrink-0" /> General liability &amp; workers&apos; comp confirmed
            </li>
            <li className="flex items-center gap-2 text-sm text-foreground">
              <CheckCircle2 className="h-4 w-4 text-pine shrink-0" /> You still make the final call — no obligation to hire
            </li>
          </ul>
        </FadeIn>
      </Section>

      <Section band="charcoal" className="text-center">
        <FadeIn className="mx-auto max-w-xl">
          <h2 className="font-heading text-2xl font-semibold text-charcoal-foreground uppercase tracking-wide">
            Prefer to talk it through first?
          </h2>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-6 text-charcoal-foreground/90 text-sm">
            <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-2 hover:text-accent cursor-pointer">
              <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-accent cursor-pointer">
              <Mail className="h-4 w-4" /> {EMAIL}
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> {HQ_ADDRESS}
            </span>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
