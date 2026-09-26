import Link from 'next/link';

export default function AgroFarmPage() {
  return (
    <div className="bg-slate-950 text-white min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-500 text-sm font-semibold uppercase tracking-widest">
            Sustainable Agriculture
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3">
            Orix Agro Farm
          </h1>
          <p className="mt-4 text-lg text-slate-400">
            Promoting sustainable farming, organic crop production, fisheries,
            and agro-based products in Bangladesh.
          </p>
        </div>

        {/* Features / Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-3">
              Organic Farming
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Pesticide-free organic crop cultivation focused on sustainability
              and healthy consumer products.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-3">
              Fisheries Project
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Modern biofloc and pond-based commercial fish farming producing
              high-yield quality freshwater fish.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-3">Distribution</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Streamlined supply chain and cold storage distribution to deliver
              fresh agro products nationwide.
            </p>
          </div>
        </div>

        {/* Quick Contact Info */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white">
              Interested in Agro Supplies?
            </h3>
            <p className="text-slate-400 text-sm mt-1">
              Get in touch with our Bogra agro project office.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition whitespace-nowrap">
            Contact Project Office
          </Link>
        </div>
      </div>
    </div>
  );
}
