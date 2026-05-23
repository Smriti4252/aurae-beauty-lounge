/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ColorToken, TypographyToken, ServiceRitual, AtelierProduct, Testimonial } from './types';

export const COLOR_TOKENS: ColorToken[] = [
  {
    hex: '#0C0C0C',
    name: 'Primary Background',
    role: 'Deep luxury dark backdrop that creates high-end cinematic space.',
    variable: '--color-brand-bg'
  },
  {
    hex: '#141414',
    name: 'Luxury Charcoal',
    role: 'Refined warm dark color for secondary panels and experiential cards.',
    variable: '--color-brand-cream'
  },
  {
    hex: '#E5D1B8',
    name: 'Celestial Pale Gold',
    role: 'Signature warm premium gold for main headings, primary CTAs, and active triggers.',
    variable: '--color-brand-muted-rose'
  },
  {
    hex: '#A68B5B',
    name: 'Antique Gold',
    role: 'Slightly aged brass-gold accentuating details, labels, and borders.',
    variable: '--color-brand-gold'
  },
  {
    hex: '#D4A373',
    name: 'Warm Amber Sand',
    role: 'Romantic, heat-radiating warm gold element for blurs and active sliders.',
    variable: '--color-brand-blush'
  },
  {
    hex: '#050505',
    name: 'Pure Space Black',
    role: 'Deep uncompromising shade for ultimate depth gradients and contrast.',
    variable: '--color-brand-dark'
  },
  {
    hex: '#EBE3D5',
    name: 'Luxury Light Slate',
    role: 'Smooth warm-tint light tone for optimal, premium typography legibility.',
    variable: '--color-brand-charcoal'
  },
  {
    hex: 'rgba(255,255,255,0.06)',
    name: 'Soft Border',
    role: 'Delicate light line that segments panels without harsh breaks.',
    variable: 'rgba(255,255,255,0.06)'
  },
  {
    hex: 'rgba(255,255,255,0.12)',
    name: 'Glass Surface',
    role: 'Subtle high-clarity frosted overlay for premium floating panels.',
    variable: 'rgba(255,255,255,0.12)'
  }
];

export const TYPOGRAPHY_TOKENS: TypographyToken[] = [
  {
    name: 'Hero Display',
    family: 'serif',
    weight: '300 Light',
    size: 'text-6xl md:text-8xl',
    usage: 'Oversized main screen editorial storytelling headers.',
    example: 'The Art of Infinite Radiance.',
    className: 'font-serif font-light text-6xl md:text-8xl tracking-tight leading-none'
  },
  {
    name: 'Section Title',
    family: 'serif',
    weight: '400 Regular',
    size: 'text-4xl md:text-5xl',
    usage: 'Framing title block for major experiential sections.',
    example: 'Immersive Sanctuary.',
    className: 'font-serif font-normal text-4xl md:text-5xl tracking-normal text-brand-charcoal'
  },
  {
    name: 'Italic Expression',
    family: 'serif',
    weight: '400 Italic',
    size: 'text-2xl md:text-3xl',
    usage: 'Emotional storytelling cues and beautiful italic transitions.',
    example: 'whispered luxury of self-care',
    className: 'font-serif italic text-2xl md:text-3xl font-light text-brand-muted-rose'
  },
  {
    name: 'Interactive Label',
    family: 'sans',
    weight: '500 Medium',
    size: 'text-xs',
    usage: 'Tactile primary buttons, labels, and micro-headers.',
    example: 'RESERVE AN EXPERIENCE',
    className: 'font-sans text-xs tracking-[0.2em] font-medium uppercase'
  },
  {
    name: 'Luxurious Body',
    family: 'sans',
    weight: '300 Light / 400 Regular',
    size: 'text-sm md:text-base',
    usage: 'Concise editorial paragraphs with breathable line heights.',
    example: 'Every skincare treatment is custom-sculpted in real time to adapt to your unique aura, weaving scientific cell regeneration with ancient meditative touch.',
    className: 'font-sans text-sm md:text-base text-brand-charcoal/80 leading-relaxed font-light'
  }
];

export const IMAGES = {
  heroPortrait: '/src/assets/images/aurae_hero_portrait_1779525253730.png',
  loungeInterior: '/src/assets/images/aurae_lounge_interior_1779525270459.png',
  skincareBottle: '/src/assets/images/aurae_ritual_skincare_1779525288620.png',
  beautyDetail: '/src/assets/images/aurae_beauty_moment_1779525305120.png',
  sculptSilhouette: '/src/assets/images/aurae_silhouette_contour_1779529339369.png',
};

export const RITUALS: ServiceRitual[] = [
  {
    id: 'skincare-aura',
    title: 'The Aura Signature Facial Ritual',
    category: 'Skincare Aura',
    description: 'A luxurious, light-refracting face fusion combining bespoke double active-amino infusions with solid-gold gua sha muscle lifting, chilled botanical rollers, and complete facial line sculpting.',
    duration: '90 Minutes',
    price: '$280',
    image: IMAGES.beautyDetail,
    details: [
      'Pre-treatment bespoke diagnostic aura & skin analysis',
      'Double active amino-acid infusion and deep botanical wash',
      'Micro-current tone optimization & cellular dermal lift',
      'Sculpting somatic drainage via heavy solid gold tools and chilled crystal rollers'
    ]
  },
  {
    id: 'haute-coiffure',
    title: 'Precision Hair Spa Ceremony',
    category: 'Haute Coiffure',
    description: 'A divine scalp balancing massage incorporating customized aromatic herbal steam, deep cranial acupuncture pressure points, and rare organic essential botanical oil infusions.',
    duration: '75 Minutes',
    price: '$195',
    image: IMAGES.heroPortrait,
    details: [
      'Anatomical warm micro-steam bath to purify and relax hair fibers',
      'Sensory pressure point scalp massage with lavender and rosemary absolute',
      'Bespoke hair mask freshly formulated in real-time for cellular root health',
      'Sensory rinse paired with velvet finishing blowout and boar bristle styling'
    ]
  },
  {
    id: 'divine-body',
    title: 'Sculpted Glow Therapy',
    category: 'Divine Body',
    description: 'An elite body contouring experience utilizing rich champagne yeast oils, continuous warm basalt volcanic stone kneading, and a full sensory Tibetan sound bath tuning.',
    duration: '100 Minutes',
    price: '$340',
    image: IMAGES.sculptSilhouette,
    details: [
      'Bespoke botanical warm champagne oil full-body slow effleurage',
      'Deep thermal stone kneading targeting stress points of back and limbs',
      'Contour-defining muscle kneading and tissue lifting choreography',
      'Nervous system recalibration via custom-tuned acoustic vibration'
    ]
  },
  {
    id: 'bridal-aura',
    title: 'Bridal Aura Experience',
    category: 'Haute Esthétique',
    description: 'An ultra-premium matrimonial beauty sanctuary. Restoring visual brightness with dual skin-firming cellular therapies, silk neck drapes, and anxiety-melting aromatherapy.',
    duration: '150 Minutes',
    price: '$520',
    image: IMAGES.beautyDetail,
    details: [
      'Dual micro-current epidermal lifting and extreme hydration blast',
      'Premium neck, décolleté, and hand brightening silk drapes',
      'Deep somatic anxiety-release chest massage using rose absolute oil',
      'Luminous aura-finish cellular glaze seal and chilled chamomile decompression'
    ]
  }
];

export const ATELIER_PRODUCTS: AtelierProduct[] = [
  {
    id: 'product-aura-juice',
    name: 'Auraé Celestial Cellular Serum',
    category: 'Elixirs',
    description: 'A light-infused dermal catalyst suspended in triple-filtered active flower water. Imparts an immediate silk-to-touch elasticity and a luminous glass complexion.',
    price: '$165',
    volume: '30 ml',
    image: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=1000&q=85',
    ingredients: 'Camellia Oleifera, Active Retinoid, Gold Flakes, Diamond Dust Matrix, Edelweiss Stem Cells'
  },
  {
    id: 'product-rose-butter',
    name: 'Atelier Velvet Rose Creme',
    category: 'Essential',
    description: 'Rich whipped cream infused with Bulgarian white rose distillate, active ceramides, and micro-collagen blocks that melt deep on contact to form an invisible water shield.',
    price: '$140',
    volume: '50 ml',
    image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=1000&q=85',
    ingredients: 'White Rose Infusion, Barrier Lipids, Hyaluronic Acid Cube, Jojoba Esters'
  },
  {
    id: 'product-amber-oil',
    name: 'Auraé Solar Luminous Nectar',
    category: 'Elixirs',
    description: 'A rare golden sunset elixir infused with rich grape-seed compounds, skin-firming champagne yeasts, and delicate botanical sparkles to wrap your limbs in soft contour light.',
    price: '$180',
    volume: '100 ml',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1000&q=85',
    ingredients: 'Vitis Vinifera, Sparkling Wine Ferments, Squalane, Jasmine Absolute, Calendula'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    author: 'Genevieve Moreau',
    role: 'Editorial Director, Vogue France',
    quote: 'Walking into Auraé feels less like entering a salon and more like stepping inside a warm, light-filtered cinematic memory. The physical craftsmanship is sublime.',
    rating: 5
  },
  {
    author: 'Evelyn Sterling',
    role: 'Haute Couture Client',
    quote: 'The Skincare Aura Ritual completely reinvented what luxury self-care means. The pacing, the silence, the gold-weight touch—every single segment breathes artistry.',
    rating: 5
  }
];
