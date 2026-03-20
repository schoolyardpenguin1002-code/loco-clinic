import Link from "next/link";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#fdfbf8] via-[#f5ebe0] to-[#ffecd1]">
        <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
          <h1 
            className="text-6xl md:text-8xl font-bold text-[#1a1a1a] mb-8 leading-tight tracking-wider" 
            style={{ fontFamily: 'var(--font-shippori-mincho), serif' }}
          >
            美しさの<br />
            その先へ
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 font-light mb-16 max-w-3xl mx-auto leading-relaxed">
            一人ひとりの個性を尊重し、本質的な美しさを引き出す
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/contact"
              className="px-12 py-5 bg-[#1a1a1a] text-white text-sm tracking-widest uppercase hover:bg-[#d4af37] transition-all duration-500"
            >
              ご予約
            </Link>
            <Link
              href="#concept"
              className="px-12 py-5 bg-white text-[#1a1a1a] text-sm tracking-widest uppercase border border-[#1a1a1a]/20 hover:border-[#1a1a1a] transition-all duration-500"
            >
              詳しく見る
            </Link>
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section id="concept" className="py-32 px-6 bg-[#fdfbf8]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-light mb-16 text-[#1a1a1a]" style={{ fontFamily: 'var(--font-shippori-mincho), serif' }}>
            Concept
          </h2>
          <div className="space-y-8 text-lg text-gray-700 font-light leading-loose max-w-3xl mx-auto">
            <p>
              美容医療は、単なる外見の変化ではなく、<br />
              あなた自身と向き合う、大切な時間です。
            </p>
            <p>
              私たちは、一人ひとりの個性を尊重し、<br />
              本質的な美しさを引き出すことを使命としています。
            </p>
            <p className="text-[#d4af37] font-medium">
              「美しさのその先へ」
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-light mb-12 text-[#1a1a1a] leading-relaxed" style={{ fontFamily: 'var(--font-shippori-mincho), serif' }}>
            まずは、お気軽に<br />
            ご相談ください
          </h2>
          <p className="text-base md:text-lg text-gray-600 font-light mb-16 leading-loose">
            カウンセリングは無料です。<br />
            あなたの理想を、お聞かせください。
          </p>
          <Link
            href="/contact"
            className="inline-block px-16 py-6 bg-[#1a1a1a] text-white text-sm tracking-widest uppercase hover:bg-[#d4af37] transition-all duration-500"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div>
              <h3 className="text-2xl mb-6 text-[#d4af37]" style={{ fontFamily: 'var(--font-shippori-mincho), serif' }}>LOCO CLINIC</h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                美しさのその先へ
              </p>
            </div>
            <div>
              <h4 className="text-xs tracking-widest uppercase mb-4 text-gray-400">Menu</h4>
              <ul className="space-y-3 text-sm font-light">
                <li><Link href="/artmake" className="hover:text-[#d4af37] transition">アートメイク</Link></li>
                <li><Link href="/menu" className="hover:text-[#d4af37] transition">施術メニュー</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs tracking-widest uppercase mb-4 text-gray-400">Information</h4>
              <ul className="space-y-3 text-sm font-light">
                <li><Link href="/faq" className="hover:text-[#d4af37] transition">よくある質問</Link></li>
                <li><Link href="/contact" className="hover:text-[#d4af37] transition">お問い合わせ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs tracking-widest uppercase mb-4 text-gray-400">Contact</h4>
              <p className="text-sm font-light leading-relaxed mb-4">
                〒370-0005<br />
                群馬県高崎市浜尻町２０９−５
              </p>
              <a href="tel:027-395-0443" className="text-base hover:text-[#d4af37] transition">
                027-395-0443
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-xs text-gray-500 font-light">&copy; 2026 LOCO CLINIC. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
