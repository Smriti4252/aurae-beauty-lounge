/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ColorToken {
  hex: string;
  name: string;
  role: string;
  variable: string;
}

export interface TypographyToken {
  name: string;
  family: 'serif' | 'sans';
  weight: string;
  size: string;
  usage: string;
  example: string;
  className: string;
}

export interface ServiceRitual {
  id: string;
  title: string;
  category: 'Skincare Aura' | 'Haute Coiffure' | 'Divine Body' | 'Haute Esthétique';
  description: string;
  duration: string;
  price: string;
  image: string;
  details: string[];
}

export interface AtelierProduct {
  id: string;
  name: string;
  category: 'Elixirs' | 'Essential' | 'Infusions';
  description: string;
  price: string;
  image: string;
  volume: string;
  ingredients: string;
}

export interface Testimonial {
  author: string;
  role: string;
  quote: string;
  rating: number;
}
