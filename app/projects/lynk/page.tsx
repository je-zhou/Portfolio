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
      tags={["Mobile", "Education", "Flutter", "GovHack - 1st Place"]}
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
        subtitle="Connecting students with life skills, mentors, and opportunities"
      >
        <p className="mb-6">
          Lynk is a mobile application developed for GovHack 2022 that helps
          students adapt to life after school by connecting them with events in
          their local community to learn essential life skills like investing,
          doing laundry, cooking, and other skills that often aren&apos;t taught
          in school. This is particularly important in rural areas where such
          resources may be limited.
        </p>
        <ProjectMedia
          src="/projects/lynk/Lynk-Spec.png"
          alt="Lynk feature specifications"
        />
      </ProjectSection>

      <ProjectSection title="The Challenge">
        <p className="mb-6">
          Students graduating from school often lack essential life skills that
          aren&apos;t traditionally taught in the classroom. This gap is
          particularly pronounced in rural and regional areas where access to
          practical life skills education, mentorship, and career opportunities
          is limited. Young adults face:
        </p>
        <ul className="space-y-3 list-disc list-inside">
          <li>Limited access to practical life skills workshops and events</li>
          <li>
            Difficulty connecting with mentors and alumni from their schools
          </li>
          <li>
            Fragmented information about local job opportunities and career
            resources
          </li>
          <li>
            No centralized platform to discover government-sponsored programs
            and community events
          </li>
        </ul>
        <p className="mt-6">
          The GovHack challenge asked teams to create innovative solutions that
          would help students transition successfully from school to independent
          life, particularly in underserved communities.
        </p>
      </ProjectSection>

      <ProjectSection title="Our Solution">
        <p className="mb-6">
          Lynk combines the best features of popular platforms into one
          comprehensive mobile app designed specifically for students
          transitioning to independent life. Drawing inspiration from Meetup for
          discovering local events, LinkedIn for connecting with mentors and
          alumni, and traditional job boards for finding opportunities, Lynk
          creates a unified platform tailored to students&apos; needs.
        </p>
        <p>
          The app prioritizes government-sponsored programs and uses
          location-based services to show relevant opportunities nearby. By
          centralizing life skills events, mentorship connections, and local job
          opportunities in one accessible platform, Lynk empowers students to
          build the skills and networks they need for success after school.
        </p>
      </ProjectSection>

      <ProjectSection title="Key Features">
        <ul className="space-y-4 mb-6">
          <li>
            <strong className="text-black dark:text-white">
              Local Event Discovery:
            </strong>{" "}
            Find life skills workshops and community events in your area, with
            priority given to government-sponsored programs. Learn practical
            skills like investing, cooking, doing laundry, and other essential
            life competencies that aren&apos;t typically taught in school.
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Alumni & Mentor Network:
            </strong>{" "}
            Connect and chat with school alumni to find mentors who can provide
            guidance, share experiences, and help navigate life after school.
            Build meaningful relationships with people who understand your
            journey.
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Job Board & Opportunities:
            </strong>{" "}
            Browse jobs and local opportunities tailored to your interests and
            industry. Discover career paths, internships, and entry-level
            positions in your area to kickstart your professional journey.
          </li>
        </ul>
        <ProjectMedia
          src="/projects/lynk/Lynk-Snippets.png"
          alt="Lynk app snippets"
        />
      </ProjectSection>

      <ProjectSection title="Hackathon Experience">
        <p className="mb-6">
          Building Lynk during GovHack 2022 was an intensive 72-hour sprint. Our
          team of developers, designers, and a community education specialist
          worked together to create a functional prototype that addressed the
          challenge brief.
        </p>
        <ProjectMedia
          src="/projects/lynk/Lynk-Experience.png"
          alt="Lynk hackathon experience"
        />
        <p className="mb-6 mt-6">
          Key challenges included:
        </p>
        <ul className="space-y-3 list-disc list-inside">
          <li>
            Integrating multiple government datasets into a coherent experience
          </li>
          <li>Designing for accessibility and diverse user needs</li>
          <li>Building a mobile app from scratch in under 72 hours</li>
          <li>
            Creating a compelling pitch that demonstrated real community impact
          </li>
        </ul>
        <p className="mt-6">
          Despite the time pressure, we delivered a polished prototype with core
          features working end-to-end, along with mockups showing the full
          vision for the platform.
        </p>
      </ProjectSection>

      <ProjectSection title="Technology Stack">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <p className="font-semibold text-black dark:text-white">Frontend</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Flutter</p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <p className="font-semibold text-black dark:text-white">Backend</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Firebase</p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <p className="font-semibold text-black dark:text-white">Database</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Firebase</p>
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
        <p className="mb-6">
          Lynk won 1st place at GovHack 2022, recognized for its innovative
          approach to community education access and its potential for
          real-world impact. The judges praised the app&apos;s user-centric
          design, technical execution, and clear demonstration of how it would
          address the challenge brief.
        </p>
        <p className="mt-6">
          Following the hackathon, we were invited to present the concept to
          government stakeholders interested in piloting similar solutions for
          community education programs. While Lynk itself remains a hackathon
          project, the ideas and learnings from its development have influenced
          how we think about building accessible, community-focused
          applications.
        </p>
      </ProjectSection>
    </ProjectLayout>
  );
}
