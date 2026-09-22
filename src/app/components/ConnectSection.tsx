import { Mail, Phone, Share2, AtSign, Rss, Globe } from "lucide-react";

const socialLinks = [
  { icon: Share2, label: "Facebook", href: "#" },
  { icon: AtSign, label: "Twitter / X", href: "#" },
  { icon: Rss, label: "LinkedIn", href: "#" },
  { icon: Globe, label: "YouTube", href: "#" },
];

const contactItems = [
  { icon: Mail, label: "Email", value: "—" },
  { icon: Phone, label: "Phone", value: "—" },
];

export default function ConnectSection() {
  return (
    <section className="w-full bg-[#003d7a] py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Left */}
          <div>
            <h2 className="text-white text-xl font-bold mb-1">Connect With Me</h2>
            <p className="text-white/60 text-sm">Stay connected and follow the campaign</p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Icon size={18} className="text-white" />
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-2">
            {contactItems.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon size={14} className="text-white/60" />
                <span className="text-white/80 text-sm">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
