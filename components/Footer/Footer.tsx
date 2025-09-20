import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Footer() {
  return (
    <div className="w-full border-t">
      <div className="flex flex-row justify-between items-center w-full px-8 py-4">
        <div className="">Designed by Me</div>
        <div className="flex flex-row space-x-4">
          <FontAwesomeIcon
            className="cursor-pointer"
            icon={faLinkedin}
            size="2x"
            onClick={() => window.open("https://www.linkedin.com/in/je-zhou/")}
          />
          <FontAwesomeIcon
            className="cursor-pointer"
            icon={faGithubSquare}
            size="2x"
            onClick={() => window.open("https://github.com/je-zhou")}
          />
        </div>
      </div>
    </div>
  );
}
