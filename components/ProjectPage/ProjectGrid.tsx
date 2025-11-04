import React from "react";

interface ProjectGridProps {
  children: React.ReactNode;
  columns?: 2 | 3 | 4;
  className?: string;
}

export default function ProjectGrid({
  children,
  columns = 2,
  className = "",
}: ProjectGridProps) {
  const gridClasses = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={`grid ${gridClasses[columns]} gap-6 my-8 ${className}`}>
      {children}
    </div>
  );
}
