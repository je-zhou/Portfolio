import ProjectLayout from "@/components/ProjectPage/ProjectLayout";
import ProjectSection from "@/components/ProjectPage/ProjectSection";
import ProjectMedia from "@/components/ProjectPage/ProjectMedia";

export default function ServUPage() {
  const tableOfContents = [
    { id: "overview", title: "Overview", level: 2 },
    { id: "the-problem", title: "The Problem", level: 2 },
    { id: "the-solution", title: "The Solution", level: 2 },
    { id: "how-it-works", title: "How It Works", level: 2 },
    { id: "the-dashboard", title: "The Dashboard", level: 2 },
    { id: "installation", title: "Installation", level: 2 },
    { id: "technology-stack", title: "Technology Stack", level: 2 },
    { id: "future-plans", title: "What's Next", level: 2 },
  ];

  return (
    <ProjectLayout
      title="ServU"
      subtitle="AI Chatbots for Everyone (No Code Required)"
      year="H2 2024"
      tags={["AI/ML", "RAG", "Next.js", "Supabase", "NPM Package", "SaaS"]}
      tableOfContents={tableOfContents}
    >
      <ProjectSection>
        <ProjectMedia
          src="https://mtmetamherv206qj.public.blob.vercel-storage.com/servu/Servu-Promo.mov"
          alt="ServU chatbot demo"
          priority
        />
      </ProjectSection>

      <ProjectSection
        id="overview"
        title="Overview"
        subtitle="Making intelligent chatbots accessible to founders and businesses who can't (or don't want to) code"
      >
        <p>
          ServU is a platform that lets anyone drop an intelligent AI chatbot
          onto their website with just a few lines of code—or even just a CDN
          script tag. No AI expertise required, no complex setup, just install
          an NPM package or copy-paste some JavaScript and you&apos;re live.
          Behind the scenes, it uses RAG (Retrieval Augmented Generation) with
          vector databases to make chatbots that actually know your business,
          support ticketing to escalate to real humans when needed, and Groq for
          lightning-fast responses that don&apos;t make users wait.
        </p>
      </ProjectSection>

      <ProjectSection id="the-problem" title="The Problem">
        <p className="mb-6">
          Every business wants AI chatbots now. The problem? Most solutions
          require you to be a developer, understand embeddings and vector
          databases, set up your own infrastructure, and somehow integrate it
          all with your website. For low-code founders or business owners who
          just want to improve their customer support, that&apos;s way too much
          friction.
        </p>
        <p className="mb-6">
          And even when you do get a chatbot running, most of them give generic
          responses that frustrate customers more than they help. They
          don&apos;t know your products, your documentation, your specific
          business context. Customers end up waiting for human support anyway.
        </p>
        <p>
          I wanted to build something that solved both problems: make it stupid
          easy to install, and make the bots actually useful by connecting them
          to your real business knowledge.
        </p>
      </ProjectSection>

      <ProjectSection id="the-solution" title="The Solution (It's Really Just a Few Lines of Code)">
        <p className="mb-6">
          ServU gives you a complete chatbot platform without requiring any AI
          knowledge. You create and configure your chatbot through a web
          dashboard, then install it on your site with either an NPM package or
          a simple script tag. That&apos;s it.
        </p>
        <p className="mb-6">
          Behind the scenes, it handles all the complex stuff: OpenAI embeddings
          for semantic understanding, vector database storage for your business
          knowledge, Groq for fast inference, and Supabase + AWS for reliable
          backend infrastructure. Your chatbot learns from the documentation and
          data you provide, so it actually gives relevant, informed answers
          instead of hallucinating nonsense.
        </p>
        <p>
          When the bot can&apos;t help, it can create support tickets or refer
          customers to real humans. Everything is tracked so you can follow up
          on queries and continuously improve your support.
        </p>
      </ProjectSection>

      <ProjectSection id="how-it-works" title="How It Works">
        <ol className="space-y-4 list-decimal list-inside">
          <li>
            <strong className="text-black dark:text-white">
              Create Your Bot:
            </strong>{" "}
            Log into the web dashboard, create a chatbot, and upload your
            business documentation, FAQs, or knowledge base
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Configure Behavior:
            </strong>{" "}
            Use custom instructions to shape how the bot responds, enable
            ticketing features, customize colors and appearance
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Knowledge Processing:
            </strong>{" "}
            The system creates OpenAI embeddings from your data and stores them
            in a vector database for semantic retrieval
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Install on Your Site:
            </strong>{" "}
            Install via NPM (
            <code className="text-sm bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400 px-2 py-1 rounded font-mono">
              npm install @servu-ai/servu-chat
            </code>
            ) or just add a script tag for vanilla JavaScript
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Lightning-Fast Responses:
            </strong>{" "}
            When users ask questions, the system retrieves relevant context and
            uses Groq for near-instant AI responses
          </li>
        </ol>
      </ProjectSection>

      <ProjectSection id="the-dashboard" title="The Dashboard (Where the Magic Happens)">
        <ProjectMedia
          src="https://mtmetamherv206qj.public.blob.vercel-storage.com/servu/Create Butler.png"
          alt="ServU chatbot creation interface"
          caption="Creating a new chatbot butler"
        />
        /
        <p className="mt-6 mb-6">
          The web dashboard is where you manage everything. Create new chatbots
          (we call them &quot;butlers&quot; because it sounds fancier),
          configure their personalities, and upload your business knowledge.
        </p>
        <ProjectMedia
          src="https://mtmetamherv206qj.public.blob.vercel-storage.com/servu/Train.png"
          alt="Training interface for uploading knowledge"
          caption="Upload docs, add URLs, train your bot on your actual business knowledge"
        />
        <p className="mt-6 mb-6">
          The training interface lets you upload documents, add website URLs to
          scrape, or manually input information. Everything gets processed into
          embeddings and stored in the vector database so your bot can retrieve
          relevant information when answering questions.
        </p>
        <ProjectMedia
          src="https://mtmetamherv206qj.public.blob.vercel-storage.com/servu/Customize.png"
          alt="Customization options for chatbot appearance"
          caption="Make it match your brand"
        />
        <p className="mt-6">
          Customization options let you control the bot&apos;s appearance,
          behavior, and features. Change colors, adjust response style, enable
          ticketing, set business hours—all through a straightforward UI.
        </p>
      </ProjectSection>

      <ProjectSection id="installation" title="Installation (Seriously, It's This Easy)">
        <p className="mb-6">
          The whole point was making installation trivial. Once you&apos;ve
          configured your chatbot in the dashboard, you get a unique Butler ID.
          Then you have two options:
        </p>
        <div className="mb-6">
          <p className="font-semibold text-black dark:text-white mb-3">
            Option 1: NPM Package (For React/Next.js Apps)
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 border-l-4 border-blue-600 dark:border-blue-400 rounded-lg p-6">
            <pre className="overflow-x-auto">
              <code className="text-black dark:text-white text-sm font-mono block leading-relaxed">{`npm install @servu-ai/servu-chat

import { ServuChat } from '@servu-ai/servu-chat'

function App() {
  return <ServuChat butlerId="YOUR_BUTLER_ID" />
}`}</code>
            </pre>
          </div>
        </div>
        <div>
          <p className="font-semibold text-black dark:text-white mb-3">
            Option 2: Vanilla JavaScript (For Any Website)
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 border-l-4 border-blue-600 dark:border-blue-400 rounded-lg p-6">
            <pre className="overflow-x-auto">
              <code className="text-black dark:text-white text-sm font-mono block leading-relaxed">{`<script src="https://cdn.servu.ai/servu-chat.js"></script>
<script>
  ServuChat.init({ butlerId: 'YOUR_BUTLER_ID' })
</script>`}</code>
            </pre>
          </div>
        </div>
        <p className="mt-6">
          That&apos;s it. No configuration files, no API keys to manage, no
          infrastructure to set up. The complexity is hidden behind a simple
          interface.
        </p>
      </ProjectSection>

      <ProjectSection id="technology-stack" title="Technology Stack">
        <p className="mb-6">
          The project is split into three main components: a React + TypeScript
          widget (built with Vite), a Next.js web application for the dashboard,
          and a landing site. Everything is deployed on Vercel with Supabase
          handling the database and AWS for cloud storage. The AI stack uses
          OpenAI for embeddings, vector databases for semantic search, and Groq
          for inference because it&apos;s ridiculously fast compared to standard
          OpenAI models.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <p className="font-semibold text-black dark:text-white">Widget</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              React, TypeScript, Vite
            </p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <p className="font-semibold text-black dark:text-white">Web App</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Next.js, TailwindCSS, Vercel
            </p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <p className="font-semibold text-black dark:text-white">AI/ML</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              OpenAI Embeddings, Groq, RAG
            </p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <p className="font-semibold text-black dark:text-white">Backend</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Supabase, AWS S3
            </p>
          </div>
        </div>
        <p className="mt-6">
          The NPM package (
          <code className="text-sm bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400 px-2 py-1 rounded font-mono">
            @servu-ai/servu-chat
          </code>
          ) supports multiple frameworks (React, Vue, Svelte) plus vanilla
          JavaScript, so it works with basically any web stack. Check it out on{" "}
          <a
            href="https://www.npmjs.com/package/@servu-ai/servu-chat"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            NPM
          </a>
          .
        </p>
      </ProjectSection>

      <ProjectSection id="future-plans" title="What's Next (The Agentic AI Revival)">
        <p className="mb-6">
          I finished this project a few months ago and got it deployed at{" "}
          <a
            href="https://www.servu.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            servu.ai
          </a>
          , but honestly never put much effort into marketing or growing it. It
          just sat there, working fine, but not really going anywhere.
        </p>
        <p className="mb-6">
          Now with all the hype around agentic AI and the new capabilities for
          connecting LLMs to external services and platforms, I&apos;m seeing an
          opportunity to revive this project. The original vision was chatbots
          that could answer questions and create tickets. But what if they could
          actually <em>do things</em>?
        </p>
        <p className="mb-6">
          Imagine chatbots that don&apos;t just tell customers how to track an
          order, but actually query your e-commerce platform and provide the
          tracking info. Bots that can schedule appointments, process refunds,
          update account information, or trigger workflows in your CRM. The
          infrastructure is already there—it just needs the agentic layer.
        </p>
        <p>
          The timing feels right to add these capabilities and make a real push
          to grow this into something bigger. The core product works, the
          installation is dead simple, and the AI landscape has evolved enough
          that the value proposition is clearer than ever. Time to dust this one
          off and see where it can go.
        </p>
      </ProjectSection>
    </ProjectLayout>
  );
}
