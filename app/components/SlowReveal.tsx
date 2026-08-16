import type { CSSProperties, ReactNode } from "react";

/** ゆっくり現れる演出（CSSアニメのみ・JS検知なし）。
 *  読み込みと同時に必ず再生され、終了後は必ず表示状態で固定される。 */
export default function SlowReveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  direction?: "up" | "left" | "right";
}) {
  const cls =
    direction === "left" ? "lc-reveal-left" : direction === "right" ? "lc-reveal-right" : "lc-reveal-up";
  return (
    <div className={`${cls} ${className ?? ""}`} style={{ animationDelay: `${delay + 150}ms` } as CSSProperties}>
      {children}
    </div>
  );
}
