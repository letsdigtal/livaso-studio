import { Product, ProductReview } from '../types';
import heroBottlesImg from '../assets/images/livso_hero_bottles_1788842081845.jpg';
import shampooBottleImg from '../assets/images/livso_shampoo_bottle_1788842141870.jpg';
import whatDrivesUsImg from '../assets/images/what_drives_us_woman_1788842114318.jpg';
import elizabethBlountImg from '../assets/images/elizabeth_blount_red_dress_1788842099060.jpg';
import ingredientsFlatlayImg from '../assets/images/skincare_ingredients_flatlay_1788842128029.jpg';

export const PRODUCTS: Product[] = [
  {
    id: 'livso-three-step-system',
    slug: 'three-step-system',
    name: 'The Three-Step System',
    subtitle: 'Moisturizing Pack: Shampoo, Conditioner & Scalp Lotion',
    size: '8.5 oz Shampoo + 8 oz Conditioner + 8.5 oz Lotion',
    price: 49.50,
    originalPrice: 55.00,
    isBestSeller: true,
    isBundle: true,
    badge: 'Save 10% + Free US Shipping',
    rating: 4.9,
    reviewCount: 1248,
    category: 'system',
    shortDescription: 'The clinically proven 3-step regimen formulated by Dr. Shari Hicks-Graham to calm dry, itchy scalp while deeply hydrating curls, coils, and waves.',
    description: 'Designed to work in perfect synergy, The LivSo Three-Step System brings together our Moisturizing Shampoo, Moisturizing Conditioner, and Moisturizing Scalp Lotion. In clinical trials, 97% of participants preferred LivSo over their regular dry hair and scalp treatments, with 91% seeing marked improvement in scalp health within just 4 weeks. Sulfate-free, non-stripping, and safe for color-treated and chemically relaxed hair.',
    primaryImage: heroBottlesImg,
    images: [
      heroBottlesImg,
      shampooBottleImg,
      ingredientsFlatlayImg,
      whatDrivesUsImg
    ],
    highlights: [
      'Clinically tested & dermatologist developed',
      'Gentle alpha-hydroxy acid (Glycolic Acid) exfoliation',
      'Zero harsh sulfates, parabens, mineral oils, or synthetic dyes',
      'Safe for all textures: 2A to 4C, locs, braids, and extensions',
      'Free US shipping automatically applied at checkout'
    ],
    keyIngredients: [
      {
        name: 'Glycolic Acid (AHA)',
        purpose: 'Scalp Desquamation',
        description: 'Micro-exfoliates dead skin cell buildup and flaking without abrasive physical scrubs.'
      },
      {
        name: 'Abyssinian Oil',
        purpose: 'Luster & Elasticity',
        description: 'Ultra-lightweight seed oil rich in erucic acid that seals moisture into dry hair cuticle without greasiness.'
      },
      {
        name: 'Hydrolyzed Oat Protein',
        purpose: 'Follicle Tensile Strength',
        description: 'Deeply penetrates the cortex to reinforce fragile strands against breakage during combing.'
      },
      {
        name: 'Ceramides & Willow Bark',
        purpose: 'Skin Barrier Repair',
        description: 'Restores the epidermal lipid layer to lock in hydration and soothe inflammatory itching.'
      }
    ],
    allIngredients: 'Shampoo: Water (Aqua), Sodium Lauroyl Methyl Isethionate, Cocamidopropyl Betaine, Sodium Cocoyl Isethionate, Glycolic Acid, Xylitol, Cocos Nucifera (Coconut) Oil, Glycerin, Hydrolyzed Oat Protein. Conditioner: Water, Cetearyl Alcohol, Crambe Abyssinica Seed Oil, Behentrimonium Methosulfate, Glycolic Acid, Silk Amino Acids, Panthenol. Lotion: Water, Caprylic/Capric Triglyceride, Ceramide NP, Salix Nigra (Willow) Bark Extract, Butyrospermum Parkii (Shea) Butter, Glycolic Acid.',
    howToUse: [
      'Step 1: Cleanse with Moisturizing Shampoo. Massage rich lather gently onto wet scalp with fingertips. Rinse thoroughly.',
      'Step 2: Condition with Moisturizing Conditioner. Distribute from roots to ends. Detangle gently with a wide-tooth comb. Leave in for 3-5 minutes, then rinse.',
      'Step 3: Hydrate with Moisturizing Scalp Lotion. Towel dry or section dry hair. Apply with the nozzle tip directly onto scalp. Gently massage in. Do not rinse out. Use 2-3 times weekly or as needed.'
    ],
    dermatologistTip: 'Traditional dandruff shampoos rely on zinc or coal tar that strip curls of vital natural oils. LivSo balances your scalp microbiome while feeding your curls the essential lipids they crave.',
    clinicalResults: [
      '97% preferred LivSo to other dry scalp treatments after 12 weeks',
      '91% showed visible reduction in scalp flaking and dryness in 4 weeks',
      '90% experienced immediate soothing relief from persistent itching'
    ],
    inStock: true
  },
  {
    id: 'livso-moisturizing-shampoo',
    slug: 'moisturizing-shampoo',
    name: 'Moisturizing Shampoo',
    subtitle: 'Gentle Sulfate-Free Scalp Cleanser',
    size: '8.5 fl. oz. / 250 ml',
    price: 19.00,
    originalPrice: undefined,
    isBestSeller: false,
    isBundle: false,
    badge: 'Step 1: Cleanse',
    rating: 4.8,
    reviewCount: 432,
    category: 'cleanse',
    stepNumber: 1,
    stepName: 'Cleanse',
    shortDescription: 'Cleanses the scalp of flakes and excess sebum without stripping your hair of precious natural oils. Gentle enough for frequent wash days.',
    description: 'Most scalp relief shampoos leave textured hair brittle, tangled, and dull. LivSo Moisturizing Shampoo is uniquely formulated by board-certified dermatologist Dr. Shari Hicks-Graham with glycolic acid to loosen dead skin flakes, xylitol to target yeast overgrowth, and coconut oil to protect the hair shaft during cleansing.',
    primaryImage: shampooBottleImg,
    images: [
      shampooBottleImg,
      heroBottlesImg,
      ingredientsFlatlayImg
    ],
    highlights: [
      '100% Sulfate-Free with a rich, decadent lather',
      'Glycolic Acid exfoliates clogged hair follicles',
      'Xylitol helps maintain a balanced scalp flora',
      'Leaves hair soft, hydrated, and ready for conditioning'
    ],
    keyIngredients: [
      {
        name: 'Xylitol',
        purpose: 'Fights Yeast & Flaking',
        description: 'Naturally derived sugar alcohol clinically shown to combat the Malassezia yeast responsible for dandruff and irritation.'
      },
      {
        name: 'Glycolic Acid',
        purpose: 'Alpha-Hydroxy Exfoliant',
        description: 'Gently dissolves sticky intercellular glue holding dry dead skin flakes to the scalp.'
      },
      {
        name: 'Coconut Oil Derivative',
        purpose: 'Cushioning Cleanser',
        description: 'Creates a barrier against moisture loss while effectively washing away dirt and residual styling products.'
      }
    ],
    allIngredients: 'Water (Aqua), Sodium Lauroyl Methyl Isethionate, Cocamidopropyl Betaine, Sodium Cocoyl Isethionate, Glycolic Acid, Xylitol, Cocos Nucifera (Coconut) Oil, Glycerin, Hydrolyzed Oat Protein, Polyquaternium-10, Phenoxyethanol, Ethylhexylglycerin, Fragrance (Parfum).',
    howToUse: [
      'Wet hair thoroughly with warm water.',
      'Dispense a quarter-sized amount into palms and distribute across scalp.',
      'Massage with fingertips (not fingernails) in circular motions for 60 seconds.',
      'Rinse thoroughly. Follow immediately with LivSo Moisturizing Conditioner.'
    ],
    dermatologistTip: 'Focus the lather directly on your scalp rather than rubbing the lengths of your hair. Let the suds rinse down your strands to cleanse them gently.',
    clinicalResults: [
      '94% reported scalp felt thoroughly refreshed without tightness',
      '89% noted easier detangling after washing'
    ],
    inStock: true
  },
  {
    id: 'livso-moisturizing-conditioner',
    slug: 'moisturizing-conditioner',
    name: 'Moisturizing Conditioner',
    subtitle: 'Nourishing Scalp & Strands Detangler',
    size: '8 fl. oz. / 237 ml',
    price: 18.00,
    originalPrice: undefined,
    isBestSeller: false,
    isBundle: false,
    badge: 'Step 2: Condition',
    rating: 4.9,
    reviewCount: 388,
    category: 'condition',
    stepNumber: 2,
    stepName: 'Condition',
    shortDescription: 'Provides superior slip, detangling, and scalp conditioning with abyssinian oil, hydrolyzed oat protein, and silk extract.',
    description: 'Formulated to treat both scalp and hair simultaneously. While traditional conditioners are kept away from the roots out of fear of buildup, LivSo Moisturizing Conditioner is designed with skin-friendly lipids and micro-exfoliants to nourish the scalp while melting away knots and strengthening every strand.',
    primaryImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=85',
    images: [
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1608248597359-5b7218683e39?auto=format&fit=crop&w=1000&q=85'
    ],
    highlights: [
      'Exceptional slip for fast, pain-free wet detangling',
      'Abyssinian oil imparts brilliant natural sheen',
      'Hydrolyzed oat protein reinforces weak strands',
      'Safe to apply directly to the scalp and hair roots'
    ],
    keyIngredients: [
      {
        name: 'Abyssinian Oil',
        purpose: 'Non-Greasy Conditioning',
        description: 'Mimics natural sebum to lubricate the cuticles and prevent moisture evaporation.'
      },
      {
        name: 'Hydrolyzed Oat Protein',
        purpose: 'Tensile Strength',
        description: 'Improves strand elasticity and reduces breakage from styling and thermal tools.'
      },
      {
        name: 'Silk Amino Acids',
        purpose: 'Cuticle Smoothing',
        description: 'Binds moisture to the hair fiber, creating a soft, touchable texture.'
      }
    ],
    allIngredients: 'Water (Aqua), Cetearyl Alcohol, Crambe Abyssinica Seed Oil, Behentrimonium Methosulfate, Glycolic Acid, Silk Amino Acids, Hydrolyzed Oat Protein, Panthenol, Glycerin, Cetyl Alcohol, Phenoxyethanol, Ethylhexylglycerin, Fragrance (Parfum).',
    howToUse: [
      'After cleansing with LivSo Shampoo, apply liberally from roots to tips.',
      'Gently work through hair using a wide-tooth comb or fingers to detangle.',
      'Leave on for 3 to 5 minutes to allow active ingredients to penetrate the scalp and follicle.',
      'Rinse thoroughly with cool to lukewarm water.'
    ],
    dermatologistTip: 'Yes, you CAN put this on your scalp! The formula is non-comedogenic and specifically formulated to calm follicular irritation.',
    clinicalResults: [
      '96% noticed less hair breakage during detangling',
      '92% noted enhanced curl definition and shine'
    ],
    inStock: true
  },
  {
    id: 'livso-moisturizing-lotion',
    slug: 'moisturizing-lotion',
    name: 'Moisturizing Scalp Lotion',
    subtitle: 'Targeted Leave-On Scalp Hydrator',
    size: '8.5 fl. oz. / 250 ml',
    price: 18.00,
    originalPrice: undefined,
    isBestSeller: true,
    isBundle: false,
    badge: 'Step 3: Hydrate (Best Seller)',
    rating: 4.9,
    reviewCount: 512,
    category: 'hydrate',
    stepNumber: 3,
    stepName: 'Hydrate',
    shortDescription: 'A lightweight, leave-in scalp treatment with precision applicator nozzle that delivers rapid relief from itching, tightness, and flakes between wash days.',
    description: 'The star of the LivSo system. This targeted leave-on lotion absorbs completely within seconds without leaving hair greasy or weighed down. Packed with skin-replenishing ceramides, willow bark extract, shea butter, and coconut oil, it protects the scalp barrier between wash days and works beautifully with protective styles, braids, twists, and weaves.',
    primaryImage: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=1000&q=85',
    images: [
      'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=85'
    ],
    highlights: [
      'Pinpoint nozzle tip for precise scalp application between parts',
      'Absorbs instantly without greasy residue or film',
      'Relieves intense itching and flaky tightness within minutes',
      'Ideal for protective styles (braids, locs, wigs, and weaves)'
    ],
    keyIngredients: [
      {
        name: 'Ceramide NP',
        purpose: 'Barrier Lipid Restorer',
        description: 'Crucial skin-identical lipid that repairs cellular cohesion on compromised scalp tissue.'
      },
      {
        name: 'Willow Bark Extract',
        purpose: 'Natural Salicin Soother',
        description: 'Calms redness, irritation, and inflammation while gently clearing cellular debris.'
      },
      {
        name: 'Shea Butter & Coconut Oil',
        purpose: 'Moisture Retention',
        description: 'Softens dry patches and shields against environmental moisture loss.'
      }
    ],
    allIngredients: 'Water (Aqua), Caprylic/Capric Triglyceride, Glycerin, Ceramide NP, Salix Nigra (Willow) Bark Extract, Butyrospermum Parkii (Shea) Butter, Cocos Nucifera (Coconut) Oil, Glycolic Acid, Cetearyl Olivate, Sorbitan Olivate, Xanthan Gum, Phenoxyethanol, Fragrance (Parfum).',
    howToUse: [
      'Part hair into sections to expose the scalp.',
      'Use the pointed nozzle to apply a thin ribbon of lotion directly to the scalp.',
      'Gently massage in with fingertips until fully absorbed. Do not rinse.',
      'Use on damp hair after washing, or onto dry scalp 2-3 times per week as needed for instant relief.'
    ],
    dermatologistTip: 'Keep this on your nightstand. If you feel a sudden urge to scratch your scalp, apply a drop of lotion instead of scratching, which damages hair follicles.',
    clinicalResults: [
      '98% felt immediate itch relief upon application',
      '95% saw visible elimination of dry flakes in 2 weeks'
    ],
    inStock: true
  },
  {
    id: 'livso-discovery-trial-pack',
    slug: 'discovery-trial-pack',
    name: 'Discovery Trial Pack',
    subtitle: 'Travel-Ready 3-Step Sachet System',
    size: '3 x 1.0 oz Deluxe Samples',
    price: 6.00,
    originalPrice: 12.00,
    isBestSeller: false,
    isBundle: true,
    badge: 'Try Before You Commit',
    rating: 4.7,
    reviewCount: 184,
    category: 'system',
    shortDescription: 'Experience the LivSo transformation with generous travel-sized samples of our Shampoo, Conditioner, and Scalp Lotion.',
    description: 'Curious about dermatologist-formulated scalp care? The Discovery Trial Pack gives you 2-3 full wash cycles to experience how LivSo soothes the scalp while leaving textured hair supple and defined. Perfect for travel or introducing a friend to real scalp care.',
    primaryImage: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=1000&q=85',
    images: [
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1000&q=85'
    ],
    highlights: [
      'Includes Shampoo, Conditioner & Scalp Lotion',
      'TSA-approved travel sizes (1.0 oz each)',
      'Enough for 2-3 full wash routines',
      'Includes $6 coupon toward full-sized 3-Step System'
    ],
    keyIngredients: [
      {
        name: 'The Full LivSo Botanical Complex',
        purpose: 'Comprehensive Regimen',
        description: 'Contains all clinically active concentrations of Glycolic Acid, Xylitol, Ceramides, and Abyssinian Oil.'
      }
    ],
    allIngredients: 'See individual product listings for complete ingredient profiles.',
    howToUse: [
      'Follow the 3-step routine: Wash with Shampoo, detangle with Conditioner, and apply Scalp Lotion to parted sections.'
    ],
    dermatologistTip: 'Use for two consecutive wash cycles to see the initial calming of scalp dryness and flakes.',
    clinicalResults: [
      '93% of trial users upgraded to the full-size 3-Step System'
    ],
    inStock: true
  },
  {
    id: 'livso-scalp-massager-brush',
    slug: 'scalp-massager-brush',
    name: 'Exfoliating Scalp Massager',
    subtitle: 'Soft Silicone Stimulation Brush',
    size: 'Ergonomic Palm Grip',
    price: 12.00,
    originalPrice: 15.00,
    isBestSeller: false,
    isBundle: false,
    badge: 'Cart Favorite',
    rating: 4.9,
    reviewCount: 295,
    category: 'accessory',
    shortDescription: 'Flexible silicone tips gently stimulate circulation, loosen stubborn flaking, and work LivSo shampoo into a rich, therapeutic lather.',
    description: 'Enhance your wash day with our custom silicone scalp massager. Designed to fit comfortably in the palm of your hand, the gentle conical bristles increase blood flow to hair follicles, clear product residue without tangling curly or coily hair, and provide a spa-like massage.',
    primaryImage: 'https://images.unsplash.com/photo-1512290900672-1f496739618a?auto=format&fit=crop&w=1000&q=85',
    images: [
      'https://images.unsplash.com/photo-1512290900672-1f496739618a?auto=format&fit=crop&w=1000&q=85'
    ],
    highlights: [
      'Ultra-soft medical-grade silicone bristles',
      'Won’t snag or pull kinky, curly, or fine hair',
      'Ergonomic non-slip palm handle',
      'Waterproof & easy to clean'
    ],
    keyIngredients: [
      {
        name: '100% Medical-Grade Silicone',
        purpose: 'Bacterial Resistance',
        description: 'Non-porous, hypoallergenic, and gentle on sensitive or inflamed scalps.'
      }
    ],
    allIngredients: '100% Medical-Grade Silicone, BPA Free.',
    howToUse: [
      'Apply LivSo Moisturizing Shampoo to wet hair.',
      'Hold the massager in your palm and press the tips gently against your scalp.',
      'Move in small, circular motions. Do not scrub wildly to prevent tangling.',
      'Rinse thoroughly.'
    ],
    dermatologistTip: 'Light pressure is all that is required. Let the gentle silicone tips do the work without scratching your delicate skin.',
    clinicalResults: [
      '98% felt deeper scalp cleansing compared to fingertips alone'
    ],
    inStock: true
  }
];

export const REVIEWS: ProductReview[] = [
  {
    id: 'rev-1',
    author: 'Danielle M.',
    rating: 5,
    date: 'August 14, 2026',
    title: 'Finally, real relief without sacrificing my 4C coils!',
    comment: 'I have suffered from severe flaky scalp and eczema for over 8 years. Every prescription shampoo turned my coils into dry straw that snapped off. My dermatologist recommended LivSo and it has completely changed my life. Within three washes the itching stopped completely, and my hair feels so soft and hydrated.',
    verified: true,
    hairType: 'Type 4C Coily',
    recommended: true
  },
  {
    id: 'rev-2',
    author: 'Marcus T.',
    rating: 5,
    date: 'July 28, 2026',
    title: 'The Scalp Lotion is liquid gold for locs',
    comment: 'Wearing locs means I can’t wash my hair every day. When my scalp used to itch, I would scratch until it bled. This lotion with the nozzle applicator reaches directly to the scalp without leaving any white buildup or residue in my locs. It soothes the itch instantly. Worth every penny.',
    verified: true,
    hairType: 'Locs & Protective Styles',
    recommended: true
  },
  {
    id: 'rev-3',
    author: 'Sophia R.',
    rating: 5,
    date: 'July 11, 2026',
    title: '97% preference claim is 100% accurate',
    comment: 'The 3-Step pack is the best investment I’ve made in my hair care. The shampoo lathers like a dream without sulfates, the conditioner detangles in 2 minutes flat, and the lotion keeps my scalp calm between weekly washes. My hair stylist asked me what I changed because my scalp was so clear!',
    verified: true,
    hairType: 'Type 3B Curly',
    recommended: true
  },
  {
    id: 'rev-4',
    author: 'Aaliyah K.',
    rating: 5,
    date: 'June 29, 2026',
    title: 'Dr. Shari understands our hair texture',
    comment: 'It is so rare to find a dermatologist who truly understands textured kinky hair and doesn’t just tell you to wash your hair every day with coal tar. You can feel the clinical thoughtfulness in every bottle. My flakes are gone and my curls are thriving.',
    verified: true,
    hairType: 'Type 4A Kinky',
    recommended: true
  },
  {
    id: 'rev-5',
    author: 'Jessica P.',
    rating: 5,
    date: 'June 03, 2026',
    title: 'Life saver during winter months',
    comment: 'I get extreme dry scalp during the fall and winter. The LivSo system is the only thing that calms the burning and tightness. The scent is subtle, clean, and fresh without lingering heavily.',
    verified: true,
    hairType: 'Type 3A Wavy-Curly',
    recommended: true
  },
  {
    id: 'rev-6',
    author: 'Keisha B.',
    rating: 5,
    date: 'May 19, 2026',
    title: 'Saved my braid styles from itchy disaster',
    comment: 'Whenever I got knotless box braids, week 2 would always bring unbearable itching. Now I apply the LivSo lotion along the parts 2x a week and I have zero itch, zero irritation, and zero flaking along the hairline. A staple forever.',
    verified: true,
    hairType: 'Box Braids / Protective',
    recommended: true
  }
];

export const PRESS_FEATURES = [
  {
    publication: 'ESSENCE',
    quote: 'A breakthrough scalp care system created by a Black dermatologist that prioritizes textured hair moisture.',
    badge: 'Essence Best in Hair Award'
  },
  {
    publication: 'ALLURE',
    quote: 'Finally, an anti-flake routine that doesn’t leave curls parched, stiff, or stripped.',
    badge: 'Best of Scalp Care'
  },
  {
    publication: 'BYRDIE',
    quote: 'The glycolic acid and ceramide formulation delivers real clinical results you feel on contact.',
    badge: 'Editor Tested & Approved'
  },
  {
    publication: 'REFINERY29',
    quote: 'The holy grail for sensitive scalps and protective style wearers who crave lasting moisture.',
    badge: 'Beauty Innovator Feature'
  },
  {
    publication: 'ELLE',
    quote: 'Dr. Shari Hicks-Graham has solved one of the most frustrating dilemmas in textured hair dermatology.',
    badge: 'Dermatologist Pick'
  }
];

export const CLINICAL_STATS = [
  {
    percentage: '97%',
    metric: 'Preferred LivSo over competitor dry scalp solutions',
    context: 'In an independent 12-week clinical study of diverse hair textures.'
  },
  {
    percentage: '91%',
    metric: 'Demonstrated marked scalp health improvement',
    context: 'Verified reduction in erythema, flaking, and follicular scaling in just 4 weeks.'
  },
  {
    percentage: '90%',
    metric: 'Felt immediate soothing relief from persistent itch',
    context: 'Reported after their very first complete 3-step wash session.'
  },
  {
    percentage: '0%',
    metric: 'Harsh sulfates, parabens, or heavy waxes',
    context: 'Non-comedogenic, cruelty-free, and safe for color-treated or relaxed hair.'
  }
];

export const FAQS = [
  {
    question: 'How is LivSo different from other anti-dandruff or dry scalp shampoos?',
    answer: 'Most conventional dandruff shampoos are formulated for straight, oily hair and use harsh active ingredients (such as zinc pyrithione, selenium sulfide, or coal tar) in high-stripping surfactant bases. These wash away your scalp’s natural sebum and leave curly or coily hair extremely dry, tangled, and prone to breakage. LivSo was created by Dr. Shari Hicks-Graham, a board-certified dermatologist, specifically to exfoliate and soothe the scalp using glycolic acid, ceramides, and xylitol, while bathing textured hair in abyssinian oil and oat protein for intense moisture and slip.'
  },
  {
    question: 'How often should I use the 3-step system?',
    answer: 'We recommend washing with the Moisturizing Shampoo and Moisturizing Conditioner once a week (or according to your personal wash routine). The Moisturizing Scalp Lotion can be applied onto damp scalp right after washing, and also 2 to 3 times during the week on dry hair—especially along parted sections or protective styles—for continuous itch relief and hydration.'
  },
  {
    question: 'Can I use LivSo on color-treated, chemically relaxed, or keratin-treated hair?',
    answer: 'Yes! All LivSo formulas are sulfate-free, pH-balanced, and gentle enough for chemically processed, color-treated, bleached, and keratin-treated hair. The rich emollients protect hair fibers from color fade and thermal damage.'
  },
  {
    question: 'Is the Scalp Lotion safe for braids, locs, weaves, and protective styles?',
    answer: 'Absolutely. In fact, protective style wearers are some of our most passionate fans. The pinpoint applicator nozzle allows you to dispense the lightweight lotion directly to exposed scalp parts between tracks and braids without disturbing your style or leaving white residue.'
  },
  {
    question: 'What is your shipping and return policy?',
    answer: 'We offer Free Standard Shipping across the contiguous US on all orders over $49 (including the 3-Step System!). Orders are processed within 1-2 business days. If you are not completely satisfied with your LivSo products within 30 days of delivery, contact our customer care team for a hassle-free refund or exchange.'
  },
  {
    question: 'How does the Subscribe & Save program work?',
    answer: 'When you select Subscribe & Save on any product, you receive an immediate 20% discount on every recurring order. You can choose delivery every 4, 8, or 12 weeks. You can easily pause, skip, modify, or cancel your subscription at any time with zero penalty from your account dashboard.'
  }
];
