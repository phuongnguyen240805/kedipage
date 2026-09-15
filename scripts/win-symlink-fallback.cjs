/**
 * Loaded via NODE_OPTIONS=--require so child `next build` inherits it.
 * Next.js standalone output recreates pnpm symlinks; Windows without
 * Developer Mode throws EPERM. Fall back to junction (dirs) or copy.
 */
if (global.__KEDI_SYMLINK_FALLBACK__) {
  return;
}
global.__KEDI_SYMLINK_FALLBACK__ = true;

if (process.platform !== 'win32') {
  return;
}

const fs = require('fs');
const path = require('path');

function resolveTarget(target, dest) {
  return path.isAbsolute(target) ? target : path.resolve(path.dirname(dest), target);
}

function copyFallbackSync(target, dest) {
  const absTarget = resolveTarget(target, dest);
  const stat = fs.statSync(absTarget);
  if (stat.isDirectory()) {
    fs.cpSync(absTarget, dest, { recursive: true, force: true });
    return;
  }
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(absTarget, dest);
}

async function copyFallback(target, dest) {
  const absTarget = resolveTarget(target, dest);
  const stat = await fs.promises.stat(absTarget);
  if (stat.isDirectory()) {
    await fs.promises.cp(absTarget, dest, { recursive: true, force: true });
    return;
  }
  await fs.promises.mkdir(path.dirname(dest), { recursive: true });
  await fs.promises.copyFile(absTarget, dest);
}

function isFallbackError(err) {
  return (
    err &&
    (err.code === 'EPERM' || err.code === 'EINVAL' || err.code === 'ENOTSUP')
  );
}

const origPromiseSymlink = fs.promises.symlink.bind(fs.promises);
fs.promises.symlink = async function symlink(target, dest, type) {
  try {
    return await origPromiseSymlink(target, dest, type);
  } catch (err) {
    if (!isFallbackError(err)) throw err;
    try {
      const absTarget = resolveTarget(target, dest);
      const stat = await fs.promises.stat(absTarget);
      if (stat.isDirectory()) {
        try {
          return await origPromiseSymlink(target, dest, 'junction');
        } catch {
          await copyFallback(target, dest);
          return;
        }
      }
      await copyFallback(target, dest);
      return;
    } catch {
      throw err;
    }
  }
};

const origSymlinkSync = fs.symlinkSync.bind(fs);
fs.symlinkSync = function symlinkSync(target, dest, type) {
  try {
    return origSymlinkSync(target, dest, type);
  } catch (err) {
    if (!isFallbackError(err)) throw err;
    try {
      const absTarget = resolveTarget(target, dest);
      const stat = fs.statSync(absTarget);
      if (stat.isDirectory()) {
        try {
          return origSymlinkSync(target, dest, 'junction');
        } catch {
          copyFallbackSync(target, dest);
          return;
        }
      }
      copyFallbackSync(target, dest);
      return;
    } catch {
      throw err;
    }
  }
};
