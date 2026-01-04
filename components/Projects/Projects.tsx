import React from "react";
import ProjectCard from "./shared/ProjectCard";
import { Card } from "../ui/card";

export default function Projects() {
  return (
    <div id="Projects" className="max-w-screen-2xl w-full">
      <div className="mx-auto px-4 max-w-screen-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <ProjectCard
            title="Volleyball Computer Vision for Analytics and Stat Tracking"
            subtitle="Under Development"
            href="/projects/courtcoverage"
            displayUrl="https://mtmetamherv206qj.public.blob.vercel-storage.com/courtcoverage/CourtCoverage-Promo.mov"
          />

          <ProjectCard
            title="Agentic Cycling Coach Mobile Application"
            subtitle="Currently in Beta"
            href="/projects/wattsup"
            displayUrl="https://mtmetamherv206qj.public.blob.vercel-storage.com/wattsup/Wattsup-Promo.mov"
          />

          <ProjectCard
            title="Job Board for Australia's Largest Student-Driven Coding Club"
            subtitle="Shipped ‣ H1 2025"
            href="/projects/mac-job-board"
            displayUrl="https://mtmetamherv206qj.public.blob.vercel-storage.com/mac-job-board/MAC-Job-Board-Promo.png"
          />

          <ProjectCard
            title="RAG based chatbot plugin"
            subtitle="Shipped ‣ H2 2024"
            href="/projects/servu"
            displayUrl="https://mtmetamherv206qj.public.blob.vercel-storage.com/servu/Servu-Promo.mov"
          />

          <ProjectCard
            title="Foreign Exchange Algorithmic Trading Bot"
            subtitle="$80,000 AUM ‣ H2 2024"
            href="/projects/forex"
            displayUrl="https://mtmetamherv206qj.public.blob.vercel-storage.com/forex/Forex-Promo.mov"
          />

          <ProjectCard
            title="Cloud Hosted Algorithmic Sports Betting Bot"
            subtitle="$700 to $10,000+ ‣ 2023 Season"
            href="/projects/wisewagers"
            displayUrl="https://mtmetamherv206qj.public.blob.vercel-storage.com/wisewagers/WiseWagers-Promo.png"
          />

          <ProjectCard
            title="AI Native Medical Notes CMS"
            subtitle="4th Place ‣ MedHack 2024"
            href="/projects/askmd"
            displayUrl="https://mtmetamherv206qj.public.blob.vercel-storage.com/askMd/AskMd-Promo.mov"
          />

          <ProjectCard
            title="Government Sponsored Community Education App"
            subtitle="1st Place ‣ GovHack 2022"
            href="/projects/lynk"
            displayUrl="https://mtmetamherv206qj.public.blob.vercel-storage.com/lynk/Lynk-Promo.png"
          />
        </div>
      </div>
    </div>
  );
}
