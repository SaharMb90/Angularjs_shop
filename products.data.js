'use strict';

/**
 * Zenith Store — product catalog.
 * Registered as an injectable Angular constant so controllers never rely on
 * globals: angular.module('zenithStore').constant('productCatalog', [...])
 */
angular
  .module('zenithStore')
  .constant('productCatalog', [
    { id: 1, name: 'Wireless Noise-Canceling Headphones', emoji: '🎧', price: 249.99, stock: 12, stars: 5, reviews: 328, category: 'Electronics', description: 'Immersive sound with active noise cancellation and 30-hour battery life.' },
    { id: 2, name: 'Ultralight Mechanical Keyboard', emoji: '⌨️', price: 129.50, stock: 8, stars: 4, reviews: 154, category: 'Electronics', description: 'Hot-swappable switches with per-key RGB backlighting and a compact 75% layout.' },
    { id: 3, name: '4K Action Camera', emoji: '📷', price: 199.00, stock: 5, stars: 4, reviews: 92, category: 'Electronics', description: 'Waterproof body, image stabilization, and 4K60 video for every adventure.' },
    { id: 4, name: 'Smart Fitness Watch', emoji: '⌚', price: 179.99, stock: 0, stars: 5, reviews: 411, category: 'Electronics', description: 'Heart-rate, sleep and workout tracking with a 10-day battery life.' },
    { id: 5, name: 'Ergonomic Mesh Office Chair', emoji: '🪑', price: 289.00, stock: 6, stars: 4, reviews: 210, category: 'Home', description: 'Adjustable lumbar support and breathable mesh for all-day comfort.' },
    { id: 6, name: 'Ceramic Pour-Over Coffee Set', emoji: '☕', price: 49.90, stock: 20, stars: 5, reviews: 76, category: 'Home', description: 'Handcrafted dripper, carafe and reusable filter for a perfect brew.' },
    { id: 7, name: 'Aromatic Scented Candle Trio', emoji: '🕯️', price: 34.00, stock: 15, stars: 4, reviews: 58, category: 'Home', description: 'Soy-wax candles in cedar, vanilla and sea-salt fragrances.' },
    { id: 8, name: 'Minimalist Leather Backpack', emoji: '🎒', price: 139.00, stock: 9, stars: 4, reviews: 133, category: 'Fashion', description: 'Full-grain leather with padded 15-inch laptop sleeve and hidden pockets.' },
    { id: 9, name: 'Polarized Aviator Sunglasses', emoji: '🕶️', price: 89.00, stock: 18, stars: 5, reviews: 205, category: 'Fashion', description: 'UV400 polarized lenses with a lightweight stainless-steel frame.' },
    { id: 10, name: 'Organic Cotton Sneakers', emoji: '👟', price: 79.00, stock: 0, stars: 4, reviews: 87, category: 'Fashion', description: 'Breathable organic canvas upper with a cushioned recycled sole.' },
    { id: 11, name: 'Yoga Mat & Block Starter Kit', emoji: '🧘', price: 59.00, stock: 14, stars: 5, reviews: 169, category: 'Sports', description: 'Non-slip 6mm mat plus two high-density cork blocks and a carry strap.' },
    { id: 12, name: 'Adjustable Dumbbell Set', emoji: '🏋️', price: 349.00, stock: 3, stars: 4, reviews: 141, category: 'Sports', description: 'Space-saving dial system adjusts from 5 to 52 lbs in seconds.' }
  ]);
