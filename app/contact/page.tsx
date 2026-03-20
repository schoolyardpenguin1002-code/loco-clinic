"use client";

import Link from "next/link";
import { useState } from "react";
import Header from "../components/Header";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    menu: "",
    date: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // フォーム送信処理（実装時にバックエンドと連携）
    alert("お問い合わせありがとうございます。担当者より折り返しご連絡いたします。");
  };

  return (
    <div className="min-h-screen bg-[#fdfbf8]">
      {/* ヘッダー */}
      <Header />

      {/* ヒーローセクション */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-[#ffecd1] via-[#f5ebe0] to-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            ご予約・お問い合わせ
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
            まずはお気軽にご相談ください。<br />
            無料カウンセリングも承っております。
          </p>
        </div>
      </section>

      {/* お問い合わせ方法 */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            お問い合わせ方法
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-white to-[#fdfbf8] border border-[#d4af37]/20 rounded-2xl p-8 shadow-md text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#d4af37] to-[#c19b2f] rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-4">
                📞
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">お電話</h3>
              <p className="text-gray-600 text-sm mb-4">受付時間：10:00〜19:00</p>
              <a
                href="tel:03-XXXX-XXXX"
                className="text-[#d4af37] font-bold text-2xl hover:underline"
              >
                03-XXXX-XXXX
              </a>
            </div>
            <div className="bg-gradient-to-br from-white to-[#fdfbf8] border border-[#d4af37]/20 rounded-2xl p-8 shadow-md text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#d4af37] to-[#c19b2f] rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-4">
                💬
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">LINE</h3>
              <p className="text-gray-600 text-sm mb-4">24時間受付中</p>
              <button className="px-6 py-2 bg-[#06C755] text-white rounded-full text-sm font-semibold hover:opacity-80 transition">
                友だち追加する
              </button>
            </div>
            <div className="bg-gradient-to-br from-white to-[#fdfbf8] border border-[#d4af37]/20 rounded-2xl p-8 shadow-md text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#d4af37] to-[#c19b2f] rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-4">
                📧
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Webフォーム</h3>
              <p className="text-gray-600 text-sm mb-4">下記フォームよりお問い合わせください</p>
            </div>
          </div>
        </div>
      </section>

      {/* お問い合わせフォーム */}
      <section className="py-20 px-6 bg-[#f5ebe0]">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            Webお問い合わせフォーム
          </h2>
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-md">
            <div className="space-y-6">
              <div>
                <label className="block text-gray-800 font-semibold mb-2">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                  placeholder="山田 太郎"
                />
              </div>
              <div>
                <label className="block text-gray-800 font-semibold mb-2">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                  placeholder="example@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-800 font-semibold mb-2">
                  電話番号 <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                  placeholder="090-1234-5678"
                />
              </div>
              <div>
                <label className="block text-gray-800 font-semibold mb-2">
                  ご希望の施術メニュー
                </label>
                <select
                  value={formData.menu}
                  onChange={(e) => setFormData({ ...formData, menu: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                >
                  <option value="">選択してください</option>
                  <option value="artmake-eyebrow">アートメイク（眉）</option>
                  <option value="artmake-lip">アートメイク（リップ）</option>
                  <option value="artmake-hairline">アートメイク（ヘアライン）</option>
                  <option value="thread-lift">糸リフト</option>
                  <option value="botox">ボトックス</option>
                  <option value="hyaluronic">ヒアルロン酸</option>
                  <option value="other">その他</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-800 font-semibold mb-2">
                  ご希望日時
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                />
              </div>
              <div>
                <label className="block text-gray-800 font-semibold mb-2">
                  お問い合わせ内容
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                  placeholder="ご質問やご要望などをご記入ください"
                />
              </div>
            </div>
            <div className="mt-8 text-center">
              <button
                type="submit"
                className="px-12 py-4 bg-[#d4af37] text-white rounded-full text-base font-semibold hover:bg-[#c19b2f] transition shadow-lg"
              >
                送信する
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* 注意事項 */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            ご予約について
          </h2>
          <div className="bg-[#fdfbf8] border border-[#d4af37]/20 rounded-2xl p-8">
            <ul className="space-y-4 text-gray-700 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-[#d4af37] font-bold flex-shrink-0">●</span>
                <span>ご予約は、お電話・LINE・Webフォームよりお願いいたします。</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d4af37] font-bold flex-shrink-0">●</span>
                <span>Webフォームからのお問い合わせは、24時間以内に担当者よりご連絡いたします。</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d4af37] font-bold flex-shrink-0">●</span>
                <span>初診の方は、カウンセリングのご予約からお願いいたします。</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d4af37] font-bold flex-shrink-0">●</span>
                <span>キャンセル・変更は、前日までにご連絡ください。</span>
              </li>
            </ul>
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
