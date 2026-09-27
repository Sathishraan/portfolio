import { useEffect, useState } from 'react';
export default function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const sections = ids.map(id => document.getElementById(id)).filter(Boolean);
    if (!sections.length) return;
    const obs = new IntersectionObserver((entries) => {
      const visible = entries.filter(e => e.isIntersecting).sort((a,b)=> b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    }, { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] });
    sections.forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, [ids.join(',')]);
  return active;
}