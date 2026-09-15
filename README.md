# KEDI Full - Huong Dan Chay Du An

## 1. Yeu cau moi truong

- Node.js `>= 18.17` (khuyen nghi Node `20.x`)
- npm `>= 9`

Kiem tra nhanh:

```bash
node -v
npm -v
```

## 2. Cai dat

Tai thu muc goc du an:

```bash
npm install
```

## 3. Cau hinh bien moi truong

Tao file `.env.local` trong thu muc goc (`d:\DATN\kedi_full`) va khai bao cac bien can thiet.

Mau:

```env
# Public (client + server)
NEXT_PUBLIC_WS_URL=
NEXT_PUBLIC_STRAPI_API=
NEXT_PUBLIC_MEILISEARCH_HOST=
NEXT_PUBLIC_MEILISEARCH_SEARCH_KEY=
NEXT_PUBLIC_API_URL=
NEXT_PUBLIC_CF_IMAGES_BASE=
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=

# Server only
SITE_KEY=
COPY_SECRET_KEY=
RESEND_KEY=
IPINFO_TOKEN=
RECAPTCHA_SECRET_KEY=
RESEND_API_KEY=
REVALIDATE_TOKEN=
```

Luu y:

- Cac route API nhu gui mail, revalidate, captcha se can bien server dung gia tri.
- Neu thieu bien moi truong, mot so tinh nang co the khong hoat dong hoac bi loi runtime.

## 4. Chay local (development)

```bash
npm run dev
```

Mac dinh app chay tai `http://localhost:3000`.

## 5. Build va chay production local

Build:

```bash
npm run build
```

Chay ban build:

```bash
npm run start
```

## 6. Lint

```bash
npm run lint
```

## 7. Cloudflare/OpenNext (tuy chon)

Build output cho Cloudflare:

```bash
npm run build:cf
```

Preview worker local:

```bash
npm run preview
```

Deploy len Cloudflare:

```bash
npm run deploy
```

Sinh type cho Cloudflare env:

```bash
npm run cf-typegen
```

## 8. Script san co

- `npm run dev`: chay development server
- `npm run build`: build Next.js
- `npm run start`: chay production server tren `0.0.0.0:3000`
- `npm run lint`: kiem tra lint
- `npm run build:cf`: build voi OpenNext Cloudflare
- `npm run preview`: build Cloudflare va chay `wrangler dev`
- `npm run deploy`: deploy worker bang Wrangler
- `npm run cf-typegen`: tao type `CloudflareEnv`
