import Link from 'next/link';

export default function DenimCreationPage() {
  return (
    <div className="bg-slate-950 text-white min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-500 text-sm font-semibold uppercase tracking-widest">
            Fashion & Apparel Export
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3">
            Denim Creation
          </h1>
          <p className="mt-4 text-lg text-slate-400">
            World-class denim apparel design, modern garment washing, finishing,
            and global export unit.
          </p>
        </div>

        {/* Features / Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-3">
              Custom Denim Design
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              In-house fashion design team crafting cutting-edge denim jeans,
              jackets, and fashion wear for global buyers.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-3">
              Modern Finishing
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Laser whiskering, 3D creasing, hand-scraping, and eco-friendly
              ozone washing techniques.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-3">
              Global Export Standard
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              100% compliant export facility adhering to SEDEX, WRAP, and
              OEKO-TEX international standards.
            </p>
          </div>
        </div>

        {/* Quick Contact Info */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white">
              Partner for Denim Manufacturing?
            </h3>
            <p className="text-slate-400 text-sm mt-1">
              Contact our Ashulia denim manufacturing office.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition whitespace-nowrap">
            Contact Factory Office
          </Link>
        </div>
      </div>
    </div>
  );
}
