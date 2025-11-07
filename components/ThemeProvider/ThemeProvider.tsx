"use client";

import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext<{
  theme: "dark" | "light";
  setTheme: (theme: "dark" | "light") => void;
}>({
  theme: "light",
  setTheme: () => {},
});

export function useThemeContext() {
  return useContext(ThemeContext);
}

// Time-based theme logic
const getTimeBasedTheme = (): "dark" | "light" => {
  const currentHour = new Date().getHours();
  return currentHour > 17 || currentHour < 9 ? "dark" : "light";
};

// Cache timeout in milliseconds (5 minutes)
const CACHE_TIMEOUT = 5 * 60 * 1000;

export default function ThemeProvider({ children }: any) {
  // Initialize theme from localStorage or time-based logic
  const getInitialTheme = (): "dark" | "light" => {
    if (typeof window === "undefined") {
      return getTimeBasedTheme();
    }

    try {
      const savedTheme = localStorage.getItem("theme");
      const savedTimestamp = localStorage.getItem("themeTimestamp");

      if (savedTheme && savedTimestamp) {
        const timestamp = parseInt(savedTimestamp, 10);
        const now = Date.now();

        // Check if cache has expired (5 minutes)
        if (now - timestamp < CACHE_TIMEOUT) {
          return savedTheme as "dark" | "light";
        } else {
          // Cache expired, remove old values
          localStorage.removeItem("theme");
          localStorage.removeItem("themeTimestamp");
        }
      }
    } catch (e) {
      // Ignore localStorage errors
    }

    // Fallback to time-based theme
    return getTimeBasedTheme();
  };

  const [theme, setThemeState] = useState<"dark" | "light">(getInitialTheme);

  // Sync theme with document element class
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const setTheme = (newTheme: "dark" | "light") => {
    setThemeState(newTheme);
    try {
      localStorage.setItem("theme", newTheme);
      localStorage.setItem("themeTimestamp", Date.now().toString());
    } catch (e) {
      // Ignore localStorage errors
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
