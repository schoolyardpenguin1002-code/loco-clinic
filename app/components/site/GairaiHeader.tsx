import Link from "next/link";
import { LINE_ADD_FRIEND_URL } from "@/lib/line";

/* 外来ページ共通ヘッダー（固定・白地ブラー）
   subtitle: ロゴ下の一行／nav: ページ内アンカー／cross: もう一方の外来への導線 */
export default function GairaiHeader({
  subtitle,
  nav,
  cross,
}: {
  subtitle: string;
  nav: { name: string; href: string }[];
  cross: { name: string; href: string };
}) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/85 shadow-sm backdrop-blur-md">
      <div className="flex w-full items-center justify-between px-4 py-3.5 sm:px-7">
        <Link href="/" className="block leading-tight">
          <span
            className="block text-2xl tracking-[0.2em] text-[#6f4e2f] sm:text-[28px]"
            style={{
              fontFamily: "var(--font-shippori-mincho), serif",
              fontWeight: 500,
            }}
          >
            LOCO CLINIC
          </span>
          <span className="mt-1 block text-[10.5px] tracking-[0.18em] text-[#8a7a55]">
            {subtitle}
          </span>
        </Link>
        <div className="flex items-center gap-3 sm:gap-5">
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
            href={LINE_ADD_FRIEND_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#3e7a52] px-6 py-3 text-[13.5px] font-bold text-white transition hover:brightness-110"
          >
            LINEで予約
          </a>
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
    </header>
  );
}
