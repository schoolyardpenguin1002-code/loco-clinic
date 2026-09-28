import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/site/SiteHeader";
import SiteFooter from "../components/site/SiteFooter";
import FixedCta from "../components/site/FixedCta";
import BotanicalArt from "../components/site/BotanicalArt";
import SlowReveal from "../components/SlowReveal";

export const metadata: Metadata = {
  title: "はじめての方へ",
  description:
    "LOCO CLINIC（高崎）が初めての方へ。カウンセリングから施術当日、アフターフォローまでの流れと、当院の考え方をご案内します。",
};

const FLOW = [
  {
    step: "01",
    title: "ご予約",
    body: "LINE・お問い合わせフォーム・お電話からご予約ください。完全予約制のため、他の患者様と顔を合わせにくい環境です。",
  },
  {
    step: "02",
    title: "カウンセリング",
    body: "お悩みとご希望をお聞きし、お顔を拝見した上で選択肢をご説明します。無理におすすめすることはありません。その日に決めず、持ち帰ってご検討いただいて構いません。",
  },
  {
    step: "03",
    title: "施術",
    body: "施術内容・リスク・料金にご納得いただいてから行います。ご不明な点は当日でも遠慮なくお聞きください。",
  },
  {
    step: "04",
    title: "アフターフォロー",
    body: "施術後の経過で気になることがあれば、LINEでいつでもご相談いただけます。必要に応じて診察いたします。",
  },
];

const PROMISES = [
  { title: "無理におすすめしません", body: "本数や高い施術を売り込むことはありません。必要な分だけをご提案します。" },
  { title: "料金はすべて事前に", body: "料金表はすべて税込で公開しています。施術当日に想定外の費用が発生することはありません。" },
  { title: "リスクも先に説明します", body: "腫れ・内出血などのダウンタイムや起こりうる合併症を、施術前に必ずご説明します。" },
];

export default function GuidePage() {
  return (
    <div className="price-page min-h-screen w-full bg-[#fffbf6] text-[#70645c]">
      <SiteHeader />
      <main className="w-full">
        {/* ページヒーロー */}
        <section className="relative overflow-hidden bg-white px-6 text-center" style={{ paddingTop: "150px", paddingBottom: "80px" }}>
          <BotanicalArt className="pointer-events-none absolute -left-14 -top-6 h-[130%] text-[#6f4e2f]" />
          <BotanicalArt className="pointer-events-none absolute -right-20 top-0 h-[120%] scale-x-[-1] text-[#b9a05a]" />
          <p className="mb-4 text-[12.5px] tracking-[0.35em] text-[#b9a05a]">GUIDE</p>
          <h1
            className="text-[clamp(26px,4vw,40px)] font-light tracking-[0.14em]"
            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
          >
            はじめての方へ
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base font-light leading-loose text-[#70645c]">
            美容医療がはじめてでも、大丈夫です。
            <br />
            流れと、当院がお約束することをご案内します。
          </p>
          <div className="relative mx-auto mt-16 max-w-3xl overflow-hidden rounded-[28px] shadow-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/stock/counseling.jpg" alt="カウンセリングの様子" className="h-[300px] w-full object-cover object-[center_30%] sm:h-[380px]" />
          </div>
        </section>

        {/* 当院のお約束 */}
        <section className="px-6" style={{ paddingTop: "120px", paddingBottom: "120px" }}>
          <div className="mx-auto w-full max-w-5xl">
            <SlowReveal className="mb-20 text-center">
              <h2
                className="text-[clamp(20px,3vw,28px)] font-light tracking-[0.12em]"
                style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
              >
                当院がお約束すること
              </h2>
            </SlowReveal>
            <div className="grid gap-6 md:grid-cols-3">
              {PROMISES.map((p, i) => (
                <SlowReveal key={p.title} delay={i * 120}>
                  <div className="h-full border-t-2 border-[#b9a05a] bg-white p-8">
                    <h3 className="mb-4 text-base" style={{ fontFamily: "var(--font-shippori-mincho), serif" }}>
                      {p.title}
                    </h3>
                    <p className="text-[15px] font-light leading-[2] text-[#70645c]">{p.body}</p>
                  </div>
                </SlowReveal>
              ))}
            </div>
          </div>
        </section>

        {/* 流れ */}
        <section className="bg-white px-6" style={{ paddingTop: "120px", paddingBottom: "120px" }}>
          <div className="mx-auto w-full max-w-3xl">
            <SlowReveal className="mb-20 text-center">
              <p className="mb-4 text-[12.5px] tracking-[0.35em] text-[#b9a05a]">FLOW</p>
              <h2
                className="text-[clamp(20px,3vw,28px)] font-light tracking-[0.12em]"
                style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
              >
                ご来院からの流れ
              </h2>
            </SlowReveal>
            <ol className="space-y-8">
              {FLOW.map((f, i) => (
                <SlowReveal key={f.step} delay={i * 100}>
                  <li className="flex gap-6 border-b border-[#e8e2d8] pb-8">
                    <span className="font-heading shrink-0 text-2xl font-light tracking-wider text-[#b9a05a]">
                      {f.step}
                    </span>
                    <div>
                      <h3 className="mb-2 text-base" style={{ fontFamily: "var(--font-shippori-mincho), serif" }}>
                        {f.title}
                      </h3>
                      <p className="text-[15px] font-light leading-[2] text-[#70645c]">{f.body}</p>
                    </div>
                  </li>
                </SlowReveal>
              ))}
            </ol>
          </div>
        </section>

        {/* お支払い・注意 */}
        <section className="px-6" style={{ paddingTop: "90px", paddingBottom: "110px" }}>
          <SlowReveal className="mx-auto w-full max-w-3xl">
            <h2
              className="mb-8 text-center text-[clamp(20px,3vw,26px)] font-light tracking-[0.12em]"
              style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
            >
              お支払い・ご注意
            </h2>
            <ul className="space-y-4 border-y border-[#e8e2d8] py-8 text-[15px] font-light leading-[2] text-[#70645c]">
              <li>・料金はすべて税込表示です。</li>
              <li>・当院の美容施術は自由診療（保険適用外）です。</li>
              <li>・未成年の方は保護者の同意が必要です。</li>
              <li>・キャンセルについては<Link href="/cancel-policy" className="underline decoration-[#b9a05a] underline-offset-4 hover:text-[#b9a05a]">キャンセルポリシー</Link>をご確認ください。</li>
            </ul>
            <div className="mt-12 text-center">
              <Link
                href="/concerns"
                className="inline-block border border-[#6f4e2f] px-12 py-5 text-[15.5px] tracking-[0.2em] transition-all duration-500 hover:bg-[#6f4e2f] hover:text-white"
              >
                お悩みからさがしてみる
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
