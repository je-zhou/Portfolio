"use client";
import React, { useState } from "react";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import AvatarToggle from "./AvatarToggle/AvatarToggle";
import MobileAvatarToggle from "./AvatarToggle/MobileAvatarToggle";

interface NavbarProps {
  toggleDarkMode: Function;
  darkMode: boolean;
}

export default function NavBar({ toggleDarkMode, darkMode }: NavbarProps) {
  const [isOpen, setisOpen] = useState(false);

  return (
    <div className="w-full border-b">
      {/* Desktop Navbar */}
      <div className="hidden md:flex flex-row text-md font-medium opacity-80 justify-between items-center px-8 py-4 max-w-screen-2xl w-full">
        <AvatarToggle toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

        <div className="flex flex-row justify-end space-x-8">
          <Link href="/about">About</Link>

          <Link href="/work">Work</Link>

          <div
            className="cursor-pointer"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1-5vFRCKvpYSnCpwDvHjNeTQzvReFhd0J/view?usp=sharing"
              )
            }
          >
            Resume
          </div>
        </div>
      </div>

      {/* Mobile Hamburger Nav */}
      <div
        className={`md:hidden z-30 text-md min-w-full font-medium py-3 px-6 duration-200 fixed
			 ${
         isOpen
           ? "dark:bg-light-background bg-charade dark:text-charade text-white max-h-screen"
           : "text-charade dark:text-white bg-light-background dark:bg-charade border-b border-gray-300 dark:border-gray-700"
       }
			 `}
      >
        <div className="flex flex-row items-center justify-between w-full">
          <MobileAvatarToggle
            toggleDarkMode={toggleDarkMode}
            darkMode={darkMode}
            isOpen={isOpen}
          />
          <FontAwesomeIcon
            className="cursor-pointer"
            icon={faBars}
            size="xl"
            onClick={() => setisOpen(!isOpen)}
          />
        </div>
        <div
          className={`w-full overflow-hidden ${
            isOpen ? "h-screen" : "h-0"
          } duration-200`}
        >
          <div className="flex flex-col justify-between text-md opacity-80 h-[90vh] py-8 text-white dark:text-charade">
            <div className="space-y-8 flex flex-col">
              <Link className="cursor-pointer" href="/about">
                About
              </Link>

              <Link className="cursor-pointer" href="/work">
                Work
              </Link>

              <div
                className="cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1-5vFRCKvpYSnCpwDvHjNeTQzvReFhd0J/view?usp=sharing"
                  )
                }
              >
                Resume
              </div>
            </div>
            <div className="flex flex-row space-x-8 text-white dark:text-charade">
              <FontAwesomeIcon
                className="cursor-pointer"
                icon={faLinkedin}
                size="2xl"
                onClick={() =>
                  window.open("https://www.linkedin.com/in/je-zhou/")
                }
              />
              <FontAwesomeIcon
                className="cursor-pointer"
                icon={faGithubSquare}
                size="2xl"
                onClick={() => window.open("https://github.com/je-zhou")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
