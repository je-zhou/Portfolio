import ProjectLayout from "@/components/ProjectPage/ProjectLayout";
import ProjectSection from "@/components/ProjectPage/ProjectSection";
import ProjectMedia from "@/components/ProjectPage/ProjectMedia";

export default function ForexTradingPage() {
  const tableOfContents = [
    { id: "overview", title: "Overview", level: 2 },
    { id: "the-hard-lesson", title: "The Hard Lesson", level: 2 },
    { id: "the-strategy", title: "The Strategy", level: 2 },
    { id: "system-architecture", title: "System Architecture", level: 2 },
    { id: "risk-management", title: "Risk Management", level: 2 },
    { id: "backtesting", title: "Backtesting Results", level: 2 },
    { id: "technology-stack", title: "Technology Stack", level: 2 },
    { id: "live-performance", title: "Live Performance", level: 2 },
    { id: "key-learnings", title: "Key Learnings", level: 2 },
  ];

  return (
    <ProjectLayout
      title="FX Algo Trader"
      subtitle="Forex Algorithmic Trading Strategies in MQL5"
      year="H2 2023 - Present"
      tags={["Algorithmic Trading", "MQL5", "MetaTrader 5", "Finance"]}
      tableOfContents={tableOfContents}
    >
      <ProjectSection>
        <ProjectMedia
          src="https://mtmetamherv206qj.public.blob.vercel-storage.com/forex/Forex-Promo.mov"
          alt="Forex trading system dashboard"
          priority
        />
      </ProjectSection>

      <ProjectSection
        title="Overview"
        subtitle="A collection of forex trading strategies written in MQL5 for MetaTrader 5"
      >
        <p className="mb-6">
          This is a collection of foreign exchange (FX) trading strategies written in MQL5 and designed to be compiled
          and executed with MetaTrader 5. Currently running on a $10,000 USD FTMO account and a $65,000 AUD live account,
          both showing profitable results as of November 2025.
        </p>
        <p className="mb-6">
          This is a{" "}
          <a
            href="https://github.com/je-zhou/Forex-Algotrading-Strategies--MQL5-"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            public GitHub repository
          </a>
          {" "}where anyone can download the strategies and source code. It&apos;s my most starred repository
          with 21 stars as of November 2025.
        </p>
      </ProjectSection>

      <ProjectSection
        title="The Hard Lesson"
        subtitle="Why I stopped manual trading"
      >
        <p className="mb-6">
          During H2 2023, I began manually trading a $10,000 Pepperstone account. Within a few months, I managed to
          turn it into $20,000. That trader&apos;s high, that feeling of invincibility, was intoxicating. I thought I had
          cracked the code.
        </p>
        <p className="mb-6">
          Then reality hit. In a single trading week, I gave back the entire $10,000 profit. It wasn&apos;t the market
          that beat me—it was my own emotional weakness and hubris. Every loss made me want to revenge trade. Every win
          made me overconfident. The leverage amplified not just my positions, but my emotions. It became too stressful,
          too emotional, and ultimately unsustainable.
        </p>
        <p className="mb-6">
          That experience taught me a crucial lesson: having a profitable strategy means nothing if you can&apos;t execute
          it consistently. As a result, I stopped manual trading entirely and began exploring algorithmic trading as a way
          to enforce discipline and eliminate emotional decision-making from my trading process.
        </p>
      </ProjectSection>

      <ProjectSection
        title="The Strategy"
        subtitle="Range Breakout on Asian Session Highs/Lows"
      >
        <p className="mb-6">
          The primary strategy I&apos;ve been developing and trading is a range breakout strategy focused on USDJPY and XAUUSD
          (Gold). The logic is simple but effective:
        </p>
        <ol className="space-y-4 list-decimal list-inside mb-6">
          <li>
            <strong className="text-black dark:text-white">
              Paint the Asian Session Range:
            </strong>{" "}
            Identify and mark the high and low points during the Asian trading session when markets are typically
            quieter and ranges are established.
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Place Limit Orders:
            </strong>{" "}
            During the London session, place limit buy orders at the Asian high and limit sell orders at the Asian low,
            anticipating breakouts when the higher-volume London session begins.
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Let It Run:
            </strong>{" "}
            Allow trades to run until midway through the New York trading session, capturing the momentum from
            London-New York overlap—the most liquid period in forex.
          </li>
        </ol>
        <p className="mb-6">
          Each trade is scaled dynamically to risk at most 1% of the account balance, ensuring consistent risk management
          regardless of market volatility or position size.
        </p>
      </ProjectSection>

      <ProjectSection
        title="System Architecture"
        subtitle="Built with MQL5 for MetaTrader 5"
      >
        <p className="mb-6">
          The strategies are written in MQL5, MetaTrader 5&apos;s native programming language, allowing for tight integration
          with the trading platform and direct execution on my broker&apos;s servers:
        </p>
        <ol className="space-y-4 list-decimal list-inside">
          <li>
            <strong className="text-black dark:text-white">
              Session Detection:
            </strong>{" "}
            Algorithms identify Asian, London, and New York trading sessions based on GMT time and paint the
            appropriate ranges.
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Order Management:
            </strong>{" "}
            Automated placement of limit orders, stop losses, and take profits based on the identified ranges and
            risk parameters.
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Position Sizing:
            </strong>{" "}
            Dynamic lot calculation to ensure each trade risks exactly 1% of account balance, adjusting for different
            instruments and volatility levels.
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Execution & Monitoring:
            </strong>{" "}
            24/7 automated execution with alerts and logging for all trades, errors, and system events.
          </li>
        </ol>
      </ProjectSection>

      <ProjectSection
        title="Risk Management"
        subtitle="Consistent 1% risk per trade"
      >
        <p className="mb-6">
          After learning the hard way that emotions and inconsistent position sizing can destroy an account, I built strict
          risk management into every aspect of the system:
        </p>
        <ul className="space-y-4">
          <li>
            <strong className="text-black dark:text-white">
              Fixed Risk Per Trade:
            </strong>{" "}
            Every single trade risks exactly 1% of the current account balance. No exceptions, no manual overrides.
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Dynamic Position Sizing:
            </strong>{" "}
            Lot sizes are calculated automatically based on stop loss distance and account size to maintain the 1% risk target.
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Automated Stop Loss & Take Profit:
            </strong>{" "}
            Every trade has predefined exit points based on the session ranges and risk-reward ratios, removing any
            temptation to hold too long or cut winners short.
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Session-Based Trading:
            </strong>{" "}
            Trades are only placed during specific session windows, preventing overtrading and ensuring the strategy
            only executes when market conditions align with the edge.
          </li>
        </ul>
      </ProjectSection>

      <ProjectSection
        title="Backtesting Results"
        subtitle="5 years of historical data validation"
      >
        <p className="mb-6">
          Before risking real capital, I ran extensive backtests using 5 years of historical tick data with realistic
          spreads and commission. The most profitable set of parameters turned a $10,000 starting balance into
          $33,946.54—a 239% return over 5 years.
        </p>
        <p className="mb-6">
          To put this in perspective, the S&P 500 returned{" "}
          <a
            href="https://www.slickcharts.com/sp500/returns"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            170% from 2019 to 2024
          </a>
          , with a particularly rough -18.11% drawdown in 2022 alone. The strategy outperformed the benchmark by 69
          percentage points while maintaining a maximum drawdown of just 7.55% across the entire 5-year period—a
          significant advantage in risk-adjusted returns.
        </p>
        <p className="mb-6">
          Beyond the raw returns, the risk metrics tell an important story: a profit factor of 1.41 and that minimal
          drawdown suggested the strategy had a genuine edge, not just curve-fitted parameters that looked good on paper.
        </p>

        <div className="space-y-6 mb-6">
          <ProjectMedia
            src="https://mtmetamherv206qj.public.blob.vercel-storage.com/forex/Forex-Backtest-Graph.png"
            alt="5-year backtest equity curve"
          />
          <ProjectMedia
            src="https://mtmetamherv206qj.public.blob.vercel-storage.com/forex/Forex-Backtest-Stats.png"
            alt="Backtest performance statistics"
          />
        </div>

        <p>
          Of course, backtests aren&apos;t perfect—slippage, server downtime, and real-world execution issues aren&apos;t
          fully captured. But these results gave me enough confidence to deploy the strategy on funded and live accounts,
          where it continues to perform profitably.
        </p>
      </ProjectSection>

      <ProjectSection title="Technology Stack">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <p className="font-semibold text-black dark:text-white">Core Language</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              MQL5
            </p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <p className="font-semibold text-black dark:text-white">Platform</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              MetaTrader 5
            </p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <p className="font-semibold text-black dark:text-white">Brokers</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              FTMO, Live Accounts
            </p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <p className="font-semibold text-black dark:text-white">Instruments</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              USDJPY, XAUUSD
            </p>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection
        title="Live Performance"
        subtitle="Real results from funded and live accounts"
      >
        <p className="mb-6">
          As of November 2025, the strategies are running on two accounts with real money—no backtests, no simulations,
          just live performance:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <h4 className="text-lg font-semibold text-black dark:text-white mb-4">
              FTMO Account (USD 10,000)
            </h4>
            <ProjectMedia
              src="https://mtmetamherv206qj.public.blob.vercel-storage.com/forex/Forex-Stats-10k.png"
              alt="Performance stats for 10k USD FTMO account"
            />
          </div>

          <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <h4 className="text-lg font-semibold text-black dark:text-white mb-4">
              Live Account (AUD 65,000)
            </h4>
            <ProjectMedia
              src="https://mtmetamherv206qj.public.blob.vercel-storage.com/forex/Forex-Stats-65k.png"
              alt="Performance stats for 65k AUD live account"
            />
          </div>
        </div>

        <p>
          Both accounts are in profitable positions overall, demonstrating that the strategy has a genuine edge when
          executed without emotion. The win rates hover around 46-48%, but because winners are slightly larger than
          losers on average (positive risk-reward ratio), the expectancy remains positive on the FTMO account.
        </p>
      </ProjectSection>

      <ProjectSection
        title="Key Learnings"
        subtitle="What this journey has taught me"
      >
        <ul className="space-y-4">
          <li>
            <strong className="text-black dark:text-white">
              Consistency beats emotion:
            </strong>{" "}
            The same strategy that made me money manually also lost me money when I couldn&apos;t execute it consistently.
            Algorithmic trading enforces discipline and removes emotional decision-making from the equation.
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Data-driven edge finding:
            </strong>{" "}
            Searching for edges using algorithms and backtesting has been far more productive than relying on gut feelings.
            The data reveals what actually works without ego or confirmation bias.
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Risk management matters more than win rate:
            </strong>{" "}
            A 48% win rate is perfectly fine when your average winner is bigger than your average loser. Consistent
            position sizing and disciplined stops are what keep you in the game long-term.
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Leverage is a double-edged sword:
            </strong>{" "}
            Leverage amplifies everything—gains, losses, and especially emotions. For most people (myself included),
            manual trading with high leverage becomes stressful and leads to poor decision-making.
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Simple strategies can be effective:
            </strong>{" "}
            You don&apos;t need complex machine learning or exotic indicators. A well-defined range breakout strategy
            with proper risk management can generate consistent profits.
          </li>
          <li>
            <strong className="text-black dark:text-white">
              Open source benefits everyone:
            </strong>{" "}
            Making my strategies public on GitHub has led to valuable feedback, collaboration opportunities, and helped
            others learn algorithmic trading. The 21 stars represent people who found it useful enough to bookmark and reference.
          </li>
        </ul>
      </ProjectSection>
    </ProjectLayout>
  );
}
