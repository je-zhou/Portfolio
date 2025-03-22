import React, { MutableRefObject } from "react";

export default function About() {
  return (
    <div
      id="About"
      className="flex flex-col justify-center w-full max-w-4xl h-screen px-8 snap-start "
    >
      <div className="flex flex-col space-y-6 justify-center items-center ">
        <h1 className="text-4xl xs:text-6xl md:text-8xl font-bold text-charade dark:text-white text-center pb-8">
          About Me
        </h1>

        {/* About */}
        <p className="text-xl font-light text-charade dark:text-heather text-center leading-relaxed">
          {
            "Hey! I'm just a guy on a quest to turn my lifelong love for tech into something big 🚀."
          }
        </p>
        <p className="text-xl font-light text-charade dark:text-heather text-center  leading-relaxed">
          {
            "I used to be in the corporate world, doing the Big-4 thing 🏢, but now I'm all about chasing my passion for computer science ⚡️."
          }
        </p>

        {/* Quote */}
        <div className="pt-8">
          <div className=" rounded-lg bg-neutral-200 dark:bg-neutral-900 px-4 py-2 dark:text-heather text-neutral-700 text-center text-sm">
            <p className="">
              <span className="text-black dark:text-white font-black">
                &quot;
              </span>
              Hard work beats talent when talent doesn&apos;t work hard
              <span className="text-black dark:text-white  font-black">
                &quot;
              </span>
            </p>
          </div>
          <p className="text-center text-charade dark:text-heather pt-1 text-sm italic font-light">
            Tim Nokte
          </p>
        </div>
      </div>
    </div>
  );
}
