/* eslint-disable @typescript-eslint/no-explicit-any */
interface TechSpecsTableProps {
  specs?: any;
}

export default function TechSpecsTable({ specs }: TechSpecsTableProps) {
  // Real Plant Specifications Data
  const defaultSpecs = [
    { label: 'Total Factory Floor Area', value: '120,000 sq. ft.' },
    { label: 'Daily Production Capacity', value: '45,000 - 50,000 Pieces' },
    {
      label: 'Water Treatment Capacity (ETP)',
      value: '2,500 m³ / Day (ZLD System)',
    },
    {
      label: 'Total Machinery Lines',
      value: '12+ Heavy-Duty Industrial Lines',
    },
    { label: 'Laser Fading Units', value: '4 Advanced Computerized Stations' },
    { label: 'Ozone Washing Chambers', value: '3 Eco-Friendly Units' },
    {
      label: 'Power Backup Generator',
      value: '1,500 kVA Uninterrupted Supply',
    },
    {
      label: 'Compliance & Standards',
      value: 'ZDHC Level 3, OEKO-TEX, SEDEX, GOTS',
    },
  ];

  // Use any[] to avoid strict type mismatch error in TypeScript
  let specsList: any[] = defaultSpecs;

  if (specs) {
    if (Array.isArray(specs) && specs.length > 0) {
      specsList = specs;
    } else if (typeof specs === 'object' && Object.keys(specs).length > 0) {
      const values = Object.values(specs);
      if (values.length > 0 && typeof values[0] === 'object') {
        specsList = values;
      }
    }
  }

  return (
    <section className="mb-20">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-blue-500 text-sm font-semibold uppercase tracking-widest">
          Plant Specifications
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
          Technical & Infrastructure Specs
        </h2>
      </div>

      <div className="max-w-4xl mx-auto bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
        <div className="divide-y divide-slate-800">
          {specsList.map((item: any, idx: number) => (
            <div
              key={idx}
              className="p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 hover:bg-slate-800/40 transition-colors">
              <span className="text-slate-300 font-medium text-sm sm:text-base">
                {item?.label ||
                  item?.title ||
                  item?.name ||
                  `Specification ${idx + 1}`}
              </span>
              <span className="text-blue-400 font-semibold text-sm sm:text-base">
                {item?.value ||
                  item?.desc ||
                  item?.detail ||
                  item?.specification ||
                  'High Capacity'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
