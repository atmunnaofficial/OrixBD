interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export default function TestimonialsSection({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  return (
    <section className="py-8 bg-slate-900/40 border border-slate-800/80 rounded-3xl p-6 md:p-8">
      <h2 className="text-2xl font-bold text-white text-center mb-8">
        What Our Clients Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="p-6 bg-slate-950/80 border border-slate-800 rounded-2xl">
            {/* HTML Entity &quot; use kora hoyeche */}
            <p className="text-sm italic text-slate-300 mb-4 leading-relaxed">
              &quot;{t.quote}&quot;
            </p>
            <p className="text-sm font-bold text-white">{t.author}</p>
            <p className="text-xs text-blue-400">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
