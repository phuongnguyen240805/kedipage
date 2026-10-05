const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const path = require('node:path');
const { test, beforeEach, afterEach } = require('node:test');
const { createHash } = require('node:crypto');
const ts = require('typescript');
const { NextRequest } = require('next/server');

// Exercise the real route handlers without adding a test framework dependency.
function loadSource(relativePath, mocks = {}) {
  const filename = path.resolve(__dirname, '..', relativePath);
  const { outputText } = ts.transpileModule(readFileSync(filename, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
    fileName: filename,
  });
  const exported = {};
  new Function('require', 'exports', outputText)(name => {
    if (name === 'server-only') return {};
    return Object.hasOwn(mocks, name) ? mocks[name] : require(name);
  }, exported);
  return exported;
}

const originalFetch = global.fetch;
const envKeys = ['NODE_ENV', 'SSO_LADIPAGE_AUTHORIZE_URL', 'SSO_KEDIPAGE_REDIRECT_URI', 'SSO_BACKEND_API_URL', 'SSO_KEDIPAGE_CLIENT_SECRET'];
const originalEnv = Object.fromEntries(envKeys.map(key => [key, process.env[key]]));
const callbackUrl = 'https://kedi.media/api/auth/sso/callback';
let server;
let start;
let callback;
let sessionRoute;
let fetchCalls;

beforeEach(() => {
  process.env.NODE_ENV = 'production';
  process.env.SSO_LADIPAGE_AUTHORIZE_URL = 'https://ladipage.example/api/auth/sso/authorize';
  process.env.SSO_KEDIPAGE_REDIRECT_URI = callbackUrl;
  process.env.SSO_BACKEND_API_URL = 'https://backend.example/api';
  process.env.SSO_KEDIPAGE_CLIENT_SECRET = 's'.repeat(48);
  server = loadSource('lib/sso/server.ts');
  const mocks = { '@/lib/sso/server': server };
  start = loadSource('app/api/auth/sso/start/route.ts', mocks).GET;
  callback = loadSource('app/api/auth/sso/callback/route.ts', mocks).GET;
  sessionRoute = loadSource('app/api/auth/sso/session/route.ts', mocks).GET;
  fetchCalls = [];
  global.fetch = async (...args) => {
    if (args[1]?.method === 'HEAD') return new Response(null, { status: 303 });
    fetchCalls.push(args);
    return new Response(JSON.stringify({
      user: { id: 7, username: 'minh', nickname: 'Minh', avatar: '/avatar.png', roles: ['admin'] },
      token: 'must-not-reach-browser',
      sessionToken: 't'.repeat(43), expiresIn: 86400,
    }), { status: 200 });
  };
});

afterEach(() => {
  global.fetch = originalFetch;
  for (const key of envKeys) {
    if (originalEnv[key] === undefined) delete process.env[key];
    else process.env[key] = originalEnv[key];
  }
});

async function begin() {
  const response = await start(new NextRequest('https://kedi.media/api/auth/sso/start'));
  assert.equal(response.status, 303);
  const authorization = new URL(response.headers.get('location'));
  const transaction = response.cookies.get(server.SSO_TRANSACTION_COOKIE);
  const state = authorization.searchParams.get('state');
  const verifier = server.readSsoVerifier(transaction.value, state);
  return { response, authorization, transaction, state, verifier };
}

test('unavailable authorization keeps guests on Kedi without credentials or redirect loops', async () => {
  for (const mode of ['500', '404', 'network']) {
    global.fetch = async (url, options) => {
      assert.equal(new URL(url).origin, 'https://ladipage.example');
      assert.equal(options.method, 'HEAD');
      assert.equal(options.redirect, 'manual');
      assert.equal(options.headers, undefined);
      if (mode === 'network') throw new Error('offline');
      return new Response(null, { status: Number(mode) });
    };
    const response = await start(new NextRequest('https://kedi.media/api/auth/sso/start?returnTo=%2Fdu-an%3Ffilter%3Dweb%23item'));
    assert.equal(response.status, 303);
    assert.equal(response.headers.get('location'), 'https://kedi.media/du-an?filter=web&sso=unavailable#item');
    assert.equal(response.cookies.get(server.SSO_TRANSACTION_COOKIE), undefined);
  }
});

function callbackRequest(transaction, state, extra = { code: 'c'.repeat(43) }) {
  const url = new URL(callbackUrl);
  url.search = new URLSearchParams({ state, ...extra }).toString();
  return new NextRequest(url, { headers: { cookie: `${server.SSO_TRANSACTION_COOKIE}=${transaction.value}` } });
}

test('start creates unpredictable state/PKCE and a secure host-only transaction cookie', async () => {
  const first = await begin();
  const second = await begin();
  assert.notEqual(first.state, second.state);
  assert.notEqual(first.verifier, second.verifier);
  assert.equal(first.authorization.searchParams.get('code_challenge'), createHash('sha256').update(first.verifier).digest('base64url'));
  assert.equal(first.authorization.searchParams.get('code_challenge_method'), 'S256');
  assert.equal(first.authorization.searchParams.get('redirect_uri'), callbackUrl);
  assert.equal(first.authorization.searchParams.get('client_id'), 'kedipage');
  assert.equal(first.authorization.href.includes(first.verifier), false);
  assert.equal(first.authorization.href.includes(process.env.SSO_KEDIPAGE_CLIENT_SECRET), false);
  assert.equal(first.transaction.httpOnly, true);
  assert.equal(first.transaction.secure, true);
  assert.equal(first.transaction.sameSite, 'lax');
  assert.equal(first.transaction.domain, undefined);
  assert.equal(first.transaction.maxAge, 300);
  assert.equal(first.response.headers.get('cache-control'), 'no-store');
});

test('callback exchanges on the server, stores an HttpOnly session, and returns to the page', async () => {
  const flow = await begin();
  const response = await callback(callbackRequest(flow.transaction, flow.state));
  assert.equal(response.status, 303);
  assert.equal(response.headers.get('location'), 'https://kedi.media/');
  assert.equal(response.cookies.get(server.SSO_SESSION_COOKIE).value, 't'.repeat(43));
  assert.equal(response.cookies.get(server.SSO_SESSION_COOKIE).httpOnly, true);
  assert.equal(response.cookies.get(server.SSO_SESSION_COOKIE).secure, true);
  assert.equal(response.cookies.get(server.SSO_TRANSACTION_COOKIE).maxAge, 0);
  assert.equal(response.headers.get('referrer-policy'), 'no-referrer');
  assert.equal(fetchCalls.length, 1);
  const [url, options] = fetchCalls[0];
  assert.equal(url, 'https://backend.example/api/sso/exchange');
  assert.deepEqual(JSON.parse(options.body), {
    clientId: 'kedipage', redirectUri: callbackUrl, code: 'c'.repeat(43), codeVerifier: flow.verifier,
  });
  assert.equal(options.headers['x-sso-client-secret'], process.env.SSO_KEDIPAGE_CLIENT_SECRET);
  assert.equal(options.cache, 'no-store');
  assert.equal(options.redirect, 'manual');
});

test('callback rejects missing, wrong, expired, and malformed transactions before calling backend', async () => {
  const flow = await begin();
  const expired = JSON.parse(Buffer.from(flow.transaction.value, 'base64url').toString('utf8'));
  expired.createdAt = Date.now() - 301_000;
  const inputs = [
    new NextRequest(`${callbackUrl}?state=${flow.state}&code=${'c'.repeat(43)}`),
    callbackRequest(flow.transaction, 'x'.repeat(43)),
    callbackRequest({ value: 'invalid-cookie' }, flow.state),
    callbackRequest({ value: Buffer.from(JSON.stringify(expired)).toString('base64url') }, flow.state),
  ];
  for (const input of inputs) {
    const response = await callback(input);
    assert.equal(response.status, 400);
    assert.deepEqual(await response.json(), { error: 'invalid_state' });
  }
  assert.equal(fetchCalls.length, 0);
});

test('callback rejects duplicate state/code and malformed codes', async () => {
  const flow = await begin();
  for (const suffix of [`&state=${flow.state}`, `&code=${'d'.repeat(43)}`]) {
    const input = callbackRequest(flow.transaction, flow.state);
    const response = await callback(new NextRequest(input.url + suffix, { headers: input.headers }));
    assert.equal(response.status, 400);
  }
  assert.equal((await callback(callbackRequest(flow.transaction, flow.state, { code: 'bad' }))).status, 400);
  assert.equal(fetchCalls.length, 0);
});

test('login_required terminates once without a login redirect or backend exchange', async () => {
  const flow = await begin();
  const response = await callback(callbackRequest(flow.transaction, flow.state, { error: 'login_required' }));
  assert.equal(response.status, 303);
  assert.equal(response.headers.get('location'), 'https://kedi.media/?sso=guest');
  assert.equal(fetchCalls.length, 0);
});

test('callback rejects a mixed code/error response', async () => {
  const flow = await begin();
  const response = await callback(callbackRequest(flow.transaction, flow.state, { error: 'login_required', code: 'c'.repeat(43) }));
  assert.equal(response.status, 400);
  assert.equal(fetchCalls.length, 0);
});

test('network failure and replay rejection expose no secret and are not retried', async () => {
  const flow = await begin();
  for (const mode of ['network', 'replay']) {
    let attempts = 0;
    global.fetch = async () => {
      attempts += 1;
      if (mode === 'network') throw new Error(process.env.SSO_KEDIPAGE_CLIENT_SECRET);
      return new Response('invalid code', { status: 400 });
    };
    const response = await callback(callbackRequest(flow.transaction, flow.state));
    assert.equal(response.status, 303);
    assert.equal(response.headers.get('location'), 'https://kedi.media/?sso=unavailable');
    assert.equal(attempts, 1);
  }
});

test('start and callback reject alternate origins', async () => {
  assert.equal((await start(new NextRequest('https://www.kedi.media/api/auth/sso/start'))).status, 400);
  assert.equal((await callback(new NextRequest('https://attacker.example/api/auth/sso/callback'))).status, 400);
  assert.equal(fetchCalls.length, 0);
});

test('SSO fails closed for missing secret, insecure URLs, and unexpected callback paths', async () => {
  for (const [key, value] of [
    ['SSO_KEDIPAGE_CLIENT_SECRET', ''],
    ['SSO_LADIPAGE_AUTHORIZE_URL', 'http://ladipage.example/api/auth/sso/authorize'],
    ['SSO_KEDIPAGE_REDIRECT_URI', 'https://kedi.media/redirect'],
    ['SSO_BACKEND_API_URL', 'https://user:password@backend.example/api'],
  ]) {
    const previous = process.env[key];
    process.env[key] = value;
    assert.equal((await start(new NextRequest('https://kedi.media/api/auth/sso/start'))).status, 503);
    process.env[key] = previous;
  }
});

test('callback rejects malformed identity responses from backend', async () => {
  const flow = await begin();
  global.fetch = async () => new Response(JSON.stringify({ user: { id: 7 } }), { status: 200 });
  assert.equal((await callback(callbackRequest(flow.transaction, flow.state))).headers.get('location'), 'https://kedi.media/?sso=unavailable');
});

test('session endpoint exposes current identity and links, never credentials', async () => {
  const response = await sessionRoute(new NextRequest('https://kedi.media/api/auth/sso/session', {
    headers: { cookie: `${server.SSO_SESSION_COOKIE}=${'t'.repeat(43)}` },
  }));
  assert.deepEqual(await response.json(), {
    user: { id: 7, username: 'minh', nickname: 'Minh', avatar: '/avatar.png' },
    enabled: true, ladipageUrl: 'https://ladipage.example/', profileUrl: 'https://ladipage.example/profile',
  });
  assert.equal(fetchCalls[0][0], 'https://backend.example/api/sso/session');
});

test('revoked session clears the cookie; outages keep the cookie but hide identity', async () => {
  const input = new NextRequest('https://kedi.media/api/auth/sso/session', {
    headers: { cookie: `${server.SSO_SESSION_COOKIE}=${'t'.repeat(43)}` },
  });
  global.fetch = async () => new Response('', { status: 401 });
  const revoked = await sessionRoute(input);
  assert.equal((await revoked.json()).user, null);
  assert.equal(revoked.cookies.get(server.SSO_SESSION_COOKIE).maxAge, 0);
  global.fetch = async () => { throw new Error('offline'); };
  const outage = await sessionRoute(input);
  assert.equal(outage.status, 503);
  assert.equal((await outage.json()).user, null);
  assert.equal(outage.cookies.get(server.SSO_SESSION_COOKIE), undefined);
});

test('return path preserves local navigation and rejects external redirects or API loops', () => {
  assert.equal(server.safeReturnPath('/du-an?filter=web#item'), '/du-an?filter=web#item');
  for (const path of ['//attacker.example', '/\\attacker.example', 'https://attacker.example', '/api/auth/sso/start', '/\nattacker']) {
    assert.equal(server.safeReturnPath(path), '/');
  }
});

test('transaction accepts a long local return path within the browser cookie budget', () => {
  const returnTo = '/du-an?search=' + 'a'.repeat(1900);
  const transaction = server.createSsoTransaction(returnTo);
  assert.ok(transaction.cookie.length < 4096);
  assert.equal(server.readSsoTransaction(transaction.cookie, transaction.state).returnTo, returnTo);
  assert.equal(server.safeReturnPath('/' + 'ế'.repeat(1000)), '/');
});

test('login notification accepts only the embedded bridge and its registered origin', () => {
  const notification = loadSource('lib/sso/login-notification.ts');
  const bridge = {};
  const url = 'https://ladipage.example/';
  const event = { origin: 'https://ladipage.example', source: bridge, data: { type: 'ladipage:login-complete', loginId: '12345678-1234-1234-1234-123456789abc' } };
  assert.equal(notification.acceptLadipageLogin({ ...event, origin: 'https://attacker.example' }, url, bridge), false);
  assert.equal(notification.acceptLadipageLogin({ ...event, source: {} }, url, bridge), false);
  assert.equal(notification.acceptLadipageLogin({ ...event, data: { type: 'unknown' } }, url, bridge), false);
  assert.equal(notification.acceptLadipageLogin({ ...event, data: { ...event.data, loginId: 'invalid' } }, url, bridge), false);
  assert.equal(notification.acceptLadipageLogin(event, undefined, bridge), false);
  assert.equal(notification.acceptLadipageLogin(event, url, null), false);
  assert.equal(notification.acceptLadipageLogin(event, url, bridge), true);
});

test('guest Kedi handles login, rejects duplicate signals and reconnects after reload', async () => {
  const notification = loadSource('lib/sso/login-notification.ts');
  const originalWindow = global.window;
  const originalDocument = global.document;
  let cleanup;
  let frame;
  let frameCount = 0;
  const listeners = new Map();
  const redirects = [];
  global.window = {
    location: { href: 'https://kedi.media/?sso=guest', pathname: '/', search: '', hash: '', replace: path => redirects.push(path) },
    history: { replaceState() {} },
    setInterval: () => 1, clearInterval() {},
    addEventListener: (type, fn) => listeners.set(type, fn), removeEventListener: type => listeners.delete(type),
  };
  global.document = {
    createElement: () => { frameCount++; frame = { contentWindow: {}, remove() { this.removed = true; } }; return frame; },
    body: { appendChild() {} }, addEventListener() {}, removeEventListener() {}, visibilityState: 'visible',
  };
  global.fetch = async () => new Response(JSON.stringify({ enabled: true, user: null, ladipageUrl: 'https://ladipage.example/' }));
  const hook = loadSource('hooks/use-kedi-account.ts', {
    '@/lib/sso/login-notification': notification,
    react: { useState: () => [{}, () => {}], useRef: () => ({ current: false }), useEffect: effect => { cleanup = effect(); } },
  });
  const settle = () => new Promise(resolve => setImmediate(resolve));
  try {
    hook.useKediAccount();
    await settle();
    assert.equal(frame.src, 'https://ladipage.example/api/auth/sso/login-sync');
    assert.equal(redirects.length, 0);
    // Returning from an independent, cross-site Ladipage tab must retry SSO
    // even when the initial authorization already ended as a guest.
    listeners.get('focus')();
    await settle();
    assert.deepEqual(redirects, ['/api/auth/sso/start?returnTo=%2F']);
    redirects.length = 0;
    const signal = { origin: 'https://ladipage.example', source: frame.contentWindow, data: { type: 'ladipage:login-complete', loginId: '12345678-1234-1234-1234-123456789abc' } };
    listeners.get('message')(signal);
    listeners.get('message')(signal);
    assert.deepEqual(redirects, ['/api/auth/sso/start?returnTo=%2F']);
    cleanup();
    assert.equal(frame.removed, true);
    hook.useKediAccount();
    await settle();
    assert.equal(frameCount, 2);
    listeners.get('message')({ ...signal, source: frame.contentWindow, data: { ...signal.data, loginId: '87654321-1234-1234-1234-123456789abc' } });
    assert.equal(redirects.length, 2);
  } finally {
    cleanup?.();
    if (originalWindow === undefined) delete global.window; else global.window = originalWindow;
    if (originalDocument === undefined) delete global.document; else global.document = originalDocument;
  }
});
