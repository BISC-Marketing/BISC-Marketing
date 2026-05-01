import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | BISC Marketing",
  description:
    "Get in touch with BISC Marketing. Reach out for a free consultation on web design, social media management, business cards, and more.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-gradient-to-br from-primary-dark via-primary to-primary-light overflow-hidden">
          <div className="absolute inset-0 opacity-10 overflow-hidden">
            <div className="absolute top-10 right-20 w-72 h-72 bg-accent rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-sm font-semibold uppercase tracking-widest text-accent-light">
                Get In Touch
              </span>
              <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
                Ready to Grow Your Business?
              </h1>
              <p className="mt-6 text-lg text-blue-100/80 leading-relaxed">
                Let&apos;s discuss your project. Reach out today and get a free
                consultation on how we can help your business thrive.
              </p>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
