/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';

interface FaqSectionProps {
  faqs?: any[];
}

export default function FaqSection({ faqs = [] }: FaqSectionProps) {
  // Complete set of default FAQs so it never looks short or empty
  const defaultFaqs = [
    {
      question: 'What is your daily garment washing and processing capacity?',
      answer:
        'Our advanced facility is equipped with heavy-duty automated machinery capable of processing over 45,000 to 50,000 pieces of garments daily with consistent quality.',
    },
    {
      question: 'Do you utilize waterless and eco-friendly wash technologies?',
      answer:
        'Yes, we extensively use Jeanologia laser fading systems and Tonello ozone chambers, which drastically reduce water and chemical consumption while eliminating harmful discharges.',
    },
    {
      question: 'What environmental and compliance standards do you maintain?',
      answer:
        'We are strictly compliant with ZDHC Level 3 chemical formulations, OEKO-TEX Standard 100, SEDEX, and GOTS certifications, ensuring zero liquid discharge (ZLD) through our advanced ETP plant.',
    },
    {
      question: 'How do you handle color matching and sampling lead times?',
      answer:
        'Our in-house R&D studio features computerized spectrophotometers for precise shade matching, enabling us to deliver approved buyer samples within 48 to 72 hours.',
    },
    {
      question: 'What types of specialty washes can your plant perform?',
      answer:
        'We specialize in a wide array of treatments including enzyme bio-polishing, vintage acid wash, potassium permanganate (PP) spraying, resin treatment, tinting, and modern laser destruction effects.',
    },
  ];

  // Use passed faqs if available and has items, otherwise use default full list
  const displayFaqs = faqs && faqs.length > 0 ? faqs : defaultFaqs;
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="mb-20 max-w-4xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-blue-500 text-sm font-semibold uppercase tracking-widest">
          Support & Info
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
          Frequently Asked Questions
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-3">
          Find detailed answers regarding our processing capabilities,
          eco-standards, and operational workflow.
        </p>
      </div>

      <div className="space-y-4">
        {displayFaqs.map((faq: any, idx: number) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden shadow-xl transition-all">
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-6 text-left flex justify-between items-center gap-4 focus:outline-none">
                <span className="text-white font-bold text-base sm:text-lg">
                  <span className="text-blue-500 mr-2">Q:</span>
                  {faq.question || faq.q || 'Industrial Washing Query'}
                </span>
                <span className="text-blue-400 text-xl font-bold transition-transform duration-300">
                  {isOpen ? '−' : '+'}
                </span>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-0 text-slate-400 text-sm sm:text-base leading-relaxed border-t border-slate-800/60 mt-2">
                  {faq.answer ||
                    faq.a ||
                    'Our standard industrial washing process complies with highest international standards.'}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
