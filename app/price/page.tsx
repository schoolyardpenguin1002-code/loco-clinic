"use client";

import Link from "next/link";
import { useState } from "react";
import Header from "../components/Header";
import { PRICE_GROUPS, CONCERNS } from "@/lib/menu-data";

export default function PricePage() {
  const [openConcern, setOpenConcern] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white text-[#2b2723] price-page">
      <Header />

      {/* 見出し */}
      <section className="px-6" style={{paddingTop:"132px",paddingBottom:"56px"}}>
        <div className="w-full max-w-5xl mx-auto px-5 sm:px-8 text-center">
          <p className="text-[11px] tracking-[0.35em] text-[#b9a77e] mb-5">PRICE</p>
          <h1 className="font-serif text-3xl md:text-4xl tracking-[0.12em] font-normal mb-6">料金表</h1>
          <p className="text-sm leading-loose text-[#6b635a]">
            表示はすべて税込価格です。<br className="hidden sm:block" />
            施術の内容や必要量は、カウンセリングでご相談のうえ決めていきます。
          </p>
        </div>
      </section>

      {/* お悩みから探す */}
      <section className="px-6" style={{paddingBottom:"72px"}}>
        <div className="w-full max-w-5xl mx-auto px-5 sm:px-8">
          <div className="text-center" style={{marginBottom:"28px"}}>
            <p className="text-[11px] tracking-[0.35em] text-[#b9a77e] mb-3">CONCERN</p>
            <h2 className="font-serif text-2xl tracking-[0.1em] font-normal">お悩みから探す</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#e8e2d8]">
            {CONCERNS.map((c) => (
              <button
                key={c.id}
                onClick={() => setOpenConcern(openConcern === c.id ? null : c.id)}
                className={`bg-white px-5 py-7 text-center transition ${openConcern === c.id ? "bg-[#faf7f1]" : "hover:bg-[#faf7f1]"}`}
              >
                <span className="text-[13px] tracking-wider">{c.label}</span>
              </button>
            ))}
          </div>

          {CONCERNS.filter((c) => c.id === openConcern).map((c) => (
            <div key={c.id} className="mt-10 border-t border-[#e8e2d8] pt-10">
              <p className="font-serif text-lg tracking-wide mb-2">{c.label}</p>
              <p className="text-sm text-[#6b635a] mb-8">{c.lead}</p>
              <div className="grid sm:grid-cols-3 gap-8">
                {c.picks.map((p, i) => (
                  <a key={i} href={`#${p.groupId}`} className="group block border-t border-[#c9b98f] pt-5">
                    <p className="text-[15px] tracking-wide mb-2 group-hover:text-[#b9a77e] transition">{p.title}</p>
                    <p className="text-xs leading-relaxed text-[#8a8177]">{p.why}</p>
                    <p className="mt-4 text-[11px] tracking-[0.2em] text-[#b9a77e]">料金を見る →</p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 料金表本体 */}
      <section className="px-6" style={{paddingBottom:"96px"}}>
        <div className="w-full max-w-4xl mx-auto px-5 sm:px-8">
          {PRICE_GROUPS.map((g) => (
            <div key={g.id} id={g.id} className="scroll-mt-28" style={{marginBottom:"72px"}}>
              <h2 className="font-serif tracking-[0.1em] font-normal border-b border-[#c9b98f]" style={{paddingBottom:"14px",marginBottom:"6px"}}>
                {g.title}
              </h2>
              {g.lead && <p className="text-xs leading-relaxed text-[#8a8177]" style={{marginTop:"14px",marginBottom:"18px"}}>{g.lead}</p>}
              <div className="divide-y divide-[#eee9e0]">
                {g.rows.map((r, i) => (
                  <div key={i} className="flex items-baseline justify-between gap-6 py-4">
                    <div className="min-w-0">
                      <span className="text-[15px] leading-relaxed">{r.name}</span>
                      {r.note && <span className="ml-3 text-[11px] text-[#a89e91]">{r.note}</span>}
                    </div>
                    <span className="flex-shrink-0 text-[15px] tabular-nums tracking-wide text-[#6b635a]">{r.price}</span>
                  </div>
                ))}
              </div>
              {g.note && <p className="mt-5 text-xs leading-relaxed text-[#8a8177]">※ {g.note}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* お支払い・注意 */}
      <section className="px-6 bg-[#faf7f1]" style={{paddingTop:"80px",paddingBottom:"80px"}}>
        <div className="w-full max-w-4xl mx-auto px-5 sm:px-8 grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="font-serif text-lg tracking-wide mb-6">お支払い方法</h3>
            <ul className="space-y-3 text-sm text-[#6b635a] leading-relaxed">
              <li>現金</li>
              <li>クレジットカード（VISA / Mastercard / JCB / AMEX）</li>
              <li>電子決済（PayPay / 楽天ペイ）</li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-lg tracking-wide mb-6">ご予約・キャンセルについて</h3>
            <ul className="space-y-3 text-sm text-[#6b635a] leading-relaxed">
              <li>ご予約は、お問い合わせフォームまたは公式LINEより承ります。</li>
              <li>キャンセルは前日までにご連絡ください。</li>
              <li>施術内容によっては、カウンセリング当日の施術が難しい場合がございます。</li>
              <li>料金は予告なく変更となる場合がございます。</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6" style={{paddingTop:"96px",paddingBottom:"96px"}}>
        <div className="w-full max-w-2xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="font-serif text-2xl tracking-[0.1em] font-normal mb-6">まずはご相談ください</h2>
          <p className="text-sm leading-loose text-[#6b635a] mb-10">
            お一人おひとりのお悩みに合わせて、必要な施術と費用をご提案します。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="w-full sm:w-auto px-12 py-4 border border-[#c9b98f] text-[#8a7a4e] text-sm tracking-[0.15em] hover:bg-[#c9b98f] hover:text-white transition">
              ご予約・お問い合わせ
            </Link>
            <Link href="/menu" className="w-full sm:w-auto px-12 py-4 text-sm tracking-[0.15em] text-[#6b635a] hover:text-[#b9a77e] transition">
              施術メニューを見る →
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#eee9e0] py-14 px-6">
        <div className="w-full max-w-4xl mx-auto px-5 sm:px-8 flex flex-col md:flex-row justify-between gap-8 text-sm text-[#8a8177]">
          <div>
            <p className="font-serif tracking-[0.2em] text-[#2b2723] mb-3">LOCO CLINIC</p>
            <p className="text-xs leading-relaxed">美しさの、その先へ。</p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-xs">
            <Link href="/menu" className="hover:text-[#b9a77e] transition">施術メニュー</Link>
            <Link href="/artmake" className="hover:text-[#b9a77e] transition">アートメイク</Link>
            <Link href="/price" className="hover:text-[#b9a77e] transition">料金表</Link>
            <Link href="/faq" className="hover:text-[#b9a77e] transition">よくある質問</Link>
            <Link href="/contact" className="hover:text-[#b9a77e] transition">お問い合わせ</Link>
          </div>
        </div>
        <p className="w-full max-w-4xl mx-auto px-5 sm:px-8 mt-10 text-[11px] text-[#a89e91]">&copy; 2026 LOCO CLINIC</p>
      </footer>
    </div>
  );
}
