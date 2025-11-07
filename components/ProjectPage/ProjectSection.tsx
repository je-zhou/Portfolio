import React from "react";

interface ProjectSectionProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  id?: string;
}

export default function ProjectSection({
  children,
  title,
  subtitle,
  className = "",
  id,
}: ProjectSectionProps) {
  // Generate ID from title if not provided
  const sectionId = id || (title ? title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "") : undefined);

  return (
    <section className={`mb-12 ${className}`} id={sectionId}>
      {title && (
        <h2 className="text-3xl font-bold text-black dark:text-white mb-3 leading-tight scroll-mt-24">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="text-base lg:text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="text-gray-700 dark:text-gray-300 leading-relaxed [&_p]:text-base [&_p]:lg:text-lg [&_p]:leading-relaxed [&_ul]:text-base [&_ul]:lg:text-lg [&_ol]:text-base [&_ol]:lg:text-lg">
        {children}
      </div>
    </section>
  );
}
