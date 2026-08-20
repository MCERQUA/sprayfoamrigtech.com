import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <Section band="base" className="text-center py-32">
      <p className="text-sm font-semibold text-primary">404</p>
      <h1 className="mt-3 font-heading text-4xl font-semibold text-foreground uppercase tracking-wide">
        Page Not Found
      </h1>
      <p className="mt-4 text-muted-foreground max-w-md mx-auto">
        The page you&apos;re looking for doesn&apos;t exist. Try one of our equipment guides
        instead.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button href="/what-is-a-spray-foam-rig" icon={ArrowRight}>
          What Is a Spray Foam Rig?
        </Button>
        <Button href="/" variant="outline">
          Back to Home
        </Button>
      </div>
    </Section>
  );
}
