import Link from 'next/link';

export default function WaterPumpPage() {
  return (
    <div className="bg-slate-950 text-white min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-500 text-sm font-semibold uppercase tracking-widest">
            Engineering & Manufacturing
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3">
            Orix Water Pump
          </h1>
          <p className="mt-4 text-lg text-slate-400">
            Precision engineering and manufacturing of heavy-duty agricultural,
            industrial, and residential water pump systems.
          </p>
        </div>

        {/* Features / Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-3">
              Agricultural Pumps
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              High-flow centrifugal and submersible pumps engineered
              specifically for large-scale crop irrigation.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-3">
              Industrial Duty Pumps
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Heavy-duty water management systems for industrial plants,
              high-rise buildings, and drainage projects.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-3">
              Quality Assurance
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Rigorously tested motor efficiency, durable cast-iron
              construction, and low energy consumption guaranteed.
            </p>
          </div>
        </div>

        {/* Quick Contact Info */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white">
              Need Industrial Pump Solutions?
            </h3>
            <p className="text-slate-400 text-sm mt-1">
              Connect with our Narayanganj engineering plant.
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
