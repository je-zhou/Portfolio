"use client";

import React, { useState, useEffect } from "react";
import { useThemeContext } from "../ThemeProvider/ThemeProvider";

const jobHistory = [
  {
    year: "2024",
    title: "Data",
    subtitle: "Australian Bureau of Statistics",
  },
  {
    year: "2023",
    title: "Digital Accelerator",
    subtitle: "PwC Australia",
  },
  {
    year: "2022",
    title: "Global Tax Associate",
    subtitle: "PwC Australia",
  },
];

const projects = [
  {
    year: "2024",
    title: "MAC Job Board",
    subtitle: "2,200+ active users in week 1",
  },

  {
    year: "2023",
    title: "021 Ventures",
    subtitle: "Shipped 10+ web apps",
  },
  {
    year: "2022",
    title: "Sports Betting Bot",
    subtitle: "Grew $700 to $10,000+ in 9 months",
  },
];

export default function Intro() {
  const { theme } = useThemeContext();
  const [darkMode, setDarkMode] = useState<boolean>(theme === "dark");

  // Watch for theme changes from context
  useEffect(() => {
    setDarkMode(theme === "dark");
  }, [theme]);

  const displayData = darkMode ? projects : jobHistory;

  return (
    <div className="flex flex-col w-full md:min-h-[70vh] h-full items-center pt-20 md:pt-0 md:justify-center px-6 md:px-12 pb-20">
      <div className="flex flex-col items-center max-w-2xl">
        <p className="text-2xl md:text-3xl text-charade dark:text-heather text-center">
          Hello! 你好! G&apos;day Mate! 👋
        </p>
        <h1 className="text-7xl md:text-8xl font-bold text-charade dark:text-white leading-tight mt-2 text-center">
          I&apos;m Jerry
        </h1>

        {/* Job History / Projects */}
        <div className="mt-8 md:mt-12">
          <div
            key={darkMode ? "projects" : "jobs"}
            className="space-y-1 animate-fadeSlideIn"
          >
            {displayData.map((item, index) => (
              <JobHistoryTile
                key={index}
                title={item.title}
                subtitle={item.subtitle}
                year={item.year}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function JobHistoryTile({
  title,
  subtitle,
  year,
}: {
  title: string;
  subtitle: string;
  year: string;
}) {
  return (
    <div className="flex items-center gap-3 md:gap-4 py-2 w-min">
      <span className="text-sm font-medium text-gray-400 dark:text-gray-500 min-w-[3rem] tabular-nums">
        {year}
      </span>
      <div className="flex flex-col whitespace-nowrap">
        <h3 className="text-sm text-gray-500 dark:text-gray-400">{title}</h3>
        <p className="text-xs text-gray-400 dark:text-gray-500">{subtitle}</p>
      </div>
    </div>
  );
}
