import Link from 'next/link';
import { Concern } from '@/data/concerns';

interface ConcernCardProps {
  concern: Concern;
}

export default function ConcernCard({ concern }: ConcernCardProps) {
  return (
    <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition duration-300 flex flex-col justify-between group">
      <div>
        <div className="text-3xl mb-4">{concern.icon}</div>
        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition">
          {concern.name}
        </h3>
        <p className="mt-3 text-slate-400 text-sm leading-relaxed">
          {concern.desc}
        </p>
      </div>
      <div className="mt-6 pt-4 border-t border-slate-800">
        <Link
          href={concern.link}
          className="text-sm font-semibold text-blue-400 hover:text-blue-300 transition inline-flex items-center gap-1">
          Explore Unit →
        </Link>
      </div>
    </div>
  );
}
