import React from 'react'
import Scroll from '../Scroll/Scroll'
import Avatar from './Avatar'

interface IntroProps {
	toggleDarkMode: Function
	darkMode: boolean
}

export default function Intro({ toggleDarkMode, darkMode }: IntroProps) {
	return (
		<div className='flex flex-col w-full max-h-screen md:max-h-[85vh] h-full items-center'>
			<div className='flex w-full max-w-[2040px] h-screen flex-col items-center md:flex-row md:items-center px-12 justify-center pb-48' >
				<div className='flex flex-col space-y-8 items-center md:flex-1 md:items-start pb-12'>
					<p className='text-xl lg:text-4xl text-charade dark:text-heather text-center'>Hello! My Name is</p>
					<h1 className='text-5xl lg:text-9xl font-bold text-charade dark:text-white text-center'>Jerry Zhou</h1>
				</div>
				<Avatar toggleDarkMode={toggleDarkMode} darkMode={darkMode} ></Avatar>
			</div>
			<Scroll></Scroll>
		</div >
	)
}
