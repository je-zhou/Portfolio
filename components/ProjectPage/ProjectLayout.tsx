"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import TableOfContents from "./TableOfContents";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { useThemeContext } from "../ThemeProvider/ThemeProvider";

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

interface ProjectLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  year: string;
  tags?: string[];
  tableOfContents?: TOCItem[];
}

export default function ProjectLayout({
  children,
  title,
  subtitle,
  year,
  tags = [],
  tableOfContents = [],
}: ProjectLayoutProps) {
  const { theme, setTheme } = useThemeContext();

  const darkMode = theme === "dark";

  const toggleDarkMode = () => {
    setTheme(darkMode ? "light" : "dark");
  };

  return (
    <main className={`${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen bg-light-background dark:bg-charade text-charade dark:text-white">
        <NavBar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

        {/* Hero section - aligned with content */}
        <div className="w-full px-4 pb-12 pt-20">
          <div className="mx-auto" style={{ maxWidth: "1400px" }}>
            <div className="flex justify-center gap-8">
              <div className="w-full max-w-2xl flex-shrink-0">
                {/* Back button */}
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors mb-8"
                >
                  <ArrowLeft size={20} />
                  <span>Back to home</span>
                </Link>

                <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4 leading-tight">
                  {title}
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {subtitle}
                </p>
                <div className="flex flex-wrap gap-3 items-center">
                  <span className="text-base text-gray-500 dark:text-gray-500">
                    {year}
                  </span>
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-heather/30 dark:bg-gray-900 text-charade dark:text-gray-300 rounded-full text-sm border border-heather/50 dark:border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              {/* Spacer to match TOC width */}
              {tableOfContents.length > 0 && (
                <div className="hidden xl:block w-56 flex-shrink-0" />
              )}
            </div>
          </div>
        </div>

        {/* Main content with sidebar - Medium style layout */}
        <div className="w-full px-4 pb-20">
          <div className="mx-auto" style={{ maxWidth: "1400px" }}>
            <div className="flex justify-center gap-8">
              {/* Main article content - fixed width, centered */}
              <article className="w-full max-w-2xl flex-shrink-0">
                {children}
              </article>

              {/* Table of contents sidebar - compact, always on the right */}
              {tableOfContents.length > 0 && (
                <aside className="hidden xl:block w-56 flex-shrink-0">
                  <TableOfContents items={tableOfContents} />
                </aside>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
