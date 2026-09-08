import React, { useState } from 'react';
import {
  Sparkles,
  Check,
  X,
  ShieldCheck,
  Droplets,
  ArrowRight,
  BookOpen,
  ChevronDown,
  ChevronUp,
  HelpCircle
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';

import whatDrivesUsImg from '../assets/images/what_drives_us_woman_1788842114318.jpg';
import ingredientsFlatlayImg from '../assets/images/skincare_ingredients_flatlay_1788842128029.jpg';

export const SciencePage: React.FC = () => {
  const { addToCart, navigateToProduct } = useCart();
  const [activeTopic, setActiveTopic] = useState<string>('all');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const topics = [
    { id: 'all', label: 'All Advice' },
    { id: 'protective', label: 'Protective Styles & Locs' },
    { id: 'dandruff-vs-dry', label: 'Dry Scalp vs. Dandruff' },
    { id: 'wash-day', label: 'Wash Day Frequency' },
    { id: 'ingredients', label: 'Bio-Active Science' }
  ];

  const articles = [
    {
      id: 'protective',
      category: 'Protective Styles & Locs',
      title: 'How to Care for Your Scalp in Braids, Twists & Locs',
      author: 'Dr. Shari Hicks-Graham, MD, FAAD',
      readTime: '4 min read',
      excerpt:
        'Protective styling shouldn’t mean neglecting your scalp. Tight tension, trapped sweat, and inability to wash can lead to severe itch and buildup. Here is the doctor-approved protocol.',
      points: [
        'Apply LivSo Moisturizing Scalp Lotion along parted lines 2–3 times weekly using the precision nozzle tip.',
        'Never apply heavy petroleum grease to the scalp—it creates an occlusive film that traps dead cells and promotes fungal irritation.',
        'Use gentle fingertips rather than nails to massage the lotion into the skin to avoid micro-tears.'
      ]
    },
    {
      id: 'dandruff-vs-dry',
      category: 'Dry Scalp vs. Dandruff',
      title: 'Dandruff vs. Dry Scalp: How to Tell the Difference',
      author: 'Dr. Shari Hicks-Graham, MD, FAAD',
      readTime: '5 min read',
      excerpt:
        'Many people treat dry scalp with aggressive anti-dandruff shampoos that make the problem worse. Knowing whether you have true seborrheic dermatitis or simple dehydration is crucial.',
      points: [
        'Dry Scalp produces small, powdery white flakes accompanied by a sensation of skin tightness.',
        'Seborrheic Dermatitis (Dandruff) is driven by an overgrowth of Malassezia yeast, causing oily, yellowish flakes and red inflammation.',
        'LivSo tackles both: Glycolic Acid dissolves flake buildup, while Xylitol naturally inhibits yeast without drying chemicals.'
      ]
    },
    {
      id: 'wash-day',
      category: 'Wash Day Frequency',
      title: 'How Often Should You Wash 3C–4C Textured Hair?',
      author: 'Dr. Shari Hicks-Graham, MD, FAAD',
      readTime: '3 min read',
      excerpt:
        'For textured curls, washing daily leads to parched strands, but waiting a month allows scalp sebum to oxidize and trigger inflammation. Here is the clinical sweet spot.',
      points: [
        'A 7 to 14 day wash cadence is ideal for maintaining clean follicles without stripping natural hair sebum.',
        'Always focus shampoo lather directly on the scalp skin, letting runoff water gently cleanse the hair length.',
        'Follow immediately with a non-comedogenic conditioner that can safely touch both scalp skin and hair roots.'
      ]
    },
    {
      id: 'ingredients',
      category: 'Bio-Active Science',
      title: 'Why Glycolic Acid Is the Gold Standard for Scalp Exfoliation',
      author: 'Dr. Shari Hicks-Graham, MD, FAAD',
      readTime: '4 min read',
      excerpt:
        'Physical scrubs with walnut shells or coarse salts cause follicle trauma. Alpha-hydroxy acids like Glycolic Acid break the intercellular glue without mechanical damage.',
      points: [
        'Glycolic acid has the smallest molecular size among AHAs, allowing it to penetrate and soften crusty flakes seamlessly.',
        'Micro-exfoliates cellular debris so that subsequent conditioning lipids can reach the epidermal barrier.',
        'Leaves hair shafts intact, unlike harsh prescription coal tar or zinc formulations.'
      ]
    }
  ];

  const filteredArticles = articles.filter(
    (a) => activeTopic === 'all' || a.id === activeTopic
  );

  const comparisons = [
    {
      feature: 'Active Exfoliation Method',
      livso: 'Gentle Glycolic Acid (micro-exfoliates cellular glue)',
      traditional: 'Rough physical beads or heavy chemical strippers'
    },
    {
      feature: 'Hair Fiber Impact',
      livso: 'Preserves natural oils with abyssinian oil & oat protein',
      traditional: 'Strips cuticles, leaves hair brittle, stiff, and tangled'
    },
    {
      feature: 'Yeast & Flake Control',
      livso: 'Naturally derived Xylitol starves fungal proliferation',
      traditional: 'Harsh zinc pyrithione or selenium sulfide'
    },
    {
      feature: 'Leave-On Scalp Care',
      livso: 'Lightweight lotion with ceramide NP barrier restoration',
      traditional: 'None (only shower rinse-out options that fade quickly)'
    },
    {
      feature: 'Safety for Textured Hair',
      livso: 'Tested on curl patterns 2A–4C, braids, locs, & relaxers',
      traditional: 'Formulated primarily for straight, daily-washed hair'
    }
  ];

  const faqs = [
    {
      q: 'Can I apply LivSo Conditioner directly to my scalp?',
      a: 'Yes! Traditional conditioners are often formulated with heavy silicones that clog scalp pores, so stylists warn you to avoid the roots. LivSo Moisturizing Conditioner is dermatologist-engineered with skin-friendly lipids and abyssinian oil specifically designed to soothe the scalp and nourish strands simultaneously.'
    },
    {
      q: 'Will LivSo weigh down my curls or leave a greasy residue?',
      a: 'Not at all. LivSo Moisturizing Scalp Lotion is water-based and formulated with lightweight Abyssinian seed oil and Ceramides that absorb in seconds. It provides instant cooling moisture without greasiness, making it ideal for silk presses, locs, and fine curls.'
    },
    {
      q: 'Is LivSo safe for color-treated and relaxed hair?',
      a: '100% yes. All LivSo products are completely sulfate-free, paraben-free, and pH-balanced. They will not strip hair dye, fade highlights, or compromise chemically straightened strands.'
    },
    {
      q: 'How quickly should I expect relief from scalp itching?',
      a: 'In our 12-week independent clinical trial, 90% of participants reported immediate relief from itching after their very first wash cycle. For persistent flaking, marked improvement is seen within 4 weeks of consistent regimen use.'
    }
  ];

  return (
    <div className="w-full">
      {/* 1. Sage Hero Header */}
      <section className="bg-[#97b2a8] text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-xs px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-white">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Clinical Insights & Scalp Science</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-normal tracking-tight text-white">
            Expert Advice
          </h1>
          <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto font-medium leading-relaxed">
            Dermatologist-backed guidance for textured hair, protective styles, and persistent dry scalp by Dr. Shari Hicks-Graham, MD, FAAD.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-20">
        {/* Topic Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 pb-4 border-b border-[#EADFD4]">
          {topics.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTopic(t.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                activeTopic === t.id
                  ? 'bg-[#486358] text-white shadow-xs'
                  : 'bg-[#F4EFEA] text-[#38322C] hover:bg-[#EADFD4]'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Featured Educational Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredArticles.map((art, idx) => (
            <article
              key={idx}
              className="bg-white rounded-3xl p-8 border border-[#EADFD4] shadow-2xs space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-[#486358] font-bold uppercase tracking-wider">
                  <span>{art.category}</span>
                  <span className="text-[#6F675F] font-normal">{art.readTime}</span>
                </div>
                <h3 className="font-serif font-bold text-2xl text-[#1F1B18] leading-snug">
                  {art.title}
                </h3>
                <p className="text-xs text-[#6F675F]">By {art.author}</p>
                <p className="text-xs sm:text-sm text-[#38322C] leading-relaxed pt-1">
                  {art.excerpt}
                </p>
                <div className="pt-3 border-t border-[#F4EFEA] space-y-2">
                  <span className="text-xs font-bold text-[#1F1B18] block">Clinical Takeaways:</span>
                  <ul className="space-y-1.5 text-xs text-[#6F675F] list-disc pl-4">
                    {art.points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-[#EADFD4]">
                <button
                  type="button"
                  onClick={() => navigateToProduct('three-step-system')}
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#486358] hover:text-[#394f45] uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <span>Recommended System</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* 12-Week Independent Clinical Evaluation */}
        <div className="bg-[#486358] text-white rounded-3xl p-8 sm:p-14 border border-[#3d5349] space-y-10 shadow-xl">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#97b2a8] font-bold">
              Rigorous Independent Testing
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold">
              12-Week Independent Clinical Evaluation
            </h2>
            <p className="text-xs sm:text-sm text-white/90">
              Conducted by an independent clinical testing laboratory on diverse subjects with mild to severe dry scalp across textured hair curl patterns 2A through 4C.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#384e45] p-6 rounded-2xl border border-white/10 text-center space-y-2">
              <div className="text-5xl font-serif font-bold text-[#97b2a8]">97%</div>
              <h4 className="text-sm font-bold text-white">Preferred LivSo</h4>
              <p className="text-xs text-white/80">
                Chose LivSo over their regular dry hair and scalp treatments after 12 weeks of regimen use.
              </p>
            </div>

            <div className="bg-[#384e45] p-6 rounded-2xl border border-white/10 text-center space-y-2">
              <div className="text-5xl font-serif font-bold text-[#97b2a8]">91%</div>
              <h4 className="text-sm font-bold text-white">Scalp Improvement</h4>
              <p className="text-xs text-white/80">
                Demonstrated marked visual reduction in redness, flaking, and scaling within just 4 weeks.
              </p>
            </div>

            <div className="bg-[#384e45] p-6 rounded-2xl border border-white/10 text-center space-y-2">
              <div className="text-5xl font-serif font-bold text-[#97b2a8]">90%</div>
              <h4 className="text-sm font-bold text-white">Immediate Itch Relief</h4>
              <p className="text-xs text-white/80">
                Experienced significant reduction in scalp itching after their very first complete wash cycle.
              </p>
            </div>
          </div>
        </div>

        {/* The 4 Bio-Active Ingredients */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#486358] font-bold">
              Evidence-Based Formulation
            </span>
            <h3 className="text-3xl font-serif font-bold text-[#1F1B18]">
              The 4 Pillar Bio-Actives
            </h3>
            <p className="text-xs sm:text-sm text-[#6F675F]">
              Why each bio-active was selected by Dr. Shari Hicks-Graham
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-3xl border border-[#EADFD4] shadow-2xs space-y-3">
              <span className="text-xs uppercase font-bold text-[#486358] tracking-wider">
                Gentle Alpha-Hydroxy Exfoliation
              </span>
              <h4 className="font-serif font-bold text-xl text-[#1F1B18]">Glycolic Acid (AHA)</h4>
              <p className="text-xs text-[#38322C] leading-relaxed">
                Physical scalp scrubs with walnut shells or salt cause micro-abrasions in fragile scalp skin and snag curls. Glycolic acid works at the molecular level, dissolving the intercellular glue that binds dead flakes to the scalp so they rinse away effortlessly.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#EADFD4] shadow-2xs space-y-3">
              <span className="text-xs uppercase font-bold text-[#486358] tracking-wider">
                Microbiome Equilibrium
              </span>
              <h4 className="font-serif font-bold text-xl text-[#1F1B18]">Xylitol</h4>
              <p className="text-xs text-[#38322C] leading-relaxed">
                Flaking is often driven by an overgrowth of <em>Malassezia</em> yeast feeding on sebum. Xylitol inhibits yeast biofilm formation without harsh medications, restoring a harmonious, calm scalp microbiome.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#EADFD4] shadow-2xs space-y-3">
              <span className="text-xs uppercase font-bold text-[#486358] tracking-wider">
                Barrier Lipid Architecture
              </span>
              <h4 className="font-serif font-bold text-xl text-[#1F1B18]">Ceramide NP</h4>
              <p className="text-xs text-[#38322C] leading-relaxed">
                Ceramides constitute 50% of the skin’s natural lipid barrier. Dry, irritated scalps suffer from ceramide depletion. Our leave-on lotion re-supplies pure Ceramide NP to prevent moisture loss between wash days.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#EADFD4] shadow-2xs space-y-3">
              <span className="text-xs uppercase font-bold text-[#486358] tracking-wider">
                Lightweight Lipid Sealing
              </span>
              <h4 className="font-serif font-bold text-xl text-[#1F1B18]">Abyssinian Seed Oil</h4>
              <p className="text-xs text-[#38322C] leading-relaxed">
                Unlike heavy mineral oils or petrolatum that clog hair follicles and suffocate the scalp, abyssinian oil is rich in erucic acid with a lightweight molecular structure. It smooths cuticles, gives coils brilliant sheen, and allows effortless comb slip.
              </p>
            </div>
          </div>
        </div>

        {/* Clinical Comparison Table */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#486358] font-bold">
              The Dermatologist Advantage
            </span>
            <h3 className="text-3xl font-serif font-bold text-[#1F1B18]">
              LivSo vs. Traditional Dandruff Shampoos
            </h3>
            <p className="text-xs sm:text-sm text-[#6F675F]">
              See how physician-crafted scalp care protects your hair integrity.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-[#EADFD4] overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#F4EFEA] border-b border-[#EADFD4]">
                    <th className="p-4 sm:p-5 font-serif font-bold text-[#1F1B18]">Criteria</th>
                    <th className="p-4 sm:p-5 font-serif font-bold text-[#486358] bg-[#97b2a8]/20">LivSo Scalp System</th>
                    <th className="p-4 sm:p-5 font-serif font-bold text-[#6F675F]">Traditional Medicated Shampoos</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EADFD4]">
                  {comparisons.map((row, i) => (
                    <tr key={i} className="hover:bg-[#FBF8F5] transition-colors">
                      <td className="p-4 sm:p-5 font-semibold text-[#1F1B18]">{row.feature}</td>
                      <td className="p-4 sm:p-5 font-medium text-[#38322C] bg-[#97b2a8]/10 flex items-center space-x-2">
                        <Check className="w-4 h-4 text-[#486358] shrink-0" />
                        <span>{row.livso}</span>
                      </td>
                      <td className="p-4 sm:p-5 text-[#6F675F]">
                        <div className="flex items-center space-x-2">
                          <X className="w-4 h-4 text-red-400 shrink-0" />
                          <span>{row.traditional}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Ask the Dermatologist FAQs */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#486358] font-bold">
              Frequently Asked Questions
            </span>
            <h3 className="text-3xl font-serif font-bold text-[#1F1B18]">
              Ask Dr. Shari
            </h3>
            <p className="text-xs sm:text-sm text-[#6F675F]">
              Answers to the most common textured scalp care questions.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#EADFD4] overflow-hidden shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between font-serif font-bold text-sm sm:text-base text-[#1F1B18] hover:text-[#486358] transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-4 h-4 text-[#486358] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#6F675F] shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="p-5 pt-0 border-t border-[#F4EFEA] text-xs sm:text-sm text-[#38322C] leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call To Action */}
        <div className="bg-[#F4EFEA] rounded-3xl p-8 sm:p-14 text-center border border-[#EADFD4] space-y-6">
          <h3 className="font-serif text-3xl font-bold text-[#1F1B18]">
            Put Dermatological Scalp Care to the Test
          </h3>
          <p className="text-xs sm:text-sm text-[#6F675F] max-w-lg mx-auto">
            Experience the soothing relief of the Three-Step System. Backed by our 30-day money-back guarantee and free US shipping.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => addToCart(PRODUCTS[0], 1)}
              className="w-full sm:w-auto px-8 py-4 bg-[#486358] hover:bg-[#394f45] text-white rounded-xl text-xs uppercase tracking-widest font-bold shadow-md transition-all cursor-pointer"
            >
              Shop The 3-Step System • $49.50
            </button>
            <button
              type="button"
              onClick={() => navigateToProduct('moisturizing-lotion')}
              className="w-full sm:w-auto px-8 py-4 bg-white border border-[#486358] text-[#486358] hover:bg-[#FAF7F3] rounded-xl text-xs uppercase tracking-widest font-bold transition-all cursor-pointer"
            >
              Explore Scalp Lotion • $18.00
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
