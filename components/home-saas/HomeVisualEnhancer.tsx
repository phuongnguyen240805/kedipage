'use client';

export default function HomeVisualEnhancer() {
  return (
    <style jsx global>{`
      .kedi-home-visual-v2 > section:nth-of-type(1) {
        background-image:
          linear-gradient(90deg, rgba(11,45,91,.96) 0%, rgba(11,45,91,.82) 48%, rgba(11,45,91,.34) 100%),
          url('https://assets.kedi.media/images/28937f7d4b8e1f993f9c-1920.webp');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }

      .kedi-home-visual-v2 > section:nth-of-type(1)::after {
        content: '';
        position: absolute;
        right: -2vw;
        bottom: -3rem;
        width: min(44vw, 720px);
        height: min(68vw, 820px);
        background: url('https://assets.kedi.media/images/524ce34f65d03d10768c-1600.webp') right bottom / contain no-repeat;
        filter: drop-shadow(0 34px 52px rgba(0,0,0,.34));
        opacity: .98;
        pointer-events: none;
        z-index: 1;
      }

      .kedi-home-visual-v2 > section:nth-of-type(1) > div:last-child {
        position: relative;
        z-index: 2;
      }

      .kedi-home-visual-v2 > section:nth-of-type(3) {
        background-image:
          linear-gradient(rgba(7,31,63,.9), rgba(7,31,63,.94)),
          url('https://assets.kedi.media/images/4c69c1a2932f5a8c5449-1920.webp');
        background-size: cover;
        background-position: center;
        background-attachment: scroll;
      }

      .kedi-home-visual-v2 > section:nth-of-type(5) a {
        background-repeat: no-repeat;
        background-size: 36% auto;
        background-position: right center;
      }
      .kedi-home-visual-v2 > section:nth-of-type(5) > div > div:last-child > div:nth-child(1) a {
        background-image: linear-gradient(90deg, #fff 0%, #fff 60%, rgba(255,255,255,.72) 76%, rgba(255,255,255,.12) 100%), url('https://assets.kedi.media/images/583f363007a95e502662-1448.webp');
      }
      .kedi-home-visual-v2 > section:nth-of-type(5) > div > div:last-child > div:nth-child(2) a {
        background-image: linear-gradient(90deg, #fff 0%, #fff 60%, rgba(255,255,255,.72) 76%, rgba(255,255,255,.12) 100%), url('https://assets.kedi.media/images/82fe2a27a26cc48ab155-1448.webp');
      }
      .kedi-home-visual-v2 > section:nth-of-type(5) > div > div:last-child > div:nth-child(3) a {
        background-image: linear-gradient(90deg, #fff 0%, #fff 60%, rgba(255,255,255,.72) 76%, rgba(255,255,255,.12) 100%), url('https://assets.kedi.media/images/4301f60bf7fef0e0cae8-1448.webp');
      }
      .kedi-home-visual-v2 > section:nth-of-type(5) > div > div:last-child > div:nth-child(4) a {
        background-image: linear-gradient(90deg, #fff 0%, #fff 60%, rgba(255,255,255,.72) 76%, rgba(255,255,255,.12) 100%), url('https://assets.kedi.media/images/4c69c1a2932f5a8c5449-1920.webp');
      }
      .kedi-home-visual-v2 > section:nth-of-type(5) > div > div:last-child > div:nth-child(5) a {
        background-image: linear-gradient(90deg, #fff 0%, #fff 60%, rgba(255,255,255,.72) 76%, rgba(255,255,255,.12) 100%), url('https://assets.kedi.media/images/37e721bb4017414f112f-1448.webp');
      }

      .kedi-home-visual-v2 > section:nth-of-type(6) .mt-12.grid > div:nth-child(1) a {
        background-image: linear-gradient(180deg, rgba(11,45,91,.22), rgba(11,45,91,.96) 76%), url('https://assets.kedi.media/images/709e4117d58f9edb1a5b-1448.webp');
      }
      .kedi-home-visual-v2 > section:nth-of-type(6) .mt-12.grid > div:nth-child(2) a {
        background-image: linear-gradient(180deg, rgba(11,45,91,.22), rgba(11,45,91,.96) 76%), url('https://assets.kedi.media/images/08e9762391ed3a41ea6e-1448.webp');
      }
      .kedi-home-visual-v2 > section:nth-of-type(6) .mt-12.grid > div:nth-child(3) a {
        background-image: linear-gradient(180deg, rgba(11,45,91,.22), rgba(11,45,91,.96) 76%), url('https://assets.kedi.media/images/37e721bb4017414f112f-1448.webp');
      }
      .kedi-home-visual-v2 > section:nth-of-type(6) .mt-12.grid a {
        background-size: cover;
        background-position: center;
      }

      .kedi-home-visual-v2 > section:nth-of-type(7) .mt-12.grid > a:nth-child(1) {
        background-image: linear-gradient(180deg, rgba(247,248,250,.22), #f7f8fa 78%), url('https://assets.kedi.media/images/82fe2a27a26cc48ab155-1448.webp');
      }
      .kedi-home-visual-v2 > section:nth-of-type(7) .mt-12.grid > a:nth-child(2) {
        background-image: linear-gradient(180deg, rgba(247,248,250,.22), #f7f8fa 78%), url('https://assets.kedi.media/images/4301f60bf7fef0e0cae8-1448.webp');
      }
      .kedi-home-visual-v2 > section:nth-of-type(7) .mt-12.grid > a:nth-child(3) {
        background-image: linear-gradient(180deg, rgba(247,248,250,.22), #f7f8fa 78%), url('https://assets.kedi.media/images/583f363007a95e502662-1448.webp');
      }
      .kedi-home-visual-v2 > section:nth-of-type(7) .mt-12.grid > a {
        background-size: 100% auto;
        background-position: center top;
        background-repeat: no-repeat;
      }

      .kedi-home-visual-v2 > section:nth-of-type(8) > div {
        position: relative;
        isolation: isolate;
        background-image:
          linear-gradient(90deg, rgba(255,198,41,.96), rgba(255,198,41,.76)),
          url('https://assets.kedi.media/images/24e9a625554f17a43e5e-1920.webp');
        background-size: cover;
        background-position: center;
      }

      .kedi-home-visual-v2 > section:nth-of-type(8) > div::after {
        content: '';
        position: absolute;
        right: 1.5rem;
        bottom: -2.25rem;
        width: min(30vw, 360px);
        height: 290px;
        background: url('https://assets.kedi.media/images/524ce34f65d03d10768c-1600.webp') right bottom / contain no-repeat;
        opacity: .32;
        pointer-events: none;
        z-index: -1;
      }

      @media (max-width: 1023px) {
        .kedi-home-visual-v2 > section:nth-of-type(1)::after {
          right: -12vw;
          bottom: -1rem;
          width: 68vw;
          height: 72vw;
          opacity: .28;
        }
        .kedi-home-visual-v2 > section:nth-of-type(5) a {
          background-image: none !important;
        }
        .kedi-home-visual-v2 > section:nth-of-type(8) > div::after {
          opacity: .16;
        }
      }
    `}</style>
  );
}
