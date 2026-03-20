import Link from "next/link";
import Header from "../components/Header";

export default function CancelPolicyPage() {
  return (
    <div className="min-h-screen bg-[#fdfbf8]">
      <Header />

      {/* ヒーローセクション */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-[#ffecd1] via-[#f5ebe0] to-white">
        <div className="w-full max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-heading text-gray-800 mb-6 leading-tight tracking-wide">
            キャンセルポリシー
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            ご予約の変更・キャンセルに関する規定
          </p>
        </div>
      </section>

      {/* ポリシー内容 */}
      <section className="py-20 px-6 bg-white">
        <div className="w-full max-w-4xl mx-auto px-5 sm:px-8">
          <div className="text-left-balance bg-gradient-to-br from-white to-[#fdfbf8] border border-[#d4af37]/20 rounded-3xl p-8 md:p-12 shadow-xl">
            
            {/* ポリシー本文 */}
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <span className="w-12 h-12 bg-[#d4af37] text-white rounded-full flex items-center justify-center font-bold font-heading text-lg flex-shrink-0">
                  ①
                </span>
                <div className="flex-1 pt-2">
                  <p className="text-gray-800 leading-relaxed">
                    ご予約の変更・キャンセルは、<span className="font-bold text-[#d4af37]">前日までの18:00まで</span>であれば無料で承ります。
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    （例：火曜日のご予約→前日である月曜日の診療時間終了までにご連絡ください）
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="w-12 h-12 bg-[#d4af37] text-white rounded-full flex items-center justify-center font-bold font-heading text-lg flex-shrink-0">
                  ②
                </span>
                <div className="flex-1 pt-2">
                  <p className="text-gray-800 leading-relaxed mb-4">
                    <span className="font-bold">当日キャンセル</span>（前日18:00以降のご連絡・無断キャンセルを含む）は、いかなる理由であってもキャンセル料が発生いたします。
                  </p>
                  <div className="bg-[#ffecd1]/50 rounded-xl p-4 space-y-2">
                    <p className="text-gray-800">
                      • 施術（コース消化予定以外の方）：<span className="font-heading font-bold text-[#d4af37] text-lg">¥5,500（税込）</span>
                    </p>
                    <p className="text-gray-800">
                      • コース消化予定の方：<span className="font-bold text-[#d4af37]">1回分消化</span>となります。
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="w-12 h-12 bg-[#d4af37] text-white rounded-full flex items-center justify-center font-bold font-heading text-lg flex-shrink-0">
                  ③
                </span>
                <div className="flex-1 pt-2">
                  <p className="text-gray-800 leading-relaxed">
                    ご予約時間に<span className="font-bold">15分以上遅刻</span>された場合、当日の施術ができかねる場合がございます。
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    • その際は当日キャンセルと同様の扱いとなります。
                  </p>
                </div>
              </div>
            </div>

            {/* ご注意事項 */}
            <div className="border-t-2 border-[#d4af37]/20 pt-8 mb-8">
              <h3 className="text-2xl font-bold font-heading text-gray-800 mb-6 flex items-center gap-3">
                <span className="text-[#d4af37]">⚠️</span>
                ご注意事項
              </h3>
              <ul className="space-y-3 text-gray-700 leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-[#d4af37] flex-shrink-0">•</span>
                  <span>公共交通機関の遅延や道路混雑などの理由も、原則として考慮いたしかねます。余裕を持ってご来院ください。</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#d4af37] flex-shrink-0">•</span>
                  <span>キャンセル料につきましては、次回ご来院時又は振込にてお願いいたします。</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#d4af37] flex-shrink-0">•</span>
                  <span>キャンセル料のお支払いがない場合は、以降のご予約をお断りすることがございます。</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#d4af37] flex-shrink-0">•</span>
                  <span>当院の都合により日程変更をお願いする場合は、キャンセル料は発生いたしません。</span>
                </li>
              </ul>
            </div>

            {/* 当院の想い */}
            <div className="bg-gradient-to-r from-[#ffecd1]/30 to-[#f5ebe0]/30 rounded-2xl p-6 md:p-8 border border-[#d4af37]/20">
              <h3 className="text-2xl font-bold font-heading text-gray-800 mb-4 flex items-center gap-3">
                <span className="text-[#d4af37]">💭</span>
                当院の想い
              </h3>
              <p className="text-gray-800 leading-relaxed">
                当院では、すべての患者様に質の高い医療を提供するため、時間枠を確保し、準備を行っております。<br />
                ご理解とご協力のほど、どうぞよろしくお願い申し上げます。
              </p>
            </div>
          </div>

          {/* CTAボタン */}
          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-block px-12 py-4 bg-[#d4af37] text-white rounded-full text-base font-semibold hover:bg-[#c19b2f] transition shadow-lg"
            >
              ご予約・お問い合わせ
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
                <li><Link href="/staff" className="hover:text-[#d4af37] transition">医師・スタッフ紹介</Link></li>
                <li><Link href="/price" className="hover:text-[#d4af37] transition">料金表</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">インフォメーション</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/faq" className="hover:text-[#d4af37] transition">よくある質問</Link></li>
                <li><Link href="/contact" className="hover:text-[#d4af37] transition">お問い合わせ</Link></li>
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
