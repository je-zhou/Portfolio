"use client";

import React from "react";
import Image from "next/image";

interface ProjectMediaProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  priority?: boolean;
}

export default function ProjectMedia({
  src,
  alt,
  caption,
  className = "",
  priority = false,
}: ProjectMediaProps) {
  const isVideo = /\.(mp4|mov|webm|ogg)$/i.test(src);

  return (
    <figure className={`my-8 ${className}`}>
      {isVideo ? (
        <div className="relative w-full rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-900">
          <video
            src={src}
            controls
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-auto"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        <div className="relative w-full rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-900">
          <Image
            src={src}
            alt={alt}
            width={1200}
            height={800}
            priority={priority}
            className="w-full h-auto object-cover"
          />
        </div>
      )}
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-gray-600 dark:text-gray-400">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
