import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

export default function ParallaxElement({ children, speed = 0.2, className = '' }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [speed * 120, speed * -120]);
  if (reduce) return <div ref={ref} className={className}>{children}</div>;
  return <motion.div ref={ref} style={{ y }} className={className}>{children}</motion.div>;
}