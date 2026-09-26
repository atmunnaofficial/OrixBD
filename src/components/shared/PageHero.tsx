interface PageHeroProps {
  badge: string;
  title: string;
  description: string;
}

export default function PageHero({ badge, title, description }: PageHeroProps) {
  return (
    <section className="relative py-12 md:py-16 text-center overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-blue-900/10 via-transparent to-transparent -z-10" />
      <div className="max-w-3xl mx-auto space-y-4 px-4">
        <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase tracking-widest">
          {badge}
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          {title}
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}
