import { concernsData } from '@/data/concerns';
import ConcernCard from '@/components/orix/ConcernCard';

export default function ConcernsPage() {
  return (
    <div className="bg-slate-950 text-white min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-500 text-sm font-semibold uppercase tracking-widest">
            Our Business Units
          </span>
          <h1 className="text-4xl font-extrabold text-white mt-3">
            Orix Group Sister Concerns
          </h1>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Discover our diverse portfolio of industries driving sustainable
            innovation, quality manufacturing, and economic growth across
            Bangladesh.
          </p>
        </div>

        {/* Reusable Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {concernsData.map((concern) => (
            <ConcernCard key={concern.id} concern={concern} />
          ))}
        </div>
      </div>
    </div>
  );
}
