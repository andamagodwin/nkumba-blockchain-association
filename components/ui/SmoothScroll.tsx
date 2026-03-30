'use client';

import { ReactLenis } from 'lenis/react';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    
    // In case we want to sync GSAP and Lenis
    // ScrollTrigger.refresh();
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true, syncTouch: true }}>
      {children}
    </ReactLenis>
  );
}
