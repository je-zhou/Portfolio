import React from 'react'
import MyCryptoPocket from './MyCryptoPocket'


export default function Projects2021() {
	return (
		<div className='w-[95vw] flex flex-col-reverse lg:flex-row justify-end items-center lg:items-start relative'>
			<div className='flex flex-1 flex-col w-full items-end'>
				<MyCryptoPocket></MyCryptoPocket>
			</div>
			<div className='hidden md:sticky py-4 lg:pt-24 top-0 text-xl lg:text-[3vw] font-bold underline w-full lg:w-fit px-4 text-charade dark:text-white'>2021</div>
		</div>
	)
}
