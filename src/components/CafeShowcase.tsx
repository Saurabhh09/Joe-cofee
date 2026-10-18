import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { StorefrontIllustration } from './VisualAssets';

gsap.registerPlugin(ScrollTrigger);

export const CafeShowcase: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header subtle reveal
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }

      // Storefront expansion scrubbed directly to scroll progress
      if (cardRef.current && containerRef.current) {
        gsap.fromTo(
          cardRef.current,
          {
            scale: 0.88,
            y: 45,
            opacity: 0.75,
            borderRadius: '2rem'
          },
          {
            scale: 1,
            y: 0,
            opacity: 1,
            borderRadius: '1.5rem',
            ease: 'power2.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 85%',
              end: 'center 45%',
              scrub: 1
            }
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="showcase" ref={containerRef} className="relative py-12 sm:py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="text-center mb-8 will-change-transform">
          <span className="text-xs uppercase tracking-widest text-[#7A6F68] font-semibold">
            Corner of Elm &amp; 4th
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#24140E] mt-1 tracking-tight">
            Our Neighborhood Sanctuary
          </h2>
        </div>

        {/* Scroll-driven Expanding Showcase Container via GSAP ScrollTrigger */}
        <div
          ref={cardRef}
          className="relative mx-auto rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-[#E2DAC9] bg-[#F4F0E8] will-change-transform"
        >
          {/* Café Storefront Facade & Counter Illustration */}
          <StorefrontIllustration className="w-full h-auto object-cover" />

          {/* Bottom Caption Bar */}
          <div className="bg-[#FAF7F2]/95 backdrop-blur-md px-6 py-4 border-t border-[#E8DED1] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#5C4A3E]">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#5E8C43]" />
              <span className="font-medium text-[#24140E]">Open Daily 6:30 AM &ndash; 7:00 PM</span>
              <span className="text-[#C4B7A6]">&bull;</span>
              <span>Barista Counter &amp; Garden Seating</span>
            </div>
            <div className="text-xs text-[#7A6F68]">
              Single-origin beans roasted weekly in Brooklyn
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
