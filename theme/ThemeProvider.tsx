import React, { createContext, ReactNode, useContext, useState } from "react";
import { LightColors, DarkColors } from "./Colors";
import { LinearGradient } from "expo-linear-gradient";

type ThemeContextType = {
  isDark: boolean;
  toggleTheme: () => void;
  theme: typeof LightColors; // enforce type safety
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark((prev) => !prev);

  const theme = isDark ? DarkColors : LightColors;

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, theme }}>
      <LinearGradient
        colors={["#241036", "#13031a", "#241036"]}
        locations={[0, 0.45, 1]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ flex: 1 }}
      >
        {children}
      </LinearGradient>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
}
