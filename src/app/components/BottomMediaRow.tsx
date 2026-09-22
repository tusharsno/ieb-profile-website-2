// import {
//   ArrowRight,
//   Globe,
//   ImageIcon,
//   Link2,
//   Mail,
//   MapPin,
//   Phone,
//   Play,
//   Send,
// } from "lucide-react";

// const galleryPlaceholders = Array.from({ length: 3 }, (_, i) => i + 1);

// const contactItems = [
//   { icon: Phone,  label: "+880 1XXX XXXXXXX",           href: "tel:+8801XXXXXXXXX" },
//   { icon: Mail,   label: "harun.ee.cuet@gmail.com",     href: "mailto:harun.ee.cuet@gmail.com" },
//   { icon: Link2,  label: "linkedin.com/in/mohammad-harun", href: "https://linkedin.com/in/mohammad-harun" },
//   { icon: Globe,  label: "www.mohammadharun.com",        href: "https://www.mohammadharun.com" },
//   { icon: MapPin, label: "Chittagong, Bangladesh",       href: "#" },
// ];

// const socialLinks = [
//   { label: "Facebook",      bg: "#1769aa", text: "f",  href: "#",                                    textSize: "text-[13px]" },
//   { label: "LinkedIn",      bg: "#0a66c2", text: "in", href: "https://linkedin.com/in/mohammad-harun", textSize: "text-[10px]" },
//   { label: "X",             bg: "#000000", text: "X",  href: "#",                                    textSize: "text-[10px]" },
// ];

// export default function BottomMediaRow() {
//   return (
//     <section
//       id="media"
//       className="w-full bg-[#f0f6fb] py-[14px]"
//       style={{ borderTop: "1px solid #d0e4f0", borderBottom: "1px solid #d0e4f0" }}
//     >
//       <div
//         className="
//           mx-auto grid w-full
//           max-w-full lg:max-w-[1200px] xl:max-w-[1320px]
//           grid-cols-1 items-stretch gap-[12px]
//           px-4 sm:px-6
//           md:grid-cols-3
//           lg:grid-cols-[1.15fr_1.1fr_0.85fr]
//         "
//       >
//         {/* FEATURED VIDEO */}
//         <article className="overflow-hidden rounded-[5px] border border-[#dce6ee] bg-white shadow-[0_2px_6px_rgba(15,58,91,0.07)]">
//           <div className="h-[3px] w-full" style={{ background: "linear-gradient(90deg,#07518a,#0a6aad,#07518a)" }} />
//           <div className="flex h-[42px] items-center gap-[10px] px-[14px]">
//             <div
//               className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-[6px]"
//               style={{ background: "linear-gradient(135deg,#07518a18,#07518a30)", border: "1.5px solid #07518a33" }}
//             >
//               <Play size={13} strokeWidth={2.3} className="ml-[1px] text-[#07518a]" aria-hidden="true" />
//             </div>
//             <h2 className="text-[16px] font-bold leading-none text-[#0b3f6c]">Featured Video</h2>
//           </div>
//           <div className="px-[12px] pb-[12px]">
//             <div className="relative flex h-[172px] w-full items-center justify-center overflow-hidden rounded-[5px] bg-[#dce8f1]">
//               <div className="flex h-[48px] w-[48px] items-center justify-center rounded-full border border-[#7fa3bf] bg-white/70">
//                 <Play size={22} strokeWidth={2} className="ml-[3px] text-[#07518a]" aria-hidden="true" />
//               </div>
//             </div>
//           </div>
//         </article>

//         {/* PHOTO GALLERY */}
//         <article id="gallery" className="overflow-hidden rounded-[5px] border border-[#dce6ee] bg-white shadow-[0_2px_6px_rgba(15,58,91,0.07)]">
//           <div className="h-[3px] w-full" style={{ background: "linear-gradient(90deg,#07518a,#0a6aad,#07518a)" }} />
//           <div className="flex h-[42px] items-center justify-between px-[14px]">
//             <div className="flex items-center gap-[10px]">
//               <div
//                 className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-[6px]"
//                 style={{ background: "linear-gradient(135deg,#07518a18,#07518a30)", border: "1.5px solid #07518a33" }}
//               >
//                 <ImageIcon size={13} strokeWidth={2.2} className="text-[#07518a]" aria-hidden="true" />
//               </div>
//               <h2 className="text-[16px] font-bold leading-none text-[#0b3f6c]">Photo Gallery</h2>
//             </div>
//             <a href="/media" className="group flex items-center gap-[3px] text-[13px] font-semibold text-[#07518a] transition-colors hover:text-[#003d7a]">
//               <span>View All</span>
//               <ArrowRight size={11} strokeWidth={2} aria-hidden="true" />
//             </a>
//           </div>
//           <div className="grid grid-cols-3 gap-[6px] px-[10px] pb-[12px]">
//             {galleryPlaceholders.map((item) => (
//               <div key={item} className="flex h-[172px] items-center justify-center overflow-hidden rounded-[4px] bg-[#e5eef5]">
//                 <ImageIcon size={16} strokeWidth={1.8} className="text-[#8eb0ca]" aria-hidden="true" />
//               </div>
//             ))}
//           </div>
//         </article>

//         {/* CONNECT WITH ME */}
//         <article className="overflow-hidden rounded-[5px] border border-[#dce6ee] bg-white shadow-[0_2px_6px_rgba(15,58,91,0.07)]">
//           <div className="h-[3px] w-full" style={{ background: "linear-gradient(90deg,#07518a,#0a6aad,#07518a)" }} />
//           <div className="flex h-[42px] items-center justify-between gap-[8px] px-[13px]">
//             <h2 className="shrink-0 whitespace-nowrap text-[16px] font-bold leading-none text-[#0b3f6c]">
//               Connect With Me
//             </h2>
//             <div className="flex shrink-0 items-center gap-[5px]">
//               {socialLinks.map(({ label, bg, text, href, textSize }) => (
//                 <a
//                   key={label}
//                   href={href}
//                   aria-label={label}
//                   className={`flex h-[22px] min-w-[22px] items-center justify-center rounded-[3px] px-[3px] font-bold leading-none text-white transition-opacity hover:opacity-80 ${textSize}`}
//                   style={{ background: bg }}
//                 >
//                   {text}
//                 </a>
//               ))}
//               <a
//                 href="#"
//                 aria-label="Video channel"
//                 className="flex h-[22px] w-[22px] items-center justify-center rounded-[3px] bg-[#e21b22] text-white transition-opacity hover:opacity-80"
//               >
//                 <Play size={11} strokeWidth={2.6} fill="currentColor" aria-hidden="true" />
//               </a>
//             </div>
//           </div>

//           <div className="flex flex-col px-[13px] pb-[12px] pt-[6px]">
//             <ul className="flex flex-col gap-[7px]">
//               {contactItems.map(({ icon: Icon, label, href }) => (
//                 <li key={label} className="flex min-w-0 items-start gap-[7px]">
//                   <div
//                     className="mt-[1px] flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-[4px]"
//                     style={{ background: "linear-gradient(135deg,#07518a18,#07518a30)", border: "1.5px solid #07518a33" }}
//                   >
//                     <Icon size={11} strokeWidth={2.1} className="text-[#07518a]" aria-hidden="true" />
//                   </div>
//                   {href === "#" ? (
//                     <span className="min-w-0 text-[13.5px] leading-[1.3] text-[#354e62]">{label}</span>
//                   ) : (
//                     <a href={href} className="min-w-0 break-all text-[13.5px] leading-[1.3] text-[#354e62] transition-colors hover:text-[#07518a]">
//                       {label}
//                     </a>
//                   )}
//                 </li>
//               ))}
//             </ul>

//             <a
//               href="/contact"
//               className="mt-[10px] flex h-[34px] w-full items-center justify-center gap-[6px] rounded-[4px] text-[14px] font-bold text-white transition-all hover:brightness-110"
//               style={{ background: "linear-gradient(135deg,#07518a 0%,#0a6aad 100%)", boxShadow: "0 2px 8px rgba(7,81,138,0.25)" }}
//             >
//               <Send size={12} strokeWidth={2.1} aria-hidden="true" />
//               <span>Send a Message</span>
//             </a>
//           </div>
//         </article>
//       </div>
//     </section>
//   );
// }



"use client";

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
  Sparkles,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

/* ============ Facebook inline SVG ============ */
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const homePreviewPhotos = [
  { id: 1, alt: "Campaign moment 1" },
  { id: 2, alt: "Campaign moment 2" },
  { id: 3, alt: "Campaign moment 3" },
];

const contactItems = [
  {
    icon: Phone,
    label: "+880 1XXX XXXXXXX",
    href: "tel:+8801XXXXXXXXX",
  },
  {
    icon: Mail,
    label: "harun.ee.cuet@gmail.com",
    href: "mailto:harun.ee.cuet@gmail.com",
  },
  {
    icon: Link2,
    label: "linkedin.com/in/mohammad-harun",
    href: "https://linkedin.com/in/mohammad-harun",
  },
  {
    icon: Globe,
    label: "www.mohammadharun.com",
    href: "https://www.mohammadharun.com",
  },
  {
    icon: MapPin,
    label: "Chittagong, Bangladesh",
    href: "#",
  },
];

const socialLinks = [
  { Icon: FacebookIcon, href: "#", label: "Facebook" },
  {
    Icon: LinkedinIcon,
    href: "https://linkedin.com/in/mohammad-harun",
    label: "LinkedIn",
  },
  { Icon: TwitterIcon, href: "#", label: "X (Twitter)" },
  { Icon: YoutubeIcon, href: "#", label: "YouTube" },
];

export default function BottomMediaRow() {
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) {
      setMounted(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMounted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="media"
      aria-label="Featured video, photo gallery, and contact"
      className="relative w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #eef6fc 0%, #f6fafd 45%, #eef6fc 100%)",
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #bfd9ec 20%, #4fa3d8 50%, #bfd9ec 80%, transparent 100%)",
          opacity: 0.6,
        }}
      />

      {/* ✅ Even tighter outer padding */}
      <div className="mx-auto w-full max-w-[1320px] px-4 py-5 sm:px-5 sm:py-6 md:px-6 lg:px-8 lg:py-7 xl:px-10">
        <div className="grid w-full grid-cols-1 items-stretch gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-[1.15fr_1.15fr_0.9fr] lg:gap-4 xl:gap-5">
          {/* =====================================================
              FEATURED VIDEO
          ====================================================== */}
          <article
            className="media-card relative flex h-full flex-col overflow-hidden rounded-[10px] border border-white/85 bg-white/88 backdrop-blur-[10px] md:col-span-1"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted
                ? "translate3d(0,0,0)"
                : "translate3d(0,14px,0)",
              transition:
                "opacity 700ms cubic-bezier(0.22,1,0.36,1) 0ms, transform 800ms cubic-bezier(0.22,1,0.36,1) 0ms",
              boxShadow:
                "0 14px 40px rgba(7,81,138,0.10), 0 2px 10px rgba(7,81,138,0.06), inset 0 1px 0 rgba(255,255,255,0.95)",
            }}
          >
            <div
              aria-hidden="true"
              className="h-[3px] w-full shrink-0"
              style={{
                background:
                  "linear-gradient(90deg, #07518a 0%, #0a6aad 50%, #07518a 100%)",
              }}
            />

            <div className="flex shrink-0 items-center gap-[10px] px-[14px] pb-[6px] pt-[9px] sm:gap-[11px] sm:px-[15px] sm:pt-[10px]">
              <div
                className="card-icon flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-[8px] transition-all duration-300"
                style={{
                  background: "linear-gradient(145deg, #07518a, #0d6fad)",
                  boxShadow:
                    "0 4px 12px rgba(7,81,138,0.26), inset 0 1px 0 rgba(255,255,255,0.18)",
                }}
              >
                <Play
                  size={14}
                  strokeWidth={2.2}
                  className="ml-[1px] text-white"
                  aria-hidden="true"
                />
              </div>
              <h2 className="text-[13.5px] font-extrabold leading-tight text-[#0b3f6c] sm:text-[14px]">
                Featured Video
              </h2>
            </div>

            {/* ✅ Video height reduced further */}
            <div className="flex-1 px-[12px] pb-[10px] sm:px-[14px] sm:pb-[11px]">
              <button
                type="button"
                aria-label="Play featured video"
                className="video-tile group relative flex h-full min-h-[120px] w-full items-center justify-center overflow-hidden rounded-[8px] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a6aad] focus-visible:ring-offset-2 sm:min-h-[130px]"
                style={{
                  background:
                    "linear-gradient(145deg, #dce8f1 0%, #c8dce9 100%)",
                  border: "1px solid rgba(196,221,240,0.9)",
                }}
              >
                <div
                  className="video-play flex h-[44px] w-[44px] items-center justify-center rounded-full transition-all duration-300 sm:h-[48px] sm:w-[48px]"
                  style={{
                    background:
                      "linear-gradient(145deg, #07518a, #0d6fad)",
                    boxShadow:
                      "0 10px 26px rgba(7,81,138,0.35), 0 0 0 5px rgba(255,255,255,0.55), inset 0 1px 0 rgba(255,255,255,0.25)",
                  }}
                >
                  <Play
                    size={20}
                    strokeWidth={2}
                    className="ml-[2px] text-white"
                    fill="currentColor"
                    aria-hidden="true"
                  />
                </div>

                <span
                  className="pointer-events-none absolute bottom-[8px] left-1/2 -translate-x-1/2 rounded-full px-2.5 py-[3px] text-[9.5px] font-bold uppercase tracking-[0.14em] text-[#07518a]"
                  style={{
                    background: "rgba(255,255,255,0.85)",
                    border: "1px solid rgba(7,81,138,0.15)",
                    backdropFilter: "blur(6px)",
                    WebkitBackdropFilter: "blur(6px)",
                  }}
                >
                  Watch Video
                </span>
              </button>
            </div>
          </article>

          {/* =====================================================
              PHOTO GALLERY
          ====================================================== */}
          <article
            id="gallery"
            className="media-card relative flex h-full flex-col overflow-hidden rounded-[10px] border border-white/85 bg-white/88 backdrop-blur-[10px] md:col-span-1"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted
                ? "translate3d(0,0,0)"
                : "translate3d(0,14px,0)",
              transition:
                "opacity 700ms cubic-bezier(0.22,1,0.36,1) 100ms, transform 800ms cubic-bezier(0.22,1,0.36,1) 100ms",
              boxShadow:
                "0 14px 40px rgba(7,81,138,0.10), 0 2px 10px rgba(7,81,138,0.06), inset 0 1px 0 rgba(255,255,255,0.95)",
            }}
          >
            <div
              aria-hidden="true"
              className="h-[3px] w-full shrink-0"
              style={{
                background:
                  "linear-gradient(90deg, #07518a 0%, #0a6aad 50%, #07518a 100%)",
              }}
            />

            <div className="flex shrink-0 items-center justify-between gap-3 px-[14px] pb-[6px] pt-[9px] sm:px-[15px] sm:pt-[10px]">
              <div className="flex min-w-0 items-center gap-[10px] sm:gap-[11px]">
                <div
                  className="card-icon flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-[8px] transition-all duration-300"
                  style={{
                    background: "linear-gradient(145deg, #07518a, #0d6fad)",
                    boxShadow:
                      "0 4px 12px rgba(7,81,138,0.26), inset 0 1px 0 rgba(255,255,255,0.18)",
                  }}
                >
                  <ImageIcon
                    size={14}
                    strokeWidth={2.1}
                    color="#fff"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex min-w-0 flex-col">
                  <h2 className="truncate text-[13.5px] font-extrabold leading-tight tracking-[-0.005em] text-[#0b3f6c] sm:text-[14px]">
                    Photo Gallery
                  </h2>
                  <span className="mt-[1px] flex items-center gap-[4px] text-[9.5px] font-semibold uppercase tracking-[0.1em] text-[#7ab8dc]">
                    <Sparkles
                      size={8}
                      strokeWidth={2.4}
                      className="shrink-0 text-[#e8a020]"
                    />
                    Preview · 3 of 24
                  </span>
                </div>
              </div>

              <a
                href="/media"
                className="view-all group inline-flex shrink-0 items-center gap-[4px] rounded-md px-[8px] py-[4px] text-[11px] font-bold text-[#07518a] transition-all duration-200 hover:bg-[#eef6fc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a6aad] sm:text-[11.5px]"
              >
                <span className="whitespace-nowrap">View All</span>
                <ArrowRight
                  size={11}
                  strokeWidth={2.5}
                  className="shrink-0 transition-transform duration-200 group-hover:translate-x-[2px]"
                />
              </a>
            </div>

            <div className="flex-1 px-[12px] pb-[10px] sm:px-[14px] sm:pb-[11px]">
              <div className="grid h-full grid-cols-3 gap-[6px] sm:gap-[7px]">
                {homePreviewPhotos.map((photo, idx) => (
                  <a
                    key={photo.id}
                    href="/media"
                    aria-label={`View photo ${photo.id}`}
                    className="gallery-tile group relative flex items-center justify-center overflow-hidden rounded-[8px] border transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a6aad]"
                    style={{
                      background:
                        "linear-gradient(145deg, #eef5fb 0%, #ddeef8 100%)",
                      borderColor: "rgba(196,221,240,0.9)",
                      opacity: mounted ? 1 : 0,
                      transform: mounted
                        ? "translate3d(0,0,0)"
                        : "translate3d(0,10px,0)",
                      transition: `opacity 650ms cubic-bezier(0.22,1,0.36,1) ${
                        240 + idx * 80
                      }ms, transform 750ms cubic-bezier(0.22,1,0.36,1) ${
                        240 + idx * 80
                      }ms, border-color 300ms ease, box-shadow 300ms ease`,
                    }}
                  >
                    <ImageIcon
                      size={20}
                      strokeWidth={1.8}
                      className="text-[#07518a]/35 transition-all duration-300 group-hover:scale-110 group-hover:text-[#07518a]/65"
                      aria-hidden="true"
                    />

                    <span
                      className="absolute left-[5px] top-[5px] flex h-[15px] min-w-[15px] items-center justify-center rounded-full px-[4px] text-[8.5px] font-black text-white"
                      style={{
                        background:
                          "linear-gradient(145deg, #07518a, #0d6fad)",
                        boxShadow:
                          "0 2px 6px rgba(7,81,138,0.32), inset 0 1px 0 rgba(255,255,255,0.2)",
                      }}
                    >
                      {String(photo.id).padStart(2, "0")}
                    </span>

                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 rounded-[8px] opacity-0 transition-opacity duration-300"
                      style={{
                        boxShadow:
                          "inset 0 0 0 2px rgba(232,160,32,0.75), inset 0 0 22px rgba(232,160,32,0.12)",
                      }}
                    />

                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-center bg-gradient-to-t from-[rgba(7,81,138,0.92)] to-transparent px-1 pb-[6px] pt-[14px] text-[8.5px] font-bold uppercase tracking-[0.1em] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    >
                      View
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </article>

          {/* =====================================================
              CONNECT WITH ME — 2-COLUMN CONTACT GRID
          ====================================================== */}
          <article
            className="media-card relative flex h-full flex-col overflow-hidden rounded-[10px] border border-white/85 bg-white/88 backdrop-blur-[10px] md:col-span-2 lg:col-span-1"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted
                ? "translate3d(0,0,0)"
                : "translate3d(0,14px,0)",
              transition:
                "opacity 700ms cubic-bezier(0.22,1,0.36,1) 200ms, transform 800ms cubic-bezier(0.22,1,0.36,1) 200ms",
              boxShadow:
                "0 14px 40px rgba(7,81,138,0.10), 0 2px 10px rgba(7,81,138,0.06), inset 0 1px 0 rgba(255,255,255,0.95)",
            }}
          >
            <div
              aria-hidden="true"
              className="h-[3px] w-full shrink-0"
              style={{
                background:
                  "linear-gradient(90deg, #07518a 0%, #0a6aad 50%, #07518a 100%)",
              }}
            />

            <div className="flex shrink-0 items-center justify-between gap-[10px] px-[14px] pb-[6px] pt-[9px] sm:gap-[12px] sm:px-[15px] sm:pt-[10px]">
              <h2 className="shrink-0 whitespace-nowrap text-[13.5px] font-extrabold leading-tight text-[#0b3f6c] sm:text-[14px]">
                Connect With Me
              </h2>

              <div className="flex shrink-0 items-center gap-[4px]">
                {socialLinks.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="social-icon flex h-[24px] w-[24px] items-center justify-center rounded-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a6aad] focus-visible:ring-offset-2"
                    style={{
                      background:
                        "linear-gradient(145deg, #07518a, #0d6fad)",
                      boxShadow:
                        "0 3px 8px rgba(7,81,138,0.24), inset 0 1px 0 rgba(255,255,255,0.18)",
                      color: "#fff",
                    }}
                  >
                    <Icon className="h-[10px] w-[10px]" />
                  </a>
                ))}
              </div>
            </div>

            {/* ✅ Contact list in compact 1-column, smaller items */}
            <div className="flex flex-1 flex-col px-[14px] pb-[10px] pt-[2px] sm:px-[15px] sm:pb-[11px]">
              <ul className="flex flex-col gap-[2px]">
                {contactItems.map(({ icon: Icon, label, href }) => (
                  <li
                    key={label}
                    className="contact-item group flex min-w-0 items-center gap-[7px] rounded-md px-[5px] py-[3px] transition-colors duration-200"
                  >
                    <div
                      className="contact-icon flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-[5px] transition-all duration-300"
                      style={{
                        background:
                          "linear-gradient(135deg, #eef5fb 0%, #ddeef8 100%)",
                        border: "1px solid rgba(196,221,240,0.9)",
                      }}
                    >
                      <Icon
                        size={10}
                        strokeWidth={2.2}
                        className="text-[#07518a] transition-colors duration-200"
                        aria-hidden="true"
                      />
                    </div>
                    {href === "#" ? (
                      <span className="min-w-0 truncate text-[11.5px] leading-[1.35] text-[#354e62] sm:text-[12px]">
                        {label}
                      </span>
                    ) : (
                      <a
                        href={href}
                        className="min-w-0 truncate text-[11.5px] leading-[1.35] text-[#354e62] transition-colors duration-200 hover:text-[#07518a] sm:text-[12px]"
                      >
                        {label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>

              <a
                href="/contact"
                className="btn-send group relative mt-[8px] flex h-[34px] w-full shrink-0 items-center justify-center gap-[6px] overflow-hidden rounded-[7px] text-[12px] font-bold text-white transition duration-200 hover:-translate-y-[1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a6aad] focus-visible:ring-offset-2 active:translate-y-0 sm:h-[36px] sm:text-[12.5px]"
                style={{
                  background:
                    "linear-gradient(135deg, #064d83 0%, #0a6aad 58%, #07518a 100%)",
                  boxShadow:
                    "0 8px 20px rgba(7,81,138,0.30), inset 0 1px 0 rgba(255,255,255,0.20)",
                }}
              >
                <span className="btn-shine pointer-events-none absolute inset-0 -translate-x-full" />
                <Send
                  size={11}
                  strokeWidth={2.4}
                  aria-hidden="true"
                  className="relative shrink-0"
                />
                <span className="relative">Send a Message</span>
              </a>
            </div>
          </article>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #bfd9ec 20%, #e8a020 50%, #bfd9ec 80%, transparent 100%)",
          opacity: 0.5,
        }}
      />

      <style jsx>{`
        .video-play {
          animation: videoPulse 3s ease-in-out infinite;
        }
        @keyframes videoPulse {
          0%,
          100% {
            box-shadow:
              0 10px 26px rgba(7, 81, 138, 0.35),
              0 0 0 5px rgba(255, 255, 255, 0.55),
              inset 0 1px 0 rgba(255, 255, 255, 0.25);
          }
          50% {
            box-shadow:
              0 10px 26px rgba(7, 81, 138, 0.45),
              0 0 0 10px rgba(255, 255, 255, 0.25),
              inset 0 1px 0 rgba(255, 255, 255, 0.25);
          }
        }

        @media (hover: hover) and (pointer: fine) {
          .media-card:hover .card-icon {
            transform: scale(1.06);
            box-shadow:
              0 6px 16px rgba(7, 81, 138, 0.32),
              0 0 0 3px rgba(232, 160, 32, 0.15),
              inset 0 1px 0 rgba(255, 255, 255, 0.22);
          }

          .video-tile:hover {
            border-color: rgba(232, 160, 32, 0.55);
            box-shadow:
              0 12px 28px rgba(7, 81, 138, 0.15),
              0 0 0 1px rgba(232, 160, 32, 0.25);
          }
          .video-tile:hover .video-play {
            transform: scale(1.08);
          }

          .gallery-tile:hover {
            transform: translateY(-2px);
            border-color: rgba(232, 160, 32, 0.65);
            box-shadow:
              0 8px 22px rgba(7, 81, 138, 0.14),
              0 0 0 1px rgba(232, 160, 32, 0.22);
          }
          .gallery-tile:hover > span:last-child {
            opacity: 1;
          }

          .contact-item:hover {
            background: rgba(244, 250, 254, 0.7);
          }
          .contact-item:hover .contact-icon {
            background: linear-gradient(135deg, #ddeef8 0%, #c8dce9 100%);
            border-color: rgba(232, 160, 32, 0.5);
          }
          .contact-item:hover .contact-icon svg {
            color: #c97d10;
          }

          .social-icon:hover {
            transform: translateY(-2px) scale(1.06);
            box-shadow:
              0 6px 14px rgba(7, 81, 138, 0.32),
              0 0 0 3px rgba(232, 160, 32, 0.15);
          }

          .btn-send:hover .btn-shine {
            transform: translateX(100%);
          }
          .view-all:hover {
            color: #06477d;
          }
        }

        .btn-shine {
          background: linear-gradient(
            100deg,
            transparent 30%,
            rgba(255, 255, 255, 0.45) 50%,
            transparent 70%
          );
          transition: transform 900ms ease;
        }

        @media (hover: none) {
          .media-card:active {
            transform: scale(0.99);
            transition: transform 100ms ease;
          }
          .gallery-tile:active,
          .video-tile:active,
          .social-icon:active {
            transform: scale(0.96);
            transition: transform 100ms ease;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .video-play {
            animation: none !important;
          }
          .media-card,
          .gallery-tile,
          .social-icon,
          .contact-icon,
          .btn-shine {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}