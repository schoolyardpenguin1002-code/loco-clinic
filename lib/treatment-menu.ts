/**
 * 施術メニュー「施術から選ぶ」用データ
 * 詳細 URL: /menu/[groupId]/[itemId]（暫定は Coming Soon ページ）
 */

export type TreatmentSubItem = {
  id: string;
  label: string;
};

export type TreatmentMenuGroup = {
  id: string;
  label: string;
  children: TreatmentSubItem[];
};

export const TREATMENT_MENU_GROUPS: TreatmentMenuGroup[] = [
  {
    id: "thread-lift",
    label: "糸リフト",
    children: [
      { id: "tarumi-lift", label: "たるみリフト" },
      { id: "houreisen-lift", label: "ほうれい線リフト" },
      { id: "customize-lift", label: "カスタマイズリフト" },
      { id: "total-lift", label: "トータルリフト" },
    ],
  },
  {
    id: "short-thread",
    label: "ショートスレッド（ショッピングリフト）",
    children: [
      { id: "collagen-thread", label: "コラーゲンスレッド" },
      { id: "vitamin-thread", label: "ビタミンスレッド" },
    ],
  },
  {
    id: "ice-thread",
    label: "アイスレッド",
    children: [
      { id: "pdo", label: "PDO" },
      { id: "plla", label: "PLLA" },
      { id: "pcl-vitamin", label: "PCL＋ビタミン" },
    ],
  },
  {
    id: "botox",
    label: "ボトックス注入",
    children: [
      { id: "face-1", label: "顔1部位" },
      { id: "omakase-3", label: "おまかせ3部位" },
      { id: "omakase-5", label: "おまかせ5部位" },
      { id: "era", label: "エラボトックス" },
      { id: "shoulder", label: "肩ボトックス" },
      { id: "waki", label: "脇ボトックス" },
      { id: "lift-up", label: "リフトアップボトックス" },
    ],
  },
  {
    id: "hyaluronic",
    label: "ヒアルロン酸注入",
    children: [
      { id: "komekami", label: "こめかみヒアルロン酸注入" },
      { id: "hoho", label: "頬ヒアルロン酸注入" },
      { id: "houreisen", label: "ほうれい線ヒアルロン酸注入" },
      { id: "ago", label: "アゴヒアルロン酸注入" },
      { id: "customize", label: "カスタマイズヒアルロン酸注入" },
      { id: "bolike-hyaluronic", label: "ボライト" },
    ],
  },
  {
    id: "skin-boost-hand",
    label: "肌育注射（手打ち）",
    children: [
      { id: "jalpro-young-eye", label: "ジャルプロヤングアイ" },
      { id: "jalpro-super-hydro", label: "ジャルプロスーパーハイドロ" },
      { id: "jalpro-hmw", label: "ジャルプロHMW" },
      { id: "rejuran-i", label: "リジュランi" },
      { id: "rejuran-hb", label: "リジュランHB" },
      { id: "risne", label: "リズネ" },
      { id: "pluryal-densify", label: "プルリアルデンシファイ" },
      { id: "pluryal-silk", label: "プルリアルシルク" },
      { id: "loco-silk-skin", label: "ロコシルクスキン" },
      { id: "bolike-skin-boost", label: "ボライト" },
    ],
  },
  {
    id: "hycoox",
    label: "水光注射（ハイコックス）",
    children: [
      { id: "rejuran", label: "リジュラン" },
      { id: "jalpro", label: "ジャルプロ" },
      { id: "risne-hycoox", label: "リズネ" },
      { id: "whitening", label: "美白水光注射" },
      { id: "pluryal-densify-hycoox", label: "プルリアルデンシファイ" },
      { id: "loco-silk-skin-hycoox", label: "ロコシルクスキン" },
    ],
  },
  {
    id: "slimming",
    label: "痩身",
    children: [{ id: "fat-dissolve", label: "脂肪溶解注射" }],
  },
  {
    id: "artmake",
    label: "アートメイク",
    children: [
      { id: "eyebrow", label: "眉アートメイク" },
      { id: "lip", label: "リップアートメイク" },
      { id: "scalp", label: "頭皮アートメイク" },
    ],
  },
  {
    id: "peeling",
    label: "ピーリング",
    children: [
      { id: "massage-peel", label: "マッサージピール" },
      { id: "milano-peel", label: "ミラノリピール" },
      { id: "lala-doctor", label: "ララドクター" },
    ],
  },
  {
    id: "hydra-gentle",
    label: "ハイドラジェントル",
    children: [{ id: "hydra-gentle-detail", label: "ハイドラジェントル" }],
  },
  {
    id: "electroporation",
    label: "エレクトロポレーション",
    children: [
      { id: "renatos-a-plus", label: "レナトスa+" },
      { id: "ta-plus", label: "Ta＋（トラネキサム酸）" },
      { id: "vitamin-c", label: "ビタミンC" },
      { id: "glycyl-glycine", label: "グリシルグリシン" },
      { id: "pep-view", label: "ペップビュー" },
    ],
  },
];

export function getMenuItemBySlug(
  groupId: string,
  itemId: string
): { groupLabel: string; itemLabel: string } | null {
  const group = TREATMENT_MENU_GROUPS.find((g) => g.id === groupId);
  if (!group) return null;
  const item = group.children.find((c) => c.id === itemId);
  if (!item) return null;
  return { groupLabel: group.label, itemLabel: item.label };
}
