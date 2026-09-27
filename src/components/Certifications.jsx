// src/components/Certifications.jsx
import { ArrowUpRight, BadgeCheck, Sparkles } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { activities, certifications } from '../data/certifications.js';
import TechIcon from './TechIcon.jsx';

const CERTIFICATE_TECH = {
  'Full Stack Development': ['React.js', 'Node.js'],
  'React.js Development': ['React.js'],
  'AI Facial Detection': ['AI'],
};

export default function Certifications() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="certifications" data-cursor="inverse" className="section relative isolate overflow-hidden bg-ink pt-16 text-offwhite sm:pt-20 lg:pt-24">
      <div className="container-x">
        <div className="grid gap-6 border-b border-offwhite/20 pb-8 md:grid-cols-[1fr_0.8fr] md:items-end md:gap-12 sm:pb-10">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-offwhite/50">
              Credentials / 01—03
            </span>
            <h2 className="display mt-5 text-[clamp(2.5rem,6vw,4.5rem)] text-offwhite">
              Certified &amp; trained.
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-relaxed text-offwhite/60 md:justify-self-end sm:text-base">
            Focused learning across full-stack development, modern interfaces and applied AI.
          </p>
        </div>

        <div className="mt-8 grid border-y border-offwhite/20 sm:mt-10 sm:grid-cols-3">
          {certifications.map((certification, index) => {
            const technologies = CERTIFICATE_TECH[certification.title] || [];
            return (
              <motion.article
                key={certification.title}
                initial={reduceMotion ? undefined : { opacity: 0, y: 28 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={reduceMotion ? undefined : { y: -5 }}
                className="group relative flex min-h-57.5 flex-col justify-between overflow-hidden border-b border-offwhite/15 px-4 py-6 last:border-b-0 sm:min-h-70 sm:border-b-0 sm:border-r sm:px-6 sm:py-8 sm:last:border-r-0 lg:px-8"
              >
                <span className="pointer-events-none absolute -bottom-8 -right-2 select-none font-display text-[8rem] font-bold leading-none text-offwhite/4.5 transition-transform duration-700 group-hover:-translate-y-3">
                  {certification.year.slice(-2)}
                </span>

                <div className="relative flex items-center justify-between">
                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-offwhite/45">
                    Credential {certification.index || String(index + 1).padStart(2, '0')}
                  </span>
                  <BadgeCheck className="h-4 w-4 text-offwhite/35 transition-colors duration-300 group-hover:text-accent" />
                </div>

                <div className="relative mt-8">
                  <span className="mb-5 flex h-12 w-12 items-center justify-center gap-0.5 rounded-full border border-offwhite/30 bg-offwhite/10 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                    {technologies.map((technology) => (
                      <TechIcon
                        key={technology}
                        name={technology}
                        className={technologies.length > 1 ? 'h-4 w-4' : 'h-6 w-6'}
                      />
                    ))}
                  </span>
                  <h3 className="max-w-xs font-display text-lg font-semibold leading-tight text-offwhite sm:text-xl">
                    {certification.title}
                  </h3>
                  <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.14em] text-offwhite/50">
                    {certification.issuer} <span className="px-1 text-accent">/</span> {certification.year}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-12 grid gap-6 border-t border-offwhite/20 pt-8 md:grid-cols-[0.7fr_1.3fr] md:gap-12 sm:mt-16 sm:pt-10">
          <div>
            <span className="inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-offwhite/50">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              Continued learning
            </span>
            <h3 className="mt-3 font-display text-xl font-semibold text-offwhite sm:text-2xl">
              Workshops &amp; activities
            </h3>
          </div>

          <ul className="border-t border-offwhite/15 md:border-t-0">
            {activities.map((activity, index) => (
              <motion.li
                key={activity.title}
                initial={reduceMotion ? undefined : { opacity: 0, x: 18 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group grid grid-cols-[2rem_minmax(0,1fr)_1.5rem] items-start gap-3 border-b border-offwhite/15 py-4 sm:grid-cols-[3rem_minmax(0,1fr)_1.5rem] sm:gap-4 sm:py-5"
              >
                <span className="pt-0.5 font-mono text-[9px] text-accent">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span>
                  <span className="block font-display text-sm font-medium text-offwhite transition-colors group-hover:text-accent sm:text-base">
                    {activity.title}
                  </span>
                  <span className="mt-1 block text-xs leading-relaxed text-offwhite/50 sm:text-sm">
                    {activity.description}
                  </span>
                </span>
                <ArrowUpRight className="mt-0.5 h-4 w-4 text-offwhite/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}