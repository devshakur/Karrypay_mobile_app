export const typography = {
  fontFamily: {
    regular: "ManropeRegular",
    medium: "ManropeMedium",
    bold: "ManropeBold",
  },
  // recommended base sizes (px) — use these for consistent, accessible typography
  sizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
  },
  // line heights roughly 1.25-1.5 depending on size
  lineHeights: {
    xs: 16,
    sm: 20,
    md: 22,
    lg: 26,
    xl: 28,
    xxl: 32,
  },
} as const;

export type Typography = typeof typography;
