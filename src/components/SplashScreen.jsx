import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

const SPLASH_DURATION = 1600;

export default function SplashScreen() {
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (reduceMotion) {
      setVisible(false);
      return undefined;
    }

    const timeout = window.setTimeout(() => setVisible(false), SPLASH_DURATION);
    return () => window.clearTimeout(timeout);
  }, [reduceMotion]);

  if (reduceMotion || !visible) return null;

  return (
    <div className="site-splash" aria-hidden="true">
      <div className="site-splash__panel site-splash__panel--top" />
      <div className="site-splash__panel site-splash__panel--bottom" />
    </div>
  );
}