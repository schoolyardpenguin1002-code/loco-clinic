"use client";

import Link from "next/link";
import { useState } from "react";
import Header from "../components/Header";
import SlowReveal from "../components/SlowReveal";
import SiteFooter from "@/app/components/site/SiteFooter";
import FixedCta from "@/app/components/site/FixedCta";

const THREADS = [
  { cls: "class B", name: "PDOコグ", price: "9,000円", material: "PDO", hold: "約6ヶ月〜1年",
    lift: "しっかり", feel: "硬めの糸質でしっかり支える",
    for: "はじめての方。まず試してみたい方に。" },
  { cls: "class A", name: "PDOポッシュコグ", price: "13,000円", material: "PDO", hold: "約6ヶ月〜1年",
    lift: "しっかり", feel: "引き上げ力を高めたコグ形状",
    for: "たるみをはっきり引き上げたい方に。" },
  { cls: "class S", name: "PCL", price: "18,000円", material: "PCL", hold: "約2〜3年",
    lift: "しっかり", feel: "柔軟性が高く、表情になじむ",
    for: "長く持たせたい方。引きつれ感が心配な方に。美肌効果・ダウンタイムを減らしたい方にも。" },
  { cls: "class SS", name: "ヴィーナスリフト", price: "25,000円", material: "PCL", hold: "約2〜3年",
    lift: "最も強い", feel: "しなやかさと引き上げ力を両立",
    for: "一度でしっかり、長く。妥協したくない方に。" },
];

const FAQS = [
  { q: "入れた糸はどうなりますか。", a: "体内で少しずつ分解・吸収される素材です。糸そのものが無くなった後も、糸のまわりに生成されたコラーゲンによって、肌のハリが保たれます。" },
  { q: "メイクはいつからできますか。", a: "挿入部位を避けていただければ、当日から可能です。ただし2週間ほどは、強く擦る洗顔やフェイスマッサージはお控えください。" },
  { q: "入浴・運動はいつからですか。", a: "シャワーは当日から、洗髪は翌日から可能です。湯船も数日後からお入りいただけます。激しい運動・サウナは5日後ごろからを目安にしてください。" },
  { q: "ダウンタイムはどのくらいですか。", a: "個人差があるため一概には言えませんが、実際に受けられた方からは「痛みがなかった」「ダウンタイムが本当に軽かった」と言っていただくことが多いです。腫れ・内出血・引きつれ感が出た場合も、多くは1〜2週間で落ち着きます。ただし当院では、カウンセリングであえてデメリットをしっかりご説明しています。「ダウンタイムが全くない」というつもりで受けることは、おすすめしません。" },
  { q: "何本くらい入れるものですか。", a: "たるみの程度やご希望によって変わります。片側3〜5本から始める方が多いですが、まずカウンセリングでお顔を拝見し、必要な本数をご提案します。" },
  { q: "痛みはありますか。", a: "局所麻酔を行ったうえで施術します。挿入時に引っぱられる感覚はありますが、強い痛みが続くことは通常ありません。" },
  { q: "顔に傷は残りますか。", a: "生え際やもみあげの裏など、目立ちにくい位置から糸を挿入します。傷は針穴程度のため、術直後からほとんど気づかれないくらいです。" },
];

export default function ThreadLiftPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white text-[#2b2723] price-page">
      <Header />

      {/* ヒーロー：左テキスト×右写真の2カラム */}
      <section className="px-6" style={{ paddingTop: "148px", paddingBottom: "110px" }}>
        <div className="w-full max-w-5xl mx-auto px-5 sm:px-8 grid items-center gap-12 md:grid-cols-[1.1fr_1fr]">
          <SlowReveal direction="left" className="text-center md:text-left">
            <p className="text-[11px] tracking-[0.35em] text-[#b9a77e] mb-6">THREAD LIFT</p>
            <h1 className="font-serif tracking-[0.14em] font-light mb-8" style={{ lineHeight: 1.7 }}>
              糸リフト
            </h1>
            <p className="text-sm leading-loose text-[#6b635a]">
              引き上げるだけの施術ではありません。<br />
              糸のまわりにコラーゲンが育ち、肌そのものが変わっていきます。<br className="hidden sm:block" />
              <span className="inline-block mt-4">LOCO CLINICでは4種類の糸から、必要なものだけをお選びいただきます。</span>
            </p>
          </SlowReveal>
          <SlowReveal direction="right" delay={200} className="hidden md:block">
            <img
              src="/images/stock/thread-arrows.jpg"
              alt="糸リフトのイメージ"
              className="w-full rounded-[28px] object-cover shadow-sm"
              style={{ aspectRatio: "4 / 5", maxHeight: "440px" }}
            />
          </SlowReveal>
        </div>
      </section>

      {/* 選び方の考え方：全幅の写真帯に白文字 */}
      <section
        className="relative overflow-hidden px-6"
        style={{ paddingTop: "120px", paddingBottom: "120px" }}
      >
        <img
          src="/images/stock/stone-bamboo.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#33261b]/72" />
        <div className="relative w-full max-w-5xl mx-auto px-5 sm:px-8 md:grid md:grid-cols-[1fr_1fr] md:items-center">
          <SlowReveal direction="left" className="text-center md:text-left text-white">
            <p className="text-[11px] tracking-[0.35em] text-[#d2b388] mb-6">OUR POLICY</p>
            <h2 className="font-serif tracking-[0.12em] font-light mb-8 !text-white" style={{ lineHeight: 1.8, color: "#fff" }}>
              良い糸リフトを、<br />必要な方にだけ
            </h2>
          </SlowReveal>
          <SlowReveal direction="right" delay={200} className="text-center md:text-left">
            <p className="text-sm leading-loose text-white/90">
              当院の方針はシンプルです。良い糸リフト治療を提供すること。<br />
              そして、糸リフトが不要な方には「不要です」と正直にお伝えすること。<br className="hidden sm:block" />
              本数や高い糸をおすすめすることはせず、今のお顔を拝見して、必要な分だけをご提案します。
            </p>
          </SlowReveal>
        </div>
      </section>

      {/* なぜ糸リフト専門か：院長の言葉 */}
      <section className="px-6 bg-[#faf7f1]" style={{ paddingTop: "110px", paddingBottom: "110px" }}>
        <div className="w-full max-w-5xl mx-auto px-5 sm:px-8 grid items-center gap-12 md:grid-cols-[1fr_1.4fr]">
          <SlowReveal direction="left" className="mx-auto w-full max-w-[320px] md:max-w-none">
            <img
              src="/images/doctor.jpg"
              alt="LOCO CLINIC 院長"
              className="w-full rounded-[28px] object-cover shadow-sm"
              style={{ aspectRatio: "4 / 5" }}
            />
          </SlowReveal>
          <SlowReveal direction="right" delay={200}>
            <p className="text-[11px] tracking-[0.35em] text-[#b9a77e] mb-6">WHY THREAD LIFT</p>
            <h2 className="font-serif tracking-[0.12em] font-light mb-8" style={{ lineHeight: 1.8 }}>
              なぜ、糸リフトを専門に選んだのか
            </h2>
            <div className="text-sm leading-loose text-[#6b635a] space-y-5">
              <p>
                正直にお話しします。美容医療には「良いとされる治療」がたくさんあります。
                でも、そのすべてを「どれも良い治療ですよ」とおすすめすることは、僕にはできませんでした。
              </p>
              <p>
                糸リフトを専門に選んだ理由はシンプルです。体に本当に害が少ないこと。
                そして、いただいたお値段以上のものをお返しできる、数少ない治療だと思っているからです。
              </p>
              <p>
                この考えは、これからも変わりません。だからこそ当院は、糸リフトだけを深くやり続けます。
              </p>
              <p className="text-right text-xs tracking-[0.2em] text-[#8a8177] pt-2">LOCO CLINIC 院長　狩野遊太</p>
            </div>
          </SlowReveal>
        </div>
      </section>

      {/* 糸リフトの仕組み：3枚が左・下・右から時間差で入る */}
      <section className="px-6" style={{ paddingTop: "110px", paddingBottom: "130px" }}>
        <div className="w-full max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <SlowReveal>
            <p className="text-[11px] tracking-[0.35em] text-[#b9a77e] mb-5">MECHANISM</p>
            <h2 className="font-serif tracking-[0.12em] font-light" style={{ marginBottom: "40px" }}>糸リフトの仕組み</h2>
          </SlowReveal>
          <div className="grid sm:grid-cols-3 gap-8 text-left">
            <SlowReveal direction="left" delay={100}>
              <div className="border-t border-[#d8cfc0] pt-6">
                <p className="font-serif text-base mb-3 text-[#3a352e]">① 引き上げる</p>
                <p className="text-sm leading-loose text-[#6b635a]">
                  「コグ」と呼ばれる小さな突起のついた医療用の糸を皮下に挿入し、たるんだ組織を物理的に引き上げます。メスを使わないため、傷跡はほとんど残りません。
                </p>
              </div>
            </SlowReveal>
            <SlowReveal delay={250}>
              <div className="border-t border-[#d8cfc0] pt-6">
                <p className="font-serif text-base mb-3 text-[#3a352e]">② 肌の土台を育てる</p>
                <p className="text-sm leading-loose text-[#6b635a]">
                  挿入した糸の周囲では、体の反応としてコラーゲンの生成が促されます。引き上げ効果に加えて、ハリ・肌質の変化が期待できるのはこのためです。
                </p>
              </div>
            </SlowReveal>
            <SlowReveal direction="right" delay={400}>
              <div className="border-t border-[#d8cfc0] pt-6">
                <p className="font-serif text-base mb-3 text-[#3a352e]">③ 体内で溶けてなくなる</p>
                <p className="text-sm leading-loose text-[#6b635a]">
                  当院で使う糸（PDO・PLLA・PCL）はすべて吸収性で、時間をかけて体内で分解・吸収されます。糸が残り続ける心配はありません。素材によって吸収までの期間が異なり、これが「持続の違い」になります。
                </p>
              </div>
            </SlowReveal>
          </div>
          <p className="text-xs leading-relaxed text-[#9a917f]" style={{ marginTop: "40px" }}>
            ダウンタイムの目安：腫れ・むくみは数日〜2週間程度、引きつれ感は徐々になじみます。効果の程度・持続には個人差があります。
          </p>
        </div>
      </section>

      {/* 4種類の比較 */}
      <section className="px-6" style={{ paddingTop: "130px", paddingBottom: "40px" }}>
        <SlowReveal className="w-full max-w-5xl mx-auto px-5 sm:px-8 text-center" >
          <p className="text-[11px] tracking-[0.35em] text-[#b9a77e] mb-5">THREADS</p>
          <h2 className="font-serif tracking-[0.12em] font-light" style={{ marginBottom: "12px" }}>4種類の糸</h2>
          <p className="text-xs text-[#8a8177]" style={{ marginBottom: "48px" }}>価格は1本あたり・税込です。</p>
        </SlowReveal>
        <div className="w-full max-w-5xl mx-auto px-5 sm:px-8">
          {THREADS.map((t, i) => (
            <SlowReveal key={t.cls} direction={i % 2 === 0 ? "left" : "right"} delay={i * 120}>
              <div className="border-t border-[#e8e2d8]" style={{ paddingTop: "28px", paddingBottom: "28px" }}>
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2" style={{ marginBottom: "14px" }}>
                  <span className="text-[11px] tracking-[0.25em] text-[#b9a77e]">{t.cls}</span>
                  <span className="text-[17px] tracking-wide">{t.name}</span>
                  <span className="ml-auto text-[15px] tabular-nums text-[#6b635a]">{t.price}</span>
                </div>
                <div className="grid sm:grid-cols-3 gap-x-8 gap-y-3 text-xs text-[#8a8177]">
                  <p><span className="text-[#b9a77e] mr-2">素材</span>{t.material}</p>
                  <p><span className="text-[#b9a77e] mr-2">目安の持続</span>{t.hold}</p>
                  <p><span className="text-[#b9a77e] mr-2">引き上げ</span>{t.lift}</p>
                </div>
                <p className="text-xs leading-relaxed text-[#8a8177]" style={{ marginTop: "12px" }}>
                  {t.feel}　／　{t.for}
                </p>
              </div>
            </SlowReveal>
          ))}
          <p className="text-xs text-[#a89e91]" style={{ marginTop: "24px" }}>
            ※ 持続期間・効果の程度には個人差があります。
          </p>
          <div className="text-center" style={{ marginTop: "40px" }}>
            <Link
              href="/case"
              className="inline-block border border-[#b9a77e] px-10 py-4 text-[13.5px] tracking-[0.2em] text-[#8a7a4e] transition-all duration-500 hover:bg-[#b9a77e] hover:text-white"
            >
              症例写真を見る
            </Link>
          </div>
        </div>
      </section>

      {/* 併用の提案 */}
      <section className="px-6" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
        <SlowReveal className="w-full max-w-4xl mx-auto px-5 sm:px-8">
          <p className="text-[11px] tracking-[0.35em] text-[#b9a77e] text-center mb-5">WITH</p>
          <h2 className="font-serif tracking-[0.12em] font-light text-center" style={{ marginBottom: "40px" }}>
            あわせてご相談いただくもの
          </h2>
          <div className="grid sm:grid-cols-3 gap-10">
            {[
              { t: "ショッピングリフト", d: "引き上げた肌に、内側からのハリを。細い糸を面で入れていきます。", href: "/price#shopping" },
              { t: "エラボトックス", d: "咬筋の張りが目立つ方は、輪郭の印象が大きく変わります。", href: "/price#botox" },
              { t: "ヒアルロン酸", d: "こけ・凹みがある場合、引き上げだけでは整いきらないことがあります。", href: "/price#hyaluronic" },
            ].map((m) => (
              <Link key={m.t} href={m.href} className="group block border-t border-[#c9b98f]" style={{ paddingTop: "20px" }}>
                <p className="text-[15px] tracking-wide group-hover:text-[#b9a77e]" style={{ marginBottom: "10px", transition: "color .6s ease" }}>{m.t}</p>
                <p className="text-xs leading-relaxed text-[#8a8177]">{m.d}</p>
              </Link>
            ))}
          </div>
        </SlowReveal>
      </section>

      {/* 流れ */}
      <section className="px-6 bg-[#faf7f1]" style={{ paddingTop: "88px", paddingBottom: "88px" }}>
        <SlowReveal className="w-full max-w-3xl mx-auto px-5 sm:px-8">
          <p className="text-[11px] tracking-[0.35em] text-[#b9a77e] text-center mb-5">FLOW</p>
          <h2 className="font-serif tracking-[0.12em] font-light text-center" style={{ marginBottom: "44px" }}>当日の流れ</h2>
          <div className="space-y-0">
            {[
              ["カウンセリング", "お悩みと、どこまで変えたいかを伺います。お顔を拝見し、糸の種類と本数をご提案します。"],
              ["デザイン", "引き上げる方向と位置を決めます。ここで仕上がりが決まります。"],
              ["麻酔", "局所麻酔を行います。"],
              ["施術", "本数にもよりますが、20〜40分ほどです。"],
              ["ご帰宅", "当日からお帰りいただけます。注意点をお伝えします。"],
            ].map(([t, d], i) => (
              <div key={t} className="flex gap-6 border-t border-[#e8e2d8]" style={{ paddingTop: "22px", paddingBottom: "22px" }}>
                <span className="text-[11px] tabular-nums text-[#b9a77e] flex-shrink-0" style={{ paddingTop: "3px" }}>0{i + 1}</span>
                <div>
                  <p className="text-[15px] tracking-wide" style={{ marginBottom: "8px" }}>{t}</p>
                  <p className="text-xs leading-relaxed text-[#8a8177]">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </SlowReveal>
      </section>

      {/* リスク */}
      <section className="px-6" style={{ paddingTop: "88px", paddingBottom: "40px" }}>
        <SlowReveal className="w-full max-w-3xl mx-auto px-5 sm:px-8">
          <p className="text-[11px] tracking-[0.35em] text-[#b9a77e] text-center mb-5">RISK</p>
          <h2 className="font-serif tracking-[0.12em] font-light text-center" style={{ marginBottom: "32px" }}>
            リスク・副作用について
          </h2>
          <p className="text-xs leading-loose text-[#8a8177]">
            腫れ・内出血・痛み・引きつれ感が生じることがあります。多くは1〜2週間で軽快しますが、程度には個人差があります。
            まれに、感染・左右差・糸の露出・凹凸などが生じる場合があります。気になる症状があるときは、いつでもご相談ください。
            当院では施術後の経過も継続して拝見します。
          </p>
          <p className="text-xs leading-loose text-[#a89e91]" style={{ marginTop: "16px" }}>
            ※ 糸リフトは自由診療（保険適用外）です。効果には個人差があります。
          </p>
        </SlowReveal>
      </section>

      {/* Q&A */}
      <section className="px-6" style={{ paddingTop: "72px", paddingBottom: "96px" }}>
        <SlowReveal className="w-full max-w-3xl mx-auto px-5 sm:px-8">
          <p className="text-[11px] tracking-[0.35em] text-[#b9a77e] text-center mb-5">Q &amp; A</p>
          <h2 className="font-serif tracking-[0.12em] font-light text-center" style={{ marginBottom: "40px" }}>よくあるご質問</h2>
          <div>
            {FAQS.map((f, i) => (
              <div key={i} className="border-t border-[#e8e2d8]">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-baseline justify-between gap-6 text-left"
                  style={{ paddingTop: "20px", paddingBottom: "20px" }}
                >
                  <span className="text-[14px] leading-relaxed">{f.q}</span>
                  <span className="text-[#b9a77e] text-sm flex-shrink-0" style={{ transition: "transform .6s ease", transform: openFaq === i ? "rotate(45deg)" : "none" }}>＋</span>
                </button>
                {openFaq === i && (
                  <p className="text-xs leading-loose text-[#8a8177]" style={{ paddingBottom: "22px" }}>{f.a}</p>
                )}
              </div>
            ))}
          </div>
        </SlowReveal>
      </section>

      {/* CTA */}
      <section className="px-6 bg-[#faf7f1]" style={{ paddingTop: "96px", paddingBottom: "96px" }}>
        <SlowReveal className="w-full max-w-2xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="font-serif tracking-[0.12em] font-light" style={{ marginBottom: "24px", lineHeight: 1.8 }}>
            まずは、お顔を拝見させてください
          </h2>
          <p className="text-sm leading-loose text-[#6b635a]" style={{ marginBottom: "40px" }}>
            必要な糸と本数は、お一人おひとり違います。<br />
            無理におすすめすることはありません。
          </p>
          <div className="flex items-center justify-center">
            <Link href="/contact" className="w-full sm:w-auto px-12 py-4 border border-[#c9b98f] text-[#8a7a4e] text-sm tracking-[0.15em] hover:bg-[#c9b98f] hover:text-white" style={{ transition: "all .6s ease" }}>
              ご予約・お問い合わせ
            </Link>
          </div>
        </SlowReveal>
      </section>
      <SiteFooter />
      <FixedCta />

    </div>
  );
}
