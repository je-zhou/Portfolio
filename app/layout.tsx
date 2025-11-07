import "./globals.css";
import type { Metadata } from "next";
import { Inter, Quicksand } from "next/font/google";

import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core";
import ThemeProvider from "@/components/ThemeProvider/ThemeProvider";
import NavBar from "@/components/NavBar/NavBar";

config.autoAddCss = false; /* eslint-disable import/first */

const inter = Inter({ subsets: ["latin"] });
const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: "Jerry Zhou",
  description: "My Portfolio Website!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const CACHE_TIMEOUT = 5 * 60 * 1000; // 5 minutes
                  const getTimeBasedTheme = () => {
                    const currentHour = new Date().getHours();
                    return currentHour > 17 || currentHour < 9 ? 'dark' : 'light';
                  };

                  const savedTheme = localStorage.getItem('theme');
                  const savedTimestamp = localStorage.getItem('themeTimestamp');
                  let theme = getTimeBasedTheme();

                  if (savedTheme && savedTimestamp) {
                    const timestamp = parseInt(savedTimestamp, 10);
                    const now = Date.now();

                    if (now - timestamp < CACHE_TIMEOUT) {
                      theme = savedTheme;
                    } else {
                      localStorage.removeItem('theme');
                      localStorage.removeItem('themeTimestamp');
                    }
                  }

                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={quicksand.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
