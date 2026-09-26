'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="bg-slate-900 text-white sticky top-0 z-50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo + Company Name */}
          <Link href="/" className="flex items-center space-x-3 group">
            <Image
              src="/logo.png"
              alt="OrixBD Group Logo"
              width={160}
              height={40}
              className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
              priority
            />
            <span className="text-2xl font-black tracking-wider text-blue-500">
              ORIX<span className="text-white">BD</span>
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="flex space-x-8 items-center">
            <Link
              href="/"
              className="hover:text-blue-400 font-medium transition">
              Home
            </Link>

            <Link
              href="/about"
              className="hover:text-blue-400 font-medium transition">
              About Us
            </Link>

            <Link
              href="/concerns"
              className="hover:text-blue-400 font-medium transition">
              Our Concerns
            </Link>

            <Link
              href="/contact"
              className="hover:text-blue-400 font-medium transition">
              Contact
            </Link>

            <Link
              href="/washing"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition">
              Washing Unit
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
