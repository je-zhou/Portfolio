'use client'
import About from '@/components/About/About'
import Intro from '@/components/Intro/Intro'
import NavBar from '@/components/NavBar/NavBar'
import Projects from '@/components/Projects/Projects'

import Projects2021 from '@/components/Projects/2021/Projects2021'
import Projects2022 from '@/components/Projects/2022/Projects2022'
import Connect from '@/components/Connect/Connect'
import { useState } from 'react'
import { useThemeContext } from '@/components/ThemeProvider/ThemeProvider'
import Projects2023 from '@/components/Projects/2023/Projects2023'

export default function Home() {
	let theme = useThemeContext();

	const [darkMode, setDarkMode] = useState<boolean>(theme === "light" ? false : true);

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
		theme = darkMode ? "dark" : "light"
		console.log(theme)
	};

	return (
		<main className={`${darkMode ? "dark" : ""}`}>
			<div className='flex min-h-screen max-w-full flex-col items-center bg-light-background dark:bg-charade'>
				<NavBar></NavBar>
				<div className='flex flex-col items-center'>
					<Intro toggleDarkMode={toggleDarkMode} darkMode={darkMode}></Intro>
					<About></About>
					<Projects></Projects>
					<Projects2023></Projects2023>
					<Projects2022></Projects2022>
					<Projects2021></Projects2021>
					<Connect></Connect>
				</div>
			</div>
		</main >
	)
}
