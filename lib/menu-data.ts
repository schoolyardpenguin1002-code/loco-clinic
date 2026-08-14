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

// お悩みからさがす（/concerns）用の詳細マッピング
// 各種美容クリニックで一般的な「悩み→推奨施術」の対応を、当院で提供中のメニューだけに絞って構成
export type ConcernPick = {
  title: string;
  why: string;
  priceHint: string;
  href: string; // /price#groupId など
};
export type ConcernDetail = {
  id: string;
  label: string;
  desc: string;
  picks: ConcernPick[];
};
export type ConcernSection = {
  id: string;
  title: string;
  en: string;
  concerns: ConcernDetail[];
};

export const CONCERN_SECTIONS: ConcernSection[] = [
  {
    id: "face",
    title: "顔のかたち・たるみのお悩み",
    en: "FACE LINE",
    concerns: [
      {
        id: "sagging",
        label: "頬のたるみ・フェイスラインのもたつき",
        desc: "年齢とともに脂肪を支える組織がゆるみ、頬の位置が下がってフェイスラインの輪郭がぼやけてきます。物理的に引き上げる施術と、肌のハリを育てる施術の組み合わせが効果的です。",
        picks: [
          { title: "糸リフト", why: "コグ（突起）付きの糸でたるみを物理的に引き上げる、当院の中心メニューです。", priceHint: "9,000円〜／本", href: "/thread-lift" },
          { title: "ショッピングリフト", why: "細い糸を多数入れて、肌のハリと引き締めを土台から。糸リフトとの併用もおすすめです。", priceHint: "20,000円〜", href: "/price#shopping" },
          { title: "リフトアップボトックス", why: "輪郭まわりの筋肉にアプローチし、フェイスラインをすっきり見せます。", priceHint: "18,000円", href: "/price#botox" },
        ],
      },
      {
        id: "nasolabial",
        label: "ほうれい線・マリオネットライン",
        desc: "頬のたるみが原因で深くなる線と、ボリューム不足でできる溝では、適した施術が変わります。カウンセリングで原因を見極めてご提案します。",
        picks: [
          { title: "糸リフト", why: "たるみが原因の線に。頬を引き上げて溝を浅くします。", priceHint: "9,000円〜／本", href: "/thread-lift" },
          { title: "ヒアルロン酸（ほうれい線）", why: "溝そのものにボリュームを足して、直接なめらかに整えます。", priceHint: "30,000円／1cc", href: "/price#hyaluronic" },
        ],
      },
      {
        id: "double-chin",
        label: "二重あご・あご下のもたつき",
        desc: "あご下は脂肪がつきやすく、たるみも重なって輪郭がぼやけやすい部位です。脂肪と皮膚、それぞれへのアプローチがあります。",
        picks: [
          { title: "脂肪溶解注射（カベリン）", why: "気になる脂肪に直接アプローチします。", priceHint: "10,000円／8cc", href: "/price#lipolysis" },
          { title: "糸リフト", why: "あご下のもたつきを引き上げて、フェイスラインを整えます。", priceHint: "9,000円〜／本", href: "/thread-lift" },
        ],
      },
      {
        id: "ela",
        label: "エラの張り・食いしばり",
        desc: "咬筋（噛む筋肉）の発達によるエラ張りは、ボトックスで筋肉をゆるめることで輪郭の変化を目指せます。食いしばり・歯ぎしりのお悩みにも。",
        picks: [
          { title: "エラボトックス", why: "咬筋に注入して張りをやわらげ、すっきりした輪郭へ。", priceHint: "10,000円／40単位", href: "/price#botox" },
        ],
      },
      {
        id: "volume",
        label: "こけ・凹み・横顔のバランス",
        desc: "こめかみや頬のこけ、あごの後退などは、ボリュームを補うことで若々しい印象と整った横顔ラインを目指せます。",
        picks: [
          { title: "ヒアルロン酸", why: "こめかみ・頬・あごなど、部位ごとにボリュームを補います。", priceHint: "30,000円〜／1cc", href: "/price#hyaluronic" },
          { title: "ボライト", why: "全顔にうるおいとハリを与えるヒアルロン酸です。", priceHint: "30,000円〜", href: "/price#hyaluronic" },
        ],
      },
    ],
  },
  {
    id: "aging",
    title: "シワ・目元のお悩み",
    en: "WRINKLES & EYES",
    concerns: [
      {
        id: "wrinkle",
        label: "額・眉間・目尻の表情ジワ",
        desc: "表情を動かしたときにできるシワは、筋肉の動きをやわらげるボトックスが第一選択です。無表情でも残る深い溝にはヒアルロン酸を検討します。",
        picks: [
          { title: "ボトックス", why: "表情の動きでできるシワの第一選択。自然な表情を残しながら調整します。", priceHint: "4,000円〜／1部位", href: "/price#botox" },
          { title: "ヒアルロン酸", why: "深く刻まれた溝にボリュームを足してなめらかに。", priceHint: "30,000円〜／1cc", href: "/price#hyaluronic" },
        ],
      },
      {
        id: "eye",
        label: "目元のたるみ・小じわ・クマ",
        desc: "目のまわりは皮膚がもっとも薄くデリケートな部位。専用の細い糸や目元専用の注入で、負担を抑えながらケアします。",
        picks: [
          { title: "アイスレッド", why: "目元まわり専用の細い糸で、ハリと引き締めを。", priceHint: "14,000円〜／10本", href: "/price#eye-thread" },
          { title: "ジャルプロ ヤングアイ", why: "目元専用の肌育注射。小じわ・ちりめんじわに。", priceHint: "1回 40,000円", href: "/price#skin-injection" },
        ],
      },
    ],
  },
  {
    id: "skin",
    title: "肌質のお悩み",
    en: "SKIN QUALITY",
    concerns: [
      {
        id: "pore",
        label: "毛穴の開き・ハリ不足",
        desc: "毛穴の目立ちは、肌のハリ低下と皮脂・角質の影響が重なって起こります。肌そのものを内側から育てる注入治療が向いています。",
        picks: [
          { title: "肌育注射", why: "コラーゲン生成を促し、じっくり肌質を育てます。", priceHint: "1回 30,000円〜", href: "/price#skin-injection" },
          { title: "水光注射", why: "薬剤を細かく行き渡らせ、うるおいとハリを全顔に。", priceHint: "1回 20,000円〜", href: "/price#water-light" },
          { title: "ショッピングリフト", why: "細い糸の刺激でコラーゲンを促し、ハリの土台を作ります。", priceHint: "20,000円〜", href: "/price#shopping" },
        ],
      },
      {
        id: "spot",
        label: "くすみ・色ムラ・美白ケア",
        desc: "古い角質によるくすみと、メラニンによる色ムラ。それぞれに合わせて、外側からのケアと内側への成分導入を組み合わせます。",
        picks: [
          { title: "美白水光注射", why: "美白成分を肌に直接届けます。", priceHint: "1回 20,000円", href: "/price#water-light" },
          { title: "ピーリング", why: "古い角質を取り除き、くすみ・ごわつきに。", priceHint: "8,000円〜", href: "/price#peeling" },
          { title: "エレクトロポレーション", why: "針を使わず、トラネキサム酸などの有効成分を導入します。", priceHint: "5,500円〜", href: "/price#electro" },
        ],
      },
      {
        id: "acne",
        label: "ニキビ・ざらつき・毛穴の汚れ",
        desc: "毛穴の詰まりと炎症が繰り返される肌には、角質・皮脂のコントロールと肌質改善の両面からアプローチします。",
        picks: [
          { title: "ハイドラジェントル", why: "水流で毛穴の汚れ・角栓をやさしく洗浄します。", priceHint: "8,000円", href: "/price#peeling" },
          { title: "ピーリング", why: "ターンオーバーを整え、繰り返すニキビ・ざらつきに。", priceHint: "10,000円〜", href: "/price#peeling" },
          { title: "肌育注射", why: "ニキビ跡の凹凸・赤みには肌質を育てる注入を。", priceHint: "1回 30,000円〜", href: "/price#skin-injection" },
        ],
      },
      {
        id: "dry",
        label: "乾燥・ツヤ不足",
        desc: "うるおい不足はシワ・くすみなど多くのお悩みの入り口です。肌の内側に水分保持成分を届けて、ツヤのある肌を目指します。",
        picks: [
          { title: "水光注射", why: "ヒアルロン酸などを均一に注入し、内側からうるおいを。", priceHint: "1回 20,000円〜", href: "/price#water-light" },
          { title: "ボライト", why: "肌の水分保持力を高める注入用ヒアルロン酸です。", priceHint: "30,000円〜", href: "/price#hyaluronic" },
        ],
      },
    ],
  },
  {
    id: "body",
    title: "体・毎日のお悩み",
    en: "BODY & DAILY",
    concerns: [
      {
        id: "sweat",
        label: "脇汗・におい",
        desc: "汗を作る神経の働きをボトックスでやわらげることで、汗の量を抑えることを目指します。季節を問わないお悩みに。",
        picks: [
          { title: "脇ボトックス", why: "汗の量にアプローチ。効果は数ヶ月持続します。", priceHint: "18,000円／80単位", href: "/price#botox" },
        ],
      },
      {
        id: "shoulder",
        label: "肩こり・肩の張り",
        desc: "肩の筋肉（僧帽筋）の張りにボトックスを注入し、こりの緩和と首元をすっきり見せることを目指します。",
        picks: [
          { title: "肩ボトックス", why: "張りの強い僧帽筋をゆるめます。", priceHint: "29,000円／100単位", href: "/price#botox" },
        ],
      },
      {
        id: "makeup",
        label: "毎朝のメイク時間を短くしたい",
        desc: "眉・リップ・ヘアラインのアートメイクで、すっぴんの印象そのものを整えます。毎朝のメイク時間と、ふとした瞬間の自信が変わります。",
        picks: [
          { title: "アートメイク", why: "眉・リップ・ヘアライン。自然な仕上がりを丁寧にデザインします。", priceHint: "詳細はアートメイクページへ", href: "/artmake" },
        ],
      },
    ],
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
