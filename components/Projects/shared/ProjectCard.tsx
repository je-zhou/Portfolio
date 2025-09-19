import { Card } from "@/components/ui/card";
import React from "react";
import Image from "next/image";
import Link from "next/link";

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
  return (
    <Link href={href} className="text-black dark:text-white space-y-3">
      <Image
        src={displayUrl}
        alt={title}
        width={1000}
        height={1000}
        className="h-96 aspect-video object-contain border rounded-sm"
      />

      <div className="space-y-1">
        <h1 className="text-2xl font-medium">{title}</h1>
        <p className="text-lg">{subtitle}</p>
      </div>
    </Link>
  );
}
