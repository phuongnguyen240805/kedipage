"use client";

import { ReactNode, useEffect, useRef } from "react";

type WindowListener = {
  type: string;
  listener: EventListenerOrEventListenerObject;
  options?: boolean | AddEventListenerOptions;
};

type ScrollTriggerListener = {
  type: string;
  callback: (...args: any[]) => void;
};

type Props = {
  css: string;
  revealScript: string;
  motionScript: string;
  markup?: string;
  children?: ReactNode;
  className?: string;
};

/**
 * Shared runtime for product pages that reuse the /edutech visual language.
 *
 * The runtime owns only lifecycle/GSAP cleanup. Product markup is supplied by
 * each route, so future pages can reuse the same animation engine without
 * copying the 70KB CSS + imperative setup into every product folder.
 */
export default function EdutechMotionRuntime({
  css,
  revealScript,
  motionScript,
  markup,
  children,
  className = "kedi-lms-route",
}: Props) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let disposed = false;
    let cleanup = () => {};

    const init = async () => {
      const root = rootRef.current?.querySelector<HTMLElement>(".edu");
      if (!root || disposed) return;

      const gsapModule = await import("gsap");
      const scrollTriggerModule = await import("gsap/ScrollTrigger");
      if (disposed) return;

      const gsap = gsapModule.gsap;
      const ScrollTrigger = scrollTriggerModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      const html = document.documentElement;
      const alreadyHadJs = html.classList.contains("js");
      html.classList.add("js");

      const windowListeners: WindowListener[] = [];
      const stListeners: ScrollTriggerListener[] = [];
      const observers: IntersectionObserver[] = [];
      const timeoutIds = new Set<number>();
      const rafIds = new Set<number>();
      const mediaContexts: Array<{ revert: () => void }> = [];

      const nativeAddEventListener = window.addEventListener.bind(window);
      const nativeRemoveEventListener = window.removeEventListener.bind(window);
      const nativeSetTimeout = window.setTimeout.bind(window);
      const nativeClearTimeout = window.clearTimeout.bind(window);
      const nativeRAF = window.requestAnimationFrame.bind(window);
      const nativeCancelRAF = window.cancelAnimationFrame.bind(window);
      const NativeIntersectionObserver = window.IntersectionObserver;

      const originalAdd = window.addEventListener;
      const originalSetTimeout = window.setTimeout;
      const originalClearTimeout = window.clearTimeout;
      const originalRAF = window.requestAnimationFrame;
      const originalCancelRAF = window.cancelAnimationFrame;
      const originalSTAdd = ScrollTrigger.addEventListener.bind(ScrollTrigger);
      const originalSTRemove = ScrollTrigger.removeEventListener.bind(ScrollTrigger);
      const originalGsapMatchMedia = gsap.matchMedia.bind(gsap);

      window.addEventListener = ((type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions) => {
        windowListeners.push({ type, listener, options });
        nativeAddEventListener(type, listener, options);
      }) as typeof window.addEventListener;

      window.setTimeout = ((handler: TimerHandler, timeout?: number, ...args: any[]) => {
        const id = nativeSetTimeout(handler, timeout, ...args);
        timeoutIds.add(id);
        return id;
      }) as typeof window.setTimeout;

      window.clearTimeout = ((id?: number) => {
        if (typeof id === "number") timeoutIds.delete(id);
        nativeClearTimeout(id);
      }) as typeof window.clearTimeout;

      window.requestAnimationFrame = ((cb: FrameRequestCallback) => {
        const id = nativeRAF(cb);
        rafIds.add(id);
        return id;
      }) as typeof window.requestAnimationFrame;

      window.cancelAnimationFrame = ((id: number) => {
        rafIds.delete(id);
        nativeCancelRAF(id);
      }) as typeof window.cancelAnimationFrame;

      if (NativeIntersectionObserver) {
        const TrackedIntersectionObserver = class extends NativeIntersectionObserver {
          constructor(callback: IntersectionObserverCallback, options?: IntersectionObserverInit) {
            super(callback, options);
            observers.push(this);
          }
        };
        window.IntersectionObserver = TrackedIntersectionObserver as typeof IntersectionObserver;
      }

      ScrollTrigger.addEventListener = ((type: string, callback: (...args: any[]) => void) => {
        stListeners.push({ type, callback });
        originalSTAdd(type as Parameters<typeof originalSTAdd>[0], callback);
      }) as typeof ScrollTrigger.addEventListener;

      gsap.matchMedia = ((...args: Parameters<typeof gsap.matchMedia>) => {
        const context = originalGsapMatchMedia(...args);
        mediaContexts.push(context);
        return context;
      }) as typeof gsap.matchMedia;

      const triggersBefore = new Set(ScrollTrigger.getAll());
      const animationsBefore = new Set(gsap.globalTimeline.getChildren(true, true, true));

      try {
        const run = new Function("gsap", "ScrollTrigger", revealScript + "\n" + motionScript);
        run(gsap, ScrollTrigger);
        ScrollTrigger.refresh();
      } finally {
        window.addEventListener = originalAdd;
        window.setTimeout = originalSetTimeout;
        window.clearTimeout = originalClearTimeout;
        window.requestAnimationFrame = originalRAF;
        window.cancelAnimationFrame = originalCancelRAF;
        if (NativeIntersectionObserver) window.IntersectionObserver = NativeIntersectionObserver;
        ScrollTrigger.addEventListener = originalSTAdd as typeof ScrollTrigger.addEventListener;
        gsap.matchMedia = originalGsapMatchMedia as typeof gsap.matchMedia;
      }

      const createdTriggers = ScrollTrigger.getAll().filter((trigger) => !triggersBefore.has(trigger));
      const createdAnimations = gsap.globalTimeline
        .getChildren(true, true, true)
        .filter((animation) => !animationsBefore.has(animation));

      cleanup = () => {
        observers.forEach((observer) => observer.disconnect());
        windowListeners.forEach(({ type, listener, options }) => {
          nativeRemoveEventListener(type, listener, options as EventListenerOptions);
        });
        stListeners.forEach(({ type, callback }) =>
          originalSTRemove(type as Parameters<typeof originalSTRemove>[0], callback),
        );
        timeoutIds.forEach((id) => nativeClearTimeout(id));
        rafIds.forEach((id) => nativeCancelRAF(id));
        mediaContexts.forEach((context) => context.revert());
        createdTriggers.forEach((trigger) => trigger.kill(true));
        createdAnimations.forEach((animation) => animation.kill());

        document.querySelectorAll(".edu-ray,.edu-phai,.edu-bui").forEach((node) => node.remove());
        delete (window as any).__fit;
        delete (window as any).__troi;
        delete (window as any).__th;

        if (!alreadyHadJs) html.classList.remove("js");
      };
    };

    init();

    return () => {
      disposed = true;
      cleanup();
    };
  }, [motionScript, revealScript]);

  return (
    <div ref={rootRef} className={`${className} relative z-[1] w-full`}>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <link rel="stylesheet" href="/software-clone/kedi-brand-theme.css" />
      {markup ? <div dangerouslySetInnerHTML={{ __html: markup }} /> : children}
    </div>
  );
}
