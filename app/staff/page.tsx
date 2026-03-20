import Link from "next/link";
import Header from "../components/Header";

export default function StaffPage() {
  const doctors = [
    {
      name: "山田 太郎",
      position: "院長 / 美容外科医",
      qualification: "日本美容外科学会認定専門医",
      experience: "美容医療歴15年",
      message: "患者様お一人おひとりのお悩みに寄り添い、最適な治療をご提案します。美容医療を通じて、皆様の人生がより豊かになるよう全力でサポートいたします。",
    },
    {
      name: "佐々木 花子",
      position: "副院長 / 美容皮膚科医",
      qualification: "日本皮膚科学会認定専門医",
      experience: "美容皮膚科歴10年",
      message: "お肌のお悩みは、私にお任せください。最新の美容皮膚科治療で、あなたの理想の肌を叶えます。",
    },
  ];

  const staff = [
    {
      name: "田中 美咲",
      position: "看護師 / アートメイクアーティスト",
      experience: "アートメイク歴6年",
      message: "自然で美しい仕上がりを大切にしています。",
    },
    {
      name: "鈴木 さくら",
      position: "看護師",
      experience: "美容看護師歴8年",
      message: "施術中の不安を和らげ、リラックスしていただけるよう心がけています。",
    },
    {
      name: "伊藤 あゆみ",
      position: "カウンセラー",
      experience: "美容カウンセラー歴5年",
      message: "お客様のお悩みをしっかりとお聞きし、最適なプランをご提案します。",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fdfbf8]">
      {/* ヘッダー */}
      <Header />

      {/* ヒーローセクション */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-[#ffecd1] via-[#f5ebe0] to-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            医師・スタッフ紹介
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
            経験豊富な医師と、心温かいスタッフが<br />
            あなたの理想を叶えるお手伝いをします。
          </p>
        </div>
      </section>

      {/* 医師紹介 */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            医師紹介
          </h2>
          <div className="space-y-12">
            {doctors.map((doctor, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-[#fdfbf8] border border-[#d4af37]/20 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
              >
                <div className="md:flex">
                  <div className="md:w-1/3 h-80 md:h-auto bg-gradient-to-br from-[#d4af37]/30 to-[#ffecd1] flex items-center justify-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-[#d4af37] to-[#c19b2f] rounded-full flex items-center justify-center text-white text-5xl font-bold">
                      {doctor.name.charAt(0)}
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">{doctor.name}</h3>
                    <p className="text-[#d4af37] font-semibold text-lg mb-4">{doctor.position}</p>
                    <div className="space-y-2 mb-6">
                      <p className="text-gray-700"><span className="font-semibold">資格：</span>{doctor.qualification}</p>
                      <p className="text-gray-700"><span className="font-semibold">経歴：</span>{doctor.experience}</p>
                    </div>
                    <div className="bg-[#ffecd1]/50 p-4 rounded-lg">
                      <p className="text-gray-700 leading-relaxed italic">{doctor.message}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* スタッフ紹介 */}
      <section className="py-20 px-6 bg-[#f5ebe0]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            スタッフ紹介
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {staff.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
              >
                <div className="h-64 bg-gradient-to-br from-[#d4af37]/30 to-[#ffecd1] flex items-center justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#d4af37] to-[#c19b2f] rounded-full flex items-center justify-center text-white text-4xl font-bold">
                    {member.name.charAt(0)}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-[#d4af37] font-semibold mb-2">{member.position}</p>
                  <p className="text-sm text-gray-600 mb-4">{member.experience}</p>
                  <div className="bg-[#fdfbf8] p-4 rounded-lg">
                    <p className="text-gray-700 text-sm leading-relaxed italic">{member.message}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            私たちにお任せください
          </h2>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            経験豊富な医師と心温かいスタッフが、<br />
            あなたの理想を叶えるお手伝いをします。
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
