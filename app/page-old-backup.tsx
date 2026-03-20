import Link from "next/link";
import Image from "next/image";
import Header from "./components/Header";
import MenuTabs from "./components/MenuTabs";
import FAQAccordion from "./components/FAQAccordion";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fdfbf8]">
      {/* ヘッダー */}
      <Header />

      {/* ヒーローセクション */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* 背景画像 */}
        <div className="absolute inset-0">
          <Image
            src="/images/uniquemarfa-morning-1369446.jpg"
            alt="LOCO CLINIC Hero Background"
            fill
            priority
            className="object-cover"
            quality={90}
          />
          {/* オーバーレイ（画像を少し暗くして文字を読みやすく） */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-[#fdfbf8]/70 to-white/50"></div>
        </div>
        
        {/* コンテンツ */}
        <div className="relative z-10 text-center px-6">
          <h1 
            className="text-5xl md:text-7xl font-bold font-japanese text-gray-800 mb-6 leading-tight tracking-wider drop-shadow-lg"
            style={{ fontFamily: 'var(--font-shippori-mincho, "游明朝", "Yu Mincho", serif' }}
          >
            あなたが選ぶ、<br />
            <span className="text-[#d4af37]">理想のあなた。</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            LOCO CLINICは、お客様一人ひとりの理想を叶えるための<br />
            美容クリニックです。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/artmake"
              className="px-10 py-4 bg-[#d4af37] text-white rounded-full text-base font-semibold hover:bg-[#c19b2f] transition shadow-lg"
            >
              アートメイクを見る
            </Link>
            <Link
              href="#menu"
              className="px-10 py-4 bg-white text-[#d4af37] border-2 border-[#d4af37] rounded-full text-base font-semibold hover:bg-[#d4af37] hover:text-white transition"
            >
              施術メニュー一覧
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#d4af37] rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-[#d4af37] rounded-full"></div>
          </div>
        </div>
      </section>

      {/* コンセプトセクション */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-800 mb-6 tracking-wide">
            Concept
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            美容は、あなたの人生をより豊かにするもの。<br />
            私たちは、お客様の「こうなりたい」という想いに寄り添い、<br />
            理想を形にするお手伝いをします。
          </p>
          <div className="w-20 h-1 bg-[#d4af37] mx-auto"></div>
        </div>
      </section>

      {/* 症例セクション */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#fdfbf8] to-[#f5ebe0]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-800 mb-6 tracking-wide">
              Cases / 症例紹介
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              当院の施術による変化をご覧ください。<br />
              お客様一人ひとりに合わせた丁寧な施術で、理想を実現します。
            </p>
          </div>
          {/* 症例画像プレースホルダー */}
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition group">
                <div className="h-64 bg-gradient-to-br from-[#d4af37]/20 to-[#ffecd1] flex items-center justify-center relative overflow-hidden">
                  <span className="text-gray-400 text-sm font-heading">Before / After</span>
                  <div className="absolute inset-0 bg-[#d4af37]/0 group-hover:bg-[#d4af37]/10 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">施術名 {item}</h3>
                  <p className="text-sm text-gray-600">施術内容の説明が入ります。</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 詳細メニューセクション */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#ffecd1] to-[#f5ebe0]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-[#d4af37] text-white text-sm font-semibold rounded-full mb-4">
              今、最も注目されている施術
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-800 mb-6 tracking-wide">
              アートメイク
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              アートメイクは、アーティスト選びから。<br />
              LOCO CLINICには、各分野のスペシャリストが揃っています。<br />
              あなたの理想に寄り添うアーティストと出会い、理想を形にしましょう。
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
              <div className="w-16 h-16 bg-[#d4af37] rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                01
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">眉アートメイク</h3>
              <p className="text-gray-600 leading-relaxed">
                毎朝のメイク時間を短縮。自然で美しい眉を手に入れましょう。
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
              <div className="w-16 h-16 bg-[#d4af37] rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                02
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">リップアートメイク</h3>
              <p className="text-gray-600 leading-relaxed">
                すっぴんでも血色感のある唇に。自然な色味で魅力的な印象を。
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
              <div className="w-16 h-16 bg-[#d4af37] rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                03
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">ヘアラインアートメイク</h3>
              <p className="text-gray-600 leading-relaxed">
                生え際を自然にカバー。小顔効果も期待できる人気メニューです。
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/artmake"
              className="inline-block px-12 py-4 bg-[#d4af37] text-white rounded-full text-base font-semibold hover:bg-[#c19b2f] transition shadow-lg"
            >
              アートメイクの詳細を見る
            </Link>
          </div>
        </div>
      </section>

      {/* 詳細メニューセクション */}
      <section id="menu" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-800 mb-6 tracking-wide">
              Menu / 施術メニュー
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              透明性のある価格設定で、安心してご利用いただけます。<br />
              お気軽にお問い合わせください。
            </p>
          </div>
          <MenuTabs />
        </div>
      </section>

      {/* アクセスセクション */}
      <section id="access" className="py-20 px-6 bg-[#f5ebe0]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-800 mb-6 tracking-wide">
              Access / アクセス
            </h2>
            <p className="text-lg text-gray-600">
              お車でのご来院も可能です
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            {/* Googleマップ埋め込みスペース */}
            <div className="h-96 bg-gray-200 flex items-center justify-center relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3207.8471889687447!2d139.00551831531514!3d36.32485798005356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601ef3144c7e9e8b%3A0x1234567890abcdef!2z44CSMzcwLTAwMDUg576k6aas55yM6auY5bSO5biC5rWc5bC777yS77yQ77yZ4oiS77yV!5e0!3m2!1sja!2sjp!4v1234567890123!5m2!1sja!2sjp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>
            <div className="p-8 md:p-12">
              <h3 className="text-3xl font-bold font-heading text-gray-800 mb-6">LOCO CLINIC</h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start gap-4">
                  <span className="text-[#d4af37] text-2xl flex-shrink-0">📍</span>
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">住所</p>
                    <p>〒370-0005<br />群馬県高崎市浜尻町２０９−５</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[#d4af37] text-2xl flex-shrink-0">📞</span>
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">電話番号</p>
                    <a href="tel:027-395-0443" className="text-[#d4af37] font-heading font-bold text-xl hover:underline">
                      027-395-0443
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[#d4af37] text-2xl flex-shrink-0">🕐</span>
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">営業時間</p>
                    <p>9:00〜21:00（不定休）<br />完全予約制</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[#d4af37] text-2xl flex-shrink-0">🚗</span>
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">駐車場</p>
                    <p>お車でのご来院も可能です</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* よくある質問 (FAQ) */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-800 mb-6 tracking-wide">
            Contact
          </h2>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            まずはお気軽にご相談ください。<br />
            あなたの理想を叶えるお手伝いをいたします。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-12 py-4 bg-[#d4af37] text-white rounded-full text-base font-semibold hover:bg-[#c19b2f] transition shadow-lg"
            >
              ご予約・お問い合わせ
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
        <div className="container mx-auto max-w-6xl">
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
                <li><Link href="/#access" className="hover:text-[#d4af37] transition">アクセス</Link></li>
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
