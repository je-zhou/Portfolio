"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faStar, faSun } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
import FlipUp from "./FlipUp";
import Image from "next/image";

interface AvatarToggleProps {
  toggleDarkMode: Function;
  darkMode: boolean;
}

export default function AvatarToggle({
  toggleDarkMode,
  darkMode,
}: AvatarToggleProps) {
  return (
    <div className="flex flex-row space-x-4 items-center w-full">
      <div className="w-16 h-16 rounded-full  bg-hoki flex justify-center items-end overflow-hidden">
        {/* Backgrounds */}
        <div className=" w-16 h-16 absolute rounded-full overflow-hidden">
          <div className="w-3/4 h-full">
            <AnimatePresence>
              {darkMode && (
                <motion.div
                  initial={{ x: 50, opacity: 0, scale: 0, width: "0%" }}
                  animate={{ x: 0, opacity: 1, scale: 1, width: "50%" }}
                  exit={{ x: -50, opacity: 0, scale: 0, width: "0%" }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      className="absolute"
                      src={"/avatar/Moon.png"}
                      alt="Sun"
                      width={10000}
                      height={10000}
                    ></Image>
                    <FontAwesomeIcon
                      className="absolute left-12 top-1.5 w-2"
                      icon={faStar}
                    ></FontAwesomeIcon>
                    <FontAwesomeIcon
                      className="absolute left-10 top-4 w-2"
                      icon={faStar}
                    ></FontAwesomeIcon>
                    <FontAwesomeIcon
                      className="absolute left-6 top-0 w-2"
                      icon={faStar}
                    ></FontAwesomeIcon>
                    <FontAwesomeIcon
                      className="absolute left-1 top-3 w-2"
                      icon={faStar}
                    ></FontAwesomeIcon>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {!darkMode && (
                <motion.div
                  initial={{ x: 50, opacity: 0, scale: 0, width: "0%" }}
                  animate={{ x: 0, opacity: 1, scale: 1, width: "50%" }}
                  exit={{ x: -50, opacity: 0, scale: 0, width: "0%" }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      className="absolute"
                      src={"/avatar/Sun.png"}
                      alt="Sun"
                      priority
                      width={10000}
                      height={10000}
                    ></Image>
                    <Image
                      className="absolute left-8 top-2.5"
                      src={"/avatar/Cloud 1.png"}
                      alt="Sun"
                      priority
                      width={10000}
                      height={10000}
                    ></Image>
                    <Image
                      className="absolute left-1 top-5 "
                      src={"/avatar/Cloud 2.png"}
                      alt="Sun"
                      priority
                      width={10000}
                      height={10000}
                    ></Image>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        {/* Avatar */}
        <div className="w-full flex flex-row justify-center relative ">
          <AnimatePresence>
            {darkMode && (
              <motion.div
                className="h-full"
                initial={{ x: 50, opacity: 0, scale: 0, width: "0%" }}
                animate={{ x: 0, opacity: 1, scale: 1, width: "50%" }}
                exit={{ x: -50, opacity: 0, scale: 0, width: "0%" }}
              >
                <Image
                  src={"/avatar/Full-Hoodie.png"}
                  alt="Full Hoodie"
                  priority
                  width={10000}
                  height={10000}
                ></Image>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {!darkMode && (
              <motion.div
                className="h-full"
                initial={{ x: 1000, opacity: 0, scale: 0, width: "0%" }}
                animate={{ x: 0, opacity: 1, scale: 1, width: "50%" }}
                exit={{ x: -1000, opacity: 0, scale: 0, width: "0%" }}
              >
                <Image
                  src={"/avatar/Full-Shirt.png"}
                  alt="Full Hoodie"
                  priority
                  width={10000}
                  height={10000}
                ></Image>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Toggle */}
      <div className="flex flex-col space-y-2">
        <div className="flex flex-row justify-center items-center space-x-2 ">
          <div className="flex flex-row space-x-2 text-xl">
            <h1>JERRY ZHOU</h1>
            <h1>‣</h1>
            <h1>{darkMode ? "Solopreneur" : "Engineer"}</h1>
          </div>

          <div className="text-xl">by</div>

          <div
            className="border-2 border-slate-500 w-10 h-10 px-2 md:px-0 rounded-lg flex dark:hover:bg-slate-500 hover:bg-slate-200 cursor-pointer"
            onClick={(e) => {
              toggleDarkMode();
            }}
          >
            <FlipUp
              className="flex flex-col w-full"
              showFirst={darkMode}
              first={
                <FontAwesomeIcon
                  className="text-charade dark:text-white"
                  icon={faMoon}
                  size="xl"
                />
              }
              second={
                <FontAwesomeIcon
                  className="text-charade dark:text-white"
                  icon={faSun}
                  size="xl"
                />
              }
            ></FlipUp>
          </div>
        </div>
      </div>
    </div>
  );
}
