import React from "react";

export default function Intro() {
  return (
    <div className="flex flex-col w-full min-h-screen md:min-h-[70vh] h-full items-center justify-center">
      <div className="flex flex-col items-center">
        <p className="text-2xl lg:text-4xl text-charade dark:text-heather text-center">
          Hello! 你好! G&apos;day Mate! 👋
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold text-charade dark:text-white text-center leading-tight text-nowrap">
          I&apos;m Jerry
        </h1>
      </div>
    </div>
  );
}
