import Image from 'next/image';

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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Chairman */}
            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="relative w-full h-64 sm:h-72 rounded-xl overflow-hidden mb-6 bg-slate-800 border border-slate-700">
                  <Image
                    src="/assets/Chairman.png"
                    alt="Chairman"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Md. Munir Hossain Chowdhury
                </h3>
                <p className="text-sm text-blue-400 font-semibold mt-1">
                  Chairman
                </p>
                <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                  Guiding corporate governance and group vision towards
                  sustainable excellence.
                </p>
              </div>
            </div>

            {/* Managing Director */}
            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="relative w-full h-64 sm:h-72 rounded-xl overflow-hidden mb-6 bg-slate-800 border border-slate-700">
                  <Image
                    src="/assets/ManagingDirector.png"
                    alt="Managing Director"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Foiz Md Ferdous Hossain
                </h3>
                <p className="text-sm text-blue-400 font-semibold mt-1">
                  Managing Director
                </p>
                <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                  Leading strategic growth, industrial expansion, and global
                  partnerships.
                </p>
              </div>
            </div>

            {/* CEO */}
            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="relative w-full h-64 sm:h-72 rounded-xl overflow-hidden mb-6 bg-slate-800 border border-slate-700">
                  <Image
                    src="/assets/CEO.jpg"
                    alt="Chief Executive Officer"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Mohammad Mohsen
                </h3>
                <p className="text-sm text-blue-400 font-semibold mt-1">
                  Chief Executive Officer
                </p>
                <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                  Overseeing factory operations, compliance, and production
                  quality assurance.
                </p>
              </div>
            </div>

            {/* General Manager */}
            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="relative w-full h-64 sm:h-72 rounded-xl overflow-hidden mb-6 bg-slate-800 border border-slate-700">
                  <Image
                    src="/assets/GeneralManager.jpg"
                    alt="General Manager"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Md. Idris Ali Jony
                </h3>
                <p className="text-sm text-blue-400 font-semibold mt-1">
                  General Manager
                </p>
                <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                  Managing day-to-day plant operations, workforce safety, and
                  operational flow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
