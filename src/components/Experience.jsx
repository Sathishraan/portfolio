// src/components/Experience.jsx
import { Briefcase, CalendarDays, ChevronDown, MapPin } from 'lucide-react';
import { experience } from '../data/experience.js';
import ParallaxElement from './ParallaxElement.jsx';
import Reveal from './Reveal.jsx';

function CareerChapter({ job }) {
  const isCurrentRole = job.id === 'sparkle';
  const palette = isCurrentRole
    ? {
        surface: 'bg-ink text-offwhite',
        faint: 'text-white/[0.06]',
        border: 'border-white/15',
        muted: 'text-offwhite/55',
        body: 'text-offwhite/75',
        metric: 'text-accent',
      }
    : {
        surface: 'bg-accent-soft text-ink',
        faint: 'text-ink/[0.06]',
        border: 'border-ink/15',
        muted: 'text-ink/50',
        body: 'text-ink/70',
        metric: 'text-accent-dark',
      };
  const metrics = isCurrentRole
    ? [
        { value: '200+', label: 'ERP users supported' },
        { value: '35%', label: 'fewer API calls' },
        { value: '3+', label: 'service integrations' },
      ]
    : [
        { value: String(job.tech.length).padStart(2, '0'), label: 'technologies used' },
        { value: String(job.groups.length).padStart(2, '0'), label: 'delivery areas' },
        { value: 'Remote', label: 'team setup' },
      ];

  return (
    <article id={`experience-${job.id}`} className="scroll-mt-28">
      <div className={`relative grid overflow-hidden md:grid-cols-[minmax(0,1fr)_250px] ${palette.surface}`}>
        <div className="relative isolate overflow-hidden p-6 sm:p-9 lg:p-12">
          <ParallaxElement
            speed={0.12}
            className={`pointer-events-none absolute -right-3 -top-8 -z-10 select-none font-display text-[12rem] font-bold leading-none sm:-right-1 sm:-top-12 sm:text-[17rem] ${palette.faint}`}
          >
            {job.index}
          </ParallaxElement>

          <Reveal>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[9px] uppercase tracking-[0.16em] sm:text-[10px]">
              <span className={palette.metric}>Chapter {job.index}</span>
              <span className={`inline-flex items-center gap-1.5 ${palette.muted}`}>
                <CalendarDays className="h-3.5 w-3.5" />
                {job.period}
              </span>
            </div>
            <h3 className="display mt-7 max-w-3xl text-[clamp(2.2rem,6vw,4.6rem)] leading-[0.95]">
              {job.role}
            </h3>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
              <span className="inline-flex items-center gap-2 font-medium">
                <Briefcase className={`h-4 w-4 ${palette.metric}`} />
                {job.company}
              </span>
              <span className={`inline-flex items-center gap-2 ${palette.muted}`}>
                <MapPin className="h-4 w-4" />
                {job.location}
              </span>
            </div>
            <p className={`mt-8 max-w-2xl text-sm leading-relaxed sm:text-base ${palette.body}`}>
              {job.summary}
            </p>
          </Reveal>
        </div>

        <aside className={`grid grid-cols-3 border-t md:grid-cols-1 md:border-l md:border-t-0 ${palette.border}`}>
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className={`flex min-w-0 flex-col justify-center gap-1 border-r px-3 py-5 last:border-r-0 sm:px-5 md:border-b md:border-r-0 md:px-7 md:py-6 ${palette.border}`}
            >
              <span className={`font-display text-xl font-bold sm:text-2xl ${palette.metric}`}>
                {metric.value}
              </span>
              <span className={`text-[9px] leading-snug sm:text-[10px] ${palette.muted}`}>
                {metric.label}
              </span>
            </div>
          ))}
        </aside>
      </div>

      <div className="mt-7 sm:mt-9">
        <div className="mb-3 flex items-center justify-between gap-4">
          <span className="eyebrow">Selected contributions</span>
          <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-ink/40">
            {String(job.groups.length).padStart(2, '0')} focus areas
          </span>
        </div>
        <div className="border-t border-ink/15">
          {job.groups.map((group, index) => (
            <details
              key={group.title}
              open={index === 0}
              className="group border-b border-ink/15"
            >
              <summary className="grid cursor-pointer list-none grid-cols-[2rem_minmax(0,1fr)_1.25rem] items-center gap-3 py-4 sm:grid-cols-[3rem_minmax(0,1fr)_1.5rem] sm:gap-4 sm:py-5">
                <span className="font-mono text-[10px] text-accent">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-sm font-semibold text-ink sm:text-base">
                    {group.title}
                  </span>
                  <span className="mt-1 block truncate text-[10px] text-ink/45 sm:text-xs">
                    {group.stack.join('  /  ')}
                  </span>
                </span>
                <ChevronDown className="h-4 w-4 text-ink/50 transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <div className="grid gap-4 pb-5 pl-11 sm:grid-cols-[minmax(0,1fr)_180px] sm:gap-8 sm:pb-6 sm:pl-16">
                <ul className="space-y-3">
                  {group.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-ink/65">
                      <span
                        aria-hidden="true"
                        className="mt-[0.6rem] h-1 w-1 shrink-0 rounded-full bg-accent"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
                <ul className="flex flex-wrap content-start gap-2 sm:flex-col sm:gap-1.5">
                  {group.stack.map((tech) => (
                    <li key={tech} className="font-mono text-[9px] uppercase tracking-[0.12em] text-accent-dark">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          ))}
        </div>
      </div>

      <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
        {job.tech.map((tech) => (
          <li key={tech} className="font-mono text-[9px] uppercase tracking-[0.12em] text-ink/45">
            {tech}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-x">
        <Reveal>
          <div className="grid gap-6 border-b border-ink/15 pb-8 md:grid-cols-[1fr_0.8fr] md:items-end md:gap-12 md:pb-10">
            <div>
              <span className="eyebrow">Experience / Career chapters</span>
              <h2 className="display mt-5 text-[clamp(2.5rem,6vw,4.5rem)]">Built in the field.</h2>
            </div>
            <p className="max-w-xl text-base leading-relaxed text-ink/60 md:justify-self-end">
              Hands-on work across production ERP systems, cross-platform mobile apps, secure APIs and AI-powered data retrieval.
            </p>
          </div>
        </Reveal>

        <div className="mt-9 grid gap-9 lg:mt-14 lg:grid-cols-[190px_minmax(0,1fr)] lg:gap-14">
          <nav aria-label="Experience chapters" className="lg:sticky lg:top-28 lg:h-fit">
            <span className="hidden font-mono text-[9px] uppercase tracking-[0.18em] text-ink/40 lg:block">
              Career index
            </span>
            <ul className="hide-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 lg:mx-0 lg:mt-5 lg:flex-col lg:gap-0 lg:overflow-visible lg:px-0">
              {experience.map((job) => (
                <li key={job.id} className="shrink-0">
                  <a
                    href={`#experience-${job.id}`}
                    className="group flex w-40 items-center gap-3 border-b-2 border-ink/10 px-3 py-3 transition-colors hover:border-accent lg:w-auto lg:border-b-0 lg:border-l-2 lg:px-4 lg:py-4 lg:hover:border-l-accent"
                  >
                    <span className="font-mono text-[10px] text-accent">{job.index}</span>
                    <span className="min-w-0">
                      <span className="block truncate text-xs font-semibold text-ink">
                        {job.role}
                      </span>
                      <span className="mt-0.5 block truncate text-[10px] text-ink/45">
                        {job.company}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="min-w-0 space-y-14 sm:space-y-20">
            {experience.map((job) => (
              <CareerChapter key={job.id} job={job} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}