import { J as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/bits-DoUbgXCT.js
var import_jsx_runtime = require_jsx_runtime();
function Pill({ tone, children }) {
	const toneClass = {
		fact: "bg-teal text-on-teal",
		scenario: "bg-paper-2 text-ink",
		law: "bg-ink text-paper",
		stop: "bg-rust text-on-teal"
	}[tone];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium tracking-wide ${toneClass}`,
		children
	});
}
function Rule({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
		className: "rounded-lg border border-rust bg-rust-soft px-4 py-3 text-sm leading-relaxed text-ink",
		children
	});
}
function Stat({ label, value, note }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border-t border-line pt-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-wide text-muted uppercase",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 font-serif text-3xl leading-none text-ink tabular-nums",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-relaxed text-muted",
				children: note
			})
		]
	});
}
//#endregion
export { Rule as n, Stat as r, Pill as t };
