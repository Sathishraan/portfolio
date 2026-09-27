// src/components/SectionHeading.jsx
import Reveal from './Reveal.jsx';

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <div className={`flex flex-col ${alignment} ${className}`}>
      {eyebrow && (
        <Reveal>
          <span className="eyebrow flex items-center gap-3">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            {eyebrow}
          </span>
        </Reveal>
      )}

      {title && (
        <Reveal delay={0.05}>
          <h2 className="display mt-5 text-[clamp(2rem,6vw,4.25rem)]">{title}</h2>
        </Reveal>
      )}

      {description && (
        <Reveal delay={0.1}>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink/60 sm:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}