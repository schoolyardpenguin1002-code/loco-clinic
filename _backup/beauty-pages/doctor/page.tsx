import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/site/SiteHeader";
import SiteFooter from "../components/site/SiteFooter";
import FixedCta from "../components/site/FixedCta";
import BotanicalArt from "../components/site/BotanicalArt";
import SlowReveal from "../components/SlowReveal";

export const metadata: Metadata = {
  title: "院長挨拶",
  description: "LOCO CLINIC（高崎）院長・狩野遊太のごあいさつと、診療で大切にしている考え方をご紹介します。",
};

export default function DoctorPage() {
  return (
    <div className="price-page min-h-screen w-full bg-[#fffbf6] text-[#70645c]">
      <SiteHeader />
      <main className="w-full">
        <section className="relative overflow-hidden bg-white px-6 text-center" style={{ paddingTop: "150px", paddingBottom: "80px" }}>
          <BotanicalArt className="pointer-events-none absolute -left-14 -top-6 h-[130%] text-[#6f4e2f]" />
          <BotanicalArt className="pointer-events-none absolute -right-20 top-0 h-[120%] scale-x-[-1] text-[#b9a05a]" />
          <p className="mb-4 text-[12.5px] tracking-[0.35em] text-[#b9a05a]">GREETING</p>
          <h1
            className="text-[clamp(26px,4vw,40px)] font-light tracking-[0.14em]"
            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
          >
            院長挨拶
          </h1>
        </section>

        <section className="px-6" style={{ paddingTop: "120px", paddingBottom: "120px" }}>
          <SlowReveal className="mx-auto grid w-full max-w-5xl items-start gap-12 md:grid-cols-5 md:gap-16">
            <div className="md:col-span-2">
              <div className="overflow-hidden rounded-[28px] bg-[#f3ede2] shadow-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/doctor.jpg" alt="LOCO CLINIC 院長 狩野遊太" className="h-auto w-full object-cover" />
              </div>
              <p className="mt-6 text-xs text-[#9a8f7d]">LOCO CLINIC 院長</p>
              <p className="mt-1 text-2xl" style={{ fontFamily: "var(--font-shippori-mincho), serif" }}>
                狩野 遊太
              </p>
              <p className="mt-1 text-[12.5px] tracking-wider text-[#9a8f7d]">KANO YUTA ── 医師</p>
            </div>
            <div className="md:col-span-3">
              <h2
                className="mb-8 text-[clamp(20px,3vw,28px)] font-light leading-[1.8] tracking-[0.1em]"
                style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
              >
                美しさは、
                <br />
                一人ひとりの内側から。
              </h2>
              <div className="space-y-6 text-base font-light leading-[2.2] text-[#70645c]">
                <p>医師として数多くの患者様と向き合う中で、確信したことがあります。</p>
                <p>
                  「美しさ」とは、画一的なものではなく、一人ひとりの内面から輝き出るものだということです。
                  流行の顔に近づけることが、その人を美しくするとは限りません。
                </p>
                <p>
                  だから当院は、糸リフトを中心に「引き算の美容医療」を選びました。
                  大きく変えるのではなく、その方が本来持っている輪郭と印象を、丁寧に引き出す。
                  無理におすすめせず、必要な分だけをご提案する。
                </p>
                <p>
                  高崎の地で、あなたの「らしさ」と長く付き合っていける
                  かかりつけの美容クリニックでありたいと思っています。
                </p>
              </div>

              <div className="mt-12 border-t border-[#e8e2d8] pt-8">
                <h3 className="mb-4 text-[15.5px] tracking-[0.25em] text-[#b9a05a]">POLICY ── 診療で大切にしていること</h3>
                <ul className="space-y-3 text-[15px] font-light leading-relaxed text-[#70645c]">
                  <li>・カウンセリングで無理におすすめしない</li>
                  <li>・リスクとダウンタイムを先に説明する</li>
                  <li>・お悩みと状態に合わせて、必要な分だけ提案する</li>
                  <li>・その日に決めなくていい</li>
                </ul>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/thread-lift"
                  className="border border-[#6f4e2f] px-10 py-5 text-center text-[15.5px] tracking-[0.2em] transition-all duration-500 hover:bg-[#6f4e2f] hover:text-white"
                >
                  糸リフトについて
                </Link>
                <Link
                  href="/guide"
                  className="border border-[#6f4e2f]/30 px-10 py-5 text-center text-[15.5px] tracking-[0.2em] text-[#70645c] transition-all duration-500 hover:border-[#6f4e2f] hover:text-[#1a1a1a]"
                >
                  はじめての方へ
                </Link>
              </div>
            </div>
          </SlowReveal>
        </section>
      </main>
      <SiteFooter />
      <FixedCta />
    </div>
  );
}
