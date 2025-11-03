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
            title="Agentic Cycling Coach Mobile Application"
            subtitle="Launched ‣ H2 2025"
            href="#"
            displayUrl="/projects/wattsup/Latest Ride Promo.mov"
          />

          <ProjectCard
            title="RAG based chatbot plugin"
            subtitle="Launched ‣ H1 2025"
            href="#"
            displayUrl="/projects/servu/Servu Promo.mov"
          />

          <ProjectCard
            title="Cloud Hosted Algorithmic Sports Betting Bot"
            subtitle="Launched ‣ H1 2025"
            href="#"
            displayUrl="/projects/wisewagers/WiseWagers Promo.png"
          />

          <ProjectCard
            title="AI Native Medical Notes CMS"
            subtitle="4th Place ‣ Medhack 2024"
            href="#"
            displayUrl="/projects/askMd/AskMd Promo.mov"
          />
        </div>
      </div>
    </div>
  );
}
