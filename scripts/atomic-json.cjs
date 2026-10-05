const fs = require('node:fs/promises');
const { randomUUID } = require('node:crypto');
const { setTimeout: delay } = require('node:timers/promises');

const transientErrors = new Set(['EACCES', 'EBUSY', 'EPERM', 'UNKNOWN']);

async function writeJson(file, value) {
  const temporary = `${file}.${randomUUID()}.tmp`;
  const contents = JSON.stringify(value, null, 2) + '\n';
  try {
    for (let attempt = 0; ; attempt++) {
      try {
        await fs.writeFile(temporary, contents);
        await fs.rename(temporary, file);
        return;
      } catch (error) {
        if (!transientErrors.has(error.code) || attempt === 5) throw error;
        await delay(Math.min(100 * 2 ** attempt, 1000));
      }
    }
  } finally {
    // Only remove our temporary file; a failed replacement leaves the original intact.
    await fs.unlink(temporary).catch(() => {});
  }
}

module.exports = { writeJson };
