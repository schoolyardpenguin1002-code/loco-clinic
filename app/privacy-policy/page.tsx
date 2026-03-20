import Link from "next/link";
import Header from "../components/Header";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#fdfbf8]">
      <Header />

      {/* ヒーローセクション */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-[#ffecd1] via-[#f5ebe0] to-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-heading text-gray-800 mb-6 leading-tight tracking-wide">
            プライバシーポリシー
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            個人情報保護方針
          </p>
        </div>
      </section>

      {/* ポリシー内容 */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-gradient-to-br from-white to-[#fdfbf8] border border-[#d4af37]/20 rounded-3xl p-8 md:p-12 shadow-xl">
            
            {/* 前文 */}
            <div className="mb-12 pb-8 border-b-2 border-[#d4af37]/20">
              <p className="text-gray-800 leading-relaxed text-lg">
                <span className="font-bold">《ロコクリニック》</span>（以下「当院」といいます）は、
                患者さま及びウェブサイト利用者さまの個人情報を適切に保護・管理することを社会的責務と考え、
                以下のとおりプライバシーポリシーを定めます。
              </p>
            </div>

            {/* 各セクション */}
            <div className="space-y-10">
              {/* 1. 法令遵守 */}
              <div>
                <h3 className="text-2xl font-bold font-heading text-gray-800 mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 bg-[#d4af37] text-white rounded-full flex items-center justify-center font-heading text-sm flex-shrink-0">1</span>
                  法令遵守
                </h3>
                <p className="text-gray-700 leading-relaxed pl-14">
                  当院は、個人情報の保護に関する法律（平成15年法律第57号。以下「個人情報保護法」）、医療法、厚生労働省ガイドラインその他関連法令・規範を遵守します。
                </p>
              </div>

              {/* 2. 個人情報の定義 */}
              <div>
                <h3 className="text-2xl font-bold font-heading text-gray-800 mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 bg-[#d4af37] text-white rounded-full flex items-center justify-center font-heading text-sm flex-shrink-0">2</span>
                  個人情報の定義
                </h3>
                <p className="text-gray-700 leading-relaxed pl-14">
                  本ポリシーにおける「個人情報」とは、個人情報保護法第2条1項に定義される、生存する個人に関する情報であり、氏名、生年月日、住所、電話番号、メールアドレス、画像・映像、診療録その他の要配慮個人情報（健康・医療情報等）を含みます。
                </p>
              </div>

              {/* 3. 取得方法 */}
              <div>
                <h3 className="text-2xl font-bold font-heading text-gray-800 mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 bg-[#d4af37] text-white rounded-full flex items-center justify-center font-heading text-sm flex-shrink-0">3</span>
                  取得方法
                </h3>
                <div className="pl-14 space-y-4">
                  <div>
                    <p className="font-semibold text-gray-800 mb-2">【診療・カウンセリング時】</p>
                    <p className="text-gray-700 leading-relaxed">
                      受診申込書、問診票、医療面談、オンライン予約フォームなどを通じて取得します。
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 mb-2">【ウェブサイト利用時】</p>
                    <p className="text-gray-700 leading-relaxed">
                      お問い合わせフォーム、メール、SNS連携、Cookie等によるアクセス解析ツール（Google Analytics等）を通じて取得する場合があります。
                    </p>
                  </div>
                </div>
              </div>

              {/* 4. 利用目的 */}
              <div>
                <h3 className="text-2xl font-bold font-heading text-gray-800 mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 bg-[#d4af37] text-white rounded-full flex items-center justify-center font-heading text-sm flex-shrink-0">4</span>
                  利用目的
                </h3>
                <div className="pl-14">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    取得した個人情報は、以下の目的の範囲内で利用します。目的外利用を行う場合は、法令上許容される場合を除き、あらためて本人の同意を得ます。
                  </p>
                  <ul className="space-y-2 text-gray-700 leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-[#d4af37] flex-shrink-0">•</span>
                      <span><span className="font-semibold">【医療提供】</span>診察・施術・看護・医療事務、医療安全管理、保険請求、診療録作成・保存</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#d4af37] flex-shrink-0">•</span>
                      <span><span className="font-semibold">【患者支援】</span>カウンセリング・フォローアップ連絡、検査結果通知、紹介状作成</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#d4af37] flex-shrink-0">•</span>
                      <span><span className="font-semibold">【運営管理】</span>予約確認、料金請求、会計監査、院内業務改善、職員教育</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#d4af37] flex-shrink-0">•</span>
                      <span><span className="font-semibold">【研究・広報】</span>統計・学術研究（匿名加工情報に限る）、学会発表、症例写真掲載（本人の事前同意取得）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#d4af37] flex-shrink-0">•</span>
                      <span><span className="font-semibold">【マーケティング】</span>新施術・キャンペーン等のご案内、満足度調査（ダイレクトメール・メールマガジン配信はオプトアウト可）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#d4af37] flex-shrink-0">•</span>
                      <span><span className="font-semibold">【法令対応】</span>医師法・医療法等に基づく届出、行政機関・審査支払機関への報告</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* 5-13の項目を同様に追加 */}
              {[
                {
                  num: "5",
                  title: "安全管理措置",
                  content: (
                    <>
                      <p className="text-gray-700 leading-relaxed mb-3">
                        当院は、個人情報の漏えい、滅失、毀損を防止するため、次の安全管理措置を講じます。
                      </p>
                      <ul className="space-y-2 text-gray-700 leading-relaxed">
                        <li className="flex items-start gap-2">
                          <span className="text-[#d4af37] flex-shrink-0">•</span>
                          <span>アクセス制御、パスワード管理、端末の暗号化</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#d4af37] flex-shrink-0">•</span>
                          <span>電子カルテ・予約システムのファイアウォール、ウイルス対策</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#d4af37] flex-shrink-0">•</span>
                          <span>物理的安全管理（施錠保管、監視カメラ、入退室管理）</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#d4af37] flex-shrink-0">•</span>
                          <span>職員教育、秘密保持契約、定期的監査</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#d4af37] flex-shrink-0">•</span>
                          <span>匿名加工情報の適正生成・第三者提供履歴の記録</span>
                        </li>
                      </ul>
                    </>
                  ),
                },
                {
                  num: "6",
                  title: "委託・共同利用",
                  content: (
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold text-gray-800 mb-2">【委託】</p>
                        <p className="text-gray-700 leading-relaxed">
                          検査会社、医療機器メーカー、クラウドサーバー運営会社等に業務を委託する場合、適切な委託契約を締結し、委託先を監督します。
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 mb-2">【共同利用】</p>
                        <p className="text-gray-700 leading-relaxed">
                          グループクリニックや提携医療機関と診療情報を共同利用する場合は、共同利用の目的・範囲・管理責任者を明示します。
                        </p>
                      </div>
                    </div>
                  ),
                },
                {
                  num: "7",
                  title: "第三者提供",
                  content: (
                    <p className="text-gray-700 leading-relaxed">
                      本人の同意がある場合または法令に基づく場合を除き、個人情報を第三者に提供しません。
                      保険診療に関わる保険者・審査支払機関等への提供、裁判所・行政機関の命令または弁護士法23条の2に基づく照会に対する開示は、法令に従い適切に行います。
                    </p>
                  ),
                },
                {
                  num: "8",
                  title: "開示・訂正・利用停止等の手続",
                  content: (
                    <p className="text-gray-700 leading-relaxed">
                      本人または代理人から、個人情報の「開示・訂正・追加・削除・利用停止・消去・第三者提供停止」の請求があった場合、個人情報保護法および院内規程に従い、書面・身分証確認の後、遅滞なく対応します（手数料要する場合がございます）。
                    </p>
                  ),
                },
                {
                  num: "9",
                  title: "Cookie・アクセス解析について",
                  content: (
                    <p className="text-gray-700 leading-relaxed">
                      当院ウェブサイトでは、サービス向上のためCookieを使用し、Google LLC等第三者提供のアクセス解析ツールを利用しています。Cookieはブラウザ設定で無効化できますが、機能の一部がご利用いただけなくなる場合があります。
                    </p>
                  ),
                },
                {
                  num: "10",
                  title: "外部リンク",
                  content: (
                    <p className="text-gray-700 leading-relaxed">
                      当院ウェブサイトには外部サイトへのリンクが含まれる場合があります。リンク先での個人情報取り扱いについては、当院では責任を負いかねますので、各サイトのポリシーをご確認ください。
                    </p>
                  ),
                },
                {
                  num: "11",
                  title: "未成年の個人情報",
                  content: (
                    <p className="text-gray-700 leading-relaxed">
                      16歳未満の方が当院ウェブサイトで個人情報を送信する場合は、必ず保護者の同意を得たうえで行ってください。診療契約には別途親権者同意書を徴求します。
                    </p>
                  ),
                },
                {
                  num: "12",
                  title: "本ポリシーの改定",
                  content: (
                    <p className="text-gray-700 leading-relaxed">
                      法令改正やサービス内容の変更等に応じ、予告なく改定することがあります。改定後のポリシーは当ウェブサイトに掲載した時点から適用されます。
                    </p>
                  ),
                },
              ].map((section) => (
                <div key={section.num}>
                  <h3 className="text-2xl font-bold font-heading text-gray-800 mb-4 flex items-center gap-3">
                    <span className="w-10 h-10 bg-[#d4af37] text-white rounded-full flex items-center justify-center font-heading text-sm flex-shrink-0">
                      {section.num}
                    </span>
                    {section.title}
                  </h3>
                  <div className="pl-14">{section.content}</div>
                </div>
              ))}

              {/* 13. お問い合わせ窓口 */}
              <div className="bg-gradient-to-r from-[#ffecd1]/30 to-[#f5ebe0]/30 rounded-2xl p-6 md:p-8 border border-[#d4af37]/20">
                <h3 className="text-2xl font-bold font-heading text-gray-800 mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 bg-[#d4af37] text-white rounded-full flex items-center justify-center font-heading text-sm flex-shrink-0">13</span>
                  お問い合わせ窓口
                </h3>
                <div className="pl-14">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    個人情報に関するお問い合わせ・ご相談・開示請求等は、下記窓口までご連絡ください。
                  </p>
                  <div className="bg-white rounded-xl p-6 space-y-2">
                    <p className="font-bold text-gray-800 text-lg">ロコクリニック</p>
                    <p className="text-gray-700">所在地：〒370-0005　群馬県高崎市浜尻町209-5</p>
                    <p className="text-gray-700">
                      電話：<a href="tel:027-395-0443" className="text-[#d4af37] font-heading font-bold hover:underline">027-395-0443</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 制定日・責任者 */}
            <div className="mt-12 pt-8 border-t-2 border-[#d4af37]/20 text-center space-y-2">
              <p className="text-gray-700 font-semibold">2025年6月15日</p>
              <p className="text-gray-800 font-bold text-lg">ロコクリニック</p>
              <p className="text-gray-700">個人情報保護管理責任者：狩野 遊太</p>
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
