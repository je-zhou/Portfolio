import ProjectLayout from "@/components/ProjectPage/ProjectLayout";
import ProjectSection from "@/components/ProjectPage/ProjectSection";
import ProjectMedia from "@/components/ProjectPage/ProjectMedia";

export default function WattsUpPage() {
  const tableOfContents = [
    { id: "overview", title: "Overview", level: 2 },
    { id: "the-challenge", title: "The Challenge", level: 2 },
    { id: "key-features", title: "Key Features", level: 2 },
    { id: "technology-stack", title: "Technology Stack", level: 2 },
    { id: "impact-results", title: "Impact & Results", level: 2 },
  ];

  return (
    <ProjectLayout
      title="WattsUp"
      subtitle="Agentic Cycling Coach Mobile Application"
      year="H2 2025"
      tags={["Mobile", "AI/ML", "React Native", "Fitness"]}
      tableOfContents={tableOfContents}
    >
      <ProjectSection>
        <ProjectMedia
          src="/projects/wattsup/Wattsup-Promo.mov"
          alt="WattsUp app demo"
          priority
        />
      </ProjectSection>

      <ProjectSection
        title="Overview"
        subtitle="An AI-powered cycling coach that analyzes your rides and provides personalized training insights"
      >
        <p>
          WattsUp is a mobile application that brings professional cycling
          coaching to everyone. Using advanced AI agents, the app analyzes your
          cycling data in real-time and provides actionable feedback to improve
          your performance.
        </p>
      </ProjectSection>

      <ProjectSection title="The Challenge">
        <p className="mb-6">
          Professional cycling coaching is expensive and not accessible to most
          cyclists. Meanwhile, existing fitness apps provide generic metrics but
          lack the personalized, contextual insights that a real coach would
          provide.
        </p>
        <p>
          I set out to create an AI-powered coach that could analyze ride data,
          understand training patterns, and provide personalized coaching advice
          - all at a fraction of the cost of a human coach.
        </p>
      </ProjectSection>

      <ProjectSection title="Key Features">
        <ul className="space-y-4">
          <li>
            <strong className="text-black dark:text-white">
              AI Ride Analysis:
            </strong>{" "}
            Real-time analysis of power, heart rate, and cadence data with
            intelligent insights
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Personalized Training Plans:
            </strong>{" "}
            Adaptive training recommendations based on your fitness level and
            goals
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Performance Tracking:
            </strong>{" "}
            Comprehensive metrics and visualizations to track your progress over
            time
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Natural Language Coaching:
            </strong>{" "}
            Ask questions and get coaching advice in natural conversation
          </li>
        </ul>
      </ProjectSection>

      <ProjectSection title="Technology Stack">
        <p className="mb-6">
          Built with React Native for cross-platform mobile development, the app
          leverages a sophisticated AI agent architecture to provide intelligent
          coaching. The backend uses large language models fine-tuned on cycling
          training data to understand context and provide relevant advice.
        </p>
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
            <p className="font-semibold text-black dark:text-white">AI/ML</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              OpenAI, LangChain
            </p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <p className="font-semibold text-black dark:text-white">Database</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              PostgreSQL, Redis
            </p>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="Impact & Results">
        <p>
          WattsUp is currently in beta testing with a group of cyclists ranging
          from recreational riders to competitive athletes. Early feedback has
          been overwhelmingly positive, with users appreciating the personalized
          insights and the natural, conversational coaching experience.
        </p>
      </ProjectSection>
    </ProjectLayout>
  );
}
