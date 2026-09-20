"use client";

import { useEffect, useRef } from "react";
import { kediLmsMarkup } from "./kedi-lms-content";
import { kediLmsCss } from "./kedi-lms-style";
import { kediLmsMotionScript, kediLmsRevealScript } from "./kedi-lms-motion";

type WindowListener = {
  type: string;
  listener: EventListenerOrEventListenerObject;
  options?: boolean | AddEventListenerOptions;
};

type ScrollTriggerListener = {
  type: string;
  callback: (...args: any[]) => void;
};

const KEDI_LMS_AI_ASSET_REPLACEMENTS: ReadonlyArray<readonly [string, string]> = [
  ["/kedi-lms/gau-lien-lac.png", "/kedi-lms/kedi-lien-lac.png"],
  ["/kedi-lms/gau-luyen-thi.png", "/kedi-lms/kedi-luyen-thi.png"],
  ["/kedi-lms/gau-tro-giang.png", "/kedi-lms/kedi-tro-giang.png"],
  ["/kedi-lms/kedi-edutech-og.webp", "/kedi-lms/kedi-edutech-hero-ai.webp"],
  [
    "/kedi-lms/kedi-edutech-thoi-khoa-bieu.webp",
    "/kedi-lms/kedi-edutech-schedule-ai.webp",
  ],
  ["Gấu KEDI", "Chó Golden KEDI"],
];

function withKediLmsAiAssets(source: string) {
  return KEDI_LMS_AI_ASSET_REPLACEMENTS.reduce(
    (result, [from, to]) => result.split(from).join(to),
    source,
  );
}

const kediLmsAiMarkup = withKediLmsAiAssets(kediLmsMarkup);
const kediLmsAiMotionScript = withKediLmsAiAssets(kediLmsMotionScript);

export default function ClientEdutech() {
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

      // Track everything the original imperative animation layer attaches globally,
      // then remove only those resources when this route unmounts.
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
        // The source programs are executed against the React-owned landing DOM.
        // No WordPress/theme scripts or unrelated site code are imported.
        const run = new Function("gsap", "ScrollTrigger", kediLmsRevealScript + "\n" + kediLmsAiMotionScript);
        run(gsap, ScrollTrigger);
        ScrollTrigger.refresh();
      } finally {
        // Stop intercepting immediately; only setup-time registrations belong to this page.
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
  }, []);

  return (
    <div ref={rootRef} className="kedi-lms-route relative z-[1] w-full">
      <style dangerouslySetInnerHTML={{ __html: kediLmsCss }} />
      <div dangerouslySetInnerHTML={{ __html: kediLmsAiMarkup }} />
    </div>
  );
}
