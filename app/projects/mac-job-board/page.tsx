import ProjectLayout from "@/components/ProjectPage/ProjectLayout";
import ProjectSection from "@/components/ProjectPage/ProjectSection";
import ProjectMedia from "@/components/ProjectPage/ProjectMedia";

export default function MacJobBoardPage() {
  const tableOfContents = [
    { id: "overview", title: "Overview", level: 2 },
    { id: "the-problem", title: "The Problem", level: 2 },
    { id: "the-solution", title: "The Solution", level: 2 },
    { id: "how-it-works", title: "How It Works", level: 2 },
    {
      id: "technical-implementation",
      title: "Technical Implementation",
      level: 2,
    },
    { id: "technology-stack", title: "Technology Stack", level: 2 },
    { id: "launch-analytics", title: "Launch Analytics", level: 2 },
    { id: "impact-results", title: "Impact & Results", level: 2 },
  ];

  return (
    <ProjectLayout
      title="MAC Job Board"
      subtitle="AI-Powered Job Aggregator for the Southern Hemisphere's Largest Student-Led Coding Club"
      year="H1 2025"
      tags={[
        "Web Development",
        "Next.js",
        "Go",
        "AI/ML",
        "Web Scraping",
        "Azure",
      ]}
      tableOfContents={tableOfContents}
    >
      <ProjectSection>
        <ProjectMedia
          src="https://mtmetamherv206qj.public.blob.vercel-storage.com/mac-job-board/MAC-Job-Board-Promo.png"
          alt="MAC Job Board interface"
          priority
        />
      </ProjectSection>

      <ProjectSection
        id="overview"
        title="Overview"
        subtitle="Aggregating Australian tech jobs for 100,000+ students"
      >
        <p className="mb-6">
          The MAC Job Board is an AI-powered job aggregation platform built for
          the Monash Association of Coding (MAC)—the largest student-led coding
          club in the Southern Hemisphere with over 100,000 followers across all
          social media platforms. We built a custom scraper in Go that
          automatically collects publicly available job data daily from various
          APIs and websites, then presents it through a lightning-fast Next.js
          frontend with intelligent AI-powered filtering.
        </p>
        <p>
          In just one week since launch, we recorded over 2.2k active users with
          10k page visits, achieving a Lighthouse performance score of 96. The
          platform helps Australian IT students find and track tech
          opportunities without needing to filter through multiple job-seeking
          websites themselves.
        </p>
      </ProjectSection>

      <ProjectSection id="the-problem" title="The Problem">
        <p className="mb-6">
          For Australian IT students looking for internships and graduate roles,
          the job search process is exhausting. You have to check Seek,
          LinkedIn, Indeed, Grad Connection, Prosple, company career pages, and
          countless other platforms daily. Each site has different filters,
          different formats, and you end up spending hours just trying to find
          relevant opportunities.
        </p>
        <p className="mb-6">
          MAC has a massive community of students actively job hunting, but they
          were all experiencing this same pain. Jobs were also scattered across
          Discord messages, email chains, and social media posts from our
          sponsor companies like Atlassian and Jane Street. Students were
          missing opportunities simply because they didn&apos;t check the right
          platform at the right time.
        </p>
        <p>
          We needed a centralized solution that would automatically aggregate
          relevant tech jobs from across the internet, filter them specifically
          for our Australian student audience, and present them in one clean,
          fast, easy-to-use interface.
        </p>
      </ProjectSection>

      <ProjectSection
        id="the-solution"
        title="The Solution (Automated Job Aggregation + AI Filtering)"
      >
        <p className="mb-6">
          We built a two-part system: a Go-based scraper that runs daily to
          collect job data, and a Next.js frontend that presents it all in a
          blazingly fast, beautifully designed interface.
        </p>
        <p className="mb-6">
          The scraper uses various APIs and web scraping frameworks to pull
          publicly available job listings from major Australian job sites,
          company career pages, and sponsor postings. We specifically target
          tech roles relevant to students: internships, graduate programs,
          entry-level positions, and student opportunities.
        </p>
        <p className="mb-6">
          On the frontend, we use AI to enhance the accuracy of job listings and
          provide smart filtering that actually understands what students are
          looking for. Instead of basic keyword matching, the system can
          understand context and role requirements to surface the most relevant
          opportunities.
        </p>
        <p>
          The result is a platform where students can browse hundreds of
          curated, relevant tech jobs in one place, with powerful filters and a
          user experience that makes job hunting actually enjoyable. No more
          tab-hopping between different sites.
        </p>
      </ProjectSection>

      <ProjectSection id="how-it-works" title="How It Works">
        <ol className="space-y-4 list-decimal list-inside">
          <li>
            <strong className="text-black dark:text-white">
              Daily Data Collection:
            </strong>{" "}
            Our Go scraper runs automated jobs to fetch listings from multiple
            sources using APIs and web scraping frameworks
          </li>
          <li>
            <strong className="text-black dark:text-white">
              AI Processing:
            </strong>{" "}
            Job listings are processed through AI models to enhance accuracy,
            categorize roles, and extract relevant skills and requirements
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Smart Filtering:
            </strong>{" "}
            Students can filter by role type, location, company, skills, and
            more—with AI helping to match context beyond simple keywords
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Lightning-Fast UI:
            </strong>{" "}
            Built with Next.js Server Components and Server Actions for instant
            page loads and snappy interactions (Lighthouse score: 96)
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Sponsor Integration:
            </strong>{" "}
            Featured listings from club sponsors like Atlassian and Jane Street
            get highlighted visibility for our community
          </li>
        </ol>
      </ProjectSection>

      <ProjectSection
        id="technical-implementation"
        title="Technical Implementation"
      >
        <p className="mb-6">
          The architecture is split between a robust Go backend for data
          collection and a high-performance Next.js frontend. Here&apos;s how we
          achieved a Lighthouse score of 96 while handling thousands of job
          listings:
        </p>
        <ol className="space-y-4 list-decimal list-inside">
          <li>
            <strong className="text-black dark:text-white">
              Go Scraper & Data Pipeline:
            </strong>{" "}
            Custom-built scraper using Go for high performance and concurrency.
            Uses various APIs and web scraping frameworks to collect publicly
            available job data daily, with error handling and retry logic for
            reliability
          </li>
          <li>
            <strong className="text-black dark:text-white">
              AI-Enhanced Processing:
            </strong>{" "}
            Job listings are processed through AI models to improve accuracy,
            standardize formats, extract skills, and provide intelligent
            categorization—making filtering far more effective than simple
            keyword matching
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Next.js Server Components:
            </strong>{" "}
            We heavily utilize Server Components and Server Actions to minimize
            client-side JavaScript and achieve incredibly fast page loads. Most
            data fetching and processing happens on the server for optimal
            performance
          </li>
          <li>
            <strong className="text-black dark:text-white">
              TypeScript & Tailwind:
            </strong>{" "}
            Full TypeScript for type safety across the codebase, with Tailwind
            CSS for rapid UI development and consistent design. Responsive
            across all device sizes
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Microsoft Azure Infrastructure:
            </strong>{" "}
            Thanks to Microsoft Azure Communities&apos; non-profit grant, we
            power our servers and AI processing on Azure, giving us the compute
            resources needed to serve thousands of users reliably
          </li>
        </ol>
      </ProjectSection>

      <ProjectSection id="technology-stack" title="Technology Stack">
        <p className="mb-6">
          The platform combines the performance of Go for backend data
          processing with the speed and developer experience of modern Next.js
          for the frontend. We prioritized technologies that would scale with
          our growing user base.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <p className="font-semibold text-black dark:text-white">Frontend</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Next.js, React, TypeScript, Tailwind
            </p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <p className="font-semibold text-black dark:text-white">Scraper</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Go, Web Scraping Frameworks
            </p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <p className="font-semibold text-black dark:text-white">AI/ML</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              AI Models for Job Processing
            </p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <p className="font-semibold text-black dark:text-white">
              Infrastructure
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Microsoft Azure
            </p>
          </div>
        </div>
        <p className="mt-6">
          The job board is live at{" "}
          <a
            href="https://jobs.monashcoding.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            jobs.monashcoding.com
          </a>
          , serving thousands of students across Australia.
        </p>
      </ProjectSection>

      <ProjectSection
        id="launch-analytics"
        title="Launch Analytics (The Numbers Speak for Themselves)"
      >
        <p className="mb-6">
          We launched quietly with just an announcement to our community, no
          paid marketing, no aggressive promotion. The organic adoption blew us
          away.
        </p>
        <ProjectMedia
          src="https://mtmetamherv206qj.public.blob.vercel-storage.com/mac-job-board/MAC-Job-Board-Analytics.jpg"
          alt="Launch week analytics showing 2.2k active users and 10k page views"
          caption="First week analytics: 2.2k active users, 10k page views"
        />
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg border-l-4 border-blue-600 dark:border-blue-400">
            <p className="text-3xl font-bold text-black dark:text-white mb-2">
              2.2k
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Active users in first 7 days
            </p>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg border-l-4 border-green-600 dark:border-green-400">
            <p className="text-3xl font-bold text-black dark:text-white mb-2">
              10k
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Page views in launch week
            </p>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg border-l-4 border-purple-600 dark:border-purple-400">
            <p className="text-3xl font-bold text-black dark:text-white mb-2">
              96
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Lighthouse performance score
            </p>
          </div>
        </div>
        <ProjectMedia
          src="https://mtmetamherv206qj.public.blob.vercel-storage.com/mac-job-board/MAC-Job-Board-Presentation.jpg"
          alt="Project presentation showcasing the job board platform"
          caption="Platform overview and key features"
        />
      </ProjectSection>

      <ProjectSection id="impact-results" title="Impact & Results">
        <p className="mb-6">
          The reception from the MAC community has been incredible. Students
          finally have a centralized place to find tech opportunities without
          spending hours filtering through irrelevant listings on multiple
          platforms. The AI-powered filtering genuinely works—students are
          finding roles that match their skills and interests much faster than
          traditional job boards.
        </p>
        <p className="mb-6">
          For our sponsor companies like Atlassian and Jane Street, the platform
          provides a direct channel to reach a highly engaged, tech-savvy
          student audience. They can get their graduate and internship
          opportunities in front of thousands of qualified candidates who are
          actively job hunting.
        </p>
        <p>
          This is just the beginning. The projects team is committed to
          continuously improving the job board—adding more sources, refining the
          AI filtering, and building features the community actually wants. The
          platform is live, actively maintained, and helping thousands of
          Australian students land their dream tech roles.
        </p>
      </ProjectSection>
    </ProjectLayout>
  );
}
