import { ImageIcon } from "lucide-react";

const placeholderItems = Array.from({ length: 6 }, (_, i) => i + 1);

export default function PhotoGallery() {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1 h-7 bg-[#003d7a] rounded" />
          <h2 className="text-xl font-bold text-[#003d7a]">Photo Gallery</h2>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {placeholderItems.map((i) => (
            <div
              key={i}
              className="aspect-[4/3] bg-[#e8f0f7] rounded-lg flex flex-col items-center justify-center gap-2 border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
            >
              <ImageIcon size={28} className="text-[#003d7a]/30" />
              <p className="text-[10px] text-gray-400">Gallery image {i}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
