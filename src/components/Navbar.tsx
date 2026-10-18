import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOrderNow: () => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOrderNow,
  onOpenBooking
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F2]/90 backdrop-blur-md shadow-xs py-3 border-b border-[#E8DED1]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single element Brand wordmark */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-2xl sm:text-3xl font-script font-bold text-[#24140E] tracking-tight hover:opacity-85 transition-opacity whitespace-nowrap shrink-0"
          >
            Joe&apos;s Coffee
          </a>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#5C4A3E]">
            <button
              onClick={() => scrollToSection('showcase')}
              className="hover:text-[#24140E] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              About Joe&apos;s
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="hover:text-[#24140E] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Our Menu
            </button>
            <button
              onClick={() => scrollToSection('events')}
              className="hover:text-[#24140E] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Host It at Joe&apos;s
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="hover:text-[#24140E] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Zone 3: Primary Action & Cart Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOrderNow}
              className="bg-[#24140E] text-[#FAF7F2] hover:bg-[#3D241A] text-xs sm:text-sm font-medium px-4 py-2 sm:px-5 sm:py-2.5 rounded-full transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer whitespace-nowrap shrink-0"
            >
              Order Now
            </button>

            <button
              onClick={onOpenCart}
              aria-label={`View Shopping Bag with ${cartCount} items`}
              className="relative p-2.5 text-[#24140E] hover:bg-[#EAE0D3]/60 rounded-full transition-colors cursor-pointer shrink-0"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#C7824D] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#FAF7F2]">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-[#24140E] hover:bg-[#EAE0D3]/60 rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 bg-[#FAF7F2] rounded-2xl border border-[#E8DED1] shadow-lg animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col gap-3 text-base font-medium text-[#402B1F]">
              <button
                onClick={() => scrollToSection('showcase')}
                className="text-left py-2 px-3 rounded-lg hover:bg-[#F2EAE0] transition-colors"
              >
                About Joe&apos;s
              </button>
              <button
                onClick={() => scrollToSection('menu')}
                className="text-left py-2 px-3 rounded-lg hover:bg-[#F2EAE0] transition-colors"
              >
                Our Menu
              </button>
              <button
                onClick={() => scrollToSection('events')}
                className="text-left py-2 px-3 rounded-lg hover:bg-[#F2EAE0] transition-colors"
              >
                Host It at Joe&apos;s
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left py-2 px-3 rounded-lg hover:bg-[#F2EAE0] transition-colors"
              >
                Contact
              </button>
              <hr className="border-[#E8DED1] my-1" />
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full text-center bg-[#C7824D] text-white py-2.5 rounded-full font-medium"
              >
                Book Event Space
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
