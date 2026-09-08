import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, ActivePage } from '../types';
import { PRODUCTS } from '../data/products';

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number, isSubscription?: boolean, frequency?: '4-weeks' | '8-weeks' | '12-weeks') => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  isQuizOpen: boolean;
  setIsQuizOpen: (open: boolean) => void;
  quickViewProduct: Product | null;
  setQuickViewProduct: (product: Product | null) => void;
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
  selectedProductSlug: string | null;
  setSelectedProductSlug: (slug: string | null) => void;
  navigateToProduct: (slug: string) => void;
  cartSubtotal: number;
  freeShippingThreshold: number;
  amountUntilFreeShipping: number;
  hasFreeShipping: boolean;
  appliedDiscount: { code: string; percent: number } | null;
  applyDiscount: (code: string) => { success: boolean; message: string };
  removeDiscount: () => void;
  discountAmount: number;
  cartTotal: number;
  cartCount: number;
  lastAddedProduct: Product | null;
  notification: string | null;
  setNotification: (msg: string | null) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const FREE_SHIPPING_THRESHOLD = 49.00;

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('livso_cart');
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    // Default initial cart with the Three-Step System so user can experience the cart drawer right away
    const defaultBundle = PRODUCTS[0];
    return defaultBundle ? [{ product: defaultBundle, quantity: 1, isSubscription: false }] : [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [selectedProductSlug, setSelectedProductSlug] = useState<string | null>('moisturizing-shampoo');
  const [appliedDiscount, setAppliedDiscount] = useState<{ code: string; percent: number } | null>(null);
  const [lastAddedProduct, setLastAddedProduct] = useState<Product | null>(null);
  const [notification, setNotification] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('livso_cart', JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  // Handle browser scroll to top on page switch
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage, selectedProductSlug]);

  const addToCart = (
    product: Product,
    quantity = 1,
    isSubscription = false,
    frequency: '4-weeks' | '8-weeks' | '12-weeks' = '8-weeks'
  ) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.isSubscription === isSubscription
      );

      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity
        };
        return next;
      }

      return [
        ...prev,
        {
          product,
          quantity,
          isSubscription,
          subscriptionFrequency: isSubscription ? frequency : undefined
        }
      ];
    });

    setLastAddedProduct(product);
    setNotification(`Added "${product.name}" to cart!`);
    setIsCartOpen(true);

    setTimeout(() => {
      setNotification(null);
    }, 3500);
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const navigateToProduct = (slug: string) => {
    setSelectedProductSlug(slug);
    setActivePage('product-detail');
    if (quickViewProduct) setQuickViewProduct(null);
  };

  const applyDiscount = (code: string) => {
    const cleanCode = code.trim().toUpperCase();
    if (cleanCode === 'WELCOME15' || cleanCode === 'LIVSO15') {
      setAppliedDiscount({ code: cleanCode, percent: 0.15 });
      return { success: true, message: '15% discount applied!' };
    }
    if (cleanCode === 'SCALPCARE20') {
      setAppliedDiscount({ code: cleanCode, percent: 0.20 });
      return { success: true, message: '20% special discount applied!' };
    }
    return { success: false, message: 'Invalid promo code. Try "WELCOME15"' };
  };

  const removeDiscount = () => {
    setAppliedDiscount(null);
  };

  // Calculations
  const cartSubtotal = cart.reduce((sum, item) => {
    const itemPrice = item.isSubscription ? item.product.price * 0.8 : item.product.price;
    return sum + itemPrice * item.quantity;
  }, 0);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const amountUntilFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - cartSubtotal);
  const hasFreeShipping = cartSubtotal >= FREE_SHIPPING_THRESHOLD && cartCount > 0;

  const discountAmount = appliedDiscount ? cartSubtotal * appliedDiscount.percent : 0;
  const cartTotal = Math.max(0, cartSubtotal - discountAmount);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        isSearchOpen,
        setIsSearchOpen,
        isQuizOpen,
        setIsQuizOpen,
        quickViewProduct,
        setQuickViewProduct,
        activePage,
        setActivePage,
        selectedProductSlug,
        setSelectedProductSlug,
        navigateToProduct,
        cartSubtotal,
        freeShippingThreshold: FREE_SHIPPING_THRESHOLD,
        amountUntilFreeShipping,
        hasFreeShipping,
        appliedDiscount,
        applyDiscount,
        removeDiscount,
        discountAmount,
        cartTotal,
        cartCount,
        lastAddedProduct,
        notification,
        setNotification
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};
