import ButtonLink from '../components/ButtonLink';

const experience = [
  {
    role: 'Trainee Lead In Fashion',
    company: 'Inditex',
    period: 'Apr 2026 - Jun 2026',
    location: 'Berlin, Germany',
    bullets: [
      'Led a 3-month leadership program focused on commercial and operations analytics for retail management.',
      'Identified onboarding bottlenecks and supported technical decisions around AI architecture and workflows.',
      'Improved real-time metrics using workflow agents and operational orchestration.',
    ],
  },
  {
    role: 'Sales Associate',
    company: 'UNIQLO',
    period: 'Sep 2025 - Dec 2025',
    location: 'Berlin, Germany',
    bullets: [
      'Delivered customer-first service in German and English on a high-volume retail floor.',
      'Managed product presentation, stock replenishment, and tailored customer follow-up.',
      'Created smooth customer journeys through reservations and in-store tailoring support.',
    ],
  },
  {
    role: 'Front End Engineer',
    company: 'GoBOLT',
    period: 'Sep 2020 - Nov 2021',
    location: 'Gurugram, India',
    bullets: [
      'Upgraded SaaS products with React, Redux, and modern front-end architecture.',
      'Built a trip optimization tool that boosted route efficiency by 34%.',
      'Streamlined shipment and invoicing flows using GraphQL and API integrations.',
    ],
  },
  {
    role: 'React Front End Engineer',
    company: 'NorthLoop',
    period: 'Oct 2019 - Aug 2020',
    location: 'Gurugram, India',
    bullets: [
      'Integrated Stripe for secure cross-border payments across 12 countries.',
      'Refactored legacy React applications to improve performance and maintainability.',
      'Delivered reusable, scalable UI components with TypeScript and Hooks.',
    ],
  },
];

const skills = ['Customer Experience', 'Visual Merchandising', 'Fashion Retail', 'React', 'TypeScript', 'AI Workflows', 'Product Design'];

const projects = [
  {
    title: 'Trip Optimization Tool',
    description:
      'A front-end heavy route planning experience that improved logistics efficiency and decision speed through smart data visualisation.',
    tags: ['React', 'Redux', 'UX', 'Analytics'],
  },
  {
    title: 'Cross-border Payments',
    description:
      'Payment flows and dashboards for international merchants with Stripe integration, strong reliability, and reusable UI foundations.',
    tags: ['React', 'TypeScript', 'Stripe'],
  },
  {
    title: 'AI-enabled Retail Operations (Concept)',
    description:
      'A future case study focused on workflow agents, real-time metrics, and onboarding automation for store operations teams.',
    tags: ['AI Workflows', 'Dashboards', 'Ops'],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <header className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
          <div className="space-y-7 animate-fadeUp">
            <p className="inline-flex w-fit rounded-full bg-core/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-core dark:bg-sky-500/15 dark:text-sky-200">
              Berlin-based product engineer
            </p>

            <div className="space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight text-ink dark:text-slate-50 sm:text-6xl">
                Priyanshu Tyagi
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                Product-minded software leader blending retail operations, customer experience, and modern engineering.
                I build scalable digital products with polished UX, data-driven decisions, and a future-ready portfolio outlook.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="#about" variant="primary">
                About me
              </ButtonLink>
              <ButtonLink href="#experience" variant="secondary">
                Career journey
              </ButtonLink>
              <ButtonLink href="/Profile.pdf" variant="secondary" target="_blank" download>
                Download CV
              </ButtonLink>
              <ButtonLink href="#contact" variant="ghost">
                Let’s talk
              </ButtonLink>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-glow dark:border-slate-900/70 dark:bg-slate-950/60">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-core/15 blur-3xl dark:bg-sky-500/15" aria-hidden />
            <div className="absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-highlight/15 blur-3xl dark:bg-orange-400/10" aria-hidden />

            <div className="relative space-y-6">
              <div className="rounded-3xl bg-gradient-to-br from-core to-highlight p-6 text-white shadow-soft">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-200">Current focus</p>
                <h2 className="mt-4 text-2xl font-semibold">AI-enabled operations and retail-led product growth</h2>
                <p className="mt-3 text-sm leading-6 text-slate-100">
                  Driving digital transformation across people, process, and product with rigor, empathy, and commercial insight.
                </p>
              </div>

              <div className="grid gap-4 rounded-3xl bg-slate-50 p-6 dark:bg-slate-900/40">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Location</p>
                  <p className="mt-2 text-lg font-semibold text-ink dark:text-slate-100">Berlin, Germany</p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Contact</p>
                  <p className="mt-2 text-lg font-semibold text-ink dark:text-slate-100">priyanshumain@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section
          id="about"
          className="mt-24 rounded-[2rem] border border-slate-200/70 bg-white p-10 shadow-glow dark:border-slate-900/70 dark:bg-slate-950/60"
        >
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-tight text-ink dark:text-slate-50">About</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
                I bring a unique intersection of customer-facing retail leadership and product engineering. My experience ranges
                from front-line operations at global retail brands to building enterprise-grade digital platforms for logistics and
                payments.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
                I thrive on translating business challenges into elegant technical solutions—especially where AI, analytics, and user
                experience converge to create seamless outcomes.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-semibold text-slate-700 dark:border-slate-800 dark:bg-slate-900/40 dark:text-slate-200"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="mt-24 grid gap-10 lg:grid-cols-[.62fr_.38fr]">
          <div className="space-y-8">
            <div className="rounded-[2rem] border border-slate-200/70 bg-white p-10 shadow-glow dark:border-slate-900/70 dark:bg-slate-950/60">
              <h2 className="text-3xl font-semibold tracking-tight text-ink dark:text-slate-50">Experience</h2>
              <p className="mt-4 text-slate-600 dark:text-slate-300">
                A pathway shaped by leadership, customer impact, and technical product delivery across retail, logistics, and digital
                services.
              </p>
            </div>

            <div className="space-y-6">
              {experience.map((item) => (
                <article
                  key={`${item.company}-${item.role}`}
                  className="group rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-glow dark:border-slate-900/70 dark:bg-slate-950/60"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-ink dark:text-slate-50">{item.role}</h3>
                      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        {item.company} · {item.location}
                      </p>
                    </div>
                    <p className="text-sm font-semibold text-core dark:text-sky-300">{item.period}</p>
                  </div>

                  <ul className="mt-5 space-y-3 text-slate-600 dark:text-slate-300">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-2 inline-block h-2 w-2 shrink-0 rounded-full bg-core dark:bg-sky-300" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          <aside className="space-y-8">
            <div className="rounded-[2rem] bg-core p-8 text-white shadow-glow">
              <h3 className="text-2xl font-semibold">Future portfolio</h3>
              <p className="mt-4 text-base leading-7 text-slate-200">
                Building a portfolio of modern digital experiences that combine operational efficiency, intuitive design, and scalable
                engineering.
              </p>
              <div className="mt-8 grid gap-3">
                {['Enterprise product concepts', 'AI-driven retail workflows', 'Customer experience projects'].map((label) => (
                  <div
                    key={label}
                    className="rounded-full bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                  >
                    {label}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-900/70 dark:bg-slate-950/60">
              <h3 className="text-2xl font-semibold text-ink dark:text-slate-50">Education</h3>
              <dl className="mt-6 space-y-4 text-slate-600 dark:text-slate-300">
                <div>
                  <dt className="font-semibold text-ink dark:text-slate-100">MS Information Technology</dt>
                  <dd>Berlin School of Business & Innovation · 2023–2025</dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink dark:text-slate-100">MBA International Marketing</dt>
                  <dd>IU International University of Applied Sciences · 2021–2023</dd>
                </div>
              </dl>
            </div>
          </aside>
        </section>

        <section id="projects" className="mt-24">
          <div className="rounded-[2rem] border border-slate-200/70 bg-white p-10 shadow-glow dark:border-slate-900/70 dark:bg-slate-950/60">
            <h2 className="text-3xl font-semibold tracking-tight text-ink dark:text-slate-50">Selected work</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              A few highlights. I can expand these into full case studies with goals, constraints, architecture, and measurable impact.
            </p>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-7 shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-glow dark:border-slate-900/70 dark:bg-slate-900/30 dark:hover:bg-slate-950/60"
                >
                  <h3 className="text-lg font-semibold text-ink dark:text-slate-50">{project.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600 dark:border-slate-800 dark:bg-slate-950/50 dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mt-24">
          <div className="grid gap-6 rounded-[2rem] border border-slate-200/70 bg-white p-10 shadow-glow dark:border-slate-900/70 dark:bg-slate-950/60 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-ink dark:text-slate-50">Let’s build something polished</h2>
              <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
                If you’re hiring or collaborating on product engineering, retail ops tooling, or AI-enabled workflows—reach out.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="mailto:priyanshumain@gmail.com" variant="primary">
                  Email: priyanshumain@gmail.com
                </ButtonLink>
                <ButtonLink href="#projects" variant="secondary">
                  View work
                </ButtonLink>
              </div>
            </div>

            <div className="rounded-[1.75rem] bg-gradient-to-br from-slate-900 to-core p-8 text-white shadow-soft dark:from-slate-950 dark:to-sky-900/70">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-200">What I value</p>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-100">
                <li>• Strong UX craft and clean component systems</li>
                <li>• Commercial thinking + measurable outcomes</li>
                <li>• Reliable engineering practices and iteration speed</li>
              </ul>
              <p className="mt-6 text-sm text-slate-200">
                Available for roles in Berlin / EU (or remote) across product engineering and customer-facing platforms.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
