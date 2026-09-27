// src/components/ProjectCard.jsx
import { ArrowUpRight } from 'lucide-react';
import ParallaxElement from './ParallaxElement.jsx';
import ProjectVisual from './ProjectVisual.jsx';

export default function ProjectCard({ project, onOpen, featured = false }) {
  return (
    <article
      data-cursor="view"
      className="group grid h-full min-h-0 content-center gap-4 py-1 sm:gap-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:gap-10"
    >
      <div className="relative z-10 min-w-0 py-1">
        <div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.16em] text-ink/45">
          <span className="text-accent">{project.index}</span>
          <span className="h-px w-7 bg-accent/60" aria-hidden="true" />
          <span>{project.category}</span>
        </div>
        <h3 className={`mt-3 font-display font-bold uppercase leading-[0.95] text-ink transition-colors group-hover:text-accent ${featured ? 'text-[clamp(2rem,5vw,4rem)]' : 'text-[clamp(1.7rem,4vw,3rem)]'}`}>
          {project.title}
        </h3>
        <p className="mt-3 max-w-xl text-xs leading-relaxed text-ink/65 sm:text-sm">
          {project.tagline}
        </p>

        {featured && (
          <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 border-y border-ink/15 py-3 sm:mt-5 sm:gap-x-6 sm:py-4">
            {[
              { value: '200+', label: 'users' },
              { value: '35%', label: 'fewer API calls' },
              { value: '3+', label: 'integrations' },
            ].map((metric) => (
              <li key={metric.label} className="flex items-baseline gap-1.5">
                <span className="font-display text-lg font-bold text-accent sm:text-2xl">
                  {metric.value}
                </span>
                <span className="text-[9px] text-ink/50">{metric.label}</span>
              </li>
            ))}
          </ul>
        )}

        <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1.5 sm:mt-5 sm:gap-x-4">
          {project.tech.slice(0, featured ? 8 : 5).map((tech) => (
            <li key={tech} className="font-mono text-[8px] uppercase tracking-[0.12em] text-ink/45 sm:text-[9px]">
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex items-center justify-between gap-4 sm:mt-5">
          <button
            type="button"
            onClick={() => onOpen(project)}
            aria-label={`Open case study: ${project.title}`}
            className="inline-flex items-center gap-2 border-b border-accent pb-1 font-mono text-[9px] uppercase tracking-[0.15em] text-ink transition-colors hover:text-accent focus-visible:outline-offset-4"
          >
            Explore case study
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
          <span className="font-mono text-[8px] uppercase tracking-widest text-ink/35 sm:text-[9px]">
            {project.year}
          </span>
        </div>
      </div>

      <button
        type="button"
        onClick={() => onOpen(project)}
        aria-label={`View ${project.title} project preview`}
        className={`group/preview relative block w-full overflow-hidden rounded-2xl bg-accent-soft text-left focus-visible:outline-offset-4 sm:rounded-3xl ${featured ? 'aspect-[1.25] sm:aspect-[1.6]' : 'aspect-[1.4]'}`}
      >
        <span className="noise pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
        <ParallaxElement
          speed={0.045}
          className="absolute inset-[-4%] transition-transform duration-700 ease-out group-hover/preview:scale-[1.03] motion-reduce:transform-none motion-reduce:transition-none"
        >
          <ProjectVisual variant={project.visual} />
        </ParallaxElement>
        <span className="absolute bottom-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-offwhite/90 text-ink transition-colors group-hover/preview:bg-accent group-hover/preview:text-white">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </button>
    </article>
  );
}