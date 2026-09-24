import type { Metadata } from "next";
import Link from "next/link";
import BotanicalArt from "../components/site/BotanicalArt";
import FixedCta from "../components/site/FixedCta";
import GairaiHeader from "../components/site/GairaiHeader";
import SlowReveal from "../components/SlowReveal";
import { LINE_ADD_FRIEND_URL } from "@/lib/line";

export const metadata: Metadata = {
  title: {
    absolute: "こころとくらしの相談外来（心療内科）｜ロコクリニック（高崎市）",
  },
  description:
    "群馬県高崎市の心療内科・精神科、ロコクリニック こころとくらしの相談外来。眠れない、朝起き上がれない、休職を考えている。その段階から相談できます。保険診療・完全予約制・初診30分。オンライン診療対応。おひとりおひとりに合わせた、診察室で終わらない支援を行います。",
  openGraph: {
    title: "こころとくらしの相談外来｜ロコクリニック（高崎市）",
    description:
      "休んだほうがいいのは、わかっている。その先を、いっしょに考える外来です。保険診療・完全予約制・オンライン対応。",
    url: "https://www.lococlinic.com/mental",
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
  { name: "診療内容", href: "#services" },
  { name: "初めての方へ", href: "#flow" },
  { name: "オンライン診療", href: "#online" },
  { name: "診断書", href: "#documents" },
  { name: "料金", href: "#price" },
  { name: "院長紹介", href: "#doctor" },
  { name: "よくある質問", href: "#faq" },
  { name: "アクセス", href: "#access" },
];

export default function MentalPage() {
  return (
    <div className="price-page min-h-screen w-full bg-[#fffbf6] text-[#70645c]">
      <GairaiHeader
        subtitle="こころとくらしの相談外来｜群馬県高崎市の心療内科"
        nav={NAV}
        cross={{ name: "こどもと家族の相談外来", href: "/" }}
      />

      <main className="w-full">
        {/* 1. ヒーロー */}
        <section
          className="relative overflow-hidden bg-white px-6 text-center"
          style={{ paddingTop: "170px", paddingBottom: "110px" }}
        >
          <BotanicalArt className="pointer-events-none absolute -left-14 -top-6 h-[130%] text-[#6f4e2f]" />
          <BotanicalArt className="pointer-events-none absolute -right-20 top-0 h-[120%] scale-x-[-1] text-[#b9a05a]" />
          <p className="mb-5 text-[12.5px] tracking-[0.35em] text-[#b9a05a]">
            MENTAL HEALTH CLINIC
          </p>
          <h1
            className="text-[clamp(26px,4vw,40px)] font-light leading-[1.9] tracking-[0.14em]"
            style={SERIF}
          >
            休んだほうがいいのは、わかっている。
            <br />
            その先を、いっしょに考える外来です。
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-base font-light leading-loose text-[#70645c]">
            こころとくらしの相談外来。
            <br />
            眠れない、朝がつらい、という段階から相談していただけます。
          </p>
          <p className="mt-8 text-[13.5px] tracking-[0.2em] text-[#8a7a55]">
            保険診療｜完全予約制｜初診30分｜オンライン診療対応
          </p>
          <div className="mt-12">
            <LineButton />
          </div>
        </section>

        {/* 2. 当院の特徴 */}
        <section className="px-6" style={{ paddingTop: "120px", paddingBottom: "120px" }}>
          <div className="mx-auto w-full max-w-5xl">
            <Heading en="FEATURES">この外来の、4つの特徴</Heading>
            <div className="grid gap-x-14 gap-y-16 sm:grid-cols-2">
              {[
                {
                  n: "01",
                  t: "初診は30分。じっくり聴きます",
                  d: "5分の診察で薬だけ増えていく、という診療はしません。最初に生活の全体をゆっくり伺い、どこから立て直すかを一緒に決めます。",
                },
                {
                  n: "02",
                  t: "薬より先に、生活を診ます",
                  d: "眠り、食事、光を浴びる時間、体を動かす機会、人とのつながり。運動や食事の改善がうつ症状に薬と同じくらい効くことは、近年の研究で繰り返し確かめられています。薬が必要なときは、少なく・短くを心がけます。",
                },
                {
                  n: "03",
                  t: "オンラインで続けられます",
                  d: "初診も再診も、オンラインで受けられます。調子が悪い時期ほど、通院そのものが負担になります。家から相談できる形を用意しました。",
                },
                {
                  n: "04",
                  t: "診察室で終わらせません",
                  d: "生活の立て直しを、診察の外でもお手伝いします。看護師がご自宅に伺う訪問看護、地域の相談先や居場所へのご紹介など、おひとりおひとりに合う形を一緒に選びます。診察と診察のあいだを、ひとりにしない体制です。",
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

        {/* 3. こんなお悩み */}
        <section
          id="services"
          className="bg-white px-6"
          style={{ paddingTop: "120px", paddingBottom: "120px" }}
        >
          <div className="mx-auto w-full max-w-3xl">
            <Heading en="CONCERNS">こんなときに、ご相談ください</Heading>
            <ul className="space-y-4 border-y border-[#e8e2d8] py-10 text-[15.5px] font-light leading-[2] text-[#70645c]">
              {[
                "眠れない日が続いている。夜中に何度も目が覚める",
                "朝、起き上がれない。仕事に行く前に涙が出る",
                "仕事のことを考えると苦しい。日曜の夜がいちばんつらい",
                "食欲がない。あるいは食べすぎてしまう",
                "休職を考えている。診断書が必要になるかもしれない",
                "休職中で、このまま復職できるのか不安になっている",
                "気分の波で、通院の予約を守ること自体がむずかしい",
                "病院に行くほどなのか、わからない",
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
              最後のひとつの段階で来ていただけるのが、
              <br className="hidden sm:block" />
              いちばん早く楽になれる道だと考えています。
              <br />
              診断名がつくかどうかは、相談の条件ではありません。
            </p>
            <p className="mt-10 text-center text-[14px] font-light text-[#8a7a55]">
              お子さんの発達・不登校のご相談は{" "}
              <Link href="/" className="text-[#3e7a52] underline underline-offset-4">
                こどもと家族の相談外来
              </Link>{" "}
              をご覧ください。
            </p>
          </div>
        </section>

        {/* 4. この外来の考え方 */}
        <section className="px-6" style={{ paddingTop: "120px", paddingBottom: "120px" }}>
          <div className="mx-auto w-full max-w-2xl">
            <Heading en="PHILOSOPHY">この外来の考え方</Heading>
            <div className="font-light leading-[2.1]">
              <p>
                心の調子は、診察室の中ではなく、毎日の生活の中で崩れていきます。眠れない夜が続き、食事が偏り、人と話す機会が減っていく。
              </p>
              <p>
                回復も同じです。診察室の15分だけで起こるものではなく、眠れた夜と、食べられた朝と、誰かと話せた昼の積み重ねの中で起こります。
              </p>
              <p>
                ですからこの外来は、あなたの生活を診ます。そして、診察室で終わらせません。オンライン診療、職場との調整、看護師のご自宅訪問、地域の相談先や居場所へのつなぎ。診察と診察のあいだの毎日を支える形を、おひとりおひとりに合わせてつくります。
              </p>
            </div>
          </div>
        </section>

        {/* 5. 診療の流れ */}
        <section
          id="flow"
          className="bg-white px-6"
          style={{ paddingTop: "120px", paddingBottom: "120px" }}
        >
          <div className="mx-auto w-full max-w-3xl">
            <Heading en="FLOW">診療の流れ</Heading>
            <div className="space-y-14">
              {[
                {
                  n: "01",
                  t: "LINEでひとこと",
                  d: "「眠れていない」だけでも大丈夫です。予約枠と初診までの流れをご案内します。受診するかどうかは、それから決めていただけます。ご予約は、こちらからの返信をもって確定します。",
                },
                {
                  n: "02",
                  t: "初診（30分）",
                  d: "お話をゆっくり伺います。オンラインでも、来院でも受けられます。仕事帰りの夕方の枠を用意しています。",
                },
                {
                  n: "03",
                  t: "続ける",
                  d: "再診はオンライン中心で、通院の負担を小さくします。休職中の方は、書類の更新と生活の立て直しを並行して進めます。",
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
            <div className="mt-20 text-center">
              <LineButton />
            </div>
          </div>
        </section>

        {/* 6. オンライン診療 */}
        <section id="online" className="px-6" style={{ paddingTop: "120px", paddingBottom: "120px" }}>
          <div className="mx-auto w-full max-w-2xl">
            <Heading en="ONLINE">オンライン診療について</Heading>
            <p className="font-light leading-[2.1]">
              スマートフォンがあれば、ご自宅から受診できます。アプリの操作が不安な方には、予約時にご案内します。
            </p>
            <ul className="mt-12 space-y-4 border-y border-[#e8e2d8] py-10 text-[15px] font-light leading-[2] text-[#70645c]">
              <li className="flex items-start gap-4">
                <span aria-hidden className="mt-1 text-[#b9a05a]">
                  ─
                </span>
                初診からオンラインで受けられます
              </li>
              <li className="flex items-start gap-4">
                <span aria-hidden className="mt-1 text-[#b9a05a]">
                  ─
                </span>
                お薬が必要な場合は、ご自宅近くの薬局で受け取れるよう処方箋を送付します
              </li>
              <li className="flex items-start gap-4">
                <span aria-hidden className="mt-1 text-[#b9a05a]">
                  ─
                </span>
                症状や経過によっては、対面での診察をお願いすることがあります
              </li>
            </ul>
          </div>
        </section>

        {/* 7. 診断書・書類 */}
        <section
          id="documents"
          className="bg-white px-6"
          style={{ paddingTop: "120px", paddingBottom: "120px" }}
        >
          <div className="mx-auto w-full max-w-2xl">
            <Heading en="DOCUMENTS">診断書と、職場とのこと</Heading>
            <div className="font-light leading-[2.1]">
              <p>
                休職には診断書が、休職中の生活には傷病手当金の書類が必要になります。必要と判断した場合、診断書は速やかにお書きします。書類のために何度も通っていただくような運用はしません。
              </p>
              <p>
                院長は産業医として、企業の側から働く人の不調と復職に関わってきました。ですから、人事や上司が読んだときに「職場は何をすればいいのか」がわかる書き方をします。「◯ヶ月の休養を要する」の一行で終わる診断書と、配慮の内容まで書かれた診断書では、職場の動き方が変わります。
              </p>
              <p>
                復職は、出社した日がゴールではありません。生活リズムが戻り、日中の体力が戻り、働ける状態が続くところまでを、いっしょに見ます。
              </p>
            </div>
          </div>
        </section>

        {/* 8. 料金 */}
        <section id="price" className="px-6" style={{ paddingTop: "120px", paddingBottom: "120px" }}>
          <div className="mx-auto w-full max-w-2xl">
            <Heading en="PRICE">費用について</Heading>
            <p className="text-center font-light leading-loose">
              保険診療です。自由診療のカウンセリング料などはありません。
            </p>
            <div className="mt-12 border-y border-[#e8e2d8]">
              {[
                ["初診（30分）", "3割負担で 2,500円前後"],
                ["再診（オンライン）", "3割負担で 1,000〜1,500円前後"],
                ["診断書などの文書料", "文書の種類により別途いただきます"],
              ].map(([k, v], i) => (
                <div
                  key={k}
                  className={`flex flex-col gap-1 py-7 sm:flex-row sm:items-baseline sm:justify-between ${
                    i > 0 ? "border-t border-[#e8e2d8]" : ""
                  }`}
                >
                  <span className="text-[15.5px]" style={SERIF}>
                    {k}
                  </span>
                  <span className="text-[15px] font-light text-[#70645c]">
                    {v}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-[13px] font-light leading-loose text-[#8a7a55]">
              処方や検査の内容により前後します。
              <br />
              自立支援医療（精神通院医療）の対象となる方は、自己負担が原則1割に軽減されます。
              <br />
              各種公費負担医療・子ども医療費助成もご利用いただけます。制度のご相談は診察時にどうぞ。
            </p>
          </div>
        </section>

        {/* 9. 院長紹介 */}
        <section
          id="doctor"
          className="bg-white px-6"
          style={{ paddingTop: "120px", paddingBottom: "120px" }}
        >
          <div className="mx-auto w-full max-w-2xl">
            <Heading en="DOCTOR">院長紹介</Heading>
            <div className="font-light leading-[2.1]">
              <p>院長の狩野遊太です。医師です。</p>
              <p>
                私が力を入れているのは、診察室を出たあとの生活です。眠れているか、食べられているか、安心して居られる場所があるか。そこを、看護師とともにご自宅まで伺って支える体制をつくりました。産業医として企業の側から働く人の不調に関わってきた経験から、職場との橋渡しも診療の一部だと考えています。
              </p>
              <p>
                診断名がつくことより、明日の朝が少し楽になることを先に考えます。より専門的な判断が必要なときは、専門機関へきちんとおつなぎします。
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
          </div>
        </section>

        {/* 10. FAQ */}
        <section id="faq" className="px-6" style={{ paddingTop: "120px", paddingBottom: "120px" }}>
          <div className="mx-auto w-full max-w-2xl">
            <Heading en="FAQ">よくある質問</Heading>
            <div className="border-t border-[#e8e2d8]">
              {[
                [
                  "診断名がつくのが怖いのですが、受診したら何か記録に残りますか",
                  "保険診療である以上、診療の記録は残ります。ただし、受診したことが職場や学校に自動的に伝わることはありません。生命保険などへの影響が気になる方は、初診時にご事情をお聞かせください。説明したうえで一緒に決めます。",
                ],
                [
                  "薬を飲みたくないのですが、受診してもいいですか",
                  "はい。この外来は、薬より先に生活を整えることから始めます。薬を使う場合も、理由をご説明したうえで、少なく・短くを心がけます。いま飲んでいる薬を減らしたい、というご相談もお受けします。",
                ],
                [
                  "会社に知られずに受診できますか",
                  "できます。医療機関からお勤め先に連絡することはありません。診断書が必要になった場合にはじめて、何をどう伝えるかをご本人と相談して決めます。",
                ],
                [
                  "家族が心配です。本人が行きたがらないのですが",
                  "ご家族だけでのご相談から始めていただけます。ご本人を連れてくることは、相談の条件ではありません。",
                ],
                [
                  "どのくらいの頻度で通うことになりますか",
                  "状態によりますが、はじめは2週間に1回ほど、落ち着いてきたら月1回ほどが目安です。再診はオンライン中心にできるため、通院の負担は小さくできます。",
                ],
              ].map(([q, a]) => (
                <details key={q} className="group border-b border-[#e8e2d8]">
                  <summary className="flex cursor-pointer items-start gap-5 py-8 text-[15.5px] leading-[1.9] [&::-webkit-details-marker]:hidden">
                    <span aria-hidden className="text-[#b9a05a]" style={SERIF}>
                      Q
                    </span>
                    <span style={SERIF}>{q}</span>
                  </summary>
                  <div className="flex items-start gap-5 pb-10">
                    <span aria-hidden className="text-[#3e7a52]" style={SERIF}>
                      A
                    </span>
                    <p className="text-[14.5px] font-light leading-[2] text-[#70645c]">
                      {a}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 11. アクセス・診療時間 */}
        <section
          id="access"
          className="bg-white px-6"
          style={{ paddingTop: "120px", paddingBottom: "130px" }}
        >
          <div className="mx-auto w-full max-w-2xl">
            <Heading en="ACCESS">診療時間・アクセス</Heading>
            <dl className="border-y border-[#e8e2d8]">
              {[
                ["外来の枠", "火・木曜 16:30〜19:00（完全予約制）"],
                ["形式", "オンライン診療・来院のどちらも可能です"],
                ["住所", "〒370-0005 群馬県高崎市浜尻町209-5（高崎問屋町駅 徒歩8分）"],
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
            <p style={SERIF} className="mb-2 text-sm tracking-[0.2em] text-white/70">
              LOCO CLINIC
            </p>
            <p>ロコクリニック｜群馬県高崎市</p>
            <p className="mt-3">
              <Link href="/" className="underline underline-offset-4 hover:text-white/80">
                こどもと家族の相談外来
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
