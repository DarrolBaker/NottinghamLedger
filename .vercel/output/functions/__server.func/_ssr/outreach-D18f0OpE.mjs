import { i as __toESM } from "../_runtime.mjs";
import { J as require_jsx_runtime, q as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Rule } from "./bits-DoUbgXCT.mjs";
import { r as sectorLabel } from "./places-pXlyubsq.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/outreach-D18f0OpE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var directory = [
	{
		id: "nct",
		name: "Nottingham City Transport",
		place: "City",
		areaId: "castle",
		sector: "operator",
		hook: "The asset, not a donor. Council majority, 42.9 million trips.",
		ask: "Shareholder covenant. No solicitation.",
		route: "Through the city shareholder. Not a fundraising call.",
		url: "https://www.nctx.co.uk",
		block: "Council-controlled. Do not ask it to fund a candidate."
	},
	{
		id: "via",
		name: "Via East Midlands",
		place: "Bilsthorpe",
		areaId: "newark",
		sector: "operator",
		hook: "County highways company. £90.5 million turnover. The lever is lots and prompt payment, not a donation.",
		ask: "SME lots on highways work.",
		route: "Through the county as shareholder.",
		url: "https://www.viaem.co.uk",
		block: "Council-owned. Do not solicit."
	},
	{
		id: "arc",
		name: "Arc Partnership",
		place: "County-wide, joint venture with SCAPE",
		areaId: "newark",
		sector: "professional",
		hook: "The county’s property partner. £200m land book. Surplus returns to the public shareholders.",
		ask: "A published pipeline and a 30-day reply. No solicitation.",
		route: "Through the county cabinet member for economic development, not a fundraising call.",
		url: "https://www.arc-partnership.co.uk",
		block: "Council joint venture. Do not ask it to fund a candidate."
	},
	{
		id: "tram",
		name: "Tramlink / NET",
		place: "Network-wide",
		areaId: "castle",
		sector: "operator",
		hook: "Private concession to 2034. 15.7 million passengers. Loss before tax £1.9 million in 2024/25.",
		ask: "A single 2034 options study. No PFI-break promise.",
		route: "Public affairs via thetram.net. Policy meeting only.",
		url: "https://www.thetram.net",
		block: "Concessionaire and operator. Meet them. Do not treat the tram as a sponsor."
	},
	{
		id: "trentbarton",
		name: "trentbarton (Wellglade)",
		place: "Operates across the county; HQ over the border in Heanor",
		areaId: "broxtowe",
		sector: "operator",
		hook: "The main private bus operator beside NCT. Directly affected by any EMCCA franchise.",
		ask: "Hear their franchising position before you publish yours.",
		route: "Published contact on trentbarton.co.uk. One letter, not a list buy.",
		url: "https://www.trentbarton.co.uk"
	},
	{
		id: "games",
		name: "Games Workshop",
		place: "Lenton, Nottingham",
		areaId: "lenton",
		sector: "campus",
		hook: "The city’s best-known growing manufacturer-retailer. Locally rooted, now a large employer inside the city boundary.",
		ask: "Levy predictability and the bus covenant for shift staff. Apprenticeships if they will transfer levy.",
		route: "Company public-affairs or media office. Do not mail a shop floor manager.",
		url: "https://www.games-workshop.com"
	},
	{
		id: "experian",
		name: "Experian",
		place: "Nottingham",
		areaId: "castle",
		sector: "campus",
		hook: "Major city employer. Likely levy-exposed if the campus parking is inside the boundary — confirm the car park, do not assume.",
		ask: "A published levy rule and skills brokerage.",
		route: "Corporate affairs. A ward candidate will get one meeting at most. Make it about the rule, not a favour.",
		url: "https://www.experianplc.com"
	},
	{
		id: "capital-one",
		name: "Capital One",
		place: "Nottingham",
		areaId: "castle",
		sector: "campus",
		hook: "Large city office employer. Levy and transport reliability.",
		ask: "Same as other campus employers: a rule, not a rebate.",
		route: "UK corporate contact. Expect a refusal on donations and take it well.",
		url: "https://www.capitalone.co.uk"
	},
	{
		id: "boots",
		name: "Boots UK campus",
		place: "Beeston, Broxtowe",
		areaId: "broxtowe",
		sector: "campus",
		hook: "Just outside the city. Tram-served. Not a city-levy payer unless a specific car park is inside the city boundary.",
		ask: "Tram reliability and skills. Not a Workplace Parking Levy cut.",
		route: "Corporate affairs. Say Broxtowe and the tram, or do not write.",
		url: "https://www.boots-uk.com"
	},
	{
		id: "paul-smith",
		name: "Paul Smith",
		place: "Nottingham",
		areaId: "castle",
		sector: "retail",
		hook: "The fashion house founded in the city. Brand and retail rates, not a yard levy.",
		ask: "High-street relief design, if they still trade from city hereditaments. Ask what would actually show up in their bill.",
		route: "Head office public contact. A local story only works if a local store manager agrees.",
		url: "https://www.paulsmith.com"
	},
	{
		id: "castle-rock",
		name: "Castle Rock Brewery",
		place: "Nottingham",
		areaId: "castle",
		sector: "hospitality",
		hook: "Independent brewer with pubs across the conurbation. Feels hospitality rates and licensing directly.",
		ask: "No local rates supplement, and a model premises pack.",
		route: "Published brewery contact. A fair test of whether the hospitality offer is specific enough.",
		url: "https://www.castlerockbrewery.co.uk"
	},
	{
		id: "nbs",
		name: "Nottingham Building Society",
		place: "Nottingham",
		areaId: "castle",
		sector: "professional",
		hook: "Mutual rooted in the city. High-street branches and a local board culture.",
		ask: "Prompt payment and town-centre vitality. Do not assume a mutual will make a political donation.",
		route: "Chair’s office, one letter.",
		url: "https://www.thenottingham.com"
	},
	{
		id: "mbs",
		name: "Mansfield Building Society",
		place: "Mansfield",
		areaId: "mansfield",
		sector: "professional",
		hook: "Town mutual. Useful convening voice, unlikely chequebook.",
		ask: "Mansfield town-centre reoccupation and short-stay parking, which the district controls.",
		route: "Published head office.",
		url: "https://www.mansfieldbs.co.uk"
	},
	{
		id: "browne",
		name: "Browne Jacobson",
		place: "Nottingham",
		areaId: "castle",
		sector: "professional",
		hook: "Major law firm founded in the city. They will notice a sloppy donation ask immediately.",
		ask: "Prompt payment on public contracts. Nothing about planning favours.",
		route: "Managing partner’s published office. Offer a policy paper, not a sponsorship form.",
		url: "https://www.brownejacobson.com"
	},
	{
		id: "freeths",
		name: "Freeths",
		place: "Nottingham",
		areaId: "castle",
		sector: "professional",
		hook: "National firm with deep Nottingham roots.",
		ask: "Same as other professional rooms: payment terms and a predictable city centre.",
		route: "Office managing partner.",
		url: "https://www.freeths.co.uk"
	},
	{
		id: "biocity",
		name: "BioCity",
		place: "Pennyfoot Street, Nottingham",
		areaId: "castle",
		sector: "industrial",
		hook: "Lab incubator. The tenants are the SMEs. The building is the door.",
		ask: "Match fund and apprenticeship brokerage for tenant firms.",
		route: "Incubator management, then ask which tenants opt in. Do not harvest a tenant list.",
		url: "https://www.biocity.co.uk"
	},
	{
		id: "sugar",
		name: "British Sugar",
		place: "Newark",
		areaId: "newark",
		sector: "logistics",
		hook: "Large industrial ratepayer. The 2026/27 high-value multiplier is the national fact that will annoy them.",
		ask: "Do not pretend the council sets that multiplier. Offer highways reliability and driver apprenticeships.",
		route: "Site public affairs. One serious letter.",
		url: "https://www.britishsugar.co.uk"
	},
	{
		id: "parcs",
		name: "Center Parcs Sherwood Forest",
		place: "Rufford, Newark & Sherwood",
		areaId: "newark",
		sector: "hospitality",
		hook: "Large leisure employer. Seasonal labour, access roads, a big hereditament.",
		ask: "Via’s maintenance on the approach, and levy transfer for hospitality apprentices. Rates are mostly a national bill.",
		route: "UK public affairs. Not the village shop network.",
		url: "https://www.centerparcs.co.uk"
	},
	{
		id: "chamber",
		name: "East Midlands Chamber",
		place: "Covers Nottinghamshire",
		areaId: "castle",
		sector: "professional",
		hook: "The successor body firms already belong to. The fastest lawful introduction.",
		ask: "A roundtable on the one-page platform. Not a donation.",
		route: "Policy team. Go in with the costed page, not a slogan.",
		url: "https://www.emc-dnl.co.uk",
		block: "Convenor. Ask for a room and an introduction."
	},
	{
		id: "fsb",
		name: "Federation of Small Businesses",
		place: "Nottinghamshire members",
		areaId: "castle",
		sector: "retail",
		hook: "The right room for independents who will never answer a cold email.",
		ask: "Test the top-up, the holiday and the 14-day rule with members who will pull it apart.",
		route: "Local organiser. Offer the calculator, not a speech.",
		url: "https://www.fsb.org.uk",
		block: "Convenor. Introductions only."
	},
	{
		id: "bid",
		name: "Nottingham City Centre BID",
		place: "Castle ward and the core",
		areaId: "castle",
		sector: "retail",
		hook: "The existing mandate from city-centre levy payers. Use it as a door.",
		ask: "Which of the city-controlled policies their board would actually notice in a year.",
		route: "BID office. Do not scrape their member list into a mail merge.",
		block: "Convenor. They are not a donor."
	},
	{
		id: "hockley",
		name: "Hockley independents",
		place: "Hyson Green & Arboretum / city centre edge",
		areaId: "hyson",
		sector: "retail",
		hook: "A walked cluster, not a company. Creative Quarter knows the streets.",
		ask: "Shopfront match fund and rates top-up.",
		route: "Walk the street. Leave a one-page paper. No purchased emails."
	},
	{
		id: "sherwood-st",
		name: "Sherwood high street",
		place: "Sherwood",
		areaId: "sherwood",
		sector: "retail",
		hook: "Independent comparison retail. The cleanest test of the rates offer inside the city.",
		ask: "Top-up relief and short-stay bays.",
		route: "In person, weekday morning before trade."
	},
	{
		id: "sneinton",
		name: "Sneinton Market traders",
		place: "Dales",
		areaId: "dales",
		sector: "retail",
		hook: "Small makers and food. A grant cap matters more than a city-wide strategy.",
		ask: "Match fund with a low cap.",
		route: "Market management introduction, then the traders who opt in."
	},
	{
		id: "west-bridgford",
		name: "Central Avenue independents",
		place: "West Bridgford, Rushcliffe",
		areaId: "rushcliffe",
		sector: "retail",
		hook: "Affluent local centre. Rushcliffe bills the rates. The city levy is irrelevant here.",
		ask: "A Rushcliffe discretionary scheme, not a Nottingham City one.",
		route: "Walk Central Avenue. Say the borough’s name in the first sentence."
	},
	{
		id: "arnold",
		name: "Arnold town centre",
		place: "Gedling",
		areaId: "gedling",
		sector: "retail",
		hook: "Town centre on the city edge. Traders are used to being forgotten in ‘Nottingham’ policies.",
		ask: "Gedling rates holiday and Gedling-owned car-park pricing.",
		route: "Traders’ association if one is active, otherwise walk Front Street."
	},
	{
		id: "hucknall",
		name: "Hucknall town centre",
		place: "Ashfield",
		areaId: "ashfield",
		sector: "retail",
		hook: "Tram terminus, Ashfield rates. The tram is why people come; the district sets the bill.",
		ask: "Reoccupation holiday from Ashfield, and a tram study so the line is still there after 2034.",
		route: "High street in person."
	},
	{
		id: "newark-town",
		name: "Newark market-place independents",
		place: "Newark",
		areaId: "newark",
		sector: "retail",
		hook: "Market town. Parking and voids, billed and parked by the district.",
		ask: "Short-stay tariff and a six-month reoccupation holiday.",
		route: "Newark Business Club or a walked market place. One convenor, then names."
	}
];
var letterKinds = [
	{
		id: "intro",
		label: "First letter — no money"
	},
	{
		id: "breakfast",
		label: "Breakfast invite"
	},
	{
		id: "consult",
		label: "Policy test"
	},
	{
		id: "donation",
		label: "Donation route"
	}
];
function writeLetter(kind, profile, target) {
	const who = profile.candidate.trim() || "A candidate";
	const ward = profile.ward.trim() || "the ward";
	const email = profile.email.trim() || "the address on this letter";
	const org = profile.organisation.trim() || "an independent campaign";
	const firm = target.name;
	const ask = target.ask;
	const sign = `${who}\n${org}\n${email}`;
	if (kind === "breakfast") return `Subject: Thirty minutes, ${target.place} — ${ask}

Dear directors,

I am asking six firms, not sixty, to pull a policy apart before it is printed.

The policy is: ${ask}

Breakfast, weekday, 45 minutes, your room or a café you choose. I will bring the costed page and the name of the council that would have to deliver it. If that council is not the one I am standing for, I will say so in the first minute.

There is no donation at this meeting. If you pay for the room when the campaign would otherwise have paid, tell me, and I will record it.

Reply to ${email} if it is useful. If it is not, you will not hear from me again.

${sign}`;
	if (kind === "consult") return `Subject: Would this change your bill — ${firm}

Dear directors,

I am costing an enterprise platform for Nottingham and Nottinghamshire, and I would rather be corrected by ${firm} than applauded by people who will not pay the bill.

The line I think touches you: ${ask}

Two questions only.

1. If this were in force next April, what would actually change for you — pounds, days, or nothing?
2. Who else in ${target.place} should have sight of it before a candidate says it in public?

Reply to ${email}. A short no is useful. This is not a request for money.

${sign}`;
	if (kind === "donation") return `Subject: A lawful route, if you ever wanted one — ${ward}

Dear directors,

This letter is only for a firm that has already said the policy is worth supporting. If that is not you, ignore it.

I am ${who}, standing in ${ward}, ${org}. The policy in question: ${ask}

A company donation is regulated.

— It has to come from a UK-registered company carrying on business in the UK. Gifts over £500 must be from a permissible source. Anonymous gifts over that line cannot be kept.
— Companies Act 2006 requires member authorisation before political donations or expenditure above the statutory aggregate (currently £5,000 in 12 months). Your accountant will know if you already have a resolution.
— Reporting thresholds to the Electoral Commission are uprated. Check them the week you give, and route the gift through the campaign’s compliance officer, not a personal account.
— Election material needs an imprint. A poster in your window can be a notional donation or an expense. Tell the agent before it goes up.
— Nothing in return. Not a rates discount, not a levy rebate, not a contract lot, not a planning conversation. If anyone offers that, refuse them and tell the agent.

If you want the compliance note sent to your finance director, reply to ${email}. If you do not, this is the last letter on money.

${sign}`;
	return `Subject: ${ask}

Dear directors,

I am ${who}, standing in ${ward}. I am writing to a short list of firms in ${target.place}. Your name is on it because of what you do, not because anyone has claimed you support a party. You have not been scored as a supporter of anyone.

The offer I want a view on is specific:

${ask}

I am not asking for money. I am asking whether that would be worth thirty minutes, and what would make it useful rather than decorative. If the council I am standing for cannot grant it, I will say which council can.

Reply to ${email}. If you would rather not, no further message will follow.

${sign}`;
}
var useDesk = create()(persist((set, get) => ({
	candidate: "",
	ward: "",
	email: "",
	organisation: "",
	targets: [],
	setProfile: (patch) => set(patch),
	addTarget: (target) => {
		if (get().targets.some((row) => row.name.toLowerCase() === target.name.toLowerCase())) return;
		set({ targets: [{
			id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
			status: "queued",
			note: target.note ?? "",
			name: target.name,
			place: target.place,
			sector: target.sector,
			ask: target.ask,
			route: target.route
		}, ...get().targets] });
	},
	removeTarget: (id) => set({ targets: get().targets.filter((row) => row.id !== id) }),
	setStatus: (id, status) => set({ targets: get().targets.map((row) => row.id === id ? {
		...row,
		status
	} : row) }),
	setNote: (id, note) => set({ targets: get().targets.map((row) => row.id === id ? {
		...row,
		note
	} : row) })
}), {
	name: "notts-ledger-desk",
	skipHydration: true
}));
var statusLabel = {
	queued: "Not contacted",
	sent: "Letter sent",
	replied: "Replied",
	meeting: "Meeting",
	declined: "Declined",
	helping: "Helping, logged"
};
var statuses = Object.keys(statusLabel);
function Outreach() {
	const [ready, setReady] = (0, import_react.useState)(false);
	const [kind, setKind] = (0, import_react.useState)("intro");
	const [active, setActive] = (0, import_react.useState)(null);
	const [copied, setCopied] = (0, import_react.useState)(false);
	const [filter, setFilter] = (0, import_react.useState)("");
	const [paste, setPaste] = (0, import_react.useState)("");
	const [pasteNote, setPasteNote] = (0, import_react.useState)("");
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
	(0, import_react.useEffect)(() => {
		const done = useDesk.persist.rehydrate();
		if (done && typeof done.then === "function") done.then(() => setReady(true));
		else setReady(true);
	}, []);
	const selected = targets.find((target) => target.id === active) ?? targets[0] ?? null;
	const letter = selected ? writeLetter(kind, {
		candidate,
		ward,
		email,
		organisation
	}, selected) : "Add a firm to the desk, then the letter is written against that firm’s ask.";
	const blockedDonation = kind === "donation" && Boolean(selected?.note.toLowerCase().includes("do not"));
	const visibleOrgs = (0, import_react.useMemo)(() => {
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
		const lines = [[
			"name",
			"place",
			"sector",
			"ask",
			"route",
			"status",
			"note"
		].join(","), ...targets.map((target) => [
			target.name,
			target.place,
			target.sector,
			target.ask,
			target.route,
			target.status,
			target.note
		].map(csvCell).join(","))];
		const blob = new Blob([lines.join("\n")], { type: "text/csv" });
		const url = URL.createObjectURL(blob);
		const link = document.createElement("a");
		link.href = url;
		link.download = "notts-ledger-desk.csv";
		link.click();
		URL.revokeObjectURL(url);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-5xl px-4 py-8 md:px-8 md:py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-widest text-teal-ink uppercase",
				children: "Support, donations, introductions"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-serif text-4xl text-ink md:text-5xl",
				children: "Ask a short list. Do not buy a long one."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl leading-relaxed text-muted",
				children: "Built for Reform UK candidates in Nottinghamshire. The full census of companies is Companies House, not this page. What sits here is a bench of public local names, a way to import your own extract, and letters that name the policy. Nobody on the bench has been marked as a party supporter. The desk stays in this browser."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rule, { children: "Over £500, the donor has to be permissible: a UK-registered company carrying on business here, an elector, a UK union, building society, or one of the other sources on the Electoral Commission list. Anonymous gifts over that line cannot be kept. Companies need a members’ resolution once political donations and expenditure pass £5,000 in twelve months. Nothing in return — not rates, not the levy, not a lot, not a consent." })
			}),
			!ready ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-sm text-muted",
				children: "Opening the desk saved in this browser."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-8 grid gap-3 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Candidate",
							value: candidate,
							onChange: (value) => setProfile({ candidate: value })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Ward or division",
							value: ward,
							onChange: (value) => setProfile({ ward: value })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Reply email",
							value: email,
							onChange: (value) => setProfile({ email: value })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Campaign name",
							value: organisation,
							onChange: (value) => setProfile({ organisation: value })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-serif text-2xl text-ink",
							children: "Public bench"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 max-w-3xl text-sm leading-relaxed text-muted",
							children: "These are well-known local organisations. The score is not printed because a score would be read as allegiance. The hook is the bill or the convening role. Convenors and council companies can be logged as policy contacts. They are marked so the donation letter is not the one you send."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: "mt-3 h-11 w-full px-3 sm:max-w-sm",
							placeholder: "Search the bench",
							value: filter,
							onChange: (event) => setFilter(event.target.value),
							"aria-label": "Search the bench"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 space-y-3",
							children: visibleOrgs.map((org) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "rounded-lg border border-line bg-card p-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-start justify-between gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-medium text-ink",
												children: org.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-xs text-teal-ink",
												children: [
													org.place,
													" · ",
													sectorLabel[org.sector]
												]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											className: "h-11 rounded-md bg-ink px-3 text-sm font-medium text-paper",
											onClick: () => addTarget({
												name: org.name,
												place: org.place,
												sector: sectorLabel[org.sector],
												ask: org.ask,
												route: org.route,
												note: org.block ?? ""
											}),
											children: "Add to desk"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-relaxed text-muted",
										children: org.hook
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-2 text-sm text-ink",
										children: ["Ask: ", org.ask]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 text-sm text-muted",
										children: ["Reach: ", org.route]
									}),
									org.block ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-rust",
										children: org.block
									}) : null
								]
							}, org.id))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-serif text-2xl text-ink",
							children: "Import your Companies House extract"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: "Headers required: name, place, sector, ask, route. Build that file with the method on Sources. This box does not call Companies House and it does not store directors."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							className: "mt-3 min-h-32 w-full p-3 text-sm",
							value: paste,
							onChange: (event) => setPaste(event.target.value),
							placeholder: "name,place,sector,ask,route\nExample Tools Ltd,Sherwood,retail,Top-up relief,Walk the high street"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 flex flex-wrap gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: importCsv,
								className: "h-11 rounded-md bg-teal px-4 text-sm font-medium text-on-teal",
								children: "Import rows"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: exportCsv,
								className: "h-11 rounded-md bg-paper-2 px-4 text-sm font-medium text-ink",
								children: "Download desk"
							})]
						}),
						pasteNote ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: pasteNote
						}) : null
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-2xl text-ink",
						children: "The desk"
					}), targets.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted",
						children: "Empty. Add from the bench, or import a file. Nothing is sent from here."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 space-y-3",
						children: targets.map((target) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: `rounded-lg border bg-card p-4 ${selected?.id === target.id ? "border-teal" : "border-line"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-start justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										className: "text-left",
										onClick: () => setActive(target.id),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block font-medium text-ink",
											children: target.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "block text-xs text-muted",
											children: [
												target.place,
												" · ",
												target.sector
											]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "h-11 px-2 text-sm text-rust",
										onClick: () => removeTarget(target.id),
										children: "Remove"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-ink",
									children: target.ask
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "mt-3 block text-sm text-muted",
									children: ["Status", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										className: "mt-1 h-11 w-full px-3",
										value: target.status,
										onChange: (event) => setStatus(target.id, event.target.value),
										children: statuses.map((status) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: status,
											children: statusLabel[status]
										}, status))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "mt-3 block text-sm text-muted",
									children: ["Note", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										className: "mt-1 min-h-20 w-full p-3",
										value: target.note,
										onChange: (event) => setNote(target.id, event.target.value)
									})]
								})
							]
						}, target.id))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-serif text-2xl text-ink",
							children: "Letter"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm text-muted",
							children: [
								"Written for ",
								selected ? selected.name : "no one yet",
								". Change the kind before you copy. Send it yourself."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 flex flex-wrap gap-2",
							children: letterKinds.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setKind(item.id),
								className: `h-11 rounded-md px-3 text-sm font-medium ${kind === item.id ? "bg-ink text-paper" : "bg-paper-2 text-ink"}`,
								children: item.label
							}, item.id))
						}),
						blockedDonation && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rule, { children: "This contact is marked do-not-solicit. The donation letter is shown so you can see the compliance wording. Do not send this version to them." })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
							className: "mt-4 overflow-x-auto rounded-lg border border-line bg-card p-4 text-sm leading-relaxed whitespace-pre-wrap text-ink",
							children: letter
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => void copyLetter(),
							className: "mt-3 h-11 rounded-md bg-ink px-4 text-sm font-medium text-paper",
							children: copied ? "Copied" : "Copy letter"
						})
					]
				})
			] })
		]
	});
}
function Field({ label, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block text-sm text-muted",
		children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			className: "mt-1 h-11 w-full px-3 text-ink",
			value,
			onChange: (event) => onChange(event.target.value)
		})]
	});
}
function parseCsv(text) {
	const lines = text.split(/\r?\n/).filter((line) => line.trim());
	if (lines.length < 2) return [];
	const headers = splitCsv(lines[0]).map((cell) => cell.trim().toLowerCase());
	const index = (name) => headers.indexOf(name);
	const nameI = index("name");
	if (nameI < 0) return [];
	return lines.slice(1).flatMap((line) => {
		const cells = splitCsv(line);
		const name = cells[nameI]?.trim();
		if (!name) return [];
		return [{
			name,
			place: cells[index("place")]?.trim() || "Nottinghamshire",
			sector: cells[index("sector")]?.trim() || "Unspecified",
			ask: cells[index("ask")]?.trim() || "Ask which cost you can actually move.",
			route: cells[index("route")]?.trim() || "Published company address. No purchased list."
		}];
	});
}
function splitCsv(line) {
	const out = [];
	let current = "";
	let quoted = false;
	for (let i = 0; i < line.length; i += 1) {
		const char = line[i];
		if (quoted) {
			if (char === "\"") {
				if (line[i + 1] === "\"") {
					current += "\"";
					i += 1;
				} else quoted = false;
			} else current += char;
		} else if (char === "\"") quoted = true;
		else if (char === ",") {
			out.push(current);
			current = "";
		} else current += char;
	}
	out.push(current);
	return out;
}
function csvCell(value) {
	if (/[",\n]/.test(value)) return `"${value.replaceAll("\"", "\"\"")}"`;
	return value;
}
//#endregion
export { Outreach as component };
