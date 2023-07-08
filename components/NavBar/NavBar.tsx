import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function NavBar() {
	return (
		<div className='flex flex-row space-x-8 text-md min-w-full font-bold opacity-80 justify-end p-8'>
			<p>About Me</p>
			<p>Projects</p>
			<p>Blog</p>
			<p>|</p>
			<FontAwesomeIcon icon={['fab', 'linkedin']} width={24} />
			<FontAwesomeIcon icon={['fab', 'square-github']} width={24} />
		</div>
	)
}
