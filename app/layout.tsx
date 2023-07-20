import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
import ThemeProvider from '@/components/ThemeProvider/ThemeProvider';
config.autoAddCss = false; /* eslint-disable import/first */

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Jerry Zhou',
	description: 'My Portfolio Website!',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ThemeProvider>{children}</ThemeProvider>
			</body>
		</html>
	)
}
