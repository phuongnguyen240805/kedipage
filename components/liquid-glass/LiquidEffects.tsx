'use client';

import { useEffect } from 'react';

const CONTROLS = 'button, a.btn, a.btn-link, a.btn-big-link, a.btn-second, [data-glass="control"], [data-glass="item"], [data-glass="menu"] a, [data-liquid-nav-item], .liquid-button, .liquid-touch-item, a[class*="rounded"][class*="inline-flex"], a[class*="rounded"][class*="items-center"], [role="menuitem"], [role="option"]';

/** One delegated listener covers routes, portals and dynamically inserted legacy HTML. */
export default function LiquidEffects() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const pending = new Map<HTMLElement, { timer: ReturnType<typeof setTimeout>; clip: HTMLElement; positioned: boolean }>();
    const clear = (target: HTMLElement) => {
      const previous = pending.get(target);
      if (!previous) return;
      clearTimeout(previous.timer);
      previous.clip.remove();
      if (previous.positioned) target.classList.remove('liquid-ripple-host');
      pending.delete(target);
    };
    const ripple = (event: PointerEvent | KeyboardEvent) => {
      if (reduced.matches || !(event.target instanceof Element)) return;
      if (event instanceof KeyboardEvent && (event.repeat || !['Enter', ' '].includes(event.key))) return;
      const target = event.target.closest<HTMLElement>(CONTROLS);
      if (!target || !target.closest('.kedi-glass') || target.matches(':disabled,[aria-disabled="true"],[data-disabled],[data-glass="none"]')) return;
      clear(target);
      const rect = target.getBoundingClientRect();
      const positioned = getComputedStyle(target).position === 'static';
      if (positioned) target.classList.add('liquid-ripple-host');
      const clip = document.createElement('span');
      clip.className = 'liquid-ripple-clip';
      clip.setAttribute('aria-hidden', 'true');
      const drop = document.createElement('span');
      drop.className = 'liquid-ripple';
      drop.style.setProperty('--ripple-x', `${event instanceof PointerEvent ? event.clientX - rect.left : rect.width / 2}px`);
      drop.style.setProperty('--ripple-y', `${event instanceof PointerEvent ? event.clientY - rect.top : rect.height / 2}px`);
      drop.style.setProperty('--ripple-size', `${Math.hypot(rect.width, rect.height) * 2}px`);
      clip.appendChild(drop);
      target.appendChild(clip);
      pending.set(target, { clip, positioned, timer: setTimeout(() => clear(target), 650) });
    };
    document.addEventListener('pointerdown', ripple, { passive: true });
    document.addEventListener('keydown', ripple);
    return () => {
      document.removeEventListener('pointerdown', ripple);
      document.removeEventListener('keydown', ripple);
      Array.from(pending.keys()).forEach(clear);
    };
  }, []);
  return null;
}
