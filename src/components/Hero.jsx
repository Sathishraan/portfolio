// src/components/Hero.jsx
import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowDown, Download, Eye } from 'lucide-react';
import { profile, heroStats } from '../data/profile.js';
import portrait from '../assets/portfolio-removebg-preview.png';
import Reveal from './Reveal.jsx';

function HeroVisual() {
  return (
    <div className="relative left-1/2 w-11/12 -translate-x-1/2 sm:-mt-8 sm:w-[115%] sm:max-w-120 lg:mt-0 lg:w-full lg:max-w-100">
      <img
        src={portrait}
        alt="Sathish Palanisamy, Full Stack Developer"
        className="relative z-20 block h-auto w-full object-contain drop-shadow-[0_24px_36px_rgba(6,78,59,0.14)]"
        draggable="false"
      />
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
  const visualY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section id="home" ref={sectionRef} className="relative overflow-hidden pt-24 sm:pt-28 lg:pt-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="hero-atmosphere absolute inset-0" />
        <div className="absolute inset-0 noise opacity-45" />
      </div>

      <div className="container-x">
        <div className="relative">
          <Reveal>
            <p className="hero-greeting relative z-10 text-center text-[clamp(3.1rem,8vw,6.75rem)] text-ink">
              Hello, there.
            </p>
          </Reveal>

          <div className="grid items-center gap-4 md:gap-8 lg:grid-cols-12 lg:gap-5">
            <motion.div
              style={reduceMotion ? undefined : { y: textY, opacity: fade }}
              className="relative z-10 order-1 min-w-0 text-left lg:col-span-4"
            >
              <Reveal delay={0.06}>
                <p className="eyebrow">{profile.eyebrow}</p>
                <h1 className="mt-4 font-display text-[clamp(3.4rem,8vw,6.5rem)] font-bold uppercase leading-[0.88] text-ink">
                  {profile.displayName}
                  <span className="text-accent">.</span>
                  <span className="mt-2 block text-[clamp(1.7rem,3.2vw,2.8rem)] leading-none text-ink/65">
                    PALANISAMY
                  </span>
                </h1>
                <p className="mt-5 font-mono text-[9px] uppercase tracking-[0.16em] text-ink/45 sm:text-[10px]">
                  Full stack / Tamil Nadu, India
                </p>
              </Reveal>
            </motion.div>

            <motion.div
              style={reduceMotion ? undefined : { y: visualY }}
              className="relative z-20 order-2 mx-auto w-full max-w-105 lg:col-span-4 lg:max-w-none"
            >
              <Reveal delay={0.1} y={40}>
                <HeroVisual />
              </Reveal>
            </motion.div>

            <motion.div
              style={reduceMotion ? undefined : { y: textY, opacity: fade }}
              className="relative z-10 order-3 min-w-0 text-center lg:col-span-4 lg:text-left"
            >
              <Reveal delay={0.12}>
                <p className="eyebrow">What I do</p>
                <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.5rem)] font-semibold uppercase leading-[0.95] text-ink">
                  Full Stack
                  <span className="mt-1 block text-accent">Developer</span>
                </h2>
              </Reveal>

              <Reveal delay={0.18}>
                <p className="mx-auto mt-5 max-w-sm text-sm leading-relaxed text-ink/60 lg:mx-0 sm:text-base">
                  {profile.tagline}
                </p>
              </Reveal>

              <Reveal delay={0.24}>
                <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center lg:justify-start">
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

              <Reveal delay={0.3}>
                <a
                  href="#about"
                  data-cursor="hover"
                  className="mt-7 hidden items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-ink/40 transition-colors hover:text-accent sm:inline-flex"
                >
                  Scroll to explore
                  <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
                </a>
              </Reveal>
            </motion.div>
          </div>
        </div>

        <HeroStats />
      </div>
    </section>
  );
}