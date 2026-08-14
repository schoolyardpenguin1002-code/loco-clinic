"use client";

import Link from "next/link";
import { useState } from "react";
import Header from "../components/Header";
import SlowReveal from "../components/SlowReveal";
import { CONCERN_SECTIONS } from "@/lib/menu-data";

const serif = { fontFamily: "var(--font-shippori-mincho), serif" };

export default function ConcernsPage() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="price-page min-h-screen bg-[#fdfbf8] w-full max-w-[100vw] overflow-x-hidden">
      <Header />
      <main className="w-full">
        {/* ページヒーロー（波型区切り） */}
        <section className="relative bg-gradient-to-b from-[#efe7da] via-[#f5eee3] to-[#f5eee3]">
          <div className="text-center px-5" style={{ paddingTop: "170px", paddingBottom: "40px" }}>
            <p className="text-xs font-heading tracking-[0.35em] text-[#b39434] uppercase mb-5">
              Find by Concern
            </p>
            <h1 className="text-4xl md:text-5xl text-[#1a1a1a] tracking-wider" style={serif}>
              お悩みからさがす
            </h1>
            <p
              className="text-sm md:text-base text-gray-600 font-light leading-loose mt-8 max-w-2xl mx-auto"
              style={{ maxWidth: "42rem", marginLeft: "auto", marginRight: "auto" }}
            >
              気になるお悩みを選ぶと、当院でご案内できる施術と
              <br className="hidden md:block" />
              その理由・料金の目安をご覧いただけます。
            </p>
          </div>
          {/* 波型の下端 */}
          <svg
            className="block w-full mt-10"
            viewBox="0 0 1440 70"
            preserveAspectRatio="none"
            style={{ height: "56px" }}
            aria-hidden
          >
            <path d="M0,40 C360,90 1080,-10 1440,45 L1440,70 L0,70 Z" fill="#fdfbf8" />
          </svg>
        </section>

        {/* 悩みカテゴリ */}
        <section>
          <div className="mx-auto px-5 sm:px-8" style={{ maxWidth: "52rem", paddingTop: "48px", paddingBottom: "96px" }}>
            {CONCERN_SECTIONS.map((section, si) => (
              <SlowReveal key={section.id}>
                <div style={{ marginBottom: "64px" }}>
                  <div className="text-center" style={{ marginBottom: "28px" }}>
                    <p className="text-[10px] font-heading tracking-[0.35em] text-[#b39434] uppercase mb-2">
                      {section.en}
                    </p>
                    <h2 className="text-2xl md:text-3xl text-[#1a1a1a] tracking-wide" style={serif}>
                      {section.title}
                    </h2>
                    <div className="w-14 h-px bg-[#d4af37]/50 mx-auto" style={{ marginTop: "16px" }} />
                  </div>

                  <div className="space-y-4">
                    {section.concerns.map((c) => {
                      const key = `${section.id}-${c.id}`;
                      const isOpen = open === key;
                      return (
                        <div
                          key={c.id}
                          className="rounded-sm overflow-hidden border border-[#1a1a1a]/10 bg-white"
                        >
                          <button
                            onClick={() => setOpen(isOpen ? null : key)}
                            className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 bg-[#1f2a26] text-white hover:bg-[#2b3a34] transition-colors duration-500"
                          >
                            <span className="text-sm md:text-base tracking-wide" style={serif}>
                              {c.label}
                            </span>
                            <span
                              className={`shrink-0 text-[#d4af37] text-lg leading-none transition-transform duration-500 ${
                                isOpen ? "rotate-45" : ""
                              }`}
                              aria-hidden
                            >
                              ＋
                            </span>
                          </button>

                          <div
                            className={`grid transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                              isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                            }`}
                          >
                            <div className="overflow-hidden">
                              <div className="px-6 py-7">
                                <p className="text-sm text-gray-600 font-light leading-loose" style={{ marginBottom: "22px" }}>
                                  {c.desc}
                                </p>
                                <div className="space-y-3">
                                  {c.picks.map((p) => (
                                    <Link
                                      key={p.title}
                                      href={p.href}
                                      className="group block border border-[#d4af37]/25 rounded-sm px-5 py-4 hover:border-[#d4af37] hover:bg-[#fdfbf8] transition-all duration-500"
                                    >
                                      <div className="flex items-baseline justify-between gap-4 flex-wrap">
                                        <span className="text-base text-[#1a1a1a] group-hover:text-[#b39434] transition-colors" style={serif}>
                                          {p.title}
                                        </span>
                                        <span className="text-xs font-heading tracking-wider text-[#b39434]">
                                          {p.priceHint}
                                        </span>
                                      </div>
                                      <p className="text-xs text-gray-500 font-light leading-relaxed" style={{ marginTop: "6px" }}>
                                        {p.why}
                                        <span className="ml-2 text-[#d4af37] inline-flex items-center gap-1">
                                          詳しく見る
                                          <span aria-hidden className="motion-safe:transition-transform motion-safe:group-hover:translate-x-1">→</span>
                                        </span>
                                      </p>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </SlowReveal>
            ))}

            {/* 注意書き */}
            <SlowReveal>
              <p className="text-xs text-gray-400 font-light leading-loose text-center" style={{ marginBottom: "64px" }}>
                掲載の施術はすべて自由診療（保険適用外）です。価格はすべて税込表示です。
                <br />
                効果の感じ方には個人差があり、施術ごとに腫れ・内出血・赤みなどのリスクがあります。詳しくはカウンセリングでご説明します。
              </p>
            </SlowReveal>

            {/* CTA */}
            <SlowReveal>
              <div className="text-center bg-[#1f2a26] text-white rounded-sm px-8" style={{ paddingTop: "56px", paddingBottom: "56px" }}>
                <h2 className="text-2xl md:text-3xl tracking-wider" style={{ ...serif, marginBottom: "20px" }}>
                  どれが合うか、わからなくても。
                </h2>
                <p className="text-sm text-gray-300 font-light leading-loose" style={{ marginBottom: "32px" }}>
                  カウンセリングでお悩みをお聞きして、最適な組み合わせをご提案します。
                  <br />
                  ご相談だけのご来院も歓迎です。
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-12 py-4 bg-[#d4af37] text-white font-heading text-xs tracking-[0.25em] uppercase hover:bg-[#c19b2f] transition-all duration-500 hover:-translate-y-0.5"
                >
                  ご予約・ご相談
                </Link>
              </div>
            </SlowReveal>
          </div>
        </section>

        {/* フッター簡易 */}
        <footer className="bg-[#1a1a1a] text-white" style={{ paddingTop: "48px", paddingBottom: "48px" }}>
          <div className="text-center px-5">
            <p className="text-xl text-[#d4af37]" style={{ ...serif, marginBottom: "12px" }}>
              LOCO CLINIC
            </p>
            <p className="text-xs text-gray-400 font-light leading-loose">
              群馬県高崎市浜尻町２０９−５　TEL 027-395-0443
              <br />
              9:00〜21:00（不定休）・完全予約制
            </p>
            <p className="text-[10px] text-gray-500 font-light tracking-wider" style={{ marginTop: "24px" }}>
              &copy; 2026 LOCO CLINIC. All Rights Reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
