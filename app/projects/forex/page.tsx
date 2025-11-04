import ProjectLayout from "@/components/ProjectPage/ProjectLayout";
import ProjectSection from "@/components/ProjectPage/ProjectSection";
import ProjectMedia from "@/components/ProjectPage/ProjectMedia";

export default function ForexTradingPage() {
  const tableOfContents = [
    { id: "overview", title: "Overview", level: 2 },
    { id: "the-strategy", title: "The Strategy", level: 2 },
    { id: "system-architecture", title: "System Architecture", level: 2 },
    { id: "key-features", title: "Key Features", level: 2 },
    { id: "risk-management", title: "Risk Management", level: 2 },
    { id: "technology-stack", title: "Technology Stack", level: 2 },
    { id: "performance-learnings", title: "Performance & Learnings", level: 2 },
  ];

  return (
    <ProjectLayout
      title="FX Algo Trader"
      subtitle="Foreign Exchange Algorithmic Trading Bot"
      year="H2 2024"
      tags={["Algorithmic Trading", "Python", "Machine Learning", "Finance"]}
      tableOfContents={tableOfContents}
    >
      <ProjectSection>
        <ProjectMedia
          src="/projects/forex/Forex-Promo.mov"
          alt="Forex trading system dashboard"
          priority
        />
      </ProjectSection>

      <ProjectSection
        title="Overview"
        subtitle="An automated foreign exchange trading system managing $80,000 AUM"
      >
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          FX Algo Trader is a sophisticated algorithmic trading system designed
          for the foreign exchange market. Using a combination of technical
          analysis, machine learning models, and quantitative strategies, the
          system identifies and executes trades automatically across multiple
          currency pairs, currently managing $80,000 in assets under management.
        </p>
      </ProjectSection>

      <ProjectSection title="The Strategy">
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          The forex market is the world&apos;s largest and most liquid financial
          market, with over $6 trillion in daily trading volume. However, its
          24/7 nature and high volatility make it challenging for manual traders
          to consistently identify and execute profitable trades.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          The system employs multiple strategies in parallel:
        </p>
        <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
          <li>
            <strong className="text-black dark:text-white">
              Trend Following:
            </strong>{" "}
            Identifies and rides medium to long-term trends in major currency
            pairs
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Mean Reversion:
            </strong>{" "}
            Captures short-term price deviations from historical averages
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Carry Trade:
            </strong>{" "}
            Exploits interest rate differentials between currency pairs
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Market Making:
            </strong>{" "}
            Provides liquidity during high-volume periods for small, consistent
            profits
          </li>
        </ul>
      </ProjectSection>

      <ProjectSection title="System Architecture">
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          The trading system is built on a microservices architecture for
          reliability and scalability:
        </p>
        <ol className="space-y-4 text-lg text-gray-700 dark:text-gray-300 list-decimal list-inside">
          <li>
            <strong className="text-black dark:text-white">
              Data Ingestion:
            </strong>{" "}
            Real-time market data from multiple forex brokers and data providers
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Signal Generation:
            </strong>{" "}
            ML models and technical indicators generate trading signals
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Risk Engine:
            </strong>{" "}
            Validates all trades against risk parameters before execution
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Execution:
            </strong>{" "}
            Smart order routing to minimize slippage and transaction costs
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Monitoring:
            </strong>{" "}
            Real-time dashboards and alerting for system health and performance
          </li>
        </ol>
      </ProjectSection>

      <ProjectSection title="Key Features">
        <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
          <li>
            <strong className="text-black dark:text-white">
              Multi-Strategy Execution:
            </strong>{" "}
            Runs multiple trading strategies simultaneously with dynamic capital
            allocation
          </li>
          <li>
            <strong className="text-black dark:text-white">
              24/7 Operation:
            </strong>{" "}
            Fully automated trading across all global forex sessions
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Advanced Risk Management:
            </strong>{" "}
            Position sizing, stop losses, and portfolio-level risk controls
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Backtesting Framework:
            </strong>{" "}
            Historical simulation engine for strategy validation
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Real-time Analytics:
            </strong>{" "}
            Live P&L tracking, performance metrics, and risk exposure monitoring
          </li>
        </ul>
      </ProjectSection>

      <ProjectSection title="Risk Management">
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          Rigorous risk management is the foundation of the system:
        </p>
        <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
          <li>
            <strong className="text-black dark:text-white">
              Position Limits:
            </strong>{" "}
            Maximum exposure per currency pair and overall portfolio
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Stop Loss & Take Profit:
            </strong>{" "}
            Automated exit points for every trade based on volatility and
            risk-reward ratios
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Drawdown Controls:
            </strong>{" "}
            System automatically reduces position sizes during losing periods
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Correlation Analysis:
            </strong>{" "}
            Prevents over-concentration in correlated currency pairs
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Circuit Breakers:
            </strong>{" "}
            Halts trading during extreme market conditions or system anomalies
          </li>
        </ul>
      </ProjectSection>

      <ProjectSection title="Technology Stack">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <p className="font-semibold text-black dark:text-white">Core</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Python, NumPy, Pandas
            </p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <p className="font-semibold text-black dark:text-white">ML/AI</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              scikit-learn, XGBoost, PyTorch
            </p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <p className="font-semibold text-black dark:text-white">
              Infrastructure
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              AWS, Docker, Kubernetes
            </p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <p className="font-semibold text-black dark:text-white">Data</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              PostgreSQL, Redis, TimescaleDB
            </p>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="Performance & Learnings">
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          The system has been running in production since H2 2024, managing
          $80,000 in capital across multiple currency pairs. Through continuous
          optimization and strategy refinement, the bot has demonstrated
          consistent performance across different market conditions.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          Key learnings from development and deployment:
        </p>
        <ul className="space-y-3 text-lg text-gray-700 dark:text-gray-300 list-disc list-inside">
          <li>
            Transaction costs and slippage have a significant impact on
            high-frequency strategies
          </li>
          <li>
            Robust risk management is more important than prediction accuracy
          </li>
          <li>
            Market regime detection helps adapt strategies to changing
            conditions
          </li>
          <li>
            Diversification across strategies and timeframes reduces overall
            portfolio volatility
          </li>
          <li>
            System reliability and uptime are critical for capturing trading
            opportunities
          </li>
        </ul>
      </ProjectSection>
    </ProjectLayout>
  );
}
