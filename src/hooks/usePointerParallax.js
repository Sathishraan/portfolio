// src/hooks/usePointerParallax.js
import { useEffect } from 'react';
import { useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

/**
 * Normalised mouse position (-1 → 1) as spring motion values.
 * Returns { x: 0, y: 0 } equivalents on touch devices / reduced motion.
 */
export default function usePointerParallax(strength = 1) {
  const reduceMotion = useReducedMotion();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 55, damping: 20, mass: 0.6 });
  const y = useSpring(rawY, { stiffness: 55, damping: 20, mass: 0.6 });

  useEffect(() => {
    if (reduceMotion) return undefined;
    if (!window.matchMedia('(pointer: fine)').matches) return undefined;

    const handleMove = (event) => {
      const nx = (event.clientX / window.innerWidth) * 2 - 1;
      const ny = (event.clientY / window.innerHeight) * 2 - 1;
      rawX.set(nx * strength);
      rawY.set(ny * strength);
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMove);
  }, [reduceMotion, strength, rawX, rawY]);

  return { x, y };
}