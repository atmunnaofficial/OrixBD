import Image from 'next/image';

interface CertItem {
  code?: string;
  title?: string;
  issuer?: string;
  description?: string;
  icon?: string;
  imgUrl?: string;
}

interface CertificationsGridProps {
  certifications?: CertItem[];
}

export default function CertificationsGrid({
  certifications = [],
}: CertificationsGridProps) {
  return (
    <section className="mb-20">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-blue-500 text-sm font-semibold uppercase tracking-widest">
          Global Compliance
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
          Certifications & Standards
        </h2>
        <p className="text-slate-400 mt-3 text-sm">
          Strictly aligned with international eco-friendly standards, ethical
          labor practices, and quality benchmarks.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {certifications?.map((c, idx) => (
          <div
            key={idx}
            className="group bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between">
            {c.imgUrl && (
              <div className="h-40 relative overflow-hidden">
                <Image
                  src={c.imgUrl}
                  alt={c.title || 'Certification'}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent"></div>
                {c.icon && (
                  <span className="absolute top-3 right-3 bg-slate-950/85 backdrop-blur border border-slate-700 text-lg px-2.5 py-1 rounded-xl shadow-lg">
                    {c.icon}
                  </span>
                )}
              </div>
            )}
            <div className="p-5 flex flex-col justify-between grow">
              <div>
                <div className="mb-2">
                  <span className="text-xs font-bold text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/20 inline-block">
                    {c.code || 'ISO'}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-1.5">
                  {c.title || 'Certificate'}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {c.description || ''}
                </p>
              </div>
              {c.issuer && (
                <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-slate-500 flex justify-between items-center">
                  <span>Issuer:</span>
                  <strong className="text-slate-300">{c.issuer}</strong>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
