"use client";

import Link from "next/link";
import { useState } from "react";
import Header from "../components/Header";

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
    <div className="min-h-screen bg-[#fdfbf8]">
      <Header />

      {/* ヒーローセクション */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-[#ffecd1] via-[#f5ebe0] to-white">
        <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-heading text-gray-800 mb-6 leading-tight tracking-wide">
            よくある質問
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
            お客様からよくいただくご質問をまとめました。<br />
            その他ご不明点がございましたら、お気軽にお問い合わせください。
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-white">
        <div className="w-full max-w-4xl mx-auto px-5 sm:px-8 space-y-16">
          {faqs.map((faqCategory, categoryIndex) => (
            <div key={categoryIndex}>
              <h2 className="text-3xl font-bold font-heading text-gray-800 mb-8 pb-4 border-b-2 border-[#d4af37]">
                {faqCategory.category}
              </h2>
              <div className="space-y-4">
                {faqCategory.items.map((faq, faqIndex) => (
                  <div
                    key={faqIndex}
                    className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition border border-[#d4af37]/10"
                  >
                    <button
                      onClick={() => toggleFAQ(faqCategory.category, faqIndex)}
                      className="w-full text-left p-6 md:p-8 flex items-start justify-between gap-4 hover:bg-[#fdfbf8] transition"
                    >
                      <div className="flex items-start gap-4 flex-1">
                        <span className="w-10 h-10 bg-[#d4af37] text-white rounded-full flex items-center justify-center font-bold font-heading flex-shrink-0 text-sm">
                          Q
                        </span>
                        <span className="text-lg font-bold text-gray-800 pt-1.5">{faq.question}</span>
                      </div>
                      <span
                        className={`text-2xl text-[#d4af37] transform transition-transform flex-shrink-0 ${
                          openIndex[faqCategory.category] === faqIndex ? "rotate-180" : ""
                        }`}
                      >
                        ▼
                      </span>
                    </button>
                    {openIndex[faqCategory.category] === faqIndex && (
                      <div className="px-6 md:px-8 pb-6 md:pb-8 pl-[88px] md:pl-[104px]">
                        <div className="flex items-start gap-4">
                          <span className="w-10 h-10 bg-[#c19b2f] text-white rounded-full flex items-center justify-center font-bold font-heading flex-shrink-0 text-sm">
                            A
                          </span>
                          <div className="text-gray-700 leading-relaxed pt-1.5">
                            {faq.answer}
                            {faq.hasLink && (
                              <Link
                                href="/cancel-policy"
                                className="block mt-2 text-[#d4af37] font-semibold hover:underline"
                              >
                                キャンセルポリシーを見る →
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#f5ebe0]">
        <div className="w-full max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            その他ご不明点がございましたら
          </h2>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            お気軽にお問い合わせください。<br />
            専門スタッフが丁寧にお答えいたします。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-12 py-4 bg-[#d4af37] text-white rounded-full text-base font-semibold hover:bg-[#c19b2f] transition shadow-lg"
            >
              お問い合わせ
            </Link>
            <a
              href="tel:027-395-0443"
              className="w-full sm:w-auto px-12 py-4 bg-white text-[#d4af37] border-2 border-[#d4af37] rounded-full text-base font-semibold hover:bg-[#d4af37] hover:text-white transition"
            >
              電話で問い合わせる
            </a>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="w-full max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-[#d4af37] mb-4">LOCO CLINIC</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                あなたが選ぶ、理想のあなた。<br />
                LOCO CLINICで、新しい自分に出会いませんか。
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">メニュー</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/artmake" className="hover:text-[#d4af37] transition">アートメイク</Link></li>
                <li><Link href="/staff" className="hover:text-[#d4af37] transition">医師・スタッフ紹介</Link></li>
                <li><Link href="/price" className="hover:text-[#d4af37] transition">料金表</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">インフォメーション</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/faq" className="hover:text-[#d4af37] transition">よくある質問</Link></li>
                <li><Link href="/contact" className="hover:text-[#d4af37] transition">お問い合わせ</Link></li>
                <li><Link href="/cancel-policy" className="hover:text-[#d4af37] transition">キャンセルポリシー</Link></li>
                <li><Link href="/privacy-policy" className="hover:text-[#d4af37] transition">プライバシーポリシー</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2026 LOCO CLINIC. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
