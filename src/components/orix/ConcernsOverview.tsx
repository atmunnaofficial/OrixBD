import Link from 'next/link';
import { concernsData } from '@/data/concerns';
import ConcernCard from './ConcernCard';

export default function ConcernsOverview() {
  return (
    <section
      id="concerns"
      className="py-20 bg-slate-900/40 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-blue-500 text-sm font-semibold uppercase tracking-widest">
              Our Sister Concerns
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-2">
              Our Core Business Units
            </h2>
          </div>
          <Link
            href="/concerns"
            className="mt-4 md:mt-0 text-blue-400 hover:text-blue-300 font-semibold text-sm inline-flex items-center gap-1">
            View All Concerns →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {concernsData.map((item) => (
            <ConcernCard key={item.id} concern={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
