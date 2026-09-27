// src/components/Services.jsx
import { ArrowUpRight, Code2, Database, Server, Smartphone } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { services } from '../data/services.js';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

const SERVICE_ICONS = [Code2, Server, Smartphone, Database];

export default function Services() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="services" className="section overflow-hidden">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <SectionHeading
              eyebrow="Services / 01—04"
              title="From idea to impact."
              description="End-to-end delivery across web, backend, mobile and AI-powered data systems."
            />
            <Reveal delay={0.12}>
              <div className="mt-9 flex items-center gap-4 border-t border-ink/15 pt-4">
                <span className="font-display text-4xl font-bold text-accent">
                  {String(services.length).padStart(2, '0')}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-ink/45">
                  ways I can help
                </span>
              </div>
            </Reveal>
          </div>

          <div className="border-t border-ink/15">
            {services.map((service, index) => {
              const ServiceIcon = SERVICE_ICONS[index % SERVICE_ICONS.length];
              return (
                <motion.article
                  key={service.index}
                  initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.6, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={reduceMotion ? undefined : { x: 5 }}
                  className="group relative border-b border-ink/15 py-6 sm:py-8"
                >
                  <div className="grid grid-cols-[2.75rem_minmax(0,1fr)_2.5rem] gap-x-3 sm:grid-cols-[4.5rem_minmax(0,1fr)_3.5rem] sm:gap-x-5">
                    <span className="pt-1 font-display text-3xl font-bold leading-none text-accent/50 transition-colors duration-300 group-hover:text-accent sm:text-5xl">
                      {service.index}
                    </span>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2 text-accent">
                        <ServiceIcon className="h-4 w-4" strokeWidth={1.7} />
                        <span className="font-mono text-[8px] uppercase tracking-[0.17em] text-ink/40">
                          Service {service.index}
                        </span>
                      </div>
                      <h3 className="mt-2 font-display text-xl font-semibold leading-tight text-ink transition-colors duration-300 group-hover:text-accent sm:text-2xl">
                        {service.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-xs leading-relaxed text-ink/60 sm:text-sm">
                        {service.description}
                      </p>
                      <ul className="mt-4 flex flex-wrap gap-x-2 gap-y-1.5">
                        {service.points.map((point, pointIndex) => (
                          <li
                            key={point}
                            className="inline-flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.08em] text-ink/45 sm:text-[9px]"
                          >
                            {pointIndex > 0 && (
                              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-accent/60" />
                            )}
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <span
                      aria-hidden="true"
                      className="mt-1 flex h-9 w-9 items-center justify-center self-start rounded-full border border-ink/15 text-ink/40 transition-all duration-300 group-hover:rotate-45 group-hover:border-accent group-hover:bg-accent group-hover:text-white sm:h-10 sm:w-10"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full"
                  />
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}