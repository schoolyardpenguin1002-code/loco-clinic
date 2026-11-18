"use client";

import { useEffect } from "react";

export default function Redirector({ dest, label }: { dest: string; label: string }) {
  useEffect(() => {
    // 計測ビーコンが飛ぶ時間を確保してから遷移する
    const t = setTimeout(() => {
      window.location.replace(dest);
    }, 700);
    return () => clearTimeout(t);
  }, [dest]);

  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="text-[15px] tracking-[0.06em] text-neutral-600">{label}へ移動しています…</p>
      <p className="text-[13px] text-neutral-400">
        切り替わらない場合は{" "}
        <a href={dest} className="underline">
          こちら
        </a>
      </p>
    </main>
  );
}
