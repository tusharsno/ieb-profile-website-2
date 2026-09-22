// import Image from "next/image";
// import Link from "next/link";
// import { Dancing_Script } from "next/font/google";
// import { CalendarDays, MapPin } from "lucide-react";

// const dancingScript = Dancing_Script({ subsets: ["latin"], weight: ["600"] });

// const footerLinks = [
//   { label: "Home",       href: "/" },
//   { label: "About",      href: "/about" },
//   { label: "Vision",     href: "/vision-priorities" },
//   { label: "Experience", href: "/experience" },
//   { label: "Media",      href: "/media" },
//   { label: "Contact",    href: "/contact" },
// ];

// export default function Footer() {
//   return (
//     <footer className="w-full" style={{ background: "linear-gradient(135deg,#06304f 0%,#07518a 50%,#06304f 100%)", borderTop: "3px solid #e8a020" }}>

//       {/* MAIN ROW */}
//       <div
//         className="
//           mx-auto
//           grid
//           w-full
//           max-w-full lg:max-w-[1200px] xl:max-w-[1320px]
//           grid-cols-1
//           items-center
//           gap-5
//           px-4 sm:px-6
//           pt-[18px] pb-[14px]

//           md:grid-cols-[auto_minmax(0,1fr)_auto]
//           md:gap-6
//         "
//       >
//         {/* LEFT — brand */}
//         <div className="flex items-center gap-[13px]">
//           <div className="flex h-[68px] w-[68px] shrink-0 items-center justify-center">
//             <Image
//               src="/images/branding/ieb-logo.png"
//               alt="IEB logo"
//               width={58}
//               height={58}
//               className="block h-auto w-full object-contain"
//             />
//           </div>

//           {/* vertical divider */}
//           <span aria-hidden="true" className="hidden h-[44px] w-px bg-white/15 md:block" />

//           <div className="min-w-0">
//             <p className="whitespace-nowrap text-[15.5px] font-semibold leading-none text-white">
//               Institution of Engineers, Bangladesh (IEB)
//             </p>
//             <p className="mt-[5px] text-[13px] leading-none text-white/55">
//               Professionals for a Better Bangladesh
//             </p>
//             {/* pills */}
//             <div className="mt-[8px] flex flex-wrap items-center gap-[6px]">
//               <div className="flex items-center gap-[4px] rounded-full border border-white/15 bg-white/8 px-[8px] py-[3px]"
//                 style={{ background: "rgba(255,255,255,0.07)" }}>
//                 <MapPin size={10} strokeWidth={2.4} className="text-[#e8a020]" />
//                 <span className="text-[12px] font-medium text-white/70">Chittagong</span>
//               </div>
//               <div className="flex items-center gap-[4px] rounded-full border border-white/15 px-[8px] py-[3px]"
//                 style={{ background: "rgba(255,255,255,0.07)" }}>
//                 <CalendarDays size={10} strokeWidth={2.4} className="text-[#e8a020]" />
//                 <span className="text-[12px] font-medium text-white/70">Election 2026–27</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* CENTER — nav */}
//         <nav aria-label="Footer navigation" className="flex justify-start md:justify-center">
//           <ul className="flex flex-wrap items-center justify-center gap-y-2">
//             {footerLinks.map(({ label, href }, index) => (
//               <li key={href} className="flex items-center">
//                 {index > 0 && (
//                   <span aria-hidden="true" className="mx-[10px] text-[11px] text-white/25">|</span>
//                 )}
//                 <Link
//                   href={href}
//                   className="group relative whitespace-nowrap text-[14.5px] font-medium text-white/70 transition-colors hover:text-white"
//                 >
//                   {label}
//                   <span className="absolute -bottom-[2px] left-0 h-[1.5px] w-0 rounded-full bg-[#e8a020] transition-all duration-200 group-hover:w-full" />
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         {/* RIGHT — slogan */}
//         <div className="flex justify-start md:justify-end">
//           <div className="text-left md:text-right">
//             <p
//               className={`${dancingScript.className} text-white`}
//               style={{
//                 fontSize: "clamp(17px, 1.45vw, 23px)",
//                 lineHeight: 1.08,
//                 fontWeight: 600,
//                 textShadow: "0 1px 2px rgba(0,0,0,0.18)",
//               }}
//             >
//               Engineering
//               <br />
//               for a Better Tomorrow
//             </p>
//             <div aria-hidden="true" className="mt-[7px] h-[2px] w-[34px] rounded-full bg-[#e8a020]/80 md:ml-auto" />
//           </div>
//         </div>
//       </div>

//       {/* BOTTOM BAR */}
//       <div className="border-t border-white/10">
//         <div className="mx-auto flex w-full max-w-full flex-wrap items-center justify-between gap-2 px-4 py-[9px] sm:px-6 lg:max-w-[1200px] xl:max-w-[1320px]">
//           <p className="text-[12.5px] text-white/40">
//             © {new Date().getFullYear()} Engr. Mohammad Harun. All rights reserved.
//           </p>
//           <p className="text-[12.5px] text-white/40">
//             IEB Vice Chairman Candidate — Chittagong Centre
//           </p>
//         </div>
//       </div>

//     </footer>
//   );
// }


"use client";

import Image from "next/image";
import Link from "next/link";
import { Dancing_Script } from "next/font/google";
import {
  ArrowUp,
  CalendarDays,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useEffect, useState } from "react";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Vision", href: "/vision-priorities" },
  { label: "Experience", href: "/experience" },
  { label: "Media", href: "/media" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

/* ---- Inline SVG brand icons ---- */
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

const socialLinks = [
  { Icon: FacebookIcon, href: "#", label: "Facebook" },
  { Icon: LinkedinIcon, href: "#", label: "LinkedIn" },
  { Icon: TwitterIcon, href: "#", label: "Twitter" },
  { Icon: YoutubeIcon, href: "#", label: "YouTube" },
];

const quickContacts = [
  { Icon: Phone, href: "tel:+8801XXXXXXXXX", text: "+880 1XXX-XXXXXX" },
  {
    Icon: Mail,
    href: "mailto:harun.ee.cuet@gmail.com",
    text: "harun.ee.cuet@gmail.com",
  },
  { Icon: MapPin, href: "#", text: "Chittagong, Bangladesh" },
];

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="relative isolate w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #041e38 0%, #052a4a 35%, #062d52 70%, #041e38 100%)",
        borderTop: "3px solid transparent",
        borderImage:
          "linear-gradient(90deg, #0a508c 0%, #4fa3d8 22%, #e8a020 50%, #4fa3d8 78%, #0a508c 100%) 1",
      }}
    >
      {/* Top inner glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-24"
        style={{
          background:
            "linear-gradient(180deg, rgba(79,163,216,0.10) 0%, transparent 100%)",
        }}
      />

      {/* Decorative grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(160,210,255,0.9) 1px, transparent 1px)," +
            "linear-gradient(90deg, rgba(160,210,255,0.9) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 50%, black 0%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 50%, black 0%, transparent 85%)",
        }}
      />

      {/* Soft glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-0 h-[420px] w-[420px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(79,163,216,0.20) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-40 h-[420px] w-[420px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(232,160,32,0.14) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
      />

      {/* MAIN CONTENT */}
      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-5 py-12 sm:px-6 sm:py-14 md:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)_minmax(0,1fr)] lg:gap-10 xl:gap-14">
          {/* COLUMN 1 — BRAND */}
          <div>
            <Link
              href="/"
              className="group inline-flex items-start gap-3.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4fa3d8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#062d52]"
              aria-label="Institution of Engineers, Bangladesh — Home"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center transition-transform duration-300 group-hover:scale-105 sm:h-16 sm:w-16">
                <Image
                  src="/images/branding/ieb-logo.png"
                  alt=""
                  width={64}
                  height={64}
                  priority
                  className="block h-full w-auto object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)]"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-[15px] font-bold tracking-[-0.01em] text-white transition-colors duration-200 group-hover:text-white/90 sm:text-[16px]">
                  Institution of Engineers,
                  <br className="hidden xs:block" /> Bangladesh
                </span>
                <span className="mt-1 text-[12px] font-medium tracking-[0.01em] text-[#7ab8dc] sm:text-[12.5px]">
                  Professionals for a Better Bangladesh
                </span>
              </div>
            </Link>

            {/* Pills */}
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span
                className="flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11.5px] font-semibold"
                style={{
                  background: "rgba(232,160,32,0.10)",
                  borderColor: "rgba(232,160,32,0.35)",
                  color: "#f0c060",
                }}
              >
                <MapPin size={11} strokeWidth={2.4} />
                Chittagong
              </span>
              <span
                className="flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11.5px] font-semibold"
                style={{
                  background: "rgba(79,163,216,0.10)",
                  borderColor: "rgba(79,163,216,0.35)",
                  color: "#a8d4ef",
                }}
              >
                <CalendarDays size={11} strokeWidth={2.4} />
                Election 2026–27
              </span>
            </div>

            {/* Social */}
            <div className="mt-5">
              <p className="mb-2.5 text-[10.5px] font-bold uppercase tracking-[0.16em] text-[#a8d4ef]">
                Connect
              </p>
              <div className="flex items-center gap-2">
                {socialLinks.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="social-btn flex h-9 w-9 items-center justify-center rounded-md text-[#a8d4ef] transition-all duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4fa3d8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#062d52]"
                  >
                    <Icon className="h-[15px] w-[15px]" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* COLUMN 2 — NAVIGATION */}
          <div>
            <h3 className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#a8d4ef]">
              <span
                aria-hidden="true"
                className="h-[2px] w-4 rounded-full bg-[#e8a020]"
                style={{ boxShadow: "0 0 8px rgba(232,160,32,0.7)" }}
              />
              Quick Links
            </h3>

            <ul className="flex flex-col gap-1.5">
              {footerLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="footer-link group flex items-center gap-2.5 rounded-md px-2 py-1.5 text-[13.5px] font-medium text-white/75 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4fa3d8]"
                  >
                    <span
                      aria-hidden="true"
                      className="h-1 w-1 rounded-full bg-[#4fa3d8] transition-all duration-200 group-hover:w-3 group-hover:bg-[#e8a020] group-hover:shadow-[0_0_8px_rgba(232,160,32,0.85)]"
                    />
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3 — CONTACT + SLOGAN */}
          <div>
            <h3 className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#a8d4ef]">
              <span
                aria-hidden="true"
                className="h-[2px] w-4 rounded-full bg-[#e8a020]"
                style={{ boxShadow: "0 0 8px rgba(232,160,32,0.7)" }}
              />
              Get in Touch
            </h3>

            <ul className="flex flex-col gap-2.5">
              {quickContacts.map(({ Icon, href, text }) => (
                <li key={text}>
                  <a
                    href={href}
                    className="contact-row group flex items-start gap-2.5 rounded-md px-2 py-1.5 text-[13px] text-white/75 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4fa3d8]"
                  >
                    <span
                      className="mt-[1px] flex h-6 w-6 shrink-0 items-center justify-center rounded-md transition-all duration-200 group-hover:bg-[rgba(232,160,32,0.18)]"
                      style={{
                        background: "rgba(79,163,216,0.16)",
                        border: "1px solid rgba(79,163,216,0.28)",
                      }}
                    >
                      <Icon
                        size={12}
                        strokeWidth={2.4}
                        className="text-[#7ab8dc] transition-colors duration-200 group-hover:text-[#e8a020]"
                      />
                    </span>
                    <span className="break-all transition-colors duration-200 group-hover:text-white">
                      {text}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Slogan */}
            <div className="mt-6">
              <p
                className={`${dancingScript.className} text-white`}
                style={{
                  fontSize: "clamp(19px, 1.55vw, 25px)",
                  lineHeight: 1.1,
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                  textShadow:
                    "0 2px 8px rgba(0,31,55,0.4), 0 0 16px rgba(79,163,216,0.20)",
                }}
              >
                Engineering
                <br />
                for a Better Tomorrow
              </p>
              <div
                aria-hidden="true"
                className="mt-2.5 flex items-center gap-1.5"
              >
                <span
                  className="h-[2px] w-[34px] rounded-full bg-[#4fa3d8]"
                  style={{ boxShadow: "0 0 8px rgba(79,163,216,0.6)" }}
                />
                <span
                  className="h-[2px] w-[8px] rounded-full bg-[#e8a020]"
                  style={{ boxShadow: "0 0 10px rgba(232,160,32,0.85)" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          aria-hidden="true"
          className="mt-10 h-px w-full sm:mt-12"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(79,163,216,0.35) 20%, rgba(232,160,32,0.55) 50%, rgba(79,163,216,0.35) 80%, transparent 100%)",
          }}
        />

        {/* Bottom bar */}
        <div
          className="mt-6 flex flex-col items-center justify-between gap-3 rounded-md px-3 py-3 sm:flex-row sm:gap-4"
          style={{ background: "rgba(0,0,0,0.15)" }}
        >
          <p className="order-2 text-center text-[11.5px] text-white/45 sm:order-1 sm:text-left sm:text-[12px]">
            © {new Date().getFullYear()} Engr. Mohammad Harun. All rights
            reserved.
          </p>

          <div className="order-1 flex items-center gap-2 text-[11.5px] text-white/45 sm:order-2 sm:text-[12px]">
            <span>IEB Vice Chairman Candidate</span>
            <span
              aria-hidden="true"
              className="h-1 w-1 rounded-full bg-[#e8a020]"
            />
            <span>Chittagong Centre</span>
          </div>
        </div>
      </div>

      {/* Back to top */}
      <button
        type="button"
        onClick={scrollTop}
        aria-label="Back to top"
        className={`back-to-top fixed bottom-5 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full text-white shadow-[0_10px_28px_rgba(10,106,173,0.45)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e8a020] focus-visible:ring-offset-2 focus-visible:ring-offset-[#062d52] sm:bottom-6 sm:right-6 sm:h-12 sm:w-12 ${
          showTop
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        }`}
        style={{
          background:
            "linear-gradient(135deg, #0a6aad 0%, #1a74c4 55%, #07518a 100%)",
          border: "1px solid rgba(160,210,255,0.35)",
        }}
      >
        <ArrowUp size={18} strokeWidth={2.5} />
      </button>

      {/* Local styles */}
      <style jsx>{`
        .social-btn {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(160, 210, 255, 0.18);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          transition:
            transform 200ms ease,
            background 200ms ease,
            border-color 200ms ease,
            color 200ms ease;
        }

        .footer-link {
          transition:
            color 200ms ease,
            background 200ms ease;
        }

        .contact-row {
          transition: color 200ms ease;
        }

        @media (hover: hover) and (pointer: fine) {
          .social-btn:hover {
            transform: translateY(-2px);
            background: rgba(232, 160, 32, 0.16);
            border-color: rgba(232, 160, 32, 0.5);
            color: #ffffff;
            box-shadow: 0 6px 18px rgba(232, 160, 32, 0.28);
          }
          .footer-link:hover {
            background: rgba(255, 255, 255, 0.05);
            color: #ffffff;
          }
          .back-to-top:hover {
            transform: translateY(-3px);
            filter: brightness(1.08);
            box-shadow:
              0 16px 36px rgba(10, 106, 173, 0.55),
              0 0 24px rgba(90, 180, 255, 0.35);
          }
        }

        @media (hover: none) {
          .social-btn:active,
          .back-to-top:active {
            transform: scale(0.95);
            transition: transform 100ms ease;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .social-btn,
          .back-to-top,
          .footer-link,
          .contact-row {
            transition: none !important;
          }
        }
      `}</style>
    </footer>
  );
}