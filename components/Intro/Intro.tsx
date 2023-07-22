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
			<div className='flex w-full max-w-[2040px] h-screen flex-col items-center md:flex-row md:items-center px-12 justify-center pb-48 md:pb-0' >
				<div className='flex flex-col md:flex-1 pt-48 md:pt-0'>
					<div className='flex flex-col space-y-8 items-center md:items-start md:pb-12'>
						<p className='text-xl lg:text-4xl text-charade dark:text-heather text-center'>Hello! My Name is</p>
						<h1 className=' text-4xl md:text-7xl xl:text-9xl font-bold text-charade dark:text-white text-center md:text-left'>Jerry Zhou</h1>
					</div>
					<div className='border border-charade dark:border-heather hover:bg-charade hover:dark:bg-heather p-2 md:p-4 rounded-xl w-fit mb-8 mt-8 hover:cursor-pointer text-charade hover:text-white dark:text-white  hover:dark:text-charade'
						onClick={() => {
							const ele = document.getElementById("Projects")
							if (ele) {
								ele.scrollIntoView({ behavior: 'smooth' })
							}
						}}>
						<p className='text-xl lg:text-2xl text-center px-1 md:px-4'>Have a look at my work</p>
					</div>
				</div>


				<Avatar toggleDarkMode={toggleDarkMode} darkMode={darkMode} ></Avatar>
			</div>
			<Scroll></Scroll>
		</div >
	)
}
