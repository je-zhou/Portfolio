import ProjectLayout from "@/components/ProjectPage/ProjectLayout";
import ProjectSection from "@/components/ProjectPage/ProjectSection";
import ProjectMedia from "@/components/ProjectPage/ProjectMedia";

export default function AskMdPage() {
  const tableOfContents = [
    { id: "overview", title: "Overview", level: 2 },
    {
      id: "the-healthcare-documentation-problem",
      title: "The Healthcare Documentation Problem",
      level: 2,
    },
    { id: "key-features", title: "Key Features", level: 2 },
    { id: "how-it-works", title: "How It Works", level: 2 },
    { id: "hackathon-experience", title: "Hackathon Experience", level: 2 },
    { id: "our-pitch", title: "Our Pitch", level: 2 },
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
          src="/projects/askMd/AskMd-Promo.mov"
          alt="AskMd demo"
          priority
        />
      </ProjectSection>

      <ProjectSection
        title="Overview"
        subtitle="An AI-powered content management system for medical documentation that understands medical terminology and context"
      >
        <p>
          AskMd is a specialised CMS designed for healthcare professionals to
          create, manage, and search medical documentation. Built at Medhack
          2024, where it placed 4th, AskMd uses natural language processing to
          understand medical context and provide intelligent documentation
          assistance.
        </p>
      </ProjectSection>

      <ProjectSection title="The Healthcare Documentation Problem">
        <p className="mb-6">
          Healthcare professionals spend countless hours on documentation, often
          using systems that don&apos;t understand medical terminology or
          context. This leads to:
        </p>
        <ul className="space-y-3 list-disc list-inside">
          <li>Time wasted on repetitive documentation tasks</li>
          <li>Inconsistent note formatting across providers</li>
          <li>Difficulty finding relevant patient information quickly</li>
          <li>Increased risk of documentation errors</li>
        </ul>
        <p className="mt-6">
          During our 1-week hackathon, we aimed to create a solution that would
          streamline medical documentation while maintaining accuracy and
          compliance.
        </p>
      </ProjectSection>

      <ProjectSection title="Key Features">
        <ul className="space-y-4">
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

        <ProjectMedia
          src="/projects/askMd/AskMd-Promo 2.mov"
          alt="AskMd key features demo"
        />
      </ProjectSection>

      <ProjectSection title="How It Works">
        <p className="mb-6">
          AskMd leverages cutting-edge AI technologies to create a seamless
          documentation experience:
        </p>
        <ol className="space-y-4 list-decimal list-inside">
          <li>
            <strong className="text-black dark:text-white">
              RAG (Retrieval-Augmented Generation):
            </strong>{" "}
            Combines retrieval of relevant medical documents with language model
            generation to provide accurate, context-aware responses
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Vector Stores:
            </strong>{" "}
            Medical documents and patient notes are embedded and stored in
            vector databases, enabling lightning-fast semantic search across
            thousands of documents
          </li>
          <li>
            <strong className="text-black dark:text-white">
              LangChain Integration:
            </strong>{" "}
            Orchestrates complex AI workflows, chaining together document
            processing, retrieval, and generation steps seamlessly
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Document OCR:
            </strong>{" "}
            Extracts text from scanned handwritten notes and PDFs, making legacy
            paper-based records searchable
          </li>
        </ol>
      </ProjectSection>

      <ProjectSection title="Hackathon Experience">
        <p className="mb-6">
          Building AskMd over 1 week at Medhack 2024 was an intense but
          rewarding experience.
        </p>
        <p className="mb-6">
          Key challenges included:
        </p>
        <ul className="space-y-3 list-disc list-inside">
          <li>
            Integrating RAG pipelines and vector stores within tight time
            constraints
          </li>
          <li>Ensuring HIPAA-compliant data handling</li>
          <li>Creating an intuitive UX for busy healthcare providers</li>
          <li>Balancing feature completeness with demo polish</li>
        </ul>
        <p className="mt-6">
          Despite the challenges, we successfully demonstrated a working
          prototype among 100+ teams.
        </p>

        <ProjectMedia
          src="/projects/askMd/experience.jpg"
          alt="AskMd hackathon experience"
        />
      </ProjectSection>

      <ProjectSection title="Our Pitch">
        <ProjectMedia
          src="/projects/askMd/pitch.mov"
          alt="AskMd pitch video"
          autoplay={false}
          loop={false}
        />

        {/* Collapsible pitch script */}
        <details className="group">
          <summary className="cursor-pointer list-none">
            <div className="flex items-center gap-2 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <svg
                className="w-5 h-5 transition-transform group-open:rotate-90"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <span className="font-semibold text-black dark:text-white">
                View Pitch Script
              </span>
            </div>
          </summary>
          <div className="mt-4 pl-4 border-l-2 border-gray-200 dark:border-gray-700 space-y-4">
            <p>
              Doctors are drowning in paperwork. Searching through patient
              notes, scanning PDFs, and digging through EMRs takes valuable time
              away from patient care.
            </p>
            <p>
              Our solution, AskMD is an AI-powered assistant that helps doctors
              instantly find key information from past patient notes. This saves
              them time they would have spent manually combing through lots of
              information.
            </p>
            <p>
              Lots of hospitals still rely on a paper filing system with
              handwritten notes which is incredibly time consuming to read
              through manually. AskMD includes a document OCR system so doctors
              can pull out information from scanned documents in seconds.
            </p>
            <p>
              Unlike cloud-based solutions, AskMD can run fully offline. This is
              great as sensitive health information never needs to leave the
              hospital network. No internet required, no data privacy risks—just
              a seamless, AI-powered workflow. We also have the ability to run a
              cloud based solution for less strict settings.
            </p>
            <p>
              AskMD uses data by integrating with existing EMR systems, making
              it a simple process to onboard users.
            </p>
            <p>
              We&apos;re targeting hospitals, clinics, and practitioners who
              work with lots of medical notes. Doctors shouldn&apos;t waste time
              digging through notes when we can do it for them. AskMD provides
              the data to help doctors make better decisions.
            </p>
          </div>
        </details>
      </ProjectSection>

      <ProjectSection title="Technology Stack">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <p className="font-semibold text-black dark:text-white">Frontend</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              React, TypeScript, NextJS, TailwindCSS
            </p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <p className="font-semibold text-black dark:text-white">Backend</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">NextJS</p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <p className="font-semibold text-black dark:text-white">AI/ML</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              LangChain, RAG, OpenAI
            </p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <p className="font-semibold text-black dark:text-white">
              Vector Store
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Supabase Vector, OpenAI Embeddings
            </p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <p className="font-semibold text-black dark:text-white">Database</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Supabase</p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <p className="font-semibold text-black dark:text-white">OCR</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Tesseract, Azure OCR
            </p>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="Impact & Future Plans">
        <p className="mb-6">
          The positive reception at Medhack validated the need for better
          medical documentation tools. Healthcare professionals who tested the
          prototype were particularly excited about the voice transcription and
          smart template features.
        </p>
        <p>
          While we didn&apos;t place in the top 3 and just barely missed out on
          the chance to pitch our idea to the judges, the experience was
          invaluable. We learned a tremendous amount about healthcare workflows,
          AI integration challenges, and the real needs of medical
          professionals. The project remains a meaningful exploration of how AI
          can transform healthcare documentation.
        </p>
      </ProjectSection>
    </ProjectLayout>
  );
}
