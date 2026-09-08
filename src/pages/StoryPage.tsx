import React, { useState } from 'react';
import { Droplets, Check, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

import storyCurlyWomanImg from '../assets/images/story_curly_woman_1788844525202.jpg';
import drShariClinicImg from '../assets/images/dr_shari_clinic_1788844540447.jpg';
import curlsResearchBannerImg from '../assets/images/curls_research_banner_1788844555762.jpg';

export const StoryPage: React.FC = () => {
  const { navigateToProduct } = useCart();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [isSampleModalOpen, setIsSampleModalOpen] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSubscribed(true);
    setTimeout(() => {
      setNewsletterSubscribed(false);
      setNewsletterEmail('');
    }, 3500);
  };

  return (
    <div className="bg-[#b8cdc6] text-[#2c3d33] w-full selection:bg-[#4a5f54] selection:text-white relative overflow-hidden">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION: "Created for the love of kinks and curls" */}
      {/* ========================================================================= */}
      <section className="relative pt-6 sm:pt-10 pb-16 sm:pb-24 px-6 sm:px-10 lg:px-16 text-center overflow-hidden">
        {/* Wavy Horizontal Ripple Lines Background (behind the woman) */}
        <div className="absolute inset-x-0 top-1/3 pointer-events-none opacity-35 select-none">
          <svg
            className="w-full h-48 sm:h-64"
            preserveAspectRatio="none"
            viewBox="0 0 1200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,80 C150,50 350,110 500,80 C650,50 850,110 1000,80 C1100,60 1180,90 1200,80"
              stroke="#8fa9a0"
              strokeWidth="1.2"
              fill="none"
            />
            <path
              d="M0,100 C150,70 350,130 500,100 C650,70 850,130 1000,100 C1100,80 1180,110 1200,100"
              stroke="#8fa9a0"
              strokeWidth="1.2"
              fill="none"
            />
            <path
              d="M0,120 C150,90 350,150 500,120 C650,90 850,150 1000,120 C1100,100 1180,130 1200,120"
              stroke="#8fa9a0"
              strokeWidth="1.2"
              fill="none"
            />
            <path
              d="M0,140 C150,110 350,170 500,140 C650,110 850,170 1000,140 C1100,120 1180,150 1200,140"
              stroke="#8fa9a0"
              strokeWidth="1.2"
              fill="none"
            />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
          {/* Main Display Headline Layered With Woman Figure */}
          <div className="relative w-full flex flex-col items-center justify-center">
            {/* Top Line of Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[76px] text-white font-normal tracking-tight leading-[1.05] z-10 text-center select-none">
              Created for the love
            </h1>

            {/* Cutout Woman with Voluminous Curls in Black Jumpsuit & Sneakers */}
            <div className="relative my-[-10px] sm:my-[-20px] z-20 w-56 sm:w-72 md:w-80 max-w-full">
              <img
                src={storyCurlyWomanImg}
                alt="Woman with natural curly afro textured kinks and curls"
                className="w-full h-auto object-contain mx-auto filter drop-shadow-[0_12px_24px_rgba(30,45,38,0.18)]"
                style={{ mixBlendMode: 'multiply' }}
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Bottom Line of Headline */}
            <div className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[76px] text-white font-normal tracking-tight leading-[1.05] z-10 text-center select-none mt-[-24px] sm:mt-[-40px]">
              of kinks and curls
            </div>
          </div>

          {/* "OUR CALLING" Sub-section */}
          <div className="pt-16 sm:pt-20 space-y-4 max-w-2xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] font-bold text-[#3c5045]">
              OUR CALLING
            </div>

            <h2 className="font-serif text-2xl sm:text-4xl md:text-[42px] text-white font-normal leading-snug tracking-tight">
              We want to give people with kinky,
              <br className="hidden sm:inline" />
              curly hair gentle, effective solutions for
              <br className="hidden sm:inline" />
              dry scalp and brittle hair.
            </h2>

            {/* Centered White Water Droplet Icon */}
            <div className="py-2 flex justify-center">
              <svg
                className="w-4 h-5 text-white fill-white opacity-95"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
              </svg>
            </div>

            {/* Paragraph */}
            <p className="text-xs sm:text-sm text-[#3c5045] leading-relaxed max-w-xl mx-auto font-normal">
              We do this by calling on our scientific expertise and clinical experience. We do this by
              knowing the unique needs and preferences of our customers. We do this by delivering
              products that actually work and are accessible and enjoyable to smell, feel, and use all year
              long.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. "THE FOUNDER" SECTION (DR. SHARI CLINICAL PHOTO + OVERLAPPING WHITE CARD) */}
      {/* ========================================================================= */}
      <section className="relative py-16 sm:py-24 px-6 sm:px-10 lg:px-16 overflow-hidden">
        {/* Faint Giant "The Founder" Watermark */}
        <div className="absolute inset-x-0 top-0 flex justify-center pointer-events-none select-none z-0">
          <span className="font-serif text-6xl sm:text-8xl md:text-9xl text-white/30 font-normal tracking-wide whitespace-nowrap">
            The Founder
          </span>
        </div>

        {/* Floating "TRY A $2 SAMPLE!" on Left */}
        <div className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 z-20">
          <button
            onClick={() => setIsSampleModalOpen(true)}
            className="flex items-center space-x-2 text-xs uppercase tracking-widest font-bold text-[#2c3d33] hover:text-white transition-colors group cursor-pointer"
          >
            <span className="tracking-wider">TRY A</span>
            <div className="w-7 h-7 rounded-full border border-[#2c3d33] flex items-center justify-center bg-white/40 group-hover:bg-white transition-colors">
              <Droplets className="w-3.5 h-3.5 text-[#2c3d33] fill-[#2c3d33]" />
            </div>
            <span className="tracking-wider">SAMPLE!</span>
          </button>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 pt-8 sm:pt-14">
          <div className="relative">
            {/* Dr. Shari Photo Container */}
            <div className="w-full max-w-lg mx-auto lg:mx-0 lg:max-w-xl rounded-none overflow-hidden shadow-lg">
              <img
                src={drShariClinicImg}
                alt="Dr. Shari Hicks-Graham, Board-Certified Dermatologist"
                className="w-full h-auto object-cover max-h-[440px]"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Overlapping Clean White Card (Bottom-Right) */}
            <div className="lg:absolute lg:right-0 lg:-bottom-12 mt-6 lg:mt-0 bg-white p-6 sm:p-8 md:p-10 max-w-lg lg:max-w-md shadow-xl text-[#3c5045] space-y-4 border border-[#e0e8e3]">
              <p className="text-xs sm:text-sm leading-relaxed font-normal">
                In her career as a Board-Certified Dermatologist, Shari helps people with many
                different types of skin conditions, including diseases of the scalp and hair. She
                realized that scalp irritation is a major gateway issue leading to hair loss. Her
                patients with textured kinky and curly hair had the most difficulty finding relief
                from their scalp conditions and often objected to how their hair looked and felt with
                prescription shampoos and topical therapies. She saw the embarrassment and emotional
                stress that this caused, so she created a solution. A solution to help people live so
                healthily,
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. WIDE PHOTOGRAPHIC CLINICAL RESEARCH SECTION */}
      {/* ========================================================================= */}
      <section className="relative my-16 sm:my-24 w-full overflow-hidden">
        <div className="relative w-full min-h-[480px] sm:min-h-[560px] flex items-center justify-center">
          {/* Background Photo */}
          <img
            src={curlsResearchBannerImg}
            alt="Woman with healthy hydrated coils touching curls"
            className="absolute inset-0 w-full h-full object-cover brightness-[0.82]"
            referrerPolicy="no-referrer"
          />
          {/* Soft Tint Overlay to harmonize with page */}
          <div className="absolute inset-0 bg-[#34463d]/30" />

          {/* Centered Luminous Typography Content */}
          <div className="relative z-10 max-w-2xl mx-auto px-6 sm:px-10 text-center text-white space-y-6">
            <p className="text-xs sm:text-sm md:text-base leading-relaxed font-normal text-white/95 drop-shadow-xs">
              We developed our line of moisturizing products based on extensive dermatological
              experience and scientific research. While we wanted a solution that worked, we also
              wanted one that respected the special qualities of curly &amp; kinky hair. It
              couldn’t be harsh and had to be simple to use. The result was the LivSo system.
            </p>

            <p className="text-xs sm:text-sm md:text-base leading-relaxed font-normal text-white/95 drop-shadow-xs">
              We use a unique blend of carefully chosen ingredients. It’s a formulation that’s
              been proven effective. In fact, an independent study found that{' '}
              <strong className="font-bold text-white">
                97% of people who used the system for 12 weeks believed it was the best system they
                had ever used
              </strong>{' '}
              to treat their dry hair and scalp.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. THREE CIRCULAR PRINCIPLES / PILLARS SECTION */}
      {/* ========================================================================= */}
      <section className="relative py-16 sm:py-24 px-6 sm:px-10 lg:px-16 overflow-hidden">
        {/* Floating "TRY A $2 SAMPLE!" on Left */}
        <div className="hidden lg:block absolute left-8 top-12 z-20">
          <button
            onClick={() => setIsSampleModalOpen(true)}
            className="flex items-center space-x-2 text-xs uppercase tracking-widest font-bold text-[#2c3d33] hover:text-white transition-colors group cursor-pointer"
          >
            <span className="tracking-wider">TRY A</span>
            <div className="w-7 h-7 rounded-full border border-[#2c3d33] flex items-center justify-center bg-white/40 group-hover:bg-white transition-colors">
              <Droplets className="w-3.5 h-3.5 text-[#2c3d33] fill-[#2c3d33]" />
            </div>
            <span className="tracking-wider">SAMPLE!</span>
          </button>
        </div>

        <div className="max-w-4xl mx-auto space-y-16 sm:space-y-24">
          {/* Pillar 1: FORMULATED TO BE GENTLE YET EFFECTIVE (Left Circle, Right Text) */}
          <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-14">
            <div className="shrink-0 w-36 h-36 sm:w-48 sm:h-48 rounded-full bg-[#d0dfd8] flex items-center justify-center shadow-xs">
              {/* Scalp Gentle Wave Lines Icon */}
              <svg
                className="w-12 h-12 sm:w-16 sm:h-16 text-[#3c5045]"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 16 C12 12, 18 20, 24 16 C30 12, 36 20, 42 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M6 24 C12 20, 18 28, 24 24 C30 20, 36 28, 42 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M6 32 C12 28, 18 36, 24 32 C30 28, 36 36, 42 32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
            <div className="space-y-2.5 text-center md:text-left max-w-md">
              <h3 className="font-bold text-xs sm:text-sm uppercase tracking-[0.22em] text-[#2c3d33]">
                FORMULATED TO BE GENTLE YET EFFECTIVE
              </h3>
              <p className="text-xs sm:text-sm text-[#3c5045] leading-relaxed">
                Our products are effective in cleansing and nourishing your scalp, yet gentle enough
                and properly formulated to restore your hair to its natural, moisturized brilliance.
              </p>
            </div>
          </div>

          {/* Pillar 2: MADE WITH SELECT INGREDIENTS (Right Circle, Left Text) */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 sm:gap-14">
            <div className="shrink-0 w-36 h-36 sm:w-48 sm:h-48 rounded-full bg-[#d0dfd8] flex items-center justify-center shadow-xs">
              {/* Botanical Leaf Sprig Icon */}
              <svg
                className="w-12 h-12 sm:w-16 sm:h-16 text-[#3c5045]"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 6 C24 6, 28 14, 24 22 C20 14, 24 6, 24 6 Z"
                  fill="currentColor"
                />
                <path
                  d="M24 22 C24 22, 34 18, 36 26 C28 28, 24 22, 24 22 Z"
                  fill="currentColor"
                />
                <path
                  d="M24 22 C24 22, 14 18, 12 26 C20 28, 24 22, 24 22 Z"
                  fill="currentColor"
                />
                <path
                  d="M24 30 C24 30, 32 28, 33 35 C27 36, 24 30, 24 30 Z"
                  fill="currentColor"
                />
                <path
                  d="M24 30 C24 30, 16 28, 15 35 C21 36, 24 30, 24 30 Z"
                  fill="currentColor"
                />
                <line x1="24" y1="6" x2="24" y2="42" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
            </div>
            <div className="space-y-2.5 text-center md:text-right max-w-md">
              <h3 className="font-bold text-xs sm:text-sm uppercase tracking-[0.22em] text-[#2c3d33]">
                MADE WITH SELECT INGREDIENTS
              </h3>
              <p className="text-xs sm:text-sm text-[#3c5045] leading-relaxed">
                No cutting corners. We use abyssinian oil, willow bark extract, xylitol, and other
                specialized ingredients to create premium products that provide results that you’ll love.
              </p>
            </div>
          </div>

          {/* Pillar 3: CRAFTED FOR KINKY, CURLY HAIR (Left Circle, Right Text) */}
          <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-14">
            <div className="shrink-0 w-36 h-36 sm:w-48 sm:h-48 rounded-full bg-[#d0dfd8] flex items-center justify-center shadow-xs">
              {/* Lab Flask / Droplet Formula Icon */}
              <svg
                className="w-12 h-12 sm:w-16 sm:h-16 text-[#3c5045]"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Dropper / Beaker with molecules */}
                <rect x="14" y="8" width="20" height="32" rx="3" stroke="currentColor" strokeWidth="2" />
                <path d="M24 13 L24 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M24 20 C24 20, 27 24, 27 26 C27 27.6, 25.6 29, 24 29 C22.4 29, 21 27.6, 21 26 C21 24, 24 20, 24 20 Z" fill="currentColor" />
                <circle cx="19" cy="33" r="1.5" fill="currentColor" />
                <circle cx="29" cy="33" r="1.5" fill="currentColor" />
                <circle cx="24" cy="36" r="1.5" fill="currentColor" />
                <line x1="19" y1="33" x2="24" y2="36" stroke="currentColor" strokeWidth="1.2" />
                <line x1="29" y1="33" x2="24" y2="36" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </div>
            <div className="space-y-2.5 text-center md:text-left max-w-md">
              <h3 className="font-bold text-xs sm:text-sm uppercase tracking-[0.22em] text-[#2c3d33]">
                CRAFTED FOR KINKY, CURLY HAIR
              </h3>
              <p className="text-xs sm:text-sm text-[#3c5045] leading-relaxed">
                All healthy hair types require a healthy scalp. Although LivSo creates a healthy
                scalp environment for all types of hair, we made LivSo specifically to meet the
                unique moisturizing needs of textured hair.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. NEWSLETTER / SIGN UP SECTION */}
      {/* ========================================================================= */}
      <section className="bg-[#a8beb5] text-[#2c3d33] py-16 px-6 sm:px-10 border-t border-[#9bb2a9]">
        <div className="max-w-xl mx-auto text-center space-y-6">
          <h2 className="font-bold text-xs sm:text-[13px] uppercase tracking-[0.22em] text-[#2c3d33] leading-relaxed">
            STAY UP ON OUR LATEST
            <br />
            HEALTHY HAIR TIPS, PRODUCTS &amp; MORE
          </h2>

          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto pt-2">
            <div className="border-b border-white pb-2 flex items-center justify-between gap-4">
              <input
                type="email"
                placeholder="Email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
                className="bg-transparent text-[#2c3d33] placeholder-[#3c5045] focus:outline-none text-xs sm:text-sm flex-1 font-medium"
              />
              <button
                type="submit"
                className="text-[#2c3d33] hover:text-white font-bold text-xs uppercase tracking-widest transition-colors cursor-pointer"
              >
                SIGN UP
              </button>
            </div>
            {newsletterSubscribed && (
              <div className="text-xs font-semibold text-white mt-3 flex items-center justify-center gap-1.5 animate-fade-in">
                <Check className="w-4 h-4" />
                <span>Thank you for signing up for LivSo healthy hair tips!</span>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Sample Modal */}
      {isSampleModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            onClick={() => setIsSampleModalOpen(false)}
          />
          <div className="relative bg-[#FBF8F5] text-[#1F1B18] rounded-2xl max-w-md w-full p-6 space-y-4 shadow-2xl z-10 border border-[#D5C9BD]">
            <div className="flex items-center justify-between border-b border-[#EADFD4] pb-3">
              <h3 className="font-serif text-lg font-bold text-[#1F1B18]">
                Try a $2 Discovery Sample
              </h3>
              <button
                onClick={() => setIsSampleModalOpen(false)}
                className="text-[#6F675F] hover:text-[#1F1B18]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-[#6F675F] leading-relaxed">
              Experience the dermatologist-developed LivSo 3-Step System before committing to full
              sizes. Includes sample sachets of Moisturizing Shampoo, Conditioner, and Scalp Lotion.
            </p>
            <div className="pt-2">
              <button
                onClick={() => {
                  setIsSampleModalOpen(false);
                  navigateToProduct('moisturizing-shampoo');
                }}
                className="w-full py-3 bg-[#486358] hover:bg-[#3d544b] text-white rounded-xl text-xs font-bold uppercase tracking-widest transition-colors shadow-sm"
              >
                Explore Full Sizes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
