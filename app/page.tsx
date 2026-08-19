import Link from "next/link";
import SiteHeader from "./components/site/SiteHeader";
import SiteFooter from "./components/site/SiteFooter";
import FixedCta from "./components/site/FixedCta";
import SlowReveal from "./components/SlowReveal";
import HeroSlider from "./components/site/HeroSlider";

const MENU_CARDS = [
  {
    title: "糸リフト",
    en: "THREAD LIFT",
    desc: "当院の専門領域。お客様のお悩みと状態に合わせて、最適な糸リフト治療をご提案します。",
    href: "/thread-lift",
    img: "/images/stock/thread-pink.jpg",
    featured: true,
  },
  {
    title: "注入・美肌治療",
    en: "INJECTION / SKIN",
    desc: "ボトックス・ヒアルロン酸・肌育注射・水光注射・ピーリングなど。肌の土台から整えます。",
    href: "/menu",
    img: "/images/stock/injection.jpg",
  },
  {
    title: "アートメイク",
    en: "ART MAKE",
    desc: "眉・リップ・ヘアライン。毎朝の時間と、素顔の印象を変えていきます。",
    href: "/artmake",
    img: "/images/stock/artmake-brow.jpg",
  },
];

const NEWS = [
  { date: "2026.08.16", title: "ホームページをリニューアルしました" },
  { date: "2026.08.14", title: "糸リフトのご案内ページを公開しました" },
  { date: "2026.08.14", title: "料金表を「お悩みからさがせる」形にリニューアルしました" },
];

export default function Home() {
  return (
    <div className="price-page min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-[#fffbf6] text-[#70645c]">
      <SiteHeader />
      <main className="w-full">
        {/* ===== FV ===== */}
        <section className="relative flex min-h-[92svh] items-center justify-center overflow-hidden">
          <HeroSlider />
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-[#fffbf6]/85" />
          <div className="relative z-10 w-full max-w-5xl px-6 text-center" style={{ paddingTop: "90px" }}>
            <p className="mb-6 text-[12.5px] tracking-[0.4em] text-[#8a7a55]">
              TAKASAKI GUNMA ─ THREAD LIFT SPECIALTY
            </p>
            <h1
              className="font-light leading-[1.6] tracking-[0.12em]"
              style={{ fontFamily: "var(--font-shippori-mincho), serif", fontSize: "clamp(26px, 4.6vw, 52px)" }}
            >
              リーズナブルに誠実に、
              <br />
              質の良い糸リフト治療を。
            </h1>
            <p className="mx-auto mt-8 max-w-xl text-[16px] font-light leading-loose text-[#70645c]">
              高崎の、美のかかりつけ。糸リフト専門クリニック。
            </p>
          </div>
          <div className="absolute bottom-10 left-1/2 h-16 w-px -translate-x-1/2 bg-gradient-to-b from-[#b9a05a] to-transparent" />
        </section>

        {/* ===== 予約CTA（FV直下・銀座美容クリニック型） ===== */}
        <section className="px-0">
          <div className="mx-auto w-full max-w-2xl">
            <a
              href="https://lin.ee/Q8CPXPZ"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#3e7a52] py-6 text-white transition hover:brightness-105"
            >
              <span className="grid h-9 w-9 place-items-center rounded bg-white text-[10px] font-black text-[#3e7a52]">LINE</span>
              <span className="text-[19px] font-bold tracking-[0.1em]">LINE予約・ご相談（24時間受付）</span>
            </a>
          </div>
        </section>

        {/* ===== MESSAGE（CLINIC W型） ===== */}
        <section className="bg-white px-6" style={{ paddingTop: "140px", paddingBottom: "140px" }}>
          <div className="mx-auto w-full max-w-5xl">
            <SlowReveal className="text-center">
              <h2 className="sec-en">MESSAGE</h2>
              <p className="sec-ja">メッセージ</p>
            </SlowReveal>

            {/* 写真3枚横並び（角丸） */}
            <div className="mt-20 grid grid-cols-3 gap-3 sm:gap-6">
              {[
                { src: "/images/message-3.jpg", alt: "施術ルーム", dir: "left" as const },
                { src: "/images/message-2.jpg", alt: "院内の照明", dir: "up" as const },
                { src: "/images/message-1.jpg", alt: "待合スペース", dir: "right" as const },
              ].map((img, i) => (
                <SlowReveal key={img.src} direction={img.dir} delay={i * 150}>
                  <div
                    className={`group aspect-[3/4] overflow-hidden rounded-[16px] bg-[#f3ede2] shadow-md sm:rounded-[28px] ${i === 1 ? "mt-10" : ""}`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img.src} alt={img.alt} className="h-full w-full object-cover transition-transform duration-[2500ms] ease-out group-hover:scale-110" />
                  </div>
                </SlowReveal>
              ))}
            </div>

            {/* 本文 */}
            <div className="mx-auto mt-24 w-full max-w-3xl">
              <h3
                className="mb-10 text-center text-[clamp(22px,3vw,30px)] font-light leading-[1.8] tracking-[0.1em]"
                style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
              >
                高崎の、美のかかりつけへ。
              </h3>
              <div className="space-y-6 text-[16px] font-light leading-[2.2]">
                <p>はじめまして。LOCO CLINIC院長の狩野遊太です。</p>
                <p>
                  勤務医として多くの患者さんを診るなかで、もっと一人ひとりに向き合った診療がしたい。
                  そして、質の良い美容医療を、もっと手の届く価格で届けたい。
                  そう思うようになり、高崎でこのクリニックを開きました。
                </p>
                <p>
                  美容医療には、なんとなく怖い、高いものを勧められそう、というイメージがあると思います。
                  そう感じさせてしまうクリニックがあるのも、残念ながら事実です。
                  だから当院は、逆のことを決めました。無理におすすめしない。料金は先に全部見せる。
                  リスクも先に話す。その日に決めなくていい。
                </p>
                <p>
                  数ある施術のなかで糸リフトを専門に選んだのは、切らないから仕上がりが自然で、
                  長期的に体へ害を及ぼす心配がとても少ないからです。
                  メリットばかりが強調されがちな美容医療の世界で、
                  糸リフトは効果とリスクのバランスが本当に取れている、数少ない施術だと思っています。
                  だからこそ、自信を持っておすすめできます。
                </p>
                <p>
                  目指しているのは、高崎の「美のかかりつけ」です。
                  困ったときに、ちょっと相談してみようと思い出してもらえる場所でありたい。
                  まずはご相談だけでも構いません。
                  美容院を変えてみる、くらいの気軽さでいらしてください。
                </p>
              </div>
              <div className="mt-10 text-right">
                <p className="text-[13px] text-[#9a8f7d]">LOCO CLINIC 院長</p>
                <p className="mt-1 text-2xl" style={{ fontFamily: "var(--font-shippori-mincho), serif" }}>
                  狩野 遊太
                </p>
              </div>
              <div className="mt-10 text-center">
                <Link
                  href="/doctor"
                  className="inline-block rounded-full border border-[#6f4e2f] px-16 py-5 text-[15.5px] tracking-[0.25em] text-[#6f4e2f] transition-all duration-500 hover:bg-[#6f4e2f] hover:text-white"
                >
                  MORE
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ===== DOCTOR（CLINIC W型） ===== */}
        <section className="px-6" style={{ paddingTop: "140px", paddingBottom: "140px" }}>
          <div className="mx-auto w-full max-w-5xl">
            <SlowReveal className="text-center">
              <h2 className="sec-en">GREETING</h2>
              <p className="sec-ja">院長挨拶</p>
            </SlowReveal>
            <div className="mt-24 grid items-start gap-14 md:grid-cols-[1fr_1.35fr] md:gap-20">
              <div>
                <div className="group overflow-hidden rounded-[28px] bg-[#f3ede2] shadow-lg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/doctor.jpg" alt="LOCO CLINIC 院長 狩野遊太" className="h-auto w-full object-cover" />
                </div>
                <p className="mt-6 text-center text-[13px] leading-tight text-[#9a8f7d]">LOCO CLINIC 院長</p>
                <p className="mt-2 text-center text-[26px] leading-tight" style={{ fontFamily: "var(--font-shippori-mincho), serif" }}>
                  狩野 遊太
                </p>
              </div>
              <div>
                <h3
                  className="mb-12 font-light leading-[1.8] tracking-[0.1em]"
                  style={{ fontFamily: "var(--font-shippori-mincho), serif", fontSize: "clamp(26px, 3.4vw, 36px)" }}
                >
                  あなたの、
                  <br />
                  かかりつけになるために。
                </h3>
                <div className="space-y-6 text-[16px] font-light leading-[2]">
                  <p>
                    美容クリニックがたくさんあるいま、きちんとしたカウンセリングと適切な治療を受けたくても、
                    どこを選べばいいか分からない。そんな声をよく聞きます。
                  </p>
                  <p>
                    当院に来ていただければ、もうそのお悩みは持たなくていい。
                    あなたの「かかりつけ」になれるクリニックでありたいと思っています。
                  </p>
                  <p>
                    カウンセリングでは、お一人おひとりの思いと丁寧に向き合い、
                    ご予算の範囲内で、妥協のない治療プランをご提案します。
                    画一的な、売上重視の治療はいたしません。
                  </p>
                  <p>
                    専門は糸リフト。痛みとダウンタイムに最大限配慮しながら、仕上がりには妥協しません。
                    はじめての方、ご相談だけの方も歓迎です。
                  </p>
                </div>
                <div className="mt-14">
                  <Link
                    href="/doctor"
                    className="inline-block rounded-full border border-[#6f4e2f] px-16 py-5 text-[15.5px] tracking-[0.25em] text-[#6f4e2f] transition-all duration-500 hover:bg-[#6f4e2f] hover:text-white"
                  >
                    MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 当院の特長 ===== */}
        <section className="px-6" style={{ paddingTop: "140px", paddingBottom: "140px" }}>
          <div className="mx-auto w-full max-w-6xl">
            <SlowReveal className="text-center" style={{ marginBottom: "110px" }}>
              <h2 className="sec-en">FEATURES</h2>
              <p className="sec-ja">当院の特長</p>
            </SlowReveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { n: "01", t: "糸リフト専門", b: "最高品質の糸リフト治療をリーズナブルな価格で提供します。" },
                { n: "02", t: "リピーターの多さ", b: "真面目に良い治療を積み重ねてきた結果、多くの方が繰り返し通ってくださっています。" },
                { n: "03", t: "無理にすすめない", b: "必要な分だけをご提案。その日に決めなくて大丈夫です。" },
                { n: "04", t: "痛みへの配慮", b: "麻酔を丁寧に効かせてから施術します。不安はカウンセリングでご相談ください。" },
                { n: "05", t: "税込・明朗会計", b: "料金はすべて税込で公開。当日の想定外の費用はありません。" },
                { n: "06", t: "夜21時まで・完全予約制", b: "お仕事帰りでも通えます。待合で人と顔を合わせにくい環境です。" },
              ].map((f, i) => (
                <SlowReveal key={f.n} direction={i % 2 === 0 ? "left" : "right"} delay={i * 100}>
                  <div className="h-full rounded-[24px] border border-[#e9e6e6] bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#d2b388] hover:shadow-xl">
                    <p className="font-heading text-[15.5px] tracking-[0.25em] text-[#b9a05a]">{f.n}</p>
                    <h3 className="mt-3 text-[18px] leading-snug text-[#6f4e2f]" style={{ fontFamily: "var(--font-shippori-mincho), serif" }}>
                      {f.t}
                    </h3>
                    <p className="mt-4 text-[14.5px] font-light leading-[2]">{f.b}</p>
                  </div>
                </SlowReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== OUR MENU ===== */}
        <section className="bg-white px-6" style={{ paddingTop: "140px", paddingBottom: "140px" }}>
          <div className="mx-auto w-full max-w-6xl">
            <SlowReveal className="mb-24 text-center">
              <h2 className="sec-en">MENU</h2>
              <p className="sec-ja">診療メニュー</p>
            </SlowReveal>
            <div className="grid gap-6 md:grid-cols-3 md:gap-8">
              {MENU_CARDS.map((c, i) => (
                <SlowReveal key={c.title} direction={i === 0 ? "left" : i === 2 ? "right" : "up"} delay={i * 120}>
                  <Link
                    href={c.href}
                    className={`group block h-full overflow-hidden rounded-[24px] border bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                      c.featured ? "border-[#b9a05a]" : "border-[#e9e6e6]"
                    }`}
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={c.img} alt={c.title} className="h-full w-full object-cover transition-transform duration-[2500ms] ease-out group-hover:scale-110" />
                      {c.featured && (
                        <span className="absolute left-4 top-4 rounded-full bg-[#b9a05a]/95 px-4 py-1.5 text-[12px] tracking-[0.2em] text-white">
                          当院の専門
                        </span>
                      )}
                    </div>
                    <div className="p-8">
                    <p className="text-[12px] tracking-[0.3em] text-[#b9a05a]">{c.en}</p>
                    <h3
                      className="mt-3 text-xl tracking-[0.1em] transition-colors group-hover:text-[#b9a05a]"
                      style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                    >
                      {c.title}
                    </h3>
                    <p className="mt-4 text-[15px] font-light leading-[1.95] text-[#70645c]">{c.desc}</p>
                    <span className="mt-6 inline-block text-[12.5px] tracking-[0.25em] text-[#6f4e2f] transition-colors group-hover:text-[#b9a05a]">
                      MORE →
                    </span>
                    </div>
                  </Link>
                </SlowReveal>
              ))}
            </div>
            <SlowReveal className="flex flex-col items-center justify-center gap-6 sm:flex-row" style={{ marginTop: "110px" }}>
              <Link
                href="/concerns"
                className="w-full max-w-80 rounded-full border border-[#6f4e2f] px-10 py-5 text-center text-[15.5px] tracking-[0.2em] transition-all duration-500 hover:bg-[#6f4e2f] hover:text-white"
              >
                お悩みからさがす
              </Link>
              <Link
                href="/price"
                className="w-full max-w-80 rounded-full border border-[#6f4e2f] px-10 py-5 text-center text-[15.5px] tracking-[0.2em] transition-all duration-500 hover:bg-[#6f4e2f] hover:text-white"
              >
                料金を見る
              </Link>
            </SlowReveal>
          </div>
        </section>

        {/* ===== ACCESS ===== */}
        <section className="px-6" style={{ paddingTop: "140px", paddingBottom: "140px" }}>
          <div className="mx-auto grid w-full max-w-5xl items-start gap-12 md:grid-cols-2">
            <SlowReveal>
              <h2 className="sec-en">ACCESS</h2>
              <p className="sec-ja mb-12">アクセス</p>
              <dl className="space-y-6 text-base font-light leading-relaxed text-[#70645c]">
                <div>
                  <dt className="mb-1 text-[10px] tracking-[0.3em] text-[#b9a05a]">ADDRESS</dt>
                  <dd>〒370-0005 群馬県高崎市浜尻町209-5</dd>
                </div>
                <div>
                  <dt className="mb-1 text-[10px] tracking-[0.3em] text-[#b9a05a]">HOURS</dt>
                  <dd>9:00〜21:00（完全予約制・不定休）</dd>
                </div>

              </dl>
            </SlowReveal>
            <SlowReveal delay={120}>
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#f3ede2]">
                <iframe
                  src="https://maps.google.com/maps?q=%E3%83%AD%E3%82%B3%E3%82%AF%E3%83%AA%E3%83%8B%E3%83%83%E3%82%AF%20%E7%BE%A4%E9%A6%AC%E7%9C%8C%E9%AB%98%E5%B4%8E%E5%B8%82%E6%B5%9C%E5%B0%BB%E7%94%BA209-5&ll=36.3520809,139.0134531&z=16&hl=ja&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 280 }}
                  allowFullScreen
                  loading="lazy"
                  title="LOCO CLINIC 地図"
                  className=""
                />
              </div>
            </SlowReveal>
          </div>
        </section>

        {/* ===== NEWS ===== */}
        <section className="border-t border-[#f0ebe2] px-6" style={{ paddingTop: "100px", paddingBottom: "140px" }}>
          <SlowReveal className="mx-auto w-full max-w-3xl">
            <div className="text-center"><h2 className="sec-en">NEWS</h2>
            <p className="sec-ja mb-14">お知らせ</p></div>
            <ul className="divide-y divide-[#f0ebe2] border-y border-[#f0ebe2]">
              {NEWS.map((n) => (
                <li key={n.title} className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:gap-8">
                  <time className="shrink-0 font-heading text-xs tracking-wider text-[#9a8f7d]">{n.date}</time>
                  <p className="text-base font-light text-[#6f4e2f]">{n.title}</p>
                </li>
              ))}
            </ul>
          </SlowReveal>
        </section>
      </main>
      <SiteFooter />
      <FixedCta />
    </div>
  );
}
