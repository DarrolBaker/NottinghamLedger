import { useEffect, useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { directory } from "@/data/directory";
import { letterKinds, writeLetter, type LetterKind } from "@/data/letters";
import { sectorLabel } from "@/data/places";
import { Rule } from "@/components/bits";
import { statusLabel, useDesk, type TargetStatus } from "@/lib/desk-store";

export const Route = createFileRoute("/outreach")({
  head: () => ({ meta: [{ title: "Outreach desk · Notts Ledger" }] }),
  component: Outreach,
});

const statuses = Object.keys(statusLabel) as TargetStatus[];

function Outreach() {
  const [ready, setReady] = useState(false);
  const [kind, setKind] = useState<LetterKind>("intro");
  const [active, setActive] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [filter, setFilter] = useState("");
  const [paste, setPaste] = useState("");
  const [pasteNote, setPasteNote] = useState("");

  const candidate = useDesk((state) => state.candidate);
  const ward = useDesk((state) => state.ward);
  const email = useDesk((state) => state.email);
  const organisation = useDesk((state) => state.organisation);
  const targets = useDesk((state) => state.targets);
  const setProfile = useDesk((state) => state.setProfile);
  const addTarget = useDesk((state) => state.addTarget);
  const removeTarget = useDesk((state) => state.removeTarget);
  const setStatus = useDesk((state) => state.setStatus);
  const setNote = useDesk((state) => state.setNote);

  useEffect(() => {
    const done = useDesk.persist.rehydrate();
    if (done && typeof (done as Promise<void>).then === "function") {
      void (done as Promise<void>).then(() => setReady(true));
    } else {
      setReady(true);
    }
  }, []);

  const selected = targets.find((target) => target.id === active) ?? targets[0] ?? null;
  const letter = selected
    ? writeLetter(kind, { candidate, ward, email, organisation }, selected)
    : "Add a firm to the desk, then the letter is written against that firm’s ask.";
  const blockedDonation = kind === "donation" && Boolean(selected?.note.toLowerCase().includes("do not"));

  const visibleOrgs = useMemo(() => {
    const q = filter.trim().toLowerCase();
    if (!q) return directory;
    return directory.filter((org) => `${org.name} ${org.place} ${org.hook}`.toLowerCase().includes(q));
  }, [filter]);

  async function copyLetter() {
    try {
      await navigator.clipboard.writeText(letter);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      setCopied(false);
    }
  }

  function importCsv() {
    const rows = parseCsv(paste);
    if (!rows.length) {
      setPasteNote("No rows. The first line needs the headers name, place, sector, ask, route.");
      return;
    }
    rows.forEach((row) => addTarget(row));
    setPasteNote(`${rows.length} rows read. Duplicates by name are skipped.`);
    setPaste("");
  }

  function exportCsv() {
    const header = ["name", "place", "sector", "ask", "route", "status", "note"];
    const lines = [
      header.join(","),
      ...targets.map((target) =>
        [target.name, target.place, target.sector, target.ask, target.route, target.status, target.note]
          .map(csvCell)
          .join(","),
      ),
    ];
    const blob = new Blob([lines.join("\n")], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "notts-ledger-desk.csv";
    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-8 md:px-8 md:py-12">
      <p className="text-xs font-medium tracking-widest text-teal-ink uppercase">Support, donations, introductions</p>
      <h1 className="mt-3 font-serif text-4xl text-ink md:text-5xl">Ask a short list. Do not buy a long one.</h1>
      <p className="mt-4 max-w-2xl leading-relaxed text-muted">
        Built for Reform UK candidates in Nottinghamshire. The full census of companies is Companies House, not this
        page. What sits here is a bench of public local names, a way to import your own extract, and letters that name
        the policy. Nobody on the bench has been marked as a party supporter. The desk stays in this browser.
      </p>

      <div className="mt-6">
        <Rule>
          Over £500, the donor has to be permissible: a UK-registered company carrying on business here, an elector, a
          UK union, building society, or one of the other sources on the Electoral Commission list. Anonymous gifts
          over that line cannot be kept. Companies need a members’ resolution once political donations and expenditure
          pass £5,000 in twelve months. Nothing in return — not rates, not the levy, not a lot, not a consent.
        </Rule>
      </div>

      {!ready ? (
        <p className="mt-6 text-sm text-muted">Opening the desk saved in this browser.</p>
      ) : (
        <>
          <section className="mt-8 grid gap-3 sm:grid-cols-2">
            <Field label="Candidate" value={candidate} onChange={(value) => setProfile({ candidate: value })} />
            <Field label="Ward or division" value={ward} onChange={(value) => setProfile({ ward: value })} />
            <Field label="Reply email" value={email} onChange={(value) => setProfile({ email: value })} />
            <Field label="Campaign name" value={organisation} onChange={(value) => setProfile({ organisation: value })} />
          </section>

          <section className="mt-10">
            <h2 className="font-serif text-2xl text-ink">Public bench</h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
              These are well-known local organisations. The score is not printed because a score would be read as
              allegiance. The hook is the bill or the convening role. Convenors and council companies can be logged as
              policy contacts. They are marked so the donation letter is not the one you send.
            </p>
            <input
              className="mt-3 h-11 w-full px-3 sm:max-w-sm"
              placeholder="Search the bench"
              value={filter}
              onChange={(event) => setFilter(event.target.value)}
              aria-label="Search the bench"
            />
            <div className="mt-3 space-y-3">
              {visibleOrgs.map((org) => (
                <article key={org.id} className="rounded-lg border border-line bg-card p-4">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="font-medium text-ink">{org.name}</h3>
                      <p className="text-xs text-teal-ink">
                        {org.place} · {sectorLabel[org.sector]}
                      </p>
                    </div>
                    <button
                      type="button"
                      className="h-11 rounded-md bg-ink px-3 text-sm font-medium text-paper"
                      onClick={() =>
                        addTarget({
                          name: org.name,
                          place: org.place,
                          sector: sectorLabel[org.sector],
                          ask: org.ask,
                          route: org.route,
                          note: org.block ?? "",
                        })
                      }
                    >
                      Add to desk
                    </button>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{org.hook}</p>
                  <p className="mt-2 text-sm text-ink">Ask: {org.ask}</p>
                  <p className="mt-1 text-sm text-muted">Reach: {org.route}</p>
                  {org.block ? <p className="mt-2 text-sm text-rust">{org.block}</p> : null}
                </article>
              ))}
            </div>
          </section>

          <section className="mt-10">
            <h2 className="font-serif text-2xl text-ink">Import your Companies House extract</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Headers required: name, place, sector, ask, route. Build that file with the method on Sources. This box
              does not call Companies House and it does not store directors.
            </p>
            <textarea
              className="mt-3 min-h-32 w-full p-3 text-sm"
              value={paste}
              onChange={(event) => setPaste(event.target.value)}
              placeholder={"name,place,sector,ask,route\nExample Tools Ltd,Sherwood,retail,Top-up relief,Walk the high street"}
            />
            <div className="mt-2 flex flex-wrap gap-2">
              <button type="button" onClick={importCsv} className="h-11 rounded-md bg-teal px-4 text-sm font-medium text-on-teal">
                Import rows
              </button>
              <button type="button" onClick={exportCsv} className="h-11 rounded-md bg-paper-2 px-4 text-sm font-medium text-ink">
                Download desk
              </button>
            </div>
            {pasteNote ? <p className="mt-2 text-sm text-muted">{pasteNote}</p> : null}
          </section>

          <section className="mt-10">
            <h2 className="font-serif text-2xl text-ink">The desk</h2>
            {targets.length === 0 ? (
              <p className="mt-3 text-sm text-muted">Empty. Add from the bench, or import a file. Nothing is sent from here.</p>
            ) : (
              <div className="mt-3 space-y-3">
                {targets.map((target) => (
                  <article
                    key={target.id}
                    className={`rounded-lg border bg-card p-4 ${selected?.id === target.id ? "border-teal" : "border-line"}`}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <button type="button" className="text-left" onClick={() => setActive(target.id)}>
                        <span className="block font-medium text-ink">{target.name}</span>
                        <span className="block text-xs text-muted">
                          {target.place} · {target.sector}
                        </span>
                      </button>
                      <button type="button" className="h-11 px-2 text-sm text-rust" onClick={() => removeTarget(target.id)}>
                        Remove
                      </button>
                    </div>
                    <p className="mt-2 text-sm text-ink">{target.ask}</p>
                    <label className="mt-3 block text-sm text-muted">
                      Status
                      <select
                        className="mt-1 h-11 w-full px-3"
                        value={target.status}
                        onChange={(event) => setStatus(target.id, event.target.value as TargetStatus)}
                      >
                        {statuses.map((status) => (
                          <option key={status} value={status}>
                            {statusLabel[status]}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label className="mt-3 block text-sm text-muted">
                      Note
                      <textarea
                        className="mt-1 min-h-20 w-full p-3"
                        value={target.note}
                        onChange={(event) => setNote(target.id, event.target.value)}
                      />
                    </label>
                  </article>
                ))}
              </div>
            )}
          </section>

          <section className="mt-10">
            <h2 className="font-serif text-2xl text-ink">Letter</h2>
            <p className="mt-2 text-sm text-muted">
              Written for {selected ? selected.name : "no one yet"}. Change the kind before you copy. Send it yourself.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {letterKinds.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setKind(item.id)}
                  className={`h-11 rounded-md px-3 text-sm font-medium ${kind === item.id ? "bg-ink text-paper" : "bg-paper-2 text-ink"}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            {blockedDonation && (
              <div className="mt-3">
                <Rule>
                  This contact is marked do-not-solicit. The donation letter is shown so you can see the compliance
                  wording. Do not send this version to them.
                </Rule>
              </div>
            )}
            <pre className="mt-4 overflow-x-auto rounded-lg border border-line bg-card p-4 text-sm leading-relaxed whitespace-pre-wrap text-ink">
              {letter}
            </pre>
            <button type="button" onClick={() => void copyLetter()} className="mt-3 h-11 rounded-md bg-ink px-4 text-sm font-medium text-paper">
              {copied ? "Copied" : "Copy letter"}
            </button>
          </section>
        </>
      )}
    </main>
  );
}

function Field({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return (
    <label className="block text-sm text-muted">
      {label}
      <input className="mt-1 h-11 w-full px-3 text-ink" value={value} onChange={(event) => onChange(event.target.value)} />
    </label>
  );
}

function parseCsv(text: string) {
  const lines = text.split(/\r?\n/).filter((line) => line.trim());
  if (lines.length < 2) return [];
  const headers = splitCsv(lines[0]).map((cell) => cell.trim().toLowerCase());
  const index = (name: string) => headers.indexOf(name);
  const nameI = index("name");
  if (nameI < 0) return [];
  return lines.slice(1).flatMap((line) => {
    const cells = splitCsv(line);
    const name = cells[nameI]?.trim();
    if (!name) return [];
    return [
      {
        name,
        place: cells[index("place")]?.trim() || "Nottinghamshire",
        sector: cells[index("sector")]?.trim() || "Unspecified",
        ask: cells[index("ask")]?.trim() || "Ask which cost you can actually move.",
        route: cells[index("route")]?.trim() || "Published company address. No purchased list.",
      },
    ];
  });
}

function splitCsv(line: string) {
  const out: string[] = [];
  let current = "";
  let quoted = false;
  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    if (quoted) {
      if (char === '"') {
        if (line[i + 1] === '"') {
          current += '"';
          i += 1;
        } else quoted = false;
      } else current += char;
    } else if (char === '"') quoted = true;
    else if (char === ",") {
      out.push(current);
      current = "";
    } else current += char;
  }
  out.push(current);
  return out;
}

function csvCell(value: string) {
  if (/[",\n]/.test(value)) return `"${value.replaceAll('"', '""')}"`;
  return value;
}
