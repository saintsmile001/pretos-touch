import { Product, Category, Collection, Article, Review } from '@/types';

export const initialCategories: Category[] = [
  {
    id: 'cat-postpartum-care',
    slug: 'postpartum-care',
    name: 'Postpartum Care',
    description:
      'Thoughtfully selected products designed to support comfort, stability, and everyday care after pregnancy.',
    seo: {
      title: 'Postpartum Care Products in Nigeria | Pretos Touch',
      description:
        'Explore postpartum care products from Pretos Touch, including supportive everyday recovery belts for new mothers in Nigeria.',
    },
    sortOrder: 1,
  },
  {
    id: 'cat-womens-wellness',
    slug: 'womens-wellness',
    name: "Women's Wellness",
    description: 'Everyday wellness, comfort, and soothing products for women.',
    seo: {
      title: "Women's Wellness Products in Nigeria | Pretos Touch",
      description:
        "Explore women's wellness and menstrual comfort products from Pretos Touch.",
    },
    sortOrder: 2,
  },
  {
    id: 'cat-bras-shapewear',
    slug: 'bras-shapewear',
    name: 'Bras & Shapewear',
    description: 'Everyday confidence, fit, and effortless silhouette support.',
    seo: {
      title: 'Bras & Shapewear in Nigeria | Pretos Touch',
      description:
        'Shop comfortable bras, invisible lifts, and discreet shapewear from Pretos Touch in Nigeria.',
    },
    sortOrder: 3,
  },
  {
    id: 'cat-baby-care',
    slug: 'baby-care',
    name: 'Baby Care',
    description: 'Practical and gentle products for everyday baby care, grooming, and peace of mind.',
    seo: {
      title: 'Baby Care Products in Nigeria | Pretos Touch',
      description:
        'Shop practical baby care and gentle grooming products from Pretos Touch in Nigeria.',
    },
    sortOrder: 4,
  },
  {
    id: 'cat-beauty-personal-care',
    slug: 'beauty-personal-care',
    name: 'Beauty & Personal Care',
    description: 'Everyday beauty, self-care, and personal-care essentials.',
    seo: {
      title: 'Beauty & Personal Care Products | Pretos Touch',
      description:
        'Explore beauty and personal-care essentials designed for confidence and everyday comfort.',
    },
    sortOrder: 5,
  },
];

export const initialCollections: Collection[] = [
  {
    id: 'col-best-sellers',
    slug: 'best-sellers',
    name: 'Best Sellers',
    description: 'Our most loved and requested wellness and care essentials.',
    productIds: ['prod-postpartum-belt', 'prod-baby-nail-trimmer', 'prod-menstrual-belt', 'prod-kiss-bra'],
    seo: {
      title: 'Best Selling Wellness Products | Pretos Touch',
      description: 'Explore top-rated wellness, baby care, and postpartum products from Pretos Touch.',
    },
  },
  {
    id: 'col-new-mothers',
    slug: 'new-mothers',
    name: 'New Mother Essentials',
    description: 'Curated comfort and support for postpartum and newborn parenting journeys.',
    productIds: ['prod-postpartum-belt', 'prod-baby-nail-trimmer'],
    seo: {
      title: 'New Mother Essentials in Nigeria | Pretos Touch',
      description: 'Essential postpartum and baby grooming products for new mothers.',
    },
  },
];

export const initialProducts: Product[] = [
  {
    id: 'prod-postpartum-belt',
    slug: 'postpartum-belt',
    name: 'Postpartum Belt',
    shortDescription:
      'A supportive postpartum abdominal belt designed for comfortable, breathable everyday wear after childbirth.',
    description:
      'The Pretos Touch Postpartum Belt provides gentle compression and core support for mothers during their postnatal recovery. Designed with breathable, stretchable fabric and adjustable fastening, it offers tailored support for the lower back and abdomen without restricting everyday movement.',
    categoryId: 'cat-postpartum-care',
    collectionIds: ['col-best-sellers', 'col-new-mothers'],
    brand: 'Pretos Touch',
    price: {
      amount: 15000,
      currency: 'NGN',
    },
    compareAtPrice: {
      amount: 25000,
      currency: 'NGN',
    },
    sku: 'PT-PB-001',
    images: [
      {
        id: 'img-pb-1',
        url: '/images/products/postpartum-belt-1.jpg',
        alt: 'Pretos Touch Postpartum Support Belt',
        sortOrder: 1,
      },
      {
        id: 'img-pb-2',
        url: '/images/products/postpartum-belt-2.jpg',
        alt: 'Postpartum belt breathable fabric detail',
        sortOrder: 2,
      },
    ],
    variants: [
      {
        id: 'var-pb-m',
        sku: 'PT-PB-001-M',
        title: 'Medium (M) - Nude',
        options: [
          { name: 'Size', value: 'M' },
          { name: 'Color', value: 'Nude' },
        ],
        price: { amount: 15000, currency: 'NGN' },
        available: true,
      },
      {
        id: 'var-pb-l',
        sku: 'PT-PB-001-L',
        title: 'Large (L) - Nude',
        options: [
          { name: 'Size', value: 'L' },
          { name: 'Color', value: 'Nude' },
        ],
        price: { amount: 15000, currency: 'NGN' },
        available: true,
      },
      {
        id: 'var-pb-xl',
        sku: 'PT-PB-001-XL',
        title: 'Extra Large (XL) - Nude',
        options: [
          { name: 'Size', value: 'XL' },
          { name: 'Color', value: 'Nude' },
        ],
        price: { amount: 15000, currency: 'NGN' },
        available: true,
      },
      {
        id: 'var-pb-blk-l',
        sku: 'PT-PB-001-BLK-L',
        title: 'Large (L) - Black',
        options: [
          { name: 'Size', value: 'L' },
          { name: 'Color', value: 'Black' },
        ],
        price: { amount: 15000, currency: 'NGN' },
        available: true,
      },
    ],
    features: [
      'Multi-panel elastic design for flexible compression',
      'Breathable mesh fabric suited for warm climates',
      'Dual-tension adjustable straps for a secure custom fit',
      'Smooth edges to prevent chafing during daily routines',
    ],
    specifications: {
      Material: 'Polyester, Spandex, Cotton-blend lining',
      Closure: 'Hook & loop fastener',
      Care: 'Hand wash in cold water; line dry',
      Fit: 'Adjustable contour fit',
    },
    howToUse:
      'Wrap the wide base comfortably around the lower abdomen and fasten the primary closure. Pull the secondary side tension straps to achieve your preferred level of snug, gentle support. Ensure you can breathe and move comfortably.',
    careInstructions:
      'Hand wash with mild detergent in cool water. Do not machine wash, tumble dry, or bleach. Lay flat in shade to dry to preserve elasticity.',
    shippingInfo:
      'Ships within 24-48 hours across Lagos and all Nigerian states. Discreet and protective packaging.',
    returnInfo:
      'Due to hygiene standards for postpartum garments, items must be unworn in original packaging. Contact support within 48 hours of receipt for sizing inquiries.',
    faqs: [
      {
        question: 'When can I start wearing the postpartum belt?',
        answer:
          'Mothers often begin wearing support belts within a few days postpartum for vaginal births or once cleared by their healthcare professional following a cesarean section.',
      },
      {
        question: 'How do I choose the right size?',
        answer:
          'Measure around the widest part of your hips/belly. If between sizes, we recommend choosing the larger size to allow comfortable adjustment.',
      },
    ],
    ratingAverage: 4.8,
    reviewCount: 24,
    available: true,
    seo: {
      title: 'Postpartum Belt in Nigeria | Pretos Touch',
      description:
        'Shop the Pretos Touch postpartum support belt in Nigeria. Breathable, adjustable postnatal belly band for comfortable recovery.',
    },
    createdAt: '2026-01-10T10:00:00Z',
    updatedAt: '2026-03-01T12:00:00Z',
  },
  {
    id: 'prod-baby-nail-trimmer',
    slug: 'baby-electric-nail-trimmer',
    name: 'Baby Electric Nail Trimmer',
    shortDescription:
      'A whisper-quiet, gentle electric nail-trimming kit designed for stress-free baby and toddler nail grooming.',
    description:
      'The Pretos Touch Baby Electric Nail Trimmer safely files soft baby nails without harming delicate cuticles or surrounding skin. Features multiple cushioned grinding heads for newborns, infants, toddlers, and adults, along with a soft LED light and whisper-quiet motor for stress-free trimming even while baby sleeps.',
    categoryId: 'cat-baby-care',
    collectionIds: ['col-best-sellers', 'col-new-mothers'],
    brand: 'Pretos Touch',
    price: {
      amount: 8500,
      currency: 'NGN',
    },
    compareAtPrice: {
      amount: 10000,
      currency: 'NGN',
    },
    sku: 'PT-BNT-002',
    images: [
      {
        id: 'img-bnt-1',
        url: '/images/products/baby-nail-trimmer-1.jpg',
        alt: 'Pretos Touch Baby Electric Nail Trimmer Kit',
        sortOrder: 1,
      },
      {
        id: 'img-bnt-2',
        url: '/images/products/baby-nail-trimmer-2.jpg',
        alt: 'Baby nail trimmer interchangeable grinding heads',
        sortOrder: 2,
      },
    ],
    variants: [
      {
        id: 'var-bnt-pink',
        sku: 'PT-BNT-002-PNK',
        title: 'Pastel Rose',
        options: [{ name: 'Color', value: 'Pastel Rose' }],
        price: { amount: 8500, currency: 'NGN' },
        available: true,
      },
      {
        id: 'var-bnt-blue',
        sku: 'PT-BNT-002-BLU',
        title: 'Pastel Blue',
        options: [{ name: 'Color', value: 'Pastel Blue' }],
        price: { amount: 8500, currency: 'NGN' },
        available: true,
      },
      {
        id: 'var-bnt-teal',
        sku: 'PT-BNT-002-TEL',
        title: 'Pastel Mint',
        options: [{ name: 'Color', value: 'Pastel Mint' }],
        price: { amount: 8500, currency: 'NGN' },
        available: true,
      },
    ],
    features: [
      'Whisper-quiet motor (under 35dB) for trimming during naps',
      'Built-in soft front LED light for clear visibility',
      '6 interchangeable cushioned filing attachments for different ages',
      'Dual speed modes with clockwise and counter-clockwise rotation',
    ],
    specifications: {
      Power: '2 x AA Batteries (not included)',
      Speeds: '4 working modes (2 speeds, dual rotation)',
      Attachments: '6 color-coded grinding pads (0-3m, 4-11m, 12m+, adult files)',
      Dimensions: '13cm x 4cm',
    },
    howToUse:
      'Select the age-appropriate grinding head. Insert 2 AA batteries. Switch on the device and gently place the rotating pad along the edge of your baby’s nails at a 45-degree angle. Move slowly along the contour.',
    careInstructions:
      'Wipe the trimmer body with a clean, dry cloth. Keep grinding heads in the provided protective case. Do not submerge device in water.',
    shippingInfo:
      'Prompt delivery across Nigeria. Each kit comes safely packed with travel case.',
    returnInfo:
      'Eligible for replacement if defective within 7 days of delivery in original packaging.',
    faqs: [
      {
        question: 'Will this hurt my baby’s fingers or cuticles?',
        answer:
          'No. The cushioned pads are engineered with micro-fine grit that slows down automatically upon firm contact, making it gentle on delicate skin.',
      },
      {
        question: 'Can adults use this trimmer too?',
        answer:
          'Yes. The kit includes adult manicure/pedicure attachment heads for filing and calluses.',
      },
    ],
    ratingAverage: 4.9,
    reviewCount: 38,
    available: true,
    seo: {
      title: 'Baby Electric Nail Trimmer in Nigeria | Pretos Touch',
      description:
        'Buy the safe Pretos Touch Baby Electric Nail Trimmer in Nigeria. Quiet, gentle, LED-lit nail file for newborns, infants, and toddlers.',
    },
    createdAt: '2026-01-12T10:00:00Z',
    updatedAt: '2026-03-01T12:00:00Z',
  },
  {
    id: 'prod-menstrual-belt',
    slug: 'menstrual-belt',
    name: 'Menstrual Belt',
    shortDescription:
      'A portable, rechargeable menstrual heating and soothing massage belt designed for gentle abdominal relief.',
    description:
      'The Pretos Touch Menstrual Belt delivers soothing warmth and gentle vibration to help ease abdominal discomfort and cramps during menstrual cycles. Slim, lightweight, and rechargeable, it slips discreetly under clothing so you can experience comforting warmth at home, work, or on the go.',
    categoryId: 'cat-womens-wellness',
    collectionIds: ['col-best-sellers'],
    brand: 'Pretos Touch',
    price: {
      amount: 10000,
      currency: 'NGN',
    },
    compareAtPrice: {
      amount: 12000,
      currency: 'NGN',
    },
    sku: 'PT-MB-003',
    images: [
      {
        id: 'img-mb-1',
        url: '/images/products/menstrual-belt-1.jpg',
        alt: 'Pretos Touch Menstrual Heating Comfort Belt',
        sortOrder: 1,
      },
      {
        id: 'img-mb-2',
        url: '/images/products/menstrual-belt-1.jpg',
        alt: 'Menstrual belt ergonomic waistband and controls',
        sortOrder: 2,
      },
    ],
    variants: [
      {
        id: 'var-mb-blush',
        sku: 'PT-MB-003-BLS',
        title: 'Blush Pink',
        options: [{ name: 'Color', value: 'Blush Pink' }],
        price: { amount: 10000, currency: 'NGN' },
        available: true,
      },
      {
        id: 'var-mb-white',
        sku: 'PT-MB-003-WHT',
        title: 'Soft White',
        options: [{ name: 'Color', value: 'Soft White' }],
        price: { amount: 10000, currency: 'NGN' },
        available: true,
      },
    ],
    features: [
      'Rapid 3-second heating technology with 3 temperature levels (45°C, 55°C, 65°C)',
      '3 multi-frequency gentle vibration massage modes',
      'Rechargeable battery with USB Type-C charging cable',
      'Soft plush inner lining that feels gentle directly against skin',
    ],
    specifications: {
      Battery: '1800mAh Rechargeable Lithium-ion',
      Charging: 'USB Type-C (approx. 2 hours)',
      HeatLevels: '3 settings (45°C - 65°C)',
      Weight: 'Under 250g ultra-lightweight',
    },
    howToUse:
      'Fasten the elastic strap around your waist with the heating pad positioned against your lower abdomen or lower back. Long-press the power button to turn on, then single-press to cycle through heat and vibration settings.',
    careInstructions:
      'Spot clean with a damp cloth. Disconnect charging cord before cleaning. Do not soak or immerse in liquid.',
    shippingInfo:
      'Nationwide shipping across Nigeria with protective boxing and included USB cable.',
    returnInfo:
      '7-day warranty against manufacturing defects in original box.',
    faqs: [
      {
        question: 'Can I wear the menstrual belt under my work clothes?',
        answer:
          'Yes, the slim and ergonomic profile fits comfortably under dresses, sweaters, or blouses.',
      },
      {
        question: 'How long does one battery charge last?',
        answer:
          'Depending on heat and vibration mode settings, a full charge lasts between 2 to 4 hours of continuous soothing use.',
      },
    ],
    ratingAverage: 4.7,
    reviewCount: 19,
    available: true,
    seo: {
      title: 'Menstrual Belt in Nigeria | Pretos Touch',
      description:
        'Discover the Pretos Touch Menstrual Belt in Nigeria. Rechargeable heating and massage pad for period cramp relief and everyday wellness.',
    },
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-03-01T12:00:00Z',
  },
  {
    id: 'prod-invisible-push-up-lift',
    slug: 'invisible-push-up-lift',
    name: 'Invisible Push-Up Lift',
    shortDescription:
      'A seamless, discreet adhesive lift solution for backless, strapless, and low-cut occasion outfits.',
    description:
      'The Pretos Touch Invisible Push-Up Lift offers invisible support, natural enhancement, and dependable all-day hold. Made with skin-friendly medical-grade silicone adhesive and seamless fabric edges, it remains completely undetectable under sheer, backless, or plunging neckline garments.',
    categoryId: 'cat-bras-shapewear',
    collectionIds: ['col-best-sellers'],
    brand: 'Pretos Touch',
    price: {
      amount: 6000,
      currency: 'NGN',
    },
    compareAtPrice: {
      amount: 8500,
      currency: 'NGN',
    },
    sku: 'PT-IPL-004',
    images: [
      {
        id: 'img-ipl-1',
        url: '/images/products/invisible-push-up-1.jpg',
        alt: 'Pretos Touch Invisible Push-Up Lift',
        sortOrder: 1,
      },
      {
        id: 'img-ipl-2',
        url: '/images/products/invisible-push-up-1.jpg',
        alt: 'Seamless adhesive push-up lift detail',
        sortOrder: 2,
      },
    ],
    variants: [
      {
        id: 'var-ipl-a',
        sku: 'PT-IPL-004-A',
        title: 'Cup A/B - Nude Caramel',
        options: [
          { name: 'Cup Size', value: 'A/B' },
          { name: 'Color', value: 'Caramel Nude' },
        ],
        price: { amount: 6000, currency: 'NGN' },
        available: true,
      },
      {
        id: 'var-ipl-c',
        sku: 'PT-IPL-004-C',
        title: 'Cup C/D - Nude Caramel',
        options: [
          { name: 'Cup Size', value: 'C/D' },
          { name: 'Color', value: 'Caramel Nude' },
        ],
        price: { amount: 6000, currency: 'NGN' },
        available: true,
      },
      {
        id: 'var-ipl-e',
        sku: 'PT-IPL-004-E',
        title: 'Cup E/F - Deep Nude',
        options: [
          { name: 'Cup Size', value: 'E/F' },
          { name: 'Color', value: 'Deep Nude' },
        ],
        price: { amount: 6000, currency: 'NGN' },
        available: true,
      },
    ],
    features: [
      'Reusable skin-friendly bio-silicone adhesive',
      'Ultra-thin tapered edges for zero show-through',
      'Front clip clasp to customize cleavage depth and lift',
      'Sweat-resistant design for warm evening wear',
    ],
    specifications: {
      Material: 'Nylon, Spandex, Biological adhesive',
      Reusable: 'Yes, up to 30+ wears with proper washing',
      Sizes: 'Cups A through F',
    },
    howToUse:
      'Clean and dry skin thoroughly (do not apply lotions or oils). Place each cup individually, lifting upwards from beneath the bust, then connect the front clasp to secure desired lift.',
    careInstructions:
      'Gently wash with warm water and mild soap after each wear. Shake off excess water and air dry in the shade. Reapply protective plastic backing for storage.',
    shippingInfo: 'Fast dispatch across all Nigerian regions in discreet packaging.',
    returnInfo:
      'Intimate adhesive product. For hygiene and safety, eligible for return only if seal is intact and unopened.',
    faqs: [
      {
        question: 'How many times can I reuse this push-up lift?',
        answer:
          'When cleaned properly and stored with the protective film, the biological silicone adhesive can be reused up to 30 times.',
      },
      {
        question: 'Will it slip if I sweat?',
        answer:
          'The bio-adhesive is sweat-resistant. Ensure skin is completely free of body lotions, oils, or powders before applying for maximum grip.',
      },
    ],
    ratingAverage: 4.6,
    reviewCount: 15,
    available: true,
    seo: {
      title: 'Invisible Push-Up Lift in Nigeria | Pretos Touch',
      description:
        'Shop the Pretos Touch Invisible Push-Up Lift in Nigeria. Seamless adhesive bra for backless dresses and confident occasion wear.',
    },
    createdAt: '2026-01-20T10:00:00Z',
    updatedAt: '2026-03-01T12:00:00Z',
  },
  // {
  //   id: 'prod-kiss-bra',
  //   slug: 'kiss-bra',
  //   name: 'Kiss Bra',
  //   shortDescription:
  //     'An ultra-soft, wire-free everyday bra engineered for featherlight comfort and seamless support.',
  //   description:
  //     'The Pretos Touch Kiss Bra redefines daily lingerie with ultra-smooth microfiber, wireless contouring cups, and non-slip breathable straps. Feels like a gentle second skin with zero digging, zero underwire irritation, and a natural, flattering silhouette under t-shirts and traditional attire.',
  //   categoryId: 'cat-bras-shapewear',
  //   collectionIds: ['col-best-sellers'],
  //   brand: 'Pretos Touch',
  //   price: {
  //     amount: 13500,
  //     currency: 'NGN',
  //   },
  //   compareAtPrice: {
  //     amount: 16000,
  //     currency: 'NGN',
  //   },
  //   sku: 'PT-KB-005',
  //   images: [
  //     {
  //       id: 'img-kb-1',
  //       url: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80',
  //       alt: 'Pretos Touch Kiss Bra Wireless Comfort Bra',
  //       sortOrder: 1,
  //     },
  //     {
  //       id: 'img-kb-2',
  //       url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
  //       alt: 'Kiss Bra soft seamless microfiber detail',
  //       sortOrder: 2,
  //     },
  //   ],
  //   variants: [
  //     {
  //       id: 'var-kb-blk-34b',
  //       sku: 'PT-KB-005-BLK-34B',
  //       title: '34B - Classic Black',
  //       options: [
  //         { name: 'Band/Cup', value: '34B' },
  //         { name: 'Color', value: 'Classic Black' },
  //       ],
  //       price: { amount: 13500, currency: 'NGN' },
  //       available: true,
  //     },
  //     {
  //       id: 'var-kb-blk-36c',
  //       sku: 'PT-KB-005-BLK-36C',
  //       title: '36C - Classic Black',
  //       options: [
  //         { name: 'Band/Cup', value: '36C' },
  //         { name: 'Color', value: 'Classic Black' },
  //       ],
  //       price: { amount: 13500, currency: 'NGN' },
  //       available: true,
  //     },
  //     {
  //       id: 'var-kb-nde-36c',
  //       sku: 'PT-KB-005-NDE-36C',
  //       title: '36C - Warm Nude',
  //       options: [
  //         { name: 'Band/Cup', value: '36C' },
  //         { name: 'Color', value: 'Warm Nude' },
  //       ],
  //       price: { amount: 13500, currency: 'NGN' },
  //       available: true,
  //     },
  //     {
  //       id: 'var-kb-nde-38d',
  //       sku: 'PT-KB-005-NDE-38D',
  //       title: '38D - Warm Nude',
  //       options: [
  //         { name: 'Band/Cup', value: '38D' },
  //         { name: 'Color', value: 'Warm Nude' },
  //       ],
  //       price: { amount: 13500, currency: 'NGN' },
  //       available: true,
  //     },
  //   ],
  //   features: [
  //     '100% wireless support with memory-foam contour cups',
  //     'Ultra-soft seamless microfiber fabric',
  //     '4-row adjustable back closure for flexible band sizing',
  //     'Wide cushioned straps to relieve shoulder pressure',
  //   ],
  //   specifications: {
  //     Material: '85% Nylon, 15% Spandex',
  //     Closure: 'Hook and eye back clasp (4 rows)',
  //     Padding: 'Lightly lined breathable molded cups',
  //   },
  //   howToUse:
  //     'Fasten clasps on the loosest setting when new. Adjust shoulder straps so they sit flush without tension, and sweep bust tissue gently into the cups for seamless contouring.',
  //   careInstructions:
  //     'Hand wash recommended in cool water, or machine wash in a protective lingerie laundry bag on delicate cycle. Air dry flat.',
  //   shippingInfo: 'Direct delivery across Lagos and all Nigerian states.',
  //   returnInfo:
  //     'Must have tags attached and remain unworn. Contact support within 48 hours of receipt for size exchanges.',
  //   faqs: [
  //     {
  //       question: 'Does this bra provide enough support without an underwire?',
  //       answer:
  //         'Yes, the anatomically molded cups and wide under-bust band offer full day-to-day lift and stability without wire discomfort.',
  //     },
  //     {
  //       question: 'How do I choose the correct size?',
  //       answer:
  //         'Refer to our standard UK/Nigerian bra size guide. If in doubt, message our WhatsApp support for personalized fit advice.',
  //     },
  //   ],
  //   ratingAverage: 4.8,
  //   reviewCount: 31,
  //   available: true,
  //   seo: {
  //     title: 'Kiss Bra | Pretos Touch Nigeria',
  //     description:
  //       'Discover the Pretos Touch Kiss Bra in Nigeria. Ultra-soft wireless comfort bra with seamless silhouette for all-day confidence.',
  //   },
  //   createdAt: '2026-01-25T10:00:00Z',
  //   updatedAt: '2026-03-01T12:00:00Z',
  // },
];

export const initialArticles: Article[] = [
  {
    id: 'art-how-to-use-postpartum-belt',
    slug: 'how-to-use-a-postpartum-belt',
    title: 'How to Use a Postpartum Belt: Complete Guide for New Mothers',
    excerpt:
      'A practical, step-by-step guide on when and how to wear a postpartum support belt safely for everyday comfort after childbirth.',
    content: `
## What is a Postpartum Support Belt?

A postpartum belt (often called a belly wrap or postnatal binder) is a gentle supportive band designed to wrap around your abdomen and lower back following pregnancy. It offers stabilizing compression to help new mothers feel supported during their daily activities.

### Key Benefits of Everyday Postnatal Support

- **Core Stability**: Gently supports weakened abdominal muscles as they naturally regain tone.
- **Lower Back Comfort**: Distributes weight and promotes upright posture while nursing and carrying your newborn.
- **Movement Confidence**: Provides reassurance during light walking, household tasks, and routine baby care.

---

## When Can You Start Wearing One?

Every recovery journey is unique. Always discuss your recovery plan with your doctor or midwife:

1. **Vaginal Birth**: Many mothers feel comfortable beginning light support within 2–4 days after delivery.
2. **Cesarean Section**: Ensure your incision site is healing properly. Most healthcare providers recommend waiting until post-op clearance (typically 1–2 weeks) before wearing snug wraps.

---

## Step-by-Step: How to Put On Your Belt

1. **Stand or lie flat** on a comfortable surface.
2. **Position the belt** across your lower back, aligning the wider section just above your hips.
3. **Bring the primary panels forward** and secure the hook-and-loop closure firmly across your lower abdomen.
4. **Adjust the side tension straps** to add customized firmness without restricting normal breathing.

> **Safety Tip**: The belt should feel like a supportive hug—never tight enough to cause pain, shortness of breath, or discomfort.

---

## Choosing the Right Fit for Warm Climates

When shopping in Nigeria, breathable mesh fabrics and adjustable fasteners are crucial to stay cool throughout the day.
    `,
    category: 'Postpartum Care',
    authorName: 'Pretos Touch Editorial',
    publishedAt: '2026-02-01T09:00:00Z',
    readingTimeMinutes: 4,
    featuredImage: {
      id: 'img-art-1',
      url: '/images/blog/postpartum-belt-guide.jpg',
      alt: 'Postpartum Belt Guide',
      sortOrder: 1,
    },
    seo: {
      title: 'How to Use a Postpartum Belt | Pretos Touch Guide',
      description:
        'Learn how and when to wear a postpartum support belt safely. Practical guide for new mothers in Nigeria.',
    },
  },
  {
    id: 'art-baby-nail-trimmer-guide',
    slug: 'baby-nail-care-practical-guide',
    title: 'Baby Nail Care: Electric Nail Trimmer vs Traditional Clippers',
    excerpt:
      'Trimming newborn nails can feel daunting. Discover why electric trimmers have become a parent favorite for gentle, tear-free baby grooming.',
    content: `
## The Newborn Nail Dilemma

Newborn babies are born with soft, paper-thin nails that grow remarkably fast. Because infants frequently rub their faces, keeping nails tidy helps prevent accidental scratches.

However, traditional metal clippers can feel intimidating with a wriggling infant.

---

## Why Electric Baby Nail Trimmers Are Changing Grooming

Electric nail trimmers use gentle rotating micro-cushioned filing heads rather than sharp metal blades.

### 1. Zero Cutting Risk
The file head gently buffs away excess nail length. If the rotating disc touches soft skin, it slows down automatically without pinching.

### 2. Quiet Operation for Naptime Trimming
Most electric trimmers operate under 35 decibels and feature a soft LED light, allowing parents to trim nails while baby is asleep.

### 3. Adapts as Baby Grows
Interchangeable grinding heads are color-coded by age:
- **0–3 Months**: Ultra-fine grain
- **4–11 Months**: Medium fine grain
- **12+ Months**: Toddler smoothing disc
- **Adult Heads**: Suitable for parents' manicures

---

## Best Practices for Safe Trimming

1. **Pick a calm moment**: Post-feeding or naptime is best.
2. **Hold baby's finger firmly but gently**: Support the pad of the finger.
3. **Angle at 45 degrees**: File smoothly along the natural curve of the nail.
4. **Keep it quick**: 15–30 seconds per hand is all it takes!
    `,
    category: 'Baby Care',
    authorName: 'Pretos Touch Care Team',
    publishedAt: '2026-02-10T11:00:00Z',
    readingTimeMinutes: 5,
    featuredImage: {
      id: 'img-art-2',
      url: '/images/blog/baby-nail-care.jpg',
      alt: 'Baby Nail Care Guide',
      sortOrder: 1,
    },
    seo: {
      title: 'Baby Nail Care & Electric Trimmer Guide | Pretos Touch',
      description:
        'Safe baby nail care tips and comparison between electric nail trimmers and clippers for new parents in Nigeria.',
    },
  },
  {
    id: 'art-period-comfort-tips',
    slug: 'ways-to-improve-period-comfort',
    title: 'Everyday Tips for Natural Menstrual Comfort & Relief',
    excerpt:
      'From soothing heat therapy to gentle movement, explore practical lifestyle habits to ease monthly discomfort.',
    content: `
## Understanding Monthly Discomfort

Menstrual cramps occur when the uterine muscles contract to shed their lining. While common, there are several gentle, non-invasive ways to soothe tension and feel more at ease during your cycle.

---

## 1. Targeted Warmth & Heat Therapy

Applying continuous gentle warmth (40°C–50°C) to the lower abdomen helps relax contracted pelvic muscles and promotes healthy blood flow. Portable wearable heating belts make it easy to enjoy soothing warmth while working or resting.

## 2. Stay Hydrated with Warm Teas

Drinking warm ginger tea, chamomile, or peppermint can ease bloating and provide comforting warmth from within.

## 3. Light Stretching & Pelvic Mobility

Gentle yoga poses like Child's Pose (Balasana) and Cat-Cow stretches relieve lower back pressure without straining your body.

## 4. Prioritize Rest & Relaxation

Give yourself permission to slow down, wear loose breathable clothing, and prioritize restorative sleep.
    `,
    category: "Women's Wellness",
    authorName: 'Pretos Touch Wellness',
    publishedAt: '2026-02-18T14:00:00Z',
    readingTimeMinutes: 4,
    featuredImage: {
      id: 'img-art-3',
      url: '/images/blog/menstrual-comfort.jpg',
      alt: 'Menstrual Comfort Guide',
      sortOrder: 1,
    },
    seo: {
      title: 'Everyday Tips for Menstrual Comfort | Pretos Touch',
      description:
        'Natural tips and practical habits to support monthly menstrual comfort and abdominal warmth.',
    },
  },
];

export const initialReviews: Review[] = [
  {
    id: 'rev-1',
    productId: 'prod-postpartum-belt',
    customerName: 'Amina O.',
    rating: 5,
    title: 'Super supportive and comfortable!',
    body: 'I started wearing this 10 days after delivery. The fabric is very breathable and gave me great back support while nursing.',
    verifiedPurchase: true,
    status: 'approved',
    createdAt: '2026-02-15T10:00:00Z',
  },
  {
    id: 'rev-2',
    productId: 'prod-baby-nail-trimmer',
    customerName: 'Chidinma E.',
    rating: 5,
    title: 'No more tears when trimming nails!',
    body: 'I was always terrified of using clippers on my 2-month-old. This trimmer is so quiet and safe—I can trim her nails while she sleeps.',
    verifiedPurchase: true,
    status: 'approved',
    createdAt: '2026-02-20T12:30:00Z',
  },
  {
    id: 'rev-3',
    productId: 'prod-menstrual-belt',
    customerName: 'Bolanle A.',
    rating: 5,
    title: 'A lifesaver for workday comfort',
    body: 'The heat kicks in within seconds. It fits under my dress easily and made my workday so much more manageable.',
    verifiedPurchase: true,
    status: 'approved',
    createdAt: '2026-02-24T16:00:00Z',
  },
  {
    id: 'rev-4',
    productId: 'prod-kiss-bra',
    customerName: 'Folake K.',
    rating: 5,
    title: 'Hands down the most comfortable bra',
    body: 'No wires poking, super soft fabric, and gives a very smooth silhouette under my t-shirts. Ordering another color right now.',
    verifiedPurchase: true,
    status: 'approved',
    createdAt: '2026-02-28T09:15:00Z',
  },
];
