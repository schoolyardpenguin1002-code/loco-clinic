import type { Metadata } from "next";
import Link from "next/link";
import { CONSULTATION_FEE_SENTENCE } from "@/lib/consultation-fee";
import { LINE_ADD_FRIEND_URL } from "@/lib/line";
import SiteHeader from "@/app/components/site/SiteHeader";
import SiteFooter from "@/app/components/site/SiteFooter";
import FixedCta from "@/app/components/site/FixedCta";
import BotanicalArt from "@/app/components/site/BotanicalArt";
import SlowReveal from "@/app/components/SlowReveal";

export const metadata: Metadata = {
  title: "ご予約・お問い合わせ",
  description: "LOCO CLINIC（高崎・糸リフト専門）のご予約・ご相談は公式LINEから承っております。24時間受付。",
};

const STEPS = [
  { n: "01", t: "友だち追加", d: "下のボタンから公式LINEを友だち追加します。" },
  { n: "02", t: "トークで送信", d: "「カウンセリング希望」とだけ送っていただければ大丈夫です。ご相談・ご質問もそのままどうぞ。" },
  { n: "03", t: "日程のご案内", d: "こちらから空き枠をご案内し、ご予約確定です。" },
];

export default function ContactPage() {
  return (
    <div className="price-page min-h-screen w-full bg-[#fffbf6] text-[#70645c]">
      <SiteHeader />
      <main className="w-full">
        <section className="relative overflow-hidden bg-white px-6 text-center" style={{ paddingTop: "150px", paddingBottom: "80px" }}>
          <BotanicalArt className="pointer-events-none absolute -left-14 -top-6 h-[130%] text-[#6f4e2f]" />
          <BotanicalArt className="pointer-events-none absolute -right-20 top-0 h-[120%] scale-x-[-1] text-[#b9a05a]" />
          <p className="mb-4 text-[12.5px] tracking-[0.35em] text-[#b9a05a]">CONTACT</p>
          <h1
            className="text-[clamp(26px,4vw,40px)] font-light tracking-[0.14em]"
            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
          >
            ご予約・お問い合わせ
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-[15px] font-light leading-loose">
            ご予約・ご相談は、公式LINEから承っております。
            <br />
            「相談だけ」も歓迎です。お気軽にどうぞ。
          </p>
        </section>

        <section className="px-6" style={{ paddingTop: "100px", paddingBottom: "60px" }}>
          <SlowReveal className="mx-auto w-full max-w-2xl text-center">
            <a
              href={LINE_ADD_FRIEND_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-4 bg-[#3e7a52] px-8 py-7 text-white transition hover:brightness-105"
            >
              <span className="grid h-10 w-10 place-items-center rounded bg-white text-[11px] font-black text-[#3e7a52]">LINE</span>
              <span className="text-left leading-tight">
                <span className="block text-[19px] font-bold tracking-[0.1em]">公式LINEで予約・相談する</span>
                <span className="mt-1 block text-[12px] opacity-90">24時間受付 ── 順番にお返事いたします</span>
              </span>
            </a>
            <p className="mt-6 text-[13.5px] font-light leading-[2] text-[#9a8f7d]">
              翌月分のご予約枠は、前月の25日前後に1ヶ月分まとめて公開しています。
            </p>
          </SlowReveal>
        </section>

        <section className="px-6" style={{ paddingTop: "60px", paddingBottom: "60px" }}>
          <div className="mx-auto w-full max-w-3xl">
            <SlowReveal className="mb-12 text-center">
              <h2 className="text-[clamp(20px,2.8vw,26px)] font-light tracking-[0.14em]" style={{ fontFamily: "var(--font-shippori-mincho), serif" }}>
                ご予約までの流れ
              </h2>
            </SlowReveal>
            <div className="grid gap-6 sm:grid-cols-3">
              {STEPS.map((s, i) => (
                <SlowReveal key={s.n} delay={i * 120}>
                  <div className="h-full border-t border-[#d2b388] bg-white p-7">
                    <p className="font-heading text-[13px] tracking-[0.3em] text-[#b9a05a]">{s.n}</p>
                    <p className="mt-3 text-base" style={{ fontFamily: "var(--font-shippori-mincho), serif" }}>{s.t}</p>
                    <p className="mt-3 text-[13.5px] font-light leading-[2]">{s.d}</p>
                  </div>
                </SlowReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6" style={{ paddingTop: "60px", paddingBottom: "120px" }}>
          <SlowReveal className="mx-auto w-full max-w-3xl">
            <div className="border border-[#e9e6e6] bg-white p-10">
              <h2 className="text-lg tracking-[0.12em]" style={{ fontFamily: "var(--font-shippori-mincho), serif" }}>
                ご予約について
              </h2>
              <ul className="mt-6 space-y-3 text-[14.5px] font-light leading-[2]">
                <li className="flex gap-3"><span className="text-[#b9a05a]">・</span><span>完全予約制です。ご予約は公式LINEからお願いいたします。</span></li>
                <li className="flex gap-3"><span className="text-[#b9a05a]">・</span><span>初診の方は、カウンセリングのご予約からお願いいたします。{CONSULTATION_FEE_SENTENCE}</span></li>
                <li className="flex gap-3">
                  <span className="text-[#b9a05a]">・</span>
                  <span>
                    ご予約の変更・キャンセルは前日18:00までにご連絡ください。詳しくは
                    <Link href="/cancel-policy" className="underline decoration-[#d2b388] underline-offset-4 hover:text-[#b9a05a]">
                      キャンセルポリシー
                    </Link>
                    をご覧ください。
                  </span>
                </li>
              </ul>
            </div>
          </SlowReveal>
        </section>
      </main>
      <SiteFooter />
      <FixedCta />
    </div>
  );
}
