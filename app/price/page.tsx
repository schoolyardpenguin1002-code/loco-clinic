"use client";

import Link from "next/link";
import { useState } from "react";
import Header from "../components/Header";
import { PRICE_GROUPS, CONCERNS } from "@/lib/menu-data";
import SiteFooter from "@/app/components/site/SiteFooter";
import FixedCta from "@/app/components/site/FixedCta";

const TILE_META: Record<string, { img: string; desc: string; ig?: string }> = {
  "thread": { img: "/images/ig/ig-thread.jpg", desc: "当院の専門。素材と持続の異なる4種類の糸から選べます。", ig: "https://www.instagram.com/p/DYQ2g3zkYuv/" },
  "shopping": { img: "/images/ig/ig-shopping.jpg", desc: "短い糸を多数入れて、肌の土台からハリを育てます。", ig: "https://www.instagram.com/p/DM9p-HBxvc1/" },
  "eye-thread": { img: "/images/ig/ig-eyethread.jpg", desc: "目元専用の細い糸。目まわりの印象を整えます。", ig: "https://www.instagram.com/p/DNKBjo4yQ1z/" },
  "botox": { img: "/images/ig/ig-botox.jpg", desc: "表情じわ・エラ・肩・脇など、お悩みに合わせて。" },
  "hyaluronic": { img: "/images/message-3.jpg", desc: "ほうれい線や輪郭のボリュームを自然に整えます。" },
  "skin-injection": { img: "/images/stock/stone-bamboo.jpg", desc: "肌そのものを育てる、手打ちの注入治療です。" },
  "water-light": { img: "/images/hero/hero-1.jpg", desc: "機械打ちで均一に。うるおいとハリの美肌注入。" },
  "water-light-option": { img: "/images/message-2.jpg", desc: "水光注射に追加できるオプションです。" },
  "lipolysis": { img: "/images/stock/stone-bamboo.jpg", desc: "気になる部分の脂肪にアプローチします。" },
  "peeling": { img: "/images/stock/facial-warm.jpg", desc: "古い角質と毛穴の汚れをやさしくオフ。" },
  "electro": { img: "/images/message-2.jpg", desc: "針を使わずに有効成分を導入します。" },
};

export default function PricePage() {
  const [openConcern, setOpenConcern] = useState<string | null>(null);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const modalGroup = PRICE_GROUPS.find((g) => g.id === openGroup);

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

      {/* メニューから選ぶ（タイル→チラシ風ポップアップ） */}
      <section className="px-6" style={{paddingBottom:"72px"}}>
        <div className="w-full max-w-5xl mx-auto px-5 sm:px-8">
          <div className="text-center" style={{marginBottom:"28px"}}>
            <p className="text-[11px] tracking-[0.35em] text-[#b9a77e] mb-3">MENU</p>
            <h2 className="font-serif text-2xl tracking-[0.1em] font-normal">メニューから選ぶ</h2>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 sm:gap-4">
            {PRICE_GROUPS.map((g) => (
              <button
                key={g.id}
                onClick={() => setOpenGroup(g.id)}
                className="group overflow-hidden rounded-[18px] border border-[#e9e6e6] bg-white text-left transition-all duration-500 hover:-translate-y-1 hover:border-[#d2b388] hover:shadow-lg"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={TILE_META[g.id]?.img ?? "/images/hero/hero-1.jpg"}
                    alt={g.title}
                    className="h-full w-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                </div>
                <div className="px-4 py-3.5">
                  <p className="text-[14px] leading-snug tracking-wide">{g.title}</p>
                  <p className="mt-1 text-[11.5px] tracking-[0.2em] text-[#b9a77e]">TAP →</p>
                </div>
              </button>
            ))}
          </div>
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

      {/* チラシ風ポップアップ */}
      {modalGroup && (
        <div className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-black/55 backdrop-blur-[2px]" onClick={() => setOpenGroup(null)} />
          <div className="relative max-h-[88svh] w-full max-w-lg overflow-y-auto rounded-t-[24px] bg-white shadow-2xl sm:rounded-[24px]">
            <div className="relative h-44 overflow-hidden sm:h-52">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={TILE_META[modalGroup.id]?.img ?? "/images/hero/hero-1.jpg"}
                alt={modalGroup.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              <p
                className="absolute bottom-4 left-6 right-14 text-[22px] tracking-[0.08em] text-white"
                style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
              >
                {modalGroup.title}
              </p>
              <button
                onClick={() => setOpenGroup(null)}
                aria-label="閉じる"
                className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-lg text-[#2b2723]"
              >
                ✕
              </button>
            </div>
            <div className="px-7 py-6 sm:px-9">
              <p className="text-[14px] leading-relaxed text-[#6b635a]">{TILE_META[modalGroup.id]?.desc}</p>
              <ul className="mt-5 divide-y divide-[#efe9df] border-y border-[#e8e2d8]">
                {modalGroup.rows.map((it, i) => (
                  <li key={i} className="flex items-baseline justify-between gap-4 py-3.5">
                    <span className="text-[14.5px] leading-snug">
                      {it.name}
                      {it.note && <span className="ml-2 text-[11.5px] text-[#8a8177]">{it.note}</span>}
                    </span>
                    <span className="shrink-0 font-heading text-[15.5px] tracking-wide text-[#2b2723]">{it.price}</span>
                  </li>
                ))}
              </ul>
              {modalGroup.note && (
                <p className="mt-4 text-[12px] leading-relaxed text-[#8a8177]">{modalGroup.note}</p>
              )}
              <p className="mt-4 text-[11.5px] leading-relaxed text-[#8a8177]">
                表示はすべて税込です。自由診療（保険適用外）。施術にはリスク・ダウンタイムがあります。
              </p>
              {TILE_META[modalGroup.id]?.ig && (
                <a
                  href={TILE_META[modalGroup.id].ig}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-[13.5px] text-[#b9a77e] underline decoration-[#d2b388] underline-offset-4 hover:text-[#8a7a55]"
                >
                  📷 Instagramで詳しく見る →
                </a>
              )}
              <a
                href="https://lin.ee/Q8CPXPZ"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block rounded-full bg-[#c2a575] py-4 text-center text-[15px] font-bold tracking-[0.2em] text-white transition hover:bg-[#b9a05a]"
              >
                LINEで予約・ご相談
              </a>
            </div>
          </div>
        </div>
      )}
      <SiteFooter />
      <FixedCta />
    </div>
  );
}
