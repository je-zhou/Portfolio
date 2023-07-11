'use client'
import About from '@/components/About/About'
import Intro from '@/components/Intro/Intro'
import NavBar from '@/components/NavBar/NavBar'
import Projects from '@/components/Projects/Projects'

import Projects2021 from '@/components/Projects/2021/Projects2021'
import Projects2022 from '@/components/Projects/2022/Projects2022'
import Connect from '@/components/Connect/Connect'
import { useEffect, useState } from 'react'

export default function Home() {
	const currentHour = new Date().getHours();
	const [darkMode, setDarkMode] = useState<boolean>(currentHour > 17 || currentHour < 9);

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};

	return (
		<main className={`${darkMode ? "dark" : ""}`}>
			<div className='flex min-h-screen max-w-full flex-col items-center bg-light-background dark:bg-charade'>
				<NavBar></NavBar>
				<div className='flex flex-col items-center'>
					<Intro toggleDarkMode={toggleDarkMode} darkMode={darkMode}></Intro>
					<About></About>
					<Projects></Projects>
					<Projects2022></Projects2022>
					<Projects2021></Projects2021>
					<Connect></Connect>
				</div>
			</div>


		</main >
	)
}
