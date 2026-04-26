"use client";

import Link from "next/link";
import { CONSULTATION_FEE_SENTENCE } from "@/lib/consultation-fee";
import { LINE_ADD_FRIEND_URL } from "@/lib/line";
import {
  Gem,
  Heart,
  Instagram,
  Shield,
  Sparkles,
  Syringe,
  Droplets,
  Clock,
  MapPin,
  Phone,
} from "lucide-react";

import FaqAccordion, { type FaqItem } from "./FaqAccordion";
import ImagePlaceholder from "./ImagePlaceholder";
import RevealOnScroll from "./RevealOnScroll";

const artists = [
  {
    name: "澤田 望美",
    role: "Eyebrow Specialist",
    speciality: "眉・ライン",
    description:
      "骨格と毛流れを丁寧に見極め、黄金比を意識したナチュラルな仕上がりをご提案します。カウンセリングから施術まで、安心してお任せください。",
    instagram: "https://www.instagram.com/nozomi_akari_glow",
  },
  {
    name: "上原 実紅",
    role: "Lip & Line Specialist",
    speciality: "リップ・アイライン",
    description:
      "血色感と輪郭のバランスを大切に、素顔でも美しく見えるデザインを得意としています。お悩みに寄り添い、最適なプランをご案内します。",
    instagram: "https://www.instagram.com/miku39_artmake/",
  },
] as const;

const faqItems: FaqItem[] = [
  {
    q: "カウンセリング料はかかりますか？",
    a: `はい。${CONSULTATION_FEE_SENTENCE}`,
  },
  {
    q: "施術の持続期間はどのくらいですか？",
    a: "個人差はありますが、一般的に眉は1〜2年、リップは2〜3年程度を目安に色素が徐々に薄くなっていきます。肌質・ライフスタイル・UVケアにも影響されます。",
  },
  {
    q: "施術当日はメイクをしていってもよいですか？",
    a: "施術部位のメイクは事前にオフしていただくようご案内しています。詳細は予約時にご確認ください。",
  },
  {
    q: "痛みはありますか？",
    a: "個人差がありますが、クリーム麻酔などで軽減できるよう配慮しています。ご不安な点はカウンセリングでお聞かせください。",
  },
  {
    q: "アートメイクは誰でも受けられますか？",
    a: "妊娠中・授乳中の方、特定の皮膚疾患、ケロイド体質など、施術をお断りする場合があります。医師の診察のうえで適応を判断します。",
  },
];

const flowSteps = [
  { step: 1, title: "ご予約", desc: "Web・LINE・お電話にてご予約ください。" },
  {
    step: 2,
    title: "カウンセリング",
    desc: `ご希望やライフスタイルを伺い、デザインをご提案します。${CONSULTATION_FEE_SENTENCE}`,
  },
  { step: 3, title: "デザイン確定", desc: "シミュレーションをしながら形・色を決定します。" },
  { step: 4, title: "施術", desc: "衛生管理を徹底し、丁寧に施術を行います。" },
  { step: 5, title: "アフターケア", desc: "術後の説明とフォローを行います。ご安心ください。" },
];

export default function ArtmakeLanding() {
  return (
    <div>
      {/* 1. Hero */}
      <section className="section-bleed relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f5f5f0] via-[#fdfbf8] to-[#ebe6df]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Sparkles className="h-40 w-40 text-[#d4af37]/25 md:h-48 md:w-48" strokeWidth={0.8} aria-hidden />
        </div>
        <RevealOnScroll className="section-inner relative z-10 flex w-full flex-col items-center">
          <p className="mb-6 font-heading text-[10px] tracking-[0.4em] text-[#d4af37] md:text-xs">
            ART MAKE
          </p>
          <h1
            className="font-japanese text-3xl font-light leading-[1.6] tracking-wider text-[#1a1a1a] md:text-5xl md:leading-[1.5]"
            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
          >
            24時間、黄金比の美しさを。
          </h1>
          <p className="mx-auto mt-10 max-w-xl text-left text-sm font-light leading-relaxed text-gray-600 md:text-base">
            色素で描く、あなただけの輪郭。
            <br />
            朝のメイクに頼らない、すっぴんの自信へ。
          </p>
        </RevealOnScroll>
      </section>

      {/* 2. Intro */}
      <section className="section-bleed border-t border-[#e8e4df] bg-white py-24 md:py-32">
        <div className="section-inner !max-w-5xl w-full">
          <RevealOnScroll>
            <p
              className="font-japanese text-center text-2xl font-light leading-relaxed tracking-wide text-[#1a1a1a] md:text-3xl md:leading-relaxed"
              style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
            >
              朝の15分を、
              <br />
              自分への投資に変える。
            </p>
            <p className="mx-auto mt-10 max-w-3xl text-left text-sm font-light leading-loose text-gray-600 md:text-base">
              アートメイクは、皮膚の浅い層に色素を入れる医療メイクです。
              <br />
              汗や水に強く、24時間美しい状態をキープ。毎朝の時短と、すっぴんの自信を同時に叶えます。
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* 3. USP */}
      <section className="section-bleed bg-[#fdfbf8] py-24 md:py-32">
        <div className="section-inner !max-w-5xl w-full">
          <RevealOnScroll>
            <p className="mb-4 text-center font-heading text-[10px] tracking-[0.35em] text-[#d4af37] md:text-xs">
              COMMITMENT
            </p>
            <h2
              className="mb-16 text-center font-japanese text-3xl font-light tracking-wide text-[#1a1a1a] md:text-4xl"
              style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
            >
              3つのこだわり
            </h2>
            <div className="grid w-full gap-8 md:grid-cols-3 md:gap-10">
              {[
                {
                  title: "医師管理のもとで",
                  desc: "医療機関として、施術の安全性と適応を丁寧に確認します。",
                },
                {
                  title: "安全性・衛生管理",
                  desc: "ディスポーザブル器具の使用など、感染対策を徹底しています。",
                },
                {
                  title: "デザイン性",
                  desc: "骨格・肌色・ライフスタイルに合わせ、自然な仕上がりを追求します。",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="border border-[#e8e4df] bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
                >
                  <h3
                    className="mb-4 text-center font-japanese text-lg text-[#1a1a1a] md:text-xl"
                    style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="mx-auto max-w-sm text-left text-sm font-light leading-relaxed text-gray-600">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 4. Technique */}
      <section className="section-bleed border-t border-[#e8e4df] bg-white py-24 md:py-32">
        <div className="section-inner !max-w-5xl w-full">
          <RevealOnScroll>
            <p className="mb-4 text-center font-heading text-[10px] tracking-[0.35em] text-[#d4af37] md:text-xs">
              TECHNIQUE
            </p>
            <h2
              className="mb-16 text-center font-japanese text-3xl font-light tracking-wide text-[#1a1a1a] md:text-4xl"
              style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
            >
              技法の違い
            </h2>
            <div className="grid w-full gap-8 md:grid-cols-3 md:gap-10">
              {[
                {
                  title: "パウダー",
                  desc: "眉のような柔らかい粉感の仕上がり。ふんわりした印象に。",
                },
                {
                  title: "毛並み",
                  desc: "一本一本の毛流れを描く技法。自然な立体感を重視します。",
                },
                {
                  title: "コンビネーション",
                  desc: "パウダーと毛並みを組み合わせ、バランスの取れた眉に。",
                },
              ].map((item) => (
                <div key={item.title} className="border border-[#e8e4df] bg-[#fdfbf8] p-8">
                  <h3
                    className="mb-4 text-center font-japanese text-lg text-[#1a1a1a] md:text-xl"
                    style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="mx-auto max-w-sm text-left text-sm font-light leading-relaxed text-gray-600">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 5. Cases */}
      <section id="cases" className="section-bleed bg-[#fdfbf8] py-24 md:py-32">
        <div className="section-inner !max-w-5xl w-full">
          <RevealOnScroll>
            <p className="mb-4 text-center font-heading text-[10px] tracking-[0.35em] text-[#d4af37] md:text-xs">
              CASES
            </p>
            <h2
              className="mb-16 text-center font-japanese text-3xl font-light tracking-wide text-[#1a1a1a] md:text-4xl"
              style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
            >
              Before / After
            </h2>
            <div className="space-y-12 md:space-y-16">
              <div>
                <p className="mb-4 text-center font-heading text-xs tracking-widest text-gray-500">
                  CASE 01
                </p>
                <div className="grid w-full gap-4 md:grid-cols-2 md:gap-8">
                  <div>
                    <p className="mb-2 text-center font-heading text-[10px] tracking-[0.3em] text-[#d4af37]">
                      BEFORE
                    </p>
                    <ImagePlaceholder icon={Gem} label="Before イメージ" aspect="aspect-[4/3]" />
                  </div>
                  <div>
                    <p className="mb-2 text-center font-heading text-[10px] tracking-[0.3em] text-[#d4af37]">
                      AFTER
                    </p>
                    <ImagePlaceholder icon={Sparkles} label="After イメージ" aspect="aspect-[4/3]" />
                  </div>
                </div>
              </div>
              <div>
                <p className="mb-4 text-center font-heading text-xs tracking-widest text-gray-500">
                  CASE 02
                </p>
                <div className="grid w-full gap-4 md:grid-cols-2 md:gap-8">
                  <div>
                    <p className="mb-2 text-center font-heading text-[10px] tracking-[0.3em] text-[#d4af37]">
                      BEFORE
                    </p>
                    <ImagePlaceholder icon={Gem} label="Before イメージ" aspect="aspect-[4/3]" />
                  </div>
                  <div>
                    <p className="mb-2 text-center font-heading text-[10px] tracking-[0.3em] text-[#d4af37]">
                      AFTER
                    </p>
                    <ImagePlaceholder icon={Heart} label="After イメージ" aspect="aspect-[4/3]" />
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 6. Artist */}
      <section id="artist" className="section-bleed border-t border-[#e8e4df] bg-white py-24 md:py-32">
        <div className="section-inner !max-w-5xl w-full">
          <RevealOnScroll>
            <p className="mb-4 text-center font-heading text-[10px] tracking-[0.35em] text-[#d4af37] md:text-xs">
              ARTIST
            </p>
            <h2
              className="mb-16 text-center font-japanese text-3xl font-light tracking-wide text-[#1a1a1a] md:text-4xl"
              style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
            >
              アーティスト
            </h2>
            <div className="space-y-24 md:space-y-32">
              {artists.map((artist, index) => (
                <div
                  key={artist.name}
                  className="grid w-full gap-12 md:grid-cols-2 md:items-center md:gap-16 md-grid-left"
                >
                  <div className={index % 2 === 1 ? "md:order-2" : ""}>
                    <ImagePlaceholder icon={Sparkles} label={`${artist.name} ポートレート`} />
                  </div>
                  <div
                    className={`mx-auto max-w-xl text-left md:mx-0 ${index % 2 === 1 ? "md:order-1" : ""}`}
                  >
                    <span className="block text-center font-heading text-[10px] tracking-[0.35em] text-[#d4af37] md:text-left md:text-xs">
                      {artist.role}
                    </span>
                    <div className="mt-4 flex flex-wrap items-center justify-center gap-2 md:justify-start">
                      <h3
                        className="text-center font-japanese text-2xl font-light text-[#1a1a1a] md:text-left md:text-3xl"
                        style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                      >
                        {artist.name}
                      </h3>
                      <a
                        href={artist.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${artist.name}のInstagramプロフィールを新しいタブで開く`}
                        className="inline-flex shrink-0 items-center justify-center rounded-full p-2 text-gray-500 transition-colors duration-300 hover:text-[#d4af37] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4af37]"
                      >
                        <Instagram className="h-5 w-5 md:h-6 md:w-6" strokeWidth={1.75} aria-hidden />
                      </a>
                    </div>
                    <p className="mt-2 text-center text-xs font-light text-gray-500 md:text-left">
                      {artist.speciality}
                    </p>
                    <p className="mt-6 text-sm font-light leading-loose text-gray-600 md:text-base">
                      {artist.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 7. Flow */}
      <section id="flow" className="section-bleed bg-[#fdfbf8] py-24 md:py-32">
        <div className="section-inner !max-w-5xl w-full">
          <RevealOnScroll>
            <p className="mb-4 text-center font-heading text-[10px] tracking-[0.35em] text-[#d4af37] md:text-xs">
              FLOW
            </p>
            <h2
              className="mb-16 text-center font-japanese text-3xl font-light tracking-wide text-[#1a1a1a] md:text-4xl"
              style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
            >
              施術の流れ
            </h2>
            <div className="mx-auto max-w-2xl">
              {flowSteps.map((s, i) => (
                <div key={s.step} className="flex !justify-start gap-5">
                  <div className="flex w-10 shrink-0 flex-col items-center">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d4af37]/50 bg-[#fdfbf8] font-heading text-xs tracking-widest text-[#1a1a1a]">
                      {s.step}
                    </span>
                    {i < flowSteps.length - 1 ? (
                      <div className="mt-2 min-h-[3.5rem] w-px bg-[#d4af37]/40" aria-hidden />
                    ) : null}
                  </div>
                  <div className={`min-w-0 flex-1 ${i < flowSteps.length - 1 ? "pb-10" : ""}`}>
                    <h3
                      className="text-center font-japanese text-lg text-[#1a1a1a] md:text-left md:text-xl"
                      style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                    >
                      {s.title}
                    </h3>
                    <p className="mx-auto mt-2 max-w-md text-left text-sm font-light leading-relaxed text-gray-600 md:mx-0">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 8. Safety */}
      <section className="section-bleed border-t border-[#e8e4df] bg-white py-24 md:py-32">
        <div className="section-inner !max-w-5xl w-full">
          <RevealOnScroll>
            <p className="mb-4 text-center font-heading text-[10px] tracking-[0.35em] text-[#d4af37] md:text-xs">
              SAFETY
            </p>
            <h2
              className="mb-16 text-center font-japanese text-3xl font-light tracking-wide text-[#1a1a1a] md:text-4xl"
              style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
            >
              衛生管理
            </h2>
            <div className="grid w-full gap-8 sm:grid-cols-2 md:grid-cols-4 gap-y-10">
              {[
                { icon: Shield, title: "感染対策", desc: "施術環境の清潔保持と標準予防。" },
                { icon: Droplets, title: "ディスポーザブル", desc: "可能な範囲で使い捨て器具を使用。" },
                { icon: Syringe, title: "器具管理", desc: "滅菌・保管を徹底した運用。" },
                { icon: Heart, title: "丁寧な説明", desc: "リスクや術後ケアをわかりやすくご案内。" },
              ].map((item) => (
                <div key={item.title} className="text-center md:text-left">
                  <item.icon className="mx-auto mb-4 h-8 w-8 text-[#d4af37] md:mx-0" strokeWidth={1.25} aria-hidden />
                  <h3
                    className="text-center font-japanese text-base text-[#1a1a1a]"
                    style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="mx-auto mt-2 max-w-sm text-left text-xs font-light leading-relaxed text-gray-600 md:mx-0 md:text-sm">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 9. Price */}
      <section id="price" className="section-bleed bg-[#fdfbf8] py-24 md:py-32">
        <div className="section-inner !max-w-5xl w-full">
          <RevealOnScroll>
            <p className="mb-4 text-center font-heading text-[10px] tracking-[0.35em] text-[#d4af37] md:text-xs">
              PRICE
            </p>
            <h2
              className="mb-12 text-center font-japanese text-3xl font-light tracking-wide text-[#1a1a1a] md:text-4xl"
              style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
            >
              料金（税込表記）
            </h2>
            <div className="mx-auto max-w-3xl overflow-x-auto text-left">
              <table className="w-full min-w-[320px] text-left text-sm">
                <tbody className="divide-y divide-[#e8e4df]">
                  {[
                    { menu: "眉アートメイク", price: "¥66,000〜", note: "毛並み・パウダー・コンビネーション" },
                    { menu: "リップアートメイク", price: "¥77,000〜", note: "ナチュラル・フルリップ" },
                    { menu: "アイラインアートメイク", price: "¥55,000〜", note: "ナチュラルライン・テールあり" },
                    { menu: "ヘアラインアートメイク", price: "¥88,000〜", note: "M字カバー・生え際" },
                  ].map((row) => (
                    <tr key={row.menu} className="align-top">
                      <td className="py-5 pr-4 font-japanese text-[#1a1a1a] md:text-base" style={{ fontFamily: "var(--font-shippori-mincho), serif" }}>
                        {row.menu}
                      </td>
                      <td className="whitespace-nowrap py-5 font-heading text-lg font-semibold tracking-wide text-[#1a1a1a] md:text-xl">
                        {row.price}
                      </td>
                      <td className="hidden py-5 pl-4 text-xs font-light text-gray-500 md:table-cell">
                        {row.note}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-center text-xs font-light text-gray-500">
              ※ 詳細は
              <Link href="/price" className="text-[#d4af37] underline underline-offset-4 hover:text-[#1a1a1a]">
                料金表
              </Link>
              をご確認ください。
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* 10. FAQ */}
      <section id="faq" className="section-bleed border-t border-[#e8e4df] bg-white py-24 md:py-32">
        <div className="section-inner !max-w-5xl w-full">
          <RevealOnScroll>
            <p className="mb-4 text-center font-heading text-[10px] tracking-[0.35em] text-[#d4af37] md:text-xs">
              FAQ
            </p>
            <h2
              className="mb-12 text-center font-japanese text-3xl font-light tracking-wide text-[#1a1a1a] md:text-4xl"
              style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
            >
              よくあるご質問
            </h2>
            <div className="mx-auto max-w-3xl text-left">
              <FaqAccordion items={faqItems} />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 11. Access */}
      <section id="access" className="section-bleed bg-[#fdfbf8] py-24 md:py-32">
        <div className="section-inner !max-w-5xl w-full">
          <RevealOnScroll>
            <p className="mb-4 text-center font-heading text-[10px] tracking-[0.35em] text-[#d4af37] md:text-xs">
              ACCESS
            </p>
            <h2
              className="mb-12 text-center font-japanese text-3xl font-light tracking-wide text-[#1a1a1a] md:text-4xl"
              style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
            >
              アクセス
            </h2>
            <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-2 md:gap-16 md-grid-left">
              <div className="space-y-8 text-left">
                <div className="flex gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#d4af37]" aria-hidden />
                  <div>
                    <p className="font-heading text-[10px] tracking-[0.25em] text-[#d4af37]">ADDRESS</p>
                    <p className="mt-1 text-sm font-light leading-relaxed text-gray-700">
                      〒370-0005
                      <br />
                      群馬県高崎市浜尻町２０９−５
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-[#d4af37]" aria-hidden />
                  <div>
                    <p className="font-heading text-[10px] tracking-[0.25em] text-[#d4af37]">HOURS</p>
                    <p className="mt-1 text-sm font-light leading-relaxed text-gray-700">
                      9:00〜21:00（不定休）
                      <br />
                      完全予約制
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#d4af37]" aria-hidden />
                  <div>
                    <p className="font-heading text-[10px] tracking-[0.25em] text-[#d4af37]">TEL</p>
                    <a href="tel:027-395-0443" className="mt-1 block text-lg font-heading text-[#1a1a1a] hover:text-[#d4af37]">
                      027-395-0443
                    </a>
                  </div>
                </div>
              </div>
              <div className="aspect-[4/3] min-h-[220px] overflow-hidden rounded-sm border border-[#e8e4df] bg-[#f5f5f0]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3207.8471889687447!2d139.00551831531514!3d36.32485798005356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601ef3144c7e9e8b%3A0x1234567890abcdef!2z44CSMzcwLTAwMDUg576k6aas55yM6auY5bSO5biC5rWc5bC777yS77yQ77yZ4oiS77yV!5e0!3m2!1sja!2sjp!4v1234567890123!5m2!1sja!2sjp"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "220px" }}
                  allowFullScreen
                  loading="lazy"
                  title="LOCO CLINIC 地図"
                  className="grayscale hover:grayscale-0"
                />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 12. CTA */}
      <section
        id="cta"
        className="section-bleed border-t border-[#e8e4df] bg-gradient-to-br from-[#fdfbf8] via-[#f9f0e0]/40 to-[#fdfbf8] py-24 md:py-32"
      >
        <div className="section-inner !max-w-5xl w-full">
          <RevealOnScroll>
            <h2
              className="text-center font-japanese text-2xl font-light leading-relaxed tracking-wide text-[#1a1a1a] md:text-4xl"
              style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
            >
              ご予約・ご相談
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-left text-sm font-light leading-relaxed text-gray-600">
              カウンセリングにて、あなたに合ったデザインをご提案します。{CONSULTATION_FEE_SENTENCE}
            </p>
            <div className="mx-auto mt-12 flex max-w-lg flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
              <a
                href={LINE_ADD_FRIEND_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-[#1a1a1a] bg-[#1a1a1a] px-10 py-5 font-heading text-sm tracking-[0.2em] text-white transition-colors hover:border-[#d4af37] hover:bg-[#d4af37]"
              >
                LINE で予約
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-[#1a1a1a] bg-white px-10 py-5 font-heading text-sm tracking-[0.2em] text-[#1a1a1a] transition-colors hover:border-[#d4af37] hover:text-[#d4af37]"
              >
                Web 予約
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
