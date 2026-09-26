'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const slides = [
  {
    id: 'group',
    title: 'Building Excellence Across Diverse Industries',
    subtitle:
      'OrixBD Group is a leading conglomerate driven by innovation, sustainability, and quality service in Bangladesh.',
    ctaText: 'Explore Our Portfolio',
    ctaLink: '#concerns',
    bgImage:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop',
  },
  {
    id: 'washing',
    title: 'Orix Washing Project',
    subtitle:
      'Sustainable fabric washing, garment wet processing, and compliant dyeing solutions with zero toxic discharge.',
    ctaText: 'Discover Washing Unit',
    ctaLink: '/washing',
    bgImage:
      'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?q=80&w=1920&auto=format&fit=crop',
  },
  {
    id: 'packaging',
    title: 'Orix Packaging & Accessories',
    subtitle:
      'High-quality corrugated cartons, custom polybags, and complete garment packaging solutions.',
    ctaText: 'Explore Packaging',
    ctaLink: '/packaging',
    bgImage:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1920&auto=format&fit=crop',
  },
  {
    id: 'water-pump',
    title: 'Orix Water Pump',
    subtitle:
      'Heavy-duty agricultural, commercial, and industrial water pump systems engineered for maximum durability.',
    ctaText: 'View Water Pumps',
    ctaLink: '/water-pump',
    bgImage:
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1920&auto=format&fit=crop',
  },
  {
    id: 'denim',
    title: 'Denim Creation',
    subtitle:
      'World-class denim apparel design, modern washing finishing, and premium global export unit.',
    ctaText: 'Explore Denim Unit',
    ctaLink: '/denim-creation',
    bgImage:
      'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=1920&auto=format&fit=crop',
  },
  {
    id: 'agro',
    title: 'Orix Agro Farm',
    subtitle:
      'Sustainable agriculture, commercial fisheries, agro-tech farming, and high-quality food production.',
    ctaText: 'Explore Agro Farm',
    ctaLink: '/agro-farm',
    bgImage:
      'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1920&auto=format&fit=crop',
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[calc(100vh-4rem)] min-h-125 overflow-hidden bg-slate-950">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out flex items-center justify-center ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}>
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${slide.bgImage}')` }}
          />
          <div className="absolute inset-0 bg-linear-to-r from-slate-950/90 via-slate-950/85 to-slate-950/90" />
          <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] bg-size-[16px_16px] opacity-15" />

          {/* Slide Content with safe flex distribution */}
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-25 flex flex-col items-center justify-center h-full pb-10">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
              {slide.title}
            </h1>
            <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto mb-6 font-normal leading-relaxed">
              {slide.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href={slide.ctaLink}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg shadow-lg transition duration-300 text-sm sm:text-base">
                {slide.ctaText}
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 font-semibold rounded-lg border border-slate-700 backdrop-blur-sm transition duration-300 text-sm sm:text-base">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Prev / Next Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-slate-900/60 text-white hover:bg-blue-600 transition border border-slate-700/50"
        aria-label="Previous Slide">
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-slate-900/60 text-white hover:bg-blue-600 transition border border-slate-700/50"
        aria-label="Next Slide">
        ❯
      </button>

      {/* Slide Dots Positioned Cleanly at Bottom */}
      <div className="absolute bottom-4 left-0 right-0 z-30 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'w-6 bg-blue-500'
                : 'w-2 bg-slate-600 hover:bg-slate-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
