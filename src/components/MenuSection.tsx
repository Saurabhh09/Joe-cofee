import React, { useState, useRef, useEffect } from 'react';
import { Plus, Check } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MENU_ITEMS } from '../data/cafeData';
import { MenuItem, MenuCategory } from '../types/cafe';
import { DrinkIllustration } from './VisualAssets';

gsap.registerPlugin(ScrollTrigger);

interface MenuSectionProps {
  onAddToCart: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onAddToCart }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('all');
  const [addedItemIds, setAddedItemIds] = useState<{ [id: string]: boolean }>({});

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (gridRef.current) {
        const cards = gridRef.current.children;
        gsap.fromTo(
          cards,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.05,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [activeCategory]);

  const filteredItems = activeCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === activeCategory);

  const handleAdd = (item: MenuItem) => {
    onAddToCart(item);
    setAddedItemIds(prev => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItemIds(prev => ({ ...prev, [item.id]: false }));
    }, 1500);
  };

  const categories: { label: string; value: MenuCategory }[] = [
    { label: 'All Drinks & Bites', value: 'all' },
    { label: 'Hot Drinks', value: 'hot' },
    { label: 'Cold Drinks', value: 'cold' },
    { label: 'Fresh Pastries', value: 'pastry' }
  ];

  return (
    <section ref={sectionRef} id="menu" className="relative py-20 sm:py-28 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-[#7A6F68] font-semibold">
            Handcrafted with Care
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#24140E] mt-2 tracking-tight">
            Our Menu
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5C4A3E]">
            Artisan espresso pulled from micro-lot beans, fresh organic milks, and daily bake-house treats.
          </p>

          {/* Category Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 p-1.5 bg-[#EFE8DE]/70 rounded-full w-fit mx-auto border border-[#E4DACD]">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.value
                    ? 'bg-[#24140E] text-[#FAF7F2] shadow-xs'
                    : 'text-[#5C4A3E] hover:text-[#24140E] hover:bg-[#EAE0D3]/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 4-Column Menu Card Grid matching the reference */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => {
            const isAdded = !!addedItemIds[item.id];
            return (
              <div
                key={item.id}
                className="group flex flex-col justify-between rounded-2xl bg-[#FFFFFF] border border-[#EAE2D7] overflow-hidden shadow-xs hover:shadow-md hover:border-[#D9CDBF] transition-all duration-300"
              >
                {/* Visual Art Area */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F4EFEA] border-b border-[#EFEAE2]">
                  <DrinkIllustration
                    type={item.imageKey}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {item.tags && item.tags.length > 0 && (
                    <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1">
                      {item.tags.slice(0, 1).map((tag) => (
                        <span
                          key={tag}
                          className="bg-[#FAF7F2]/90 backdrop-blur-xs text-[10px] font-semibold text-[#5C4A3E] px-2 py-0.5 rounded-md border border-[#E2DACD]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  {item.calories && (
                    <span className="absolute bottom-2 right-2 text-[10px] text-[#7A6F68] bg-[#FAF7F2]/80 px-1.5 py-0.5 rounded font-mono">
                      {item.calories}
                    </span>
                  )}
                </div>

                {/* Card Content Area */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-bold text-[#24140E] text-base group-hover:text-[#C7824D] transition-colors">
                        {item.name}
                      </h3>
                      <span className="font-mono text-sm font-semibold text-[#24140E] tabular-nums shrink-0">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>
                    <p className="mt-2 text-xs text-[#5C4A3E] leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Add to Order Button */}
                  <div className="mt-4 pt-3 border-t border-[#F4EFEA] flex items-center justify-between">
                    <span className="text-[11px] text-[#7A6F68] font-medium capitalize">
                      {item.category === 'pastry' ? 'Daily Bake' : `${item.category} drink`}
                    </span>
                    <button
                      onClick={() => handleAdd(item)}
                      aria-label={`Add ${item.name} to order`}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                        isAdded
                          ? 'bg-[#5E8C43] text-white shadow-xs'
                          : 'bg-[#F4EFEA] hover:bg-[#24140E] text-[#24140E] hover:text-[#FAF7F2]'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
