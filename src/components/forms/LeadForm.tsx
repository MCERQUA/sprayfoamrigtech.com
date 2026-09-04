"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { AEOFields } from "./AEOFields";

const PROJECT_TYPES = [
  "Residential Spray Foam",
  "Metal Building / Commercial",
  "Crawl Space or Attic",
  "New Construction",
  "Not Sure — Need Advice",
];

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&");
}

const STATE_OPTIONS: [string, string][] = [["AL", "Alabama"], ["AK", "Alaska"], ["AZ", "Arizona"], ["AR", "Arkansas"], ["CA", "California"], ["CO", "Colorado"], ["CT", "Connecticut"], ["DE", "Delaware"], ["DC", "District of Columbia"], ["FL", "Florida"], ["GA", "Georgia"], ["HI", "Hawaii"], ["ID", "Idaho"], ["IL", "Illinois"], ["IN", "Indiana"], ["IA", "Iowa"], ["KS", "Kansas"], ["KY", "Kentucky"], ["LA", "Louisiana"], ["ME", "Maine"], ["MD", "Maryland"], ["MA", "Massachusetts"], ["MI", "Michigan"], ["MN", "Minnesota"], ["MS", "Mississippi"], ["MO", "Missouri"], ["MT", "Montana"], ["NE", "Nebraska"], ["NV", "Nevada"], ["NH", "New Hampshire"], ["NJ", "New Jersey"], ["NM", "New Mexico"], ["NY", "New York"], ["NC", "North Carolina"], ["ND", "North Dakota"], ["OH", "Ohio"], ["OK", "Oklahoma"], ["OR", "Oregon"], ["PA", "Pennsylvania"], ["RI", "Rhode Island"], ["SC", "South Carolina"], ["SD", "South Dakota"], ["TN", "Tennessee"], ["TX", "Texas"], ["UT", "Utah"], ["VT", "Vermont"], ["VA", "Virginia"], ["WA", "Washington"], ["WV", "West Virginia"], ["WI", "Wisconsin"], ["WY", "Wyoming"]];

export function LeadForm({ className }: { className?: string }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data: Record<string, string> = { "form-name": "quote" };
    formData.forEach((v, k) => (data[k] = String(v)));

    if (data["company"]) {
      setStatus("done");
      return;
    }

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(data),
      });
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-xl border border-pine/30 bg-pine/10 p-8 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-pine" />
        <h3 className="mt-3 font-heading text-xl font-semibold text-foreground">
          You&apos;re all set.
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          We&apos;ll match you with a well-equipped, insured spray foam contractor and reach out
          shortly. No spam, no obligation.
        </p>
      </div>
    );
  }

  return (
    <form
      name="quote"
      method="POST"
      data-netlify="true"
      netlify-honeypot="company"
      onSubmit={handleSubmit}
      className={className}
    >
      <input type="hidden" name="form-name" value="quote" />
      <div className="hidden">
        <label>
          Company
          <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <AEOFields />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="sm:col-span-2">
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-md border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="Jordan Homeowner"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="street" className="mb-1.5 block text-sm font-medium text-foreground">
            Job / Property Address
          </label>
          <input
            id="street"
            name="street"
            type="text"
            required
            className="w-full rounded-md border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="Street address"
          />
        </div>

        <div>
          <label htmlFor="city" className="mb-1.5 block text-sm font-medium text-foreground">
            City
          </label>
          <input
            id="city"
            name="city"
            type="text"
            required
            className="w-full rounded-md border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="City"
          />
        </div>

        <div>
          <label htmlFor="state" className="mb-1.5 block text-sm font-medium text-foreground">
            State
          </label>
          <select
            id="state"
            name="state"
            required
            defaultValue=""
            className="w-full rounded-md border border-border bg-card px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            <option value="" disabled>Select</option>
            {STATE_OPTIONS.map(([value, label]) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="zip" className="mb-1.5 block text-sm font-medium text-foreground">
            ZIP
          </label>
          <input
            id="zip"
            name="zip"
            type="text"
            inputMode="numeric"
            pattern="[0-9]{5}(-[0-9]{4})?"
            required
            className="w-full rounded-md border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="85001"
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-foreground">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="w-full rounded-md border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="(555) 123-4567"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-md border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="jordan@email.com"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="project_type" className="mb-1.5 block text-sm font-medium text-foreground">
            Project Type
          </label>
          <select
            id="project_type"
            name="project_type"
            required
            defaultValue=""
            className="w-full rounded-md border border-border bg-card px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            <option value="" disabled>
              Select a project type
            </option>
            {PROJECT_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-md bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-sm hover:bg-primary-dark transition-all hover:-translate-y-0.5 cursor-pointer disabled:opacity-70"
      >
        {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" />}
        Get Matched with a Well-Equipped Contractor
      </button>
      {status === "error" && (
        <p className="mt-3 text-sm text-destructive">
          Something went wrong. Please call us at 844-967-5247 instead.
        </p>
      )}
      <p className="mt-3 text-xs text-muted-foreground">
        No spam. No obligation. Just a properly-equipped job.
      </p>
    </form>
  );
}
