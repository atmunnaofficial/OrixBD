/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import Image from 'next/image';

interface WashingGalleryProps {
  gallery?: any[];
}

export default function WashingGallery({ gallery = [] }: WashingGalleryProps) {
  // Always enforce 4 Lab-related specialized items including ETP Lab
  const labGallery = [
    {
      title: 'Physical Testing Lab',
      category: 'Quality Assurance',
      description:
        'Color fastness, shrinkage, tear resistance, and durability testing infrastructure.',
      image:
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800',
    },
    {
      title: 'Chemical Analysis Lab',
      category: 'Eco Compliance',
      description:
        'ZDHC Level 3 chemical screening, pH balance checking, and safety controls.',
      image:
        'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=800',
    },
    {
      title: 'Shade Matching & R&D Studio',
      category: 'Color Development',
      description:
        'Spectrophotometer color matching and bespoke recipe formulation studio.',
      image:
        'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=800',
    },
    {
      title: 'ETP Environmental Lab',
      category: 'Water Treatment',
      description:
        'BOD, COD, TDS monitoring, and zero liquid discharge quality tracking.',
      image:
        'https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=800',
    },
  ];

  // If gallery has items, use them, otherwise fallback to our 4 lab items
  const displayGallery =
    gallery && gallery.length >= 4 ? gallery.slice(0, 4) : labGallery;

  return (
    <section className="mb-20">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-blue-500 text-sm font-semibold uppercase tracking-widest">
          Laboratory & Testing
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
          Facility & Washing Lab Gallery
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-3">
          Our state-of-the-art testing and research laboratories ensuring
          supreme quality, chemical safety, and eco-compliance.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayGallery.map((item: any, idx: number) => (
          <div
            key={idx}
            className="group relative h-80 rounded-2xl overflow-hidden border border-slate-800 shadow-xl bg-slate-900 flex flex-col justify-end p-6">
            <Image
              src={
                item.image ||
                item.imgUrl ||
                'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800'
              }
              alt={item.title || 'Lab Facility'}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/70 to-transparent"></div>

            <div className="relative z-10 flex flex-col justify-end">
              <span className="text-blue-400 text-xs font-semibold uppercase tracking-wider mb-1">
                {item.category || 'Lab Unit'}
              </span>
              <h3 className="text-white text-lg font-bold mb-1">
                {item.title || 'Testing Laboratory'}
              </h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                {item.description ||
                  'Advanced industrial lab testing infrastructure.'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
