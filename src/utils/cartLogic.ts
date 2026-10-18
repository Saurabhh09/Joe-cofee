/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  category: 'hot' | 'cold' | 'pastry';
  milkOption?: string;
}

export function calculateSubtotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export function calculateTax(subtotal: number, taxRate = 0.08875): number {
  return Math.round(subtotal * taxRate * 100) / 100;
}

export function calculateTotal(items: CartItem[], taxRate = 0.08875): number {
  const subtotal = calculateSubtotal(items);
  const tax = calculateTax(subtotal, taxRate);
  return Math.round((subtotal + tax) * 100) / 100;
}

export function addItemToCart(currentItems: CartItem[], newItem: Omit<CartItem, 'quantity'> & { quantity?: number }): CartItem[] {
  const quantityToAdd = newItem.quantity ?? 1;
  const existingIndex = currentItems.findIndex(
    item => item.id === newItem.id && item.milkOption === newItem.milkOption
  );

  if (existingIndex > -1) {
    return currentItems.map((item, idx) =>
      idx === existingIndex ? { ...item, quantity: item.quantity + quantityToAdd } : item
    );
  }

  return [...currentItems, { ...newItem, quantity: quantityToAdd }];
}

export function updateItemQuantity(currentItems: CartItem[], id: string, quantity: number, milkOption?: string): CartItem[] {
  if (quantity <= 0) {
    return currentItems.filter(item => !(item.id === id && item.milkOption === milkOption));
  }
  return currentItems.map(item =>
    item.id === id && item.milkOption === milkOption ? { ...item, quantity } : item
  );
}
