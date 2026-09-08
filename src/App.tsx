import React, { useEffect } from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { SearchModal } from './components/SearchModal';
import { QuickViewModal } from './components/QuickViewModal';
import { ScalpQuizModal } from './components/ScalpQuizModal';

import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { StoryPage } from './pages/StoryPage';
import { SciencePage } from './pages/SciencePage';
import { PressPage } from './pages/PressPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { FaqPage } from './pages/FaqPage';
import { CheckoutPage } from './pages/CheckoutPage';

const MainContent: React.FC = () => {
  const { activePage } = useCart();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  const isProductDetail = activePage === 'product' || activePage === 'product-detail';
  const isStory = activePage === 'story';

  const containerBg = isStory ? 'bg-[#b8cdc6]' : isProductDetail ? 'bg-[#d5dec7]' : 'bg-[#d5dec7]';

  return (
    <div className={`min-h-screen flex flex-col ${containerBg} text-[#1F1B18] font-sans selection:bg-[#5e756c] selection:text-white`}>
      <Header />
      <main className="flex-1">
        {activePage === 'home' && <HomePage />}
        {activePage === 'shop' && <ShopPage />}
        {(activePage === 'product' || activePage === 'product-detail') && <ProductDetailPage />}
        {activePage === 'story' && <StoryPage />}
        {activePage === 'science' && <SciencePage />}
        {activePage === 'press' && <PressPage />}
        {activePage === 'reviews' && <ReviewsPage />}
        {activePage === 'faq' && <FaqPage />}
        {activePage === 'checkout' && <CheckoutPage />}
      </main>
      <Footer />

      {/* Global Drawers & Modals */}
      <CartDrawer />
      <SearchModal />
      <QuickViewModal />
      <ScalpQuizModal />
    </div>
  );
};

export default function App() {
  return (
    <CartProvider>
      <MainContent />
    </CartProvider>
  );
}
