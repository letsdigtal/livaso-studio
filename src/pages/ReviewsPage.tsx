import React, { useState } from 'react';
import {
  Star,
  Check,
  Search,
  ThumbsUp,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { REVIEWS, PRODUCTS } from '../data/products';
import { ProductReview } from '../types';

import elizabethBlountImg from '../assets/images/elizabeth_blount_red_dress_1788842099060.jpg';
import whatDrivesUsImg from '../assets/images/what_drives_us_woman_1788842114318.jpg';

export const ReviewsPage: React.FC = () => {
  const { addToCart, navigateToProduct } = useCart();
  const [reviewsList, setReviewsList] = useState<ProductReview[]>(REVIEWS);
  const [filterType, setFilterType] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [helpfulVotes, setHelpfulVotes] = useState<Record<string, number>>({});

  // Form state
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [hairType, setHairType] = useState('Type 4C Coily');
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');

  const handleHelpful = (id: string) => {
    setHelpfulVotes((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    const newRev: ProductReview = {
      id: `rev-${Date.now()}`,
      author: name,
      rating,
      date: 'Just now',
      title: title || 'Life-changing scalp relief!',
      comment,
      verified: true,
      hairType,
      recommended: true
    };

    setReviewsList([newRev, ...reviewsList]);
    setSubmitted(true);
    setTimeout(() => {
      setShowModal(false);
      setSubmitted(false);
      setName('');
      setTitle('');
      setComment('');
    }, 1800);
  };

  const filtered = reviewsList.filter((r) => {
    // Filter by category
    if (filterType === 'type4' && !r.hairType?.includes('4')) return false;
    if (filterType === 'type3' && !r.hairType?.includes('3')) return false;
    if (filterType === 'locs' && !r.hairType?.includes('Loc') && !r.hairType?.includes('Braid')) return false;
    if (filterType === '5star' && r.rating !== 5) return false;

    // Filter by search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = r.title.toLowerCase().includes(q);
      const matchComment = r.comment.toLowerCase().includes(q);
      const matchAuthor = r.author.toLowerCase().includes(q);
      return matchTitle || matchComment || matchAuthor;
    }

    return true;
  });

  return (
    <div className="w-full">
      {/* 1. Sage Green Hero Banner */}
      <section className="bg-[#97b2a8] text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-xs px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-white">
            <Sparkles className="w-3.5 h-3.5" />
            <span>4.9 / 5 Average Rating • 430+ Verified Customers</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-normal tracking-tight text-white">
            Testimonials
          </h1>
          <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto font-medium leading-relaxed">
            Real stories and clinical transformations from people who finally found gentle, lasting scalp comfort.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-16">
        {/* Featured Community Transformation: Elizabeth Blount McCormick */}
        <div className="bg-[#FAF7F3] rounded-3xl p-8 sm:p-12 border border-[#EADFD4] grid grid-cols-1 md:grid-cols-12 gap-8 items-center shadow-xs">
          <div className="md:col-span-5 aspect-4/5 rounded-2xl overflow-hidden shadow-sm border border-[#EADFD4]">
            <img
              src={elizabethBlountImg}
              alt="Elizabeth Blount McCormick - LivSo Customer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:col-span-7 space-y-4">
            <div className="flex items-center space-x-2 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="text-xs uppercase tracking-widest text-[#486358] font-bold block">
              Featured Community Story
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F1B18]">
              "LivSo completely transformed my wash day and ended my constant itch."
            </h3>
            <p className="text-xs sm:text-sm text-[#38322C] leading-relaxed italic">
              "As a business executive constantly on planes and in meetings, the persistent itch and flaky scalp was not only uncomfortable, but deeply distracting. Traditional medicated shampoos left my natural hair dry like straw. Within two weeks of using LivSo’s Three-Step System, my scalp was calm and my hair was softer than ever."
            </p>
            <div className="pt-2 border-t border-[#EADFD4]">
              <strong className="block text-sm font-bold text-[#1F1B18]">Elizabeth Blount McCormick</strong>
              <span className="text-xs text-[#6F675F]">President & Owner, UNIGLOBE Travel Designers • Verified Customer</span>
            </div>
          </div>
        </div>

        {/* Rating Scoreboard & Write Review CTA */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#EADFD4] shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 text-center lg:text-left space-y-2 lg:border-r border-[#EADFD4] lg:pr-8">
            <div className="text-5xl sm:text-6xl font-serif font-bold text-[#1F1B18]">4.9</div>
            <div className="flex justify-center lg:justify-start text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <p className="text-xs text-[#6F675F]">Based on 432 verified customer reviews</p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="w-full sm:w-auto px-6 py-3 bg-[#486358] hover:bg-[#394f45] text-white rounded-xl text-xs uppercase tracking-wider font-bold transition-colors shadow-xs cursor-pointer"
              >
                Write a Review
              </button>
            </div>
          </div>

          {/* Star Distribution Bars */}
          <div className="lg:col-span-8 space-y-2 text-xs">
            <div className="flex items-center space-x-3">
              <span className="w-14 text-[#1F1B18] font-bold">5 Stars</span>
              <div className="flex-1 h-3 bg-[#F4EFEA] rounded-full overflow-hidden">
                <div className="h-full bg-amber-500 rounded-full" style={{ width: '92%' }} />
              </div>
              <span className="w-10 text-right text-[#6F675F]">92%</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="w-14 text-[#1F1B18] font-bold">4 Stars</span>
              <div className="flex-1 h-3 bg-[#F4EFEA] rounded-full overflow-hidden">
                <div className="h-full bg-amber-500 rounded-full" style={{ width: '6%' }} />
              </div>
              <span className="w-10 text-right text-[#6F675F]">6%</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="w-14 text-[#1F1B18] font-bold">3 Stars</span>
              <div className="flex-1 h-3 bg-[#F4EFEA] rounded-full overflow-hidden">
                <div className="h-full bg-amber-500 rounded-full" style={{ width: '1.5%' }} />
              </div>
              <span className="w-10 text-right text-[#6F675F]">1.5%</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="w-14 text-[#1F1B18] font-bold">2 Stars</span>
              <div className="flex-1 h-3 bg-[#F4EFEA] rounded-full overflow-hidden">
                <div className="h-full bg-gray-300 rounded-full" style={{ width: '0.5%' }} />
              </div>
              <span className="w-10 text-right text-[#6F675F]">0.5%</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="w-14 text-[#1F1B18] font-bold">1 Star</span>
              <div className="flex-1 h-3 bg-[#F4EFEA] rounded-full overflow-hidden">
                <div className="h-full bg-gray-300 rounded-full" style={{ width: '0%' }} />
              </div>
              <span className="w-10 text-right text-[#6F675F]">0%</span>
            </div>
          </div>
        </div>

        {/* Filter and Search Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-[#EADFD4]">
          <div className="flex flex-wrap gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => setFilterType('all')}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                filterType === 'all'
                  ? 'bg-[#486358] text-white shadow-xs'
                  : 'bg-[#F4EFEA] text-[#38322C] hover:bg-[#EADFD4]'
              }`}
            >
              All Reviews
            </button>
            <button
              type="button"
              onClick={() => setFilterType('type4')}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                filterType === 'type4'
                  ? 'bg-[#486358] text-white shadow-xs'
                  : 'bg-[#F4EFEA] text-[#38322C] hover:bg-[#EADFD4]'
              }`}
            >
              Type 4 Coils & Kinks
            </button>
            <button
              type="button"
              onClick={() => setFilterType('type3')}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                filterType === 'type3'
                  ? 'bg-[#486358] text-white shadow-xs'
                  : 'bg-[#F4EFEA] text-[#38322C] hover:bg-[#EADFD4]'
              }`}
            >
              Type 3 Curls
            </button>
            <button
              type="button"
              onClick={() => setFilterType('locs')}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                filterType === 'locs'
                  ? 'bg-[#486358] text-white shadow-xs'
                  : 'bg-[#F4EFEA] text-[#38322C] hover:bg-[#EADFD4]'
              }`}
            >
              Locs & Braids
            </button>
            <button
              type="button"
              onClick={() => setFilterType('5star')}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                filterType === '5star'
                  ? 'bg-[#486358] text-white shadow-xs'
                  : 'bg-[#F4EFEA] text-[#38322C] hover:bg-[#EADFD4]'
              }`}
            >
              5-Star Only
            </button>
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 absolute left-3 top-3 text-[#6F675F]" />
            <input
              type="text"
              placeholder="Search reviews (e.g. locs, itch)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-[#D5C9BD] rounded-xl focus:outline-none focus:border-[#486358]"
            />
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((r) => (
            <div
              key={r.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-[#EADFD4] shadow-2xs space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-500">
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs text-[#6F675F]">{r.date}</span>
                </div>

                {r.hairType && (
                  <span className="inline-block text-[11px] bg-[#97b2a8]/15 text-[#486358] px-2.5 py-0.5 rounded-full font-semibold">
                    {r.hairType}
                  </span>
                )}

                <h4 className="font-serif font-bold text-base text-[#1F1B18]">
                  "{r.title}"
                </h4>
                <p className="text-xs sm:text-sm text-[#38322C] leading-relaxed">
                  {r.comment}
                </p>
              </div>

              <div className="pt-3 border-t border-[#F4EFEA] flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-[#1F1B18] block">{r.author}</span>
                  {r.verified && (
                    <span className="inline-flex items-center space-x-1 text-[#486358] font-semibold text-[11px]">
                      <Check className="w-3 h-3" />
                      <span>Verified Buyer</span>
                    </span>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => handleHelpful(r.id)}
                  className="inline-flex items-center space-x-1.5 text-xs text-[#6F675F] hover:text-[#486358] transition-colors cursor-pointer"
                >
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>Helpful ({helpfulVotes[r.id] || 14})</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA to Shop */}
        <div className="bg-[#486358] text-white rounded-3xl p-8 sm:p-14 text-center border border-[#3d5349] space-y-6 shadow-xl">
          <h3 className="font-serif text-3xl sm:text-4xl font-normal text-white">
            Ready to Experience True Scalp Relief?
          </h3>
          <p className="text-xs sm:text-sm text-white/90 max-w-lg mx-auto leading-relaxed">
            Join thousands of women and men who restored calm to their scalp and moisture to their curls. Backed by our 30-day money-back guarantee.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={() => addToCart(PRODUCTS[0], 1)}
              className="w-full sm:w-auto px-8 py-4 bg-white text-[#486358] hover:bg-[#FAF7F3] rounded-xl text-xs uppercase tracking-widest font-bold shadow-md transition-all cursor-pointer"
            >
              Shop The 3-Step System • $49.50
            </button>
            <button
              type="button"
              onClick={() => navigateToProduct('moisturizing-shampoo')}
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white text-white hover:bg-white/10 rounded-xl text-xs uppercase tracking-widest font-bold transition-all cursor-pointer"
            >
              Explore Shampoo • $19.00
            </button>
          </div>
        </div>
      </div>

      {/* Write Review Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setShowModal(false)}
          />
          <div className="relative min-h-screen flex items-center justify-center p-4">
            <div className="relative w-full max-w-lg bg-[#FBF8F5] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#EADFD4]">
              {submitted ? (
                <div className="text-center py-8 space-y-3">
                  <div className="w-12 h-12 bg-[#486358]/20 text-[#486358] rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-[#1F1B18]">
                    Thank you for your review!
                  </h4>
                  <p className="text-xs text-[#6F675F]">
                    Your honest feedback helps others in the community find genuine scalp relief.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleAddReview} className="space-y-4">
                  <h3 className="font-serif text-2xl font-bold text-[#1F1B18]">Write a Review</h3>

                  <div>
                    <label className="text-xs font-semibold text-[#1F1B18] block mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Kendra W."
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-white border border-[#D5C9BD] rounded-xl focus:outline-none focus:border-[#486358]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-[#1F1B18] block mb-1">Rating</label>
                      <select
                        value={rating}
                        onChange={(e) => setRating(Number(e.target.value))}
                        className="w-full px-3 py-2 text-xs bg-white border border-[#D5C9BD] rounded-xl focus:outline-none focus:border-[#486358]"
                      >
                        <option value={5}>5 Stars - Outstanding</option>
                        <option value={4}>4 Stars - Very Good</option>
                        <option value={3}>3 Stars - Good</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-[#1F1B18] block mb-1">Hair Type / Style</label>
                      <select
                        value={hairType}
                        onChange={(e) => setHairType(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-white border border-[#D5C9BD] rounded-xl focus:outline-none focus:border-[#486358]"
                      >
                        <option value="Type 4C Coily">Type 4C Coily</option>
                        <option value="Type 4A/4B Kinky">Type 4A/4B Kinky</option>
                        <option value="Type 3 Curly">Type 3 Curly</option>
                        <option value="Locs / Sisterlocks">Locs / Sisterlocks</option>
                        <option value="Box Braids / Twists">Box Braids / Twists</option>
                        <option value="Relaxed / Chemically Treated">Relaxed / Chemically Treated</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#1F1B18] block mb-1">Review Title</label>
                    <input
                      type="text"
                      placeholder="e.g. Cleared my scalp without drying my hair!"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-white border border-[#D5C9BD] rounded-xl focus:outline-none focus:border-[#486358]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#1F1B18] block mb-1">Your Honest Review</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Share details of your scalp condition and how LivSo performed for you..."
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-white border border-[#D5C9BD] rounded-xl focus:outline-none focus:border-[#486358]"
                    />
                  </div>

                  <div className="flex items-center justify-end space-x-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setShowModal(false)}
                      className="px-4 py-2 text-xs font-semibold text-[#6F675F] hover:text-[#1F1B18] cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-[#486358] hover:bg-[#394f45] text-white rounded-xl text-xs uppercase tracking-wider font-bold transition-colors cursor-pointer"
                    >
                      Submit Review
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
