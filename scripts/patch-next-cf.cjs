/**
 * Next 14 loads middleware-manifest.json via `require(this.middlewareManifestPath)`.
 * Wrangler/esbuild cannot bundle that dynamic require, so the Worker 500s with:
 *   Dynamic require of "/.next/server/middleware-manifest.json" is not supported
 *
 * This app has no Next middleware; OpenNext serves its own middleware handler.
 * Replace the dynamic require with the empty manifest Next already generated.
 */
const fs = require('fs');
const path = require('path');

const EMPTY_MANIFEST = `{version:3,sortedMiddleware:[],middleware:{},functions:{}}`;

const SOURCE_PATTERN =
  /getMiddlewareManifest\(\)\s*\{\s*if\s*\(this\.minimalMode\)\s*return null;\s*const manifest = require\(this\.middlewareManifestPath\);\s*return manifest;\s*\}/;
const SOURCE_REPLACEMENT = `getMiddlewareManifest() {
        if (this.minimalMode) return null;
        return ${EMPTY_MANIFEST};
    }`;

const BUNDLE_PATTERN =
  /getMiddlewareManifest\(\)\{return this\.minimalMode\?null:require\(this\.middlewareManifestPath\)\}/;
const BUNDLE_REPLACEMENT = `getMiddlewareManifest(){return this.minimalMode?null:${EMPTY_MANIFEST}}`;

function patchFile(filePath, pattern, replacement) {
  if (!fs.existsSync(filePath)) return false;
  const original = fs.readFileSync(filePath, 'utf8');
  if (!pattern.test(original)) {
    return original.includes('sortedMiddleware:[]') || original.includes('sortedMiddleware: []');
  }
  fs.writeFileSync(filePath, original.replace(pattern, replacement));
  return true;
}

function resolveNextServer() {
  try {
    return require.resolve('next/dist/server/next-server.js', {
      paths: [process.cwd()],
    });
  } catch {
    return null;
  }
}

const nextServer = resolveNextServer();
if (nextServer) {
  const ok = patchFile(nextServer, SOURCE_PATTERN, SOURCE_REPLACEMENT);
  if (!ok) {
    console.warn(
      '[patch-next-cf] next-server.js getMiddlewareManifest pattern not found; skip'
    );
  }
}

const handlerPath = path.join(
  process.cwd(),
  '.open-next/server-functions/default/handler.mjs'
);
if (fs.existsSync(handlerPath)) {
  patchFile(handlerPath, BUNDLE_PATTERN, BUNDLE_REPLACEMENT);
}
