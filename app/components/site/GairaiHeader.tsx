"use client";

import Link from "next/link";
import { useState } from "react";
import { GAIRAI_LINE_ADD_FRIEND_URL } from "@/lib/line";

/* 外来ページ共通ヘッダー（固定・白地ブラー）
   subtitle: ロゴ下の一行／nav: ページ内アンカー／cross: もう一方の外来への導線
   スマホではハンバーガーメニューでナビを開く */
export default function GairaiHeader({
  subtitle,
  nav,
  cross,
}: {
  subtitle: string;
  nav: { name: string; href: string }[];
  cross: { name: string; href: string };
}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/85 shadow-sm backdrop-blur-md">
      <div className="flex w-full items-center justify-between gap-3 px-4 py-3.5 sm:px-7">
        <Link href="/" className="block min-w-0 leading-tight">
          <span
            className="block text-xl tracking-[0.2em] text-[#6f4e2f] sm:text-[28px]"
            style={{
              fontFamily: "var(--font-shippori-mincho), serif",
              fontWeight: 500,
            }}
          >
            LOCO CLINIC
          </span>
          <span className="mt-1 block text-[9.5px] leading-[1.6] tracking-[0.12em] text-[#8a7a55] sm:text-[10.5px] sm:tracking-[0.18em]">
            {subtitle}
          </span>
        </Link>
        <div className="flex shrink-0 items-center gap-2.5 sm:gap-5">
          <nav className="hidden items-center gap-5 xl:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[12.5px] tracking-[0.15em] text-[#70645c] transition-colors hover:text-[#b9a05a]"
              >
                {item.name}
              </a>
            ))}
          </nav>
          <Link
            href={cross.href}
            className="hidden rounded-full border border-[#b9a05a]/60 px-5 py-2.5 text-[12.5px] tracking-wide text-[#8a7a55] transition-colors hover:border-[#b9a05a] hover:text-[#6f4e2f] md:block"
          >
            {cross.name}
          </Link>
          <a
            href={GAIRAI_LINE_ADD_FRIEND_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap rounded-full bg-[#3e7a52] px-4 py-2.5 text-[12.5px] font-bold text-white transition hover:brightness-110 sm:px-6 sm:py-3 sm:text-[13.5px]"
          >
            LINEで予約
          </a>
          {/* ハンバーガー（PCナビが出る幅では非表示） */}
          <button
            type="button"
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] xl:hidden"
          >
            <span
              className={`h-[1.5px] w-5 bg-[#6f4e2f] transition-transform duration-300 ${
                open ? "translate-y-[6.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[1.5px] w-5 bg-[#6f4e2f] transition-opacity duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-[1.5px] w-5 bg-[#6f4e2f] transition-transform duration-300 ${
                open ? "-translate-y-[6.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>
      {/* モバイル：もう一方の外来への導線（ヘッダー直下の細い帯） */}
      <div className="border-t border-[#f0e9dd] bg-[#fffbf6]/90 py-2 text-center md:hidden">
        <Link
          href={cross.href}
          className="text-[12px] tracking-wide text-[#8a7a55]"
        >
          {cross.name} →
        </Link>
      </div>
      {/* ドロワーメニュー */}
      <div
        className={`overflow-hidden bg-white/95 backdrop-blur-md transition-[max-height] duration-500 xl:hidden ${
          open ? "max-h-[80vh] border-t border-[#f0e9dd]" : "max-h-0"
        }`}
      >
        <nav className="px-8 py-6">
          <ul>
            {nav.map((item) => (
              <li key={item.href} className="border-b border-[#f0e9dd] last:border-b-0">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 text-[15px] tracking-[0.15em] text-[#70645c]"
                  style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li>
              <Link
                href={cross.href}
                onClick={() => setOpen(false)}
                className="block py-4 text-[14px] tracking-[0.15em] text-[#8a7a55]"
              >
                {cross.name} →
              </Link>
            </li>
          </ul>
          <a
            href={GAIRAI_LINE_ADD_FRIEND_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 mb-2 block rounded-full bg-[#3e7a52] py-3.5 text-center text-[14px] font-bold text-white"
          >
            LINEで予約・ご相談
          </a>
        </nav>
      </div>
    </header>
  );
}
