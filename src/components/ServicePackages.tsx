"use client";

import { useState } from "react";
import {
  Globe,
  Share2,
  CalendarCheck,
  QrCode,
  MapPin,
  Star,
  Mail,
  CreditCard,
  ArrowRight,
} from "lucide-react";
import Modal from "./Modal";

const packages = [
  {
    id: "websites",
    icon: Globe,
    title: "Website Packages",
    tagline: "Custom websites built to grow your business.",
  },
  {
    id: "social-media",
    icon: Share2,
    title: "Social Media Content Creation + Posting",
    tagline: "Engaging content that builds your audience.",
  },
  {
    id: "booking",
    icon: CalendarCheck,
    title: "Simple Booking Systems",
    tagline: "Let your customers book appointments online.",
  },
  {
    id: "qr-codes",
    icon: QrCode,
    title: "QR Code Systems",
    tagline: "Connect offline and online with smart QR solutions.",
  },
  {
    id: "google-business",
    icon: MapPin,
    title: "Google Business Profile Optimization",
    tagline: "Get found on Google Maps and local search.",
  },
  {
    id: "google-reviews",
    icon: Star,
    title: "Google Reviews Management",
    tagline: "Build trust with more positive reviews.",
  },
  {
    id: "email-marketing",
    icon: Mail,
    title: "Email Marketing Setup and Campaigns",
    tagline: "Reach your customers directly in their inbox.",
  },
  {
    id: "business-cards",
    icon: CreditCard,
    title: "Business Card Design",
    tagline: "Professional cards that make a lasting impression.",
  },
];

function WebsitePackagesContent() {
  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-gray-200 p-6 hover:border-accent/40 transition-colors">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-2xl">🚀</span>
          <div>
            <h3 className="text-lg font-bold text-primary-dark">
              Starter Website
            </h3>
            <p className="text-sm font-semibold text-accent-dark">
              $2,500 — One time payment
            </p>
          </div>
        </div>
        <p className="text-muted text-sm mb-4">
          Perfect if you just need a professional website and want to manage it
          yourself.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-green-600 mb-2">
              Includes
            </p>
            <ul className="space-y-1.5">
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                Custom website design
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                Mobile-friendly build
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                SEO setup
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                Handover with full ownership
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-red-500 mb-2">
              Not included
            </p>
            <ul className="space-y-1.5">
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <div className="h-1.5 w-1.5 rounded-full bg-red-400" />
                Hosting
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <div className="h-1.5 w-1.5 rounded-full bg-red-400" />
                Ongoing support or updates
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-4 text-xs text-muted italic">
          👉 Best for: small businesses on a budget
        </p>
      </div>

      <div className="rounded-xl border border-gray-200 p-6 hover:border-accent/40 transition-colors">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-2xl">📈</span>
          <div>
            <h3 className="text-lg font-bold text-primary-dark">
              Growth Website
            </h3>
            <p className="text-sm font-semibold text-accent-dark">
              $4,000 up front + $50/month
            </p>
          </div>
        </div>
        <p className="text-muted text-sm mb-4">
          We build your site and keep it online — you only pay for changes when
          you need them.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-green-600 mb-2">
              Includes
            </p>
            <ul className="space-y-1.5">
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                Everything in Starter
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                Secure hosting
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                Ongoing technical maintenance
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
              Additional
            </p>
            <ul className="space-y-1.5">
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                Updates &amp; changes: $100/hour
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-4 text-xs text-muted italic">
          👉 Best for: businesses that want flexibility without ongoing
          commitments
        </p>
      </div>

      <div className="rounded-xl border-2 border-accent p-6 relative">
        <span className="absolute -top-3 left-6 bg-accent text-primary-dark text-xs font-bold px-3 py-1 rounded-full">
          Most Popular
        </span>
        <div className="flex items-center gap-3 mb-3">
          <span className="text-2xl">🔥</span>
          <div>
            <h3 className="text-lg font-bold text-primary-dark">
              Pro Website
            </h3>
            <p className="text-sm font-semibold text-accent-dark">
              $3,000 + $250/month
            </p>
          </div>
        </div>
        <p className="text-muted text-sm mb-4">
          We handle everything — your website stays updated, secure, and running
          smoothly.
        </p>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-green-600 mb-2">
            Includes
          </p>
          <ul className="space-y-1.5">
            <li className="flex items-center gap-2 text-sm text-gray-600">
              <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
              Everything in Growth
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-600">
              <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
              Up to 3 hours of updates per month
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-600">
              <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
              Priority support
            </li>
          </ul>
        </div>
        <p className="mt-4 text-xs text-muted italic">
          👉 Best for: busy businesses that want it all handled
        </p>
      </div>

      <div className="rounded-xl border border-gray-200 p-6 hover:border-accent/40 transition-colors">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-2xl">💡</span>
          <div>
            <h3 className="text-lg font-bold text-primary-dark">
              No Upfront Website
            </h3>
            <p className="text-sm font-semibold text-accent-dark">
              $0 setup + $500/month (12-month minimum)
            </p>
          </div>
        </div>
        <p className="text-muted text-sm mb-4">
          Get a professional website with no large upfront cost.
        </p>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-green-600 mb-2">
            Includes
          </p>
          <ul className="space-y-1.5">
            <li className="flex items-center gap-2 text-sm text-gray-600">
              <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
              Custom website design
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-600">
              <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
              Hosting &amp; maintenance
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-600">
              <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
              Ongoing updates included
            </li>
          </ul>
        </div>
        <p className="mt-4 text-xs text-muted italic">
          👉 Best for: businesses that want to get online without a big initial
          investment
        </p>
      </div>
    </div>
  );
}

function SocialMediaContent() {
  return (
    <div className="space-y-4">
      <p className="text-muted leading-relaxed">
        We create eye-catching, on-brand social media content and handle posting
        across your platforms so you can focus on running your business.
      </p>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-green-600 mb-2">
          What&apos;s included
        </p>
        <ul className="space-y-2">
          <li className="flex items-center gap-2 text-sm text-gray-600">
            <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
            Custom graphic design &amp; copywriting
          </li>
          <li className="flex items-center gap-2 text-sm text-gray-600">
            <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
            Content calendar &amp; scheduling
          </li>
          <li className="flex items-center gap-2 text-sm text-gray-600">
            <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
            Posting to Facebook, Instagram &amp; more
          </li>
          <li className="flex items-center gap-2 text-sm text-gray-600">
            <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
            Monthly performance reports
          </li>
        </ul>
      </div>
      <p className="text-sm text-muted italic">
        Contact us for a custom quote based on your posting frequency and
        platforms.
      </p>
    </div>
  );
}

function BookingSystemsContent() {
  return (
    <div className="space-y-4">
      <p className="text-muted leading-relaxed">
        We set up simple, user-friendly booking systems so your customers can
        schedule appointments directly from your website or social media.
      </p>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-green-600 mb-2">
          What&apos;s included
        </p>
        <ul className="space-y-2">
          <li className="flex items-center gap-2 text-sm text-gray-600">
            <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
            Online appointment scheduling
          </li>
          <li className="flex items-center gap-2 text-sm text-gray-600">
            <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
            Automated email/SMS reminders
          </li>
          <li className="flex items-center gap-2 text-sm text-gray-600">
            <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
            Calendar integration
          </li>
          <li className="flex items-center gap-2 text-sm text-gray-600">
            <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
            Website or social media embed
          </li>
        </ul>
      </div>
      <p className="text-sm text-muted italic">
        Perfect for salons, clinics, consultants, and service-based businesses.
      </p>
    </div>
  );
}

function QRCodeContent() {
  return (
    <div className="space-y-4">
      <p className="text-muted leading-relaxed">
        Custom QR code solutions that connect your physical marketing to your
        digital presence — menus, reviews, contact cards, and more.
      </p>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-green-600 mb-2">
          What&apos;s included
        </p>
        <ul className="space-y-2">
          <li className="flex items-center gap-2 text-sm text-gray-600">
            <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
            Custom branded QR codes
          </li>
          <li className="flex items-center gap-2 text-sm text-gray-600">
            <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
            Link to menus, websites, or review pages
          </li>
          <li className="flex items-center gap-2 text-sm text-gray-600">
            <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
            Print-ready files for cards, stickers &amp; signage
          </li>
          <li className="flex items-center gap-2 text-sm text-gray-600">
            <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
            Scan tracking &amp; analytics
          </li>
        </ul>
      </div>
      <p className="text-sm text-muted italic">
        Great for restaurants, retail, events, and any business with a physical
        location.
      </p>
    </div>
  );
}

function GoogleBusinessContent() {
  return (
    <div className="space-y-4">
      <p className="text-muted leading-relaxed">
        We optimize your Google Business Profile so you show up when customers
        search for services like yours in your area.
      </p>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-green-600 mb-2">
          What&apos;s included
        </p>
        <ul className="space-y-2">
          <li className="flex items-center gap-2 text-sm text-gray-600">
            <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
            Profile setup or optimization
          </li>
          <li className="flex items-center gap-2 text-sm text-gray-600">
            <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
            Business description &amp; keyword optimization
          </li>
          <li className="flex items-center gap-2 text-sm text-gray-600">
            <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
            Photo uploads &amp; category selection
          </li>
          <li className="flex items-center gap-2 text-sm text-gray-600">
            <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
            Google Maps visibility improvement
          </li>
        </ul>
      </div>
      <p className="text-sm text-muted italic">
        Essential for any business that serves local customers.
      </p>
    </div>
  );
}

function GoogleReviewsContent() {
  return (
    <div className="space-y-4">
      <p className="text-muted leading-relaxed">
        We help you generate more positive Google reviews and manage your online
        reputation to build trust with potential customers.
      </p>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-green-600 mb-2">
          What&apos;s included
        </p>
        <ul className="space-y-2">
          <li className="flex items-center gap-2 text-sm text-gray-600">
            <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
            Review generation strategy
          </li>
          <li className="flex items-center gap-2 text-sm text-gray-600">
            <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
            Review request system setup
          </li>
          <li className="flex items-center gap-2 text-sm text-gray-600">
            <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
            Response templates &amp; management
          </li>
          <li className="flex items-center gap-2 text-sm text-gray-600">
            <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
            Reputation monitoring
          </li>
        </ul>
      </div>
      <p className="text-sm text-muted italic">
        More positive reviews = more trust = more customers.
      </p>
    </div>
  );
}

function EmailMarketingContent() {
  return (
    <div className="space-y-4">
      <p className="text-muted leading-relaxed">
        We set up your email marketing platform and create campaigns that keep
        your customers engaged and drive repeat business.
      </p>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-green-600 mb-2">
          What&apos;s included
        </p>
        <ul className="space-y-2">
          <li className="flex items-center gap-2 text-sm text-gray-600">
            <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
            Email platform setup (Mailchimp, etc.)
          </li>
          <li className="flex items-center gap-2 text-sm text-gray-600">
            <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
            Email template design
          </li>
          <li className="flex items-center gap-2 text-sm text-gray-600">
            <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
            Subscriber list setup &amp; segmentation
          </li>
          <li className="flex items-center gap-2 text-sm text-gray-600">
            <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
            Campaign creation &amp; scheduling
          </li>
        </ul>
      </div>
      <p className="text-sm text-muted italic">
        Stay top-of-mind with your customers through targeted email campaigns.
      </p>
    </div>
  );
}

function BusinessCardContent() {
  return (
    <div className="space-y-4">
      <p className="text-muted leading-relaxed">
        Make a strong first impression with professionally designed business
        cards. We create eye-catching designs that reflect your brand and leave a
        lasting impact.
      </p>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-green-600 mb-2">
          What&apos;s included
        </p>
        <ul className="space-y-2">
          <li className="flex items-center gap-2 text-sm text-gray-600">
            <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
            Custom business card design (front &amp; back)
          </li>
          <li className="flex items-center gap-2 text-sm text-gray-600">
            <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
            Multiple design concepts to choose from
          </li>
          <li className="flex items-center gap-2 text-sm text-gray-600">
            <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
            Print-ready files (PDF, PNG, AI)
          </li>
          <li className="flex items-center gap-2 text-sm text-gray-600">
            <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
            Revisions until you&apos;re happy
          </li>
          <li className="flex items-center gap-2 text-sm text-gray-600">
            <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
            QR code integration (optional)
          </li>
        </ul>
      </div>
      <p className="text-sm text-muted italic">
        We can also coordinate printing and delivery — just ask!
      </p>
    </div>
  );
}

const modalContentMap: Record<string, React.ReactNode> = {
  websites: <WebsitePackagesContent />,
  "social-media": <SocialMediaContent />,
  booking: <BookingSystemsContent />,
  "qr-codes": <QRCodeContent />,
  "google-business": <GoogleBusinessContent />,
  "google-reviews": <GoogleReviewsContent />,
  "email-marketing": <EmailMarketingContent />,
  "business-cards": <BusinessCardContent />,
};

export default function ServicePackages() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const activePackage = packages.find((p) => p.id === activeModal);

  return (
    <>
      <div className="mt-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {packages.map((pkg) => (
            <button
              key={pkg.id}
              onClick={() => setActiveModal(pkg.id)}
              className="group flex items-center gap-4 rounded-xl bg-white p-5 border border-gray-100 shadow-sm hover:shadow-lg hover:border-accent/40 transition-all duration-300 hover:-translate-y-0.5 text-left cursor-pointer"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-accent group-hover:text-primary-dark transition-colors duration-300">
                <pkg.icon size={22} />
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-primary-dark text-sm leading-tight">
                  {pkg.title}
                </p>
                <p className="text-xs text-muted mt-1 leading-snug">
                  {pkg.tagline}
                </p>
              </div>
              <ArrowRight
                size={16}
                className="shrink-0 text-gray-300 group-hover:text-accent-dark transition-colors ml-auto"
              />
            </button>
          ))}
        </div>
      </div>

      <Modal
        isOpen={activeModal !== null}
        onClose={() => setActiveModal(null)}
        title={activePackage?.title ?? ""}
      >
        {activeModal && modalContentMap[activeModal]}
      </Modal>
    </>
  );
}
