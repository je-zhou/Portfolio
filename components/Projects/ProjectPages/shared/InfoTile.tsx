import React from "react";

interface InfoTileProps {
  title: string;
  description: string;
  display?: React.JSX.Element;
}

export default function InfoTile({
  title,
  description,
  display,
}: InfoTileProps) {
  return (
    <div className="flex flex-col space-y-4 w-full py-20 items-center md:items-start">
      <div className="flex flex-col space-y-2 items-center md:items-start">
        {/* Title */}
        <h1 className="text-charade dark:text-white text-center md:text-left font-bold text-2xl">
          {title}
        </h1>
        <div className="w-16 h-1 bg-charade dark:bg-white rounded-full"></div>
      </div>
      {/* Content */}
      <div className="flex flex-col items items-center md:items-start w-full md:flex-row space-y-8 md:space-y-0">
        {/* Description */}
        <div className="max-w-md text-charade dark:text-white text-center md:text-left font-light space-y-2 leading-relaxed">
          {description.split("\n").map((str) => (
            <p key={str} className="pb-2">
              {str}
            </p>
          ))}
        </div>
        {/* Display Component */}
        {display && (
          <div className="flex-1 w-full flex justify-center md:pl-24 px-20">
            {display}
          </div>
        )}
      </div>
    </div>
  );
}
