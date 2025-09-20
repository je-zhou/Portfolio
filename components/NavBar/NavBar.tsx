"use client";
import React, { useState } from "react";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import AvatarToggle from "./AvatarToggle/AvatarToggle";

interface NavbarProps {
  toggleDarkMode: Function;
  darkMode: boolean;
}

export default function NavBar({ toggleDarkMode, darkMode }: NavbarProps) {
  const [isOpen, setisOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Desktop Navbar */}
      <div className="hidden md:flex flex-row text-md font-medium opacity-80 justify-between items-center p-8 text-charade dark:text-white max-w-screen-2xl w-full">
        <div className="">
          <AvatarToggle toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        </div>

        <div className="flex flex-row justify-end space-x-8">
          <Link className="cursor-pointer" href="#About">
            About
          </Link>

          <Link className="cursor-pointer" href="#About">
            Work
          </Link>

          <Link className="cursor-pointer" href="#About">
            Life
          </Link>

          <Link className="cursor-pointer" href="#About">
            Resume
          </Link>
        </div>
      </div>

      {/* Mobile Hamburger Nav */}
      <div
        className={`md:hidden z-30 text-md min-w-full font-bold p-6  duration-200 fixed
			 ${
         isOpen
           ? "dark:bg-heather bg-charade dark:text-charade text-white max-h-screen "
           : "text-charade dark:text-white"
       } 
			 `}
      >
        <div className="flex flex-col items-end ">
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
          <div className="flex flex-col justify-between text-md font-bold opacity-80 h-[90vh] py-8 dark:text-charade text-white">
            <div className="space-y-8 flex flex-col">
              <Link className="cursor-pointer" href="#About">
                About
              </Link>

              <Link className="cursor-pointer" href="#About">
                Work
              </Link>

              <Link className="cursor-pointer" href="#About">
                Life
              </Link>

              <Link className="cursor-pointer" href="#About">
                Resume
              </Link>
            </div>
            <div className="flex flex-row space-x-8">
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
