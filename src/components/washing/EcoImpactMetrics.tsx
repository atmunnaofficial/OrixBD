interface MetricItem {
  label?: string;
  value?: string;
  description?: string;
  desc?: string;
}

interface EcoImpactMetricsProps {
  metrics?: MetricItem[];
}

export default function EcoImpactMetrics({
  metrics = [],
}: EcoImpactMetricsProps) {
  return (
    <section className="mb-16">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-green-500 text-sm font-semibold uppercase tracking-widest">
          Sustainability
        </span>
        <h2 className="text-3xl font-extrabold text-white mt-2">
          Eco Impact Metrics
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {metrics?.map((m, idx) => (
          <div
            key={idx}
            className="bg-slate-900/90 border border-slate-800 p-6 rounded-2xl text-center hover:border-green-500/50 transition-all duration-300">
            <div className="text-4xl font-black text-green-400 mb-2">
              {m.value || '0%'}
            </div>
            <h3 className="text-lg font-bold text-white mb-1">
              {m.label || 'Metric'}
            </h3>
            <p className="text-slate-400 text-xs">
              {m.description || m.desc || ''}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
