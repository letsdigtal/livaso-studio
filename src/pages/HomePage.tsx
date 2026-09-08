import React, { useState } from 'react';
import { Play, ArrowRight, ChevronLeft, ChevronRight, X, Droplets, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';

import heroBottlesImg from '../assets/images/livso_hero_bottles_1788842081845.jpg';
import heroBottlesIsolatedImg from '../assets/images/hero_bottles_isolated_1788844575272.jpg';
import shampooBottleImg from '../assets/images/livso_shampoo_bottle_1788842141870.jpg';
import whatDrivesUsImg from '../assets/images/what_drives_us_woman_1788842114318.jpg';
import elizabethBlountImg from '../assets/images/elizabeth_blount_red_dress_1788842099060.jpg';
import ingredientsFlatlayImg from '../assets/images/skincare_ingredients_flatlay_1788842128029.jpg';

export const HomePage: React.FC = () => {
  const { addToCart, navigateToProduct, setActivePage } = useCart();

  const [activeStep, setActiveStep] = useState<number>(1);
  const [activePressQuote, setActivePressQuote] = useState<number>(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState<boolean>(false);
  const [isSampleModalOpen, setIsSampleModalOpen] = useState<boolean>(false);
  const [newsletterEmail, setNewsletterEmail] = useState<string>('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState<boolean>(false);

  const stepProducts = [
    {
      num: 1,
      title: 'Moisturizing Shampoo',
      product: PRODUCTS[1],
      description:
        'LivSo Moisturizing Shampoo is packed with specialized ingredients formulated to reduce dryness, flaking, and itching. Its rich, fresh-smelling lather with hints of lemongrass leaves hair feeling supremely cleansed and moisturized. The sulfate-free formula effectively separates oil from your hair while maintaining essential qualities so that hair looks and feels healthy and nourished.'
    },
    {
      num: 2,
      title: 'Moisturizing Conditioner',
      product: PRODUCTS[2],
      description:
        'LivSo Moisturizing Conditioner is formulated to replenish vital moisture, smooth the hair cuticle, and detangle textured curls effortlessly. Hydrolyzed oat protein and abyssinian oil nourish strands from follicle to tip, leaving coils supple, elastic, and protected against breakage.'
    },
    {
      num: 3,
      title: 'Moisturizing Scalp Lotion',
      product: PRODUCTS[3],
      description:
        'LivSo Moisturizing Scalp Lotion is our hero leave-on treatment engineered with ceramide NP, glycolic acid, and soothing botanical extracts. The targeted nozzle applicator delivers non-greasy, fast-absorbing hydration right to the scalp between wash days, so you feel relief on contact without disturbing your protective styles.'
    }
  ];

  const currentStepData = stepProducts[activeStep - 1];

  const pressQuotes = [
    {
      quote: '“A revolutionary new product line”',
      outlet: 'ESSENCE',
      linkText: 'READ FULL ARTICLE'
    },
    {
      quote: '“The best scalp treatment for protective styles and type 4 hair.”',
      outlet: 'ALLURE',
      linkText: 'READ FULL ARTICLE'
    },
    {
      quote: '“A game-changing dermatologist formulation that soothes flakes without stripping coils.”',
      outlet: 'BYRDIE',
      linkText: 'READ FULL ARTICLE'
    },
    {
      quote: '“Finally, real clinical relief engineered specifically for textured hair.”',
      outlet: 'STRATEGIST',
      linkText: 'READ FULL ARTICLE'
    }
  ];

  const pressLogos = [
    { name: 'BOSSIP', style: 'font-extrabold italic tracking-tighter text-xl' },
    { name: 'ATLANTA BLACK STAR', style: 'font-serif tracking-widest text-xs uppercase' },
    { name: 'tress', style: 'font-serif lowercase italic text-2xl font-normal' },
    { name: 'ESSENCE', style: 'font-sans font-black tracking-widest text-xl' },
    { name: 'STRATEGIST', style: 'font-serif tracking-widest text-xs uppercase font-bold' }
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
        setNewsletterSubscribed(false);
      }, 3500);
    }
  };

  const sampleProduct = {
    id: 'sample-sachet-2',
    name: 'LivSo 3-Step Discovery Sample Kit',
    slug: 'discovery-sample-sachet',
    category: 'sample',
    price: 2.00,
    subtitle: 'Shampoo, Conditioner & Lotion Sachets',
    size: '3 x 10 ml',
    rating: 4.9,
    reviewCount: 382,
    primaryImage: shampooBottleImg,
    images: [shampooBottleImg],
    description: 'Experience Dr. Shari’s dermatologist-formulated scalp routine with a 3-step sample kit delivered straight to your door.',
    shortDescription: 'Deluxe sample kit of Shampoo, Conditioner, and Scalp Lotion.',
    keyIngredients: [],
    howToUse: ['Massage shampoo into scalp', 'Apply conditioner to ends', 'Apply lotion to parts'],
    dermatologistTip: 'Use during your next wash day to experience zero-strip moisture.',
    allIngredients: 'Water, Glycolic Acid, Ceramide NP, Abyssinian Oil.',
    inStock: true
  };

  return (
    <div className="w-full">
      {/* 1. HERO SECTION: EXPERTLY MADE, PERFECTLY YOU */}
      <section className="bg-[#97b2a8] text-white pt-10 pb-16 sm:pt-14 sm:pb-24 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">
          {/* Main Title */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-white tracking-tight leading-[1.12]">
            Expertly Made,<br />
            Perfectly You
          </h1>

          {/* Hero Bottles Standalone (Background Removed) */}
          <div className="relative mx-auto max-w-2xl py-2 flex items-center justify-center">
            <img
              src={heroBottlesIsolatedImg}
              alt="LivSo Moisturizing Shampoo, Scalp Lotion, and Conditioner bottles"
              className="w-full h-auto object-contain max-h-[460px] mx-auto filter drop-shadow-[0_16px_24px_rgba(20,40,30,0.2)]"
              style={{ mixBlendMode: 'multiply' }}
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Subtext Paragraph */}
          <div className="max-w-3xl mx-auto pt-4">
            <p className="text-sm sm:text-base md:text-lg text-white/95 leading-relaxed font-normal">
              Handpicked ingredients by a Board-Certified Dermatologist alleviate scalp dryness and itching. Our formulas nourish and moisturize your naturally textured kinky, curly, or wavy hair from the root to the tip. The LivSo Moisturizing Shampoo, Conditioner, and Scalp Lotion fit seamlessly into your scalp and hair care routine.
            </p>
          </div>
        </div>
      </section>

      {/* 2. STEP-BY-STEP PRODUCT SHOWCASE (WAVY LINES BACKGROUND) */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#e9f2ee] overflow-hidden">
        {/* Repeating Horizontal Wavy Lines Background SVG */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='160' height='32' viewBox='0 0 160 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 16 Q40 0 80 16 T160 16' fill='none' stroke='%2391b1a5' stroke-width='1.5'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}
        />

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Left Water Droplet Badge */}
          <div className="absolute left-0 top-6 sm:top-12 z-20">
            <button
              onClick={() => setIsSampleModalOpen(true)}
              className="group flex items-center space-x-2 text-[11px] sm:text-xs tracking-widest uppercase font-bold text-[#2e473e] hover:text-[#486358] transition-transform hover:scale-105"
            >
              <div className="w-8 h-8 rounded-full border-2 border-[#486358] flex items-center justify-center bg-white/70 shadow-xs">
                <Droplets className="w-4 h-4 text-[#486358] fill-[#486358]" />
              </div>
              <span className="hidden sm:inline">TRY A $2 SAMPLE!</span>
            </button>
          </div>

          {/* Product Presentation Grid */}
          <div className="flex flex-col items-center text-center space-y-6">
            {/* Center Product Image with Circular "SHOP NOW →" Button */}
            <div className="relative max-w-xs sm:max-w-sm mx-auto">
              <img
                src={shampooBottleImg}
                alt={currentStepData.title}
                className="w-56 sm:w-72 h-auto object-contain mx-auto drop-shadow-xl"
                referrerPolicy="no-referrer"
              />

              {/* Circular SHOP NOW Button hovering near the bottle */}
              <button
                onClick={() => navigateToProduct(currentStepData.product.slug)}
                className="absolute -top-4 -right-4 sm:top-2 sm:-right-12 w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-[#2e473e] text-[#2e473e] hover:bg-[#2e473e] hover:text-white transition-all flex flex-col items-center justify-center text-[10px] sm:text-[11px] font-bold tracking-widest uppercase shadow-sm group bg-white/40 backdrop-blur-xs"
              >
                <span>SHOP</span>
                <span className="flex items-center space-x-0.5">
                  <span>NOW</span>
                  <span className="text-xs group-hover:translate-x-0.5 transition-transform">→</span>
                </span>
              </button>
            </div>

            {/* Big Serif Product Name */}
            <div className="space-y-4 max-w-2xl mx-auto">
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#1F1B18] font-normal tracking-tight">
                {currentStepData.title}
              </h2>

              {/* Interactive Step Switcher (1  2  3) */}
              <div className="flex items-center justify-center space-x-12 py-2 text-sm sm:text-base font-semibold text-[#667d73]">
                {[1, 2, 3].map((stepNum) => (
                  <button
                    key={stepNum}
                    onClick={() => setActiveStep(stepNum)}
                    className={`transition-all pb-1 ${
                      activeStep === stepNum
                        ? 'text-[#1F1B18] font-bold border-b-2 border-[#2e473e]'
                        : 'text-[#667d73] hover:text-[#1F1B18]'
                    }`}
                  >
                    {stepNum}
                  </button>
                ))}
              </div>

              {/* Product Description */}
              <p className="text-xs sm:text-sm md:text-base text-[#3d5349] leading-relaxed max-w-xl mx-auto font-normal">
                {currentStepData.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. "WHAT DRIVES US" FULL-WIDTH PHOTOGRAPHIC BANNER */}
      <section className="relative min-h-[600px] sm:min-h-[700px] flex items-center justify-center text-center text-white px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={whatDrivesUsImg}
            alt="Smiling African American woman with natural curls"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[#1f2b26]/50 backdrop-brightness-95" />
        </div>

        {/* Center Content Overlay */}
        <div className="relative z-10 max-w-3xl mx-auto space-y-6 sm:space-y-8">
          <h3 className="text-xs sm:text-sm tracking-[0.25em] uppercase font-semibold text-white/90">
            WHAT DRIVES US
          </h3>

          {/* Video Play Button */}
          <button
            onClick={() => setIsVideoModalOpen(true)}
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-xs border border-white/60 flex items-center justify-center mx-auto transition-transform hover:scale-110 shadow-lg text-white"
            aria-label="Play video"
          >
            <Play className="w-6 h-6 fill-current translate-x-0.5" />
          </button>

          {/* Text Statement */}
          <div className="space-y-4 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-white/95 leading-relaxed font-normal">
            <p>
              For years, we watched people with kinky, curly hair lose hope. They felt trapped by their dry scalp, damaged hair, and a belief that inconvenient treatments, or ineffective and hazardous products were their best option. We set out to find a better way. A simple system that promotes healthy, naturally beautiful hair from the source so people with kinks and curls can live life without boundaries.
            </p>
            <p className="font-bold text-white tracking-wide text-base sm:text-lg">
              live life without boundaries.
            </p>
          </div>

          {/* Circular LEARN MORE Button */}
          <div className="pt-4">
            <button
              onClick={() => setActivePage('story')}
              className="w-24 h-24 rounded-full border border-white text-white hover:bg-white hover:text-[#1F1B18] transition-all flex flex-col items-center justify-center text-xs font-bold tracking-widest uppercase mx-auto group shadow-md"
            >
              <span>LEARN</span>
              <span className="flex items-center space-x-0.5">
                <span>MORE</span>
                <span className="text-xs group-hover:translate-x-0.5 transition-transform">→</span>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* 4. TESTIMONIAL SECTION: ELIZABETH BLOUNT */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#e9f2ee] overflow-hidden text-center">
        {/* Repeating Horizontal Wavy Lines Background SVG */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='160' height='32' viewBox='0 0 160 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 16 Q40 0 80 16 T160 16' fill='none' stroke='%2391b1a5' stroke-width='1.5'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}
        />

        <div className="max-w-4xl mx-auto relative z-10 space-y-6">
          {/* Main Serif Quote */}
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#1F1B18] font-normal tracking-tight">
            “I feel like LivSo helped me love my hair again.”
          </h2>

          {/* Full-Length Cutout of Elizabeth Blount */}
          <div className="relative mx-auto max-w-xs sm:max-w-sm pt-2">
            <img
              src={elizabethBlountImg}
              alt="Elizabeth Blount smiling in a red sundress"
              className="w-56 sm:w-64 h-auto object-contain mx-auto drop-shadow-xl"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Attribution */}
          <p className="text-sm sm:text-base font-medium text-[#2e473e] tracking-wide">
            — Elizabeth Blount
          </p>
        </div>
      </section>

      {/* 5. "FORMULATED WITH YOUR SPECIFIC NEEDS IN MIND" INGREDIENTS BANNER */}
      <section className="relative min-h-[580px] sm:min-h-[660px] flex items-center justify-center text-center text-white px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
        {/* Background Image: Flatlay of cosmetic oils and ingredients */}
        <div className="absolute inset-0 z-0">
          <img
            src={ingredientsFlatlayImg}
            alt="Natural skincare oils, cotton swabs, and botanical ingredients"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[#1a2520]/55 backdrop-brightness-95" />
        </div>

        {/* Centered Content */}
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <div className="space-y-2">
            <h3 className="text-xs sm:text-sm tracking-[0.25em] uppercase font-semibold text-white/90">
              FORMULATED WITH YOUR SPECIFIC NEEDS IN MIND
            </h3>
            <div className="flex justify-center">
              <Droplets className="w-4 h-4 text-[#8ec5b6] fill-[#8ec5b6]" />
            </div>
          </div>

          <div className="max-w-2xl mx-auto text-xs sm:text-sm md:text-base text-white/95 leading-relaxed font-normal space-y-4">
            <p>
              Products for kinky, curly hair tend to be made with heavy additives. That’s due to a misplaced notion that textured hair requires extreme ingredients. But independent clinical studies of our products have proven that beautifully hydrated hair isn’t about choosing what’s strongest, it’s about choosing what’s right. After only 4 weeks, 84% of people in our study reported that the system worked better than what they had used previously. By week 12, the system worked better than what they had used previously.
            </p>
            <p className="font-bold text-white">
              By week 12, 97% of people agreed with this notion.
            </p>
          </div>

          {/* Circular LEARN MORE Button */}
          <div className="pt-2">
            <button
              onClick={() => setActivePage('science')}
              className="w-24 h-24 rounded-full border border-white text-white hover:bg-white hover:text-[#1F1B18] transition-all flex flex-col items-center justify-center text-xs font-bold tracking-widest uppercase mx-auto group shadow-md"
            >
              <span>LEARN</span>
              <span className="flex items-center space-x-0.5">
                <span>MORE</span>
                <span className="text-xs group-hover:translate-x-0.5 transition-transform">→</span>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* 6. "IN THE PRESS" SECTION */}
      <section className="bg-[#97b2a8] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-center border-t border-[#8aa59b]">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Label with divider lines */}
          <div className="flex items-center justify-center space-x-4">
            <div className="w-16 sm:w-24 h-px bg-white/40" />
            <span className="text-xs uppercase tracking-[0.25em] font-medium text-white/90">
              IN THE PRESS
            </span>
            <div className="w-16 sm:w-24 h-px bg-white/40" />
          </div>

          {/* Active Press Quote */}
          <div className="space-y-3 min-h-[90px] flex flex-col justify-center">
            <blockquote className="font-serif text-2xl sm:text-4xl text-white font-normal">
              {pressQuotes[activePressQuote].quote}
            </blockquote>
            <button
              onClick={() => setActivePage('press')}
              className="text-[11px] sm:text-xs tracking-widest uppercase font-bold text-white/80 hover:text-white underline underline-offset-4 transition-colors"
            >
              {pressQuotes[activePressQuote].linkText}
            </button>
          </div>

          {/* Press Logos Carousel Row */}
          <div className="pt-6 flex items-center justify-center space-x-4 sm:space-x-8">
            <button
              onClick={() =>
                setActivePressQuote((prev) => (prev === 0 ? pressQuotes.length - 1 : prev - 1))
              }
              className="p-2 text-white/70 hover:text-white transition-colors"
              aria-label="Previous quote"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
              {pressLogos.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setActivePressQuote(idx % pressQuotes.length);
                    setActivePage('press');
                  }}
                  className={`cursor-pointer transition-opacity ${item.style} ${
                    activePressQuote === idx % pressQuotes.length
                      ? 'opacity-100'
                      : 'opacity-50 hover:opacity-80'
                  }`}
                >
                  {item.name}
                </div>
              ))}
            </div>

            <button
              onClick={() =>
                setActivePressQuote((prev) => (prev === pressQuotes.length - 1 ? 0 : prev + 1))
              }
              className="p-2 text-white/70 hover:text-white transition-colors"
              aria-label="Next quote"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* 7. NEWSLETTER SECTION */}
      <section className="bg-[#97b2a8] text-white pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 text-center border-t border-[#8aa59b]/40">
        <div className="max-w-xl mx-auto space-y-6 pt-12">
          <div className="space-y-1">
            <h3 className="text-xs sm:text-sm tracking-[0.25em] uppercase font-bold text-white">
              STAY UP ON OUR LATEST
            </h3>
            <h4 className="text-xs sm:text-sm tracking-[0.2em] uppercase font-medium text-white/90">
              HEALTHY HAIR TIPS, PRODUCTS & MORE
            </h4>
          </div>

          {/* Form */}
          {newsletterSubscribed ? (
            <div className="p-3 bg-white/20 rounded-xl text-xs font-semibold text-white">
              ✓ Thank you for subscribing to Dr. Shari’s scalp care newsletter!
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="flex items-center border-b border-white max-w-md mx-auto pb-1">
              <input
                type="email"
                required
                placeholder="Email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="w-full bg-transparent text-sm text-white placeholder-white/70 focus:outline-none py-2 px-1"
              />
              <button
                type="submit"
                className="text-xs font-bold tracking-widest uppercase text-white hover:text-white/80 transition-colors whitespace-nowrap pl-3"
              >
                SIGN UP
              </button>
            </form>
          )}
        </div>
      </section>

      {/* VIDEO MODAL */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/75 backdrop-blur-xs"
            onClick={() => setIsVideoModalOpen(false)}
          />
          <div className="relative bg-[#1F1B18] text-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full z-10 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h4 className="font-serif text-xl font-bold">What Drives Us • Dr. Shari Hicks-Graham</h4>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="p-1 text-white/70 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="aspect-video bg-[#2B2520] rounded-2xl overflow-hidden relative flex items-center justify-center">
              <img
                src={whatDrivesUsImg}
                alt="Dr. Shari Story"
                className="w-full h-full object-cover opacity-60"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-white/30 backdrop-blur-xs flex items-center justify-center">
                  <Play className="w-6 h-6 text-white fill-white translate-x-0.5" />
                </div>
                <p className="text-sm font-semibold max-w-md">
                  "I formulated LivSo because my patients shouldn’t have to sacrifice healthy textured curls to treat an itchy scalp."
                </p>
                <span className="text-xs text-[#8ec5b6] uppercase tracking-wider font-bold">
                  — Dr. Shari Hicks-Graham, MD, FAAD
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* $2 SAMPLE MODAL */}
      {isSampleModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-xs"
            onClick={() => setIsSampleModalOpen(false)}
          />
          <div className="relative bg-[#FBF8F5] text-[#1F1B18] rounded-3xl p-6 sm:p-8 max-w-md w-full z-10 space-y-4 shadow-2xl border border-[#D5C9BD]">
            <div className="flex items-center justify-between border-b border-[#EADFD4] pb-3">
              <div className="flex items-center space-x-2">
                <Droplets className="w-5 h-5 text-[#486358]" />
                <h4 className="font-serif text-lg font-bold">Try A $2 Sample Kit</h4>
              </div>
              <button
                onClick={() => setIsSampleModalOpen(false)}
                className="p-1 text-[#6F675F] hover:text-[#1F1B18]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-[#38322C]">
              <p>
                Try the full 3-step routine (Moisturizing Shampoo, Conditioner, and Scalp Lotion sachets) on your next wash day.
              </p>
              <div className="bg-[#EADFD4]/50 p-3 rounded-xl space-y-1">
                <div className="font-bold text-[#1F1B18] flex justify-between">
                  <span>3-Piece Deluxe Sachet Pack</span>
                  <span className="text-[#486358]">$2.00</span>
                </div>
                <div className="text-[11px] text-[#6F675F]">
                  Includes a $5 coupon towards your first full-size system!
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                addToCart(sampleProduct as any, 1);
                setIsSampleModalOpen(false);
              }}
              className="w-full py-3.5 bg-[#486358] hover:bg-[#3b5249] text-white rounded-xl text-xs uppercase tracking-widest font-bold shadow-md transition-all"
            >
              Add $2 Sample To Bag
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
