import Link from 'next/link';

export default function PackagingPage() {
  return (
    <div className="bg-slate-950 text-white min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-500 text-sm font-semibold uppercase tracking-widest">
            Packaging & Accessories Unit
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3">
            Orix Packaging & Accessories
          </h1>
          <p className="mt-4 text-lg text-slate-400">
            High-quality corrugated cartons, custom polybags, and complete
            garment packaging solutions.
          </p>
        </div>

        {/* Features / Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-3">
              Corrugated Cartons
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Heavy-duty 3-ply, 5-ply, and 7-ply corrugated cartons engineered
              for safe international apparel transit.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-3">
              Custom Polybags
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Eco-friendly, biodegradable, and customized printed polybags for
              complete retail garment packing.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-3">
              Garment Accessories
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Premium woven labels, care instructions tags, hangtags, and
              elastic bands for brand identity.
            </p>
          </div>
        </div>

        {/* Quick Contact Info */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white">
              Need Reliable Packaging Solutions?
            </h3>
            <p className="text-slate-400 text-sm mt-1">
              Contact our packaging and accessories manufacturing division.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition whitespace-nowrap">
            Contact Packaging Unit
          </Link>
        </div>
      </div>
    </div>
  );
}
