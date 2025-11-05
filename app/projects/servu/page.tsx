import ProjectLayout from "@/components/ProjectPage/ProjectLayout";
import ProjectSection from "@/components/ProjectPage/ProjectSection";
import ProjectMedia from "@/components/ProjectPage/ProjectMedia";

export default function ServUPage() {
  const tableOfContents = [
    { id: "overview", title: "Overview", level: 2 },
    { id: "the-problem", title: "The Problem", level: 2 },
    { id: "how-it-works", title: "How It Works", level: 2 },
    { id: "key-features", title: "Key Features", level: 2 },
    { id: "technology-stack", title: "Technology Stack", level: 2 },
    { id: "impact", title: "Impact", level: 2 },
  ];

  return (
    <ProjectLayout
      title="ServU"
      subtitle="RAG-based Chatbot Plugin"
      year="H2 2024"
      tags={["AI/ML", "RAG", "Chrome Extension", "Customer Support"]}
      tableOfContents={tableOfContents}
    >
      <ProjectSection>
        <ProjectMedia
          src="/projects/servu/Servu-Promo.mov"
          alt="ServU chatbot demo"
          priority
        />
      </ProjectSection>

      <ProjectSection
        title="Overview"
        subtitle="An intelligent chatbot plugin that provides context-aware customer support using RAG technology"
      >
        <p>
          ServU is a Chrome extension that integrates with websites to provide
          intelligent, context-aware customer support. By leveraging Retrieval
          Augmented Generation (RAG), it can answer questions based on a
          company&apos;s documentation, knowledge base, and historical support
          data.
        </p>
      </ProjectSection>

      <ProjectSection title="The Problem">
        <p className="mb-6">
          Traditional chatbots often provide generic, unhelpful responses
          because they lack access to company-specific knowledge. Meanwhile,
          customers waste time searching through documentation or waiting for
          human support agents.
        </p>
        <p>
          I wanted to build a solution that could understand the context of a
          user&apos;s question and retrieve relevant information from a
          company&apos;s knowledge base to provide accurate, helpful answers
          instantly.
        </p>
      </ProjectSection>

      <ProjectSection title="How It Works">
        <ol className="space-y-4 list-decimal list-inside">
          <li>
            <strong className="text-black dark:text-white">
              Knowledge Ingestion:
            </strong>{" "}
            The system ingests and indexes company documentation, FAQs, and
            support tickets
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Semantic Search:
            </strong>{" "}
            When a user asks a question, the system performs semantic search to
            find relevant context
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Answer Generation:
            </strong>{" "}
            A language model uses the retrieved context to generate a natural,
            accurate response
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Continuous Learning:
            </strong>{" "}
            The system learns from interactions to improve future responses
          </li>
        </ol>
      </ProjectSection>

      <ProjectSection title="Key Features">
        <ul className="space-y-4">
          <li>
            <strong className="text-black dark:text-white">
              Context-Aware Responses:
            </strong>{" "}
            Understands the page context and user intent to provide relevant
            answers
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Multi-Source Knowledge:
            </strong>{" "}
            Retrieves information from docs, FAQs, previous tickets, and more
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Easy Integration:
            </strong>{" "}
            Simple Chrome extension installation with minimal setup required
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Analytics Dashboard:
            </strong>{" "}
            Track common questions, user satisfaction, and knowledge gaps
          </li>
        </ul>
      </ProjectSection>

      <ProjectSection title="Technology Stack">
        <p className="mb-6">
          Built with modern web technologies and state-of-the-art AI models,
          ServU combines a Chrome extension frontend with a powerful RAG
          backend. The system uses vector embeddings for semantic search and GPT
          models for natural language generation.
        </p>
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
              Python, FastAPI
            </p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <p className="font-semibold text-black dark:text-white">AI/ML</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              OpenAI, Pinecone
            </p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <p className="font-semibold text-black dark:text-white">Database</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              MongoDB, Redis
            </p>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="Impact">
        <p>
          ServU has been deployed with several pilot customers, showing a 60%
          reduction in support ticket volume and a 4.5/5 user satisfaction
          rating. The system successfully handles common questions while
          seamlessly escalating complex issues to human agents.
        </p>
      </ProjectSection>
    </ProjectLayout>
  );
}
