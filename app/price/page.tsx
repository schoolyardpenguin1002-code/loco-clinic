import Link from "next/link";
import { CONSULTATION_FEE_SENTENCE } from "@/lib/consultation-fee";
import Header from "../components/Header";

export default function PricePage() {
  const priceList = [
    {
      category: "カウンセリング",
      items: [{ name: "カウンセリング", price: "¥5,000", note: "税別" }],
    },
    {
      category: "アートメイク",
      items: [
        { name: "眉アートメイク（毛並み）", price: "¥88,000", note: "2回セット" },
        { name: "眉アートメイク（パウダー）", price: "¥88,000", note: "2回セット" },
        { name: "眉アートメイク（コンビネーション）", price: "¥99,000", note: "2回セット" },
        { name: "眉リタッチ（1年以内）", price: "¥33,000", note: "1回" },
        { name: "眉リタッチ（2年以内）", price: "¥44,000", note: "1回" },
        { name: "リップアートメイク", price: "¥110,000", note: "2回セット" },
        { name: "リップリタッチ（1年以内）", price: "¥44,000", note: "1回" },
        { name: "ヘアラインアートメイク", price: "¥132,000", note: "2回セット" },
        { name: "ヘアラインリタッチ（1年以内）", price: "¥55,000", note: "1回" },
      ],
    },
    {
      category: "糸リフト",
      items: [
        { name: "糸リフト 4本", price: "¥132,000", note: "" },
        { name: "糸リフト 6本", price: "¥198,000", note: "人気No.1" },
        { name: "糸リフト 8本", price: "¥264,000", note: "" },
        { name: "糸リフト 10本", price: "¥330,000", note: "" },
      ],
    },
    {
      category: "ボトックス",
      items: [
        { name: "額", price: "¥33,000", note: "" },
        { name: "眉間", price: "¥33,000", note: "" },
        { name: "目尻", price: "¥33,000", note: "" },
        { name: "バニーライン", price: "¥22,000", note: "" },
        { name: "あご", price: "¥27,500", note: "" },
        { name: "エラ（咬筋）", price: "¥55,000", note: "小顔効果" },
      ],
    },
    {
      category: "ヒアルロン酸",
      items: [
        { name: "ほうれい線", price: "¥66,000", note: "1cc" },
        { name: "涙袋", price: "¥55,000", note: "1cc" },
        { name: "あご", price: "¥66,000", note: "1cc" },
        { name: "鼻筋", price: "¥66,000", note: "1cc" },
        { name: "頬", price: "¥77,000", note: "1cc" },
        { name: "唇", price: "¥66,000", note: "1cc" },
      ],
    },
    {
      category: "美肌治療",
      items: [
        { name: "ダーマペン4（全顔）", price: "¥22,000", note: "" },
        { name: "ダーマペン4（全顔）＋美容液", price: "¥33,000", note: "" },
        { name: "ハイドラフェイシャル", price: "¥16,500", note: "" },
        { name: "ピコトーニング（全顔）", price: "¥27,500", note: "" },
        { name: "ピコスポット", price: "¥5,500", note: "1cm×1cm" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#fdfbf8]">
      {/* ヘッダー */}
      <Header />

      {/* ヒーローセクション */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-[#ffecd1] via-[#f5ebe0] to-white">
        <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            料金表
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
            明確な料金設定で、安心してご利用いただけます。<br />
            ※{CONSULTATION_FEE_SENTENCE}その他の施術メニューは税込価格です。
          </p>
        </div>
      </section>

      {/* 料金表 */}
      <section className="py-20 px-6 bg-white">
        <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 space-y-16">
          {priceList.map((category, index) => (
            <div key={index}>
              <h2 className="text-3xl font-bold text-gray-800 mb-8 pb-4 border-b-2 border-[#d4af37]">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-gradient-to-r from-white to-[#fdfbf8] border border-[#d4af37]/20 rounded-xl p-6 hover:shadow-md transition flex items-center justify-between"
                  >
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{item.name}</h3>
                      {item.note && (
                        <span className="inline-block px-3 py-1 bg-[#ffecd1] text-[#c19b2f] text-sm rounded-full">
                          {item.note}
                        </span>
                      )}
                    </div>
                    <div className="text-[#d4af37] font-bold text-2xl flex-shrink-0 ml-6">
                      {item.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* お支払い方法 */}
      <section className="py-20 px-6 bg-[#f5ebe0]">
        <div className="w-full max-w-5xl mx-auto px-5 sm:px-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            お支払い方法
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-md text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#d4af37] to-[#c19b2f] rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                💳
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">クレジットカード</h3>
              <p className="text-gray-600 text-sm">VISA / MasterCard / JCB / AMEX</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-md text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#d4af37] to-[#c19b2f] rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                💰
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">現金</h3>
              <p className="text-gray-600 text-sm">当日のお支払いも可能です</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-md text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#d4af37] to-[#c19b2f] rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                📱
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">電子決済</h3>
              <p className="text-gray-600 text-sm">PayPay / 楽天Pay対応</p>
            </div>
          </div>
        </div>
      </section>

      {/* 注意事項 */}
      <section className="py-20 px-6 bg-white">
        <div className="w-full max-w-5xl mx-auto px-5 sm:px-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            ご予約・キャンセルについて
          </h2>
          <div className="bg-[#fdfbf8] border border-[#d4af37]/20 rounded-2xl p-8">
            <ul className="space-y-4 text-gray-700 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-[#d4af37] font-bold flex-shrink-0">●</span>
                <span>ご予約は、お電話またはWebフォームより承っております。</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d4af37] font-bold flex-shrink-0">●</span>
                <span>キャンセルは、前日までにご連絡ください。当日キャンセルはキャンセル料が発生する場合がございます。</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d4af37] font-bold flex-shrink-0">●</span>
                <span>施術内容によっては、カウンセリング当日の施術が難しい場合がございます。</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d4af37] font-bold flex-shrink-0">●</span>
                <span>料金は予告なく変更になる場合がございます。最新の料金はお問い合わせください。</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#f5ebe0]">
        <div className="w-full max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            まずはお気軽にご相談ください
          </h2>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            カウンセリングにて、お見積もりをお出しします。{CONSULTATION_FEE_SENTENCE}
            <br />
            お気軽にお問い合わせください。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-12 py-4 bg-[#d4af37] text-white rounded-full text-base font-semibold hover:bg-[#c19b2f] transition shadow-lg"
            >
              ご予約・お問い合わせ
            </Link>
            <Link
              href="/menu"
              className="w-full sm:w-auto px-12 py-4 bg-white text-[#d4af37] border-2 border-[#d4af37] rounded-full text-base font-semibold hover:bg-[#d4af37] hover:text-white transition"
            >
              施術メニューを見る
            </Link>
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
                <li><Link href="/menu" className="hover:text-[#d4af37] transition">施術メニュー</Link></li>
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
