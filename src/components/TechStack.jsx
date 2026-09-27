import { skillCategories } from '../data/skills.js';
import Reveal from './Reveal.jsx';
import TechIcon from './TechIcon.jsx';

const CORD_LENGTHS = [38, 64, 46, 58, 34, 68];

export default function TechStack() {
  return (
    <section className="section overflow-hidden">
      <div className="container-x">
        <div className="grid gap-5 md:grid-cols-[1.1fr_0.9fr] md:items-end md:gap-12">
          <Reveal>
            <div>
              <span className="eyebrow">Technologies I work with</span>
              <h2 className="display mt-4 text-[clamp(2.5rem,6vw,4.75rem)]">My Toolbox</h2>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-xl text-base leading-relaxed text-ink/60 md:pb-2">
              Languages, frameworks, databases and tools I use to design, build, test and ship full-stack applications.
            </p>
          </Reveal>
        </div>

        <div className="relative mx-auto mt-14 max-w-6xl before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-ink/25">
          <span
            aria-hidden="true"
            className="absolute left-0 top-0 z-10 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-ink/30 bg-offwhite"
          />
          <span
            aria-hidden="true"
            className="absolute right-0 top-0 z-10 h-2 w-2 translate-x-1/2 -translate-y-1/2 rounded-full border border-ink/30 bg-offwhite"
          />

          <ul className="grid grid-cols-2 gap-x-3 gap-y-12 pt-5 sm:gap-x-5 sm:gap-y-14 lg:grid-cols-3 lg:gap-x-8">
            {skillCategories.map((category, index) => (
              <li key={category.id} className="flex min-w-0 justify-center">
                <Reveal delay={index * 0.06} className="w-full">
                  <div
                    className="anim-hang motion-reduce:animate-none flex w-full origin-top flex-col items-center"
                    style={{
                      animationDelay: `${index * -0.55}s`,
                      animationDuration: `${5.2 + (index % 3) * 0.35}s`,
                    }}
                  >
                    <div
                      aria-hidden="true"
                      className="w-px bg-ink/25"
                      style={{ height: `${CORD_LENGTHS[index]}px` }}
                    />
                    <span
                      aria-hidden="true"
                      className="z-10 -mb-1 h-3 w-3 rounded-full border-2 border-accent bg-offwhite"
                    />

                    <article className="group min-h-[220px] w-full rounded-md border border-ink/15 bg-white/60 p-3.5 shadow-soft transition-colors duration-300 hover:border-accent/50 hover:bg-white/80 sm:p-5">
                      <div className="flex items-center justify-between gap-2 border-b border-ink/10 pb-3">
                        <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-accent">
                          {String(index + 1).padStart(2, '0')} / 06
                        </span>
                        <span
                          aria-hidden="true"
                          className="h-1.5 w-1.5 rounded-full bg-accent/60 transition-colors group-hover:bg-accent"
                        />
                      </div>
                      <h3 className="mt-3 font-display text-sm font-semibold text-ink sm:text-base">
                        {category.title}
                      </h3>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {category.items.map((name) => (
                          <li
                            key={name}
                            className="inline-flex max-w-full items-center gap-1.5 rounded border border-ink/10 bg-offwhite/80 px-2 py-1.5 text-[10px] leading-tight text-ink/70 sm:text-[11px]"
                          >
                            <TechIcon name={name} className="h-3.5 w-3.5 shrink-0" />
                            <span>{name}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}