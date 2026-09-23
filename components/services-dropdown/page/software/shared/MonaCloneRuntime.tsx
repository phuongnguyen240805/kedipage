"use client";

import { useEffect, useRef } from "react";

type Kind = "nhtq" | "skillhub" | "jms" | "aiagent";

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
    const rafIds = new Set<number>();
    const requestFrame = (cb: FrameRequestCallback) => {
      let id = 0;
      id = window.requestAnimationFrame((time) => {
        rafIds.delete(id);
        cb(time);
      });
      rafIds.add(id);
      return id;
    };
    const cancelFrame = (id: number) => {
      rafIds.delete(id);
      window.cancelAnimationFrame(id);
    };
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

    // AI Agent clone: recreate only the page-specific interactions from the supplied bundle.
    // The original WordPress jQuery, trackers, reCAPTCHA, AOS and generic theme JS are deliberately not loaded.
    if (kind === "aiagent") {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const touch = window.matchMedia("(hover: none)").matches;
      const wide = () => window.matchMedia("(min-width: 981px)").matches;

      observe(".bag-rv", (el) => el.classList.add("in"), undefined, {
        rootMargin: "0px 0px -6% 0px",
        threshold: 0.01,
      });

      const counted = new WeakSet<HTMLElement>();
      observe("[data-bag-count]", (el) => {
        if (counted.has(el)) return;
        counted.add(el);
        const end = Number(el.dataset.bagCount || 0);
        if (reduced || !Number.isFinite(end)) {
          el.textContent = String(end);
          return;
        }
        const start = performance.now();
        const step = (now: number) => {
          const p = Math.min(1, (now - start) / 1500);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = String(Math.round(end * eased));
          if (p < 1) requestFrame(step);
        };
        el.textContent = "0";
        requestFrame(step);
      }, undefined, { threshold: 0.15 });

      root.querySelectorAll<HTMLAnchorElement>('.bag a[href^="#"]').forEach((anchor) => {
        on(anchor, "click", (event) => {
          const selector = anchor.getAttribute("href");
          if (!selector || selector === "#") return;
          const target = root.querySelector<HTMLElement>(selector);
          if (!target) return;
          event.preventDefault();
          target.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
        });
      });

      if (!touch) {
        root.querySelectorAll<HTMLElement>("[data-bag-glow],.bag-row[data-i]").forEach((el) => {
          on(el, "mousemove", (event) => {
            const e = event as MouseEvent;
            const box = el.getBoundingClientRect();
            el.style.setProperty("--mx", `${e.clientX - box.left}px`);
            el.style.setProperty("--my", `${e.clientY - box.top}px`);
          });
        });
      }

      // Hero orbit: same visual model as the captured page, but scoped to this clone root.
      const orbit = root.querySelector<HTMLElement>("#bagOrbit");
      if (orbit) {
        const NS = "http://www.w3.org/2000/svg";
        const agents = Array.from(orbit.querySelectorAll<HTMLElement>(".bag-ob"));
        const spokes = orbit.querySelector<SVGGElement>("#bagSpokes");
        const ringO = orbit.querySelector<SVGEllipseElement>("#bagRingO");
        const ringI = orbit.querySelector<SVGEllipseElement>("#bagRingI");
        const pulse = orbit.querySelector<SVGCircleElement>("#bagPulse");
        const bear = orbit.querySelector<HTMLElement>("#bagBear");
        const frontName = orbit.querySelector<HTMLElement>("#bagFrontN");
        const frontRole = orbit.querySelector<HTMLElement>("#bagFrontR");
        const hero = root.querySelector<HTMLElement>("#bag-hero");
        if (agents.length && spokes && ringO && ringI && pulse) {
          const lines = agents.map(() => {
            const line = document.createElementNS(NS, "line");
            spokes.appendChild(line);
            return line;
          });
          const rings = [
            { r: 0.42, speed: -6.2832 / 72000 },
            { r: 0.27, speed: 6.2832 / 54000 },
          ];
          let mx = 0;
          let my = 0;
          let tx = 0;
          let ty = 0;
          let visible = true;
          let orbitRaf = 0;
          let front = -1;
          const t0 = performance.now();
          const draw = (now: number) => {
            mx += (tx - mx) * 0.06;
            my += (ty - my) * 0.06;
            const W = orbit.clientWidth || 1;
            const center = 500;
            const cy = W < 560 ? 480 : 432;
            const k = (W < 560 ? 0.52 : 0.7) + my * 0.06;
            const scrollPhase = window.scrollY * 0.0012;
            let best = -9;
            let bestIndex = 0;
            agents.forEach((el, index) => {
              const ring = rings[Number(el.dataset.ring || 0)] || rings[0];
              const angle = Number(el.dataset.a || 0) + (reduced ? 0 : (now - t0) * ring.speed) + scrollPhase * (ring.speed > 0 ? 1 : -1) + mx * 0.6;
              const x = center + Math.cos(angle) * ring.r * 1000;
              const y = cy + Math.sin(angle) * ring.r * 1000 * k;
              const depth = Math.sin(angle);
              const scale = 0.64 + 0.36 * (depth + 1) / 2;
              el.style.transform = `translate3d(${x / 1000 * W}px,${y / 1000 * W}px,0) scale(${scale.toFixed(3)})`;
              el.style.opacity = (0.34 + 0.66 * (depth + 1) / 2).toFixed(3);
              el.style.zIndex = String(depth > 0 ? 20 + Math.round(depth * 10) : Math.round(5 + depth * 4));
              const line = lines[index];
              line.setAttribute("x1", String(center));
              line.setAttribute("y1", String(cy));
              line.setAttribute("x2", String(x));
              line.setAttribute("y2", String(y));
              line.setAttribute("stroke-opacity", String(Math.max(0, depth) * 0.5));
              if (depth > best) { best = depth; bestIndex = index; }
            });
            ringO.setAttribute("ry", String(420 * k));
            ringI.setAttribute("ry", String(270 * k));
            ringO.setAttribute("rx", "420");
            ringI.setAttribute("rx", "270");
            ringO.setAttribute("cy", String(cy));
            ringI.setAttribute("cy", String(cy));
            const line = lines[bestIndex];
            const p = ((now - t0) % 2600) / 2600;
            const x2 = Number(line.getAttribute("x2") || center);
            const y2 = Number(line.getAttribute("y2") || cy);
            pulse.setAttribute("cx", String(x2 + (center - x2) * p));
            pulse.setAttribute("cy", String(y2 + (cy - y2) * p));
            pulse.setAttribute("opacity", reduced ? "0" : Math.sin(p * Math.PI).toFixed(3));
            if (bestIndex !== front) {
              front = bestIndex;
              if (frontName) frontName.textContent = agents[bestIndex].dataset.name || "AI Agent";
              if (frontRole) frontRole.textContent = agents[bestIndex].dataset.role || "";
            }
            if (bear) bear.style.transform = `translate3d(${-mx * 22}px,${-my * 16}px,0)`;
            if (visible && !reduced) orbitRaf = requestFrame(draw);
          };
          draw(performance.now());
          const orbitObserver = new IntersectionObserver((entries) => {
            visible = Boolean(entries[0]?.isIntersecting);
            if (!visible && orbitRaf) cancelFrame(orbitRaf);
            if (visible && !reduced) orbitRaf = requestFrame(draw);
          });
          orbitObserver.observe(orbit);
          observers.push(orbitObserver);
          if (!touch && hero) {
            on(hero, "mousemove", (event) => {
              const e = event as MouseEvent;
              const box = hero.getBoundingClientRect();
              tx = (e.clientX - box.left) / box.width - 0.5;
              ty = (e.clientY - box.top) / box.height - 0.5;
            });
            on(hero, "mouseleave", () => { tx = 0; ty = 0; });
          }
          cleanups.push(() => { lines.forEach((line) => line.remove()); });
        }
      }

      // Sticky agent dock follows the row crossing the reading line.
      const agentRows = Array.from(root.querySelectorAll<HTMLElement>(".bag-row[data-i]"));
      if (agentRows.length) {
        const idx = root.querySelector<HTMLElement>("#bagIdx");
        const status = root.querySelector<HTMLElement>("#bagSt");
        const avatar = root.querySelector<HTMLElement>("#bagAv");
        const name = root.querySelector<HTMLElement>("#bagName");
        const role = root.querySelector<HTMLElement>("#bagRole");
        const bar = root.querySelector<HTMLElement>("#bagBar");
        const osItems = Array.from(root.querySelectorAll<HTMLElement>(".bag-dock-os li"));
        let current: HTMLElement | null = null;
        const setCurrent = (row: HTMLElement) => {
          if (row === current) return;
          current?.classList.remove("is-on");
          current = row;
          row.classList.add("is-on");
          const i = Number(row.dataset.i || 0);
          if (idx) idx.textContent = String(i + 1).padStart(2, "0");
          if (name) name.textContent = row.dataset.name || "";
          if (role) role.textContent = row.dataset.role || "";
          if (status) {
            status.className = `bag-pill bag-pill-${row.dataset.st || "chay"}`;
            status.textContent = row.querySelector<HTMLElement>(".bag-row-head .bag-pill")?.textContent || "";
          }
          if (bar) bar.style.width = `${(i + 1) / agentRows.length * 100}%`;
          osItems.forEach((item) => item.classList.toggle("is-on", item.dataset.os === row.dataset.os));
          if (avatar) {
            const src = row.dataset.img;
            const mono = row.dataset.mono;
            avatar.innerHTML = src ? `<img src="${src}" alt="" width="132" height="132">` : `<span>${mono || "AI"}</span>`;
          }
        };
        const pick = () => {
          const mid = window.innerHeight * 0.45;
          let selected: HTMLElement | null = null;
          for (const row of agentRows) {
            const box = row.getBoundingClientRect();
            if (box.top <= mid && box.bottom >= mid) { selected = row; break; }
          }
          if (!selected) {
            const first = agentRows[0].getBoundingClientRect();
            const last = agentRows[agentRows.length - 1].getBoundingClientRect();
            selected = first.top > mid ? agentRows[0] : last.bottom < mid ? agentRows[agentRows.length - 1] : null;
          }
          if (selected) setCurrent(selected);
        };
        let dockTick = false;
        on(window, "scroll", () => {
          if (dockTick) return;
          dockTick = true;
          requestFrame(() => { dockTick = false; pick(); });
        }, { passive: true });
        agentRows.forEach((row) => { if (!touch) on(row, "mouseenter", () => setCurrent(row)); });
        pick();
      }

      // Four OS layers cycle automatically and keep the original hover tilt.
      const layers = root.querySelector<HTMLElement>("#bagLayers");
      if (layers) {
        const slabs = Array.from(layers.querySelectorAll<HTMLElement>(".bag-slab"));
        const labels = Array.from(layers.querySelectorAll<HTMLElement>(".bag-lyr li"));
        const stack = layers.querySelector<HTMLElement>("#bagStack");
        let at = reduced ? 2 : 0;
        const light = (index: number) => {
          slabs.forEach((item, i) => item.classList.toggle("is-on", i === index));
          labels.forEach((item, i) => item.classList.toggle("is-on", i === index));
        };
        light(at);
        if (!reduced && slabs.length) {
          const id = window.setInterval(() => { at = (at + 1) % slabs.length; light(at); }, 1500);
          timers.push(id);
        }
        if (!touch && !reduced && stack) {
          on(layers, "mousemove", (event) => {
            const e = event as MouseEvent;
            const box = layers.getBoundingClientRect();
            const x = (e.clientX - box.left) / box.width - 0.5;
            const y = (e.clientY - box.top) / box.height - 0.5;
            stack.style.transform = `rotateX(${58 - y * 12}deg) rotateZ(${-42 + x * 16}deg)`;
          });
          on(layers, "mouseleave", () => { stack.style.transform = ""; });
        }
      }

      // Belt rows reuse native scroll instead of importing the source's theme runtime.
      const beltRows = Array.from(root.querySelectorAll<HTMLElement>("#bagBelts .bag-beltrow"));
      if (beltRows.length) {
        const belts = beltRows.map((row) => ({
          row,
          list: row.querySelector<HTMLElement>(".bag-belt-list"),
          half: 0,
        }));
        const measure = () => belts.forEach((belt) => { belt.half = (belt.list?.scrollWidth || 0) / 2; });
        const update = () => {
          belts.forEach((belt) => {
            if (!belt.list) return;
            const box = belt.row.getBoundingClientRect();
            if (box.bottom < -240 || box.top > window.innerHeight + 240) return;
            const p = Math.min(1, Math.max(0, (window.innerHeight - box.top) / (window.innerHeight + box.height)));
            const dir = Number(belt.row.dataset.dir || 1);
            const tx = -belt.half * 0.25 + (reduced ? 0 : (p - 0.5) * dir * belt.half * 0.45);
            belt.list.style.transform = `translate3d(${tx.toFixed(1)}px,0,0)`;
          });
        };
        let beltTick = false;
        on(window, "scroll", () => {
          if (beltTick) return;
          beltTick = true;
          requestFrame(() => { beltTick = false; update(); });
        }, { passive: true });
        on(window, "resize", () => { measure(); update(); });
        measure();
        update();
      }

      // Scroll-scrub statement: split text nodes once, preserving nested <b>/<a> tags.
      const scrubWords: HTMLElement[] = [];
      root.querySelectorAll<HTMLElement>("[data-bag-scrub]").forEach((paragraph) => {
        const walk = (node: Node) => {
          Array.from(node.childNodes).forEach((child) => {
            if (child.nodeType === Node.TEXT_NODE) {
              const fragment = document.createDocumentFragment();
              (child.textContent || "").split(/(\s+)/).forEach((token) => {
                if (!token) return;
                if (/^\s+$/.test(token)) fragment.appendChild(document.createTextNode(token));
                else {
                  const span = document.createElement("span");
                  span.className = "w";
                  span.textContent = token;
                  fragment.appendChild(span);
                  scrubWords.push(span);
                }
              });
              child.parentNode?.replaceChild(fragment, child);
            } else if (child.nodeType === Node.ELEMENT_NODE) walk(child);
          });
        };
        walk(paragraph);
      });
      const truth = root.querySelector<HTMLElement>("#vi-sao-that");
      let lastLit = -1;
      const lightWords = (lit: number) => {
        if (lit === lastLit) return;
        scrubWords.forEach((word, index) => word.classList.toggle("on", index < lit));
        lastLit = lit;
      };

      // Five-step horizontal story and truth word scrub share one scroll callback.
      const hs = root.querySelector<HTMLElement>("#bagHs");
      const hsTrack = root.querySelector<HTMLElement>("#bagHsTrack");
      const hsBar = root.querySelector<HTMLElement>("#bagHsBar");
      let hsDistance = 0;
      const measureHs = () => { hsDistance = Math.max(0, (hsTrack?.scrollWidth || 0) - window.innerWidth); };
      const updateScrollStory = () => {
        if (truth && scrubWords.length) {
          const box = truth.getBoundingClientRect();
          if (box.bottom < 0) lightWords(scrubWords.length);
          else if (box.top > window.innerHeight) lightWords(0);
          else {
            const p = reduced ? 1 : Math.min(1, Math.max(0, (window.innerHeight * 0.85 - box.top) / (box.height * 0.85)));
            lightWords(Math.round(p * scrubWords.length * 1.1));
          }
        }
        if (hs && hsTrack) {
          if (wide() && !reduced) {
            const box = hs.getBoundingClientRect();
            const run = Math.max(1, box.height - window.innerHeight);
            const p = Math.min(1, Math.max(0, -box.top / run));
            hsTrack.style.transform = `translate3d(${(-p * hsDistance).toFixed(1)}px,0,0)`;
            if (hsBar) hsBar.style.width = `${p * 100}%`;
          } else {
            hsTrack.style.transform = "";
          }
        }
      };
      let storyTick = false;
      on(window, "scroll", () => {
        if (storyTick) return;
        storyTick = true;
        requestFrame(() => { storyTick = false; updateScrollStory(); });
      }, { passive: true });
      on(window, "resize", () => { measureHs(); updateScrollStory(); });
      measureHs();
      updateScrollStory();

      // Floating avatar on department roster.
      const roster = root.querySelector<HTMLElement>("#bagRoster");
      const floating = root.querySelector<HTMLElement>("#bagFloat");
      if (roster && floating && !touch) {
        const image = floating.querySelector<HTMLImageElement>("img");
        let x = 0, y = 0, cx = 0, cy = 0, floatRaf = 0, active = false;
        const loop = () => {
          cx += (x - cx) * (reduced ? 1 : 0.18);
          cy += (y - cy) * (reduced ? 1 : 0.18);
          floating.style.left = `${cx}px`;
          floating.style.top = `${cy}px`;
          if (active) floatRaf = requestFrame(loop);
        };
        roster.querySelectorAll<HTMLElement>(".bag-drow").forEach((row) => {
          on(row, "mouseenter", (event) => {
            const e = event as MouseEvent;
            const src = row.dataset.img || "";
            if (image && image.src !== src) image.src = src;
            x = cx = e.clientX + 110;
            y = cy = e.clientY;
            floating.classList.add("is-on");
            if (!active) { active = true; floatRaf = requestFrame(loop); }
          });
          on(row, "mousemove", (event) => {
            const e = event as MouseEvent;
            x = e.clientX + 110;
            y = e.clientY;
          });
        });
        on(roster, "mouseleave", () => {
          floating.classList.remove("is-on");
          active = false;
          if (floatRaf) cancelFrame(floatRaf);
        });
        on(window, "scroll", () => {
          if (!active) return;
          floating.classList.remove("is-on");
          active = false;
          if (floatRaf) cancelFrame(floatRaf);
        }, { passive: true });
      }

      // Source chat buttons are kept as UI only; route to the page contact section instead of MONA widget/tel.
      root.querySelectorAll<HTMLElement>("[data-bag-chat]").forEach((button) => {
        on(button, "click", () => root.querySelector<HTMLElement>("#lien-he")?.scrollIntoView({ behavior: reduced ? "auto" : "smooth" }));
      });
    }

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
      rafIds.forEach((id) => window.cancelAnimationFrame(id));
      rafIds.clear();
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
      <link rel="stylesheet" href="/software-clone/kedi-brand-theme.css" />
      <div dangerouslySetInnerHTML={{ __html: markup }} />
    </div>
  );
}
