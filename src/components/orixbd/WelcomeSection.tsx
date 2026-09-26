export default function WelcomeSection() {
  return (
    <section className="py-20 border-b border-slate-900 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-blue-500 text-sm font-semibold uppercase tracking-widest">
            Welcome to OrixBD Group
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 leading-snug">
            Driving Industrial Innovation & Economic Growth in Bangladesh
          </h2>
          <p className="mt-6 text-slate-400 text-base sm:text-lg leading-relaxed">
            OrixBD Group is a pioneering industrial conglomerate operating
            across five core business sectors. We are committed to eco-friendly
            production, high compliance, cutting-edge technology, and delivering
            exceptional value to our global clients and nationwide partners.
          </p>
        </div>

        {/* Key Group Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center">
          <div className="p-6 bg-slate-900/80 rounded-2xl border border-slate-800/80">
            <span className="text-3xl md:text-4xl font-black text-blue-500">
              5+
            </span>
            <p className="text-sm text-slate-400 mt-2 font-medium">
              Business Units
            </p>
          </div>
          <div className="p-6 bg-slate-900/80 rounded-2xl border border-slate-800/80">
            <span className="text-3xl md:text-4xl font-black text-blue-500">
              100%
            </span>
            <p className="text-sm text-slate-400 mt-2 font-medium">
              Eco Compliance
            </p>
          </div>
          <div className="p-6 bg-slate-900/80 rounded-2xl border border-slate-800/80">
            <span className="text-3xl md:text-4xl font-black text-blue-500">
              1000+
            </span>
            <p className="text-sm text-slate-400 mt-2 font-medium">
              Skilled Workforce
            </p>
          </div>
          <div className="p-6 bg-slate-900/80 rounded-2xl border border-slate-800/80">
            <span className="text-3xl md:text-4xl font-black text-blue-500">
              Global
            </span>
            <p className="text-sm text-slate-400 mt-2 font-medium">
              Export Quality
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
