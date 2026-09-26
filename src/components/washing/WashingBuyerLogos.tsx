interface BuyerItem {
  name?: string;
  region?: string;
  category?: string;
}

interface WashingBuyerLogosProps {
  buyers?: BuyerItem[];
}

export default function WashingBuyerLogos({
  buyers = [],
}: WashingBuyerLogosProps) {
  return (
    <section className="mb-20">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-blue-500 text-sm font-semibold uppercase tracking-widest">
          Global Partnerships
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
          Trusted By Global Apparel Giants
        </h2>
        <p className="text-slate-400 mt-3 text-sm">
          Proudly supplying sustainable garments to world-renowned brands and
          retail chains.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {buyers?.map((buyer, idx) => (
          <div
            key={idx}
            className="bg-slate-900/80 border border-slate-800/80 p-5 rounded-xl hover:border-blue-500/40 hover:bg-slate-900 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-blue-400 mb-1">
                {buyer.region || 'Global'}
              </div>
              <h3 className="text-lg font-bold text-white">
                {buyer.name || 'Brand Name'}
              </h3>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800/60 text-xs text-slate-400">
              {buyer.category || 'Apparel & Denim'}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
