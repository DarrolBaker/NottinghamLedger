import { i as __toESM } from "../_runtime.mjs";
import { J as require_jsx_runtime, q as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Rule, t as Pill } from "./bits-DoUbgXCT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/platform-CdqOEcTk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function gbp(n, digits = 0) {
	return n.toLocaleString("en-GB", {
		style: "currency",
		currency: "GBP",
		maximumFractionDigits: digits,
		minimumFractionDigits: digits
	});
}
function gbpShort(n) {
	const sign = n < 0 ? "−" : "";
	const v = Math.abs(n);
	if (v >= 1e6) {
		const m = v / 1e6;
		const digits = m >= 20 ? 1 : 2;
		return `${sign}£${m.toFixed(digits)}m`;
	}
	if (v >= 1e4) return `${sign}£${Math.round(v / 1e3).toLocaleString("en-GB")}k`;
	return gbp(Math.round(n));
}
var defaultAssumptions = {
	billing: "city",
	hereditaments: 600,
	avgRv: 24e3,
	reliefPct: 15,
	multiplierPence: 38.2,
	holidayTakeup: 120,
	holidayRv: 18e3,
	holidayMonths: 6,
	holidayPence: 38.2,
	wplSpaces: 0,
	wplCharge: 592,
	wplRpi: 3.8,
	wplRebate: 50,
	matchPot: 15e5,
	paySpend: 2e7,
	payFrom: 30,
	payTo: 14,
	smeRate: 9,
	councilRate: 5,
	parkingForgone: 18e4,
	planningCost: 12e4,
	lotsCost: 8e4,
	landCost: 9e4,
	brokerCost: 55e3,
	covenantCost: 25e4,
	tramCost: 6e5
};
var defaultEnabled = [
	"prompt",
	"lots",
	"levy",
	"land"
];
var policies = [
	{
		id: "covenant",
		title: "NCT shareholder covenant",
		summary: "Keep the municipal bus company. Publish a five-year rule: target margin, when a dividend may be taken, and the fleet plan. Oppose an EMCCA franchise that would put a working operator out to tender.",
		authorities: "City Council is the shareholder. County and districts can only take a position through EMCCA.",
		legal: "This is a shareholder instruction and a mayoral-transport argument. It is not a power to rewrite other operators’ routes.",
		fields: [{
			key: "covenantCost",
			label: "Options note, legal and fleet advice",
			help: "Scenario. A scrutiny paper plus external advice, not a new subsidy."
		}]
	},
	{
		id: "tram",
		title: "2034 tram options study",
		summary: "The Tramlink concession ends in 2034 and the asset is expected to pass toward EMCCA. Commission one shared study: extend, re-tender, or a public operator. Do not promise to cancel the PFI.",
		authorities: "City is the PFI counterparty. EMCCA inherits the strategic decision. County influences EMCCA.",
		legal: "Early termination compensation is not published in this desk and would dwarf the study. Leave it unknown rather than invent a buy-out price.",
		fields: [{
			key: "tramCost",
			label: "Study budget, two years",
			help: "Scenario. Technical, legal and financial advice. One study, not three."
		}]
	},
	{
		id: "rates",
		title: "Independent high-street top-up",
		summary: "On top of national small-business relief, a billing authority can grant extra discretionary relief to occupied independents in named local centres. From April 2026 the small retail, hospitality and leisure multiplier is 38.2p.",
		authorities: "Only the billing authority. That is the city inside its boundary, and each district outside it. The county cannot grant this on its own.",
		legal: "Discretionary relief is a general scheme, published and open to anyone who qualifies. It is not a private discount for a supporter. Local retention is simplified here at 49% unitary / 40% district / 9% county, before tariffs, pools and section 31 grants.",
		fields: [
			{
				key: "hereditaments",
				label: "Properties in the scheme",
				help: "Scenario. Pull the real count from the local rating list."
			},
			{
				key: "avgRv",
				label: "Average rateable value",
				suffix: "£"
			},
			{
				key: "reliefPct",
				label: "Extra relief",
				suffix: "%",
				step: 1
			},
			{
				key: "multiplierPence",
				label: "Multiplier",
				suffix: "p",
				step: .1,
				help: "Fact for 2026/27: small RHL 38.2p, standard RHL 43.0p, small 43.2p, standard 48.0p, high-value 50.8p."
			}
		]
	},
	{
		id: "holiday",
		title: "Reoccupation holiday",
		summary: "Six months of relief when an independent takes a unit that has been empty for a year or more. Aimed at landlords sitting on voids, and at the first year of a new shop.",
		authorities: "Billing authority only. Same split as other discretionary relief.",
		legal: "Stack this on top of the statutory empty-property exemption (3 months, or 6 for industrial), and check subsidy-control limits before you write the scheme.",
		fields: [
			{
				key: "holidayTakeup",
				label: "Expected take-up",
				help: "Scenario."
			},
			{
				key: "holidayRv",
				label: "Average RV",
				suffix: "£"
			},
			{
				key: "holidayMonths",
				label: "Holiday",
				suffix: "months",
				step: 1
			},
			{
				key: "holidayPence",
				label: "Multiplier",
				suffix: "p",
				step: .1
			}
		]
	},
	{
		id: "wpl-freeze",
		title: "Freeze the workplace parking levy",
		summary: "The city levy is £592 per liable space in 2026/27, uprated by RPI (3.8% on the latest setting). A cash freeze does not cut the bill. It refuses the next inflation rise. Employers with 10 or fewer spaces already pay nothing.",
		authorities: "City only. The money is ringfenced by the scheme order to local transport. It cannot be diverted into rate relief.",
		legal: "A freeze reduces future tram, bus and cycle funding. Say that in the same sentence as the freeze. A selective discount for donors would be unlawful. Any change has to be a published rule.",
		fields: [
			{
				key: "wplSpaces",
				label: "Liable spaces",
				help: "Not published on this desk. Cumulative yield since 2012 is over £90m. Enter this year’s space count before you quote a cost. Zero means ‘not costed’."
			},
			{
				key: "wplCharge",
				label: "Charge per space",
				suffix: "£",
				help: "Fact. 2026/27 licence charge."
			},
			{
				key: "wplRpi",
				label: "RPI used for the levy",
				suffix: "%",
				step: .1,
				help: "Fact for the 2026/27 uprating: 3.8%."
			}
		]
	},
	{
		id: "wpl-rebate",
		title: "Flat rebate per liable space",
		summary: "A rules-based cut, the same pounds per space for every liable employer. More expensive than a freeze, and more honest than a ‘business-friendly’ slogan.",
		authorities: "City only. Still ringfenced income. A rebate is a cut to the transport budget unless you replace it.",
		legal: "Do not rebate one firm. Subsidy control and the scheme order both point at general rules.",
		fields: [{
			key: "wplRebate",
			label: "Rebate per space",
			suffix: "£",
			help: "Scenario. Uses the same space count as the freeze."
		}]
	},
	{
		id: "match",
		title: "Shopfront and kit match fund",
		summary: "A one-year public pot. The firm matches it. Cap the grant so the money reaches independents rather than one fit-out.",
		authorities: "Whoever holds an economic-development budget: city, county or district. Not the workplace parking levy.",
		legal: "Publish the criteria before anyone applies. A fund that quietly prefers supporters will not survive a subsidy-control or reputational look.",
		fields: [{
			key: "matchPot",
			label: "Public pot",
			help: "Scenario. At a £7,500 cap this pot reaches 200 firms if every grant is at the cap."
		}]
	},
	{
		id: "prompt",
		title: "Pay local suppliers in 14 days",
		summary: "Move invoices under a stated annual threshold from 30 days to 14. The council’s cost is the lost float. The firm’s gain is the overdraft it does not draw.",
		authorities: "City, county, every district, and the companies they control — NCT and Via included, as a contract term.",
		legal: "A published target, audited quarterly. Not a handshake for friends of the administration.",
		fields: [
			{
				key: "paySpend",
				label: "Your spend with smaller suppliers",
				help: "Scenario. Replace with the ledger figure for suppliers under your threshold."
			},
			{
				key: "payFrom",
				label: "Current days",
				step: 1
			},
			{
				key: "payTo",
				label: "Target days",
				step: 1
			},
			{
				key: "smeRate",
				label: "SME overdraft",
				suffix: "%",
				step: .5,
				help: "Scenario rate, what the firm might pay."
			},
			{
				key: "councilRate",
				label: "Council cost of funds",
				suffix: "%",
				step: .5
			}
		]
	},
	{
		id: "levy",
		title: "Apprenticeship levy brokerage",
		summary: "Large levy-payers, NCT and Via among them, can transfer a portion of unused levy to small firms. The council’s cost is a broker, not the training.",
		authorities: "Employers transfer voluntarily. City, county or a district can host the desk.",
		legal: "The transfer cap has moved before. Quote the current Education and Skills Funding Agency rule, not a number from a campaign leaflet.",
		fields: [{
			key: "brokerCost",
			label: "Annual brokerage",
			help: "Scenario. One post and a room."
		}]
	},
	{
		id: "planning",
		title: "Eight-week minor commercial pledge",
		summary: "Publish a determination target for minor commercial applications and staff it. Delay, not the fee, is what small builders and shopfitters complain about.",
		authorities: "Local planning authorities: the city and the districts. The county deals with minerals, waste and its own development.",
		legal: "A pledge is not a permission. Do not offer a quicker consent in exchange for help.",
		fields: [{
			key: "planningCost",
			label: "Two extra officers, loaded",
			help: "Scenario."
		}]
	},
	{
		id: "lots",
		title: "SME-sized contract lots",
		summary: "Break highways, facilities and fit-out work into lots a local firm can bid. The county already says about 70% of contracts go to Nottinghamshire suppliers and 56% to SMEs. The policy is to hold that and publish it, not to start from zero.",
		authorities: "Whoever procures. County through Via, city through its own contracts, districts likewise.",
		legal: "The Procurement Act 2023 still applies. Lotting is the lawful lever. Promising a contract to a supporter is not.",
		fields: [{
			key: "lotsCost",
			label: "Extra procurement capacity",
			help: "Scenario."
		}]
	},
	{
		id: "land",
		title: "£200m land desk, 30-day reply",
		summary: "Arc and the county have already prepared the sites. Publish the pipeline with one county phone number and answer investor and developer enquiries in 30 days. The land stays the council’s until a normal disposal.",
		authorities: "County, through Arc. City and districts have their own land. They do not run this book.",
		legal: "A faster reply is not a reserved site. Subsidy control and the disposal rules still apply. No plot moves because someone helped a candidate.",
		fields: [{
			key: "landCost",
			label: "Annual cost of the desk",
			help: "Scenario. One post and a published page. Not a grant, and not a slice of the £200m."
		}]
	},
	{
		id: "parking",
		title: "Short-stay town-centre tariff",
		summary: "First-hour pricing that turns over bays for shops, instead of all-day commuter rates. Only where the council owns the car park.",
		authorities: "City off-street car parks, and district car parks. Not a county lever. Not a substitute for the workplace levy.",
		legal: "Income forgone is real. Model one town before you announce seven.",
		fields: [{
			key: "parkingForgone",
			label: "Annual income forgone, one town",
			help: "Illustrative until the parking account is opened."
		}]
	}
];
function clamp(n, min, max) {
	if (!Number.isFinite(n)) return min;
	return Math.min(max, Math.max(min, n));
}
function ratesPockets(gross, billing) {
	if (billing === "city") return {
		city: gross * .49,
		county: 0,
		district: 0
	};
	return {
		city: 0,
		county: gross * .09,
		district: gross * .4
	};
}
function assign(view, pockets, oneOff) {
	const yours = pockets[view];
	const partner = pockets.city + pockets.county + pockets.district - yours;
	if (oneOff) return {
		yourAnnual: 0,
		yourOneOff: yours,
		partnerAnnual: 0,
		partnerOneOff: partner
	};
	return {
		yourAnnual: yours,
		yourOneOff: 0,
		partnerAnnual: partner,
		partnerOneOff: 0
	};
}
function costLines(enabled, a, view) {
	const on = new Set(enabled);
	const lines = [];
	const push = (line) => {
		if (on.has(line.id)) lines.push(line);
	};
	const reliefGross = clamp(a.hereditaments, 0, 1e5) * clamp(a.avgRv, 0, 5e6) * (clamp(a.multiplierPence, 0, 200) / 100) * (clamp(a.reliefPct, 0, 100) / 100);
	push({
		id: "rates",
		title: "High-street top-up",
		...assign(view, ratesPockets(reliefGross, a.billing), false),
		business: reliefGross,
		businessLabel: "Bill cut felt by the firms, per year",
		footnote: a.billing === "city" ? "Simplified: city keeps 49% of foregone rates, government most of the rest, fire 1%. Before tariffs and grants." : "Simplified two-tier share: district 40%, county 9%, fire 1%, government 50%. The county only feels the 9%."
	});
	const holidayGross = clamp(a.holidayTakeup, 0, 1e5) * clamp(a.holidayRv, 0, 5e6) * (clamp(a.holidayPence, 0, 200) / 100) * (clamp(a.holidayMonths, 0, 12) / 12);
	push({
		id: "holiday",
		title: "Reoccupation holiday",
		...assign(view, ratesPockets(holidayGross, a.billing), false),
		business: holidayGross,
		businessLabel: "Rates not paid in the holiday year",
		footnote: "Same retention split as the top-up. Take-up is a scenario."
	});
	const spaces = clamp(a.wplSpaces, 0, 2e5);
	const freeze = spaces * clamp(a.wplCharge, 0, 5e3) * (clamp(a.wplRpi, 0, 30) / 100);
	push({
		id: "wpl-freeze",
		title: "Levy freeze, next uprating",
		...assign(view, {
			city: freeze,
			county: 0,
			district: 0
		}, false),
		business: freeze,
		businessLabel: spaces > 0 ? "Rise avoided next year, not a cut to today’s bill" : "Not costed — enter a space count",
		footnote: spaces > 0 ? "Ringfenced transport income. A freeze is a cut to future bus, tram and cycle funding unless replaced." : "Cumulative levy raised since 2012 is over £90 million. This year’s spaces are not invented here."
	});
	const rebate = spaces * clamp(a.wplRebate, 0, 592);
	push({
		id: "wpl-rebate",
		title: "Flat levy rebate",
		...assign(view, {
			city: rebate,
			county: 0,
			district: 0
		}, false),
		business: rebate,
		businessLabel: spaces > 0 ? "Cash cut, every liable employer the same" : "Not costed — enter a space count",
		footnote: "Same ringfence. Replace the income or the transport budget shrinks."
	});
	const pot = clamp(a.matchPot, 0, 5e7);
	push({
		id: "match",
		title: "Match fund",
		...assign(view, {
			city: view === "city" ? pot : 0,
			county: view === "county" ? pot : 0,
			district: view === "district" ? pot : 0
		}, true),
		business: pot,
		businessLabel: "Grants paid out, if firms match them",
		footnote: `At £7,500 a grant, ${Math.floor(pot / 7500).toLocaleString("en-GB")} firms if every award hits the cap. Do not fund this from the levy.`
	});
	const gap = Math.max(0, clamp(a.payFrom, 0, 120) - clamp(a.payTo, 0, 120));
	const spend = clamp(a.paySpend, 0, 2e9);
	const floatCost = spend * (gap / 365) * (clamp(a.councilRate, 0, 40) / 100);
	const floatBenefit = spend * (gap / 365) * (clamp(a.smeRate, 0, 40) / 100);
	push({
		id: "prompt",
		title: "14-day payment",
		...assign(view, {
			city: view === "city" ? floatCost : 0,
			county: view === "county" ? floatCost : 0,
			district: view === "district" ? floatCost : 0
		}, false),
		business: floatBenefit,
		businessLabel: "Overdraft interest the firms might avoid",
		footnote: "Your cost uses the council’s cost of funds. Their gain uses a higher SME rate. Both are scenarios until the ledger is attached."
	});
	const broker = clamp(a.brokerCost, 0, 5e6);
	push({
		id: "levy",
		title: "Levy brokerage",
		...assign(view, {
			city: view === "city" ? broker : 0,
			county: view === "county" ? broker : 0,
			district: view === "district" ? broker : 0
		}, false),
		business: 0,
		businessLabel: "Training value sits with employers, not this budget",
		footnote: "Forty apprentices at a notional £8,000 of training would be £320,000 unlocked. That is not council cash."
	});
	const planning = clamp(a.planningCost, 0, 5e6);
	push({
		id: "planning",
		title: "Planning capacity",
		...assign(view, view === "county" ? {
			city: planning,
			county: 0,
			district: 0
		} : {
			city: view === "city" ? planning : 0,
			county: 0,
			district: view === "district" ? planning : 0
		}, false),
		business: 0,
		businessLabel: "Time, not a grant",
		footnote: view === "county" ? "Shown as a partner cost. The county is not the shopfront planning authority." : "Staff cost only. It does not buy consents."
	});
	const lots = clamp(a.lotsCost, 0, 5e6);
	push({
		id: "lots",
		title: "SME lots",
		...assign(view, {
			city: view === "city" ? lots : 0,
			county: view === "county" ? lots : 0,
			district: view === "district" ? lots : 0
		}, false),
		business: 0,
		businessLabel: "Access to bid, not a reserved contract",
		footnote: "Procurement Act still applies. The 70% local and 56% SME figures are the baseline to defend, from the county’s own note."
	});
	push({
		id: "land",
		title: "Land desk",
		...assign(view, {
			city: 0,
			county: clamp(a.landCost, 0, 5e6),
			district: 0
		}, false),
		business: 0,
		businessLabel: "A reply in 30 days. The £200m is the asset, not a grant pot.",
		footnote: view === "county" ? "Your cost is the desk. The sites are already in the Arc programme." : "Partner cost. This book is the county’s, run with Arc."
	});
	const parking = clamp(a.parkingForgone, 0, 5e7);
	push({
		id: "parking",
		title: "Short-stay tariff",
		...assign(view, view === "county" ? {
			city: parking,
			county: 0,
			district: 0
		} : {
			city: view === "city" ? parking : 0,
			county: 0,
			district: view === "district" ? parking : 0
		}, false),
		business: parking,
		businessLabel: "Tariff income moved from the council to drivers’ pockets — shops feel the turnover, not this cash",
		footnote: view === "county" ? "Partner cost. County Hall does not set city or district car-park prices." : "Illustrative for one town. Open the parking account before a manifesto line."
	});
	push({
		id: "covenant",
		title: "NCT covenant",
		...assign(view, {
			city: clamp(a.covenantCost, 0, 2e7),
			county: 0,
			district: 0
		}, true),
		business: 0,
		businessLabel: "A functioning bus network. No cheque.",
		footnote: "City shareholder cost. Others lobby through EMCCA. Franchising was described by NCT’s managing director as an existential threat."
	});
	push({
		id: "tram",
		title: "Tram study",
		...assign(view, {
			city: clamp(a.tramCost, 0, 2e7),
			county: 0,
			district: 0
		}, true),
		business: 0,
		businessLabel: "Certainty about 2034. No fare cut is priced here.",
		footnote: "Price the study. Do not price a PFI break you have not seen."
	});
	return lines;
}
function totals(lines) {
	return lines.reduce((acc, line) => ({
		yourAnnual: acc.yourAnnual + line.yourAnnual,
		yourOneOff: acc.yourOneOff + line.yourOneOff,
		partnerAnnual: acc.partnerAnnual + line.partnerAnnual,
		partnerOneOff: acc.partnerOneOff + line.partnerOneOff,
		business: acc.business + line.business
	}), {
		yourAnnual: 0,
		yourOneOff: 0,
		partnerAnnual: 0,
		partnerOneOff: 0,
		business: 0
	});
}
function viewpointLabel(view) {
	if (view === "city") return "Nottingham City Council";
	if (view === "county") return "Nottinghamshire County Council";
	return "a district or borough council";
}
function narrative(lines, view) {
	const t = totals(lines);
	const who = viewpointLabel(view);
	const annual = gbpWords(t.yourAnnual);
	const once = gbpWords(t.yourOneOff);
	const felt = gbpWords(t.business);
	if (!lines.length) return `Nothing is switched on. ${who} is not yet committed to a line in this platform.`;
	return `Costed as ${who}. Direct annual cost is ${annual}. One-off this side of the next budget is ${once}. Firms feel about ${felt} a year in lower bills, avoided interest or grant, where a cash figure exists — several policies buy time or a bus network rather than a cheque.${t.partnerAnnual + t.partnerOneOff > 0 ? ` Another ${gbpWords(t.partnerAnnual)} a year and ${gbpWords(t.partnerOneOff)} one-off sits with a council you do not control. Ask for it. Do not budget it.` : ""} Reliefs and levies here are general schemes. They are not a reward for a donation.`;
}
function gbpWords(n) {
	if (Math.abs(n) < 1) return "nothing";
	if (n >= 1e6) return `£${(n / 1e6).toFixed(2)} million`;
	if (n >= 1e4) return `£${Math.round(n / 1e3).toLocaleString("en-GB")} thousand`;
	return `£${Math.round(n).toLocaleString("en-GB")}`;
}
function Platform() {
	const [view, setView] = (0, import_react.useState)("county");
	const [assumptions, setAssumptions] = (0, import_react.useState)(defaultAssumptions);
	const [enabled, setEnabled] = (0, import_react.useState)(defaultEnabled);
	const [copied, setCopied] = (0, import_react.useState)(false);
	const lines = (0, import_react.useMemo)(() => costLines(enabled, assumptions, view), [
		enabled,
		assumptions,
		view
	]);
	const sum = (0, import_react.useMemo)(() => totals(lines), [lines]);
	const prose = (0, import_react.useMemo)(() => narrative(lines, view), [lines, view]);
	function toggle(id) {
		setEnabled((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
	}
	function setField(key, value) {
		setAssumptions((current) => ({
			...current,
			[key]: value
		}));
	}
	async function copyBrief() {
		const on = policies.filter((policy) => enabled.includes(policy.id));
		const text = [
			`Notts Ledger — platform costed as ${viewpointLabel(view)}`,
			prose,
			"",
			`Direct annual: ${gbpShort(sum.yourAnnual)}`,
			`Direct one-off: ${gbpShort(sum.yourOneOff)}`,
			`Partner annual: ${gbpShort(sum.partnerAnnual)}`,
			`Partner one-off: ${gbpShort(sum.partnerOneOff)}`,
			`Cash felt by firms, where priced: ${gbpShort(sum.business)}`,
			"",
			...on.map((policy) => `• ${policy.title}. ${policy.summary}`),
			"",
			"General schemes only. No relief, levy cut, contract or consent in return for support."
		].join("\n");
		try {
			await navigator.clipboard.writeText(text);
			setCopied(true);
			window.setTimeout(() => setCopied(false), 1600);
		} catch {
			setCopied(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-8 md:px-8 md:py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-widest text-teal-ink uppercase",
				children: "Enterprise platform"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 max-w-3xl font-serif text-4xl text-ink md:text-5xl",
				children: "Cost it as the council you are actually speaking for."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl leading-relaxed text-muted",
				children: "Switches start from the county side, because that is the authority people muddle with the buses. Turn a policy on and the total splits into your budget and someone else’s. National multipliers for 2026/27 are facts. Property counts, space counts and pots are knobs until you attach the rating list."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
					className: "text-sm font-medium text-ink",
					children: "Cost this as"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 flex flex-wrap gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
							current: view,
							value: "county",
							set: setView,
							label: "County"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
							current: view,
							value: "city",
							set: setView,
							label: "City"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
							current: view,
							value: "district",
							set: setView,
							label: "A district"
						})
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
					className: "text-sm font-medium text-ink",
					children: "Hereditaments sit in"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bill, {
						current: assumptions.billing,
						value: "city",
						set: (billing) => setAssumptions((a) => ({
							...a,
							billing
						})),
						label: "The city"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bill, {
						current: assumptions.billing,
						value: "district",
						set: (billing) => setAssumptions((a) => ({
							...a,
							billing
						})),
						label: "A district"
					})]
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-3 rounded-lg border border-line bg-card p-4 sm:grid-cols-2 lg:grid-cols-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Total, {
						label: "Your annual",
						value: gbpShort(sum.yourAnnual)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Total, {
						label: "Your one-off",
						value: gbpShort(sum.yourOneOff)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Total, {
						label: "Partner annual",
						value: gbpShort(sum.partnerAnnual)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Total, {
						label: "Partner one-off",
						value: gbpShort(sum.partnerOneOff)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Total, {
						label: "Firms feel",
						value: gbpShort(sum.business)
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-3xl text-sm leading-relaxed text-ink",
				children: prose
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => void copyBrief(),
				className: "no-print mt-3 h-11 rounded-md bg-ink px-4 text-sm font-medium text-paper",
				children: copied ? "Copied" : "Copy this platform"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rule, { children: "The workplace parking levy has raised over £90 million since 2012 and is ringfenced to transport. It is not a piggy bank for rate relief. Small business rate relief is already 100% at a rateable value of £12,000 or less, tapering to £15,000. Do not announce that as if it were your new idea." })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 space-y-4",
				children: policies.map((policy) => {
					const on = enabled.includes(policy.id);
					const line = lines.find((item) => item.id === policy.id);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-lg border border-line bg-card p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-start justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "font-serif text-2xl text-ink",
										children: policy.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 max-w-3xl text-sm leading-relaxed text-muted",
										children: policy.summary
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									role: "switch",
									"aria-checked": on,
									onClick: () => toggle(policy.id),
									className: `h-11 shrink-0 rounded-md px-4 text-sm font-medium ${on ? "bg-teal text-on-teal" : "bg-paper-2 text-ink"}`,
									children: on ? "In the platform" : "Left out"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 text-sm text-ink",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium",
									children: "Who can do it. "
								}), policy.authorities]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted",
								children: policy.legal
							}),
							policy.fields.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
								children: policy.fields.map((field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block text-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted",
											children: field.label
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											className: "mt-1 h-11 w-full px-3 tabular-nums",
											type: "number",
											step: field.step ?? 1,
											value: assumptions[field.key],
											onChange: (event) => {
												const next = event.target.valueAsNumber;
												setField(field.key, Number.isFinite(next) ? next : 0);
											}
										}),
										field.help ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-1 block text-xs leading-relaxed text-muted",
											children: field.help
										}) : null
									]
								}, field.key))
							}),
							line && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex flex-wrap gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Pill, {
										tone: "fact",
										children: [
											"You ",
											gbpShort(line.yourAnnual),
											" / year"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Pill, {
										tone: "law",
										children: [
											"You ",
											gbpShort(line.yourOneOff),
											" once"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Pill, {
										tone: "scenario",
										children: ["Partner ", gbpShort(line.partnerAnnual + line.partnerOneOff)]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Pill, {
										tone: "scenario",
										children: [
											line.businessLabel,
											": ",
											gbpShort(line.business)
										]
									})
								]
							}),
							line && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs leading-relaxed text-muted",
								children: line.footnote
							})
						]
					}, policy.id);
				})
			})
		]
	});
}
function Choice({ current, value, set, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: () => set(value),
		className: `h-11 rounded-md px-4 text-sm font-medium ${current === value ? "bg-ink text-paper" : "bg-paper-2 text-ink"}`,
		children: label
	});
}
function Bill({ current, value, set, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: () => set(value),
		className: `h-11 rounded-md px-4 text-sm font-medium ${current === value ? "bg-teal text-on-teal" : "bg-paper-2 text-ink"}`,
		children: label
	});
}
function Total({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-xs tracking-wide text-muted uppercase",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "font-serif text-2xl text-ink tabular-nums",
		children: value
	})] });
}
//#endregion
export { Platform as component };
