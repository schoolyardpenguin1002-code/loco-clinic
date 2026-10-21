import { LINE_ADD_FRIEND_URL } from "@/lib/line";

/* 常設CTA：モバイル＝下部バー／PC＝右下フローティング（ゴールド半透明・CLINIC W型） */
export default function FixedCta({
  lineUrl = LINE_ADD_FRIEND_URL,
  reserveUrl,
}: {
  lineUrl?: string;
  reserveUrl?: string;
}) {
  return (
    <>
      {/* モバイル：下部固定バー（LINE｜Web予約） */}
      <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-[#e8e2d8] bg-white/90 backdrop-blur-md lg:hidden">
        <a
          href={lineUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 flex-col items-center justify-center gap-0.5 bg-[#b9a05a]/85 py-3 text-white backdrop-blur-sm"
        >
          <span className="text-base font-bold leading-none tracking-wider">LINEで予約・ご相談</span>
          <span className="text-[10px] opacity-95">24時間受付</span>
        </a>
        {reserveUrl && (
          <a
            href={reserveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 flex-col items-center justify-center gap-0.5 py-3 text-[#8a7a55]"
          >
            <span className="text-base font-bold leading-none tracking-wider">Web予約</span>
            <span className="text-[10px] opacity-80">空き枠から選べます</span>
          </a>
        )}
      </div>

      {/* PC：右下フローティング */}
      <div className="fixed bottom-6 right-6 z-40 hidden flex-col items-end gap-3 lg:flex">
        <a
          href={lineUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 border border-[#b9a05a]/70 bg-[#b9a05a]/70 py-3 pl-5 pr-6 text-white shadow-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#b98a55] hover:shadow-2xl"
        >
          <span className="grid h-8 w-8 place-items-center rounded-full border border-white/50 text-[12.5px] font-black tracking-tighter">
            LINE
          </span>
          <span className="leading-tight">
            <span className="block text-base font-bold tracking-wider">LINEで予約・ご相談</span>
            <span className="block text-[10px] opacity-95">24時間受付</span>
          </span>
        </a>
        {reserveUrl && (
          <a
            href={reserveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 border border-[#b9a05a]/70 bg-white/85 py-3 pl-5 pr-6 text-[#8a7a55] shadow-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-2xl"
          >
            <span className="grid h-8 w-8 place-items-center rounded-full border border-[#b9a05a]/60 text-[11px] font-black tracking-tighter">
              WEB
            </span>
            <span className="leading-tight">
              <span className="block text-base font-bold tracking-wider">Web予約</span>
              <span className="block text-[10px] opacity-80">空き枠から選べます</span>
            </span>
          </a>
        )}
      </div>
    </>
  );
}
