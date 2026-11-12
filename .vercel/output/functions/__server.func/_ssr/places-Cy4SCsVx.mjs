import { i as __toESM } from "../_runtime.mjs";
import { J as require_jsx_runtime, q as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as places, r as sectorLabel, t as briefs } from "./places-pXlyubsq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/places-Cy4SCsVx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Places() {
	const [group, setGroup] = (0, import_react.useState)("City ward");
	const [sector, setSector] = (0, import_react.useState)("retail");
	const [query, setQuery] = (0, import_react.useState)("");
	const brief = briefs.find((item) => item.id === sector) ?? briefs[0];
	const shown = (0, import_react.useMemo)(() => places.filter((place) => {
		if (place.group !== group) return false;
		return `${place.name} ${place.character} ${place.mix} ${place.door}`.toLowerCase().includes(query.trim().toLowerCase());
	}), [group, query]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-5xl px-4 py-8 md:px-8 md:py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-widest text-teal-ink uppercase",
				children: "Where the firms actually are"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-serif text-4xl text-ink md:text-5xl",
				children: "A ward is a ballot. It is not an economy."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl leading-relaxed text-muted",
				children: "Twenty city wards, 55 seats, next contested together on 6 May 2027. Seven districts, and 66 county divisions last contested in May 2025, when Reform UK took the county. This page does not invent a Reform business in each. A firm is a realistic sponsor only if it passes the test below."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8 rounded-lg border border-line bg-card p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-2xl text-ink",
						children: "Would they sponsor a Reform UK candidate?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted",
						children: "Four tests, all of them. Fail one and you still take the meeting. You do not put them on a money list."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "mt-4 grid gap-4 text-sm leading-relaxed md:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-ink",
								children: "1. Locally rooted."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block text-muted",
								children: "A person or a UK company trading in the division, not a formation-agent address. Nationals decide donations in another city."
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-ink",
								children: "2. The pain is one you can move."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block text-muted",
								children: "County: 14-day payment, SME lots, the land desk, levy transfer. Rates, the workplace levy and shop planning belong to the city or the district. Say which."
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-ink",
								children: "3. Allowed to give."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block text-muted",
								children: "Not the council, not Via, not Arc, not a charity, college or housing association. Over £500, a permissible donor, recorded."
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-ink",
								children: "4. The policy is specific enough to say yes to."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block text-muted",
								children: "“Pro-business” will not get a cheque. A 14-day rule, a published lotting standard, or a 30-day answer on a named site might get a breakfast. Money, if it comes, comes after, through compliance, with nothing in return."
							})] })
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8 rounded-lg border border-line bg-card p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-2xl text-ink",
						children: "What would get them in the room"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mt-3 block text-sm text-muted",
						children: ["Their business, not their supposed politics", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							className: "mt-1 h-11 w-full px-3",
							value: sector,
							onChange: (event) => setSector(event.target.value),
							children: Object.keys(sectorLabel).map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: id,
								children: sectorLabel[id]
							}, id))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 grid gap-4 md:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
								title: "The pain",
								body: brief.pain
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
								title: "The policy that earns a meeting",
								body: brief.policy
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
								title: "What they might then do",
								body: brief.might
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
								title: "What they will not do",
								body: brief.never
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-col gap-3 sm:flex-row sm:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Filter, {
						on: group === "City ward",
						label: "City wards",
						click: () => setGroup("City ward")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Filter, {
						on: group === "District",
						label: "Districts",
						click: () => setGroup("District")
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "h-11 w-full px-3 sm:max-w-xs",
					placeholder: "Filter by name or trade",
					value: query,
					onChange: (event) => setQuery(event.target.value),
					"aria-label": "Filter places"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid gap-3 md:grid-cols-2",
				children: shown.map((place) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-lg border border-line bg-card p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-serif text-xl text-ink",
								children: place.name
							}), place.seats ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted",
								children: [place.seats, " seats"]
							}) : null]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs font-medium tracking-wide text-teal-ink uppercase",
							children: place.ballot
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-ink",
							children: place.character
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: place.mix
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-ink",
							children: place.door
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-xs text-muted",
							children: [
								"Bills the rates: ",
								place.billing,
								". Workplace levy: ",
								place.wpl ? "yes, if the spaces are inside the city" : "no",
								"."
							]
						})
					]
				}, place.id))
			}),
			shown.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-sm text-muted",
				children: "Nothing matches that filter."
			})
		]
	});
}
function Block({ title, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
		className: "text-sm font-medium text-ink",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-1 text-sm leading-relaxed text-muted",
		children: body
	})] });
}
function Filter({ on, label, click }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: click,
		className: `h-11 rounded-md px-4 text-sm font-medium ${on ? "bg-ink text-paper" : "bg-paper-2 text-ink"}`,
		children: label
	});
}
//#endregion
export { Places as component };
