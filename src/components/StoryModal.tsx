import React from 'react';
import { X, Heart, Award, Coffee } from 'lucide-react';

interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBrowseMenu: () => void;
}

export const StoryModal: React.FC<StoryModalProps> = ({ isOpen, onClose, onBrowseMenu }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 flex items-center justify-center animate-in fade-in duration-200">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="relative bg-[#FAF7F2] rounded-3xl max-w-xl w-full p-6 sm:p-10 shadow-2xl border border-[#E8DED1] z-10">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#7A6F68] hover:text-[#24140E] rounded-full hover:bg-[#EAE0D3]/50 transition-colors cursor-pointer"
          aria-label="Close story modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center">
          <span className="text-xs uppercase tracking-widest text-[#C7824D] font-bold">
            Since 2018
          </span>
          <h2 className="font-script font-bold text-5xl text-[#24140E] mt-1">
            The Story of Joe&apos;s
          </h2>
        </div>

        <div className="mt-6 space-y-4 text-xs sm:text-sm text-[#5C4A3E] leading-relaxed">
          <p>
            Joe&apos;s Coffee started with a single vintage 1974 La Marzocco espresso machine and a deep passion for the neighborhood morning ritual. We believed coffee should be warm, unpretentious, and meticulously extracted.
          </p>
          <p>
            Every single bean we pull is sourced directly from sustainable family-owned farms across Huila, Colombia and Yirgacheffe, Ethiopia. Roasted in small 12-kilogram batches every Tuesday, our beans rest just enough to develop sweet honeysuckle notes, caramel body, and balanced citrus acidity.
          </p>
          <p>
            Our bakery operates on a traditional 24-hour slow fermentation cycle. Cultured Normandy butter, unbleached stoneground wheat, and sea salt flakes come together every morning at 4:30 AM so you get warm, shatteringly crisp croissants straight from our ovens.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-3 text-center border-y border-[#E8DED1] py-4">
          <div>
            <div className="font-mono text-base font-bold text-[#24140E]">100%</div>
            <div className="text-[11px] text-[#7A6F68]">Direct Trade</div>
          </div>
          <div>
            <div className="font-mono text-base font-bold text-[#24140E]">72-Layer</div>
            <div className="text-[11px] text-[#7A6F68]">Butter Pastries</div>
          </div>
          <div>
            <div className="font-mono text-base font-bold text-[#24140E]">6:30 AM</div>
            <div className="text-[11px] text-[#7A6F68]">Daily First Roast</div>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <button
            onClick={() => {
              onClose();
              onBrowseMenu();
            }}
            className="bg-[#24140E] text-[#FAF7F2] hover:bg-[#3D241A] px-7 py-3 rounded-full text-xs sm:text-sm font-medium transition-colors cursor-pointer"
          >
            Explore What We Roast &amp; Bake
          </button>
        </div>
      </div>
    </div>
  );
};
