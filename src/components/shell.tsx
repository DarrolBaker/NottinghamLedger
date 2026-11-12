import { Link, useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";

const links = [
  { to: "/", label: "Briefing" },
  { to: "/companies", label: "Companies" },
  { to: "/platform", label: "Costed platform" },
  { to: "/places", label: "Places" },
  { to: "/outreach", label: "Outreach desk" },
  { to: "/sources", label: "Sources & the list" },
] as const;

export function Shell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  return (
    <div className="min-h-screen md:grid md:grid-cols-[15rem_1fr]">
      <aside className="border-b border-line bg-paper md:sticky md:top-0 md:h-screen md:border-r md:border-b-0">
        <div className="px-4 py-4 md:px-5 md:py-6">
          <p className="text-xs font-medium tracking-widest text-teal-ink uppercase">Nottingham & Nottinghamshire</p>
          <p className="mt-1 font-serif text-2xl leading-none text-ink">Notts Ledger</p>
          <p className="mt-2 text-sm leading-snug text-muted">County companies, a costed offer, a lawful ask.</p>
        </div>
        <nav className="flex gap-1 overflow-x-auto px-3 pb-3 md:flex-col md:px-3 md:pb-6">
          {links.map((link) => {
            const active = link.to === "/" ? pathname === "/" : pathname.startsWith(link.to);
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`flex h-11 shrink-0 items-center rounded-md px-3 text-sm font-medium ${
                  active ? "bg-ink text-paper" : "text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </aside>
      <div className="min-w-0">{children}</div>
    </div>
  );
}
