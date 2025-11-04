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

export default function ThemeProvider({ children }: any) {
  // Initialize with time-based logic (consistent on server and client)
  const getTimeBasedTheme = (): "dark" | "light" => {
    const currentHour = new Date().getHours();
    return currentHour > 17 || currentHour < 9 ? "dark" : "light";
  };

  const [theme, setThemeState] = useState<"dark" | "light">(getTimeBasedTheme);

  // After component mounts (client-side only), check localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark" || savedTheme === "light") {
      setThemeState(savedTheme);
    }
  }, []);

  const setTheme = (newTheme: "dark" | "light") => {
    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
