// src/components/Philosophy.jsx
import { motion, useReducedMotion } from 'framer-motion';
import Reveal from './Reveal.jsx';

const PRINCIPLES = [
  'Clean Architecture',
  'Reusable Components',
  'Secure APIs',
  'Performance',
  'Responsive UX',
  'Maintainable Code',
];

export default function Philosophy() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section">
      <div className="container-x">
        <div className="rounded-4xl border border-ink/10 bg-ink px-6 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-28">
          <Reveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent">
              Philosophy
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="display mt-6 text-[clamp(2rem,7vw,5.25rem)] text-offwhite">
              Code should
              <br />
              solve problems,
              <br />
              <span className="text-accent">not create them.</span>
            </h2>
          </Reveal>

          <ul className="mt-14 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {PRINCIPLES.map((principle, index) => (
              <motion.li
                key={principle}
                initial={reduceMotion ? undefined : { opacity: 0, x: -20 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-3 border-t border-offwhite/10 pt-4"
              >
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent"
                />
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-offwhite/70">
                  {principle}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}