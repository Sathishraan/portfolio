// src/components/Navbar.jsx
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { navLinks, profile } from '../data/profile.js';
import useActiveSection from '../hooks/useActiveSection.js';

const SECTION_IDS = navLinks.map((link) => link.id);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-x">
        <nav
          aria-label="Primary"
          className={`mt-3 flex items-center justify-between rounded-full border px-4 py-3 transition-all duration-500 sm:px-6 ${
            scrolled
              ? 'border-ink/10 bg-offwhite/80 shadow-soft backdrop-blur-xl'
              : 'border-transparent bg-transparent'
          }`}
        >
          {/* Logo */}
          <a
            href="#home"
            data-cursor="hover"
            className="font-display text-lg font-bold tracking-tight sm:text-xl"
            aria-label="Sathish — back to top"
          >
            {profile.logo}
            <span className="text-accent">.</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    data-cursor="hover"
                    aria-current={isActive ? 'true' : undefined}
                    className={`relative rounded-full px-3.5 py-2 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors duration-300 ${
                      isActive ? 'text-ink' : 'text-ink/50 hover:text-ink'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 -z-10 rounded-full bg-accent/12"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <span className="hidden items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-accent-dark xl:inline-flex">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 [animation:pulse-ring_2s_ease-out_infinite]" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              {profile.availability}
            </span>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              data-cursor="hover"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 transition-colors hover:bg-ink hover:text-offwhite lg:hidden"
            >
              {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-0 z-40 bg-offwhite/97 backdrop-blur-xl lg:hidden"
          >
            <div className="container-x flex h-full flex-col justify-center pt-24 pb-12">
              <ul className="flex flex-col gap-1">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + index * 0.05, duration: 0.4 }}
                  >
                    <a
                      href={`#${link.id}`}
                      onClick={closeMenu}
                      className="group flex items-center justify-between border-b border-ink/10 py-4"
                    >
                      <span className="display text-4xl sm:text-5xl">{link.label}</span>
                      <ArrowUpRight className="h-5 w-5 text-ink/30 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" />
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink/50">
                <span>{profile.email}</span>
                <span>{profile.location}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}