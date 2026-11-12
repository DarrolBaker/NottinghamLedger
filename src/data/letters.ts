export type LetterKind = "intro" | "breakfast" | "consult" | "donation";

export type Profile = {
  candidate: string;
  ward: string;
  email: string;
  organisation: string;
};

export type LetterTarget = {
  name: string;
  place: string;
  ask: string;
};

export const letterKinds: { id: LetterKind; label: string }[] = [
  { id: "intro", label: "First letter — no money" },
  { id: "breakfast", label: "Breakfast invite" },
  { id: "consult", label: "Policy test" },
  { id: "donation", label: "Donation route" },
];

export function writeLetter(kind: LetterKind, profile: Profile, target: LetterTarget) {
  const who = profile.candidate.trim() || "A candidate";
  const ward = profile.ward.trim() || "the ward";
  const email = profile.email.trim() || "the address on this letter";
  const org = profile.organisation.trim() || "an independent campaign";
  const firm = target.name;
  const ask = target.ask;

  const sign = `${who}\n${org}\n${email}`;

  if (kind === "breakfast") {
    return `Subject: Thirty minutes, ${target.place} — ${ask}

Dear directors,

I am asking six firms, not sixty, to pull a policy apart before it is printed.

The policy is: ${ask}

Breakfast, weekday, 45 minutes, your room or a café you choose. I will bring the costed page and the name of the council that would have to deliver it. If that council is not the one I am standing for, I will say so in the first minute.

There is no donation at this meeting. If you pay for the room when the campaign would otherwise have paid, tell me, and I will record it.

Reply to ${email} if it is useful. If it is not, you will not hear from me again.

${sign}`;
  }

  if (kind === "consult") {
    return `Subject: Would this change your bill — ${firm}

Dear directors,

I am costing an enterprise platform for Nottingham and Nottinghamshire, and I would rather be corrected by ${firm} than applauded by people who will not pay the bill.

The line I think touches you: ${ask}

Two questions only.

1. If this were in force next April, what would actually change for you — pounds, days, or nothing?
2. Who else in ${target.place} should have sight of it before a candidate says it in public?

Reply to ${email}. A short no is useful. This is not a request for money.

${sign}`;
  }

  if (kind === "donation") {
    return `Subject: A lawful route, if you ever wanted one — ${ward}

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
  }

  return `Subject: ${ask}

Dear directors,

I am ${who}, standing in ${ward}. I am writing to a short list of firms in ${target.place}. Your name is on it because of what you do, not because anyone has claimed you support a party. You have not been scored as a supporter of anyone.

The offer I want a view on is specific:

${ask}

I am not asking for money. I am asking whether that would be worth thirty minutes, and what would make it useful rather than decorative. If the council I am standing for cannot grant it, I will say which council can.

Reply to ${email}. If you would rather not, no further message will follow.

${sign}`;
}
