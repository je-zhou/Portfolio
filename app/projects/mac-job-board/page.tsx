import ProjectLayout from "@/components/ProjectPage/ProjectLayout";
import ProjectSection from "@/components/ProjectPage/ProjectSection";
import ProjectMedia from "@/components/ProjectPage/ProjectMedia";

export default function MacJobBoardPage() {
  const tableOfContents = [
    { id: "overview", title: "Overview", level: 2 },
    { id: "the-problem", title: "The Problem", level: 2 },
    { id: "key-features", title: "Key Features", level: 2 },
    {
      id: "technical-implementation",
      title: "Technical Implementation",
      level: 2,
    },
    { id: "technology-stack", title: "Technology Stack", level: 2 },
    { id: "impact-results", title: "Impact & Results", level: 2 },
  ];

  return (
    <ProjectLayout
      title="MAC Job Board"
      subtitle="Job Board for Australia's Largest Student-Driven Coding Club"
      year="H1 2025"
      tags={["Web Development", "Next.js", "Full Stack", "Community"]}
      tableOfContents={tableOfContents}
    >
      <ProjectSection>
        <ProjectMedia
          src="/projects/mac-job-board/MAC-Job-Board-Promo.png"
          alt="MAC Job Board interface"
          priority
        />
      </ProjectSection>

      <ProjectSection
        title="Overview"
        subtitle="A dedicated job board connecting MAC students with tech opportunities"
      >
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          The MAC Job Board is a custom-built platform designed specifically for
          Monash Association of Coding (MAC), Australia&apos;s largest
          student-driven coding club. It connects students with internships,
          graduate positions, and tech opportunities from partner companies.
        </p>
      </ProjectSection>

      <ProjectSection title="The Problem">
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          MAC had hundreds of active members looking for tech opportunities, but
          job postings were scattered across Discord messages, email chains, and
          social media. Students were missing out on relevant opportunities, and
          partner companies weren&apos;t getting quality applicants.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          We needed a centralized platform where companies could post
          opportunities directly to MAC students, and students could easily
          discover and apply to positions that matched their skills and
          interests.
        </p>
      </ProjectSection>

      <ProjectSection title="Key Features">
        <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
          <li>
            <strong className="text-black dark:text-white">
              Company Portal:
            </strong>{" "}
            Partner companies can create accounts and post job listings directly
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Smart Filtering:
            </strong>{" "}
            Students can filter opportunities by role type, skill requirements,
            and company
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Application Tracking:
            </strong>{" "}
            Track applications and manage the hiring process in one place
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Email Notifications:
            </strong>{" "}
            Automated alerts for new job postings matching student preferences
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Admin Dashboard:
            </strong>{" "}
            MAC committee members can moderate listings and manage users
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Mobile Responsive:
            </strong>{" "}
            Fully responsive design works seamlessly on all devices
          </li>
        </ul>
      </ProjectSection>

      <ProjectSection title="Technical Implementation">
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          Built with modern web technologies, the platform prioritizes
          performance and user experience:
        </p>
        <ol className="space-y-4 text-lg text-gray-700 dark:text-gray-300 list-decimal list-inside">
          <li>
            <strong className="text-black dark:text-white">
              Server-Side Rendering:
            </strong>{" "}
            Next.js provides fast page loads and excellent SEO
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Authentication:
            </strong>{" "}
            Secure auth system with role-based access control for students,
            companies, and admins
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Real-time Updates:
            </strong>{" "}
            Job listings update instantly without page refreshes
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Email Integration:
            </strong>{" "}
            Automated email system for notifications and application updates
          </li>
        </ol>
      </ProjectSection>

      <ProjectSection title="Technology Stack">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <p className="font-semibold text-black dark:text-white">Frontend</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Next.js, React, TypeScript
            </p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <p className="font-semibold text-black dark:text-white">Backend</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Next.js API Routes, Node.js
            </p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <p className="font-semibold text-black dark:text-white">Database</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              PostgreSQL, Prisma
            </p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <p className="font-semibold text-black dark:text-white">
              Deployment
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Vercel, AWS
            </p>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="Impact & Results">
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          Since launching in early 2025, the MAC Job Board has become an
          essential resource for the MAC community. The platform has facilitated
          dozens of successful placements, connecting students with internships
          and graduate positions at leading tech companies.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Partner companies have praised the quality of applicants and the ease
          of posting opportunities directly to a targeted audience of skilled
          students. The job board has strengthened MAC&apos;s relationships with
          industry partners and provided tangible value to its members.
        </p>
      </ProjectSection>
    </ProjectLayout>
  );
}
