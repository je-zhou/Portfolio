import React from 'react'
import Scroll from '../Scroll/Scroll'
import Avatar from './Avatar'

export default function Intro() {
	return (
		<div className='flex flex-col w-full max-h-[90vh] h-full items-center bg-blue-600'>
			<div className='flex w-full max-w-[2040px] h-screen flex-col justify-evenly md:flex-row md:items-center bg-green-400' >
				<div className='flex flex-col space-y-8 items-center md:flex-1 md:items-start'>
					<p className='text-xl lg:text-4xl'>Hello! My Name is</p>
					<h1 className='text-6xl lg:text-9xl font-bold'>Jerry Zhou</h1>
				</div>
				<div className='w-1/3 h-1/2 bg-yellow-500 flex justify-center items-center'>
					<Avatar></Avatar>
				</div>

			</div>
			<Scroll></Scroll>
		</div>
	)
}
