// src/components/Footer.jsx
import { ArrowUp, BriefcaseBusiness, Globe2, Mail } from 'lucide-react';
import { navLinks, profile } from '../data/profile.js';

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-offwhite">
      <div className="container-x py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <a
              href="#home"
              data-cursor="hover"
              className="font-display text-2xl font-bold tracking-tight"
            >
              {profile.logo}
              <span className="text-accent">.</span>
            </a>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-ink/45">
              {profile.role}
            </p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink/55">
              {profile.tagline}
            </p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-4">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/40">
              Navigation
            </h2>
            <ul className="mt-5 grid grid-cols-2 gap-y-2.5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    data-cursor="hover"
                    className="text-sm text-ink/60 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/40">
              Connect
            </h2>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  data-cursor="hover"
                  className="inline-flex items-center gap-2 text-sm text-ink/60 transition-colors hover:text-accent"
                >
                  <Globe2 className="h-4 w-4" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  data-cursor="hover"
                  className="inline-flex items-center gap-2 text-sm text-ink/60 transition-colors hover:text-accent"
                >
                  <BriefcaseBusiness className="h-4 w-4" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  data-cursor="hover"
                  className="inline-flex items-center gap-2 text-sm text-ink/60 transition-colors hover:text-accent"
                >
                  <Mail className="h-4 w-4" />
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-ink/10 pt-7 sm:flex-row sm:items-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/40">
            © 2026 Sathish Palanisamy
          </p>

          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/40">
            Built with React + Tailwind CSS
          </p>

          <a
            href="#home"
            data-cursor="hover"
            aria-label="Back to top"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 transition-colors hover:bg-ink hover:text-offwhite"
          >
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}