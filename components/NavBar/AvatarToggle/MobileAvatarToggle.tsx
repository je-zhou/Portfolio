"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faStar, faSun } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
import FlipUp from "./FlipUp";
import Image from "next/image";
import Link from "next/link";

interface MobileAvatarToggleProps {
  toggleDarkMode: Function;
  darkMode: boolean;
  isOpen: boolean;
}

export default function MobileAvatarToggle({
  toggleDarkMode,
  darkMode,
  isOpen,
}: MobileAvatarToggleProps) {
  return (
    <div className="flex flex-row items-center space-x-2">
      <Link
        href={"/"}
        className="w-10 h-10 rounded-full bg-hoki flex justify-center items-end overflow-hidden relative"
      >
        {/* Backgrounds */}
        <div className="w-10 h-10 absolute rounded-full overflow-hidden">
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
                      src="https://mtmetamherv206qj.public.blob.vercel-storage.com/avatar/Moon.png"
                      alt="Moon"
                      width={10000}
                      height={10000}
                    />
                    <FontAwesomeIcon
                      className={`absolute left-9 top-0.5 ${isOpen ? "text-white" : ""}`}
                      icon={faStar}
                      size="2xs"
                    />
                    <FontAwesomeIcon
                      className={`absolute left-7 top-3 ${isOpen ? "text-white" : ""}`}
                      icon={faStar}
                      size="2xs"
                    />
                    <FontAwesomeIcon
                      className={`absolute left-4 top-0 ${isOpen ? "text-white" : ""}`}
                      icon={faStar}
                      size="2xs"
                    />
                    <FontAwesomeIcon
                      className={`absolute left-0.5 top-2 ${isOpen ? "text-white" : ""}`}
                      icon={faStar}
                      size="2xs"
                    />
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
                      src="https://mtmetamherv206qj.public.blob.vercel-storage.com/avatar/Sun.png"
                      alt="Sun"
                      priority
                      width={10000}
                      height={10000}
                    />
                    <Image
                      className="absolute left-6 top-2"
                      src="https://mtmetamherv206qj.public.blob.vercel-storage.com/avatar/Cloud 1.png"
                      alt="Cloud"
                      priority
                      width={10000}
                      height={10000}
                    />
                    <Image
                      className="absolute left-0.5 top-4"
                      src="https://mtmetamherv206qj.public.blob.vercel-storage.com/avatar/Cloud 2.png"
                      alt="Cloud"
                      priority
                      width={10000}
                      height={10000}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        {/* Avatar */}
        <div className="w-full flex flex-row justify-center relative">
          <AnimatePresence>
            {darkMode && (
              <motion.div
                className="h-full"
                initial={{ x: 50, opacity: 0, scale: 0, width: "0%" }}
                animate={{ x: 0, opacity: 1, scale: 1, width: "50%" }}
                exit={{ x: -50, opacity: 0, scale: 0, width: "0%" }}
              >
                <Image
                  src="https://mtmetamherv206qj.public.blob.vercel-storage.com/avatar/Full-Hoodie.png"
                  alt="Avatar"
                  priority
                  width={10000}
                  height={10000}
                />
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
                  src="https://mtmetamherv206qj.public.blob.vercel-storage.com/avatar/Full-Shirt.png"
                  alt="Avatar"
                  priority
                  width={10000}
                  height={10000}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Link>

      <h1>{darkMode ? "Solopreneur by" : "Engineer by"}</h1>

      <div
        className={`border-2 w-8 h-8 px-2 md:px-0 rounded-md flex cursor-pointer ${
          isOpen
            ? "border-white dark:border-charade hover:bg-white/20 dark:hover:bg-charade/20"
            : "border-slate-500 dark:hover:bg-slate-500 hover:bg-slate-200"
        }`}
        onClick={(e) => {
          toggleDarkMode();
        }}
      >
        <FlipUp
          className="flex flex-col w-full"
          showFirst={darkMode}
          first={
            <FontAwesomeIcon
              className={isOpen ? "text-white dark:text-charade" : "text-charade dark:text-white"}
              icon={faMoon}
              size="sm"
            />
          }
          second={
            <FontAwesomeIcon
              className={isOpen ? "text-white dark:text-charade" : "text-charade dark:text-white"}
              icon={faSun}
              size="sm"
            />
          }
        />
      </div>
    </div>
  );
}
