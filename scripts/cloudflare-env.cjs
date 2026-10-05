const fs = require('node:fs');
const path = require('node:path');

// Load deployment values before Next can fill missing variables from .env.local.
const file = path.join(__dirname, '..', '.env.cf.prodution');
if (fs.existsSync(file)) {
  const existing = { ...process.env };
  process.loadEnvFile(file);
  // The deployment template contains "..." for unused integrations.
  // These placeholders must not override configured values or become URLs.
  for (const [key, value] of Object.entries(process.env)) {
    if (value !== '...') continue;
    if (existing[key] === undefined) delete process.env[key];
    else process.env[key] = existing[key];
  }
}
