export const widths = [`mobile`, `desktop`] as const;

export type Width = (typeof widths)[number];
