import type { Metadata } from "next";
import type { CSSProperties } from "react";

export const metadata: Metadata = {
  title: "ロコクリニック｜高崎",
  description:
    "高崎市の医師・狩野遊太のクリニック。糸リフト・ボトックス（自由診療）と、こどもと家族の相談外来（保険診療・完全予約制）。",
  robots: { index: false, follow: false },
};

const line = "https://lin.ee/Q8CPXPZ";
const instagram = "https://www.instagram.com/loco_clinic_________";

const serif: CSSProperties = {
  fontFamily: "var(--font-shippori-mincho), 'Hiragino Mincho ProN', serif",
};
const linkStyle: CSSProperties = {
  color: "#5a5248",
  textDecoration: "none",
  borderBottom: "1px solid #b9ad9c",
  paddingBottom: "2px",
  fontSize: "12.5px",
  letterSpacing: "0.12em",
};
const label: CSSProperties = {
  margin: "10px 0 0",
  fontSize: "12px",
  letterSpacing: "0.18em",
  color: "#6f675d",
  fontWeight: 400,
};
const heading: CSSProperties = {
  margin: 0,
  fontSize: "17px",
  fontWeight: 500,
  letterSpacing: "0.16em",
  color: "#2b2723",
  lineHeight: 1.6,
};
const divider: CSSProperties = {
  width: "220px",
  maxWidth: "60%",
  height: "1px",
  background: "#e6ded2",
  border: "none",
  margin: "0 auto",
};

export default function MeishiPage() {
  return (
    <main
      style={{
        ...serif,
        minHeight: "100vh",
        background: "#faf8f4",
        color: "#2b2723",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "560px",
          padding: "72px 32px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            margin: 0,
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "11px",
            letterSpacing: "0.42em",
            color: "#a89c8a",
            textTransform: "uppercase",
          }}
        >
          LOCO CLINIC
        </p>
        <h1
          style={{
            ...serif,
            margin: "20px 0 0",
            fontSize: "26px",
            fontWeight: 500,
            letterSpacing: "0.3em",
            textIndent: "0.3em",
          }}
        >
          ロコクリニック
        </h1>
        <p style={{ ...label, letterSpacing: "0.22em" }}>医師　狩野 遊太</p>

        <div style={{ ...divider, width: "40px", background: "#cfc5b6", margin: "44px auto" }} />

        <div>
          <h2 style={heading}>糸リフト・ボトックス</h2>
          <p style={label}>自由診療</p>
          <p style={{ margin: "18px 0 0", display: "flex", justifyContent: "center", gap: "28px" }}>
            <a href={instagram} target="_blank" rel="noopener noreferrer" style={linkStyle}>
              症例（Instagram）
            </a>
            <a href={line} target="_blank" rel="noopener noreferrer" style={linkStyle}>
              ご予約（LINE）
            </a>
          </p>
        </div>

        <div style={{ ...divider, margin: "36px auto" }} />

        <div>
          <h2 style={heading}>こどもと家族の相談外来</h2>
          <p style={label}>発達・不登校　｜　保険診療・完全予約制</p>
          <p style={{ margin: "18px 0 0" }}>
            <a href="https://ritanowa.jp" target="_blank" rel="noopener noreferrer" style={linkStyle}>
              ご案内はこちら
            </a>
          </p>
        </div>

        <div style={{ ...divider, margin: "36px auto" }} />

        <div>
          <h2 style={{ ...heading, fontSize: "14.5px", color: "#5a5248" }}>
            訪問看護ステーションりたのわ
          </h2>
          <p style={label}>代表</p>
        </div>

        <div style={{ ...divider, width: "40px", background: "#cfc5b6", margin: "44px auto" }} />

        <footer style={{ fontSize: "12px", letterSpacing: "0.14em", color: "#6f675d", lineHeight: 2.1 }}>
          <p style={{ margin: 0 }}>群馬県高崎市浜尻町209-5</p>
          <p style={{ margin: 0 }}>
            9:00〜21:00　完全予約制　｜
            <a href="tel:0273950443" style={{ color: "#5a5248", textDecoration: "none" }}>
              027-395-0443
            </a>
          </p>
        </footer>
      </div>
    </main>
  );
}
