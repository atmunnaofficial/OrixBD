interface GalleryItem {
  image: string;
  title: string;
}

interface PackagingGalleryProps {
  gallery: GalleryItem[];
}

export default function PackagingGallery({ gallery }: PackagingGalleryProps) {
  return (
    <section className="mb-20">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-blue-500 text-sm font-semibold uppercase tracking-widest">
          Visual Showcase
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
          Packaging Plant Gallery
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {gallery.map((item, idx) => (
          <div
            key={idx}
            className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-lg">
            <div className="h-64 bg-slate-800 relative overflow-hidden flex items-center justify-center">
              <span className="text-slate-500 text-sm font-medium">
                Packaging Facility View {idx + 1}
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
