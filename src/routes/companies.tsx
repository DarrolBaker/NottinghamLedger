import { useEffect, useState, type ReactElement } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Pill, Rule } from "@/components/bits";

export const Route = createFileRoute("/companies")({
  head: () => ({ meta: [{ title: "Municipal companies · Notts Ledger" }] }),
  component: Companies,
});

const nct = [
  { year: "2016", turnover: 53.2, pretax: 2.3 },
  { year: "2017", turnover: 53.8, pretax: 2.9 },
  { year: "2018", turnover: 53.2, pretax: 1.2 },
  { year: "2019", turnover: 53.7, pretax: 0.8 },
  { year: "2020", turnover: 53.9, pretax: 5.3 },
  { year: "2021", turnover: 49.7, pretax: 2.0 },
  { year: "2022", turnover: 41.8, pretax: 0.6 },
  { year: "2023", turnover: 51.7, pretax: 1.0 },
  { year: "2024", turnover: 59.3, pretax: 4.4 },
];

const tram = [
  { year: "Mar 2023", passengers: 14.4, loss: 57.1 },
  { year: "Mar 2024", passengers: 15.5, loss: 26.3 },
  { year: "Mar 2025", passengers: 15.7, loss: 1.9 },
];

const tip = {
  background: "var(--color-card)",
  border: "1px solid var(--color-line)",
  borderRadius: 8,
  color: "var(--color-ink)",
  fontSize: 13,
};

function Companies() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8 md:px-8 md:py-12">
      <p className="text-xs font-medium tracking-widest text-teal-ink uppercase">The portfolio</p>
      <h1 className="mt-3 font-serif text-4xl text-ink md:text-5xl">What County Hall owns, and what it only influences.</h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
        Reform UK has run Nottinghamshire County Council since May 2025. The commercial portfolio is Via, Arc, and a
        contract book already tilted toward local firms. The buses are the city’s. The tram is a concession until
        2034. Quote the first. Do not claim the second.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <Fact value="Via" label="Wholly owned. Highways and fleet. £90.5m turnover to March 2026." />
        <Fact value="Arc" label="Joint venture with SCAPE since 2016. Property, disposals, the £200m land book." />
        <Fact value="Inspire" label="Cultural services partner. A contract, not a trading war chest, and not a donor." />
      </div>

      <section className="mt-10">
        <Header
          pill="City"
          title="Nottingham City Transport"
          lede="Company 02004967. The second-largest municipal bus operator in Britain. UK Bus Operator of the Year six times, most recently 2024. Passenger satisfaction 94% in the Transport Focus survey for 2025 — the highest operator figure reported for England."
        />
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Fact value="42.9m" label="Passenger trips, 2025/26" />
          <Fact value="280" label="Buses operated. A separate 2026 fleet count of 295 includes training vehicles." />
          <Fact value="62" label="Electric single-decks in service. 13 electric double-decks ordered for late 2026." />
          <Fact value="~800" label="Drivers. Filed accounts put total staff at 1,068 in the year to March 2024." />
        </div>
        <dl className="mt-6 grid gap-x-8 gap-y-3 text-sm md:grid-cols-2">
          <Item k="Network" v="72 routes. About 31,570 journeys scheduled a week. 300,000 km a week. The Pathfinder 90 reaches Newark, 26 miles — county residents ride a city company." />
          <Item k="Fleet standard" v="100% Euro VI, 100% accessible, 100% audio announcements, on NCT’s own list. 82% with USB charging." />
          <Item k="Electric money" v="ZEBRA: £12.3m from the Department for Transport inside a £30m package, £17.7m from NCT. EMCCA is putting £4.5m towards 19 electric double-decks; the order announced is 13 Yutong vehicles. Quote 13 as the order and 19 as the funded ambition." />
          <Item k="Margin" v="Management has described a target around 5–8%, with profit staying in the network. Not a listed-company dividend machine." />
        </dl>

        <h3 className="mt-8 font-serif text-xl text-ink">Ordinary shares, and the 18% that will not die</h3>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
          The city’s unaudited 2025/26 statement of accounts records 4,532,000 “A” ordinary £1 shares owned by the
          council and 238,526 “B” ordinary £1 shares owned by Transdev. That is 95.0% and 5.0% of the ordinary shares.
          The same note records 2,882,750 preference shares. This desk does not say who holds them — the extract does
          not. NCT’s own site still describes Transdev’s holding, taken in 2000, as an effective 18% stake. Preference
          terms are usually why those two sentences both exist. Read the note before a leaflet picks one.
        </p>
        <div className="mt-4 overflow-hidden rounded-lg border border-line">
          <table className="w-full text-left text-sm">
            <thead className="bg-paper-2 text-xs tracking-wide text-muted uppercase">
              <tr>
                <th className="px-3 py-2 font-medium">Holding</th>
                <th className="px-3 py-2 font-medium">Shares</th>
                <th className="px-3 py-2 font-medium">Who</th>
              </tr>
            </thead>
            <tbody className="bg-card">
              <Row a="A ordinary, £1" b="4,532,000" c="Nottingham City Council" />
              <Row a="B ordinary, £1" b="238,526" c="Transdev" />
              <Row a="Preference, £1" b="2,882,750" c="See the accounts. Not guessed here." />
            </tbody>
          </table>
        </div>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted">
          The same draft group note shows a profit for the latest period of about £1.15 million attributable to equity
          shareholders (£1.097m majority, £0.055m minority), after a loss the year before. Ordinary dividends in that
          note are about £0.28 million, and about £0.55 million was still paid in the loss-making year. A covenant
          should say when the shareholder takes cash. These are unaudited extracts, not a substitute for NCT’s filed
          statements.
        </p>

        <h3 className="mt-8 font-serif text-xl text-ink">Turnover and pre-tax profit, £ million</h3>
        <p className="mt-1 text-sm text-muted">Years ending March. Rounded from the filed series collated by Pomanda. Cross-check the PDF.</p>
        <Chart>
          <BarChart data={nct}>
            <CartesianGrid stroke="var(--color-line)" vertical={false} />
            <XAxis dataKey="year" tick={{ fill: "var(--color-muted)", fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "var(--color-muted)", fontSize: 12 }} axisLine={false} tickLine={false} width={36} />
            <Tooltip contentStyle={tip} />
            <Bar dataKey="turnover" name="Turnover £m" fill="var(--color-teal)" radius={[3, 3, 0, 0]} />
            <Bar dataKey="pretax" name="Pre-tax £m" fill="var(--color-ink)" radius={[3, 3, 0, 0]} />
          </BarChart>
        </Chart>

        <Rule>
          David Astill, NCT’s managing director, has called bus franchising under the East Midlands mayor an
          existential threat. The enterprise position that matches the evidence is: leave a 94% operator alone, publish
          the dividend rule, and do not spend two years inventing a contract to replace it.
        </Rule>
      </section>

      <section className="mt-14">
        <Header
          pill="Concession"
          title="Nottingham Express Transit"
          lede="Not a council department. Tramlink Nottingham Ltd holds the PFI concession. Nottingham Trams Ltd operates the NET brand. Phase Two was let in 2011. The concession ends in 2034, when responsibility is expected to sit with EMCCA."
        />
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Fact value="15.7m" label="Passenger journeys, year to 31 March 2025. Up from 15.5m and 14.4m." />
          <Fact value="£67.1m" label="Turnover, up 4.4%. Gross profit £11.9m, from £8.2m." />
          <Fact value="£1.9m" label="Loss before tax, including interest. The smallest since 2016. Prior year £26.3m." />
          <Fact value="2034" label="Concession end. Do not print a buy-out price. You do not have one." />
        </div>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted">
          The £57.1 million loss for the year to March 2023 included a £26.7 million impairment. The restructuring
          completed around the start of 2024, with the Department for Transport and the city council, cut the interest
          burden. Tim Hesketh, Tramlink’s chief executive, has described the network as stable and thanked both. The
          city still pays ongoing sums under the PFI. Quote that figure from the council’s accounts, not from a
          campaign guess. The consortium includes Alstom, Vinci, Keolis, trentbarton, Meridiam and Aberdeen.
        </p>
        <h3 className="mt-8 font-serif text-xl text-ink">Passengers and the accounting loss</h3>
        <p className="mt-1 text-sm text-muted">Loss is £ million before tax, including interest. It is not the operating cash loss.</p>
        <Chart>
          <BarChart data={tram}>
            <CartesianGrid stroke="var(--color-line)" vertical={false} />
            <XAxis dataKey="year" tick={{ fill: "var(--color-muted)", fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "var(--color-muted)", fontSize: 12 }} axisLine={false} tickLine={false} width={36} />
            <Tooltip contentStyle={tip} />
            <Bar dataKey="passengers" name="Passengers, millions" fill="var(--color-teal)" radius={[3, 3, 0, 0]} />
            <Bar dataKey="loss" name="Loss before tax, £m" fill="var(--color-rust)" radius={[3, 3, 0, 0]} />
          </BarChart>
        </Chart>
        <p className="max-w-3xl text-sm leading-relaxed text-muted">
          The lines cross the city boundary. Hucknall is Ashfield. Beeston and Toton Lane are Broxtowe. Clifton is the
          city. A county leader does not sign the cheques and still has voters at the outer stops. That is an EMCCA
          argument, not an ownership claim.
        </p>
      </section>

      <section className="mt-14">
        <Header
          pill="County"
          title="Via East Midlands"
          lede="Company 09903246. Wholly owned by Nottinghamshire County Council since the buy-out of Cornwall’s Corserv, reported at the time as £5 million. Bilsthorpe. Exclusive highways contract to 2031. This is the county’s commercial company."
        />
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <Fact value="£90.5m" label="Turnover to 31 March 2026, from £87.7m. Source: reported filed accounts." />
          <Fact value="£906k" label="Pre-tax profit, from £690k. A 1% margin. Normal for this sort of company, not a scandal and not a war chest." />
          <Fact value="724" label="Employees, from 714. A £6m Derbyshire street-lighting contract sits outside the county network." />
        </div>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted">
          Profits can come back as dividends or be left in the road network. The enterprise question is not “extract
          more”. It is whether packages are small enough for a Nottinghamshire contractor, and whether those
          contractors are paid in 14 days. Via is not a bus company and it is not allowed to become a campaign donor.
        </p>
      </section>

      <section className="mt-14">
        <Header
          pill="County joint venture"
          title="Arc Partnership"
          lede="Arc Property Services Partnership is the 2016 joint venture between Nottinghamshire County Council and SCAPE. It is the council’s property and development partner: estates, disposals, schools, and the land pipeline launched at UKREiiF in June 2026. Surplus is reinvested or returned to the public shareholders. It is not a campaign account."
        />
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Fact value="£200m" label="Land and development portfolio, sites from one acre to more than 120. Shovel-ready, on the council’s launch." />
          <Fact value="£28m+" label="Capital receipts Arc says it has already secured for the council. Development value of that programme put above £120m." />
          <Fact value="1,000+" label="Homes the council says were delivered across ten sites in the year before the June 2026 launch." />
          <Fact value="2016" label="Year of the joint venture. Exclusive property partner to the county, with limited third-party work." />
        </div>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted">
          The offer a Reform administration can make this year is not a new municipal developer. It is a named
          contact, a 30-day reply, and the sites already prepared. James Walker-Gurley, cabinet member for economic
          development and asset management, fronted the launch. Developers and housebuilders are the natural meeting.
          They are also the highest risk if anyone hints that a site follows a donation. The letter says the opposite.
        </p>
        <h3 className="mt-8 font-serif text-xl text-ink">The contract book around them</h3>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
          The county’s procurement note, covering the position into 2024/25, said more than 70% of contracts — and in
          one telling, 74% — had gone to Nottinghamshire suppliers, 56% of them SMEs. It counted 604 local suppliers
          and put the value of those contracts above £3.6 billion. That is a stock of contracts, not an annual
          budget. Nineteen new contracts in one quarter were estimated at £113 million. The policy is to hold that
          local share and publish it, not to promise the next framework to a friend.
        </p>
      </section>

      <section className="mt-14">
        <Header
          pill="Do not repeat"
          title="Robin Hood Energy, and the rest of the drawer"
          lede="The city also owns Enviroenergy, the district-heating business. Treat any proposal for a new municipal trading company as guilty until the business case is public. The last one is why."
        />
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted">
          Robin Hood Energy was set up in 2015, entered administration in 2020, and was formally dissolved in 2025.
          Liquidation coverage put unpaid claims in the tens of millions and the final loss to Nottingham taxpayers at
          least £28.6 million, after a partial recovery on what the council and the Bridge Estate were owed. A public
          interest review called the decision institutional blindness. The failure sat underneath the city’s section
          114 notice. It had about 125,000 customers at the peak and still destroyed value.
        </p>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
          The contrast with NCT is the whole portfolio. A bus company the council kept, with a minority private
          shareholder, a published service and profits that mostly stay in the fleet, is not the same instrument as an
          energy supplier the council had no business running. Policy: protect the first. Do not found a second Robin
          Hood.
        </p>
      </section>
    </main>
  );
}

function Header({ pill, title, lede }: { pill: string; title: string; lede: string }) {
  return (
    <div className="border-t border-line pt-6">
      <Pill tone="fact">{pill}</Pill>
      <h2 className="mt-3 font-serif text-3xl text-ink">{title}</h2>
      <p className="mt-3 max-w-3xl leading-relaxed text-muted">{lede}</p>
    </div>
  );
}

function Fact({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-lg border border-line bg-card p-3">
      <p className="font-serif text-2xl text-ink tabular-nums">{value}</p>
      <p className="mt-1 text-sm leading-relaxed text-muted">{label}</p>
    </div>
  );
}

function Item({ k, v }: { k: string; v: string }) {
  return (
    <div className="border-t border-line pt-2">
      <dt className="font-medium text-ink">{k}</dt>
      <dd className="text-muted">{v}</dd>
    </div>
  );
}

function Row({ a, b, c }: { a: string; b: string; c: string }) {
  return (
    <tr className="border-t border-line">
      <td className="px-3 py-2">{a}</td>
      <td className="px-3 py-2 tabular-nums">{b}</td>
      <td className="px-3 py-2 text-muted">{c}</td>
    </tr>
  );
}

function Chart({ children }: { children: ReactElement }) {
  const [on, setOn] = useState(false);
  useEffect(() => setOn(true), []);
  return (
    <div className="my-4 h-64 w-full">
      {on ? <ResponsiveContainer width="100%" height="100%">{children}</ResponsiveContainer> : null}
    </div>
  );
}
