import { DefaultTheme, DarkTheme, Theme } from "@react-navigation/native";
import { typography, Typography } from "./typography";

type AppColors = Theme & {
  typography: Typography;
  // semantic tokens that help meet WCAG contrast requirements
  accessibleText: string; // high-contrast main text
  accessibleTextSecondary: string; // secondary text with AA contrast
  surface: string; // surface/card background
  elevatedSurface: string;
};

// The light/dark palettes intentionally use colors with good contrast against the dark background
export const LightColors: AppColors = {
  ...DefaultTheme,
  typography,
  colors: {
    ...DarkTheme.colors,
    background: "#0F1720",
    text: "#E6EEF8",
    primary: "#7C82E0",
    card: "#111827",
    border: "#374151",
    notification: "#F87171",
  },
  accessibleText: "#FFFFFF",
  accessibleTextSecondary: "#D1D5DB",
  surface: "#0b1116",
  elevatedSurface: "#111827",
};

export const DarkColors: AppColors = {
  ...DarkTheme,
  typography,
  colors: {
    ...DarkTheme.colors,
    background: "#0F1720",
    text: "#E6EEF8",
    primary: "#7C82E0",
    card: "#111827",
    border: "#374151",
    notification: "#F87171",
  },
  accessibleText: "#FFFFFF",
  accessibleTextSecondary: "#D1D5DB",
  surface: "#0b1116",
  elevatedSurface: "#111827",
};
