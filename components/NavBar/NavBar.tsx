'use client'
import React from 'react'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function NavBar() {
	return (
		<div className='flex flex-row space-x-8 text-md min-w-full font-bold opacity-80 justify-end p-8'>
			<p>About Me</p>
			<p>Projects</p>
			<p>Blog</p>
			<p>|</p>
			<FontAwesomeIcon className='cursor-pointer' icon={faLinkedin} size='xl' onClick={() => window.open('https://www.linkedin.com/in/je-zhou/')} />
			<FontAwesomeIcon className='cursor-pointer' icon={faGithubSquare} size='xl' onClick={() => window.open('https://github.com/je-zhou')} />
		</div>
	)
}
