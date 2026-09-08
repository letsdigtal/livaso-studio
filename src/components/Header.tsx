import React, { useState } from 'react';
import { ShoppingBag, Search, Menu, X, ChevronDown } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';

export const Header: React.FC = () => {
  const {
    cartCount,
    setIsCartOpen,
    setIsQuizOpen,
    activePage,
    setActivePage,
    navigateToProduct
  } = useCart();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  const handleNavClick = (page: any) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
  };

  const headerBg = activePage === 'story' ? 'bg-[#b8cdc6]' : 'bg-[#d5dec7]';

  return (
    <header className={`sticky top-0 z-40 w-full ${headerBg} transition-colors duration-200`}>
      {/* Main Navigation Bar - Matches LivSo Screenshot */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Logo */}
          <div
            className="cursor-pointer select-none flex items-center"
            onClick={() => handleNavClick('home')}
          >
            <span className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-normal tracking-tight text-white drop-shadow-xs">
              LivSo
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-7 lg:space-x-9 text-[13px] sm:text-sm font-medium tracking-wide">
            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => setProductsDropdownOpen(false)}
            >
              <button
                onClick={() => {
                  navigateToProduct('moisturizing-shampoo');
                  setActivePage('product-detail');
                }}
                className={`py-2 text-white hover:text-white/80 transition-colors font-medium flex items-center gap-1 ${
                  activePage === 'product-detail' || activePage === 'shop' ? 'border-b-2 border-white' : ''
                }`}
              >
                <span>Products</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-80" />
              </button>

              {productsDropdownOpen && (
                <div className="absolute left-0 top-full pt-2 w-64 z-50">
                  <div className="bg-[#e2ead6] border border-[#c4d1b8] rounded-xl shadow-lg p-3 space-y-1 text-[#2c3d33]">
                    <button
                      onClick={() => {
                        navigateToProduct('moisturizing-shampoo');
                        setActivePage('product-detail');
                        setProductsDropdownOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/60 transition-colors text-xs font-semibold flex items-center justify-between"
                    >
                      <span>Moisturizing Shampoo</span>
                      <span className="text-[#5e756c] font-bold">$19</span>
                    </button>
                    <button
                      onClick={() => {
                        navigateToProduct('moisturizing-conditioner');
                        setActivePage('product-detail');
                        setProductsDropdownOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/60 transition-colors text-xs font-semibold flex items-center justify-between"
                    >
                      <span>Moisturizing Conditioner</span>
                      <span className="text-[#5e756c] font-bold">$19</span>
                    </button>
                    <button
                      onClick={() => {
                        navigateToProduct('moisturizing-lotion');
                        setActivePage('product-detail');
                        setProductsDropdownOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/60 transition-colors text-xs font-semibold flex items-center justify-between"
                    >
                      <span>Scalp Lotion</span>
                      <span className="text-[#5e756c] font-bold">$19</span>
                    </button>
                    <button
                      onClick={() => {
                        navigateToProduct('three-step-system');
                        setActivePage('product-detail');
                        setProductsDropdownOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/60 transition-colors text-xs font-semibold flex items-center justify-between border-t border-[#c4d1b8]/50 pt-2 mt-1"
                    >
                      <span>The Three-Step System</span>
                      <span className="text-[#5e756c] font-bold">$49.50</span>
                    </button>
                    <button
                      onClick={() => handleNavClick('shop')}
                      className="w-full text-left px-3 py-1.5 rounded-lg hover:bg-white/40 transition-colors text-[11px] text-[#5e756c] font-medium text-center"
                    >
                      View All Products →
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('story')}
              className={`py-2 text-white hover:text-white/80 transition-colors font-medium ${
                activePage === 'story' ? 'border-b-2 border-white' : ''
              }`}
            >
              The Story
            </button>

            <button
              onClick={() => handleNavClick('science')}
              className="py-2 text-white hover:text-white/80 transition-colors font-medium"
            >
              Expert Advice
            </button>

            <button
              onClick={() => handleNavClick('reviews')}
              className="py-2 text-white hover:text-white/80 transition-colors font-medium"
            >
              Testimonials
            </button>

            {/* Subtle Divider Slash */}
            <span className="text-white/50 text-base font-light select-none">/</span>

            {/* Shopping Cart Icon (exact match to Shopify header) */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-1 text-white hover:text-white/80 transition-colors flex items-center"
              aria-label="Shopping Cart"
            >
              <svg className="w-5 h-5 text-white stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-[#5e756c] text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center border border-[#d5dec7]">
                  {cartCount}
                </span>
              )}
            </button>
          </nav>

          {/* Mobile Right: Cart & Menu */}
          <div className="flex items-center space-x-4 md:hidden">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-1 text-white hover:text-white/80 transition-colors"
              aria-label="Cart"
            >
              <svg className="w-6 h-6 text-white stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-[#5e756c] text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center border border-[#d5dec7]">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1 text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[110px] z-50 bg-[#97b2a8] text-white px-6 py-8 overflow-y-auto space-y-6">
          <button
            onClick={() => handleNavClick('shop')}
            className="block w-full text-left text-lg font-serif font-bold py-2 border-b border-white/20"
          >
            Products
          </button>
          <button
            onClick={() => handleNavClick('story')}
            className="block w-full text-left text-lg font-serif font-bold py-2 border-b border-white/20"
          >
            The Story
          </button>
          <button
            onClick={() => handleNavClick('science')}
            className="block w-full text-left text-lg font-serif font-bold py-2 border-b border-white/20"
          >
            Expert Advice
          </button>
          <button
            onClick={() => handleNavClick('reviews')}
            className="block w-full text-left text-lg font-serif font-bold py-2 border-b border-white/20"
          >
            Testimonials
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              setIsQuizOpen(true);
            }}
            className="block w-full text-center py-3.5 bg-[#486358] text-white rounded-xl text-xs uppercase tracking-widest font-bold shadow-md"
          >
            Take Scalp Quiz
          </button>
        </div>
      )}
    </header>
  );
};
