import React from 'react';
import { Star, Sparkles, ArrowRight, ExternalLink } from 'lucide-react';
import { PRESS_FEATURES, PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';

export const PressPage: React.FC = () => {
  const { addToCart } = useCart();

  const articles = [
    {
      source: 'ESSENCE',
      title: 'How Dr. Shari Hicks-Graham Built a Haircare Revolution for Sensitive Scalps',
      date: 'Beauty Spotlight',
      quote: 'Dr. Hicks-Graham recognized that textured hair was being left behind by legacy dandruff brands. LivSo is the compassionate, science-backed remedy millions of Black women have waited for.',
      award: 'Essence Best in Hair Winner'
    },
    {
      source: 'ALLURE',
      title: 'The Best Scalp Treatments for Protective Styles and Type 4 Hair',
      date: 'Scalp Issue Feature',
      quote: 'The moisturizing scalp lotion with its precision tip applicator is an absolute must-have for anyone wearing braids or weaves. It stops itch on contact without leaving greasy residue.',
      award: 'Allure Best of Scalp Pick'
    },
    {
      source: 'BYRDIE',
      title: 'We Tested the LivSo Scalp Care System on 4C Natural Hair for 60 Days',
      date: 'Editor Tested',
      quote: 'Our tester experienced a 90% reduction in flakes and loved how soft and manageable her coils remained after wash day. The glycolic acid and ceramide formulation delivers real clinical results.',
      award: 'Byrdie Verified & Approved'
    },
    {
      source: 'REFINERY29',
      title: 'Why Dermatologists Are Rethinking Traditional Anti-Dandruff Ingredients',
      date: 'Dermatology Deep-Dive',
      quote: 'Traditional zinc pyrithione shampoos were simply never engineered for dry or fragile curly hair. LivSo represents the new guard: barrier-first, skin-identical, and intensely hydrating.',
      award: 'Beauty Innovator Award'
    },
    {
      source: 'ELLE',
      title: 'The Top 10 Scalp Serums and Shampoos That Actually Clear Flakes',
      date: 'Hair Care Guide',
      quote: 'A holy grail regimen. LivSo gives you the dermatologist power of a prescription treatment with the luxurious fragrance and lather of high-end salon care.',
      award: 'Editor’s Choice'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 bg-[#EADFD4] text-[#B6573E] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Media Coverage & Editorial Honors</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#1F1B18]">
          Press & Accolades
        </h1>
        <p className="text-base text-[#6F675F] leading-relaxed">
          See what leading beauty editors, dermatologists, and industry publications are saying about LivSo’s groundbreaking scalp care.
        </p>
      </div>

      {/* Press Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {articles.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl p-8 border border-[#EADFD4] shadow-2xs space-y-5 flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-serif text-2xl font-bold text-[#1F1B18] tracking-wider">
                  {item.source}
                </span>
                <span className="text-[11px] bg-[#B6573E]/10 text-[#B6573E] font-bold px-3 py-1 rounded-full uppercase">
                  {item.award}
                </span>
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1F1B18] leading-snug">
                "{item.title}"
              </h3>
              <p className="text-xs sm:text-sm text-[#38322C] italic leading-relaxed bg-[#FBF8F5] p-4 rounded-xl border border-[#EADFD4]/60">
                "{item.quote}"
              </p>
            </div>

            <div className="pt-3 border-t border-[#F4EFEA] flex items-center justify-between text-xs text-[#6F675F]">
              <span>{item.date}</span>
              <span className="flex items-center space-x-1 text-[#B6573E] font-semibold">
                <span>Featured Review</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Press Inquiry Box */}
      <div className="bg-[#2B2520] text-white rounded-3xl p-8 sm:p-12 border border-[#3E3630] text-center space-y-4 shadow-xl">
        <h3 className="font-serif text-2xl sm:text-3xl font-bold">
          Press & Partnership Inquiries
        </h3>
        <p className="text-xs sm:text-sm text-[#D5C9BD] max-w-lg mx-auto leading-relaxed">
          For press kits, high-res assets, interview requests with Dr. Shari Hicks-Graham, or clinical data inquiries, contact our media relations team at <strong>press@livso.com</strong>.
        </p>
        <div className="pt-2">
          <button
            onClick={() => addToCart(PRODUCTS[0], 1)}
            className="px-8 py-3.5 bg-[#B6573E] hover:bg-[#A34B34] text-white rounded-xl text-xs uppercase tracking-widest font-bold shadow-md transition-all"
          >
            Shop The Award-Winning System
          </button>
        </div>
      </div>
    </div>
  );
};
