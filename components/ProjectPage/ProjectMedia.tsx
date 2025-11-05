"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ProjectMediaProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  priority?: boolean;
  autoplay?: boolean;
  loop?: boolean;
  isVideo?: boolean;
}

export default function ProjectMedia({
  src,
  alt,
  caption,
  className = "",
  priority = false,
  autoplay = true,
  loop = true,
  isVideo = false,
}: ProjectMediaProps) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const isVideoFile = /\.(mp4|mov|webm|ogg)$/i.test(src);
  const isYouTube = /youtube\.com|youtu\.be/i.test(src);
  const isVideoMedia = isVideo || isVideoFile || isYouTube;

  const handleVideoLoaded = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    setIsVideoLoaded(true);
    if (autoplay) {
      e.currentTarget.play().catch(() => {
        // Autoplay was prevented, user interaction required
      });
    }
  };

  return (
    <figure className={`my-8 ${className}`}>
      {isYouTube ? (
        <div className="relative w-full rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-900" style={{ paddingBottom: '56.25%' }}>
          <iframe
            src={src}
            title={alt}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          />
        </div>
      ) : isVideoFile ? (
        <div className="relative w-full rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-900">
          {!isVideoLoaded && (
            <div className="absolute inset-0 animate-pulse bg-gray-200 dark:bg-gray-800" />
          )}
          <video
            src={src}
            controls
            autoPlay={autoplay}
            loop={loop}
            muted
            playsInline
            preload="metadata"
            onLoadedData={handleVideoLoaded}
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
