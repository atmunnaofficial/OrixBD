interface MachineryItem {
  name: string;
  capacity: string;
  description: string;
}

interface PackagingMachineryGridProps {
  machinery: MachineryItem[];
}

export default function PackagingMachineryGrid({
  machinery,
}: PackagingMachineryGridProps) {
  return (
    <section className="mb-20">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-blue-500 text-sm font-semibold uppercase tracking-widest">
          Advanced Technology
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
          Packaging Machinery Lineup
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {machinery.map((item, idx) => (
          <div
            key={idx}
            className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-lg hover:border-blue-500/50 transition-all">
            <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
            <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs font-semibold mb-4">
              {item.capacity}
            </span>
            <p className="text-slate-400 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
