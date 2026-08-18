"use client";

import { useEffect } from 'react';
import Lenis from 'lenis';
import { LanguageProvider } from '../context/LanguageContext';

function SmoothScroll() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
      });

      let animationFrameId: number;
      function raf(time: number) {
        lenis.raf(time);
        animationFrameId = requestAnimationFrame(raf);
      }

      animationFrameId = requestAnimationFrame(raf);

      return () => {
        cancelAnimationFrame(animationFrameId);
        lenis.destroy();
      };
    } catch {
      // smooth scroll optional fallback
    }
  }, []);

  return null;
}

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <SmoothScroll />
      {children}
    </LanguageProvider>
  );
}

