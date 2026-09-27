// src/components/Education.jsx
import { GraduationCap } from 'lucide-react';
import { education } from '../data/certifications.js';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

export default function Education() {
  return (
    <section className="section">
      <div className="container-x">
        <SectionHeading eyebrow="Education" title="Academic background" />

        <Reveal delay={0.08}>
          <article className="mt-12 flex flex-col gap-8 rounded-4xl border border-ink/10 bg-white/50 p-7 transition-all duration-500 hover:border-accent/30 hover:shadow-soft sm:p-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-5">
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-accent/12">
                <GraduationCap className="h-5 w-5 text-accent" />
              </span>
              <div>
                <h3 className="font-display text-xl font-bold uppercase leading-tight tracking-tight sm:text-2xl">
                  {education.degree}
                </h3>
                <p className="mt-2 text-sm font-medium text-ink/70 sm:text-base">
                  {education.field}
                </p>
                <p className="mt-1 text-sm text-ink/50">{education.institution}</p>
              </div>
            </div>

            <div className="flex gap-10 border-t border-ink/10 pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/40">
                  Duration
                </p>
                <p className="mt-2 font-display text-lg font-bold tracking-tight">
                  {education.period}
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/40">
                  Score
                </p>
                <p className="mt-2 font-display text-lg font-bold tracking-tight text-accent">
                  {education.score.replace('CGPA: ', '')}
                </p>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}