import Image from 'next/image';

interface StepItem {
  number?: string;
  title?: string;
  description?: string;
  imgUrl?: string;
  logo?: string;
}

interface ProcessStepsProps {
  title?: string;
  subtitle?: string;
  badge?: string;
  steps?: StepItem[];
}

export default function ProcessSteps({
  title = '',
  subtitle = '',
  badge = 'Workflow',
  steps = [],
}: ProcessStepsProps) {
  // Jodi steps na thake tahole component render hobe na
  if (!steps || steps.length === 0) return null;

  return (
    <section className="mb-20">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-blue-500 text-sm font-semibold uppercase tracking-widest">
          {badge}
        </span>
        {title && (
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="text-slate-400 mt-3 text-sm sm:text-base">{subtitle}</p>
        )}
      </div>

      {/* 4 columns on large screens, 2 on tablet, 1 on mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="group bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between shadow-lg">
            {step.imgUrl && (
              <div className="h-44 relative overflow-hidden">
                <Image
                  src={step.imgUrl}
                  alt={step.title || 'Step'}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent"></div>
                {step.number && (
                  <span className="absolute bottom-3 left-3 bg-blue-600 text-white text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-md shadow">
                    {step.number}
                  </span>
                )}
                {step.logo && (
                  <span className="absolute top-3 right-3 bg-slate-950/85 backdrop-blur border border-slate-700 text-base px-2.5 py-1 rounded-xl shadow-md">
                    {step.logo}
                  </span>
                )}
              </div>
            )}
            <div className="p-5 flex flex-col justify-between grow">
              <div>
                <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-blue-400 transition-colors">
                  {step.title || 'Process Title'}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {step.description || ''}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
