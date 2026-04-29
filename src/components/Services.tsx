import { Globe, Share2, CreditCard, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Custom-built, responsive websites that look stunning on every device. We create fast, SEO-optimized sites that convert visitors into customers.",
    features: [
      "Responsive Design",
      "SEO Optimized",
      "Fast Loading",
      "Custom CMS",
    ],
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description:
      "Strategic social media campaigns that grow your audience and boost engagement. We handle content creation, scheduling, and analytics.",
    features: [
      "Content Strategy",
      "Post Scheduling",
      "Community Management",
      "Analytics & Reports",
    ],
  },
  {
    icon: CreditCard,
    title: "Business Card Design",
    description:
      "Professional, eye-catching business cards that make a lasting first impression. Premium designs with quality printing options.",
    features: [
      "Custom Design",
      "Print-Ready Files",
      "Multiple Formats",
      "Fast Turnaround",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent-dark">
            What We Do
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-dark tracking-tight">
            Services That Drive Results
          </h2>
          <p className="mt-4 text-lg text-muted leading-relaxed">
            Everything your business needs to establish a powerful presence
            — both online and offline.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-accent/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-accent group-hover:text-primary-dark transition-colors duration-300">
                <service.icon size={28} />
              </div>

              <h3 className="mt-6 text-xl font-bold text-primary-dark">
                {service.title}
              </h3>
              <p className="mt-3 text-muted leading-relaxed">
                {service.description}
              </p>

              <ul className="mt-6 space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent-dark transition-colors group/link"
              >
                Learn More
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover/link:translate-x-1"
                />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
