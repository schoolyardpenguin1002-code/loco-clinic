import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/site/SiteHeader";
import SiteFooter from "../components/site/SiteFooter";
import FixedCta from "../components/site/FixedCta";
import BotanicalArt from "../components/site/BotanicalArt";
import SlowReveal from "../components/SlowReveal";

export const metadata: Metadata = {
  title: "今月のご案内",
  description: "LOCO CLINIC（高崎・糸リフト専門）の今月のご案内です。",
};

export default function CampaignPage() {
  return (
    <div className="price-page min-h-screen w-full bg-[#fffbf6] text-[#70645c]">
      <SiteHeader />
      <main className="w-full">
        <section className="relative overflow-hidden bg-white px-6 text-center" style={{ paddingTop: "150px", paddingBottom: "80px" }}>
          <BotanicalArt className="pointer-events-none absolute -left-14 -top-6 h-[130%] text-[#2d4c44]" />
          <BotanicalArt className="pointer-events-none absolute -right-20 top-0 h-[120%] scale-x-[-1] text-[#b9a05a]" />
          <p className="mb-4 text-[12.5px] tracking-[0.35em] text-[#b9a05a]">MONTHLY</p>
          <h1
            className="text-[clamp(28px,4vw,42px)] font-light tracking-[0.14em]"
            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
          >
            今月のご案内
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-[15px] font-light leading-loose">
            2026年8月のお知らせです。
          </p>
        </section>

        <section className="px-6" style={{ paddingTop: "80px", paddingBottom: "60px" }}>
          <div className="mx-auto flex w-full max-w-3xl flex-col gap-8">
            <SlowReveal>
              <div className="border border-[#e9e6e6] bg-white p-10">
                <p className="text-[12.5px] tracking-[0.3em] text-[#b9a05a]">08 AUGUST</p>
                <h2 className="mt-3 text-xl" style={{ fontFamily: "var(--font-shippori-mincho), serif" }}>
                  ホームページをリニューアルしました
                </h2>
                <p className="mt-4 text-[15px] font-light leading-[2.1]">
                  料金表・糸リフトのご案内・お悩みからさがすページを新しくしました。
                  施術のことで気になることがあれば、LINEからいつでもご相談いただけます。
                </p>
              </div>
            </SlowReveal>
            <SlowReveal delay={100}>
              <div className="border border-[#e9e6e6] bg-white p-10">
                <h2 className="text-xl" style={{ fontFamily: "var(--font-shippori-mincho), serif" }}>
                  LINEでのご相談を受け付けています
                </h2>
                <p className="mt-4 text-[15px] font-light leading-[2.1]">
                  「自分に糸リフトが合うのか分からない」という段階のご相談も歓迎です。
                  無理におすすめすることはありませんので、お気軽にどうぞ。
                </p>
              </div>
            </SlowReveal>
            <SlowReveal delay={200}>
              <p className="text-center text-[13.5px] font-light leading-[2]">
                当院は大幅な割引で集客することはしていません。
                <br className="hidden sm:block" />
                そのぶん、料金表をすべて税込で公開し、必要な分だけをご提案しています。
              </p>
            </SlowReveal>
          </div>
        </section>

        <section className="px-6" style={{ paddingTop: "20px", paddingBottom: "110px" }}>
          <div className="mx-auto flex w-full max-w-xl flex-col gap-4 sm:flex-row">
            <Link
              href="/price"
              className="flex-1 bg-[#2d4c44] px-10 py-5 text-center text-[15.5px] tracking-[0.2em] text-white transition-all duration-500 hover:bg-[#8a9e8f]"
            >
              料金表を見る
            </Link>
            <Link
              href="/guide"
              className="flex-1 border border-[#2d4c44] px-10 py-5 text-center text-[15.5px] tracking-[0.2em] text-[#2d4c44] transition-all duration-500 hover:bg-[#2d4c44] hover:text-white"
            >
              はじめての方へ
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
      <FixedCta />
    </div>
  );
}
