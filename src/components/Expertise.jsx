// src/components/Expertise.jsx
import { ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

const EXPERTISE = [
  {
    index: '01',
    title: 'Full Stack Development',
    items: ['React.js', 'Node.js', 'PHP', 'Laravel', 'CodeIgniter'],
  },
  {
    index: '02',
    title: 'API & Backend',
    items: ['REST APIs', 'JWT', 'MVC', 'FastAPI', 'Microservices'],
  },
  {
    index: '03',
    title: 'Real-Time & Mobile',
    items: ['React Native', 'Socket.IO', 'Real-time systems'],
  },
  {
    index: '04',
    title: 'AI & Data',
    items: ['RAG', 'FastAPI', 'MySQL', 'MongoDB', 'Natural-language data retrieval'],
  },
];

export default function Expertise() {
  return (
    <section className="section pt-0" aria-labelledby="expertise-heading">
      <div className="container-x">
        <SectionHeading
          eyebrow="Core Expertise"
          title="What I do best"
          className="max-w-3xl"
        />
        <h2 id="expertise-heading" className="sr-only">
          Core expertise
        </h2>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {EXPERTISE.map((item, index) => (
            <Reveal key={item.index} delay={index * 0.07} className="h-full">
              <article
                data-cursor="hover"
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-4xl border border-ink/10 bg-white/50 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-accent/40 hover:bg-white hover:shadow-lift sm:p-7"
              >
                <div
                  aria-hidden="true"
                  className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-accent/0 blur-2xl transition-all duration-500 group-hover:bg-accent/20"
                />

                <div className="relative">
                  <span className="font-mono text-[11px] tracking-[0.2em] text-accent">
                    {item.index}
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold uppercase leading-tight tracking-tight sm:text-[1.35rem]">
                    {item.title}
                  </h3>
                  <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-1.5">
                    {item.items.map((tech) => (
                      <li
                        key={tech}
                        className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink/50"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                <ArrowUpRight className="relative mt-8 h-5 w-5 text-ink/25 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}