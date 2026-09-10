import { useEffect, useRef } from 'react';
import type LocomotiveScroll from 'locomotive-scroll';

export default function useLocomotiveScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let locomotiveScroll: LocomotiveScroll | null = null;

    const initializeLocomotiveScroll = async () => {
      try {
        const LocomotiveScrollModule = (await import('locomotive-scroll')).default;
        
        // In v5, `el` is deprecated. Locomotive Scroll automatically
        // detects the scroll container via the `data-scroll-container` attribute.
        // Make sure the component using this hook adds that attribute to its root element.
        locomotiveScroll = new LocomotiveScrollModule({
          smooth: true,
        } as any);
      } catch (error) {
        console.error('Error initializing Locomotive Scroll:', error);
      }
    };

    initializeLocomotiveScroll();

    return () => {
      if (locomotiveScroll) {
        locomotiveScroll.destroy();
      }
    };
  }, []);

  return scrollRef;
}