import ProjectLayout from "@/components/ProjectPage/ProjectLayout";
import ProjectSection from "@/components/ProjectPage/ProjectSection";
import ProjectMedia from "@/components/ProjectPage/ProjectMedia";

export default function CourtCoveragePage() {
  const tableOfContents = [
    { id: "overview", title: "Overview", level: 2 },
    { id: "the-vision", title: "The Vision", level: 2 },
    { id: "key-features", title: "Key Features", level: 2 },
    { id: "technical-approach", title: "Technical Approach", level: 2 },
    { id: "technology-stack", title: "Technology Stack", level: 2 },
    { id: "current-progress", title: "Current Progress", level: 2 },
  ];

  return (
    <ProjectLayout
      title="CourtCoverage"
      subtitle="Volleyball Computer Vision for Analytics and Stat Tracking"
      year="Under Development"
      tags={["Computer Vision", "AI/ML", "Sports Analytics", "Python"]}
      tableOfContents={tableOfContents}
    >
      <ProjectSection>
        <ProjectMedia
          src="/projects/courtcoverage/CourtCoverage-Promo.mov"
          alt="CourtCoverage demo"
          priority
        />
      </ProjectSection>

      <ProjectSection
        title="Overview"
        subtitle="Bringing professional-grade volleyball analytics to coaches and players through computer vision"
      >
        <p>
          CourtCoverage is an AI-powered volleyball analytics system that uses
          computer vision to automatically track players, ball movement, and
          game events. The system provides coaches and players with detailed
          statistics and insights that were previously only available to
          professional teams with dedicated video analysts.
        </p>
      </ProjectSection>

      <ProjectSection title="The Vision">
        <p className="mb-6">
          Current volleyball analytics rely heavily on manual video review and
          stat tracking, which is time-consuming and prone to human error. Even
          when stats are tracked, they often lack the spatial context and
          detailed movement patterns that coaches need to improve team
          performance.
        </p>
        <p>
          CourtCoverage aims to democratize access to advanced volleyball
          analytics by automatically extracting insights from game footage,
          making professional-level analysis accessible to teams at all levels.
        </p>
      </ProjectSection>

      <ProjectSection title="Key Features">
        <ul className="space-y-4">
          <li>
            <strong className="text-black dark:text-white">
              Player Tracking:
            </strong>{" "}
            Real-time tracking of all players on court with position heatmaps
            and movement patterns
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Ball Trajectory Analysis:
            </strong>{" "}
            3D reconstruction of ball flight paths for serve and spike analysis
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Automatic Event Detection:
            </strong>{" "}
            Recognizes kills, digs, blocks, and other key events without manual
            tagging
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Formation Analysis:
            </strong>{" "}
            Identifies team formations and rotation patterns throughout the
            match
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Performance Metrics:
            </strong>{" "}
            Comprehensive statistics including attack efficiency, defensive
            coverage, and more
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Highlight Generation:
            </strong>{" "}
            Automatically creates highlight reels of key plays and moments
          </li>
        </ul>
      </ProjectSection>

      <ProjectSection title="Technical Approach">
        <ol className="space-y-4 list-decimal list-inside">
          <li>
            <strong className="text-black dark:text-white">
              Court Detection & Homography:
            </strong>{" "}
            Automatically detects court boundaries and establishes perspective
            transformation for accurate spatial measurements
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Multi-Object Tracking:
            </strong>{" "}
            Uses state-of-the-art deep learning models (YOLOv8, ByteTrack) to
            track players and ball across frames
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Action Recognition:
            </strong>{" "}
            Temporal convolutional networks identify volleyball-specific actions
            and events
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Data Pipeline:
            </strong>{" "}
            Processes raw video through detection, tracking, and analysis stages
            to produce structured data
          </li>
        </ol>
      </ProjectSection>

      <ProjectSection title="Technology Stack">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <p className="font-semibold text-black dark:text-white">
              Computer Vision
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              OpenCV, YOLOv8
            </p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <p className="font-semibold text-black dark:text-white">ML/DL</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              PyTorch, TensorFlow
            </p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <p className="font-semibold text-black dark:text-white">Backend</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Python, FastAPI
            </p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <p className="font-semibold text-black dark:text-white">
              Data Processing
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              NumPy, Pandas
            </p>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="Current Progress">
        <p className="mb-6">
          The core computer vision pipeline is currently in development. Player
          detection and tracking models have been trained and tested on
          volleyball footage, with promising results. The system can reliably
          detect players and track their movement across most camera angles.
        </p>
        <p>
          Current development focus is on improving ball tracking accuracy in
          challenging lighting conditions and implementing the action
          recognition system for automatic event detection. The MVP will focus
          on basic stat tracking and position heatmaps before expanding to more
          advanced analytics features.
        </p>
      </ProjectSection>
    </ProjectLayout>
  );
}
