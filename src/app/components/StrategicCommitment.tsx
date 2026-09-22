import { Shield, TrendingUp, Link2, Users, MessageSquare, Globe } from "lucide-react";

const commitments = [
  { icon: Shield,        title: "Professional Development" },
  { icon: TrendingUp,    title: "Young Engineers' Empowerment" },
  { icon: Link2,         title: "Engineers' Welfare & Dignity" },
  { icon: Users,         title: "Technical Knowledge & Innovation" },
  { icon: MessageSquare, title: "Inclusive Member Engagement" },
  { icon: Globe,         title: "Stronger Professional Networking" },
];

export default function StrategicCommitment() {
  return (
    <section className="w-full bg-white py-4">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-1 h-4 bg-[#003d7a] rounded" />
          <h2 className="text-sm font-bold text-[#003d7a]">My Strategic Commitment to IEB</h2>
        </div>
        <div className="grid grid-cols-3 gap-2.5">
          {commitments.map(({ icon: Icon, title }) => (
            <div
              key={title}
              className="bg-white rounded-lg border border-gray-100 shadow-sm px-3 py-2.5 flex items-center gap-2.5"
            >
              <div className="w-6 h-6 rounded-full bg-[#e8f0f7] flex items-center justify-center shrink-0">
                <Icon size={12} className="text-[#003d7a]" />
              </div>
              <h3 className="text-[#003d7a] font-semibold text-xs leading-snug">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
