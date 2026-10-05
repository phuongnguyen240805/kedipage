const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const path = require('node:path');
const os = require('node:os');
const { writeJson } = require('./atomic-json.cjs');

async function fixture(t) {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'kedi-atomic-json-'));
  t.after(async () => {
    for (const name of await fs.readdir(dir)) await fs.unlink(path.join(dir, name));
    await fs.rmdir(dir);
  });
  const file = path.join(dir, 'manifest.json');
  await fs.writeFile(file, '{"original":true}\n');
  return { dir, file };
}

test('retries Windows write locks and replaces the complete JSON', async t => {
  const { dir, file } = await fixture(t);
  const write = fs.writeFile;
  let calls = 0;
  t.mock.method(fs, 'writeFile', async (...args) => {
    if (calls++ === 0) throw Object.assign(new Error('locked'), { code: 'UNKNOWN' });
    return write(...args);
  });
  await writeJson(file, { images: ['one', 'two'] });
  assert.deepEqual(JSON.parse(await fs.readFile(file, 'utf8')), { images: ['one', 'two'] });
  assert.deepEqual(await fs.readdir(dir), ['manifest.json']);
  assert.equal(calls, 2);
});

test('retries locked replacement without truncating the existing manifest', async t => {
  const { file } = await fixture(t);
  const rename = fs.rename;
  let calls = 0;
  t.mock.method(fs, 'rename', async (...args) => {
    assert.deepEqual(JSON.parse(await fs.readFile(file, 'utf8')), { original: true });
    if (calls++ === 0) throw Object.assign(new Error('busy'), { code: 'EPERM' });
    return rename(...args);
  });
  await writeJson(file, { updated: true });
  assert.deepEqual(JSON.parse(await fs.readFile(file, 'utf8')), { updated: true });
  assert.equal(calls, 2);
});

test('disk errors fail without retries and preserve the last valid manifest', async t => {
  const { dir, file } = await fixture(t);
  let calls = 0;
  t.mock.method(fs, 'writeFile', async () => {
    calls++;
    throw Object.assign(new Error('disk full'), { code: 'ENOSPC' });
  });
  await assert.rejects(writeJson(file, { updated: true }), { code: 'ENOSPC' });
  assert.equal(calls, 1);
  assert.deepEqual(JSON.parse(await fs.readFile(file, 'utf8')), { original: true });
  assert.deepEqual(await fs.readdir(dir), ['manifest.json']);
});
