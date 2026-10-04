'use client';

import Link from 'next/link';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { useEffect, useId, useRef } from 'react';

export default function HeroGlassLens() {
  const pane = useRef<HTMLAnchorElement>(null);
  const id = `hero-glass-${useId().replace(/:/g, '')}`;

  useEffect(() => {
    const element = pane.current;
    if (!element) return;
    let disposed = false;
    let lens: { destroy(): void } | undefined;
    let generation = 0;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const transparency = window.matchMedia('(prefers-reduced-transparency: reduce)');
    const destroy = () => { lens?.destroy(); lens = undefined; element.removeAttribute('data-gpu-glass'); };
    const initialize = async () => {
      const current = ++generation;
      destroy();
      if (disposed || reduced.matches || transparency.matches || document.hidden) return;
      try {
        await document.fonts.ready;
        const { default: liquidGL } = await import('liquid-gl');
        if (disposed || current !== generation) return;
        const result = liquidGL({
          target: `#${id}`, snapshot: '#home-glass-scene',
          engine: 'auto', resolution: window.innerWidth < 1024 ? 0.75 : 1,
          refraction: 0.012, bevelDepth: 0.045, bevelWidth: 0.12,
          frost: 1.5, aberration: 0, magnify: 1,
          shadow: false, specular: false, tilt: false, draggable: false,
          interaction: 'none', tint: 'rgba(11, 45, 91, 0.18)', reveal: 'fade',
          on: { init: () => {
            if (disposed || current !== generation) return;
            element.setAttribute('data-gpu-glass', 'true');
          } },
        });
        lens = Array.isArray(result) ? result[0] : result;
      } catch (error) {
        // The CSS glass remains fully interactive if GPU capture fails.
        console.warn('[home-glass] CSS fallback retained', error);
      }
    };
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) void initialize();
      else { generation++; destroy(); }
    }, { threshold: 0.05 });
    observer.observe(element);
    const refresh = () => {
      const rect = element.getBoundingClientRect();
      if (rect.bottom > 0 && rect.top < window.innerHeight) void initialize();
      else { generation++; destroy(); }
    };
    reduced.addEventListener('change', refresh);
    transparency.addEventListener('change', refresh);
    document.addEventListener('visibilitychange', refresh);
    return () => {
      disposed = true; generation++; observer.disconnect(); destroy();
      reduced.removeEventListener('change', refresh);
      transparency.removeEventListener('change', refresh);
      document.removeEventListener('visibilitychange', refresh);
    };
  }, [id]);

  return (
    <Link ref={pane} id={id} href="#ecosystem" className="hero-glass-lens liquid-button" aria-label="Khám phá hệ sinh thái KEDI">
      <span className="hero-glass-content">
        <span className="hero-glass-icon"><Sparkles size={20} strokeWidth={1.5} /></span>
        <span><span className="hero-glass-eyebrow">KEDI DIGITAL ECOSYSTEM</span><span className="hero-glass-title">Kết nối. Kiến tạo. Tăng trưởng.</span></span>
        <ArrowUpRight size={21} strokeWidth={1.5} />
      </span>
    </Link>
  );
}
