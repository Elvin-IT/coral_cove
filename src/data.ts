import { Villa, DiningOutlet, Experience, Offer } from './types';

export const RESORT_IMAGES = {
  hero: '/src/assets/images/coral_cove_hero_1781759491817.jpg',
  overwaterBungalow: '/src/assets/images/coral_cove_bungalow_1781759509792.jpg',
  spa: '/src/assets/images/coral_cove_spa_1781759525624.jpg',
  beachfrontPoolVilla: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80',
  gardenVilla: 'https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?auto=format&fit=crop&w=1200&q=80',
  familyVilla: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
  mainRestaurant: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80',
  beachGrill: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
  sunsetBar: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=1200&q=80',
  diving: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
  snorkeling: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1200&q=80',
  sailing: 'https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=1200&q=80',
  sandbankPicnic: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
  stargazing: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&w=1200&q=80',
  weddingBeach: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1200&q=80',
  honeymoonBed: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
};

export const VILLAS: Villa[] = [
  {
    id: 'beachfront-pool',
    name: 'Beachfront Pool Villa',
    description: 'Walk straight from your master pavilion onto powdery white sand. Set in absolute privacy with a lush walled garden, private raw slate infinity plunge pool, and spacious open-concept daybed bale.',
    size: '185 sqm',
    capacity: '2 Adults',
    image: RESORT_IMAGES.beachfrontPoolVilla,
    startingPrice: '$1,250',
    highlights: ['Direct beach access', 'Private open-air salt-water plunge pool', 'Romantic outdoor coral stone rain shower'],
    features: [
      'King beachfront four-poster canopy bed',
      'Personal eco-host villa butler service',
      'Solar-powered high-efficiency silent air conditioning',
      'Organic coconut bathroom amenities',
      'Private terrace with handmade Swahili daybeds',
      'Curated minibar stocked with artisanal local drinks',
    ],
  },
  {
    id: 'over-water-bungalow',
    name: 'Over Water Bungalow',
    description: 'Suspended elegantly above the crystalline marine sanctuary. Watch reef life swim beneath your feet via tempered marine glass floors, and sleep to the gentle rhythmic breathing of the Zanzibar channel.',
    size: '160 sqm',
    capacity: '2 Adults',
    image: RESORT_IMAGES.overwaterBungalow,
    startingPrice: '$1,650',
    highlights: ['Lagoon access stairs', 'Glass observation floor panels', 'Hammocks strung over turquoise seawater'],
    features: [
      'Panoramic 180-degree ocean-facing bedroom',
      'Deep freestanding copper soaking tub',
      'Private wooden jetty with sunset viewing platform',
      'Biodegradable reef-safe skin care amenities',
      'Interactive room controls & passive natural ventilation',
      'Retractable stargazing sunroof',
    ],
  },
  {
    id: 'garden-villa',
    name: 'Secret Garden Sabi Villa',
    description: 'A sanctuary nested amongst high botanical palms, frangipani blossoms, and spice groves. Blends barefoot design with rich local woods, perfect for travelers seeking meditative seclusion.',
    size: '140 sqm',
    capacity: '2 Adults',
    image: RESORT_IMAGES.gardenVilla,
    startingPrice: '$950',
    highlights: ['Lush coconut grove envelope', 'Sunken stone outdoor bathtub', 'Handcrafted organic woven interior'],
    features: [
      'Spacious indoor-outdoor living pavilions',
      'Double vanity basins carved from local coastal granite',
      'Private hammock alcove',
      'Wellness meditation deck & organic yoga mats',
      'Zanzibar spice-scented room mist menu',
      'Complimentary beach cruiser bicycles',
    ],
  },
  {
    id: 'two-bedroom-family',
    name: 'Coral Cove Two Bedroom Family Villa',
    description: 'The ultimate multigenerational beachfront footprint. Two symmetric bedroom wings joined by a central dining pavilion, sprawling teak ocean observation decks, and a custom freshwater family infinity pool.',
    size: '340 sqm',
    capacity: '4 Adults & 2 Children',
    image: RESORT_IMAGES.familyVilla,
    startingPrice: '$2,400',
    highlights: ['Central social lounge pavilion', 'Spacious dual-level beachfront deck', 'Kid-friendly private wading pool'],
    features: [
      'Two oversized master master-suites with high vaulted ceilings',
      '24-hour custom family eco-host service',
      'In-villa private wellness pantry kitchen',
      'Collection of traditional Swahili board games',
      'Direct private access to the shallow sand beach',
      'Complimentary children\'s marine exploration kits & activities',
    ],
  },
];

export const DINING: DiningOutlet[] = [
  {
    id: 'lamu-ocean-hub',
    name: 'Lamu Ocean Hub',
    tagline: 'Ocean-to-table fine dining under vaulted Swahili thatch.',
    concept: 'Main Signature Restaurant',
    description: 'Set on high stilts capturing the ocean breeze, Lamu serves an evolving creative menu celebrating Zanzibar’s identity as the Spice Island. Every single ingredient is sourced from our organic mainland farm or caught sustainably within six miles of our shore by certified local fishermen.',
    signatureDish: 'Cardamom & Saffron Poached Rock Lobster with cassava crisp & wild hand-pressed coconut reduction.',
    hours: 'Breakfast 07:00 - 10:30 | Dinner 19:00 - 22:00',
    image: RESORT_IMAGES.mainRestaurant,
    menu: [
      {
        category: 'Starters',
        items: [
          { name: 'Lemongrass Mango Ceviche', description: 'Freshly caught red snapper, sweet local mango, lime cilantro, and island coconut reduction.', price: '$24' },
          { name: 'Charred Stone Town Octopus', description: 'Infused with Pemba cloves, smoked paprika purée, and pressed olive oil with sea asparagus.', price: '$28' },
        ],
      },
      {
        category: 'Main Courses',
        items: [
          { name: 'Kizimkazi Saffron Lobster', description: 'Lamu signature cardamom-infused main lobster, vanilla bean parsnip mash, coconut foam.', price: '$58' },
          { name: 'Spiced Swahili snapper in Banana Leaf', description: 'Slow-baked with local ginger, turmeric paste, sweet peppers, served with wild red rice.', price: '$42' },
          { name: 'Sultans Garden Tamarind Aubergine', description: 'Roasted baby aubergine, tamarind lacquer, local chickpeas, toasted high-coast sesame seeds.', price: '$34' },
        ],
      },
    ],
  },
  {
    id: 'manga-reef-grill',
    name: 'Manga Reef Grill',
    tagline: 'Barefoot wood-fire cooking directly on the sand.',
    concept: 'Relaxed Beachfront Grill',
    description: 'An informal beach dining experience located next to the tide pool. Watch chefs prepare the morning catch over local coconut-husk charcoal, infusing premium meats and ocean delicacies with smoky coastal aromas. Dine with your toes buried in soft sand.',
    signatureDish: 'Pemba Ginger Prawn Skewers with lime glaze & flame-charred sea bass.',
    hours: 'Lunch 12:00 - 15:30 | Evening Beach Barbecue 18:30 - 21:30',
    image: RESORT_IMAGES.beachGrill,
    menu: [
      {
        category: 'Ocean & Land',
        items: [
          { name: 'Zanzibar Reef Skewer', description: 'Reef shrimp, calamari, local snapper marinated in chili-garlic paste, roasted on woodfire.', price: '$35' },
          { name: 'Prime Mombasa Ribeye', description: 'Flame-seared over coconut charcoal, glazed with local spices, sea salt, baby beach potatoes.', price: '$48' },
          { name: 'Chilled Seafood Platter for Two', description: 'Local stone crabs, oysters, rock lobsters, and grilled mussels with three signature spicy dips.', price: '$95' },
        ],
      },
    ],
  },
  {
    id: 'the-dhow-lounge',
    name: 'The Dhow Sunset Lounge',
    tagline: 'Scenic mixology atop an ancient dhow jetty.',
    concept: 'Sunset Jetty Bar & Lounge',
    description: 'Suspended over deep water at the westernmost curve of our jetty. Built inside the frame of an authentic repurposed Swahili dhow vessel, this lounge offers signature cocktails curated around local botanicals, cold-pressed sugarcane, and clove bitters.',
    signatureDish: '"Coral Cove Elixir" - Hibiscus-infused gin, wild lemongrass nectar, and lime carbonation.',
    hours: '16:00 - 00:00 (Sunset Service 17:30 - 19:00)',
    image: RESORT_IMAGES.sunsetBar,
    menu: [
      {
        category: 'Signature Elixirs',
        items: [
          { name: 'Zanzibar Sunset Mule', description: 'Local spiced rum, Pemba island ginger extract, fresh lime, organic sugarcane syrup.', price: '$18' },
          { name: 'Jambiani Coconut Negroni', description: 'Coconut fat-washed campari, sweet vermouth, local craft dry gin.', price: '$19' },
          { name: 'Hibiscus Petal Spritz (Non-Alcoholic)', description: 'Chilled wild hibiscus floral tea, sparkling water, mint sprigs, lime zest.', price: '$12' },
        ],
      },
    ],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'dive-center',
    name: 'PADI Marine Sanctuary Reef Diving',
    category: 'water',
    description: 'Explore Coral Cove’s private marine-protected reef led by master PADI instructors. Swim alongside green sea turtles, spotted eagle rays, and vibrant kaleidoscopic coral drop-offs.',
    duration: '3 - 4 hours',
    bestTime: 'Morning (08:30)',
    image: RESORT_IMAGES.diving,
  },
  {
    id: 'sandbank-escape',
    name: 'Private Sandbank Castaway Picnic',
    category: 'romantic',
    description: 'Sail via traditional wooden dhow to a tide-born sandbank that vanishes dynamically at high tide. Enjoy a private seafood grill prepared under elegant linen sails with chilled champagne.',
    duration: 'Half Day',
    bestTime: 'Late Morning (10:30)',
    image: RESORT_IMAGES.sandbankPicnic,
  },
  {
    id: 'dhow-sailing',
    name: 'Classic Sunset Dhow Sailing',
    category: 'water',
    description: 'Feel the wind propel an hand-carved Zanzibar sailing boat into the golden sun. Live music from local masters playing classical Swahili instruments completes this atmospheric cruise.',
    duration: '2 hours',
    bestTime: 'Late Afternoon (16:45)',
    image: RESORT_IMAGES.sailing,
  },
  {
    id: 'snorkeling-safari',
    name: 'Guided Lagoon Snorkeling Safari',
    category: 'water',
    description: 'Directly off our jetty lies a shallow nursery reef. Our marine biologist will guide you through active coral transplant nurseries, explaining the local ocean restoration project.',
    duration: '1.5 hours',
    bestTime: 'Anytime',
    image: RESORT_IMAGES.snorkeling,
  },
  {
    id: 'stargazing',
    name: 'Ocean Jetty Nebula Stargazing',
    category: 'romantic',
    description: 'With zero light pollution, our private island boasts unparalleled views of the Southern Hemisphere sky. Relax on soft beds with high-end astronomical telescopes and expert astronomy guiding.',
    duration: '1 hour',
    bestTime: 'Night (21:30 - Midnight)',
    image: RESORT_IMAGES.stargazing,
  },
];

export const OFFERS: Offer[] = [
  {
    id: 'stay-5-pay-4',
    title: 'Slow Living: Stay 5, Pay 4',
    tagline: 'Spend longer in paradise. Enjoy one complimentary night on us with villa breakfast.',
    code: 'SLOW5PAY4',
    description: 'Give yourself permission to slip into our quiet rhythms. Book five consecutive nights in any private pool villa or overwater bungalow, and pay only for four. Includes daily a-la-carte breakfast, private return speedboat transfers, and complimentary sunset sail.',
    inclusions: [
      'Five nights for the price of four in luxury beachfront or over-water villas',
      'Daily curated breakfast at Lamu Ocean Hub',
      'Complimentary return private speedboat transfers from Zanzibar airport',
      'Private 1-hour sunset dhow sailing experience',
      'Daily morning yoga on our ocean platform',
    ],
    validUntil: 'December 20, 2026',
    image: RESORT_IMAGES.beachfrontPoolVilla,
  },
  {
    id: 'honeymoon-special',
    title: 'Private Island Honeymoon Special',
    tagline: 'An intimate escape designed to write your first chapter together.',
    code: 'COVEHONEY',
    description: 'Indulge in a week of blissful secluded luxury. We elevate your stay with romantic touches from candlelit dinners directly on the powdery surf to a dedicated couples massage pavilion ritual with native spices.',
    inclusions: [
      'Welcome champagne, native tropical fruit basket, and handpressed coconut truffles',
      'A private beachfront candlelit lobster dining experience under Zanzibar evening stars',
      '90-minute signature couples spice botanical massage at Coral Cove Spa',
      'Complimentary wedding photography session around the private island',
      'Retractable bed curtain floral setup and bath styling',
    ],
    validUntil: 'Ongoing Celebration Offer',
    image: RESORT_IMAGES.honeymoonBed,
  },
  {
    id: 'wellness-retreat',
    title: 'Wellness Retreat Week',
    tagline: 'Decompress, realign, and absorb the rejuvenating salt energy of Zanzibar.',
    code: 'RETREAT7',
    description: 'Restore complete inner peace with our structural wellness week. Designed for single travelers or couples seeking intensive rest, this offer features a nutrition-balanced dining itinerary, daily spa rituals, and meditation sessions.',
    inclusions: [
      'Daily private meditation, breathing therapy, and targeted Vinyasa yoga sessions',
      'Three personalized wellness consultation appointments with our resident holistic therapist',
      'Daily 60-minute spa treatments (Botanical scrub, hot stone massage, lymphatic facial)',
      'Custom organic ocean-to-table daily wellness menu planning',
      'Herbal infusion tea bar set up daily inside your villa',
    ],
    validUntil: 'October 30, 2026',
    image: RESORT_IMAGES.spa,
  },
];

export const SUSTAINABILITY_INFO = {
  philosophy: 'Coral Cove was built with a singular sacred philosophy: high-end hospitality should not only co-exist with pristine nature, but actively regenerate it. Our island runs independently with minimal footprint, protecting the Zanzibar channel for generations to come.',
  pillars: [
    {
      title: 'Solar Power Integration',
      description: 'The entire island operates 100% on a state-of-the-art hybrid micro-solar grid paired with premium lithium storage, giving silent, clean power to every villa and utility 24 hours a day.',
    },
    {
      title: 'Zero Single-Use Plastic',
      description: 'We are entirely single-use plastic-free. Water is continuously purified on-island at our reverse-osmosis glass bottling plant, and all bathroom and dining accessories use biodegradable organic bamboo or ceramics.',
    },
    {
      title: 'Coral Reef Transplantation',
      description: 'For every guest reservation, a portion of the nightly tariff directly funds our active on-site coral nursery. Our marine biologists transplant over 2,000 coral fragments each year to restore Kizimkazi’s natural barrier reef.',
    },
    {
      title: 'Zanzibar Local Community Partnership',
      description: 'Over 85% of our staff live in the coastal fishing communities of Zanzibar. We fund permanent English and hospitality learning courses, clean ocean advocacy workshops, and pay fair-trade living wages.',
    },
  ],
};
