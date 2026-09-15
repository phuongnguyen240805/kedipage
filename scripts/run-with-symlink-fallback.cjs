/**
 * Sets NODE_OPTIONS=--require so OpenNext's child `next build` gets the
 * Windows symlink fallback. No-op on non-Windows.
 */
const path = require('path');
const { spawn } = require('child_process');

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error(
    'usage: node scripts/run-with-symlink-fallback.cjs <command> [args...]'
  );
  process.exit(1);
}

require('./patch-next-cf.cjs');

const env = { ...process.env };

if (process.platform === 'win32') {
  const hook = path
    .resolve(__dirname, 'win-symlink-fallback.cjs')
    .replace(/\\/g, '/');
  const extra = `--require "${hook}"`;
  env.NODE_OPTIONS = [env.NODE_OPTIONS, extra].filter(Boolean).join(' ');
}

const quoted = args
  .map((arg) => (/\s/.test(arg) ? `"${arg}"` : arg))
  .join(' ');
const child = spawn(quoted, {
  stdio: 'inherit',
  shell: true,
  env,
  windowsHide: true,
});

child.on('exit', (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }
  process.exit(code ?? 1);
});
