import React, { useState } from 'react';
import { X, Sparkles, Check, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';

export const ScalpQuizModal: React.FC = () => {
  const { isQuizOpen, setIsQuizOpen, addToCart, applyDiscount } = useCart();

  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({
    concern: '',
    hairType: '',
    frequency: '',
    goal: ''
  });
  const [completed, setCompleted] = useState(false);

  if (!isQuizOpen) return null;

  const questions = [
    {
      title: 'What is your primary scalp concern?',
      subtitle: 'Select the issue you would most like to eliminate',
      field: 'concern',
      options: [
        { label: 'Persistent Itching & Irritation', desc: 'Urge to scratch throughout the day or night' },
        { label: 'Dry White Flakes & Scaling', desc: 'Visible flakes on shoulders, hairline, or parted scalp' },
        { label: 'Severe Dryness & Tightness', desc: 'Scalp feels parched and thirsty between wash days' },
        { label: 'Product Buildup & Follicle Congestion', desc: 'Heavy residue from gels, edge controls, or butters' }
      ]
    },
    {
      title: 'What is your natural hair texture?',
      subtitle: 'Dr. Shari customizes formulations for curl patterns and fragile strands',
      field: 'hairType',
      options: [
        { label: 'Type 4 (Coily, Kinky, Tight Z-patterns)', desc: 'Requires intensive lipid protection & zero-stripping cleansers' },
        { label: 'Type 3 (Curly, Springy Ringlets)', desc: 'Needs slip for detangling and lightweight hydration' },
        { label: 'Locs, Braids, Twists, or Weaves', desc: 'Needs targeted leave-on moisture that won’t cause buildup' },
        { label: 'Color-Treated or Chemically Relaxed', desc: 'Requires sulfate-free pH-balanced conditioning' }
      ]
    },
    {
      title: 'How often do you typically wash your hair?',
      subtitle: 'This helps determine your leave-on vs rinse-out balance',
      field: 'frequency',
      options: [
        { label: 'Once a week', desc: 'Standard textured hair wash routine' },
        { label: 'Every 2 to 3 weeks', desc: 'Common for low-manipulation regimens' },
        { label: 'Multiple times a week', desc: 'Active lifestyle, gym, or frequent workouts' },
        { label: 'Every 4+ weeks', desc: 'Extended protective style wear' }
      ]
    },
    {
      title: 'What is your ultimate scalp and hair goal?',
      subtitle: 'What does healthy hair mean to you?',
      field: 'goal',
      options: [
        { label: 'Complete, lasting freedom from scalp itch', desc: 'Never having to scratch or feel uncomfortable again' },
        { label: 'A clean, flake-free scalp with soft, defined curls', desc: 'Eliminating flakes without making hair brittle' },
        { label: 'Healthy hair retention & less breakage', desc: 'Strengthening roots and lengths for maximum length retention' },
        { label: 'A simple, clean 3-step routine', desc: 'No more mixing random products that don’t work together' }
      ]
    }
  ];

  const handleSelectOption = (value: string) => {
    const q = questions[currentStep];
    setAnswers((prev) => ({ ...prev, [q.field]: value }));

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCompleted(true);
      applyDiscount('WELCOME15');
    }
  };

  const handleAddPrescriptionToCart = () => {
    // Add 3-step system + massager for best results
    const system = PRODUCTS[0];
    addToCart(system, 1);
    setIsQuizOpen(false);
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers({ concern: '', hairType: '', frequency: '', goal: '' });
    setCompleted(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={() => setIsQuizOpen(false)}
      />

      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative w-full max-w-xl bg-[#FBF8F5] rounded-3xl shadow-2xl border border-[#EADFD4] overflow-hidden">
          <button
            onClick={() => setIsQuizOpen(false)}
            className="absolute top-5 right-5 z-10 p-2 text-[#6F675F] hover:text-[#1F1B18] rounded-full bg-white/80 hover:bg-white"
          >
            <X className="w-5 h-5" />
          </button>

          {!completed ? (
            <div className="p-6 sm:p-10 space-y-6">
              {/* Progress bar */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-semibold uppercase tracking-wider text-[#B6573E]">
                  <span>Dr. Shari's Scalp Assessment</span>
                  <span>Step {currentStep + 1} of {questions.length}</span>
                </div>
                <div className="w-full h-1.5 bg-[#EADFD4] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#B6573E] transition-all duration-300 rounded-full"
                    style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question */}
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1F1B18]">
                  {questions[currentStep].title}
                </h3>
                <p className="text-xs sm:text-sm text-[#6F675F]">
                  {questions[currentStep].subtitle}
                </p>
              </div>

              {/* Options */}
              <div className="space-y-3 pt-2">
                {questions[currentStep].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelectOption(opt.label)}
                    className="w-full text-left p-4 rounded-xl border border-[#D5C9BD] bg-white hover:border-[#B6573E] hover:bg-[#F4EFEA] transition-all flex items-center justify-between group shadow-2xs"
                  >
                    <div>
                      <div className="text-sm font-semibold text-[#1F1B18] group-hover:text-[#B6573E]">
                        {opt.label}
                      </div>
                      <div className="text-xs text-[#6F675F] mt-0.5">{opt.desc}</div>
                    </div>
                    <div className="w-5 h-5 rounded-full border border-[#D5C9BD] group-hover:border-[#B6573E] flex items-center justify-center shrink-0 ml-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#B6573E] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </button>
                ))}
              </div>

              {currentStep > 0 && (
                <button
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="text-xs text-[#6F675F] hover:text-[#1F1B18] font-medium"
                >
                  ← Back to previous question
                </button>
              )}
            </div>
          ) : (
            /* Result Screen */
            <div className="p-6 sm:p-10 space-y-6">
              <div className="text-center space-y-2">
                <div className="inline-flex items-center space-x-1.5 bg-[#5F7466]/10 text-[#5F7466] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Clinical Assessment Complete</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1F1B18]">
                  Your Custom Scalp Prescription
                </h3>
                <p className="text-xs text-[#6F675F] max-w-sm mx-auto">
                  Based on your concern ({answers.concern}) and texture ({answers.hairType}), Dr. Shari recommends:
                </p>
              </div>

              {/* Recommended Product Card */}
              <div className="p-5 bg-white rounded-2xl border border-[#EADFD4] shadow-xs flex flex-col sm:flex-row items-center gap-4">
                <img
                  src={PRODUCTS[0].primaryImage}
                  alt="The Three-Step System"
                  className="w-24 h-24 object-cover rounded-xl bg-[#F4EFEA]"
                  referrerPolicy="no-referrer"
                />
                <div className="flex-1 text-center sm:text-left space-y-1">
                  <div className="inline-block text-[10px] bg-[#B6573E]/15 text-[#B6573E] px-2 py-0.5 rounded-full font-bold uppercase">
                    100% Match For Your Profile
                  </div>
                  <h4 className="font-serif font-bold text-[#1F1B18] text-base">
                    The LivSo Three-Step Moisturizing System
                  </h4>
                  <p className="text-xs text-[#6F675F]">
                    Cleanse with Shampoo • Condition & Detangle • Leave-on Lotion for between washes.
                  </p>
                  <div className="flex items-center justify-center sm:justify-start space-x-2 pt-1">
                    <span className="text-base font-bold text-[#1F1B18]">$49.50</span>
                    <span className="text-xs text-[#6F675F] line-through">$55.00</span>
                    <span className="text-xs text-[#5F7466] font-semibold">+ 15% Off Applied!</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#F4EFEA] p-4 rounded-xl border border-[#D5C9BD]/70 text-xs text-[#38322C] space-y-2">
                <p className="font-semibold text-[#1F1B18] flex items-center space-x-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#5F7466]" />
                  <span>Why This Works For You:</span>
                </p>
                <p className="leading-relaxed">
                  Glycolic Acid gently micro-exfoliates flaking without scratching fragile curl cuticles, while Ceramide NP and Abyssinian Oil protect hair elasticity between wash days.
                </p>
              </div>

              <div className="space-y-3">
                <button
                  onClick={handleAddPrescriptionToCart}
                  className="w-full flex items-center justify-center space-x-2 bg-[#B6573E] hover:bg-[#A34B34] text-white py-4 rounded-xl font-bold uppercase tracking-wider text-xs shadow-md transition-all active:scale-[0.99]"
                >
                  <span>Add Recommended Routine To Bag (Free US Shipping)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex justify-between items-center text-xs">
                  <button
                    onClick={resetQuiz}
                    className="text-[#6F675F] hover:text-[#1F1B18] underline underline-offset-2"
                  >
                    Retake Assessment
                  </button>
                  <span className="text-[#5F7466] font-medium">Promo code WELCOME15 applied</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
