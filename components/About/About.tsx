import React, { MutableRefObject } from 'react'

export default function About() {
	return (
		<div id='About' className='flex flex-col justify-center w-full max-w-4xl h-screen px-8 snap-start '>
			<div className='flex flex-col space-y-8 justify-center items-center'>
				<h1 className='text-4xl xs:text-6xl md:text-8xl font-bold text-charade dark:text-white'>About Me</h1>
				<p className='text-xl font-light text-charade dark:text-heather text-center md:text-left'>
					I am a Global Tax Consultant at a Big4 accounting firm by <span className='text-yellow-500 dark:text-yellow-200 font-bold'>day</span> and a designer / developer of cool bits and bobs by <span className='text-blue-400 font-bold'>night</span>. I pride myself on my entrepreneurial nature and enjoy learning new technologies by diving straight into fun projects across all kinds of verticals.
				</p>
			</div>
		</div>
	)
}
