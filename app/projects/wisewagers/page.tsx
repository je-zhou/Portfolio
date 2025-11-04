import ProjectLayout from "@/components/ProjectPage/ProjectLayout";
import ProjectSection from "@/components/ProjectPage/ProjectSection";
import ProjectMedia from "@/components/ProjectPage/ProjectMedia";
import ProjectGrid from "@/components/ProjectPage/ProjectGrid";

export default function WiseWagersPage() {
  const tableOfContents = [
    { id: "overview", title: "Overview", level: 2 },
    { id: "the-challenge", title: "The Challenge", level: 2 },
    { id: "system-architecture", title: "System Architecture", level: 2 },
    { id: "key-components", title: "Key Components", level: 2 },
    { id: "machine-learning-models", title: "Machine Learning Models", level: 2 },
    { id: "api-integration", title: "API Integration", level: 2 },
    { id: "risk-management", title: "Risk Management", level: 2 },
    { id: "results-next-steps", title: "Results & Next Steps", level: 2 },
    { id: "technology-stack", title: "Technology Stack", level: 2 },
  ];

  return (
    <ProjectLayout
      title="WiseWagers"
      subtitle="Cloud Hosted Algorithmic Sports Betting Bot"
      year="2023 Season"
      tags={["Machine Learning", "Python", "AWS", "Data Science"]}
      tableOfContents={tableOfContents}
    >
      <ProjectSection>
        <ProjectMedia
          src="/projects/wisewagers/WiseWagers Promo.png"
          alt="WiseWagers dashboard"
          priority
        />
      </ProjectSection>

      <ProjectSection
        title="Overview"
        subtitle="An automated sports betting system that uses machine learning to identify profitable betting opportunities"
      >
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          WiseWagers is a sophisticated algorithmic trading system for sports
          betting. It analyzes historical data, current odds, and various
          statistical factors to identify betting opportunities with positive
          expected value, then automatically places bets through integrated APIs.
        </p>
      </ProjectSection>

      <ProjectSection title="The Challenge">
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          Sports betting markets are highly efficient, making it difficult to
          find consistent edges. Manual betting is time-consuming and prone to
          emotional decision-making, while most betting systems lack the
          sophistication to compete with professional operations.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          I set out to build a system that could process vast amounts of data,
          identify market inefficiencies, and execute bets automatically - all
          while maintaining strict risk management protocols.
        </p>
      </ProjectSection>

      <ProjectSection title="System Architecture">
        <ProjectMedia
          src="/projects/wisewagers/WiseWagers - Background.png"
          alt="System architecture diagram"
        />
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-6">
          The system is built on AWS infrastructure for scalability and
          reliability. It continuously ingests data from multiple sources,
          processes it through machine learning models, and executes trades
          through betting exchange APIs.
        </p>
      </ProjectSection>

      <ProjectSection title="Key Components">
        <ProjectGrid columns={2}>
          <ProjectMedia
            src="/projects/wisewagers/WiseWagers - 1.png"
            alt="Data collection pipeline"
            caption="Real-time data collection and processing"
          />
          <ProjectMedia
            src="/projects/wisewagers/WiseWagers - 2.png"
            alt="ML models"
            caption="Machine learning prediction models"
          />
          <ProjectMedia
            src="/projects/wisewagers/WiseWagers - 3.png"
            alt="Risk management"
            caption="Automated risk management system"
          />
          <ProjectMedia
            src="/projects/wisewagers/WiseWagers - 4.png"
            alt="Dashboard"
            caption="Real-time monitoring dashboard"
          />
        </ProjectGrid>
      </ProjectSection>

      <ProjectSection title="Machine Learning Models">
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          The system employs multiple ML models working in ensemble:
        </p>
        <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
          <li>
            <strong className="text-black dark:text-white">
              Gradient Boosting Models:
            </strong>{" "}
            Primary prediction models for game outcomes and point spreads
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Neural Networks:
            </strong>{" "}
            Deep learning models for complex pattern recognition
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Time Series Models:
            </strong>{" "}
            For capturing temporal patterns and momentum
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Ensemble Methods:
            </strong>{" "}
            Combining multiple models for robust predictions
          </li>
        </ul>
      </ProjectSection>

      <ProjectSection title="API Integration">
        <ProjectMedia
          src="/projects/wisewagers/WiseWagers - API.png"
          alt="API architecture"
        />
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-6">
          The system integrates with multiple sports data providers and betting
          exchanges through RESTful APIs. All trades are executed automatically
          with built-in error handling and failsafes.
        </p>
      </ProjectSection>

      <ProjectSection title="Risk Management">
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          Responsible risk management is at the core of WiseWagers:
        </p>
        <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
          <li>Maximum bet size limits based on confidence levels</li>
          <li>Kelly Criterion for optimal position sizing</li>
          <li>Daily and weekly loss limits</li>
          <li>Automatic system pause on suspicious patterns</li>
          <li>Comprehensive logging and monitoring</li>
        </ul>
      </ProjectSection>

      <ProjectSection title="Results & Next Steps">
        <ProjectMedia
          src="/projects/wisewagers/WiseWagers - Next Steps.png"
          alt="Future roadmap"
        />
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-6">
          The system has been running successfully in production, showing
          consistent positive returns over the testing period. Future development
          includes expanding to additional sports, improving model accuracy with
          more sophisticated features, and building out the monitoring dashboard.
        </p>
      </ProjectSection>

      <ProjectSection title="Technology Stack">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <p className="font-semibold text-black dark:text-white">Backend</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Python, FastAPI
            </p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <p className="font-semibold text-black dark:text-white">ML/Data</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              scikit-learn, XGBoost
            </p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <p className="font-semibold text-black dark:text-white">
              Infrastructure
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              AWS, Docker
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
    </ProjectLayout>
  );
}
