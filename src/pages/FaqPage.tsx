import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Sparkles, HelpCircle, ArrowRight } from 'lucide-react';
import { FAQS, PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';

export const FaqPage: React.FC = () => {
  const { addToCart, setIsQuizOpen } = useCart();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center space-x-2 bg-[#EADFD4] text-[#B6573E] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Support & Clarifications</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#1F1B18]">
          Frequently Asked Questions
        </h1>
        <p className="text-sm sm:text-base text-[#6F675F] max-w-xl mx-auto leading-relaxed">
          Everything you need to know about LivSo formulations, clinical usage, textured hair compatibility, and order shipping.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {FAQS.map((faq, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl border border-[#EADFD4] overflow-hidden shadow-2xs transition-colors"
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full p-5 sm:p-6 text-left flex items-center justify-between font-serif font-bold text-base sm:text-lg text-[#1F1B18] hover:text-[#B6573E] transition-colors"
            >
              <span className="pr-4">{faq.question}</span>
              {openIdx === idx ? (
                <ChevronUp className="w-5 h-5 text-[#B6573E] shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-[#6F675F] shrink-0" />
              )}
            </button>
            {openIdx === idx && (
              <div className="p-5 sm:p-6 pt-0 text-xs sm:text-sm text-[#38322C] leading-relaxed border-t border-[#F4EFEA]">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Still Have Questions Box */}
      <div className="bg-[#F4EFEA] rounded-3xl p-8 sm:p-12 border border-[#EADFD4] text-center space-y-4">
        <h3 className="font-serif text-2xl font-bold text-[#1F1B18]">
          Have a specific question about your scalp condition?
        </h3>
        <p className="text-xs sm:text-sm text-[#6F675F] max-w-md mx-auto">
          Take Dr. Shari's 60-second diagnostic scalp quiz to find the custom regimen that matches your exact curl texture and washing frequency.
        </p>
        <button
          onClick={() => setIsQuizOpen(true)}
          className="inline-flex items-center space-x-2 px-8 py-3.5 bg-[#B6573E] hover:bg-[#A34B34] text-white rounded-xl text-xs uppercase tracking-widest font-bold shadow-md transition-all"
        >
          <span>Start Scalp Assessment</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
