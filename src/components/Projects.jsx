// src/components/Projects.jsx
import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useReducedMotion } from 'framer-motion';
import { projects } from '../data/projects.js';
import ProjectCard from './ProjectCard.jsx';
import ProjectModal from './ProjectModal.jsx';
import SectionHeading from './SectionHeading.jsx';

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const orderedProjects = [
    ...projects.filter((project) => project.id === 'school-erp'),
    ...projects.filter((project) => project.id !== 'school-erp'),
  ];
  useEffect(() => {
    const container = scrollRef.current;
    if (!container || reduceMotion) return undefined;

    const updateProgress = () => {
      const scrollDistance = container.offsetHeight - window.innerHeight;
      const progress = scrollDistance > 0
        ? Math.max(0, Math.min(1, -container.getBoundingClientRect().top / scrollDistance))
        : 0;
      setScrollProgress(progress);
      setActiveIndex(Math.min(
        orderedProjects.length - 1,
        Math.floor(progress * orderedProjects.length),
      ));
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, [orderedProjects.length, reduceMotion]);

  const goToProject = (index) => {
    const container = scrollRef.current;
    if (!container) return;

    const start = container.getBoundingClientRect().top + window.scrollY;
    const scrollDistance = container.offsetHeight - window.innerHeight;
    const progress = index / (orderedProjects.length - 1);
    window.scrollTo({
      top: start + scrollDistance * progress,
      behavior: reduceMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <section id="projects" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="Selected Work"
          title="Built for real use."
          description="A closer look at the systems, products and experiments I have taken from idea to implementation."
        />

        {reduceMotion ? (
          <div className="mt-12 sm:mt-16">
            {orderedProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpen={setActiveProject}
                featured={project.id === 'school-erp'}
              />
            ))}
          </div>
        ) : (
          <div
            ref={scrollRef}
            className="relative mt-10 sm:mt-14"
            style={{ height: `${orderedProjects.length * 90}svh` }}
          >
            <div className="sticky top-0 h-svh overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div
                  style={{
                    transform: `translate3d(-${scrollProgress * ((orderedProjects.length - 1) / orderedProjects.length) * 100}%, 0, 0)`,
                    width: `${orderedProjects.length * 100}%`,
                  }}
                  className="flex h-full will-change-transform"
                >
                  {orderedProjects.map((project) => (
                    <div
                      key={project.id}
                      className="h-full min-w-0 px-1 sm:px-2"
                      style={{ flex: `0 0 ${100 / orderedProjects.length}%` }}
                    >
                      <ProjectCard
                        project={project}
                        onOpen={setActiveProject}
                        featured={project.id === 'school-erp'}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-4 left-0 right-0 z-20 flex items-center gap-3 sm:bottom-6 sm:gap-5">
                <span aria-live="polite" className="shrink-0 font-mono text-[9px] uppercase tracking-[0.12em] text-ink/50">
                  {String(activeIndex + 1).padStart(2, '0')} / {String(orderedProjects.length).padStart(2, '0')}
                </span>
                <div className="h-px min-w-0 flex-1 bg-ink/10">
                  <div
                    className="h-full origin-left bg-accent"
                    style={{ transform: `scaleX(${scrollProgress})` }}
                  />
                </div>
                <span className="hidden font-mono text-[9px] uppercase tracking-[0.14em] text-ink/40 sm:inline">
                  Scroll
                </span>
                <div className="flex shrink-0 items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => goToProject(Math.max(0, activeIndex - 1))}
                    disabled={activeIndex === 0}
                    aria-label="Previous project"
                    className="flex h-8 w-8 items-center justify-center border border-ink/15 text-ink transition-colors hover:border-accent hover:text-accent disabled:opacity-30 sm:h-9 sm:w-9"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => goToProject(Math.min(orderedProjects.length - 1, activeIndex + 1))}
                    disabled={activeIndex === orderedProjects.length - 1}
                    aria-label="Next project"
                    className="flex h-8 w-8 items-center justify-center border border-ink/15 text-ink transition-colors hover:border-accent hover:text-accent disabled:opacity-30 sm:h-9 sm:w-9"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}