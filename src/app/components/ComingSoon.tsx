import Link from "next/link";
import { ArrowLeft, Construction } from "lucide-react";

export default function ComingSoon({ title }: { title: string }) {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 py-20 text-center">
      <div
        className="flex h-[72px] w-[72px] items-center justify-center rounded-[16px] mb-6"
        style={{ background: "linear-gradient(145deg,#07518a,#0d6fad)", boxShadow: "0 4px 16px rgba(7,81,138,0.28)" }}
      >
        <Construction size={34} strokeWidth={1.8} color="#fff" aria-hidden="true" />
      </div>
      <h1 className="text-[26px] font-extrabold text-[#0b3f6c] mb-3">{title}</h1>
      <p className="text-[16px] text-[#4a6a85] max-w-[420px] leading-[1.55] mb-8">
        This page is currently under construction. Please check back soon.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-[7px] rounded-[5px] px-[20px] py-[10px] text-[14px] font-bold text-white transition-all hover:brightness-110"
        style={{ background: "linear-gradient(135deg,#07518a 0%,#0a6aad 100%)", boxShadow: "0 2px 8px rgba(7,81,138,0.28)" }}
      >
        <ArrowLeft size={15} strokeWidth={2.2} aria-hidden="true" />
        Back to Home
      </Link>
    </main>
  );
}
