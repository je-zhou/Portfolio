"use client";

import React, { useState } from "react";
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
  let theme = useThemeContext();

  const [darkMode, setDarkMode] = useState<boolean>(
    theme === "light" ? false : true
  );

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    theme = darkMode ? "dark" : "light";
  };

  return (
    <main className={`${darkMode ? "dark" : ""}`}>
      <div className="flex min-h-screen max-w-full flex-col items-center bg-light-background dark:bg-charade text-charade dark:text-white">
        <NavBar toggleDarkMode={toggleDarkMode} darkMode={darkMode}></NavBar>
        <div className={`${className} flex flex-col items-center pt-20 pb-40`}>
          {children}
        </div>
        <Footer />
      </div>
    </main>
  );
}
