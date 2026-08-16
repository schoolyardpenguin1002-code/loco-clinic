import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/site/SiteHeader";
import SiteFooter from "../components/site/SiteFooter";
import FixedCta from "../components/site/FixedCta";
import BotanicalArt from "../components/site/BotanicalArt";
import SlowReveal from "../components/SlowReveal";

export const metadata: Metadata = {
  title: "症例",
  description:
    "LOCO CLINIC（高崎・糸リフト専門）の症例紹介ページです。ご本人の同意をいただいた症例のみ、施術内容・リスク・費用とあわせて掲載します。",
};

export default function CasePage() {
  return (
    <div className="price-page min-h-screen w-full bg-[#fffbf6] text-[#70645c]">
      <SiteHeader />
      <main className="w-full">
        <section className="relative overflow-hidden bg-white px-6 text-center" style={{ paddingTop: "150px", paddingBottom: "80px" }}>
          <BotanicalArt className="pointer-events-none absolute -left-14 -top-6 h-[130%] text-[#2d4c44]" />
          <BotanicalArt className="pointer-events-none absolute -right-20 top-0 h-[120%] scale-x-[-1] text-[#b9a05a]" />
          <p className="mb-4 text-[12.5px] tracking-[0.35em] text-[#b9a05a]">CASE</p>
          <h1
            className="text-[clamp(28px,4vw,42px)] font-light tracking-[0.14em]"
            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
          >
            症例
          </h1>
        </section>

        <section className="px-6" style={{ paddingTop: "80px", paddingBottom: "60px" }}>
          <SlowReveal className="mx-auto w-full max-w-3xl text-center">
            <p className="text-[15.5px] font-light leading-[2.2]">
              症例写真は、ご本人の同意をいただいたものから順次掲載していきます。
              <br className="hidden sm:block" />
              掲載の際は、医療広告ガイドラインに沿って
              <strong className="font-semibold text-[#2d4c44]">
                施術の内容・リスク・副作用・費用
              </strong>
              を必ず併記します。
            </p>
            <div className="mx-auto mt-12 max-w-xl border border-dashed border-[#d2b388] bg-white px-8 py-14">
              <p className="text-[15.5px] tracking-[0.25em] text-[#b9a05a]">COMING SOON</p>
              <p className="mt-4 text-[15px] font-light leading-loose">
                現在、掲載の準備を進めています。
                <br />
                施術の詳しい内容は糸リフトのページをご覧ください。
              </p>
            </div>
          </SlowReveal>
        </section>

        <section className="px-6" style={{ paddingTop: "40px", paddingBottom: "110px" }}>
          <SlowReveal className="mx-auto flex w-full max-w-xl flex-col gap-4 sm:flex-row">
            <Link
              href="/thread-lift"
              className="flex-1 bg-[#2d4c44] px-10 py-5 text-center text-[15.5px] tracking-[0.2em] text-white transition-all duration-500 hover:bg-[#8a9e8f]"
            >
              糸リフトについて
            </Link>
            <Link
              href="/concerns"
              className="flex-1 border border-[#2d4c44] px-10 py-5 text-center text-[15.5px] tracking-[0.2em] text-[#2d4c44] transition-all duration-500 hover:bg-[#2d4c44] hover:text-white"
            >
              お悩みからさがす
            </Link>
          </SlowReveal>
        </section>
      </main>
      <SiteFooter />
      <FixedCta />
    </div>
  );
}
