interface BuyerItem {
  name: string;
}

interface PackagingBuyerLogosProps {
  buyers: BuyerItem[];
}

export default function PackagingBuyerLogos({
  buyers,
}: PackagingBuyerLogosProps) {
  return (
    <section className="mb-20 py-12 bg-slate-900/40 border border-slate-800/60 rounded-3xl">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="text-blue-500 text-sm font-semibold uppercase tracking-widest">
          Trusted Partners
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
          Global Buyers & Brands
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6 max-w-5xl mx-auto">
        {buyers.map((buyer, idx) => (
          <div
            key={idx}
            className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex items-center justify-center text-center hover:border-blue-500/40 transition-all shadow-md">
            <span className="text-slate-300 font-bold tracking-wide">
              {buyer.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
