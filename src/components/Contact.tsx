"use client";

import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from "lucide-react";

const WEB3FORMS_ACCESS_KEY = "41de9a9e-2600-4142-a3c0-5d260c7dac37";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New enquiry from BISC Marketing website");
    formData.append("from_name", "BISC Marketing Website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection and try again.");
    }
  }

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 bg-gradient-to-br from-primary-dark via-primary to-primary-light relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-20 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent-light">
            Get In Touch
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Ready to Grow Your Business?
          </h2>
          <p className="mt-4 text-lg text-blue-100/80 leading-relaxed">
            Let&apos;s discuss your project. Reach out today and get a free
            consultation on how we can help your business thrive.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-accent">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Email Us</h3>
                <p className="mt-1 text-blue-100/70">
                  biscmarketing@outlook.com
                </p>
                <p className="text-sm text-blue-100/50 mt-1">
                  We'll reply today!
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-accent">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Call Us</h3>
                <p className="mt-1 text-blue-100/70">+61 0466 810 966</p>
                <p className="text-sm text-blue-100/50 mt-1">
                  Mon–Sun, 8am–8pm AEST
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-accent">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Location</h3>
                <p className="mt-1 text-blue-100/70">Australia</p>
                <p className="text-sm text-blue-100/50 mt-1">
                  Serving clients nationwide
                </p>
              </div>
            </div>
          </div>

          <form
            className="rounded-2xl bg-white/10 backdrop-blur-sm p-8 border border-white/10"
            onSubmit={handleSubmit}
          >
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle size={48} className="text-green-400 mb-4" />
                <h3 className="text-xl font-bold text-white">Message Sent!</h3>
                <p className="mt-2 text-blue-100/70">
                  Thanks for reaching out. We&apos;ll get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 rounded-lg border border-white/20 px-6 py-2 text-sm font-medium text-white hover:bg-white/10 transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-blue-100"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  required
                  placeholder="John Smith"
                  className="mt-2 w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-blue-200/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-blue-100"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  required
                  placeholder="john@example.com"
                  className="mt-2 w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-blue-200/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-blue-100"
                >
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  className="mt-2 w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                >
                  <option value="" className="text-gray-900">
                    Select a service
                  </option>
                  <option value="website" className="text-gray-900">
                    Website Development
                  </option>
                  <option value="social" className="text-gray-900">
                    Social Media Management
                  </option>
                  <option value="cards" className="text-gray-900">
                    Business Card Design
                  </option>
                  <option value="all" className="text-gray-900">
                    Multiple Services
                  </option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-blue-100"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell us about your project..."
                  className="mt-2 w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-blue-200/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                />
              </div>
              {status === "error" && (
                <p className="text-red-300 text-sm">{errorMsg}</p>
              )}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-4 text-base font-bold text-primary-dark shadow-lg hover:bg-accent-light transition-all hover:shadow-xl active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>
                    Sending...
                    <Loader2 size={18} className="animate-spin" />
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
            </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
