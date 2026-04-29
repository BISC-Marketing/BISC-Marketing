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
                <a
                  href="#home"
                  className="text-sm text-blue-200/50 hover:text-accent transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-sm text-blue-200/50 hover:text-accent transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-sm text-blue-200/50 hover:text-accent transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm text-blue-200/50 hover:text-accent transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-blue-200/60">
              Services
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="#services"
                  className="text-sm text-blue-200/50 hover:text-accent transition-colors"
                >
                  Website Development
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-sm text-blue-200/50 hover:text-accent transition-colors"
                >
                  Social Media Management
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-sm text-blue-200/50 hover:text-accent transition-colors"
                >
                  Business Card Design
                </a>
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
