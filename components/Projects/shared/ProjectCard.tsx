"use client";

import { Card } from "@/components/ui/card";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Film } from "lucide-react";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  href: string;
  displayUrl: string;
}

export default function ProjectCard({
  title,
  subtitle,
  href,
  displayUrl,
}: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [progress, setProgress] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const resetTimerRef = useRef<NodeJS.Timeout | undefined>(undefined);

  // Check if the displayUrl is a video file
  const isVideo = /\.(mp4|mov|webm|ogg)$/i.test(displayUrl);

  const updateProgress = () => {
    if (videoRef.current && !videoRef.current.paused) {
      const currentProgress =
        (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(currentProgress);
      animationFrameRef.current = requestAnimationFrame(updateProgress);
    }
  };

  const resetVideo = () => {
    if (videoRef.current) {
      // Fade out
      setOpacity(0);

      // Reset video after fade out completes
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.currentTime = 0;
          setProgress(0);
        }
        // Fade back in
        setOpacity(1);
      }, 300); // Match the transition duration
    }
  };

  const handleMouseEnter = () => {
    if (videoRef.current) {
      // Clear any pending reset timer
      if (resetTimerRef.current) {
        clearTimeout(resetTimerRef.current);
      }

      videoRef.current.play();
      animationFrameRef.current = requestAnimationFrame(updateProgress);
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      // Start 5-second reset timer
      resetTimerRef.current = setTimeout(() => {
        resetVideo();
      }, 5000);
    }
  };

  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (resetTimerRef.current) {
        clearTimeout(resetTimerRef.current);
      }
    };
  }, []);

  return (
    <Link
      href={href}
      className="text-black dark:text-white space-y-3"
      onMouseEnter={isVideo ? handleMouseEnter : undefined}
      onMouseLeave={isVideo ? handleMouseLeave : undefined}
    >
      {isVideo ? (
        <div className="relative w-full h-96 overflow-hidden rounded-sm border bg-white">
          <video
            ref={videoRef}
            src={displayUrl}
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover transition-opacity duration-300"
            style={{ opacity }}
          >
            Your browser does not support the video tag.
          </video>

          {/* Movie Icon Indicator */}
          <div className="absolute top-3 right-3">
            <Film className="w-6 h-6 text-black opacity-50" />
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200/30">
            <div
              className="h-full bg-blue-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      ) : (
        <div className="relative w-full h-96 overflow-hidden rounded-sm border bg-white">
          <Image
            src={displayUrl}
            alt={title}
            width={1000}
            height={1000}
            priority
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="space-y-1">
        <h1 className="text-xl font-medium">{title}</h1>
        <p className="text-neutral-500">{subtitle}</p>
      </div>
    </Link>
  );
}
