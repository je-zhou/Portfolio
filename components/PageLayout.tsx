"use client";

import React from "react";
import NavBar from "./NavBar/NavBar";
import { useThemeContext } from "./ThemeProvider/ThemeProvider";
import Connect from "./Connect/Connect";
import Footer from "./Footer/Footer";

export default function PageLayout({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { theme, setTheme } = useThemeContext();

  const darkMode = theme === "dark";

  const toggleDarkMode = () => {
    setTheme(darkMode ? "light" : "dark");
  };

  return (
    <main className={`${darkMode ? "dark" : ""}`}>
      <div className="flex min-h-screen max-w-full flex-col items-center bg-light-background dark:bg-charade text-charade dark:text-white">
        <NavBar toggleDarkMode={toggleDarkMode} darkMode={darkMode}></NavBar>
        <div
          className={`${className} flex flex-col items-center pt-24 md:pt-8 pb-40`}
        >
          {children}
        </div>
        <Footer />
      </div>
    </main>
  );
}
