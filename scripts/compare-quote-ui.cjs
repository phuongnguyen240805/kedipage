const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const reportDir = path.resolve(__dirname, '../reports/quote-ui');
const cases = JSON.parse(fs.readFileSync(path.join(reportDir, 'quote-matrix.json'), 'utf8'));
const beforeCases = cases.filter(item => item.version === 'before');
const keys = item => [item.width, item.height, item.size, item.theme].join('|');
const afterCases = new Map(cases.filter(item => item.version === 'after').map(item => [keys(item), item]));
assert.equal(beforeCases.length, 45, 'Expected 5 themes × 3 canvas sizes × 3 viewports');
const geometryProperties = ['display','position','boxSizing','width','height','fontFamily','fontSize','lineHeight','borderRadius','padding','gap','flexDirection','overflowX','overflowY'];
let maxGeometryDifferencePx = 0, comparedElements = 0;
const failures = [], horizontalOverflowCases = [];
for (const before of beforeCases) {
  const after = afterCases.get(keys(before));
  if (!after) { failures.push({ case: keys(before), reason: 'Missing after capture' }); continue; }
  for (const part of ['canvas', 'dialog']) {
    if (JSON.stringify(before.metrics[part]) !== JSON.stringify(after.metrics[part])) failures.push({ case: keys(before), part, before: before.metrics[part], after: after.metrics[part] });
  }
  if (before.metrics.elements.length !== after.metrics.elements.length) failures.push({ case: keys(before), reason: 'DOM element count changed' });
  before.metrics.elements.forEach((element, index) => {
    const current = after.metrics.elements[index]; if (!current) return;
    comparedElements++;
    if (element.tag !== current.tag || element.cls !== current.cls) failures.push({ case: keys(before), index, reason: 'Unexpected DOM structure/class change' });
    element.rect.forEach((value, coordinate) => {
      const difference = Math.abs(value - current.rect[coordinate]);
      maxGeometryDifferencePx = Math.max(maxGeometryDifferencePx, difference);
      if (difference > 0.1) failures.push({ case: keys(before), index, coordinate, before: value, after: current.rect[coordinate] });
    });
    for (const property of geometryProperties) if (element.style[property] !== current.style[property]) failures.push({ case: keys(before), index, property, before: element.style[property], after: current.style[property] });
  });
  if (after.metrics.dialog.scrollWidth > after.metrics.dialog.width) horizontalOverflowCases.push(keys(before));
}
const summary = { pairedCases: beforeCases.length, comparedElements, maxGeometryDifferencePx, failures: failures.length, details: failures, horizontalOverflowCases };
fs.writeFileSync(path.join(reportDir, 'comparison.json'), JSON.stringify(summary, null, 2));
console.log(JSON.stringify(summary, null, 2));
assert.equal(failures.length, 0, 'Quote layout regression found');
assert.equal(horizontalOverflowCases.length, 0, 'Quote modal horizontal overflow found');
