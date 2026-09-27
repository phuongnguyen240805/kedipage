/**
 * OpenNext expects the Next standalone app at:
 *   .next/standalone/.next/server/pages-manifest.json
 *
 * A parent workspace/lockfile can make Next emit the app one directory deeper,
 * e.g. .next/standalone/kedi.media/.next/server/pages-manifest.json.
 * Fail early with the actual detected path instead of letting OpenNext crash
 * later with an opaque ENOENT.
 */
const fs = require('fs');
const path = require('path');

const root = process.cwd();
const standalone = path.join(root, '.next', 'standalone');
const expected = path.join(standalone, '.next', 'server', 'pages-manifest.json');

if (fs.existsSync(expected)) {
  console.log('[verify-opennext] standalone layout OK');
  console.log(`[verify-opennext] ${expected}`);
  process.exit(0);
}

const matches = [];
function walk(dir, depth = 0) {
  if (depth > 8 || !fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === 'node_modules') continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, depth + 1);
      continue;
    }
    if (
      entry.name === 'pages-manifest.json' &&
      path.basename(path.dirname(full)) === 'server' &&
      path.basename(path.dirname(path.dirname(full))) === '.next'
    ) {
      matches.push(full);
    }
  }
}

walk(standalone);

console.error('\n[verify-opennext] Invalid Next standalone layout.');
console.error(`[verify-opennext] Expected: ${expected}`);
if (matches.length) {
  console.error('[verify-opennext] Found manifest(s) at:');
  for (const file of matches) console.error(`  - ${file}`);
  console.error('\n[verify-opennext] This is usually caused by the app being treated as a nested monorepo package.');
  console.error('[verify-opennext] Check for extra package-lock.json / pnpm-lock.yaml / yarn.lock / bun.lock in the parent workspace.');
} else {
  console.error('[verify-opennext] No pages-manifest.json was found under .next/standalone.');
}
process.exit(1);
