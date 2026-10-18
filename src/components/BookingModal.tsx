import React, { useState } from 'react';
import { X, Calendar, Users, CheckCircle2, Clock } from 'lucide-react';
import { BookingFormData } from '../types/cafe';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPackageId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialPackageId = 'private'
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    phone: '',
    eventType: initialPackageId === 'catering' ? 'catering' : initialPackageId === 'custom_menus' ? 'workshop' : 'private',
    eventDate: '',
    guestCount: 20,
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 flex items-center justify-center animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="relative bg-[#FAF7F2] rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#E8DED1] z-10">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#7A6F68] hover:text-[#24140E] rounded-full hover:bg-[#EAE0D3]/50 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <CheckCircle2 className="w-16 h-16 text-[#5E8C43] mx-auto mb-4 animate-in zoom-in" />
            <h3 className="text-2xl font-bold text-[#24140E]">Inquiry Received!</h3>
            <p className="mt-3 text-sm text-[#5C4A3E] leading-relaxed">
              Thank you, {formData.fullName}. Our events coordinator will review your requested date ({formData.eventDate || 'Upcoming'}) and respond within 2 hours with available time slots and custom tasting options.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-8 bg-[#24140E] text-[#FAF7F2] px-8 py-3 rounded-full text-sm font-medium hover:bg-[#3D241A] transition-colors cursor-pointer"
            >
              Back to Joe&apos;s
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs uppercase tracking-widest text-[#C7824D] font-bold">
                Host It at Joe&apos;s
              </span>
              <h2 className="text-2xl font-bold text-[#24140E] mt-1">Book an Event or Catering</h2>
              <p className="mt-1 text-xs text-[#5C4A3E]">
                Fill out the details below and our team will prepare a custom proposal.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#24140E] mb-1">Event Type</label>
                <select
                  value={formData.eventType}
                  onChange={(e) => setFormData({ ...formData, eventType: e.target.value as any })}
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-white border border-[#E8DED1] focus:outline-hidden focus:border-[#24140E]"
                >
                  <option value="private">Private Evening Buyout (up to 45 guests)</option>
                  <option value="catering">Office Catering &amp; Pastry Delivery</option>
                  <option value="workshop">Custom Roasting / Coffee Tasting</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#24140E] mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-white border border-[#E8DED1] focus:outline-hidden focus:border-[#24140E]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#24140E] mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-white border border-[#E8DED1] focus:outline-hidden focus:border-[#24140E]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#24140E] mb-1">Preferred Date</label>
                  <input
                    type="date"
                    required
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-white border border-[#E8DED1] focus:outline-hidden focus:border-[#24140E]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#24140E] mb-1">Estimated Guests</label>
                  <input
                    type="number"
                    min="5"
                    max="150"
                    value={formData.guestCount}
                    onChange={(e) => setFormData({ ...formData, guestCount: parseInt(e.target.value) || 10 })}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-white border border-[#E8DED1] focus:outline-hidden focus:border-[#24140E]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#24140E] mb-1">Special Notes or Dietary Preferences</label>
                <textarea
                  rows={3}
                  placeholder="e.g. Oat milk preferences, gluten-free pastry requests, or setup timing"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-white border border-[#E8DED1] focus:outline-hidden focus:border-[#24140E]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#24140E] text-[#FAF7F2] hover:bg-[#3D241A] py-3.5 rounded-full font-medium text-sm transition-colors shadow-xs hover:shadow-md cursor-pointer"
                >
                  Submit Event Request
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
