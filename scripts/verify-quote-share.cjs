const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');
const root = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const frameSource = read('components/blog/clones/BlogMonaCloneFrame.tsx');
const engine = read('public/quote-share/quote-share.js');
const provider = read('components/features/quote-share/QuoteShareProvider.tsx');
const checks = [];
function check(name, run) { run(); checks.push(name); }
function mountFrame(readyState = 'complete', url = 'https://kedi.test/blog.html') {
  let height = 720, styleWrites = 0;
  const styles = () => {
    const values = new Map(), priorities = new Map();
    return {
      getPropertyValue: key => values.get(key) || '',
      getPropertyPriority: key => priorities.get(key) || '',
      setProperty(key, value, priority) { styleWrites++; values.set(key, value); priorities.set(key, priority); },
    };
  };
  const classNames = new Set(), documentListeners = new Map(), windowListeners = new Map();
  const add = (map, name, fn) => { if (!map.has(name)) map.set(name, new Set()); map.get(name).add(fn); };
  const remove = (map, name, fn) => map.get(name)?.delete(fn);
  const body = { style: styles(), classList: { add: v => classNames.add(v) }, scrollHeight: 3000, offsetHeight: 3000 };
  const documentElement = { style: styles(), scrollHeight: 720, offsetHeight: 720 };
  const main = { getBoundingClientRect: () => ({ bottom: body.offsetHeight }) };
  const ids = new Set();
  const doc = {
    readyState, URL: url, body, documentElement,
    head: { appendChild: el => ids.add(el.id) },
    createElement: () => ({}),
    getElementById: id => ids.has(id) ? {} : null,
    querySelector: selector => selector === 'main' ? main : null,
    querySelectorAll: () => [],
    addEventListener: (name, fn) => add(documentListeners, name, fn),
    removeEventListener: (name, fn) => remove(documentListeners, name, fn),
  };
  let nextId = 0;
  const raf = new Map();
  class Observer { observe() {} disconnect() {} }
  const childWindow = {
    scrollY: 0, ResizeObserver: Observer, MutationObserver: Observer,
    requestAnimationFrame: fn => { const id = ++nextId; raf.set(id, fn); return id; },
    cancelAnimationFrame: id => raf.delete(id),
    setInterval: () => ++nextId, clearInterval() {}, setTimeout: () => ++nextId, clearTimeout() {},
    addEventListener() {}, removeEventListener() {},
  };
  const frame = { src: 'https://kedi.test/blog.html', contentDocument: doc, contentWindow: childWindow };
  const effects = [], callbacks = [];
  const react = {
    useRef: () => ({ current: frame }),
    useState: () => [height, fn => { height = typeof fn === 'function' ? fn(height) : fn; }],
    useCallback: fn => { callbacks.push(fn); return fn; },
    useEffect: fn => effects.push(fn),
  };
  const window = {
    location: { origin: 'https://kedi.test' },
    addEventListener: (name, fn) => add(windowListeners, name, fn),
    removeEventListener: (name, fn) => remove(windowListeners, name, fn),
  };
  const exports = {};
  const source = ts.transpileModule(frameSource, { compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, target: ts.ScriptTarget.ES2020 } }).outputText;
  vm.runInNewContext(source, { exports, window, require: name => name === 'react' ? react : { jsx: (type, props) => ({ type, props }), jsxs: (type, props) => ({ type, props }) } });
  const tree = exports.default({ slug: 'viet-phan-mem-thoi-dai-ai', title: 'Blog' });
  let effectCleanups = effects.map(effect => effect());
  const replayEffects = () => {
    effectCleanups.forEach(cleanup => { if (typeof cleanup === 'function') cleanup(); });
    effectCleanups = effects.map(effect => effect());
  };
  const flush = () => { const pending = [...raf.values()]; raf.clear(); pending.forEach(fn => fn()); };
  return { doc, frame, classNames, ids, documentListeners, callbacks, flush, replayEffects, get height() { return height; }, get styleWrites() { return styleWrites; }, onLoad: tree.props.children.props.onLoad };
}
check('Already-loaded SSR iframe initializes branding and quote listeners', () => {
  const f = mountFrame(); f.flush();
  assert(f.classNames.has('kedi-blog-brand'));
  assert(f.ids.has('kedi-blog-brand-style'));
  assert.equal(f.documentListeners.get('mouseup').size, 1);
  assert.equal(f.height, 3000);
});
check('Loading iframe initializes through its normal onLoad event', () => {
  const f = mountFrame('loading'); assert.equal(f.classNames.size, 0);
  f.doc.readyState = 'complete'; f.onLoad(); f.flush();
  assert(f.classNames.has('kedi-blog-brand')); assert.equal(f.height, 3000);
});
check('Initial about:blank document is not initialized', () => {
  const f = mountFrame('complete', 'about:blank'); assert.equal(f.classNames.size, 0);
});
check('Iframe height can shrink after responsive reflow', () => {
  const f = mountFrame(); f.flush();
  f.doc.documentElement.scrollHeight = 3000;
  f.doc.documentElement.offsetHeight = 3000;
  f.doc.body.scrollHeight = 1800; f.doc.body.offsetHeight = 1800;
  f.callbacks[0](); assert.equal(f.height, 1800);
});
check('Stable layout measurements do not write styles repeatedly', () => {
  const f = mountFrame(); f.flush(); const writes = f.styleWrites;
  f.callbacks[0](); f.callbacks[0](); assert.equal(f.styleWrites, writes);
});
check('Repeated iframe initialization retains one set of selection listeners', () => {
  const f = mountFrame(); f.onLoad(); f.onLoad();
  assert.equal(f.documentListeners.get('mouseup').size, 1);
  assert.equal(f.documentListeners.get('touchend').size, 1);
});
check('StrictMode effect replay retains an active bridge without duplicate listeners', () => {
  const f = mountFrame(); f.replayEffects(); f.flush();
  assert.equal(f.documentListeners.get('mouseup').size, 1);
  assert.equal(f.documentListeners.get('touchend').size, 1);
  assert.equal(f.height, 3000);
});
check('Quote engine and provider share the KEDI globals', () => {
  assert(engine.includes('window.KEDI_QUOTE_CFG'));
  assert(provider.includes('w.KEDI_QUOTE_CFG'));
  assert(engine.includes('window.__kediQuoteInit'));
  assert(provider.includes('w.__kediQuoteInit'));
  assert(!/MONA_QUOTE_CFG|__monaQuoteInit/.test(engine + provider));
});
check('Iframe quote/height messages are synchronized across both blog pages', () => {
  assert(engine.includes("data.source !== 'kedi-blog-frame'"));
  assert(frameSource.includes("source: 'kedi-blog-frame'"));
  assert(frameSource.includes("'kedi-blog-frame-height'"));
  for (const slug of ['viet-phan-mem-thoi-dai-ai', 'tu-dong-hoa-doanh-nghiep']) {
    const html = read(`public/blog-clone/${slug}/index.html`);
    assert(html.includes('kedi-blog-frame-height'));
    assert(!html.includes('kedi-blog-clone'));
  }
});
console.log(`${checks.length} checks passed`);
for (const name of checks) console.log(`PASS ${name}`);
