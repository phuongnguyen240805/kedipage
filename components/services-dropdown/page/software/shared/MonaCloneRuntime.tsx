"use client";

import { useEffect, useRef } from "react";

type Kind = "nhtq" | "skillhub" | "jms";

type Props = {
  kind: Kind;
  cssHref: string;
  markup: string;
};

function setDisplay(el: HTMLElement, show: boolean) {
  el.style.display = show ? "block" : "none";
}

export default function MonaCloneRuntime({ kind, cssHref, markup }: Props) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    let disposed = false;
    const cleanups: Array<() => void> = [];
    const observers: IntersectionObserver[] = [];
    const timers: number[] = [];
    const swiperInstances: Array<{ destroy?: (deleteInstance?: boolean, cleanStyles?: boolean) => void }> = [];
    const gsapCleanups: Array<() => void> = [];

    const on = (
      el: EventTarget,
      type: string,
      cb: EventListenerOrEventListenerObject,
      options?: AddEventListenerOptions | boolean,
    ) => {
      el.addEventListener(type, cb, options);
      cleanups.push(() => el.removeEventListener(type, cb, options));
    };

    // Keep all external MONA links inert in the visual clone.
    root.querySelectorAll<HTMLAnchorElement>('a[href="#"]').forEach((a) => {
      on(a, "click", (event) => event.preventDefault());
    });

    // Forms / API / reCAPTCHA are intentionally UI-only until real KEDI endpoints are connected.
    root.querySelectorAll<HTMLFormElement>('form[data-kedi-form="mock"]').forEach((form) => {
      on(form, "submit", (event) => {
        event.preventDefault();
        form.classList.add("kedi-form-submitted");
        window.setTimeout(() => form.classList.remove("kedi-form-submitted"), 1600);
      });
    });

    const observe = (
      selector: string,
      enter: (el: HTMLElement) => void,
      leave?: (el: HTMLElement) => void,
      options: IntersectionObserverInit = { rootMargin: "-50px", threshold: [0, 0.25, 0.75, 1] },
    ) => {
      const elements = Array.from(root.querySelectorAll<HTMLElement>(selector));
      if (!elements.length) return;
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting || entry.intersectionRatio > 0) enter(entry.target as HTMLElement);
          else leave?.(entry.target as HTMLElement);
        });
      }, options);
      elements.forEach((el) => io.observe(el));
      observers.push(io);
    };

    observe(".add-active-js", (el) => el.classList.add("active"), (el) => el.classList.remove("active"));
    observe(
      ".add-active-half-js",
      (el) => el.classList.add("active"),
      (el) => el.classList.remove("active"),
      { rootMargin: "0px 0px -50% 0px", threshold: [0, 0.25, 0.75, 1] },
    );
    observe(".add-active-once-js", (el) => el.classList.add("active"));
    observe(".add-active-timing-js", (el) => {
      const id = window.setTimeout(() => el.classList.add("active"), 650);
      timers.push(id);
    });
    observe(".ani,.scr-item", (el) => el.classList.add("active"), undefined, { rootMargin: "0px 0px -20% 0px", threshold: 0 });

    // Recreate AOS states without importing MONA tracking/runtime code.
    root.querySelectorAll<HTMLElement>("[data-aos]").forEach((el) => el.classList.add("aos-init"));
    observe("[data-aos]", (el) => el.classList.add("aos-animate"), undefined, { rootMargin: "0px 0px -12% 0px", threshold: 0.08 });

    // Decorative floating circles from both NHTQ and SkillHub.
    root.querySelectorAll<HTMLElement>(".cir").forEach((el, index) => {
      const dx = Number(el.dataset.x || 10);
      const dy = Number(el.dataset.y || 15);
      const animate = () => {
        const x = Math.round((Math.random() * 2 - 1) * dx);
        const y = Math.round((Math.random() * 2 - 1) * dy);
        el.style.transform = `translate(${x}%, ${y}%)`;
      };
      animate();
      const id = window.setInterval(animate, 1500 + (index % 3) * 220);
      timers.push(id);
    });

    // MONA accordion geometry / FAQ behavior.
    root.querySelectorAll<HTMLElement>(".collapse-block").forEach((block) => {
      const items = Array.from(block.querySelectorAll<HTMLElement>(".collapse-item"));
      items.forEach((item, itemIndex) => {
        const head = item.querySelector<HTMLElement>(".collapse-head");
        const body = item.querySelector<HTMLElement>(".collapse-body");
        if (!head || !body) return;
        const initiallyOpen = item.classList.contains("active") || itemIndex === 0;
        setDisplay(body, initiallyOpen);
        if (initiallyOpen) item.classList.add("active");
        const click = () => {
          const open = item.classList.contains("active");
          items.forEach((other) => {
            other.classList.remove("active");
            const otherBody = other.querySelector<HTMLElement>(".collapse-body");
            if (otherBody) setDisplay(otherBody, false);
          });
          if (!open) {
            item.classList.add("active");
            setDisplay(body, true);
          }
        };
        on(head, "click", click);
      });
    });

    // SkillHub tab systems.
    root.querySelectorAll<HTMLElement>(".system-tab").forEach((system) => {
      const tabs = Array.from(system.querySelectorAll<HTMLElement>(".tab-button[data-id]"));
      const panels = Array.from(system.querySelectorAll<HTMLElement>(".tab-content > .content"));
      tabs.forEach((tab) => {
        on(tab, "click", (event) => {
          event.preventDefault();
          const id = tab.dataset.id;
          tabs.forEach((node) => node.classList.toggle("active", node === tab));
          panels.forEach((panel) => panel.classList.toggle("active", panel.id === id));
        });
      });
    });

    root.querySelectorAll<HTMLElement>(".all-in-one-product-item-js").forEach((product) => {
      const tabs = Array.from(product.querySelectorAll<HTMLElement>(".tab-product-js"));
      const panels = Array.from(product.querySelectorAll<HTMLElement>(".panel-product-js"));
      tabs.forEach((tab, index) => {
        on(tab, "click", (event) => {
          event.preventDefault();
          tabs.forEach((node) => node.classList.toggle("active", node === tab));
          panels.forEach((panel, panelIndex) => panel.classList.toggle("active", panelIndex === index));
        });
      });
    });

    // NHTQ feature table tabs.
    root.querySelectorAll<HTMLElement>(".tabP-js").forEach((group) => {
      const tabs = Array.from(group.querySelectorAll<HTMLElement>(".tab"));
      const panels = Array.from(group.querySelectorAll<HTMLElement>(".tab-panel"));
      tabs.forEach((tab, index) => {
        on(tab, "click", (event) => {
          event.preventDefault();
          tabs.forEach((node) => node.classList.toggle("active", node === tab));
          panels.forEach((panel, panelIndex) => panel.classList.toggle("active", panelIndex === index));
        });
      });
    });

    // Read-more/toggle blocks retained from source markup.
    root.querySelectorAll<HTMLElement>(".read-more-btn").forEach((btn) => {
      on(btn, "click", (event) => {
        event.preventDefault();
        const host = btn.closest<HTMLElement>(".moreContent");
        host?.classList.toggle("show");
        const text = btn.querySelector<HTMLElement>(".c-text,.txt");
        if (text) text.textContent = host?.classList.contains("show") ? "Thu gọn" : "Đọc tiếp";
      });
    });
    root.querySelectorAll<HTMLElement>(".toggleOnclick,.wdsMore").forEach((btn) => {
      on(btn, "click", (event) => {
        event.preventDefault();
        const host = btn.closest<HTMLElement>(".toggleParent,.wdsContent");
        const target = host?.querySelector<HTMLElement>(".toggleHide,.wdsMoreHide");
        if (!host || !target) return;
        const open = target.style.display !== "none" && getComputedStyle(target).display !== "none";
        setDisplay(target, !open);
        host.classList.toggle("active", !open);
        btn.classList.toggle("hide", !open);
      });
    });

    // Case-study title selector on SkillHub.
    const caseStudy = root.querySelector<HTMLElement>(".case-study-js");
    if (caseStudy) {
      const choices = Array.from(caseStudy.querySelectorAll<HTMLElement>(".case-study-tt .case-item"));
      choices.forEach((choice) => {
        on(choice, "click", () => choices.forEach((node) => node.classList.toggle("open", node === choice)));
      });
    }

    // MP4/YouTube placeholders remain visually interactive until real videos are supplied.
    root.querySelectorAll<HTMLElement>(".mona-video-placeholder, video[data-kedi-video='mock']").forEach((video) => {
      on(video, "click", () => {
        video.classList.toggle("is-play");
      });
    });

    const initHeavyMotion = async () => {
      try {
        const [{ gsap }, { ScrollTrigger }] = await Promise.all([
          import("gsap"),
          import("gsap/ScrollTrigger"),
        ]);
        if (disposed) return;
        gsap.registerPlugin(ScrollTrigger);

        // Source pages reveal many independent visual layers. Keep their original CSS
        // transitions, with GSAP used only for parallax/scrub where the HTML snapshot
        // cannot carry scroll state by itself.
        const parallax = Array.from(root.querySelectorAll<HTMLElement>(
          ".nhtq-hero img,.mona-parallax img,.we-never-stop-sun,.corporate-culture img,.invest img,.Leverage img",
        )).slice(0, 48);
        parallax.forEach((el, index) => {
          const tween = gsap.fromTo(
            el,
            { yPercent: index % 2 ? -2.5 : 2.5 },
            {
              yPercent: index % 2 ? 4 : -4,
              ease: "none",
              scrollTrigger: {
                trigger: el.closest("section, .sec-com, .nhtq-hero, .culture") || el,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.8,
              },
            },
          );
          gsapCleanups.push(() => {
            tween.scrollTrigger?.kill();
            tween.kill();
          });
        });

        // NHTQ horizontal story sections: preserve the actual DOM width from MONA.
        if (kind === "nhtq" && window.innerWidth > 768) {
          root.querySelectorAll<HTMLElement>(".horizontal-section").forEach((section) => {
            const scroller = section.querySelector<HTMLElement>(".horizontal-scroll");
            const parent = section.closest<HTMLElement>(".horizontal-section-p");
            if (!scroller || !parent) return;
            const getDistance = () => Math.max(0, scroller.scrollWidth - root.clientWidth + 220);
            const tween = gsap.to(scroller, {
              x: () => -getDistance(),
              ease: "none",
              scrollTrigger: {
                trigger: parent,
                start: "top top+=64",
                end: () => `+=${Math.max(700, getDistance())}`,
                scrub: true,
                invalidateOnRefresh: true,
              },
            });
            gsapCleanups.push(() => {
              tween.scrollTrigger?.kill();
              tween.kill();
            });
          });
        }

        // Entrance movement supplements source active classes without replacing them.
        root.querySelectorAll<HTMLElement>("[data-aos]").forEach((el) => {
          const tween = gsap.fromTo(el, { y: 24, opacity: 0.25 }, {
            y: 0,
            opacity: 1,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          });
          gsapCleanups.push(() => {
            tween.scrollTrigger?.kill();
            tween.kill();
          });
        });

        ScrollTrigger.refresh();
      } catch {
        // CSS/IntersectionObserver animation remains fully functional if GSAP fails.
      }

      // Swiper is already a KEDI dependency, so no MONA script/tracker is loaded.
      try {
        const swiperModule = await import("swiper/bundle");
        if (disposed) return;
        const SwiperCtor = swiperModule.default as any;
        const seen = new Set<Element>();
        const add = (el: Element | null, options: Record<string, unknown>) => {
          if (!el || seen.has(el)) return;
          seen.add(el);
          try { swiperInstances.push(new SwiperCtor(el, options)); } catch { /* static fallback */ }
        };

        root.querySelectorAll(".blogsw-slide .swiper").forEach((el) => add(el, {
          speed: kind === "jms" ? 1200 : 800,
          loop: true,
          spaceBetween: 24,
          autoplay: { delay: kind === "jms" ? 2000 : 3000 },
          slidesPerView: 2.2,
          breakpoints: { 0: { slidesPerView: 1.2, spaceBetween: 12 }, 500: { slidesPerView: 2 }, 768: { slidesPerView: 3 }, 1200: { slidesPerView: 4 } },
        }));
        root.querySelectorAll(".swiper-train").forEach((el) => add(el, {
          loop: true,
          slidesPerView: 1.2,
          spaceBetween: 16,
          pagination: { el: (el as HTMLElement).querySelector(".swiper-pagination"), clickable: true },
          breakpoints: { 576: { slidesPerView: 2 }, 1200: { slidesPerView: 3 } },
        }));
        root.querySelectorAll(".swiper-sec-leave-js").forEach((el) => add(el, {
          slidesPerView: 1.1,
          spaceBetween: 12,
          breakpoints: { 576: { slidesPerView: 2.2 }, 769: { slidesPerView: 2.8 }, 1200: { slidesPerView: 3.1 } },
        }));
        root.querySelectorAll(".swiper-comment-js").forEach((el) => add(el, {
          slidesPerView: 1,
          spaceBetween: 8,
          pagination: { el: (el as HTMLElement).querySelector(".swiper-pagination"), clickable: true },
        }));
        root.querySelectorAll(".swiper-feature-js.swiper-container").forEach((el) => add(el, {
          slidesPerView: 1,
          spaceBetween: 16,
          pagination: { el: (el as HTMLElement).querySelector(".pagin-js"), clickable: true },
        }));
        root.querySelectorAll(".show-case.swiper").forEach((el) => add(el, {
          slidesPerView: "auto",
          speed: 1000,
          spaceBetween: 24,
          centeredSlides: true,
          autoplay: { delay: 3000 },
          loop: true,
        }));
      } catch {
        // Original layout remains readable without carousel JS.
      }
    };

    initHeavyMotion();

    return () => {
      disposed = true;
      observers.forEach((observer) => observer.disconnect());
      timers.forEach((id) => {
        window.clearTimeout(id);
        window.clearInterval(id);
      });
      swiperInstances.forEach((instance) => instance.destroy?.(true, true));
      gsapCleanups.forEach((cleanup) => cleanup());
      cleanups.forEach((cleanup) => cleanup());
    };
  }, [kind]);

  return (
    <div ref={rootRef} className={`mona-clone-root mona-${kind} relative z-[1] w-full`}>
      <link rel="stylesheet" href={cssHref} />
      <div dangerouslySetInnerHTML={{ __html: markup }} />
    </div>
  );
}
