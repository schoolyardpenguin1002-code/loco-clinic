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
  link?: { href: string; label: string };
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
        answer: "ご予約は公式LINEから承っております。ご不明な点やご相談も、公式LINEのトークからお気軽にお送りください。順番にお返事いたします。",
      },
      {
        question: "予約はいつから取れますか？",
        answer: "翌月分のご予約枠は、前月の25日前後に1ヶ月分まとめて公開しております。公式LINEでもご案内しますので、友だち登録してお待ちください。",
      },
      {
        question: "キャンセル料はかかりますか？",
        answer: "キャンセルポリシーをご参照ください。",
        link: { href: "/cancel-policy", label: "キャンセルポリシーを見る →" },
      },
      {
        question: "料金はどこを見れば分かりますか？",
        answer: "料金表ページに、すべてのメニューを税込価格で公開しています。カウンセリング後に追加費用が発生することはありません。",
        link: { href: "/price", label: "料金表を見る →" },
      },
      {
        question: "支払い方法は何がありますか？",
        answer: "現金、クレジットカード（VISA / MasterCard）、電子決済（PayPay、QuickPayなど）に対応しております。",
      },
      {
        question: "カウンセリング料はかかりますか？",
        answer: CONSULTATION_FEE_SENTENCE,
      },
    ],
  },
  {
    category: "アクセス・施設について",
    items: [
      {
        question: "駐車場はありますか？",
        answer: "はい、ございます。クリニックの前に無料駐車場が8台分ございますので、お車でも余裕を持ってお越しいただけます。",
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
    category: "糸リフトについて",
    items: [
      {
        question: "入れた糸はどうなりますか？",
        answer: "体内で少しずつ分解・吸収される素材です。糸そのものが無くなった後も、糸のまわりに生成されたコラーゲンによって、肌のハリが保たれます。",
      },
      {
        question: "メイクはいつからできますか？",
        answer: "挿入部位を避けていただければ、当日から可能です。ただし2週間ほどは、強く擦る洗顔やフェイスマッサージはお控えください。",
      },
      {
        question: "入浴・運動はいつからですか？",
        answer: "シャワーは当日から、洗髪は翌日から可能です。湯船も数日後からお入りいただけます。激しい運動・サウナは5日後ごろからを目安にしてください。",
      },
      {
        question: "ダウンタイムはどのくらいですか？",
        answer: "個人差があるため一概には言えませんが、実際に受けられた方からは「痛みがなかった」「ダウンタイムが本当に軽かった」と言っていただくことが多いです。腫れ・内出血・引きつれ感が出た場合も、多くは1〜2週間で落ち着きます。ただし当院では、カウンセリングであえてデメリットをしっかりご説明しています。「ダウンタイムが全くない」というつもりで受けることは、おすすめしません。",
      },
      {
        question: "何本くらい入れるものですか？",
        answer: "たるみの程度やご希望によって変わります。片側3〜5本から始める方が多いですが、まずカウンセリングでお顔を拝見し、必要な本数をご提案します。",
      },
      {
        question: "痛みはありますか？",
        answer: "局所麻酔を行ったうえで施術します。挿入時に引っぱられる感覚はありますが、強い痛みが続くことは通常ありません。",
      },
      {
        question: "顔に傷は残りますか？",
        answer: "生え際やもみあげの裏など、目立ちにくい位置から糸を挿入します。傷は針穴程度のため、術直後からほとんど気づかれないくらいです。",
      },
    ],
  },
  {
    category: "注入治療（ボトックス・ヒアルロン酸）について",
    items: [
      {
        question: "ボトックスとヒアルロン酸は何が違いますか？",
        answer: "ボトックスは筋肉の働きを和らげることで、表情ジワやエラの張りにアプローチします。ヒアルロン酸は足りないボリュームを補うことで、こけ・凹み・しわを整えます。お悩みによって適した治療が異なりますので、カウンセリングでご提案します。",
      },
      {
        question: "ボトックスの効果はどのくらい持ちますか？",
        answer: "個人差はありますが、3〜4ヶ月程度が目安です。繰り返し打つことで効果が安定してくる方も多いです。",
      },
      {
        question: "ヒアルロン酸はどのくらい持ちますか？",
        answer: "注入する部位や製剤によりますが、半年〜1年程度が目安です。体内で少しずつ吸収される安全性の高い製剤を使用しています。",
      },
      {
        question: "注入した日から普段どおり過ごせますか？",
        answer: "はい、当日からほぼ普段どおりお過ごしいただけます。飲酒・激しい運動・サウナ・注入部位への強いマッサージは、当日はお控えください。",
      },
      {
        question: "不自然な仕上がりにならないか心配です",
        answer: "当院では少量から様子を見ながら調整し、やりすぎない自然な仕上がりを大切にしています。不要と判断した場合は「不要です」とお伝えする方針です。",
      },
      {
        question: "注入治療のリスク・副作用はありますか？",
        answer: "内出血・腫れ・左右差などが生じることがあります。多くは1〜2週間で落ち着きます。まれに重い合併症の報告もあるため、当院では医師が解剖を熟知したうえで慎重に注入し、術後の経過も拝見します。",
      },
    ],
  },
  {
    category: "肌育・美肌治療について",
    items: [
      {
        question: "肌育治療とは何ですか？",
        answer: "ヒアルロン酸やアミノ酸などの美容成分をお肌の浅い層に注入し、肌そのものの水分量・ハリを育てていく治療の総称です。しわを埋めるのではなく、肌質を底上げすることが目的です。",
      },
      {
        question: "水光注射と肌育注射は違うものですか？",
        answer: "大きくは同じ「肌育」の仲間で、使う製剤と入れ方が異なります。お肌の状態とご希望に合わせて、カウンセリングで適したものをご提案します。",
      },
      {
        question: "何回くらい受けると効果を感じますか？",
        answer: "1回でも潤い・ツヤの変化を感じる方が多いですが、肌質の変化を目指すなら2〜4週間隔で3回程度を1クールとするのが目安です。効果には個人差があります。",
      },
      {
        question: "肌育治療にダウンタイムはありますか？",
        answer: "針を使うため、赤み・ぷつぷつとした膨らみ・内出血が出ることがありますが、多くは数日で落ち着きます。メイクは翌日から可能です。",
      },
      {
        question: "ピーリングやハイドラジェントルとは何が違いますか？",
        answer: "ピーリング・ハイドラジェントルは、古い角質や毛穴の汚れに外側からアプローチする治療です。内側から潤いを足す肌育治療と組み合わせると、相乗効果が期待できます。",
      },
      {
        question: "どんな人に向いていますか？",
        answer: "乾燥・ハリ不足・毛穴・化粧ノリの悪さが気になる方に向いています。糸リフト後の肌質維持としてもおすすめです。",
      },
    ],
  },
  {
    category: "施術について",
    items: [
      {
        question: "カウンセリング当日に施術はできますか？",
        answer: "はい、可能です。実際、ほとんどの方がカウンセリング当日にそのまま施術を受けられています。ただし、施術内容によっては別日をご案内する場合もございます。ご希望の方は予約時にお伝えください。",
      },
      {
        question: "施術後、すぐにメイクはできますか？",
        answer: "施術内容によりますが、当院の施術はいずれもお肌に大きなダメージを与えるものではないため、おおむね翌日にはメイクしていただけることが多いです。詳しくは施術ごとにご案内いたします。",
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
          <BotanicalArt className="pointer-events-none absolute -left-14 -top-6 h-[130%] text-[#6f4e2f]" />
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
                              <span className="font-heading shrink-0 text-[17px] text-[#6f4e2f]">A</span>
                              <div className="text-[15.5px] font-light leading-[2.1]">
                                {faq.answer}
                                {faq.link && (
                                  <Link
                                    href={faq.link.href}
                                    className="mt-3 block text-[#b9a05a] underline decoration-[#d2b388] underline-offset-4 hover:text-[#8a7a55]"
                                  >
                                    {faq.link.label}
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
