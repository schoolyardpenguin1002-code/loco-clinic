import Link from "next/link";
import Header from "../components/Header";

export default function ArtmakePage() {
  const artists = [
    {
      name: "佐藤 あやか",
      role: "Eyebrow Specialist",
      speciality: "眉アートメイク",
      experience: "施術実績3,000件以上",
      description: "自然で美しい眉毛デザインが得意。お客様一人ひとりの骨格に合わせたオーダーメイドデザインをご提案します。",
      tags: ["毛並み", "パウダー", "ナチュラル", "韓国風"],
    },
    {
      name: "田中 美咲",
      role: "Lip Specialist",
      speciality: "リップアートメイク",
      experience: "アートメイク歴6年",
      description: "血色感のある自然な仕上がりが人気。すっぴんでも魅力的な唇を実現します。",
      tags: ["ナチュラルリップ", "グラデーション", "血色感"],
    },
    {
      name: "山本 りな",
      role: "Hairline Specialist",
      speciality: "ヘアラインアートメイク",
      experience: "ヘアライン専門5年",
      description: "生え際を自然にカバー。小顔効果と若々しい印象を叶えます。",
      tags: ["生え際", "M字カバー", "小顔効果"],
    },
    {
      name: "鈴木 ゆき",
      role: "All-round Artist",
      speciality: "眉・リップ総合",
      experience: "施術実績4,500件以上",
      description: "眉とリップの両方を得意とするオールラウンダー。トータルバランスを考えたデザインをご提案します。",
      tags: ["トータルデザイン", "バランス重視", "丁寧なカウンセリング"],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 md:pt-48 md:pb-48 px-6 bg-[#fdfbf8]">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-xs font-heading tracking-[0.3em] text-[#d4af37] uppercase mb-8 block">Featured</span>
          <h1 className="text-6xl md:text-8xl font-light font-japanese mb-12 text-[#1a1a1a] tracking-wider" style={{ fontFamily: 'var(--font-shippori-mincho), serif' }}>
            アートメイク
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-light leading-loose max-w-3xl mx-auto">
            すっぴん美人を叶える、繊細な技術。<br />
            LOCO CLINICには、各分野のスペシャリストが揃っています。
          </p>
        </div>
      </section>

      {/* What is Art Make */}
      <section className="py-32 md:py-48 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-light font-japanese mb-16 text-[#1a1a1a] text-center tracking-wider" style={{ fontFamily: 'var(--font-shippori-mincho), serif' }}>
            アートメイクとは
          </h2>
          <div className="space-y-8 text-base md:text-lg text-gray-700 font-light leading-loose max-w-3xl mx-auto text-center mb-24">
            <p>
              アートメイクは、皮膚の浅い層に色素を入れる施術です。
            </p>
            <p>
              汗や水で落ちることなく、24時間美しい状態をキープ。<br />
              毎朝のメイク時間を短縮し、すっぴんでも自信が持てる素顔を手に入れましょう。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
            {[
              { num: '01', title: '時短メイク', desc: '毎朝のメイク時間を大幅に短縮。忙しい朝でも美しい状態をキープできます。' },
              { num: '02', title: 'すっぴん美人', desc: '24時間、メイクをしていなくても整った印象を保ちます。' },
              { num: '03', title: '自然な仕上がり', desc: '一人ひとりの骨格・肌色に合わせた、自然で美しいデザイン。' },
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <span className="text-6xl font-heading text-[#d4af37]/20 group-hover:text-[#d4af37]/40 transition-all duration-500 block mb-6">{item.num}</span>
                <h3 className="text-xl font-japanese mb-4 text-[#1a1a1a]" style={{ fontFamily: 'var(--font-shippori-mincho), serif' }}>{item.title}</h3>
                <p className="text-sm text-gray-600 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Artists Section */}
      <section className="py-32 md:py-48 px-6 bg-[#fdfbf8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-light font-japanese mb-8 text-[#1a1a1a] tracking-wider" style={{ fontFamily: 'var(--font-shippori-mincho), serif' }}>
              Our Artists
            </h2>
            <p className="text-lg md:text-xl text-gray-600 font-light">
              あなたの理想を叶える、スペシャリストたち
            </p>
          </div>

          <div className="space-y-32">
            {artists.map((artist, index) => (
              <div key={index} className={`grid md:grid-cols-2 gap-16 md:gap-24 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`${index % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                  <div className="aspect-[3/4] bg-gradient-to-br from-[#f5ebe0] to-[#ffecd1] rounded-sm overflow-hidden relative group">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm text-gray-400 font-light">Portrait</span>
                    </div>
                    <div className="absolute inset-0 bg-[#d4af37]/0 group-hover:bg-[#d4af37]/10 transition-all duration-500"></div>
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
                  <span className="text-xs font-heading tracking-[0.3em] text-[#d4af37] uppercase mb-4 block">{artist.role}</span>
                  <h3 className="text-3xl md:text-4xl font-japanese mb-6 text-[#1a1a1a]" style={{ fontFamily: 'var(--font-shippori-mincho), serif' }}>
                    {artist.name}
                  </h3>
                  <p className="text-sm text-gray-500 font-light mb-8">{artist.experience}</p>
                  <p className="text-base text-gray-700 font-light leading-loose mb-8">
                    {artist.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {artist.tags.map((tag, i) => (
                      <span key={i} className="px-4 py-2 bg-white text-gray-600 text-xs font-light rounded-full border border-gray-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Types */}
      <section className="py-32 md:py-48 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-light font-japanese mb-8 text-[#1a1a1a] tracking-wider" style={{ fontFamily: 'var(--font-shippori-mincho), serif' }}>
              Menu
            </h2>
            <p className="text-lg md:text-xl text-gray-600 font-light">
              あなたに合ったメニューを
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {[
              { title: '眉アートメイク', price: '¥66,000〜', desc: '毛並み・パウダー・コンビネーション' },
              { title: 'リップアートメイク', price: '¥77,000〜', desc: 'ナチュラル・フルリップ' },
              { title: 'アイラインアートメイク', price: '¥55,000〜', desc: 'ナチュラルライン・テールあり' },
              { title: 'ヘアラインアートメイク', price: '¥88,000〜', desc: 'M字カバー・生え際' },
            ].map((item, i) => (
              <div key={i} className="group bg-[#fdfbf8] hover:bg-white rounded-sm p-12 transition-all duration-500 border border-gray-100 hover:border-[#d4af37]/30 hover:shadow-2xl">
                <h3 className="text-2xl font-japanese mb-4 text-[#1a1a1a] group-hover:text-[#d4af37] transition-colors" style={{ fontFamily: 'var(--font-shippori-mincho), serif' }}>
                  {item.title}
                </h3>
                <p className="text-3xl font-heading font-bold text-[#d4af37] mb-6">{item.price}</p>
                <p className="text-sm text-gray-600 font-light">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/price"
              className="inline-block px-12 py-5 bg-[#1a1a1a] text-white font-heading text-sm tracking-widest uppercase rounded-none hover:bg-[#d4af37] transition-all duration-500 shadow-2xl hover:-translate-y-1"
            >
              詳しい料金表を見る
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-48 px-6 bg-[#1a1a1a] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-light font-japanese mb-12 leading-relaxed" style={{ fontFamily: 'var(--font-shippori-mincho), serif' }}>
            理想の自分に<br />
            出会いましょう
          </h2>
          <p className="text-base md:text-lg text-gray-300 font-light mb-16 leading-loose">
            まずは無料カウンセリングで、<br />
            あなたの理想をお聞かせください。
          </p>
          <Link
            href="/contact"
            className="inline-block px-16 py-6 bg-white text-[#1a1a1a] font-heading text-sm tracking-widest uppercase rounded-none hover:bg-[#d4af37] hover:text-white transition-all duration-500 shadow-2xl hover:-translate-y-1"
          >
            ご予約・お問い合わせ
          </Link>
        </div>
      </section>
    </div>
  );
}
