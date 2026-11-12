export function gbp(n: number, digits = 0) {
  return n.toLocaleString("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  });
}

export function gbpShort(n: number) {
  const sign = n < 0 ? "−" : "";
  const v = Math.abs(n);
  if (v >= 1_000_000) {
    const m = v / 1_000_000;
    const digits = m >= 20 ? 1 : 2;
    return `${sign}£${m.toFixed(digits)}m`;
  }
  if (v >= 10_000) return `${sign}£${Math.round(v / 1000).toLocaleString("en-GB")}k`;
  return gbp(Math.round(n));
}

export function num(n: number, digits = 0) {
  return n.toLocaleString("en-GB", {
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  });
}
