import React from "react";
import ProjectCard from "./shared/ProjectCard";
import { Card } from "../ui/card";

export default function Projects() {
  return (
    <div id="Projects" className="max-w-screen-2xl w-full">
      <div className="mx-auto px-4 max-w-screen-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {/* RideGuide */}
          <ProjectCard
            title="AI Native Cycling Coach"
            subtitle="Launched ‣ H2 2025"
            href="#"
            displayUrl="/path/to/image1.jpg"
          />

          <ProjectCard
            title="Phonetic translator for Chinese, Japanese, and Korean learners"
            subtitle="Launched ‣ H1 2025"
            href="#"
            displayUrl="/path/to/image1.jpg"
          />

          <ProjectCard
            title="Cloud Native Algorithmic Sports Betting Bot"
            subtitle="Launched ‣ H1 2025"
            href="#"
            displayUrl="/path/to/image1.jpg"
          />
        </div>
      </div>
    </div>
  );
}
