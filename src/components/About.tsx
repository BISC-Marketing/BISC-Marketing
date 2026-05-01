import Link from "next/link";
import { CheckCircle, Users, Target, Zap } from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "Every project is designed with clear goals and measurable outcomes in mind.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description:
      "Work directly with skilled professionals who care about your success.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description:
      "Quick turnaround times without compromising on quality or attention to detail.",
  },
  {
    icon: CheckCircle,
    title: "Ongoing Support",
    description:
      "We don't disappear after launch — count on us for continued support and updates.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-accent-dark">
              Why Choose Us
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-dark tracking-tight">
              Your Success Is{" "}
              <span className="text-primary">Our Mission</span>
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              At BISC Marketing, we believe every business deserves a
              professional image. Whether you&apos;re a startup finding your
              footing or an established company refreshing your brand, we
              deliver tailored solutions that make an impact.
            </p>
            <p className="mt-4 text-lg text-muted leading-relaxed">
              We combine creative design with strategic thinking to help your
              business stand out in a crowded market. Our approach is
              collaborative, transparent, and always focused on delivering real
              value.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-md hover:bg-primary-light transition-all hover:shadow-lg active:scale-95"
            >
              Work With Us
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="rounded-2xl bg-surface p-6 border border-gray-100 hover:border-accent/30 hover:shadow-md transition-all duration-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent-dark">
                  <reason.icon size={24} />
                </div>
                <h3 className="mt-4 text-lg font-bold text-primary-dark">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
