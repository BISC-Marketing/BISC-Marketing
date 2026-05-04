import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light"
    >
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-400 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-32 lg:px-8 lg:py-40">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-sm text-white/90 mb-8 border border-white/10">
            <Sparkles size={16} className="text-accent" />
            <span>Your Growth Partner in Digital Marketing</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight">
            We Build Brands
            <br />
            That{" "}
            <span className="text-transparent bg-clip-text bg-accent">
              Stand Out
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-blue-100/80 max-w-2xl leading-relaxed">
            From stunning websites to engaging social media and professional
            business cards — BISC Marketing delivers the tools your business
            needs to thrive in a digital world.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up [animation-delay:400ms]">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-bold text-primary-dark hover:bg-accent-dark transition-all hover:shadow-md hover:shadow-accent/20 active:scale-95"
            >
              Start Your Project
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/#services"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-all active:scale-95"
            >
              Explore Services
            </Link>
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-6 sm:gap-8 text-blue-100/60">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-sm mt-1">Projects Delivered</div>
            </div>
            <div className="h-10 w-px bg-white/20 hidden sm:block" />
            <div className="text-center">
              <div className="text-3xl font-bold text-white">100%</div>
              <div className="text-sm mt-1">Client Satisfaction</div>
            </div>
            <div className="h-10 w-px bg-white/20 hidden sm:block" />
            <div className="text-center">
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-sm mt-1">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
