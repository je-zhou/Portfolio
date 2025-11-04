import ProjectLayout from "@/components/ProjectPage/ProjectLayout";
import ProjectSection from "@/components/ProjectPage/ProjectSection";
import ProjectMedia from "@/components/ProjectPage/ProjectMedia";

export default function AskMdPage() {
  const tableOfContents = [
    { id: "overview", title: "Overview", level: 2 },
    { id: "the-healthcare-documentation-problem", title: "The Healthcare Documentation Problem", level: 2 },
    { id: "key-features", title: "Key Features", level: 2 },
    { id: "how-it-works", title: "How It Works", level: 2 },
    { id: "hackathon-experience", title: "Hackathon Experience", level: 2 },
    { id: "technology-stack", title: "Technology Stack", level: 2 },
    { id: "impact-future-plans", title: "Impact & Future Plans", level: 2 },
  ];

  return (
    <ProjectLayout
      title="AskMd"
      subtitle="AI Native Medical Notes CMS"
      year="2024"
      tags={["Healthcare", "AI/ML", "NLP", "Hackathon - 4th Place"]}
      tableOfContents={tableOfContents}
    >
      <ProjectSection>
        <ProjectMedia
          src="/projects/askMd/AskMd Promo.mov"
          alt="AskMd demo"
          priority
        />
      </ProjectSection>

      <ProjectSection
        title="Overview"
        subtitle="An AI-powered content management system for medical documentation that understands medical terminology and context"
      >
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          AskMd is a specialized CMS designed for healthcare professionals to
          create, manage, and search medical documentation. Built at Medhack
          2024, where it placed 4th, AskMd uses natural language processing to
          understand medical context and provide intelligent documentation
          assistance.
        </p>
      </ProjectSection>

      <ProjectSection title="The Healthcare Documentation Problem">
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          Healthcare professionals spend countless hours on documentation, often
          using systems that don&apos;t understand medical terminology or context.
          This leads to:
        </p>
        <ul className="space-y-3 text-lg text-gray-700 dark:text-gray-300 list-disc list-inside">
          <li>Time wasted on repetitive documentation tasks</li>
          <li>Inconsistent note formatting across providers</li>
          <li>Difficulty finding relevant patient information quickly</li>
          <li>Increased risk of documentation errors</li>
        </ul>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-6">
          During our 24-hour hackathon, we aimed to create a solution that would
          streamline medical documentation while maintaining accuracy and
          compliance.
        </p>
      </ProjectSection>

      <ProjectSection title="Key Features">
        <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
          <li>
            <strong className="text-black dark:text-white">
              Voice-to-Text Transcription:
            </strong>{" "}
            Dictate notes naturally using medical terminology with high accuracy
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Smart Templates:
            </strong>{" "}
            AI-powered templates that adapt to different note types (SOAP, H&P,
            discharge summaries)
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Semantic Search:
            </strong>{" "}
            Find patient information by meaning, not just keywords
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Auto-Completion:
            </strong>{" "}
            Intelligent suggestions for diagnoses, medications, and procedures
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Quality Checks:
            </strong>{" "}
            Automated validation for completeness and consistency
          </li>
        </ul>
      </ProjectSection>

      <ProjectSection title="How It Works">
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          AskMd combines several AI technologies to create a seamless
          documentation experience:
        </p>
        <ol className="space-y-4 text-lg text-gray-700 dark:text-gray-300 list-decimal list-inside">
          <li>
            <strong className="text-black dark:text-white">
              Medical NLP:
            </strong>{" "}
            Specialized language models trained on medical text understand
            clinical terminology and context
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Entity Recognition:
            </strong>{" "}
            Automatically identifies and structures medical entities (symptoms,
            diagnoses, medications)
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Smart Formatting:
            </strong>{" "}
            Converts unstructured notes into properly formatted medical
            documentation
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Context Awareness:
            </strong>{" "}
            Understands patient history and suggests relevant information
          </li>
        </ol>
      </ProjectSection>

      <ProjectSection title="Hackathon Experience">
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          Building AskMd in 24 hours at Medhack 2024 was an intense but
          rewarding experience. Our team of four developers and a medical advisor
          worked through the night to create a functional prototype.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          Key challenges included:
        </p>
        <ul className="space-y-3 text-lg text-gray-700 dark:text-gray-300 list-disc list-inside">
          <li>Integrating multiple AI models within tight time constraints</li>
          <li>Ensuring HIPAA-compliant data handling</li>
          <li>Creating an intuitive UX for busy healthcare providers</li>
          <li>Balancing feature completeness with demo polish</li>
        </ul>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-6">
          Despite the challenges, we successfully demonstrated a working
          prototype that impressed the judges and earned us 4th place among 50+
          teams.
        </p>
      </ProjectSection>

      <ProjectSection title="Technology Stack">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <p className="font-semibold text-black dark:text-white">Frontend</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              React, TypeScript
            </p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <p className="font-semibold text-black dark:text-white">Backend</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Python, Flask
            </p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <p className="font-semibold text-black dark:text-white">AI/NLP</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              OpenAI, BioBERT
            </p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <p className="font-semibold text-black dark:text-white">Database</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              PostgreSQL
            </p>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="Impact & Future Plans">
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          The positive reception at Medhack validated the need for better medical
          documentation tools. Healthcare professionals who tested the prototype
          were particularly excited about the voice transcription and smart
          template features.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Post-hackathon, we&apos;re exploring partnerships with healthcare systems to
          pilot the platform. Future development will focus on HIPAA compliance
          certification, EHR integration, and expanding language model
          capabilities.
        </p>
      </ProjectSection>
    </ProjectLayout>
  );
}
