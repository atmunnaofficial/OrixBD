/* eslint-disable @typescript-eslint/no-explicit-any */
interface SpecItem {
  parameter?: string;
  label?: string;
  value?: string;
  detail?: string;
}

interface PackagingTechSpecsTableProps {
  specs?:
    | {
        title?: string;
        specs?: SpecItem[];
        [key: string]: any;
      }
    | SpecItem[];
}

export default function PackagingTechSpecsTable({
  specs,
}: PackagingTechSpecsTableProps) {
  let specsList: SpecItem[] = [];

  if (Array.isArray(specs)) {
    specsList = specs;
  } else if (specs && typeof specs === 'object') {
    if ('specs' in specs && Array.isArray((specs as any).specs)) {
      specsList = (specs as any).specs;
    } else {
      specsList = Object.values(specs) as SpecItem[];
    }
  }

  return (
    <section className="mb-20">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-blue-500 text-sm font-semibold uppercase tracking-widest">
          Plant Specifications
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
          Packaging Technical Infrastructure
        </h2>
      </div>

      <div className="max-w-4xl mx-auto bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
        <div className="divide-y divide-slate-800">
          {specsList.map((item, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <span className="text-slate-300 font-medium text-sm sm:text-base">
                {item?.parameter || item?.label || `Spec ${idx + 1}`}
              </span>
              <span className="text-blue-400 font-semibold text-sm sm:text-base">
                {item?.value || 'Standard'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
