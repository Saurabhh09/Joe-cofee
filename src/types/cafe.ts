/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MenuItem {
  id: string;
  name: string;
  category: 'hot' | 'cold' | 'pastry';
  price: number;
  description: string;
  calories?: string;
  tags?: string[];
  imageKey: string;
}

export type MenuCategory = 'all' | 'hot' | 'cold' | 'pastry';

export interface EventPackage {
  id: string;
  title: string;
  tagline: string;
  description: string;
  capacity: string;
  features: string[];
}

export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  eventType: 'private' | 'catering' | 'workshop';
  eventDate: string;
  guestCount: number;
  notes: string;
}
