import type { Metadata } from "next";
import Link from "next/link";
import BotanicalArt from "./components/site/BotanicalArt";
import FixedCta from "./components/site/FixedCta";
import GairaiHeader from "./components/site/GairaiHeader";
import SlowReveal from "./components/SlowReveal";
import { LINE_ADD_FRIEND_URL } from "@/lib/line";

export const metadata: Metadata = {
  title: {
    absolute:
      "発達障害・不登校のこどもと家族の相談外来｜ロコクリニック（高崎市）",
  },
  description:
    "群馬県高崎市のロコクリニック。発達障害・不登校のこどもと家族の相談外来。親御さんだけの相談から始められます。保険診療・完全予約制・初診30分。お子さんとご家族に合わせた、診察室で終わらない支援を行います。",
  openGraph: {
    title: "発達障害・不登校のこどもと家族の相談外来｜ロコクリニック（高崎市）",
    description:
      "こどもを病院に連れて行けない。そこから、始められます。親御さんだけの相談から始められる外来です。保険診療・完全予約制。",
    url: "https://www.lococlinic.com",
    siteName: "ロコクリニック",
    locale: "ja_JP",
    type: "website",
  },
};

const SERIF = { fontFamily: "var(--font-shippori-mincho), serif" } as const;

/* セクション見出し：英字ラベル＋明朝見出し（美容サイトの型） */
function Heading({ en, children }: { en: string; children: React.ReactNode }) {
  return (
    <SlowReveal className="mb-20 text-center">
      <p className="mb-4 text-[12.5px] tracking-[0.35em] text-[#b9a05a]">
        {en}
      </p>
      <h2 style={SERIF}>{children}</h2>
    </SlowReveal>
  );
}

function LineButton({ label = "LINEで予約・ご相談" }: { label?: string }) {
  return (
    <a
      href={LINE_ADD_FRIEND_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block rounded-full bg-[#3e7a52] px-12 py-5 text-[15.5px] font-bold tracking-[0.1em] text-white transition hover:brightness-110"
    >
      {label}
    </a>
  );
}

const NAV = [
  { name: "こんな方へ", href: "#concerns" },
  { name: "不登校の相談", href: "#futoukou" },
  { name: "発達障害の相談", href: "#hattatsu" },
  { name: "受診の流れ", href: "#flow" },
  { name: "支援者の方へ", href: "#supporters" },
  { name: "院長紹介", href: "#doctor" },
  { name: "アクセス", href: "#access" },
];

export default function Home() {
  return (
    <div className="price-page min-h-screen w-full bg-[#fffbf6] text-[#70645c]">
      <GairaiHeader
        subtitle="こころとくらしの相談外来｜群馬県高崎市"
        nav={NAV}
        cross={{ name: "おとなのメンタル外来", href: "/mental" }}
      />

      <main className="w-full">
        {/* 1. ヒーロー */}
        <section
          className="relative overflow-hidden bg-white px-6 text-center"
          style={{ paddingTop: "180px", paddingBottom: "110px" }}
        >
          <BotanicalArt className="pointer-events-none absolute -left-14 -top-6 h-[130%] text-[#6f4e2f]" />
          <BotanicalArt className="pointer-events-none absolute -right-20 top-0 h-[120%] scale-x-[-1] text-[#b9a05a]" />
          <p className="mb-5 text-[12.5px] tracking-[0.35em] text-[#b9a05a]">
            CHILD &amp; FAMILY CLINIC
          </p>
          <h1
            className="text-[clamp(26px,4vw,40px)] font-light leading-[1.9] tracking-[0.14em]"
            style={SERIF}
          >
            こどもを病院に連れて行けない。
            <br />
            そこから、始められます。
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-base font-light leading-loose text-[#70645c]">
            発達障害・不登校のこどもと家族の相談外来。
            <br />
            初回は、親御さんおひとりでの相談で大丈夫です。
          </p>
          <p className="mt-8 text-[13.5px] tracking-[0.2em] text-[#8a7a55]">
            保険診療｜完全予約制｜初診30分｜高崎市
          </p>
          <div className="mt-12">
            <LineButton />
          </div>
        </section>

        {/* 2. こんな方へ */}
        <section
          id="concerns"
          className="px-6"
          style={{ paddingTop: "120px", paddingBottom: "120px" }}
        >
          <div className="mx-auto w-full max-w-3xl">
            <Heading en="CONCERNS">こんな方へ</Heading>
            <ul className="space-y-4 border-y border-[#e8e2d8] py-10 text-[15.5px] font-light leading-[2] text-[#70645c]">
              {[
                "学校に行けない日が続いている。行き渋りが増えてきた",
                "発達障害かもしれないと言われた。あるいは、自分でそう感じている",
                "昼夜が逆転している。食事が偏っている。ゲームやスマホの時間が長い",
                "相談したいが、本人が「病院には行かない」と言っている",
              ].map((c) => (
                <li key={c} className="flex items-start gap-4">
                  <span aria-hidden className="mt-1 text-[#b9a05a]">
                    ─
                  </span>
                  {c}
                </li>
              ))}
            </ul>
            <p className="mt-14 text-center font-light leading-loose">
              最後のひとつが理由で、どこにも相談できずにいるご家族は
              <br className="hidden sm:block" />
              少なくありません。
              <br />
              この外来は、親御さんだけの相談から始められます。
              <br />
              お子さんを連れてくることは、受診の条件ではありません。
            </p>
          </div>
        </section>

        {/* 3. この外来の考え方（4つ） */}
        <section
          className="bg-white px-6"
          style={{ paddingTop: "120px", paddingBottom: "120px" }}
        >
          <div className="mx-auto w-full max-w-5xl">
            <Heading en="POLICY">この外来がやっている、4つのこと</Heading>
            <div className="grid gap-x-14 gap-y-16 sm:grid-cols-2">
              {[
                {
                  n: "01",
                  t: "親御さんだけの受診で始められます",
                  d: "お子さんが来られるようになったら、そのときに来てもらえば十分です。来られない期間も、家庭でできることを親御さんと一緒に組み立てていきます。",
                },
                {
                  n: "02",
                  t: "診断名を、ゴールにしていません",
                  d: "診断が必要な場面では検査や専門機関へのご紹介を行いますが、診断名が出る前から、眠り・食事・生活リズムの立て直しは今日から始められます。順番を待たない、ということです。",
                },
                {
                  n: "03",
                  t: "生活まるごと、一緒に整えます",
                  d: "眠り、食事、昼間の過ごし方、学校とのやりとり、そしてお母さん自身の疲れや眠り。お子さんの症状だけを切り取らず、ご家庭の生活全体を一緒に整えていきます。必要なときは、地域のNPOやフリースクール、居場所づくりの団体など、医療の外の支援にもおつなぎします。診察室を、暮らしと支援の入口にする外来です。",
                },
                {
                  n: "04",
                  t: "薬の前に、眠りと食事と居場所の話をします",
                  d: "お薬が必要な場合には保険診療の範囲でご説明のうえ処方しますが、まず生活を整えることから一緒に取り組みます。",
                },
              ].map((f) => (
                <SlowReveal key={f.n} className="text-center">
                  <p className="font-heading mb-4 text-xl font-light tracking-[0.25em] text-[#b9a05a]">
                    {f.n}
                  </p>
                  <h3 className="mb-4 text-base" style={SERIF}>
                    {f.t}
                  </h3>
                  <p className="text-left text-[15px] font-light leading-[2] text-[#70645c]">
                    {f.d}
                  </p>
                </SlowReveal>
              ))}
            </div>
          </div>
        </section>

        {/* 4. 不登校のご相談（詳しく） */}
        <section
          id="futoukou"
          className="px-6"
          style={{ paddingTop: "120px", paddingBottom: "120px" }}
        >
          <div className="mx-auto w-full max-w-2xl">
            <Heading en="SCHOOL REFUSAL">不登校のご相談</Heading>
            <div className="font-light leading-[2.1]">
              <p>
                不登校は、いまや特別なことではありません。全国の小中学生の不登校は30万人を超え、どの学校の、どの学年にもいます。朝になるとお腹が痛くなる。行けたり行けなかったりを繰り返す（五月雨登校）。夏休み明けから続けて休むようになった。形はさまざまですが、共通しているのは、お子さん本人がいちばん苦しんでいて、親御さんがいちばん途方に暮れている、ということです。
              </p>
              <p>
                この外来は、学校に行かせることをゴールにしません。先に整えるのは、眠りと食事と昼間の過ごし方です。不登校のお子さんの多くは、昼夜逆転や食事の乱れ、体力の低下を伴っていて、この状態のまま登校だけを目指しても、うまくいかないからです。生活が整い、体力が戻り、安心できる居場所ができると、その先のこと（学校に戻る・別の場を選ぶ）を、はじめて本人が選べるようになります。
              </p>
              <p>
                お子さんが受診できない場合は、親御さんだけの相談から始めてください。ご希望があれば、看護師がご自宅に伺って、本人と少しずつ関係をつくっていく方法もあります。「病院には行かない」と言っているお子さんにも、届く形を用意しています。
              </p>
            </div>
          </div>
        </section>

        {/* 5. 発達障害のご相談（詳しく） */}
        <section
          id="hattatsu"
          className="bg-white px-6"
          style={{ paddingTop: "120px", paddingBottom: "120px" }}
        >
          <div className="mx-auto w-full max-w-2xl">
            <Heading en="DEVELOPMENT">
              発達障害・グレーゾーンのご相談
            </Heading>
            <div className="font-light leading-[2.1]">
              <p>
                ADHD（注意欠如・多動症）、自閉スペクトラム症（ASD）、学習症（LD）など、発達の特性に関するご相談をお受けしています。園や学校から指摘された。健診で様子を見ましょうと言われたまま、どこに相談すればいいのかわからない。診断はついていないけれど、育てにくさをずっと感じている──そうした「グレーゾーン」の段階からのご相談も歓迎します。
              </p>
              <p>
                大切にしているのは、診断名をつけることよりも、目の前の困りごとを減らすことです。癇癪が強い、切り替えができない、偏食が激しい、眠らない、集団に入れない。こうした困りごとの多くは、本人の努力不足でも、親御さんの育て方のせいでもなく、特性と環境のミスマッチから生まれます。ですからこの外来では、お子さんを変えようとする前に、環境の側──生活リズム、家庭での関わり方、園や学校での過ごし方──を一緒に整えていきます。
              </p>
              <p>
                発達検査や専門的な診断が必要な場合には、適切な専門機関をご紹介します。診断の順番を待っているあいだにも、家庭でできることは今日から始められます。その伴走が、この外来の役割です。
              </p>
            </div>
          </div>
        </section>

        {/* 6. 受診の流れ */}
        <section
          id="flow"
          className="px-6"
          style={{ paddingTop: "120px", paddingBottom: "120px" }}
        >
          <div className="mx-auto w-full max-w-3xl">
            <Heading en="FLOW">受診の流れ</Heading>
            <div className="space-y-14">
              {[
                {
                  n: "01",
                  t: "LINEで一言、ご連絡ください",
                  d: "「不登校のことで」「発達のことで」だけでも大丈夫です。ご予約は、こちらからの返信をもって確定します。",
                },
                {
                  n: "02",
                  t: "親御さんだけの事前相談（15分・無料）",
                  d: "お電話またはオンラインで状況を伺い、この外来でお力になれるかどうかを先にお伝えします。",
                },
                {
                  n: "03",
                  t: "初診（30分）",
                  d: "完全予約制です。ゆっくりお話を伺います。待合室で他のご家族と一緒になることは、ほぼありません。",
                },
                {
                  n: "04",
                  t: "必要に応じて、その先の支援をご案内",
                  d: "診察の結果をふまえて、看護師のご自宅訪問、地域の相談先や居場所など、お子さんとご家族に合う形をご提案します。",
                },
              ].map((s) => (
                <SlowReveal key={s.n} className="flex items-start gap-8">
                  <span className="font-heading shrink-0 text-2xl font-light tracking-wider text-[#b9a05a]">
                    {s.n}
                  </span>
                  <div>
                    <h3 className="mb-3 text-base" style={SERIF}>
                      {s.t}
                    </h3>
                    <p className="text-[15px] font-light leading-[2] text-[#70645c]">
                      {s.d}
                    </p>
                  </div>
                </SlowReveal>
              ))}
            </div>
            <dl className="mt-20 border-y border-[#e8e2d8]">
              {[
                ["外来の枠", "火・木曜 16:30〜19:00（完全予約制）"],
                [
                  "費用",
                  "保険診療です。お子さんは子ども医療費助成の対象となり、窓口でのご負担は原則ありません。",
                ],
              ].map(([k, v], i) => (
                <div
                  key={k}
                  className={`flex flex-col gap-1 py-6 sm:flex-row ${
                    i > 0 ? "border-t border-[#e8e2d8]" : ""
                  }`}
                >
                  <dt className="w-32 flex-none text-[14.5px]" style={SERIF}>
                    {k}
                  </dt>
                  <dd className="text-[15px] font-light leading-[2] text-[#70645c]">
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-16 text-center">
              <LineButton />
            </div>
          </div>
        </section>

        {/* 7. おとなの方へ */}
        <section
          className="bg-white px-6"
          style={{ paddingTop: "120px", paddingBottom: "120px" }}
        >
          <div className="mx-auto w-full max-w-2xl text-center">
            <Heading en="FOR ADULTS">おとなの方へ</Heading>
            <p className="font-light leading-[2.1] text-left">
              眠れない、朝がつらい、休職を考えている──働く方のメンタル不調のご相談は、こころとくらしの相談外来でお受けしています。オンライン診療に対応し、休職の診断書や傷病手当金などの書類作成も行っています。
            </p>
            <div className="mt-12">
              <Link
                href="/mental"
                className="inline-block border border-[#6f4e2f] px-12 py-5 text-[15.5px] tracking-[0.2em] transition-all duration-500 hover:bg-[#6f4e2f] hover:text-white"
              >
                こころとくらしの相談外来へ
              </Link>
            </div>
          </div>
        </section>

        {/* 8. 支援者の方へ */}
        <section
          id="supporters"
          className="px-6"
          style={{ paddingTop: "120px", paddingBottom: "120px" }}
        >
          <div className="mx-auto w-full max-w-2xl">
            <Heading en="FOR SUPPORTERS">支援者の方へ</Heading>
            <div className="font-light leading-[2.1]">
              <p>
                相談支援事業所、放課後等デイサービス・児童発達支援事業所、スクールカウンセラー、養護教諭、ケアマネジャー、保健師のみなさまへ。
              </p>
              <p>
                「この親子を、どこに相談させたらいいのかわからない」という段階から、お受けしています。診断も受診歴もなくて構いません。支援者の方からの相談だけでも大丈夫です。医療につながっていない親子の、最初の入口として使ってください。
              </p>
              <p>
                また、事業所に通えていないお子さん、家から出られないお子さんには、看護師がご自宅に伺う訪問看護という選択肢があります。医師の指示書で動く医療保険のサービスで、通所の受給者証とは別の枠組みです。「訪問看護を入れたいが、主治医が決まらず止まっている」「指示書を書く医師が見つからない」というケースも、診察のうえ適応があれば、指示書の交付まで一続きで対応します。
              </p>
              <p>
                ご本人が受診できない場合の進め方についても、まずはご相談ください。支援者の方からのお問い合わせも、LINEでお受けしています。「支援者です」と一言添えてお送りください。
              </p>
            </div>
          </div>
        </section>

        {/* 9. 院長紹介 */}
        <section
          id="doctor"
          className="bg-white px-6"
          style={{ paddingTop: "120px", paddingBottom: "120px" }}
        >
          <div className="mx-auto w-full max-w-2xl">
            <Heading en="DOCTOR">院長あいさつ</Heading>
            <div className="font-light leading-[2.1]">
              <p>院長の狩野遊太です。医師です。</p>
              <p>
                先にお伝えしておきたいことがあります。私は児童精神科の専門医ではありません。ですから、診断の権威としてこの外来を開いたのではありません。私が力を入れているのは、診察室を出たあとの生活です。眠れているか、食べられているか、安心して居られる場所があるか。そこを、看護師とともにご自宅まで伺って支える体制をつくりました。
              </p>
              <p>
                診断名がつくことより、明日の朝が少し楽になることを先に考えます。より専門的な判断が必要なときは、専門機関へきちんとおつなぎします。
              </p>
              <p>
                病院に行くかどうか迷っている段階の方こそ、一言ご連絡ください。お待ちしています。
              </p>
            </div>
            <p className="mt-10 text-right" style={SERIF}>
              ロコクリニック 院長　狩野遊太（医師）
            </p>
            <SlowReveal className="mt-20 text-center">
              <p className="mb-4 text-[12.5px] tracking-[0.35em] text-[#b9a05a]">
                PROFILE
              </p>
              <h3 className="text-base" style={SERIF}>
                経歴
              </h3>
            </SlowReveal>
            <ul className="mx-auto mt-8 max-w-md space-y-2 text-center text-[14.5px] font-light leading-[2] text-[#70645c]">
              <li>群馬県出身</li>
              <li>埼玉大学教育学部 卒業</li>
              <li>高知大学医学部 卒業</li>
              <li>SUBARU健康保険組合太田記念病院 勤務</li>
              <li>三枚橋病院 勤務</li>
              <li>福田病院 勤務（小児新生児科・NICU）</li>
              <li>伊勢崎クリニック 勤務</li>
              <li>産業医として企業のメンタルヘルスに従事</li>
            </ul>
            <SlowReveal className="mt-20 text-center">
              <p className="mb-4 text-[12.5px] tracking-[0.35em] text-[#b9a05a]">
                APPROACH
              </p>
              <h3 className="text-base" style={SERIF}>
                院長の治療方針
              </h3>
            </SlowReveal>
            <div className="mt-10 space-y-10">
              {[
                [
                  "1. 病気ではなく、その子まるごとを診ます",
                  "症状だけを切り取らず、眠り・食事・学校・ご家族との関係まで含めて一緒に考えます。医師ひとりではなく、看護師やご家族とチームで支えます。",
                ],
                [
                  "2. お薬は、最終手段です",
                  "この外来では、お薬はほとんど処方しません。先に処方するのは、眠りと、ごはんと、居場所と、人です。それでも必要だと判断したときにだけ、理由をご説明したうえで、最小限を短く使います。",
                ],
                [
                  "3. 本人ががんばるより、まわりを整えます",
                  "こどもは、環境が変わると変わります。ご家庭や学校での過ごし方を少し整えるところから、一緒に取り組みます。",
                ],
              ].map(([t, d]) => (
                <div key={t}>
                  <h4 className="mb-3 text-[15.5px]" style={SERIF}>
                    {t}
                  </h4>
                  <p className="text-[15px] font-light leading-[2] text-[#70645c]">
                    {d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. アクセス */}
        <section
          id="access"
          className="px-6"
          style={{ paddingTop: "120px", paddingBottom: "130px" }}
        >
          <div className="mx-auto w-full max-w-2xl">
            <Heading en="ACCESS">診療時間・アクセス</Heading>
            <dl className="border-y border-[#e8e2d8]">
              {[
                ["診療科目", "心療内科・精神科"],
                ["外来の枠", "火・木曜 16:30〜19:00（完全予約制）"],
                [
                  "住所",
                  "〒370-0005 群馬県高崎市浜尻町209-5（高崎問屋町駅 徒歩8分）",
                ],
                ["電話", "027-395-0443（受付時間内）"],
                ["予約", "LINEからのご予約が確実です"],
              ].map(([k, v], i) => (
                <div
                  key={i}
                  className={`flex flex-col gap-1 py-6 sm:flex-row ${
                    i > 0 ? "border-t border-[#e8e2d8]" : ""
                  }`}
                >
                  <dt className="w-32 flex-none text-[14.5px]" style={SERIF}>
                    {k}
                  </dt>
                  <dd className="text-[15px] font-light leading-[2] text-[#70645c]">
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </main>

      {/* フッター（森＋深緑・美容サイトの型を踏襲） */}
      <footer className="relative overflow-hidden text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/footer-forest.jpg')" }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-[#33261b]/82" aria-hidden />
        <div className="relative">
          <div className="border-b border-white/10 px-6 pt-28 pb-24 text-center">
            <p
              className="mb-3 text-2xl font-light tracking-[0.14em] md:text-3xl"
              style={SERIF}
            >
              ご予約・ご相談
            </p>
            <p className="mx-auto mb-8 max-w-xl text-base font-light leading-relaxed text-white/70">
              迷っている段階からで大丈夫です。まずは一言、お聞かせください。
            </p>
            <div className="mx-auto flex max-w-md flex-col items-stretch justify-center gap-3 sm:flex-row">
              <a
                href={LINE_ADD_FRIEND_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-full bg-[#3e7a52] px-8 py-4 text-base font-bold text-white transition hover:brightness-110"
              >
                LINEで予約・相談
              </a>
            </div>
            <a
              href="tel:027-395-0443"
              className="font-heading mt-6 inline-block text-xl tracking-wider text-white/80 hover:text-white"
            >
              TEL. 027-395-0443
            </a>
          </div>
          <div className="px-6 py-12 text-center text-xs leading-loose text-white/50">
            <p
              style={SERIF}
              className="mb-2 text-sm tracking-[0.2em] text-white/70"
            >
              LOCO CLINIC
            </p>
            <p>ロコクリニック｜〒370-0005 群馬県高崎市浜尻町209-5</p>
            <p className="mt-3">
              <Link
                href="/mental"
                className="underline underline-offset-4 hover:text-white/80"
              >
                こころとくらしの相談外来（おとな）
              </Link>
              <span className="mx-3">|</span>
              <Link
                href="/privacy-policy"
                className="underline underline-offset-4 hover:text-white/80"
              >
                プライバシーポリシー
              </Link>
            </p>
          </div>
        </div>
      </footer>

      <FixedCta />
    </div>
  );
}
