"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { LINE_ADD_FRIEND_URL } from "@/lib/line";

/* 公式Instagramができたらここに入れる（空なら非表示） */
const INSTAGRAM_URL = "";

const NAV_LEFT = [
  { name: "HOME", href: "/" },
  { name: "施術をさがす", href: "/menu" },
  { name: "お悩みからさがす", href: "/concerns" },
  { name: "クリニックについて", href: "/about" },
  { name: "症例", href: "/case" },
  { name: "アクセス", href: "/about" },
  { name: "今月のご案内", href: "/campaign" },
];

const NAV_RIGHT = [
  { name: "はじめての方へ", href: "/guide" },
  { name: "糸リフト", href: "/thread-lift", featured: true },
  { name: "アートメイク", href: "/artmake" },
  { name: "ドクター", href: "/doctor" },
  { name: "料金表", href: "/price" },
  { name: "よくある質問", href: "/faq" },
  { name: "コラム", href: "/column" },
  { name: "お知らせ", href: "/news" },
];

/* 線画の草花（CLINIC W風の背景装飾） */
function BotanicalArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 600" fill="none" className={className} aria-hidden>
      <g stroke="currentColor" strokeWidth="1.1" opacity="0.16">
        <path d="M60 600 C 90 480, 70 380, 130 260 C 170 180, 160 100, 140 40" />
        <path d="M130 260 C 90 240, 60 250, 30 290 C 70 300, 110 290, 130 260 Z" />
        <path d="M118 320 C 160 300, 195 310, 225 350 C 185 362, 140 352, 118 320 Z" />
        <path d="M145 180 C 110 160, 80 168, 52 205 C 92 216, 125 208, 145 180 Z" />
        <path d="M150 120 C 185 100, 218 108, 246 145 C 206 158, 172 150, 150 120 Z" />
        <path d="M300 600 C 320 500, 300 420, 340 330 C 368 262, 362 200, 348 150" />
        <path d="M340 330 C 306 314, 278 322, 252 356 C 288 366, 318 358, 340 330 Z" />
        <path d="M352 250 C 384 232, 412 240, 436 272 C 402 284, 372 276, 352 250 Z" />
      </g>
    </svg>
  );
}

function LineIcon() {
  return (
    <span className="grid h-9 w-9 place-items-center rounded-full bg-white/90 text-[9px] font-black tracking-tighter text-[#2d4c44]">
      LINE
    </span>
  );
}

function InstaIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden>
      <circle cx="18" cy="18" r="17" fill="rgba(255,255,255,.9)" />
      <rect x="10.5" y="10.5" width="15" height="15" rx="4.5" stroke="#2d4c44" strokeWidth="1.4" />
      <circle cx="18" cy="18" r="3.6" stroke="#2d4c44" strokeWidth="1.4" />
      <circle cx="22.6" cy="13.4" r="1.1" fill="#2d4c44" />
    </svg>
  );
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-white/60 shadow-sm backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="flex w-full items-center justify-between px-4 py-4 sm:px-7">
          {/* ロゴ */}
          <Link href="/" className="block leading-tight">
            <span
              className="block text-2xl sm:text-[30px] tracking-[0.2em] text-[#2d4c44]"
              style={{ fontFamily: "var(--font-shippori-mincho), serif", fontWeight: 500 }}
            >
              LOCO CLINIC
            </span>
            <span className="mt-1 block text-[10.5px] tracking-[0.18em] text-[#8a7a55]">
              高崎問屋町駅徒歩8分 糸リフト専門の美容クリニック
            </span>
          </Link>

          {/* 右側：access・TEL・予約・MENU */}
          <div className="flex items-center gap-3 sm:gap-6">
            <Link
              href="/about"
              className="hidden md:block font-heading text-[12px] tracking-[0.3em] text-[#70645c] transition-colors hover:text-[#b9a05a]"
            >
              access
            </Link>
            <a href="tel:027-395-0443" className="hidden md:block leading-tight text-[#2d4c44]">
              <span className="block font-heading text-[17px] tracking-wider">TEL.027-395-0443</span>
              <span className="block text-[10.5px] text-[#8a7a55]">受付時間 09:00-21:00</span>
            </a>
            <a
              href={LINE_ADD_FRIEND_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block rounded-full bg-[#c2a575] px-7 py-3 text-[13.5px] font-bold tracking-[0.2em] text-white shadow-sm transition-all duration-300 hover:bg-[#b9a05a]"
            >
              LINEで予約・相談
            </a>
            {/* ハンバーガー */}
            <button
              onClick={() => setOpen(true)}
              className="flex h-11 w-11 flex-col items-center justify-center gap-[7px]"
              aria-label="メニューを開く"
            >
              <span className="h-px w-8 bg-[#2d4c44]" />
              <span className="h-px w-8 bg-[#2d4c44]" />
            </button>
          </div>
        </div>
      </header>

      {/* 右端の縦SNSアイコン（PC） */}
      <div className="fixed right-4 top-24 z-40 hidden flex-col items-center gap-3 lg:flex">
        <a href={LINE_ADD_FRIEND_URL} target="_blank" rel="noopener noreferrer" aria-label="LINE" className="transition-transform hover:-translate-y-0.5 drop-shadow">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[#06C755] text-[9px] font-black tracking-tighter text-white">LINE</span>
        </a>
        {INSTAGRAM_URL && (
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition-transform hover:-translate-y-0.5 drop-shadow">
            <InstaIcon />
          </a>
        )}
      </div>

      {/* ===== 全画面メニュー（深緑×線画の草花） ===== */}
      <div
        className={`fixed inset-0 z-[70] bg-[#3a4f43] text-white transition-all duration-500 ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* 背景の草花 */}
        <BotanicalArt className="pointer-events-none absolute -left-10 bottom-0 h-[90%] text-white" />
        <BotanicalArt className="pointer-events-none absolute -right-16 top-0 h-[80%] scale-x-[-1] text-white" />

        {/* 閉じる */}
        <button
          onClick={() => setOpen(false)}
          className="absolute right-6 top-6 z-10 flex h-11 w-11 items-center justify-center"
          aria-label="メニューを閉じる"
        >
          <span className="absolute h-px w-8 rotate-45 bg-white" />
          <span className="absolute h-px w-8 -rotate-45 bg-white" />
        </button>

        <div className="relative flex h-full flex-col overflow-y-auto px-6 pt-14 sm:px-10">
          <div className="mx-auto grid w-full max-w-5xl flex-1 gap-10 md:grid-cols-[1fr_1.7fr] md:items-center">
            {/* 左：ロゴ＋SNS */}
            <div className="text-center md:text-left">
              <p
                className="text-[30px] leading-tight tracking-[0.2em] md:text-[34px]"
                style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
              >
                LOCO
                <br className="hidden md:block" />
                <span className="md:hidden"> </span>CLINIC
              </p>
              <p className="mt-3 text-[12px] tracking-[0.2em] text-white/70">
                高崎の美容クリニック ── 糸リフト専門
              </p>
              <div className="mt-7 flex items-center justify-center gap-4 md:justify-start">
                <a href={LINE_ADD_FRIEND_URL} target="_blank" rel="noopener noreferrer" aria-label="LINE">
                  <LineIcon />
                </a>
                {INSTAGRAM_URL && (
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <InstaIcon />
                  </a>
                )}
              </div>
            </div>

            {/* 右：2列メニュー */}
            <div className="grid grid-cols-2 gap-x-8">
              {[NAV_LEFT, NAV_RIGHT].map((col, ci) => (
                <ul key={ci}>
                  {col.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={`block border-b border-white/50 py-[13px] text-[14.5px] tracking-[0.08em] transition-colors hover:text-[#e8cfa0] ${
                          "featured" in item && item.featured ? "font-semibold text-[#e8cfa0]" : ""
                        }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          {/* 下：RESERVEバー */}
          <div className="mx-auto mb-8 mt-10 w-full max-w-5xl">
            <div className="flex flex-col items-center justify-between gap-5 bg-white px-8 py-6 sm:flex-row sm:px-12">
              <p
                className="text-[26px] tracking-[0.3em] text-[#2d4c44]"
                style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
              >
                ・ RESERVE ・
              </p>
              <div className="text-center leading-tight text-[#2d4c44] sm:text-left">
                <p className="text-[12px] text-[#70645c]">受付時間 9:00-21:00（完全予約制・不定休）</p>
                <a href="tel:027-395-0443" className="font-heading text-[20px] tracking-wider hover:text-[#b9a05a]">
                  TEL.027-395-0443
                </a>
              </div>
              <a
                href={LINE_ADD_FRIEND_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="rounded-full bg-[#c2a575] px-10 py-3.5 text-[13.5px] font-bold tracking-[0.25em] text-white transition hover:bg-[#b9a05a]"
              >
                ご予約に進む
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
