import type { Metadata } from "next";
import { headingFont, bodyFont } from "@/lib/fonts";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { StickyCTA } from "@/components/sections/StickyCTA";
import "./globals.css";

const SITE_URL = "https://sprayfoamrigtech.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SprayFoamRigTech — Spray Foam Rig Equipment, Maintenance & Troubleshooting",
    template: "%s | SprayFoamRigTech",
  },
  description:
    "A Contractors Choice Agency resource on spray foam rig equipment: what a rig is, how to maintain and troubleshoot it, and why equipment quality matters for the finished job.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "SprayFoamRigTech",
    title: "SprayFoamRigTech — Spray Foam Rig Equipment, Maintenance & Troubleshooting",
    description:
      "A Contractors Choice Agency resource on spray foam rig equipment: what a rig is, how to maintain and troubleshoot it, and why equipment quality matters.",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "SprayFoamRigTech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SprayFoamRigTech — Spray Foam Rig Equipment Explained",
    description:
      "What a spray foam rig is, how to maintain it, and why it matters for the finished job.",
    images: ["/images/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SprayFoamRigTech",
  url: SITE_URL,
  description:
    "A Contractors Choice Agency resource explaining spray foam rig equipment, maintenance, and troubleshooting — and why equipment quality matters for the finished job.",
  parentOrganization: {
    "@type": "Organization",
    name: "Contractors Choice Agency",
    url: "https://contractorschoiceagency.com",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-844-967-5247",
    email: "josh@contractorschoiceagency.com",
    contactType: "customer service",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "12220 E Riggs Rd",
    addressLocality: "Chandler",
    addressRegion: "AZ",
    postalCode: "85249",
    addressCountry: "US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="antialiased bg-background text-foreground">
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
          <StickyCTA />
        </SmoothScroll>
      </body>
    </html>
  );
}
