'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

type BlogCloneSlug =
  | 'viet-phan-mem-thoi-dai-ai'
  | 'tu-dong-hoa-doanh-nghiep';

type Props = {
  slug: BlogCloneSlug;
  title: string;
};

const INITIAL_HEIGHT = 720;
const MIN_HEIGHT = 240;

export default function BlogMonaCloneFrame({ slug, title }: Props) {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [height, setHeight] = useState(INITIAL_HEIGHT);

  const measureFrame = useCallback(() => {
    const frame = iframeRef.current;
    const doc = frame?.contentDocument;
    if (!frame || !doc) return;

    const win = frame.contentWindow;
    const root = doc.documentElement;
    const body = doc.body;
    const main = doc.querySelector('main');

    // MONA sets body overflow/height in its global stylesheet. Inside the clone
    // iframe we want the document to grow naturally and let KEDI own scrolling.
    root.style.setProperty('height', 'auto', 'important');
    root.style.setProperty('min-height', '0', 'important');
    root.style.setProperty('overflow-y', 'visible', 'important');
    body?.style.setProperty('height', 'auto', 'important');
    body?.style.setProperty('min-height', '0', 'important');
    body?.style.setProperty('overflow-y', 'visible', 'important');

    const mainBottom = main
      ? Math.ceil(main.getBoundingClientRect().bottom + (win?.scrollY || 0))
      : 0;

    const nextHeight = Math.max(
      MIN_HEIGHT,
      root.scrollHeight || 0,
      root.offsetHeight || 0,
      body?.scrollHeight || 0,
      body?.offsetHeight || 0,
      mainBottom,
    );

    if (!Number.isFinite(nextHeight) || nextHeight <= 0) return;
    setHeight((current) =>
      Math.abs(current - nextHeight) > 2 ? nextHeight : current,
    );
  }, []);

  const handleLoad = useCallback(() => {
    const frame = iframeRef.current;
    const doc = frame?.contentDocument;
    const win = frame?.contentWindow;
    if (!frame || !doc || !win) return;

    let raf = 0;
    let resizeObserver: ResizeObserver | null = null;
    let mutationObserver: MutationObserver | null = null;
    let timer: number | null = null;

    const scheduleMeasure = () => {
      win.cancelAnimationFrame(raf);
      raf = win.requestAnimationFrame(measureFrame);
    };

    scheduleMeasure();

    const ResizeObserverCtor = (
      win as unknown as { ResizeObserver?: typeof ResizeObserver }
    ).ResizeObserver;

    if (ResizeObserverCtor) {
      resizeObserver = new ResizeObserverCtor(scheduleMeasure);
      resizeObserver.observe(doc.documentElement);
      if (doc.body) resizeObserver.observe(doc.body);
      const main = doc.querySelector('main');
      if (main) resizeObserver.observe(main);
    }

    const MutationObserverCtor = (win as Window & {
      MutationObserver: typeof MutationObserver;
    }).MutationObserver;
    mutationObserver = new MutationObserverCtor(scheduleMeasure);
    mutationObserver.observe(doc.documentElement, {
      subtree: true,
      childList: true,
      attributes: true,
      characterData: false,
    });

    doc.querySelectorAll('img').forEach((img) => {
      if (!img.complete) img.addEventListener('load', scheduleMeasure, { once: true });
    });

    win.addEventListener('resize', scheduleMeasure);

    // Pointer events do not bubble out of an iframe. Forward the pointer
    // coordinates to KEDI's parent window so the global hover particles keep
    // reacting while the mouse is over the cloned MONA page.
    const forwardPointerMove = (event: MouseEvent) => {
      const rect = frame.getBoundingClientRect();
      const clientX = rect.left + event.clientX;
      const clientY = rect.top + event.clientY;

      const mouseInit: MouseEventInit = {
        clientX,
        clientY,
        bubbles: true,
      };

      window.dispatchEvent(new MouseEvent('mousemove', mouseInit));

      if (typeof PointerEvent !== 'undefined') {
        window.dispatchEvent(
          new PointerEvent('pointermove', {
            ...mouseInit,
            pointerType: 'mouse',
            isPrimary: true,
          }),
        );
      }
    };

    const iframePointerEvent = 'onpointermove' in win ? 'pointermove' : 'mousemove';
    doc.addEventListener(iframePointerEvent, forwardPointerMove as EventListener, {
      passive: true,
    });

    // Quote Share lives in the parent KEDI document. A selection created inside
    // an iframe belongs to a different document, so forward the selected text
    // and its viewport rectangle to the parent quote engine.
    const quoteAllow =
      '.mona-content, .entry-content, .blog-large-content, article, main, [data-quote-source]';
    const quoteDeny =
      'header, footer, nav, aside, form, button, input, textarea, .popup, .menu-extra, .breadcrumb, .wpcf7, .contact-box, [data-quote-ignore]';

    const postQuoteHide = () => {
      window.postMessage(
        { type: 'kedi-quote-share-hide', source: 'kedi-blog-clone', slug },
        window.location.origin,
      );
    };

    const postQuoteSelection = () => {
      const selection = win.getSelection();
      if (!selection || selection.rangeCount === 0 || selection.isCollapsed) {
        postQuoteHide();
        return;
      }

      const text = (selection.toString() || '').replace(/\s+/g, ' ').trim();
      if (text.length < 12) {
        postQuoteHide();
        return;
      }

      const range = selection.getRangeAt(0);
      const node = range.commonAncestorContainer;
      const element =
        node.nodeType === 1 ? (node as Element) : node.parentElement;

      if (!element || element.closest(quoteDeny) || !element.closest(quoteAllow)) {
        postQuoteHide();
        return;
      }

      const selectionRect = range.getBoundingClientRect();
      const frameRect = frame.getBoundingClientRect();
      const top = frameRect.top + selectionRect.top;
      const left = frameRect.left + selectionRect.left;

      window.postMessage(
        {
          type: 'kedi-quote-share-selection',
          source: 'kedi-blog-clone',
          slug,
          text,
          rect: {
            top,
            left,
            width: selectionRect.width,
            height: selectionRect.height,
            bottom: frameRect.top + selectionRect.bottom,
          },
        },
        window.location.origin,
      );
    };

    const handleQuoteMouseUp = () => win.setTimeout(postQuoteSelection, 15);
    const handleQuoteTouchEnd = () => win.setTimeout(postQuoteSelection, 80);
    const handleQuoteKeyUp = (event: KeyboardEvent) => {
      if (
        event.shiftKey ||
        event.key === 'ArrowLeft' ||
        event.key === 'ArrowRight' ||
        event.key === 'ArrowUp' ||
        event.key === 'ArrowDown'
      ) {
        win.setTimeout(postQuoteSelection, 15);
      }
    };

    doc.addEventListener('mousedown', postQuoteHide, { passive: true });
    doc.addEventListener('mouseup', handleQuoteMouseUp, { passive: true });
    doc.addEventListener('touchend', handleQuoteTouchEnd, { passive: true });
    doc.addEventListener('keyup', handleQuoteKeyUp);
    doc.addEventListener('scroll', postQuoteHide, { capture: true, passive: true });

    timer = win.setInterval(scheduleMeasure, 750);
    win.setTimeout(() => {
      if (timer !== null) win.clearInterval(timer);
    }, 6000);

    // Store cleanup on the iframe element because onLoad can fire again during HMR.
    const frameWithCleanup = frame as HTMLIFrameElement & { __kediCleanup?: () => void };
    frameWithCleanup.__kediCleanup?.();
    frameWithCleanup.__kediCleanup = () => {
      win.cancelAnimationFrame(raf);
      resizeObserver?.disconnect();
      mutationObserver?.disconnect();
      win.removeEventListener('resize', scheduleMeasure);
      doc.removeEventListener(iframePointerEvent, forwardPointerMove as EventListener);
      doc.removeEventListener('mousedown', postQuoteHide);
      doc.removeEventListener('mouseup', handleQuoteMouseUp);
      doc.removeEventListener('touchend', handleQuoteTouchEnd);
      doc.removeEventListener('keyup', handleQuoteKeyUp);
      doc.removeEventListener('scroll', postQuoteHide, true);
      if (timer !== null) win.clearInterval(timer);
    };
  }, [measureFrame, slug]);

  useEffect(() => {
    const frame = iframeRef.current as
      | (HTMLIFrameElement & { __kediCleanup?: () => void })
      | null;

    const onMessage = (event: MessageEvent) => {
      if (event.origin !== window.location.origin) return;
      const data = event.data as {
        type?: string;
        slug?: string;
        height?: number;
      };
      if (data?.type !== 'kedi-blog-clone-height' || data.slug !== slug) return;
      if (typeof data.height !== 'number' || !Number.isFinite(data.height)) return;
      setHeight(Math.max(MIN_HEIGHT, Math.ceil(data.height)));
    };

    window.addEventListener('message', onMessage);
    window.addEventListener('resize', measureFrame);

    return () => {
      window.removeEventListener('message', onMessage);
      window.removeEventListener('resize', measureFrame);
      frame?.__kediCleanup?.();
    };
  }, [measureFrame, slug]);

  return (
    <section className="relative z-[1] w-full overflow-visible bg-white">
      <iframe
        ref={iframeRef}
        src={`/blog-clone/${slug}/index.html`}
        title={title}
        onLoad={handleLoad}
        scrolling="no"
        className="block w-full border-0 bg-white"
        style={{ height: `${height}px`, minHeight: 0 }}
        sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
      />
    </section>
  );
}
