import { Play } from "lucide-react";

export default function FeaturedVideo() {
  return (
    <section className="w-full bg-[#f4f7fb] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1 h-7 bg-[#003d7a] rounded" />
          <h2 className="text-xl font-bold text-[#003d7a]">Featured Video</h2>
        </div>

        <div className="flex gap-6">
          {/* Main video placeholder */}
          <div className="flex-1 aspect-video bg-[#1a2a3a] rounded-lg flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#003d7a]/80 to-[#001a3a]/90" />
            <div className="relative flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center border-2 border-white/40 hover:bg-white/30 transition-colors cursor-pointer">
                <Play size={28} className="text-white ml-1" />
              </div>
              <p className="text-white/60 text-xs">[Video placeholder — asset not yet available]</p>
            </div>
          </div>

          {/* Side video list */}
          <div className="w-64 shrink-0 flex flex-col gap-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-3 bg-white rounded-lg p-3 shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow">
                <div className="w-20 h-14 bg-[#003d7a]/10 rounded flex items-center justify-center shrink-0">
                  <Play size={14} className="text-[#003d7a]" />
                </div>
                <div className="flex flex-col justify-center min-w-0">
                  <p className="text-xs font-medium text-gray-700 leading-snug line-clamp-2">
                    Video {i} — placeholder
                  </p>
                  <p className="text-[10px] text-gray-400 mt-1">—</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
