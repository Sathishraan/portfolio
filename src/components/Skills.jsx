// src/components/Skills.jsx
import { skillCategories } from '../data/skills.js';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import TechIcon from './TechIcon.jsx';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="My Toolbox"
          title="Technologies I work with"
          description="Languages, frameworks, databases and tools I use to design, build, test and ship full-stack applications."
        />

        <div className="mt-10 space-y-7">
          {skillCategories.map((category, categoryIndex) => (
            <Reveal key={category.id} delay={categoryIndex * 0.04}>
              <div className="grid gap-4 border-t border-ink/10 pt-6 lg:grid-cols-12">
                <div className="lg:col-span-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[10px] tracking-[0.2em] text-accent">
                      {String(categoryIndex + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-display text-sm font-bold uppercase tracking-[0.14em]">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <ul className="flex flex-wrap gap-2.5 lg:col-span-9">
                  {category.items.map((item) => (
                    <li key={item}>
                      <div
                        data-cursor="hover"
                        className="group flex items-center gap-2.5 rounded-2xl border border-ink/10 bg-white/60 px-4 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-white hover:shadow-soft"
                      >
                        <TechIcon
                          name={item}
                          className="h-4 w-4 text-ink/35 transition-all duration-300 group-hover:scale-110 group-hover:text-accent"
                        />
                        <span className="text-sm font-medium text-ink/75 transition-colors duration-300 group-hover:text-ink">
                          {item}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}