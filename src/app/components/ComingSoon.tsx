// import Link from "next/link";
// import { ArrowLeft, Construction } from "lucide-react";

// export default function ComingSoon({ title }: { title: string }) {
//   return (
//     <main className="flex flex-1 flex-col items-center justify-center px-4 py-20 text-center">
//       <div
//         className="flex h-[72px] w-[72px] items-center justify-center rounded-[16px] mb-6"
//         style={{ background: "linear-gradient(145deg,#07518a,#0d6fad)", boxShadow: "0 4px 16px rgba(7,81,138,0.28)" }}
//       >
//         <Construction size={34} strokeWidth={1.8} color="#fff" aria-hidden="true" />
//       </div>
//       <h1 className="text-[26px] font-extrabold text-[#0b3f6c] mb-3">{title}</h1>
//       <p className="text-[16px] text-[#4a6a85] max-w-[420px] leading-[1.55] mb-8">
//         This page is currently under construction. Please check back soon.
//       </p>
//       <Link
//         href="/"
//         className="inline-flex items-center gap-[7px] rounded-[5px] px-[20px] py-[10px] text-[14px] font-bold text-white transition-all hover:brightness-110"
//         style={{ background: "linear-gradient(135deg,#07518a 0%,#0a6aad 100%)", boxShadow: "0 2px 8px rgba(7,81,138,0.28)" }}
//       >
//         <ArrowLeft size={15} strokeWidth={2.2} aria-hidden="true" />
//         Back to Home
//       </Link>
//     </main>
//   );
// }


"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Home,
  Send,
  Sparkles,
  Clock,
  Mail,
  ThumbsUp,
} from "lucide-react";
import { useEffect, useState } from "react";

type ComingSoonProps = {
  /** Page title, e.g. "About", "Experience", "Media" */
  title?: string;
  /** Short message describing what will be on this page */
  description?: string;
  /** Estimated time, e.g. "Coming soon", "Q1 2026" */
  eta?: string;
  /** Show suggested links to other live pages */
  showSuggestions?: boolean;
};

const defaultSuggestions = [
  { label: "Home", href: "/" },
  { label: "Support the Campaign", href: "/support" },
  { label: "Contact", href: "/contact" },
];

export default function ComingSoon({
  title = "Coming Soon",
  description = "This page is being crafted with care. Check back shortly for the full experience.",
  eta = "Coming soon",
  showSuggestions = true,
}: ComingSoonProps) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const enter = (delay = 0, y = 16) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translate3d(0,0,0)" : `translate3d(0,${y}px,0)`,
    transition: `opacity 800ms cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 900ms cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
  });

  return (
    <main
      aria-labelledby="coming-soon-title"
      className="relative isolate w-full overflow-hidden pt-[67px]"
      style={{
        background:
          "linear-gradient(180deg, #edf6fb 0%, #f7fbfe 45%, #eaf4fc 100%)",
        minHeight: "100vh",
      }}
    >
      {/* ============ Decorative background layers ============ */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {/* Soft blue radial glow */}
        <div
          className="absolute left-1/2 top-[32%] h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(79,163,216,0.20) 0%, rgba(79,163,216,0.06) 42%, transparent 72%)",
            filter: "blur(50px)",
          }}
        />

        {/* Gold soft glow bottom-right */}
        <div
          className="absolute -bottom-32 -right-32 h-[520px] w-[520px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(232,160,32,0.14) 0%, transparent 68%)",
            filter: "blur(60px)",
          }}
        />

        {/* Blueprint grid (very subtle) */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(10,80,140,0.9) 1px, transparent 1px)," +
              "linear-gradient(90deg, rgba(10,80,140,0.9) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
            maskImage:
              "radial-gradient(ellipse 65% 60% at 50% 45%, black 0%, transparent 78%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 65% 60% at 50% 45%, black 0%, transparent 78%)",
          }}
        />

        {/* Top gold accent line */}
        <div
          className="absolute left-0 right-0 top-0 h-[3px]"
          style={{
            background:
              "linear-gradient(90deg, #0a508c 0%, #4fa3d8 22%, #e8a020 50%, #4fa3d8 78%, #0a508c 100%)",
          }}
        />
      </div>

      {/* ============ Content ============ */}
      <div
        className="relative z-10 mx-auto flex w-full max-w-[820px] flex-col items-center justify-center px-5 py-16 sm:px-8 sm:py-20"
        style={{ minHeight: "calc(100vh - 67px)" }}
      >
        {/* Icon badge with pulse */}
        <div
          className="coming-icon relative mb-6 flex h-16 w-16 items-center justify-center rounded-[16px] xs:h-[72px] xs:w-[72px] sm:mb-8 sm:h-20 sm:w-20"
          style={{
            ...enter(0, 20),
            background:
              "linear-gradient(135deg, #0a508c 0%, #1a74c4 55%, #0a6aad 100%)",
            border: "1px solid rgba(160,210,255,0.35)",
            boxShadow:
              "0 16px 40px rgba(10,80,140,0.35), inset 0 1px 0 rgba(255,255,255,0.25)",
          }}
        >
          <Sparkles
            size={30}
            strokeWidth={2.2}
            className="text-white xs:h-[34px] xs:w-[34px] sm:h-[36px] sm:w-[36px]"
          />
        </div>

        {/* Title */}
        <h1
          id="coming-soon-title"
          className="coming-title mb-3 text-center text-[26px] font-black leading-[1.1] tracking-[-0.02em] xs:text-[30px] sm:mb-4 sm:text-[38px] md:text-[44px]"
          style={enter(80, 16)}
        >
          {title}
        </h1>

        {/* Gold + Blue underline */}
        <div
          className="mb-5 flex items-center gap-2 sm:mb-6"
          style={enter(140, 14)}
          aria-hidden="true"
        >
          <span
            className="h-[3px] w-[40px] rounded-full"
            style={{
              background: "linear-gradient(90deg, #4fa3d8, #e8a020)",
              boxShadow: "0 0 10px rgba(232,160,32,0.5)",
            }}
          />
          <span
            className="h-[3px] w-[10px] rounded-full bg-[#e8a020]"
            style={{ boxShadow: "0 0 12px rgba(232,160,32,0.85)" }}
          />
          <span
            className="h-[3px] w-[40px] rounded-full"
            style={{
              background: "linear-gradient(90deg, #e8a020, #4fa3d8)",
              boxShadow: "0 0 10px rgba(232,160,32,0.5)",
            }}
          />
        </div>

        {/* Description */}
        <p
          className="mb-8 max-w-[560px] text-center text-[14px] leading-[1.6] text-[#4a6580] xs:text-[14.5px] sm:mb-10 sm:text-[16px] sm:leading-[1.65]"
          style={enter(200, 14)}
        >
          {description}
        </p>

        {/* ETA badge */}
        <div
          className="mb-8 flex items-center gap-2 rounded-full px-4 py-2 sm:mb-10 sm:px-5"
          style={{
            ...enter(260, 14),
            background: "rgba(255,255,255,0.85)",
            border: "1px solid rgba(232,160,32,0.4)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            boxShadow:
              "0 6px 20px rgba(201,125,16,0.15), inset 0 1px 0 rgba(255,255,255,0.95)",
          }}
        >
          <Clock
            size={13}
            strokeWidth={2.4}
            className="shrink-0 text-[#c97d10]"
          />
          <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#a85f08] sm:text-[12.5px]">
            {eta}
          </span>
        </div>

        {/* CTAs */}
        <div
          className="mb-10 flex w-full flex-col items-stretch gap-2.5 xs:flex-row xs:flex-wrap xs:items-center xs:justify-center sm:gap-3"
          style={enter(320, 14)}
        >
          <button
            type="button"
            onClick={() => router.back()}
            className="cs-btn-ghost group flex h-[44px] w-full shrink-0 items-center justify-center gap-2 rounded-[7px] px-5 text-[13.5px] font-bold text-[#07518a] transition duration-200 xs:w-auto xs:px-6 sm:h-[44px] sm:text-[14px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a6aad] focus-visible:ring-offset-2"
          >
            <ArrowLeft
              size={15}
              strokeWidth={2.5}
              className="shrink-0 transition-transform duration-200 group-hover:-translate-x-0.5"
            />
            <span className="whitespace-nowrap">Go Back</span>
          </button>

          <Link
            href="/"
            className="cs-btn-primary group relative flex h-[44px] w-full shrink-0 items-center justify-center gap-2 overflow-hidden rounded-[7px] px-5 text-[13.5px] font-bold text-white transition duration-200 xs:w-auto xs:px-6 sm:text-[14px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a6aad] focus-visible:ring-offset-2"
            style={{
              background:
                "linear-gradient(135deg, #0a6aad 0%, #1a74c4 55%, #07518a 100%)",
              boxShadow:
                "0 10px 24px rgba(10,106,173,0.35), inset 0 1px 0 rgba(255,255,255,0.2)",
            }}
          >
            <span className="cs-shine pointer-events-none absolute inset-0 -translate-x-full" />
            <Home size={15} strokeWidth={2.5} className="relative shrink-0" />
            <span className="relative whitespace-nowrap">Back to Home</span>
          </Link>

          <Link
            href="/support"
            className="cs-btn-gold group relative flex h-[44px] w-full shrink-0 items-center justify-center gap-2 overflow-hidden rounded-[7px] px-5 text-[13.5px] font-bold text-white transition duration-200 xs:w-auto xs:px-6 sm:text-[14px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c97d10] focus-visible:ring-offset-2"
            style={{
              background:
                "linear-gradient(135deg, #e8a020 0%, #f0aa28 45%, #c97d10 100%)",
              boxShadow:
                "0 10px 24px rgba(232,160,32,0.32), inset 0 1px 0 rgba(255,255,255,0.22)",
            }}
          >
            <span className="cs-shine pointer-events-none absolute inset-0 -translate-x-full" />
            <ThumbsUp size={15} strokeWidth={2.4} className="relative shrink-0" />
            <span className="relative whitespace-nowrap">Support</span>
          </Link>
        </div>

        {/* Suggestions */}
        {showSuggestions && (
          <div
            className="w-full max-w-[560px] rounded-[14px] p-5 sm:p-6"
            style={{
              ...enter(400, 14),
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.88) 0%, rgba(255,255,255,0.72) 100%)",
              border: "1px solid rgba(255,255,255,0.95)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              boxShadow:
                "0 14px 40px rgba(7,81,138,0.10), 0 2px 10px rgba(7,81,138,0.06), inset 0 1px 0 rgba(255,255,255,0.95)",
            }}
          >
            <p className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#07518a]">
              <Mail size={12} strokeWidth={2.5} className="shrink-0" />
              While you&apos;re here
            </p>

            <ul className="flex flex-col gap-2">
              {defaultSuggestions.map(({ label, href }, i) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="cs-suggestion group flex items-center justify-between gap-3 rounded-[8px] px-4 py-3 text-[13.5px] font-semibold text-[#164b75] transition-all duration-200 sm:text-[14px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a6aad] focus-visible:ring-offset-2"
                    style={{ animationDelay: `${420 + i * 60}ms` }}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 rounded-full bg-[#4fa3d8] transition-all duration-200 group-hover:bg-[#e8a020] group-hover:shadow-[0_0_8px_rgba(232,160,32,0.85)]"
                      />
                      {label}
                    </span>
                    <Send
                      size={13}
                      strokeWidth={2.5}
                      className="shrink-0 text-[#4fa3d8] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-[#c97d10]"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* ============ Local styles ============ */}
      <style jsx>{`
        /* Title shimmer — blue on light background */
        .coming-title {
          background: linear-gradient(
            100deg,
            #053f70 0%,
            #0a6aad 25%,
            #2f97e0 45%,
            #0a6aad 65%,
            #06477d 100%
          );
          background-size: 220% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: csShimmer 7s ease-in-out infinite;
          filter: drop-shadow(0 1px 0 rgba(255, 255, 255, 0.5));
        }
        @keyframes csShimmer {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        /* Icon subtle pulse ring */
        .coming-icon::after {
          content: "";
          position: absolute;
          inset: -4px;
          border-radius: 20px;
          border: 1px solid rgba(79, 163, 216, 0.45);
          animation: csPulse 3s ease-in-out infinite;
          pointer-events: none;
        }
        @keyframes csPulse {
          0%,
          100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.06);
          }
        }

        /* Shine sweep on buttons */
        .cs-shine {
          background: linear-gradient(
            100deg,
            transparent 30%,
            rgba(255, 255, 255, 0.5) 50%,
            transparent 70%
          );
          transition: transform 900ms ease;
        }

        /* Ghost button baseline */
        .cs-btn-ghost {
          background: rgba(255, 255, 255, 0.78);
          border: 1px solid rgba(27, 92, 138, 0.4);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          transition:
            transform 200ms ease,
            background 200ms ease,
            border-color 200ms ease,
            box-shadow 200ms ease;
        }

        /* Suggestion baseline */
        .cs-suggestion {
          background: rgba(255, 255, 255, 0.6);
          border: 1px solid rgba(191, 217, 236, 0.7);
          animation: csRow 700ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        @keyframes csRow {
          from {
            opacity: 0;
            transform: translateX(-6px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Hover — only on devices with hover */
        @media (hover: hover) and (pointer: fine) {
          .cs-btn-primary:hover,
          .cs-btn-gold:hover {
            transform: translateY(-2px);
            filter: brightness(1.06);
          }
          .cs-btn-primary:hover {
            box-shadow:
              0 16px 36px rgba(10, 106, 173, 0.48),
              0 0 24px rgba(90, 180, 255, 0.3),
              inset 0 1px 0 rgba(255, 255, 255, 0.28);
          }
          .cs-btn-gold:hover {
            box-shadow:
              0 16px 36px rgba(232, 160, 32, 0.42),
              0 0 24px rgba(232, 160, 32, 0.35),
              inset 0 1px 0 rgba(255, 255, 255, 0.3);
          }
          .cs-btn-ghost:hover {
            background: rgba(255, 255, 255, 1);
            border-color: #07518a;
            box-shadow: 0 10px 22px rgba(7, 81, 138, 0.15);
          }
          .cs-btn-primary:hover .cs-shine,
          .cs-btn-gold:hover .cs-shine {
            transform: translateX(100%);
          }
          .cs-suggestion:hover {
            background: rgba(255, 255, 255, 1);
            border-color: #4fa3d8;
            color: #07518a;
            box-shadow: 0 6px 16px rgba(7, 81, 138, 0.12);
          }
        }

        /* Touch devices: press feedback */
        @media (hover: none) {
          .cs-btn-primary:active,
          .cs-btn-gold:active,
          .cs-btn-ghost:active {
            transform: scale(0.98);
            transition: transform 100ms ease;
          }
        }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .coming-title,
          .coming-icon::after,
          .cs-suggestion {
            animation: none !important;
          }
          .cs-shine {
            transition: none !important;
          }
        }
      `}</style>
    </main>
  );
}