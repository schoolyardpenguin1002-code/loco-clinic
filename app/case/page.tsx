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
          <BotanicalArt className="pointer-events-none absolute -left-14 -top-6 h-[130%] text-[#6f4e2f]" />
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
              <strong className="font-semibold text-[#6f4e2f]">
                施術の内容・リスク・副作用・費用
              </strong>
              を必ず併記します。
            </p>
            <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {["01", "02", "03", "04", "05", "06"].map((n) => (
                <div key={n} className="overflow-hidden rounded-[24px] border border-[#e9e6e6] bg-white">
                  <p className="border-b border-[#f0ebe2] py-3.5 text-[14px] tracking-[0.1em]" style={{ fontFamily: "var(--font-shippori-mincho), serif" }}>
                    糸リフト 症例 {n}
                  </p>
                  <div className="relative aspect-[4/3] bg-[#f4f0e8]">
                    <span className="absolute inset-0 grid place-items-center text-[13px] tracking-[0.35em] text-[#c9bda3]">
                      COMING SOON
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-10 text-[13.5px] font-light leading-[2] text-[#9a8f7d]">
              症例写真は現在準備中です。順次掲載していきます。
            </p>
            <p className="mx-auto mt-10 max-w-xl text-[13.5px] font-light leading-[2] text-[#9a8f7d]">
              掲載時は、施術内容（糸の種類・本数）・費用・リスクを必ず併記します。
            </p>
          </SlowReveal>
        </section>

        <section className="px-6" style={{ paddingTop: "40px", paddingBottom: "110px" }}>
          <SlowReveal className="mx-auto flex w-full max-w-xl flex-col gap-4 sm:flex-row">
            <Link
              href="/thread-lift"
              className="flex-1 bg-[#6f4e2f] px-10 py-5 text-center text-[15.5px] tracking-[0.2em] text-white transition-all duration-500 hover:bg-[#b98a55]"
            >
              糸リフトについて
            </Link>
            <Link
              href="/concerns"
              className="flex-1 border border-[#6f4e2f] px-10 py-5 text-center text-[15.5px] tracking-[0.2em] text-[#6f4e2f] transition-all duration-500 hover:bg-[#6f4e2f] hover:text-white"
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
