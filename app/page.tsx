import Link from "next/link";
import Header from "./components/Header";
import Reveal from "./components/Reveal";

export default function Home() {
  return (
    <div className="min-h-screen bg-white w-full max-w-[100vw] overflow-x-hidden">
      <Header />
      <main className="marketing-layout w-full">
      {/* Hero */}
      <section className="section-bleed relative h-screen min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center scale-105 motion-safe:transition-transform motion-safe:duration-[3000ms] motion-safe:hover:scale-100"
            style={{
              backgroundImage:
                "url('/images/uniquemarfa-morning-1369446.jpg'), url('/images/hero-fallback.svg')",
            }}
            role="img"
            aria-label="LOCO CLINIC メインビジュアル"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-[#fdfbf8]/60 to-white/30 backdrop-blur-[2px]" />
        </div>

        <div className="section-inner relative z-10 w-full">
          <h1
            className="text-6xl md:text-8xl font-bold font-japanese text-[#1a1a1a] mb-8 leading-tight tracking-wider animate-fadeIn"
            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
          >
            美しさの
            <br />
            その先へ
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 font-light mb-16 max-w-3xl mx-auto leading-relaxed tracking-wide">
            一人ひとりの個性を尊重し、
            <br className="md:hidden" />
            本質的な美しさを引き出す
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/contact"
              className="group px-12 py-5 bg-[#1a1a1a] text-white font-heading text-sm tracking-widest uppercase rounded-none hover:bg-[#d4af37] transition-all duration-500 shadow-2xl hover:shadow-[#d4af37]/50 hover:-translate-y-1"
            >
              <span>ご予約</span>
            </Link>
            <Link
              href="#concept"
              className="px-12 py-5 bg-white/80 backdrop-blur-md text-[#1a1a1a] font-heading text-sm tracking-widest uppercase rounded-none hover:bg-white transition-all duration-500 border border-[#1a1a1a]/20 hover:border-[#1a1a1a] hover:-translate-y-1"
            >
              詳しく見る
            </Link>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-px h-16 bg-gradient-to-b from-[#d4af37] to-transparent" />
        </div>
      </section>

      {/* Concept */}
      <section id="concept" className="section-bleed py-32 md:py-48 bg-[#fdfbf8]">
        <Reveal className="section-inner !max-w-5xl !mx-auto flex flex-col items-center">
          <h2
            className="text-5xl md:text-7xl font-light font-japanese mb-16 text-[#1a1a1a] tracking-wider text-center w-full"
            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
          >
            Concept
          </h2>
          <div className="space-y-8 text-lg md:text-xl text-gray-700 font-light leading-loose max-w-3xl mx-auto">
            <p>
              美容医療は、単なる外見の変化ではなく、
              <br />
              あなた自身と向き合う、大切な時間です。
            </p>
            <p>
              私たちは、一人ひとりの個性を尊重し、
              <br />
              本質的な美しさを引き出すことを使命としています。
            </p>
            <p className="text-[#d4af37] font-medium">「美しさのその先へ」</p>
          </div>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-16" />
        </Reveal>
      </section>

      {/* Director */}
      <section className="section-bleed py-32 md:py-48 bg-white">
        <Reveal className="section-inner w-full">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center md-grid-left">
            <div className="order-2 md:order-1 md-text-left-panel max-w-xl mx-auto md:max-w-none md:mx-0 w-full">
              <span className="text-xs font-heading tracking-[0.3em] text-[#d4af37] uppercase mb-4 block">
                Director
              </span>
              <h2
                className="text-4xl md:text-5xl font-light font-japanese mb-8 text-[#1a1a1a]"
                style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
              >
                院長ご挨拶
              </h2>
              <div className="space-y-6 text-base md:text-lg text-gray-700 font-light leading-loose">
                <p>
                  美容医療の世界に身を置いて15年。
                  <br />
                  数多くの患者様と向き合う中で、確信したことがあります。
                </p>
                <p>
                  それは、「美しさ」とは、画一的なものではなく、
                  <br />
                  一人ひとりの内面から輝き出るものだということ。
                </p>
                <p>
                  当院では、最新の技術と豊富な経験を持つスタッフが、
                  <br />
                  あなたらしい美しさを、丁寧に引き出します。
                </p>
              </div>
              <div className="mt-12">
                <p className="text-sm text-gray-600 font-light mb-2">LOCO CLINIC 院長</p>
                <p
                  className="text-2xl font-japanese"
                  style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                >
                  狩野 遊太
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="aspect-[3/4] bg-gradient-to-br from-[#f5ebe0] to-[#ffecd1] rounded-sm overflow-hidden shadow-2xl">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-gray-400 text-sm font-light">院長写真</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Treatment — 3大メニュー */}
      <section id="treatment" className="section-bleed py-32 md:py-48 bg-[#fdfbf8]">
        <div className="section-inner flex flex-col items-center">
          <Reveal className="text-center mb-24 w-full max-w-4xl mx-auto">
            <h2
              className="text-5xl md:text-7xl font-light font-japanese mb-8 text-[#1a1a1a] tracking-wider text-center"
              style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
            >
              Treatment
            </h2>
            <p className="text-lg md:text-xl text-gray-600 font-light text-center max-w-2xl mx-auto">
              あなたの理想を叶える、3つの柱
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 w-full justify-items-center md:justify-items-stretch">
            {[
              {
                title: "糸リフト",
                subtitle: "Thread Lift",
                desc: "メスを使わない、自然なリフトアップ",
                link: "/menu",
              },
              {
                title: "アートメイク",
                subtitle: "Art Make",
                desc: "すっぴん美人を叶える、繊細な技術",
                link: "/artmake",
              },
              {
                title: "注入治療",
                subtitle: "Injection",
                desc: "ヒアルロン酸・ボトックスで立体的な美しさを",
                link: "/menu",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 120} className="w-full max-w-md md:max-w-none">
                <Link href={item.link} className="group block w-full">
                  <div className="bg-white rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-[#f5ebe0] via-[#fdfbf8] to-[#ffecd1]">
                      <div className="absolute inset-0 flex items-center justify-center scale-100 motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:scale-110">
                        <span className="text-6xl text-[#d4af37]/30 font-heading">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/[0.06] transition-all duration-500" />
                      <div className="absolute inset-0 bg-[#d4af37]/0 group-hover:bg-[#d4af37]/10 transition-all duration-500 pointer-events-none" />
                    </div>
                    <div className="p-8 balance-center-card text-center">
                      <span className="text-xs font-heading tracking-[0.3em] text-[#d4af37] uppercase mb-3 block">
                        {item.subtitle}
                      </span>
                      <h3
                        className="text-2xl font-japanese mb-4 text-[#1a1a1a] group-hover:text-[#d4af37] transition-colors text-center"
                        style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="section-bleed py-32 md:py-48 bg-white">
        <div className="section-inner flex flex-col items-center">
          <Reveal className="text-center mb-24 w-full">
            <h2
              className="text-5xl md:text-7xl font-light font-japanese mb-8 text-[#1a1a1a] tracking-wider text-center"
              style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
            >
              Cases
            </h2>
            <p className="text-lg md:text-xl text-gray-600 font-light text-center max-w-2xl mx-auto">
              当院の施術による変化
            </p>
          </Reveal>

          <div className="flex md:grid md:grid-cols-3 gap-6 md:gap-8 overflow-x-auto pb-4 md:pb-0 w-full max-w-7xl justify-center md:justify-stretch snap-x snap-mandatory md:snap-none [scrollbar-width:thin]">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Reveal
                key={item}
                delay={(item % 3) * 100}
                className="shrink-0 w-[min(78vw,320px)] max-w-sm md:w-auto md:max-w-none md:shrink-0 snap-center flex justify-center md:block"
              >
                <div className="group cursor-pointer w-full max-w-[280px] md:max-w-none mx-auto">
                  <div className="aspect-square bg-gradient-to-br from-[#f5ebe0] to-[#ffecd1] rounded-sm overflow-hidden mb-4 relative">
                    <div className="absolute inset-0 flex items-center justify-center motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:scale-105">
                      <span className="text-sm text-gray-400 font-light">Before / After</span>
                    </div>
                    <div className="absolute inset-0 bg-[#1a1a1a]/0 group-hover:bg-[#1a1a1a]/10 transition-all duration-500" />
                  </div>
                  <p className="text-sm text-gray-600 font-light text-center">施術例 {item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Art Make Special */}
      <section className="section-bleed py-32 md:py-48 bg-[#1a1a1a] text-white">
        <Reveal className="section-inner flex flex-col items-center">
          <span className="text-xs font-heading tracking-[0.3em] text-[#d4af37] uppercase mb-8 block">
            Featured
          </span>
          <h2
            className="text-5xl md:text-7xl font-light font-japanese mb-12 tracking-wider text-center w-full"
            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
          >
            アートメイク
          </h2>
          <p className="text-lg md:text-xl text-gray-300 font-light leading-loose max-w-3xl mx-auto mb-16 text-center">
            アートメイクは、アーティスト選びから。
            <br />
            当院には、各分野のスペシャリストが揃っています。
          </p>
          <Link
            href="/artmake"
            className="inline-block px-12 py-5 bg-white text-[#1a1a1a] font-heading text-sm tracking-widest uppercase rounded-none hover:bg-[#d4af37] hover:text-white transition-all duration-500 shadow-2xl hover:-translate-y-1"
          >
            View Artists
          </Link>
        </Reveal>
      </section>

      {/* Artists */}
      <section className="section-bleed py-32 md:py-48 bg-[#fdfbf8]">
        <div className="section-inner flex flex-col items-center">
          <Reveal className="text-center mb-24 w-full">
            <h2
              className="text-5xl md:text-7xl font-light font-japanese mb-12 text-[#1a1a1a] tracking-wider text-center"
              style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
            >
              Artists
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full justify-items-center md:justify-items-stretch">
            {[
              { name: "澤田 望美", instagram: "https://www.instagram.com/nozomi_akari_glow" },
              { name: "上原 実紅", instagram: "https://www.instagram.com/miku39_artmake/" },
              { name: "山本 りな", instagram: null },
              { name: "鈴木 ゆき", instagram: null }
            ].map((artist, i) => (
              <Reveal key={artist.name} delay={i * 100} className="w-full max-w-xs md:max-w-none">
                <div className="group w-full text-center">
                  <div className="aspect-[3/4] bg-gradient-to-br from-[#f5ebe0] to-[#ffecd1] rounded-sm overflow-hidden mb-4 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm text-gray-400 font-light">Portrait</span>
                    </div>
                    <div className="absolute inset-0 bg-[#d4af37]/0 group-hover:bg-[#d4af37]/10 transition-all duration-500" />
                  </div>
                  <p
                    className="text-base font-japanese text-[#1a1a1a] text-center mb-1"
                    style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                  >
                    {artist.name}
                  </p>
                  {artist.instagram && (
                    <a
                      href={artist.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-[#d4af37] transition-colors duration-300 mb-1"
                    >
                      <span>Instagram</span>
                      <span aria-hidden>→</span>
                    </a>
                  )}
                  <p className="text-xs text-gray-500 font-light text-center">Specialist</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Blog / 最新情報 */}
      <section id="news" className="section-bleed py-32 md:py-48 bg-white border-t border-[#d4af37]/10">
        <div className="section-inner flex flex-col items-center">
          <Reveal className="text-center mb-20 w-full">
            <span className="text-xs font-heading tracking-[0.3em] text-[#d4af37] uppercase mb-6 block text-center">
              Journal
            </span>
            <h2
              className="text-5xl md:text-7xl font-light font-japanese mb-6 text-[#1a1a1a] tracking-wider text-center"
              style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
            >
              最新情報
            </h2>
            <p className="text-lg text-gray-600 font-light text-center max-w-2xl mx-auto">
              クリニックからのお知らせとコラム
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 w-full justify-items-center md:justify-items-stretch">
            {[
              {
                date: "2026.03.01",
                category: "お知らせ",
                title: "春のキャンペーンのご案内",
                excerpt:
                  "肌育・注入メニューを中心に、期間限定の特典をご用意しました。",
              },
              {
                date: "2026.02.15",
                category: "コラム",
                title: "アートメイク後のケアについて",
                excerpt:
                  "施術後の経過をより美しく保つためのホームケアのポイントをご紹介します。",
              },
              {
                date: "2026.02.01",
                category: "お知らせ",
                title: "診療時間のご案内",
                excerpt:
                  "9:00〜21:00・完全予約制でお待ちしております。不定休のためご確認ください。",
              },
            ].map((post, i) => (
              <Reveal key={post.title} delay={i * 140} className="w-full max-w-md md:max-w-none">
                <article className="balance-center-card group h-full bg-[#fdfbf8]/80 backdrop-blur-sm border border-[#d4af37]/10 rounded-sm p-8 md:p-10 hover:bg-white hover:border-[#d4af37]/25 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex flex-col items-center text-center w-full">
                  <div className="flex flex-wrap items-baseline justify-center gap-x-6 gap-y-1 mb-6 text-xs font-heading tracking-widest uppercase w-full">
                    <time className="text-gray-500">{post.date}</time>
                    <span className="text-[#d4af37]">{post.category}</span>
                  </div>
                  <h3
                    className="text-xl md:text-2xl font-japanese text-[#1a1a1a] mb-4 group-hover:text-[#d4af37] transition-colors leading-snug text-center"
                    style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                  >
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed flex-1 mb-8">
                    {post.excerpt}
                  </p>
                  <span className="text-xs font-heading tracking-widest text-[#1a1a1a] group-hover:text-[#d4af37] transition-colors inline-flex items-center justify-center gap-2">
                    Read more
                    <span
                      aria-hidden
                      className="motion-safe:transition-transform motion-safe:group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Access */}
      <section id="access" className="section-bleed py-32 md:py-48 bg-[#fdfbf8]">
        <div className="section-inner flex flex-col items-center">
          <Reveal className="text-center mb-24 w-full">
            <h2
              className="text-5xl md:text-7xl font-light font-japanese mb-8 text-[#1a1a1a] tracking-wider text-center"
              style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
            >
              Access
            </h2>
          </Reveal>

          <Reveal delay={80} className="grid md:grid-cols-2 gap-16 w-full max-w-6xl mx-auto items-start md-grid-left">
            <div className="space-y-8 md-text-left-panel max-w-lg mx-auto md:max-w-none md:mx-0 w-full">
              <div>
                <h3 className="text-sm font-heading tracking-widest text-[#d4af37] uppercase mb-3">
                  Address
                </h3>
                <p className="text-base text-gray-700 font-light">
                  〒370-0005
                  <br />
                  群馬県高崎市浜尻町２０９−５
                </p>
              </div>
              <div>
                <h3 className="text-sm font-heading tracking-widest text-[#d4af37] uppercase mb-3">
                  Hours
                </h3>
                <p className="text-base text-gray-700 font-light">
                  9:00〜21:00（不定休）
                  <br />
                  完全予約制
                </p>
              </div>
              <div>
                <h3 className="text-sm font-heading tracking-widest text-[#d4af37] uppercase mb-3">
                  Tel
                </h3>
                <a
                  href="tel:027-395-0443"
                  className="text-2xl font-heading text-[#1a1a1a] hover:text-[#d4af37] transition"
                >
                  027-395-0443
                </a>
              </div>
            </div>
            <div className="aspect-[4/3] bg-gray-200 rounded-sm overflow-hidden min-h-[240px] w-full max-w-xl mx-auto md:max-w-none md:mx-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3207.8471889687447!2d139.00551831531514!3d36.32485798005356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601ef3144c7e9e8b%3A0x1234567890abcdef!2z44CSMzcwLTAwMDUg576k6aas55yM6auY5bSO5biC5rWc5bC777yS77yQ77yZ4oiS77yV!5e0!3m2!1sja!2sjp!4v1234567890123!5m2!1sja!2sjp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="LOCO CLINIC 地図"
                className="grayscale hover:grayscale-0 transition-all duration-500 min-h-[240px]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-bleed py-32 md:py-48 bg-white">
        <Reveal className="section-inner !max-w-4xl !mx-auto flex flex-col items-center">
          <h2
            className="text-4xl md:text-6xl font-light font-japanese mb-12 text-[#1a1a1a] leading-relaxed text-center"
            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
          >
            まずは、お気軽に
            <br />
            ご相談ください
          </h2>
          <p className="text-base md:text-lg text-gray-600 font-light mb-16 leading-loose text-center max-w-2xl">
            カウンセリングは無料です。
            <br />
            あなたの理想を、お聞かせください。
          </p>
          <Link
            href="/contact"
            className="inline-block px-16 py-6 bg-[#1a1a1a] text-white font-heading text-sm tracking-widest uppercase rounded-none hover:bg-[#d4af37] transition-all duration-500 shadow-2xl hover:shadow-[#d4af37]/50 hover:-translate-y-1"
          >
            Contact Us
          </Link>
        </Reveal>
      </section>

      {/* Footer */}
      <footer className="section-bleed bg-[#1a1a1a] text-white py-20">
        <div className="section-inner w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16 justify-items-center md:justify-items-stretch text-center md:text-left">
            <div className="w-full max-w-sm md:max-w-none">
              <h3
                className="text-2xl font-japanese mb-6 text-[#d4af37]"
                style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
              >
                LOCO CLINIC
              </h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">美しさのその先へ</p>
            </div>
            <div className="w-full max-w-sm md:max-w-none">
              <h4 className="text-xs font-heading tracking-widest uppercase mb-4 text-gray-400">
                Menu
              </h4>
              <ul className="space-y-3 text-sm font-light flex flex-col items-center md:items-start">
                <li>
                  <Link href="/artmake" className="hover:text-[#d4af37] transition">
                    アートメイク
                  </Link>
                </li>
                <li>
                  <Link href="/menu" className="hover:text-[#d4af37] transition">
                    施術メニュー
                  </Link>
                </li>
                <li>
                  <Link href="/staff" className="hover:text-[#d4af37] transition">
                    スタッフ
                  </Link>
                </li>
                <li>
                  <Link href="/price" className="hover:text-[#d4af37] transition">
                    料金表
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full max-w-sm md:max-w-none">
              <h4 className="text-xs font-heading tracking-widest uppercase mb-4 text-gray-400">
                Information
              </h4>
              <ul className="space-y-3 text-sm font-light flex flex-col items-center md:items-start">
                <li>
                  <Link href="/#news" className="hover:text-[#d4af37] transition">
                    最新情報
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-[#d4af37] transition">
                    よくある質問
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#d4af37] transition">
                    お問い合わせ
                  </Link>
                </li>
                <li>
                  <Link href="/cancel-policy" className="hover:text-[#d4af37] transition">
                    キャンセルポリシー
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:text-[#d4af37] transition">
                    プライバシーポリシー
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full max-w-sm md:max-w-none">
              <h4 className="text-xs font-heading tracking-widest uppercase mb-4 text-gray-400">
                Contact
              </h4>
              <p className="text-sm font-light leading-relaxed mb-4">
                〒370-0005
                <br />
                群馬県高崎市浜尻町２０９−５
              </p>
              <a href="tel:027-395-0443" className="text-base font-heading hover:text-[#d4af37] transition">
                027-395-0443
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-xs text-gray-500 font-light tracking-wider">
              &copy; 2026 LOCO CLINIC. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
      </main>
    </div>
  );
}
