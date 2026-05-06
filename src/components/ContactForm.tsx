"use client";

import { useState } from "react";
import { Send } from "lucide-react";

function sanitize(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    const sanitizedData = new FormData();
    sanitizedData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMS_KEY || ""
    );
    sanitizedData.append("name", sanitize(data.get("name") as string));
    sanitizedData.append("email", sanitize(data.get("email") as string));
    sanitizedData.append("phone", sanitize(data.get("phone") as string || ""));
    sanitizedData.append("message", sanitize(data.get("message") as string));

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: sanitizedData,
      });
      const result = await res.json();

      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="mx-auto max-w-2xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-blue-100/90 mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              maxLength={100}
              className="w-full rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
              placeholder="John Smith"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-blue-100/90 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              maxLength={150}
              className="w-full rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-blue-100/90 mb-2"
          >
            Phone Number (optional)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            maxLength={20}
            className="w-full rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
            placeholder="04XX XXX XXX"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-blue-100/90 mb-2"
          >
            How can we help?
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            maxLength={2000}
            className="w-full rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all resize-none"
            placeholder="Tell us about your project..."
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-bold text-primary-dark shadow-lg hover:bg-accent-dark transition-all hover:shadow-xl active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
          <Send size={18} />
        </button>

        {status === "success" && (
          <p className="text-center text-green-300 font-medium">
            Message sent! We&apos;ll get back to you shortly.
          </p>
        )}
        {status === "error" && (
          <p className="text-center text-red-300 font-medium">
            Something went wrong. Please try again or email us directly.
          </p>
        )}
      </form>
    </div>
  );
}
