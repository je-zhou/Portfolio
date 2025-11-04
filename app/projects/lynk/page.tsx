import ProjectLayout from "@/components/ProjectPage/ProjectLayout";
import ProjectSection from "@/components/ProjectPage/ProjectSection";
import ProjectMedia from "@/components/ProjectPage/ProjectMedia";

export default function LynkPage() {
  const tableOfContents = [
    { id: "overview", title: "Overview", level: 2 },
    { id: "the-challenge", title: "The Challenge", level: 2 },
    { id: "our-solution", title: "Our Solution", level: 2 },
    { id: "key-features", title: "Key Features", level: 2 },
    { id: "hackathon-experience", title: "Hackathon Experience", level: 2 },
    { id: "technology-stack", title: "Technology Stack", level: 2 },
    { id: "impact-recognition", title: "Impact & Recognition", level: 2 },
  ];

  return (
    <ProjectLayout
      title="Lynk"
      subtitle="Government Sponsored Community Education App"
      year="2022"
      tags={["Mobile", "Education", "React Native", "GovHack - 1st Place"]}
      tableOfContents={tableOfContents}
    >
      <ProjectSection>
        <ProjectMedia
          src="/projects/lynk/Lynk-Promo.png"
          alt="Lynk app interface"
          priority
        />
      </ProjectSection>

      <ProjectSection
        title="Overview"
        subtitle="Connecting community members with local educational opportunities and resources"
      >
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Lynk is a mobile application developed for GovHack 2022 that connects
          community members with educational opportunities, workshops, and
          resources in their local area. The app was built in response to the
          challenge of improving access to community education programs,
          particularly in underserved areas.
        </p>
      </ProjectSection>

      <ProjectSection title="The Challenge">
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          Many Australian communities, particularly in regional and remote
          areas, have limited access to educational resources and programs.
          Existing community education initiatives often suffer from:
        </p>
        <ul className="space-y-3 text-lg text-gray-700 dark:text-gray-300 list-disc list-inside">
          <li>Poor discoverability - people don&apos;t know what&apos;s available</li>
          <li>Fragmented information across multiple platforms</li>
          <li>Lack of connection between education providers and community needs</li>
          <li>No centralized way to track community education engagement</li>
        </ul>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-6">
          The GovHack challenge asked teams to create innovative solutions that
          would increase participation in community education programs and
          improve educational equity across Australia.
        </p>
      </ProjectSection>

      <ProjectSection title="Our Solution">
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          Lynk brings together all community education opportunities in one
          accessible mobile platform. The app uses location-based services to
          show users relevant programs near them, personalized recommendations
          based on their interests, and tools for education providers to reach
          their target audiences effectively.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          By lowering the barriers to discovery and participation, Lynk helps
          communities make better use of existing educational resources while
          identifying gaps that need to be addressed by government and
          community organizations.
        </p>
      </ProjectSection>

      <ProjectSection title="Key Features">
        <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
          <li>
            <strong className="text-black dark:text-white">
              Location-Based Discovery:
            </strong>{" "}
            Find educational programs, workshops, and resources near you
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Personalized Recommendations:
            </strong>{" "}
            Get suggestions based on your interests, skill level, and learning
            goals
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Provider Portal:
            </strong>{" "}
            Education providers can post programs and track engagement
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Community Impact Dashboard:
            </strong>{" "}
            Visualize education participation and identify underserved areas
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Offline Access:
            </strong>{" "}
            Download program information for areas with limited connectivity
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Multilingual Support:
            </strong>{" "}
            Content available in multiple languages to serve diverse communities
          </li>
        </ul>
      </ProjectSection>

      <ProjectSection title="Hackathon Experience">
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          Building Lynk during GovHack 2022 was an intensive 48-hour sprint. Our
          team of developers, designers, and a community education specialist
          worked together to create a functional prototype that addressed the
          challenge brief.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          Key challenges included:
        </p>
        <ul className="space-y-3 text-lg text-gray-700 dark:text-gray-300 list-disc list-inside">
          <li>
            Integrating multiple government datasets into a coherent experience
          </li>
          <li>Designing for accessibility and diverse user needs</li>
          <li>Building a mobile app from scratch in under 48 hours</li>
          <li>Creating a compelling pitch that demonstrated real community impact</li>
        </ul>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-6">
          Despite the time pressure, we delivered a polished prototype with core
          features working end-to-end, along with mockups showing the full
          vision for the platform.
        </p>
      </ProjectSection>

      <ProjectSection title="Technology Stack">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <p className="font-semibold text-black dark:text-white">Frontend</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              React Native, Expo
            </p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <p className="font-semibold text-black dark:text-white">Backend</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Node.js, Express
            </p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <p className="font-semibold text-black dark:text-white">Database</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              PostgreSQL, Firebase
            </p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <p className="font-semibold text-black dark:text-white">APIs</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Google Maps, Gov Data APIs
            </p>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="Impact & Recognition">
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          Lynk won 1st place at GovHack 2022, recognized for its innovative
          approach to community education access and its potential for real-world
          impact. The judges praised the app&apos;s user-centric design,
          technical execution, and clear demonstration of how it would address
          the challenge brief.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Following the hackathon, we were invited to present the concept to
          government stakeholders interested in piloting similar solutions for
          community education programs. While Lynk itself remains a hackathon
          project, the ideas and learnings from its development have influenced
          how we think about building accessible, community-focused applications.
        </p>
      </ProjectSection>
    </ProjectLayout>
  );
}
