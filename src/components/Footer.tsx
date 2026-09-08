import React, { useState } from 'react';
import { Droplets, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import shampooBottleImg from '../assets/images/livso_shampoo_bottle_1788842141870.jpg';

export const Footer: React.FC = () => {
  const { setActivePage, addToCart } = useCart();
  const [isSampleModalOpen, setIsSampleModalOpen] = useState(false);

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
    <footer className="bg-[#c8d4c6] text-[#2c3d33] py-14 px-6 sm:px-10 lg:px-16 relative overflow-hidden">
      {/* Faint "Our Products" Watermark in Background */}
      <div className="absolute inset-x-0 top-6 flex justify-center pointer-events-none select-none z-0">
        <span className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[110px] text-[#a9bca7]/45 font-normal tracking-wide whitespace-nowrap">
          Our Products
        </span>
      </div>

      <div className="max-w-4xl mx-auto space-y-10 text-center relative z-10 pt-10 sm:pt-14">
        {/* Minimalist Bottle Silhouette Icon */}
        <div className="flex justify-center">
          <svg
            className="w-10 h-16 text-[#5b7266] fill-current"
            viewBox="0 0 40 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Bottle cap / neck */}
            <rect x="14" y="2" width="12" height="6" rx="2" fill="currentColor" />
            <rect x="16" y="8" width="8" height="6" fill="currentColor" />
            {/* Sloped shoulders */}
            <path
              d="M16 14 C12 18, 7 24, 7 30 L7 62 C7 66, 10 68, 14 68 L26 68 C30 68, 33 66, 33 62 L33 30 C33 24, 28 18, 24 14 Z"
              fill="currentColor"
            />
          </svg>
        </div>

        {/* Social Icons Row with Subtle Vertical Lines */}
        <div className="flex items-center justify-center space-x-6 sm:space-x-8 text-[#2c3d33] text-sm font-medium">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="hover:text-white transition-colors font-serif font-bold text-lg"
          >
            f
          </a>
          <span className="text-[#a4b7a2]">|</span>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
            className="hover:text-white transition-colors text-xs font-semibold lowercase tracking-wide"
          >
            <svg className="w-4 h-4 fill-current inline-block" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <span className="text-[#a4b7a2]">|</span>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="hover:text-white transition-colors"
          >
            <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="1.8" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <span className="text-[#a4b7a2]">|</span>
          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Pinterest"
            className="hover:text-white transition-colors font-serif font-bold text-lg"
          >
            p
          </a>
        </div>

        {/* Middle Links: FAQ and CONTACT */}
        <div className="flex items-center justify-center space-x-12 text-xs sm:text-[13px] font-bold uppercase tracking-[0.25em] text-white">
          <button
            onClick={() => setActivePage('faq')}
            className="hover:text-[#2c3d33] transition-colors"
          >
            FAQ
          </button>
          <button
            onClick={() => setActivePage('faq')}
            className="hover:text-[#2c3d33] transition-colors"
          >
            CONTACT
          </button>
        </div>

        {/* Bottom Row: Sample Button on Left & Copyright / Terms on Right */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-10 text-xs text-[#2c3d33]">
          {/* Left Sample Callout */}
          <button
            onClick={() => setIsSampleModalOpen(true)}
            className="flex items-center space-x-2 text-xs uppercase tracking-widest font-bold hover:text-white transition-colors group"
          >
            <span className="tracking-wider">TRY A</span>
            <div className="w-6 h-6 rounded-full border border-[#2c3d33] flex items-center justify-center bg-white/40 group-hover:bg-white transition-colors">
              <Droplets className="w-3 h-3 text-[#2c3d33] fill-[#2c3d33]" />
            </div>
            <span className="tracking-wider">$2 SAMPLE!</span>
          </button>

          {/* Center / Right Copyright & Policies */}
          <div className="space-y-1.5 text-center sm:text-right">
            <p className="text-xs text-[#2c3d33] font-normal">
              © {new Date().getFullYear()} LivSo, LLC. All rights reserved.
            </p>
            <div className="flex items-center justify-center sm:justify-end space-x-4 text-[11px] text-[#2c3d33]">
              <span className="hover:underline cursor-pointer">Privacy Policy</span>
              <span className="hover:underline cursor-pointer">Terms of Use</span>
              <span className="hover:underline cursor-pointer">Terms of Sale</span>
            </div>
          </div>
        </div>
      </div>

      {/* $2 Sample Modal */}
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
                Experience Dr. Shari's complete 3-step routine (Moisturizing Shampoo, Conditioner, and Scalp Lotion) on your next wash day.
              </p>
              <div className="bg-[#EADFD4]/50 p-3.5 rounded-xl space-y-1">
                <div className="font-bold text-[#1F1B18] flex justify-between">
                  <span>3-Piece Deluxe Sachet Trial</span>
                  <span className="text-[#486358]">$2.00</span>
                </div>
                <div className="text-[11px] text-[#6F675F]">
                  Shipped directly to your doorstep with tracking.
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
    </footer>
  );
};
