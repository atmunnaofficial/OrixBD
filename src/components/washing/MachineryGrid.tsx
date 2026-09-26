import Image from 'next/image';

interface MachineItem {
  title?: string;
  brand?: string;
  count?: string;
  desc?: string;
  imgUrl?: string;
  logo?: string;
}

interface MachineryGridProps {
  machinery?: MachineItem[];
}

export default function MachineryGrid({ machinery = [] }: MachineryGridProps) {
  return (
    <section className="mb-20">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-blue-500 text-sm font-semibold uppercase tracking-widest">
          Industrial Infrastructure
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
          Machinery & Technology Lineup
        </h2>
        <p className="text-slate-400 mt-3 text-sm">
          Powered by world-leading European, American, and Asian high-precision
          automated garment processing systems.
        </p>
      </div>

      {/* Responsive Grid: 1 col on mobile, 2 cols on tablet, 4 cols on large screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {machinery?.slice(0, 8).map((item, idx) => (
          <div
            key={idx}
            className="group bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between shadow-lg">
            {item.imgUrl && (
              <div className="h-44 relative overflow-hidden">
                <Image
                  src={item.imgUrl}
                  alt={item.title || 'Machinery'}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent"></div>
                {item.logo && (
                  <span className="absolute top-3 right-3 bg-slate-950/85 backdrop-blur border border-slate-700 text-base px-2.5 py-1 rounded-xl shadow-md">
                    {item.logo}
                  </span>
                )}
                {item.count && (
                  <span className="absolute bottom-3 left-3 bg-blue-600/90 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-md shadow">
                    {item.count}
                  </span>
                )}
              </div>
            )}
            <div className="p-5 flex flex-col justify-between grow">
              <div>
                <h3 className="text-base font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                  {item.title || 'Heavy Machine'}
                </h3>
                {item.brand && (
                  <p className="text-xs font-semibold text-blue-400/90 mb-2.5">
                    {item.brand}
                  </p>
                )}
                <p className="text-slate-400 text-xs leading-relaxed">
                  {item.desc || ''}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
