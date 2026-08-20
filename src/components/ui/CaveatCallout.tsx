import { AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

interface CaveatCalloutProps {
  title: string;
  description: string;
  className?: string;
}

/** Honesty/caution device — warm accent, not a UI error state. */
export function CaveatCallout({ title, description, className }: CaveatCalloutProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-destructive/25 bg-destructive/5 p-6",
        className
      )}
    >
      <div className="flex items-start gap-3">
        <AlertTriangle className="h-5 w-5 shrink-0 mt-0.5 text-destructive" />
        <div>
          <h3 className="font-heading text-base font-semibold text-foreground">{title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
}
