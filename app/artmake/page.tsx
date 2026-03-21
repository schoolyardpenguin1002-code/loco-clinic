import type { Metadata } from "next";

import Header from "../components/Header";
import ArtmakeLanding from "../components/artmake/ArtmakeLanding";

export const metadata: Metadata = {
  title: "アートメイク | LOCO CLINIC",
  description:
    "LOCO CLINIC のアートメイク。医師管理のもと、眉・リップ・ラインなど自然な仕上がりを。群馬県高崎市。",
};

export default function ArtmakePage() {
  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-[#fdfbf8]">
      <Header />
      <main className="marketing-layout w-full bg-[#fdfbf8] text-[#1a1a1a]">
        <ArtmakeLanding />
      </main>
    </div>
  );
}
