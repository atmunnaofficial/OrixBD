import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info with Logo + Name */}
        <div className="md:col-span-1">
          <Link href="/" className="inline-flex items-center space-x-3 mb-4">
            <Image
              src="/logo.png"
              alt="OrixBD Group Logo"
              width={160}
              height={40}
              className="h-10 w-auto object-contain"
            />
            <span className="text-2xl font-bold text-white">
              ORIX<span className="text-blue-500">BD</span>
            </span>
          </Link>
          <p className="text-sm text-slate-400 leading-relaxed">
            Leading industrial group delivering excellence across washing,
            packaging, heavy engineering, denim apparel, and agriculture in
            Bangladesh.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-blue-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-400 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/concerns" className="hover:text-blue-400 transition">
                Our Concerns
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-400 transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Business Concerns Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Our Business Units</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/washing" className="hover:text-blue-400 transition">
                Orix Washing Project
              </Link>
            </li>
            <li>
              <Link
                href="/packaging"
                className="hover:text-blue-400 transition">
                Orix Packaging & Accessories
              </Link>
            </li>
            <li>
              <Link
                href="/water-pump"
                className="hover:text-blue-400 transition">
                Orix Water Pump
              </Link>
            </li>
            <li>
              <Link
                href="/denim-creation"
                className="hover:text-blue-400 transition">
                Denim Creation
              </Link>
            </li>
            <li>
              <Link
                href="/agro-farm"
                className="hover:text-blue-400 transition">
                Orix Agro Farm
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-semibold mb-4">Head Office</h4>
          <p className="text-sm">Dhaka, Bangladesh</p>
          <p className="text-sm mt-2">Email: info@orixbd.com</p>
          <p className="text-sm mt-1">Phone: +880 1700-000000</p>
        </div>
      </div>

      <div className="text-center text-xs text-slate-500 mt-12 pt-6 border-t border-slate-900">
        © {new Date().getFullYear()} OrixBD Group. All rights reserved.
      </div>
    </footer>
  );
}
