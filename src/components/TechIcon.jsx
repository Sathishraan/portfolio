// src/components/TechIcon.jsx
import {
  Atom,
  Boxes,
  Braces,
  Brain,
  Code2,
  Cpu,
  Database,
  FileCode2,
  GitBranch,
  KeyRound,
  Layers,
  Leaf,
  Send,
  Server,
  Smartphone,
  Terminal,
  Wind,
  Zap,
} from 'lucide-react';

const TECH_COLORS = {
  'React.js': '#61dafb',
  'React Native': '#61dafb',
  'Node.js': '#68a063',
  'Express.js': '#68a063',
  'FastAPI': '#00bfa5',
  Laravel: '#ff2d20',
  CodeIgniter: '#ef4444',
  PHP: '#8892bf',
  Python: '#3776ab',
  JavaScript: '#f7df1e',
  TypeScript: '#3178c6',
  Angular: '#dd0031',
  'Tailwind CSS': '#38bdf8',
  HTML5: '#e34f26',
  CSS3: '#1572b6',
  MySQL: '#00758f',
  MongoDB: '#47a248',
  'Socket.IO': '#0f172a',
  JWT: '#00bfa5',
  Git: '#f05032',
  Postman: '#ff6c37',
  'TanStack Query': '#ff4154',
  'RAG': '#8b5cf6',
  'REST API': '#8b5cf6',
  AI: '#8b5cf6',
  Java: '#f89820',
  SQL: '#ffb703',
  'VS Code': '#007acc',
  'Cursor AI': '#7c3aed',
  default: '#064E3B',
};

function BrandGlyph({ name }) {
  const glyphs = {
    'React.js': (
      <svg viewBox="0 0 24 24" className="h-full w-full" aria-hidden="true">
        <circle cx="12" cy="12" r="2.4" fill="currentColor" opacity="0.9" />
        <g stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.9">
          <ellipse cx="12" cy="12" rx="8.4" ry="3.6" transform="rotate(0 12 12)" />
          <ellipse cx="12" cy="12" rx="8.4" ry="3.6" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="8.4" ry="3.6" transform="rotate(120 12 12)" />
        </g>
      </svg>
    ),
    'React Native': (
      <svg viewBox="0 0 24 24" className="h-full w-full" aria-hidden="true">
        <rect x="7" y="3" width="10" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M9.5 7h5M9.5 17h5M12 9.5v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    'Node.js': (
      <svg viewBox="0 0 24 24" className="h-full w-full" aria-hidden="true">
        <path d="M12 2.5 4.5 7v10L12 21.5 19.5 17V7L12 2.5Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 7.5v9M8.8 9.7l6.4 4.6M15.2 9.7 8.8 14.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    'Express.js': (
      <svg viewBox="0 0 24 24" className="h-full w-full" aria-hidden="true">
        <path d="M5 8.5h14M5 15.5h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M8 19V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14" fill="none" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
    'FastAPI': (
      <svg viewBox="0 0 24 24" className="h-full w-full" aria-hidden="true">
        <path d="M12 2.5 4.5 18h5.2l1.1-5.2h4.7L14.8 21.5h4.7L12 2.5Z" fill="currentColor" opacity="0.9" />
      </svg>
    ),
    Laravel: (
      <svg viewBox="0 0 24 24" className="h-full w-full" aria-hidden="true">
        <path d="M7 18V6l5-3 5 3v12l-5 3-5-3Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 3v18M7 8.5h10M7 15.5h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    PHP: (
      <svg viewBox="0 0 24 24" className="h-full w-full" aria-hidden="true">
        <path d="M7 7h5.5A3.5 3.5 0 0 1 16 10.5 3.5 3.5 0 0 1 12.5 14H7V7Zm0 0v10m0-10H5.5m1.5 7h5.5" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      </svg>
    ),
    Python: (
      <svg viewBox="0 0 24 24" className="h-full w-full" aria-hidden="true">
        <path d="M9 4.5h6a2 2 0 0 1 2 2v3.5H9A2.5 2.5 0 0 0 6.5 12v.5A2.5 2.5 0 0 0 9 15h6a2 2 0 0 1 2 2v3.5a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V17.5h6A2.5 2.5 0 0 0 15.5 15v-.5A2.5 2.5 0 0 0 13 12H7a2 2 0 0 1-2-2V6.5a2 2 0 0 1 2-2Z" fill="none" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
    JavaScript: (
      <svg viewBox="0 0 24 24" className="h-full w-full" aria-hidden="true">
        <text x="12" y="16" textAnchor="middle" fontSize="9" fontWeight="700" fill="currentColor" fontFamily="sans-serif">JS</text>
      </svg>
    ),
    TypeScript: (
      <svg viewBox="0 0 24 24" className="h-full w-full" aria-hidden="true">
        <text x="12" y="16" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="currentColor" fontFamily="sans-serif">TS</text>
      </svg>
    ),
    Angular: (
      <svg viewBox="0 0 24 24" className="h-full w-full" aria-hidden="true">
        <path d="M12 2.5 4.5 6l1.4 11.1L12 21.5l6.1-4.4L19.5 6 12 2.5Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="m8.7 15.2 3.3-7.2 3.3 7.2M9.8 12.8h4.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    'Tailwind CSS': (
      <svg viewBox="0 0 24 24" className="h-full w-full" aria-hidden="true">
        <path d="M6 15.5c1.2-2.2 2.7-3.3 4.5-3.3 1.8 0 2.7 1.1 3.5 2.2.8 1.1 1.7 2.1 3.5 2.1 1.8 0 3-1.1 3.7-3.2-.9 1.7-2.1 2.5-3.7 2.5-1.8 0-2.7-1.1-3.5-2.2-.8-1.1-1.7-2.1-3.5-2.1-1.8 0-2.9 1.1-3.8 3.1Z" fill="currentColor" opacity="0.9" />
      </svg>
    ),
    HTML5: (
      <svg viewBox="0 0 24 24" className="h-full w-full" aria-hidden="true">
        <path d="M5 4.5h14l-1.2 13.8L12 20l-5.8-1.7L5 4.5Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8.5 8.5h7l-.5 4.2-3 1.2-3-1.2-.3-2.2h6.1" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    CSS3: (
      <svg viewBox="0 0 24 24" className="h-full w-full" aria-hidden="true">
        <path d="M5 4.5h14l-1.2 13.8L12 20l-5.8-1.7L5 4.5Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8.5 8.5h7l-.5 4.2-3 1.2-3-1.2-.3-2.2h6.8" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    MySQL: (
      <svg viewBox="0 0 24 24" className="h-full w-full" aria-hidden="true">
        <path d="M7 5.5h10a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 9.5h10M7 14.5h10M9.5 5.5v13" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
    MongoDB: (
      <svg viewBox="0 0 24 24" className="h-full w-full" aria-hidden="true">
        <path d="M12 2.5c3 1.9 4.8 5.1 4.8 8.6 0 4.4-3.5 8.2-4.8 9.4-1.3-1.2-4.8-5-4.8-9.4 0-3.5 1.8-6.7 4.8-8.6Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 7.5c-1.6 1.7-2.5 3.2-2.5 5.1 0 2.7 1.9 4.9 2.5 5.9.6-1 2.5-3.2 2.5-5.9 0-1.9-.9-3.4-2.5-5.1Z" fill="currentColor" opacity="0.9" />
      </svg>
    ),
    'Socket.IO': (
      <svg viewBox="0 0 24 24" className="h-full w-full" aria-hidden="true">
        <path d="M12 3v18M5.5 7.7 12 3l6.5 4.7M5.5 16.3 12 21l6.5-4.7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    JWT: (
      <svg viewBox="0 0 24 24" className="h-full w-full" aria-hidden="true">
        <path d="M8 6.5h8M8 17.5h8M9 6.5v11m6-11v11M6 10h12M6 14h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    Git: (
      <svg viewBox="0 0 24 24" className="h-full w-full" aria-hidden="true">
        <circle cx="6.5" cy="6.5" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17.5" cy="6.5" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="17.5" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8.4 7.7 15.1 16M6.5 8.7v4.6a4.2 4.2 0 0 0 4.2 4.2h1.2" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>
    ),
    Postman: (
      <svg viewBox="0 0 24 24" className="h-full w-full" aria-hidden="true">
        <rect x="5" y="6.5" width="14" height="10.5" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 6.5V5a3 3 0 0 1 6 0v1.5M9.5 12h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    'TanStack Query': (
      <svg viewBox="0 0 24 24" className="h-full w-full" aria-hidden="true">
        <path d="M5 17.5V7.8l7-4.3 7 4.3v9.7l-7 4.3-7-4.3Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 3.5v17M5 8.2l7 4.3 7-4.3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    'REST API': (
      <svg viewBox="0 0 24 24" className="h-full w-full" aria-hidden="true">
        <rect x="4" y="6" width="16" height="12" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 10h8M8 14h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    AI: (
      <svg viewBox="0 0 24 24" className="h-full w-full" aria-hidden="true">
        <path d="M12 3.5 14.7 8l5.1.7-3.7 3.6.9 5.2L12 0l-5 3.5 1.9-4.9 5.1-.7L12 3.5Z" fill="currentColor" opacity="0.9" />
      </svg>
    ),
    Java: (
      <svg viewBox="0 0 24 24" className="h-full w-full" aria-hidden="true">
        <path d="M7 8h10v10H7zM9 6h6v2M9 18h6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    SQL: (
      <svg viewBox="0 0 24 24" className="h-full w-full" aria-hidden="true">
        <path d="M7 5.5h10a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 9.5h10M7 14.5h6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    'VS Code': (
      <svg viewBox="0 0 24 24" className="h-full w-full" aria-hidden="true">
        <path d="M14.5 3.5 6 8.3v7.4l8.5 4.8 4-2.4V5.9l-4-2.4Zm0 4.2 3 2 0 7.1-3 2m0-11.3L8 11.7l6.5 4.2" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    'Cursor AI': (
      <svg viewBox="0 0 24 24" className="h-full w-full" aria-hidden="true">
        <path d="M12 3.5 4.5 8v8L12 20.5 19.5 16V8L12 3.5Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 7.5 15.7 9.8v4.4L12 16.5l-3.7-2.3V9.8L12 7.5Z" fill="currentColor" opacity="0.9" />
      </svg>
    ),
    default: (
      <svg viewBox="0 0 24 24" className="h-full w-full" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="4" fill="currentColor" opacity="0.15" />
        <text x="12" y="16" textAnchor="middle" fontSize="8" fontWeight="700" fill="currentColor" fontFamily="sans-serif">{name.slice(0, 2).toUpperCase()}</text>
      </svg>
    ),
  };

  return glyphs[name] || glyphs.default;
}

const ICONS = {
  'React.js': Atom,
  'React Native': Smartphone,
  'Node.js': Server,
  'Express.js': Server,
  FastAPI: Zap,
  Laravel: Layers,
  CodeIgniter: Layers,
  PHP: FileCode2,
  Python: Terminal,
  JavaScript: Braces,
  TypeScript: Braces,
  Angular: Atom,
  'Tailwind CSS': Wind,
  HTML5: Code2,
  CSS3: Code2,
  MySQL: Database,
  MongoDB: Leaf,
  'Socket.IO': Send,
  JWT: KeyRound,
  Git: GitBranch,
  Postman: Send,
  'TanStack Query': Cpu,
  'RAG': Brain,
  'REST API': Boxes,
  AI: Brain,
  Java: Terminal,
  SQL: Database,
  'VS Code': Code2,
  'Cursor AI': Cpu,
};

export default function TechIcon({ name, className = 'h-5 w-5' }) {
  const color = TECH_COLORS[name] || TECH_COLORS.default;
  const Icon = ICONS[name];

  if (Icon) {
    return <Icon className={className} aria-hidden="true" style={{ color }} />;
  }

  return (
    <div className={className} style={{ color }} aria-hidden="true">
      {BrandGlyph({ name })}
    </div>
  );
}