import React from "react";
import Scroll from "../Scroll/Scroll";

interface IntroProps {
  toggleDarkMode: Function;
  darkMode: boolean;
}

export default function Intro({ toggleDarkMode, darkMode }: IntroProps) {
  return (
    <div className="flex flex-col w-full max-h-screen md:max-h-[85vh] h-full items-center">
      <div className="flex w-full max-w-[2040px] h-screen flex-col items-center md:flex-row md:items-center px-12 justify-center pb-48 md:pb-0">
        <div className="flex flex-col md:flex-1 pt-48 md:pt-0 items-center ">
          <div className="flex flex-col items-center  ">
            <p className="text-2xl lg:text-4xl text-charade dark:text-heather text-center">
              Hello! 你好! G&apos;day Mate! 👋
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold text-charade dark:text-white text-center leading-tight text-nowrap">
              I&apos;m Jerry
            </h1>
          </div>
        </div>
      </div>
      <Scroll></Scroll>
    </div>
  );
}
