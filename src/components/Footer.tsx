import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white font-bold text-lg">
                B
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                BISC <span className="text-accent">Marketing</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-blue-200/50 leading-relaxed max-w-xs">
              Helping businesses grow with professional websites, social media
              management, and business card design.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-blue-200/60">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-blue-200/50 hover:text-accent transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-sm text-blue-200/50 hover:text-accent transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-blue-200/50 hover:text-accent transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-blue-200/50 hover:text-accent transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-blue-200/60">
              What We Do
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/services/web-design"
                  className="text-sm text-blue-200/50 hover:text-accent transition-colors"
                >
                  Web Design &amp; Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/social-media"
                  className="text-sm text-blue-200/50 hover:text-accent transition-colors"
                >
                  Social Media Management
                </Link>
              </li>
              <li>
                <Link
                  href="/services/business-cards"
                  className="text-sm text-blue-200/50 hover:text-accent transition-colors"
                >
                  Business Card Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services/google-business"
                  className="text-sm text-blue-200/50 hover:text-accent transition-colors"
                >
                  Google Business &amp; SEO
                </Link>
              </li>
              <li>
                <Link
                  href="/services/email-marketing"
                  className="text-sm text-blue-200/50 hover:text-accent transition-colors"
                >
                  Email Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/booking-systems"
                  className="text-sm text-blue-200/50 hover:text-accent transition-colors"
                >
                  Booking Systems
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-blue-200/40">
            &copy; {currentYear} BISC Marketing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
