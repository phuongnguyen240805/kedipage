/**
 * pnpm on Windows often leaves `next` as an empty junction. OpenNext then fails
 * with `Cannot find module 'next/package.json'` or `Cannot find module './impl'`.
 * Download the tarball and extract a real copy into node_modules/next.
 */
const { execFileSync } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');

const ROOT = process.cwd();
const NEXT_DIR = path.join(ROOT, 'node_modules', 'next');
const MARKER = path.join(NEXT_DIR, 'dist', 'build', 'webpack-build', 'impl.js');
const PKG = path.join(NEXT_DIR, 'package.json');

function isComplete() {
  return fs.existsSync(PKG) && fs.existsSync(MARKER);
}

if (isComplete()) {
  const version = JSON.parse(fs.readFileSync(PKG, 'utf8')).version;
  console.log(`[ensure-next] next@${version} is complete`);
  process.exit(0);
}

const wanted = (() => {
  try {
    return require(path.join(ROOT, 'package.json')).dependencies.next.replace(
      /^[^0-9]*/,
      ''
    );
  } catch {
    return '14.2.35';
  }
})();

console.log(`[ensure-next] next is incomplete; fetching next@${wanted}`);

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'ensure-next-'));
try {
  execFileSync('npm', ['pack', `next@${wanted}`, '--pack-destination', tmp], {
    cwd: ROOT,
    stdio: 'inherit',
    shell: process.platform === 'win32',
  });
  const tgz = fs.readdirSync(tmp).find((name) => name.endsWith('.tgz'));
  if (!tgz) throw new Error('npm pack did not produce a tarball');

  const extractDir = path.join(tmp, 'extract');
  fs.mkdirSync(extractDir, { recursive: true });
  execFileSync('tar', ['-xzf', path.join(tmp, tgz), '-C', extractDir], {
    stdio: 'inherit',
    shell: process.platform === 'win32',
  });
  const packed = path.join(extractDir, 'package');
  if (!fs.existsSync(packed)) {
    throw new Error('tarball did not contain package/');
  }

  fs.mkdirSync(path.join(ROOT, 'node_modules'), { recursive: true });
  fs.rmSync(NEXT_DIR, { recursive: true, force: true });
  fs.cpSync(packed, NEXT_DIR, { recursive: true, force: true });

  if (!isComplete()) {
    throw new Error('extracted next is still missing package.json or webpack-build/impl.js');
  }
  const version = JSON.parse(fs.readFileSync(PKG, 'utf8')).version;
  console.log(`[ensure-next] installed next@${version} at ${NEXT_DIR}`);
} finally {
  fs.rmSync(tmp, { recursive: true, force: true });
}
