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

export default function ColumnPage() {
  return (
    <div className="price-page min-h-screen w-full bg-[#fffbf6] text-[#70645c]">
      <SiteHeader />
      <main className="w-full">
        <section className="relative overflow-hidden bg-white px-6 text-center" style={{ paddingTop: "150px", paddingBottom: "80px" }}>
          <BotanicalArt className="pointer-events-none absolute -left-14 -top-6 h-[130%] text-[#6f4e2f]" />
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
          <SlowReveal className="mx-auto w-full max-w-2xl text-center">
            <div className="border border-[#e9e6e6] bg-white px-10 py-20">
              <p className="font-heading text-[13px] tracking-[0.4em] text-[#b9a05a]">COMING SOON</p>
              <p
                className="mt-6 text-lg leading-[1.9]"
                style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
              >
                コラムは現在準備中です。
              </p>
              <p className="mt-4 text-[14.5px] font-light leading-[2]">
                糸リフトと美容医療のことを、院長が一つずつ丁寧に書いていきます。
                <br />
                公開まで、いましばらくお待ちください。
              </p>
              <Link
                href="/thread-lift"
                className="mt-10 inline-block border border-[#6f4e2f] px-10 py-4 text-[14px] tracking-[0.2em] text-[#6f4e2f] transition-all duration-500 hover:bg-[#6f4e2f] hover:text-white"
              >
                糸リフトのご案内を見る
              </Link>
            </div>
          </SlowReveal>
        </section>
      </main>
      <SiteFooter />
      <FixedCta />
    </div>
  );
}
