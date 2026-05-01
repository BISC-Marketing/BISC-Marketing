import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Users, Zap, CheckCircle, Lightbulb, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | BISC Marketing",
  description:
    "Learn about BISC Marketing — who we are, what we do, and the team behind your brand's success. We help Australian businesses grow with professional marketing solutions.",
};

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "Every project is designed with clear goals and measurable outcomes in mind.",
  },
  {
    icon: Lightbulb,
    title: "Creative Solutions",
    description:
      "We bring fresh ideas and innovative approaches to every challenge.",
  },
  {
    icon: Users,
    title: "Client-First",
    description:
      "Your success is our priority. We work closely with you at every step.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description:
      "Quick turnaround times without compromising on quality or detail.",
  },
  {
    icon: CheckCircle,
    title: "Ongoing Support",
    description:
      "We don't disappear after launch — count on us for continued support.",
  },
  {
    icon: Globe,
    title: "Australia-Wide",
    description:
      "Serving businesses across Australia with tailored marketing solutions.",
  },
];

const team = [
  {
    name: "Bishar Ibrahim",
    role: "CEO",
    speciality: "Technical Lead",
    description:
      "Driving the technical vision behind every project. With a passion for clean code and cutting-edge technology, they ensure every website and digital solution we deliver is fast, reliable, and built to scale.",
    initial: "BI",
  },
  {
    name: "Chloe Sparkes",
    role: "COO",
    speciality: "Operations Lead",
    description:
      "Overseeing day-to-day operations and client relationships. They ensure every project runs smoothly from start to finish, keeping timelines on track and clients informed every step of the way.",
    initial: "CS",
  },
];

export default function AboutPage() {
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
            <span className="text-sm font-semibold uppercase tracking-widest text-accent-light">
              About Us
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              The Team Behind{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-accent">
                Your Brand
              </span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-blue-100/80 max-w-2xl mx-auto leading-relaxed">
              We&apos;re a team of passionate marketers, designers, and
              developers helping Australian businesses build a powerful presence
              — both online and offline.
            </p>
          </div>
        </section>

        <section className="py-24 lg:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <span className="text-sm font-semibold uppercase tracking-widest text-accent-dark">
                  Our Story
                </span>
                <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-primary-dark tracking-tight">
                  Built on a Shared Vision
                </h2>
                <div className="mt-6 space-y-4 text-lg text-muted leading-relaxed">
                  <p>
                    BISC Marketing was founded by two partners who saw a gap in
                    the market — too many small businesses were paying too much
                    for marketing that didn&apos;t deliver results.
                  </p>
                  <p>
                    We set out to change that. Our mission is simple: provide
                    professional, results-driven marketing solutions at prices
                    that make sense for growing businesses.
                  </p>
                  <p>
                    From custom websites and social media management to business
                    cards and Google optimization, we offer everything a business
                    needs to stand out — all under one roof.
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {values.map((value) => (
                  <div
                    key={value.title}
                    className="rounded-2xl bg-surface p-6 border border-gray-100 hover:border-accent/30 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent-dark">
                      <value.icon size={24} />
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-primary-dark">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-32 bg-surface">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-sm font-semibold uppercase tracking-widest text-accent-dark">
                Meet the Team
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-primary-dark tracking-tight">
                The People Behind BISC
              </h2>
              <p className="mt-4 text-lg text-muted leading-relaxed">
                Two partners, one mission — helping your business grow.
              </p>
            </div>

            <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {team.map((member) => (
                <div
                  key={member.role}
                  className="rounded-2xl bg-white p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-accent/30 transition-all duration-300 text-center"
                >
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-light text-white text-3xl font-bold">
                    {member.initial}
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-primary-dark">
                    {member.name}
                  </h3>
                  <p className="text-accent-dark font-semibold">
                    {member.role}
                  </p>
                  <p className="text-sm text-primary font-medium mt-1">
                    {member.speciality}
                  </p>
                  <p className="mt-4 text-muted leading-relaxed text-sm">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-md hover:bg-primary-light transition-all hover:shadow-lg active:scale-95"
              >
                Work With Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
