import type { Metadata } from "next";
import SiteHeader from "../components/site/SiteHeader";
import SiteFooter from "../components/site/SiteFooter";
import FixedCta from "../components/site/FixedCta";
import BotanicalArt from "../components/site/BotanicalArt";
import SlowReveal from "../components/SlowReveal";

export const metadata: Metadata = {
  title: "お知らせ",
  description: "LOCO CLINIC（高崎・糸リフト専門）からのお知らせ一覧です。",
};

const NEWS = [
  {
    date: "2026.08.16",
    category: "お知らせ",
    title: "ホームページをリニューアルしました",
    body: "デザインを一新し、料金表・糸リフトのご案内・お悩みからさがすページを整えました。今後も情報を充実させていきます。",
  },
  {
    date: "2026.08.14",
    category: "お知らせ",
    title: "糸リフトのご案内ページを公開しました",
    body: "4種類の糸の違いと選び方、当日の流れ、リスクまでまとめてご覧いただけます。",
  },
  {
    date: "2026.08.14",
    category: "お知らせ",
    title: "料金表をリニューアルしました",
    body: "お悩みからさがせる形になりました。すべて税込表示です。",
  },
];

export default function NewsPage() {
  return (
    <div className="price-page min-h-screen w-full bg-[#fffbf6] text-[#70645c]">
      <SiteHeader />
      <main className="w-full">
        <section className="relative overflow-hidden bg-white px-6 text-center" style={{ paddingTop: "150px", paddingBottom: "80px" }}>
          <BotanicalArt className="pointer-events-none absolute -left-14 -top-6 h-[130%] text-[#2d4c44]" />
          <BotanicalArt className="pointer-events-none absolute -right-20 top-0 h-[120%] scale-x-[-1] text-[#b9a05a]" />
          <p className="mb-4 text-[12.5px] tracking-[0.35em] text-[#b9a05a]">NEWS</p>
          <h1
            className="text-[clamp(28px,4vw,42px)] font-light tracking-[0.14em]"
            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
          >
            お知らせ
          </h1>
        </section>

        <section className="px-6" style={{ paddingTop: "100px", paddingBottom: "140px" }}>
          <SlowReveal className="mx-auto w-full max-w-3xl">
            <ul className="divide-y divide-[#e9e6e6] border-y border-[#e9e6e6]">
              {NEWS.map((n) => (
                <li key={n.title} className="py-8">
                  <div className="mb-2 flex items-baseline gap-5">
                    <time className="font-heading text-[14px] tracking-wider text-[#9a8f7d]">{n.date}</time>
                    <span className="border border-[#d2b388] px-3 py-0.5 text-[11.5px] tracking-wider text-[#b9a05a]">
                      {n.category}
                    </span>
                  </div>
                  <h2 className="text-lg" style={{ fontFamily: "var(--font-shippori-mincho), serif" }}>
                    {n.title}
                  </h2>
                  <p className="mt-2 text-[15px] font-light">{n.body}</p>
                </li>
              ))}
            </ul>
          </SlowReveal>
        </section>
      </main>
      <SiteFooter />
      <FixedCta />
    </div>
  );
}
