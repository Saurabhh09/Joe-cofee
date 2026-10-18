import React, { useRef, useEffect } from 'react';
import { Instagram } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);
  const wordmarkRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (wordmarkRef.current && footerRef.current) {
        gsap.fromTo(
          wordmarkRef.current,
          {
            scale: 0.94,
            opacity: 0.6,
            y: 40
          },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: footerRef.current,
              start: 'top bottom',
              end: 'bottom bottom',
              scrub: 1
            }
          }
        );
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="bg-[#24140E] text-[#FAF7F2] pt-20 pb-12 overflow-hidden border-t border-[#3D241A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subtle Brand Tagline */}
        <div className="text-center text-xs tracking-widest uppercase text-[#D9C5B2]/60 font-semibold mb-6">
          Established 2018 &bull; Artisanal Espresso &amp; Bakehouse
        </div>

        {/* Massive Handwritten Joe's Coffee Brand Title (exact match for keyframe 00:10) */}
        <div className="text-center py-6 sm:py-10 select-none overflow-hidden">
          <span
            ref={wordmarkRef}
            className="inline-block font-script font-bold text-7xl sm:text-9xl md:text-[13rem] tracking-tight leading-none text-[#FAF7F2] drop-shadow-md will-change-transform"
          >
            Joe&apos;s Coffee
          </span>
        </div>

        {/* Footer Meta Row */}
        <div className="mt-12 pt-8 border-t border-[#3D241A] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D9C5B2]/70">
          <div>
            &copy; {new Date().getFullYear()} Joe&apos;s Coffee. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#FAF7F2] transition-colors"
            >
              <Instagram className="w-4 h-4" />
              <span>Follow our story on Instagram</span>
            </a>
            <span className="text-[#3D241A]">&bull;</span>
            <a href="#showcase" className="hover:text-[#FAF7F2] transition-colors">
              Privacy &amp; Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
