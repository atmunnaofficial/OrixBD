'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
  {
    badge: 'State-of-the-Art Industrial Unit',
    title: 'Building Excellence Across Diverse Industries',
    description:
      'Orix Group is a leading conglomerate driven by innovation, sustainability, and quality service in Bangladesh.',
    image:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600',
    primaryButtonText: 'Explore Our Portfolio',
    primaryButtonLink: '/about',
    secondaryButtonText: 'Contact Us',
    secondaryButtonLink: '/contact',
  },
  {
    badge: 'Company Overview',
    title: 'Orix Washing Project',
    description:
      'A world-class sustainable denim and garment laundering facility powered by global cutting-edge processing technology.',
    image:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600',
    primaryButtonText: 'Visit Washing Unit',
    primaryButtonLink: '/washing',
    secondaryButtonText: 'Contact Us',
    secondaryButtonLink: '/contact',
  },
  {
    badge: 'Packaging & Accessories',
    title: 'Precision Packaging & Carton Solutions',
    description:
      'State-of-the-art offset printing, eco-friendly corrugated manufacturing, and automated finishing lines for global brands.',
    image:
      'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1600',
    primaryButtonText: 'Visit Packaging Unit',
    primaryButtonLink: '/packaging',
    secondaryButtonText: 'Contact Us',
    secondaryButtonLink: '/contact',
  },
  {
    badge: 'Sustainable Manufacturing',
    title: 'Eco-Friendly Production Standards',
    description:
      'Committed to green energy, waste reduction, and international compliance to ensure sustainable operations across all units.',
    image:
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1600',
    primaryButtonText: 'Our Concerns',
    primaryButtonLink: '/concerns',
    secondaryButtonText: 'Contact Us',
    secondaryButtonLink: '/contact',
  },
  {
    badge: 'Global Partnerships',
    title: 'Trusted by Worldwide Brands',
    description:
      'Delivering premium quality products on time with strict quality control, earning the trust of international retail giants.',
    image:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600',
    primaryButtonText: 'About Our Group',
    primaryButtonLink: '/about',
    secondaryButtonText: 'Contact Us',
    secondaryButtonLink: '/contact',
  },
];

export default function HeroSlider() {
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

            <p className="text-slate-200 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed drop-shadow mb-8">
              {slide.description}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={slide.primaryButtonLink}
                className="px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-500/30 transition-all">
                {slide.primaryButtonText}
              </Link>
              <Link
                href={slide.secondaryButtonLink}
                className="px-8 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold transition-all backdrop-blur-md shadow-lg">
                {slide.secondaryButtonText}
              </Link>
            </div>
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
