import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function BackButton() {

	return (
		<Link href={"/"} >
			<div className='bg-white/80 hover:bg-white/100 duration-200 cursor-pointer m-2 md:m-8 p-2 px-4 rounded-full shadow-lg'>
				<div className='flex flex-row space-x-2 items-center text-charade'>
					<FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
					<p>Home</p>
				</div>

			</div>
		</Link>

	)
}
