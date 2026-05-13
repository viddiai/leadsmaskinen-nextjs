export const fmt = (n: number): string =>
  new Intl.NumberFormat("sv-SE", {
    maximumFractionDigits: 1,
    minimumFractionDigits: 0,
  }).format(n);

export const fmtKr = (n: number): string => `${fmt(n)} kr`;
export const fmtPct = (n: number): string => `${fmt(n)} %`;
export const fmtSt = (n: number): string => `${fmt(n)} st`;
