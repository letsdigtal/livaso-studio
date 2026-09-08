import React, { useState } from 'react';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';

export const SearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen, navigateToProduct } = useCart();
  const [searchTerm, setSearchTerm] = useState('');

  if (!isSearchOpen) return null;

  const filteredProducts = PRODUCTS.filter((p) => {
    const q = searchTerm.toLowerCase();
    return (
      p.name.toLowerCase().includes(q) ||
      p.subtitle.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.keyIngredients.some((k) => k.name.toLowerCase().includes(q) || k.purpose.toLowerCase().includes(q))
    );
  });

  const popularSearches = [
    '3-Step System',
    'Moisturizing Shampoo',
    'Scalp Lotion',
    'Glycolic Acid',
    'Braids & Locs',
    'Dry Scalp Itch'
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={() => setIsSearchOpen(false)}
      />

      <div className="relative min-h-screen flex items-start justify-center p-4 pt-20">
        <div className="relative w-full max-w-2xl bg-[#FBF8F5] rounded-2xl shadow-2xl border border-[#EADFD4] overflow-hidden">
          {/* Header with Search Bar */}
          <div className="p-4 sm:p-6 border-b border-[#EADFD4] flex items-center space-x-3 bg-white">
            <Search className="w-5 h-5 text-[#B6573E] shrink-0" />
            <input
              type="text"
              autoFocus
              placeholder="Search products, ingredients (e.g. glycolic acid), or scalp concerns..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 bg-transparent text-sm sm:text-base text-[#1F1B18] placeholder-[#6F675F] focus:outline-none"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="text-xs text-[#6F675F] hover:text-[#1F1B18] font-medium"
              >
                Clear
              </button>
            )}
            <button
              onClick={() => setIsSearchOpen(false)}
              className="p-1.5 text-[#6F675F] hover:text-[#1F1B18] rounded-lg hover:bg-black/5"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick suggestions if empty */}
          {!searchTerm && (
            <div className="p-6 space-y-4">
              <div className="flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-[#6F675F]">
                <Sparkles className="w-3.5 h-3.5 text-[#B6573E]" />
                <span>Popular Scalp Searches</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((term) => (
                  <button
                    key={term}
                    onClick={() => setSearchTerm(term)}
                    className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#F4EFEA] hover:bg-[#EADFD4] text-[#38322C] transition-colors border border-[#D5C9BD]/50"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Search Results */}
          <div className="p-4 sm:p-6 max-h-[60vh] overflow-y-auto space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#6F675F] mb-3">
              {searchTerm ? `Results for "${searchTerm}" (${filteredProducts.length})` : 'Recommended Products'}
            </div>

            {filteredProducts.length === 0 ? (
              <div className="py-8 text-center text-sm text-[#6F675F]">
                No products found matching "{searchTerm}". Try searching "shampoo", "lotion", or "glycolic acid".
              </div>
            ) : (
              filteredProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    navigateToProduct(product.slug);
                    setIsSearchOpen(false);
                  }}
                  className="flex items-center space-x-4 p-3 bg-white hover:bg-[#F4EFEA] rounded-xl border border-[#EADFD4] cursor-pointer transition-colors group"
                >
                  <img
                    src={product.primaryImage}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded-lg bg-[#F4EFEA]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2">
                      <h4 className="text-sm font-serif font-bold text-[#1F1B18] group-hover:text-[#B6573E] transition-colors truncate">
                        {product.name}
                      </h4>
                      {product.badge && (
                        <span className="text-[10px] bg-[#B6573E]/10 text-[#B6573E] px-2 py-0.5 rounded-full font-semibold">
                          {product.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#6F675F] truncate">{product.subtitle}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-xs font-bold text-[#1F1B18]">
                        ${product.price.toFixed(2)}
                      </span>
                      <span className="text-xs text-[#5F7466]">★ {product.rating}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#D5C9BD] group-hover:text-[#B6573E] group-hover:translate-x-1 transition-all" />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
