/**
 * Wrangler 4 intercepts `wrangler deploy` in OpenNext apps and calls
 * `opennextjs-cloudflare deploy`, which then cannot resolve next if
 * node_modules is broken. Set OPEN_NEXT_DEPLOY so Wrangler uploads
 * `.open-next/worker.js` directly.
 */
const path = require('path');
const { spawn } = require('child_process');
require('./cloudflare-env.cjs');

const extra = process.argv
  .slice(2)
  .map((arg) => (/\s/.test(arg) ? `"${arg}"` : arg))
  .join(' ');
const command = extra ? `npx wrangler deploy ${extra}` : 'npx wrangler deploy';

const child = spawn(command, {
  stdio: ['inherit', 'pipe', 'pipe'],
  shell: true,
  cwd: path.join(__dirname, '..'),
  env: {
    ...process.env,
    OPEN_NEXT_DEPLOY: 'true',
  },
  windowsHide: true,
});

// Wrangler's config diff can print existing dashboard secrets stored as vars.
// Buffer complete lines so a credential split between chunks is still redacted.
const secretValues = Object.entries(process.env)
  .filter(([key, value]) => /SECRET|TOKEN|PASSWORD|PRIVATE_KEY/.test(key) && value.length >= 8)
  .map(([, value]) => value);
for (const [input, output] of [[child.stdout, process.stdout], [child.stderr, process.stderr]]) {
  let pending = '';
  const write = line => {
    let safe = line.replace(/\x1b\[[0-9;]*m/g, '');
    for (const value of secretValues) safe = safe.replaceAll(value, '[redacted]');
    safe = safe.replace(/(\b[A-Z0-9_]*(?:SECRET|TOKEN|PASSWORD|PRIVATE_KEY)[A-Z0-9_]*\s*:\s*)"[^"\n]*"/g, '$1"[redacted]"');
    output.write(safe);
  };
  input.on('data', chunk => {
    pending += chunk.toString();
    let end;
    while ((end = pending.indexOf('\n')) !== -1) {
      write(pending.slice(0, end + 1));
      pending = pending.slice(end + 1);
    }
  });
  input.on('end', () => { if (pending) write(pending); });
}

child.on('close', (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }
  process.exit(code ?? 1);
});
