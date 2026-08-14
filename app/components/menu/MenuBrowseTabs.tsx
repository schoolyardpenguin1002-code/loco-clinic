"use client";

import Link from "next/link";
import TreatmentMenuGrid from "./TreatmentMenuGrid";

export default function MenuBrowseTabs() {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="mx-auto mb-12 flex w-full max-w-3xl flex-col gap-3 sm:mb-16 sm:flex-row sm:gap-0">
        <span
          className="font-japanese flex-1 border border-[#d4af37] bg-[#fdfbf8] px-5 py-5 text-center text-xl text-[#1a1a1a] shadow-sm sm:px-8 sm:py-6 md:text-2xl"
          style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
        >
          施術から選ぶ
        </span>
        <Link
          href="/concerns"
          className="font-japanese flex-1 border border-[#e8e4df] bg-white px-5 py-5 text-center text-xl text-gray-500 transition-all duration-300 hover:border-[#d4af37] hover:bg-[#fdfbf8] hover:text-[#1a1a1a] sm:border-l-0 sm:px-8 sm:py-6 md:text-2xl"
          style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
        >
          お悩みから選ぶ
        </Link>
      </div>

      <div className="block w-full max-w-3xl">
        <TreatmentMenuGrid />
      </div>
    </div>
  );
}
