"use client";

import React, { useEffect, useState } from "react";

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  items: TOCItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-80px 0px -80% 0px",
      }
    );

    // Observe all section headings
    items.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [items]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  if (items.length === 0) return null;

  return (
    <nav className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
      <div className="pb-3 mb-3 border-b border-gray-200 dark:border-gray-800">
        <h3 className="text-xs font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
          Contents
        </h3>
      </div>
      <ul className="space-y-2">
        {items.map(({ id, title, level }) => (
          <li
            key={id}
            style={{ paddingLeft: `${(level - 2) * 8}px` }}
            className="text-xs"
          >
            <a
              href={`#${id}`}
              onClick={(e) => handleClick(e, id)}
              className={`block py-0.5 transition-colors hover:text-black dark:hover:text-white leading-relaxed ${
                activeId === id
                  ? "text-black dark:text-white font-semibold border-l-2 border-black dark:border-white pl-2 -ml-2"
                  : "text-gray-600 dark:text-gray-400 border-l-2 border-transparent pl-2 -ml-2"
              }`}
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
