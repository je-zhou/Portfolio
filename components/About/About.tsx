import React from 'react'

export default function About() {
	return (
		<div className='flex flex-col justify-center w-full max-w-4xl h-screen p-12 snap-start'>
			<div className='flex flex-col space-y-16 j items-center mb-72'>
				<h1 className='text-6xl md:text-8xl font-bold'>About Me</h1>
				<p className='text-xl font-light text-heather text-center md:text-left'>
					I am a Global Tax Consultant at a Big4 accounting firm by <span className='text-yellow-200 font-bold'>day</span> and a designer / developer of cool bits and bobs by <span className='text-blue-400 font-bold'>night</span>. I pride myself on my entrepreneurial nature and enjoy learning new technologies by diving straight into fun projects across all kinds of verticals.
				</p>
			</div>
		</div>
	)
}
