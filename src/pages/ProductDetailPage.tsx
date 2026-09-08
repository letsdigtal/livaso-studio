import React, { useState } from 'react';
import {
  Play,
  X,
  Check,
  Info,
  ShieldCheck,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';

import shampooCoconutHeroImg from '../assets/images/shampoo_coconut_hero_1788843834134.jpg';
import shampooCoconutSeamlessImg from '../assets/images/shampoo_coconut_seamless_1788844589488.jpg';
import xylitolGreenLeavesImg from '../assets/images/xylitol_green_leaves_1788843856248.jpg';
import glycolicSugarcaneImg from '../assets/images/glycolic_sugarcane_sticks_1788843873803.jpg';
import coconutPiecesImg from '../assets/images/coconut_pieces_ingredient_1788843887169.jpg';
import shampooCapTopImg from '../assets/images/shampoo_cap_top_1788843905621.jpg';
import shampooBottleImg from '../assets/images/livso_shampoo_bottle_1788842141870.jpg';

export const ProductDetailPage: React.FC = () => {
  const {
    selectedProductSlug,
    addToCart,
    setIsCartOpen
  } = useCart();

  // Find active product (defaults to Moisturizing Shampoo)
  const product =
    PRODUCTS.find((p) => p.slug === selectedProductSlug) ||
    PRODUCTS.find((p) => p.slug === 'moisturizing-shampoo') ||
    PRODUCTS[0];

  const [selectedThumbnailIndex, setSelectedThumbnailIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showIngredientsModal, setShowIngredientsModal] = useState(false);
  const [showPrimeModal, setShowPrimeModal] = useState(false);
  const [showPrimeInfoModal, setShowPrimeInfoModal] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // Gallery thumbnails definition
  const thumbnails = [
    {
      id: 'coconut-hero',
      label: 'Bottle with Coconut Chunks',
      type: 'image',
      src: shampooCoconutSeamlessImg
    },
    {
      id: 'bottle-front',
      label: 'Moisturizing Shampoo Bottle',
      type: 'image',
      src: shampooBottleImg
    },
    {
      id: 'bottle-cap',
      label: 'Bottle Cap & Formula',
      type: 'image',
      src: shampooCapTopImg
    },
    {
      id: 'video-play',
      label: 'Watch Video',
      type: 'video'
    }
  ];

  const handleAddToCart = () => {
    addToCart(product, quantity, false);
    setIsCartOpen(true);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSubscribed(true);
    setTimeout(() => {
      setNewsletterSubscribed(false);
      setNewsletterEmail('');
    }, 3500);
  };

  return (
    <div className="bg-[#d5dec7] text-[#2c3d33] w-full selection:bg-[#5e756c] selection:text-white">
      {/* ========================================================================= */}
      {/* 1. HERO / PRODUCT DETAIL SECTION (MATCHES SCREENSHOT IDENTICALLY) */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-8 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Vertical Thumbnails (4 Circles) */}
          <div className="lg:col-span-2 flex lg:flex-col items-center justify-center gap-5 sm:gap-6 order-2 lg:order-1">
            {thumbnails.map((thumb, idx) => {
              const isSelected = selectedThumbnailIndex === idx && thumb.type === 'image';
              
              if (thumb.type === 'video') {
                return (
                  <button
                    key={thumb.id}
                    onClick={() => setShowVideoModal(true)}
                    aria-label="Play product video demo"
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-white/60 bg-[#d5dec7] hover:bg-[#c9d4ba] shadow-xs flex items-center justify-center transition-all duration-200 group cursor-pointer"
                  >
                    <Play className="w-5 h-5 sm:w-6 sm:h-6 text-[#4a5e52] fill-[#4a5e52] translate-x-0.5 group-hover:scale-110 transition-transform" />
                  </button>
                );
              }

              return (
                <button
                  key={thumb.id}
                  onClick={() => setSelectedThumbnailIndex(idx)}
                  aria-label={thumb.label}
                  className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden p-1 bg-white/70 transition-all duration-200 cursor-pointer shadow-xs ${
                    isSelected
                      ? 'border-2 border-white ring-2 ring-[#4a5e52]/30 scale-105'
                      : 'border border-white/60 hover:border-white opacity-85 hover:opacity-100'
                  }`}
                >
                  <img
                    src={thumb.src}
                    alt={thumb.label}
                    className="w-full h-full object-cover rounded-full"
                    referrerPolicy="no-referrer"
                  />
                </button>
              );
            })}
          </div>

          {/* Center Column: Big Product Photography (Bottle with Fresh Coconuts) */}
          <div className="lg:col-span-5 flex items-center justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-md sm:max-w-lg aspect-4/5 flex items-center justify-center">
              <img
                src={thumbnails[selectedThumbnailIndex]?.src || shampooCoconutSeamlessImg}
                alt={product.name}
                className="w-full h-full object-contain filter drop-shadow-[0_18px_24px_rgba(40,55,45,0.15)] transition-all duration-300"
                style={{ mixBlendMode: 'multiply' }}
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right Column: Typography, Price, Add to Cart & Buy with Prime */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8 order-3 lg:pl-4">
            {/* Title */}
            <div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] text-white font-normal leading-[1.08] tracking-tight">
                {product.name}
              </h1>
              {/* Price & Size with Em-Dash */}
              <div className="text-[#485c52] text-xl sm:text-2xl font-normal mt-4 flex items-center gap-3">
                <span className="font-serif font-normal text-2xl sm:text-[26px]">
                  ${product.price.toFixed(0)}
                </span>
                <span className="text-[#485c52] font-light">—</span>
                <span className="text-sm sm:text-base font-normal tracking-wide text-[#485c52]">
                  8.5 fl. oz. (250 ml)
                </span>
              </div>
            </div>

            {/* Ingredient List & Use Instructions Link */}
            <div>
              <button
                onClick={() => setShowIngredientsModal(true)}
                className="text-[#485c52] hover:text-[#2c3d33] underline underline-offset-4 decoration-1 font-medium text-xs sm:text-sm tracking-wide transition-colors cursor-pointer"
              >
                Ingredient List & Use Instructions
              </button>
            </div>

            {/* Quantity Selector & Solid Dark ADD TO CART Button */}
            <div className="flex items-center gap-4 pt-1">
              {/* Quantity Selector */}
              <div className="flex items-center justify-between border border-[#b8c6af] bg-[#e0e8d5]/60 px-4 py-3 min-w-[120px] text-[#485c52]">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="text-base font-bold px-1 hover:text-[#2c3d33] transition-colors cursor-pointer select-none"
                  aria-label="Decrease quantity"
                >
                  —
                </button>
                <span className="text-sm sm:text-base font-medium px-2 select-none">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="text-base font-bold px-1 hover:text-[#2c3d33] transition-colors cursor-pointer select-none"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              {/* Add to Cart Button */}
              <button
                type="button"
                onClick={handleAddToCart}
                className="flex-1 bg-[#5e756c] hover:bg-[#4e645b] text-white py-3.5 px-8 font-bold uppercase tracking-widest text-xs transition-colors shadow-xs cursor-pointer text-center"
              >
                ADD TO CART
              </button>
            </div>

            {/* "Buy with prime" Button */}
            <div className="space-y-2 pt-2">
              <button
                type="button"
                onClick={() => setShowPrimeModal(true)}
                className="w-full bg-[#0085ff] hover:bg-[#0074e0] text-white py-3.5 px-4 flex items-center justify-center gap-1.5 transition-colors shadow-xs rounded-none cursor-pointer"
              >
                <span className="font-medium text-sm sm:text-base">Buy with</span>
                <div className="flex flex-col items-center relative -bottom-0.5">
                  <span className="font-bold text-sm sm:text-base tracking-tight leading-none">
                    prime
                  </span>
                  {/* Prime Curved Smile SVG */}
                  <svg
                    className="w-8 h-2 text-white fill-white mt-0.5"
                    viewBox="0 0 100 25"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 4 Q50 24 95 4 Q50 14 5 4 Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </button>

              {/* Delivery Estimation Line with ⓘ Tooltip */}
              <div className="flex items-center justify-center gap-1 text-[#485c52] text-xs pt-1">
                <span>FREE Delivery as soon as Wed, Sep 9</span>
                <button
                  type="button"
                  onClick={() => setShowPrimeInfoModal(true)}
                  className="text-[#485c52] hover:text-[#2c3d33] cursor-pointer"
                  aria-label="Amazon Prime Delivery Info"
                >
                  <Info className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Free Shipping Notice */}
            <div className="text-center pt-2 space-y-1">
              <div className="text-[#485c52] text-sm sm:text-base font-normal">
                Free shipping on orders over <sup className="text-xs font-bold">$</sup>49
              </div>
              <p className="text-[#485c52] text-[11px] sm:text-xs leading-relaxed max-w-xs sm:max-w-sm mx-auto">
                Add more than $49 worth of LivSo to your cart and receive free shipping on the order.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. "WHAT'S INSIDE" SECTION (MATCHES SCREENSHOT WITH WAVY WATERMARK LINES) */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden py-16 sm:py-24 border-t border-[#c5d1b7]/40">
        {/* Subtle SVG Wavy Ripple Contour Lines Across Background */}
        <div className="absolute inset-0 pointer-events-none opacity-30 select-none overflow-hidden">
          <svg
            className="w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 1200 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,100 C150,70 350,130 500,100 C650,70 850,130 1000,100 C1100,80 1180,110 1200,100"
              stroke="#9eaf99"
              strokeWidth="1.2"
              fill="none"
            />
            <path
              d="M0,120 C150,90 350,150 500,120 C650,90 850,150 1000,120 C1100,100 1180,130 1200,120"
              stroke="#9eaf99"
              strokeWidth="1.2"
              fill="none"
            />
            <path
              d="M0,140 C150,110 350,170 500,140 C650,110 850,170 1000,140 C1100,120 1180,150 1200,140"
              stroke="#9eaf99"
              strokeWidth="1.2"
              fill="none"
            />
            <path
              d="M0,160 C150,130 350,190 500,160 C650,130 850,190 1000,160 C1100,140 1180,170 1200,160"
              stroke="#9eaf99"
              strokeWidth="1.2"
              fill="none"
            />
            <path
              d="M0,180 C150,150 350,210 500,180 C650,150 850,210 1000,180 C1100,160 1180,190 1200,180"
              stroke="#9eaf99"
              strokeWidth="1.2"
              fill="none"
            />
          </svg>
        </div>

        <div className="max-w-5xl mx-auto px-6 sm:px-10 relative z-10 text-center space-y-12 sm:space-y-16">
          {/* Header & Subtitle */}
          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="font-serif text-4xl sm:text-5xl text-[#485c52] font-normal tracking-tight">
              What’s Inside
            </h2>
            <p className="text-xs sm:text-sm text-[#485c52] leading-relaxed font-normal">
              We crafted our shampoo to include only the best ingredients, so it is not only an
              effective moisturizing cleanser but it smells and feels exceptional during use.
              For hair that looks and stays lustrous and silky on wash day and beyond.
            </p>
          </div>

          {/* 3 Ingredients Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 text-center items-start">
            {/* 1. Xylitol */}
            <div className="space-y-4 flex flex-col items-center">
              <div className="w-40 h-40 sm:w-44 sm:h-44 flex items-center justify-center">
                <img
                  src={xylitolGreenLeavesImg}
                  alt="Xylitol botanical leaves"
                  className="w-full h-full object-contain filter drop-shadow-[0_10px_16px_rgba(40,55,45,0.12)]"
                  style={{ mixBlendMode: 'multiply' }}
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="font-bold text-xs sm:text-sm uppercase tracking-[0.22em] text-[#3a4d41]">
                XYLITOL
              </h3>
              <p className="text-xs text-[#485c52] leading-relaxed max-w-xs mx-auto">
                Feeds protein that smooths and strengthens the skin to control growth of skin
                flora, like yeast, which can cause flakes, itching, and irritation. Xylitol is
                considered natural and is found in plants and many fruits and vegetables.
              </p>
            </div>

            {/* 2. Glycolic Acid */}
            <div className="space-y-4 flex flex-col items-center">
              <div className="w-40 h-40 sm:w-44 sm:h-44 flex items-center justify-center">
                <img
                  src={glycolicSugarcaneImg}
                  alt="Sugarcane bark glycolic acid"
                  className="w-full h-full object-contain filter drop-shadow-[0_10px_16px_rgba(40,55,45,0.12)]"
                  style={{ mixBlendMode: 'multiply' }}
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="font-bold text-xs sm:text-sm uppercase tracking-[0.22em] text-[#3a4d41]">
                GLYCOLIC ACID
              </h3>
              <p className="text-xs text-[#485c52] leading-relaxed max-w-xs mx-auto">
                An exfoliating agent that helps clean the scalp and unclog pores to reveal the
                skin’s natural radiance. Creates a healthy environment for hair to grow and
                strengthen.
              </p>
            </div>

            {/* 3. Coconut Oil */}
            <div className="space-y-4 flex flex-col items-center">
              <div className="w-40 h-40 sm:w-44 sm:h-44 flex items-center justify-center">
                <img
                  src={coconutPiecesImg}
                  alt="Fresh broken coconut meat"
                  className="w-full h-full object-contain filter drop-shadow-[0_10px_16px_rgba(40,55,45,0.12)]"
                  style={{ mixBlendMode: 'multiply' }}
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="font-bold text-xs sm:text-sm uppercase tracking-[0.22em] text-[#3a4d41]">
                COCONUT OIL
              </h3>
              <p className="text-xs text-[#485c52] leading-relaxed max-w-xs mx-auto">
                Adds all natural, protective moisture to the scalp and hair, which reduces hair
                follicle breakage. Also controls yeast growth to reduce flaking and improve scalp
                comfort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. NEWSLETTER / SIGN UP SECTION (MATCHES SCREENSHOT) */}
      {/* ========================================================================= */}
      <section className="bg-[#b5c5b4] text-[#2c3d33] py-16 px-6 sm:px-10 border-t border-[#a6b8a4]">
        <div className="max-w-xl mx-auto text-center space-y-6">
          <h2 className="font-bold text-xs sm:text-[13px] uppercase tracking-[0.22em] text-[#35483d] leading-relaxed">
            STAY UP ON OUR LATEST
            <br />
            HEALTHY HAIR TIPS, PRODUCTS & MORE
          </h2>

          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto pt-2">
            <div className="border-b border-white pb-2 flex items-center justify-between gap-4">
              <input
                type="email"
                placeholder="Email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
                className="bg-transparent text-[#2c3d33] placeholder-[#485c52] focus:outline-none text-xs sm:text-sm flex-1 font-medium"
              />
              <button
                type="submit"
                className="text-[#2c3d33] hover:text-white font-bold text-xs uppercase tracking-widest transition-colors cursor-pointer"
              >
                SIGN UP
              </button>
            </div>
            {newsletterSubscribed && (
              <div className="text-xs font-semibold text-white mt-3 flex items-center justify-center gap-1.5 animate-fade-in">
                <Check className="w-4 h-4" />
                <span>Thank you for signing up for LivSo healthy hair tips!</span>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* MODAL: INGREDIENTS LIST & USE INSTRUCTIONS */}
      {/* ========================================================================= */}
      {showIngredientsModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setShowIngredientsModal(false)}
          />
          <div className="relative bg-[#FBF8F5] text-[#2c3d33] rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl z-10 border border-[#D5C9BD] max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-[#EADFD4] pb-4">
              <h3 className="font-serif text-2xl font-bold text-[#1F1B18]">
                Ingredients & Instructions
              </h3>
              <button
                onClick={() => setShowIngredientsModal(false)}
                className="p-1 text-[#6F675F] hover:text-[#1F1B18] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* How to use */}
            <div className="space-y-3">
              <h4 className="font-serif font-bold text-base text-[#486358] uppercase tracking-wider text-xs">
                How To Use (Step 1: Cleanse)
              </h4>
              <p className="text-xs sm:text-sm text-[#48423C] leading-relaxed">
                Apply a generous amount of LivSo Moisturizing Shampoo directly to wet hair and scalp.
                Gently massage into the scalp with fingertips, allowing the rich lather to loosen dry
                flakes and product residue without rough friction. Leave on for 2–3 minutes so the
                glycolic acid can gently exfoliate, then rinse thoroughly with lukewarm water. Follow with
                LivSo Moisturizing Conditioner.
              </p>
            </div>

            {/* Clinical bio-actives */}
            <div className="space-y-2 bg-[#EADFD4]/40 p-4 rounded-xl">
              <h4 className="font-bold text-xs uppercase tracking-wider text-[#486358]">
                Key Bio-Actives
              </h4>
              <ul className="text-xs space-y-1.5 text-[#48423C]">
                <li>
                  <strong>• Glycolic Acid (Alpha Hydroxy Acid):</strong> Gently loosens dead scalp flakes and sebum.
                </li>
                <li>
                  <strong>• Xylitol:</strong> Helps balance skin microbiome and control Malassezia yeast.
                </li>
                <li>
                  <strong>• Coconut Oil:</strong> Natural protective lipid layer that prevents moisture loss.
                </li>
              </ul>
            </div>

            {/* Full INCI List */}
            <div className="space-y-2">
              <h4 className="font-bold text-xs uppercase tracking-wider text-[#6F675F]">
                Full Ingredient List (INCI)
              </h4>
              <p className="text-[11px] leading-relaxed text-[#6F675F]">
                Water (Aqua), Sodium Lauroyl Methyl Isethionate, Cocamidopropyl Betaine, Sodium Cocoyl
                Isethionate, Glycolic Acid, Xylitol, Cocos Nucifera (Coconut) Oil, Glycerin, Hydrolyzed
                Oat Protein, Panthenol, Polyquaternium-10, Caprylyl Glycol, Phenoxyethanol, Hexylene
                Glycol, Fragrance (Parfum).
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setShowIngredientsModal(false)}
                className="w-full py-3 bg-[#5e756c] hover:bg-[#4e645b] text-white rounded-xl text-xs font-bold uppercase tracking-widest transition-colors shadow-sm"
              >
                Close Instructions
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL: VIDEO PLAYER (DR. SHARI CLINICAL WASH DAY GUIDE) */}
      {/* ========================================================================= */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/75 backdrop-blur-sm"
            onClick={() => setShowVideoModal(false)}
          />
          <div className="relative bg-[#1f2824] text-white rounded-2xl max-w-3xl w-full p-6 space-y-4 shadow-2xl z-10 border border-white/10">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <div>
                <h3 className="font-serif text-xl font-bold text-white">
                  Wash Day Masterclass with Dr. Shari
                </h3>
                <p className="text-xs text-white/70">
                  Board-Certified Dermatologist & Founder of LivSo
                </p>
              </div>
              <button
                onClick={() => setShowVideoModal(false)}
                className="p-1 text-white/70 hover:text-white transition-colors"
                aria-label="Close video"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Video Player Mockup / Simulation */}
            <div className="relative aspect-16/9 bg-black rounded-xl overflow-hidden flex items-center justify-center border border-white/10">
              <img
                src={shampooCoconutHeroImg}
                alt="Video preview cover"
                className="w-full h-full object-cover opacity-60 filter blur-xs"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col items-center justify-center p-6 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-white/20 border border-white/40 flex items-center justify-center shadow-lg backdrop-blur-xs">
                  <Play className="w-7 h-7 text-white fill-white translate-x-0.5" />
                </div>
                <div className="space-y-1 max-w-md">
                  <h4 className="font-serif text-lg font-bold">
                    How To Wash Textured Curls Without Stripping Moisture
                  </h4>
                  <p className="text-xs text-white/80">
                    Learn the 3 keys to chemical exfoliation with Glycolic Acid and scalp barrier maintenance.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-white/70 pt-1">
              <span>Duration: 3 mins 45 secs</span>
              <button
                onClick={() => {
                  setShowVideoModal(false);
                  handleAddToCart();
                }}
                className="px-4 py-2 bg-[#5e756c] hover:bg-[#4e645b] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors"
              >
                Shop Shampoo ($19)
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL: BUY WITH PRIME (1-CLICK CHECKOUT SIMULATION) */}
      {/* ========================================================================= */}
      {showPrimeModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            onClick={() => setShowPrimeModal(false)}
          />
          <div className="relative bg-white text-[#1F1B18] rounded-2xl max-w-md w-full p-6 space-y-5 shadow-2xl z-10 border border-gray-200">
            <div className="flex items-center justify-between border-b pb-3">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-lg text-gray-900">Buy with</span>
                <span className="font-bold text-lg text-[#0085ff]">prime</span>
              </div>
              <button
                onClick={() => setShowPrimeModal(false)}
                className="p-1 text-gray-400 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center space-x-4 bg-gray-50 p-3.5 rounded-xl border border-gray-100">
              <img
                src={shampooBottleImg}
                alt="Product thumbnail"
                className="w-14 h-14 object-contain"
                referrerPolicy="no-referrer"
              />
              <div className="flex-1">
                <div className="font-serif font-bold text-sm text-gray-900">
                  {product.name}
                </div>
                <div className="text-xs text-gray-500">8.5 fl. oz. • Qty: {quantity}</div>
                <div className="text-xs font-bold text-[#0085ff] mt-0.5">
                  ${(product.price * quantity).toFixed(2)}
                </div>
              </div>
            </div>

            <div className="space-y-2 text-xs text-gray-600">
              <div className="flex justify-between py-1 border-b border-gray-100">
                <span>Shipping</span>
                <span className="font-bold text-[#0085ff]">FREE Prime 2-Day</span>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-100">
                <span>Estimated Delivery</span>
                <span className="font-medium text-gray-900">Wednesday, Sep 9</span>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-100">
                <span>Ship to</span>
                <span className="font-medium text-gray-900 truncate max-w-[200px]">
                  Prime Member • New York, NY
                </span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  addToCart(product, quantity, false);
                  setShowPrimeModal(false);
                  setIsCartOpen(true);
                }}
                className="w-full py-3.5 bg-[#0085ff] hover:bg-[#0074e0] text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-colors shadow-sm"
              >
                Place 1-Click Prime Order
              </button>
              <p className="text-[10px] text-gray-400 text-center mt-2">
                Protected by Amazon’s A-to-z Guarantee. Free 30-day returns.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL: PRIME DELIVERY INFO (ⓘ) */}
      {/* ========================================================================= */}
      {showPrimeInfoModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            onClick={() => setShowPrimeInfoModal(false)}
          />
          <div className="relative bg-white text-[#1F1B18] rounded-2xl max-w-sm w-full p-6 space-y-4 shadow-2xl z-10 border border-gray-200">
            <div className="flex items-center justify-between border-b pb-3">
              <h4 className="font-bold text-sm text-gray-900">About Prime Delivery</h4>
              <button
                onClick={() => setShowPrimeInfoModal(false)}
                className="p-1 text-gray-400 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              Prime members get fast, free delivery on eligible LivSo orders with seamless 1-click
              checkout using payment and address info stored in your Amazon account.
            </p>
            <div className="bg-blue-50 p-3 rounded-xl text-[11px] text-blue-900 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 shrink-0 text-[#0085ff]" />
              <span>Includes Amazon A-to-z customer guarantee & easy returns.</span>
            </div>
            <button
              onClick={() => setShowPrimeInfoModal(false)}
              className="w-full py-2.5 bg-gray-900 text-white rounded-xl text-xs font-semibold"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
