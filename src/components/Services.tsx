"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import ServicePackages from "./ServicePackages";

export default function Services() {
  const { ref: headingRef, progress } = useScrollReveal();

  return (
    <section id="services" className="py-24 lg:py-32 bg-surface">
      <div className="mx-auto max-w-[90rem] px-6 lg:px-8">
        <div
          ref={headingRef}
          className="text-center max-w-2xl mx-auto"
          style={{
            opacity: progress,
            transform: `translateY(${(1 - progress) * 30}px)`,
          }}
        >
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

        <ServicePackages />
      </div>
    </section>
  );
}
