export default function ComplianceSection() {
  return (
    <section className="py-20 bg-slate-900/60 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-blue-500 text-sm font-semibold uppercase tracking-widest">
          Compliance & Standards
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 mb-6">
          Committed to Safety, Sustainability & Quality
        </h2>
        <p className="text-slate-400 max-w-3xl mx-auto text-base sm:text-lg mb-12">
          Orix Group adheres strictly to international environmental standards,
          zero toxic discharge commitments, biological water treatment, and
          ethical workforce practices across all manufacturing units.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-6 bg-slate-900 rounded-xl border border-slate-800">
            <h3 className="text-lg font-bold text-white mb-1">
              Biological ETP
            </h3>
            <p className="text-xs text-slate-400">Zero Water Pollution</p>
          </div>
          <div className="p-6 bg-slate-900 rounded-xl border border-slate-800">
            <h3 className="text-lg font-bold text-white mb-1">ISO Certified</h3>
            <p className="text-xs text-slate-400">Quality Management</p>
          </div>
          <div className="p-6 bg-slate-900 rounded-xl border border-slate-800">
            <h3 className="text-lg font-bold text-white mb-1">Worker Safety</h3>
            <p className="text-xs text-slate-400">100% Compliant Workplace</p>
          </div>
          <div className="p-6 bg-slate-900 rounded-xl border border-slate-800">
            <h3 className="text-lg font-bold text-white mb-1">
              Eco Production
            </h3>
            <p className="text-xs text-slate-400">Green Energy Focus</p>
          </div>
        </div>
      </div>
    </section>
  );
}
