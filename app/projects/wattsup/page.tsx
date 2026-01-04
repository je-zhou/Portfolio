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
      year="Currently in Beta"
      tags={["Mobile", "AI/ML", "Flutter", "Fitness"]}
      tableOfContents={tableOfContents}
    >
      <ProjectSection>
        <ProjectMedia
          src="https://mtmetamherv206qj.public.blob.vercel-storage.com/wattsup/Wattsup-Promo.mov"
          alt="WattsUp app demo"
          priority
        />
      </ProjectSection>

      <ProjectSection
        title="Overview"
        subtitle="An AI-powered cycling coach that analyzes your rides and provides personalized training insights"
      >
        <p className="mb-6">
          WattsUp is a mobile application that brings professional cycling
          coaching to everyone. Using advanced AI agents, the app analyzes your
          cycling data in real-time and provides actionable feedback to improve
          your performance.
        </p>
        <p>
          The app eliminates the manual work of copying ride data and creating
          workouts by automatically generating tailored training plans from an
          LLM and seamlessly uploading them to your preferred platform—Garmin,
          Wahoo, TrainerRoad, or Zwift. Get to work elevating your cycling with
          a tailor-made plan just for you, without needing to manually upload
          and create workouts on your favorite platforms or head unit.
        </p>
      </ProjectSection>

      <ProjectSection title="The Challenge">
        <p className="mb-6">
          Professional cycling coaching is expensive and not accessible to most
          cyclists. Meanwhile, existing fitness apps provide generic metrics but
          lack the personalized, contextual insights that a real coach would
          provide. Even when cyclists use LLMs for training advice, they face
          the tedious process of manually copying ride data and creating
          workouts on their training platforms.
        </p>
        <p>
          I set out to create an AI-powered coach that could analyze ride data,
          understand training patterns, and provide personalized coaching advice
          - all at a fraction of the cost of a human coach. Most importantly,
          the app needed to seamlessly integrate with existing platforms,
          automatically uploading tailored training plans so cyclists could
          focus on riding, not data entry.
        </p>
      </ProjectSection>

      <ProjectSection title="Key Features">
        <ul className="space-y-4">
          <li>
            <strong className="text-black dark:text-white">
              AI Ride Analysis:
            </strong>{" "}
            Real-time analysis of power, heart rate, and cadence data with
            intelligent insights and technique refinement tips
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Automated Workout Upload:
            </strong>{" "}
            Seamlessly saves AI-generated training plans directly to Garmin,
            Wahoo, TrainerRoad, or Zwift—eliminating manual workout creation
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Personalized Training Plans:
            </strong>{" "}
            Adaptive training recommendations tailored to your fitness level,
            goals, schedule, and progress
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Multi-Platform Integration:
            </strong>{" "}
            Syncs with Garmin, Wahoo, Zwift, TrainingPeaks, and TrainerRoad to
            consolidate all your training data in one place
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Natural Language Coaching:
            </strong>{" "}
            Discuss any ride with your AI coach and get instant, conversational
            feedback with persistent memory of your stats and goals
          </li>
        </ul>
      </ProjectSection>

      <ProjectSection title="Technology Stack">
        <p className="mb-6">
          Built with Flutter for cross-platform mobile development, the app
          leverages LangChain and large language models to provide intelligent
          coaching through a sophisticated AI agent architecture. Firebase
          handles backend services, while authorized developer access to Garmin
          and Wahoo APIs enables seamless workout synchronization across
          multiple training platforms.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <p className="font-semibold text-black dark:text-white">Mobile</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Flutter
            </p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <p className="font-semibold text-black dark:text-white">Backend</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Firebase
            </p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <p className="font-semibold text-black dark:text-white">AI/ML</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              LangChain, LLMs
            </p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <p className="font-semibold text-black dark:text-white">Integrations</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Garmin, Wahoo APIs
            </p>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="Impact & Results">
        <p className="mb-6">
          WattsUp is currently in beta testing with cyclists ranging from
          recreational riders to competitive athletes. The app is available on
          both iOS (via TestFlight) and Android (via Google Play), with a full
          mobile release planned soon.
        </p>
        <p>
          Early feedback has been overwhelmingly positive, with users
          appreciating the personalized insights, the natural conversational
          coaching experience, and especially the time saved by automated
          workout uploads to their preferred training platforms. The seamless
          integration with Garmin, Wahoo, and other platforms has proven to be a
          game-changer for cyclists who want AI-powered coaching without the
          manual overhead.
        </p>
      </ProjectSection>
    </ProjectLayout>
  );
}
