import type { Metadata } from "next";
import { GAIRAI_LINE_ADD_FRIEND_URL, GAIRAI_WEB_RESERVE_URL } from "@/lib/line";
import Redirector from "./redirector";

// 予約クリック計測用の中継ページ。
// Vercel Web Analytics の Pages に /go/line/mental 等のビューとして記録され、
// 「どのページから・どちらのボタンで」予約導線に入ったかが数えられる。

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

const CHANNELS = ["line", "web"] as const;
const FROMS = ["top", "mental", "sleep", "documents", "morning", "header"] as const;

export function generateStaticParams() {
  return CHANNELS.flatMap((channel) => FROMS.map((from) => ({ channel, from })));
}

export default async function GoPage({
  params,
}: {
  params: Promise<{ channel: string; from: string }>;
}) {
  const { channel } = await params;
  const isWeb = channel === "web";
  return (
    <Redirector
      dest={isWeb ? GAIRAI_WEB_RESERVE_URL : GAIRAI_LINE_ADD_FRIEND_URL}
      label={isWeb ? "Web予約ページ" : "LINE"}
    />
  );
}
