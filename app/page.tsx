import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "発達・不登校のこどもと家族の相談外来｜ロコクリニック（高崎市）",
  },
  description:
    "群馬県高崎市のロコクリニック。発達・不登校のこどもと家族の相談外来。親御さんだけの相談から始められます。保険診療・完全予約制・初診30分。ご希望の方には看護師がご自宅に伺う訪問看護と連携しています。",
  openGraph: {
    title: "発達・不登校のこどもと家族の相談外来｜ロコクリニック（高崎市）",
    description:
      "こどもを病院に連れて行けない。そこから、始められます。親御さんだけの相談から始められる外来です。保険診療・完全予約制。",
    url: "https://www.lococlinic.com",
    siteName: "ロコクリニック",
    locale: "ja_JP",
    type: "website",
  },
};

/* 未確定情報のプレースホルダ（薄黄色ハイライト） */
function PH({ children }: { children: React.ReactNode }) {
  return (
    <mark className="rounded bg-yellow-100 px-1 py-0.5 text-inherit">
      {children}
    </mark>
  );
}

const ACCENT = "text-[#2e5a4b]";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className={`mb-8 border-l-2 border-[#2e5a4b] pl-4 text-lg leading-relaxed tracking-wide ${ACCENT} sm:text-xl`}
    >
      {children}
    </h2>
  );
}

function LineButton() {
  return (
    <a
      href="#reserve"
      className="inline-block rounded-md bg-[#2e5a4b] px-8 py-4 text-base text-white transition-opacity hover:opacity-90"
    >
      ご予約・ご相談はLINEから
    </a>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[15px] leading-loose text-neutral-800 sm:text-base">
      {/* ヘッダー */}
      <header className="border-b border-neutral-200">
        <div className="mx-auto flex max-w-2xl items-baseline justify-between px-5 py-4">
          <p className="text-sm tracking-widest text-neutral-700">
            ロコクリニック
          </p>
          <p className="text-xs text-neutral-500">高崎市</p>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-5 pb-32 sm:pb-24">
        {/* 1. トップ */}
        <section className="pt-16 pb-14 sm:pt-24 sm:pb-20">
          <h1 className="text-2xl leading-[2] tracking-wide text-neutral-900 sm:text-3xl sm:leading-[1.9]">
            こどもを病院に連れて行けない。
            <br />
            そこから、始められます。
          </h1>
          <p className="mt-8">
            発達・不登校のこどもと家族の相談外来。
            <br />
            初回は、親御さんおひとりでの相談で大丈夫です。
          </p>
          <p className="mt-8 text-sm text-neutral-600">
            保険診療・完全予約制・初診30分／高崎市・ロコクリニック
          </p>
          <div className="mt-8">
            <LineButton />
          </div>
        </section>

        {/* 2. こんな方へ */}
        <section className="border-t border-neutral-200 py-14 sm:py-16">
          <SectionTitle>こんな方へ</SectionTitle>

          <h3 className="mb-4 text-neutral-900">
            お子さんのことで悩んでいる方へ
          </h3>
          <ul className="mb-5 space-y-2 text-neutral-700">
            <li className="flex gap-3">
              <span aria-hidden="true" className={ACCENT}>
                ・
              </span>
              学校に行けない日が続いている。行き渋りが増えてきた
            </li>
            <li className="flex gap-3">
              <span aria-hidden="true" className={ACCENT}>
                ・
              </span>
              発達障害かもしれないと言われた。あるいは、自分でそう感じている
            </li>
            <li className="flex gap-3">
              <span aria-hidden="true" className={ACCENT}>
                ・
              </span>
              昼夜が逆転している。食事が偏っている。ゲームやスマホの時間が長い
            </li>
            <li className="flex gap-3">
              <span aria-hidden="true" className={ACCENT}>
                ・
              </span>
              相談したいが、本人が「病院には行かない」と言っている
            </li>
          </ul>
          <p>
            最後のひとつが理由で、どこにも相談できずにいるご家族は少なくありません。この外来は、親御さんだけの相談から始められます。お子さんを連れてくることは、受診の条件ではありません。
          </p>

          <h3 className="mt-12 mb-4 text-neutral-900">
            おとなの方へ（通院が続かなかった方）
          </h3>
          <p>
            体調や気持ちの波で、決まった日に通院すること自体がむずかしい。予約を取っては、行けなくなってしまう。そういう方の相談もお受けしています。ご希望の方には、看護師がご自宅に伺う訪問看護と組み合わせて、通院の負担を減らしながら診療を続ける方法をご提案できます。
          </p>
          <p className="mt-4">
            休職に関する診断書や傷病手当金などの書類作成に対応しています（診察のうえで判断します）。
          </p>
        </section>

        {/* 3. この外来の考え方 */}
        <section className="border-t border-neutral-200 py-14 sm:py-16">
          <SectionTitle>この外来の考え方</SectionTitle>
          <p className="mb-8">
            事実として、この外来がやっていることを4つ書きます。
          </p>
          <div className="space-y-8">
            <p>
              ひとつめ。親御さんだけの受診で始められます。お子さんが来られるようになったら、そのときに来てもらえば十分です。来られない期間も、家庭でできることを親御さんと一緒に組み立てていきます。
            </p>
            <p>
              ふたつめ。診断名を確定させることを、ゴールにしていません。診断が必要な場面では検査や専門機関へのご紹介を行いますが、診断名が出る前から、眠り・食事・生活リズムの立て直しは今日から始められます。順番を待たない、ということです。
            </p>
            <p>
              みっつめ。ご希望の方には、看護師がご自宅に伺えます。同じ法人の訪問看護ステーションと連携しており、医師の指示のもと、看護師が定期的にご自宅を訪問します。診察室の30分だけでなく、ふだんの暮らしの場で様子を見られることが、この外来の特徴です。利用するかどうかは、ご相談のうえで決めていただけます。
            </p>
            <p>
              よっつめ。薬の前に、眠りと食事と居場所の話をします。お薬が必要な場合には保険診療の範囲でご説明のうえ処方しますが、まず生活を整えることから一緒に取り組みます。
            </p>
          </div>
        </section>

        {/* 4. 受診の流れ */}
        <section id="reserve" className="border-t border-neutral-200 py-14 sm:py-16">
          <SectionTitle>受診の流れ</SectionTitle>
          <ol className="space-y-8">
            <li className="flex gap-4">
              <span
                className={`mt-1 h-7 w-7 flex-none rounded-full border border-[#2e5a4b] text-center text-sm leading-6 ${ACCENT}`}
              >
                1
              </span>
              <div>
                <p className="text-neutral-900">LINEで一言、ご連絡ください</p>
                <p className="mt-1 text-neutral-700">
                  「不登校のことで」「発達のことで」だけでも大丈夫です。
                  <br />→ <PH>【LINE ID／登録リンク】</PH>
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span
                className={`mt-1 h-7 w-7 flex-none rounded-full border border-[#2e5a4b] text-center text-sm leading-6 ${ACCENT}`}
              >
                2
              </span>
              <div>
                <p className="text-neutral-900">
                  親御さんだけの事前相談（15分・無料・電話またはオンライン）
                </p>
                <p className="mt-1 text-neutral-700">
                  状況を伺い、この外来でお力になれるかどうかを先にお伝えします。
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span
                className={`mt-1 h-7 w-7 flex-none rounded-full border border-[#2e5a4b] text-center text-sm leading-6 ${ACCENT}`}
              >
                3
              </span>
              <div>
                <p className="text-neutral-900">初診のご予約</p>
                <p className="mt-1 text-neutral-700">
                  完全予約制です。初診は30分、ゆっくりお話を伺います。待合室で他のご家族と一緒になることは、ほぼありません。
                  <br />
                  現在、初診まで<PH>【○週間】</PH>
                  ほどお待ちいただいています。
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span
                className={`mt-1 h-7 w-7 flex-none rounded-full border border-[#2e5a4b] text-center text-sm leading-6 ${ACCENT}`}
              >
                4
              </span>
              <div>
                <p className="text-neutral-900">
                  必要に応じて、訪問看護のご案内
                </p>
                <p className="mt-1 text-neutral-700">
                  ご希望の方には、診察の結果をふまえて看護師のご自宅訪問を手配します。
                </p>
              </div>
            </li>
          </ol>

          <dl className="mt-12 space-y-3 border-t border-neutral-100 pt-8 text-neutral-700">
            <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
              <dt className="w-24 flex-none text-neutral-500">診療時間</dt>
              <dd>
                <PH>【曜日・時間帯（例：火・木 16:30〜19:00）】</PH>
              </dd>
            </div>
            <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
              <dt className="w-24 flex-none text-neutral-500">費用</dt>
              <dd>
                保険診療です。高崎市のお子さんは子ども医療費助成の対象となり、窓口負担は
                <PH>【0円／要確認】</PH>です。
              </dd>
            </div>
            <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
              <dt className="w-24 flex-none text-neutral-500">開始日</dt>
              <dd>
                <PH>【2026年10月1日（木）】</PH>
              </dd>
            </div>
          </dl>
        </section>

        {/* 5. 支援者の方へ */}
        <section className="border-t border-neutral-200 py-14 sm:py-16">
          <SectionTitle>支援者の方へ</SectionTitle>
          <p>
            相談支援事業所、スクールカウンセラー、養護教諭、ケアマネジャー、保健師のみなさまへ。
          </p>
          <p className="mt-6">
            「訪問看護を入れたいが、主治医が決まらず止まっている」というケースはありませんか。指示書を書く医師が見つからないために、必要な支援が数ヶ月動かない。そうした状態のご相談を、この外来でお受けしています。
          </p>
          <p className="mt-6">
            診察のうえ適応があれば、訪問看護指示書の交付まで一続きで対応します。ご本人が受診できない場合の進め方についても、まずはご相談ください。支援者の方からのお問い合わせは、LINEまたはお電話（<PH>【電話番号】</PH>
            ）でお受けしています。
          </p>
        </section>

        {/* 6. 院長あいさつ */}
        <section className="border-t border-neutral-200 py-14 sm:py-16">
          <SectionTitle>院長あいさつ</SectionTitle>
          <p>院長の狩野遊太です。医師です。</p>
          <p className="mt-6">
            先にお伝えしておきたいことがあります。私は児童精神科の専門医ではありません。ですから、診断の権威としてこの外来を開いたのではありません。私が力を入れているのは、診察室を出たあとの生活です。眠れているか、食べられているか、安心して居られる場所があるか。そこを、看護師とともにご自宅まで伺って支える体制をつくりました。
          </p>
          <p className="mt-6">
            診断名がつくことより、明日の朝が少し楽になることを先に考えます。より専門的な判断が必要なときは、専門機関へきちんとおつなぎします。
          </p>
          <p className="mt-6">
            病院に行くかどうか迷っている段階の方こそ、一言ご連絡ください。お待ちしています。
          </p>
          <p className="mt-8 text-neutral-700">
            ロコクリニック 院長　狩野遊太（医師）
          </p>
        </section>

        {/* 予約への誘導（本文末） */}
        <section className="border-t border-neutral-200 py-14 text-center sm:py-16">
          <p className="mb-6">
            迷っている段階からで大丈夫です。まずは一言、ご連絡ください。
          </p>
          <LineButton />
        </section>
      </main>

      {/* 7. フッター */}
      <footer className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-2xl px-5 py-12 text-sm leading-relaxed text-neutral-600">
          <p className="text-neutral-800">ロコクリニック</p>
          <dl className="mt-4 space-y-2">
            <div className="flex gap-4">
              <dt className="w-20 flex-none text-neutral-500">診療科目</dt>
              <dd>精神科</dd>
            </div>
            <div className="flex gap-4">
              <dt className="w-20 flex-none text-neutral-500">住所</dt>
              <dd>
                群馬県高崎市 <PH>【住所】</PH>
              </dd>
            </div>
            <div className="flex gap-4">
              <dt className="w-20 flex-none text-neutral-500">電話</dt>
              <dd>
                <PH>【電話番号】</PH>
              </dd>
            </div>
            <div className="flex gap-4">
              <dt className="w-20 flex-none text-neutral-500">予約</dt>
              <dd>
                LINE <PH>【LINE ID／リンク】</PH>（完全予約制）
              </dd>
            </div>
          </dl>
          <div className="mt-8 border-t border-neutral-200 pt-6">
            <p className="text-neutral-500">院長の発信</p>
            <p className="mt-1">
              <PH>【note等のリンクを1本置く枠】</PH>
            </p>
          </div>
          <p className="mt-8 text-xs text-neutral-400">
            © ロコクリニック
          </p>
        </div>
      </footer>

      {/* スマホ用の固定予約ボタン */}
      <div className="fixed inset-x-0 bottom-0 border-t border-neutral-200 bg-white/95 p-3 backdrop-blur sm:hidden">
        <a
          href="#reserve"
          className="block rounded-md bg-[#2e5a4b] py-3.5 text-center text-white"
        >
          ご予約・ご相談はLINEから
        </a>
      </div>
    </div>
  );
}
