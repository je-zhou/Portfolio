import React from "react";
import InfiniteCarousel from "./InfiniteCarousel";
import Link from "next/link";

export default function About() {
  return (
    <div
      id="About"
      className="flex flex-col w-full max-w-4xl px-4 sm:px-6 md:px-8 snap-start overflow-hidden"
    >
      <div className="flex flex-col space-y-6 justify-center items-center w-full">
        <h1 className="text-2xl xs:text-3xl md:text-4xl font-bold text-charade dark:text-white pb-4 text-center sm:text-left w-full">
          I&apos;m just a guy on a quest to turn my love for tech into something
          big.
        </h1>

        {/* About */}
        <div className="space-y-5 pr-0 sm:pr-8 md:pr-12 font-light text-charade dark:text-heather leading-relaxed text-sm sm:text-base w-full">
          <p>
            My journey into tech has been far from traditional. I used to be in
            the corporate world, doing the Big-4 thing, but now I&apos;m all
            about chasing my passion for computer science.
          </p>
          <p>
            I recently wrapped up my Master&apos;s of Computer Science at the
            University of Monash, where I also helped grow Monash Association of
            Coding into the largest student-run tech club in the southern
            hemisphere.
          </p>
          <p>
            Outside of coding I enjoy eating, keeping fit, cycling, and
            buttering up my cat.
          </p>
          <p>
            You can get in touch with me on{" "}
            <Link
              href="https://www.linkedin.com/in/je-zhou/"
              className="underline"
            >
              LinkedIn
            </Link>{" "}
            or by{" "}
            <a
              href="mailto:jerry.zhou07@gmail.com"
              className="underline hover:opacity-80 transition-opacity"
            >
              Email
            </a>
          </p>
        </div>

        {/* Reel*/}
        <div className="w-full mt-8 sm:mt-10 md:mt-12 overflow-hidden max-w-[90vw]">
          <InfiniteCarousel />
        </div>
      </div>
    </div>
  );
}
