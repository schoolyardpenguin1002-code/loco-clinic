"use client";

import { useState } from "react";
import TreatmentMenuGrid from "./TreatmentMenuGrid";

type BrowseMode = "byTreatment" | "byConcern";

export default function MenuBrowseTabs() {
  const [mode, setMode] = useState<BrowseMode>("byTreatment");

  return (
    <div className="flex w-full flex-col items-center">
      <div
        className="mx-auto mb-12 flex w-full max-w-3xl flex-col gap-3 sm:mb-16 sm:flex-row sm:gap-0"
        role="tablist"
        aria-label="メニューの表示切り替え"
      >
        <button
          type="button"
          role="tab"
          id="tab-by-treatment"
          aria-selected={mode === "byTreatment"}
          aria-controls="panel-by-treatment"
          onClick={() => setMode("byTreatment")}
          className={`font-japanese flex-1 border px-5 py-5 text-center text-xl transition-all duration-300 sm:px-8 sm:py-6 md:text-2xl ${
            mode === "byTreatment"
              ? "border-[#d4af37] bg-[#fdfbf8] text-[#1a1a1a] shadow-sm hover:border-[#c4a032] hover:bg-[#f5ebe0]"
              : "border-[#e8e4df] bg-white text-gray-500 hover:border-[#d4af37] hover:bg-[#fdfbf8] hover:text-[#1a1a1a]"
          }`}
          style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
        >
          施術から選ぶ
        </button>
        <button
          type="button"
          role="tab"
          id="tab-by-concern"
          aria-selected={mode === "byConcern"}
          aria-controls="panel-by-concern"
          onClick={() => setMode("byConcern")}
          className={`font-japanese flex-1 border px-5 py-5 text-center text-xl transition-all duration-300 sm:border-l-0 sm:px-8 sm:py-6 md:text-2xl ${
            mode === "byConcern"
              ? "border-[#d4af37] bg-[#fdfbf8] text-[#1a1a1a] shadow-sm hover:border-[#c4a032] hover:bg-[#f5ebe0]"
              : "border-[#e8e4df] bg-white text-gray-500 hover:border-[#d4af37] hover:bg-[#fdfbf8] hover:text-[#1a1a1a]"
          }`}
          style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
        >
          お悩みから選ぶ
        </button>
      </div>

      <div
        id="panel-by-treatment"
        role="tabpanel"
        aria-labelledby="tab-by-treatment"
        hidden={mode !== "byTreatment"}
        className={mode === "byTreatment" ? "block w-full max-w-3xl" : "hidden"}
      >
        <TreatmentMenuGrid />
      </div>

      <div
        id="panel-by-concern"
        role="tabpanel"
        aria-labelledby="tab-by-concern"
        hidden={mode !== "byConcern"}
        className={mode === "byConcern" ? "block w-full max-w-3xl" : "hidden"}
      >
        <div className="mx-auto w-full max-w-3xl rounded-sm border border-dashed border-[#e8e4df] bg-[#fdfbf8]/40 px-8 py-16 text-center md:py-20">
          <p
            className="font-japanese mb-3 text-lg text-[#1a1a1a] md:text-xl"
            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
          >
            お悩みから選ぶ
          </p>
          <p className="font-heading text-xs tracking-[0.2em] text-[#d4af37]">COMING SOON</p>
          <p className="mt-6 text-sm font-light leading-relaxed text-gray-600 md:text-base">
            コンテンツは準備中です。
            <br />
            しばらくお待ちください。
          </p>
        </div>
      </div>
    </div>
  );
}
