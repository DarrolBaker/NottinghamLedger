import type { ReactNode } from "react";

export function Pill({
  tone,
  children,
}: {
  tone: "fact" | "scenario" | "law" | "stop";
  children: ReactNode;
}) {
  const toneClass = {
    fact: "bg-teal text-on-teal",
    scenario: "bg-paper-2 text-ink",
    law: "bg-ink text-paper",
    stop: "bg-rust text-on-teal",
  }[tone];
  return (
    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium tracking-wide ${toneClass}`}>
      {children}
    </span>
  );
}

export function Rule({ children }: { children: ReactNode }) {
  return (
    <aside className="rounded-lg border border-rust bg-rust-soft px-4 py-3 text-sm leading-relaxed text-ink">
      {children}
    </aside>
  );
}

export function Stat({
  label,
  value,
  note,
}: {
  label: string;
  value: string;
  note: string;
}) {
  return (
    <div className="border-t border-line pt-3">
      <p className="text-xs font-medium tracking-wide text-muted uppercase">{label}</p>
      <p className="mt-1 font-serif text-3xl leading-none text-ink tabular-nums">{value}</p>
      <p className="mt-2 text-sm leading-relaxed text-muted">{note}</p>
    </div>
  );
}
