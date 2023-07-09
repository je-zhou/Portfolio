'use client'
import React from 'react'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Connect() {
	return (
		<div className='flex w-full max-w-4xl h-screen p-12 flex-col snap-start justify-center pt-72'>
			<div className='flex flex-col space-y-16 items-center justify-center mb-72'>
				<h1 className='text-6xl md:text-8xl font-bold'>Lets Connect!</h1>
				<div className='flex flex-row space-x-8 opacity-70'>
					<FontAwesomeIcon className='cursor-pointer' icon={faLinkedin} size='3x' onClick={() => window.open('https://www.linkedin.com/in/je-zhou/')} />
					<FontAwesomeIcon className='cursor-pointer' icon={faGithubSquare} size='3x' onClick={() => window.open('https://github.com/je-zhou')} />
				</div>
			</div>
		</div >
	)
}
