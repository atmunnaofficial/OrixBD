interface MetricItem {
  label: string;
  value: string;
  desc: string;
}

interface PackagingEcoMetricsProps {
  metrics: MetricItem[];
}

export default function PackagingEcoMetrics({
  metrics,
}: PackagingEcoMetricsProps) {
  return (
    <section className="mb-20">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-emerald-500 text-sm font-semibold uppercase tracking-widest">
          Sustainability
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
          Eco-Impact & Green Metrics
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {metrics.map((item, idx) => (
          <div
            key={idx}
            className="bg-slate-900/80 border border-slate-800 p-8 rounded-2xl text-center">
            <div className="text-4xl sm:text-5xl font-extrabold text-emerald-400 mb-2">
              {item.value}
            </div>
            <h3 className="text-lg font-bold text-white mb-1">{item.label}</h3>
            <p className="text-slate-400 text-xs sm:text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
