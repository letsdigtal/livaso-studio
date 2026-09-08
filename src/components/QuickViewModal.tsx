import React, { useState } from 'react';
import { X, Star, Check, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const QuickViewModal: React.FC = () => {
  const {
    quickViewProduct,
    setQuickViewProduct,
    addToCart,
    navigateToProduct
  } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [isSubscription, setIsSubscription] = useState(false);
  const [frequency, setFrequency] = useState<'4-weeks' | '8-weeks' | '12-weeks'>('8-weeks');

  if (!quickViewProduct) return null;

  const effectivePrice = isSubscription
    ? quickViewProduct.price * 0.8
    : quickViewProduct.price;

  const handleAddToCart = () => {
    addToCart(quickViewProduct, quantity, isSubscription, frequency);
    setQuickViewProduct(null);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={() => setQuickViewProduct(null)}
      />

      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative w-full max-w-3xl bg-[#FBF8F5] rounded-2xl shadow-2xl border border-[#EADFD4] overflow-hidden">
          <button
            onClick={() => setQuickViewProduct(null)}
            className="absolute top-4 right-4 z-10 p-2 text-[#6F675F] hover:text-[#1F1B18] rounded-full bg-white/80 hover:bg-white shadow-xs"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image section */}
            <div className="bg-[#F4EFEA] p-6 flex items-center justify-center">
              <img
                src={quickViewProduct.primaryImage}
                alt={quickViewProduct.name}
                className="w-full max-h-80 object-cover rounded-xl shadow-xs"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Content section */}
            <div className="p-6 md:p-8 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center space-x-2">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-[#1F1B18]">
                    {quickViewProduct.rating} ({quickViewProduct.reviewCount} reviews)
                  </span>
                </div>

                <h3 className="text-xl font-serif font-bold text-[#1F1B18] mt-1">
                  {quickViewProduct.name}
                </h3>
                <p className="text-xs text-[#6F675F]">{quickViewProduct.subtitle} • {quickViewProduct.size}</p>

                <div className="mt-3 flex items-baseline space-x-2">
                  <span className="text-2xl font-bold text-[#1F1B18]">
                    ${effectivePrice.toFixed(2)}
                  </span>
                  {quickViewProduct.originalPrice && (
                    <span className="text-sm text-[#6F675F] line-through">
                      ${quickViewProduct.originalPrice.toFixed(2)}
                    </span>
                  )}
                  {quickViewProduct.badge && (
                    <span className="text-[11px] bg-[#B6573E]/10 text-[#B6573E] px-2 py-0.5 rounded-full font-bold">
                      {quickViewProduct.badge}
                    </span>
                  )}
                </div>

                <p className="text-xs text-[#38322C] mt-3 line-clamp-3 leading-relaxed">
                  {quickViewProduct.shortDescription}
                </p>

                {/* Subscription options */}
                <div className="mt-4 space-y-2">
                  <div
                    onClick={() => setIsSubscription(false)}
                    className={`p-3 rounded-xl border text-xs cursor-pointer flex items-center justify-between transition-colors ${
                      !isSubscription
                        ? 'border-[#B6573E] bg-white shadow-xs'
                        : 'border-[#D5C9BD] hover:bg-[#F4EFEA]'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${!isSubscription ? 'border-[#B6573E] bg-[#B6573E]' : 'border-gray-400'}`}>
                        {!isSubscription && <Check className="w-2.5 h-2.5 text-white" />}
                      </div>
                      <span className="font-semibold text-[#1F1B18]">One-time purchase</span>
                    </div>
                    <span className="font-bold text-[#1F1B18]">${quickViewProduct.price.toFixed(2)}</span>
                  </div>

                  <div
                    onClick={() => setIsSubscription(true)}
                    className={`p-3 rounded-xl border text-xs cursor-pointer space-y-2 transition-colors ${
                      isSubscription
                        ? 'border-[#B6573E] bg-white shadow-xs'
                        : 'border-[#D5C9BD] hover:bg-[#F4EFEA]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${isSubscription ? 'border-[#B6573E] bg-[#B6573E]' : 'border-gray-400'}`}>
                          {isSubscription && <Check className="w-2.5 h-2.5 text-white" />}
                        </div>
                        <span className="font-semibold text-[#1F1B18] flex items-center">
                          <span>Subscribe & Save 20%</span>
                          <Sparkles className="w-3 h-3 text-[#5F7466] ml-1.5" />
                        </span>
                      </div>
                      <span className="font-bold text-[#5F7466]">
                        ${(quickViewProduct.price * 0.8).toFixed(2)}
                      </span>
                    </div>

                    {isSubscription && (
                      <div className="pl-6 pt-1 flex items-center space-x-2">
                        <span className="text-[11px] text-[#6F675F]">Deliver every:</span>
                        <select
                          value={frequency}
                          onChange={(e) => setFrequency(e.target.value as any)}
                          className="text-xs p-1 bg-[#F4EFEA] border border-[#D5C9BD] rounded"
                        >
                          <option value="4-weeks">4 Weeks</option>
                          <option value="8-weeks">8 Weeks (Most Popular)</option>
                          <option value="12-weeks">12 Weeks</option>
                        </select>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-2">
                <div className="flex space-x-2">
                  <div className="flex items-center border border-[#D5C9BD] rounded-xl bg-white px-2">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-2 py-1 text-sm font-bold text-[#1F1B18]"
                    >
                      -
                    </button>
                    <span className="px-2 text-xs font-bold text-[#1F1B18]">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-2 py-1 text-sm font-bold text-[#1F1B18]"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={handleAddToCart}
                    className="flex-1 bg-[#B6573E] hover:bg-[#A34B34] text-white py-3 rounded-xl font-bold uppercase tracking-wider text-xs transition-colors shadow-md flex items-center justify-center space-x-2"
                  >
                    <span>Add to Bag • ${(effectivePrice * quantity).toFixed(2)}</span>
                  </button>
                </div>

                <button
                  onClick={() => {
                    navigateToProduct(quickViewProduct.slug);
                    setQuickViewProduct(null);
                  }}
                  className="w-full text-center text-xs font-semibold text-[#B6573E] hover:text-[#A34B34] transition-colors py-1 flex items-center justify-center space-x-1"
                >
                  <span>View Full Product Details & Clinical Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
