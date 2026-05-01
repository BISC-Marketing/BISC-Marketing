import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CalendarCheck, CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Booking Systems | BISC Marketing",
  description:
    "Simple online booking systems for Australian businesses. Let your customers book appointments directly from your website or social media.",
};

const features = [
  "Online appointment scheduling",
  "Automated email/SMS reminders",
  "Calendar integration",
  "Website or social media embed",
  "Custom availability settings",
  "Client management dashboard",
];

export default function BookingSystemsPage() {
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
              <CalendarCheck size={32} />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Simple Booking Systems
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-blue-100/80 max-w-2xl mx-auto leading-relaxed">
              Let your customers book appointments online — directly from your
              website or social media. No phone tag, no back-and-forth emails.
            </p>
          </div>
        </section>

        <section className="py-24 lg:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <span className="text-sm font-semibold uppercase tracking-widest text-accent-dark">
                  What We Do
                </span>
                <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-primary-dark tracking-tight">
                  Bookings Made Easy
                </h2>
                <div className="mt-6 space-y-4 text-lg text-muted leading-relaxed">
                  <p>
                    We set up simple, user-friendly booking systems so your
                    customers can schedule appointments anytime, anywhere. No
                    more missed calls or double bookings.
                  </p>
                  <p>
                    Whether you run a salon, clinic, consultancy, or any
                    service-based business, we&apos;ll set up a system that
                    integrates seamlessly with your website and sends automated
                    reminders to reduce no-shows.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-surface p-8 border border-gray-100">
                <h3 className="text-lg font-bold text-primary-dark mb-6">
                  What&apos;s Included
                </h3>
                <ul className="space-y-4">
                  {features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-3 text-gray-600"
                    >
                      <CheckCircle size={18} className="text-green-500 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-muted italic">
                  Perfect for salons, clinics, consultants, and service-based
                  businesses.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-32 bg-gradient-to-br from-primary-dark via-primary to-primary-light relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 overflow-hidden">
            <div className="absolute top-10 right-20 w-72 h-72 bg-accent rounded-full blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ready to Simplify Your Bookings?
            </h2>
            <p className="mt-4 text-lg text-blue-100/80 max-w-xl mx-auto">
              Let us set up a booking system that saves you time and keeps your
              calendar full.
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
