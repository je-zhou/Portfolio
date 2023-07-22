'use client'
import React, { MutableRefObject, useState } from 'react'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHamburger } from '@fortawesome/free-solid-svg-icons';

export default function NavBar() {
	const [isOpen, setisOpen] = useState(false)

	return (
		<div className='w-full'>
			{/* Desktop Navbar */}
			<div className='hidden md:flex flex-row space-x-8 text-md min-w-full font-bold opacity-80 justify-end p-8 text-charade dark:text-white'>
				<p className='cursor-pointer'
					onClick={() => {
						const ele = document.getElementById("About")
						if (ele) {
							ele.scrollIntoView({ behavior: 'smooth' })
						}
					}}>
					About Me</p>
				<p className='cursor-pointer'
					onClick={() => {
						const ele = document.getElementById("Projects")
						if (ele) {
							ele.scrollIntoView({ behavior: 'smooth' })
						}
					}}>
					Projects</p>
				{/* <p className='cursor-pointer' >Blog</p> */}
				<p className=' cursor-default' >|</p>
				<FontAwesomeIcon className='cursor-pointer' icon={faLinkedin} size='xl' onClick={() => window.open('https://www.linkedin.com/in/je-zhou/')} />
				<FontAwesomeIcon className='cursor-pointer' icon={faGithubSquare} size='xl' onClick={() => window.open('https://github.com/je-zhou')} />
			</div>
			{/* Mobile Hamburger Nav */}
			<div className={`md:hidden z-30 text-md min-w-full font-bold p-6  duration-200 fixed
			 ${isOpen ? 'dark:bg-heather bg-charade dark:text-charade text-white max-h-screen ' :
					'text-charade dark:text-white'} 
			 `}>
				<div className='flex flex-col  items-end '>
					<FontAwesomeIcon className='cursor-pointer' icon={faBars} size='xl' onClick={() => setisOpen(!isOpen)} />

				</div>
				<div className={`w-full overflow-hidden ${isOpen ? 'h-screen' : 'h-0'} duration-200`}>
					<div className='flex flex-col justify-between text-md font-bold opacity-80 h-[90vh] py-8 dark:text-charade text-white'>
						<div className='space-y-8'>
							<p className='cursor-pointer'
								onClick={() => {
									setisOpen(!isOpen)
									const ele = document.getElementById("About")
									if (ele) {
										ele.scrollIntoView({ behavior: 'smooth' })
									}
								}}>
								About Me</p>
							<p className='cursor-pointer'
								onClick={() => {
									setisOpen(!isOpen)
									const ele = document.getElementById("Projects")
									if (ele) {
										ele.scrollIntoView({ behavior: 'smooth' })
									}
								}}>
								Projects</p>

						</div>
						<div className='flex flex-row space-x-8'>
							<FontAwesomeIcon className='cursor-pointer' icon={faLinkedin} size='2xl' onClick={() => window.open('https://www.linkedin.com/in/je-zhou/')} />
							<FontAwesomeIcon className='cursor-pointer' icon={faGithubSquare} size='2xl' onClick={() => window.open('https://github.com/je-zhou')} />
						</div>
					</div>
				</div>
			</div >
		</div >

	)
}
