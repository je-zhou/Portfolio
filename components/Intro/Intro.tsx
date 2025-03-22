import React from "react";
import Scroll from "../Scroll/Scroll";
import Avatar from "./Avatar";

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
            <p className="text-center text-xl lg:text-2xl text-charade dark:text-heather">
              a data ethusiast who loves to code <br></br>
              <span>🔢🫶🧑🏻‍💻</span>
            </p>
          </div>
          <div
            className="border border-charade dark:border-heather hover:bg-charade dark:hover:bg-heather p-1 md:p-2 rounded w-fit md:mt-12 my-8 hover:cursor-pointer text-charade hover:text-white dark:text-white  dark:hover:text-charade"
            onClick={() => {
              const ele = document.getElementById("Projects");
              if (ele) {
                ele.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <p className=" text-center px-1 md:px-4">My Projects</p>
          </div>
        </div>
        <Avatar toggleDarkMode={toggleDarkMode} darkMode={darkMode}></Avatar>
      </div>
      <Scroll></Scroll>
    </div>
  );
}
