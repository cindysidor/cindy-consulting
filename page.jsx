export const metadata = {
  title: "Cindy Consulting",
  description: "Governance, compliance, and board support consulting.",
};

export default function Page() {
  const practiceAreas = [
    "Board & Committee Support",
    "Corporate Governance",
    "Compliance Operations",
    "Corporate Secretarial Services",
    "Policy & Procedure Drafting",
    "Entity & Records Management",
    "Disclosure & Filing Support",
    "Process Improvement",
  ];

  const team = [
    {
      name: "Cindy Sidor",
      role: "Founder & Principal Consultant",
      bio: "Practical governance and compliance support with a steady hand, strong judgment, and zero appetite for avoidable chaos.",
    },
    {
      name: "Board-Ready Delivery",
      role: "Documents That Hold Up",
      bio: "Agendas, minutes, resolutions, tracking logs, governance updates, and polished materials that are built for real-world use.",
    },
    {
      name: "Flexible Engagement",
      role: "Fractional or Project-Based",
      bio: "Support for leadership teams, legal departments, and organizations that need experienced help without adding full-time headcount.",
    },
  ];

  const insights = [
    {
      date: "Recent Insight",
      title: "What Strong Governance Support Actually Looks Like Behind the Scenes",
      excerpt:
        "Good governance work is rarely flashy. It is organized calendars, clean board materials, clear approvals, and follow-through that keeps leadership moving.",
    },
    {
      date: "Practical Focus",
      title: "How Better Processes Reduce Compliance Friction",
      excerpt:
        "When reporting, approvals, and records management are built into the workflow, teams spend less time chasing details and more time making decisions.",
    },
    {
      date: "Client Value",
      title: "Why Fractional Legal Operations Support Can Be a Smart Move",
      excerpt:
        "Sometimes you do not need another full-time hire. You need someone experienced who can step in, build structure, and get work over the line.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <div>
            <p className="text-xl font-semibold tracking-tight">Cindy Consulting</p>
            <p className="text-sm text-slate-500">Governance • Compliance • Board Support</p>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
            <a href="#about" className="transition hover:text-slate-900">Who I Am</a>
            <a href="#services" className="transition hover:text-slate-900">What I Do</a>
            <a href="#insights" className="transition hover:text-slate-900">Insights</a>
            <a href="#contact" className="transition hover:text-slate-900">Contact</a>
          </nav>

          <a
            href="#contact"
            className="rounded-sm border border-slate-900 px-4 py-2 text-sm font-semibold transition hover:bg-slate-900 hover:text-white"
          >
            Schedule a Consultation
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Practical consulting for growing organizations
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Build a stronger foundation with clear governance and compliance support.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              I help companies and organizations stay organized, responsive, and board-ready through thoughtful support across governance, compliance, documentation, and process design.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-sm bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Schedule Your Consultation
              </a>
              <a
                href="#services"
                className="rounded-sm border border-slate-300 px-6 py-3 text-sm font-semibold transition hover:bg-slate-50"
              >
                Explore Services
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-sm border border-slate-200 bg-slate-50 shadow-sm">
            <div className="h-full bg-[linear-gradient(135deg,#e2e8f0,white)] p-8 lg:p-10">
              <div className="rounded-sm border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">What I Help With</p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {practiceAreas.slice(0, 6).map((item) => (
                    <div key={item} className="rounded-sm border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700">
                      {item}
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-sm leading-6 text-slate-600">
                  Strategic support, cleaner workflows, and documents that are ready for leadership review instead of one more round of preventable edits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-slate-200 bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex max-w-3xl flex-col gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Meet the Practice</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Steady support for legal, governance, and operational work.</h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {team.map((person) => (
              <div key={person.name} className="rounded-sm border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-4 h-12 w-12 rounded-full border border-slate-300 bg-slate-100" />
                <h3 className="text-xl font-semibold tracking-tight">{person.name}</h3>
                <p className="mt-1 text-sm font-medium text-slate-500">{person.role}</p>
                <p className="mt-4 leading-7 text-slate-600">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="border-t border-slate-200 bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Practice Areas</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Support designed to keep your organization moving.</h2>
          </div>

          <div className="mt-10 grid gap-x-10 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.map((area) => (
              <div key={area} className="border-b border-slate-300 pb-4">
                <h3 className="text-lg font-semibold tracking-tight">{area}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Thoughtful, detail-driven support tailored to your workflow, timelines, and leadership needs.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Why Work With Me</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Clear communication, practical judgment, and work that actually lands.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                The goal is not to create more paper. The goal is to create structure, reduce friction, and help your team move with more confidence.
              </p>
            </div>

            <div className="grid gap-5">
              {[
                {
                  title: "Leadership",
                  text: "Support executives, boards, and teams with materials and processes that make decision-making easier.",
                },
                {
                  title: "Communication",
                  text: "Bring order to approvals, follow-ups, and documentation so the right people have the right information at the right time.",
                },
                {
                  title: "Experience",
                  text: "Work with someone who understands the details, sees the bigger picture, and knows how to keep projects moving.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-sm border border-slate-200 bg-slate-50 p-6">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 leading-7 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="rounded-sm border border-slate-200 bg-white p-8 shadow-sm">
              <div className="aspect-[4/3] rounded-sm border border-dashed border-slate-300 bg-[linear-gradient(135deg,#f8fafc,#e2e8f0)]" />
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Strategic Support</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Thoughtful guidance for the details that keep organizations protected and prepared.
              </h2>
              <p className="mt-6 leading-8 text-slate-600">
                After understanding your priorities, I help identify pain points, organize the moving parts, and create a practical path forward. That may mean better board processes, stronger documentation, more reliable compliance tracking, or simply fewer things slipping through the cracks.
              </p>
              <p className="mt-4 leading-8 text-slate-600">
                In plain English: less scrambling, more structure, and deliverables that look polished because they are polished.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="insights" className="border-t border-slate-200 bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Insights</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Practical thinking on governance, compliance, and operations.</h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {insights.map((post) => (
              <article key={post.title} className="rounded-sm border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm text-slate-500">{post.date}</p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight">{post.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{post.excerpt}</p>
                <a href="#contact" className="mt-5 inline-block text-sm font-semibold text-slate-900 underline-offset-4 hover:underline">
                  Learn More
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-slate-200 bg-slate-900 py-16 text-white lg:py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">Contact</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Schedule a consultation.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Whether you need ongoing support or help with a specific project, let’s talk through what is needed and what clean execution could look like.
              </p>
            </div>

            <div className="rounded-sm border border-white/10 bg-white/5 p-6">
              <div className="space-y-4 text-sm text-slate-200">
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <a href="mailto:hello@yourbusiness.com" className="mt-1 inline-block hover:underline">
                    hello@yourbusiness.com
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-white">LinkedIn</p>
                  <a href="https://www.linkedin.com" className="mt-1 inline-block hover:underline">
                    Connect on LinkedIn
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-white">Availability</p>
                  <p className="mt-1 text-slate-300">Project-based and fractional consulting support.</p>
                </div>
              </div>

              <p className="mt-6 text-xs leading-6 text-slate-400">
                Reaching out through this page does not create an attorney-client relationship. It does start a useful conversation, which is more than most intake forms can say.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
