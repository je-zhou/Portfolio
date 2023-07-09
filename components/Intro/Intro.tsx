import React from 'react'

export default function Intro() {
	return (
		<div className='flex w-screen max-w-8xl h-screen p-12 md:p-20 md:items-center 2xl:px-64 flex-col md:flex-row snap-start'>
			<div className='flex flex-col md:flex-1 space-y-8 items-center md:items-start mb-72'>
				<p className='md:text-xl lg:text-4xl'>Hello! My Name is</p>
				<h1 className='text-6xl lg:text-9xl font-bold'>Jerry Zhou</h1>
			</div>
			<div className='flex mx-8 justify-center md:mb-72'>
				<div className=' w-64 h-64 bg-hoki rounded-full'></div>
			</div>
		</div>



	)
}
