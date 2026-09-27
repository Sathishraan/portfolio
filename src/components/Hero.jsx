// src/components/Hero.jsx
import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowDown, Download, Eye, Terminal } from 'lucide-react';
import { profile, heroStats } from '../data/profile.js';
import usePointerParallax from '../hooks/usePointerParallax.js';
import Reveal from './Reveal.jsx';
import TechIcon from './TechIcon.jsx';

/* ------------------------------------------------------------------ */
/* Right-hand abstract developer visual                                */
/* ------------------------------------------------------------------ */

const FLOATING_TECH = [
  { name: 'React.js', className: 'left-[2%] top-[14%]', depth: 34, delay: 0 },
  { name: 'Node.js', className: 'right-[4%] top-[6%]', depth: 52, delay: 0.4 },
  { name: 'FastAPI', className: 'left-[-2%] bottom-[26%]', depth: 44, delay: 0.8 },
  { name: 'MongoDB', className: 'right-[-2%] bottom-[18%]', depth: 28, delay: 1.2 },
];

function HeroVisual() {
  const { x, y } = usePointerParallax(1);
  const reduceMotion = useReducedMotion();

  const circleX = useTransform(x, (value) => value * -26);
  const circleY = useTransform(y, (value) => value * -26);
  const ringX = useTransform(x, (value) => value * 18);
  const ringY = useTransform(y, (value) => value * 18);
  const cardX = useTransform(x, (value) => value * 40);
  const cardY = useTransform(y, (value) => value * 40);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      {/* Layer 1 — emerald circle */}
      <motion.div
        style={reduceMotion ? undefined : { x: circleX, y: circleY }}
        className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent"
      >
        <div className="h-full w-full rounded-full bg-[radial-gradient(circle_at_30%_25%,rgba(248,231,201,0.35),transparent_60%)]" />
      </motion.div>

      {/* Layer 2 — dashed orbit ring */}
      <motion.div
        style={reduceMotion ? undefined : { x: ringX, y: ringY }}
        className="absolute inset-[2%] rounded-full border border-dashed border-ink/20 anim-spin-slow"
      />
      <div className="absolute inset-[16%] rounded-full border border-ink/10" />

      {/* Layer 3 — floating tech chips */}
      {FLOATING_TECH.map((tech) => {
        const chipX = useTransform(x, (value) => value * tech.depth);
        const chipY = useTransform(y, (value) => value * tech.depth);
        return (
          <motion.div
            key={tech.name}
            style={reduceMotion ? undefined : { x: chipX, y: chipY }}
            className={`absolute ${tech.className} z-20`}
          >
            <div
              className="anim-float flex items-center gap-2 rounded-2xl border border-ink/10 bg-offwhite/90 px-3 py-2 shadow-soft backdrop-blur-sm"
              style={{ animationDelay: `${tech.delay}s` }}
            >
              <TechIcon name={tech.name} className="h-4 w-4 text-accent" />
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink/70">
                {tech.name}
              </span>
            </div>
          </motion.div>
        );
      })}

      {/* Layer 4 — terminal window */}
      <motion.div
        style={reduceMotion ? undefined : { x: cardX, y: cardY }}
        className="absolute bottom-[6%] left-[6%] z-30 w-[68%] max-w-[260px] overflow-hidden rounded-3xl border border-ink/10 bg-ink p-3 shadow-lift sm:p-4"
      >
        <div className="flex items-center gap-2 pb-2.5">
          <span className="h-2 w-2 rounded-full bg-accent/60" />
          <span className="h-2 w-2 rounded-full bg-offwhite" />
          <span className="h-2 w-2 rounded-full bg-accent" />
          <span className="ml-2 flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-offwhite/40 sm:text-[10px]">
            <Terminal className="h-3 w-3" />
            sathish.js
          </span>
        </div>
        <pre className="overflow-hidden whitespace-pre-wrap break-words font-code text-[9.5px] leading-[1.55] text-offwhite/80 sm:text-[10.5px]">
          <code>{`const dev = {
  role: "Full Stack",
  stack: [React, Node, PHP],
  ai: "RAG + FastAPI",
  focus: "clean, scalable",
};`}</code>
        </pre>
        <span className="mt-1 inline-block h-2.5 w-1.5 bg-accent [animation:caret_1.1s_step-end_infinite]" />
      </motion.div>

      {/* Layer 5 — badge */}
      <div className="absolute right-[2%] top-[42%] z-30 rounded-2xl border border-ink/10 bg-offwhite/90 px-4 py-3 text-right shadow-soft backdrop-blur-sm">
        <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
          Full Stack
        </span>
        <span className="block font-display text-sm font-bold uppercase tracking-tight">
          Developer
        </span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Hero stats                                                          */
/* ------------------------------------------------------------------ */

function HeroStats() {
  return (
    <div className="mt-16 grid grid-cols-2 gap-3 sm:gap-4 lg:mt-24 lg:grid-cols-4">
      {heroStats.map((stat, index) => (
        <Reveal key={stat.label} delay={index * 0.08}>
          <div
            data-cursor="hover"
            className="group h-full rounded-4xl border border-ink/10 bg-white/50 p-5 transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 hover:shadow-soft sm:p-6"
          >
            <p className="display text-3xl text-ink transition-colors duration-300 group-hover:text-accent sm:text-4xl lg:text-[2.75rem]">
              {stat.value}
            </p>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/70">
              {stat.label}
            </p>
            <p className="mt-1 text-xs text-ink/40">{stat.hint}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export default function Hero() {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const textY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const visualY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section id="home" ref={sectionRef} className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-40">
      {/* Background layers */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 noise opacity-70" />
        <div className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-[360px] w-[360px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container-x">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
          {/* LEFT — typography */}
          <motion.div
            style={reduceMotion ? undefined : { y: textY, opacity: fade }}
            className="lg:col-span-7"
          >
            <Reveal>
              <p className="eyebrow flex items-center gap-3">
                <span className="h-px w-10 bg-accent" aria-hidden="true" />
                {profile.eyebrow}
              </p>
            </Reveal>

            <h1 className="mt-6">
              <Reveal delay={0.06}>
                <span className="display block text-[clamp(3.25rem,13vw,9.5rem)]">
                  {profile.displayName}
                  <span className="text-accent">.</span>
                </span>
              </Reveal>

              <Reveal delay={0.12}>
                <span className="display mt-1 block text-[clamp(2.5rem,10.5vw,7.5rem)]">
                  Full Stack
                </span>
              </Reveal>

              <Reveal delay={0.18}>
                <span className="display text-outline mt-1 block text-[clamp(2.5rem,10.5vw,7.5rem)]">
                  Developer
                </span>
              </Reveal>
            </h1>

            <Reveal delay={0.24}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-ink/60 sm:text-lg">
                {profile.tagline}
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="hover"
                  className="btn btn-primary w-full sm:w-auto"
                >
                  <Eye className="h-4 w-4" />
                  View Resume
                </a>
                <a
                  href={profile.resumeUrl}
                  download
                  data-cursor="hover"
                  className="btn btn-ghost w-full sm:w-auto"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.36}>
              <a
                href="#about"
                data-cursor="hover"
                className="mt-10 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/40 transition-colors hover:text-accent"
              >
                Scroll to explore
                <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
              </a>
            </Reveal>
          </motion.div>

          {/* RIGHT — abstract visual */}
          <motion.div
            style={reduceMotion ? undefined : { y: visualY }}
            className="lg:col-span-5"
          >
            <Reveal delay={0.1} y={40}>
              <HeroVisual />
            </Reveal>
          </motion.div>
        </div>

        <HeroStats />
      </div>
    </section>
  );
}