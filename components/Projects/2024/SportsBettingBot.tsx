import React from "react";
import ProjectTile from "../shared/ProjectTile";
import AnimateImage from "../shared/AnimateImage";

export default function SportsBettingBot() {
  return (
    <div className="flex flex-col lg:flex-row w-full px-4 md:px-16 items-start justify-center">
      <ProjectTile
        className="sticky top-16 lg:top-0 py-4 lg:pt-24"
        logoUrl="/project-logos/WiseWagers - Light.png"
        name="Arbitrage Sports Betting Models"
        href="/sports-betting-models"
        tags={["AWS", "Azure", "Discord.js", "Python"]}
        description="Built an end-to-end sports betting bot that scrapes odds from bookmakers, runs arbitrage models, and sends profitable bets to Discord."
      ></ProjectTile>
      <div className="flex-1 flex-col h-full w-full hidden lg:flex px-20">
        <AnimateImage
          imageURL="/projects/wisewagers/WiseWagers - 1.png"
          horizontal={true}
        />
        <AnimateImage
          imageURL="/projects/wisewagers/WiseWagers - 4.png"
          horizontal={true}
        />
        <AnimateImage imageURL="/projects/wisewagers/WiseWagers - 3.png" />
      </div>
    </div>
  );
}
