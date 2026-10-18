import React, { useRef, useEffect } from 'react';
import { Users, Coffee, Sparkles, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EVENT_PACKAGES } from '../data/cafeData';

gsap.registerPlugin(ScrollTrigger);

interface EventsSectionProps {
  onOpenBooking: (packageId?: string) => void;
}

export const EventsSection: React.FC<EventsSectionProps> = ({ onOpenBooking }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          }
        );
      }

      if (bannerRef.current) {
        gsap.fromTo(
          bannerRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: bannerRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <section ref={sectionRef} id="events" className="relative py-20 sm:py-28 bg-[#F4EFEA]/80 border-t border-[#EAE0D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading matching reference */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-[#7A6F68] font-semibold">
            Gather &amp; Celebrate
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#24140E] mt-2 tracking-tight">
            Host It at Joe&apos;s
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#5C4A3E] text-balance">
            From intimate gatherings to private events, bringing the warmth of Joe&apos;s to your occasion.
          </p>
        </div>

        {/* 2-Column Primary Event Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Card 1: Private Events */}
          <div className="group rounded-3xl bg-[#FAF7F2] border border-[#E8DED1] overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
            {/* Ambient Illustration of café gathering */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#EAE0D3] border-b border-[#E8DED1]">
              <svg viewBox="0 0 600 375" className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" fill="none">
                {/* Background Wall & Warm Amber Room */}
                <rect width="600" height="375" fill="#EADCC9" />
                <rect x="0" y="0" width="600" height="40" fill="#D3C3AD" />
                {/* String lights / Pendant Glow */}
                <ellipse cx="180" cy="80" rx="90" ry="60" fill="#FFC978" opacity="0.3" />
                <ellipse cx="420" cy="80" rx="90" ry="60" fill="#FFC978" opacity="0.3" />
                <line x1="180" y1="0" x2="180" y2="70" stroke="#8A5A36" strokeWidth="2" />
                <circle cx="180" cy="72" r="10" fill="#FFDC96" />
                <line x1="420" y1="0" x2="420" y2="70" stroke="#8A5A36" strokeWidth="2" />
                <circle cx="420" cy="72" r="10" fill="#FFDC96" />
                {/* Wooden Community Table */}
                <rect x="80" y="220" width="440" height="30" rx="4" fill="#C57D3E" />
                <rect x="110" y="250" width="20" height="120" fill="#884C1C" />
                <rect x="470" y="250" width="20" height="120" fill="#884C1C" />
                {/* Cups and Vases on table */}
                <rect x="220" y="195" width="22" height="25" rx="3" fill="#FFF" />
                <rect x="340" y="195" width="22" height="25" rx="3" fill="#FFF" />
                <rect x="280" y="180" width="16" height="40" rx="4" fill="#4B776A" />
                {/* Silhouettes / Stylized Guests Conversing */}
                <circle cx="160" cy="165" r="28" fill="#6A4630" />
                <path d="M120 230c0-30 20-40 40-40s40 10 40 40z" fill="#3D241A" />
                <circle cx="430" cy="165" r="28" fill="#8C5C3F" />
                <path d="M390 230c0-30 20-40 40-40s40 10 40 40z" fill="#523223" />
                <circle cx="295" cy="150" r="24" fill="#A87754" />
                <path d="M265 210c0-25 15-35 30-35s30 10 30 35z" fill="#66412B" />
              </svg>
              <div className="absolute top-4 left-4 bg-[#FAF7F2]/95 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-semibold text-[#24140E] flex items-center gap-1.5 border border-[#E8DED1]">
                <Users className="w-3.5 h-3.5 text-[#C7824D]" />
                <span>Up to 45 guests</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-[#24140E]">Private Events</h3>
                <p className="mt-2 text-sm text-[#5C4A3E] leading-relaxed">
                  Book our space for birthdays, workshops, or team get-togethers. Includes dedicated baristas, full drink menu, and customized setup.
                </p>
                <ul className="mt-4 space-y-2 text-xs sm:text-sm text-[#5C4A3E]">
                  {EVENT_PACKAGES[0].features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C7824D]" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E8DED1]">
                <button
                  onClick={() => onOpenBooking('private')}
                  className="w-full bg-[#24140E] text-[#FAF7F2] hover:bg-[#3D241A] py-3 rounded-full text-sm font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Inquire for Private Events</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Catering & Drop-offs */}
          <div className="group rounded-3xl bg-[#FAF7F2] border border-[#E8DED1] overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
            {/* Ambient Illustration of catering spread */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#EAE0D3] border-b border-[#E8DED1]">
              <svg viewBox="0 0 600 375" className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" fill="none">
                <rect width="600" height="375" fill="#E6D7C3" />
                {/* Kraft paper runner */}
                <rect x="40" y="60" width="520" height="255" rx="8" fill="#D8C5AE" />
                {/* Sleek Coffee Dispenser Box / Carafe */}
                <rect x="70" y="90" width="130" height="180" rx="8" fill="#402B1F" />
                <rect x="80" y="100" width="110" height="150" rx="4" fill="#2E1C12" />
                <circle cx="135" cy="175" r="30" fill="#C7824D" opacity="0.3" />
                <path d="M125 175h20M135 165v20" stroke="#FFF" strokeWidth="2" />
                {/* Spigot */}
                <rect x="125" y="245" width="20" height="18" fill="#A89F91" />
                {/* Wooden Pastry Platter with mini baked goods */}
                <rect x="230" y="110" width="300" height="150" rx="10" fill="#BA7A3F" stroke="#9E5F28" strokeWidth="3" />
                {/* Rows of mini pastries */}
                <ellipse cx="280" cy="150" rx="26" ry="14" fill="#DE943F" />
                <ellipse cx="340" cy="150" rx="26" ry="14" fill="#D38833" />
                <ellipse cx="400" cy="150" rx="26" ry="14" fill="#DE943F" />
                <ellipse cx="460" cy="150" rx="24" ry="13" fill="#C97B28" />
                <circle cx="280" cy="205" r="18" fill="#9C5221" />
                <circle cx="340" cy="205" r="18" fill="#B06A26" />
                <circle cx="400" cy="205" r="18" fill="#9C5221" />
                <circle cx="460" cy="205" r="18" fill="#B06A26" />
                {/* Stack of compostable cups */}
                <path d="M220 280l4 25h16l4-25z" fill="#FFF" stroke="#CCC" />
                <path d="M245 280l4 25h16l4-25z" fill="#FFF" stroke="#CCC" />
                <path d="M270 280l4 25h16l4-25z" fill="#FFF" stroke="#CCC" />
              </svg>
              <div className="absolute top-4 left-4 bg-[#FAF7F2]/95 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-semibold text-[#24140E] flex items-center gap-1.5 border border-[#E8DED1]">
                <Coffee className="w-3.5 h-3.5 text-[#C7824D]" />
                <span>10 &ndash; 120 people</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-[#24140E]">Catering</h3>
                <p className="mt-2 text-sm text-[#5C4A3E] leading-relaxed">
                  Freshly brewed coffee carafes and artisan pastry platters delivered to your office or venue. Perfect for morning meetings and special celebrations.
                </p>
                <ul className="mt-4 space-y-2 text-xs sm:text-sm text-[#5C4A3E]">
                  {EVENT_PACKAGES[1].features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C7824D]" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E8DED1]">
                <button
                  onClick={() => onOpenBooking('catering')}
                  className="w-full bg-[#24140E] text-[#FAF7F2] hover:bg-[#3D241A] py-3 rounded-full text-sm font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Order Event Catering</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Custom Menus / Roasts banner (matching keyframe 00:08) */}
        <div ref={bannerRef} className="rounded-3xl bg-[#FAF7F2] border border-[#E8DED1] p-6 sm:p-10 shadow-xs flex flex-col lg:flex-row items-center justify-between gap-8 will-change-transform">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#C7824D] uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Bespoke Roasting &amp; Pairings</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#24140E]">Custom Menus</h3>
            <p className="mt-2 text-sm sm:text-base text-[#5C4A3E] leading-relaxed">
              Work directly with our head roaster and pastry chef to design a signature coffee blend or customized pastry pairing for your event. We will stamp custom bags with your mark.
            </p>
          </div>

          <button
            onClick={() => onOpenBooking('custom_menus')}
            className="bg-[#24140E] text-[#FAF7F2] hover:bg-[#3D241A] px-8 py-3.5 rounded-full text-sm sm:text-base font-medium transition-all shadow-xs hover:shadow-md cursor-pointer whitespace-nowrap shrink-0"
          >
            Book Space
          </button>
        </div>
      </div>
    </section>
  );
};
