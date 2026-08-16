"use client";

import Link from "next/link";
import { useState } from "react";
import { CONSULTATION_FEE_SENTENCE } from "@/lib/consultation-fee";
import BotanicalArt from "../components/site/BotanicalArt";
import SiteHeader from "../components/site/SiteHeader";
import SiteFooter from "../components/site/SiteFooter";
import FixedCta from "../components/site/FixedCta";

type FAQItem = {
  question: string;
  answer: string;
  hasLink?: boolean;
};

type FAQCategory = {
  category: string;
  items: FAQItem[];
};

const faqs: FAQCategory[] = [
  {
    category: "予約・料金について",
    items: [
      {
        question: "予約方法を教えてください",
        answer: "公式LINEから御予約いただけます。難しい場合はInstagramのメッセージや公式LINEのチャット、お電話でも承ります。",
      },
      {
        question: "キャンセル料はかかりますか？",
        answer: "キャンセルポリシーをご参照ください。",
        hasLink: true,
      },
      {
        question: "支払い方法は何がありますか？",
        answer: "現金、クレジットカード（VISA / MasterCard）、電子決済（PayPay、QuickPayなど）に対応しております。",
      },
      {
        question: "カウンセリング料はかかりますか？",
        answer: `はい。${CONSULTATION_FEE_SENTENCE}`,
      },
    ],
  },
  {
    category: "アクセス・施設について",
    items: [
      {
        question: "駐車場はありますか？",
        answer: "はい、ございます。",
      },
      {
        question: "アクセス方法を教えてください",
        answer: "お車ですと高崎環状線沿いです。近くには群馬銀行様、ヤマダ電機様、ユニクロ様、GU様、浜尻小学校様、浜尻南児童公園がございます。詳細はGoogle マップをご参照くださいませ。電車ですと高崎問屋町駅から徒歩9分程度です。",
      },
    ],
  },
  {
    category: "アートメイクについて",
    items: [
      {
        question: "アートメイクは痛いですか？",
        answer: "施術前に麻酔クリームを使用しますので、痛みは最小限に抑えられます。個人差はありますが、多くの方が「思ったより痛くなかった」とおっしゃっています。",
      },
      {
        question: "アートメイクはどのくらい持ちますか？",
        answer: "個人差はありますが、1〜3年程度持続します。肌質や生活習慣によって持続期間は変わります。色が薄くなってきたら、リタッチをおすすめしています。",
      },
      {
        question: "アートメイクは1回で完成しますか？",
        answer: "基本的に2回の施術で完成します。1回目で全体のデザインと色を入れ、2回目で色の定着を確認しながら調整します。",
      },
      {
        question: "アートメイク後のダウンタイムはどのくらいですか？",
        answer: "施術直後は少し赤みが出ますが、数時間〜1日程度で落ち着きます。1週間ほどは色が濃く見えますが、徐々に自然な色味に落ち着いていきます。",
      },
    ],
  },
  {
    category: "施術について",
    items: [
      {
        question: "カウンセリング当日に施術はできますか？",
        answer: "はい、可能です。ただし、施術内容によっては別日をご案内する場合もございます。ご希望の方は予約時にお伝えください。",
      },
      {
        question: "施術後、すぐにメイクはできますか？",
        answer: "施術部位以外は当日からメイク可能です。施術部位は1週間ほどメイクを控えていただくことをおすすめしています。",
      },
      {
        question: "未成年でも施術は受けられますか？",
        answer: "18歳以上の方であれば、保護者の同意書があれば施術可能です。18歳未満の方は保護者の同伴が必要です。",
      },
      {
        question: "男性でも施術は受けられますか？",
        answer: "もちろん可能です。近年、男性の方のご利用も増えています。お気軽にご相談ください。",
      },
    ],
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<{ [key: string]: number | null }>({});

  const toggleFAQ = (category: string, index: number) => {
    setOpenIndex((prev) => ({
      ...prev,
      [category]: prev[category] === index ? null : index,
    }));
  };

  return (
    <div className="price-page min-h-screen w-full bg-[#fffbf6] text-[#70645c]">
      <SiteHeader />
      <main className="w-full">
        {/* ページヒーロー */}
        <section className="relative overflow-hidden bg-white px-6 text-center" style={{ paddingTop: "160px", paddingBottom: "100px" }}>
          <BotanicalArt className="pointer-events-none absolute -left-14 -top-6 h-[130%] text-[#2d4c44]" />
          <BotanicalArt className="pointer-events-none absolute -right-20 top-0 h-[120%] scale-x-[-1] text-[#b9a05a]" />
          <h1 className="sec-en">FAQ</h1>
          <p className="sec-ja">よくある質問</p>
          <p className="mx-auto mt-12 max-w-xl text-[16px] font-light leading-[2.1]">
            お客様からよくいただくご質問をまとめました。
            <br />
            その他ご不明点は、LINEからお気軽にどうぞ。
          </p>
        </section>

        {/* FAQ本体 */}
        <section className="px-6" style={{ paddingTop: "100px", paddingBottom: "140px" }}>
          <div className="mx-auto w-full max-w-3xl space-y-24">
            {faqs.map((faqCategory) => (
              <div key={faqCategory.category}>
                <h2
                  className="mb-12 text-center text-[clamp(20px,2.8vw,26px)] font-light tracking-[0.14em]"
                  style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                >
                  {faqCategory.category}
                </h2>
                <div className="space-y-5">
                  {faqCategory.items.map((faq, faqIndex) => {
                    const isOpen = openIndex[faqCategory.category] === faqIndex;
                    return (
                      <div
                        key={faq.question}
                        className={`overflow-hidden rounded-[22px] border bg-white transition-all duration-500 ${
                          isOpen ? "border-[#d2b388] shadow-md" : "border-[#e9e6e6]"
                        }`}
                      >
                        <button
                          onClick={() => toggleFAQ(faqCategory.category, faqIndex)}
                          className="flex w-full items-center justify-between gap-5 px-7 py-6 text-left transition hover:bg-[#fffbf6] sm:px-10"
                        >
                          <span className="flex items-baseline gap-5">
                            <span className="font-heading shrink-0 text-[17px] text-[#b9a05a]">Q</span>
                            <span className="text-[16px] leading-[1.9]">{faq.question}</span>
                          </span>
                          <span
                            className={`shrink-0 text-xl font-light text-[#b9a05a] transition-transform duration-500 ${
                              isOpen ? "rotate-45" : ""
                            }`}
                          >
                            ＋
                          </span>
                        </button>
                        {isOpen && (
                          <div className="border-t border-[#f0ebe2] px-7 py-6 sm:px-10">
                            <div className="flex items-baseline gap-5">
                              <span className="font-heading shrink-0 text-[17px] text-[#2d4c44]">A</span>
                              <div className="text-[15.5px] font-light leading-[2.1]">
                                {faq.answer}
                                {faq.hasLink && (
                                  <Link
                                    href="/cancel-policy"
                                    className="mt-3 block text-[#b9a05a] underline decoration-[#d2b388] underline-offset-4 hover:text-[#8a7a55]"
                                  >
                                    キャンセルポリシーを見る →
                                  </Link>
                                )}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
      <FixedCta />
    </div>
  );
}
