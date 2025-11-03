"use client";

import React, { useState } from "react";
import Image from "next/image";

interface InfiniteCarouselProps {
  speed?: number;
}

export default function InfiniteCarousel({
  speed = 30,
}: InfiniteCarouselProps) {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoveredTag, setHoveredTag] = useState<string | null>(null);

  // Images with their corresponding hashtags
  const imagesWithTags = [
    { src: "/about-me/About Me - 1.webp", tag: "#travelling" },
    { src: "/about-me/About Me - 2.webp", tag: "#food" },
    { src: "/about-me/About Me - 3.webp", tag: "#fitness" },
    { src: "/about-me/About Me - 4.webp", tag: "#cat" },
    { src: "/about-me/About Me - 5.webp", tag: "#adventure" },
    { src: "/about-me/About Me - 6.webp", tag: "#cycling" },
  ];

  // Duplicate the images array to create seamless loop
  const duplicatedImages = [...imagesWithTags, ...imagesWithTags];

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = (tag: string) => {
    setHoveredTag(tag);
  };

  const handleMouseLeave = () => {
    setHoveredTag(null);
  };

  return (
    <div className="w-full overflow-hidden py-8 relative">
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-192px * ${imagesWithTags.length} - 1.5rem * ${imagesWithTags.length}));
          }
        }
        .animate-scroll {
          animation: scroll ${speed}s linear infinite;
        }
      `}</style>

      {/* Custom cursor bubble */}
      {hoveredTag && (
        <div
          className="fixed pointer-events-none z-50 px-4 py-2 bg-blue-300 dark:bg-blue-400 text-charade dark:text-charade rounded-full text-sm font-medium shadow-lg transition-opacity duration-200"
          style={{
            left: `${cursorPosition.x + 15}px`,
            top: `${cursorPosition.y + 15}px`,
          }}
        >
          {hoveredTag}
        </div>
      )}

      <div className="flex gap-6 animate-scroll">
        {duplicatedImages.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-48 h-48 relative rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-800 cursor-none"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => handleMouseEnter(item.tag)}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              src={item.src}
              alt={`Photo ${(index % imagesWithTags.length) + 1}`}
              fill
              className="object-cover"
              sizes="192px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
