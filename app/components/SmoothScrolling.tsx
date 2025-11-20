'use client';

import { ReactLenis } from 'lenis/react';
import { ReactNode } from 'react';

interface SmoothScrollingProps {
  children: ReactNode;
}

export default function SmoothScrolling({ children }: SmoothScrollingProps) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1, // Linear interpolation intensity (0-1), lower = smoother but slower
        duration: 1.2, // Animation duration in seconds
        smoothWheel: true, // Enable smooth scrolling for mouse wheel
        wheelMultiplier: 1, // Mouse wheel sensitivity
        touchMultiplier: 2, // Touch scroll sensitivity
        infinite: false, // Disable infinite scroll
        autoResize: true, // Auto-resize on window resize
      }}
    >
      {children}
    </ReactLenis>
  );
}
