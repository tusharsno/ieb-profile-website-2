import {
  ArrowRight,
  Globe,
  ImageIcon,
  Link2,
  Mail,
  MapPin,
  Phone,
  Play,
  Send,
} from "lucide-react";

const galleryPlaceholders = Array.from({ length: 3 }, (_, i) => i + 1);

const contactItems = [
  { icon: Phone,  label: "+880 1XXX XXXXXXX",           href: "tel:+8801XXXXXXXXX" },
  { icon: Mail,   label: "harun.ee.cuet@gmail.com",     href: "mailto:harun.ee.cuet@gmail.com" },
  { icon: Link2,  label: "linkedin.com/in/mohammad-harun", href: "https://linkedin.com/in/mohammad-harun" },
  { icon: Globe,  label: "www.mohammadharun.com",        href: "https://www.mohammadharun.com" },
  { icon: MapPin, label: "Chittagong, Bangladesh",       href: "#" },
];

const socialLinks = [
  { label: "Facebook",      bg: "#1769aa", text: "f",  href: "#",                                    textSize: "text-[13px]" },
  { label: "LinkedIn",      bg: "#0a66c2", text: "in", href: "https://linkedin.com/in/mohammad-harun", textSize: "text-[10px]" },
  { label: "X",             bg: "#000000", text: "X",  href: "#",                                    textSize: "text-[10px]" },
];

export default function BottomMediaRow() {
  return (
    <section
      id="media"
      className="w-full bg-[#f0f6fb] py-[14px]"
      style={{ borderTop: "1px solid #d0e4f0", borderBottom: "1px solid #d0e4f0" }}
    >
      <div
        className="
          mx-auto grid w-full
          max-w-full lg:max-w-[1200px] xl:max-w-[1320px]
          grid-cols-1 items-stretch gap-[12px]
          px-4 sm:px-6
          md:grid-cols-3
          lg:grid-cols-[1.15fr_1.1fr_0.85fr]
        "
      >
        {/* FEATURED VIDEO */}
        <article className="overflow-hidden rounded-[5px] border border-[#dce6ee] bg-white shadow-[0_2px_6px_rgba(15,58,91,0.07)]">
          <div className="h-[3px] w-full" style={{ background: "linear-gradient(90deg,#07518a,#0a6aad,#07518a)" }} />
          <div className="flex h-[42px] items-center gap-[10px] px-[14px]">
            <div
              className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-[6px]"
              style={{ background: "linear-gradient(135deg,#07518a18,#07518a30)", border: "1.5px solid #07518a33" }}
            >
              <Play size={13} strokeWidth={2.3} className="ml-[1px] text-[#07518a]" aria-hidden="true" />
            </div>
            <h2 className="text-[16px] font-bold leading-none text-[#0b3f6c]">Featured Video</h2>
          </div>
          <div className="px-[12px] pb-[12px]">
            <div className="relative flex h-[172px] w-full items-center justify-center overflow-hidden rounded-[5px] bg-[#dce8f1]">
              <div className="flex h-[48px] w-[48px] items-center justify-center rounded-full border border-[#7fa3bf] bg-white/70">
                <Play size={22} strokeWidth={2} className="ml-[3px] text-[#07518a]" aria-hidden="true" />
              </div>
            </div>
          </div>
        </article>

        {/* PHOTO GALLERY */}
        <article id="gallery" className="overflow-hidden rounded-[5px] border border-[#dce6ee] bg-white shadow-[0_2px_6px_rgba(15,58,91,0.07)]">
          <div className="h-[3px] w-full" style={{ background: "linear-gradient(90deg,#07518a,#0a6aad,#07518a)" }} />
          <div className="flex h-[42px] items-center justify-between px-[14px]">
            <div className="flex items-center gap-[10px]">
              <div
                className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-[6px]"
                style={{ background: "linear-gradient(135deg,#07518a18,#07518a30)", border: "1.5px solid #07518a33" }}
              >
                <ImageIcon size={13} strokeWidth={2.2} className="text-[#07518a]" aria-hidden="true" />
              </div>
              <h2 className="text-[16px] font-bold leading-none text-[#0b3f6c]">Photo Gallery</h2>
            </div>
            <a href="/media" className="group flex items-center gap-[3px] text-[13px] font-semibold text-[#07518a] transition-colors hover:text-[#003d7a]">
              <span>View All</span>
              <ArrowRight size={11} strokeWidth={2} aria-hidden="true" />
            </a>
          </div>
          <div className="grid grid-cols-3 gap-[6px] px-[10px] pb-[12px]">
            {galleryPlaceholders.map((item) => (
              <div key={item} className="flex h-[172px] items-center justify-center overflow-hidden rounded-[4px] bg-[#e5eef5]">
                <ImageIcon size={16} strokeWidth={1.8} className="text-[#8eb0ca]" aria-hidden="true" />
              </div>
            ))}
          </div>
        </article>

        {/* CONNECT WITH ME */}
        <article className="overflow-hidden rounded-[5px] border border-[#dce6ee] bg-white shadow-[0_2px_6px_rgba(15,58,91,0.07)]">
          <div className="h-[3px] w-full" style={{ background: "linear-gradient(90deg,#07518a,#0a6aad,#07518a)" }} />
          <div className="flex h-[42px] items-center justify-between gap-[8px] px-[13px]">
            <h2 className="shrink-0 whitespace-nowrap text-[16px] font-bold leading-none text-[#0b3f6c]">
              Connect With Me
            </h2>
            <div className="flex shrink-0 items-center gap-[5px]">
              {socialLinks.map(({ label, bg, text, href, textSize }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className={`flex h-[22px] min-w-[22px] items-center justify-center rounded-[3px] px-[3px] font-bold leading-none text-white transition-opacity hover:opacity-80 ${textSize}`}
                  style={{ background: bg }}
                >
                  {text}
                </a>
              ))}
              <a
                href="#"
                aria-label="Video channel"
                className="flex h-[22px] w-[22px] items-center justify-center rounded-[3px] bg-[#e21b22] text-white transition-opacity hover:opacity-80"
              >
                <Play size={11} strokeWidth={2.6} fill="currentColor" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="flex flex-col px-[13px] pb-[12px] pt-[6px]">
            <ul className="flex flex-col gap-[7px]">
              {contactItems.map(({ icon: Icon, label, href }) => (
                <li key={label} className="flex min-w-0 items-start gap-[7px]">
                  <div
                    className="mt-[1px] flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-[4px]"
                    style={{ background: "linear-gradient(135deg,#07518a18,#07518a30)", border: "1.5px solid #07518a33" }}
                  >
                    <Icon size={11} strokeWidth={2.1} className="text-[#07518a]" aria-hidden="true" />
                  </div>
                  {href === "#" ? (
                    <span className="min-w-0 text-[13.5px] leading-[1.3] text-[#354e62]">{label}</span>
                  ) : (
                    <a href={href} className="min-w-0 break-all text-[13.5px] leading-[1.3] text-[#354e62] transition-colors hover:text-[#07518a]">
                      {label}
                    </a>
                  )}
                </li>
              ))}
            </ul>

            <a
              href="/contact"
              className="mt-[10px] flex h-[34px] w-full items-center justify-center gap-[6px] rounded-[4px] text-[14px] font-bold text-white transition-all hover:brightness-110"
              style={{ background: "linear-gradient(135deg,#07518a 0%,#0a6aad 100%)", boxShadow: "0 2px 8px rgba(7,81,138,0.25)" }}
            >
              <Send size={12} strokeWidth={2.1} aria-hidden="true" />
              <span>Send a Message</span>
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
