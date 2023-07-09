import React from 'react'
import Scroll from '../Scroll/Scroll'

export default function Intro() {
	return (
		<div className='flex flex-col w-full max-h-[90vh] h-full items-center py-24'>
			<div className='flex w-full max-w-[2040px] h-screen flex-col justify-evenly mb-36 md:flex-row md:items-center ' >
				<div className='flex flex-col space-y-8 items-center md:flex-1 md:items-start '>
					<p className='text-xl lg:text-4xl'>Hello! My Name is</p>
					<h1 className='text-6xl lg:text-9xl font-bold'>Jerry Zhou</h1>
				</div>
				<div className='flex mx-8 justify-center'>
					<div className=' w-96 h-96 bg-hoki rounded-full'></div>
				</div>
			</div>
			<Scroll></Scroll>
		</div>
	)
}
