import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Globe, CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Web Design & Development | BISC Marketing",
  description:
    "Custom website design and development for Australian businesses. From starter sites to fully managed solutions — get a professional website that grows with your business.",
};

const tiers = [
  {
    name: "Starter Website",
    price: "$2,500 — One time payment",
    description:
      "Perfect if you just need a professional website and want to manage it yourself.",
    features: [
      "Custom website design",
      "Mobile-friendly build",
      "SEO setup",
      "Handover with full ownership",
    ],
    best: "Small businesses on a budget",
  },
  {
    name: "Growth Website",
    price: "$4,000 up front + $50/month",
    description:
      "We build your site and keep it online — you only pay for changes when you need them.",
    features: [
      "Everything in Starter",
      "Secure hosting",
      "Ongoing technical maintenance",
      "Updates & changes: $100/hour",
    ],
    best: "Businesses that want flexibility without ongoing commitments",
  },
  {
    name: "Pro Website",
    price: "$3,000 + $250/month",
    popular: true,
    description:
      "We handle everything — your website stays updated, secure, and running smoothly.",
    features: [
      "Everything in Growth",
      "Up to 3 hours of updates per month",
      "Priority support",
    ],
    best: "Busy businesses that want it all handled",
  },
  {
    name: "No Upfront Website",
    price: "$0 setup + $500/month (12-month minimum)",
    description:
      "Get a professional website with no large upfront cost.",
    features: [
      "Custom website design",
      "Hosting & maintenance",
      "Ongoing updates included",
    ],
    best: "Businesses that want to get online without a big initial investment",
  },
];

export default function WebDesignPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-gradient-to-br from-primary-dark via-primary to-primary-light overflow-hidden">
          <div className="absolute inset-0 opacity-10 overflow-hidden">
            <div className="absolute top-20 right-20 w-72 h-72 bg-accent rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-white/10 text-accent mb-6">
              <Globe size={32} />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Web Design &amp; Development
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-blue-100/80 max-w-2xl mx-auto leading-relaxed">
              We build custom, mobile-friendly websites designed to convert
              visitors into customers. From simple landing pages to full
              business platforms — we&apos;ve got you covered.
            </p>
          </div>
        </section>

        <section className="py-24 lg:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-sm font-semibold uppercase tracking-widest text-accent-dark">
                What We Offer
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-primary-dark tracking-tight">
                Websites That Work as Hard as You Do
              </h2>
              <div className="mt-6 space-y-4 text-lg text-muted leading-relaxed">
                <p>
                  Your website is your 24/7 salesperson. We design and develop
                  websites that not only look great but are optimised for speed,
                  search engines, and conversions.
                </p>
                <p>
                  Every site we build is fully responsive, fast-loading, and
                  built with modern technologies. Whether you need a simple
                  one-page site or a multi-page business platform, we tailor
                  every project to your goals.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-32 bg-surface">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-sm font-semibold uppercase tracking-widest text-accent-dark">
                Pricing
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-primary-dark tracking-tight">
                Choose Your Package
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`rounded-2xl p-8 ${tier.popular ? "border-2 border-accent bg-white shadow-xl relative" : "border border-gray-200 bg-white hover:border-accent/40 hover:shadow-md"} transition-all duration-300`}
                >
                  {tier.popular && (
                    <span className="absolute -top-3 left-6 bg-accent text-primary-dark text-xs font-bold px-3 py-1 rounded-full">
                      🔥 Most Popular
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-primary-dark">
                    {tier.name}
                  </h3>
                  <p className="text-sm font-semibold text-accent-dark mt-1">
                    {tier.price}
                  </p>
                  <p className="mt-3 text-muted text-sm">{tier.description}</p>
                  <ul className="mt-6 space-y-3">
                    {tier.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <CheckCircle size={16} className="text-green-500 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-xs text-muted italic">
                    Best for: {tier.best}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-32 bg-gradient-to-br from-primary-dark via-primary to-primary-light relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 overflow-hidden">
            <div className="absolute top-10 right-20 w-72 h-72 bg-accent rounded-full blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ready to Get Your Website Built?
            </h2>
            <p className="mt-4 text-lg text-blue-100/80 max-w-xl mx-auto">
              Get in touch for a free consultation and let&apos;s find the right
              package for your business.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-bold text-primary-dark shadow-lg hover:bg-accent-light transition-all hover:shadow-xl active:scale-95"
            >
              Get a Quote
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
