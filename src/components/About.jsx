// src/components/About.jsx
import { Sparkles, ArrowUpRight } from 'lucide-react';
import { aboutHighlights, profile } from '../data/profile.js';
import Reveal from './Reveal.jsx';
import ParallaxElement from './ParallaxElement.jsx';
import SectionHeading from './SectionHeading.jsx';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-x">
        <SectionHeading eyebrow="About Me" />

        <div className="mt-8 grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* LEFT — oversized visual number */}
          <div className="lg:col-span-5">
            <ParallaxElement speed={0.25}>
              <div className="relative">
                <p className="display text-[clamp(6rem,22vw,15rem)] leading-none text-accent">
                  01
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <span className="h-px flex-1 bg-ink/15" aria-hidden="true" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/40">
                    {profile.role}
                  </span>
                </div>

                <div className="card mt-8 p-6">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-accent" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                      Currently building
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">
                    AI-powered data retrieval (RAG) served through FastAPI, integrated with a live
                    School ERP data layer.
                  </p>
                </div>
              </div>
            </ParallaxElement>
          </div>

          {/* RIGHT — editorial copy */}
          <div className="lg:col-span-7">
            <Reveal>
              <h3 className="display text-[clamp(1.85rem,5.2vw,3.5rem)]">
                Building digital
                <br />
                experiences that
                <br />
                <span className="text-accent">solve real problems.</span>
              </h3>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-8 space-y-5 text-base leading-relaxed text-ink/65 sm:text-lg">
                <p>
                  I&apos;m a Junior Full Stack Developer experienced in building scalable web and
                  mobile applications using JavaScript, PHP and Python — with a focus on performance
                  optimization and clean code practices.
                </p>
                <p>
                  Currently I work end-to-end on a School ERP system for 200+ users, covering
                  back-end modules, a cross-platform mobile app, secure REST APIs, real-time
                  communication and database design — plus a Retrieval-Augmented Generation system
                  for natural-language data retrieval.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <ul className="mt-9 flex flex-wrap gap-2">
                {aboutHighlights.map((item) => (
                  <li key={item} className="tag">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-ink/10 pt-7">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/40">
                    Location
                  </p>
                  <p className="mt-1 text-sm text-ink/80">{profile.location}</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/40">
                    Languages
                  </p>
                  <p className="mt-1 text-sm text-ink/80">{profile.languages.join(', ')}</p>
                </div>
                <a
                  href="#contact"
                  data-cursor="hover"
                  className="group ml-auto inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-ink transition-colors hover:text-accent"
                >
                  Let&apos;s talk
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}