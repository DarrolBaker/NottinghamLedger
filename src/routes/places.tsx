import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { briefs, places, type SectorId, sectorLabel } from "@/data/places";

export const Route = createFileRoute("/places")({
  head: () => ({ meta: [{ title: "Places · Notts Ledger" }] }),
  component: Places,
});

function Places() {
  const [group, setGroup] = useState<"City ward" | "District">("City ward");
  const [sector, setSector] = useState<SectorId>("retail");
  const [query, setQuery] = useState("");
  const brief = briefs.find((item) => item.id === sector) ?? briefs[0];
  const shown = useMemo(
    () =>
      places.filter((place) => {
        if (place.group !== group) return false;
        const hay = `${place.name} ${place.character} ${place.mix} ${place.door}`.toLowerCase();
        return hay.includes(query.trim().toLowerCase());
      }),
    [group, query],
  );

  return (
    <main className="mx-auto max-w-5xl px-4 py-8 md:px-8 md:py-12">
      <p className="text-xs font-medium tracking-widest text-teal-ink uppercase">Where the firms actually are</p>
      <h1 className="mt-3 font-serif text-4xl text-ink md:text-5xl">A ward is a ballot. It is not an economy.</h1>
      <p className="mt-4 max-w-2xl leading-relaxed text-muted">
        Twenty city wards, 55 seats, next contested together on 6 May 2027. Seven districts, and 66 county divisions
        last contested in May 2025, when Reform UK took the county. This page does not invent a Reform business in
        each. A firm is a realistic sponsor only if it passes the test below.
      </p>

      <section className="mt-8 rounded-lg border border-line bg-card p-4">
        <h2 className="font-serif text-2xl text-ink">Would they sponsor a Reform UK candidate?</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Four tests, all of them. Fail one and you still take the meeting. You do not put them on a money list.
        </p>
        <ol className="mt-4 grid gap-4 text-sm leading-relaxed md:grid-cols-2">
          <li>
            <span className="font-medium text-ink">1. Locally rooted.</span>
            <span className="mt-1 block text-muted">
              A person or a UK company trading in the division, not a formation-agent address. Nationals decide donations in another city.
            </span>
          </li>
          <li>
            <span className="font-medium text-ink">2. The pain is one you can move.</span>
            <span className="mt-1 block text-muted">
              County: 14-day payment, SME lots, the land desk, levy transfer. Rates, the workplace levy and shop planning belong to the city or the district. Say which.
            </span>
          </li>
          <li>
            <span className="font-medium text-ink">3. Allowed to give.</span>
            <span className="mt-1 block text-muted">
              Not the council, not Via, not Arc, not a charity, college or housing association. Over £500, a permissible donor, recorded.
            </span>
          </li>
          <li>
            <span className="font-medium text-ink">4. The policy is specific enough to say yes to.</span>
            <span className="mt-1 block text-muted">
              “Pro-business” will not get a cheque. A 14-day rule, a published lotting standard, or a 30-day answer on a named site might get a breakfast. Money, if it comes, comes after, through compliance, with nothing in return.
            </span>
          </li>
        </ol>
      </section>

      <section className="mt-8 rounded-lg border border-line bg-card p-4">
        <h2 className="font-serif text-2xl text-ink">What would get them in the room</h2>
        <label className="mt-3 block text-sm text-muted">
          Their business, not their supposed politics
          <select
            className="mt-1 h-11 w-full px-3"
            value={sector}
            onChange={(event) => setSector(event.target.value as SectorId)}
          >
            {(Object.keys(sectorLabel) as SectorId[]).map((id) => (
              <option key={id} value={id}>
                {sectorLabel[id]}
              </option>
            ))}
          </select>
        </label>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Block title="The pain" body={brief.pain} />
          <Block title="The policy that earns a meeting" body={brief.policy} />
          <Block title="What they might then do" body={brief.might} />
          <Block title="What they will not do" body={brief.never} />
        </div>
      </section>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="flex gap-2">
          <Filter on={group === "City ward"} label="City wards" click={() => setGroup("City ward")} />
          <Filter on={group === "District"} label="Districts" click={() => setGroup("District")} />
        </div>
        <input
          className="h-11 w-full px-3 sm:max-w-xs"
          placeholder="Filter by name or trade"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          aria-label="Filter places"
        />
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {shown.map((place) => (
          <article key={place.id} className="rounded-lg border border-line bg-card p-4">
            <div className="flex items-baseline justify-between gap-3">
              <h2 className="font-serif text-xl text-ink">{place.name}</h2>
              {place.seats ? <p className="text-xs text-muted">{place.seats} seats</p> : null}
            </div>
            <p className="mt-1 text-xs font-medium tracking-wide text-teal-ink uppercase">{place.ballot}</p>
            <p className="mt-3 text-sm leading-relaxed text-ink">{place.character}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{place.mix}</p>
            <p className="mt-2 text-sm leading-relaxed text-ink">{place.door}</p>
            <p className="mt-3 text-xs text-muted">
              Bills the rates: {place.billing}. Workplace levy: {place.wpl ? "yes, if the spaces are inside the city" : "no"}.
            </p>
          </article>
        ))}
      </div>
      {shown.length === 0 && <p className="mt-6 text-sm text-muted">Nothing matches that filter.</p>}
    </main>
  );
}

function Block({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h3 className="text-sm font-medium text-ink">{title}</h3>
      <p className="mt-1 text-sm leading-relaxed text-muted">{body}</p>
    </div>
  );
}

function Filter({ on, label, click }: { on: boolean; label: string; click: () => void }) {
  return (
    <button
      type="button"
      onClick={click}
      className={`h-11 rounded-md px-4 text-sm font-medium ${on ? "bg-ink text-paper" : "bg-paper-2 text-ink"}`}
    >
      {label}
    </button>
  );
}
