import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Sparkes Electric",
    description:
      "A professional website built for a local electrician — fast, mobile-friendly, and designed to generate leads.",
    tags: ["Web Design", "SEO", "Lead Generation"],
    url: "https://electrician.biscmarketing.com",
  },
  {
    title: "Coming Soon",
    description:
      "A new project is in the works. Check back soon to see our latest build.",
    tags: ["TBA"],
    comingSoon: true,
  },
  {
    title: "Coming Soon",
    description:
      "Another exciting project on the way. Stay tuned for the reveal.",
    tags: ["TBA"],
    comingSoon: true,
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent-dark">
            Our Work
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-dark tracking-tight">
            Projects We&apos;ve Built
          </h2>
          <p className="mt-4 text-lg text-muted leading-relaxed">
            See what we&apos;ve done for other businesses. Check out our live
            demo projects below.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) =>
            project.comingSoon ? (
              <div
                key={i}
                className="rounded-2xl bg-white border border-dashed border-gray-200 overflow-hidden opacity-60"
              >
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-400">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={i}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl bg-white border border-gray-100 overflow-hidden hover:border-accent/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-primary-dark group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <ExternalLink
                      size={18}
                      className="text-muted group-hover:text-accent-dark transition-colors shrink-0"
                    />
                  </div>
                  <p className="mt-3 text-sm text-muted leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent-dark"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:text-accent-dark transition-colors">
                    View Live Site
                    <ExternalLink size={14} />
                  </span>
                </div>
              </a>
            )
          )}
        </div>
      </div>
    </section>
  );
}
