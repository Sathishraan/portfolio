// src/components/CustomCursor.jsx
import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * Desktop-only custom cursor.
 * Modes are driven by the `data-cursor` attribute on any element:
 *   data-cursor="hover"  → expands (buttons / links)
 *   data-cursor="view"   → shows "VIEW" (project cards)
 */
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [mode, setMode] = useState('default');

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 550, damping: 42, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 550, damping: 42, mass: 0.4 });

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!finePointer || reduceMotion) return undefined;

    setEnabled(true);
    document.documentElement.classList.add('cursor-hidden');

    const handleMove = (event) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    const handleOver = (event) => {
      const target = event.target instanceof Element ? event.target.closest('[data-cursor]') : null;
      setMode(target ? target.dataset.cursor : 'default');
    };

    const handleLeave = () => setMode('default');

    window.addEventListener('mousemove', handleMove, { passive: true });
    window.addEventListener('mouseover', handleOver, { passive: true });
    window.addEventListener('mouseout', handleLeave);

    return () => {
      document.documentElement.classList.remove('cursor-hidden');
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseover', handleOver);
      window.removeEventListener('mouseout', handleLeave);
    };
  }, [x, y]);

  if (!enabled) return null;

  const size = mode === 'view' ? 88 : mode === 'hover' ? 56 : 14;
  const isLabel = mode === 'view';
  const cursorColor = mode === 'inverse' ? 'rgba(255,241,219,1)' : 'rgba(239,90,111,1)';

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-90 flex items-center justify-center rounded-full"
      style={{
        x: springX,
        y: springY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={{
        width: size,
        height: size,
        backgroundColor: cursorColor,
        opacity: mode === 'hover' ? 0.85 : 1,
      }}
      transition={{ type: 'spring', stiffness: 420, damping: 34 }}
    >
      {isLabel && (
        <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-offwhite">
          View
        </span>
      )}
    </motion.div>
  );
}