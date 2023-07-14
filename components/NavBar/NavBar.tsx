'use client'
import React, { MutableRefObject } from 'react'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function NavBar() {
	return (
		<div className='flex flex-row space-x-4 md:space-x-8 text-md min-w-full font-bold opacity-80 justify-end p-8 text-charade dark:text-white'>
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
	)
}
