/**
 * Wrangler 4 intercepts `wrangler deploy` in OpenNext apps and calls
 * `opennextjs-cloudflare deploy`, which then cannot resolve next if
 * node_modules is broken. Set OPEN_NEXT_DEPLOY so Wrangler uploads
 * `.open-next/worker.js` directly.
 */
const path = require('path');
const { spawn } = require('child_process');

const extra = process.argv
  .slice(2)
  .map((arg) => (/\s/.test(arg) ? `"${arg}"` : arg))
  .join(' ');
const command = extra ? `npx wrangler deploy ${extra}` : 'npx wrangler deploy';

const child = spawn(command, {
  stdio: 'inherit',
  shell: true,
  cwd: path.join(__dirname, '..'),
  env: {
    ...process.env,
    OPEN_NEXT_DEPLOY: 'true',
  },
  windowsHide: true,
});

child.on('exit', (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }
  process.exit(code ?? 1);
});
