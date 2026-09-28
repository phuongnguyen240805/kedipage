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

const KEDI_BLOG_BRAND_CSS = String.raw`
:root {
  --kedi-blog-navy: #0B2D5B;
  --kedi-blog-navy-2: #174A82;
  --kedi-blog-yellow: #FFC629;
  --kedi-blog-yellow-2: #FFD75E;
  --kedi-blog-yellow-soft: #FFF5CC;
  --kedi-blog-surface: #F5F9FD;
  --kedi-blog-ink: #102A43;
  --kedi-blog-muted: #5A7188;
  --kedi-blog-line: #D9E5EF;
}

body.kedi-blog-brand {
  background: #fff !important;
  color: var(--kedi-blog-ink) !important;
}

body.kedi-blog-brand .sec-blogt {
  background:
    radial-gradient(circle at 84% 10%, rgba(255, 198, 41, .20), transparent 26%),
    linear-gradient(180deg, #f5f9fd 0%, #ffffff 82%) !important;
}
body.kedi-blog-brand .blogt-dot { opacity: .16 !important; filter: hue-rotate(185deg) saturate(.75); }
body.kedi-blog-brand .blogpc3-top .title,
body.kedi-blog-brand .blogr > .title,
body.kedi-blog-brand .blogpc3-content .link,
body.kedi-blog-brand .blogr-link {
  color: var(--kedi-blog-navy) !important;
  -webkit-text-fill-color: var(--kedi-blog-navy) !important;
}
body.kedi-blog-brand .blogpc3-top .des,
body.kedi-blog-brand .blogpc3-content .des,
body.kedi-blog-brand .blogr-top,
body.kedi-blog-brand .blogr-author {
  color: var(--kedi-blog-muted) !important;
}
body.kedi-blog-brand .blogpc3-logo {
  width: min(190px, 44vw) !important;
  min-height: 50px;
  padding: 9px 14px;
  border: 1px solid var(--kedi-blog-line);
  border-radius: 16px;
  background: rgba(255, 255, 255, .92);
  box-shadow: 0 18px 42px -32px rgba(11, 45, 91, .55);
}
body.kedi-blog-brand .blogpc3-logo img {
  display: block;
  width: 100% !important;
  height: auto !important;
  max-height: 44px;
  object-fit: contain;
}
body.kedi-blog-brand .blogpc3-slide,
body.kedi-blog-brand .blogr-inner {
  border: 1px solid var(--kedi-blog-line) !important;
  background: #fff !important;
  box-shadow: 0 22px 52px -38px rgba(11, 45, 91, .42) !important;
}
body.kedi-blog-brand .blogpc3-slide { border-radius: 26px; overflow: hidden; }
body.kedi-blog-brand .blogr-inner { border-radius: 20px; transition: border-color .2s ease, box-shadow .2s ease, transform .2s ease; }
body.kedi-blog-brand .blogr-inner:hover {
  border-color: rgba(255, 198, 41, .72) !important;
  box-shadow: 0 24px 56px -34px rgba(11, 45, 91, .48) !important;
  transform: translateY(-2px);
}
body.kedi-blog-brand .blogpc3-content-tag {
  background: var(--kedi-blog-yellow-soft) !important;
  color: var(--kedi-blog-navy) !important;
  border-color: rgba(255, 198, 41, .58) !important;
}
body.kedi-blog-brand .blogpc3-content-tag .icon img {
  width: 20px !important;
  height: 20px !important;
  object-fit: contain;
}
body.kedi-blog-brand .blogt-link .text,
body.kedi-blog-brand .blogt-link .icon,
body.kedi-blog-brand .c-pri,
body.kedi-blog-brand .blogr-author .text {
  color: var(--kedi-blog-navy-2) !important;
}
body.kedi-blog-brand .blogr-img .inner,
body.kedi-blog-brand .blogpc3-img .inner {
  overflow: hidden;
  border-radius: 16px;
}
body.kedi-blog-brand .blogr-right .widget {
  overflow: hidden;
  border: 1px solid var(--kedi-blog-line);
  border-radius: 20px;
  background: var(--kedi-blog-surface);
  box-shadow: 0 20px 46px -34px rgba(11, 45, 91, .45);
}
body.kedi-blog-brand .blogr-right .widget img {
  display: block;
  width: 100% !important;
  height: auto !important;
}
body.kedi-blog-brand #media_image-7 img,
body.kedi-blog-brand #media_image-6 img {
  aspect-ratio: 4 / 3;
  object-fit: cover;
}
body.kedi-blog-brand .sec-blogb {
  background:
    radial-gradient(circle at 82% 14%, rgba(255, 198, 41, .22), transparent 30%),
    linear-gradient(135deg, var(--kedi-blog-navy), var(--kedi-blog-navy-2)) !important;
}
body.kedi-blog-brand .sec-blogb .title,
body.kedi-blog-brand .sec-blogb .des {
  color: #fff !important;
  -webkit-text-fill-color: currentColor !important;
}
body.kedi-blog-brand .sec-blogb .blogb-bg { opacity: .22 !important; }
body.kedi-blog-brand .sec-blogb .blogb-bg img { object-fit: cover; }
body.kedi-blog-brand .sec-blogb .blogb-decor img { max-width: 320px !important; object-fit: contain; }
body.kedi-blog-brand .sec-blogb .blogb-decor2 img {
  width: 64px !important;
  height: 64px !important;
  object-fit: contain;
}
body.kedi-blog-brand .btn-orange {
  background: linear-gradient(180deg, var(--kedi-blog-yellow-2), var(--kedi-blog-yellow)) !important;
  border-color: var(--kedi-blog-yellow) !important;
  color: var(--kedi-blog-navy) !important;
  box-shadow: 0 16px 34px -22px rgba(255, 198, 41, .68) !important;
}
body.kedi-blog-brand .btn-orange .txt {
  color: var(--kedi-blog-navy) !important;
  -webkit-text-fill-color: var(--kedi-blog-navy) !important;
}
body.kedi-blog-brand .btn-orange:hover { background: #fff !important; }
body.kedi-blog-brand .blogf { display: none !important; }

@media (max-width: 767px) {
  body.kedi-blog-brand .blogpc3-logo { width: 150px !important; }
  body.kedi-blog-brand .blogpc3-slide { border-radius: 20px; }
}
`;

const BLOG_INTRO_COPY: Record<BlogCloneSlug, string> = {
  'viet-phan-mem-thoi-dai-ai':
    'Góc nhìn về cách phát triển phần mềm trong thời đại AI: AI-Native SDLC, Spec-Driven Development, AI-DLC, Agentic SDLC, Kanban và các kỹ thuật lập trình cùng AI.',
  'tu-dong-hoa-doanh-nghiep':
    'Loạt bài đi sâu vào những quy trình doanh nghiệp có thể tự động hoá, cách triển khai, chi phí và kinh nghiệm vận hành thực tế.',
};

function replaceCloneImage(
  image: HTMLImageElement | null,
  src: string,
  alt = '',
) {
  if (!image) return;
  image.src = src;
  image.srcset = '';
  image.removeAttribute('sizes');
  image.alt = alt;
}

function applyKediBlogBranding(doc: Document, slug: BlogCloneSlug) {
  const body = doc.body;
  if (!body) return;

  body.classList.add('kedi-blog-brand');

  if (!doc.getElementById('kedi-blog-brand-style')) {
    const style = doc.createElement('style');
    style.id = 'kedi-blog-brand-style';
    style.textContent = KEDI_BLOG_BRAND_CSS;
    doc.head.appendChild(style);
  }

  replaceCloneImage(
    doc.querySelector<HTMLImageElement>('.blogpc3-logo img'),
    '/brand/kedi-logo-navy.png',
    'Kedi.Media',
  );

  doc
    .querySelectorAll<HTMLImageElement>('.blogpc3-content-tag .icon img')
    .forEach((image) => replaceCloneImage(image, '/brand/kedi-icon.png'));

  const intro = doc.querySelector<HTMLElement>('.blogpc3-top .des p');
  if (intro) intro.textContent = BLOG_INTRO_COPY[slug];

  doc.querySelectorAll<HTMLElement>('.blogpc3-content-tag .text').forEach((node) => {
    node.textContent = 'KEDI chọn lọc';
  });

  const primaryPromo = doc.querySelector<HTMLElement>('#media_image-7');
  replaceCloneImage(
    primaryPromo?.querySelector<HTMLImageElement>('img') ?? null,
    '/homepage/golden-data-journey.webp',
    'KEDI - hệ sinh thái tăng trưởng',
  );
  const primaryPromoLink = primaryPromo?.querySelector<HTMLAnchorElement>('a');
  if (primaryPromoLink) {
    primaryPromoLink.href = '/blog';
    primaryPromoLink.target = '_top';
    primaryPromoLink.removeAttribute('rel');
  }

  const automationPromo = doc.querySelector<HTMLElement>('#media_image-6');
  replaceCloneImage(
    automationPromo?.querySelector<HTMLImageElement>('img') ?? null,
    '/homepage/ai-automation-card.webp',
    'KEDI - AI và Automation',
  );
  const automationPromoLink = automationPromo?.querySelector<HTMLAnchorElement>('a');
  if (automationPromoLink) {
    automationPromoLink.href = '/chuyen-doi-so';
    automationPromoLink.target = '_top';
    automationPromoLink.removeAttribute('rel');
  }

  replaceCloneImage(
    doc.querySelector<HTMLImageElement>('.sec-blogb .blogb-bg img'),
    '/homepage/cta-background.webp',
  );
  replaceCloneImage(
    doc.querySelector<HTMLImageElement>('.sec-blogb .blogb-decor img'),
    '/homepage/golden-mascot-transparent.webp',
    'KEDI',
  );
  replaceCloneImage(
    doc.querySelector<HTMLImageElement>('.sec-blogb .blogb-decor2 img'),
    '/brand/kedi-icon.png',
    'KEDI',
  );

  const cta = doc.querySelector<HTMLAnchorElement>('.sec-blogb .btn');
  if (cta) {
    cta.href = 'tel:0899332468';
    cta.target = '_top';
  }

  const ctaText = doc.querySelector<HTMLElement>('.sec-blogb .btn .txt');
  if (ctaText) ctaText.textContent = 'Liên hệ KEDI';
}


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

    applyKediBlogBranding(doc, slug);

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
