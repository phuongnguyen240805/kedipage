'use client';

import { motion, useReducedMotion, useSpring } from 'framer-motion';
import { useEffect, useId, useRef, useState, type ReactNode } from 'react';
import { usePathname } from 'next/navigation';

/** Only the decorative layer is filtered; links, focus rings and menus stay crisp. */
export default function LiquidNavigation({ children, enabled = true, className = '' }: {
  children: ReactNode; enabled?: boolean; className?: string;
}) {
  const root = useRef<HTMLDivElement>(null);
  const selected = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const reduce = useReducedMotion();
  const pathname = usePathname();
  const filterId = `water-${useId().replace(/:/g, '')}`;
  const fast = { stiffness: 390, damping: 31, mass: 0.65 };
  const slow = { stiffness: 170, damping: 24, mass: 0.9 };
  const x = useSpring(0, fast), y = useSpring(0, fast);
  const width = useSpring(0, fast), height = useSpring(0, fast);
  const tailX = useSpring(0, slow), tailY = useSpring(0, slow);
  const tailWidth = useSpring(0, slow), tailHeight = useSpring(0, slow);

  useEffect(() => {
    const el = root.current;
    if (!el || !enabled) return;
    let initialized = false;
    const move = (item: HTMLElement) => {
      selected.current = item;
      const bounds = el.getBoundingClientRect();
      const rect = item.getBoundingClientRect();
      const values = [rect.left - bounds.left + el.scrollLeft, rect.top - bounds.top + el.scrollTop, rect.width, rect.height];
      [x, y, width, height, tailX, tailY, tailWidth, tailHeight].forEach((value, index) => {
        const target = values[index % 4];
        if (!initialized || reduce) value.jump(target);
        else value.set(target);
      });
      initialized = true;
      setVisible(true);
    };
    const targetFor = (event: Event) => {
      if (!(event.target instanceof Element)) return;
      const item = event.target.closest<HTMLElement>('[data-liquid-nav-item]');
      // Do not move the lens when interacting with a dropdown inside an item.
      if (item && el.contains(item) && !event.target.closest('[data-liquid-menu-content]')) move(item);
    };
    const reset = () => {
      const active = el.querySelector<HTMLElement>('[data-liquid-nav-item][data-liquid-active="true"]');
      if (active) move(active);
      else { selected.current = null; setVisible(false); }
    };
    const leave = () => {
      if (!el.contains(document.activeElement)) reset();
    };
    const resize = new ResizeObserver(() => { if (selected.current) move(selected.current); });
    resize.observe(el);
    el.addEventListener('pointerover', targetFor);
    el.addEventListener('pointerdown', targetFor);
    el.addEventListener('focusin', targetFor);
    el.addEventListener('pointerleave', leave);
    el.addEventListener('focusout', leave);
    reset();
    return () => {
      resize.disconnect();
      el.removeEventListener('pointerover', targetFor);
      el.removeEventListener('pointerdown', targetFor);
      el.removeEventListener('focusin', targetFor);
      el.removeEventListener('pointerleave', leave);
      el.removeEventListener('focusout', leave);
    };
  }, [enabled, pathname, reduce, x, y, width, height, tailX, tailY, tailWidth, tailHeight]);

  return (
    <div ref={root} className={`${enabled ? 'liquid-navigation' : ''} ${className}`}>
      {enabled && <>
        <svg width="0" height="0" aria-hidden="true" className="liquid-filter-defs">
          <defs><filter id={filterId} x="-30%" y="-60%" width="160%" height="220%" colorInterpolationFilters="sRGB">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="joined" />
            <feComposite in="SourceGraphic" in2="joined" operator="atop" />
          </filter></defs>
        </svg>
        <div aria-hidden="true" className="liquid-nav-water" style={{ opacity: visible ? 0.38 : 0, filter: reduce ? undefined : `url(#${filterId})` }}>
          <motion.span className="liquid-nav-drop liquid-nav-tail" style={{ left: tailX, top: tailY, width: tailWidth, height: tailHeight }} />
          <motion.span className="liquid-nav-drop" style={{ left: x, top: y, width, height }} />
        </div>
        <motion.span aria-hidden="true" className="liquid-nav-surface" style={{ left: x, top: y, width, height, opacity: visible ? 1 : 0 }} />
      </>}
      {children}
    </div>
  );
}
