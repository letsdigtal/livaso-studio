import React, { useState } from 'react';
import { ShieldCheck, Lock, Check, ArrowLeft, ArrowRight, Truck, Tag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CheckoutPage: React.FC = () => {
  const {
    items,
    subtotal,
    discountCode,
    discountAmount,
    applyDiscountCode,
    removeDiscountCode,
    shippingCost,
    total,
    clearCart,
    setActivePage
  } = useCart();

  const [step, setStep] = useState<'information' | 'confirmation'>('information');
  const [discountInput, setDiscountInput] = useState('');
  const [discountError, setDiscountError] = useState('');
  const [shippingMethod, setShippingMethod] = useState<'standard' | 'express'>('standard');
  const [orderNumber, setOrderNumber] = useState('');

  // Form Fields
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('OH');
  const [zip, setZip] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExp, setCardExp] = useState('');
  const [cardCvc, setCardCvc] = useState('');

  const handleApplyCode = (e: React.FormEvent) => {
    e.preventDefault();
    setDiscountError('');
    if (!discountInput.trim()) return;

    const success = applyDiscountCode(discountInput.trim());
    if (!success) {
      setDiscountError('Invalid code. Try "WELCOME15" or "LIVSO10"');
    } else {
      setDiscountInput('');
    }
  };

  const finalShipping = shippingMethod === 'express' ? 9.99 : shippingCost;
  const grandTotal = Math.max(0, subtotal - discountAmount + finalShipping);

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedOrder = `LIVSO-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderNumber(generatedOrder);
    setStep('confirmation');
    clearCart();
  };

  if (items.length === 0 && step !== 'confirmation') {
    return (
      <div className="max-w-xl mx-auto px-4 py-20 text-center space-y-6">
        <h2 className="font-serif text-3xl font-bold text-[#1F1B18]">Your Bag is Empty</h2>
        <p className="text-sm text-[#6F675F]">
          Add items to your bag to proceed through our secure checkout.
        </p>
        <button
          onClick={() => setActivePage('shop')}
          className="px-8 py-3.5 bg-[#B6573E] text-white font-bold rounded-xl text-xs uppercase tracking-wider"
        >
          Return to Shop
        </button>
      </div>
    );
  }

  // Confirmation View
  if (step === 'confirmation') {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 sm:py-24 text-center space-y-8">
        <div className="w-16 h-16 bg-[#5F7466]/20 text-[#5F7466] rounded-full flex items-center justify-center mx-auto">
          <Check className="w-8 h-8" />
        </div>

        <div className="space-y-3">
          <span className="text-xs uppercase tracking-widest font-bold text-[#B6573E]">
            Order Confirmed • Thank You!
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F1B18]">
            Your Scalp Relief Is on the Way
          </h1>
          <p className="text-sm text-[#6F675F]">
            We have received your order <strong>#{orderNumber}</strong>. A confirmation email and tracking link have been dispatched to <strong>{email || 'your email'}</strong>.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#EADFD4] shadow-xs text-left space-y-4">
          <h3 className="font-serif font-bold text-lg text-[#1F1B18] border-b border-[#F4EFEA] pb-3">
            Shipping & Order Details
          </h3>
          <div className="grid grid-cols-2 gap-4 text-xs text-[#38322C]">
            <div>
              <span className="text-[#6F675F] block">Ship To:</span>
              <p className="font-semibold text-[#1F1B18]">{firstName || 'Customer'} {lastName}</p>
              <p>{address || '123 Main St'}</p>
              <p>{city || 'Columbus'}, {state} {zip || '43215'}</p>
            </div>
            <div>
              <span className="text-[#6F675F] block">Delivery Method:</span>
              <p className="font-semibold text-[#1F1B18]">
                {shippingMethod === 'express' ? 'Expedited 2-Day Shipping' : 'Standard 3-5 Day Tracked'}
              </p>
              <span className="text-[#6F675F] block mt-2">Doctor's Guarantee:</span>
              <p className="text-[#5F7466] font-semibold">30-Day Itch-Free Trial</p>
            </div>
          </div>
        </div>

        <button
          onClick={() => setActivePage('home')}
          className="px-8 py-4 bg-[#1F1B18] hover:bg-[#B6573E] text-white rounded-xl text-xs uppercase tracking-widest font-bold transition-colors"
        >
          Return to LivSo Homepage
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Checkout Inputs */}
        <div className="lg:col-span-7 space-y-8">
          <div className="flex items-center space-x-2 text-xs text-[#6F675F]">
            <button
              onClick={() => setActivePage('shop')}
              className="hover:text-[#B6573E] flex items-center space-x-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to store</span>
            </button>
          </div>

          {/* Express Checkout options */}
          <div className="space-y-3">
            <div className="text-center text-xs uppercase tracking-widest font-semibold text-[#6F675F]">
              Express Checkout
            </div>
            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                className="py-3 bg-[#5A31F4] text-white rounded-xl font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center justify-center shadow-xs"
              >
                Shop Pay
              </button>
              <button
                type="button"
                className="py-3 bg-[#FFC439] text-[#003087] rounded-xl font-bold text-xs hover:opacity-90 transition-opacity flex items-center justify-center shadow-xs"
              >
                PayPal
              </button>
              <button
                type="button"
                className="py-3 bg-black text-white rounded-xl font-bold text-xs hover:opacity-90 transition-opacity flex items-center justify-center shadow-xs"
              >
                G Pay
              </button>
            </div>
            <div className="relative flex py-2 items-center">
              <div className="grow border-t border-[#EADFD4]" />
              <span className="shrink mx-4 text-xs uppercase tracking-wider text-[#6F675F]">
                Or continue below
              </span>
              <div className="grow border-t border-[#EADFD4]" />
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handlePlaceOrder} className="space-y-8">
            {/* Contact Information */}
            <div className="space-y-3">
              <h3 className="font-serif font-bold text-lg text-[#1F1B18]">
                Contact Information
              </h3>
              <div>
                <input
                  type="email"
                  required
                  placeholder="Email address for order tracking"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-xs p-3.5 bg-white border border-[#D5C9BD] rounded-xl focus:outline-none focus:border-[#B6573E]"
                />
              </div>
              <label className="flex items-center space-x-2 text-xs text-[#6F675F] cursor-pointer">
                <input type="checkbox" defaultChecked className="rounded text-[#B6573E]" />
                <span>Email me with exclusive scalp care tips from Dr. Shari and product drops</span>
              </label>
            </div>

            {/* Shipping Address */}
            <div className="space-y-3">
              <h3 className="font-serif font-bold text-lg text-[#1F1B18]">
                Shipping Address
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="text-xs p-3.5 bg-white border border-[#D5C9BD] rounded-xl focus:outline-none focus:border-[#B6573E]"
                />
                <input
                  type="text"
                  required
                  placeholder="Last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="text-xs p-3.5 bg-white border border-[#D5C9BD] rounded-xl focus:outline-none focus:border-[#B6573E]"
                />
              </div>

              <input
                type="text"
                required
                placeholder="Street address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full text-xs p-3.5 bg-white border border-[#D5C9BD] rounded-xl focus:outline-none focus:border-[#B6573E]"
              />

              <div className="grid grid-cols-3 gap-3">
                <input
                  type="text"
                  required
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="text-xs p-3.5 bg-white border border-[#D5C9BD] rounded-xl focus:outline-none focus:border-[#B6573E]"
                />
                <input
                  type="text"
                  required
                  placeholder="State"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="text-xs p-3.5 bg-white border border-[#D5C9BD] rounded-xl focus:outline-none focus:border-[#B6573E]"
                />
                <input
                  type="text"
                  required
                  placeholder="ZIP code"
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                  className="text-xs p-3.5 bg-white border border-[#D5C9BD] rounded-xl focus:outline-none focus:border-[#B6573E]"
                />
              </div>
            </div>

            {/* Shipping Method */}
            <div className="space-y-3">
              <h3 className="font-serif font-bold text-lg text-[#1F1B18]">
                Shipping Method
              </h3>
              <div className="space-y-2">
                <label
                  onClick={() => setShippingMethod('standard')}
                  className={`p-4 rounded-2xl border cursor-pointer flex items-center justify-between transition-all ${
                    shippingMethod === 'standard'
                      ? 'border-[#B6573E] bg-white shadow-xs'
                      : 'border-[#D5C9BD] hover:bg-[#F4EFEA]'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="shipping"
                      checked={shippingMethod === 'standard'}
                      onChange={() => setShippingMethod('standard')}
                      className="text-[#B6573E]"
                    />
                    <div>
                      <div className="text-xs font-bold text-[#1F1B18]">Standard Tracked Shipping (3-5 Days)</div>
                      <div className="text-[11px] text-[#6F675F]">
                        {subtotal >= 49 ? 'Free on orders over $49' : 'Standard flat rate'}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#1F1B18]">
                    {subtotal >= 49 ? 'FREE' : '$4.99'}
                  </span>
                </label>

                <label
                  onClick={() => setShippingMethod('express')}
                  className={`p-4 rounded-2xl border cursor-pointer flex items-center justify-between transition-all ${
                    shippingMethod === 'express'
                      ? 'border-[#B6573E] bg-white shadow-xs'
                      : 'border-[#D5C9BD] hover:bg-[#F4EFEA]'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="shipping"
                      checked={shippingMethod === 'express'}
                      onChange={() => setShippingMethod('express')}
                      className="text-[#B6573E]"
                    />
                    <div>
                      <div className="text-xs font-bold text-[#1F1B18]">Expedited 2-Day Air</div>
                      <div className="text-[11px] text-[#6F675F]">Fastest delivery with priority packaging</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#1F1B18]">$9.99</span>
                </label>
              </div>
            </div>

            {/* Payment Section */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-serif font-bold text-lg text-[#1F1B18]">
                  Payment
                </h3>
                <span className="flex items-center space-x-1 text-[11px] text-[#5F7466] font-semibold">
                  <Lock className="w-3 h-3" />
                  <span>256-Bit Encrypted</span>
                </span>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-[#D5C9BD] space-y-3">
                <input
                  type="text"
                  required
                  placeholder="Card number"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  className="w-full text-xs p-3 bg-[#FBF8F5] border border-[#D5C9BD] rounded-xl focus:outline-none focus:border-[#B6573E]"
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="MM / YY"
                    value={cardExp}
                    onChange={(e) => setCardExp(e.target.value)}
                    className="text-xs p-3 bg-[#FBF8F5] border border-[#D5C9BD] rounded-xl focus:outline-none focus:border-[#B6573E]"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Security code (CVC)"
                    value={cardCvc}
                    onChange={(e) => setCardCvc(e.target.value)}
                    className="text-xs p-3 bg-[#FBF8F5] border border-[#D5C9BD] rounded-xl focus:outline-none focus:border-[#B6573E]"
                  />
                </div>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-4 bg-[#B6573E] hover:bg-[#A34B34] text-white rounded-2xl font-bold uppercase tracking-widest text-xs shadow-md transition-all active:scale-[0.99] flex items-center justify-center space-x-2"
            >
              <Lock className="w-4 h-4" />
              <span>Complete Order • ${grandTotal.toFixed(2)}</span>
            </button>
          </form>
        </div>

        {/* Right Column: Order Summary */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-[#EADFD4] shadow-sm space-y-6">
          <h3 className="font-serif font-bold text-lg text-[#1F1B18] border-b border-[#F4EFEA] pb-3">
            Order Summary ({items.length})
          </h3>

          {/* Line items */}
          <div className="space-y-4 max-h-72 overflow-y-auto pr-1">
            {items.map((item) => (
              <div key={item.id} className="flex items-center space-x-4">
                <div className="relative w-16 h-16 rounded-xl bg-[#F4EFEA] border border-[#EADFD4] shrink-0 overflow-hidden">
                  <img
                    src={item.product.primaryImage}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute -top-1 -right-1 bg-[#1F1B18] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                    {item.quantity}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-serif font-bold text-xs text-[#1F1B18] truncate">
                    {item.product.name}
                  </h4>
                  <p className="text-[11px] text-[#6F675F]">
                    {item.isSubscription ? 'Subscription (Save 20%)' : 'One-time'}
                  </p>
                </div>
                <div className="text-xs font-bold text-[#1F1B18]">
                  ${(item.unitPrice * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          {/* Discount code box */}
          <form onSubmit={handleApplyCode} className="space-y-2 pt-2 border-t border-[#F4EFEA]">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Discount or gift card"
                value={discountInput}
                onChange={(e) => setDiscountInput(e.target.value)}
                className="flex-1 text-xs p-3 bg-[#FBF8F5] border border-[#D5C9BD] rounded-xl focus:outline-none focus:border-[#B6573E] uppercase"
              />
              <button
                type="submit"
                className="px-4 py-3 bg-[#1F1B18] hover:bg-[#B6573E] text-white text-xs font-bold uppercase rounded-xl transition-colors shrink-0"
              >
                Apply
              </button>
            </div>
            {discountError && <p className="text-[11px] text-red-500">{discountError}</p>}
            {discountCode && (
              <div className="inline-flex items-center space-x-2 bg-[#5F7466]/10 text-[#5F7466] px-3 py-1 rounded-full text-xs font-semibold">
                <Tag className="w-3 h-3" />
                <span>Code {discountCode} Applied</span>
                <button
                  type="button"
                  onClick={removeDiscountCode}
                  className="text-red-500 hover:text-red-700 font-bold ml-1"
                >
                  ×
                </button>
              </div>
            )}
          </form>

          {/* Totals */}
          <div className="space-y-2 pt-3 border-t border-[#F4EFEA] text-xs text-[#38322C]">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-semibold">${subtotal.toFixed(2)}</span>
            </div>
            {discountAmount > 0 && (
              <div className="flex justify-between text-[#5F7466]">
                <span>Discount ({discountCode})</span>
                <span className="font-semibold">-${discountAmount.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="font-semibold">
                {finalShipping === 0 ? 'FREE' : `$${finalShipping.toFixed(2)}`}
              </span>
            </div>
            <div className="flex justify-between text-base font-bold text-[#1F1B18] pt-3 border-t border-[#EADFD4]">
              <span>Total</span>
              <span className="text-xl font-serif text-[#B6573E]">
                ${grandTotal.toFixed(2)}
              </span>
            </div>
          </div>

          <div className="p-3.5 bg-[#F4EFEA] rounded-2xl border border-[#D5C9BD]/60 space-y-1 text-xs text-[#6F675F]">
            <div className="flex items-center space-x-1.5 font-bold text-[#1F1B18]">
              <ShieldCheck className="w-4 h-4 text-[#5F7466]" />
              <span>Doctor-Formulated Guarantee</span>
            </div>
            <p className="text-[11px] leading-relaxed">
              If you don't feel noticeable relief from itch and dryness within 30 days, simply contact us for a full refund.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
