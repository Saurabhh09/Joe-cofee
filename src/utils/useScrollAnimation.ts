import { useState, useEffect } from 'react';
import type { RefObject } from 'react';

export function useScrollProgress(ref: RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      if (!ref.current || typeof window === 'undefined') return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || 800;

      // Calculate progress from when top of element enters bottom of viewport to when bottom of element leaves top
      const totalDistance = windowHeight + (rect.height || 0);
      if (totalDistance <= 0 || !Number.isFinite(totalDistance)) {
        setProgress(0);
        ticking = false;
        return;
      }

      const currentDistance = windowHeight - rect.top;
      const quotient = currentDistance / totalDistance;
      const rawProgress = Number.isFinite(quotient) ? Math.max(0, Math.min(1, quotient)) : 0;

      setProgress(rawProgress);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    updateScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [ref]);

  return Number.isFinite(progress) ? progress : 0;
}

export function interpolate(progress: number, input: [number, number], output: [number, number]): number {
  if (!Number.isFinite(progress)) return output[0];
  const [inMin, inMax] = input;
  const [outMin, outMax] = output;
  if (inMax === inMin) return outMin;
  if (progress <= inMin) return outMin;
  if (progress >= inMax) return outMax;
  const ratio = (progress - inMin) / (inMax - inMin);
  const result = outMin + ratio * (outMax - outMin);
  return Number.isFinite(result) ? result : output[0];
}
