'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
  {
    badge: 'Orix Packaging & Accessories Unit',
    title: 'Precision Packaging & Carton Solutions',
    description:
      'State-of-the-art offset printing, eco-friendly corrugated manufacturing, and automated finishing lines for global brands.',
    image:
      'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1600',
  },
  {
    badge: 'Advanced Manufacturing',
    title: 'Advanced Corrugated Box Manufacturing',
    description:
      'Heavy-duty 5-ply and 7-ply corrugated carton production with high-speed automated die-cutting technology.',
    image:
      'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?q=80&w=1600',
  },
  {
    badge: 'High-Definition Offset',
    title: 'High-Definition Offset Printing Press',
    description:
      'Multi-color Heidelberg presses delivering crystal-clear print quality, sharp graphics, and vibrant Pantone matching.',
    image:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1600',
  },
  {
    badge: 'Eco-Friendly Materials',
    title: 'Sustainable Poly & Eco Packaging',
    description:
      'Biodegradable polybags, mailers, and recycled paper packaging designed for eco-conscious global apparel exporters.',
    image:
      'https://images.unsplash.com/photo-1530587191325-3db32d826c18?q=80&w=1600',
  },
  {
    badge: 'Retail Readiness',
    title: 'Retail Hangtags & Security Barcodes',
    description:
      'Premium branded hangtags, woven labels, price tickets, and high-security barcode solutions for retail readiness.',
    image:
      'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1600',
  },
];

export default function PackagingHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play slider every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[calc(100vh-5rem)] min-h-150 overflow-hidden bg-slate-950 border-b border-slate-800">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide
              ? 'opacity-100 z-10'
              : 'opacity-0 z-0 pointer-events-none'
          }`}>
          {/* Background Image with Dark Gradient Overlay */}
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={idx === 0}
            className="object-cover transform scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-slate-950/60"></div>
          <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-slate-950/60"></div>

          {/* Slide Content - Perfectly Centered */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-8 lg:px-12 max-w-4xl mx-auto z-20 pb-12">
            <div className="inline-flex items-center space-x-2 bg-blue-600/30 border border-blue-500/40 text-blue-400 text-xs sm:text-sm font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 backdrop-blur-md shadow-lg">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              <span>{slide.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4 drop-shadow-lg leading-tight">
              {slide.title}
            </h1>

            <p className="text-slate-200 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed drop-shadow">
              {slide.description}
            </p>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 bg-slate-900/60 hover:bg-blue-600 text-white p-3 sm:p-4 rounded-full backdrop-blur-md border border-slate-700/50 transition-all shadow-lg hover:scale-110"
        aria-label="Previous Slide">
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 bg-slate-900/60 hover:bg-blue-600 text-white p-3 sm:p-4 rounded-full backdrop-blur-md border border-slate-700/50 transition-all shadow-lg hover:scale-110"
        aria-label="Next Slide">
        ❯
      </button>

      {/* Indicators / Dots - Perfectly Positioned (Not touching bottom edge) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2 sm:space-x-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`transition-all duration-300 rounded-full ${
              idx === currentSlide
                ? 'w-8 sm:w-10 h-2.5 sm:h-3 bg-blue-500 shadow-md'
                : 'w-2.5 sm:w-3 h-2.5 sm:h-3 bg-slate-600 hover:bg-slate-400'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
