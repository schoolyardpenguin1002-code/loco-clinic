import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/site/SiteHeader";
import SiteFooter from "../components/site/SiteFooter";
import FixedCta from "../components/site/FixedCta";
import BotanicalArt from "../components/site/BotanicalArt";
import SlowReveal from "../components/SlowReveal";

export const metadata: Metadata = {
  title: "クリニックについて",
  description:
    "LOCO CLINIC（高崎・浜尻町）のご紹介。糸リフト専門の美容クリニックとしての考え方、診療時間、アクセスをご案内します。",
};

export default function AboutPage() {
  return (
    <div className="price-page min-h-screen w-full bg-[#fffbf6] text-[#70645c]">
      <SiteHeader />
      <main className="w-full">
        <section className="relative overflow-hidden bg-white px-6 text-center" style={{ paddingTop: "150px", paddingBottom: "80px" }}>
          <BotanicalArt className="pointer-events-none absolute -left-14 -top-6 h-[130%] text-[#2d4c44]" />
          <BotanicalArt className="pointer-events-none absolute -right-20 top-0 h-[120%] scale-x-[-1] text-[#b9a05a]" />
          <p className="mb-4 text-[12.5px] tracking-[0.35em] text-[#b9a05a]">ABOUT</p>
          <h1
            className="text-[clamp(26px,4vw,40px)] font-light tracking-[0.14em]"
            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
          >
            クリニックについて
          </h1>
        </section>

        {/* コンセプト */}
        <section className="px-6" style={{ paddingTop: "120px", paddingBottom: "120px" }}>
          <div className="mx-auto grid w-full max-w-5xl items-center gap-14 md:grid-cols-2">
          <SlowReveal direction="left">
            <div className="overflow-hidden rounded-[28px] shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/stock/stone-bamboo.jpg" alt="施術イメージ" className="h-full w-full object-cover" />
            </div>
          </SlowReveal>
          <SlowReveal direction="right" className="text-center md:text-left">
            <h2
              className="text-[clamp(20px,3vw,30px)] font-light leading-[1.9] tracking-[0.12em]"
              style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
            >
              大きく変えない。
              <br />
              丁寧に、引き出す。
            </h2>
            <p className="mx-auto mt-9 max-w-2xl text-base font-light leading-[2.2] text-[#70645c]">
              LOCO CLINICは、高崎の糸リフト専門の美容クリニックです。
              メスを使わずに輪郭と印象を整える糸リフトを軸に、
              注入治療・肌育・アートメイクまで、「その方らしさを引き出す」施術だけを揃えました。
              完全予約制の小さなクリニックだからこそ、一人ひとりに時間をかけられます。
            </p>
          </SlowReveal>
          </div>
        </section>

        {/* 特徴 */}
        <section className="bg-white px-6" style={{ paddingTop: "120px", paddingBottom: "120px" }}>
          <div className="mx-auto w-full max-w-5xl">
            <SlowReveal className="mb-20 text-center">
              <p className="mb-4 text-[12.5px] tracking-[0.35em] text-[#b9a05a]">FEATURES</p>
              <h2
                className="text-[clamp(20px,3vw,28px)] font-light tracking-[0.12em]"
                style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
              >
                LOCO CLINICの特徴
              </h2>
            </SlowReveal>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                { t: "糸リフト専門", b: "素材と持続の異なる4種類の糸を扱い、「どれくらい持たせたいか」でお選びいただけます。" },
                { t: "完全予約制・夜21時まで", b: "お仕事帰りにも通えます。待合で他の患者様と顔を合わせにくい環境です。" },
                { t: "税込・明朗会計", b: "料金はすべて税込で公開。当日に想定外の費用が発生することはありません。" },
                { t: "医師によるカウンセリング", b: "医師が直接お悩みを伺い、リスクまで説明した上でご提案します。無理におすすめしません。" },
              ].map((f, i) => (
                <SlowReveal key={f.t} delay={i * 100}>
                  <div className="h-full border-l-2 border-[#b9a05a] bg-white p-8">
                    <h3 className="mb-3 text-base" style={{ fontFamily: "var(--font-shippori-mincho), serif" }}>
                      {f.t}
                    </h3>
                    <p className="text-[15px] font-light leading-[2] text-[#70645c]">{f.b}</p>
                  </div>
                </SlowReveal>
              ))}
            </div>
          </div>
        </section>

        {/* 概要・アクセス */}
        <section className="px-6" style={{ paddingTop: "90px", paddingBottom: "110px" }}>
          <div className="mx-auto grid w-full max-w-5xl items-start gap-12 md:grid-cols-2">
            <SlowReveal>
              <p className="mb-4 text-[12.5px] tracking-[0.35em] text-[#b9a05a]">INFORMATION</p>
              <h2
                className="mb-8 text-[clamp(20px,3vw,26px)] font-light tracking-[0.12em]"
                style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
              >
                クリニック概要
              </h2>
              <dl className="divide-y divide-[#f0ebe2] border-y border-[#f0ebe2] text-base font-light">
                {[
                  ["名称", "LOCO CLINIC（ロコクリニック）"],
                  ["院長", "狩野 遊太"],
                  ["所在地", "〒370-0005 群馬県高崎市浜尻町209-5"],
                  ["診療時間", "9:00〜21:00（完全予約制）"],
                  ["休診日", "不定休"],
                  ["電話", "027-395-0443"],
                  ["診療内容", "美容医療（自由診療）：糸リフト・注入治療・美肌治療・アートメイク"],
                ].map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[6.5em_1fr] gap-4 py-4">
                    <dt className="text-[#9a8f7d]">{k}</dt>
                    <dd className="text-[#1a1a1a]">{v}</dd>
                  </div>
                ))}
              </dl>
            </SlowReveal>
            <SlowReveal delay={120}>
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#f3ede2]">
                <iframe
                  src="https://maps.google.com/maps?q=%E3%83%AD%E3%82%B3%E3%82%AF%E3%83%AA%E3%83%8B%E3%83%83%E3%82%AF%20%E7%BE%A4%E9%A6%AC%E7%9C%8C%E9%AB%98%E5%B4%8E%E5%B8%82%E6%B5%9C%E5%B0%BB%E7%94%BA209-5&ll=36.3520809,139.0134531&z=16&hl=ja&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 300 }}
                  allowFullScreen
                  loading="lazy"
                  title="LOCO CLINIC 地図"
                  className=""
                />
              </div>
              <p className="mt-4 text-xs font-light leading-relaxed text-[#9a8f7d]">
                お車でお越しの方：駐車場あり。詳しくはご予約時にご案内します。
              </p>
              <div className="mt-8">
                <Link
                  href="/guide"
                  className="inline-block border border-[#2d4c44] px-12 py-5 text-[15.5px] tracking-[0.2em] transition-all duration-500 hover:bg-[#2d4c44] hover:text-white"
                >
                  はじめての方へ
                </Link>
              </div>
            </SlowReveal>
          </div>
        </section>
      </main>
      <SiteFooter />
      <FixedCta />
    </div>
  );
}
