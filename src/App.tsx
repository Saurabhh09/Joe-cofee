/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CafeShowcase } from './components/CafeShowcase';
import { MoodSection } from './components/MoodSection';
import { MenuSection } from './components/MenuSection';
import { EventsSection } from './components/EventsSection';
import { ContactStrip } from './components/ContactStrip';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { BookingModal } from './components/BookingModal';
import { StoryModal } from './components/StoryModal';
import { MenuItem } from './types/cafe';
import { CartItem, addItemToCart, updateItemQuantity } from './utils/cartLogic';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 'latte',
      name: 'Latte',
      price: 5.50,
      quantity: 1,
      category: 'hot'
    },
    {
      id: 'croissant',
      name: 'Butter Croissant',
      price: 4.50,
      quantity: 1,
      category: 'pastry'
    }
  ]);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingPackageId, setBookingPackageId] = useState<string | undefined>('private');
  const [isStoryOpen, setIsStoryOpen] = useState(false);

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToCart = (item: MenuItem) => {
    setCartItems(prev => addItemToCart(prev, {
      id: item.id,
      name: item.name,
      price: item.price,
      category: item.category
    }));
  };

  const handleUpdateQuantity = (id: string, qty: number, milk?: string) => {
    setCartItems(prev => updateItemQuantity(prev, id, qty, milk));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenBooking = (packageId?: string) => {
    setBookingPackageId(packageId || 'private');
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#24140E] selection:bg-[#EAE0D3] selection:text-[#24140E]">
      {/* Top Navigation Bar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOrderNow={scrollToMenu}
        onOpenBooking={() => handleOpenBooking('private')}
      />

      <main>
        {/* SECTION 01 — HERO / BRAND INTRODUCTION */}
        <HeroSection
          onOrderNow={scrollToMenu}
          onOurStory={() => setIsStoryOpen(true)}
        />

        {/* SECTION 02 — CAFÉ INTERIOR SHOWCASE (SCROLL EXPANSION) */}
        <CafeShowcase />

        {/* SECTION 03 — "WHAT ARE YOU IN THE MOOD FOR?" */}
        <MoodSection
          onSeeMenu={scrollToMenu}
          onAboutUs={() => setIsStoryOpen(true)}
        />

        {/* SECTION 04 & 05 — OUR MENU & MENU CONTINUATION */}
        <MenuSection onAddToCart={handleAddToCart} />

        {/* SECTION 06 — "HOST IT AT JOE'S" */}
        <EventsSection onOpenBooking={handleOpenBooking} />

        {/* SECTION 07 — CONTACT / SPEAK WITH ONE OF OUR EXPERTS */}
        <ContactStrip onOpenBooking={() => handleOpenBooking('private')} />
      </main>

      {/* SECTION 08 — CONTACT / FINAL BRAND SECTION */}
      <Footer />

      {/* Interactive Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onClearCart={handleClearCart}
      />

      {/* Interactive Event Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialPackageId={bookingPackageId}
      />

      {/* Our Story Modal */}
      <StoryModal
        isOpen={isStoryOpen}
        onClose={() => setIsStoryOpen(false)}
        onBrowseMenu={scrollToMenu}
      />
    </div>
  );
}
