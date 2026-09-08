import React, { useState, useMemo } from 'react';
import { Star, Filter, Sparkles, Check, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';

export const ShopPage: React.FC = () => {
  const { addToCart, navigateToProduct, setQuickViewProduct, setIsQuizOpen } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'system', label: 'The 3-Step System' },
    { id: 'cleanse', label: 'Cleanse (Step 1)' },
    { id: 'condition', label: 'Condition (Step 2)' },
    { id: 'hydrate', label: 'Hydrate (Step 3)' },
    { id: 'accessory', label: 'Accessories' }
  ];

  const filteredProducts = useMemo(() => {
    let list = [...PRODUCTS];

    if (selectedCategory !== 'all') {
      list = list.filter((p) => p.category === selectedCategory);
    }

    if (sortBy === 'price-low') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      list.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'reviews') {
      list.sort((a, b) => b.reviewCount - a.reviewCount);
    }

    return list;
  }, [selectedCategory, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-widest text-[#B6573E]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Dermatologist Formulated • Textured Hair Tested</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#1F1B18]">
          The Scalp Care Collection
        </h1>
        <p className="text-sm sm:text-base text-[#6F675F] leading-relaxed">
          Clean, gentle, and clinically proven formulas engineered by Dr. Shari Hicks-Graham to relieve itching, dryness, and flakes while nourishing curly, coily, and wavy hair.
        </p>
      </div>

      {/* Filter and Sort Toolbar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-[#EADFD4]">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shrink-0 ${
                selectedCategory === cat.id
                  ? 'bg-[#B6573E] text-white shadow-xs'
                  : 'bg-[#F4EFEA] hover:bg-[#EADFD4] text-[#38322C]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Sort dropdown */}
        <div className="flex items-center space-x-2 text-xs text-[#6F675F] w-full sm:w-auto justify-end">
          <span className="font-medium">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="p-2 bg-white border border-[#D5C9BD] rounded-lg text-[#1F1B18] font-medium focus:outline-none focus:border-[#B6573E]"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
            <option value="reviews">Most Reviewed</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-3xl border border-[#EADFD4] overflow-hidden shadow-2xs hover:shadow-md transition-shadow flex flex-col group"
          >
            {/* Image Container */}
            <div
              className="aspect-4/3 sm:aspect-square bg-[#F4EFEA] relative cursor-pointer overflow-hidden"
              onClick={() => navigateToProduct(product.slug)}
            >
              <img
                src={product.primaryImage}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              {product.badge && (
                <span className="absolute top-4 left-4 bg-[#B6573E] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-xs">
                  {product.badge}
                </span>
              )}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setQuickViewProduct(product);
                }}
                className="absolute bottom-4 inset-x-4 bg-white/95 hover:bg-white text-[#1F1B18] text-xs font-bold py-2.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity text-center shadow-md"
              >
                Quick View
              </button>
            </div>

            {/* Product Body */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center space-x-1.5 text-amber-500 text-xs">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                  <span className="text-[#6F675F] text-xs font-semibold ml-1">
                    {product.rating} ({product.reviewCount})
                  </span>
                </div>

                <h3
                  onClick={() => navigateToProduct(product.slug)}
                  className="font-serif font-bold text-xl text-[#1F1B18] hover:text-[#B6573E] cursor-pointer transition-colors mt-1.5"
                >
                  {product.name}
                </h3>
                <p className="text-xs text-[#6F675F] mt-0.5">{product.subtitle} • {product.size}</p>

                <p className="text-xs text-[#38322C] mt-2.5 line-clamp-2 leading-relaxed">
                  {product.shortDescription}
                </p>
              </div>

              {/* Price & Add to Bag */}
              <div className="pt-3 border-t border-[#F4EFEA] space-y-3">
                <div className="flex items-baseline justify-between">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-lg font-bold text-[#1F1B18]">
                      ${product.price.toFixed(2)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs text-[#6F675F] line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] text-[#5F7466] font-semibold">
                    or ${(product.price * 0.8).toFixed(2)} with Subscribe & Save
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => addToCart(product, 1)}
                    className="w-full py-3 bg-[#1F1B18] hover:bg-[#B6573E] text-white text-xs uppercase tracking-wider font-bold rounded-xl transition-colors shadow-2xs"
                  >
                    + Add to Bag
                  </button>
                  <button
                    onClick={() => navigateToProduct(product.slug)}
                    className="w-full py-3 bg-[#F4EFEA] hover:bg-[#EADFD4] text-[#1F1B18] text-xs uppercase tracking-wider font-bold rounded-xl transition-colors"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Routine Finder Helper Banner */}
      <div className="bg-[#F4EFEA] rounded-3xl p-8 sm:p-12 border border-[#EADFD4] flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F1B18]">
            Need a personalized recommendation?
          </h3>
          <p className="text-xs sm:text-sm text-[#6F675F]">
            Take Dr. Shari's 60-second scalp quiz to find the exact formulation balance for your curl type and wash day habits.
          </p>
        </div>
        <button
          onClick={() => setIsQuizOpen(true)}
          className="px-6 py-3.5 bg-[#B6573E] hover:bg-[#A34B34] text-white rounded-xl text-xs uppercase tracking-widest font-bold shrink-0 transition-colors shadow-sm"
        >
          Start Scalp Quiz →
        </button>
      </div>
    </div>
  );
};
