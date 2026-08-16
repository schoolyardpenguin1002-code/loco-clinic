import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/site/SiteHeader";
import SiteFooter from "../components/site/SiteFooter";
import FixedCta from "../components/site/FixedCta";
import BotanicalArt from "../components/site/BotanicalArt";
import SlowReveal from "../components/SlowReveal";

export const metadata: Metadata = {
  title: "コラム",
  description:
    "LOCO CLINIC（高崎・糸リフト専門）のコラム。糸リフトや美容医療について、院長が分かりやすく解説します。",
};

const COLUMNS = [
  {
    slug: "thread-types",
    date: "2026.08.16",
    title: "糸リフトの糸は4種類。値段の差は「質」ではなく「素材」の差です",
    excerpt:
      "PDO・PLLA・PCL、素材によって持続期間も感触も違います。高い糸ほど良いわけではない理由を、糸リフト専門の立場から解説します。",
  },
];

export default function ColumnPage() {
  return (
    <div className="price-page min-h-screen w-full bg-[#fffbf6] text-[#70645c]">
      <SiteHeader />
      <main className="w-full">
        <section className="relative overflow-hidden bg-white px-6 text-center" style={{ paddingTop: "150px", paddingBottom: "80px" }}>
          <BotanicalArt className="pointer-events-none absolute -left-14 -top-6 h-[130%] text-[#2d4c44]" />
          <BotanicalArt className="pointer-events-none absolute -right-20 top-0 h-[120%] scale-x-[-1] text-[#b9a05a]" />
          <p className="mb-4 text-[12.5px] tracking-[0.35em] text-[#b9a05a]">COLUMN</p>
          <h1
            className="text-[clamp(28px,4vw,42px)] font-light tracking-[0.14em]"
            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
          >
            コラム
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-[15px] font-light leading-loose">
            糸リフトと美容医療のこと、院長が分かりやすく書いていきます。
          </p>
        </section>

        <section className="px-6" style={{ paddingTop: "100px", paddingBottom: "140px" }}>
          <SlowReveal className="mx-auto grid w-full max-w-4xl gap-8 md:grid-cols-2">
            {COLUMNS.map((c) => (
              <Link
                key={c.slug}
                href={`/column/${c.slug}`}
                className="group block border border-[#e9e6e6] bg-white p-9 transition-all duration-500 hover:-translate-y-1 hover:border-[#d2b388] hover:shadow-lg"
              >
                <time className="font-heading text-[13px] tracking-wider text-[#9a8f7d]">{c.date}</time>
                <h2
                  className="mt-3 text-lg leading-[1.7] transition-colors group-hover:text-[#b9a05a]"
                  style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                >
                  {c.title}
                </h2>
                <p className="mt-4 text-[14.5px] font-light leading-[1.95]">{c.excerpt}</p>
                <span className="mt-5 inline-block text-[12.5px] tracking-[0.25em] text-[#2d4c44] group-hover:text-[#b9a05a]">
                  READ MORE →
                </span>
              </Link>
            ))}
          </SlowReveal>
        </section>
      </main>
      <SiteFooter />
      <FixedCta />
    </div>
  );
}
