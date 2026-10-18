import React, { useRef, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface HeroSectionProps {
  onOrderNow: () => void;
  onOurStory: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOrderNow, onOurStory }) => {
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Opening entrance reveal - quick, clean, and permanently opaque
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      if (headlineRef.current) {
        tl.fromTo(
          headlineRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.9 }
        );
      }

      if (textRef.current) {
        tl.fromTo(
          textRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.6'
        );
      }

      if (buttonsRef.current) {
        tl.fromTo(
          buttonsRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.5'
        );
      }

      // Parallax scroll: ONLY gentle vertical movement, NEVER drop opacity.
      // Text remains 100% visible and fully legible at all scroll positions.
      if (heroRef.current && headlineRef.current && textRef.current && buttonsRef.current) {
        gsap.to([headlineRef.current, textRef.current, buttonsRef.current], {
          y: -30,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true
          }
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative pt-32 pb-12 sm:pt-40 sm:pb-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Main Display Headline: Joe's Coffee - Always 100% opaque and crisp */}
        <h1
          ref={headlineRef}
          className="font-script font-bold text-6xl sm:text-8xl md:text-9xl text-[#24140E] tracking-tight leading-none drop-shadow-xs will-change-transform opacity-100"
        >
          Joe&apos;s Coffee
        </h1>

        {/* Editorial Subtext - Always high-contrast and readable */}
        <p
          ref={textRef}
          className="mt-6 sm:mt-8 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-[#4A372C] font-normal leading-relaxed text-balance will-change-transform opacity-100"
        >
          Handcrafted espresso drinks and freshly baked pastries in a warm, welcoming atmosphere.
          From our first roast to your morning cup, every sip tells a story.
        </p>

        {/* Action Buttons */}
        <div
          ref={buttonsRef}
          className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4 will-change-transform opacity-100"
        >
          <button
            onClick={onOrderNow}
            className="bg-[#24140E] text-[#FAF7F2] hover:bg-[#3D241A] px-7 py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
          >
            Order Now
          </button>
          <button
            onClick={onOurStory}
            className="border border-[#24140E]/50 text-[#24140E] hover:border-[#24140E] hover:bg-[#24140E]/5 px-7 py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-200 cursor-pointer"
          >
            Our Story
          </button>
        </div>

        {/* Subtle Scroll Hint Indicator */}
        <div className="mt-14 sm:mt-16 flex justify-center">
          <button
            onClick={() => {
              const el = document.getElementById('showcase');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            aria-label="Scroll to Café Showcase"
            className="text-[#7A6F68] hover:text-[#24140E] transition-colors p-2 rounded-full cursor-pointer animate-bounce"
          >
            <ArrowDown className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
