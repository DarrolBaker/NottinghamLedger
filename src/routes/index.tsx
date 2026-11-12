import { createFileRoute, Link } from "@tanstack/react-router";
import { Rule, Stat } from "@/components/bits";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8 md:px-8 md:py-12">
      <p className="text-xs font-medium tracking-widest text-teal-ink uppercase">Briefing · 14 October 2026 · Reform UK, Nottinghamshire</p>
      <h1 className="mt-3 max-w-4xl font-serif text-4xl leading-tight text-ink md:text-6xl">
        The county’s businesses are the roads, the land, and the contract book.
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
        Nottinghamshire County Council, led by Reform UK since May 2025, owns Via East Midlands outright and shares Arc
        Partnership with SCAPE. It does not own the buses or the tram. This desk costs what County Hall can actually
        offer a firm, and how a candidate asks for support without inventing that firm’s politics.
      </p>
      <p className="mt-3 max-w-2xl text-sm text-muted">
        A year on, the group was reported at 41 of 66 seats. Check the whip before that number goes on a leaflet. City
        seats are all-out on 6 May 2027. This is a working desk, not the party’s official site.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Stat label="Via turnover" value="£90.5m" note="Wholly owned highways company, year to 31 March 2026. Pre-tax profit £906k. Contract to 2031." />
        <Stat label="County land book" value="£200m" note="Sites launched with Arc in June 2026, one acre to 120. Arc has already secured over £28m in capital receipts." />
        <Stat label="Notts suppliers" value="70%+" note="Share of county contracts awarded locally, and 56% to SMEs, on the council’s own procurement note." />
        <Stat label="Contract book" value="£3.6bn" note="Lifetime value of contracts with 604 Nottinghamshire suppliers. Not one year’s spend. Do not quote it as a budget." />
        <Stat label="Homes unlocked" value="1,000+" note="New homes Arc and the county say they helped deliver across ten sites in the year before the land launch." />
        <Stat label="Not the county" value="42.9m" note="Bus trips on city-owned NCT. The tram is a private concession until 2034. Do not claim either on a county leaflet." />
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        <Owner
          kicker="City shareholder"
          title="Buses, the levy, city rates"
          body="About 95% of NCT’s ordinary shares, on the council’s unaudited 2025/26 accounts. The workplace parking levy. Business rates inside the city boundary. The tram PFI counterparty. Enviroenergy. And the dissolved energy company."
        />
        <Owner
          kicker="County shareholder"
          title="Via, Arc, and the contract book"
          body="Via is wholly owned, highways to 2031. Arc is the 2016 joint venture with SCAPE: property, disposals, and the £200m land pipeline. Inspire runs cultural services under contract. A 9% share of district business rates is not the power to set a shop’s bill."
        />
        <Owner
          kicker="Mayor and concession"
          title="The tram, and the franchise risk"
          body="Tramlink (Alstom, Vinci, Keolis, trentbarton, Meridiam, Aberdeen) runs NET through Nottingham Trams until 2034. EMCCA is the strategic transport authority. NCT’s managing director has called franchising an existential threat."
        />
      </div>

      <section className="mt-12 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="font-serif text-2xl text-ink">What County Hall can do this year</h2>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink">
            <li>Publish the £200m land pipeline with a named county contact and a 30-day reply. Arc already does the property work.</li>
            <li>Hold the local-supplier baseline — about 70% of contracts in Nottinghamshire, 56% with SMEs — and publish it every quarter.</li>
            <li>Pay smaller Via and county suppliers in 14 days.</li>
            <li>Keep breaking highways and property work into lots a county firm can bid.</li>
            <li>Broker apprenticeship-levy transfers from Via and other large employers.</li>
          </ul>
        </div>
        <div>
          <h2 className="font-serif text-2xl text-ink">What only the city, or a district, can grant</h2>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink">
            <li>Discretionary business-rate relief. The county cannot write a city shop’s bill.</li>
            <li>Any change to the £592 workplace parking levy. The income is ringfenced to transport.</li>
            <li>A shareholder covenant at NCT, including when a dividend is taken.</li>
            <li>Off-street parking tariffs and premises licensing.</li>
            <li>Ordinary shop and unit planning decisions.</li>
          </ul>
        </div>
      </section>

      <div className="mt-10">
        <Rule>
          There is no list of “Reform businesses”. No public register records how a company votes, and inventing one
          would be false. Score firms by the bill you can actually move. The ones who agree will say so. Do not offer a
          rate cut, a levy rebate, a contract or a planning conversation in return for help.
        </Rule>
      </div>

      <nav className="mt-10 grid gap-3 sm:grid-cols-2">
        <Jump to="/companies" title="The county companies" text="Via, Arc, the contract book — and the buses and tram the county does not own." />
        <Jump to="/platform" title="Cost a platform" text="Switches open on the county side. Watch what is your budget and what is a district’s or the city’s." />
        <Jump to="/places" title="Who might sponsor" text="A four-part test for a Reform UK ward candidate. No invented list of supporters." />
        <Jump to="/outreach" title="Build the list and write" text="Companies House, a shortlist in this browser, and letters that ask for a meeting first." />
      </nav>
    </main>
  );
}

function Owner({ kicker, title, body }: { kicker: string; title: string; body: string }) {
  return (
    <article className="rounded-lg border border-line bg-card p-4">
      <p className="text-xs font-medium tracking-wide text-teal-ink uppercase">{kicker}</p>
      <h2 className="mt-2 font-serif text-xl text-ink">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
    </article>
  );
}

function Jump({ to, title, text }: { to: "/" | "/companies" | "/platform" | "/places" | "/outreach"; title: string; text: string }) {
  return (
    <Link to={to} className="rounded-lg border border-line bg-card p-4 transition-colors duration-200 hover:border-teal">
      <span className="font-medium text-ink">{title}</span>
      <span className="mt-1 block text-sm leading-relaxed text-muted">{text}</span>
    </Link>
  );
}
