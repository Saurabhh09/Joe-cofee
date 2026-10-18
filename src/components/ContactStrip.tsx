import React, { useState, useRef, useEffect } from 'react';
import { Mail, Calendar, Phone, Check } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ContactStripProps {
  onOpenBooking: () => void;
}

export const ContactStrip: React.FC<ContactStripProps> = ({ onOpenBooking }) => {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const containerRef = useRef<HTMLElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (boxRef.current && containerRef.current) {
        gsap.fromTo(
          boxRef.current,
          { opacity: 0, y: 30, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <section ref={containerRef} id="contact" className="py-16 sm:py-20 bg-[#FAF7F2] border-t border-[#E8DED1]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={boxRef}
          className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-[#F4EFEA] p-8 sm:p-12 rounded-3xl border border-[#E8DED1] will-change-transform shadow-xs"
        >
          {/* Left Text */}
          <div className="text-center lg:text-left">
            <span className="text-xs uppercase tracking-widest text-[#7A6F68] font-bold">
              Personalized Consultation
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#24140E] mt-1 tracking-tight">
              SPEAK WITH ONE OF OUR EXPERTS
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#5C4A3E] max-w-md">
              Need personalized guidance on cup quantities, espresso bar timing, or customized menu selections? We respond within 2 hours.
            </p>
          </div>

          {/* Center Contact Buttons / Icons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* Email */}
            <button
              onClick={() => handleCopy('events@joescoffee.com', 'email')}
              className="flex items-center gap-2.5 px-4 py-3 bg-[#FAF7F2] hover:bg-[#FFFFFF] rounded-2xl border border-[#E0D5C7] text-xs font-semibold text-[#24140E] shadow-2xs hover:shadow-xs transition-all cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full bg-[#EAE0D3] flex items-center justify-center text-[#24140E]">
                {copiedType === 'email' ? <Check className="w-4 h-4 text-[#5E8C43]" /> : <Mail className="w-4 h-4" />}
              </div>
              <div className="text-left">
                <div className="text-[10px] text-[#7A6F68]">Email</div>
                <div>{copiedType === 'email' ? 'Copied!' : 'events@joescoffee.com'}</div>
              </div>
            </button>

            {/* Book Tour */}
            <button
              onClick={onOpenBooking}
              className="flex items-center gap-2.5 px-4 py-3 bg-[#FAF7F2] hover:bg-[#FFFFFF] rounded-2xl border border-[#E0D5C7] text-xs font-semibold text-[#24140E] shadow-2xs hover:shadow-xs transition-all cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full bg-[#EAE0D3] flex items-center justify-center text-[#24140E]">
                <Calendar className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-[10px] text-[#7A6F68]">Tour</div>
                <div>Book a Walkthrough</div>
              </div>
            </button>

            {/* Phone */}
            <button
              onClick={() => handleCopy('(555) 234-5678', 'phone')}
              className="flex items-center gap-2.5 px-4 py-3 bg-[#FAF7F2] hover:bg-[#FFFFFF] rounded-2xl border border-[#E0D5C7] text-xs font-semibold text-[#24140E] shadow-2xs hover:shadow-xs transition-all cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full bg-[#EAE0D3] flex items-center justify-center text-[#24140E]">
                {copiedType === 'phone' ? <Check className="w-4 h-4 text-[#5E8C43]" /> : <Phone className="w-4 h-4" />}
              </div>
              <div className="text-left">
                <div className="text-[10px] text-[#7A6F68]">Direct</div>
                <div>{copiedType === 'phone' ? 'Copied!' : '(555) 234-5678'}</div>
              </div>
            </button>
          </div>

          {/* Right Action */}
          <button
            onClick={onOpenBooking}
            className="bg-[#24140E] text-[#FAF7F2] hover:bg-[#3D241A] px-7 py-3 rounded-full text-sm font-medium transition-colors shadow-xs hover:shadow-md cursor-pointer whitespace-nowrap shrink-0"
          >
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};
