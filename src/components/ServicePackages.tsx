"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Check, ChevronDown, Crown, Rocket, TrendingUp, Zap } from "lucide-react";
import Link from "next/link";

const packages = [
  {
    id: "starter",
    name: "Starter",
    subtitle: "Get Online Properly",
    icon: Rocket,
    price: "$500",
    priceNote: "one-time payment",
    setupFee: null,
    bestFor: "Businesses with no website or an outdated one",
    outcome: "You look legit and can start receiving enquiries online.",
    featured: false,
    includes: ["Website", "SEO", "Contact Form"],
    features: [
      "Simple website",
      "Mobile-responsive design",
      "Contact form setup (email leads)",
      "Basic SEO setup (meta tags, sitemap, Google indexing)",
      "Fast hosting setup or detailed guide",
      "1 round of revisions",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    subtitle: "Get More Leads",
    icon: TrendingUp,
    price: "$350",
    priceNote: "/month",
    setupFee: "$500",
    bestFor: "Businesses ready to grow their customer base online",
    outcome: "You get more calls and messages directly from your website.",
    featured: false,
    includes: ["Website", "Hosting", "SEO", "Analytics"],
    features: [
      "Everything in Starter",
      "Up to a 6 page website with conversion-focused design",
      "Up to 3 website content updates per month",
      "Website hosting & domain/DNS management",
      "Security monitoring & daily backups",
      "Click-to-call buttons & enquiry forms",
      "Basic quote request system",
      "Monthly website analytics snapshot",
      "Google Reviews strategy & setup",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    subtitle: "Hands-Off Growth",
    icon: Zap,
    price: "$599",
    priceNote: "/month",
    setupFee: "$750",
    bestFor: "Businesses who don't want to think about marketing",
    outcome:
      "You don't touch anything — but your online presence keeps growing.",
    featured: true,
    includes: ["Website", "Hosting", "Social Media", "Email Marketing", "SEO", "Analytics"],
    features: [
      "Everything in Growth",
      "High-end custom website",
      "Up to 5 website content updates per month",
      "1 website redesign per month",
      "Social media posting (Up to 8 posts per month across all platforms)",
      "Story posting (Up to 8 stories per month across all platforms)",
      "Review management (monitoring & responses)",
      "Monthly performance report with insights",
      "Email marketing setup & optional campaigns",
    ],
  },
  {
    id: "elite",
    name: "Elite",
    subtitle: "Your Full Marketing Team",
    icon: Crown,
    price: "$2,500",
    priceNote: "/month",
    setupFee: "$1,500",
    bestFor: "Businesses that want a complete done-for-you marketing department",
    outcome:
      "You have a full marketing team without the full-time salary.",
    featured: false,
    includes: ["Website", "Hosting", "Social Media", "Email Marketing", "SEO", "Ads", "Branding", "Analytics"],
    features: [
      "Everything in Pro",
      "Enterprise-grade website with advanced features",
      "Up to 8 website content updates per month",
      "Up to 2 website redesigns per month",
      "Competitor monitoring",
      "Social media posting (Up to 15 posts per month across all platforms)",
      "Story posting (Up to 15 stories per month across all platforms)",
      "Dedicated account manager",
      "Quarterly strategy sessions",
      "Professional business card design with QR integration",
      "Custom QR code systems (landing pages, promotions)",
      "Email marketing campaigns (monthly sends)",
      "Advanced SEO & keyword tracking",
      "Brand identity & design consistency",
      "Quarterly strategy sessions",
    ],
  },
];

const COLLAPSED_COUNT = 10;

export default function ServicePackages() {
  const { ref: gridRef, progress } = useScrollReveal();
  const [eliteExpanded, setEliteExpanded] = useState(false);

  return (
    <div className="mt-16" ref={gridRef}>
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {packages.map((pkg, i) => {
          const itemProgress = Math.max(0, Math.min(1, (progress - i * 0.15) / 0.55));
          return (
            <div
              key={pkg.id}
              className={`relative flex flex-col rounded-2xl p-8 ${
                pkg.featured
                  ? "border-2 border-accent bg-white shadow-xl"
                  : "border border-gray-200 bg-white shadow-sm"
              }`}
              style={{
                transform: `translateY(${(1 - itemProgress) * 200}px)`,
              }}
            >
              {pkg.featured && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent text-primary-dark text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                  Most Popular
                </span>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                    pkg.featured
                      ? "bg-accent/20 text-accent-dark"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  <pkg.icon size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-dark">
                    {pkg.name}
                  </h3>
                  <p className="text-sm text-muted">{pkg.subtitle}</p>
                </div>
              </div>

              <div className="mb-6">
                <span className="block text-xs text-muted mb-1">
                  Starting at
                </span>
                <span className="text-3xl font-extrabold text-primary-dark">
                  {pkg.price}
                </span>
                <span className="text-sm text-muted ml-1">
                  {pkg.priceNote}
                </span>
                {pkg.setupFee && (
                  <span className="block text-xs text-muted mt-1">
                    + {pkg.setupFee} initial setup fee
                  </span>
                )}
                <span className="block text-xs text-muted mt-1">
                  *Final price depends on your requirements
                </span>
              </div>

              <p className="text-sm text-muted mb-3">
                <span className="font-semibold text-primary-dark">
                  Best for:
                </span>{" "}
                {pkg.bestFor}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {pkg.includes.map((item) => (
                  <span
                    key={item}
                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      pkg.featured
                        ? "bg-accent/15 text-accent-dark"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>

              <ul className="space-y-3 mb-4 flex-1">
                {(pkg.id === "elite" && !eliteExpanded
                  ? pkg.features.slice(0, COLLAPSED_COUNT)
                  : pkg.features
                ).map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm text-gray-700"
                  >
                    <Check
                      size={16}
                      className="shrink-0 mt-0.5 text-green-500"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              {pkg.id === "elite" && pkg.features.length > COLLAPSED_COUNT && (
                <button
                  onClick={() => setEliteExpanded(!eliteExpanded)}
                  className="flex items-center gap-1 text-sm font-medium text-primary hover:text-accent-dark transition-colors mb-4 cursor-pointer"
                >
                  {eliteExpanded ? "Show less" : `+${pkg.features.length - COLLAPSED_COUNT} more features`}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${eliteExpanded ? "rotate-180" : ""}`}
                  />
                </button>
              )}

              <div className="mt-auto space-y-3">
                <div className="rounded-lg bg-surface p-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent-dark mb-1">
                    Outcome
                  </p>
                  <p className="text-sm text-primary-dark font-medium italic">
                    &ldquo;{pkg.outcome}&rdquo;
                  </p>
                </div>

                <Link
                  href="/contact"
                  className={`block w-full text-center rounded-full px-6 py-3.5 text-sm font-bold transition-all active:scale-95 ${
                    pkg.featured
                      ? "bg-accent text-primary-dark hover:bg-accent-dark shadow-md"
                      : "bg-primary text-white hover:bg-primary-light shadow-sm"
                  }`}
                >
                  Get Started
                </Link>

                <p className="text-center text-xs text-muted">
                  {pkg.priceNote === "/month"
                    ? "Cancel anytime with 30 days notice"
                    : "One-time payment, no ongoing fees"}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
