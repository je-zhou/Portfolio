"use client";

import React, { useState } from "react";
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
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const isVideo = /\.(mp4|mov|webm|ogg)$/i.test(src);

  return (
    <figure className={`my-8 ${className}`}>
      {isVideo ? (
        <div className="relative w-full rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-900">
          {!isVideoLoaded && (
            <div className="absolute inset-0 animate-pulse bg-gray-200 dark:bg-gray-800" />
          )}
          <video
            src={src}
            controls
            loop
            muted
            playsInline
            preload="metadata"
            onLoadedData={() => setIsVideoLoaded(true)}
            className={`w-full h-auto transition-opacity duration-500 ${
              isVideoLoaded ? "opacity-100" : "opacity-0"
            }`}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        <div className="relative w-full rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-900">
          {!isImageLoaded && (
            <div className="absolute inset-0 animate-pulse bg-gray-200 dark:bg-gray-800" />
          )}
          <Image
            src={src}
            alt={alt}
            width={1200}
            height={800}
            priority={priority}
            onLoad={() => setIsImageLoaded(true)}
            className={`w-full h-auto object-cover transition-opacity duration-500 ${
              isImageLoaded ? "opacity-100" : "opacity-0"
            }`}
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
