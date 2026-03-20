import Link from "next/link";
import Header from "../components/Header";

export default function MenuPage() {
  const menuCategories = [
    {
      id: 'thread',
      name: '糸リフト・スレッド',
      description: 'メスを使わない、自然なリフトアップ',
      items: [
        { name: 'ショッピングスレッド', price: '¥55,000' },
        { name: 'VOVリフトプレミアム', price: '¥88,000' },
        { name: 'テスリフトソフト', price: '¥110,000' },
        { name: 'ウルトラVリフト', price: '¥165,000' },
      ],
    },
    {
      id: 'injection',
      name: '注入・肌育',
      description: 'ヒアルロン酸・ボトックスで立体的な美しさを',
      items: [
        { name: 'ヒアルロン酸（ジュビダームビスタ）', price: '¥66,000' },
        { name: 'ボトックス（アラガン）', price: '¥33,000' },
        { name: 'プロファイロ', price: '¥88,000' },
        { name: '水光注射（ベーシック）', price: '¥22,000' },
        { name: '水光注射（プレミアム）', price: '¥44,000' },
        { name: 'ベビーコラーゲン', price: '¥110,000' },
      ],
    },
    {
      id: 'skin',
      name: '美肌・ピーリング',
      description: '肌質改善と透明感のある美肌へ',
      items: [
        { name: 'ハイドラフェイシャル', price: '¥16,500' },
        { name: 'マッサージピール', price: '¥16,500' },
        { name: 'ダーマペン4', price: '¥22,000' },
        { name: 'ピコトーニング', price: '¥16,500' },
        { name: 'ピコフラクショナル', price: '¥33,000' },
        { name: 'ポテンツァ', price: '¥55,000' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white w-full max-w-[100vw] overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 md:pt-48 md:pb-48 px-5 sm:px-8 lg:px-12 bg-[#fdfbf8]">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-light font-japanese mb-12 text-[#1a1a1a] tracking-wider" style={{ fontFamily: 'var(--font-shippori-mincho), serif' }}>
            Treatment Menu
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-light leading-loose max-w-3xl mx-auto">
            あなたの理想を叶える、<br className="md:hidden" />
            多彩な施術メニュー
          </p>
        </div>
      </section>

      {/* Menu Categories */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full">
        {menuCategories.map((category, categoryIndex) => (
          <section
            key={category.id}
            className={`py-32 md:py-48 ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-[#fdfbf8]'} -mx-5 sm:-mx-8 lg:-mx-12 px-5 sm:px-8 lg:px-12`}
          >
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 md:mb-24">
                <span className="text-xs font-heading tracking-[0.3em] text-[#d4af37] uppercase mb-6 block">
                  {String(categoryIndex + 1).padStart(2, '0')}
                </span>
                <h2 className="text-4xl md:text-6xl font-light font-japanese mb-6 text-[#1a1a1a] tracking-wider" style={{ fontFamily: 'var(--font-shippori-mincho), serif' }}>
                  {category.name}
                </h2>
                <p className="text-base md:text-lg text-gray-600 font-light">
                  {category.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {category.items.map((item, index) => (
                  <div
                    key={index}
                    className="group bg-white hover:bg-[#fdfbf8] border border-gray-100 hover:border-[#d4af37]/30 rounded-sm p-8 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
                  >
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg md:text-xl font-light text-[#1a1a1a] leading-relaxed flex-1 pr-4">
                        {item.name}
                      </h3>
                      <span className="text-2xl font-heading font-bold text-[#d4af37] whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="py-32 md:py-48 px-5 sm:px-8 lg:px-12 bg-[#1a1a1a] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-light font-japanese mb-12 leading-relaxed" style={{ fontFamily: 'var(--font-shippori-mincho), serif' }}>
            まずは、<br />
            無料カウンセリングから
          </h2>
          <p className="text-base md:text-lg text-gray-300 font-light mb-16 leading-loose">
            お客様一人ひとりに合わせた<br />
            最適なプランをご提案します。
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
