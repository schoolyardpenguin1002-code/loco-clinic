// LOCO CLINIC 施術メニュー・料金データ（2026-08-14 実データで全面更新）
// すべて税込価格

export type PriceRow = { name: string; price: string; note?: string };
export type PriceGroup = { id: string; title: string; lead?: string; rows: PriceRow[]; note?: string };

export const PRICE_GROUPS: PriceGroup[] = [
  {
    id: "thread",
    title: "糸リフト",
    lead: "たるみを引き上げ、フェイスラインを整えます。糸の種類は肌質・ご希望に合わせてお選びいただけます。",
    rows: [
      { name: "class B thread（PDOコグ）", price: "9,000円", note: "1本あたり" },
      { name: "class A thread（PDOポッシュコグ）", price: "13,000円", note: "1本あたり" },
      { name: "class S thread（PCL）", price: "18,000円", note: "1本あたり" },
      { name: "class SS thread（ヴィーナスリフト）", price: "25,000円", note: "1本あたり" },
    ],
    note: "必要な本数はカウンセリングでご提案します。",
  },
  {
    id: "shopping",
    title: "ショッピングリフト",
    lead: "細い糸を肌に導入し、ハリと肌質の変化を目指します。",
    rows: [
      { name: "コラーゲンスレッド 10本", price: "20,000円" },
      { name: "コラーゲンスレッド 20本", price: "38,000円" },
      { name: "コラーゲンスレッド 40本", price: "49,000円" },
      { name: "コラーゲンスレッド 60本", price: "59,000円" },
      { name: "ビタミンスレッド 10本", price: "30,000円" },
      { name: "ビタミンスレッド 20本", price: "58,000円" },
      { name: "ビタミンスレッド 40本", price: "89,000円" },
      { name: "ビタミンスレッド 60本", price: "99,000円" },
    ],
    note: "水光注射とのセット価格：コラーゲンスレッド10本 10,000円／ビタミンスレッド10本 20,000円",
  },
  {
    id: "eye-thread",
    title: "アイスレッド",
    lead: "目元まわりの細やかな部位に。",
    rows: [
      { name: "PDO 10本", price: "14,000円" },
      { name: "PDO 20本", price: "26,000円" },
      { name: "PDO 30本", price: "36,000円" },
      { name: "PLLA 10本", price: "15,000円" },
      { name: "PLLA 20本", price: "28,000円" },
      { name: "PLLA 30本", price: "39,000円" },
      { name: "PCL＋ビタミン 10本", price: "30,000円" },
      { name: "PCL＋ビタミン 20本", price: "58,000円" },
      { name: "PCL＋ビタミン 30本", price: "84,000円" },
    ],
  },
  {
    id: "botox",
    title: "ボトックス",
    lead: "表情ジワやエラ・肩まわりの張りに。すべて韓国製を使用しています。",
    rows: [
      { name: "顔 1部位", price: "4,000円" },
      { name: "おまかせ 3部位", price: "11,000円" },
      { name: "おまかせ 5部位", price: "18,000円" },
      { name: "エラボトックス（40単位）", price: "10,000円" },
      { name: "肩ボトックス（100単位）", price: "29,000円" },
      { name: "脇ボトックス（80単位）", price: "18,000円" },
      { name: "リフトアップボトックス（50単位）", price: "18,000円" },
    ],
    note: "上記以外の部位もご相談ください。",
  },
  {
    id: "hyaluronic",
    title: "ヒアルロン酸",
    lead: "ボリュームを補い、輪郭や凹みを整えます。",
    rows: [
      { name: "こめかみ 1cc", price: "30,000円" },
      { name: "頬 1cc", price: "30,000円" },
      { name: "ほうれい線 1cc", price: "30,000円" },
      { name: "アゴ 1cc", price: "30,000円" },
      { name: "カスタマイズヒアルロン酸 1cc", price: "40,000円" },
      { name: "ボライト 1cc", price: "30,000円" },
      { name: "ボライト 3cc（全顔）", price: "80,000円" },
    ],
  },
  {
    id: "skin-injection",
    title: "肌育注射（手打ち）",
    lead: "肌そのものの質を育てる注入治療です。",
    rows: [
      { name: "ジャルプロ ヤングアイ", price: "1回 40,000円 ／ 3回 90,000円" },
      { name: "ジャルプロ スーパーハイドロ", price: "1回 40,000円 ／ 3回 110,000円" },
      { name: "ジャルプロ HMW", price: "1回 40,000円 ／ 3回 90,000円" },
      { name: "リジュラン i", price: "1回 30,000円 ／ 3回 80,000円" },
      { name: "リジュラン HB", price: "1回 30,000円 ／ 3回 80,000円" },
      { name: "ビタラン（リズネ）", price: "1回 30,000円 ／ 3回 80,000円" },
      { name: "プルリアル デンシファイ", price: "1回 50,000円 ／ 3回 130,000円" },
      { name: "プルリアル シルク", price: "1回 50,000円 ／ 3回 130,000円" },
      { name: "フィロルガ", price: "1回 40,000円 ／ 3回 100,000円" },
    ],
    note: "麻酔クリーム 10,000円。3回料金は都度払いで、3回目のお会計時に割引が適用されます。",
  },
  {
    id: "water-light",
    title: "水光注射",
    lead: "肌に薬剤を細かく行き渡らせ、うるおいとツヤを目指します。",
    rows: [
      { name: "ジャルプロ", price: "1回 22,000円 ／ 3回 60,000円" },
      { name: "ビタラン（リズネ）", price: "1回 25,000円 ／ 3回 70,000円" },
      { name: "リジュラン", price: "1回 20,000円 ／ 3回 50,000円" },
      { name: "美白水光注射", price: "1回 20,000円 ／ 3回 50,000円" },
      { name: "プルリアル デンシファイ", price: "1回 40,000円 ／ 3回 110,000円" },
      { name: "フィロルガ", price: "1回 40,000円 ／ 3回 100,000円" },
    ],
    note: "3回料金は都度払いで、3回目のお会計時に割引が適用されます。",
  },
  {
    id: "water-light-option",
    title: "水光注射オプション",
    lead: "水光注射と同時に追加いただけるメニューです。",
    rows: [
      { name: "ボトックス追加", price: "3,000円" },
      { name: "トラネキサム酸追加", price: "5,000円" },
      { name: "SRSマスク", price: "3,000円" },
      { name: "ショートスレッド（コラーゲン）10本", price: "10,000円" },
      { name: "ショートスレッド（ビタミン）10本", price: "20,000円" },
      { name: "ボトックス＋SRSマスク", price: "3,000円", note: "セット" },
      { name: "トラネキサム酸＋SRSマスク", price: "5,000円", note: "セット" },
      { name: "ボトックス＋トラネキサム酸", price: "5,000円", note: "セット" },
      { name: "ボトックス＋トラネキサム酸＋SRSマスク", price: "6,000円", note: "セット" },
    ],
    note: "ショートスレッドに他のオプションを併用する場合：コラーゲン10本 5,000円／ビタミン10本 20,000円",
  },
  {
    id: "lipolysis",
    title: "脂肪溶解注射",
    rows: [{ name: "カベリン 8cc", price: "10,000円" }],
  },
  {
    id: "peeling",
    title: "ピーリング・ハイドラ",
    lead: "古い角質や毛穴の汚れにアプローチします。",
    rows: [
      { name: "ハイドラジェントル", price: "8,000円", note: "単回" },
      { name: "マッサージピール", price: "10,000円", note: "単回" },
      { name: "ララドクター", price: "10,000円", note: "単回" },
      { name: "ミラノリピール", price: "10,000円", note: "単回" },
    ],
  },
  {
    id: "electro",
    title: "エレクトロポレーション",
    lead: "針を使わず、有効成分を肌の内側へ導入します。",
    rows: [
      { name: "レナトス a＋", price: "5,500円" },
      { name: "Ta＋（トラネキサム酸）", price: "5,500円" },
      { name: "ビタミンC", price: "5,500円" },
      { name: "グリシルグリシン", price: "5,500円" },
      { name: "ペップビュー", price: "15,400円" },
    ],
    note: "オプション：ララ以外のピーリング 8,000円／ハイドラジェントル 7,000円　　セット：ミラノ or マッサージピール＋エレポ 4回セット 50,000円",
  },
];

export type Concern = { id: string; label: string; lead: string; picks: { title: string; groupId: string; why: string }[] };

export const CONCERNS: Concern[] = [
  { id: "sagging", label: "たるみ・フェイスライン", lead: "引き上げと、肌そのもののハリ。両方から。",
    picks: [
      { title: "糸リフト", groupId: "thread", why: "たるみを物理的に引き上げます" },
      { title: "リフトアップボトックス", groupId: "botox", why: "輪郭まわりの引き締めに" },
      { title: "ショッピングリフト", groupId: "shopping", why: "肌のハリを土台から" },
    ] },
  { id: "wrinkle", label: "シワ（額・眉間・目尻）", lead: "動きジワと、刻まれたシワで打ち手が変わります。",
    picks: [
      { title: "ボトックス", groupId: "botox", why: "表情の動きでできるシワに" },
      { title: "ヒアルロン酸", groupId: "hyaluronic", why: "深く刻まれた溝に" },
    ] },
  { id: "texture", label: "ハリ・毛穴・肌質", lead: "肌そのものを育てるメニューです。",
    picks: [
      { title: "肌育注射", groupId: "skin-injection", why: "じっくり肌質を育てる" },
      { title: "水光注射", groupId: "water-light", why: "うるおいとツヤを全顔に" },
      { title: "ショッピングリフト", groupId: "shopping", why: "細い糸でハリを" },
    ] },
  { id: "spot", label: "シミ・くすみ・美白", lead: "内側から、外側から。",
    picks: [
      { title: "美白水光注射", groupId: "water-light", why: "美白成分を肌に届ける" },
      { title: "ピーリング", groupId: "peeling", why: "古い角質・くすみに" },
      { title: "エレクトロポレーション", groupId: "electro", why: "針を使わず成分導入" },
    ] },
  { id: "volume", label: "ボリューム・輪郭", lead: "こけ・凹み・輪郭のバランスを整えます。",
    picks: [
      { title: "ヒアルロン酸", groupId: "hyaluronic", why: "こめかみ・頬・アゴなど" },
      { title: "ボライト", groupId: "hyaluronic", why: "全顔のうるおいとハリ" },
    ] },
  { id: "eye", label: "目元（クマ・小じわ）", lead: "皮膚が薄くデリケートな部位に合わせて。",
    picks: [
      { title: "ジャルプロ ヤングアイ", groupId: "skin-injection", why: "目元専用の注入" },
      { title: "アイスレッド", groupId: "eye-thread", why: "目元まわりに細い糸を" },
    ] },
  { id: "small-face", label: "小顔・エラ・肩こり", lead: "筋肉と脂肪、それぞれへのアプローチ。",
    picks: [
      { title: "エラボトックス", groupId: "botox", why: "咬筋の張りに" },
      { title: "肩ボトックス", groupId: "botox", why: "肩まわりの張りに" },
      { title: "脂肪溶解注射", groupId: "lipolysis", why: "気になる脂肪に" },
    ] },
  { id: "sweat", label: "脇の多汗", lead: "季節を問わないお悩みに。",
    picks: [{ title: "脇ボトックス", groupId: "botox", why: "汗の量にアプローチ" }] },
];
