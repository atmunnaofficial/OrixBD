import Link from 'next/link';

export default function CtaBanner() {
  return (
    <section className="rounded-3xl bg-linear-to-r from-blue-900/40 via-slate-900 to-slate-950 border border-blue-500/20 p-8 sm:p-12 text-center relative overflow-hidden">
      <div className="max-w-2xl mx-auto space-y-4 relative z-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          Ready to Elevate Your Apparel Quality & Packaging?
        </h2>
        <p className="text-slate-300 text-sm">
          Get in touch with our expert team for sustainable washing samples and
          high-grade packaging solutions.
        </p>
        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-block px-8 py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-500 transition shadow-lg shadow-blue-600/30">
            Contact Our Team
          </Link>
        </div>
      </div>
    </section>
  );
}
