/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

interface ServiceDetailGridProps {
  services?: any[];
}

export default function ServiceDetailGrid({
  services = [],
}: ServiceDetailGridProps) {
  const defaultServices = [
    {
      title: 'Sustainable Laser Treatment',
      description:
        'Computerized high-precision eco-fading and vintage design generation without chemical wash residue.',
    },
    {
      title: 'Ozone & Nano Bubble Washing',
      description:
        'Advanced waterless technology drastically reducing water consumption and chemical usage during laundering.',
    },
    {
      title: 'Enzyme & Bio-Polishing',
      description:
        'Eco-certified enzymatic wash cycles delivering ultra-soft handfeel and clean surface aesthetics.',
    },
    {
      title: 'Zero Liquid Discharge ETP',
      description:
        'Closed-loop effluent treatment system recycling up to 80% of wastewater back into production.',
    },
  ];

  const displayServices =
    services && services.length > 0 ? services : defaultServices;

  return (
    <section className="mb-20">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-blue-500 text-sm font-semibold uppercase tracking-widest">
          Services
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
          Our Capabilities
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-3">
          Comprehensive garment laundering and sustainable treatment
          capabilities powered by modern machinery.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayServices.map((service: any, idx: number) => (
          <div
            key={idx}
            className="bg-slate-900/90 border border-slate-800 p-6 rounded-2xl shadow-xl hover:border-blue-500/50 transition-all flex flex-col justify-between">
            <div>
              <div className="text-blue-500 font-bold text-lg mb-3">
                0{idx + 1}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {service.title || service.name || 'Industrial Capability'}
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                {service.description ||
                  service.desc ||
                  'Advanced processing and treatment service.'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
