import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, Truck, Sparkles, Tag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    cartSubtotal,
    amountUntilFreeShipping,
    hasFreeShipping,
    freeShippingThreshold,
    appliedDiscount,
    applyDiscount,
    removeDiscount,
    discountAmount,
    cartTotal,
    addToCart,
    setActivePage
  } = useCart();

  const [promoCodeInput, setPromoCodeInput] = useState('');
  const [promoMessage, setPromoMessage] = useState<{ text: string; isError: boolean } | null>(null);
  const [orderNote, setOrderNote] = useState('');
  const [showNoteInput, setShowNoteInput] = useState(false);

  if (!isCartOpen) return null;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoCodeInput.trim()) return;
    const res = applyDiscount(promoCodeInput);
    if (res.success) {
      setPromoMessage({ text: res.message, isError: false });
      setPromoCodeInput('');
    } else {
      setPromoMessage({ text: res.message, isError: true });
    }
  };

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setActivePage('checkout');
  };

  // Find upsell candidate (e.g. Scalp Massager if not in cart, else Trial pack)
  const upsellProduct = PRODUCTS.find(
    (p) => !cart.some((item) => item.product.id === p.id) && (p.slug === 'scalp-massager-brush' || p.slug === 'discovery-trial-pack')
  ) || PRODUCTS.find((p) => !cart.some((item) => item.product.id === p.id));

  const progressPercent = Math.min(100, Math.round((cartSubtotal / freeShippingThreshold) * 100));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FBF8F5] shadow-2xl flex flex-col border-l border-[#EADFD4]">
          {/* Drawer Header */}
          <div className="p-4 sm:p-6 border-b border-[#EADFD4] flex items-center justify-between bg-[#F4EFEA]/80">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="w-5 h-5 text-[#B6573E]" />
              <h2 className="text-lg font-serif font-bold text-[#1F1B18] tracking-wide">
                Your Scalp Care Bag
              </h2>
              <span className="text-xs bg-[#B6573E] text-white px-2 py-0.5 rounded-full font-bold">
                {cart.reduce((s, i) => s + i.quantity, 0)}
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 text-[#6F675F] hover:text-[#1F1B18] rounded-lg hover:bg-black/5 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Meter */}
          <div className="px-5 py-3.5 bg-[#EADFD4]/50 border-b border-[#EADFD4]">
            {hasFreeShipping ? (
              <div className="flex items-center space-x-2 text-xs font-semibold text-[#5F7466]">
                <Truck className="w-4 h-4 shrink-0 text-[#5F7466]" />
                <span>You've unlocked <strong>FREE Standard US Shipping!</strong></span>
              </div>
            ) : (
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs text-[#38322C]">
                  <span>
                    Add <strong>${amountUntilFreeShipping.toFixed(2)}</strong> more for <strong>Free US Shipping</strong>
                  </span>
                  <span className="font-semibold text-[#B6573E]">{progressPercent}%</span>
                </div>
                <div className="w-full h-2 bg-[#D5C9BD]/50 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#B6573E] transition-all duration-500 rounded-full"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Items Container */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 bg-[#F4EFEA] rounded-full flex items-center justify-center mx-auto text-[#B6573E]">
                  <ShoppingBag className="w-8 h-8 opacity-60" />
                </div>
                <div className="space-y-1">
                  <p className="font-serif text-lg font-medium text-[#1F1B18]">Your cart is empty</p>
                  <p className="text-xs text-[#6F675F] max-w-xs mx-auto">
                    Give your scalp the dermatologist-grade care it deserves. Start with our proven 3-Step System.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    setActivePage('shop');
                  }}
                  className="inline-flex items-center space-x-2 bg-[#B6573E] text-white px-6 py-2.5 rounded-xl text-xs uppercase tracking-wider font-semibold hover:bg-[#A34B34] transition-colors"
                >
                  <span>Explore Products</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              cart.map((item) => {
                const effectivePrice = item.isSubscription
                  ? item.product.price * 0.8
                  : item.product.price;

                return (
                  <div
                    key={`${item.product.id}-${item.isSubscription ? 'sub' : 'one'}`}
                    className="flex space-x-4 p-3 bg-white rounded-xl border border-[#EADFD4] shadow-2xs relative group"
                  >
                    {/* Thumbnail */}
                    <div className="w-20 h-20 bg-[#F4EFEA] rounded-lg overflow-hidden shrink-0">
                      <img
                        src={item.product.primaryImage}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="text-sm font-serif font-bold text-[#1F1B18] truncate pr-2">
                            {item.product.name}
                          </h4>
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-[#6F675F] hover:text-red-600 transition-colors p-1"
                            title="Remove item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-xs text-[#6F675F] truncate">{item.product.size}</p>
                        {item.isSubscription && (
                          <div className="inline-flex items-center space-x-1 mt-1 text-[11px] font-semibold text-[#5F7466] bg-[#5F7466]/10 px-2 py-0.5 rounded-full">
                            <Sparkles className="w-3 h-3" />
                            <span>Subscribed (20% off • Every 8 wks)</span>
                          </div>
                        )}
                      </div>

                      {/* Quantity & Price */}
                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#F4EFEA]">
                        <div className="flex items-center border border-[#D5C9BD] rounded-lg bg-[#FBF8F5]">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="p-1 hover:bg-[#EADFD4] text-[#1F1B18] rounded-l transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-3 text-xs font-semibold text-[#1F1B18]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="p-1 hover:bg-[#EADFD4] text-[#1F1B18] rounded-r transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <div className="text-right">
                          <span className="text-sm font-bold text-[#1F1B18]">
                            ${(effectivePrice * item.quantity).toFixed(2)}
                          </span>
                          {item.isSubscription && (
                            <div className="text-[10px] text-[#6F675F] line-through">
                              ${(item.product.price * item.quantity).toFixed(2)}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}

            {/* In-Cart Upsell Card */}
            {cart.length > 0 && upsellProduct && (
              <div className="mt-4 p-3.5 bg-[#F4EFEA] rounded-xl border border-[#D5C9BD]/70 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-[#B6573E]">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Pairs Perfectly With Your Routine</span>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <img
                    src={upsellProduct.primaryImage}
                    alt={upsellProduct.name}
                    className="w-14 h-14 object-cover rounded-lg bg-white shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-[#1F1B18] truncate">{upsellProduct.name}</p>
                    <p className="text-[11px] text-[#6F675F] line-clamp-1">{upsellProduct.subtitle}</p>
                    <p className="text-xs font-bold text-[#1F1B18] mt-0.5">${upsellProduct.price.toFixed(2)}</p>
                  </div>
                  <button
                    onClick={() => addToCart(upsellProduct, 1)}
                    className="px-3 py-1.5 bg-[#1F1B18] text-white hover:bg-[#B6573E] text-xs font-semibold rounded-lg transition-colors shrink-0"
                  >
                    + Add
                  </button>
                </div>
              </div>
            )}

            {/* Expandable Order Note */}
            {cart.length > 0 && (
              <div className="pt-2">
                {!showNoteInput ? (
                  <button
                    onClick={() => setShowNoteInput(true)}
                    className="text-xs text-[#6F675F] hover:text-[#B6573E] underline underline-offset-2"
                  >
                    + Add order instructions or delivery note
                  </button>
                ) : (
                  <div className="space-y-1.5 bg-white p-3 rounded-lg border border-[#EADFD4]">
                    <label className="text-xs font-medium text-[#38322C]">Special Delivery Instructions:</label>
                    <textarea
                      value={orderNote}
                      onChange={(e) => setOrderNote(e.target.value)}
                      placeholder="e.g. Leave by front door, gift message..."
                      rows={2}
                      className="w-full text-xs p-2 border border-[#D5C9BD] rounded-md focus:outline-none focus:border-[#B6573E]"
                    />
                    <button
                      onClick={() => setShowNoteInput(false)}
                      className="text-[11px] text-[#5F7466] font-semibold"
                    >
                      Save note
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Drawer Footer / Checkout Actions */}
          {cart.length > 0 && (
            <div className="p-5 bg-white border-t border-[#EADFD4] space-y-3">
              {/* Promo Code Accordion */}
              <form onSubmit={handleApplyPromo} className="flex space-x-2">
                <div className="relative flex-1">
                  <Tag className="w-3.5 h-3.5 absolute left-3 top-3 text-[#6F675F]" />
                  <input
                    type="text"
                    placeholder="Discount code (e.g. WELCOME15)"
                    value={promoCodeInput}
                    onChange={(e) => setPromoCodeInput(e.target.value)}
                    className="w-full pl-8 pr-2 py-2 text-xs border border-[#D5C9BD] rounded-lg focus:outline-none focus:border-[#B6573E] uppercase"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#F4EFEA] hover:bg-[#EADFD4] text-xs font-semibold text-[#1F1B18] rounded-lg transition-colors border border-[#D5C9BD]"
                >
                  Apply
                </button>
              </form>

              {promoMessage && (
                <p
                  className={`text-[11px] font-medium ${
                    promoMessage.isError ? 'text-red-600' : 'text-[#5F7466]'
                  }`}
                >
                  {promoMessage.text}
                </p>
              )}

              {appliedDiscount && (
                <div className="flex items-center justify-between text-xs bg-[#5F7466]/10 text-[#5F7466] px-2.5 py-1.5 rounded-lg">
                  <span>Code: <strong>{appliedDiscount.code}</strong> ({(appliedDiscount.percent * 100)}% off)</span>
                  <button
                    onClick={removeDiscount}
                    className="text-xs hover:text-red-600 font-bold"
                  >
                    ✕
                  </button>
                </div>
              )}

              {/* Price Calculations */}
              <div className="space-y-1.5 text-xs text-[#38322C] pt-1">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold">${cartSubtotal.toFixed(2)}</span>
                </div>
                {appliedDiscount && (
                  <div className="flex justify-between text-[#5F7466]">
                    <span>Discount</span>
                    <span>-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{hasFreeShipping ? 'FREE' : 'Calculated at checkout'}</span>
                </div>
                <div className="flex justify-between text-base font-bold text-[#1F1B18] pt-2 border-t border-[#EADFD4]">
                  <span>Total</span>
                  <span>${cartTotal.toFixed(2)} USD</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleProceedToCheckout}
                className="w-full flex items-center justify-center space-x-2 bg-[#B6573E] hover:bg-[#A34B34] text-white py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs transition-all shadow-md active:scale-[0.99]"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Trust Badges */}
              <div className="flex items-center justify-center space-x-4 text-[10px] text-[#6F675F] pt-1">
                <div className="flex items-center space-x-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#5F7466]" />
                  <span>30-Day Guarantee</span>
                </div>
                <span>•</span>
                <div className="flex items-center space-x-1">
                  <Truck className="w-3.5 h-3.5 text-[#5F7466]" />
                  <span>Fast US Shipping</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
