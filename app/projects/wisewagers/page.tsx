import ProjectLayout from "@/components/ProjectPage/ProjectLayout";
import ProjectSection from "@/components/ProjectPage/ProjectSection";
import ProjectMedia from "@/components/ProjectPage/ProjectMedia";
import ProjectGrid from "@/components/ProjectPage/ProjectGrid";

export default function WiseWagersPage() {
  const tableOfContents = [
    { id: "overview", title: "Overview", level: 2 },
    { id: "the-spark", title: "The Spark", level: 2 },
    { id: "attempt-1", title: "Attempt 1: Python & Selenium", level: 2 },
    { id: "attempt-2", title: "Attempt 2: JavaScript & AWS", level: 2 },
    { id: "discord-bot", title: "The Discord Bot", level: 2 },
    { id: "the-pivot", title: "The Pivot", level: 2 },
    { id: "matched-betting", title: "How It Actually Worked", level: 2 },
    { id: "results", title: "Results", level: 2 },
    { id: "saas-attempt", title: "The SaaS That Never Was", level: 2 },
    { id: "the-end", title: "Getting Banned & Moving On", level: 2 },
    { id: "technology-stack", title: "Tech Stack", level: 2 },
  ];

  return (
    <ProjectLayout
      title="WiseWagers"
      subtitle="Teaching my computer to gamble better than me (a hobby project)"
      year="2022-2023"
      tags={[
        "JavaScript",
        "Python",
        "AWS EC2",
        "Discord Bot",
        "Web Scraping",
        "Matched Betting",
      ]}
      tableOfContents={tableOfContents}
    >
      <ProjectSection>
        <ProjectMedia
          src="/projects/wisewagers/WiseWagers-Promo.png"
          alt="WiseWagers dashboard"
          priority
        />
      </ProjectSection>

      <ProjectSection
        title="Overview"
        subtitle="How I turned $700 into $10k with some code, a Discord bot, and questionable life choices"
      >
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          A hobby project where I built an automated sports betting system to
          exploit mathematical inefficiencies in betting markets. Started with
          Python and Selenium, which proved too slow for real-time odds
          scraping. Rebuilt everything in JavaScript and deployed it across AWS
          EC2 instances, reducing scrape times from 5 minutes to 30 seconds.
          When pure arbitrage opportunities turned out to be virtually
          nonexistent, I pivoted to matched betting and bonus conversions. Built
          a Discord bot for 24/7 monitoring, and turned $700 into over $10,000
          before being restricted by Australian bookmakers.
        </p>
      </ProjectSection>

      <ProjectSection title="The Spark">
        <ProjectMedia
          src="https://www.youtube.com/embed/5NgiXfXJWiA"
          alt="Shane Huang's video on arbitrage sports betting"
          caption="The video that started it all (and ruined my productivity for 9 months)"
        />
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-6 mb-6">
          While procrastinating on YouTube, I came across this video by Shane
          Huang about arbitrage sports betting in Australia. He explained how he
          turned $200 into $8,000 using pure mathematics—no luck, no insider
          knowledge, just math. Initially skeptical, I watched him break down
          the concept and realized it was actually sound.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          The concept is straightforward: different bookmakers price the same
          events differently. If you can find mismatches where the sum of
          implied probabilities across all outcomes is less than 100%, you can
          bet on every outcome and guarantee a profit regardless of the result.
          It's not gambling—it's exploiting pricing inefficiencies through
          arbitrage.
        </p>
      </ProjectSection>

      <ProjectSection title="Attempt 1: Python & Selenium (aka The Slow One)">
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          After watching the video, I immediately started building. My first
          implementation used Python with Selenium for web scraping. The plan
          was straightforward: scrape all major bookmaker sites, compare odds,
          and identify arbitrage opportunities.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          <strong className="text-black dark:text-white">The problem:</strong>{" "}
          it was painfully slow. Even with headless Chrome, scraping odds for
          just the top European soccer leagues took nearly 5 minutes. By the
          time the script finished, the odds had already moved—the data was
          stale and effectively useless.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          In sports betting markets, 5 minutes might as well be 5 hours. Odds
          move continuously, and without real-time data, the entire approach
          falls apart. I needed a complete architectural rethink.
        </p>
      </ProjectSection>

      <ProjectSection title="Attempt 2: JavaScript & AWS (The Glow Up)">
        <ProjectMedia
          src="/projects/wisewagers/WiseWagers-Infrastructure.png"
          alt="AWS EC2 cloud architecture"
          caption="Throwing money at AWS to make my code go brrrr"
        />
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-6 mb-6">
          I rebuilt the entire system from scratch in JavaScript with a
          completely different architecture. Instead of sequential scraping on a
          single machine, I deployed multiple scraping packages across AWS EC2
          instances running concurrently. This distributed approach transformed
          the performance characteristics.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-6 mb-6">
          <strong className="text-black dark:text-white">
            The results were dramatic.
          </strong>{" "}
          Scraping time dropped from 5 minutes to 30 seconds. I could now
          monitor live odds across all major Australian bookmakers and betting
          markets in near real-time—fast enough to actually be actionable.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          However, this revealed a fundamental problem: pure arbitrage
          opportunities are virtually nonexistent in modern betting markets. The
          major bookmakers are incredibly sharp. Scanning thousands of events
          might yield one or two tiny arbitrage windows per day, with margins so
          slim they barely covered transaction costs. This approach wasn't going
          to work.
        </p>
      </ProjectSection>

      <ProjectSection title="The Pivot (When Plan A Fails, Try Plan B)">
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          With pure arbitrage proving unviable, I needed a new approach. I'd
          already built a sophisticated scraping infrastructure and monitoring
          system—there had to be another way to leverage it. That's when I
          discovered{" "}
          <strong className="text-black dark:text-white">
            matched betting
          </strong>{" "}
          and
          <strong className="text-black dark:text-white">
            {" "}
            bonus bet conversions
          </strong>
          .
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          The insight: Australian bookmakers aggressively compete for customer
          acquisition through promotional offers—sign-up bonuses, reload offers,
          cashback deals, and more. Each bookmaker was essentially offering free
          money to attract users. The question became: could I systematically
          convert these promotions into cash?
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          The answer was Betfair, a betting exchange where you can both back and
          lay outcomes. By placing a bonus bet on one bookmaker and hedging it
          on Betfair, I could guarantee about 80% conversion to real cash
          regardless of the outcome. Repeat this across dozens of bookmakers and
          hundreds of promotions, and it becomes genuinely profitable.
        </p>
      </ProjectSection>

      <ProjectSection title="The Discord Bot (My 24/7 Money Spotter)">
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-6 mb-6">
          Betting opportunities don't wait for you to be at your computer. They
          appear randomly throughout the day and night, and timing is critical.
          To solve this, I built a Discord bot that runs 24/7, monitoring odds
          across all bookmakers and alerting me whenever opportunities arise.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          When the bot identifies either an arbitrage opportunity or a favorable
          matched betting scenario, it sends a Discord notification with all
          relevant details: teams, odds, recommended bet amounts for each side,
          and expected profit. This automated monitoring meant I could
          capitalize on opportunities without constantly refreshing bookmaker
          websites.
        </p>
        <ProjectMedia
          src="/projects/wisewagers/WiseWagers-Discord-Bot.png"
          alt="Discord bot notifications"
          caption="Getting pinged at 1am about betting opportunities hits different"
          className="max-w-xs mx-auto"
        />
      </ProjectSection>

      <ProjectSection title="How It Actually Worked">
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-6 mb-6">
          The matched betting process is straightforward once you understand the
          mechanics:
        </p>
        <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-300 mb-6">
          <li>
            <strong className="text-black dark:text-white">Step 1:</strong> Sign
            up for a bookmaker and claim their welcome bonus (typically $50-$200
            in bonus bets)
          </li>
          <li>
            <strong className="text-black dark:text-white">Step 2:</strong>{" "}
            Place the bonus bet on an outcome (e.g., Team A to win at 2.00 odds)
          </li>
          <li>
            <strong className="text-black dark:text-white">Step 3:</strong>{" "}
            Immediately lay the same outcome on Betfair (betting against Team A)
          </li>
          <li>
            <strong className="text-black dark:text-white">Step 4:</strong>{" "}
            Regardless of the result, you've converted approximately 80% of the
            bonus bet into withdrawable cash
          </li>
        </ul>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          While sign-up bonuses provided initial capital, the real value came
          from ongoing promotions: reload bonuses, cashback offers, odds boosts,
          and "risk-free" bets. Bookmakers continuously offer these incentives
          to retain customers, and each one could be converted through hedging.
          My scraping system optimized this by finding events with minimal
          spread between bookmaker and Betfair odds, maximizing conversion
          efficiency.
        </p>
      </ProjectSection>

      <ProjectSection title="The Results (Yeah, It Actually Worked)">
        <ProjectMedia
          src="/projects/wisewagers/WiseWagers-Results.png"
          alt="Results dashboard showing profit progression"
          caption="Stonks only go up (until you get banned)"
        />
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-6 mb-6">
          Starting with $700 distributed across multiple bookmaker accounts, I
          systematically worked through welcome bonuses, ongoing promotions, and
          matched betting opportunities over 9 months. The Discord bot automated
          opportunity detection, eliminating the need for constant manual
          monitoring.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
          <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <p className="text-3xl font-bold text-black dark:text-white">
              $700
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Initial Capital
            </p>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <p className="text-3xl font-bold text-black dark:text-white">
              $10,000+
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Final Amount
            </p>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <p className="text-3xl font-bold text-black dark:text-white">
              9 months
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Time Period
            </p>
          </div>
        </div>
        <ProjectMedia
          src="/projects/wisewagers/WiseWagers-Portfolio.png"
          alt="Performance tracking dashboard"
          caption="Tracking every bet, every hedge, every dollar—data nerd approved"
        />
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-6">
          This wasn't gambling or luck—it was systematic execution of a
          mathematical edge. Every bet was hedged, every promotion converted at
          approximately 80% efficiency. Hundreds of small, guaranteed profits
          compounded over time into substantial returns.
        </p>
      </ProjectSection>

      <ProjectSection title="The SaaS That Never Was">
        <ProjectMedia
          src="/projects/wisewagers/WiseWagers-SAAS-Attempt.png"
          alt="SaaS mockup that never launched"
          caption="Almost turned this into a business... almost"
        />
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-6 mb-6">
          At one point, I considered turning this into a SaaS product. The
          system worked reliably for me, and there was clearly demand for
          automated matched betting services. I spent time designing what a
          subscription platform could look like—delivering opportunities to
          users with all calculations pre-computed.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          However, the more I thought about the business model, the more
          uncomfortable I became. If bookmakers can profitably offer these
          promotions, it means enough people are losing money to subsidize them.
          The entire sports betting industry is fundamentally built on
          exploiting people with gambling problems who lose more than they can
          afford.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          I realized I didn't want to promote or enable more sports betting
          participation, even the "mathematically sound" variety. The industry
          is predatory by nature, and I wasn't comfortable contributing to its
          growth beyond my personal experimentation. Some opportunities aren't
          worth pursuing, regardless of their profitability.
        </p>
      </ProjectSection>

      <ProjectSection title="Getting Banned & Moving On">
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          Ironically, success in matched betting is measured by how quickly you
          get banned. As I continued profiting from promotions, bookmakers began
          restricting my accounts one by one—betting limits reduced to $5, then
          outright bans. Within 9 months, I was effectively locked out of every
          major Australian bookmaker.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          I could have attempted to circumvent the restrictions through
          alternative accounts or VPNs, but by that point I'd already validated
          what I set out to prove: mathematical edges exist in betting markets
          and can be systematically exploited with proper technical
          infrastructure. The experiment was complete.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          More importantly, the ethical concerns had been weighing on me. Sports
          betting is fundamentally a zero-sum game that extracts value from
          vulnerable participants rather than creating it. I'd rather invest my
          time building products that generate genuine value for society. So I
          withdrew the funds, shut down the infrastructure, and moved on to
          other projects. The technical learning about web scraping, distributed
          systems, and automation was invaluable—and that was ultimately more
          valuable than the profits.
        </p>
      </ProjectSection>

      <ProjectSection title="Tech Stack">
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          The project evolved through multiple iterations, with the technology
          stack adapting to performance and architectural requirements:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <p className="font-semibold text-black dark:text-white">
              V1 (The Slow One)
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Python, Selenium, BeautifulSoup
            </p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <p className="font-semibold text-black dark:text-white">
              V2 (The Fast One)
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              JavaScript, Node.js, Puppeteer
            </p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <p className="font-semibold text-black dark:text-white">
              Infrastructure
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              AWS EC2, PM2
            </p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <p className="font-semibold text-black dark:text-white">
              Automation
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Discord.js Bot, Betfair API
            </p>
          </div>
        </div>
      </ProjectSection>
    </ProjectLayout>
  );
}
