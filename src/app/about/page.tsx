export default function AboutPage() {
  return (
    <div className="bg-slate-950 text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-500 text-sm font-semibold uppercase tracking-widest">
            About Orix Group
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3">
            Building Excellence Through Innovation & Trust
          </h1>
          <p className="mt-4 text-lg text-slate-400">
            Orix Group is one of Bangladesh’s leading diversified industrial
            conglomerates, driving progress across textile washing, packaging,
            engineering, denim creation, and agriculture.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
          <div className="p-8 bg-slate-900 rounded-2xl border border-slate-800">
            <h2 className="text-2xl font-bold text-white mb-3">Our Vision</h2>
            <p className="text-slate-400 leading-relaxed">
              To be a sustainable industrial pioneer in Bangladesh, delivering
              global-quality products and eco-friendly solutions across all our
              business sectors.
            </p>
          </div>

          <div className="p-8 bg-slate-900 rounded-2xl border border-blue-900/50">
            <h2 className="text-2xl font-bold text-blue-400 mb-3">
              Our Mission
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Empower industries with modern technology, maintain 100%
              compliance, foster long-term partnerships, and contribute
              positively to our national economy.
            </p>
          </div>
        </div>

        {/* Leadership Team / Board Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">
              Leadership & Management
            </h2>
            <p className="mt-2 text-slate-400">
              The visionaries behind Orix Group
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-900 rounded-2xl p-6 text-center border border-slate-800">
              <div className="w-24 h-24 bg-slate-800 rounded-full mx-auto mb-4 flex items-center justify-center text-blue-400 font-bold text-xl border border-slate-700">
                MD
              </div>
              <h3 className="text-xl font-bold text-white">
                Managing Director
              </h3>
              <p className="text-sm text-blue-400 font-medium">Orix Group</p>
              <p className="text-xs text-slate-400 mt-3">
                Leading strategic growth and industrial expansion.
              </p>
            </div>

            <div className="bg-slate-900 rounded-2xl p-6 text-center border border-slate-800">
              <div className="w-24 h-24 bg-slate-800 rounded-full mx-auto mb-4 flex items-center justify-center text-blue-400 font-bold text-xl border border-slate-700">
                C
              </div>
              <h3 className="text-xl font-bold text-white">Chairman</h3>
              <p className="text-sm text-blue-400 font-medium">Orix Group</p>
              <p className="text-xs text-slate-400 mt-3">
                Guiding corporate governance and group vision.
              </p>
            </div>

            <div className="bg-slate-900 rounded-2xl p-6 text-center border border-slate-800">
              <div className="w-24 h-24 bg-slate-800 rounded-full mx-auto mb-4 flex items-center justify-center text-blue-400 font-bold text-xl border border-slate-700">
                CEO
              </div>
              <h3 className="text-xl font-bold text-white">
                Chief Executive Officer
              </h3>
              <p className="text-sm text-blue-400 font-medium">Operations</p>
              <p className="text-xs text-slate-400 mt-3">
                Overseeing factory operations and production quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
