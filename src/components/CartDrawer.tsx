import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, CheckCircle2 } from 'lucide-react';
import { CartItem, calculateSubtotal, calculateTax, calculateTotal } from '../utils/cartLogic';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, qty: number, milk?: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onClearCart
}) => {
  const [orderType, setOrderType] = useState<'pickup' | 'delivery'>('pickup');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');

  if (!isOpen) return null;

  const subtotal = calculateSubtotal(items);
  const tax = calculateTax(subtotal);
  const total = calculateTotal(items);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !customerPhone.trim()) return;
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderSuccess(true);
      onClearCart();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF7F2] shadow-2xl flex flex-col justify-between border-l border-[#E8DED1]">
          {/* Header */}
          <div className="p-6 border-b border-[#E8DED1] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#24140E]" />
              <h2 className="text-lg font-bold text-[#24140E]">Your Coffee Bag</h2>
              <span className="text-xs text-[#7A6F68]">
                ({items.reduce((s, i) => s + i.quantity, 0)} items)
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-[#7A6F68] hover:text-[#24140E] rounded-full hover:bg-[#EAE0D3]/50 transition-colors cursor-pointer"
              aria-label="Close cart drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body */}
          <div className="flex-1 overflow-y-auto p-6">
            {orderSuccess ? (
              <div className="text-center py-12">
                <CheckCircle2 className="w-16 h-16 text-[#5E8C43] mx-auto mb-4 animate-in zoom-in" />
                <h3 className="text-xl font-bold text-[#24140E]">Order Confirmed!</h3>
                <p className="mt-2 text-sm text-[#5C4A3E]">
                  Thank you, {customerName}. Your fresh coffee and bakery order is being freshly prepared at the counter.
                </p>
                <div className="mt-6 p-4 rounded-xl bg-[#F4EFEA] border border-[#E8DED1] text-xs text-[#5C4A3E]">
                  <div className="font-semibold text-[#24140E]">Estimated Ready Time:</div>
                  <div className="text-sm font-mono mt-0.5">8 &ndash; 12 minutes</div>
                </div>
                <button
                  onClick={() => {
                    setOrderSuccess(false);
                    onClose();
                  }}
                  className="mt-8 bg-[#24140E] text-[#FAF7F2] px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#3D241A] transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            ) : items.length === 0 ? (
              <div className="text-center py-16 text-[#7A6F68]">
                <ShoppingBag className="w-12 h-12 mx-auto stroke-1 text-[#C4B7A6] mb-3" />
                <p className="text-base font-semibold text-[#24140E]">Your bag is currently empty</p>
                <p className="text-xs mt-1">Explore our espresso drinks and fresh baked pastries.</p>
                <button
                  onClick={onClose}
                  className="mt-6 bg-[#24140E] text-[#FAF7F2] px-6 py-2.5 rounded-full text-xs font-medium cursor-pointer"
                >
                  Browse Menu
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Order Type Toggle */}
                <div className="grid grid-cols-2 gap-1 p-1 bg-[#F4EFEA] rounded-xl border border-[#E8DED1] text-xs font-semibold">
                  <button
                    onClick={() => setOrderType('pickup')}
                    className={`py-2 rounded-lg transition-colors cursor-pointer ${
                      orderType === 'pickup'
                        ? 'bg-[#24140E] text-[#FAF7F2]'
                        : 'text-[#5C4A3E] hover:text-[#24140E]'
                    }`}
                  >
                    Counter Pickup (10m)
                  </button>
                  <button
                    onClick={() => setOrderType('delivery')}
                    className={`py-2 rounded-lg transition-colors cursor-pointer ${
                      orderType === 'delivery'
                        ? 'bg-[#24140E] text-[#FAF7F2]'
                        : 'text-[#5C4A3E] hover:text-[#24140E]'
                    }`}
                  >
                    Local Courier ($3.50)
                  </button>
                </div>

                {/* Item List */}
                <div className="divide-y divide-[#E8DED1]">
                  {items.map((item) => (
                    <div key={`${item.id}-${item.milkOption || 'def'}`} className="py-3 flex items-center justify-between gap-3">
                      <div className="flex-1">
                        <div className="font-semibold text-sm text-[#24140E]">{item.name}</div>
                        <div className="text-xs text-[#7A6F68] font-mono tabular-nums">
                          ${item.price.toFixed(2)} each
                        </div>
                      </div>

                      {/* Quantity Stepper */}
                      <div className="flex items-center gap-2 border border-[#E8DED1] rounded-full px-2 py-1 bg-white">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1, item.milkOption)}
                          className="text-[#5C4A3E] hover:text-[#24140E] p-0.5 cursor-pointer"
                          aria-label={`Decrease quantity of ${item.name}`}
                        >
                          {item.quantity === 1 ? <Trash2 className="w-3.5 h-3.5 text-red-500" /> : <Minus className="w-3.5 h-3.5" />}
                        </button>
                        <span className="text-xs font-mono font-semibold w-4 text-center">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1, item.milkOption)}
                          className="text-[#5C4A3E] hover:text-[#24140E] p-0.5 cursor-pointer"
                          aria-label={`Increase quantity of ${item.name}`}
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="font-mono text-sm font-semibold text-[#24140E] w-14 text-right tabular-nums">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Checkout Quick Form */}
                <form id="cart-form" onSubmit={handleCheckout} className="pt-4 border-t border-[#E8DED1] space-y-3">
                  <div className="text-xs font-bold text-[#24140E] uppercase tracking-wider">
                    Customer Details
                  </div>
                  <div>
                    <label className="block text-[11px] text-[#5C4A3E] mb-1 font-medium">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maya Lin"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full text-xs px-3 py-2 rounded-lg bg-white border border-[#E8DED1] focus:outline-hidden focus:border-[#24140E]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-[#5C4A3E] mb-1 font-medium">Phone for SMS updates</label>
                    <input
                      type="tel"
                      required
                      placeholder="(555) 000-0000"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full text-xs px-3 py-2 rounded-lg bg-white border border-[#E8DED1] focus:outline-hidden focus:border-[#24140E]"
                    />
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* Drawer Footer / Totals */}
          {!orderSuccess && items.length > 0 && (
            <div className="p-6 bg-[#FAF7F2] border-t border-[#E8DED1] space-y-3">
              <div className="space-y-1.5 text-xs text-[#5C4A3E]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-mono tabular-nums">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax (8.875%)</span>
                  <span className="font-mono tabular-nums">${tax.toFixed(2)}</span>
                </div>
                {orderType === 'delivery' && (
                  <div className="flex justify-between">
                    <span>Local Courier</span>
                    <span className="font-mono tabular-nums">$3.50</span>
                  </div>
                )}
                <div className="pt-2 border-t border-[#E8DED1] flex justify-between text-sm font-bold text-[#24140E]">
                  <span>Total</span>
                  <span className="font-mono tabular-nums">
                    ${(total + (orderType === 'delivery' ? 3.50 : 0)).toFixed(2)}
                  </span>
                </div>
              </div>

              <button
                type="submit"
                form="cart-form"
                disabled={isCheckingOut}
                className="w-full bg-[#24140E] hover:bg-[#3D241A] text-[#FAF7F2] py-3.5 rounded-full font-medium text-sm flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer disabled:opacity-50"
              >
                <span>{isCheckingOut ? 'Processing Order...' : 'Place Order'}</span>
                {!isCheckingOut && <ArrowRight className="w-4 h-4" />}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
