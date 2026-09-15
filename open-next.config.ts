// default open-next.config.ts file created by @opennextjs/cloudflare
// @ts-ignore
import { defineCloudflareConfig } from '@opennextjs/cloudflare';

export default defineCloudflareConfig({
  // Dummy incremental cache (no R2). Enable r2IncrementalCache when an R2
  // bucket + NEXT_INC_CACHE_R2_BUCKET binding are added to wrangler.toml.
});
