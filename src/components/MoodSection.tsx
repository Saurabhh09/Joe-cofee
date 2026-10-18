import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrinkIllustration } from './VisualAssets';

gsap.registerPlugin(ScrollTrigger);

interface MoodSectionProps {
  onSeeMenu: () => void;
  onAboutUs: () => void;
}

export const MoodSection: React.FC<MoodSectionProps> = ({ onSeeMenu, onAboutUs }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardLeftRef = useRef<HTMLDivElement>(null);
  const cardCenterRef = useRef<HTMLDivElement>(null);
  const cardRightRef = useRef<HTMLDivElement>(null);
  const textGroupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax scrubs on the 3 floating photo cards
      if (cardLeftRef.current && sectionRef.current) {
        gsap.fromTo(
          cardLeftRef.current,
          { y: 35 },
          {
            y: -35,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.2
            }
          }
        );
      }

      if (cardCenterRef.current && sectionRef.current) {
        gsap.fromTo(
          cardCenterRef.current,
          { y: -20 },
          {
            y: 30,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1
            }
          }
        );
      }

      if (cardRightRef.current && sectionRef.current) {
        gsap.fromTo(
          cardRightRef.current,
          { y: 45 },
          {
            y: -40,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.4
            }
          }
        );
      }

      // Central headline and CTA reveal
      if (textGroupRef.current) {
        gsap.fromTo(
          textGroupRef.current,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: textGroupRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 sm:py-28 overflow-hidden bg-[#F4EFEA]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Floating Editorial Photo Cards Group (as shown in reference video keyframe 00:03) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 sm:mb-16">
          {/* Card 1: Fresh Butter Pastries */}
          <div
            ref={cardLeftRef}
            className="rounded-2xl overflow-hidden bg-[#FAF7F2] border border-[#E8DED1] shadow-xs hover:shadow-md transition-shadow group will-change-transform"
          >
            <div className="aspect-[4/3] w-full overflow-hidden bg-[#EFE8DE] flex items-center justify-center">
              <DrinkIllustration type="croissant" className="w-full h-full group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-4 sm:p-5">
              <span className="text-[11px] font-semibold tracking-wider uppercase text-[#C7824D]">
                Fresh Daily &bull; 6:00 AM
              </span>
              <h3 className="text-lg font-bold text-[#24140E] mt-0.5">Golden Pastries</h3>
              <p className="text-xs text-[#7A6F68] mt-1">
                Flaky Normandy butter croissants &amp; wild blueberry scones baked every morning.
              </p>
            </div>
          </div>

          {/* Card 2: Handcrafted Latte Art */}
          <div
            ref={cardCenterRef}
            className="rounded-2xl overflow-hidden bg-[#FAF7F2] border border-[#E8DED1] shadow-xs hover:shadow-md transition-shadow group will-change-transform"
          >
            <div className="aspect-[4/3] w-full overflow-hidden bg-[#EFE8DE] flex items-center justify-center">
              <DrinkIllustration type="latte" className="w-full h-full group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-4 sm:p-5">
              <span className="text-[11px] font-semibold tracking-wider uppercase text-[#C7824D]">
                Specialty Roast
              </span>
              <h3 className="text-lg font-bold text-[#24140E] mt-0.5">Velvety Lattes</h3>
              <p className="text-xs text-[#7A6F68] mt-1">
                Micro-textured organic milk poured with precision rosetta craft.
              </p>
            </div>
          </div>

          {/* Card 3: Slow Steeped Cold Brew */}
          <div
            ref={cardRightRef}
            className="rounded-2xl overflow-hidden bg-[#FAF7F2] border border-[#E8DED1] shadow-xs hover:shadow-md transition-shadow group will-change-transform"
          >
            <div className="aspect-[4/3] w-full overflow-hidden bg-[#EFE8DE] flex items-center justify-center">
              <DrinkIllustration type="cold_brew" className="w-full h-full group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-4 sm:p-5">
              <span className="text-[11px] font-semibold tracking-wider uppercase text-[#C7824D]">
                Single Origin &bull; 18h
              </span>
              <h3 className="text-lg font-bold text-[#24140E] mt-0.5">Slow Cold Brew</h3>
              <p className="text-xs text-[#7A6F68] mt-1">
                Naturally sweet, full-bodied immersion brew over clear crystal ice.
              </p>
            </div>
          </div>
        </div>

        {/* Central Headline & Dual Call-to-Action Buttons */}
        <div ref={textGroupRef} className="text-center max-w-2xl mx-auto will-change-transform">
          <h2 className="text-3xl sm:text-5xl font-bold text-[#24140E] tracking-tight leading-tight text-balance">
            What are you in the mood for?
          </h2>
          <p className="mt-4 text-base text-[#5C4A3E]">
            Whether you crave a sharp morning espresso or a leisurely iced matcha with friends, we craft each order with care.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onSeeMenu}
              className="bg-[#24140E] text-[#FAF7F2] hover:bg-[#3D241A] px-7 py-3 rounded-full text-sm font-medium transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer"
            >
              See Our Menu
            </button>
            <button
              onClick={onAboutUs}
              className="border border-[#24140E]/40 text-[#24140E] hover:border-[#24140E] hover:bg-[#24140E]/5 px-7 py-3 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer"
            >
              About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
