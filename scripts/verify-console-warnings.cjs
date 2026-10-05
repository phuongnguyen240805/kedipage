const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');
const root = path.resolve(__dirname, '..');
let checks = 0;
const source = file => ts.createSourceFile(file, fs.readFileSync(path.join(root, file), 'utf8'), ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
function find(tree, predicate) {
  if (predicate(tree)) return tree;
  let found;
  ts.forEachChild(tree, node => { if (!found) found = find(node, predicate); });
  return found;
}
function bodyState(initial = {}) {
  const values = new Map(Object.entries(initial));
  let hasStyle = values.size > 0;
  return {
    hasAttribute: () => hasStyle,
    removeAttribute: () => { hasStyle = false; },
    style: {
      getPropertyValue: key => values.get(key)?.[0] || '',
      getPropertyPriority: key => values.get(key)?.[1] || '',
      setProperty(key, value, priority = '') { hasStyle = true; values.set(key, [value, priority]); },
      removeProperty: key => values.delete(key),
      get cssText() { return [...values.keys()].join(';'); },
    },
  };
}
for (const [file, flag] of [['components/layouts/MobileNav.tsx', 'isOpen'], ['components/ui/animated-modal.tsx', 'open']]) {
  const tree = source(file);
  const effect = find(tree, node => ts.isCallExpression(node) && node.expression.getText(tree) === 'useEffect' && node.arguments[0]?.getText(tree).includes('document.body'));
  assert(effect, `Missing scroll effect in ${file}`);
  const code = `(${effect.arguments[0].getText(tree)})()`;
  const run = (body, locked) => vm.runInNewContext(code, { document: { body }, [flag]: locked });
  const closed = bodyState();
  assert.equal(run(closed, false), undefined);
  assert.equal(closed.hasAttribute('style'), false, 'Closed overlays must not mutate body'); checks++;
  const opened = bodyState();
  const cleanup = run(opened, true);
  assert.equal(opened.style.getPropertyValue('overflow'), 'hidden');
  cleanup();
  assert.equal(opened.hasAttribute('style'), false, 'Cleanup must remove an introduced empty style attribute'); checks++;
  const existing = bodyState({ overflow: ['clip', 'important'], color: ['red', ''] });
  run(existing, true)();
  assert.equal(existing.style.getPropertyValue('overflow'), 'clip');
  assert.equal(existing.style.getPropertyPriority('overflow'), 'important');
  assert.equal(existing.style.getPropertyValue('color'), 'red'); checks++;
  run(opened, true)(); run(opened, true)();
  assert.equal(opened.hasAttribute('style'), false, 'StrictMode replay must restore the initial body'); checks++;
}
const initTree = source('i18n/request.tsx');
const notice = find(initTree, node => ts.isPropertyAssignment(node) && node.name.getText(initTree) === 'showSupportNotice');
assert.equal(notice?.initializer.kind, ts.SyntaxKind.FalseKeyword);
const infos = [], originalInfo = console.info;
console.info = message => infos.push(message);
try {
  require('i18next').createInstance().init({ showSupportNotice: false, initAsync: false, lng: 'vi', resources: { vi: { translation: {} } } });
} finally { console.info = originalInfo; }
assert(!infos.some(message => /locize/i.test(message))); checks++;
const { getImageProps } = require('next/image');
for (const [file, src, dimensions] of [
  ['components/layouts/brand-logo.tsx', 'https://assets.kedi.media/images/521d6ee8430017434c68-380.webp', { fill: true }],
  ['components/customer-care/CustomerCareWidget.tsx', 'https://assets.kedi.media/images/2de530a0f360a25ba68a-60.webp', { width: 60, height: 60 }],
]) {
  const tree = source(file);
  const image = find(tree, node => ts.isJsxSelfClosingElement(node) && node.tagName.getText(tree) === 'Image');
  assert(image?.attributes.properties.some(prop => prop.name?.getText(tree) === 'unoptimized'));
  const { props } = getImageProps({ src, alt: 'test', ...dimensions, unoptimized: true, loader: () => { throw new Error('Static icon must bypass the width loader'); } });
  assert.equal(props.src, src);
  assert.equal(props.srcSet, undefined);
  if (dimensions.fill) { assert.equal(props.style.width, '100%'); assert.equal(props.style.height, '100%'); }
  else { assert.equal(props.width, 60); assert.equal(props.height, 60); }
  checks++;
}
console.log(`PASS ${checks} checks: closed overlays, scroll cleanup, original styles, StrictMode, i18next notice, Next image loader bypass and image sizing.`);
