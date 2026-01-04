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
    { src: "https://mtmetamherv206qj.public.blob.vercel-storage.com/about-me/About Me - 1.webp", tag: "#travelling" },
    { src: "https://mtmetamherv206qj.public.blob.vercel-storage.com/about-me/About Me - 2.webp", tag: "#food" },
    { src: "https://mtmetamherv206qj.public.blob.vercel-storage.com/about-me/About Me - 3.webp", tag: "#fitness" },
    { src: "https://mtmetamherv206qj.public.blob.vercel-storage.com/about-me/About Me - 4.webp", tag: "#cat" },
    { src: "https://mtmetamherv206qj.public.blob.vercel-storage.com/about-me/About Me - 5.webp", tag: "#adventure" },
    { src: "https://mtmetamherv206qj.public.blob.vercel-storage.com/about-me/About Me - 6.webp", tag: "#cycling" },
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
    <div className="w-full overflow-x-hidden overflow-y-visible py-4 sm:py-6 md:py-8 relative">
      <style jsx>{`
        @keyframes scroll-mobile {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(
              calc(
                -128px * ${imagesWithTags.length} - 0.75rem * ${imagesWithTags.length}
              )
            );
          }
        }
        @keyframes scroll-tablet {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(
              calc(
                -160px * ${imagesWithTags.length} - 1rem * ${imagesWithTags.length}
              )
            );
          }
        }
        @keyframes scroll-desktop {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(
              calc(
                -192px * ${imagesWithTags.length} - 1.5rem * ${imagesWithTags.length}
              )
            );
          }
        }
        .animate-scroll {
          animation: scroll-mobile ${speed}s linear infinite;
        }
        @media (min-width: 640px) {
          .animate-scroll {
            animation: scroll-tablet ${speed}s linear infinite;
          }
        }
        @media (min-width: 768px) {
          .animate-scroll {
            animation: scroll-desktop ${speed}s linear infinite;
          }
        }
      `}</style>

      {/* Custom cursor bubble - hidden on mobile/touch devices */}
      {hoveredTag && (
        <div
          className="fixed pointer-events-none z-50 px-4 py-2 bg-blue-300 dark:bg-blue-400 text-charade dark:text-charade rounded-full text-sm font-medium shadow-lg transition-opacity duration-200 hidden md:block"
          style={{
            left: `${cursorPosition.x + 15}px`,
            top: `${cursorPosition.y + 15}px`,
          }}
        >
          {hoveredTag}
        </div>
      )}

      <div className="flex gap-3 sm:gap-4 md:gap-6 animate-scroll min-w-0">
        {duplicatedImages.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 relative rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-800 md:cursor-none"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => handleMouseEnter(item.tag)}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              src={item.src}
              alt={`Photo ${(index % imagesWithTags.length) + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 192px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
