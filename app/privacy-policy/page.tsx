import type { Metadata } from "next";
import SiteHeader from "@/app/components/site/SiteHeader";
import SiteFooter from "@/app/components/site/SiteFooter";
import FixedCta from "@/app/components/site/FixedCta";
import BotanicalArt from "@/app/components/site/BotanicalArt";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "LOCO CLINIC（ロコクリニック）の個人情報保護方針です。",
};

type Section = {
  n: string;
  title: string;
  body?: string[];
  bullets?: string[];
  groups?: { label: string; text: string }[];
};

const SECTIONS: Section[] = [
  {
    n: "1",
    title: "法令遵守",
    body: [
      "当院は、個人情報の保護に関する法律（平成15年法律第57号。以下「個人情報保護法」）、医療法、厚生労働省ガイドラインその他関連法令・規範を遵守します。",
    ],
  },
  {
    n: "2",
    title: "個人情報の定義",
    body: [
      "本ポリシーにおける「個人情報」とは、個人情報保護法第2条1項に定義される、生存する個人に関する情報であり、氏名、生年月日、住所、電話番号、メールアドレス、画像・映像、診療録その他の要配慮個人情報（健康・医療情報等）を含みます。",
    ],
  },
  {
    n: "3",
    title: "取得方法",
    groups: [
      { label: "診療・カウンセリング時", text: "受診申込書、問診票、医療面談、オンライン予約フォームなどを通じて取得します。" },
      { label: "ウェブサイト利用時", text: "お問い合わせフォーム、メール、SNS連携、Cookie等によるアクセス解析ツール（Google Analytics等）を通じて取得する場合があります。" },
    ],
  },
  {
    n: "4",
    title: "利用目的",
    body: [
      "取得した個人情報は、以下の目的の範囲内で利用します。目的外利用を行う場合は、法令上許容される場合を除き、あらためて本人の同意を得ます。",
    ],
    bullets: [
      "【医療提供】診察・施術・看護・医療事務、医療安全管理、保険請求、診療録作成・保存",
      "【患者支援】カウンセリング・フォローアップ連絡、検査結果通知、紹介状作成",
      "【運営管理】予約確認、料金請求、会計監査、院内業務改善、職員教育",
      "【研究・広報】統計・学術研究（匿名加工情報に限る）、学会発表、症例写真掲載（本人の事前同意取得）",
      "【マーケティング】新施術・キャンペーン等のご案内、満足度調査（ダイレクトメール・メールマガジン配信はオプトアウト可）",
      "【法令対応】医師法・医療法等に基づく届出、行政機関・審査支払機関への報告",
    ],
  },
  {
    n: "5",
    title: "安全管理措置",
    body: ["当院は、個人情報の漏えい、滅失、毀損を防止するため、次の安全管理措置を講じます。"],
    bullets: [
      "アクセス制御、パスワード管理、端末の暗号化",
      "電子カルテ・予約システムのファイアウォール、ウイルス対策",
      "物理的安全管理（施錠保管、監視カメラ、入退室管理）",
      "職員教育、秘密保持契約、定期的監査",
      "匿名加工情報の適正生成・第三者提供履歴の記録",
    ],
  },
  {
    n: "6",
    title: "委託・共同利用",
    groups: [
      { label: "委託", text: "検査会社、医療機器メーカー、クラウドサーバー運営会社等に業務を委託する場合、適切な委託契約を締結し、委託先を監督します。" },
      { label: "共同利用", text: "グループクリニックや提携医療機関と診療情報を共同利用する場合は、共同利用の目的・範囲・管理責任者を明示します。" },
    ],
  },
  {
    n: "7",
    title: "第三者提供",
    body: [
      "本人の同意がある場合または法令に基づく場合を除き、個人情報を第三者に提供しません。保険診療に関わる保険者・審査支払機関等への提供、裁判所・行政機関の命令または弁護士法23条の2に基づく照会に対する開示は、法令に従い適切に行います。",
    ],
  },
  {
    n: "8",
    title: "開示・訂正・利用停止等の手続",
    body: [
      "本人または代理人から、個人情報の「開示・訂正・追加・削除・利用停止・消去・第三者提供停止」の請求があった場合、個人情報保護法および院内規程に従い、書面・身分証確認の後、遅滞なく対応します（手数料を要する場合がございます）。",
    ],
  },
  {
    n: "9",
    title: "Cookie・アクセス解析について",
    body: [
      "当院ウェブサイトでは、サービス向上のためCookieを使用し、Google LLC等第三者提供のアクセス解析ツールを利用しています。Cookieはブラウザ設定で無効化できますが、機能の一部がご利用いただけなくなる場合があります。",
    ],
  },
  {
    n: "10",
    title: "外部リンク",
    body: [
      "当院ウェブサイトには外部サイトへのリンクが含まれる場合があります。リンク先での個人情報取り扱いについては、当院では責任を負いかねますので、各サイトのポリシーをご確認ください。",
    ],
  },
  {
    n: "11",
    title: "未成年の個人情報",
    body: [
      "16歳未満の方が当院ウェブサイトで個人情報を送信する場合は、必ず保護者の同意を得たうえで行ってください。診療契約には別途親権者同意書を徴求します。",
    ],
  },
  {
    n: "12",
    title: "本ポリシーの改定",
    body: [
      "法令改正やサービス内容の変更等に応じ、予告なく改定することがあります。改定後のポリシーは当ウェブサイトに掲載した時点から適用されます。",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="price-page min-h-screen w-full bg-[#fffbf6] text-[#70645c]">
      <SiteHeader />
      <main className="w-full">
        <section className="relative overflow-hidden bg-white px-6 text-center" style={{ paddingTop: "150px", paddingBottom: "80px" }}>
          <BotanicalArt className="pointer-events-none absolute -left-14 -top-6 h-[130%] text-[#6f4e2f]" />
          <BotanicalArt className="pointer-events-none absolute -right-20 top-0 h-[120%] scale-x-[-1] text-[#b9a05a]" />
          <p className="mb-4 text-[12.5px] tracking-[0.35em] text-[#b9a05a]">PRIVACY POLICY</p>
          <h1
            className="text-[clamp(24px,4vw,38px)] font-light tracking-[0.14em]"
            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
          >
            プライバシーポリシー
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-[15px] font-light leading-loose">個人情報保護方針</p>
        </section>

        <section className="px-6" style={{ paddingTop: "90px", paddingBottom: "120px" }}>
          <div className="mx-auto w-full max-w-3xl">
            <p className="text-[15px] font-light leading-[2.1]">
              ロコクリニック（以下「当院」といいます）は、患者さま及びウェブサイト利用者さまの個人情報を適切に保護・管理することを社会的責務と考え、以下のとおりプライバシーポリシーを定めます。
            </p>

            <div className="mt-14 space-y-12">
              {SECTIONS.map((sec) => (
                <div key={sec.n} className="border-t border-[#e9e6e6] pt-8">
                  <h2 className="flex items-baseline gap-4 text-[17px] tracking-[0.08em]" style={{ fontFamily: "var(--font-shippori-mincho), serif" }}>
                    <span className="font-heading text-[13px] tracking-[0.2em] text-[#b9a05a]">{sec.n.padStart(2, "0")}</span>
                    {sec.title}
                  </h2>
                  <div className="mt-4 space-y-3 text-[14.5px] font-light leading-[2]">
                    {sec.body?.map((t) => <p key={t}>{t}</p>)}
                    {sec.groups?.map((g) => (
                      <p key={g.label}>
                        <span className="text-[#8a7a55]">【{g.label}】</span>
                        {g.text}
                      </p>
                    ))}
                    {sec.bullets && (
                      <ul className="space-y-2">
                        {sec.bullets.map((b) => (
                          <li key={b} className="flex gap-3">
                            <span className="text-[#b9a05a]">・</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}

              <div className="border-t border-[#e9e6e6] pt-8">
                <h2 className="flex items-baseline gap-4 text-[17px] tracking-[0.08em]" style={{ fontFamily: "var(--font-shippori-mincho), serif" }}>
                  <span className="font-heading text-[13px] tracking-[0.2em] text-[#b9a05a]">13</span>
                  お問い合わせ窓口
                </h2>
                <div className="mt-4 text-[14.5px] font-light leading-[2]">
                  <p>個人情報に関するお問い合わせ・ご相談・開示請求等は、下記窓口までご連絡ください。</p>
                  <div className="mt-5 border border-[#e9e6e6] bg-white p-7">
                    <p style={{ fontFamily: "var(--font-shippori-mincho), serif" }}>ロコクリニック</p>
                    <p className="mt-2">所在地：〒370-0005　群馬県高崎市浜尻町209-5</p>
                    <p className="mt-1">電話：027-395-0443</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 border-t border-[#e9e6e6] pt-8 text-center text-[14px] font-light leading-[2]">
              <p>2025年6月15日</p>
              <p style={{ fontFamily: "var(--font-shippori-mincho), serif" }}>ロコクリニック</p>
              <p>個人情報保護管理責任者：狩野 遊太</p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <FixedCta />
    </div>
  );
}
