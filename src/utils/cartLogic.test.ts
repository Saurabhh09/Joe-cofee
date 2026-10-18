import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateSubtotal,
  calculateTax,
  calculateTotal,
  addItemToCart,
  updateItemQuantity
} from './cartLogic.ts';
import type { CartItem } from './cartLogic.ts';

test('calculateSubtotal calculates correct sum of items', () => {
  const items: CartItem[] = [
    { id: '1', name: 'Latte', price: 5.5, quantity: 2, category: 'hot' },
    { id: '2', name: 'Croissant', price: 4.0, quantity: 1, category: 'pastry' }
  ];
  assert.equal(calculateSubtotal(items), 15.0);
});

test('calculateTax rounds to 2 decimals accurately', () => {
  assert.equal(calculateTax(10.0, 0.08875), 0.89);
  assert.equal(calculateTax(0), 0);
});

test('calculateTotal returns subtotal plus tax', () => {
  const items: CartItem[] = [
    { id: '1', name: 'Espresso', price: 3.5, quantity: 2, category: 'hot' }
  ];
  // Subtotal = 7.00, Tax = 7 * 0.08875 = 0.62125 -> 0.62. Total = 7.62
  assert.equal(calculateTotal(items), 7.62);
});

test('addItemToCart adds new item or increments existing item quantity', () => {
  const initial: CartItem[] = [
    { id: '1', name: 'Espresso', price: 3.5, quantity: 1, category: 'hot', milkOption: 'whole' }
  ];

  const addedSame = addItemToCart(initial, {
    id: '1',
    name: 'Espresso',
    price: 3.5,
    category: 'hot',
    milkOption: 'whole'
  });
  assert.equal(addedSame.length, 1);
  assert.equal(addedSame[0].quantity, 2);

  const addedDiff = addItemToCart(addedSame, {
    id: '2',
    name: 'Cold Brew',
    price: 4.75,
    category: 'cold'
  });
  assert.equal(addedDiff.length, 2);
  assert.equal(addedDiff[1].quantity, 1);
});

test('updateItemQuantity modifies or removes items when quantity reaches 0', () => {
  const items: CartItem[] = [
    { id: '1', name: 'Latte', price: 5.5, quantity: 2, category: 'hot' },
    { id: '2', name: 'Muffin', price: 4.0, quantity: 1, category: 'pastry' }
  ];

  const updated = updateItemQuantity(items, '1', 3);
  assert.equal(updated.find(i => i.id === '1')?.quantity, 3);

  const removed = updateItemQuantity(updated, '2', 0);
  assert.equal(removed.length, 1);
  assert.equal(removed.find(i => i.id === '2'), undefined);
});
