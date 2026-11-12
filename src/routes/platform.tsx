import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Pill, Rule } from "@/components/bits";
import { gbpShort } from "@/lib/format";
import {
  type Assumptions,
  type Billing,
  type FieldKey,
  type PolicyId,
  type Viewpoint,
  costLines,
  defaultAssumptions,
  defaultEnabled,
  narrative,
  policies,
  totals,
  viewpointLabel,
} from "@/data/model";

export const Route = createFileRoute("/platform")({
  head: () => ({ meta: [{ title: "Costed platform · Notts Ledger" }] }),
  component: Platform,
});

function Platform() {
  const [view, setView] = useState<Viewpoint>("county");
  const [assumptions, setAssumptions] = useState<Assumptions>(defaultAssumptions);
  const [enabled, setEnabled] = useState<PolicyId[]>(defaultEnabled);
  const [copied, setCopied] = useState(false);

  const lines = useMemo(() => costLines(enabled, assumptions, view), [enabled, assumptions, view]);
  const sum = useMemo(() => totals(lines), [lines]);
  const prose = useMemo(() => narrative(lines, view), [lines, view]);

  function toggle(id: PolicyId) {
    setEnabled((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]));
  }

  function setField(key: FieldKey, value: number) {
    setAssumptions((current) => ({ ...current, [key]: value }));
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
      "General schemes only. No relief, levy cut, contract or consent in return for support.",
    ].join("\n");
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 md:px-8 md:py-12">
      <p className="text-xs font-medium tracking-widest text-teal-ink uppercase">Enterprise platform</p>
      <h1 className="mt-3 max-w-3xl font-serif text-4xl text-ink md:text-5xl">Cost it as the council you are actually speaking for.</h1>
      <p className="mt-4 max-w-2xl leading-relaxed text-muted">
        Switches start from the county side, because that is the authority people muddle with the buses. Turn a policy
        on and the total splits into your budget and someone else’s. National multipliers for 2026/27 are facts.
        Property counts, space counts and pots are knobs until you attach the rating list.
      </p>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <fieldset>
          <legend className="text-sm font-medium text-ink">Cost this as</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            <Choice current={view} value="county" set={setView} label="County" />
            <Choice current={view} value="city" set={setView} label="City" />
            <Choice current={view} value="district" set={setView} label="A district" />
          </div>
        </fieldset>
        <fieldset>
          <legend className="text-sm font-medium text-ink">Hereditaments sit in</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            <Bill current={assumptions.billing} value="city" set={(billing) => setAssumptions((a) => ({ ...a, billing }))} label="The city" />
            <Bill current={assumptions.billing} value="district" set={(billing) => setAssumptions((a) => ({ ...a, billing }))} label="A district" />
          </div>
        </fieldset>
      </div>

      <div className="mt-6 grid gap-3 rounded-lg border border-line bg-card p-4 sm:grid-cols-2 lg:grid-cols-5">
        <Total label="Your annual" value={gbpShort(sum.yourAnnual)} />
        <Total label="Your one-off" value={gbpShort(sum.yourOneOff)} />
        <Total label="Partner annual" value={gbpShort(sum.partnerAnnual)} />
        <Total label="Partner one-off" value={gbpShort(sum.partnerOneOff)} />
        <Total label="Firms feel" value={gbpShort(sum.business)} />
      </div>
      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink">{prose}</p>
      <button
        type="button"
        onClick={() => void copyBrief()}
        className="no-print mt-3 h-11 rounded-md bg-ink px-4 text-sm font-medium text-paper"
      >
        {copied ? "Copied" : "Copy this platform"}
      </button>

      <div className="mt-8">
        <Rule>
          The workplace parking levy has raised over £90 million since 2012 and is ringfenced to transport. It is not
          a piggy bank for rate relief. Small business rate relief is already 100% at a rateable value of £12,000 or
          less, tapering to £15,000. Do not announce that as if it were your new idea.
        </Rule>
      </div>

      <div className="mt-8 space-y-4">
        {policies.map((policy) => {
          const on = enabled.includes(policy.id);
          const line = lines.find((item) => item.id === policy.id);
          return (
            <article key={policy.id} className="rounded-lg border border-line bg-card p-4">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <h2 className="font-serif text-2xl text-ink">{policy.title}</h2>
                  <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">{policy.summary}</p>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={on}
                  onClick={() => toggle(policy.id)}
                  className={`h-11 shrink-0 rounded-md px-4 text-sm font-medium ${on ? "bg-teal text-on-teal" : "bg-paper-2 text-ink"}`}
                >
                  {on ? "In the platform" : "Left out"}
                </button>
              </div>
              <p className="mt-3 text-sm text-ink">
                <span className="font-medium">Who can do it. </span>
                {policy.authorities}
              </p>
              <p className="mt-1 text-sm text-muted">{policy.legal}</p>
              {policy.fields.length > 0 && (
                <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {policy.fields.map((field) => (
                    <label key={field.key} className="block text-sm">
                      <span className="text-muted">{field.label}</span>
                      <input
                        className="mt-1 h-11 w-full px-3 tabular-nums"
                        type="number"
                        step={field.step ?? 1}
                        value={assumptions[field.key]}
                        onChange={(event) => {
                          const next = event.target.valueAsNumber;
                          setField(field.key, Number.isFinite(next) ? next : 0);
                        }}
                      />
                      {field.help ? <span className="mt-1 block text-xs leading-relaxed text-muted">{field.help}</span> : null}
                    </label>
                  ))}
                </div>
              )}
              {line && (
                <div className="mt-4 flex flex-wrap gap-2">
                  <Pill tone="fact">You {gbpShort(line.yourAnnual)} / year</Pill>
                  <Pill tone="law">You {gbpShort(line.yourOneOff)} once</Pill>
                  <Pill tone="scenario">Partner {gbpShort(line.partnerAnnual + line.partnerOneOff)}</Pill>
                  <Pill tone="scenario">{line.businessLabel}: {gbpShort(line.business)}</Pill>
                </div>
              )}
              {line && <p className="mt-2 text-xs leading-relaxed text-muted">{line.footnote}</p>}
            </article>
          );
        })}
      </div>
    </main>
  );
}

function Choice({
  current,
  value,
  set,
  label,
}: {
  current: Viewpoint;
  value: Viewpoint;
  set: (value: Viewpoint) => void;
  label: string;
}) {
  const on = current === value;
  return (
    <button
      type="button"
      onClick={() => set(value)}
      className={`h-11 rounded-md px-4 text-sm font-medium ${on ? "bg-ink text-paper" : "bg-paper-2 text-ink"}`}
    >
      {label}
    </button>
  );
}

function Bill({
  current,
  value,
  set,
  label,
}: {
  current: Billing;
  value: Billing;
  set: (value: Billing) => void;
  label: string;
}) {
  const on = current === value;
  return (
    <button
      type="button"
      onClick={() => set(value)}
      className={`h-11 rounded-md px-4 text-sm font-medium ${on ? "bg-teal text-on-teal" : "bg-paper-2 text-ink"}`}
    >
      {label}
    </button>
  );
}

function Total({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs tracking-wide text-muted uppercase">{label}</p>
      <p className="font-serif text-2xl text-ink tabular-nums">{value}</p>
    </div>
  );
}
