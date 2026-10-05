// Centralized image and media data for LandingPage1 - LandingPage4
// Paths are normalized for usage in TSX components (use directly in <Image src=...> or <img src=...>)

export type LandingMedia = {
  images: string[];
  video?: string;
  poster?: string;
};

export const LandingPage1: LandingMedia = {
  images: [
    // Dashboard / hero
    'https://assets.kedi.media/images/625d20fb4b3283bf7951-590.webp',
    // People / team image
    'https://assets.kedi.media/images/834cce399d3bcff5a9cd-414.webp',
  ],
  video:
    'https://video.monamedia.net/list/themona/smil:1730862717-f91e8203730bb6fd35eb509aef4dd4dbfc39a4e0-672ade7d19507-website.smil/playlist.m3u8',
};

export const LandingPage2: LandingMedia = {
  images: ['/assets/img-banner.avif'],
  video:
    'https://video.monamedia.net/list/themona/smil:1730862717-f91e8203730bb6fd35eb509aef4dd4dbfc39a4e0-672ade7d19507-website.smil/playlist.m3u8',
  poster: '/assets/img-banner.avif',
};

export const LandingPage3: LandingMedia = {
  images: [
    'https://assets.kedi.media/images/877e566d10f2c724c874-740.webp',
    '/assets/img-banner.avif',
    '/assets/image/card-1.avif',
  ],
};

export const LandingPage4: LandingMedia = {
  images: [
    '/assets/img-banner.avif',
    'https://assets.kedi.media/images/7ef60d1cf7ab1974cd52-935.webp',
    '/assets/image/card-1.avif',
  ],
};

export const LandingPage5: LandingMedia = {
  images: [
    '/assets/image/card-1.avif',
    '/assets/image-Photoroom.png',
    '/assets/img-banner.avif',
    '/assets/me.jpg',
    'https://assets.kedi.media/images/7ef60d1cf7ab1974cd52-935.webp',
    'https://assets.kedi.media/images/7ef60d1cf7ab1974cd52-935.webp',
  ],
};

const landingData = {
  LandingPage1,
  LandingPage2,
  LandingPage3,
  LandingPage4,
  LandingPage5,
};

export default landingData;
