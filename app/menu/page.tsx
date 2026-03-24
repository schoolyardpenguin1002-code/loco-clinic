import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import MenuBrowseTabs from "../components/menu/MenuBrowseTabs";

export const metadata: Metadata = {
  title: "施術メニュー | LOCO CLINIC",
  description:
    "糸リフト・注入・美肌ケアなど、LOCO CLINICの施術メニューをご紹介します。",
};

export default function MenuPage() {
  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-white">
      <Header />
      <main className="marketing-layout w-full">
        {/* Hero */}
        <section className="section-bleed relative bg-[#fdfbf8] pb-24 pt-40 md:pb-32 md:pt-48">
          <div className="section-inner !max-w-5xl !mx-auto flex w-full flex-col items-center text-center">
            <p className="font-heading mb-6 text-[10px] tracking-[0.35em] text-[#d4af37] md:text-xs">
              MENU
            </p>
            <h1
              className="mb-0 font-japanese text-4xl font-light tracking-wider text-[#1a1a1a] md:text-6xl lg:text-7xl"
              style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
            >
              施術メニュー
            </h1>
          </div>
        </section>

        <section className="section-bleed bg-white py-20 md:py-28">
          <div className="section-inner !max-w-5xl !mx-auto flex w-full flex-col items-center">
            <MenuBrowseTabs />
          </div>
        </section>

        {/* CTA */}
        <section className="section-bleed bg-[#1a1a1a] py-32 text-white md:py-48">
          <div className="section-inner !max-w-4xl !mx-auto text-center">
            <h2
              className="mb-12 font-japanese text-3xl font-light leading-relaxed md:text-5xl"
              style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
            >
              まずは、
              <br />
              ご相談から
            </h2>
            <p className="mb-16 text-base font-light leading-loose text-gray-300 md:text-lg">
              お客様一人ひとりに合わせた
              <br />
              最適なプランをご提案します。
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-none bg-white px-12 py-5 font-heading text-sm tracking-widest text-[#1a1a1a] uppercase shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:bg-[#d4af37] hover:text-white md:px-16 md:py-6"
            >
              ご予約・お問い合わせ
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
