"use client";

import { useState } from "react";

type MenuItem = {
  name: string;
  price: string;
  note?: string;
};

type MenuCategory = {
  id: string;
  name: string;
  icon: string;
  items: MenuItem[];
};

export default function MenuTabs() {
  const [activeTab, setActiveTab] = useState("thread");

  const menuCategories: MenuCategory[] = [
    {
      id: "thread",
      name: "糸リフト・スレッド",
      icon: "🧵",
      items: [
        { name: "classB thread (PDOコグ)", price: "¥9,000" },
        { name: "classA thread (PDOポッシュコグ)", price: "¥13,000" },
        { name: "classS thread (PCL)", price: "¥18,000" },
        { name: "classSS thread (ヴィーナスリフト)", price: "¥25,000" },
        { name: "コラーゲンスレッド 10本", price: "¥20,000", note: "水光注射セット: ¥10,000" },
        { name: "コラーゲンスレッド 20本", price: "¥38,000" },
        { name: "コラーゲンスレッド 40本", price: "¥49,000" },
        { name: "コラーゲンスレッド 60本", price: "¥59,000" },
        { name: "ビタミンスレッド 10本", price: "¥30,000", note: "水光注射セット: ¥20,000" },
        { name: "ビタミンスレッド 20本", price: "¥58,000" },
        { name: "ビタミンスレッド 40本", price: "¥89,000" },
        { name: "ビタミンスレッド 60本", price: "¥99,000" },
        { name: "アイスレッド PDO 10本", price: "¥14,000" },
        { name: "アイスレッド PDO 20本", price: "¥26,000" },
        { name: "アイスレッド PDO 30本", price: "¥36,000" },
        { name: "アイスレッド PLLA 10本", price: "¥15,000" },
        { name: "アイスレッド PLLA 20本", price: "¥28,000" },
        { name: "アイスレッド PLLA 30本", price: "¥39,000" },
        { name: "アイスレッド PCL+ビタミン 10本", price: "¥30,000" },
        { name: "アイスレッド PCL+ビタミン 20本", price: "¥58,000" },
        { name: "アイスレッド PCL+ビタミン 30本", price: "¥84,000" },
      ],
    },
    {
      id: "injection",
      name: "注入・肌育",
      icon: "💉",
      items: [
        { name: "ボトックス 顔1部位（韓国製）", price: "¥4,000" },
        { name: "ボトックス おまかせ3部位（韓国製）", price: "¥11,000" },
        { name: "ボトックス おまかせ5部位（韓国製）", price: "¥18,000" },
        { name: "エラボトックス 40単位（韓国製）", price: "¥10,000" },
        { name: "肩ボトックス 100単位（韓国製）", price: "¥29,000" },
        { name: "脇ボトックス 60単位（韓国製）", price: "¥18,000" },
        { name: "リフトアップボトックス 50単位（韓国製）", price: "¥18,000" },
        { name: "ヒアルロン酸 こめかみ 1cc", price: "¥30,000" },
        { name: "ヒアルロン酸 頬 1cc", price: "¥30,000" },
        { name: "ヒアルロン酸 ほうれい線 1cc", price: "¥30,000" },
        { name: "ヒアルロン酸 アゴ 1cc", price: "¥30,000" },
        { name: "カスタマイズヒアルロン酸 1cc", price: "¥40,000" },
        { name: "ボライト 1cc", price: "¥30,000" },
        { name: "ボライト 3cc（全顔）", price: "¥80,000" },
        { name: "ジャルプロヤングアイ 1回", price: "¥40,000" },
        { name: "ジャルプロヤングアイ 3回", price: "¥90,000" },
        { name: "ジャルプロスーパーハイドロ 1回", price: "¥40,000" },
        { name: "ジャルプロスーパーハイドロ 3回", price: "¥90,000" },
        { name: "ジャルプロHMW 1回", price: "¥40,000" },
        { name: "ジャルプロHMW 3回", price: "¥90,000" },
        { name: "リジュランi 1回", price: "¥30,000" },
        { name: "リジュランi 3回", price: "¥80,000" },
        { name: "リジュランHB 1回", price: "¥30,000" },
        { name: "リジュランHB 3回", price: "¥80,000" },
        { name: "リズネ 1回", price: "¥30,000" },
        { name: "リズネ 3回", price: "¥80,000" },
        { name: "プルリアルデンシファイ 1回", price: "¥50,000" },
        { name: "プルリアルデンシファイ 3回", price: "¥110,000" },
        { name: "プルリアルシルク 1回", price: "¥50,000" },
        { name: "プルリアルシルク 3回", price: "¥110,000" },
        { name: "ロコシルクスキン 1回", price: "¥50,000" },
        { name: "ロコシルクスキン 3回", price: "¥110,000" },
        { name: "水光注射 ジャルプロ 1回", price: "¥22,000" },
        { name: "水光注射 ジャルプロ 3回", price: "¥60,000" },
        { name: "水光注射 リズネ 1回", price: "¥25,000" },
        { name: "水光注射 リズネ 3回", price: "¥70,000" },
        { name: "水光注射 リジュラン 1回", price: "¥20,000" },
        { name: "水光注射 リジュラン 3回", price: "¥50,000" },
        { name: "水光注射 美白 1回", price: "¥20,000" },
        { name: "水光注射 美白 3回", price: "¥50,000" },
        { name: "水光注射 プルリアルデンシファイ 1回", price: "¥40,000" },
        { name: "水光注射 プルリアルデンシファイ 3回", price: "¥110,000" },
        { name: "水光注射 ロコシルクスキン 1回", price: "¥40,000" },
        { name: "水光注射 ロコシルクスキン 3回", price: "¥110,000" },
      ],
    },
    {
      id: "skincare",
      name: "美肌・ピーリング",
      icon: "✨",
      items: [
        { name: "ハイドラジェントル 単回", price: "¥8,000" },
        { name: "マッサージピール 単回", price: "¥10,000" },
        { name: "ララドクター 単回", price: "¥10,000" },
        { name: "ミラノリピール 単回", price: "¥10,000" },
        { name: "エレポ レナトスa+", price: "¥5,500" },
        { name: "エレポ Ta+（トラネキサム酸）", price: "¥5,500" },
        { name: "エレポ ビタミンC", price: "¥5,500" },
        { name: "エレポ グリシルグリシン", price: "¥5,500" },
        { name: "エレポ ペップビュー", price: "¥15,400" },
        { name: "ミラノorマッサージピール + エレポセット 4回", price: "¥50,000" },
        { name: "脂肪溶解注射 カベリン 8cc", price: "¥10,000" },
      ],
    },
  ];

  const activeCategory = menuCategories.find((cat) => cat.id === activeTab);

  return (
    <div className="w-full">
      {/* タブナビゲーション */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {menuCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveTab(category.id)}
            className={`
              px-8 py-4 rounded-full font-heading font-semibold tracking-wide text-sm transition-all duration-300
              ${
                activeTab === category.id
                  ? "bg-[#d4af37] text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 hover:bg-[#f5ebe0] hover:text-[#d4af37]"
              }
            `}
          >
            <span className="mr-2">{category.icon}</span>
            {category.name}
          </button>
        ))}
      </div>

      {/* メニュー内容 */}
      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
        <h3 className="text-3xl font-bold font-heading text-gray-800 mb-8 text-center tracking-wide">
          {activeCategory?.icon} {activeCategory?.name}
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {activeCategory?.items.map((item, index) => (
            <div
              key={index}
              className="flex items-start justify-between p-6 bg-gradient-to-r from-white to-[#fdfbf8] border border-[#d4af37]/20 rounded-xl hover:shadow-md transition group"
            >
              <div className="flex-1">
                <h4 className="text-base font-semibold text-gray-800 mb-1 group-hover:text-[#d4af37] transition">
                  {item.name}
                </h4>
                {item.note && (
                  <p className="text-xs text-gray-500 mt-1">
                    {item.note}
                  </p>
                )}
              </div>
              <div className="text-[#d4af37] font-bold font-heading text-xl flex-shrink-0 ml-4">
                {item.price}
              </div>
            </div>
          ))}
        </div>
        
        {/* 水光注射オプション（注入・肌育タブの場合のみ表示） */}
        {activeTab === "injection" && (
          <div className="mt-12 p-8 bg-gradient-to-br from-[#ffecd1]/30 to-[#f5ebe0]/30 rounded-2xl border border-[#d4af37]/20">
            <h4 className="text-xl font-bold font-heading text-gray-800 mb-6 text-center">
              💧 水光注射オプション
            </h4>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h5 className="font-semibold text-gray-800 mb-3">+1オプション</h5>
                <ul className="space-y-2 text-gray-700">
                  <li>• ボトックス追加：<span className="font-heading font-bold text-[#d4af37]">¥3,000</span></li>
                  <li>• トラネキサム酸追加：<span className="font-heading font-bold text-[#d4af37]">¥5,000</span></li>
                  <li>• SRSマスク：<span className="font-heading font-bold text-[#d4af37]">¥3,000</span></li>
                  <li>• ショートスレッド（コラーゲン）10本：<span className="font-heading font-bold text-[#d4af37]">¥10,000</span></li>
                  <li>• ショートスレッド（ビタミン）10本：<span className="font-heading font-bold text-[#d4af37]">¥20,000</span></li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 mb-3">+1プレゼント</h5>
                <ul className="space-y-2 text-gray-700">
                  <li>• ボト + SRSマスク：<span className="font-heading font-bold text-[#d4af37]">¥3,000</span></li>
                  <li>• トラネキサム酸 + SRSマスク：<span className="font-heading font-bold text-[#d4af37]">¥5,000</span></li>
                  <li>• ボト + トラネキサム酸：<span className="font-heading font-bold text-[#d4af37]">¥5,000</span></li>
                </ul>
                <h5 className="font-semibold text-gray-800 mb-3 mt-4">+3オプション</h5>
                <ul className="space-y-2 text-gray-700">
                  <li>• ボト + トラネキサム酸 + SRSマスク：<span className="font-heading font-bold text-[#d4af37]">¥6,000</span></li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
