/*!
 * KEDI Quote Share — chọn văn bản để tạo ảnh trích dẫn và chia sẻ.
 * Vẽ bằng Canvas 2D trên trình duyệt; dùng logo KEDI và QR dẫn về bài viết.
 * Cấu hình: window.KEDI_QUOTE_CFG = { logoDark, logoWhite, site, downloadPrefix }
 */
(function () {
  'use strict';
  if (window.__kediQuoteInit) return;
  window.__kediQuoteInit = true;

  var CFG = window.KEDI_QUOTE_CFG || {};
  var SITE = CFG.site || 'kedi.media';
  var LOGO_DARK = CFG.logoDark || 'https://assets.kedi.media/images/faea1e69567763e173ea-380.webp';   // chữ đen → cho nền sáng
  var LOGO_WHITE = CFG.logoWhite || 'https://assets.kedi.media/images/521d6ee8430017434c68-380.webp'; // chữ trắng → cho nền tối
  var DOWNLOAD_PREFIX = CFG.downloadPrefix || 'kedi-quote';

  var MIN_LEN = Number(CFG.minLength) || 12;   // số ký tự tối thiểu của đoạn bôi đen
  var MAX_LEN = Number(CFG.maxLength) || 600;  // quá dài thì cắt cho vừa card

  // Vùng cho phép bôi đen (nội dung bài/trang)
  var ALLOW = CFG.allow || '.entry-content, .blog-large-content, article, main, [data-quote-source]';
  // Vùng loại trừ (không tạo quote ở nav/footer/form/nút...)
  // KHÔNG dùng [class*="form"] — match nhầm class body "single-format-standard"
  var DENY = CFG.deny || 'header, footer, nav, aside, form, button, input, textarea, .popup, .menu-extra, .breadcrumb, .wpcf7, .contact-box';

  // KEDI canvas themes can be customized through the site configuration.
  var THEME_CFG = CFG.themes || {};
  var BRAND_THEME = THEME_CFG.brand || {};
  var PRIMARY_THEME = THEME_CFG.primary || {};
  var ACCENT_THEME = THEME_CFG.accent || {};
  var DARK_THEME = THEME_CFG.dark || {};
  var THEMES = [
    {
      id: 'brand',
      label: BRAND_THEME.label || CFG.brandLabel || 'KEDI',
      grad: BRAND_THEME.grad || ['#071F42', '#0D478C', '#FFC629'],
      fg: BRAND_THEME.fg || '#ffffff',
      logo: BRAND_THEME.logo || 'white'
    },
    {
      id: 'primary',
      label: PRIMARY_THEME.label || 'KEDI Navy',
      bg: PRIMARY_THEME.bg || '#0B2D5B',
      fg: PRIMARY_THEME.fg || '#ffffff',
      logo: PRIMARY_THEME.logo || 'white'
    },
    {
      id: 'accent',
      label: ACCENT_THEME.label || 'KEDI Cream',
      bg: ACCENT_THEME.bg || '#FFF3C4',
      fg: ACCENT_THEME.fg || '#0B2D5B',
      logo: ACCENT_THEME.logo || 'dark'
    },
    {
      id: 'dark',
      label: DARK_THEME.label || 'KEDI Deep Navy',
      bg: DARK_THEME.bg || '#06172F',
      fg: DARK_THEME.fg || '#ffffff',
      logo: DARK_THEME.logo || 'white'
    },
    { id: 'trang', label: 'Trắng', bg: '#ffffff', fg: '#0B2D5B', logo: 'dark', border: true }
  ];

  var SIZES = [
    { id: 'vuong', label: 'Vuông', w: 1080, h: 1080 },
    { id: 'doc',   label: 'Dọc',   w: 1080, h: 1350 },
    { id: 'ngang', label: 'Ngang', w: 1200, h: 630 }
  ];

  var state = {
    quote: '',
    theme: 'brand',
    size: 'vuong',
    title: '',
    author: '',
    url: ''
  };

  var logoCache = {};
  function loadLogo(which) {
    var src = which === 'dark' ? LOGO_DARK : LOGO_WHITE;
    if (!src) return Promise.resolve(null);
    if (logoCache[which]) return logoCache[which];
    logoCache[which] = new Promise(function (res) {
      var img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = function () { res(img); };
      img.onerror = function () { res(null); };
      img.src = src;
    });
    return logoCache[which];
  }

  // ---------- phát hiện bôi đen ----------
  function selInfo() {
    var sel = window.getSelection && window.getSelection();
    if (!sel || sel.rangeCount === 0 || sel.isCollapsed) return null;
    var text = (sel.toString() || '').replace(/\s+/g, ' ').trim();
    if (text.length < MIN_LEN) return null;
    var range = sel.getRangeAt(0);
    var node = range.commonAncestorContainer;
    var el = node.nodeType === 1 ? node : node.parentElement;
    if (!el) return null;
    if (el.closest(DENY)) return null;
    if (!el.closest(ALLOW)) return null;
    return { text: text, rect: range.getBoundingClientRect() };
  }

  var pill = null;
  function makePill() {
    if (pill) return pill;
    pill = document.createElement('button');
    pill.type = 'button';
    pill.dataset.glass = 'none';
    pill.className = 'kedi-quote-pill';
    pill.innerHTML = '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M9.6 5C6.5 5 4 7.5 4 10.6c0 2.6 1.8 4.8 4.2 5.4-.1 1.4-.7 2.4-1.7 3.1-.3.2-.4.6-.2.9.2.3.6.4.9.2C9.9 19 11.6 16.5 11.6 12V8.2C11.6 6.4 10.9 5 9.6 5zm9 0C15.5 5 13 7.5 13 10.6c0 2.6 1.8 4.8 4.2 5.4-.1 1.4-.7 2.4-1.7 3.1-.3.2-.4.6-.2.9.2.3.6.4.9.2C18.9 19 20.6 16.5 20.6 12V8.2C20.6 6.4 19.9 5 18.6 5z"/></svg><span>Tạo ảnh Quote</span>';
    pill.addEventListener('mousedown', function (e) { e.preventDefault(); });
    pill.addEventListener('click', function () {
      hidePill();
      openModal();
    });
    document.body.appendChild(pill);
    return pill;
  }
  function showPill(text, rect) {
    state.quote = text.length > MAX_LEN ? text.slice(0, MAX_LEN).trim() + '…' : text;
    var p = makePill();
    p.classList.add('show');
    var top = rect.top + window.scrollY - 46;
    var left = rect.left + window.scrollX + rect.width / 2;
    if (top < window.scrollY + 8) top = rect.bottom + window.scrollY + 10;
    p.style.top = top + 'px';
    p.style.left = left + 'px';
  }
  function hidePill() { if (pill) pill.classList.remove('show'); }

  function onSelChange() {
    var info = selInfo();
    if (info) showPill(info.text, info.rect);
    else hidePill();
  }
  document.addEventListener('mouseup', function () { setTimeout(onSelChange, 10); });
  document.addEventListener('keyup', function (e) {
    if (e.shiftKey || e.key === 'ArrowLeft' || e.key === 'ArrowRight') setTimeout(onSelChange, 10);
  });
  document.addEventListener('scroll', hidePill, { passive: true });

  // Same-origin iframe bridge for embedded blog pages. Their
  // selection lives in a different document, so the React frame forwards the
  // selected text + its rectangle to this parent quote engine.
  window.addEventListener('message', function (event) {
    if (event.origin !== window.location.origin) return;
    var data = event.data || {};
    if (data.source !== 'kedi-blog-frame') return;

    if (data.type === 'kedi-quote-share-hide') {
      hidePill();
      return;
    }
    if (data.type !== 'kedi-quote-share-selection') return;

    var text = String(data.text || '').replace(/\s+/g, ' ').trim();
    var rect = data.rect || {};
    var top = Number(rect.top);
    var left = Number(rect.left);
    var width = Number(rect.width);
    var bottom = Number(rect.bottom);

    if (
      text.length < MIN_LEN ||
      !Number.isFinite(top) ||
      !Number.isFinite(left) ||
      !Number.isFinite(width) ||
      !Number.isFinite(bottom)
    ) {
      hidePill();
      return;
    }

    showPill(text, {
      top: top,
      left: left,
      width: width,
      bottom: bottom
    });
  });

  // ---------- meta của bài ----------
  function readMeta() {
    var h1 = document.querySelector('[data-quote-source] h1, .blog-large-content h1, article h1, h1.entry-title, h1');
    state.title = (h1 ? h1.textContent : document.title).replace(/\s+/g, ' ').trim();
    var au = document.querySelector('[rel="author"], .author-name, .post-author a, meta[name="author"]');
    state.author = au ? (au.content || au.textContent).trim() : '';
    state.url = location.hostname.replace(/^www\./, '') + (location.pathname.length > 1 ? location.pathname : '');
    state.fullUrl = location.protocol + '//' + location.host + location.pathname; // QR trỏ về đúng bài (bỏ query/hash)
  }

  // vẽ QR code trỏ về bài gốc (thuần JS, không gọi server → canvas không bị taint)
  function drawQR(c, url, x, y, sizePx, dark) {
    if (typeof qrcode === 'undefined') return false;
    var qr;
    try { qr = qrcode(0, 'M'); qr.addData(url); qr.make(); }
    catch (e) { return false; }
    var n = qr.getModuleCount();
    // nền trắng bo góc + quiet-zone để quét được trên mọi màu nền
    var r = Math.round(sizePx * 0.06);
    c.fillStyle = '#ffffff';
    c.beginPath();
    c.moveTo(x + r, y);
    c.arcTo(x + sizePx, y, x + sizePx, y + sizePx, r);
    c.arcTo(x + sizePx, y + sizePx, x, y + sizePx, r);
    c.arcTo(x, y + sizePx, x, y, r);
    c.arcTo(x, y, x + sizePx, y, r);
    c.closePath(); c.fill();
    var quiet = sizePx * 0.10;
    var cell = (sizePx - quiet * 2) / n;
    c.fillStyle = dark || '#16121F';
    for (var row = 0; row < n; row++) {
      for (var col = 0; col < n; col++) {
        if (qr.isDark(row, col)) {
          c.fillRect(Math.round(x + quiet + col * cell), Math.round(y + quiet + row * cell),
                     Math.ceil(cell), Math.ceil(cell));
        }
      }
    }
    return true;
  }

  // ---------- modal ----------
  var modal, canvas, ctx, statusEl;
  function openModal() {
    readMeta();
    if (!modal) buildModal();
    modal.classList.add('open');
    document.body.classList.add('kedi-quote-lock');
    render();
    // font có thể load trễ → render lại cho chữ đúng Be Vietnam Pro
    if (document.fonts && document.fonts.ready) {
      document.fonts.load('700 48px "Be Vietnam Pro"').then(function () {
        if (modal.classList.contains('open')) render();
      });
      document.fonts.ready.then(function () {
        if (modal.classList.contains('open')) render();
      });
    }
  }
  function closeModal() {
    if (modal) modal.classList.remove('open');
    document.body.classList.remove('kedi-quote-lock');
  }

  function buildModal() {
    modal = document.createElement('div');
    modal.className = 'kedi-quote-modal';
    modal.innerHTML =
      '<div class="kedi-quote-overlay"></div>' +
      '<div class="kedi-quote-dialog">' +
        '<div class="kedi-quote-head"><span>Chia sẻ Quote</span><button class="kedi-quote-close" aria-label="Đóng">&times;</button></div>' +
        '<div class="kedi-quote-body">' +
          '<div class="kedi-quote-preview"><canvas class="kedi-quote-canvas"></canvas></div>' +
          '<div class="kedi-quote-controls">' +
            '<div class="kedi-quote-group"><div class="kedi-quote-label">Nền</div><div class="kedi-quote-swatches" data-row="theme"></div></div>' +
            '<div class="kedi-quote-group"><div class="kedi-quote-label">Kích thước</div><div class="kedi-quote-sizes" data-row="size"></div></div>' +
            '<div class="kedi-quote-actions">' +
              '<button class="kedi-quote-btn kedi-quote-dl">⬇ Tải về</button>' +
              '<button class="kedi-quote-btn kedi-quote-copy">⧉ Copy ảnh</button>' +
              '<button class="kedi-quote-btn kedi-quote-fb">f Share Facebook</button>' +
            '</div>' +
            '<div class="kedi-quote-status"></div>' +
          '</div>' +
        '</div>' +
      '</div>';
    // Quote controls own their colors and focus states; skip global glass styling.
    modal.querySelectorAll('button').forEach(function (button) {
      button.dataset.glass = 'none';
    });
    document.body.appendChild(modal);

    canvas = modal.querySelector('.kedi-quote-canvas');
    ctx = canvas.getContext('2d');
    statusEl = modal.querySelector('.kedi-quote-status');

    // swatches nền
    var swWrap = modal.querySelector('.kedi-quote-swatches');
    THEMES.forEach(function (t) {
      var b = document.createElement('button');
      b.className = 'kedi-quote-sw' + (t.id === state.theme ? ' on' : '');
      b.dataset.glass = 'none';
      b.dataset.id = t.id;
      b.title = t.label;
      if (t.grad) b.style.background = 'linear-gradient(135deg,' + t.grad.join(',') + ')';
      else b.style.background = t.bg;
      if (t.border) b.style.boxShadow = 'inset 0 0 0 1px #d0d0d0';
      b.addEventListener('click', function () {
        state.theme = t.id;
        swWrap.querySelectorAll('.kedi-quote-sw').forEach(function (x) { x.classList.remove('on'); });
        b.classList.add('on');
        render();
      });
      swWrap.appendChild(b);
    });

    // sizes
    var szWrap = modal.querySelector('.kedi-quote-sizes');
    SIZES.forEach(function (s) {
      var b = document.createElement('button');
      b.className = 'kedi-quote-size' + (s.id === state.size ? ' on' : '');
      b.dataset.glass = 'none';
      b.dataset.id = s.id;
      b.textContent = s.label;
      b.addEventListener('click', function () {
        state.size = s.id;
        szWrap.querySelectorAll('.kedi-quote-size').forEach(function (x) { x.classList.remove('on'); });
        b.classList.add('on');
        render();
      });
      szWrap.appendChild(b);
    });

    modal.querySelector('.kedi-quote-overlay').addEventListener('click', closeModal);
    modal.querySelector('.kedi-quote-close').addEventListener('click', closeModal);
    modal.querySelector('.kedi-quote-dl').addEventListener('click', download);
    modal.querySelector('.kedi-quote-copy').addEventListener('click', copyImg);
    modal.querySelector('.kedi-quote-fb').addEventListener('click', shareFB);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
    });
  }

  // ---------- vẽ canvas ----------
  function theme() { return THEMES.filter(function (t) { return t.id === state.theme; })[0]; }
  function size() { return SIZES.filter(function (s) { return s.id === state.size; })[0]; }

  function wrap(c, text, maxW, font) {
    c.font = font;
    var words = text.split(' '), lines = [], cur = '';
    for (var i = 0; i < words.length; i++) {
      var test = cur ? cur + ' ' + words[i] : words[i];
      if (c.measureText(test).width > maxW && cur) { lines.push(cur); cur = words[i]; }
      else cur = test;
    }
    if (cur) lines.push(cur);
    return lines;
  }

  var renderToken = 0;
  function render() {
    var myToken = ++renderToken; // chống race: logo async của render cũ không vẽ đè lên canvas mới
    var s = size(), t = theme();
    var dpr = 1; // canvas đã render ở px lớn, đủ nét
    canvas.width = s.w; canvas.height = s.h;
    var padding = Math.round(s.w * 0.085);
    var fg = t.fg;

    // nền
    if (t.grad) {
      var g = ctx.createLinearGradient(0, 0, s.w, s.h);
      var stops = t.grad.length > 1 ? t.grad : [t.grad[0], t.grad[0]];
      stops.forEach(function (color, index) {
        g.addColorStop(index / (stops.length - 1), color);
      });
      ctx.fillStyle = g;
    } else ctx.fillStyle = t.bg;
    ctx.fillRect(0, 0, s.w, s.h);
    if (t.border) { ctx.strokeStyle = '#ececec'; ctx.lineWidth = 2; ctx.strokeRect(1, 1, s.w - 2, s.h - 2); }

    // dấu nháy mở to
    ctx.fillStyle = fg;
    ctx.globalAlpha = 0.22;
    ctx.font = '900 ' + Math.round(s.w * 0.18) + 'px Georgia, "Be Vietnam Pro", serif';
    ctx.textBaseline = 'top';
    ctx.fillText('“', padding - Math.round(s.w * 0.01), padding - Math.round(s.w * 0.04));
    ctx.globalAlpha = 1;

    // vùng cho quote
    var U = Math.min(s.w, s.h);
    var FH = Math.round(U * 0.19);                    // cao khối footer (logo/URL/QR)
    var topQuote = padding + Math.round(s.w * 0.11);
    var bottomReserve = FH + Math.round(s.w * 0.05);  // chừa cho footer
    var availH = s.h - topQuote - padding - bottomReserve;
    var maxW = s.w - padding * 2;

    // auto-fit cỡ chữ
    var fontMax = Math.round(s.w * 0.062);
    var fontMin = Math.round(s.w * 0.026);
    var fs = fontMax, lines, lh;
    for (; fs >= fontMin; fs -= 2) {
      var fnt = '700 ' + fs + 'px "Be Vietnam Pro", system-ui, sans-serif';
      lines = wrap(ctx, state.quote, maxW, fnt);
      lh = Math.round(fs * 1.34);
      if (lines.length * lh <= availH) break;
    }
    // nếu vẫn tràn (đoạn cực dài) → cắt dòng + thêm …
    if (lines.length * lh > availH) {
      var maxLines = Math.max(3, Math.floor(availH / lh));
      lines = lines.slice(0, maxLines);
      lines[lines.length - 1] = lines[lines.length - 1].replace(/[.,…\s]+$/, '') + '…';
    }

    ctx.fillStyle = fg;
    ctx.font = '700 ' + fs + 'px "Be Vietnam Pro", system-ui, sans-serif';
    ctx.textBaseline = 'alphabetic';
    var y = topQuote + fs;
    lines.forEach(function (ln) { ctx.fillText(ln, padding, y); y += lh; });

    // ----- FOOTER: QR (góc phải, quét về bài) + logo KEDI + tiêu đề + URL bài -----
    var qrSize = FH;
    var qx = s.w - padding - qrSize;
    var qy = s.h - padding - qrSize;
    drawQR(ctx, state.fullUrl, qx, qy, qrSize, '#16121F');

    // logo KEDI — bên trái QR, căn giữa dọc theo QR
    var lw = Math.round(U * 0.20);
    var fallbackRatio = 80 / 492;
    var logoRatio = fallbackRatio;
    var lx = qx - Math.round(s.w * 0.03) - lw;
    var rightLimit = lx - Math.round(s.w * 0.025);
    loadLogo(t.logo).then(function (img) {
      if (!img || myToken !== renderToken) return;
      if (img.naturalWidth && img.naturalHeight) logoRatio = img.naturalHeight / img.naturalWidth;
      var lh2 = Math.round(lw * logoRatio);
      ctx.drawImage(img, lx, qy + Math.round((qrSize - lh2) / 2), lw, lh2);
    });

    // khối text trái: kẻ + tiêu đề + URL bài gốc (dạng text để người xem biết link)
    var metaFs = Math.round(U * 0.028);
    var textMaxW = rightLimit - padding;
    var fit = function (str, font) {
      ctx.font = font; var o = str;
      while (ctx.measureText(str).width > textMaxW && str.length > 4) str = str.slice(0, -2);
      return str === o ? str : str + '…';
    };
    ctx.textBaseline = 'alphabetic';

    ctx.fillStyle = fg; ctx.globalAlpha = 0.32;
    ctx.fillRect(padding, qy + Math.round(qrSize * 0.10), Math.round(s.w * 0.07), Math.max(3, Math.round(s.w * 0.004)));
    ctx.globalAlpha = 1;

    var tFont = '700 ' + metaFs + 'px "Be Vietnam Pro", system-ui, sans-serif';
    ctx.fillStyle = fg; ctx.globalAlpha = 0.95;
    ctx.font = tFont;
    ctx.fillText(fit(state.title, tFont), padding, qy + Math.round(qrSize * 0.50));
    var uFont = '600 ' + Math.round(metaFs * 0.86) + 'px "Be Vietnam Pro", system-ui, sans-serif';
    ctx.globalAlpha = 0.7; ctx.font = uFont;
    var urlLine = state.url + (state.author ? '  ·  ' + state.author : '');
    ctx.fillText(fit(urlLine, uFont), padding, qy + Math.round(qrSize * 0.50) + Math.round(metaFs * 1.5));
    ctx.globalAlpha = 1;
  }

  // ---------- actions ----------
  function flash(msg, ok) {
    statusEl.textContent = msg;
    statusEl.className = 'kedi-quote-status ' + (ok === false ? 'err' : 'ok');
    setTimeout(function () { statusEl.textContent = ''; statusEl.className = 'kedi-quote-status'; }, 2600);
  }
  function fileName() {
    var slug = (state.title || DOWNLOAD_PREFIX).toLowerCase()
      .normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd')
      .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 50);
    return DOWNLOAD_PREFIX + '-' + (slug || 'share') + '.png';
  }
  function download() {
    canvas.toBlob(function (blob) {
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = fileName();
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
      flash('Đã tải ảnh về máy ✓');
    }, 'image/png');
  }
  function copyImg() {
    if (!navigator.clipboard || !window.ClipboardItem) { flash('Trình duyệt không hỗ trợ copy — hãy bấm Tải về', false); return; }
    canvas.toBlob(function (blob) {
      navigator.clipboard.write([new window.ClipboardItem({ 'image/png': blob })])
        .then(function () { flash('Đã copy ảnh — dán thẳng vào chat/post ✓'); })
        .catch(function () { flash('Copy thất bại — hãy bấm Tải về', false); });
    }, 'image/png');
  }
  function shareFB() {
    var u = location.href.split('#')[0];
    var url = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(u) +
              '&quote=' + encodeURIComponent('“' + state.quote + '”');
    window.open(url, '_blank', 'noopener,width=640,height=640');
    flash('Mở Facebook — tải ảnh về rồi đính kèm để đẹp hơn');
  }

  // load font cho canvas (Be Vietnam Pro — đủ dấu tiếng Việt)
  if (!document.querySelector('link[data-kedi-quote-font]')) {
    var l = document.createElement('link');
    l.rel = 'stylesheet'; l.setAttribute('data-kedi-quote-font', '1');
    l.href = 'https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;600;700;900&display=swap';
    document.head.appendChild(l);
  }
})();
