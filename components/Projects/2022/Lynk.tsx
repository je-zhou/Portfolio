"use client";
import React from "react";
import ProjectTile from "../shared/ProjectTile";
import AnimateImage from "../shared/AnimateImage";

export default function Lynk() {
  return (
    <div className="flex flex-col lg:flex-row w-full px-4 md:px-16 items-start justify-center">
      <ProjectTile
        className="sticky top-16 lg:top-0 py-4 lg:pt-24"
        logoUrl="/project-logos/Lynk - Light.png"
        name="Lynk"
        href="/lynk"
        tags={["Flutter", "Hackathon"]}
        description="A mobile app helping students and graduates connect and find opportunities in their local communities. Awarded 1st place @ GovHack 2022."
        githubUrl="https://github.com/je-zhou/Lynk"
        websiteUrl="https://govhack.org/2022-winners/"
      ></ProjectTile>
      <div className="flex-1 flex-col h-full w-full hidden lg:flex px-20">
        <AnimateImage imageURL="/projects/lynk/Lynk - 1.png" />
        <AnimateImage imageURL="/projects/lynk/Lynk - 2.png" />
        <AnimateImage imageURL="/projects/lynk/Lynk - 3.png" />
        <AnimateImage imageURL="/projects/lynk/Lynk - 4.png" />
      </div>
    </div>
  );
}
