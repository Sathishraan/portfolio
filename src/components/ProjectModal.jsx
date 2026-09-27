// src/components/ProjectModal.jsx
import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, Globe2, X } from 'lucide-react';
import ProjectVisual from './ProjectVisual.jsx';

const SECTIONS = [
  { key: 'overview', label: '01', title: 'Overview' },
  { key: 'problem', label: '02', title: 'Problem' },
  { key: 'solution', label: '03', title: 'Solution' },
  { key: 'architecture', label: '04', title: 'Architecture' },
  { key: 'technologies', label: '05', title: 'Technologies' },
  { key: 'features', label: '06', title: 'Key Features' },
  { key: 'implementation', label: '07', title: 'Results / Implementation' },
];

export default function ProjectModal({ project, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!project) return undefined;

    const handleKey = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [project, onClose]);

  const content = project
    ? {
        overview: project.caseStudy.overview,
        problem: project.caseStudy.problem,
        solution: project.caseStudy.solution,
        architecture: project.caseStudy.architecture,
        technologies: project.caseStudy.technologies,
        features: project.features,
        implementation: project.caseStudy.implementation,
      }
    : null;

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-start justify-center overflow-y-auto overscroll-contain bg-ink/40 p-3 backdrop-blur-sm sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
            className="my-4 w-full max-w-4xl overflow-hidden rounded-4xl border border-ink/10 bg-offwhite shadow-lift sm:my-8"
          >
            {/* Header */}
            <div className="relative border-b border-ink/10 bg-gradient-to-br from-accent/12 via-offwhite to-accent/5">
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                data-cursor="hover"
                aria-label="Close case study"
                className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 bg-offwhite/85 backdrop-blur-sm transition-colors hover:bg-ink hover:text-offwhite"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="h-48 sm:h-60">
                <ProjectVisual variant={project.visual} />
              </div>
            </div>

            {/* Body */}
            <div className="max-h-[70vh] overflow-y-auto p-6 sm:p-10">
              <span className="eyebrow">{project.category}</span>
              <h3
                id="case-study-title"
                className="display mt-4 text-[clamp(1.75rem,5vw,3rem)]"
              >
                {project.title}
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/65">
                {project.tagline}
              </p>

              {/* Links */}
              <div className="mt-7 flex flex-wrap gap-3">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    data-cursor="hover"
                    className="btn btn-ghost"
                  >
                    <Globe2 className="h-4 w-4" />
                    GitHub
                  </a>
                )}
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noreferrer noopener"
                    data-cursor="hover"
                    className="btn btn-primary"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                )}
              </div>

              {/* Sections */}
              <div className="mt-12 space-y-10">
                {SECTIONS.map((section) => {
                  const value = content[section.key];
                  if (!value) return null;

                  return (
                    <section key={section.key}>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-[11px] tracking-[0.2em] text-accent">
                          {section.label}
                        </span>
                        <h4 className="font-display text-sm font-bold uppercase tracking-[0.14em]">
                          {section.title}
                        </h4>
                        <span className="h-px flex-1 bg-ink/10" aria-hidden="true" />
                      </div>

                      {Array.isArray(value) ? (
                        <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                          {value.map((item) => (
                            <li
                              key={item}
                              className="flex gap-3 text-sm leading-relaxed text-ink/65"
                            >
                              <span
                                aria-hidden="true"
                                className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent"
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="mt-5 text-sm leading-relaxed text-ink/65 sm:text-base">
                          {value}
                        </p>
                      )}
                    </section>
                  );
                })}

                {project.caseStudy.sample && (
                  <section>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[11px] tracking-[0.2em] text-accent">
                        ✦
                      </span>
                      <h4 className="font-display text-sm font-bold uppercase tracking-[0.14em]">
                        Sample Interaction
                      </h4>
                      <span className="h-px flex-1 bg-ink/10" aria-hidden="true" />
                    </div>
                    <div className="mt-5 space-y-3 rounded-3xl border border-ink/10 bg-white/60 p-5">
                      <p className="font-mono text-xs text-ink/50">
                        <span className="text-accent">USER:</span> {project.caseStudy.sample.user}
                      </p>
                      <p className="font-mono text-xs text-ink/80">
                        <span className="text-accent">AI:</span> {project.caseStudy.sample.ai}
                      </p>
                    </div>
                  </section>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}