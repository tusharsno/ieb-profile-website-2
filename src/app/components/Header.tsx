// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { Send, Menu, X } from "lucide-react";
// import { useState, useEffect } from "react";
// import { usePathname } from "next/navigation";

// const navLinks = [
//   { label: "Home", href: "/" },
//   { label: "About", href: "/about" },
//   { label: "Vision & Priorities", href: "/vision-priorities" },
//   { label: "Experience", href: "/experience" },
//   { label: "Media", href: "/media" },
//   { label: "News", href: "/news" },
//   { label: "Contact", href: "/contact" },
// ];

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const pathname = usePathname();

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 18);
//     window.addEventListener("scroll", onScroll, { passive: true });

//     const onKeyDown = (e: KeyboardEvent) => {
//       if (e.key === "Escape") setMenuOpen(false);
//     };
//     window.addEventListener("keydown", onKeyDown);

//     return () => {
//       window.removeEventListener("scroll", onScroll);
//       window.removeEventListener("keydown", onKeyDown);
//     };
//   }, []);

//   return (
//     <header
//       className={`
//         w-full fixed top-0 left-0 right-0 z-50
//         transition-all duration-300
//         ${
//           scrolled
//             ? "shadow-[0_4px_20px_rgba(0,0,0,0.35)] backdrop-blur-md"
//             : "shadow-[0_2px_12px_rgba(0,0,0,0.22)]"
//         }
//       `}
//       style={{
//         background: scrolled
//           ? "linear-gradient(135deg, rgba(4,22,42,0.97) 0%, rgba(5,26,48,0.97) 45%, rgba(7,32,58,0.97) 100%)"
//           : "linear-gradient(135deg, #062d52 0%, #07345b 45%, #0a4272 100%)",
//       }}
//     >
//       {/* Top accent line */}
//       <div className="h-[3px] w-full bg-gradient-to-r from-[#1a6fad] via-[#4fa3d8] to-[#1a6fad]" />

//       <div
//         className={`
//           w-full px-4 sm:px-6 flex items-center justify-between
//           transition-all duration-300
//           ${ scrolled ? "h-[56px]" : "h-[68px]" }
//         `}
//       >
//         {/* Branding */}
//         <Link href="/" className="flex items-center gap-3 shrink-0 group">
//           <div
//             className={`
//               flex items-center justify-center shrink-0
//               transition-all duration-300
//               ${ scrolled ? "h-10 w-10" : "h-14 w-14" }
//             `}
//           >
//             <Image
//               src="/images/branding/ieb-logo.png"
//               alt="IEB logo"
//               width={64}
//               height={64}
//               className="object-contain block h-full w-auto drop-shadow-md"
//             />
//           </div>
//           <div className="hidden sm:flex flex-col leading-tight">
//             <span
//               className={`
//                 font-bold text-white tracking-[-0.01em]
//                 group-hover:text-white/90 transition-all duration-300
//                 ${ scrolled ? "text-[15.5px]" : "text-[17px]" }
//               `}
//             >
//               Institution of Engineers, Bangladesh
//             </span>
//             <span
//               className={`
//                 text-[#7ab8dc] font-medium tracking-[0.01em]
//                 transition-all duration-300
//                 ${ scrolled ? "text-[12.5px]" : "text-[13.5px]" }
//               `}
//             >
//               Professionals for a Better Bangladesh
//             </span>
//           </div>
//         </Link>

//         {/* Desktop Nav + CTA */}
//         <div className="hidden lg:flex items-center gap-7">
//           <div className="h-8 w-px bg-white/15" />

//           <nav aria-label="Main navigation">
//             <ul className="flex items-center gap-1 list-none m-0 p-0">
//               {navLinks.map(({ label, href }) => {
//                 const isActive = pathname === href;
//                 return (
//                   <li key={href}>
//                     <Link
//                       href={href}
//                       className={`
//                         relative px-3 py-2 text-[13.5px] font-medium whitespace-nowrap
//                         transition-colors duration-150
//                         after:absolute after:bottom-0 after:left-3 after:right-3 after:h-[2px]
//                         after:rounded-full after:bg-[#4fa3d8]
//                         after:transition-transform after:duration-200 after:origin-left
//                         ${
//                           isActive
//                             ? "text-white after:scale-x-100"
//                             : "text-white/75 hover:text-white after:scale-x-0 hover:after:scale-x-100"
//                         }
//                       `}
//                     >
//                       {label}
//                     </Link>
//                   </li>
//                 );
//               })}
//             </ul>
//           </nav>

//           <div className="h-8 w-px bg-white/15" />

//           <Link
//             href="/support"
//             className="
//               shrink-0 flex items-center gap-2
//               bg-gradient-to-b from-[#e8a020] to-[#c97d10]
//               hover:from-[#f0aa28] hover:to-[#d98818]
//               text-white text-[13.5px] font-bold
//               px-5 py-2 rounded-[5px]
//               shadow-[0_2px_6px_rgba(0,0,0,0.25)]
//               transition-all duration-150
//               whitespace-nowrap
//             "
//           >
//             <Send size={13} className="shrink-0" />
//             Support My Campaign
//           </Link>
//         </div>

//         {/* Mobile hamburger */}
//         <button
//           className="lg:hidden p-2 rounded-[5px] text-white hover:bg-white/10 transition-colors"
//           onClick={() => setMenuOpen(!menuOpen)}
//           aria-label={menuOpen ? "Close menu" : "Open menu"}
//           aria-expanded={menuOpen}
//         >
//           {menuOpen ? <X size={22} /> : <Menu size={22} />}
//         </button>
//       </div>

//       {/* Backdrop for outside click */}
//       {menuOpen && (
//         <div
//           className="fixed inset-0 z-40 lg:hidden"
//           aria-hidden="true"
//           onClick={() => setMenuOpen(false)}
//         />
//       )}

//       {/* Mobile dropdown — animated */}
//       <div
//         className={`
//           relative z-50 lg:hidden overflow-hidden
//           transition-all duration-300 ease-in-out
//           ${ menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0" }
//         `}
//         style={{
//           background: "linear-gradient(180deg, #073660 0%, #062d52 100%)",
//           borderTop: menuOpen ? "1px solid rgba(255,255,255,0.08)" : "none",
//         }}
//       >
//         <nav aria-label="Mobile navigation">
//           <ul className="flex flex-col px-3 py-2">
//             {navLinks.map(({ label, href }, index) => {
//               const isActive = pathname === href;
//               return (
//                 <li key={href}>
//                   <Link
//                     href={href}
//                     className={`
//                       flex items-center gap-2 py-3 px-3 text-[14px] font-medium
//                       rounded-[4px] transition-colors
//                       ${
//                         isActive
//                           ? "text-white bg-white/10"
//                           : "text-white/80 hover:text-white hover:bg-white/08"
//                       }
//                     `}
//                     onClick={() => setMenuOpen(false)}
//                   >
//                     <span className="text-[#4fa3d8] text-[11px] font-bold w-4 shrink-0">
//                       {String(index + 1).padStart(2, "0")}
//                     </span>
//                     {label}
//                   </Link>
//                 </li>
//               );
//             })}
//             <li className="pt-2 pb-2 px-3">
//               <Link
//                 href="/support"
//                 className="flex items-center justify-center gap-2 bg-gradient-to-b from-[#e8a020] to-[#c97d10] text-white text-[14px] font-bold px-4 py-2.5 rounded-[5px] transition-all shadow-md"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 <Send size={13} className="shrink-0" />
//                 Support My Campaign
//               </Link>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// }


"use client";

import Link from "next/link";
import Image from "next/image";
import { Send, Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Vision & Priorities", href: "/vision-priorities" },
  { label: "Experience", href: "/experience" },
  { label: "Media", href: "/media" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  /* ---------- scroll: solid/glassy state + progress bar ---------- */
  useEffect(() => {
    let frame: number | null = null;

    const onScroll = () => {
      if (frame !== null) return;
      frame = requestAnimationFrame(() => {
        frame = null;
        const y = window.scrollY;
        setScrolled(y > 12);

        const max =
          document.documentElement.scrollHeight - window.innerHeight;
        setScrollProgress(max > 0 ? Math.min(1, y / max) : 0);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  /* ---------- close menu on route change ---------- */
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  /* ---------- escape key + outside click + body scroll lock ---------- */
  useEffect(() => {
    if (!menuOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        buttonRef.current?.focus();
      }
    };

    const onOutside = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onOutside);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onOutside);
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className="nav-shell fixed top-0 left-0 right-0 z-50 w-full"
        style={{
          background: scrolled
            ? "linear-gradient(135deg, rgba(4,22,42,0.94) 0%, rgba(5,26,48,0.94) 45%, rgba(7,32,58,0.94) 100%)"
            : "linear-gradient(135deg, #062d52 0%, #07345b 45%, #0a4272 100%)",
          backdropFilter: scrolled ? "blur(14px) saturate(1.15)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(14px) saturate(1.15)" : "none",
          boxShadow: scrolled
            ? "0 6px 24px rgba(0,0,0,0.32), inset 0 1px 0 rgba(255,255,255,0.06)"
            : "0 2px 10px rgba(0,0,0,0.20)",
          transition:
            "background 300ms ease, box-shadow 300ms ease, backdrop-filter 300ms ease",
        }}
      >
        {/* Top accent line — gold to match hero */}
        <div
          aria-hidden="true"
          className="h-[3px] w-full"
          style={{
            background:
              "linear-gradient(90deg, #0a508c 0%, #4fa3d8 22%, #e8a020 50%, #4fa3d8 78%, #0a508c 100%)",
          }}
        />

        {/* Scroll progress bar */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-[2px] origin-left"
          style={{
            width: "100%",
            transform: `scaleX(${scrollProgress})`,
            background:
              "linear-gradient(90deg, #4fa3d8 0%, #e8a020 50%, #4fa3d8 100%)",
            boxShadow: "0 0 10px rgba(79,163,216,0.5)",
            transition: "transform 80ms linear",
            pointerEvents: "none",
          }}
        />

        {/* Main bar — fixed height, no jump */}
        <div className="flex h-[64px] w-full items-center justify-between px-3 sm:px-5 md:px-6 lg:px-8">
          {/* Branding */}
          <Link
            href="/"
            className="group flex shrink-0 items-center gap-2.5 sm:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4fa3d8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#062d52] rounded-md"
            aria-label="Institution of Engineers, Bangladesh — Home"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center transition-transform duration-300 group-hover:scale-[1.04] sm:h-12 sm:w-12">
              <Image
                src="/images/branding/ieb-logo.png"
                alt=""
                width={64}
                height={64}
                priority
                className="block h-full w-auto object-contain drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]"
              />
            </div>
            <div className="hidden flex-col leading-tight sm:flex">
              <span className="text-[15px] font-bold tracking-[-0.01em] text-white transition-colors duration-200 group-hover:text-white/95 sm:text-[15.5px] md:text-[16.5px]">
                Institution of Engineers, Bangladesh
              </span>
              <span className="hidden text-[12px] font-medium tracking-[0.01em] text-[#7ab8dc] md:block md:text-[12.5px]">
                Professionals for a Better Bangladesh
              </span>
            </div>
          </Link>

          {/* Desktop Nav + CTA */}
          <div className="hidden items-center gap-5 lg:flex xl:gap-7">
            <div
              aria-hidden="true"
              className="h-7 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"
            />

            <nav aria-label="Main navigation">
              <ul className="m-0 flex list-none items-center gap-0.5 p-0">
                {navLinks.map(({ label, href }) => {
                  const isActive = pathname === href;
                  return (
                    <li key={href}>
                      <Link
                        href={href}
                        aria-current={isActive ? "page" : undefined}
                        className={`nav-link group relative block whitespace-nowrap rounded-md px-2.5 py-2 text-[13px] font-medium transition-colors duration-150 xl:px-3 xl:text-[13.5px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4fa3d8] ${
                          isActive
                            ? "text-white"
                            : "text-white/75 hover:text-white"
                        }`}
                      >
                        <span className="relative z-10">{label}</span>

                        {/* underline */}
                        <span
                          aria-hidden="true"
                          className={`absolute bottom-0 left-2.5 right-2.5 h-[2px] origin-left rounded-full transition-transform duration-200 xl:left-3 xl:right-3 ${
                            isActive
                              ? "scale-x-100"
                              : "scale-x-0 group-hover:scale-x-100"
                          }`}
                          style={{
                            background: isActive
                              ? "linear-gradient(90deg, #4fa3d8, #e8a020)"
                              : "linear-gradient(90deg, #4fa3d8, #7ab8dc)",
                            boxShadow: isActive
                              ? "0 0 8px rgba(232,160,32,0.45)"
                              : "0 0 6px rgba(79,163,216,0.35)",
                          }}
                        />

                        {/* hover halo */}
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-0 -z-0 rounded-md bg-white/[0.04] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div
              aria-hidden="true"
              className="h-7 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"
            />

            <Link
              href="/support"
              className="group relative flex shrink-0 items-center gap-2 overflow-hidden whitespace-nowrap rounded-[6px] px-4 py-2 text-[13px] font-bold text-white shadow-[0_4px_14px_rgba(232,160,32,0.32)] transition-transform duration-200 hover:-translate-y-[1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e8a020] focus-visible:ring-offset-2 focus-visible:ring-offset-[#062d52] active:translate-y-0 xl:px-5 xl:text-[13.5px]"
              style={{
                background:
                  "linear-gradient(135deg, #e8a020 0%, #f0aa28 45%, #c97d10 100%)",
              }}
            >
              <span className="nav-shine pointer-events-none absolute inset-0 -translate-x-full" />
              <Send size={13} className="relative shrink-0" strokeWidth={2.4} />
              <span className="relative">Support My Campaign</span>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            ref={buttonRef}
            type="button"
            className="relative flex h-10 w-10 items-center justify-center rounded-md text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4fa3d8] lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span className="relative block h-5 w-5">
              {/* Animated hamburger → X */}
              <span
                className={`absolute left-0 top-0 h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${
                  menuOpen ? "top-2.5 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-2.5 h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${
                  menuOpen ? "bottom-2.5 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {/* ---------- Mobile Menu (rendered outside header for correct stacking) ---------- */}
      <div
        ref={menuRef}
        id="mobile-menu"
        className={`fixed left-0 right-0 top-[67px] z-40 origin-top overflow-hidden transition-all duration-300 ease-out lg:hidden ${
          menuOpen
            ? "pointer-events-auto max-h-[calc(100vh-67px)] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
        style={{
          background:
            "linear-gradient(180deg, rgba(7,54,96,0.99) 0%, rgba(6,45,82,0.99) 100%)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          boxShadow: menuOpen
            ? "0 20px 40px rgba(0,0,0,0.42)"
            : "none",
          transform: menuOpen ? "translateY(0)" : "translateY(-6px)",
        }}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile navigation" className="overflow-y-auto">
          <ul className="flex flex-col gap-0.5 px-3 py-3">
            {navLinks.map(({ label, href }, index) => {
              const isActive = pathname === href;
              return (
                <li
                  key={href}
                  className="mobile-item"
                  style={{
                    animationDelay: menuOpen ? `${index * 40}ms` : "0ms",
                  }}
                >
                  <Link
                    href={href}
                    aria-current={isActive ? "page" : undefined}
                    tabIndex={menuOpen ? 0 : -1}
                    className={`flex items-center gap-3 rounded-md px-3 py-3 text-[14px] font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4fa3d8] ${
                      isActive
                        ? "bg-white/10 text-white"
                        : "text-white/80 hover:bg-white/[0.07] hover:text-white"
                    }`}
                  >
                    <span
                      className={`w-4 shrink-0 text-[11px] font-bold tabular-nums ${
                        isActive ? "text-[#e8a020]" : "text-[#4fa3d8]"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{label}</span>
                    {isActive && (
                      <span
                        aria-hidden="true"
                        className="ml-auto h-1.5 w-1.5 rounded-full bg-[#e8a020] shadow-[0_0_8px_rgba(232,160,32,0.85)]"
                      />
                    )}
                  </Link>
                </li>
              );
            })}

            <li
              className="mobile-item px-1 pb-1 pt-2"
              style={{
                animationDelay: menuOpen
                  ? `${navLinks.length * 40}ms`
                  : "0ms",
              }}
            >
              <Link
                href="/support"
                tabIndex={menuOpen ? 0 : -1}
                className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-[6px] bg-gradient-to-r from-[#e8a020] to-[#c97d10] px-4 py-3 text-[14px] font-bold text-white shadow-[0_8px_20px_rgba(232,160,32,0.35)] transition-transform duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e8a020] focus-visible:ring-offset-2 focus-visible:ring-offset-[#062d52]"
              >
                <span className="nav-shine pointer-events-none absolute inset-0 -translate-x-full" />
                <Send size={14} className="relative shrink-0" strokeWidth={2.4} />
                <span className="relative">Support My Campaign</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* ---------- Backdrop for mobile menu ---------- */}
      <div
        aria-hidden="true"
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 top-[67px] z-30 bg-black/55 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* =========================================================
          LOCAL STYLES
      ========================================================== */}
      <style jsx>{`
        .nav-shell {
          will-change: background, box-shadow;
        }

        /* Shine sweep on Support CTA */
        .nav-shine {
          background: linear-gradient(
            100deg,
            transparent 30%,
            rgba(255, 255, 255, 0.45) 50%,
            transparent 70%
          );
          transition: transform 900ms ease;
        }
        .group:hover .nav-shine {
          transform: translateX(100%);
        }

        /* Mobile items stagger animation */
        .mobile-item {
          opacity: 0;
        }
        :global([aria-hidden="false"]) .mobile-item,
        .mobile-item {
          animation: menuItemEnter 380ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        @keyframes menuItemEnter {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Focus ring on dark background */
        :global(.focus-visible\:ring-offset-\[#062d52\]) {
          --tw-ring-offset-color: #062d52;
        }

        @media (prefers-reduced-motion: reduce) {
          .mobile-item {
            animation: none !important;
            opacity: 1;
          }
          .nav-shine {
            transition: none !important;
          }
        }
      `}</style>
    </>
  );
}