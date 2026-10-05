'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Globe2, MapPin, MessageCircleMore, PhoneCall } from 'lucide-react';
import { contactInfo } from '@/components/footer/dataFooter';
import ConsultationForm from './ConsultationForm';
import { GlassSurface } from '@/components/liquid-glass/GlassSurface';
import styles from './home-contact.module.css';

type MapView = 'terrain' | 'satellite';

const mapQuery = encodeURIComponent(contactInfo.address);

const zaloHref = `https://zalo.me/${contactInfo.phone}`;

export default function HomeContactSection() {
  const [mapView, setMapView] = useState<MapView>('terrain');
  const mapType = mapView === 'satellite' ? 'k' : 'p';
  const mapSrc = `https://maps.google.com/maps?q=${mapQuery}&z=16&t=${mapType}&output=embed`;
  const nextMapView: MapView = mapView === 'terrain' ? 'satellite' : 'terrain';
  const nextMapLabel = nextMapView === 'satellite' ? 'Vệ tinh' : 'Địa hình';

  return (
    <section id="tu-van" className={styles.section} aria-label="Liên hệ và yêu cầu tư vấn KEDI">
      <div className={styles.map}>
        <iframe
          title="Bản đồ văn phòng KEDI"
          src={mapSrc}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        <button
          type="button"
          className={`${styles.mapTypeToggle} ${
            nextMapView === 'satellite'
              ? styles.mapTypeToggleSatellite
              : styles.mapTypeToggleTerrain
          }`}
          onClick={() => setMapView(nextMapView)}
          aria-label={`Chuyển sang bản đồ ${nextMapLabel.toLowerCase()}`}
          title={`Chuyển sang ${nextMapLabel}`}
        >
          <span className={styles.mapTypePreview} aria-hidden="true">
            <span className={styles.mapTypeRoad} />
            <span className={styles.mapTypeRiver} />
          </span>
          <span className={styles.mapTypeLabel}>{nextMapLabel}</span>
        </button>
      </div>

      <div className={styles.container}>
        <GlassSurface tone="dark" className={styles.card}>
          <div className={styles.backgroundDecor} aria-hidden="true">
            <span className={styles.decorOrbOne} />
            <span className={styles.decorOrbTwo} />
            <span className={styles.decorGrid} />
          </div>

          <div className={styles.cardInner}>
            <div className={styles.content}>
              <div className={styles.contentWrap}>
                <header className={`${styles.header} ${styles.blockSpacing}`}>
                  <h2 className={styles.title}>
                    Bạn cần một Chuyên gia Account đồng hành và cùng bạn phát triển Kinh doanh
                    <span className={styles.titleAccent} aria-hidden="true" />
                  </h2>
                  <p className={styles.description}>
                    Liên hệ ngay tới <strong>KEDI</strong> và chúng tôi sẽ kết nối bạn với chuyên gia phù hợp nhất cho bài toán kinh doanh của doanh nghiệp.
                  </p>
                </header>

                <div className={`${styles.quickActions} ${styles.blockSpacing}`}>
                  <a
                    className={styles.quickAction}
                    href={zaloHref}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Nhắn tin KEDI qua Zalo"
                  >
                    <span className={`${styles.actionIcon} ${styles.zaloIcon}`}>
                      <MessageCircleMore aria-hidden="true" />
                    </span>
                    <span>
                      <span className={styles.actionLabel}>Nhắn tin qua</span>
                      <span className={styles.actionName}>Zalo KEDI</span>
                    </span>
                  </a>

                  <a className={styles.quickAction} href={`tel:${contactInfo.phone}`}>
                    <span className={`${styles.actionIcon} ${styles.phoneIcon}`}>
                      <PhoneCall aria-hidden="true" />
                    </span>
                    <span>
                      <span className={styles.actionLabel}>Gọi ngay Hotline</span>
                      <span className={styles.actionName}>{contactInfo.phone}</span>
                    </span>
                  </a>

                  <a
                    className={styles.quickAction}
                    href={contactInfo.websiteUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className={`${styles.actionIcon} ${styles.webIcon}`}>
                      <Globe2 aria-hidden="true" />
                    </span>
                    <span>
                      <span className={styles.actionLabel}>Website chính thức</span>
                      <span className={styles.actionName}>{contactInfo.website}</span>
                    </span>
                  </a>
                </div>

                <div className={`${styles.addressList} ${styles.blockSpacing}`}>
                  <a
                    className={styles.addressItem}
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      contactInfo.address
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className={styles.addressIcon}>
                      <MapPin aria-hidden="true" />
                    </span>
                    <span className={styles.addressText}>{contactInfo.address}</span>
                  </a>
                  <a
                    className={styles.addressItem}
                    href={contactInfo.websiteUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className={styles.addressIcon}>
                      <Globe2 aria-hidden="true" />
                    </span>
                    <span className={styles.addressText}>{contactInfo.website}</span>
                  </a>
                </div>
              </div>

              <div className={styles.mascotStage} aria-hidden="true">
                <div className={styles.mascotHalo} />
                <Image

                  src="https://assets.kedi.media/images/876ae45bf4e69d827499-1254.webp"
                  alt=""
                  width={800}
                  height={800}
                  className={styles.mascot}
                />
                <span className={`${styles.pixel} ${styles.pixelOne}`} />
                <span className={`${styles.pixel} ${styles.pixelTwo}`} />
                <span className={`${styles.pixel} ${styles.pixelThree}`} />
                <span className={`${styles.pixel} ${styles.pixelFour}`} />
              </div>
            </div>

            <div className={styles.formColumn}>
              <GlassSurface tone="light" material="surface" className={styles.formCard}>
                <ConsultationForm />
              </GlassSurface>
            </div>
          </div>
        </GlassSurface>
      </div>
    </section>
  );
}
