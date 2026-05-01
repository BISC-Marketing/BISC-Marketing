import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 lg:py-32 bg-gradient-to-br from-primary-dark via-primary to-primary-light relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10 overflow-hidden">
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

        <div className="mt-16">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
