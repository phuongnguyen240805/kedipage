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
    'https://mona.media/template/assets/images/tkw-never-stop/banner-tkw-social-1920.webp',
    // People / team image
    'https://mona.media/template/assets/images/tkw-never-stop/acino-ahy-400-up.webp',
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
    'https://mona.media/template/assets/hq-images/tkw-never-stop/feature4-800.webp',
    '/assets/img-banner.avif',
    '/assets/image/card-1.avif',
  ],
};

export const LandingPage4: LandingMedia = {
  images: [
    '/assets/img-banner.avif',
    'https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765183827/thumbnail-huong-dan-cach-lam-seo_qrq4me.png?variant=landing-portfolio-1',
    '/assets/image/card-1.avif',
  ],
};

export const LandingPage5: LandingMedia = {
  images: [
    '/assets/image/card-1.avif',
    '/assets/image-Photoroom.png',
    '/assets/img-banner.avif',
    '/assets/me.jpg',
    'https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765183827/thumbnail-huong-dan-cach-lam-seo_qrq4me.png',
    'https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765183827/thumbnail-huong-dan-cach-lam-seo_qrq4me.png',
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
